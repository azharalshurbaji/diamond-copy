import{a as v,d as b,s as w,b as E,n as O,f as A}from"./forwardRefs.54bb1675.js";import{i as M,d as h,h as y,T as V,g as D,ai as T,u as q,a9 as B,c as F,r as L,ab as R,aa as j,G as I}from"./index.f3d2bf31.js";import{m as U,u as X,V as x,f as Y,a as k}from"./VOverlay.f9787ef1.js";import{g as G,V as H}from"./router.f97856a9.js";const N=M({name:"VDialogTransition",props:{target:Object},setup(s,u){let{slots:t}=u;const o={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(e,f){var i;await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),e.style.visibility="";const{x:l,y:n,sx:c,sy:m,speed:r}=C(s.target,e),d=v(e,[{transform:`translate(${l}px, ${n}px) scale(${c}, ${m})`,opacity:0},{transform:""}],{duration:225*r,easing:b});(i=P(e))==null||i.forEach(a=>{v(a,[{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*r,easing:w})}),d.finished.then(()=>f())},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(e,f){var i;await new Promise(a=>requestAnimationFrame(a));const{x:l,y:n,sx:c,sy:m,speed:r}=C(s.target,e);v(e,[{transform:""},{transform:`translate(${l}px, ${n}px) scale(${c}, ${m})`,opacity:0}],{duration:125*r,easing:E}).finished.then(()=>f()),(i=P(e))==null||i.forEach(a=>{v(a,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:w})})},onAfterLeave(e){e.style.removeProperty("pointer-events")}};return()=>s.target?h(V,y({name:"dialog-transition"},o,{css:!1}),t):h(V,{name:"dialog-transition"},t)}});function P(s){var u;const t=(u=s.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:u.children;return t&&[...t]}function C(s,u){const t=s.getBoundingClientRect(),o=O(u),[e,f]=getComputedStyle(u).transformOrigin.split(" ").map(S=>parseFloat(S)),[i,l]=getComputedStyle(u).getPropertyValue("--v-overlay-anchor-origin").split(" ");let n=t.left+t.width/2;i==="left"||l==="left"?n-=t.width/2:(i==="right"||l==="right")&&(n+=t.width/2);let c=t.top+t.height/2;i==="top"||l==="top"?c-=t.height/2:(i==="bottom"||l==="bottom")&&(c+=t.height/2);const m=t.width/o.width,r=t.height/o.height,d=Math.max(1,m,r),a=m/d||0,g=r/d||0,p=o.width*o.height/(window.innerWidth*window.innerHeight),$=p>.12?Math.min(1.5,(p-.12)*10+1):1;return{x:n-(e+o.left),y:c-(f+o.top),sx:a,sy:g,speed:$}}const Q=D()({name:"VMenu",props:{id:String,...T(U({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:N}}),["absolute"])},emits:{"update:modelValue":s=>!0},setup(s,u){let{slots:t}=u;const o=q(s,"modelValue"),{scopeId:e}=X(),f=B(),i=F(()=>s.id||`v-menu-${f}`),l=L(),n=R(x,null);let c=0;j(x,{register(){++c},unregister(){--c},closeParents(){setTimeout(()=>{c||(o.value=!1,n==null||n.closeParents())},40)}}),I(o,r=>{r?n==null||n.register():n==null||n.unregister()});function m(){n==null||n.closeParents()}return G(()=>{const[r]=Y(s);return h(k,y({ref:l,class:["v-menu"]},r,{modelValue:o.value,"onUpdate:modelValue":d=>o.value=d,absolute:!0,activatorProps:y({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":i.value},s.activatorProps),"onClick:outside":m},e),{activator:t.activator,default:function(){for(var d,a=arguments.length,g=new Array(a),p=0;p<a;p++)g[p]=arguments[p];return h(H,{root:!0},{default:()=>[(d=t.default)==null?void 0:d.call(t,...g)]})}})}),A({id:i},l)}});export{Q as V,N as a};
