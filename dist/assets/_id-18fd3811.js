import{u as L}from"./user.module-e0da1353.js";import{r as _,u as O,n as E,l as P,o as $,a as f,b as t,d as o,e as u,t as v,k as m,F as y,g as k,i as V,h as c,w as d,f as C}from"./index-048c2267.js";import"./auth-header-ad4d04ca.js";const j={class:"w-full"},I={id:"app"},M={class:"single__main"},T={class:""},z={key:0,class:"single__title"},A={key:1,class:"flex gap-8"},Q={__name:"_id",setup(G){const s=_([]),i=L(),r=O(),S=E();_();const b=_([]),D=P({data:[],value:[],fetching:!1}),N=async(l,p,h)=>{await i.getOptionsData(l,p,h),b.value=i.optionData},n=_({id:r.params.id,place:r.path.split("/")[2],fields:{}});$(()=>{R()});const R=async()=>{try{await i.getPlacesSubChild(r.path.split("/")[2],r.params.id),s.value=i.placesSubChild}catch(l){console.error("Error fetching data in component:",l)}},x=(l,p)=>p.value.toLowerCase().indexOf(l.toLowerCase())>=0,q=l=>{console.log(`selected ${l}`)},F=async()=>{await i.addNewPlaceChild(n.value),S.back(),s.value=i.placesSubChild,console.log("new",n)};return(l,p)=>{const h=f("a-input"),g=f("a-form-item"),B=f("a-select-option"),U=f("a-select");return t(),o("div",j,[u("main",I,[u("div",{class:"filter"},[u("div",{class:"filter__task --w-refresh hidden-desktop"},[u("div",{class:"filter__refresh"},[u("div",{onClick:F,class:"filter__refresh-btn"}," Обновить ")])])]),u("div",M,[u("div",T,[s.value&&s.value[0]?(t(),o("div",z,[u("span",null,v(s.value[0].title),1)])):m("",!0),s.value&&s.value[0]?(t(),o("div",A,[(t(!0),o(y,null,k(s.value[0].fields,e=>(t(),o("div",{key:e.id},[V(v(e)+" ",1),e.type==="text"?(t(),c(g,{key:0,label:e.name,name:e.name,rules:[{required:e.required,message:"Required"}]},{default:d(()=>[C(h,{value:n.value.fields[e.code],"onUpdate:value":a=>n.value.fields[e.code]=a,defaultValue:e.value,ref_for:!0,ref:e.code,type:e.html,class:"!w-[200px]"},null,8,["value","onUpdate:value","defaultValue","type"])]),_:2},1032,["label","name","rules"])):m("",!0),e.type=="select"&&e.mode=="static"&&e.options!==null?(t(),c(g,{key:1,label:e.name,name:e.name,rules:[{required:e.required,message:"Required"}]},{default:d(()=>[C(U,{value:n.value.fields[e.code],"onUpdate:value":a=>n.value.fields[e.code]=a,defaultValue:e.options&&e.options.length>0&&e.options.find(a=>a.checked===!0)?e.options.find(a=>a.checked===!0).value:"Не выбрано","show-search":"","filter-option":x,class:"!w-[200px]",onChange:q},{default:d(()=>[(t(!0),o(y,null,k(e.options,a=>(t(),c(B,{key:a.id,value:a.id},{default:d(()=>[V(v(a.value),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value","defaultValue"])]),_:2},1032,["label","name","rules"])):e.type=="select"&&e.mode=="ajax"?(t(),c(g,{key:2,label:e.name,name:e.name,rules:[{required:e.required,message:"Required"}]},{default:d(()=>[C(U,{modelValue:n.value.fields[e.code],"onUpdate:modelValue":a=>n.value.fields[e.code]=a,defaultValue:e.options&&e.options.length>0&&e.options.find(a=>a.checked===!0)?e.options.find(a=>a.checked===!0).value:"Не выбрано","show-search":"","filter-option":x,onFocus:a=>N(e.code,e.id,"place"),onBlur:l.handleBlur,onChange:q,class:"!w-[200px]","not-found-content":D.fetching?void 0:null},{default:d(()=>[(t(!0),o(y,null,k(b.value,a=>(t(),c(B,{key:a.id,value:a.value},{default:d(()=>[V(v(a.value),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","defaultValue","onFocus","onBlur","not-found-content"])]),_:2},1032,["label","name","rules"])):m("",!0)]))),128))])):m("",!0)])])])])}}};export{Q as default};