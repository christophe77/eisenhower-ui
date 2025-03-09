import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{I as k}from"./index-DA68BSrF.js";import"./iframe-C_xkGExJ.js";import"./index-DmM0KDA7.js";const C={title:"Components/Atoms/Input",component:k,tags:["autodocs"],decorators:[S=>c.jsx("div",{className:"p-2 h-[120px] mb-5",children:c.jsx(S,{})})],argTypes:{type:{control:"select",options:["text","email","password","number","checkbox","radio","file"]},label:{control:"text"},error:{control:"text"},success:{control:"boolean"},fullWidth:{control:"boolean"}}},e={args:{label:"Nom",placeholder:"Entrez votre nom..."}},r={args:{label:"Email",type:"email",placeholder:"Entrez votre email...",error:"Adresse email invalide"}},o={args:{label:"Mot de passe",type:"password",placeholder:"Entrez votre mot de passe..."}},a={args:{label:"J'accepte les termes et conditions",type:"checkbox"}},s={args:{label:"Option 1",type:"radio",name:"options"}},t={args:{label:"Recherche",type:"text",placeholder:"Rechercher...",icon:"🔍"}};var n,l,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Nom',
    placeholder: 'Entrez votre nom...'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,i,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Entrez votre email...',
    error: 'Adresse email invalide'
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,h,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Mot de passe',
    type: 'password',
    placeholder: 'Entrez votre mot de passe...'
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,x,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "J'accepte les termes et conditions",
    type: 'checkbox'
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var E,v,f;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    type: 'radio',
    name: 'options'
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var R,z,I;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Recherche',
    type: 'text',
    placeholder: 'Rechercher...',
    icon: '🔍'
  }
}`,...(I=(z=t.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const N=["Default","WithError","Password","Checkbox","Radio","WithIcon"];export{a as Checkbox,e as Default,o as Password,s as Radio,r as WithError,t as WithIcon,N as __namedExportsOrder,C as default};
