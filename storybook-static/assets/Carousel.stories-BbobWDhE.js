import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DmM0KDA7.js";import{d as r}from"./designTokens-BPi3JOB7.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=(...e)=>e.filter((t,o,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:d="",children:l,iconNode:m,...a},c)=>i.createElement("svg",{ref:c,...w,width:t,height:t,stroke:e,strokeWidth:s?Number(o)*24/Number(t):o,className:g("lucide",d),...a},[...m.map(([y,v])=>i.createElement(y,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(e,t)=>{const o=i.forwardRef(({className:s,...d},l)=>i.createElement(C,{ref:l,iconNode:t,className:g(`lucide-${$(e)}`,s),...d}));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],k=x("ChevronLeft",j);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_=x("ChevronRight",N),b=({images:e,autoPlay:t=!0,interval:o=3e3})=>{const[s,d]=i.useState(0),l=()=>{d(a=>(a+1)%e.length)},m=()=>{d(a=>(a-1+e.length)%e.length)};return i.useEffect(()=>{if(!t)return;const a=setInterval(l,o);return()=>clearInterval(a)},[s,t,o]),n.jsxs("div",{className:"relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg",children:[n.jsx("div",{className:"flex transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${s*100}%)`},children:e.map((a,c)=>n.jsx("img",{src:a,alt:`Slide ${c+1}`,className:`w-full object-cover rounded-${r.borderRadius.lg}`},c))}),n.jsx("button",{onClick:m,className:`absolute left-3 top-1/2 -translate-y-1/2 bg-${r.colors.background} 
        bg-opacity-50 p-2 rounded-${r.borderRadius.md} text-${r.colors.textPrimary} 
        hover:bg-opacity-70 transition-${r.transition}`,children:n.jsx(k,{size:24})}),n.jsx("button",{onClick:l,className:`absolute right-3 top-1/2 -translate-y-1/2 bg-${r.colors.background} 
        bg-opacity-50 p-2 rounded-${r.borderRadius.md} text-${r.colors.textPrimary} 
        hover:bg-opacity-70 transition-${r.transition}`,children:n.jsx(_,{size:24})}),n.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",children:e.map((a,c)=>n.jsx("span",{className:`h-2 w-2 rounded-full ${c===s?`bg-${r.colors.primary}`:"bg-gray-400"} transition-${r.transition}`},c))})]})};b.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}}}};const L={title:"Components/Organisms/Carousel",component:b,tags:["autodocs"],argTypes:{autoPlay:{control:"boolean"},interval:{control:{type:"number",min:1e3,step:500}}}},u={args:{images:["https://placehold.co/800x400","https://placehold.co/800x400","https://placehold.co/800x400"],autoPlay:!0,interval:3e3}};var p,h,f;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    images: ["https://placehold.co/800x400", "https://placehold.co/800x400", "https://placehold.co/800x400"],
    autoPlay: true,
    interval: 3000
  }
}`,...(f=(h=u.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const A=["Default"];export{u as Default,A as __namedExportsOrder,L as default};
