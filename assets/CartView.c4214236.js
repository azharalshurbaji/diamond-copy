import{_ as p,l as n,n as f,s as i,d as t,x as a,q as r,F as _,aC as V,D as C,A as h,y as e,z as s,C as y}from"./index.f3d2bf31.js";import{c as u}from"./cart.0bbfd7e7.js";import{u as b}from"./products.cc34d3be.js";import{P as g}from"./ProductQuantity.32531db8.js";import{V as x}from"./VContainer.88d72817.js";import{V as k,a as w}from"./VRow.3bc85811.js";import{V as B,b as $}from"./VCard.7385db67.js";import{h as v,k as P}from"./router.f97856a9.js";import{b as F,a as N}from"./VCardText.96e7e9ac.js";import{V as c}from"./VBtn.5877c4d2.js";import"./VSheet.05cfbefd.js";import"./position.4fd32470.js";import"./createSimpleFunctional.5a403112.js";import"./VAvatar.c499ff48.js";import"./resizeObserver.3b934c49.js";const S={components:{ProductQuantity:g},data:()=>({}),computed:{...n(u,["items","itemsCount"]),...n(b,["products"])},methods:{...f(u,["removeFromCart"])}},z=y("br",null,null,-1);function A(l,Q,D,I,T,q){const m=C("ProductQuantity");return r(),i("section",null,[t(x,null,{default:a(()=>[t(k,null,{default:a(()=>[(r(!0),i(_,null,V(l.items,(o,d)=>(r(),h(w,{key:o.id,cols:"12",lg:"4",xs:"3"},{default:a(()=>[t(B,{"max-width":"344"},{default:a(()=>[t(v,{src:o.thumbnail,"lazy-src":o.thumbnail,height:"200"},null,8,["src","lazy-src"]),t(F,null,{default:a(()=>[e(s(o.title),1)]),_:2},1024),t($,null,{default:a(()=>[e(" $"+s(o.price)+" - "+s(o.category),1)]),_:2},1024),t(N,null,{default:a(()=>[t(c,{variant:"text",color:"red",onClick:E=>l.removeFromCart(d)},{default:a(()=>[t(P,null,{default:a(()=>[e("mdi-delete")]),_:1})]),_:2},1032,["onClick"]),t(m),z,t(c,{class:"bg-blue-lighten-2 text-white"},{default:a(()=>[e(" Buy Now ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])}const at=p(S,[["render",A]]);export{at as default};
