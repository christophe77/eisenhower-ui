import{j as I}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-DmM0KDA7.js";import{d as _}from"./designTokens-BPi3JOB7.js";var $=new Map,x=new WeakMap,j=0,G=void 0;function N(e){return e?(x.has(e)||(j+=1,x.set(e,j.toString())),x.get(e)):"0"}function O(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?N(e.root):e[t]}`).toString()}function Y(e){const t=O(e);let n=$.get(t);if(!n){const l=new Map;let u;const s=new IntersectionObserver(r=>{r.forEach(a=>{var i;const p=a.isIntersecting&&u.some(o=>a.intersectionRatio>=o);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=p),(i=l.get(a.target))==null||i.forEach(o=>{o(p,a)})})},e);u=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:l},$.set(t,n)}return n}function M(e,t,n={},l=G){if(typeof window.IntersectionObserver>"u"&&l!==void 0){const i=e.getBoundingClientRect();return t(l,{isIntersecting:l,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:u,observer:s,elements:r}=Y(n),a=r.get(e)||[];return r.has(e)||r.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(r.delete(e),s.unobserve(e)),r.size===0&&(s.disconnect(),$.delete(u))}}function W({threshold:e,delay:t,trackVisibility:n,rootMargin:l,root:u,triggerOnce:s,skip:r,initialInView:a,fallbackInView:i,onChange:p}={}){var o;const[v,q]=g.useState(null),h=g.useRef(p),[b,T]=g.useState({inView:!!a,entry:void 0});h.current=p,g.useEffect(()=>{if(r||!v)return;let c;return c=M(v,(w,m)=>{T({inView:w,entry:m}),h.current&&h.current(w,m),m.isIntersecting&&s&&c&&(c(),c=void 0)},{root:u,rootMargin:l,threshold:e,trackVisibility:n,delay:t},i),()=>{c&&c()}},[Array.isArray(e)?e.toString():e,v,u,l,s,r,n,i,t]);const d=(o=b.entry)==null?void 0:o.target,V=g.useRef(void 0);!v&&d&&!s&&!r&&V.current!==d&&(V.current=d,T({inView:!!a,entry:void 0}));const f=[q,b.inView,b.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}const B=({columns:e=3,sm:t=1,md:n=2,lg:l=3,gap:u=_.spacing.md,maxWidth:s="1200px",fullWidth:r=!1,align:a="center",autoFit:i=!1,autoFill:p=!1,minColumnWidth:o="200px",maxColumnWidth:v="1fr",alignItems:q="center",justifyItems:h="center",alignContent:b="stretch",justifyContent:T="start",transitionDuration:d="300ms",animationType:V="fade",animationDirection:f="top",children:c,className:w=""})=>{let m;i?m=`repeat(auto-fit, minmax(${o}, ${v}))`:p?m=`repeat(auto-fill, minmax(${o}, ${v}))`:m=`repeat(${e}, 1fr)`;const E={"@media (max-width: 640px)":`repeat(${t}, 1fr)`,"@media (min-width: 641px) and (max-width: 1024px)":`repeat(${n}, 1fr)`,"@media (min-width: 1025px)":`repeat(${l}, 1fr)`},S=(y,C)=>y==="fade"?{opacity:0,transition:`opacity ${d} ease-in-out`}:y==="slide"?{transform:{left:"translateX(-100%)",right:"translateX(100%)",top:"translateY(-100%)",bottom:"translateY(100%)"}[C],opacity:0,transition:`transform ${d} ease-in-out, opacity ${d} ease-in-out`}:y==="bounce"?{animation:`bounce ${d} ease-in-out infinite`}:{},[A,R]=W({triggerOnce:!0,threshold:.2});return I.jsx("div",{className:`grid-container ${w}`,style:{display:"grid",gap:u,gridTemplateColumns:m,maxWidth:r?"100%":s,margin:a==="center"?"0 auto":a==="left"?"0 auto 0 0":"0 0 0 auto",padding:r?"0":"0 1rem",alignItems:q,justifyItems:h,alignContent:b,justifyContent:T,transition:`all ${d} ease-in-out`,...E},children:g.Children.map(c,y=>I.jsx("div",{ref:A,style:{...S(V,f),opacity:R?1:0,transform:R?"translateY(0)":"translateY(50px)"},children:g.cloneElement(y,{style:{...y.props.style}})}))})};B.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},sm:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},md:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},lg:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'1rem'",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'1200px'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},autoFit:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoFill:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minColumnWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'200px'",computed:!1}},maxColumnWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'1fr'",computed:!1}},alignItems:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},justifyItems:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},alignContent:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}]},description:"",defaultValue:{value:"'stretch'",computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:`| 'start'\r
| 'center'\r
| 'end'\r
| 'space-between'\r
| 'space-around'`,elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},transitionDuration:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'300ms'",computed:!1}},animationType:{required:!1,tsType:{name:"union",raw:"'fade' | 'slide' | 'bounce'",elements:[{name:"literal",value:"'fade'"},{name:"literal",value:"'slide'"},{name:"literal",value:"'bounce'"}]},description:"",defaultValue:{value:"'fade'",computed:!1}},animationDirection:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{B as G};
