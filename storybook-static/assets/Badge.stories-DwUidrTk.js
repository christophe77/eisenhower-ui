import{j as x}from"./jsx-runtime-D_zvdyIk.js";import{d as v}from"./designTokens-BPi3JOB7.js";const p=({text:l,variant:g="success"})=>x.jsx("span",{className:"px-3 py-1 text-sm rounded-full text-white",style:{background:v.colors[g]},children:l});p.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'success'",computed:!1}}}};const S={title:"Components/Atoms/Badge",component:p,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","warning","error"]}}},r={args:{text:"Success",variant:"success"}},e={args:{text:"Warning",variant:"warning"}},s={args:{text:"Error",variant:"error"}};var a,n,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    text: 'Success',
    variant: 'success'
  }
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var o,c,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Warning',
    variant: 'warning'
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,d,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'Error',
    variant: 'error'
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const y=["Success","Warning","Error"];export{s as Error,r as Success,e as Warning,y as __namedExportsOrder,S as default};
