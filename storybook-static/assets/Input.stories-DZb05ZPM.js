import S from"./Input-DgQIi-g_.js";import"./jsx-runtime-D_zvdyIk.js";import"./designTokens-BPi3JOB7.js";const W={title:"Components/Atoms/Input",component:S,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","checkbox","radio","file"]},label:{control:"text"},error:{control:"text"},success:{control:"boolean"},fullWidth:{control:"boolean"}}},e={args:{label:"Nom",placeholder:"Entrez votre nom..."}},r={args:{label:"Email",type:"email",placeholder:"Entrez votre email...",error:"Adresse email invalide"}},o={args:{label:"Mot de passe",type:"password",placeholder:"Entrez votre mot de passe..."}},a={args:{label:"J'accepte les termes et conditions",type:"checkbox"}},s={args:{label:"Option 1",type:"radio",name:"options"}},t={args:{label:"Recherche",type:"text",placeholder:"Rechercher...",icon:"🔍"}};var c,n,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Nom',
    placeholder: 'Entrez votre nom...'
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Entrez votre email...',
    error: 'Adresse email invalide'
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,u,h;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Mot de passe',
    type: 'password',
    placeholder: 'Entrez votre mot de passe...'
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "J'accepte les termes et conditions",
    type: 'checkbox'
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,E,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    type: 'radio',
    name: 'options'
  }
}`,...(v=(E=s.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var f,z,R;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Recherche',
    type: 'text',
    placeholder: 'Rechercher...',
    icon: '🔍'
  }
}`,...(R=(z=t.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const A=["Default","WithError","Password","Checkbox","Radio","WithIcon"];export{a as Checkbox,e as Default,o as Password,s as Radio,r as WithError,t as WithIcon,A as __namedExportsOrder,W as default};
