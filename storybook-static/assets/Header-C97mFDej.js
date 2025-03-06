import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as s}from"./designTokens-BPi3JOB7.js";import{u as t,a as l}from"./ThemeProvider-keJ5jzBb.js";import{S as o}from"./SidebarMenu-QUTdfJcm.js";const m=({title:a="",items:n=[]})=>{const{isDarkMode:i}=t();return e.jsxs("header",{className:"w-full p-4 shadow-md flex justify-between items-center",style:{backgroundColor:i?s.darkMode.primary:s.colors.primary},children:[e.jsx(o,{}),e.jsx("h1",{className:"text-xl font-bold pl-15",children:`<${a}>`}),e.jsx("ul",{className:"inline whitespace-nowrap",children:n.map(r=>e.jsx("li",{className:`w-fit inline-block mx-1 p-3 ${r.link&&"cursor-pointer"}`,children:r.name},`${r.name}-${r.link??"-"}`))}),e.jsx(l,{})]})};m.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
	name: string;\r
	link?: string;\r
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"link",value:{name:"string",required:!1}}]}}],raw:`{\r
	name: string;\r
	link?: string;\r
}[]`},description:"",defaultValue:{value:"[]",computed:!1}}}};export{m as H};
