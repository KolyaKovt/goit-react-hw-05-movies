import{a as i,r as o,j as t,u as m,b as l,L as x}from"./index-ARm-7fpl.js";const h=()=>{const[c,n]=i(),[s,a]=o.useState(""),r=e=>{e.preventDefault();const u=s.trim();n(u?{query:u}:{})};return t.jsxs("form",{onSubmit:r,children:[t.jsx("input",{value:s,type:"text",onChange:e=>a(e.target.value)}),t.jsx("button",{type:"submit",children:"Search"})]})},d=()=>{const[c,n]=o.useState([]),[s]=i(),a=m(),r=s.get("query");return o.useEffect(()=>{l(r).then(n)},[r,s]),t.jsx("ul",{children:c.map(e=>t.jsx("li",{children:t.jsx(x,{to:e.id.toString(),state:{from:a},children:e.title})},e.id))})},y=()=>t.jsxs(t.Fragment,{children:[t.jsx(h,{}),t.jsx(d,{})]});export{y as default};
