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

(function(){window.pagespeed=window.pagespeed||{};var f=window.pagespeed;function h(c,a,e,b){this.f=c;this.a=a;this.b=e;this.g=b}f.beaconUrl="";
function k(c){var a=c.f,e=window.mod_pagespeed_start,b=Number(new Date)-e,a=a+(-1==a.indexOf("?")?"?":"&"),a=a+"ets="+("load"==c.a?"load:":"unload:");if("beforeunload"!=c.a||!window.mod_pagespeed_loaded){a=a+b+("&r"+c.a+"=");if(window.performance){var b=window.performance.timing,d=b.navigationStart,g=b.requestStart,a=a+(b[c.a+"EventStart"]-d),a=a+("&nav="+(b.fetchStart-d)),a=a+("&dns="+(b.domainLookupEnd-b.domainLookupStart)),a=a+("&connect="+(b.connectEnd-b.connectStart)),a=a+("&req_start="+(g-d))+
("&ttfb="+(b.responseStart-g)),a=a+("&dwld="+(b.responseEnd-b.responseStart)),a=a+("&dom_c="+(b.domContentLoadedEventStart-d));window.performance.navigation&&(a+="&nt="+window.performance.navigation.type);d=-1;b.msFirstPaint?d=b.msFirstPaint:window.chrome&&window.chrome.loadTimes&&(d=Math.floor(1E3*window.chrome.loadTimes().firstPaintTime));d-=g;0<=d&&(a+="&fp="+d)}else a+=b;f.getResourceTimingData&&window.parent==window&&(a+=f.getResourceTimingData());a+=window.parent!=window?"&ifr=1":"&ifr=0";"load"==
c.a&&(window.mod_pagespeed_loaded=!0,(b=window.mod_pagespeed_num_resources_prefetched)&&(a+="&nrp="+b),(b=window.mod_pagespeed_prefetch_start)&&(a+="&htmlAt="+(e-b)));f.criticalCss&&(e=f.criticalCss,a+="&ccis="+e.total_critical_inlined_size+"&cces="+e.total_original_external_size+"&ccos="+e.total_overhead_size+"&ccrl="+e.num_replaced_links+"&ccul="+e.num_unreplaced_links);a+="&dpr="+window.devicePixelRatio;""!=c.b&&(a+=c.b);document.referrer&&(a+="&ref="+encodeURIComponent(document.referrer));a+=
"&url="+encodeURIComponent(c.g);f.beaconUrl=a;(new Image).src=a}}f.c=function(c,a,e,b){var d=new h(c,a,e,b);window.addEventListener?window.addEventListener(a,function(){k(d)},!1):window.attachEvent("on"+a,function(){k(d)})};f.addInstrumentationInit=f.c;})();
