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

#ifndef STRINGS_JOIN_H_
#define STRINGS_JOIN_H_

#include <string>
#include <vector>

#include "absl/strings/str_join.h"

inline void JoinStrings(const std::vector<std::string>& parts,
                        const char* delim, std::string* result) {
  *result = absl::StrJoin(parts, delim);
}

#endif  // STRINGS_JOIN_H_
