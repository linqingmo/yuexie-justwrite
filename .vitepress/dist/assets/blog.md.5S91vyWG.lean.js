import{_ as c,p as i,o as r,c as n,j as a,t as o,N as p,F as d,C as g,b as v}from"./chunks/framework.CJaFxe9b.js";const b=["href"],m={style:{color:"var(--vp-c-text-1)"}},_={style:{color:"var(--vp-c-gray-1)"}},f={__name:"BlogEntry",props:{blog:{type:Object,required:!0,default:()=>({title:"",summary:"",publishedDate:"",url:""})}},setup(e){const t=i(!1);return(u,l)=>(r(),n("a",{href:e.blog.url,class:"blog-entry",onMouseover:l[0]||(l[0]=s=>t.value=!0),onMouseleave:l[1]||(l[1]=s=>t.value=!1)},[a("h3",{style:p({color:t.value?"var(--vp-c-indigo-1)":"var(--vp-c-text-1)"})},o(e.blog.title),5),a("p",m,o(e.blog.summary),1),a("p",_,"发布日期: "+o(e.blog.publishedDate),1)],40,b))}},y=c(f,[["__scopeId","data-v-4518de44"]]),B=JSON.parse('{"title":"博客","description":"","frontmatter":{"title":"博客"},"headers":[],"relativePath":"blog.md","filePath":"blog.md"}'),h={name:"blog.md"},D=Object.assign(h,{setup(e){const t=[{title:"关于悦写App",summary:"市面上已经有那么多写作App了，为什么我还要开发一款新的写作App?",publishedDate:"2025-01-15",url:"./blogs/start"}];return(u,l)=>(r(),n("div",null,[(r(!0),n(d,null,g(t.reverse(),s=>(r(),v(y,{blog:s},null,8,["blog"]))),256))]))}});export{B as __pageData,D as default};