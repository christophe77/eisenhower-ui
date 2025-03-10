import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-BZISi7jw.js";import{L as i}from"./index-Cfd-LssR.js";import{Button as w}from"./Button-BRfPFCAs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DfhVwIzT.js";import"./clsx-B-dksMZM.js";import"./designTokens-d5yS2GQD.js";import"./useTheme-BdQCaBze.js";import"./ThemeContext-CnpANkVp.js";import"./proxy-Cu08OfLD.js";const K={title:"Components/Foundations/Grid",component:i,tags:["autodocs"]},e=()=>r.jsxs(i,{children:[r.jsx("div",{style:{background:"lightblue",padding:"1rem"},children:"Bloc 1"}),r.jsx("div",{style:{background:"lightgreen",padding:"1rem"},children:"Bloc 2"}),r.jsx("div",{style:{background:"lightcoral",padding:"1rem"},children:"Bloc 3"})]}),d=()=>r.jsxs(i,{maxWidth:"800px",align:"center",children:[r.jsx("div",{style:{background:"lightgray",padding:"1rem"},children:"Bloc 1"}),r.jsx("div",{style:{background:"lightgray",padding:"1rem"},children:"Bloc 2"}),r.jsx("div",{style:{background:"lightgray",padding:"1rem"},children:"Bloc 3"})]}),n=()=>r.jsxs(i,{fullWidth:!0,children:[r.jsx("div",{style:{background:"lightpink",padding:"1rem"},children:"Bloc 1"}),r.jsx("div",{style:{background:"lightpink",padding:"1rem"},children:"Bloc 2"}),r.jsx("div",{style:{background:"lightpink",padding:"1rem"},children:"Bloc 3"})]}),o=()=>r.jsxs(i,{animationType:"slide",animationDirection:"left",transitionDuration:"700ms",children:[r.jsx("div",{style:{background:"lightblue",padding:"1rem"},children:"Bloc 1"}),r.jsx("div",{style:{background:"lightgreen",padding:"1rem"},children:"Bloc 2"}),r.jsx("div",{style:{background:"lightcoral",padding:"1rem"},children:"Bloc 3"})]}),a=()=>r.jsxs(i,{animationType:"bounce",transitionDuration:"500ms",children:[r.jsx("div",{style:{background:"lightblue",padding:"1rem"},children:"Bloc 1"}),r.jsx("div",{style:{background:"lightgreen",padding:"1rem"},children:"Bloc 2"}),r.jsx("div",{style:{background:"lightcoral",padding:"1rem"},children:"Bloc 3"})]}),t=()=>{const[z,T]=I.useState(!0),D=Array.from({length:10},(s,l)=>l);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"m-4",children:r.jsx(w,{onClick:()=>T(!z),variant:"outline",children:"Toggle Grid"})}),r.jsx(i,{animationType:"fade",transitionDuration:"700ms",children:D.map((s,l)=>r.jsxs("div",{style:{background:"lightblue",padding:"1rem"},children:["Bloc ",l+1]},`${l}-${s.toLocaleString()}`))})]})};e.__docgenInfo={description:"",methods:[],displayName:"DefaultGrid"};d.__docgenInfo={description:"",methods:[],displayName:"CenteredGrid"};n.__docgenInfo={description:"",methods:[],displayName:"FullWidthGrid"};o.__docgenInfo={description:"",methods:[],displayName:"SlideInGrid"};a.__docgenInfo={description:"",methods:[],displayName:"BounceGrid"};t.__docgenInfo={description:"",methods:[],displayName:"ScrollAnimatedGrid"};var c,g,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => <LazyGrid>\r
        <div style={{
    background: 'lightblue',
    padding: '1rem'
  }}>Bloc 1</div>\r
        <div style={{
    background: 'lightgreen',
    padding: '1rem'
  }}>Bloc 2</div>\r
        <div style={{
    background: 'lightcoral',
    padding: '1rem'
  }}>Bloc 3</div>\r
    </LazyGrid>`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,u,h;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`() => <LazyGrid maxWidth="800px" align="center">\r
        <div style={{
    background: 'lightgray',
    padding: '1rem'
  }}>Bloc 1</div>\r
        <div style={{
    background: 'lightgray',
    padding: '1rem'
  }}>Bloc 2</div>\r
        <div style={{
    background: 'lightgray',
    padding: '1rem'
  }}>Bloc 3</div>\r
    </LazyGrid>`,...(h=(u=d.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,v,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => <LazyGrid fullWidth>\r
        <div style={{
    background: 'lightpink',
    padding: '1rem'
  }}>Bloc 1</div>\r
        <div style={{
    background: 'lightpink',
    padding: '1rem'
  }}>Bloc 2</div>\r
        <div style={{
    background: 'lightpink',
    padding: '1rem'
  }}>Bloc 3</div>\r
    </LazyGrid>`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,x,B;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => <LazyGrid animationType="slide" animationDirection="left" transitionDuration="700ms">\r
        <div style={{
    background: 'lightblue',
    padding: '1rem'
  }}>Bloc 1</div>\r
        <div style={{
    background: 'lightgreen',
    padding: '1rem'
  }}>Bloc 2</div>\r
        <div style={{
    background: 'lightcoral',
    padding: '1rem'
  }}>Bloc 3</div>\r
    </LazyGrid>`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var G,j,S;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`() => <LazyGrid animationType="bounce" transitionDuration="500ms">\r
        <div style={{
    background: 'lightblue',
    padding: '1rem'
  }}>Bloc 1</div>\r
        <div style={{
    background: 'lightgreen',
    padding: '1rem'
  }}>Bloc 2</div>\r
        <div style={{
    background: 'lightcoral',
    padding: '1rem'
  }}>Bloc 3</div>\r
    </LazyGrid>`,...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var f,_,L;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(true);
  const itemsToShow = 10;
  const colArray = Array.from({
    length: itemsToShow
  }, (_value, index) => index);
  return <>\r
            <div className="m-4">\r
                <Button onClick={() => setShow(!show)} variant="outline">\r
                    Toggle Grid\r
                </Button>\r
            </div>\r
            <LazyGrid animationType="fade" transitionDuration="700ms">\r
                {colArray.map((col, colIndex) => {
        return <div key={\`\${colIndex}-\${col.toLocaleString()}\`} style={{
          background: 'lightblue',
          padding: '1rem'
        }}>\r
                            Bloc {colIndex + 1}\r
                        </div>;
      })}\r
            </LazyGrid>\r
        </>;
}`,...(L=(_=t.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const M=["DefaultGrid","CenteredGrid","FullWidthGrid","SlideInGrid","BounceGrid","ScrollAnimatedGrid"];export{a as BounceGrid,d as CenteredGrid,e as DefaultGrid,n as FullWidthGrid,t as ScrollAnimatedGrid,o as SlideInGrid,M as __namedExportsOrder,K as default};
