(function(){var e=encodeURIComponent,f=window,g=document,h="documentElement",k="length",l="prototype",n="body",p="&ci=",q="&oh=",r=",",s="Content-Type",t="Microsoft.XMLHTTP",u="Msxml2.XMLHTTP",v="POST",w="application/x-www-form-urlencoded",x="img",y="input",z="load",A="on",B="pagespeed_url_hash",C="url=";f.pagespeed=f.pagespeed||{};var D=f.pagespeed,E=function(a,b,c){this.e=a;this.c=b;this.d=c;this.b=this.f();this.a={}};
E[l].f=function(){return{height:f.innerHeight||g[h].clientHeight||g[n].clientHeight,width:f.innerWidth||g[h].clientWidth||g[n].clientWidth}};E[l].i=function(a){a=a.getBoundingClientRect();return{top:a.top+(void 0!==f.pageYOffset?f.pageYOffset:(g[h]||g[n].parentNode||g[n]).scrollTop),left:a.left+(void 0!==f.pageXOffset?f.pageXOffset:(g[h]||g[n].parentNode||g[n]).scrollLeft)}};
E[l].g=function(a){if(0>=a.offsetWidth&&0>=a.offsetHeight)return!1;a=this.i(a);var b=JSON.stringify(a);if(this.a.hasOwnProperty(b))return!1;this.a[b]=!0;return a.top<=this.b.height&&a.left<=this.b.width};E[l].h=function(a){var b;if(f.XMLHttpRequest)b=new XMLHttpRequest;else if(f.ActiveXObject)try{b=new ActiveXObject(u)}catch(c){try{b=new ActiveXObject(t)}catch(d){}}if(!b)return!1;b.open(v,this.e);b.setRequestHeader(s,w);b.send(a);return!0};
E[l].k=function(){for(var a=[x,y],b={},c=0;c<a[k];++c)for(var d=g.getElementsByTagName(a[c]),m=0;m<d[k];++m)d[m].hasAttribute(B)&&(d[m].getBoundingClientRect&&this.g(d[m]))&&(b[d[m].getAttribute(B)]=!0);b=Object.keys(b);if(0!=b[k]){a=C+e(this.c);a+=q+this.d;a+=p+e(b[0]);for(c=1;c<b[k];++c){d=r+e(b[c]);if(131072<a[k]+d[k])break;a+=d}D.criticalImagesBeaconData=a;this.h(a)}};
D.j=function(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent(A+b,c);else{var d=a[A+b];a[A+b]=function(){c.call(this);d&&d.call(this)}}};D.l=function(a,b,c){var d=new E(a,b,c);D.j(f,z,function(){f.setTimeout(function(){d.k()},0)})};D.criticalImagesBeaconInit=D.l;})();
