/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{472:function(ja,ea,e){e.r(ea);e.d(ea,"ByteRangeRequest",function(){return ka});var z=e(0),fa=e(1);e.n(fa);var ia=e(3),ha=e(166);ja=e(102);var ca=e(274),ba=e(83),y=e(78),x=e(273),w=e(184);e=e(410);var r=[],h=[],f=window,n=function(){return function(){this.Hn=1}}(),aa;(function(e){e[e.UNSENT=0]="UNSENT";e[e.DONE=4]="DONE"})(aa||(aa={}));var ka=function(){function e(e,h,n,r){var w=this;this.url=e;this.range=h;this.Sf=n;this.withCredentials=
r;this.Z8=aa;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);f.Uint8Array&&(this.request.responseType="arraybuffer");r&&(this.request.withCredentials=r);la.DISABLE_RANGE_HEADER||(Object(fa.isUndefined)(h.stop)?this.request.setRequestHeader("Range","bytes="+h.start):this.request.setRequestHeader("Range",["bytes=",h.start,"-",h.stop-1].join("")));n&&Object.keys(n).forEach(function(e){w.request.setRequestHeader(e,n[e])});this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):
this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=x.a.NOT_STARTED}e.prototype.start=function(e){var h=this,n=this.request;n.onreadystatechange=function(){if(h.aborted)return h.status=x.a.ABORTED,e({code:x.a.ABORTED});if(this.readyState===h.Z8.DONE){h.WE();var r=0===window.document.URL.indexOf("file:///");200===n.status||206===n.status||r&&0===n.status?(r=f.TY(this),h.gw(r,e)):(h.status=x.a.ERROR,e({code:h.status,status:h.status}))}};this.request.send(null);this.status=x.a.STARTED};
e.prototype.gw=function(e,f){this.status=x.a.SUCCESS;if(f)return f(!1,e)};e.prototype.abort=function(){this.WE();this.aborted=!0;this.request.abort()};e.prototype.WE=function(){var f=Object(w.c)(this.url,this.range,h);-1!==f&&h.splice(f,1);if(0<r.length){f=r.shift();var n=new e(f.url,f.range,this.Sf,this.withCredentials);f.request=n;h.push(f);n.start(Object(w.d)(f))}};e.prototype.extend=function(e){var f=Object.assign({},this,e.prototype);f.constructor=e;return f};return e}(),la=function(e){function f(f,
h,n,r,w){n=e.call(this,f,n,r)||this;n.ek={};n.uD=h;n.url=f;n.DISABLE_RANGE_HEADER=!1;n.lA=ka;n.OR=3;n.Sf=w||{};return n}Object(z.c)(f,e);f.prototype.Rx=function(e,f,h){var n=-1===e.indexOf("?")?"?":"&";switch(h){case !1:case y.a.NEVER_CACHE:e=e+n+"_="+Object(fa.uniqueId)();break;case !0:case y.a.CACHE:e=e+n+"_="+f.start+","+(Object(fa.isUndefined)(f.stop)?"":f.stop)}return e};f.prototype.qW=function(e,f,h,n){void 0===h&&(h={});return new this.lA(e,f,h,n)};f.prototype.Rga=function(e,f,n,w,x){for(var y=
0;y<r.length;y++)if(Object(fa.isEqual)(r[y].range,f)&&Object(fa.isEqual)(r[y].url,e))return r[y].Eh.push(w),r[y].jG++,null;for(y=0;y<h.length;y++)if(Object(fa.isEqual)(h[y].range,f)&&Object(fa.isEqual)(h[y].url,e))return h[y].Eh.push(w),h[y].jG++,null;n={url:e,range:f,uD:n,Eh:[w],jG:1};if(0===r.length&&h.length<this.OR)return h.push(n),n.request=this.qW(e,f,x,this.withCredentials),n;r.push(n);return null};f.prototype.Cp=function(e,f,n){var x=this.Rx(e,f,this.uD);(e=this.Rga(x,f,this.uD,n,this.Sf))&&
e.request.start(Object(w.d)(e));return function(){var e=Object(w.c)(x,f,h);if(-1!==e){var n=--h[e].jG;0===n&&h[e].request&&h[e].request.abort()}else e=Object(w.c)(x,f,r),-1!==e&&(n=--r[e].jG,0===n&&r.splice(e,1))}};f.prototype.sY=function(){return{start:-ha.a}};f.prototype.Fka=function(){var e=-(ha.a+ha.e);return{start:e-ha.d,end:e}};f.prototype.jv=function(e){var f=this;this.AD=!0;var h=ha.a;this.Cp(this.url,this.sY(),function(n,r,w){function x(){var h=f.ae.pY();f.Cp(f.url,h,function(n,r){if(n)return Object(ia.j)("Error loading central directory: "+
n),e(n);r=Object(ba.a)(r);if(r.length!==h.stop-h.start)return e("Invalid XOD file: Zip central directory data is wrong size! Should be "+(h.stop-h.start)+" but is "+r.length);f.ae.a2(r);f.JK=!0;f.AD=!1;return e(!1)})}if(n)return Object(ia.j)("Error loading end header: "+n),e(n,r,w);r=Object(ba.a)(r);if(r.length!==h)return e("Invalid XOD file: Zip end header data is wrong size!");try{f.ae=new ca.a(r)}catch(qa){return e(qa)}f.ae.xma?f.Cp(f.url,f.Fka(),function(h,n){if(h)return Object(ia.j)("Error loading zip64 header: "+
h),e(h);n=Object(ba.a)(n);f.ae.Sma(n);x()}):x()})};f.prototype.PY=function(e){e(Object.keys(this.ae.$o))};f.prototype.jP=function(e,f){var h=this;if(this.ae.fW(e)){var r=this.ae.By(e);if(r in this.ek){var w=this.Wh[e];w.Wt=this.ek[r];w.Wt.Hn++;w.cancel=w.Wt.cancel}else{var x=this.ae.Qia(e),y=this.Cp(this.url,x,function(n,w){n?(Object(ia.j)('Error loading part "'+e+'": '+n),h.Cp(h.url,x,function(n,w){if(n)return f(n,e);h.e2(w,x,r,e,f)})):h.e2(w,x,r,e,f)}),z=this.Wh[e];z&&(z.I4=!0,z.cancel=function(){z.Wt.Hn--;
0===z.Wt.Hn&&(y(),delete h.ek[r])},this.ek[r]=new n(r),z.Wt=this.ek[r],z.Wt.cancel=z.cancel)}}else delete this.Wh[e],f(Error('File not found: "'+e+'"'),e)};f.prototype.e2=function(e,f,h,n,r){if(e.length!==f.stop-f.start)r(Error("Part data is wrong size!"),n);else{do{if(!this.ek[h])return;n=this.ek[h].Hn;for(var w=f.ts.length,x=0;x<w;++x){var y=f.ts[x];r(!1,y.os,e["string"===typeof e?"substring":"subarray"](y.start,y.stop),this.ae.$Z(y.os));y.os in this.Wh&&delete this.Wh[y.os]}}while(n!==this.ek[h].Hn);
delete this.ek[h]}};f.DISABLE_RANGE_HEADER=!1;f.OR=3;return f}(ja.a);(function(e){function f(f,h,n){var r=e.call(this)||this,w;for(w in f)r[w]=f[w];r.Eza=f;r.startOffset=h;r.endOffset=n;r.qW=function(e,h,n,w){Object(fa.isUndefined)(h.stop)?(h.start+=r.endOffset,h.stop=r.endOffset):(h.start+=r.startOffset,h.stop+=r.startOffset);e=r.Rx(r.url,h,r.uD);return new f.lA(e,h,n,w)};return r}Object(z.c)(f,e);return f})(la);Object(e.a)(la);Object(e.b)(la);ea["default"]=la}}]);}).call(this || window)
