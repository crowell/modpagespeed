/*
 * Copyright 2012 Google Inc.
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

// Author: marq@google.com (Mark Cogan)

#include "net/instaweb/http/public/log_record.h"

#include <set>

#include "base/logging.h"
#include "net/instaweb/http/public/logging_proto_impl.h"
#include "net/instaweb/util/public/abstract_mutex.h"
#include "net/instaweb/util/public/string.h"
#include "net/instaweb/util/public/string_util.h"

namespace net_instaweb {

const char kRewriterIdSeparator[] = ",";

LogRecord::LogRecord(AbstractMutex* mutex) : mutex_(mutex) {
  InitLogging();
}

// Non-initializing constructor for subclasses to invoke.
LogRecord::LogRecord()
    : logging_info_(NULL),
      mutex_(NULL) {
}

void LogRecord::InitLogging() {
  logging_info_.reset(new LoggingInfo);
}

LogRecord::~LogRecord() {
  mutex_->DCheckUnlocked();
  // Please do not add non-diagnostic functionality here.
  //
  // LogRecords are typically owned by reference counted objects, and
  // doing work in the dtor will result in actions being taken at
  // unpredictable times, leading to difficult to diagnose performance
  // and correctness bugs.
}

void LogRecord::set_mutex(AbstractMutex* m) {
  CHECK(mutex_.get() == NULL);
  mutex_.reset(m);
}

LoggingInfo* LogRecord::logging_info() {
  return logging_info_.get();
}

int LogRecord::AddPropertyCohortInfo(const GoogleString& cohort) {
  ScopedMutex lock(mutex_.get());
  PropertyCohortInfo* cohort_info =
      logging_info()->mutable_property_page_info()->add_cohort_info();
  cohort_info->set_name(cohort);
  return logging_info()->property_page_info().cohort_info_size() - 1;
}

void LogRecord::AddFoundPropertyToCohortInfo(
    int index, const GoogleString& property) {
  ScopedMutex lock(mutex_.get());
  logging_info()->mutable_property_page_info()->mutable_cohort_info(index)->
      add_properties_found(property);
}

void LogRecord::SetCacheStatusForCohortInfo(int index, bool found) {
  ScopedMutex lock(mutex_.get());
  logging_info()->mutable_property_page_info()->mutable_cohort_info(index)->
      set_is_cache_hit(found);
}

void LogRecord::SetDeviceAndCacheTypeForCohortInfo(int index, int device_type,
                                                   int cache_type) {
  ScopedMutex lock(mutex_.get());
  PropertyCohortInfo* cohort_info =
      logging_info()->mutable_property_page_info()->mutable_cohort_info(index);
  cohort_info->set_device_type(device_type);
  cohort_info->set_cache_type(cache_type);
}

void LogRecord::LogAppliedRewriter(const char* rewriter_id) {
  ScopedMutex lock(mutex_.get());
  LogAppliedRewriterImpl(rewriter_id);
}

void LogRecord::LogAppliedRewriterImpl(const char* rewriter_id) {
  mutex_->DCheckLocked();
  if (strlen(rewriter_id) > 0) {
    NewRewriterInfoImpl(rewriter_id, RewriterInfo::APPLIED_OK);
  }
}

RewriterInfo* LogRecord::NewRewriterInfo(const char* rewriter_id) {
  ScopedMutex lock(mutex_.get());
  return NewRewriterInfoImpl(rewriter_id, RewriterInfo::UNKNOWN_STATUS);
}

RewriterInfo* LogRecord::NewRewriterInfoImpl(const char* rewriter_id,
                                             int status) {
  DCHECK(RewriterInfo::RewriterApplicationStatus_IsValid(status));
  mutex_->DCheckLocked();
  RewriterInfo* rewriter_info = logging_info()->add_rewriter_info();
  rewriter_info->set_id(rewriter_id);
  rewriter_info->set_status(
      static_cast<RewriterInfo::RewriterApplicationStatus>(status));
  // Interim measure to preserve the applied_rewriters string.
  // TODO(marq): Remove when applied_rewriters is fully deprecated.
  if (status == RewriterInfo::APPLIED_OK) {
    logging_info()->set_applied_rewriters(AppliedRewritersString());
  }
  return rewriter_info;
}

void LogRecord::SetRewriterLoggingStatus(
    RewriterInfo* rewriter_info, int status) {
  DCHECK(RewriterInfo::RewriterApplicationStatus_IsValid(status));
  mutex_->DCheckLocked();
  DCHECK_EQ(RewriterInfo::UNKNOWN_STATUS, rewriter_info->status()) <<
    "Only RewriterInfo messages with UNKNOWN_STATUS may have their status set.";
  rewriter_info->set_status(
      static_cast<RewriterInfo::RewriterApplicationStatus>(status));
  // Interim measure to preserve the applied_rewriters string.
  // TODO(marq): Remove when applied_rewriters is fully deprecated.
  if (status == RewriterInfo::APPLIED_OK) {
    logging_info()->set_applied_rewriters(AppliedRewritersString());
  }
}

void LogRecord::SetBlinkRequestFlow(int flow) {
  DCHECK(BlinkInfo::BlinkRequestFlow_IsValid(flow));
  ScopedMutex lock(mutex_.get());
  logging_info()->mutable_blink_info()->set_blink_request_flow(
      static_cast<BlinkInfo::BlinkRequestFlow>(flow));
}

void LogRecord::SetIsOriginalResourceCacheable(bool cacheable) {
  ScopedMutex lock(mutex_.get());
  logging_info()->set_is_original_resource_cacheable(cacheable);
}

void LogRecord::SetTimingRequestStartMs(int64 ms) {
  ScopedMutex lock(mutex_.get());
  logging_info()->mutable_timing_info()->set_request_start_ms(ms);
}

void LogRecord::SetTimingFetchMs(int64 ms) {
  ScopedMutex lock(mutex_.get());
  logging_info()->mutable_timing_info()->set_fetch_ms(ms);
}

void LogRecord::UpdateTimingInfoWithFetchStartTime(int64 start_time_ms) {
  ScopedMutex lock(mutex_.get());
  TimingInfo* timing_info = logging_info()->mutable_timing_info();
  if (timing_info->has_request_start_ms()) {
    timing_info->set_time_to_start_fetch_ms(
      start_time_ms - timing_info->request_start_ms());
  }
}

void LogRecord::SetBlinkInfo(const GoogleString& user_agent) {
  ScopedMutex lock(mutex_.get());
  SetBlinkInfoImpl(user_agent);
}

bool LogRecord::WriteLog() {
  ScopedMutex lock(mutex_.get());
  return WriteLogImpl();
}

GoogleString LogRecord::AppliedRewritersString() {
  mutex_->DCheckLocked();
  StringSet applied_rewriters;
  for (int i = 0, e = logging_info()->rewriter_info_size();
       i < e; ++i) {
    RewriterInfo info = logging_info()->rewriter_info(i);
    if (info.status() == RewriterInfo::APPLIED_OK) {
      applied_rewriters.insert(info.id());
    }
  }
  GoogleString rewriters_str;
  for (StringSet::iterator begin = applied_rewriters.begin(),
       iter = applied_rewriters.begin(), end = applied_rewriters.end();
       iter != end; ++iter) {
    if (iter != begin) {
      StrAppend(&rewriters_str, kRewriterIdSeparator);
    }
    DCHECK((*iter).find(kRewriterIdSeparator) == GoogleString::npos) <<
       "No comma should appear in a rewriter ID";
    StrAppend(&rewriters_str, *iter);
  }
  return rewriters_str;
}


}  // namespace net_instaweb
