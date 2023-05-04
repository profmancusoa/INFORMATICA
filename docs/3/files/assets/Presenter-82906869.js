import{q as d,m as k,am as e,B as S,aC as R,x as h,h as I,j as V,k as A,aD as y,ax as v,av as B,z as t,_ as P,aE as z,aF as H,c as b,L as D,s as O,aG as F,aH as L,w as W,n as u,an as j,ap as x,aI as N,aJ as T,at as E,aj as q,aK as w,aL as K,F as U,d as $,aM as G,aN as Z,aO as J,ay as Q,aP as X,aQ as Y,au as M,aR as ee,aS as te,aT as se,b as oe,ar as ae,aU as ne,aV as le,aW as ie,aX as re}from"./nav-b7f15d6a.js";import{N as ce}from"./NoteDisplay-51e3e2f1.js";import ue from"./DrawingControls-f10f2416.js";import{u as de}from"./index-80d5a1f9.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(a,l){return d(),k("svg",_e,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function Se(a,l){return d(),k("svg",fe,we)}const ye={name:"carbon-time",render:Se},ke="/INFORMATICA/3/files/assets/logo-title-horizontal-96c3c915.png";function Ce(){const a=S(Date.now()),l=R({interval:1e3}),_=h(()=>{const s=(l.value-a.value)/1e3,n=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${n}`});function m(){a.value=l.value}return{timer:_,resetTimer:m}}const be=I({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(a){const l=a;V(A);const _=h(()=>{var s,n,o;return(o=(n=(s=y.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.note}),m=h(()=>{var s,n,o;return(o=(n=(s=y.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.noteHTML});return(s,n)=>(d(),v(ce,{class:B(l.class),note:t(_),"note-html":t(m)},null,8,["class","note","note-html"]))}}),Ne=P(be,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=a=>(ne("data-v-574fd206"),a=a(),le(),a),Te={class:"bg-main h-full slidev-presenter"},$e={class:"grid-container"},Me={class:"grid-section top flex"},Ie=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Ve=f(()=>e("div",{class:"flex-auto"},null,-1)),Ae={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Be=f(()=>e("div",{class:"context"}," current ",-1)),Pe=f(()=>e("div",{class:"context"}," next ",-1)),Re={class:"grid-section note overflow-auto"},ze={class:"grid-section bottom"},He={class:"progress-bar"},De=I({__name:"Presenter",setup(a){V(A);const l=S();z(),H(l);const _=b.titleTemplate.replace("%s",b.title||"Slidev");de({title:`Presenter - ${_}`});const{timer:m,resetTimer:s}=Ce(),n=S([]),o=h(()=>$.value<G.value?{route:y.value,clicks:$.value+1}:Z.value?{route:J.value,clicks:0}:null);return D(()=>{const C=l.value.querySelector("#slide-content"),r=O(F()),g=L();W(()=>{if(!g.value||X.value||!Y.value)return;const c=C.getBoundingClientRect(),i=(r.x-c.left)/c.width*100,p=(r.y-c.top)/c.height*100;if(!(i<0||i>100||p<0||p>100))return{x:i,y:p}},c=>{Q.cursor=c})}),(C,r)=>{const g=ye,c=he;return d(),k(U,null,[e("div",Te,[e("div",$e,[e("div",Me,[Ie,Ve,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...i)=>t(s)&&t(s)(...i))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Ae,j(t(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(t(M))},[u(T,{key:"main",class:"h-full w-full"},{default:N(()=>[u(ee,{context:"presenter"})]),_:1}),Be],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(t(M))},[t(o)?(d(),v(T,{key:"next",class:"h-full w-full"},{default:N(()=>{var i;return[u(t(se),{is:(i=t(o).route)==null?void 0:i.component,"clicks-elements":n.value,"onUpdate:clicksElements":r[1]||(r[1]=p=>n.value=p),clicks:t(o).clicks,"clicks-disabled":!1,class:B(t(te)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):E("v-if",!0),Pe],4),e("div",Re,[(d(),v(Ne,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",ze,[u(ie,{persist:!0})]),(d(),v(ue,{key:0}))]),e("div",He,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(t(oe)-1)/(t(ae)-1)*100}%`})},null,4)])]),u(re),u(K,{modelValue:t(w),"onUpdate:modelValue":r[2]||(r[2]=i=>q(w)?w.value=i:null)},null,8,["modelValue"])],64)}}});const je=P(De,[["__scopeId","data-v-574fd206"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Presenter.vue"]]);export{je as default};