
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var l={},m;for(m in f)f.hasOwnProperty(m)&&(l[m]=f[m]);var aa=[],ca="./this.program";function da(a,b){throw b;}var ea="object"===typeof window,u="function"===typeof importScripts,fa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,w="",ha,ia,ja,x,y;
if(fa)w=u?require("path").dirname(w)+"/":__dirname+"/",ha=function(a,b){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);return x.readFileSync(a,b?null:"utf8")},ja=function(a){a=ha(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a},ia=function(a,b,c){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);x.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),
"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ka))throw a;}),process.on("unhandledRejection",z),da=function(a,b){if(noExitRuntime||0<la)throw process.exitCode=a,b;process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||u)u?w=self.location.href:"undefined"!==typeof document&&document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ha=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(ja=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ma=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);
for(m in l)l.hasOwnProperty(m)&&(f[m]=l[m]);l=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(da=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&z("no native wasm support detected");var na,oa=!1;function pa(a){var b=f["_"+a];b||z("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function qa(a,b,c,d){var e={string:function(q){var r=0;if(null!==q&&void 0!==q&&0!==q){var L=(q.length<<2)+1;r=C(L);D(q,E,r,L)}return r},array:function(q){var r=C(q.length);F.set(q,r);return r}};a=pa(a);var g=[],h=0;if(d)for(var n=0;n<d.length;n++){var p=e[c[n]];p?(0===h&&(h=ra()),g[n]=p(d[n])):g[n]=d[n]}c=a.apply(null,g);return c=function(q){0!==h&&sa(h);return"string"===b?G(q):"boolean"===b?!!q:q}(c)}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ua(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ta)return ta.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var h=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|h:(e&7)<<18|g<<12|h<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function G(a,b){return a?ua(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var n=a.charCodeAt(++g);h=65536+((h&1023)<<10)|n&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-e}
function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function wa(a){var b=va(a)+1,c=C(b);D(a,F,c,b);return c}var xa,F,E,ya,za,H,Aa,I,J;
function Ba(){var a=na.buffer;xa=a;f.HEAP8=F=new Int8Array(a);f.HEAP16=ya=new Int16Array(a);f.HEAP32=H=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=za=new Uint16Array(a);f.HEAPU32=Aa=new Uint32Array(a);f.HEAPF32=I=new Float32Array(a);f.HEAPF64=J=new Float64Array(a)}var K,Ca=[],Da=[],Ea=[],Fa=[],Ga=[],la=0;function Ha(){var a=f.preRun.shift();Ca.unshift(a)}var M=0,Ia=null,N=null;f.preloadedImages={};f.preloadedAudios={};
function z(a){if(f.onAbort)f.onAbort(a);A(a);oa=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(){return O.startsWith("data:application/octet-stream;base64,")}var O;O="v6502r.wasm";if(!Ja()){var Ka=O;O=f.locateFile?f.locateFile(Ka,w):w+Ka}function La(){var a=O;try{if(a==O&&B)return new Uint8Array(B);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function Ma(){if(!B&&(ea||u)){if("function"===typeof fetch&&!O.startsWith("file://"))return fetch(O,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+O+"'";return a.arrayBuffer()}).catch(function(){return La()});if(ia)return new Promise(function(a,b){ia(O,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return La()})}
function Na(){var a=document.getElementById("picker"),b=a.files[0];a.value=null;console.log("--- load file:");console.log("  name: "+b.name);console.log("  type: "+b.type);console.log("  size: "+b.size);256E3>b.size?(a=new FileReader,a.onload=function(c){console.log("file loaded!");(c=c.target.result)?(console.log("content length: "+c.byteLength),c=new Uint8Array(c),0==qa("util_emsc_loadfile","int",["string","array","number"],[b.name,c,c.length])&&console.warn("util_emsc_loadfile() failed!")):console.warn("load result empty!")},
a.readAsArrayBuffer(b)):console.warn("ignoring file because it is too big")}function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Qc;"number"===typeof c?void 0===b.lc?K.get(c)():K.get(c)(b.lc):c(void 0===b.lc?null:b.lc)}}}var Pa=[null,[],[]],Qa={},Ra;Ra=fa?function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:function(){return performance.now()};var Sa=0;function Ta(){for(var a=Q.length-1;0<=a;--a)Ua(a);Q=[];Va=[]}var Va=[];
function Wa(){if(Sa&&Xa.cc)for(var a=0;a<Va.length;++a){var b=Va[a];Va.splice(a,1);--a;b.Zc.apply(null,b.Mc)}}var Q=[];function Ua(a){var b=Q[a];b.target.removeEventListener(b.Vb,b.Bc,b.Wb);Q.splice(a,1)}function R(a){function b(d){++Sa;Xa=a;Wa();a.Yb(d);Wa();--Sa}if(a.Xb)a.Bc=b,a.target.addEventListener(a.Vb,b,a.Wb),Q.push(a),Ya||(Fa.push(Ta),Ya=!0);else for(var c=0;c<Q.length;++c)Q[c].target==a.target&&Q[c].Vb==a.Vb&&Ua(c--)}
function Za(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ya,Xa,$a,ab,bb,cb,db,eb,fb,gb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function S(a){a=2<a?G(a):a;return gb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function hb(a){return 0>gb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function ib(a,b,c,d,e,g){$a||($a=T(256));a={target:S(a),Vb:g,Xb:d,Yb:function(h){h=h||event;var n=h.target.id?h.target.id:"",p=$a;D(Za(h.target),E,p+0,128);D(n,E,p+128,128);K.get(d)(e,p,b)&&h.preventDefault()},Wb:c};R(a)}
function jb(a,b,c,d,e,g){ab||(ab=T(176));a={target:S(a),cc:!0,Vb:g,Xb:d,Yb:function(h){var n=ab;J[n>>3]=h.timeStamp;var p=n>>2;H[p+2]=h.location;H[p+3]=h.ctrlKey;H[p+4]=h.shiftKey;H[p+5]=h.altKey;H[p+6]=h.metaKey;H[p+7]=h.repeat;H[p+8]=h.charCode;H[p+9]=h.keyCode;H[p+10]=h.which;D(h.key||"",E,n+44,32);D(h.code||"",E,n+76,32);D(h.char||"",E,n+108,32);D(h.locale||"",E,n+140,32);K.get(d)(e,n,b)&&h.preventDefault()},Wb:c};R(a)}
function kb(a,b,c){J[a>>3]=b.timeStamp;a>>=2;H[a+2]=b.screenX;H[a+3]=b.screenY;H[a+4]=b.clientX;H[a+5]=b.clientY;H[a+6]=b.ctrlKey;H[a+7]=b.shiftKey;H[a+8]=b.altKey;H[a+9]=b.metaKey;ya[2*a+20]=b.button;ya[2*a+21]=b.buttons;H[a+11]=b.movementX;H[a+12]=b.movementY;c=hb(c);H[a+13]=b.clientX-c.left;H[a+14]=b.clientY-c.top}
function lb(a,b,c,d,e,g){bb||(bb=T(72));a=S(a);R({target:a,cc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Vb:g,Xb:d,Yb:function(h){h=h||event;kb(bb,h,a);K.get(d)(e,bb,b)&&h.preventDefault()},Wb:c})}function mb(a,b,c,d,e){cb||(cb=T(260));R({target:a,Vb:e,Xb:d,Yb:function(g){g=g||event;var h=cb,n=document.pointerLockElement||document.nc||document.pc||document.oc;H[h>>2]=!!n;var p=n&&n.id?n.id:"";D(Za(n),E,h+4,128);D(p,E,h+132,128);K.get(d)(20,h,b)&&g.preventDefault()},Wb:c})}
function nb(a,b,c,d,e){R({target:a,Vb:e,Xb:d,Yb:function(g){g=g||event;K.get(d)(38,0,b)&&g.preventDefault()},Wb:c})}
function ob(a,b,c,d){db||(db=T(36));a=S(a);R({target:a,Vb:"resize",Xb:d,Yb:function(e){e=e||event;if(e.target==a){var g=document.body;if(g){var h=db;H[h>>2]=e.detail;H[h+4>>2]=g.clientWidth;H[h+8>>2]=g.clientHeight;H[h+12>>2]=innerWidth;H[h+16>>2]=innerHeight;H[h+20>>2]=outerWidth;H[h+24>>2]=outerHeight;H[h+28>>2]=pageXOffset;H[h+32>>2]=pageYOffset;K.get(d)(10,h,b)&&e.preventDefault()}}},Wb:c})}
function pb(a,b,c,d,e,g){eb||(eb=T(1696));a=S(a);R({target:a,cc:"touchstart"==g||"touchend"==g,Vb:g,Xb:d,Yb:function(h){for(var n={},p=h.touches,q=0;q<p.length;++q){var r=p[q];n[r.identifier]=r}p=h.changedTouches;for(q=0;q<p.length;++q)r=p[q],r.Ec=1,n[r.identifier]=r;p=h.targetTouches;for(q=0;q<p.length;++q)n[p[q].identifier].Gc=1;p=eb;J[p>>3]=h.timeStamp;r=p>>2;H[r+3]=h.ctrlKey;H[r+4]=h.shiftKey;H[r+5]=h.altKey;H[r+6]=h.metaKey;r+=7;var L=hb(a),ba=0;for(q in n){var k=n[q];H[r]=k.identifier;H[r+1]=
k.screenX;H[r+2]=k.screenY;H[r+3]=k.clientX;H[r+4]=k.clientY;H[r+5]=k.pageX;H[r+6]=k.pageY;H[r+7]=k.Ec;H[r+8]=k.Gc;H[r+9]=k.clientX-L.left;H[r+10]=k.clientY-L.top;r+=13;if(31<++ba)break}H[p+8>>2]=ba;K.get(d)(e,p,b)&&h.preventDefault()},Wb:c})}function qb(a,b,c,d,e,g){a={target:S(a),Vb:g,Xb:d,Yb:function(h){h=h||event;K.get(d)(e,0,b)&&h.preventDefault()},Wb:c};R(a)}
function rb(a,b,c,d){fb||(fb=T(104));R({target:a,cc:!0,Vb:"wheel",Xb:d,Yb:function(e){e=e||event;var g=fb;kb(g,e,a);J[g+72>>3]=e.deltaX;J[g+80>>3]=e.deltaY;J[g+88>>3]=e.deltaZ;H[g+96>>2]=e.deltaMode;K.get(d)(9,g,b)&&e.preventDefault()},Wb:c})}
function sb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,g){b.drawArraysInstancedANGLE(c,d,e,g)},a.drawElementsInstanced=function(c,d,e,g,h){b.drawElementsInstancedANGLE(c,d,e,g,h)})}
function tb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ub(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function vb(a){a.Uc=a.getExtension("WEBGL_multi_draw")}
var wb=1,xb=[],U=[],yb=[],zb=[],Ab=[],V=[],Bb=[],Cb={};function W(a){Db||(Db=a)}function Eb(a){for(var b=wb++,c=a.length;c<b;c++)a[c]=null;return b}function Fb(a,b){a.rc||(a.rc=a.getContext,a.getContext=function(d,e){e=a.rc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?Gb(c,b):0}function Gb(a,b){var c=Eb(Bb),d={Sc:c,attributes:b,version:b.Fc,kc:a};a.canvas&&(a.canvas.Lc=d);Bb[c]=d;("undefined"===typeof b.qc||b.qc)&&Hb(d);return c}
function Hb(a){a||(a=Ib);if(!a.Dc){a.Dc=!0;var b=a.kc;sb(b);tb(b);ub(b);b.Oc=b.getExtension("EXT_disjoint_timer_query");vb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Db,Ib,Jb=["default","low-power","high-performance"],Lb={};
function Mb(){if(!Nb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in Lb)void 0===Lb[b]?delete a[b]:a[b]=Lb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Nb=c}return Nb}var Nb;function Ob(a,b,c,d){for(var e=0;e<a;e++){var g=X[c](),h=g&&Eb(d);g?(g.name=h,d[h]=g):W(1282);H[b+4*e>>2]=h}}
function Pb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){W(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:W(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else W(1281)}function Qb(a){var b=va(a)+1,c=T(b);D(a,E,c,b);return c}
function Rb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Sb(a,b,c,d,e){a-=5120;a=1==a?E:4==a?H:6==a?I:5==a||28922==a?Aa:za;var g=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>g,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}function Y(a){var b=X.Ac;if(b){var c=b.bc[a];"number"===typeof c&&(b.bc[a]=c=X.getUniformLocation(b,b.yc[a]+(0<c?"["+c+"]":"")));return c}W(1282)}var Z=[];function Tb(a){return 0===a%4&&(0!==a%100||0===a%400)}
function Ub(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var Vb=[31,29,31,30,31,30,31,31,30,31,30,31],Wb=[31,28,31,30,31,30,31,31,30,31,30,31];function Xb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Tb(a.getFullYear())?Vb:Wb)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Yb(a,b,c,d){function e(k,t,v){for(k="number"===typeof k?k.toString():k||"";k.length<t;)k=v[0]+k;return k}function g(k,t){return e(k,t,"0")}function h(k,t){function v(Kb){return 0>Kb?-1:0<Kb?1:0}var P;0===(P=v(k.getFullYear()-t.getFullYear()))&&0===(P=v(k.getMonth()-t.getMonth()))&&(P=v(k.getDate()-t.getDate()));return P}function n(k){switch(k.getDay()){case 0:return new Date(k.getFullYear()-1,11,29);case 1:return k;case 2:return new Date(k.getFullYear(),0,3);case 3:return new Date(k.getFullYear(),
0,2);case 4:return new Date(k.getFullYear(),0,1);case 5:return new Date(k.getFullYear()-1,11,31);case 6:return new Date(k.getFullYear()-1,11,30)}}function p(k){k=Xb(new Date(k.Ub+1900,0,1),k.jc);var t=new Date(k.getFullYear()+1,0,4),v=n(new Date(k.getFullYear(),0,4));t=n(t);return 0>=h(v,k)?0>=h(t,k)?k.getFullYear()+1:k.getFullYear():k.getFullYear()-1}var q=H[d+40>>2];d={Jc:H[d>>2],Ic:H[d+4>>2],hc:H[d+8>>2],ac:H[d+12>>2],Zb:H[d+16>>2],Ub:H[d+20>>2],ic:H[d+24>>2],jc:H[d+28>>2],$c:H[d+32>>2],Hc:H[d+
36>>2],Kc:q?G(q):""};c=G(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var L="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ba="January February March April May June July August September October November December".split(" ");q={"%a":function(k){return L[k.ic].substring(0,3)},"%A":function(k){return L[k.ic]},"%b":function(k){return ba[k.Zb].substring(0,3)},"%B":function(k){return ba[k.Zb]},"%C":function(k){return g((k.Ub+1900)/100|0,2)},"%d":function(k){return g(k.ac,2)},"%e":function(k){return e(k.ac,2," ")},"%g":function(k){return p(k).toString().substring(2)},"%G":function(k){return p(k)},"%H":function(k){return g(k.hc,
2)},"%I":function(k){k=k.hc;0==k?k=12:12<k&&(k-=12);return g(k,2)},"%j":function(k){return g(k.ac+Ub(Tb(k.Ub+1900)?Vb:Wb,k.Zb-1),3)},"%m":function(k){return g(k.Zb+1,2)},"%M":function(k){return g(k.Ic,2)},"%n":function(){return"\n"},"%p":function(k){return 0<=k.hc&&12>k.hc?"AM":"PM"},"%S":function(k){return g(k.Jc,2)},"%t":function(){return"\t"},"%u":function(k){return k.ic||7},"%U":function(k){var t=new Date(k.Ub+1900,0,1),v=0===t.getDay()?t:Xb(t,7-t.getDay());k=new Date(k.Ub+1900,k.Zb,k.ac);return 0>
h(v,k)?g(Math.ceil((31-v.getDate()+(Ub(Tb(k.getFullYear())?Vb:Wb,k.getMonth()-1)-31)+k.getDate())/7),2):0===h(v,t)?"01":"00"},"%V":function(k){var t=new Date(k.Ub+1901,0,4),v=n(new Date(k.Ub+1900,0,4));t=n(t);var P=Xb(new Date(k.Ub+1900,0,1),k.jc);return 0>h(P,v)?"53":0>=h(t,P)?"01":g(Math.ceil((v.getFullYear()<k.Ub+1900?k.jc+32-v.getDate():k.jc+1-v.getDate())/7),2)},"%w":function(k){return k.ic},"%W":function(k){var t=new Date(k.Ub,0,1),v=1===t.getDay()?t:Xb(t,0===t.getDay()?1:7-t.getDay()+1);k=
new Date(k.Ub+1900,k.Zb,k.ac);return 0>h(v,k)?g(Math.ceil((31-v.getDate()+(Ub(Tb(k.getFullYear())?Vb:Wb,k.getMonth()-1)-31)+k.getDate())/7),2):0===h(v,t)?"01":"00"},"%y":function(k){return(k.Ub+1900).toString().substring(2)},"%Y":function(k){return k.Ub+1900},"%z":function(k){k=k.Hc;var t=0<=k;k=Math.abs(k)/60;return(t?"+":"-")+String("0000"+(k/60*100+k%60)).slice(-4)},"%Z":function(k){return k.Kc},"%%":function(){return"%"}};for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),q[r](d)));r=Zb(c);
if(r.length>b)return 0;F.set(r,a);return r.length-1}for(var X,$b=new Float32Array(288),ac=0;288>ac;++ac)Z[ac]=$b.subarray(0,ac+1);function Zb(a){var b=Array(va(a)+1);D(a,b,0,b.length);return b}
var gc={fa:function(){return 0},eb:function(){return 0},gb:function(){},b:function(){z()},_a:function(a,b){if(0===a)a=Date.now();else if(1===a||4===a)a=Ra();else return H[bc()>>2]=28,-1;H[b>>2]=a/1E3|0;H[b+4>>2]=a%1E3*1E6|0;return 0},Ba:function(){document.getElementById("canvas").style.cursor="default"},Da:function(){document.getElementById("canvas").style.cursor="pointer"},Sa:function(a,b,c){a=G(a);for(var d="",e=0;e<c;e++)d+=String.fromCharCode(E[b+e]);console.log(btoa(d));b=document.createElement("a");
b.setAttribute("href","data:application/octet-stream;base64,"+btoa(d));b.setAttribute("download",a);b.style.display="none";document.body.appendChild(b);b.click();document.body.removeChild(b)},ba:function(a,b){a=G(a);b=G(b);var c=document.createElement("a");c.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(b));c.setAttribute("download",a);c.style.display="none";document.body.appendChild(c);c.click();document.body.removeChild(c)},Bb:function(){f.emsc_js_onload=Na},Ab:function(){return navigator.userAgent.includes("Macintosh")?
1:0},Pa:function(){document.getElementById("picker").click()},Ka:function(a){a=G(a);window.open(a)},ea:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=S(a);if(!a)return-4;a=hb(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Ya:function(a,b,c){E.copyWithin(a,b,b+c)},Wa:function(a,b){function c(d){K.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=E.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=
b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{na.grow(Math.min(2147483648,d)-xa.byteLength+65535>>>16);Ba();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},M:function(a,b,c,d){ib(a,b,c,d,12,"blur");return 0},da:function(a,b,c){a=S(a);if(!a)return-4;a.width=b;a.height=c;return 0},N:function(a,b,c,d){ib(a,b,c,d,13,"focus");return 0},W:function(a,b,c,d){jb(a,b,c,d,2,"keydown");return 0},U:function(a,b,c,d){jb(a,b,c,d,1,"keypress");return 0},V:function(a,
b,c,d){jb(a,b,c,d,3,"keyup");return 0},aa:function(a,b,c,d){lb(a,b,c,d,5,"mousedown");return 0},Z:function(a,b,c,d){lb(a,b,c,d,33,"mouseenter");return 0},Y:function(a,b,c,d){lb(a,b,c,d,34,"mouseleave");return 0},_:function(a,b,c,d){lb(a,b,c,d,8,"mousemove");return 0},$:function(a,b,c,d){lb(a,b,c,d,6,"mouseup");return 0},P:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.nc||document.body.pc||document.body.oc))return-1;a=S(a);if(!a)return-4;mb(a,b,c,
d,"pointerlockchange");mb(a,b,c,d,"mozpointerlockchange");mb(a,b,c,d,"webkitpointerlockchange");mb(a,b,c,d,"mspointerlockchange");return 0},O:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.nc||document.body.pc||document.body.oc))return-1;a=S(a);if(!a)return-4;nb(a,b,c,d,"pointerlockerror");nb(a,b,c,d,"mozpointerlockerror");nb(a,b,c,d,"webkitpointerlockerror");nb(a,b,c,d,"mspointerlockerror");return 0},bb:function(a,b,c,d){ob(a,b,c,d);return 0},Q:function(a,b,c,d){pb(a,
b,c,d,25,"touchcancel");return 0},R:function(a,b,c,d){pb(a,b,c,d,23,"touchend");return 0},S:function(a,b,c,d){pb(a,b,c,d,24,"touchmove");return 0},T:function(a,b,c,d){pb(a,b,c,d,22,"touchstart");return 0},L:function(a,b,c,d){qb(a,b,c,d,31,"webglcontextlost");return 0},K:function(a,b,c,d){qb(a,b,c,d,32,"webglcontextrestored");return 0},X:function(a,b,c,d){a=S(a);return"undefined"!==typeof a.onwheel?(rb(a,b,c,d),0):-1},ca:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+
3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:Jb[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+7],Fc:H[b+8],Tc:H[b+9],qc:H[b+10],Cc:H[b+11],Vc:H[b+12],Wc:H[b+13]};a=S(a);return!a||b.Cc?0:Fb(a,b)},Ta:function(a,b){a=Bb[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&sb(X);"OES_vertex_array_object"==b&&tb(X);"WEBGL_draw_buffers"==b&&ub(X);"WEBGL_multi_draw"==b&&vb(X);return!!a.kc.getExtension(b)},Va:function(a){a>>=2;for(var b=0;14>b;++b)H[a+
b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Ua:function(a){Ib=Bb[a];f.Nc=X=Ib&&Ib.kc;return!a||X?0:-5},ab:function(a,b){var c=0;Mb().forEach(function(d,e){var g=b+c;e=H[a+4*e>>2]=g;for(g=0;g<d.length;++g)F[e++>>0]=d.charCodeAt(g);F[e>>0]=0;c+=d.length+1});return 0},cb:function(a,b){var c=Mb();H[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});H[b>>2]=d;return 0},ga:function(){return 0},db:function(a,b,c,d){a=Qa.Rc(a);b=Qa.Pc(a,b,c);H[d>>2]=b;return 0},Xa:function(){},fb:function(a,
b,c,d){for(var e=0,g=0;g<c;g++){for(var h=H[b+8*g>>2],n=H[b+(8*g+4)>>2],p=0;p<n;p++){var q=E[h+p],r=Pa[a];0===q||10===q?((1===a?ma:A)(ua(r,0)),r.length=0):r.push(q)}e+=n}H[d>>2]=e;return 0},c:function(a){X.activeTexture(a)},z:function(a,b){X.attachShader(U[a],V[b])},d:function(a,b){X.bindBuffer(a,xb[b])},ka:function(a,b){X.bindFramebuffer(a,yb[b])},wa:function(a,b){X.bindRenderbuffer(a,zb[b])},a:function(a,b){X.bindTexture(a,Ab[b])},F:function(a,b,c,d){X.blendColor(a,b,c,d)},G:function(a,b){X.blendEquationSeparate(a,
b)},H:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},ya:function(a,b,c,d){X.bufferData(a,c?E.subarray(c,c+b):b,d)},B:function(a,b,c,d){X.bufferSubData(a,b,E.subarray(d,d+c))},tb:function(a){X.clear(a)},wb:function(a,b,c,d){X.clearColor(a,b,c,d)},vb:function(a){X.clearDepth(a)},ub:function(a){X.clearStencil(a)},l:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},ma:function(a){X.compileShader(V[a])},ta:function(a,b,c,d,e,g,h,n){X.compressedTexImage2D(a,b,c,d,e,g,n?E.subarray(n,n+h):null)},ra:function(){var a=
Eb(U),b=X.createProgram();b.name=a;b.fc=b.dc=b.ec=0;b.mc=1;U[a]=b;return a},oa:function(a){var b=Eb(V);V[b]=X.createShader(a);return b},C:function(a){X.cullFace(a)},Fa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=xb[d];e&&(X.deleteBuffer(e),e.name=0,xb[d]=null)}},i:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=yb[d];e&&(X.deleteFramebuffer(e),e.name=0,yb[d]=null)}},v:function(a){if(a){var b=U[a];b?(X.deleteProgram(b),b.name=0,U[a]=null):W(1281)}},J:function(a,b){for(var c=0;c<a;c++){var d=
H[b+4*c>>2],e=zb[d];e&&(X.deleteRenderbuffer(e),e.name=0,zb[d]=null)}},r:function(a){if(a){var b=V[a];b?(X.deleteShader(b),V[a]=null):W(1281)}},Ea:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=Ab[d];e&&(X.deleteTexture(e),e.name=0,Ab[d]=null)}},u:function(a){X.depthFunc(a)},t:function(a){X.depthMask(!!a)},e:function(a){X.disable(a)},I:function(a){X.disableVertexAttribArray(a)},ib:function(a,b,c){X.drawArrays(a,b,c)},jb:function(a,b,c,d){X.drawElements(a,b,c,d)},g:function(a){X.enable(a)},
pb:function(a){X.enableVertexAttribArray(a)},D:function(a){X.frontFace(a)},za:function(a,b){Ob(a,b,"createBuffer",xb)},xa:function(a,b){Ob(a,b,"createRenderbuffer",zb)},ua:function(a,b){Ob(a,b,"createTexture",Ab)},xb:function(a,b){return X.getAttribLocation(U[a],G(b))},f:function(a,b){Pb(a,b)},pa:function(a,b,c,d){a=X.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},y:function(a,b,c){if(c)if(a>=wb)W(1281);else if(a=U[a],35716==b)a=X.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.fc)for(b=0;b<X.getProgramParameter(a,35718);++b)a.fc=Math.max(a.fc,X.getActiveUniform(a,b).name.length+1);H[c>>2]=a.fc}else if(35722==b){if(!a.dc)for(b=0;b<X.getProgramParameter(a,35721);++b)a.dc=Math.max(a.dc,X.getActiveAttrib(a,b).name.length+1);H[c>>2]=a.dc}else if(35381==b){if(!a.ec)for(b=0;b<X.getProgramParameter(a,35382);++b)a.ec=Math.max(a.ec,X.getActiveUniformBlockName(a,b).length+1);H[c>>2]=a.ec}else H[c>>2]=X.getProgramParameter(a,
b);else W(1281)},yb:function(a,b,c,d){a=X.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},la:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(V[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=X.getShaderParameter(V[a],b):W(1281)},Ga:function(a){var b=Cb[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Qb(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||W(1280);b=b&&Qb(b);break;case 7938:b=Qb("OpenGL ES 2.0 ("+X.getParameter(7938)+")");break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Qb(b);break;default:W(1280)}Cb[a]=b}return b},k:function(a,b){b=G(b);if(a=U[a]){var c=a,d=c.bc,e=c.zc,g;if(!d)for(c.bc=d={},c.yc={},g=0;g<X.getProgramParameter(c,
35718);++g){var h=X.getActiveUniform(c,g);var n=h.name;h=h.size;var p=Rb(n);p=0<p?n.slice(0,p):n;var q=c.mc;c.mc+=h;e[p]=[h,q];for(n=0;n<h;++n)d[q]=n,c.yc[q++]=p}c=a.bc;d=0;e=b;g=Rb(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.zc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||X.getUniformLocation(a,b)))return d}else W(1281);return-1},qa:function(a){a=U[a];X.linkProgram(a);a.bc=0;a.zc={}},E:function(a,b){X.polygonOffset(a,b)},va:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},p:function(a,b,c,
d){X.scissor(a,b,c,d)},na:function(a,b,c,d){for(var e="",g=0;g<b;++g){var h=d?H[d+4*g>>2]:-1;e+=G(H[c+4*g>>2],0>h?void 0:h)}X.shaderSource(V[a],e)},Ca:function(a,b,c){X.stencilFunc(a,b,c)},ja:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},s:function(a){X.stencilMask(a)},Aa:function(a,b,c){X.stencilOp(a,b,c)},ia:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},sa:function(a,b,c,d,e,g,h,n,p){X.texImage2D(a,b,c,d,e,g,h,n,p?Sb(n,h,d,e,p):null)},h:function(a,b,c){X.texParameteri(a,b,c)},hb:function(a,
b,c,d,e,g,h,n,p){var q=null;p&&(q=Sb(n,h,e,g,p));X.texSubImage2D(a,b,c,d,e,g,h,n,q)},ob:function(a,b,c){if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)},x:function(a,b){X.uniform1i(Y(a),b)},nb:function(a,b,c){if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)},mb:function(a,b,c){if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*
e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)},lb:function(a,b,c){if(72>=b){var d=Z[4*b-1],e=I;c>>=2;for(var g=0;g<4*b;g+=4){var h=c+g;d[g]=e[h];d[g+1]=e[h+1];d[g+2]=e[h+2];d[g+3]=e[h+3]}}else d=I.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)},kb:function(a,b,c,d){if(18>=b){var e=Z[16*b-1],g=I;d>>=2;for(var h=0;h<16*b;h+=16){var n=d+h;e[h]=g[n];e[h+1]=g[n+1];e[h+2]=g[n+2];e[h+3]=g[n+3];e[h+4]=g[n+4];e[h+5]=g[n+5];e[h+6]=g[n+6];e[h+7]=g[n+7];e[h+8]=g[n+8];e[h+
9]=g[n+9];e[h+10]=g[n+10];e[h+11]=g[n+11];e[h+12]=g[n+12];e[h+13]=g[n+13];e[h+14]=g[n+14];e[h+15]=g[n+15]}}else e=I.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)},j:function(a){a=U[a];X.useProgram(a);X.Ac=a},qb:function(a,b){X.vertexAttribDivisor(a,b)},rb:function(a,b,c,d,e,g){X.vertexAttribPointer(a,b,c,!!d,e,g)},q:function(a,b,c,d){X.viewport(a,b,c,d)},Ra:function(){f.sc=function(a){0!=cc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.sc)},Qa:function(){f.xc=
function(a){a=a.clipboardData.getData("text");qa("_sapp_emsc_onpaste","void",["string"],[a])};window.addEventListener("paste",f.xc)},Oa:function(a){f.Xc=[];a=G(a);a=document.getElementById(a);f.tc=function(b){b.stopPropagation();b.preventDefault()};f.uc=function(b){b.stopPropagation();b.preventDefault()};f.vc=function(b){b.stopPropagation();b.preventDefault()};f.wc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Yc=c;dc(c.length);var d;for(d=0;d<c.length;d++)qa("_sapp_emsc_drop",
"void",["number","string"],[d,c[d].name]);ec(b.clientX,b.clientY)};a.addEventListener("dragenter",f.tc,!1);a.addEventListener("dragleave",f.uc,!1);a.addEventListener("dragover",f.vc,!1);a.addEventListener("drop",f.wc,!1)},Ia:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){fc()});document.body.append(a)},
n:function(){document.getElementById("_sokol_app_input_element").focus()},sb:function(a){a=G(a);f.$b=document.getElementById(a);f.$b||console.log("sokol_app.h: invalid target:"+a);f.$b.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Na:function(){window.removeEventListener("beforeunload",f.sc)},Ma:function(){window.removeEventListener("paste",f.xc)},La:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.tc);a.removeEventListener("dragleave",
f.uc);a.removeEventListener("dragover",f.vc);a.removeEventListener("drop",f.wc)},w:function(){f.$b&&f.$b.requestPointerLock&&f.$b.requestPointerLock()},Ha:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),g=e.createImageData(a,b);g.data.set(E.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},
Ja:function(a){a=G(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},zb:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())qa("_sargs_add_kvp",
"void",["string","string"],[b.value[0],b.value[1]])},A:function(){return navigator.userAgent.includes("Macintosh")?1:0},$a:function(a,b,c,d){return Yb(a,b,c,d)}};
(function(){function a(e){f.asm=e.exports;na=f.asm.Cb;Ba();K=f.asm.Tb;Da.unshift(f.asm.Db);M--;f.monitorRunDependencies&&f.monitorRunDependencies(M);0==M&&(null!==Ia&&(clearInterval(Ia),Ia=null),N&&(e=N,N=null,e()))}function b(e){a(e.instance)}function c(e){return Ma().then(function(g){return WebAssembly.instantiate(g,d)}).then(function(g){return g}).then(e,function(g){A("failed to asynchronously prepare wasm: "+g);z(g)})}var d={a:gc};M++;f.monitorRunDependencies&&f.monitorRunDependencies(M);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return A("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return B||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||O.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(O,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){A("wasm streaming compile failed: "+g);A("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Db).apply(null,arguments)};f._util_emsc_loadfile=function(){return(f._util_emsc_loadfile=f.asm.Eb).apply(null,arguments)};var T=f._malloc=function(){return(T=f._malloc=f.asm.Fb).apply(null,arguments)},fc=f.__sapp_emsc_notify_keyboard_hidden=function(){return(fc=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Gb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Hb).apply(null,arguments)};
var cc=f.__sapp_html5_get_ask_leave_site=function(){return(cc=f.__sapp_html5_get_ask_leave_site=f.asm.Ib).apply(null,arguments)},dc=f.__sapp_emsc_begin_drop=function(){return(dc=f.__sapp_emsc_begin_drop=f.asm.Jb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Kb).apply(null,arguments)};var ec=f.__sapp_emsc_end_drop=function(){return(ec=f.__sapp_emsc_end_drop=f.asm.Lb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Mb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Nb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Ob).apply(null,arguments)};
var bc=f.___errno_location=function(){return(bc=f.___errno_location=f.asm.Pb).apply(null,arguments)},ra=f.stackSave=function(){return(ra=f.stackSave=f.asm.Qb).apply(null,arguments)},sa=f.stackRestore=function(){return(sa=f.stackRestore=f.asm.Rb).apply(null,arguments)},C=f.stackAlloc=function(){return(C=f.stackAlloc=f.asm.Sb).apply(null,arguments)},hc;function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}N=function ic(){hc||jc();hc||(N=ic)};
function jc(a){function b(){if(!hc&&(hc=!0,f.calledRun=!0,!oa)){Oa(Da);Oa(Ea);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(kc){var c=a,d=f._main;c=c||[];var e=c.length+1,g=C(4*(e+1));H[g>>2]=wa(ca);for(var h=1;h<e;h++)H[(g>>2)+h]=wa(c[h-1]);H[(g>>2)+e]=0;try{var n=d(e,g);if(!(noExitRuntime||0<la)){if(f.onExit)f.onExit(n);oa=!0}da(n,new ka(n))}catch(p){c=p,c instanceof ka||"unwind"==c||(A("exception thrown: "+c),da(1,c))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=
[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Ga.unshift(c);Oa(Ga)}}a=a||aa;if(!(0<M)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ha();Oa(Ca);0<M||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=jc;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var kc=!0;f.noInitialRun&&(kc=!1);jc();
