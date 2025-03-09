import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-DmM0KDA7.js";import{G as i}from"./index-D2YujKei.js";import N from"./Button-DJYpCBvH.js";import"./iframe-B77-k6Rq.js";import"./clsx-B-dksMZM.js";import"./designTokens-9Zu84yzh.js";import"./useTheme-DrQdFbE0.js";import"./ThemeContext-Dz4fsFzT.js";import"./proxy-CEIfVRbT.js";const J={title:"Components/Foundations/Grid",component:i,tags:["autodocs"]},e=()=>r.jsxs(i,{children:[r.jsx("div",{style:{background:"lightblue",padding:"1rem"},children:"Bloc 1"}),r.jsx("div",{style:{background:"lightgreen",padding:"1rem"},children:"Bloc 2"}),r.jsx("div",{style:{background:"lightcoral",padding:"1rem"},children:"Bloc 3"})]}),d=()=>r.jsxs(i,{maxWidth:"800px",align:"center",children:[r.jsx("div",{style:{background:"lightgray",padding:"1rem"},children:"Bloc 1"}),r.jsx("div",{style:{background:"lightgray",padding:"1rem"},children:"Bloc 2"}),r.jsx("div",{style:{background:"lightgray",padding:"1rem"},children:"Bloc 3"})]}),n=()=>r.jsxs(i,{fullWidth:!0,children:[r.jsx("div",{style:{background:"lightpink",padding:"1rem"},children:"Bloc 1"}),r.jsx("div",{style:{background:"lightpink",padding:"1rem"},children:"Bloc 2"}),r.jsx("div",{style:{background:"lightpink",padding:"1rem"},children:"Bloc 3"})]}),o=()=>r.jsxs(i,{animationType:"slide",animationDirection:"left",transitionDuration:"700ms",children:[r.jsx("div",{style:{background:"lightblue",padding:"1rem"},children:"Bloc 1"}),r.jsx("div",{style:{background:"lightgreen",padding:"1rem"},children:"Bloc 2"}),r.jsx("div",{style:{background:"lightcoral",padding:"1rem"},children:"Bloc 3"})]}),t=()=>r.jsxs(i,{animationType:"bounce",transitionDuration:"500ms",children:[r.jsx("div",{style:{background:"lightblue",padding:"1rem"},children:"Bloc 1"}),r.jsx("div",{style:{background:"lightgreen",padding:"1rem"},children:"Bloc 2"}),r.jsx("div",{style:{background:"lightcoral",padding:"1rem"},children:"Bloc 3"})]}),a=()=>{const[D,I]=A.useState(!0),w=Array.from({length:10},(s,l)=>l);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"m-4",children:r.jsx(N,{onClick:()=>I(!D),variant:"outline",children:"Toggle Grid"})}),r.jsx(i,{animationType:"fade",transitionDuration:"700ms",children:w.map((s,l)=>r.jsxs("div",{style:{background:"lightblue",padding:"1rem"},children:["Bloc ",l+1]},`${l}-${s.toLocaleString()}`))})]})};e.__docgenInfo={description:"",methods:[],displayName:"DefaultGrid"};d.__docgenInfo={description:"",methods:[],displayName:"CenteredGrid"};n.__docgenInfo={description:"",methods:[],displayName:"FullWidthGrid"};o.__docgenInfo={description:"",methods:[],displayName:"SlideInGrid"};t.__docgenInfo={description:"",methods:[],displayName:"BounceGrid"};a.__docgenInfo={description:"",methods:[],displayName:"ScrollAnimatedGrid"};var c,g,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Grid>\r
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
    </Grid>`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,u,h;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Grid maxWidth="800px" align="center">\r
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
    </Grid>`,...(h=(u=d.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,v,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Grid fullWidth>\r
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
    </Grid>`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,x,B;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Grid animationType="slide" animationDirection="left" transitionDuration="700ms">\r
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
    </Grid>`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var G,j,S;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`() => <Grid animationType="bounce" transitionDuration="500ms">\r
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
    </Grid>`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var f,_,T;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
            <Grid animationType="fade" transitionDuration="700ms">\r
                {colArray.map((col, colIndex) => {
        return <div key={\`\${colIndex}-\${col.toLocaleString()}\`} style={{
          background: 'lightblue',
          padding: '1rem'
        }}>\r
                            Bloc {colIndex + 1}\r
                        </div>;
      })}\r
            </Grid>\r
        </>;
}`,...(T=(_=a.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const K=["DefaultGrid","CenteredGrid","FullWidthGrid","SlideInGrid","BounceGrid","ScrollAnimatedGrid"];export{t as BounceGrid,d as CenteredGrid,e as DefaultGrid,n as FullWidthGrid,a as ScrollAnimatedGrid,o as SlideInGrid,K as __namedExportsOrder,J as default};
