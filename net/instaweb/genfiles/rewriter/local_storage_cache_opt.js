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

(function(){function d(b){var a=window;if(a.addEventListener)a.addEventListener("load",b,!1);else if(a.attachEvent)a.attachEvent("onload",b);else{var c=a.onload;a.onload=function(){b.call(this);c&&c.call(this)}}}var p=Date.now||function(){return+new Date};window.pagespeed=window.pagespeed||{};var q=window.pagespeed;function r(){this.a=!0}r.prototype.c=function(b){b=parseInt(b.substring(0,b.indexOf(" ")),10);return!isNaN(b)&&b<=p()};r.prototype.hasExpired=r.prototype.c;r.prototype.b=function(b){return b.substring(b.indexOf(" ",b.indexOf(" ")+1)+1)};r.prototype.getData=r.prototype.b;r.prototype.f=function(b){var a=document.getElementsByTagName("script"),a=a[a.length-1];a.parentNode.replaceChild(b,a)};r.prototype.replaceLastScript=r.prototype.f;
r.prototype.g=function(b){var a=window.localStorage.getItem("pagespeed_lsc_url:"+b),c=document.createElement(a?"style":"link");a&&!this.c(a)?(c.type="text/css",c.appendChild(document.createTextNode(this.b(a)))):(c.rel="stylesheet",c.href=b,this.a=!0);this.f(c)};r.prototype.inlineCss=r.prototype.g;
r.prototype.h=function(b,a){var c=window.localStorage.getItem("pagespeed_lsc_url:"+b+" pagespeed_lsc_hash:"+a),f=document.createElement("img");c&&!this.c(c)?f.src=this.b(c):(f.src=b,this.a=!0);for(var c=2,k=arguments.length;c<k;++c){var g=arguments[c].indexOf("=");f.setAttribute(arguments[c].substring(0,g),arguments[c].substring(g+1))}this.f(f)};r.prototype.inlineImg=r.prototype.h;
function t(b,a,c,f){a=document.getElementsByTagName(a);for(var k=0,g=a.length;k<g;++k){var e=a[k],m=e.getAttribute("data-pagespeed-lsc-hash"),h=e.getAttribute("data-pagespeed-lsc-url");if(m&&h){h="pagespeed_lsc_url:"+h;c&&(h+=" pagespeed_lsc_hash:"+m);var l=e.getAttribute("data-pagespeed-lsc-expiry"),l=l?(new Date(l)).getTime():"",e=f(e);if(!e){var n=window.localStorage.getItem(h);n&&(e=b.b(n))}e&&(window.localStorage.setItem(h,l+" "+m+" "+e),b.a=!0)}}}
function u(b){t(b,"img",!0,function(a){return a.src});t(b,"style",!1,function(a){return a.firstChild?a.firstChild.nodeValue:null})}
q.i=function(){if(window.localStorage){var b=new r;q.localStorageCache=b;d(function(){u(b)});d(function(){if(b.a){for(var a=[],c=[],f=0,k=p(),g=0,e=window.localStorage.length;g<e;++g){var m=window.localStorage.key(g);if(!m.indexOf("pagespeed_lsc_url:")){var h=window.localStorage.getItem(m),l=h.indexOf(" "),n=parseInt(h.substring(0,l),10);if(!isNaN(n))if(n<=k){a.push(m);continue}else if(n<f||!f)f=n;c.push(h.substring(l+1,h.indexOf(" ",l+1)))}}k="";f&&(k="; expires="+(new Date(f)).toUTCString());document.cookie=
"_GPSLSC="+c.join("!")+k;g=0;for(e=a.length;g<e;++g)window.localStorage.removeItem(a[g]);b.a=!1}})}};q.localStorageCacheInit=q.i;})();
