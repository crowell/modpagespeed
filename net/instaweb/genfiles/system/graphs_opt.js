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

(function(){for(var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m=["String","prototype","repeat"],n=0;n<m.length-1;n++){var ba=m[n];ba in l||(l[ba]={});l=l[ba]}
var ca=m[m.length-1],da=l[ca],ea=da?da:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};ea!=da&&null!=ea&&aa(l,ca,{configurable:!0,writable:!0,value:ea});var fa=fa||{},p=this;function ga(){}
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function t(a){return"string"==typeof a}var ha="closure_uid_"+(1E9*Math.random()>>>0),ia=0;function ja(a,b,c){return a.call.apply(a.bind,arguments)}function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return u.apply(null,arguments)}var la=Date.now||function(){return+new Date};function v(a,b){function c(){}c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Z=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}v(w,Error);w.prototype.name="CustomError";function ma(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function oa(a,b){return a<b?-1:a>b?1:0};function pa(a,b){b.unshift(a);w.call(this,ma.apply(null,b));b.shift()}v(pa,w);pa.prototype.name="AssertionError";function qa(a,b){throw new pa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var ra=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function sa(a){var b;a:{b=ta;for(var c=a.length,d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:t(a)?a.charAt(b):a[b]}
function ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var x;a:{var va=p.navigator;if(va){var wa=va.userAgent;if(wa){x=wa;break a}}x=""};var ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ya.length;f++)c=ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Aa(a){Aa[" "](a);return a}Aa[" "]=ga;function Ba(a,b){var c=Ca;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Da=-1!=x.indexOf("Opera"),y=-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"),Ea=-1!=x.indexOf("Edge"),Fa=-1!=x.indexOf("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&-1==x.indexOf("Edge"))&&!(-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"))&&-1==x.indexOf("Edge"),Ga=-1!=x.toLowerCase().indexOf("webkit")&&-1==x.indexOf("Edge");function Ha(){var a=p.document;return a?a.documentMode:void 0}var z;
a:{var Ia="",Ja=function(){var a=x;if(Fa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ea)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ga)return/WebKit\/(\S+)/.exec(a);if(Da)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ja&&(Ia=Ja?Ja[1]:"");if(y){var Ka=Ha();if(null!=Ka&&Ka>parseFloat(Ia)){z=String(Ka);break a}}z=Ia}var Ca={};
function La(a){return Ba(a,function(){for(var b=0,c=na(String(z)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;!b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=oa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||oa(0==g[2].length,0==h[2].length)||oa(g[2],h[2]);g=g[3];h=h[3]}while(!b)}return 0<=b})}var Ma;var Na=p.document;
Ma=Na&&y?Ha()||("CSS1Compat"==Na.compatMode?parseInt(z,10):5):void 0;var Oa;(Oa=!y)||(Oa=9<=Number(Ma));var Pa=Oa,Qa=y&&!La("9");function Ra(){0!=Sa&&(this[ha]||(this[ha]=++ia));this.F=this.F;this.S=this.S}var Sa=0;Ra.prototype.F=!1;function A(a,b){this.type=a;this.a=this.target=b}A.prototype.b=function(){};function B(a,b){A.call(this,a?a.type:"");this.f=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&Fa)try{Aa(c.nodeName)}catch(d){}this.f=a;a.defaultPrevented&&this.b()}}v(B,A);B.prototype.b=function(){B.Y.b.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Qa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var C="closure_listenable_"+(1E6*Math.random()|0),Ta=0;function Ua(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.A=!!d;this.B=e;++Ta;this.v=this.w=!1}function D(a){a.v=!0;a.listener=null;a.a=null;a.src=null;a.B=null};function E(a){this.src=a;this.a={};this.b=0}function Va(a,b,c,d,e){var f=b.toString();b=a.a[f];b||(b=a.a[f]=[],a.b++);var g=Wa(b,c,d,e);-1<g?(a=b[g],a.w=!1):(a=new Ua(c,a.src,f,!!d,e),a.w=!1,b.push(a));return a}function Xa(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ra(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(D(b),a.a[c].length||(delete a.a[c],a.b--))}}
E.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,D(d[e]);delete this.a[c];this.b--}return b};function Wa(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.v&&f.listener==b&&f.A==!!c&&f.B==d)return e}return-1};var Ya="closure_lm_"+(1E6*Math.random()|0),Za={},$a=0;
function F(a,b,c,d,e){if("array"==r(b))for(var f=0;f<b.length;f++)F(a,b[f],c,d,e);else if(c=ab(c),a&&a[C])Va(a.b,String(b),c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=G(a);g||(a[Ya]=g=new E(a));c=Va(g,b,c,d,e);if(!c.a){d=bb();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(cb(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");$a++}}}
function bb(){var a=db,b=Pa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function eb(a,b,c,d,e){if("array"==r(b))for(var f=0;f<b.length;f++)eb(a,b[f],c,d,e);else(c=ab(c),a&&a[C])?(a=a.b,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Wa(f,c,d,e),-1<c&&(D(f[c]),Array.prototype.splice.call(f,c,1),f.length||(delete a.a[b],a.b--)))):a&&(a=G(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Wa(b,c,!!d,e)),(c=-1<a?b[a]:null)&&fb(c))}
function fb(a){if("number"!=typeof a&&a&&!a.v){var b=a.src;if(b&&b[C])Xa(b.b,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.A):b.detachEvent&&b.detachEvent(cb(c),d);$a--;(c=G(b))?(Xa(c,a),c.b||(c.src=null,b[Ya]=null)):D(a)}}}function cb(a){return a in Za?Za[a]:Za[a]="on"+a}function gb(a,b,c,d){var e=!0;if(a=G(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.A==c&&!f.v&&(f=hb(f,d),e=e&&!1!==f)}return e}
function hb(a,b){var c=a.listener,d=a.B||a.src;a.w&&fb(a);return c.call(d,b)}
function db(a,b){if(a.v)return!0;if(!Pa){var c;if(!(c=b))a:{c=["window","event"];for(var d=p,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new B(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(!e.keyCode)try{e.keyCode=-1;break a}catch(q){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;0<=g;g--){c.a=e[g];var h=gb(e[g],f,!0,c),d=d&&h}for(g=0;g<e.length;g++)c.a=e[g],h=gb(e[g],f,!1,c),d=
d&&h}return d}return hb(a,new B(b,this))}function G(a){a=a[Ya];return a instanceof E?a:null}var ib="__closure_events_fn_"+(1E9*Math.random()>>>0);function ab(a){if("function"==r(a))return a;a[ib]||(a[ib]=function(b){return a.handleEvent(b)});return a[ib]};function H(){Ra.call(this);this.b=new E(this);this.R=this}v(H,Ra);H.prototype[C]=!0;H.prototype.removeEventListener=function(a,b,c,d){eb(this,a,b,c,d)};function I(a,b){var c=a.R,d=b,e=d.type||d;if(t(d))d=new A(d,c);else if(d instanceof A)d.target=d.target||c;else{var f=d,d=new A(e,c);za(d,f)}c=d.a=c;jb(c,e,!0,d);jb(c,e,!1,d)}H.prototype.removeAllListeners=function(a){return this.b?this.b.removeAll(a):0};
function jb(a,b,c,d){if(b=a.b.a[String(b)]){b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.v&&g.A==c){var h=g.listener,q=g.B||g.src;g.w&&Xa(a.b,g);e=!1!==h.call(q,d)&&e}}}};function kb(a,b,c){if("function"==r(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:p.setTimeout(a,b||0)};function J(a,b){this.b={};this.a=[];this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof J)e=a.C(),d=a.X();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)this.set(e[c],d[c])}}k=J.prototype;k.X=function(){lb(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.C=function(){lb(this);return this.a.concat()};
k.clear=function(){this.b={};this.f=this.a.length=0};function lb(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.b,a)?this.b[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.b,a)||(this.f++,this.a.push(a));this.b[a]=b};k.forEach=function(a,b){for(var c=this.C(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new J(this)};function mb(a,b,c,d,e){this.reset(a,b,c,d,e)}mb.prototype.a=null;var nb=0;mb.prototype.reset=function(a,b,c,d,e){"number"==typeof e||nb++;d||la();this.b=b;delete this.a};function ob(a){this.h=a;this.b=this.f=this.a=null}function K(a,b){this.name=a;this.value=b}K.prototype.toString=function(){return this.name};var pb=new K("SEVERE",1E3),qb=new K("CONFIG",700),rb=new K("FINE",500);function sb(a){if(a.f)return a.f;if(a.a)return sb(a.a);qa("Root logger has no level set.");return null}
ob.prototype.log=function(a,b,c){if(a.value>=sb(this).value)for("function"==r(b)&&(b=b()),a=new mb(a,String(b),this.h),c&&(a.a=c),c="log:"+a.b,p.console&&(p.console.timeStamp?p.console.timeStamp(c):p.console.markTimeline&&p.console.markTimeline(c)),p.msWriteProfilerMark&&p.msWriteProfilerMark(c),c=this;c;)c=c.a};var tb={},L=null;
function ub(a){L||(L=new ob(""),tb[""]=L,L.f=qb);var b;if(!(b=tb[a])){b=new ob(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ub(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;tb[a]=b}return b};function N(a,b){a&&a.log(rb,b,void 0)};function vb(){}vb.prototype.a=null;function wb(a){var b;(b=a.a)||(b={},xb(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var yb;function zb(){}v(zb,vb);function Ab(a){return(a=xb(a))?new ActiveXObject(a):new XMLHttpRequest}function xb(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}yb=new zb;var Bb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function O(a){H.call(this);this.headers=new J;this.u=a||null;this.f=!1;this.s=this.c=null;this.a=this.N=this.l="";this.h=this.H=this.j=this.G=!1;this.i=0;this.m=null;this.J=Cb;this.o=this.L=!1}v(O,H);var Cb="",Db=O.prototype,Eb=ub("goog.net.XhrIo");Db.g=Eb;var Fb=/^https?$/i,Gb=["POST","PUT"];
function Hb(a,b){if(a.c)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);a.l=b;a.a="";a.N="GET";a.G=!1;a.f=!0;a.c=a.u?Ab(a.u):Ab(yb);a.s=a.u?wb(a.u):wb(yb);a.c.onreadystatechange=u(a.I,a);try{N(a.g,P(a,"Opening Xhr")),a.H=!0,a.c.open("GET",String(b),!0),a.H=!1}catch(f){N(a.g,P(a,"Error opening Xhr: "+f.message));Ib(a,f);return}var c=a.headers.clone(),d=sa(c.C()),e=p.FormData&&!1;!(0<=ra(Gb,"GET"))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
c.forEach(function(a,b){this.c.setRequestHeader(b,a)},a);a.J&&(a.c.responseType=a.J);"withCredentials"in a.c&&a.c.withCredentials!==a.L&&(a.c.withCredentials=a.L);try{Jb(a),0<a.i&&(a.o=Kb(a.c),N(a.g,P(a,"Will abort after "+a.i+"ms if incomplete, xhr2 "+a.o)),a.o?(a.c.timeout=a.i,a.c.ontimeout=u(a.K,a)):a.m=kb(a.K,a.i,a)),N(a.g,P(a,"Sending request")),a.j=!0,a.c.send(""),a.j=!1}catch(f){N(a.g,P(a,"Send error: "+f.message)),Ib(a,f)}}
function Kb(a){return y&&La(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function ta(a){return"content-type"==a.toLowerCase()}O.prototype.K=function(){"undefined"!=typeof fa&&this.c&&(this.a="Timed out after "+this.i+"ms, aborting",N(this.g,P(this,this.a)),I(this,"timeout"),this.abort(8))};function Ib(a,b){a.f=!1;a.c&&(a.h=!0,a.c.abort(),a.h=!1);a.a=b;Lb(a);Mb(a)}function Lb(a){a.G||(a.G=!0,I(a,"complete"),I(a,"error"))}
O.prototype.abort=function(){this.c&&this.f&&(N(this.g,P(this,"Aborting")),this.f=!1,this.h=!0,this.c.abort(),this.h=!1,I(this,"complete"),I(this,"abort"),Mb(this))};O.prototype.I=function(){this.F||(this.H||this.j||this.h?Nb(this):this.T())};O.prototype.T=function(){Nb(this)};
function Nb(a){if(a.f&&"undefined"!=typeof fa)if(a.s[1]&&4==Q(a)&&2==R(a))N(a.g,P(a,"Local request error detected and ignored"));else if(a.j&&4==Q(a))kb(a.I,0,a);else if(I(a,"readystatechange"),4==Q(a)){N(a.g,P(a,"Request complete"));a.f=!1;try{if(Ob(a))I(a,"complete"),I(a,"success");else{var b;try{b=2<Q(a)?a.c.statusText:""}catch(c){N(a.g,"Can not get status: "+c.message),b=""}a.a=b+" ["+R(a)+"]";Lb(a)}}finally{Mb(a)}}}
function Mb(a){if(a.c){Jb(a);var b=a.c,c=a.s[0]?ga:null;a.c=null;a.s=null;I(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.g)&&a.log(pb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}function Jb(a){a.c&&a.o&&(a.c.ontimeout=null);"number"==typeof a.m&&(p.clearTimeout(a.m),a.m=null)}
function Ob(a){var b=R(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=!b)a=String(a.l).match(Bb)[1]||null,!a&&p.self&&p.self.location&&(a=p.self.location.protocol,a=a.substr(0,a.length-1)),b=!Fb.test(a?a.toLowerCase():"");c=b}return c}function Q(a){return a.c?a.c.readyState:0}function R(a){try{return 2<Q(a)?a.c.status:-1}catch(b){return-1}}function P(a,b){return b+" ["+a.N+" "+a.l+" "+R(a)+"]"};google.load("visualization","1",{packages:["table","corechart","annotatedtimeline"]});
function S(a){this.b=a||new O;this.a=[];this.l=this.m=this.f=!1;this.h={};for(var b in T)document.getElementById(T[b]).className="pagespeed-hidden-offscreen";a=document.createElement("table");a.id="nav-bar";a.className="pagespeed-sub-tabs";a.innerHTML='<tr><td><a id="'+Pb+'" href="javascript:void(0);">Per application cache stats</a> - </td><td><a id="'+Qb+'" href="javascript:void(0);">Per type cache stats</a> - </td><td><a id="'+Rb+'" href="javascript:void(0);">IPRO status</a> - </td><td><a id="'+
Sb+'" href="javascript:void(0);">Image rewriting</a> - </td><td><a id="'+Tb+'" href="javascript:void(0);">Realtime</a></td></tr>';b=document.createElement("div");b.id="ui-div";b.innerHTML='<table id="ui-table" border=1 style="border-collapse: collapse;border-color:silver;"><tr valign="center"><td>Auto refresh (every 5 seconds): <input type="checkbox" id="auto-refresh" '+(this.f?"checked":"")+"></td></tr></table>";document.body.insertBefore(b,document.getElementById(U));document.body.insertBefore(a,
document.getElementById("ui-div"))}S.prototype.i=function(a){for(var b in T){var c=T[b];document.getElementById(c).className=c==a?"":"pagespeed-hidden-offscreen"}c=document.getElementById(a+"_mode");for(b in Ub){var d=document.getElementById(Ub[b]);d.className=d==c?"pagespeed-underline-link":""}location.href=location.href.split("#")[0]+"#"+a};S.prototype.o=function(){var a=location.hash.substr(1);if(""==a)this.i(U);else{var b;a:{b=T;for(var c in b)if(b[c]==a){b=!0;break a}b=!1}b&&this.i(a)}};
var Pb="cache_applied_mode",Qb="cache_type_mode",Rb="ipro_mode",Sb="image_rewriting_mode",Tb="realtime_mode",Ub={O:Pb,P:Qb,U:Rb,W:Sb,V:Tb},U="cache_applied",T={O:U,P:"cache_type",U:"ipro",W:"image_rewriting",V:"realtime"};S.prototype.u=function(){this.f=!this.f};
S.prototype.j=function(){if(!this.b.c)if(!this.m){this.m=!0;var a=new Date,b;b="?json&start_time="+(new Date(a-864E5)).getTime();b+="&end_time="+a.getTime();Hb(this.b,b+"&granularity=5000")}else if(!this.l||this.f)this.l=!0,a=location.pathname,b=a.lastIndexOf("/",a.length-2),Hb(this.b,0<b?a.substring(0,b)+"/stats_json":a+"/stats_json")};
S.prototype.s=function(){if(Ob(this.b)){var a;var b=this.b;try{a=b.c?b.c.responseText:""}catch(f){N(b.g,"Can not get responseText: "+f.message),a=""}if(this.l){var c=JSON.parse(a).variables;a=[];for(var d in c)a.push({name:d,value:c[d]});this.a.push({D:a,M:new Date});17280<this.a.length&&this.a.shift();V(this,"pcache-cohorts-dom","Property cache dom cohorts",U);V(this,"pcache-cohorts-beacon","Property cache beacon cohorts",U);V(this,"rewrite_cached_output","Rewrite cached output",U);V(this,"url_input",
"URL Input",U);V(this,"cache","Cache","cache_type");V(this,"file_cache","File Cache","cache_type");V(this,"memcached","Memcached","cache_type");V(this,"redis","Redis","cache_type");V(this,"lru_cache","LRU","cache_type");V(this,"shm_cache","Shared Memory","cache_type");V(this,"ipro","In place resource optimization","ipro");V(this,"image_rewrite","Image rewrite","image_rewriting");V(this,"image_rewrites_dropped","Image rewrites dropped","image_rewriting");W(this,"http","Http");W(this,"file_cache","File Cache RT");
W(this,"lru_cache","LRU Cache RT");W(this,"serf_fetch","Serf stats RT");W(this,"rewrite","Rewrite stats RT")}else{a=JSON.parse(a);d=a.timestamps;a=a.variables;for(b=0;b<d.length;++b){var e=[];for(c in a)e.push({name:c,value:a[c][b]});this.a.push({D:e,M:new Date(d[b])})}window.setTimeout(u(this.j,this),0)}}else c=this.b,console.log(t(c.a)?c.a:String(c.a))};
function Vb(a,b){var c=!0;b.indexOf(a)?c=!1:0<=b.indexOf("cache_flush_timestamp_ms")?c=!1:0<=b.indexOf("cache_flush_count")?c=!1:0<=b.indexOf("cache_time_us")&&(c=!1);return c}
function Wb(a,b,c,d,e){if(a.h[c])d=a.h[c];else{e=document.getElementById(e);"Loading Charts..."==e.textContent&&(e.textContent="");var f=document.createElement("div");"AnnotatedTimeLine"==d&&(f.className="pagespeed-graphs-chart");f.id=b;b=document.createElement("p");b.textContent=c;b.className="pagespeed-graphs-title";e.appendChild(b);e.appendChild(f);d=new google.visualization[d](f);a.h[c]=d}return d}
function V(a,b,c,d){var e="pagespeed-graphs-"+b;b+="_";c=Wb(a,e,c,"BarChart",d);e=document.getElementById(e);d=[];for(var f=new google.visualization.DataTable,g=ua(a.a[a.a.length-1].D),h=a=0;h<g.length;++h)if(Vb(b,g[h].name)){++a;var q=g[h].name.substring(b.length),q=q.replace(/_/g," ");d.push([q,Number(g[h].value)])}f.addColumn("string","Name");f.addColumn("number","Value");f.addRows(d);b=new google.visualization.DataView(f);b.setColumns([0,1,{calc:function(a,b){for(var c=0,d=0;d<a.getNumberOfRows();++d)c+=
a.getValue(d,1);d=a.getValue(b,1);return d.toString()+" ("+(100*d/(0==c?1:c)).toFixed(2).toString()+"%)"},type:"string",role:"annotation"}]);a=40*a+10;e.style.height=a+20;c.draw(b,{annotations:{alwaysOutside:!0,highContrast:!0,textStyle:{fontSize:12,color:"black"}},hAxis:{direction:1},vAxis:{textPosition:"out"},legend:{position:"none"},width:800,height:a,chartArea:{left:225,top:0,width:"60%",height:"80%"}})}
function W(a,b,c){var d=b+"_";b=Wb(a,"pagespeed-graphs-"+b,c,"AnnotatedTimeLine","realtime");c=[];var e=new google.visualization.DataTable;e.addColumn("datetime","Time");for(var f=!0,g=0;g<a.a.length;++g){var h=ua(a.a[g].D),q=[];q.push(a.a[g].M);for(var M=0;M<h.length;++M)if(Vb(d,h[M].name)&&(q.push(Number(h[M].value)),f)){var xa=h[M].name.substring(d.length),xa=xa.replace(/_/g," ");e.addColumn("number",xa)}f=!1;c.push(q)}e.addRows(c);b.draw(e,Xb)}var Xb={thickness:1,displayExactValues:!0,legendPosition:"newRow"};
function Yb(){F(window,"load",function(){var a=new S;a.o();for(var b in T)F(document.getElementById(Ub[b]),"click",u(a.i,a,T[b]));F(window,"hashchange",u(a.o,a));F(document.getElementById("auto-refresh"),"change",u(a.u,a));F(a.b,"complete",u(a.s,a));setInterval(u(a.j,a),5E3);a.j()})}var X=["pagespeed","Graphs","Start"],Y=p;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Yb?Y[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Yb;})();
