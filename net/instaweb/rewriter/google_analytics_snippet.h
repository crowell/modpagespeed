/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// DO NOT EDIT. Generated by ./google_analytics_snippet_gen.py

#ifndef NET_INSTAWEB_REWRITER_GOOGLE_ANALYTICS_SNIPPET_H_
#define NET_INSTAWEB_REWRITER_GOOGLE_ANALYTICS_SNIPPET_H_

namespace net_instaweb {

const char kGaSnippetGetTracker[] = "_modpagespeed_getRewriteTracker(";

const char kGaSnippetPrefix[] =
    "var _gaq = _gaq || [];\n"
    "(function(){\n"
    "  function functionName(fn) {\n"
    "    var name = /\\W*function\\s+([\\w\\$]+)\\(/.exec(fn);\n"
    "    if (!name)\n"
    "      return 'No name';\n"
    "    return name[1];\n"
    "  }\n"
    "  var nameSpace = '_gat';\n"
    "  var existingGat = window[nameSpace];\n"
    "  if (existingGat && typeof existingGat['_getTracker'] == 'function') {\n"
    "    return;\n"
    "  }\n"
    "\n"
    "  var gaqAccounts = [];\n"
    "  function setAccount(acct, prefix) {\n"
    "    if (gaqAccounts[prefix] != acct) {\n"
    "      gaqAccounts[prefix] = acct;\n"
    "      _gaq.push([prefix + '_setAccount', acct]);\n"
    "    }\n"
    "  }\n"
    "\n"
    "  window['_modpagespeed_getRewriteTracker'] = function(tracker_acct,\n"
    "                                                       tracker_name) {\n"
    "    var prefix = tracker_name ? tracker_name + '.' : '';\n"
    "\n"
    "    function deferTrackerFunc(fn) {\n"
    "      return function() {\n"
    "        setAccount(tracker_acct, prefix);\n"
    "        var pushArgs = [fn];\n"
    "        [].push.apply(pushArgs, arguments);\n"
    "        _gaq.push(pushArgs);\n"
    "      };\n"
    "    }\n"
    "    var pageTrackerMethodNames = [\n";

const char kGaSnippetSuffix[] =
    "    ];\n"
    "    var pageTracker = {\n"
    "      _initData: function() {},\n"
    "    };\n"
    "    for (var i=pageTrackerMethodNames.length; i--;) {\n"
    "      var n = pageTrackerMethodNames[i];\n"
    "      pageTracker[n] = deferTrackerFunc(prefix + n);\n"
    "    }\n"
    "    return pageTracker;\n"
    "  };\n"
    "\n"
    "  var ga = document.createElement('script');\n"
    "  ga.type = 'text/javascript'; ga.async = true;\n"
    "  ga.src = ('https:' == document.location.protocol ? 'https://ssl' :\n"
    "            'http://www') + '.google-analytics.com/ga.js';\n"
    "  var s = document.getElementsByTagName('script')[0];\n"
    "  s.parentNode.insertBefore(ga, s);\n"
    "})();\n";
}  // namespace net_instaweb

#endif  // NET_INSTAWEB_REWRITER_GOOGLE_ANALYTICS_SNIPPET_H_
