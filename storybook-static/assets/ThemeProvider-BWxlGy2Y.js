import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as c}from"./index-BSnW-2jp.js";import{r as n}from"./index-DmM0KDA7.js";import{d as r}from"./designTokens-BPi3JOB7.js";const i=n.createContext(void 0);function d(){const e=n.useContext(i);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e}const h=""+new URL("light-DmoK3Fm-.webp",import.meta.url).href,l=""+new URL("dark-BwkN72dP.webp",import.meta.url).href,u=()=>{const{isDarkMode:e,toggleTheme:o}=d(),s=e?t.jsx("img",{className:"w-10",src:h,alt:"Enable light mode"}):t.jsx("img",{className:"w-10",src:l,alt:"Enable dark mode"});return t.jsx(c,{onClick:o,icon:s})};u.__docgenInfo={description:"",methods:[],displayName:"ThemeSwitcher"};const p=({children:e})=>{const[o,s]=n.useState(!1),a=()=>s(m=>!m);return t.jsx(i.Provider,{value:{isDarkMode:o,toggleTheme:a},children:t.jsx("div",{style:{backgroundColor:o?r.darkMode.background:r.colors.background,color:o?r.darkMode.textPrimary:r.colors.textPrimary,minHeight:"100vh",transition:r.transition},children:e})})};p.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{p as T,u as a,d as u};
