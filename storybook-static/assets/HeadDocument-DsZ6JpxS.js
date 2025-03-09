import{j as r}from"./jsx-runtime-D_zvdyIk.js";const u=({title:i="",metas:n,links:t,children:s})=>r.jsxs(r.Fragment,{children:[r.jsx("title",{children:i}),t==null?void 0:t.map((e,a)=>r.jsx("link",{rel:e.rel,href:e.href},`${e.rel}-${a}`)),n==null?void 0:n.map((e,a)=>r.jsx("meta",{name:e.name,content:e.content},`${e.name}-${a}`)),s]});u.__docgenInfo={description:"",methods:[],displayName:"HeadDocument",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},metas:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
	name: string;\r
	content: string;\r
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!0}}]}}],raw:"Meta[]"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
	rel: string;\r
	href: string;\r
}`,signature:{properties:[{key:"rel",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"Link[]"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{u as default};
