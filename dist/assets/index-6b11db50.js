import{s as g,v as re,m as b,r as w,o as ue,c as P,a as u,x as ie,b as v,d as k,e as o,f as n,w as s,y as de,i as U,t as B,h as x,q as ce,k as F,F as K,g as T,z as ve}from"./index-048c2267.js";import{a as y}from"./auth-header-ad4d04ca.js";import{r as pe}from"./TrashIcon-acf970e6.js";const _="https://crm.web-hands.ru/api/v1";class me{getMe(){return g.get(_+"/user/",{headers:y()})}getOwners(){return g.get(_+"/owners/list/",{headers:y()})}getOwnerData(l){return g.get(_+"/owners/data/?id="+l,{headers:y()})}createNewOwner(l){return g.post(_+"/owners/save/",l,{headers:y()})}deleteOwner(l){return g.post(_+"/owners/delete/",l,{headers:y()})}getOwnerFields(){return g.get(_+"/owners/fields/",{headers:y()})}}const L=new me,fe=re("owner",{state:()=>({owners:[],owner:{},ownerFields:[]}),actions:{async getOwnersList(){try{const r=await L.getOwners();return this.owners=r.data.data,r}catch(r){return Promise.reject(r)}},async getOwnerData(r){try{const l=await L.getOwnerData(r);return this.owner=l.data.data,l}catch(l){return Promise.reject(l)}},async createNewOwner(r){try{const l=await L.createNewOwner(r);console.log("resssspo",l),l.data.code===200?b.success(l.data.data):(console.error("Error fetching data:",l.statusText),b.error(l.data.data))}catch(l){console.error("Error fetching data:",l)}},async deleteOwner(r){try{const l=await L.deleteOwner(r);l.data.code===200?b.success(l.data.data):(console.error("Error fetching data:",l.statusText),b.error(l.data.data))}catch(l){console.error("Error fetching data:",l)}},async getOwnerFields(){try{const r=await L.getOwnerFields();return this.ownerFields=r.data.data,r}catch(r){return Promise.reject(r)}}}}),he={class:"px-[5rem] pt-[3.2rem] pb-[1rem] h-full relative flex-1",style:{width:"calc(100vh - 24rem)"}},ge={class:"flex gap-x-[3rem] mb-m-base"},we=o("div",{class:"text-main-title font-bold"},"Собственники",-1),ye={class:"flex flex-col mb-m-base"},_e={class:"flex flex-wrap mb-m-base gap-[1.6rem]"},be={class:"numeric-input-title"},Ce={class:"flex gap-x-[3rem] items-center"},Oe=o("div",null,[U(" Найдено: "),o("span",null,"5")],-1),ke=o("svg",{width:"22",height:"23",viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18 11.5C18 15.366 14.866 18.5 11 18.5C7.13401 18.5 4 15.366 4 11.5C4 7.63401 7.13401 4.5 11 4.5C14.866 4.5 18 7.63401 18 11.5ZM11 12.2071L8.35355 14.8536L7.64645 14.1464L10.2929 11.5L7.64645 8.85355L8.35355 8.14645L11 10.7929L13.6464 8.14645L14.3536 8.85355L11.7071 11.5L14.3536 14.1464L13.6464 14.8536L11 12.2071Z",fill:"#4064BF"})],-1),xe={class:"flex w-full mt-20"},Fe={class:"w-1/2"},Le={class:"flex mb-10"},Ue=o("div",{class:"w-[100px]"},"ФИО",-1),De={class:"flex mb-10"},Be=o("div",{class:"w-[100px]"},"Телефон",-1),Ie={class:"flex mb-10"},qe=o("div",{class:"w-[100px]"},"Email",-1),Me={class:"flex mb-10"},Ne=o("div",{class:"w-[100px]"},"O клиенте",-1),Se=o("div",{class:"w-1/2 bg-stone-200"},null,-1),Ve={key:0},Te={__name:"index",setup(r){const l=fe(),c=w(!1),D=w(!1),M=w(null),C=w(!1),I=w(null),j=async()=>{try{await l.getOwnerFields(),I.value=l.ownerFields}catch{}},p=w({type:1}),z=a=>{},R=a=>{D.value=!0,M.value=a,Q(a)},$=()=>{C.value=!C.value},Z=a=>{D.value=!1},A=async a=>{const t=new FormData;for(var m in p.value)p.value.hasOwnProperty(m)&&t.append(m,p.value[m]);c.value=!0,await l.createNewOwner(t),await l.getOwnersList(),c.value=!1,C.value=!1},H=a=>{a.preventDefault(),a.stopPropagation()},G=async(a,t)=>{c.value=!0;const m={id:t};await l.deleteOwner(m),c.value=!0,S()},J=[{title:"id",key:"id",dataIndex:"id",width:50},{title:"Клиент",dataIndex:"fio",key:"fio"},{title:"Телефон",dataIndex:"phone_format",key:"phone"},{title:"Email",dataIndex:"email",key:"email"},{title:"O клиенте",dataIndex:"about",key:"about"},{title:"Действие",key:"action"}];ue(()=>{S(),j()});const N=P(()=>l.owners),i=P(()=>l.owner),S=async()=>{c.value=!0;try{await l.getOwnersList().then(a=>{a.data.result==="error"&&b.error(a.data.text),c.value=!1})}catch{}},Q=async a=>{c.value=!0;try{await l.getOwnerData(a).then(t=>{t.data.result==="error"&&b.error(t.data.text),c.value=!1})}catch{}},W=(a,t)=>{p.value[a.code]=t.target.value};return(a,t)=>{const m=u("a-tab-pane"),X=u("a-tabs"),f=u("a-input"),Y=u("a-tooltip"),O=u("a-select"),V=u("a-button"),ee=u("a-space"),ae=u("a-page-header"),te=u("a-popconfirm"),le=u("a-table"),h=u("a-form-item"),E=u("a-modal"),ne=u("a-select-option"),oe=u("a-form"),se=ie("mask");return v(),k("div",he,[o("div",ge,[we,o("div",null,[n(X,{activeKey:a.activeKey,"onUpdate:activeKey":t[0]||(t[0]=e=>a.activeKey=e),onChange:a.onTabsChange,type:"card",class:"h-[4rem] text-inherit"},{default:s(()=>[n(m,{key:"1",tab:"Мои",class:"h-[4rem] text-inherit"}),n(m,{key:"2",tab:"Все",class:"h-[4rem]"})]),_:1},8,["activeKey","onChange"])])]),o("div",ye,[o("div",_e,[n(Y,{trigger:["focus"],placement:"topLeft","overlay-class-name":"numeric-input"},de({default:s(()=>[n(f,{value:a.inputValue,"onUpdate:value":t[1]||(t[1]=e=>a.inputValue=e),placeholder:"Input a number","max-length":30,style:{width:"28rem"},onBlur:a.onBlur},null,8,["value","onBlur"])]),_:2},[a.inputValue?{name:"title",fn:s(()=>[o("span",be,B(a.formatValue),1)]),key:"0"}:void 0]),1024),n(O,{value:a.value,"onUpdate:value":t[2]||(t[2]=e=>a.value=e),mode:"tags",style:{width:"28rem"},placeholder:"Ответственный брокер",options:a.options,onChange:a.handleChange},null,8,["value","options","onChange"]),n(O,{value:a.value,"onUpdate:value":t[3]||(t[3]=e=>a.value=e),mode:"tags",style:{width:"28rem"},placeholder:"Тип сделки",options:a.options,onChange:a.handleChange},null,8,["value","options","onChange"]),n(O,{value:a.value,"onUpdate:value":t[4]||(t[4]=e=>a.value=e),mode:"tags",style:{width:"28rem"},placeholder:"Статус",options:a.options,onChange:a.handleChange},null,8,["value","options","onChange"]),n(O,{value:a.value,"onUpdate:value":t[5]||(t[5]=e=>a.value=e),mode:"tags",style:{width:"28rem"},placeholder:"Статус",options:a.options,onChange:a.handleChange},null,8,["value","options","onChange"])]),o("div",Ce,[Oe,n(ee,{class:"mr-12"},{default:s(()=>[n(V,{size:"middle",class:"flex items-center gap-1"},{default:s(()=>[U(" Сбросить всё "),ke]),_:1})]),_:1})])]),n(ae,{class:"demo-page-header",style:{border:"1px solid rgb(235, 237, 240)"},onBack:t[6]||(t[6]=()=>a.$router.go(-1))},{extra:s(()=>[n(V,{onClick:$,key:"1",type:"primary"},{default:s(()=>[U(" Добавить собственника ")]),_:1})]),_:1}),n(le,{onChange:t[8]||(t[8]=e=>z()),columns:J,"data-source":N.value,pagination:{pageSize:10,total:N.value.total},"custom-row":e=>{if(e.id)return{onClick:d=>R(e.id)}}},{bodyCell:s(({column:e,record:d})=>[e.key==="action"?(v(),x(te,{key:0,title:"Действительно удалить?","ok-text":"Да","cancel-text":"Нет",onConfirm:q=>G(q,d.id),onCancel:a.cancel},{default:s(()=>[n(ce(pe),{onClick:t[7]||(t[7]=q=>H(q)),class:"w-10 h-10 cursor-pointer"})]),_:2},1032,["onConfirm","onCancel"])):F("",!0)]),_:1},8,["data-source","pagination","custom-row"]),n(E,{open:D.value,"onUpdate:open":t[13]||(t[13]=e=>D.value=e),footer:null,title:"ID: "+M.value,width:"80%",class:"h-[80vh]",onOk:Z},{default:s(()=>[o("div",xe,[o("div",Fe,[o("ul",null,[o("li",Le,[Ue,n(h,null,{default:s(()=>[n(f,{value:i.value.fio,"onUpdate:value":t[9]||(t[9]=e=>i.value.fio=e),"default-value":i.value.fio},null,8,["value","default-value"])]),_:1})]),o("li",De,[Be,n(h,null,{default:s(()=>[n(f,{value:i.value.phone_format,"onUpdate:value":t[10]||(t[10]=e=>i.value.phone_format=e),"default-value":i.value.phone_format},null,8,["value","default-value"])]),_:1})]),o("li",Ie,[qe,n(h,null,{default:s(()=>[n(f,{value:i.value.email,"onUpdate:value":t[11]||(t[11]=e=>i.value.email=e),"default-value":i.value.email},null,8,["value","default-value"])]),_:1})]),o("li",Me,[Ne,n(h,null,{default:s(()=>[n(f,{value:i.value.about,"onUpdate:value":t[12]||(t[12]=e=>i.value.about=e),"default-value":i.value.about},null,8,["value","default-value"])]),_:1})])])]),Se])]),_:1},8,["open","title"]),n(E,{open:C.value,"onUpdate:open":t[14]||(t[14]=e=>C.value=e),title:"Новый собственник",width:"30%",class:"h-[80vh]",onOk:A},{default:s(()=>[I.value?(v(),k("div",Ve,[n(oe,{model:a.newItem,name:"basic",autocomplete:"off",onFinish:a.onFinish,onFinishFailed:a.onFinishFailed,layout:"vertical"},{default:s(()=>[(v(!0),k(K,null,T(I.value,e=>(v(),k("div",{class:"flex flex-col justify-start !text-left",key:e.code},[e.type==="text"||e.type==="email"||e.type==="textarea"?(v(),x(h,{key:0,label:e.name,name:e.name,rules:[{required:e.required?"true":"false"}]},{default:s(()=>[n(f,{ref_for:!0,ref:e.code,type:e.html,onChange:d=>W(e,d),class:"!w-full"},null,8,["type","onChange"]),U(" "+B(p.value[e.code])+" - "+B(e.required),1)]),_:2},1032,["label","name","rules"])):F("",!0),e.type==="phone"?(v(),x(h,{key:1,label:e.name,name:e.name,rules:[{required:e.required}],class:"!w-full"},{default:s(()=>[ve(n(f,{value:p.value[e.code],"onUpdate:value":d=>p.value[e.code]=d,type:"tel",placeholder:"+7"},null,8,["value","onUpdate:value"]),[[se,"+# (###) ###-##-##"]])]),_:2},1032,["label","name","rules"])):F("",!0),e.type=="select"?(v(),x(h,{key:2,label:e.name,name:e.name,rules:[{required:e.required,message:"Required"}]},{default:s(()=>[n(O,{value:p.value[e.code],"onUpdate:value":d=>p.value[e.code]=d,"show-search":"","filter-option":a.filterOption,class:"!w-full"},{default:s(()=>[(v(!0),k(K,null,T(e.options,d=>(v(),x(ne,{key:d.id,value:d.id},{default:s(()=>[U(B(d.value),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value","filter-option"])]),_:2},1032,["label","name","rules"])):F("",!0)]))),128))]),_:1},8,["model","onFinish","onFinishFailed"])])):F("",!0)]),_:1},8,["open"])])}}};export{Te as default};