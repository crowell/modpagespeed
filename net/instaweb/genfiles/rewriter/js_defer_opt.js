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

(function(){function g(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var d=a["on"+b];a["on"+b]=function(){c.call(this);d&&d.call(this)}}};window.pagespeed=window.pagespeed||{};var h=window.pagespeed;h.deferJsNs={};var l=h.deferJsNs;
function m(){this.s=[];this.m=[];this.w=this.o=0;this.A=[];this.i="";this.u={};this.L="application/ecmascript application/javascript application/x-ecmascript application/x-javascript text/ecmascript text/javascript text/javascript1.0 text/javascript1.1 text/javascript1.2 text/javascript1.3 text/javascript1.4 text/javascript1.5 text/jscript text/livescript text/x-ecmascript text/x-javascript".split(" ");this.f=!0;this.W=document.getElementById;this.H=document.getElementsByTagName;this.V=document.write;
this.U=document.open;this.T=document.close;this.R=document.addEventListener;this.X=window.addEventListener;this.S=document.attachEvent;this.Y=window.attachEvent;this.j=document.createElement;this.a=n;this.I=p;this.l=this.G=!0;this.c=null;this.B=0;this.C=[];this.b=this.g="";this.D=-1}var q=!1,n=0,p=0;m.prototype.log=function(a,b){this.m&&(this.m.push(""+a),b&&(this.m.push(b.message),"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log("PSA ERROR: "+a+b.message)))};
function t(a,b,c){a.s.splice(c?c:a.s.length,0,b)}function u(a,b,c){c=v(a,c);c.text=b;c.setAttribute("type","text/javascript");a=w(a);a.parentNode.insertBefore(c,a);return c}
function x(a){for(var b=document.getElementsByTagName("*"),c="",d=0;d<b.length;d++)if(b[d].hasAttribute("id")){var e=b[d].getAttribute("id");if(e&&-1==e.search(/[-:.]/)&&-1==e.search(/^[0-9]/))try{window[e]&&window[e].tagName&&(c+="var "+e+'=document.getElementById("'+e+'");')}catch(f){a.log("Exception while evaluating.",f)}}c&&(a=u(a,c),a.setAttribute("psa_not_processed",""),a.setAttribute("priority_psa_not_processed",""))}
function y(a,b,c,d){var e=b.getAttribute("data-pagespeed-orig-src")||b.getAttribute("src");e?(d&&(d=a.j.call(document,"link"),d.setAttribute("rel","preload"),d.setAttribute("as","script"),d.setAttribute("href",e),document.head.appendChild(d)),a.F(e,b,c)):a.K(b.innerHTML||b.textContent||b.data||"",b,c)}
m.prototype.K=function(a,b,c){if(-1!=navigator.userAgent.indexOf("Firefox"))this.F("data:text/javascript,"+encodeURIComponent(a),b,c);else{this.m.push("Add to queue str: "+a);var d=this;t(this,function(){z(d,b);A(d).setAttribute("psa_current_node","");try{u(d,a,b)}catch(e){d.log("Exception while evaluating.",e)}d.log("Evaluated: "+a);B(d)},c)}};m.prototype.addStr=m.prototype.K;
function v(a,b){var c=a.j.call(document,"script");if(b)for(var d=b.attributes,e=d.length-1;0<=e;--e)"type"!=d[e].name&&"src"!=d[e].name&&"async"!=d[e].name&&"defer"!=d[e].name&&"data-pagespeed-orig-type"!=d[e].name&&"data-pagespeed-orig-src"!=d[e].name&&"data-pagespeed-orig-index"!=d[e].name&&"psa_current_node"!=d[e].name&&d[e].name!=a.b&&(c.setAttribute(d[e].name,d[e].value),b.removeAttribute(d[e].name));return c}
function D(a,b){function c(){if(document.querySelector){var d=document.querySelector("[psa_to_be_deleted]");d&&d.parentNode.removeChild(d)}a.log("Executed: "+b);B(a)}var d=a.j.call(document,"script");d.setAttribute("type","text/javascript");d.async=!1;d.setAttribute("psa_to_be_deleted","");d.setAttribute("psa_not_processed","");d.setAttribute("priority_psa_not_processed","");l.h(d,c);g(d,"error",c);d.src="data:text/javascript,"+encodeURIComponent("window.pagespeed.psatemp=0;");var e=w(a);e.parentNode.insertBefore(d,
e)}
m.prototype.F=function(a,b,c){this.m.push("Add to queue url: "+a);var d=this;t(this,function(){z(d,b);var c=v(d,b);c.setAttribute("type","text/javascript");var f=!0;"async"in c?c.async=!1:c.readyState&&(f=!1,g(c,"readystatechange",function(){if("complete"==c.readyState||"loaded"==c.readyState)c.onreadystatechange=null,d.log("Executed: "+a),B(d)}));c.setAttribute("src",a);var k=b.innerHTML||b.textContent||b.data;k&&c.appendChild(document.createTextNode(k));k=A(d);k.setAttribute("psa_current_node","");
k.parentNode.insertBefore(c,k);f&&D(d,a)},c)};m.prototype.addUrl=m.prototype.F;function z(a,b){if(document.querySelectorAll&&!(8>=E()))for(var c=document.querySelectorAll("["+a.b+"]"),d=0;d<c.length;d++){var e=c.item(d);if(e==b)break;e.getAttribute("type")!=a.g&&e.removeAttribute(a.b)}}function F(a){for(var b=a.H.call(document,"*"),c=0;c<b.length;c++)b.item(c).setAttribute(a.b,"")}function A(a){var b=null;document.querySelector&&(b=document.querySelector('[type="'+a.g+'"]'));return b}
function w(a){var b;document.querySelector&&(b=document.querySelector("[psa_current_node]"));return b||a.H.call(document,"psanode")[0]}
function G(a){5<=a.a||(a.l&&H(a)&&(E()&&document.documentElement.originalDoScroll&&(document.documentElement.doScroll=document.documentElement.originalDoScroll),Object.defineProperty&&delete document.readyState,E()&&Object.defineProperty&&delete document.all),a.f=!1,a.l?(a.a=5,H(a)?"complete"!=document.readyState?l.h(window,function(){I(a)}):(document.onreadystatechange&&J(a,document.onreadystatechange,document),window.onload&&(K(window,"onload",window.onload),window.onload=null),I(a)):L(a)):(a.a=
1,a.G=!1,a.c&&H(a)?(h.deferJs=h.highPriorityDeferJs,h.deferJs=h.highPriorityDeferJs,J(a,a.c),a.c=null):L(a)))}
function I(a){if(H(a)){var b;document.querySelectorAll&&(b=document.querySelectorAll("[data-pagespeed-onload][data-pagespeed-loaded]"));for(var c=0;c<b.length;c++){var d=b.item(c),e="var psaFunc=function() {"+d.getAttribute("data-pagespeed-onload")+"};";window.eval.call(window,e);"function"!=typeof window.psaFunc?a.log("Function is not defined",Error("")):K(d,"onload",window.psaFunc)}I(h.highPriorityDeferJs)}M(a,3);if(H(a)){c=document.body.getElementsByTagName("psanode");for(b=c.length-1;0<=b;b--)document.body.removeChild(c[b]);
c=document.body.getElementsByClassName("psa_prefetch_container");for(b=c.length-1;0<=b;b--)c[b].parentNode.removeChild(c[b])}a.a=6;M(a,4)}function L(a){window.setTimeout(function(){h.deferJs=h.lowPriorityDeferJs;h.deferJs=h.lowPriorityDeferJs;a.c?(h.deferJs.registerScriptTags(a.c,a.D),a.c=null):h.deferJs.registerScriptTags();h.deferJs.v()},0)}
function N(a){for(var b=0,c=a.length,d=0;d<c;++d){var e=a[d],f=e.parentNode,k=e.src,r=e.textContent;if(!(f=8<E()&&(!f||""==k&&""==r))){if(!(f=E())){a:{for(;e=e.parentNode;)if(e==document){e=!0;break a}e=!1}f=e&&""!=k}f=!f}f&&b++}return b}function O(a){if(4!=a.a)return!1;var b=0;a.w&&(b=N(a.A));return a.w==b?!0:!1}m.prototype.Z=function(){return 6===this.a};m.prototype.scriptsAreDone=m.prototype.Z;
function B(a){Q(a);var b=w(a);"SCRIPT"==b.nodeName&&b.parentNode.removeChild(b);a.o<a.s.length?(a.o++,a.s[a.o-1].call(window)):a.l?(a.a=4,z(a),M(a,2),O(a)&&G(a)):G(a)}function R(a){for(var b=[],c=a.length,d=0;d<c;++d)b.push(a.item(d));return b}
function S(a){if(a.G&&!H(a)){var b=document.createElement("psanode");b.setAttribute("psa_dw_target","true");document.body.appendChild(b);E()&&x(a);if(Object.defineProperty)try{var c={configurable:!0,get:function(){return 4<=a.a?"interactive":"loading"}};Object.defineProperty(document,"readyState",c)}catch(d){a.log("Exception while overriding document.readyState.",d)}if(E()&&(document.documentElement.originalDoScroll=document.documentElement.doScroll,document.documentElement.doScroll=function(){throw"psa exception";
},Object.defineProperty))try{c={configurable:!0,get:function(){}},Object.defineProperty(document,"all",c)}catch(d){a.log("Exception while overriding document.all.",d)}}T(a);document.writeln=function(b){U(a,b+"\n")};document.write=function(b){U(a,b)};document.open=function(){a.f||a.U.call(document)};document.close=function(){a.f||a.T.call(document)};document.getElementById=function(b){Q(a);b=a.W.call(document,b);return!b||b.hasAttribute(a.b)?null:b};!document.querySelectorAll||8>=E()||(document.getElementsByTagName=
function(b){if(a.f)try{return document.querySelectorAll(b+":not(["+a.b+"])")}catch(e){}return a.H.call(document,b)});document.createElement=function(b){var c=a.j.call(document,b);a.f&&"script"==b.toLowerCase()&&(a.A.push(c),a.w++,b=function(){a.w--;var b=a.A.indexOf(this);-1!=b&&(a.A.splice(b,1),O(a)&&G(a))},l.h(c,b),g(c,"error",b));return c}}m.prototype.v=function(){if(2==this.a){var a=0;this.B&&(a=N(this.C));this.B==a&&this.run()}};m.prototype.execute=m.prototype.v;
m.prototype.run=function(){2==this.a&&(this.G&&M(this,1),this.a=3,S(this),B(this))};m.prototype.run=m.prototype.run;function V(a,b){if("SCRIPT"!=b.nodeName)return!1;if(b.hasAttribute("type")){var c=b.getAttribute("type");return!c||-1!=a.L.indexOf(c)}return b.hasAttribute("language")?(c=b.getAttribute("language"),!c||-1!=a.L.indexOf("text/"+c.toLowerCase())):!0}
function W(a,b,c){if(b.childNodes){b=R(b.childNodes);for(var d=b.length,e=0;e<d;++e){var f=b[e];"SCRIPT"==f.nodeName?V(a,f)&&(c.push(f),f.setAttribute("data-pagespeed-orig-type",f.type),f.setAttribute("type",a.g),f.setAttribute("data-pagespeed-orig-src",f.src),f.setAttribute("src",""),f.setAttribute(a.b,"")):W(a,f,c)}}}
function Q(a){if(""!=a.i){a.log("handle_dw: "+a.i);var b=a.i;a.i="";var c=w(a),d=a.o,e=a.j.call(document,"div");e.innerHTML="<div>_</div>"+b;e.removeChild(e.firstChild);b=[];W(a,e,b);if(c)for(var e=R(e.childNodes),f=e.length,k=c.parentNode,r=0;r<f;++r){var C=e[r],P=C.parentNode;P&&P.removeChild(C);k.insertBefore(C,c)}else a.log("Unable to insert nodes, no context element found");c=b.length;for(e=0;e<c;++e)y(a,b[e],d+e,!!e)}}function U(a,b){a.f?(a.log("dw: "+b),a.i+=b):a.V.call(document,b)}
m.prototype.O=function(a){K(window,"onbeforescripts",a)};m.prototype.addBeforeDeferRunFunctions=m.prototype.O;m.prototype.N=function(a){K(window,"onafterscripts",a)};m.prototype.addAfterDeferRunFunctions=m.prototype.N;function M(a,b){a.I=b;a.log("Firing Event: "+b);for(var c=a.u[b]||[],d=0;d<c.length;++d)J(a,c[d]);c.length=0}function J(a,b,c){try{b.call(c||window)}catch(d){a.log("Exception while evaluating.",d)}}
function T(a){window.addEventListener?(document.addEventListener=function(b,c,d){K(document,b,c,a.R,d)},window.addEventListener=function(b,c,d){K(window,b,c,a.X,d)}):window.attachEvent&&(document.attachEvent=function(b,c){K(document,b,c,a.S)},window.attachEvent=function(b,c){K(window,b,c,a.Y)})}
function K(a,b,c,d,e){var f=h.deferJs;if(5<=f.a){if(d){d.call(a,b,c,e);return}if(6<=f.a)return}var k;if(2>f.I&&("DOMContentLoaded"==b||"readystatechange"==b||"onDOMContentLoaded"==b||"onreadystatechange"==b))b=2,k="DOMContentLoaded";else if(3>f.I&&("load"==b||"onload"==b))b=3,k="load";else if("onbeforescripts"==b)b=1;else if("onafterscripts"==b)b=4;else{d&&d.call(a,b,c,e);return}f.u[b]||(f.u[b]=[]);f.u[b].push(function(){var b={bubbles:!1,cancelable:!1,eventPhase:2};b.timeStamp=(new Date).getTime();
b.type=k;b.target=a!=window?a:document;b.currentTarget=a;c.call(a,b)})}
m.prototype.registerScriptTags=function(a,b){if(!(2<=this.a)){if(a){if(!q){a();return}this.l=!1;this.c=a;b&&(this.D=b)}else this.l=!0;this.a=2;for(var c=document.getElementsByTagName("script"),d=c.length,e=0;e<d;++e){var f=this.s.length==this.o,k=c[e];k.getAttribute("type")==this.g&&(a?k.getAttribute("data-pagespeed-orig-index")<=this.D&&y(this,k,void 0,!f):(k.getAttribute("data-pagespeed-orig-index")<this.D&&this.log("Executing a script twice. Orig_Index: "+k.getAttribute("data-pagespeed-orig-index"),
Error("")),y(this,k,void 0,!f)))}}};m.prototype.registerScriptTags=m.prototype.registerScriptTags;l.h=function(a,b){g(a,"load",b)};h.addOnload=l.h;function E(){var a=/(?:MSIE.(\d+\.\d+))/.exec(navigator.userAgent);return a&&a[1]?document.documentMode||parseFloat(a[1]):NaN}function H(a){return"text/psajs"==a.g?!0:!1}
function X(){var a=h.deferJs;document.createElement=function(b){var c=a.j.call(document,b);a.f&&"script"==b.toLowerCase()&&(a.C.push(c),a.B++,b=function(){var b=a.C.indexOf(this);-1!=b&&(a.C.splice(b,1),a.B--,a.v())},l.h(c,b),g(c,"error",b));return c}}m.prototype.P=function(){return q};m.prototype.isExperimentalMode=m.prototype.P;
l.$=function(){h.deferJs||(q=h.defer_js_experimental,h.highPriorityDeferJs=new m,h.highPriorityDeferJs.g="text/prioritypsajs",h.highPriorityDeferJs.b="priority_psa_not_processed",F(h.highPriorityDeferJs),h.lowPriorityDeferJs=new m,h.lowPriorityDeferJs.g="text/psajs",h.lowPriorityDeferJs.b="psa_not_processed",F(h.lowPriorityDeferJs),h.deferJs=h.highPriorityDeferJs,X(),h.deferJs=h.deferJs)};l.$();h.M=!1;l.J=function(){h.M||(h.M=!0,h.deferJs.registerScriptTags(),h.deferJs.v())};l.startDeferJs=l.J;
g(document,"DOMContentLoaded",l.J);l.h(window,l.J);})();
