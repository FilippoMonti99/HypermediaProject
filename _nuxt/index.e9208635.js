import{o as s,c as r,a,t as d,b as u,h as p,i as g,_ as h,w as v,u as f,F as y,r as k,e as b,j as w,f as x,g as j}from"./entry.a1e29221.js";import{u as A}from"./fetch.008acdb8.js";import{_ as C,a as V,b as B,c as N,d as S,e as $}from"./sfondo.0aa71c7b.js";const L={class:"card-area"},F={class:"image-container"},R=["src"],T={class:"title"},z={__name:"CardArea",props:["title","link","imm_link"],setup(t){return(e,n)=>{const i=h;return s(),r("div",L,[a("div",F,[a("img",{class:"img",src:t.imm_link,alt:""},null,8,R)]),a("span",T,d(t.title),1),u(i,{to:t.link,class:"linkstyle2"},{default:p(()=>[g("see more information")]),_:1},8,["to"])])}}},E=""+new URL("invest.adf3e50a.png",import.meta.url).href;const H=w('<div class="cont-ar1"><div class="image2"><img id="a1" src="'+E+'" alt=""></div><div class="aree"><h1>Areas of investment</h1><p class="p2">At Innovate Ventures, we are driven by a strong belief in the power of innovation and the transformative potential of visionary entrepreneurs</p></div></div><div class="sottot"><h2> We have carefully chosen our areas of investment to strategically position ourselves for long-term success and impactful returns. We recognize that focusing our efforts on specific sectors allows us to develop a deep expertise and a comprehensive understanding of the unique challenges and opportunities within those industries. This focused approach enables us to identify and support the most promising startups, providing them with the necessary resources, guidance, and capital to thrive and disrupt their respective markets. </h2></div>',2),I={id:"card-container"},D={__name:"index",async setup(t){let e,n;const{data:i}=([e,n]=v(()=>A(x().public.serverURL+"/areas","$Stmmz1SXB6")),e=await e,n(),e),m=c=>{const _=`/assets/img/${c}.jpeg`;return Object.assign({"/assets/img/Economy.jpeg":C,"/assets/img/Health.jpeg":V,"/assets/img/Tourism.jpeg":B,"/assets/img/innov.jpeg":N,"/assets/img/investment.jpeg":S,"/assets/img/sfondo.jpeg":$})[_].default};return f({title:"All areas - Innovate Ventures",meta:[{name:"description",content:"All areas page, the 3 main areas in which we invest"},{name:"keywords",content:"areas, economy, tourism, healthcare"}]}),(c,_)=>{const l=z;return s(),r("main",null,[H,a("div",I,[(s(!0),r(y,null,k(b(i),o=>(s(),j(l,{title:o.name,link:"/areas/"+o.id,imm_link:m(o.name)},null,8,["title","link","imm_link"]))),256))])])}}};export{D as default};
