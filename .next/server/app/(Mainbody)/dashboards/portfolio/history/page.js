(()=>{var e={};e.id=7779,e.ids=[7779],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},33240:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d});var a=s(50482),r=s(69108),n=s(62563),o=s.n(n),i=s(68300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let d=["",{children:["(Mainbody)",{children:["dashboards",{children:["portfolio",{children:["history",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,83478)),"C:\\Users\\Shubham\\Desktop\\cion_next_v1.0\\admin\\src\\app\\(Mainbody)\\dashboards\\portfolio\\history\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,65503)),"C:\\Users\\Shubham\\Desktop\\cion_next_v1.0\\admin\\src\\app\\(Mainbody)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,11541)),"C:\\Users\\Shubham\\Desktop\\cion_next_v1.0\\admin\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,92793)),"C:\\Users\\Shubham\\Desktop\\cion_next_v1.0\\admin\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Shubham\\Desktop\\cion_next_v1.0\\admin\\src\\app\\(Mainbody)\\dashboards\\portfolio\\history\\page.tsx"],m="/(Mainbody)/dashboards/portfolio/history/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(Mainbody)/dashboards/portfolio/history/page",pathname:"/dashboards/portfolio/history",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},32994:(e,t,s)=>{Promise.resolve().then(s.bind(s,49045))},25545:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(97075).Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},28765:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s(97075).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},49045:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(95344),r=s(3729),n=s(28765),o=s(25545);function i(){let[e,t]=(0,r.useState)([{id:"1",symbol:"RELIANCE",name:"Reliance Industries Ltd.",lastSearched:new Date("2023-06-10T14:30:00")},{id:"2",symbol:"TCS",name:"Tata Consultancy Services Ltd.",lastSearched:new Date("2023-06-09T10:15:00")},{id:"3",symbol:"HDFCBANK",name:"HDFC Bank Ltd.",lastSearched:new Date("2023-06-08T16:45:00")},{id:"4",symbol:"INFY",name:"Infosys Ltd.",lastSearched:new Date("2023-06-07T09:20:00")},{id:"5",symbol:"ICICIBANK",name:"ICICI Bank Ltd.",lastSearched:new Date("2023-06-06T11:30:00")}]),[s,i]=(0,r.useState)(""),l=e.filter(e=>e.symbol.toLowerCase().includes(s.toLowerCase())||e.name.toLowerCase().includes(s.toLowerCase()));return(0,a.jsxs)("div",{className:"card w-100 mx-auto",children:[(0,a.jsxs)("div",{className:"card-header",children:[a.jsx("h5",{className:"card-title",children:"Stock Search History"}),a.jsx("p",{className:"card-text",children:"View and manage your recent stock searches"})]}),(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),console.log("Searching for:",s),s){let e={id:Date.now().toString(),symbol:s.toUpperCase(),name:`${s.toUpperCase()} Corporation`,lastSearched:new Date};t(t=>[e,...t.slice(0,4)]),i("")}},className:"d-flex mb-4",children:[a.jsx("input",{type:"text",placeholder:"Search stocks...",value:s,onChange:e=>i(e.target.value),className:"form-control me-2"}),a.jsx("button",{type:"submit",className:"btn btn-primary",children:a.jsx(n.Z,{className:"h-4 w-4"})})]}),a.jsx("div",{className:"border p-2 overflow-auto",style:{height:"300px"},children:l.map(e=>(0,a.jsxs)("div",{className:"d-flex justify-content-between align-items-center border-bottom py-2",children:[(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx("div",{className:"p-2 bg-primary text-white rounded-circle me-3",children:a.jsx(o.Z,{className:"h-4 w-4"})}),(0,a.jsxs)("div",{children:[a.jsx("p",{className:"mb-0 fw-semibold",children:e.symbol}),a.jsx("p",{className:"mb-0 text-muted",children:e.name})]})]}),(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[a.jsx("button",{className:"btn btn-outline-success btn-sm me-2",children:"Buy"}),a.jsx("button",{className:"btn btn-outline-danger btn-sm",children:"Sell"})]})]},e.id))})]})]})}},83478:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>r,default:()=>o});let a=(0,s(86843).createProxy)(String.raw`C:\Users\Shubham\Desktop\cion_next_v1.0\admin\src\app\(Mainbody)\dashboards\portfolio\history\page.tsx`),{__esModule:r,$$typeof:n}=a,o=a.default}};var t=require("../../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[1638,8224,337,1476,9687,9607,8038,3519],()=>s(33240));module.exports=a})();