import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DmM0KDA7.js";import{d as r}from"./designTokens-9Zu84yzh.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=(...e)=>e.filter((t,o,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:d="",children:l,iconNode:u,...s},i)=>c.createElement("svg",{ref:i,...x,width:t,height:t,stroke:e,strokeWidth:n?Number(o)*24/Number(t):o,className:m("lucide",d),...s},[...u.map(([f,h])=>c.createElement(f,h)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,t)=>{const o=c.forwardRef(({className:n,...d},l)=>c.createElement(b,{ref:l,iconNode:t,className:m(`lucide-${g(e)}`,n),...d}));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],y=p("ChevronLeft",v);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],w=p("ChevronRight",$),C=({images:e,autoPlay:t=!0,interval:o=3e3})=>{const[n,d]=c.useState(0),l=()=>{d(s=>(s+1)%e.length)},u=()=>{d(s=>(s-1+e.length)%e.length)};return c.useEffect(()=>{if(!t)return;const s=setInterval(l,o);return()=>clearInterval(s)},[n,t,o]),a.jsxs("div",{className:"relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg",children:[a.jsx("div",{className:"flex transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${n*100}%)`},children:e.map((s,i)=>a.jsx("img",{src:s,alt:`Slide ${i+1}`,className:`w-full object-cover rounded-${r.borderRadius.lg}`},i))}),a.jsx("button",{onClick:u,className:`absolute left-3 top-1/2 -translate-y-1/2 bg-${r.colors.background} 
        bg-opacity-50 p-2 rounded-${r.borderRadius.md} text-${r.colors.textPrimary} 
        hover:bg-opacity-70 transition-${r.transition}`,children:a.jsx(y,{size:24})}),a.jsx("button",{onClick:l,className:`absolute right-3 top-1/2 -translate-y-1/2 bg-${r.colors.background} 
        bg-opacity-50 p-2 rounded-${r.borderRadius.md} text-${r.colors.textPrimary} 
        hover:bg-opacity-70 transition-${r.transition}`,children:a.jsx(w,{size:24})}),a.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",children:e.map((s,i)=>a.jsx("span",{className:`h-2 w-2 rounded-full ${i===n?`bg-${r.colors.primary}`:"bg-gray-400"} transition-${r.transition}`},i))})]})};C.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}}}};export{C as default};
