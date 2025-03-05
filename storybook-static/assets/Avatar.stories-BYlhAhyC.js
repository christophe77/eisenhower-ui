import{j as f}from"./jsx-runtime-D_zvdyIk.js";const i=({src:u,alt:g="Avatar",size:h="md"})=>{const v={sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"};return f.jsx("img",{src:u,alt:g,className:`rounded-full ${v[h]}`})};i.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const A={title:"Components/Atoms/Avatar",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},e={args:{src:"https://placehold.co/40",size:"sm"}},s={args:{src:"https://placehold.co/60",size:"md"}},a={args:{src:"https://placehold.co/80",size:"lg"}};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/40",
    size: "sm"
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var c,l,n;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/60",
    size: "md"
  }
}`,...(n=(l=s.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: "https://placehold.co/80",
    size: "lg"
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Small","Medium","Large"];export{a as Large,s as Medium,e as Small,x as __namedExportsOrder,A as default};
