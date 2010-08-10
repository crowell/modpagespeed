# Copyright 2010 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

{
  'variables': {
    # chromium_code indicates that the code is not
    # third-party code and should be subjected to strict compiler
    # warnings/errors in order to catch programming mistakes.
    'chromium_code': 1,
    'mod_spdy_root': '<(DEPTH)/third_party/mod_spdy/src',
  },

  'targets': [
    {
      'target_name': 'mod_instaweb',
      'type': 'loadable_module',
      'dependencies': [
        'instaweb_html_rewriter.gyp:html_rewriter',
        '<(DEPTH)/base/base.gyp:base',
        '<(DEPTH)/third_party/apache/httpd/httpd.gyp:include',
      ],
      'include_dirs': [
        '<(DEPTH)',
        '<(mod_spdy_root)',
      ],
      'sources': [
        'apache/instaweb_handler.cc',
        'apache/mod_instaweb.cc',
        # TODO(lsong): Move this to a seperate gyp and depends on it.
        '<(mod_spdy_root)/mod_spdy/apache/log_message_handler.cc',
      ],
    },
  ],
}
