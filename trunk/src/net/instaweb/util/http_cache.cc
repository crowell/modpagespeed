/**
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Author: jmarantz@google.com (Joshua Marantz)

#include "net/instaweb/util/public/http_cache.h"
#include "net/instaweb/util/public/cache_interface.h"
#include "net/instaweb/util/public/http_value.h"
#include "net/instaweb/util/public/message_handler.h"
#include "net/instaweb/util/public/meta_data.h"
#include "net/instaweb/util/public/shared_string.h"
#include "net/instaweb/util/public/simple_meta_data.h"
#include "net/instaweb/util/public/timer.h"

namespace net_instaweb {

namespace {

// Remember that a Fetch failed for 5 minutes.
// TODO(jmarantz): consider allowing this to be configurable.
//
// TODO(jmarantz): We could handle cc-private a little differently:
// in this case we could arguably remember it using the original cc-private ttl.
const char kRememberNotFoundCacheControl[] = "max-age=300";

}  // namespace


HTTPCache::~HTTPCache() {}

bool HTTPCache::IsCurrentlyValid(const MetaData& headers) {
  if (force_caching_) {
    return true;
  }
  if (!headers.IsCacheable() || !headers.IsProxyCacheable()) {
    // TODO(jmarantz): Should we have a separate 'force' bit that doesn't
    // expired resources to be valid, but does ignore cache-control:private?
    return false;
  }
  return headers.CacheExpirationTimeMs() > timer_->NowMs();
}

HTTPCache::FindResult HTTPCache::Find(
    const std::string& key, HTTPValue* value, MetaData* headers,
    MessageHandler* handler) {
  SharedString cache_buffer;

#define CACHE_SPEW 0
#if CACHE_SPEW
  int64 start_us = timer_->NowUs();
#endif

  FindResult ret = kNotFound;

  if ((cache_->Get(key, &cache_buffer) &&
       value->Link(&cache_buffer, headers, handler))) {
    if (IsCurrentlyValid(*headers)) {
      if (headers->status_code() == HttpStatus::kRememberNotFoundStatusCode) {
        long remember_not_found_time_ms = headers->CacheExpirationTimeMs()
            - timer_->NowMs();
        handler->Info(key.c_str(), 0,
                      "HTTPCache: remembering not-found status for %ld seconds",
                      (remember_not_found_time_ms) / 1000);
        ret = kRecentFetchFailedDoNotRefetch;
      } else {
        ret = kFound;
      }
    }
  }

#if CACHE_SPEW
  long delta_us = timer_->NowUs() - start_us;
  handler->Info(key.c_str(), 0, "%ldus: HTTPCache::Get: %s (%d bytes)",
                delta_us, ret ? "HIT" : "MISS",
                static_cast<int>(key.size() + value->size()));
#endif

  if (ret != kFound) {
    headers->Clear();
    value->Clear();
  }
  return ret;
}

void HTTPCache::RememberNotCacheable(const std::string& key,
                                     MessageHandler* handler) {
  SimpleMetaData headers;
  headers.set_status_code(HttpStatus::kRememberNotFoundStatusCode);
  headers.Add(HttpAttributes::kCacheControl, kRememberNotFoundCacheControl);
  int64 now_ms = timer_->NowMs();
  headers.UpdateDateHeader(HttpAttributes::kDate, now_ms);
  headers.ComputeCaching();
  headers.set_headers_complete(true);
  Put(key, headers, "", handler);
}

void HTTPCache::Put(const std::string& key, HTTPValue* value,
                    MessageHandler* handler) {
  SharedString* shared_string = value->share();
  cache_->Put(key, shared_string);
}

void HTTPCache::Put(const std::string& key, const MetaData& headers,
                    const StringPiece& content,
                    MessageHandler* handler) {
  if (!IsCurrentlyValid(headers)) {
    return;
  }

  HTTPValue value;
  value.SetHeaders(headers);
  value.Write(content, handler);
  Put(key, &value, handler);
}

CacheInterface::KeyState HTTPCache::Query(const std::string& key) {
  return cache_->Query(key);
}

void HTTPCache::Delete(const std::string& key) {
  return cache_->Delete(key);
}

}  // namespace net_instaweb
