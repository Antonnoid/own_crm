import{u as f}from"./user.module-e0da1353.js";import{_ as g,r as v,o as x,c as h,m as y,a as c,b as o,d as l,e as a,f as b,w as i,F as w,g as k,h as S,i as B,t as I,p as N,j as V}from"./index-048c2267.js";import"./auth-header-ad4d04ca.js";const j="/assets/places-elem-doc-3cd158fd.svg";const C=s=>(N("data-v-5b352159"),s=s(),V(),s),D={class:"p-8",id:"app"},E={class:"single__main-slider --info show-flex"},F={class:"flex flex-wrap gap-[1.6rem]"},L=C(()=>a("img",{src:j,alt:"icon"},null,-1)),M={__name:"index",setup(s){const r=f(),t=v(!1);x(()=>{_()});const d=h(()=>r.places),_=async()=>{t.value=!0;try{await r.getPlacesList().then(e=>{e.data.result==="error"&&y.error(e.data.text),t.value=!1})}catch(e){console.error("Error fetching data in component:",e)}};return(e,P)=>{const p=c("router-link"),u=c("a-spin");return o(),l("div",D,[a("div",null,[b(u,{spinning:t.value},{default:i(()=>[a("div",E,[a("div",F,[(o(!0),l(w,null,k(d.value,(n,m)=>(o(),S(p,{to:"/places/"+n.code,class:"w-[27rem] p-[4rem] flex flex-col items-center justify-center gap-y-4 border-solid border-2 border-placesBorder rounded-[.8rem]",key:m},{default:i(()=>[L,B(" "+I(n.title),1)]),_:2},1032,["to"]))),128))])])]),_:1},8,["spinning"])])])}}},z=g(M,[["__scopeId","data-v-5b352159"]]);export{z as default};