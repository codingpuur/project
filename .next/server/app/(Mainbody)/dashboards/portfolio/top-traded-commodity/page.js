(()=>{var e={};e.id=6411,e.ids=[6411],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},66893:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var a=r(50482),n=r(69108),s=r(62563),o=r.n(s),l=r(68300),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let d=["",{children:["(Mainbody)",{children:["dashboards",{children:["portfolio",{children:["top-traded-commodity",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,12603)),"C:\\Users\\Shubham\\Desktop\\cion_next_v1.0\\admin\\src\\app\\(Mainbody)\\dashboards\\portfolio\\top-traded-commodity\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,65503)),"C:\\Users\\Shubham\\Desktop\\cion_next_v1.0\\admin\\src\\app\\(Mainbody)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,11541)),"C:\\Users\\Shubham\\Desktop\\cion_next_v1.0\\admin\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,92793)),"C:\\Users\\Shubham\\Desktop\\cion_next_v1.0\\admin\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Shubham\\Desktop\\cion_next_v1.0\\admin\\src\\app\\(Mainbody)\\dashboards\\portfolio\\top-traded-commodity\\page.tsx"],u="/(Mainbody)/dashboards/portfolio/top-traded-commodity/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(Mainbody)/dashboards/portfolio/top-traded-commodity/page",pathname:"/dashboards/portfolio/top-traded-commodity",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5872:(e,t,r)=>{Promise.resolve().then(r.bind(r,5754))},15532:(e,t,r)=>{"use strict";t.__esModule=!0,t.default=void 0,t.isTrivialHref=l,t.useButtonProps=i;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&({}).hasOwnProperty.call(e,s)){var l=n?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(a,s,l):a[s]=e[s]}return a.default=e,r&&r.set(e,a),a}(r(3729)),n=r(95344);let s=["as","disabled"];function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function l(e){return!e||"#"===e.trim()}function i({tagName:e,disabled:t,href:r,target:a,rel:n,role:s,onClick:o,tabIndex:i=0,type:d}){e||(e=null!=r||null!=a||null!=n?"a":"button");let c={tagName:e};if("button"===e)return[{type:d||"button",disabled:t},c];let u=a=>{if((t||"a"===e&&l(r))&&a.preventDefault(),t){a.stopPropagation();return}null==o||o(a)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}let d=a.forwardRef((e,t)=>{let{as:r,disabled:a}=e,o=function(e,t){if(null==e)return{};var r={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,s),[l,{tagName:d}]=i(Object.assign({tagName:r,disabled:a},o));return(0,n.jsx)(d,Object.assign({},o,l,{ref:t}))});d.displayName="Button",t.default=d},44322:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var a=r(34132),n=r.n(a),s=r(3729),o=r(70136),l=r(95344);let i=s.forwardRef(({bsPrefix:e,bg:t="primary",pill:r=!1,text:a,className:s,as:i="span",...d},c)=>{let u=(0,o.vE)(e,"badge");return(0,l.jsx)(i,{ref:c,...d,className:n()(s,u,r&&"rounded-pill",a&&`text-${a}`,t&&`bg-${t}`)})});i.displayName="Badge";let d=i},78154:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(34132),n=r.n(a),s=r(3729),o=r(15532),l=r(70136),i=r(95344);let d=s.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:a,active:s=!1,disabled:d=!1,className:c,...u},m)=>{let p=(0,l.vE)(t,"btn"),[f,{tagName:h}]=(0,o.useButtonProps)({tagName:e,disabled:d,...u});return(0,i.jsx)(h,{...f,...u,ref:m,disabled:d,className:n()(c,p,s&&"active",r&&`${p}-${r}`,a&&`${p}-${a}`,u.href&&d&&"disabled")})});d.displayName="Button";let c=d},7835:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var a=r(34132),n=r.n(a),s=r(3729),o=r(70136),l=r(95344);let i=s.forwardRef(({className:e,bsPrefix:t,as:r="div",...a},s)=>(t=(0,o.vE)(t,"card-body"),(0,l.jsx)(r,{ref:s,className:n()(e,t),...a})));i.displayName="CardBody";let d=s.forwardRef(({className:e,bsPrefix:t,as:r="div",...a},s)=>(t=(0,o.vE)(t,"card-footer"),(0,l.jsx)(r,{ref:s,className:n()(e,t),...a})));d.displayName="CardFooter";var c=r(57134);let u=s.forwardRef(({bsPrefix:e,className:t,as:r="div",...a},i)=>{let d=(0,o.vE)(e,"card-header"),u=(0,s.useMemo)(()=>({cardHeaderBsPrefix:d}),[d]);return(0,l.jsx)(c.Z.Provider,{value:u,children:(0,l.jsx)(r,{ref:i,...a,className:n()(t,d)})})});u.displayName="CardHeader";let m=s.forwardRef(({bsPrefix:e,className:t,variant:r,as:a="img",...s},i)=>{let d=(0,o.vE)(e,"card-img");return(0,l.jsx)(a,{ref:i,className:n()(r?`${d}-${r}`:d,t),...s})});m.displayName="CardImg";let p=s.forwardRef(({className:e,bsPrefix:t,as:r="div",...a},s)=>(t=(0,o.vE)(t,"card-img-overlay"),(0,l.jsx)(r,{ref:s,className:n()(e,t),...a})));p.displayName="CardImgOverlay";let f=s.forwardRef(({className:e,bsPrefix:t,as:r="a",...a},s)=>(t=(0,o.vE)(t,"card-link"),(0,l.jsx)(r,{ref:s,className:n()(e,t),...a})));f.displayName="CardLink";let h=e=>s.forwardRef((t,r)=>(0,l.jsx)("div",{...t,ref:r,className:n()(t.className,e)})),x=h("h6"),v=s.forwardRef(({className:e,bsPrefix:t,as:r=x,...a},s)=>(t=(0,o.vE)(t,"card-subtitle"),(0,l.jsx)(r,{ref:s,className:n()(e,t),...a})));v.displayName="CardSubtitle";let g=s.forwardRef(({className:e,bsPrefix:t,as:r="p",...a},s)=>(t=(0,o.vE)(t,"card-text"),(0,l.jsx)(r,{ref:s,className:n()(e,t),...a})));g.displayName="CardText";let b=h("h5"),y=s.forwardRef(({className:e,bsPrefix:t,as:r=b,...a},s)=>(t=(0,o.vE)(t,"card-title"),(0,l.jsx)(r,{ref:s,className:n()(e,t),...a})));y.displayName="CardTitle";let j=s.forwardRef(({bsPrefix:e,className:t,bg:r,text:a,border:s,body:d=!1,children:c,as:u="div",...m},p)=>{let f=(0,o.vE)(e,"card");return(0,l.jsx)(u,{ref:p,...m,className:n()(t,f,r&&`bg-${r}`,a&&`text-${a}`,s&&`border-${s}`),children:d?(0,l.jsx)(i,{children:c}):c})});j.displayName="Card";let w=Object.assign(j,{Img:m,Title:y,Subtitle:v,Body:i,Link:f,Text:g,Header:u,Footer:d,ImgOverlay:p})},57134:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});let a=r(3729).createContext(null);a.displayName="CardHeaderContext";let n=a},45544:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(34132),n=r.n(a),s=r(3729),o=r(70136),l=r(95344);let i=s.forwardRef(({bsPrefix:e,className:t,striped:r,bordered:a,borderless:s,hover:i,size:d,variant:c,responsive:u,...m},p)=>{let f=(0,o.vE)(e,"table"),h=n()(t,f,c&&`${f}-${c}`,d&&`${f}-${d}`,r&&`${f}-${"string"==typeof r?`striped-${r}`:"striped"}`,a&&`${f}-bordered`,s&&`${f}-borderless`,i&&`${f}-hover`),x=(0,l.jsx)("table",{...m,className:h,ref:p});if(u){let e=`${f}-responsive`;return"string"==typeof u&&(e=`${e}-${u}`),(0,l.jsx)("div",{className:e,children:x})}return x})},70136:(e,t,r)=>{"use strict";r.d(t,{SC:()=>c,pi:()=>i,vE:()=>l,zG:()=>d});var a=r(3729);r(95344);let n=a.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:s,Provider:o}=n;function l(e,t){let{prefixes:r}=(0,a.useContext)(n);return e||r[t]||t}function i(){let{breakpoints:e}=(0,a.useContext)(n);return e}function d(){let{minBreakpoint:e}=(0,a.useContext)(n);return e}function c(){let{dir:e}=(0,a.useContext)(n);return"rtl"===e}},5754:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var a=r(95344),n=r(3729),s=r.n(n),o=r(7835),l=r(78154),i=r(45544),d=r(44322),c=r(7470),u=r.n(c),m=["color","size","title","className"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var f=(0,n.forwardRef)(function(e,t){var r=e.color,a=e.size,n=e.title,o=e.className,l=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,m);return s().createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:r,className:["bi","bi-arrow-clockwise",o].filter(Boolean).join(" ")},l),n?s().createElement("title",null,n):null,s().createElement("path",{fillRule:"evenodd",d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"}),s().createElement("path",{d:"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"}))});f.propTypes={color:u().string,size:u().oneOfType([u().string,u().number]),title:u().string,className:u().string},f.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var h=["color","size","title","className"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var v=(0,n.forwardRef)(function(e,t){var r=e.color,a=e.size,n=e.title,o=e.className,l=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,h);return s().createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:r,className:["bi","bi-arrow-up-right",o].filter(Boolean).join(" ")},l),n?s().createElement("title",null,n):null,s().createElement("path",{fillRule:"evenodd",d:"M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"}))});v.propTypes={color:u().string,size:u().oneOfType([u().string,u().number]),title:u().string,className:u().string},v.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var g=["color","size","title","className"];function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var y=(0,n.forwardRef)(function(e,t){var r=e.color,a=e.size,n=e.title,o=e.className,l=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,g);return s().createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:r,className:["bi","bi-arrow-down-right",o].filter(Boolean).join(" ")},l),n?s().createElement("title",null,n):null,s().createElement("path",{fillRule:"evenodd",d:"M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"}))});y.propTypes={color:u().string,size:u().oneOfType([u().string,u().number]),title:u().string,className:u().string},y.defaultProps={color:"currentColor",size:"1em",title:null,className:""};let j=[{id:"1",name:"Crude Oil",symbol:"CL",price:71.55,change:1.2,changePercent:1.68,volume:1234567},{id:"2",name:"Gold",symbol:"GC",price:1948.5,change:-5.3,changePercent:-.27,volume:987654},{id:"3",name:"Natural Gas",symbol:"NG",price:2.585,change:.095,changePercent:3.68,volume:876543},{id:"4",name:"Silver",symbol:"SI",price:24.21,change:-.18,changePercent:-.74,volume:765432},{id:"5",name:"Copper",symbol:"HG",price:3.7885,change:.0365,changePercent:.97,volume:654321},{id:"6",name:"Wheat",symbol:"ZW",price:623.25,change:9.75,changePercent:1.59,volume:543210},{id:"7",name:"Corn",symbol:"ZC",price:588.5,change:-2.75,changePercent:-.47,volume:432109},{id:"8",name:"Soybeans",symbol:"ZS",price:1345.75,change:15.25,changePercent:1.15,volume:321098}];function w(){let[e,t]=(0,n.useState)(j);return a.jsx("div",{className:"containe mt-5",children:(0,a.jsxs)(o.Z,{className:"shadow-sm",children:[(0,a.jsxs)(o.Z.Header,{className:"d-flex justify-content-between align-items-center",children:[(0,a.jsxs)("div",{children:[a.jsx(o.Z.Title,{className:"mb-0",children:"Top Traded Commodities"}),a.jsx(o.Z.Text,{children:"Real-time prices and trading volumes"})]}),a.jsx(l.Z,{variant:"outline-secondary",onClick:()=>{e.map(e=>({...e,price:Number((e.price*(1+(Math.random()-.5)*.02)).toFixed(4)),change:Number((Math.random()-.5)*10).toFixed(2),changePercent:Number((Math.random()-.5)*5).toFixed(2),volume:Math.floor(e.volume*(.9+.2*Math.random()))}))},children:a.jsx(f,{size:18})})]}),a.jsx(o.Z.Body,{children:a.jsx("div",{className:"table-responsive",style:{maxHeight:"400px",overflowY:"auto"},children:(0,a.jsxs)(i.Z,{bordered:!0,hover:!0,children:[a.jsx("thead",{children:(0,a.jsxs)("tr",{children:[a.jsx("th",{children:"Commodity"}),a.jsx("th",{children:"Symbol"}),a.jsx("th",{className:"text-end",children:"Price"}),a.jsx("th",{className:"text-end",children:"Change"}),a.jsx("th",{className:"text-end",children:"Volume"})]})}),a.jsx("tbody",{children:e.map(e=>(0,a.jsxs)("tr",{children:[a.jsx("td",{children:e.name}),a.jsx("td",{children:e.symbol}),(0,a.jsxs)("td",{className:"text-end",children:["$",e.price.toFixed(2)]}),a.jsx("td",{className:"text-end",children:(0,a.jsxs)(d.Z,{bg:e.change>=0?"success":"danger",className:"d-flex align-items-center justify-content-end",children:[e.change>=0?a.jsx(v,{className:"me-1"}):a.jsx(y,{className:"me-1"}),"$",Math.abs(e.change).toFixed(2)," (",Math.abs(e.changePercent).toFixed(2),"%)"]})}),a.jsx("td",{className:"text-end",children:e.volume.toLocaleString()})]},e.id))})]})})})]})})}},12603:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>s,__esModule:()=>n,default:()=>o});let a=(0,r(86843).createProxy)(String.raw`C:\Users\Shubham\Desktop\cion_next_v1.0\admin\src\app\(Mainbody)\dashboards\portfolio\top-traded-commodity\page.tsx`),{__esModule:n,$$typeof:s}=a,o=a.default}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1638,8224,337,1476,9687,9607,8038,3519],()=>r(66893));module.exports=a})();