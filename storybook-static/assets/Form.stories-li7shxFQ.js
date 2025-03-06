import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DmM0KDA7.js";import{d as i}from"./designTokens-BPi3JOB7.js";import v from"./Button-DdWReOBm.js";import n from"./Input-DgQIi-g_.js";import"./clsx-B-dksMZM.js";import"./proxy-CEIfVRbT.js";const f=({action:t=()=>{console.log("empty action")},children:a})=>{const[s,g]=h.useTransition(),y=x=>{g(()=>t(x))};return e.jsxs("form",{className:`border border-[${i.borderWidth.md}] p-2 rounded-${i.borderRadius.md}`,action:y,children:[s&&"pending",!s&&a]})};f.__docgenInfo={description:"",methods:[],displayName:"Form",props:{action:{required:!1,tsType:{name:"signature",type:"function",raw:"(formData: FormData) => void | Promise<void>",signature:{arguments:[{type:{name:"FormData"},name:"formData"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"",defaultValue:{value:`() => {\r
	console.log('empty action');\r
}`,computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function T(t){return new Promise(a=>setTimeout(a,t))}const I={title:"Components/Molecules/Form",component:f,tags:["autodocs"],argTypes:{action:()=>{console.log("action")},children:{control:"text"}}},o={args:{children:e.jsxs("div",{children:["Name : ",e.jsx(n,{type:"text"}),"Tel : ",e.jsx(n,{type:"tel"})]})}},r={args:{children:e.jsxs("div",{children:["Name : ",e.jsx(n,{type:"text"}),"Tel : ",e.jsx(n,{type:"tel"}),e.jsx(v,{type:"submit",children:"Submit"})]}),action:async t=>{await Promise.all([console.log(t),T(5e3)])}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <div>\r
                Name : <Input type="text" />\r
                Tel : <Input type="tel" />\r
            </div>
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <div>\r
                Name : <Input type="text" />\r
                Tel : <Input type="tel" />\r
                <Button type="submit">Submit</Button>\r
            </div>,
    action: async (formData: FormData) => {
      await Promise.all([console.log(formData), timeout(5000)]);
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const S=["Default","WithAction"];export{o as Default,r as WithAction,S as __namedExportsOrder,I as default};
