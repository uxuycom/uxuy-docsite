(()=>{"use strict";var e,a,c,t,r,f={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return f[e].call(c.exports,c,c.exports,o),c.loaded=!0,c.exports}o.m=f,o.c=d,e=[],o.O=(a,c,t,r)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,b=0;b<c.length;b++)(!1&r||f>=r)&&Object.keys(o.O).every((e=>o.O[e](c[b])))?c.splice(b--,1):(d=!1,r<f&&(f=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[c,t,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var f={};a=a||[null,c({}),c([]),c(c)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,o.d(r,f),r},o.d=(e,a)=>{for(var c in a)o.o(a,c)&&!o.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,c)=>(o.f[c](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",75:"298ee433",469:"5e271c03",948:"8717b14a",1335:"1f0d9859",1798:"174ae71b",1914:"d9f32620",2156:"587a3b3d",2169:"864717b5",2267:"59362658",2362:"e273c56f",2535:"814f3328",2536:"5dba7e14",2775:"9b4185c1",3002:"a99d6c81",3089:"a6aa9e1f",3344:"8453c73d",3407:"a282c0d5",3514:"73664a40",3551:"f2b35819",3562:"a09c5a01",3608:"9e4087bc",3647:"a37ddc4b",3956:"8289231d",4013:"01a85c17",4078:"c4544c0e",4128:"c7538f2b",4429:"3fc986e5",4797:"e313ec7c",5608:"3109a695",6103:"ccc49370",6546:"15f759fc",6650:"4122a689",6934:"1ff06092",6971:"c377a04b",7039:"fbeb4748",7171:"3c8326e9",7320:"da8e08bb",7661:"308d693e",7778:"33ffa171",7918:"17896441",8218:"98de9e9f",8231:"6530db8a",8351:"5b548e8c",8610:"6875c492",8636:"f4f34a3a",9003:"925b3f96",9514:"1be78505",9642:"7661071f",9706:"0c354942",9817:"14eb3368"}[e]||e)+"."+{53:"89c5f8f1",75:"633c1c11",469:"d6622197",948:"69575a17",1335:"870dff43",1798:"92faf744",1914:"cce5571e",2156:"18aeaf17",2169:"6f6594da",2267:"862b92f2",2362:"055af570",2535:"66fdd2f8",2536:"e782cc3a",2775:"77ba9754",3002:"63672d51",3089:"9f15e546",3339:"08526c45",3343:"30c9bd8c",3344:"1336d7cd",3407:"8ab42dea",3514:"7cd8f99c",3551:"4c260b8b",3562:"19891d4c",3608:"0fa778ef",3647:"a8a4a1d3",3956:"b8126574",4013:"34192dff",4078:"d5975637",4128:"ec5ebf52",4429:"b8bc9b46",4797:"c50fb438",4972:"abae367a",5608:"4ebc646c",6048:"14689aff",6103:"f51a68bb",6546:"c9ee5153",6650:"0138ab00",6934:"d602b5d9",6971:"286d7154",7039:"af56f368",7171:"10ae261c",7320:"9c7dcc5a",7661:"82e5f727",7778:"f11071c9",7918:"0792573b",8218:"df11a459",8231:"43ff4507",8351:"526a1d0f",8610:"79abc604",8636:"8f8df838",8928:"f08eeade",9003:"504be929",9514:"559593b9",9642:"c92ff33b",9706:"639f30c9",9817:"19b052cc",9878:"796e985e"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="uxuy-doc-site:",o.l=(e,a,c,f)=>{if(t[e])t[e].push(a);else{var d,b;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+c){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+c),d.src=e),t[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/uxuycom/",o.gca=function(e){return e={17896441:"7918",59362658:"2267","935f2afb":"53","298ee433":"75","5e271c03":"469","8717b14a":"948","1f0d9859":"1335","174ae71b":"1798",d9f32620:"1914","587a3b3d":"2156","864717b5":"2169",e273c56f:"2362","814f3328":"2535","5dba7e14":"2536","9b4185c1":"2775",a99d6c81:"3002",a6aa9e1f:"3089","8453c73d":"3344",a282c0d5:"3407","73664a40":"3514",f2b35819:"3551",a09c5a01:"3562","9e4087bc":"3608",a37ddc4b:"3647","8289231d":"3956","01a85c17":"4013",c4544c0e:"4078",c7538f2b:"4128","3fc986e5":"4429",e313ec7c:"4797","3109a695":"5608",ccc49370:"6103","15f759fc":"6546","4122a689":"6650","1ff06092":"6934",c377a04b:"6971",fbeb4748:"7039","3c8326e9":"7171",da8e08bb:"7320","308d693e":"7661","33ffa171":"7778","98de9e9f":"8218","6530db8a":"8231","5b548e8c":"8351","6875c492":"8610",f4f34a3a:"8636","925b3f96":"9003","1be78505":"9514","7661071f":"9642","0c354942":"9706","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,c)=>{var t=o.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((c,r)=>t=e[a]=[c,r]));c.push(t[2]=r);var f=o.p+o.u(a),d=new Error;o.l(f,(c=>{if(o.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+f+")",d.name="ChunkLoadError",d.type=r,d.request=f,t[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,c)=>{var t,r,f=c[0],d=c[1],b=c[2],n=0;if(f.some((a=>0!==e[a]))){for(t in d)o.o(d,t)&&(o.m[t]=d[t]);if(b)var i=b(o)}for(a&&a(c);n<f.length;n++)r=f[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},c=self.webpackChunkuxuy_doc_site=self.webpackChunkuxuy_doc_site||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();