import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BZISi7jw.js";import{d as i}from"./designTokens-d5yS2GQD.js";import{L as v}from"./index-DFz6ZzVr.js";import{L as n}from"./index-CY9OYh_r.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DfhVwIzT.js";const y=({action:t=()=>{console.log("empty action")},children:a})=>{const[s,f]=h.useTransition(),g=x=>{f(()=>t(x))};return e.jsxs("form",{className:`border border-[${i.borderWidth.md}] p-2 rounded-${i.borderRadius.md}`,action:g,children:[s&&"pending",!s&&a]})};y.__docgenInfo={description:"",methods:[],displayName:"Form",props:{action:{required:!1,tsType:{name:"signature",type:"function",raw:"(formData: FormData) => void | Promise<void>",signature:{arguments:[{type:{name:"FormData"},name:"formData"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"",defaultValue:{value:`() => {\r
	console.log('empty action');\r
}`,computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function T(t){return new Promise(a=>setTimeout(a,t))}const N={title:"Components/Molecules/Form",component:y,tags:["autodocs"],argTypes:{action:()=>{console.log("action")},children:{control:"text"}}},o={args:{children:e.jsxs("div",{children:["Name : ",e.jsx(n,{type:"text"}),"Tel : ",e.jsx(n,{type:"tel"})]})}},r={args:{children:e.jsxs("div",{children:["Name : ",e.jsx(n,{type:"text"}),"Tel : ",e.jsx(n,{type:"tel"}),e.jsx(v,{type:"submit",children:"Submit"})]}),action:async t=>{await Promise.all([console.log(t),T(5e3)])}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <div>\r
                Name : <LazyInput type="text" />\r
                Tel : <LazyInput type="tel" />\r
            </div>
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <div>\r
                Name : <LazyInput type="text" />\r
                Tel : <LazyInput type="tel" />\r
                <LazyButton type="submit">Submit</LazyButton>\r
            </div>,
    action: async (formData: FormData) => {
      await Promise.all([console.log(formData), timeout(5000)]);
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const w=["Default","WithAction"];export{o as Default,r as WithAction,w as __namedExportsOrder,N as default};
