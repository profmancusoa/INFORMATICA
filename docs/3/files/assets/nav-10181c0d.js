function St(e,t){const s=Object.create(null),i=e.split(",");for(let a=0;a<i.length;a++)s[i[a]]=!0;return t?a=>!!s[a.toLowerCase()]:a=>!!s[a]}function en(e){if(ce(e)){const t={};for(let s=0;s<e.length;s++){const i=e[s],a=Ue(i)?up(i):en(i);if(a)for(const l in a)t[l]=a[l]}return t}else{if(Ue(e))return e;if(Le(e))return e}}const lp=/;(?![^(]*\))/g,rp=/:([^]+)/,cp=/\/\*.*?\*\//gs;function up(e){const t={};return e.replace(cp,"").split(lp).forEach(s=>{if(s){const i=s.split(rp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ve(e){let t="";if(Ue(e))t=e;else if(ce(e))for(let s=0;s<e.length;s++){const i=Ve(e[s]);i&&(t+=i+" ")}else if(Le(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function Q(e){if(!e)return null;let{class:t,style:s}=e;return t&&!Ue(t)&&(e.class=Ve(t)),s&&(e.style=en(s)),e}const pp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",dp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",fp=St(pp),mp=St(dp),hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_p=St(hp);function Hr(e){return!!e||e===""}const $n=e=>Ue(e)?e:e==null?"":ce(e)||Le(e)&&(e.toString===Vr||!me(e.toString))?JSON.stringify(e,jr,2):String(e),jr=(e,t)=>t&&t.__v_isRef?jr(e,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[i,a])=>(s[`${i} =>`]=a,s),{})}:Wr(t)?{[`Set(${t.size})`]:[...t.values()]}:Le(t)&&!ce(t)&&!Kr(t)?String(t):t,Pe=Object.freeze({}),fs=Object.freeze([]),mn=()=>{},Br=()=>!1,gp=/^on[^a-z]/,li=e=>gp.test(e),Ti=e=>e.startsWith("onUpdate:"),Be=Object.assign,pa=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},vp=Object.prototype.hasOwnProperty,ye=(e,t)=>vp.call(e,t),ce=Array.isArray,Ut=e=>ri(e)==="[object Map]",Wr=e=>ri(e)==="[object Set]",kp=e=>ri(e)==="[object RegExp]",me=e=>typeof e=="function",Ue=e=>typeof e=="string",da=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",fa=e=>Le(e)&&me(e.then)&&me(e.catch),Vr=Object.prototype.toString,ri=e=>Vr.call(e),ma=e=>ri(e).slice(8,-1),Kr=e=>ri(e)==="[object Object]",ha=e=>Ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$i=St(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bp=St("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Qi=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},yp=/-(\w)/g,qn=Qi(e=>e.replace(yp,(t,s)=>s?s.toUpperCase():"")),wp=/\B([A-Z])/g,at=Qi(e=>e.replace(wp,"-$1").toLowerCase()),Yt=Qi(e=>e.charAt(0).toUpperCase()+e.slice(1)),At=Qi(e=>e?`on${Yt(e)}`:""),qs=(e,t)=>!Object.is(e,t),vt=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},Ai=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},So=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ip=e=>{const t=Ue(e)?Number(e):NaN;return isNaN(t)?e:t};let nl;const qr=()=>nl||(nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zi(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let vn;class Gr{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vn,!t&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=vn;try{return vn=this,t()}finally{vn=s}}else zi("cannot run an inactive effect scope.")}on(){vn=this}off(){vn=this.parent}stop(t){if(this._active){let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.scopes)for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function wC(e){return new Gr(e)}function xp(e,t=vn){t&&t.active&&t.effects.push(e)}function Yr(){return vn}function $p(e){vn?vn.cleanups.push(e):zi("onScopeDispose() is called when there is no active effect scope to be associated with.")}const _a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Qr=e=>(e.w&Ct)>0,Zr=e=>(e.n&Ct)>0,Ep=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ct},Cp=e=>{const{deps:t}=e;if(t.length){let s=0;for(let i=0;i<t.length;i++){const a=t[i];Qr(a)&&!Zr(a)?a.delete(e):t[s++]=a,a.w&=~Ct,a.n&=~Ct}t.length=s}},Pi=new WeakMap;let zs=0,Ct=1;const Lo=30;let un;const Ht=Symbol("iterate"),Mo=Symbol("Map key iterate");class ga{constructor(t,s=null,i){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,xp(this,i)}run(){if(!this.active)return this.fn();let t=un,s=yt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=un,un=this,yt=!0,Ct=1<<++zs,zs<=Lo?Ep(this):tl(this),this.fn()}finally{zs<=Lo&&Cp(this),Ct=1<<--zs,un=this.parent,yt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(tl(this),this.onStop&&this.onStop(),this.active=!1)}}function tl(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let yt=!0;const Xr=[];function Jt(){Xr.push(yt),yt=!1}function es(){const e=Xr.pop();yt=e===void 0?!0:e}function hn(e,t,s){if(yt&&un){let i=Pi.get(e);i||Pi.set(e,i=new Map);let a=i.get(s);a||i.set(s,a=_a()),Jr(a,{effect:un,target:e,type:t,key:s})}}function Jr(e,t){let s=!1;zs<=Lo?Zr(e)||(e.n|=Ct,s=!Qr(e)):s=!e.has(un),s&&(e.add(un),un.deps.push(e),un.onTrack&&un.onTrack(Object.assign({effect:un},t)))}function lt(e,t,s,i,a,l){const r=Pi.get(e);if(!r)return;let c=[];if(t==="clear")c=[...r.values()];else if(s==="length"&&ce(e)){const p=Number(i);r.forEach((d,f)=>{(f==="length"||f>=p)&&c.push(d)})}else switch(s!==void 0&&c.push(r.get(s)),t){case"add":ce(e)?ha(s)&&c.push(r.get("length")):(c.push(r.get(Ht)),Ut(e)&&c.push(r.get(Mo)));break;case"delete":ce(e)||(c.push(r.get(Ht)),Ut(e)&&c.push(r.get(Mo)));break;case"set":Ut(e)&&c.push(r.get(Ht));break}const u={target:e,type:t,key:s,newValue:i,oldValue:a,oldTarget:l};if(c.length===1)c[0]&&To(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);To(_a(p),u)}}function To(e,t){const s=ce(e)?e:[...e];for(const i of s)i.computed&&sl(i,t);for(const i of s)i.computed||sl(i,t)}function sl(e,t){(e!==un||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Be({effect:e},t)),e.scheduler?e.scheduler():e.run())}function Fp(e,t){var s;return(s=Pi.get(e))===null||s===void 0?void 0:s.get(t)}const Op=St("__proto__,__v_isRef,__isVue"),ec=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(da)),Sp=Zi(),Lp=Zi(!1,!0),Mp=Zi(!0),Tp=Zi(!0,!0),il=Ap();function Ap(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const i=he(this);for(let l=0,r=this.length;l<r;l++)hn(i,"get",l+"");const a=i[t](...s);return a===-1||a===!1?i[t](...s.map(he)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){Jt();const i=he(this)[t].apply(this,s);return es(),i}}),e}function zp(e){const t=he(this);return hn(t,"has",e),t.hasOwnProperty(e)}function Zi(e=!1,t=!1){return function(i,a,l){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&l===(e?t?rc:lc:t?ac:oc).get(i))return i;const r=ce(i);if(!e){if(r&&ye(il,a))return Reflect.get(il,a,l);if(a==="hasOwnProperty")return zp}const c=Reflect.get(i,a,l);return(da(a)?ec.has(a):Op(a))||(e||hn(i,"get",a),t)?c:Ce(c)?r&&ha(a)?c:c.value:Le(c)?e?Wn(c):nn(c):c}}const Pp=nc(),Rp=nc(!0);function nc(e=!1){return function(s,i,a,l){let r=s[i];if(Ft(r)&&Ce(r)&&!Ce(a))return!1;if(!e&&(!Ri(a)&&!Ft(a)&&(r=he(r),a=he(a)),!ce(s)&&Ce(r)&&!Ce(a)))return r.value=a,!0;const c=ce(s)&&ha(i)?Number(i)<s.length:ye(s,i),u=Reflect.set(s,i,a,l);return s===he(l)&&(c?qs(a,r)&&lt(s,"set",i,a,r):lt(s,"add",i,a)),u}}function Np(e,t){const s=ye(e,t),i=e[t],a=Reflect.deleteProperty(e,t);return a&&s&&lt(e,"delete",t,void 0,i),a}function Dp(e,t){const s=Reflect.has(e,t);return(!da(t)||!ec.has(t))&&hn(e,"has",t),s}function Up(e){return hn(e,"iterate",ce(e)?"length":Ht),Reflect.ownKeys(e)}const tc={get:Sp,set:Pp,deleteProperty:Np,has:Dp,ownKeys:Up},sc={get:Mp,set(e,t){return zi(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return zi(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Hp=Be({},tc,{get:Lp,set:Rp}),jp=Be({},sc,{get:Tp}),va=e=>e,Xi=e=>Reflect.getPrototypeOf(e);function _i(e,t,s=!1,i=!1){e=e.__v_raw;const a=he(e),l=he(t);s||(t!==l&&hn(a,"get",t),hn(a,"get",l));const{has:r}=Xi(a),c=i?va:s?ba:Gs;if(r.call(a,t))return c(e.get(t));if(r.call(a,l))return c(e.get(l));e!==a&&e.get(t)}function gi(e,t=!1){const s=this.__v_raw,i=he(s),a=he(e);return t||(e!==a&&hn(i,"has",e),hn(i,"has",a)),e===a?s.has(e):s.has(e)||s.has(a)}function vi(e,t=!1){return e=e.__v_raw,!t&&hn(he(e),"iterate",Ht),Reflect.get(e,"size",e)}function ol(e){e=he(e);const t=he(this);return Xi(t).has.call(t,e)||(t.add(e),lt(t,"add",e,e)),this}function al(e,t){t=he(t);const s=he(this),{has:i,get:a}=Xi(s);let l=i.call(s,e);l?ic(s,i,e):(e=he(e),l=i.call(s,e));const r=a.call(s,e);return s.set(e,t),l?qs(t,r)&&lt(s,"set",e,t,r):lt(s,"add",e,t),this}function ll(e){const t=he(this),{has:s,get:i}=Xi(t);let a=s.call(t,e);a?ic(t,s,e):(e=he(e),a=s.call(t,e));const l=i?i.call(t,e):void 0,r=t.delete(e);return a&&lt(t,"delete",e,void 0,l),r}function rl(){const e=he(this),t=e.size!==0,s=Ut(e)?new Map(e):new Set(e),i=e.clear();return t&&lt(e,"clear",void 0,void 0,s),i}function ki(e,t){return function(i,a){const l=this,r=l.__v_raw,c=he(r),u=t?va:e?ba:Gs;return!e&&hn(c,"iterate",Ht),r.forEach((p,d)=>i.call(a,u(p),u(d),l))}}function bi(e,t,s){return function(...i){const a=this.__v_raw,l=he(a),r=Ut(l),c=e==="entries"||e===Symbol.iterator&&r,u=e==="keys"&&r,p=a[e](...i),d=s?va:t?ba:Gs;return!t&&hn(l,"iterate",u?Mo:Ht),{next(){const{value:f,done:m}=p.next();return m?{value:f,done:m}:{value:c?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function pt(e){return function(...t){{const s=t[0]?`on key "${t[0]}" `:"";console.warn(`${Yt(e)} operation ${s}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Bp(){const e={get(l){return _i(this,l)},get size(){return vi(this)},has:gi,add:ol,set:al,delete:ll,clear:rl,forEach:ki(!1,!1)},t={get(l){return _i(this,l,!1,!0)},get size(){return vi(this)},has:gi,add:ol,set:al,delete:ll,clear:rl,forEach:ki(!1,!0)},s={get(l){return _i(this,l,!0)},get size(){return vi(this,!0)},has(l){return gi.call(this,l,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:ki(!0,!1)},i={get(l){return _i(this,l,!0,!0)},get size(){return vi(this,!0)},has(l){return gi.call(this,l,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=bi(l,!1,!1),s[l]=bi(l,!0,!1),t[l]=bi(l,!1,!0),i[l]=bi(l,!0,!0)}),[e,s,t,i]}const[Wp,Vp,Kp,qp]=Bp();function Ji(e,t){const s=t?e?qp:Kp:e?Vp:Wp;return(i,a,l)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?i:Reflect.get(ye(s,a)&&a in i?s:i,a,l)}const Gp={get:Ji(!1,!1)},Yp={get:Ji(!1,!0)},Qp={get:Ji(!0,!1)},Zp={get:Ji(!0,!0)};function ic(e,t,s){const i=he(s);if(i!==s&&t.call(e,i)){const a=ma(e);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const oc=new WeakMap,ac=new WeakMap,lc=new WeakMap,rc=new WeakMap;function Xp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jp(e){return e.__v_skip||!Object.isExtensible(e)?0:Xp(ma(e))}function nn(e){return Ft(e)?e:eo(e,!1,tc,Gp,oc)}function ed(e){return eo(e,!1,Hp,Yp,ac)}function Wn(e){return eo(e,!0,sc,Qp,lc)}function ps(e){return eo(e,!0,jp,Zp,rc)}function eo(e,t,s,i,a){if(!Le(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=a.get(e);if(l)return l;const r=Jp(e);if(r===0)return e;const c=new Proxy(e,r===2?i:s);return a.set(e,c),c}function jt(e){return Ft(e)?jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function Ri(e){return!!(e&&e.__v_isShallow)}function Ni(e){return jt(e)||Ft(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function ka(e){return Ai(e,"__v_skip",!0),e}const Gs=e=>Le(e)?nn(e):e,ba=e=>Le(e)?Wn(e):e;function ya(e){yt&&un&&(e=he(e),Jr(e.dep||(e.dep=_a()),{target:e,type:"get",key:"value"}))}function wa(e,t){e=he(e);const s=e.dep;s&&To(s,{target:e,type:"set",key:"value",newValue:t})}function Ce(e){return!!(e&&e.__v_isRef===!0)}function le(e){return cc(e,!1)}function Gn(e){return cc(e,!0)}function cc(e,t){return Ce(e)?e:new nd(e,t)}class nd{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:he(t),this._value=s?t:Gs(t)}get value(){return ya(this),this._value}set value(t){const s=this.__v_isShallow||Ri(t)||Ft(t);t=s?t:he(t),qs(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Gs(t),wa(this,t))}}function w(e){return Ce(e)?e.value:e}const td={get:(e,t,s)=>w(Reflect.get(e,t,s)),set:(e,t,s,i)=>{const a=e[t];return Ce(a)&&!Ce(s)?(a.value=s,!0):Reflect.set(e,t,s,i)}};function uc(e){return jt(e)?e:new Proxy(e,td)}class sd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:i}=t(()=>ya(this),()=>wa(this));this._get=s,this._set=i}get value(){return this._get()}set value(t){this._set(t)}}function pc(e){return new sd(e)}function id(e){Ni(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ce(e)?new Array(e.length):{};for(const s in e)t[s]=ad(e,s);return t}class od{constructor(t,s,i){this._object=t,this._key=s,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Fp(he(this._object),this._key)}}function ad(e,t,s){const i=e[t];return Ce(i)?i:new od(e,t,s)}var dc;class ld{constructor(t,s,i,a){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[dc]=!1,this._dirty=!0,this.effect=new ga(t,()=>{this._dirty||(this._dirty=!0,wa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=i}get value(){const t=he(this);return ya(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}dc="__v_isReadonly";function rd(e,t,s=!1){let i,a;const l=me(e);l?(i=e,a=()=>{console.warn("Write operation failed: computed value is readonly")}):(i=e.get,a=e.set);const r=new ld(i,a,l||!a,s);return t&&!s&&(r.effect.onTrack=t.onTrack,r.effect.onTrigger=t.onTrigger),r}const Bt=[];function Ei(e){Bt.push(e)}function Ci(){Bt.pop()}function z(e,...t){Jt();const s=Bt.length?Bt[Bt.length-1].component:null,i=s&&s.appContext.config.warnHandler,a=cd();if(i)ot(i,s,11,[e+t.join(""),s&&s.proxy,a.map(({vnode:l})=>`at <${co(s,l.type)}>`).join(`
`),a]);else{const l=[`[Vue warn]: ${e}`,...t];a.length&&l.push(`
`,...ud(a)),console.warn(...l)}es()}function cd(){let e=Bt[Bt.length-1];if(!e)return[];const t=[];for(;e;){const s=t[0];s&&s.vnode===e?s.recurseCount++:t.push({vnode:e,recurseCount:0});const i=e.component&&e.component.parent;e=i&&i.vnode}return t}function ud(e){const t=[];return e.forEach((s,i)=>{t.push(...i===0?[]:[`
`],...pd(s))}),t}function pd({vnode:e,recurseCount:t}){const s=t>0?`... (${t} recursive calls)`:"",i=e.component?e.component.parent==null:!1,a=` at <${co(e.component,e.type,i)}`,l=">"+s;return e.props?[a,...dd(e.props),l]:[a+l]}function dd(e){const t=[],s=Object.keys(e);return s.slice(0,3).forEach(i=>{t.push(...fc(i,e[i]))}),s.length>3&&t.push(" ..."),t}function fc(e,t,s){return Ue(t)?(t=JSON.stringify(t),s?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?s?t:[`${e}=${t}`]:Ce(t)?(t=fc(e,he(t.value),!0),s?t:[`${e}=Ref<`,t,">"]):me(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),s?t:[`${e}=`,t])}function fd(e,t){e!==void 0&&(typeof e!="number"?z(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&z(`${t} is NaN - the duration expression might be incorrect.`))}const Ia={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ot(e,t,s,i){let a;try{a=i?e(...i):e()}catch(l){no(l,t,s)}return a}function Cn(e,t,s,i){if(me(e)){const l=ot(e,t,s,i);return l&&fa(l)&&l.catch(r=>{no(r,t,s)}),l}const a=[];for(let l=0;l<e.length;l++)a.push(Cn(e[l],t,s,i));return a}function no(e,t,s,i=!0){const a=t?t.vnode:null;if(t){let l=t.parent;const r=t.proxy,c=Ia[s];for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,r,c)===!1)return}l=l.parent}const u=t.appContext.config.errorHandler;if(u){ot(u,null,10,[e,r,c]);return}}md(e,s,a,i)}function md(e,t,s,i=!0){{const a=Ia[t];if(s&&Ei(s),z(`Unhandled error${a?` during execution of ${a}`:""}`),s&&Ci(),i)throw e;console.error(e)}}let Ys=!1,Ao=!1;const sn=[];let jn=0;const ms=[];let Hn=null,ht=0;const mc=Promise.resolve();let xa=null;const hd=100;function zn(e){const t=xa||mc;return e?t.then(this?e.bind(this):e):t}function _d(e){let t=jn+1,s=sn.length;for(;t<s;){const i=t+s>>>1;Qs(sn[i])<e?t=i+1:s=i}return t}function to(e){(!sn.length||!sn.includes(e,Ys&&e.allowRecurse?jn+1:jn))&&(e.id==null?sn.push(e):sn.splice(_d(e.id),0,e),hc())}function hc(){!Ys&&!Ao&&(Ao=!0,xa=mc.then(vc))}function gd(e){const t=sn.indexOf(e);t>jn&&sn.splice(t,1)}function _c(e){ce(e)?ms.push(...e):(!Hn||!Hn.includes(e,e.allowRecurse?ht+1:ht))&&ms.push(e),hc()}function cl(e,t=Ys?jn+1:0){for(e=e||new Map;t<sn.length;t++){const s=sn[t];if(s&&s.pre){if($a(e,s))continue;sn.splice(t,1),t--,s()}}}function gc(e){if(ms.length){const t=[...new Set(ms)];if(ms.length=0,Hn){Hn.push(...t);return}for(Hn=t,e=e||new Map,Hn.sort((s,i)=>Qs(s)-Qs(i)),ht=0;ht<Hn.length;ht++)$a(e,Hn[ht])||Hn[ht]();Hn=null,ht=0}}const Qs=e=>e.id==null?1/0:e.id,vd=(e,t)=>{const s=Qs(e)-Qs(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function vc(e){Ao=!1,Ys=!0,e=e||new Map,sn.sort(vd);const t=s=>$a(e,s);try{for(jn=0;jn<sn.length;jn++){const s=sn[jn];if(s&&s.active!==!1){if(t(s))continue;ot(s,null,14)}}}finally{jn=0,sn.length=0,gc(e),Ys=!1,xa=null,(sn.length||ms.length)&&vc(e)}}function $a(e,t){if(!e.has(t))e.set(t,1);else{const s=e.get(t);if(s>hd){const i=t.ownerInstance,a=i&&ei(i.type);return z(`Maximum recursive updates exceeded${a?` in component <${a}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,s+1)}}let wt=!1;const rs=new Set;qr().__VUE_HMR_RUNTIME__={createRecord:po(kc),rerender:po(yd),reload:po(wd)};const Qt=new Map;function kd(e){const t=e.type.__hmrId;let s=Qt.get(t);s||(kc(t,e.type),s=Qt.get(t)),s.instances.add(e)}function bd(e){Qt.get(e.type.__hmrId).instances.delete(e)}function kc(e,t){return Qt.has(e)?!1:(Qt.set(e,{initialDef:Us(t),instances:new Set}),!0)}function Us(e){return Yc(e)?e.__vccOpts:e}function yd(e,t){const s=Qt.get(e);s&&(s.initialDef.render=t,[...s.instances].forEach(i=>{t&&(i.render=t,Us(i.type).render=t),i.renderCache=[],wt=!0,i.update(),wt=!1}))}function wd(e,t){const s=Qt.get(e);if(!s)return;t=Us(t),ul(s.initialDef,t);const i=[...s.instances];for(const a of i){const l=Us(a.type);rs.has(l)||(l!==s.initialDef&&ul(l,t),rs.add(l)),a.appContext.optionsCache.delete(a.type),a.ceReload?(rs.add(l),a.ceReload(t.styles),rs.delete(l)):a.parent?to(a.parent.update):a.appContext.reload?a.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}_c(()=>{for(const a of i)rs.delete(Us(a.type))})}function ul(e,t){Be(e,t);for(const s in e)s!=="__file"&&!(s in t)&&delete e[s]}function po(e){return(t,s)=>{try{return e(t,s)}catch(i){console.error(i),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Bn,Ps=[],zo=!1;function ci(e,...t){Bn?Bn.emit(e,...t):zo||Ps.push({event:e,args:t})}function bc(e,t){var s,i;Bn=e,Bn?(Bn.enabled=!0,Ps.forEach(({event:a,args:l})=>Bn.emit(a,...l)),Ps=[]):typeof window<"u"&&window.HTMLElement&&!(!((i=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||i===void 0)&&i.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{bc(l,t)}),setTimeout(()=>{Bn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,zo=!0,Ps=[])},3e3)):(zo=!0,Ps=[])}function Id(e,t){ci("app:init",e,t,{Fragment:Se,Text:fi,Comment:Ze,Static:Fi})}function xd(e){ci("app:unmount",e)}const Po=Ea("component:added"),yc=Ea("component:updated"),$d=Ea("component:removed"),Ed=e=>{Bn&&typeof Bn.cleanupBuffer=="function"&&!Bn.cleanupBuffer(e)&&$d(e)};function Ea(e){return t=>{ci(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Cd=wc("perf:start"),Fd=wc("perf:end");function wc(e){return(t,s,i)=>{ci(e,t.appContext.app,t.uid,t,s,i)}}function Od(e,t,s){ci("component:emit",e.appContext.app,e,t,s)}function Sd(e,t,...s){if(e.isUnmounted)return;const i=e.vnode.props||Pe;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(t in d))(!f||!(At(t)in f))&&z(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${At(t)}" prop.`);else{const m=d[t];me(m)&&(m(...s)||z(`Invalid event arguments: event validation failed for event "${t}".`))}}let a=s;const l=t.startsWith("update:"),r=l&&t.slice(7);if(r&&r in i){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:f,trim:m}=i[d]||Pe;m&&(a=s.map(_=>Ue(_)?_.trim():_)),f&&(a=s.map(So))}Od(e,t,a);{const d=t.toLowerCase();d!==t&&i[At(d)]&&z(`Event "${d}" is emitted in component ${co(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${at(t)}" instead of "${t}".`)}let c,u=i[c=At(t)]||i[c=At(qn(t))];!u&&l&&(u=i[c=At(at(t))]),u&&Cn(u,e,6,a);const p=i[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Cn(p,e,6,a)}}function Ic(e,t,s=!1){const i=t.emitsCache,a=i.get(e);if(a!==void 0)return a;const l=e.emits;let r={},c=!1;if(!me(e)){const u=p=>{const d=Ic(p,t,!0);d&&(c=!0,Be(r,d))};!s&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!l&&!c?(Le(e)&&i.set(e,null),null):(ce(l)?l.forEach(u=>r[u]=null):Be(r,l),Le(e)&&i.set(e,r),r)}function so(e,t){return!e||!li(t)?!1:(t=t.slice(2).replace(/Once$/,""),ye(e,t[0].toLowerCase()+t.slice(1))||ye(e,at(t))||ye(e,t))}let Ye=null,io=null;function Di(e){const t=Ye;return Ye=e,io=e&&e.type.__scopeId||null,t}function IC(e){io=e}function xC(){io=null}function $(e,t=Ye,s){if(!t||e._n)return e;const i=(...a)=>{i._d&&Il(-1);const l=Di(t);let r;try{r=e(...a)}finally{Di(l),i._d&&Il(1)}return yc(t),r};return i._n=!0,i._c=!0,i._d=!0,i}let Ro=!1;function Ui(){Ro=!0}function fo(e){const{type:t,vnode:s,proxy:i,withProxy:a,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:f,data:m,setupState:_,ctx:g,inheritAttrs:k}=e;let y,C;const x=Di(e);Ro=!1;try{if(s.shapeFlag&4){const V=a||i;y=Mn(d.call(V,V,f,l,_,m,g)),C=u}else{const V=t;u===l&&Ui(),y=Mn(V.length>1?V(l,{get attrs(){return Ui(),u},slots:c,emit:p}):V(l,null)),C=t.props?u:Md(u)}}catch(V){js.length=0,no(V,e,1),y=D(Ze)}let F=y,O;if(y.patchFlag>0&&y.patchFlag&2048&&([F,O]=Ld(y)),C&&k!==!1){const V=Object.keys(C),{shapeFlag:K}=F;if(V.length){if(K&7)r&&V.some(Ti)&&(C=Td(C,r)),F=Pn(F,C);else if(!Ro&&F.type!==Ze){const B=Object.keys(u),H=[],se=[];for(let ae=0,fe=B.length;ae<fe;ae++){const Z=B[ae];li(Z)?Ti(Z)||H.push(Z[2].toLowerCase()+Z.slice(3)):se.push(Z)}se.length&&z(`Extraneous non-props attributes (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),H.length&&z(`Extraneous non-emits event listeners (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(pl(F)||z("Runtime directive used on component with non-element root node. The directives will not function as intended."),F=Pn(F),F.dirs=F.dirs?F.dirs.concat(s.dirs):s.dirs),s.transition&&(pl(F)||z("Component inside <Transition> renders non-element root node that cannot be animated."),F.transition=s.transition),O?O(F):y=F,Di(x),y}const Ld=e=>{const t=e.children,s=e.dynamicChildren,i=xc(t);if(!i)return[e,void 0];const a=t.indexOf(i),l=s?s.indexOf(i):-1,r=c=>{t[a]=c,s&&(l>-1?s[l]=c:c.patchFlag>0&&(e.dynamicChildren=[...s,c]))};return[Mn(i),r]};function xc(e){let t;for(let s=0;s<e.length;s++){const i=e[s];if(Zt(i)){if(i.type!==Ze||i.children==="v-if"){if(t)return;t=i}}else return}return t}const Md=e=>{let t;for(const s in e)(s==="class"||s==="style"||li(s))&&((t||(t={}))[s]=e[s]);return t},Td=(e,t)=>{const s={};for(const i in e)(!Ti(i)||!(i.slice(9)in t))&&(s[i]=e[i]);return s},pl=e=>e.shapeFlag&7||e.type===Ze;function Ad(e,t,s){const{props:i,children:a,component:l}=e,{props:r,children:c,patchFlag:u}=t,p=l.emitsOptions;if((a||c)&&wt||t.dirs||t.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return i?dl(i,r,p):!!r;if(u&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(r[m]!==i[m]&&!so(p,m))return!0}}}else return(a||c)&&(!c||!c.$stable)?!0:i===r?!1:i?r?dl(i,r,p):!0:!!r;return!1}function dl(e,t,s){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let a=0;a<i.length;a++){const l=i[a];if(t[l]!==e[l]&&!so(s,l))return!0}return!1}function zd({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const $c=e=>e.__isSuspense;function Pd(e,t){t&&t.pendingBranch?ce(e)?t.effects.push(...e):t.effects.push(e):_c(e)}function kn(e,t){if(!We)z("provide() can only be used inside setup().");else{let s=We.provides;const i=We.parent&&We.parent.provides;i===s&&(s=We.provides=Object.create(i)),s[e]=t}}function S(e,t,s=!1){const i=We||Ye;if(i){const a=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return s&&me(t)?t.call(i.proxy):t;z(`injection "${String(e)}" not found.`)}else z("inject() can only be used inside setup() or functional components.")}function Is(e,t){return Ca(e,null,t)}const yi={};function He(e,t,s){return me(t)||z("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ca(e,t,s)}function Ca(e,t,{immediate:s,deep:i,flush:a,onTrack:l,onTrigger:r}=Pe){t||(s!==void 0&&z('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&z('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=O=>{z("Invalid watch source: ",O,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Yr()===(We==null?void 0:We.scope)?We:null;let p,d=!1,f=!1;if(Ce(e)?(p=()=>e.value,d=Ri(e)):jt(e)?(p=()=>e,i=!0):ce(e)?(f=!0,d=e.some(O=>jt(O)||Ri(O)),p=()=>e.map(O=>{if(Ce(O))return O.value;if(jt(O))return Nt(O);if(me(O))return ot(O,u,2);c(O)})):me(e)?t?p=()=>ot(e,u,2):p=()=>{if(!(u&&u.isUnmounted))return m&&m(),Cn(e,u,3,[_])}:(p=mn,c(e)),t&&i){const O=p;p=()=>Nt(O())}let m,_=O=>{m=x.onStop=()=>{ot(O,u,4)}},g;if(Js)if(_=mn,t?s&&Cn(t,u,3,[p(),f?[]:void 0,_]):p(),a==="sync"){const O=Wf();g=O.__watcherHandles||(O.__watcherHandles=[])}else return mn;let k=f?new Array(e.length).fill(yi):yi;const y=()=>{if(x.active)if(t){const O=x.run();(i||d||(f?O.some((V,K)=>qs(V,k[K])):qs(O,k)))&&(m&&m(),Cn(t,u,3,[O,k===yi?void 0:f&&k[0]===yi?[]:k,_]),k=O)}else x.run()};y.allowRecurse=!!t;let C;a==="sync"?C=y:a==="post"?C=()=>Je(y,u&&u.suspense):(y.pre=!0,u&&(y.id=u.uid),C=()=>to(y));const x=new ga(p,C);x.onTrack=l,x.onTrigger=r,t?s?y():k=x.run():a==="post"?Je(x.run.bind(x),u&&u.suspense):x.run();const F=()=>{x.stop(),u&&u.scope&&pa(u.scope.effects,x)};return g&&g.push(F),F}function Rd(e,t,s){const i=this.proxy,a=Ue(e)?e.includes(".")?Ec(i,e):()=>i[e]:e.bind(i,i);let l;me(t)?l=t:(l=t.handler,s=t);const r=We;ks(this);const c=Ca(a,l.bind(i),s);return r?ks(r):Vt(),c}function Ec(e,t){const s=t.split(".");return()=>{let i=e;for(let a=0;a<s.length&&i;a++)i=i[s[a]];return i}}function Nt(e,t){if(!Le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ce(e))Nt(e.value,t);else if(ce(e))for(let s=0;s<e.length;s++)Nt(e[s],t);else if(Wr(e)||Ut(e))e.forEach(s=>{Nt(s,t)});else if(Kr(e))for(const s in e)Nt(e[s],t);return e}function Cc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pi(()=>{e.isMounted=!0}),Sa(()=>{e.isUnmounting=!0}),e}const wn=[Function,Array],Nd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wn,onEnter:wn,onAfterEnter:wn,onEnterCancelled:wn,onBeforeLeave:wn,onLeave:wn,onAfterLeave:wn,onLeaveCancelled:wn,onBeforeAppear:wn,onAppear:wn,onAfterAppear:wn,onAppearCancelled:wn},setup(e,{slots:t}){const s=Qn(),i=Cc();let a;return()=>{const l=t.default&&Fa(t.default(),!0);if(!l||!l.length)return;let r=l[0];if(l.length>1){let k=!1;for(const y of l)if(y.type!==Ze){if(k){z("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}r=y,k=!0}}const c=he(e),{mode:u}=c;if(u&&u!=="in-out"&&u!=="out-in"&&u!=="default"&&z(`invalid <transition> mode: ${u}`),i.isLeaving)return mo(r);const p=fl(r);if(!p)return mo(r);const d=Zs(p,c,i,s);vs(p,d);const f=s.subTree,m=f&&fl(f);let _=!1;const{getTransitionKey:g}=p.type;if(g){const k=g();a===void 0?a=k:k!==a&&(a=k,_=!0)}if(m&&m.type!==Ze&&(!bt(p,m)||_)){const k=Zs(m,c,i,s);if(vs(m,k),u==="out-in")return i.isLeaving=!0,k.afterLeave=()=>{i.isLeaving=!1,s.update.active!==!1&&s.update()},mo(r);u==="in-out"&&p.type!==Ze&&(k.delayLeave=(y,C,x)=>{const F=Fc(i,m);F[String(m.key)]=m,y._leaveCb=()=>{C(),y._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=x})}return r}}},Dd=Nd;function Fc(e,t){const{leavingVNodes:s}=e;let i=s.get(t.type);return i||(i=Object.create(null),s.set(t.type,i)),i}function Zs(e,t,s,i){const{appear:a,mode:l,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:k,onAppear:y,onAfterAppear:C,onAppearCancelled:x}=t,F=String(e.key),O=Fc(s,e),V=(H,se)=>{H&&Cn(H,i,9,se)},K=(H,se)=>{const ae=se[1];V(H,se),ce(H)?H.every(fe=>fe.length<=1)&&ae():H.length<=1&&ae()},B={mode:l,persisted:r,beforeEnter(H){let se=c;if(!s.isMounted)if(a)se=k||c;else return;H._leaveCb&&H._leaveCb(!0);const ae=O[F];ae&&bt(e,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),V(se,[H])},enter(H){let se=u,ae=p,fe=d;if(!s.isMounted)if(a)se=y||u,ae=C||p,fe=x||d;else return;let Z=!1;const Ie=H._enterCb=Re=>{Z||(Z=!0,Re?V(fe,[H]):V(ae,[H]),B.delayedLeave&&B.delayedLeave(),H._enterCb=void 0)};se?K(se,[H,Ie]):Ie()},leave(H,se){const ae=String(e.key);if(H._enterCb&&H._enterCb(!0),s.isUnmounting)return se();V(f,[H]);let fe=!1;const Z=H._leaveCb=Ie=>{fe||(fe=!0,se(),Ie?V(g,[H]):V(_,[H]),H._leaveCb=void 0,O[ae]===e&&delete O[ae])};O[ae]=e,m?K(m,[H,Z]):Z()},clone(H){return Zs(H,t,s,i)}};return B}function mo(e){if(ui(e))return e=Pn(e),e.children=null,e}function fl(e){return ui(e)?e.children?e.children[0]:void 0:e}function vs(e,t){e.shapeFlag&6&&e.component?vs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Fa(e,t=!1,s){let i=[],a=0;for(let l=0;l<e.length;l++){let r=e[l];const c=s==null?r.key:String(s)+String(r.key!=null?r.key:l);r.type===Se?(r.patchFlag&128&&a++,i=i.concat(Fa(r.children,t,c))):(t||r.type!==Ze)&&i.push(c!=null?Pn(r,{key:c}):r)}if(a>1)for(let l=0;l<i.length;l++)i[l].patchFlag=-2;return i}function je(e){return me(e)?{setup:e,name:e.name}:e}const hs=e=>!!e.type.__asyncLoader,ui=e=>e.type.__isKeepAlive,Ud={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=Qn(),i=s.ctx;if(!i.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const a=new Map,l=new Set;let r=null;s.__v_cache=a;const c=s.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:f}}}=i,m=f("div");i.activate=(x,F,O,V,K)=>{const B=x.component;p(x,F,O,0,c),u(B.vnode,x,F,O,B,c,V,x.slotScopeIds,K),Je(()=>{B.isDeactivated=!1,B.a&&vt(B.a);const H=x.props&&x.props.onVnodeMounted;H&&In(H,B.parent,x)},c),Po(B)},i.deactivate=x=>{const F=x.component;p(x,m,null,1,c),Je(()=>{F.da&&vt(F.da);const O=x.props&&x.props.onVnodeUnmounted;O&&In(O,F.parent,x),F.isDeactivated=!0},c),Po(F)};function _(x){ho(x),d(x,s,c,!0)}function g(x){a.forEach((F,O)=>{const V=ei(F.type);V&&(!x||!x(V))&&k(O)})}function k(x){const F=a.get(x);!r||!bt(F,r)?_(F):r&&ho(r),a.delete(x),l.delete(x)}He(()=>[e.include,e.exclude],([x,F])=>{x&&g(O=>Rs(x,O)),F&&g(O=>!Rs(F,O))},{flush:"post",deep:!0});let y=null;const C=()=>{y!=null&&a.set(y,_o(s.subTree))};return pi(C),Oa(C),Sa(()=>{a.forEach(x=>{const{subTree:F,suspense:O}=s,V=_o(F);if(x.type===V.type&&x.key===V.key){ho(V);const K=V.component.da;K&&Je(K,O);return}_(x)})}),()=>{if(y=null,!t.default)return null;const x=t.default(),F=x[0];if(x.length>1)return z("KeepAlive should contain exactly one component child."),r=null,x;if(!Zt(F)||!(F.shapeFlag&4)&&!(F.shapeFlag&128))return r=null,F;let O=_o(F);const V=O.type,K=ei(hs(O)?O.type.__asyncResolved||{}:V),{include:B,exclude:H,max:se}=e;if(B&&(!K||!Rs(B,K))||H&&K&&Rs(H,K))return r=O,F;const ae=O.key==null?V:O.key,fe=a.get(ae);return O.el&&(O=Pn(O),F.shapeFlag&128&&(F.ssContent=O)),y=ae,fe?(O.el=fe.el,O.component=fe.component,O.transition&&vs(O,O.transition),O.shapeFlag|=512,l.delete(ae),l.add(ae)):(l.add(ae),se&&l.size>parseInt(se,10)&&k(l.values().next().value)),O.shapeFlag|=256,r=O,$c(F.type)?F:O}}},Oc=Ud;function Rs(e,t){return ce(e)?e.some(s=>Rs(s,t)):Ue(e)?e.split(",").includes(t):kp(e)?e.test(t):!1}function Hd(e,t){Sc(e,"a",t)}function jd(e,t){Sc(e,"da",t)}function Sc(e,t,s=We){const i=e.__wdc||(e.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(oo(t,i,s),s){let a=s.parent;for(;a&&a.parent;)ui(a.parent.vnode)&&Bd(i,t,s,a),a=a.parent}}function Bd(e,t,s,i){const a=oo(t,e,i,!0);ao(()=>{pa(i[t],a)},s)}function ho(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function _o(e){return e.shapeFlag&128?e.ssContent:e}function oo(e,t,s=We,i=!1){if(s){const a=s[e]||(s[e]=[]),l=t.__weh||(t.__weh=(...r)=>{if(s.isUnmounted)return;Jt(),ks(s);const c=Cn(t,s,e,r);return Vt(),es(),c});return i?a.unshift(l):a.push(l),l}else{const a=At(Ia[e].replace(/ hook$/,""));z(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ct=e=>(t,s=We)=>(!Js||e==="sp")&&oo(e,(...i)=>t(...i),s),Wd=ct("bm"),pi=ct("m"),Vd=ct("bu"),Oa=ct("u"),Sa=ct("bum"),ao=ct("um"),Kd=ct("sp"),qd=ct("rtg"),Gd=ct("rtc");function Yd(e,t=We){oo("ec",e,t)}function Lc(e){bp(e)&&z("Do not use built-in directive ids as custom directive id: "+e)}function La(e,t){const s=Ye;if(s===null)return z("withDirectives can only be used inside render functions."),e;const i=ro(s)||s.proxy,a=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[r,c,u,p=Pe]=t[l];r&&(me(r)&&(r={mounted:r,updated:r}),r.deep&&Nt(c),a.push({dir:r,instance:i,value:c,oldValue:void 0,arg:u,modifiers:p}))}return e}function Lt(e,t,s,i){const a=e.dirs,l=t&&t.dirs;for(let r=0;r<a.length;r++){const c=a[r];l&&(c.oldValue=l[r].value);let u=c.dir[i];u&&(Jt(),Cn(u,s,8,[e.el,c,e,t]),es())}}const No="components";function Qd(e,t){return Xd(No,e,!0,t)||e}const Zd=Symbol();function Xd(e,t,s=!0,i=!1){const a=Ye||We;if(a){const l=a.type;if(e===No){const c=ei(l,!1);if(c&&(c===t||c===qn(t)||c===Yt(qn(t))))return l}const r=ml(a[e]||l[e],t)||ml(a.appContext[e],t);if(!r&&i)return l;if(s&&!r){const c=e===No?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";z(`Failed to resolve ${e.slice(0,-1)}: ${t}${c}`)}return r}else z(`resolve${Yt(e.slice(0,-1))} can only be used in render() or setup().`)}function ml(e,t){return e&&(e[t]||e[qn(t)]||e[Yt(qn(t))])}function di(e,t,s,i){let a;const l=s&&s[i];if(ce(e)||Ue(e)){a=new Array(e.length);for(let r=0,c=e.length;r<c;r++)a[r]=t(e[r],r,void 0,l&&l[r])}else if(typeof e=="number"){Number.isInteger(e)||z(`The v-for range expect an integer value but got ${e}.`),a=new Array(e);for(let r=0;r<e;r++)a[r]=t(r+1,r,void 0,l&&l[r])}else if(Le(e))if(e[Symbol.iterator])a=Array.from(e,(r,c)=>t(r,c,void 0,l&&l[c]));else{const r=Object.keys(e);a=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];a[c]=t(e[p],p,c,l&&l[c])}}else a=[];return s&&(s[i]=a),a}function rt(e,t,s={},i,a){if(Ye.isCE||Ye.parent&&hs(Ye.parent)&&Ye.parent.isCE)return t!=="default"&&(s.name=t),D("slot",s,i&&i());let l=e[t];l&&l.length>1&&(z("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),b();const r=l&&Mc(l(s)),c=T(Se,{key:s.key||r&&r.key||`_${t}`},r||(i?i():[]),r&&e._===1?64:-2);return!a&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function Mc(e){return e.some(t=>Zt(t)?!(t.type===Ze||t.type===Se&&!Mc(t.children)):!0)?e:null}const Do=e=>e?Kc(e)?ro(e)||e.proxy:Do(e.parent):null,Wt=Be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ps(e.props),$attrs:e=>ps(e.attrs),$slots:e=>ps(e.slots),$refs:e=>ps(e.refs),$parent:e=>Do(e.parent),$root:e=>Do(e.root),$emit:e=>e.emit,$options:e=>Ta(e),$forceUpdate:e=>e.f||(e.f=()=>to(e.update)),$nextTick:e=>e.n||(e.n=zn.bind(e.proxy)),$watch:e=>Rd.bind(e)}),Ma=e=>e==="_"||e==="$",go=(e,t)=>e!==Pe&&!e.__isScriptSetup&&ye(e,t),Tc={get({_:e},t){const{ctx:s,setupState:i,data:a,props:l,accessCache:r,type:c,appContext:u}=e;if(t==="__isVue")return!0;let p;if(t[0]!=="$"){const _=r[t];if(_!==void 0)switch(_){case 1:return i[t];case 2:return a[t];case 4:return s[t];case 3:return l[t]}else{if(go(i,t))return r[t]=1,i[t];if(a!==Pe&&ye(a,t))return r[t]=2,a[t];if((p=e.propsOptions[0])&&ye(p,t))return r[t]=3,l[t];if(s!==Pe&&ye(s,t))return r[t]=4,s[t];Uo&&(r[t]=0)}}const d=Wt[t];let f,m;if(d)return t==="$attrs"&&(hn(e,"get",t),Ui()),d(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(s!==Pe&&ye(s,t))return r[t]=4,s[t];if(m=u.config.globalProperties,ye(m,t))return m[t];Ye&&(!Ue(t)||t.indexOf("__v")!==0)&&(a!==Pe&&Ma(t[0])&&ye(a,t)?z(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ye&&z(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,s){const{data:i,setupState:a,ctx:l}=e;return go(a,t)?(a[t]=s,!0):a.__isScriptSetup&&ye(a,t)?(z(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):i!==Pe&&ye(i,t)?(i[t]=s,!0):ye(e.props,t)?(z(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(z(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:s}):l[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:i,appContext:a,propsOptions:l}},r){let c;return!!s[r]||e!==Pe&&ye(e,r)||go(t,r)||(c=l[0])&&ye(c,r)||ye(i,r)||ye(Wt,r)||ye(a.config.globalProperties,r)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:ye(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};Tc.ownKeys=e=>(z("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Jd(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Wt).forEach(s=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,get:()=>Wt[s](e),set:mn})}),t}function ef(e){const{ctx:t,propsOptions:[s]}=e;s&&Object.keys(s).forEach(i=>{Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>e.props[i],set:mn})})}function nf(e){const{ctx:t,setupState:s}=e;Object.keys(he(s)).forEach(i=>{if(!s.__isScriptSetup){if(Ma(i[0])){z(`setup() return property ${JSON.stringify(i)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s[i],set:mn})}})}function tf(){const e=Object.create(null);return(t,s)=>{e[s]?z(`${t} property "${s}" is already defined in ${e[s]}.`):e[s]=t}}let Uo=!0;function sf(e){const t=Ta(e),s=e.proxy,i=e.ctx;Uo=!1,t.beforeCreate&&hl(t.beforeCreate,e,"bc");const{data:a,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:f,mounted:m,beforeUpdate:_,updated:g,activated:k,deactivated:y,beforeDestroy:C,beforeUnmount:x,destroyed:F,unmounted:O,render:V,renderTracked:K,renderTriggered:B,errorCaptured:H,serverPrefetch:se,expose:ae,inheritAttrs:fe,components:Z,directives:Ie,filters:Re}=t,Fe=tf();{const[J]=e.propsOptions;if(J)for(const ue in J)Fe("Props",ue)}if(p&&of(p,i,Fe,e.appContext.config.unwrapInjectedRef),r)for(const J in r){const ue=r[J];me(ue)?(Object.defineProperty(i,J,{value:ue.bind(s),configurable:!0,enumerable:!0,writable:!0}),Fe("Methods",J)):z(`Method "${J}" has type "${typeof ue}" in the component definition. Did you reference the function correctly?`)}if(a){me(a)||z("The data option must be a function. Plain object usage is no longer supported.");const J=a.call(s,s);if(fa(J)&&z("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Le(J))z("data() should return an object.");else{e.data=nn(J);for(const ue in J)Fe("Data",ue),Ma(ue[0])||Object.defineProperty(i,ue,{configurable:!0,enumerable:!0,get:()=>J[ue],set:mn})}}if(Uo=!0,l)for(const J in l){const ue=l[J],ke=me(ue)?ue.bind(s,s):me(ue.get)?ue.get.bind(s,s):mn;ke===mn&&z(`Computed property "${J}" has no getter.`);const Ae=!me(ue)&&me(ue.set)?ue.set.bind(s):()=>{z(`Write operation failed: computed property "${J}" is readonly.`)},_n=M({get:ke,set:Ae});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>_n.value,set:tn=>_n.value=tn}),Fe("Computed",J)}if(c)for(const J in c)Ac(c[J],i,s,J);if(u){const J=me(u)?u.call(s):u;Reflect.ownKeys(J).forEach(ue=>{kn(ue,J[ue])})}d&&hl(d,e,"c");function Ne(J,ue){ce(ue)?ue.forEach(ke=>J(ke.bind(s))):ue&&J(ue.bind(s))}if(Ne(Wd,f),Ne(pi,m),Ne(Vd,_),Ne(Oa,g),Ne(Hd,k),Ne(jd,y),Ne(Yd,H),Ne(Gd,K),Ne(qd,B),Ne(Sa,x),Ne(ao,O),Ne(Kd,se),ce(ae))if(ae.length){const J=e.exposed||(e.exposed={});ae.forEach(ue=>{Object.defineProperty(J,ue,{get:()=>s[ue],set:ke=>s[ue]=ke})})}else e.exposed||(e.exposed={});V&&e.render===mn&&(e.render=V),fe!=null&&(e.inheritAttrs=fe),Z&&(e.components=Z),Ie&&(e.directives=Ie)}function of(e,t,s=mn,i=!1){ce(e)&&(e=Ho(e));for(const a in e){const l=e[a];let r;Le(l)?"default"in l?r=S(l.from||a,l.default,!0):r=S(l.from||a):r=S(l),Ce(r)?i?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:c=>r.value=c}):(z(`injected property "${a}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[a]=r):t[a]=r,s("Inject",a)}}function hl(e,t,s){Cn(ce(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,s)}function Ac(e,t,s,i){const a=i.includes(".")?Ec(s,i):()=>s[i];if(Ue(e)){const l=t[e];me(l)?He(a,l):z(`Invalid watch handler specified by key "${e}"`,l)}else if(me(e))He(a,e.bind(s));else if(Le(e))if(ce(e))e.forEach(l=>Ac(l,t,s,i));else{const l=me(e.handler)?e.handler.bind(s):t[e.handler];me(l)?He(a,l,e):z(`Invalid watch handler specified by key "${e.handler}"`,l)}else z(`Invalid watch option: "${i}"`,e)}function Ta(e){const t=e.type,{mixins:s,extends:i}=t,{mixins:a,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,c=l.get(t);let u;return c?u=c:!a.length&&!s&&!i?u=t:(u={},a.length&&a.forEach(p=>Hi(u,p,r,!0)),Hi(u,t,r)),Le(t)&&l.set(t,u),u}function Hi(e,t,s,i=!1){const{mixins:a,extends:l}=t;l&&Hi(e,l,s,!0),a&&a.forEach(r=>Hi(e,r,s,!0));for(const r in t)if(i&&r==="expose")z('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=af[r]||s&&s[r];e[r]=c?c(e[r],t[r]):t[r]}return e}const af={data:_l,props:zt,emits:zt,methods:zt,computed:zt,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:zt,directives:zt,watch:rf,provide:_l,inject:lf};function _l(e,t){return t?e?function(){return Be(me(e)?e.call(this,this):e,me(t)?t.call(this,this):t)}:t:e}function lf(e,t){return zt(Ho(e),Ho(t))}function Ho(e){if(ce(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function ln(e,t){return e?[...new Set([].concat(e,t))]:t}function zt(e,t){return e?Be(Be(Object.create(null),e),t):t}function rf(e,t){if(!e)return t;if(!t)return e;const s=Be(Object.create(null),e);for(const i in t)s[i]=ln(e[i],t[i]);return s}function cf(e,t,s,i=!1){const a={},l={};Ai(l,lo,1),e.propsDefaults=Object.create(null),zc(e,t,a,l);for(const r in e.propsOptions[0])r in a||(a[r]=void 0);Rc(t||{},a,e),s?e.props=i?a:ed(a):e.type.props?e.props=a:e.props=l,e.attrs=l}function uf(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function pf(e,t,s,i){const{props:a,attrs:l,vnode:{patchFlag:r}}=e,c=he(a),[u]=e.propsOptions;let p=!1;if(!uf(e)&&(i||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(so(e.emitsOptions,m))continue;const _=t[m];if(u)if(ye(l,m))_!==l[m]&&(l[m]=_,p=!0);else{const g=qn(m);a[g]=jo(u,c,g,_,e,!1)}else _!==l[m]&&(l[m]=_,p=!0)}}}else{zc(e,t,a,l)&&(p=!0);let d;for(const f in c)(!t||!ye(t,f)&&((d=at(f))===f||!ye(t,d)))&&(u?s&&(s[f]!==void 0||s[d]!==void 0)&&(a[f]=jo(u,c,f,void 0,e,!0)):delete a[f]);if(l!==c)for(const f in l)(!t||!ye(t,f))&&(delete l[f],p=!0)}p&&lt(e,"set","$attrs"),Rc(t||{},a,e)}function zc(e,t,s,i){const[a,l]=e.propsOptions;let r=!1,c;if(t)for(let u in t){if($i(u))continue;const p=t[u];let d;a&&ye(a,d=qn(u))?!l||!l.includes(d)?s[d]=p:(c||(c={}))[d]=p:so(e.emitsOptions,u)||(!(u in i)||p!==i[u])&&(i[u]=p,r=!0)}if(l){const u=he(s),p=c||Pe;for(let d=0;d<l.length;d++){const f=l[d];s[f]=jo(a,u,f,p[f],e,!ye(p,f))}}return r}function jo(e,t,s,i,a,l){const r=e[s];if(r!=null){const c=ye(r,"default");if(c&&i===void 0){const u=r.default;if(r.type!==Function&&me(u)){const{propsDefaults:p}=a;s in p?i=p[s]:(ks(a),i=p[s]=u.call(null,t),Vt())}else i=u}r[0]&&(l&&!c?i=!1:r[1]&&(i===""||i===at(s))&&(i=!0))}return i}function Pc(e,t,s=!1){const i=t.propsCache,a=i.get(e);if(a)return a;const l=e.props,r={},c=[];let u=!1;if(!me(e)){const d=f=>{u=!0;const[m,_]=Pc(f,t,!0);Be(r,m),_&&c.push(..._)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!u)return Le(e)&&i.set(e,fs),fs;if(ce(l))for(let d=0;d<l.length;d++){Ue(l[d])||z("props must be strings when using array syntax.",l[d]);const f=qn(l[d]);gl(f)&&(r[f]=Pe)}else if(l){Le(l)||z("invalid props options",l);for(const d in l){const f=qn(d);if(gl(f)){const m=l[d],_=r[f]=ce(m)||me(m)?{type:m}:Object.assign({},m);if(_){const g=kl(Boolean,_.type),k=kl(String,_.type);_[0]=g>-1,_[1]=k<0||g<k,(g>-1||ye(_,"default"))&&c.push(f)}}}}const p=[r,c];return Le(e)&&i.set(e,p),p}function gl(e){return e[0]!=="$"?!0:(z(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Bo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function vl(e,t){return Bo(e)===Bo(t)}function kl(e,t){return ce(t)?t.findIndex(s=>vl(s,e)):me(t)&&vl(t,e)?0:-1}function Rc(e,t,s){const i=he(t),a=s.propsOptions[0];for(const l in a){let r=a[l];r!=null&&df(l,i[l],r,!ye(e,l)&&!ye(e,at(l)))}}function df(e,t,s,i){const{type:a,required:l,validator:r}=s;if(l&&i){z('Missing required prop: "'+e+'"');return}if(!(t==null&&!s.required)){if(a!=null&&a!==!0){let c=!1;const u=ce(a)?a:[a],p=[];for(let d=0;d<u.length&&!c;d++){const{valid:f,expectedType:m}=mf(t,u[d]);p.push(m||""),c=f}if(!c){z(hf(e,t,p));return}}r&&!r(t)&&z('Invalid prop: custom validator check failed for prop "'+e+'".')}}const ff=St("String,Number,Boolean,Function,Symbol,BigInt");function mf(e,t){let s;const i=Bo(t);if(ff(i)){const a=typeof e;s=a===i.toLowerCase(),!s&&a==="object"&&(s=e instanceof t)}else i==="Object"?s=Le(e):i==="Array"?s=ce(e):i==="null"?s=e===null:s=e instanceof t;return{valid:s,expectedType:i}}function hf(e,t,s){let i=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(Yt).join(" | ")}`;const a=s[0],l=ma(t),r=bl(t,a),c=bl(t,l);return s.length===1&&yl(a)&&!_f(a,l)&&(i+=` with value ${r}`),i+=`, got ${l} `,yl(l)&&(i+=`with value ${c}.`),i}function bl(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function yl(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function _f(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Nc=e=>e[0]==="_"||e==="$stable",Aa=e=>ce(e)?e.map(Mn):[Mn(e)],gf=(e,t,s)=>{if(t._n)return t;const i=$((...a)=>(We&&z(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Aa(t(...a))),s);return i._c=!1,i},Dc=(e,t,s)=>{const i=e._ctx;for(const a in e){if(Nc(a))continue;const l=e[a];if(me(l))t[a]=gf(a,l,i);else if(l!=null){z(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);const r=Aa(l);t[a]=()=>r}}},Uc=(e,t)=>{ui(e.vnode)||z("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Aa(t);e.slots.default=()=>s},vf=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=he(t),Ai(t,"_",s)):Dc(t,e.slots={})}else e.slots={},t&&Uc(e,t);Ai(e.slots,lo,1)},kf=(e,t,s)=>{const{vnode:i,slots:a}=e;let l=!0,r=Pe;if(i.shapeFlag&32){const c=t._;c?wt?Be(a,t):s&&c===1?l=!1:(Be(a,t),!s&&c===1&&delete a._):(l=!t.$stable,Dc(t,a)),r=t}else t&&(Uc(e,t),r={default:1});if(l)for(const c in a)!Nc(c)&&!(c in r)&&delete a[c]};function Hc(){return{app:null,config:{isNativeTag:Br,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bf=0;function yf(e,t){return function(i,a=null){me(i)||(i=Object.assign({},i)),a!=null&&!Le(a)&&(z("root props passed to app.mount() must be an object."),a=null);const l=Hc(),r=new Set;let c=!1;const u=l.app={_uid:bf++,_component:i,_props:a,_container:null,_context:l,_instance:null,version:$l,get config(){return l.config},set config(p){z("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return r.has(p)?z("Plugin has already been applied to target app."):p&&me(p.install)?(r.add(p),p.install(u,...d)):me(p)?(r.add(p),p(u,...d)):z('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return l.mixins.includes(p)?z("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):l.mixins.push(p),u},component(p,d){return Ko(p,l.config),d?(l.components[p]&&z(`Component "${p}" has already been registered in target app.`),l.components[p]=d,u):l.components[p]},directive(p,d){return Lc(p),d?(l.directives[p]&&z(`Directive "${p}" has already been registered in target app.`),l.directives[p]=d,u):l.directives[p]},mount(p,d,f){if(c)z("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&z("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const m=D(i,a);return m.appContext=l,l.reload=()=>{e(Pn(m),p,f)},d&&t?t(m,p):e(m,p,f),c=!0,u._container=p,p.__vue_app__=u,u._instance=m.component,Id(u,$l),ro(m.component)||m.component.proxy}},unmount(){c?(e(null,u._container),u._instance=null,xd(u),delete u._container.__vue_app__):z("Cannot unmount an app that is not mounted.")},provide(p,d){return p in l.provides&&z(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),l.provides[p]=d,u}};return u}}function Wo(e,t,s,i,a=!1){if(ce(e)){e.forEach((m,_)=>Wo(m,t&&(ce(t)?t[_]:t),s,i,a));return}if(hs(i)&&!a)return;const l=i.shapeFlag&4?ro(i.component)||i.component.proxy:i.el,r=a?null:l,{i:c,r:u}=e;if(!c){z("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=t&&t.r,d=c.refs===Pe?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==u&&(Ue(p)?(d[p]=null,ye(f,p)&&(f[p]=null)):Ce(p)&&(p.value=null)),me(u))ot(u,c,12,[r,d]);else{const m=Ue(u),_=Ce(u);if(m||_){const g=()=>{if(e.f){const k=m?ye(f,u)?f[u]:d[u]:u.value;a?ce(k)&&pa(k,l):ce(k)?k.includes(l)||k.push(l):m?(d[u]=[l],ye(f,u)&&(f[u]=d[u])):(u.value=[l],e.k&&(d[e.k]=u.value))}else m?(d[u]=r,ye(f,u)&&(f[u]=r)):_?(u.value=r,e.k&&(d[e.k]=r)):z("Invalid template ref type:",u,`(${typeof u})`)};r?(g.id=-1,Je(g,s)):g()}else z("Invalid template ref type:",u,`(${typeof u})`)}}let Es,kt;function Xn(e,t){e.appContext.config.performance&&ji()&&kt.mark(`vue-${t}-${e.uid}`),Cd(e,t,ji()?kt.now():Date.now())}function Jn(e,t){if(e.appContext.config.performance&&ji()){const s=`vue-${t}-${e.uid}`,i=s+":end";kt.mark(i),kt.measure(`<${co(e,e.type)}> ${t}`,s,i),kt.clearMarks(s),kt.clearMarks(i)}Fd(e,t,ji()?kt.now():Date.now())}function ji(){return Es!==void 0||(typeof window<"u"&&window.performance?(Es=!0,kt=window.performance):Es=!1),Es}function wf(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Je=Pd;function If(e){return xf(e)}function xf(e,t){wf();const s=qr();s.__VUE__=!0,bc(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:i,remove:a,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:f,nextSibling:m,setScopeId:_=mn,insertStaticContent:g}=e,k=(h,v,I,A=null,L=null,j=null,G=!1,U=null,W=wt?!1:!!v.dynamicChildren)=>{if(h===v)return;h&&!bt(h,v)&&(A=te(h),fn(h,L,j,!0),h=null),v.patchFlag===-2&&(W=!1,v.dynamicChildren=null);const{type:N,ref:oe,shapeFlag:ie}=v;switch(N){case fi:y(h,v,I,A);break;case Ze:C(h,v,I,A);break;case Fi:h==null?x(v,I,A,G):F(h,v,I,G);break;case Se:Ie(h,v,I,A,L,j,G,U,W);break;default:ie&1?K(h,v,I,A,L,j,G,U,W):ie&6?Re(h,v,I,A,L,j,G,U,W):ie&64||ie&128?N.process(h,v,I,A,L,j,G,U,W,$e):z("Invalid VNode type:",N,`(${typeof N})`)}oe!=null&&L&&Wo(oe,h&&h.ref,j,v||h,!v)},y=(h,v,I,A)=>{if(h==null)i(v.el=c(v.children),I,A);else{const L=v.el=h.el;v.children!==h.children&&p(L,v.children)}},C=(h,v,I,A)=>{h==null?i(v.el=u(v.children||""),I,A):v.el=h.el},x=(h,v,I,A)=>{[h.el,h.anchor]=g(h.children,v,I,A,h.el,h.anchor)},F=(h,v,I,A)=>{if(v.children!==h.children){const L=m(h.anchor);V(h),[v.el,v.anchor]=g(v.children,I,L,A)}else v.el=h.el,v.anchor=h.anchor},O=({el:h,anchor:v},I,A)=>{let L;for(;h&&h!==v;)L=m(h),i(h,I,A),h=L;i(v,I,A)},V=({el:h,anchor:v})=>{let I;for(;h&&h!==v;)I=m(h),a(h),h=I;a(v)},K=(h,v,I,A,L,j,G,U,W)=>{G=G||v.type==="svg",h==null?B(v,I,A,L,j,G,U,W):ae(h,v,L,j,G,U,W)},B=(h,v,I,A,L,j,G,U)=>{let W,N;const{type:oe,props:ie,shapeFlag:re,transition:ge,dirs:xe}=h;if(W=h.el=r(h.type,j,ie&&ie.is,ie),re&8?d(W,h.children):re&16&&se(h.children,W,null,A,L,j&&oe!=="foreignObject",G,U),xe&&Lt(h,null,A,"created"),H(W,h,h.scopeId,G,A),ie){for(const ze in ie)ze!=="value"&&!$i(ze)&&l(W,ze,null,ie[ze],j,h.children,A,L,q);"value"in ie&&l(W,"value",null,ie.value),(N=ie.onVnodeBeforeMount)&&In(N,A,h)}Object.defineProperty(W,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(W,"__vueParentComponent",{value:A,enumerable:!1}),xe&&Lt(h,null,A,"beforeMount");const De=(!L||L&&!L.pendingBranch)&&ge&&!ge.persisted;De&&ge.beforeEnter(W),i(W,v,I),((N=ie&&ie.onVnodeMounted)||De||xe)&&Je(()=>{N&&In(N,A,h),De&&ge.enter(W),xe&&Lt(h,null,A,"mounted")},L)},H=(h,v,I,A,L)=>{if(I&&_(h,I),A)for(let j=0;j<A.length;j++)_(h,A[j]);if(L){let j=L.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=xc(j.children)||j),v===j){const G=L.vnode;H(h,G,G.scopeId,G.slotScopeIds,L.parent)}}},se=(h,v,I,A,L,j,G,U,W=0)=>{for(let N=W;N<h.length;N++){const oe=h[N]=U?_t(h[N]):Mn(h[N]);k(null,oe,v,I,A,L,j,G,U)}},ae=(h,v,I,A,L,j,G)=>{const U=v.el=h.el;let{patchFlag:W,dynamicChildren:N,dirs:oe}=v;W|=h.patchFlag&16;const ie=h.props||Pe,re=v.props||Pe;let ge;I&&Mt(I,!1),(ge=re.onVnodeBeforeUpdate)&&In(ge,I,v,h),oe&&Lt(v,h,I,"beforeUpdate"),I&&Mt(I,!0),wt&&(W=0,G=!1,N=null);const xe=L&&v.type!=="foreignObject";if(N?(fe(h.dynamicChildren,N,U,I,A,xe,j),I&&I.type.__hmrId&&Hs(h,v)):G||ke(h,v,U,null,I,A,xe,j,!1),W>0){if(W&16)Z(U,v,ie,re,I,A,L);else if(W&2&&ie.class!==re.class&&l(U,"class",null,re.class,L),W&4&&l(U,"style",ie.style,re.style,L),W&8){const De=v.dynamicProps;for(let ze=0;ze<De.length;ze++){const Ke=De[ze],On=ie[Ke],ss=re[Ke];(ss!==On||Ke==="value")&&l(U,Ke,On,ss,L,h.children,I,A,q)}}W&1&&h.children!==v.children&&d(U,v.children)}else!G&&N==null&&Z(U,v,ie,re,I,A,L);((ge=re.onVnodeUpdated)||oe)&&Je(()=>{ge&&In(ge,I,v,h),oe&&Lt(v,h,I,"updated")},A)},fe=(h,v,I,A,L,j,G)=>{for(let U=0;U<v.length;U++){const W=h[U],N=v[U],oe=W.el&&(W.type===Se||!bt(W,N)||W.shapeFlag&70)?f(W.el):I;k(W,N,oe,null,A,L,j,G,!0)}},Z=(h,v,I,A,L,j,G)=>{if(I!==A){if(I!==Pe)for(const U in I)!$i(U)&&!(U in A)&&l(h,U,I[U],null,G,v.children,L,j,q);for(const U in A){if($i(U))continue;const W=A[U],N=I[U];W!==N&&U!=="value"&&l(h,U,N,W,G,v.children,L,j,q)}"value"in A&&l(h,"value",I.value,A.value)}},Ie=(h,v,I,A,L,j,G,U,W)=>{const N=v.el=h?h.el:c(""),oe=v.anchor=h?h.anchor:c("");let{patchFlag:ie,dynamicChildren:re,slotScopeIds:ge}=v;(wt||ie&2048)&&(ie=0,W=!1,re=null),ge&&(U=U?U.concat(ge):ge),h==null?(i(N,I,A),i(oe,I,A),se(v.children,I,oe,L,j,G,U,W)):ie>0&&ie&64&&re&&h.dynamicChildren?(fe(h.dynamicChildren,re,I,L,j,G,U),L&&L.type.__hmrId?Hs(h,v):(v.key!=null||L&&v===L.subTree)&&Hs(h,v,!0)):ke(h,v,I,oe,L,j,G,U,W)},Re=(h,v,I,A,L,j,G,U,W)=>{v.slotScopeIds=U,h==null?v.shapeFlag&512?L.ctx.activate(v,I,A,G,W):Fe(v,I,A,L,j,G,W):Ne(h,v,W)},Fe=(h,v,I,A,L,j,G)=>{const U=h.component=Af(h,A,L);if(U.type.__hmrId&&kd(U),Ei(h),Xn(U,"mount"),ui(h)&&(U.ctx.renderer=$e),Xn(U,"init"),Pf(U),Jn(U,"init"),U.asyncDep){if(L&&L.registerDep(U,J),!h.el){const W=U.subTree=D(Ze);C(null,W,v,I)}return}J(U,h,v,I,L,j,G),Ci(),Jn(U,"mount")},Ne=(h,v,I)=>{const A=v.component=h.component;if(Ad(h,v,I))if(A.asyncDep&&!A.asyncResolved){Ei(v),ue(A,v,I),Ci();return}else A.next=v,gd(A.update),A.update();else v.el=h.el,A.vnode=v},J=(h,v,I,A,L,j,G)=>{const U=()=>{if(h.isMounted){let{next:oe,bu:ie,u:re,parent:ge,vnode:xe}=h,De=oe,ze;Ei(oe||h.vnode),Mt(h,!1),oe?(oe.el=xe.el,ue(h,oe,G)):oe=xe,ie&&vt(ie),(ze=oe.props&&oe.props.onVnodeBeforeUpdate)&&In(ze,ge,oe,xe),Mt(h,!0),Xn(h,"render");const Ke=fo(h);Jn(h,"render");const On=h.subTree;h.subTree=Ke,Xn(h,"patch"),k(On,Ke,f(On.el),te(On),h,L,j),Jn(h,"patch"),oe.el=Ke.el,De===null&&zd(h,Ke.el),re&&Je(re,L),(ze=oe.props&&oe.props.onVnodeUpdated)&&Je(()=>In(ze,ge,oe,xe),L),yc(h),Ci()}else{let oe;const{el:ie,props:re}=v,{bm:ge,m:xe,parent:De}=h,ze=hs(v);if(Mt(h,!1),ge&&vt(ge),!ze&&(oe=re&&re.onVnodeBeforeMount)&&In(oe,De,v),Mt(h,!0),ie&&de){const Ke=()=>{Xn(h,"render"),h.subTree=fo(h),Jn(h,"render"),Xn(h,"hydrate"),de(ie,h.subTree,h,L,null),Jn(h,"hydrate")};ze?v.type.__asyncLoader().then(()=>!h.isUnmounted&&Ke()):Ke()}else{Xn(h,"render");const Ke=h.subTree=fo(h);Jn(h,"render"),Xn(h,"patch"),k(null,Ke,I,A,h,L,j),Jn(h,"patch"),v.el=Ke.el}if(xe&&Je(xe,L),!ze&&(oe=re&&re.onVnodeMounted)){const Ke=v;Je(()=>In(oe,De,Ke),L)}(v.shapeFlag&256||De&&hs(De.vnode)&&De.vnode.shapeFlag&256)&&h.a&&Je(h.a,L),h.isMounted=!0,Po(h),v=I=A=null}},W=h.effect=new ga(U,()=>to(N),h.scope),N=h.update=()=>W.run();N.id=h.uid,Mt(h,!0),W.onTrack=h.rtc?oe=>vt(h.rtc,oe):void 0,W.onTrigger=h.rtg?oe=>vt(h.rtg,oe):void 0,N.ownerInstance=h,N()},ue=(h,v,I)=>{v.component=h;const A=h.vnode.props;h.vnode=v,h.next=null,pf(h,v.props,A,I),kf(h,v.children,I),Jt(),cl(),es()},ke=(h,v,I,A,L,j,G,U,W=!1)=>{const N=h&&h.children,oe=h?h.shapeFlag:0,ie=v.children,{patchFlag:re,shapeFlag:ge}=v;if(re>0){if(re&128){_n(N,ie,I,A,L,j,G,U,W);return}else if(re&256){Ae(N,ie,I,A,L,j,G,U,W);return}}ge&8?(oe&16&&q(N,L,j),ie!==N&&d(I,ie)):oe&16?ge&16?_n(N,ie,I,A,L,j,G,U,W):q(N,L,j,!0):(oe&8&&d(I,""),ge&16&&se(ie,I,A,L,j,G,U,W))},Ae=(h,v,I,A,L,j,G,U,W)=>{h=h||fs,v=v||fs;const N=h.length,oe=v.length,ie=Math.min(N,oe);let re;for(re=0;re<ie;re++){const ge=v[re]=W?_t(v[re]):Mn(v[re]);k(h[re],ge,I,null,L,j,G,U,W)}N>oe?q(h,L,j,!0,!1,ie):se(v,I,A,L,j,G,U,W,ie)},_n=(h,v,I,A,L,j,G,U,W)=>{let N=0;const oe=v.length;let ie=h.length-1,re=oe-1;for(;N<=ie&&N<=re;){const ge=h[N],xe=v[N]=W?_t(v[N]):Mn(v[N]);if(bt(ge,xe))k(ge,xe,I,null,L,j,G,U,W);else break;N++}for(;N<=ie&&N<=re;){const ge=h[ie],xe=v[re]=W?_t(v[re]):Mn(v[re]);if(bt(ge,xe))k(ge,xe,I,null,L,j,G,U,W);else break;ie--,re--}if(N>ie){if(N<=re){const ge=re+1,xe=ge<oe?v[ge].el:A;for(;N<=re;)k(null,v[N]=W?_t(v[N]):Mn(v[N]),I,xe,L,j,G,U,W),N++}}else if(N>re)for(;N<=ie;)fn(h[N],L,j,!0),N++;else{const ge=N,xe=N,De=new Map;for(N=xe;N<=re;N++){const an=v[N]=W?_t(v[N]):Mn(v[N]);an.key!=null&&(De.has(an.key)&&z("Duplicate keys found during update:",JSON.stringify(an.key),"Make sure keys are unique."),De.set(an.key,N))}let ze,Ke=0;const On=re-xe+1;let ss=!1,Xa=0;const $s=new Array(On);for(N=0;N<On;N++)$s[N]=0;for(N=ge;N<=ie;N++){const an=h[N];if(Ke>=On){fn(an,L,j,!0);continue}let Un;if(an.key!=null)Un=De.get(an.key);else for(ze=xe;ze<=re;ze++)if($s[ze-xe]===0&&bt(an,v[ze])){Un=ze;break}Un===void 0?fn(an,L,j,!0):($s[Un-xe]=N+1,Un>=Xa?Xa=Un:ss=!0,k(an,v[Un],I,null,L,j,G,U,W),Ke++)}const Ja=ss?$f($s):fs;for(ze=Ja.length-1,N=On-1;N>=0;N--){const an=xe+N,Un=v[an],el=an+1<oe?v[an+1].el:A;$s[N]===0?k(null,Un,I,el,L,j,G,U,W):ss&&(ze<0||N!==Ja[ze]?tn(Un,I,el,2):ze--)}}},tn=(h,v,I,A,L=null)=>{const{el:j,type:G,transition:U,children:W,shapeFlag:N}=h;if(N&6){tn(h.component.subTree,v,I,A);return}if(N&128){h.suspense.move(v,I,A);return}if(N&64){G.move(h,v,I,$e);return}if(G===Se){i(j,v,I);for(let ie=0;ie<W.length;ie++)tn(W[ie],v,I,A);i(h.anchor,v,I);return}if(G===Fi){O(h,v,I);return}if(A!==2&&N&1&&U)if(A===0)U.beforeEnter(j),i(j,v,I),Je(()=>U.enter(j),L);else{const{leave:ie,delayLeave:re,afterLeave:ge}=U,xe=()=>i(j,v,I),De=()=>{ie(j,()=>{xe(),ge&&ge()})};re?re(j,xe,De):De()}else i(j,v,I)},fn=(h,v,I,A=!1,L=!1)=>{const{type:j,props:G,ref:U,children:W,dynamicChildren:N,shapeFlag:oe,patchFlag:ie,dirs:re}=h;if(U!=null&&Wo(U,null,I,h,!0),oe&256){v.ctx.deactivate(h);return}const ge=oe&1&&re,xe=!hs(h);let De;if(xe&&(De=G&&G.onVnodeBeforeUnmount)&&In(De,v,h),oe&6)ee(h.component,I,A);else{if(oe&128){h.suspense.unmount(I,A);return}ge&&Lt(h,null,v,"beforeUnmount"),oe&64?h.type.remove(h,v,I,L,$e,A):N&&(j!==Se||ie>0&&ie&64)?q(N,v,I,!1,!0):(j===Se&&ie&384||!L&&oe&16)&&q(W,v,I),A&&ut(h)}(xe&&(De=G&&G.onVnodeUnmounted)||ge)&&Je(()=>{De&&In(De,v,h),ge&&Lt(h,null,v,"unmounted")},I)},ut=h=>{const{type:v,el:I,anchor:A,transition:L}=h;if(v===Se){h.patchFlag>0&&h.patchFlag&2048&&L&&!L.persisted?h.children.forEach(G=>{G.type===Ze?a(G.el):ut(G)}):E(I,A);return}if(v===Fi){V(h);return}const j=()=>{a(I),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(h.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:U}=L,W=()=>G(I,j);U?U(h.el,j,W):W()}else j()},E=(h,v)=>{let I;for(;h!==v;)I=m(h),a(h),h=I;a(v)},ee=(h,v,I)=>{h.type.__hmrId&&bd(h);const{bum:A,scope:L,update:j,subTree:G,um:U}=h;A&&vt(A),L.stop(),j&&(j.active=!1,fn(G,h,v,I)),U&&Je(U,v),Je(()=>{h.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),Ed(h)},q=(h,v,I,A=!1,L=!1,j=0)=>{for(let G=j;G<h.length;G++)fn(h[G],v,I,A,L)},te=h=>h.shapeFlag&6?te(h.component.subTree):h.shapeFlag&128?h.suspense.next():m(h.anchor||h.el),be=(h,v,I)=>{h==null?v._vnode&&fn(v._vnode,null,null,!0):k(v._vnode||null,h,v,null,null,null,I),cl(),gc(),v._vnode=h},$e={p:k,um:fn,m:tn,r:ut,mt:Fe,mc:se,pc:ke,pbc:fe,n:te,o:e};let _e,de;return t&&([_e,de]=t($e)),{render:be,hydrate:_e,createApp:yf(be,_e)}}function Mt({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function Hs(e,t,s=!1){const i=e.children,a=t.children;if(ce(i)&&ce(a))for(let l=0;l<i.length;l++){const r=i[l];let c=a[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=a[l]=_t(a[l]),c.el=r.el),s||Hs(r,c)),c.type===fi&&(c.el=r.el),c.type===Ze&&!c.el&&(c.el=r.el)}}function $f(e){const t=e.slice(),s=[0];let i,a,l,r,c;const u=e.length;for(i=0;i<u;i++){const p=e[i];if(p!==0){if(a=s[s.length-1],e[a]<p){t[i]=a,s.push(i);continue}for(l=0,r=s.length-1;l<r;)c=l+r>>1,e[s[c]]<p?l=c+1:r=c;p<e[s[l]]&&(l>0&&(t[i]=s[l-1]),s[l]=i)}}for(l=s.length,r=s[l-1];l-- >0;)s[l]=r,r=t[r];return s}const Ef=e=>e.__isTeleport,_s=e=>e&&(e.disabled||e.disabled===""),wl=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Vo=(e,t)=>{const s=e&&e.to;if(Ue(s))if(t){const i=t(s);return i||z(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),i}else return z("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!_s(e)&&z(`Invalid Teleport target: ${s}`),s},Cf={__isTeleport:!0,process(e,t,s,i,a,l,r,c,u,p){const{mc:d,pc:f,pbc:m,o:{insert:_,querySelector:g,createText:k,createComment:y}}=p,C=_s(t.props);let{shapeFlag:x,children:F,dynamicChildren:O}=t;if(wt&&(u=!1,O=null),e==null){const V=t.el=y("teleport start"),K=t.anchor=y("teleport end");_(V,s,i),_(K,s,i);const B=t.target=Vo(t.props,g),H=t.targetAnchor=k("");B?(_(H,B),r=r||wl(B)):C||z("Invalid Teleport target on mount:",B,`(${typeof B})`);const se=(ae,fe)=>{x&16&&d(F,ae,fe,a,l,r,c,u)};C?se(s,K):B&&se(B,H)}else{t.el=e.el;const V=t.anchor=e.anchor,K=t.target=e.target,B=t.targetAnchor=e.targetAnchor,H=_s(e.props),se=H?s:K,ae=H?V:B;if(r=r||wl(K),O?(m(e.dynamicChildren,O,se,a,l,r,c),Hs(e,t,!0)):u||f(e,t,se,ae,a,l,r,c,!1),C)H||wi(t,s,V,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const fe=t.target=Vo(t.props,g);fe?wi(t,fe,null,p,0):z("Invalid Teleport target on update:",K,`(${typeof K})`)}else H&&wi(t,K,B,p,1)}jc(t)},remove(e,t,s,i,{um:a,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:f,props:m}=e;if(f&&l(d),(r||!_s(m))&&(l(p),c&16))for(let _=0;_<u.length;_++){const g=u[_];a(g,t,s,!0,!!g.dynamicChildren)}},move:wi,hydrate:Ff};function wi(e,t,s,{o:{insert:i},m:a},l=2){l===0&&i(e.targetAnchor,t,s);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=e,f=l===2;if(f&&i(r,t,s),(!f||_s(d))&&u&16)for(let m=0;m<p.length;m++)a(p[m],t,s,2);f&&i(c,t,s)}function Ff(e,t,s,i,a,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=t.target=Vo(t.props,u);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(_s(t.props))t.anchor=p(r(e),t,c(e),s,i,a,l),t.targetAnchor=f;else{t.anchor=r(e);let m=f;for(;m;)if(m=r(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}p(f,t,d,s,i,a,l)}jc(t)}return t.anchor&&r(t.anchor)}const $C=Cf;function jc(e){const t=e.ctx;if(t&&t.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}const Se=Symbol("Fragment"),fi=Symbol("Text"),Ze=Symbol("Comment"),Fi=Symbol("Static"),js=[];let An=null;function b(e=!1){js.push(An=e?null:[])}function Of(){js.pop(),An=js[js.length-1]||null}let Xs=1;function Il(e){Xs+=e}function Bc(e){return e.dynamicChildren=Xs>0?An||fs:null,Of(),Xs>0&&An&&An.push(e),e}function ne(e,t,s,i,a,l){return Bc(n(e,t,s,i,a,l,!0))}function T(e,t,s,i,a){return Bc(D(e,t,s,i,a,!0))}function Zt(e){return e?e.__v_isVNode===!0:!1}function bt(e,t){return t.shapeFlag&6&&rs.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const Sf=(...e)=>Lf(...e),lo="__vInternal",Wc=({key:e})=>e??null,Oi=({ref:e,ref_key:t,ref_for:s})=>e!=null?Ue(e)||Ce(e)||me(e)?{i:Ye,r:e,k:t,f:!!s}:e:null;function n(e,t=null,s=null,i=0,a=null,l=e===Se?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wc(t),ref:t&&Oi(t),scopeId:io,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:i,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ye};return c?(za(u,s),l&128&&e.normalize(u)):s&&(u.shapeFlag|=Ue(s)?8:16),u.key!==u.key&&z("VNode created with invalid key (NaN). VNode type:",u.type),Xs>0&&!r&&An&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&An.push(u),u}const D=Sf;function Lf(e,t=null,s=null,i=0,a=null,l=!1){if((!e||e===Zd)&&(e||z(`Invalid vnode type when creating vnode: ${e}.`),e=Ze),Zt(e)){const c=Pn(e,t,!0);return s&&za(c,s),Xs>0&&!l&&An&&(c.shapeFlag&6?An[An.indexOf(e)]=c:An.push(c)),c.patchFlag|=-2,c}if(Yc(e)&&(e=e.__vccOpts),t){t=Y(t);let{class:c,style:u}=t;c&&!Ue(c)&&(t.class=Ve(c)),Le(u)&&(Ni(u)&&!ce(u)&&(u=Be({},u)),t.style=en(u))}const r=Ue(e)?1:$c(e)?128:Ef(e)?64:Le(e)?4:me(e)?2:0;return r&4&&Ni(e)&&(e=he(e),z("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),n(e,t,s,i,a,r,l,!0)}function Y(e){return e?Ni(e)||lo in e?Be({},e):e:null}function Pn(e,t,s=!1){const{props:i,ref:a,patchFlag:l,children:r}=e,c=t?ve(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Wc(c),ref:t&&t.ref?s&&a?ce(a)?a.concat(Oi(t)):[a,Oi(t)]:Oi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l===-1&&ce(r)?r.map(Vc):r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pn(e.ssContent),ssFallback:e.ssFallback&&Pn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Vc(e){const t=Pn(e);return ce(e.children)&&(t.children=e.children.map(Vc)),t}function o(e=" ",t=0){return D(fi,null,e,t)}function pe(e="",t=!1){return t?(b(),T(Ze,null,e)):D(Ze,null,e)}function Mn(e){return e==null||typeof e=="boolean"?D(Ze):ce(e)?D(Se,null,e.slice()):typeof e=="object"?_t(e):D(fi,null,String(e))}function _t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pn(e)}function za(e,t){let s=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(ce(t))s=16;else if(typeof t=="object")if(i&65){const a=t.default;a&&(a._c&&(a._d=!1),za(e,a()),a._c&&(a._d=!0));return}else{s=32;const a=t._;!a&&!(lo in t)?t._ctx=Ye:a===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else me(t)?(t={default:t,_ctx:Ye},s=32):(t=String(t),i&64?(s=16,t=[o(t)]):s=8);e.children=t,e.shapeFlag|=s}function ve(...e){const t={};for(let s=0;s<e.length;s++){const i=e[s];for(const a in i)if(a==="class")t.class!==i.class&&(t.class=Ve([t.class,i.class]));else if(a==="style")t.style=en([t.style,i.style]);else if(li(a)){const l=t[a],r=i[a];r&&l!==r&&!(ce(l)&&l.includes(r))&&(t[a]=l?[].concat(l,r):r)}else a!==""&&(t[a]=i[a])}return t}function In(e,t,s,i=null){Cn(e,t,7,[s,i])}const Mf=Hc();let Tf=0;function Af(e,t,s){const i=e.type,a=(t?t.appContext:e.appContext)||Mf,l={uid:Tf++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pc(i,a),emitsOptions:Ic(i,a),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:i.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Jd(l),l.root=t?t.root:l,l.emit=Sd.bind(null,l),e.ce&&e.ce(l),l}let We=null;const Qn=()=>We||Ye,ks=e=>{We=e,e.scope.on()},Vt=()=>{We&&We.scope.off(),We=null},zf=St("slot,component");function Ko(e,t){const s=t.isNativeTag||Br;(zf(e)||s(e))&&z("Do not use built-in or reserved HTML elements as component id: "+e)}function Kc(e){return e.vnode.shapeFlag&4}let Js=!1;function Pf(e,t=!1){Js=t;const{props:s,children:i}=e.vnode,a=Kc(e);cf(e,s,a,t),vf(e,i);const l=a?Rf(e,t):void 0;return Js=!1,l}function Rf(e,t){var s;const i=e.type;{if(i.name&&Ko(i.name,e.appContext.config),i.components){const l=Object.keys(i.components);for(let r=0;r<l.length;r++)Ko(l[r],e.appContext.config)}if(i.directives){const l=Object.keys(i.directives);for(let r=0;r<l.length;r++)Lc(l[r])}i.compilerOptions&&Nf()&&z('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ka(new Proxy(e.ctx,Tc)),ef(e);const{setup:a}=i;if(a){const l=e.setupContext=a.length>1?Gc(e):null;ks(e),Jt();const r=ot(a,e,0,[ps(e.props),l]);if(es(),Vt(),fa(r)){if(r.then(Vt,Vt),t)return r.then(c=>{xl(e,c,t)}).catch(c=>{no(c,e,0)});if(e.asyncDep=r,!e.suspense){const c=(s=i.name)!==null&&s!==void 0?s:"Anonymous";z(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else xl(e,r,t)}else qc(e,t)}function xl(e,t,s){me(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Le(t)?(Zt(t)&&z("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=uc(t),nf(e)):t!==void 0&&z(`setup() should return an object. Received: ${t===null?"null":typeof t}`),qc(e,s)}let qo;const Nf=()=>!qo;function qc(e,t,s){const i=e.type;if(!e.render){if(!t&&qo&&!i.render){const a=i.template||Ta(e).template;if(a){Xn(e,"compile");const{isCustomElement:l,compilerOptions:r}=e.appContext.config,{delimiters:c,compilerOptions:u}=i,p=Be(Be({isCustomElement:l,delimiters:c},r),u);i.render=qo(a,p),Jn(e,"compile")}}e.render=i.render||mn}ks(e),Jt(),sf(e),es(),Vt(),!i.render&&e.render===mn&&!t&&(i.template?z('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):z("Component is missing template or render function."))}function Df(e){return new Proxy(e.attrs,{get(t,s){return Ui(),hn(e,"get","$attrs"),t[s]},set(){return z("setupContext.attrs is readonly."),!1},deleteProperty(){return z("setupContext.attrs is readonly."),!1}})}function Gc(e){const t=i=>{if(e.exposed&&z("expose() should be called only once per setup()."),i!=null){let a=typeof i;a==="object"&&(ce(i)?a="array":Ce(i)&&(a="ref")),a!=="object"&&z(`expose() should be passed a plain object, received ${a}.`)}e.exposed=i||{}};let s;return Object.freeze({get attrs(){return s||(s=Df(e))},get slots(){return ps(e.slots)},get emit(){return(i,...a)=>e.emit(i,...a)},expose:t})}function ro(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(uc(ka(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Wt)return Wt[s](e)},has(t,s){return s in t||s in Wt}}))}const Uf=/(?:^|[-_])(\w)/g,Hf=e=>e.replace(Uf,t=>t.toUpperCase()).replace(/[-_]/g,"");function ei(e,t=!0){return me(e)?e.displayName||e.name:e.name||t&&e.__name}function co(e,t,s=!1){let i=ei(t);if(!i&&t.__file){const a=t.__file.match(/([^/\\]+)\.\w+$/);a&&(i=a[1])}if(!i&&e&&e.parent){const a=l=>{for(const r in l)if(l[r]===t)return r};i=a(e.components||e.parent.type.components)||a(e.appContext.components)}return i?Hf(i):s?"App":"Anonymous"}function Yc(e){return me(e)&&"__vccOpts"in e}const M=(e,t)=>rd(e,t,Js);function EC(){return jf().slots}function jf(){const e=Qn();return e||z("useContext() called without active instance."),e.setupContext||(e.setupContext=Gc(e))}function mi(e,t,s){const i=arguments.length;return i===2?Le(t)&&!ce(t)?Zt(t)?D(e,null,[t]):D(e,t):D(e,null,t):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&Zt(s)&&(s=[s]),D(e,t,s))}const Bf=Symbol("ssrContext"),Wf=()=>{{const e=S(Bf);return e||z("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function vo(e){return!!(e&&e.__v_isShallow)}function Vf(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},s={style:"color:#b62e24"},i={style:"color:#9d288c"},a={header(f){return Le(f)?f.__isVue?["div",e,"VueInstance"]:Ce(f)?["div",{},["span",e,d(f)],"<",c(f.value),">"]:jt(f)?["div",{},["span",e,vo(f)?"ShallowReactive":"Reactive"],"<",c(f),`>${Ft(f)?" (readonly)":""}`]:Ft(f)?["div",{},["span",e,vo(f)?"ShallowReadonly":"Readonly"],"<",c(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...l(f.$)]}};function l(f){const m=[];f.type.props&&f.props&&m.push(r("props",he(f.props))),f.setupState!==Pe&&m.push(r("setup",f.setupState)),f.data!==Pe&&m.push(r("data",he(f.data)));const _=u(f,"computed");_&&m.push(r("computed",_));const g=u(f,"inject");return g&&m.push(r("injected",g)),m.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),m}function r(f,m){return m=Be({},m),Object.keys(m).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(m).map(_=>["div",{},["span",i,_+": "],c(m[_],!1)])]]:["span",{}]}function c(f,m=!0){return typeof f=="number"?["span",t,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",i,f]:Le(f)?["object",{object:m?he(f):f}]:["span",s,String(f)]}function u(f,m){const _=f.type;if(me(_))return;const g={};for(const k in f.ctx)p(_,k,m)&&(g[k]=f.ctx[k]);return g}function p(f,m,_){const g=f[_];if(ce(g)&&g.includes(m)||Le(g)&&m in g||f.extends&&p(f.extends,m,_)||f.mixins&&f.mixins.some(k=>p(k,m,_)))return!0}function d(f){return vo(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(a):window.devtoolsFormatters=[a]}const $l="3.2.47",Kf="http://www.w3.org/2000/svg",Pt=typeof document<"u"?document:null,El=Pt&&Pt.createElement("template"),qf={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,i)=>{const a=t?Pt.createElementNS(Kf,e):Pt.createElement(e,s?{is:s}:void 0);return e==="select"&&i&&i.multiple!=null&&a.setAttribute("multiple",i.multiple),a},createText:e=>Pt.createTextNode(e),createComment:e=>Pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,i,a,l){const r=s?s.previousSibling:t.lastChild;if(a&&(a===l||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),s),!(a===l||!(a=a.nextSibling)););else{El.innerHTML=i?`<svg>${e}</svg>`:e;const c=El.content;if(i){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,s)}return[r?r.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function Gf(e,t,s){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function Yf(e,t,s){const i=e.style,a=Ue(s);if(s&&!a){if(t&&!Ue(t))for(const l in t)s[l]==null&&Go(i,l,"");for(const l in s)Go(i,l,s[l])}else{const l=i.display;a?t!==s&&(i.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=l)}}const Qf=/[^\\];\s*$/,Cl=/\s*!important$/;function Go(e,t,s){if(ce(s))s.forEach(i=>Go(e,t,i));else if(s==null&&(s=""),Qf.test(s)&&z(`Unexpected semicolon at the end of '${t}' style value: '${s}'`),t.startsWith("--"))e.setProperty(t,s);else{const i=Zf(e,t);Cl.test(s)?e.setProperty(at(i),s.replace(Cl,""),"important"):e[i]=s}}const Fl=["Webkit","Moz","ms"],ko={};function Zf(e,t){const s=ko[t];if(s)return s;let i=qn(t);if(i!=="filter"&&i in e)return ko[t]=i;i=Yt(i);for(let a=0;a<Fl.length;a++){const l=Fl[a]+i;if(l in e)return ko[t]=l}return t}const Ol="http://www.w3.org/1999/xlink";function Xf(e,t,s,i,a){if(i&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(Ol,t.slice(6,t.length)):e.setAttributeNS(Ol,t,s);else{const l=_p(t);s==null||l&&!Hr(s)?e.removeAttribute(t):e.setAttribute(t,l?"":s)}}function Jf(e,t,s,i,a,l,r){if(t==="innerHTML"||t==="textContent"){i&&r(i,a,l),e[t]=s??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const u=s??"";(e.value!==u||e.tagName==="OPTION")&&(e.value=u),s==null&&e.removeAttribute(t);return}let c=!1;if(s===""||s==null){const u=typeof e[t];u==="boolean"?s=Hr(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{e[t]=s}catch(u){c||z(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${s} is invalid.`,u)}c&&e.removeAttribute(t)}function cs(e,t,s,i){e.addEventListener(t,s,i)}function em(e,t,s,i){e.removeEventListener(t,s,i)}function nm(e,t,s,i,a=null){const l=e._vei||(e._vei={}),r=l[t];if(i&&r)r.value=i;else{const[c,u]=tm(t);if(i){const p=l[t]=om(i,a);cs(e,c,p,u)}else r&&(em(e,c,r,u),l[t]=void 0)}}const Sl=/(?:Once|Passive|Capture)$/;function tm(e){let t;if(Sl.test(e)){t={};let i;for(;i=e.match(Sl);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):at(e.slice(2)),t]}let bo=0;const sm=Promise.resolve(),im=()=>bo||(sm.then(()=>bo=0),bo=Date.now());function om(e,t){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;Cn(am(i,s.value),t,5,[i])};return s.value=e,s.attached=im(),s}function am(e,t){if(ce(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(i=>a=>!a._stopped&&i&&i(a))}else return t}const Ll=/^on[a-z]/,lm=(e,t,s,i,a=!1,l,r,c,u)=>{t==="class"?Gf(e,i,a):t==="style"?Yf(e,s,i):li(t)?Ti(t)||nm(e,t,s,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rm(e,t,i,a))?Jf(e,t,i,l,r,c,u):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Xf(e,t,i,a))};function rm(e,t,s,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Ll.test(t)&&me(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ll.test(t)&&Ue(s)?!1:t in e}const dt="transition",Cs="animation",Qc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cm=Be({},Dd.props,Qc),Tt=(e,t=[])=>{ce(e)?e.forEach(s=>s(...t)):e&&e(...t)},Ml=e=>e?ce(e)?e.some(t=>t.length>1):e.length>1:!1;function um(e){const t={};for(const Z in e)Z in Qc||(t[Z]=e[Z]);if(e.css===!1)return t;const{name:s="v",type:i,duration:a,enterFromClass:l=`${s}-enter-from`,enterActiveClass:r=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:u=l,appearActiveClass:p=r,appearToClass:d=c,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:m=`${s}-leave-active`,leaveToClass:_=`${s}-leave-to`}=e,g=pm(a),k=g&&g[0],y=g&&g[1],{onBeforeEnter:C,onEnter:x,onEnterCancelled:F,onLeave:O,onLeaveCancelled:V,onBeforeAppear:K=C,onAppear:B=x,onAppearCancelled:H=F}=t,se=(Z,Ie,Re)=>{mt(Z,Ie?d:c),mt(Z,Ie?p:r),Re&&Re()},ae=(Z,Ie)=>{Z._isLeaving=!1,mt(Z,f),mt(Z,_),mt(Z,m),Ie&&Ie()},fe=Z=>(Ie,Re)=>{const Fe=Z?B:x,Ne=()=>se(Ie,Z,Re);Tt(Fe,[Ie,Ne]),Tl(()=>{mt(Ie,Z?u:l),et(Ie,Z?d:c),Ml(Fe)||Al(Ie,i,k,Ne)})};return Be(t,{onBeforeEnter(Z){Tt(C,[Z]),et(Z,l),et(Z,r)},onBeforeAppear(Z){Tt(K,[Z]),et(Z,u),et(Z,p)},onEnter:fe(!1),onAppear:fe(!0),onLeave(Z,Ie){Z._isLeaving=!0;const Re=()=>ae(Z,Ie);et(Z,f),Xc(),et(Z,m),Tl(()=>{Z._isLeaving&&(mt(Z,f),et(Z,_),Ml(O)||Al(Z,i,y,Re))}),Tt(O,[Z,Re])},onEnterCancelled(Z){se(Z,!1),Tt(F,[Z])},onAppearCancelled(Z){se(Z,!0),Tt(H,[Z])},onLeaveCancelled(Z){ae(Z),Tt(V,[Z])}})}function pm(e){if(e==null)return null;if(Le(e))return[yo(e.enter),yo(e.leave)];{const t=yo(e);return[t,t]}}function yo(e){const t=Ip(e);return fd(t,"<transition> explicit duration"),t}function et(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(t)}function mt(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const{_vtc:s}=e;s&&(s.delete(t),s.size||(e._vtc=void 0))}function Tl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let dm=0;function Al(e,t,s,i){const a=e._endId=++dm,l=()=>{a===e._endId&&i()};if(s)return setTimeout(l,s);const{type:r,timeout:c,propCount:u}=Zc(e,t);if(!r)return i();const p=r+"end";let d=0;const f=()=>{e.removeEventListener(p,m),l()},m=_=>{_.target===e&&++d>=u&&f()};setTimeout(()=>{d<u&&f()},c+1),e.addEventListener(p,m)}function Zc(e,t){const s=window.getComputedStyle(e),i=g=>(s[g]||"").split(", "),a=i(`${dt}Delay`),l=i(`${dt}Duration`),r=zl(a,l),c=i(`${Cs}Delay`),u=i(`${Cs}Duration`),p=zl(c,u);let d=null,f=0,m=0;t===dt?r>0&&(d=dt,f=r,m=l.length):t===Cs?p>0&&(d=Cs,f=p,m=u.length):(f=Math.max(r,p),d=f>0?r>p?dt:Cs:null,m=d?d===dt?l.length:u.length:0);const _=d===dt&&/\b(transform|all)(,|$)/.test(i(`${dt}Property`).toString());return{type:d,timeout:f,propCount:m,hasTransform:_}}function zl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,i)=>Pl(s)+Pl(e[i])))}function Pl(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Xc(){return document.body.offsetHeight}const Jc=new WeakMap,eu=new WeakMap,nu={name:"TransitionGroup",props:Be({},cm,{tag:String,moveClass:String}),setup(e,{slots:t}){const s=Qn(),i=Cc();let a,l;return Oa(()=>{if(!a.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!vm(a[0].el,s.vnode.el,r))return;a.forEach(hm),a.forEach(_m);const c=a.filter(gm);Xc(),c.forEach(u=>{const p=u.el,d=p.style;et(p,r),d.transform=d.webkitTransform=d.transitionDuration="";const f=p._moveCb=m=>{m&&m.target!==p||(!m||/transform$/.test(m.propertyName))&&(p.removeEventListener("transitionend",f),p._moveCb=null,mt(p,r))};p.addEventListener("transitionend",f)})}),()=>{const r=he(e),c=um(r);let u=r.tag||Se;a=l,l=t.default?Fa(t.default()):[];for(let p=0;p<l.length;p++){const d=l[p];d.key!=null?vs(d,Zs(d,c,i,s)):z("<TransitionGroup> children must be keyed.")}if(a)for(let p=0;p<a.length;p++){const d=a[p];vs(d,Zs(d,c,i,s)),Jc.set(d,d.el.getBoundingClientRect())}return D(u,null,l)}}},fm=e=>delete e.mode;nu.props;const mm=nu;function hm(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function _m(e){eu.set(e,e.el.getBoundingClientRect())}function gm(e){const t=Jc.get(e),s=eu.get(e),i=t.left-s.left,a=t.top-s.top;if(i||a){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${i}px,${a}px)`,l.transitionDuration="0s",e}}function vm(e,t,s){const i=e.cloneNode();e._vtc&&e._vtc.forEach(r=>{r.split(/\s+/).forEach(c=>c&&i.classList.remove(c))}),s.split(/\s+/).forEach(r=>r&&i.classList.add(r)),i.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(i);const{hasTransform:l}=Zc(i);return a.removeChild(i),l}const Rl=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ce(t)?s=>vt(t,s):t};function km(e){e.target.composing=!0}function Nl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const bm={created(e,{modifiers:{lazy:t,trim:s,number:i}},a){e._assign=Rl(a);const l=i||a.props&&a.props.type==="number";cs(e,t?"change":"input",r=>{if(r.target.composing)return;let c=e.value;s&&(c=c.trim()),l&&(c=So(c)),e._assign(c)}),s&&cs(e,"change",()=>{e.value=e.value.trim()}),t||(cs(e,"compositionstart",km),cs(e,"compositionend",Nl),cs(e,"change",Nl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:s,trim:i,number:a}},l){if(e._assign=Rl(l),e.composing||document.activeElement===e&&e.type!=="range"&&(s||i&&e.value.trim()===t||(a||e.type==="number")&&So(e.value)===t))return;const r=t??"";e.value!==r&&(e.value=r)}},ym={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dl=(e,t)=>s=>{if(!("key"in s))return;const i=at(s.key);if(t.some(a=>a===i||ym[a]===i))return e(s)},tu={beforeMount(e,{value:t},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):Fs(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:i}){!t!=!s&&(i?t?(i.beforeEnter(e),Fs(e,!0),i.enter(e)):i.leave(e,()=>{Fs(e,!1)}):Fs(e,t))},beforeUnmount(e,{value:t}){Fs(e,t)}};function Fs(e,t){e.style.display=t?e._vod:"none"}const wm=Be({patchProp:lm},qf);let Ul;function Im(){return Ul||(Ul=If(wm))}const CC=(...e)=>{const t=Im().createApp(...e);xm(t),$m(t);const{mount:s}=t;return t.mount=i=>{const a=Em(i);if(!a)return;const l=t._component;!me(l)&&!l.render&&!l.template&&(l.template=a.innerHTML),a.innerHTML="";const r=s(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),r},t};function xm(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>fp(t)||mp(t),writable:!1})}function $m(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){z("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,i='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return z(i),s},set(){z(i)}})}}function Em(e){if(Ue(e)){const t=document.querySelector(e);return t||z(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&z('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Cm(){Vf()}Cm();const su=Symbol("v-click-clicks"),iu=Symbol("v-click-clicks-elements"),Fm=Symbol("v-click-clicks-order-map"),ou=Symbol("v-click-clicks-disabled"),au=Symbol("slidev-slide-scale"),P=Symbol("slidev-slidev-context"),Om=Symbol("slidev-route"),Sm=Symbol("slidev-slide-context"),Lm="slidev-vclick-target",FC="slidev-vclick-hidden",OC="slidev-vclick-fade",SC="slidev-vclick-hidden-explicitly",LC="slidev-vclick-current",MC="slidev-vclick-prior",TC=["localhost","127.0.0.1"];function Mm(e,t){if(!e)return!1;const s=e.indexOf(t);return s>=0?(e.splice(s,1),!0):!1}function Tm(...e){let t,s,i;e.length===1?(t=0,i=1,[s]=e):[t,s,i=1]=e;const a=[];let l=t;for(;l<s;)a.push(l),l+=i||1;return a}function Am(e){return e!=null}function zm(e,t){return Object.fromEntries(Object.entries(e).map(([s,i])=>t(s,i)).filter(Am))}const Ns={theme:"default",title:"I File",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",materia:"INFORMATICA",as:"2022/2023",version:"1.0.0"},Me=Ns,It=Me.aspectRatio??16/9,xt=Me.canvasWidth??980,Pa=Math.ceil(xt/It),Ra=M(()=>zm(Me.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Fn(e,t,s){Object.defineProperty(e,t,{value:s,writable:!0,enumerable:!1})}const ns=nn({page:0,clicks:0});let Pm=[],Rm=[];Fn(ns,"$syncUp",!0);Fn(ns,"$syncDown",!0);Fn(ns,"$paused",!1);Fn(ns,"$onSet",e=>Pm.push(e));Fn(ns,"$onPatch",e=>Rm.push(e));Fn(ns,"$patch",async()=>!1);function lu(e,t,s=!1){const i=[];let a=!1,l=!1,r,c;const u=nn(t);function p(_){i.push(_)}function d(_,g){u[_]!==g&&(clearTimeout(r),a=!0,u[_]=g,r=setTimeout(()=>a=!1,0))}function f(_){a||(clearTimeout(c),l=!0,Object.entries(_).forEach(([g,k])=>{u[g]=k}),c=setTimeout(()=>l=!1,0))}function m(_){let g;s?s&&window.addEventListener("storage",y=>{y&&y.key===_&&y.newValue&&f(JSON.parse(y.newValue))}):(g=new BroadcastChannel(_),g.addEventListener("message",y=>f(y.data)));function k(){!s&&g&&!l?g.postMessage(he(u)):s&&!l&&window.localStorage.setItem(_,JSON.stringify(u)),a||i.forEach(y=>y(u))}if(He(u,k,{deep:!0}),s){const y=window.localStorage.getItem(_);y&&f(JSON.parse(y))}}return{init:m,onPatch:p,patch:d,state:u}}const{init:AC,onPatch:zC,patch:PC,state:wo}=lu(ns,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ts=nn({});let Nm=[],Dm=[];Fn(ts,"$syncUp",!0);Fn(ts,"$syncDown",!0);Fn(ts,"$paused",!1);Fn(ts,"$onSet",e=>Nm.push(e));Fn(ts,"$onPatch",e=>Dm.push(e));Fn(ts,"$patch",async()=>!1);const{init:RC,onPatch:Um,patch:ru,state:Bi}=lu(ts,{},!1),Hm="modulepreload",jm=function(e){return"/INFORMATICA/3/files/"+e},Hl={},$t=function(t,s,i){if(!s||s.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=jm(l),l in Hl)return;Hl[l]=!0;const r=l.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!i)for(let d=a.length-1;d>=0;d--){const f=a[d];if(f.href===l&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Hm,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};var jl;const Rn=typeof window<"u",Bm=e=>typeof e<"u",Wm=Object.prototype.toString,ni=e=>typeof e=="function",NC=e=>typeof e=="number",cu=e=>typeof e=="string",DC=e=>Wm.call(e)==="[object Object]",Yo=()=>+Date.now(),Bs=()=>{};Rn&&((jl=window==null?void 0:window.navigator)!=null&&jl.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pn(e){return typeof e=="function"?e():w(e)}function Vm(e,t){function s(...i){return new Promise((a,l)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(a).catch(l)})}return s}const uu=e=>e();function Km(e=uu){const t=le(!0);function s(){t.value=!1}function i(){t.value=!0}const a=(...l)=>{t.value&&e(...l)};return{isActive:Wn(t),pause:s,resume:i,eventFilter:a}}function qm(e){return e}function Gm(e,t){var s;if(typeof e=="number")return e+t;const i=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",a=e.slice(i.length),l=parseFloat(i)+t;return Number.isNaN(l)?e:l+a}function Ym(e,t){let s,i,a;const l=le(!0),r=()=>{l.value=!0,a()};He(e,r,{flush:"sync"});const c=ni(t)?t:t.get,u=ni(t)?void 0:t.set,p=pc((d,f)=>(i=d,a=f,{get(){return l.value&&(s=c(),l.value=!1),i(),s},set(m){u==null||u(m)}}));return Object.isExtensible(p)&&(p.trigger=r),p}function Yn(e){return Yr()?($p(e),!0):!1}function Qm(e){if(!Ce(e))return nn(e);const t=new Proxy({},{get(s,i,a){return w(Reflect.get(e.value,i,a))},set(s,i,a){return Ce(e.value[i])&&!Ce(a)?e.value[i].value=a:e.value[i]=a,!0},deleteProperty(s,i){return Reflect.deleteProperty(e.value,i)},has(s,i){return Reflect.has(e.value,i)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return nn(t)}function pu(e){return typeof e=="function"?M(e):le(e)}var Zm=Object.defineProperty,Xm=Object.defineProperties,Jm=Object.getOwnPropertyDescriptors,Bl=Object.getOwnPropertySymbols,eh=Object.prototype.hasOwnProperty,nh=Object.prototype.propertyIsEnumerable,Wl=(e,t,s)=>t in e?Zm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,th=(e,t)=>{for(var s in t||(t={}))eh.call(t,s)&&Wl(e,s,t[s]);if(Bl)for(var s of Bl(t))nh.call(t,s)&&Wl(e,s,t[s]);return e},sh=(e,t)=>Xm(e,Jm(t));function ih(e){if(!Ce(e))return id(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)t[s]=pc(()=>({get(){return e.value[s]},set(i){if(Array.isArray(e.value)){const a=[...e.value];a[s]=i,e.value=a}else{const a=sh(th({},e.value),{[s]:i});Object.setPrototypeOf(a,e.value),e.value=a}}}));return t}function Na(e,t=!0){Qn()?pi(e):t?e():zn(e)}function UC(e){Qn()&&ao(e)}function oh(e,t=1e3,s={}){const{immediate:i=!0,immediateCallback:a=!1}=s;let l=null;const r=le(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){const d=pn(t);d<=0||(r.value=!0,a&&e(),c(),l=setInterval(e,d))}if(i&&Rn&&p(),Ce(t)||ni(t)){const d=He(t,()=>{r.value&&Rn&&p()});Yn(d)}return Yn(u),{isActive:r,pause:u,resume:p}}function ah(e,t,s={}){const{immediate:i=!0}=s,a=le(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){a.value=!1,r()}function u(...p){r(),a.value=!0,l=setTimeout(()=>{a.value=!1,l=null,e(...p)},pn(t))}return i&&(a.value=!0,Rn&&u()),Yn(c),{isPending:Wn(a),start:u,stop:c}}function du(e=!1,t={}){const{truthyValue:s=!0,falsyValue:i=!1}=t,a=Ce(e),l=le(e);function r(c){if(arguments.length)return l.value=c,l.value;{const u=pn(s);return l.value=l.value===u?pn(i):u,l.value}}return a?r:[l,r]}var Vl=Object.getOwnPropertySymbols,lh=Object.prototype.hasOwnProperty,rh=Object.prototype.propertyIsEnumerable,ch=(e,t)=>{var s={};for(var i in e)lh.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&Vl)for(var i of Vl(e))t.indexOf(i)<0&&rh.call(e,i)&&(s[i]=e[i]);return s};function uh(e,t,s={}){const i=s,{eventFilter:a=uu}=i,l=ch(i,["eventFilter"]);return He(e,Vm(a,t),l)}var ph=Object.defineProperty,dh=Object.defineProperties,fh=Object.getOwnPropertyDescriptors,Wi=Object.getOwnPropertySymbols,fu=Object.prototype.hasOwnProperty,mu=Object.prototype.propertyIsEnumerable,Kl=(e,t,s)=>t in e?ph(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,mh=(e,t)=>{for(var s in t||(t={}))fu.call(t,s)&&Kl(e,s,t[s]);if(Wi)for(var s of Wi(t))mu.call(t,s)&&Kl(e,s,t[s]);return e},hh=(e,t)=>dh(e,fh(t)),_h=(e,t)=>{var s={};for(var i in e)fu.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&Wi)for(var i of Wi(e))t.indexOf(i)<0&&mu.call(e,i)&&(s[i]=e[i]);return s};function gh(e,t,s={}){const i=s,{eventFilter:a}=i,l=_h(i,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=Km(a);return{stop:uh(e,t,hh(mh({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function En(e){var t;const s=pn(e);return(t=s==null?void 0:s.$el)!=null?t:s}const Xe=Rn?window:void 0,hu=Rn?window.document:void 0,vh=Rn?window.navigator:void 0;function Te(...e){let t,s,i,a;if(cu(e[0])||Array.isArray(e[0])?([s,i,a]=e,t=Xe):[t,s,i,a]=e,!t)return Bs;Array.isArray(s)||(s=[s]),Array.isArray(i)||(i=[i]);const l=[],r=()=>{l.forEach(d=>d()),l.length=0},c=(d,f,m)=>(d.addEventListener(f,m,a),()=>d.removeEventListener(f,m,a)),u=He(()=>En(t),d=>{r(),d&&l.push(...s.flatMap(f=>i.map(m=>c(d,f,m))))},{immediate:!0,flush:"post"}),p=()=>{u(),r()};return Yn(p),p}function kh(e,t,s={}){const{window:i=Xe,ignore:a=[],capture:l=!0,detectIframe:r=!1}=s;if(!i)return;let c=!0,u;const p=_=>a.some(g=>{if(typeof g=="string")return Array.from(i.document.querySelectorAll(g)).some(k=>k===_.target||_.composedPath().includes(k));{const k=En(g);return k&&(_.target===k||_.composedPath().includes(k))}}),d=_=>{i.clearTimeout(u);const g=En(e);if(!(!g||g===_.target||_.composedPath().includes(g))){if(_.detail===0&&(c=!p(_)),!c){c=!0;return}t(_)}},f=[Te(i,"click",d,{passive:!0,capture:l}),Te(i,"pointerdown",_=>{const g=En(e);g&&(c=!_.composedPath().includes(g)&&!p(_))},{passive:!0}),Te(i,"pointerup",_=>{if(_.button===0){const g=_.composedPath();_.composedPath=()=>g,u=i.setTimeout(()=>d(_),50)}},{passive:!0}),r&&Te(i,"blur",_=>{var g;const k=En(e);((g=i.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(k!=null&&k.contains(i.document.activeElement))&&t(_)})].filter(Boolean);return()=>f.forEach(_=>_())}const bh=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function yh(...e){let t,s,i={};e.length===3?(t=e[0],s=e[1],i=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,s=e[0],i=e[1]):(t=e[0],s=e[1]):(t=!0,s=e[0]);const{target:a=Xe,eventName:l="keydown",passive:r=!1}=i,c=bh(t);return Te(a,l,p=>{c(p)&&s(p)},r)}function wh(e={}){var t;const{window:s=Xe}=e,i=(t=e.document)!=null?t:s==null?void 0:s.document,a=Ym(()=>null,()=>i==null?void 0:i.activeElement);return s&&(Te(s,"blur",l=>{l.relatedTarget===null&&a.trigger()},!0),Te(s,"focus",a.trigger,!0)),a}function hi(e,t=!1){const s=le(),i=()=>s.value=Boolean(e());return i(),Na(i,t),s}function us(e,t={}){const{window:s=Xe}=t,i=hi(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let a;const l=le(!1),r=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",c):a.removeListener(c))},c=()=>{i.value&&(r(),a=s.matchMedia(pu(e).value),l.value=a.matches,"addEventListener"in a?a.addEventListener("change",c):a.addListener(c))};return Is(c),Yn(()=>r()),l}const Ih={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var xh=Object.defineProperty,ql=Object.getOwnPropertySymbols,$h=Object.prototype.hasOwnProperty,Eh=Object.prototype.propertyIsEnumerable,Gl=(e,t,s)=>t in e?xh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ch=(e,t)=>{for(var s in t||(t={}))$h.call(t,s)&&Gl(e,s,t[s]);if(ql)for(var s of ql(t))Eh.call(t,s)&&Gl(e,s,t[s]);return e};function Fh(e,t={}){function s(c,u){let p=e[c];return u!=null&&(p=Gm(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:i=Xe}=t;function a(c){return i?i.matchMedia(c).matches:!1}const l=c=>us(`(min-width: ${s(c)})`,t),r=Object.keys(e).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Ch({greater(c){return us(`(min-width: ${s(c,.1)})`,t)},greaterOrEqual:l,smaller(c){return us(`(max-width: ${s(c,-.1)})`,t)},smallerOrEqual(c){return us(`(max-width: ${s(c)})`,t)},between(c,u){return us(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`,t)},isGreater(c){return a(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return a(`(min-width: ${s(c)})`)},isSmaller(c){return a(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return a(`(max-width: ${s(c)})`)},isInBetween(c,u){return a(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`)}},r)}function Oh(e={}){const{navigator:t=vh,read:s=!1,source:i,copiedDuring:a=1500,legacy:l=!1}=e,r=["copy","cut"],c=hi(()=>t&&"clipboard"in t),u=M(()=>c.value||l),p=le(""),d=le(!1),f=ah(()=>d.value=!1,a);function m(){c.value?t.clipboard.readText().then(y=>{p.value=y}):p.value=k()}if(u.value&&s)for(const y of r)Te(y,m);async function _(y=pn(i)){u.value&&y!=null&&(c.value?await t.clipboard.writeText(y):g(y),p.value=y,d.value=!0,f.start())}function g(y){const C=document.createElement("textarea");C.value=y??"",C.style.position="absolute",C.style.opacity="0",document.body.appendChild(C),C.select(),document.execCommand("copy"),C.remove()}function k(){var y,C,x;return(x=(C=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:C.toString())!=null?x:""}return{isSupported:u,text:p,copied:d,copy:_}}function Sh(e){return JSON.parse(JSON.stringify(e))}const Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zo="__vueuse_ssr_handlers__";Qo[Zo]=Qo[Zo]||{};const Lh=Qo[Zo];function Mh(e,t){return Lh[e]||t}function Th(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ah=Object.defineProperty,Yl=Object.getOwnPropertySymbols,zh=Object.prototype.hasOwnProperty,Ph=Object.prototype.propertyIsEnumerable,Ql=(e,t,s)=>t in e?Ah(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Zl=(e,t)=>{for(var s in t||(t={}))zh.call(t,s)&&Ql(e,s,t[s]);if(Yl)for(var s of Yl(t))Ph.call(t,s)&&Ql(e,s,t[s]);return e};const Rh={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Nh(e,t,s,i={}){var a;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:f=Xe,eventFilter:m,onError:_=B=>{console.error(B)}}=i,g=(d?Gn:le)(t);if(!s)try{s=Mh("getDefaultStorage",()=>{var B;return(B=Xe)==null?void 0:B.localStorage})()}catch(B){_(B)}if(!s)return g;const k=pn(t),y=Th(k),C=(a=i.serializer)!=null?a:Rh[y],{pause:x,resume:F}=gh(g,()=>O(g.value),{flush:l,deep:r,eventFilter:m});return f&&c&&Te(f,"storage",K),K(),g;function O(B){try{if(B==null)s.removeItem(e);else{const H=C.write(B),se=s.getItem(e);se!==H&&(s.setItem(e,H),f&&(f==null||f.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:se,newValue:H,storageArea:s}))))}}catch(H){_(H)}}function V(B){const H=B?B.newValue:s.getItem(e);if(H==null)return u&&k!==null&&s.setItem(e,C.write(k)),k;if(!B&&p){const se=C.read(H);return ni(p)?p(se,k):y==="object"&&!Array.isArray(se)?Zl(Zl({},k),se):se}else return typeof H!="string"?H:C.read(H)}function K(B){if(!(B&&B.storageArea!==s)){if(B&&B.key==null){g.value=k;return}if(!(B&&B.key!==e)){x();try{g.value=V(B)}catch(H){_(H)}finally{B?zn(F):F()}}}}}function Dh(e){return us("(prefers-color-scheme: dark)",e)}var Uh=Object.defineProperty,Hh=Object.defineProperties,jh=Object.getOwnPropertyDescriptors,Xl=Object.getOwnPropertySymbols,Bh=Object.prototype.hasOwnProperty,Wh=Object.prototype.propertyIsEnumerable,Jl=(e,t,s)=>t in e?Uh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Vh=(e,t)=>{for(var s in t||(t={}))Bh.call(t,s)&&Jl(e,s,t[s]);if(Xl)for(var s of Xl(t))Wh.call(t,s)&&Jl(e,s,t[s]);return e},Kh=(e,t)=>Hh(e,jh(t));function HC(e,t={}){var s,i,a;const l=(s=t.draggingElement)!=null?s:Xe,r=(i=t.handle)!=null?i:e,c=le((a=pn(t.initialValue))!=null?a:{x:0,y:0}),u=le(),p=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,d=g=>{pn(t.preventDefault)&&g.preventDefault(),pn(t.stopPropagation)&&g.stopPropagation()},f=g=>{var k;if(!p(g)||pn(t.exact)&&g.target!==pn(e))return;const y=pn(e).getBoundingClientRect(),C={x:g.clientX-y.left,y:g.clientY-y.top};((k=t.onStart)==null?void 0:k.call(t,C,g))!==!1&&(u.value=C,d(g))},m=g=>{var k;p(g)&&u.value&&(c.value={x:g.clientX-u.value.x,y:g.clientY-u.value.y},(k=t.onMove)==null||k.call(t,c.value,g),d(g))},_=g=>{var k;p(g)&&u.value&&(u.value=void 0,(k=t.onEnd)==null||k.call(t,c.value,g),d(g))};return Rn&&(Te(r,"pointerdown",f,!0),Te(l,"pointermove",m,!0),Te(l,"pointerup",_,!0)),Kh(Vh({},ih(c)),{position:c,isDragging:M(()=>!!u.value),style:M(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var er=Object.getOwnPropertySymbols,qh=Object.prototype.hasOwnProperty,Gh=Object.prototype.propertyIsEnumerable,Yh=(e,t)=>{var s={};for(var i in e)qh.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&er)for(var i of er(e))t.indexOf(i)<0&&Gh.call(e,i)&&(s[i]=e[i]);return s};function Qh(e,t,s={}){const i=s,{window:a=Xe}=i,l=Yh(i,["window"]);let r;const c=hi(()=>a&&"ResizeObserver"in a),u=()=>{r&&(r.disconnect(),r=void 0)},p=He(()=>En(e),f=>{u(),c.value&&a&&f&&(r=new ResizeObserver(t),r.observe(f,l))},{immediate:!0,flush:"post"}),d=()=>{u(),p()};return Yn(d),{isSupported:c,stop:d}}function Zh(e,t={}){const{immediate:s=!0,window:i=Xe}=t,a=le(!1);let l=0,r=null;function c(d){if(!a.value||!i)return;const f=d-l;e({delta:f,timestamp:d}),l=d,r=i.requestAnimationFrame(c)}function u(){!a.value&&i&&(a.value=!0,r=i.requestAnimationFrame(c))}function p(){a.value=!1,r!=null&&i&&(i.cancelAnimationFrame(r),r=null)}return s&&u(),Yn(p),{isActive:Wn(a),pause:p,resume:u}}function Xh(e,t={width:0,height:0},s={}){const{window:i=Xe,box:a="content-box"}=s,l=M(()=>{var u,p;return(p=(u=En(e))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),r=le(t.width),c=le(t.height);return Qh(e,([u])=>{const p=a==="border-box"?u.borderBoxSize:a==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(i&&l.value){const d=En(e);if(d){const f=i.getComputedStyle(d);r.value=parseFloat(f.width),c.value=parseFloat(f.height)}}else if(p){const d=Array.isArray(p)?p:[p];r.value=d.reduce((f,{inlineSize:m})=>f+m,0),c.value=d.reduce((f,{blockSize:m})=>f+m,0)}else r.value=u.contentRect.width,c.value=u.contentRect.height},s),He(()=>En(e),u=>{r.value=u?t.width:0,c.value=u?t.height:0}),{width:r,height:c}}const nr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Jh(e,t={}){const{document:s=hu,autoExit:i=!1}=t,a=e||(s==null?void 0:s.querySelector("html")),l=le(!1);let r=nr[0];const c=hi(()=>{if(s){for(const k of nr)if(k[1]in s)return r=k,!0}else return!1;return!1}),[u,p,d,,f]=r;async function m(){c.value&&(s!=null&&s[d]&&await s[p](),l.value=!1)}async function _(){if(!c.value)return;await m();const k=En(a);k&&(await k[u](),l.value=!0)}async function g(){l.value?await m():await _()}return s&&Te(s,f,()=>{l.value=!!(s!=null&&s[d])},!1),i&&Yn(m),{isSupported:c,isFullscreen:l,enter:_,exit:m,toggle:g}}function jC(e,t,s={}){const{root:i,rootMargin:a="0px",threshold:l=.1,window:r=Xe}=s,c=hi(()=>r&&"IntersectionObserver"in r);let u=Bs;const p=c.value?He(()=>({el:En(e),root:En(i)}),({el:f,root:m})=>{if(u(),!f)return;const _=new IntersectionObserver(t,{root:m,rootMargin:a,threshold:l});_.observe(f),u=()=>{_.disconnect(),u=Bs}},{immediate:!0,flush:"post"}):Bs,d=()=>{u(),p()};return Yn(d),{isSupported:c,stop:d}}function Dn(e,t,s={}){const{window:i=Xe}=s;return Nh(e,t,i==null?void 0:i.localStorage,s)}const e_={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function n_(e={}){const{reactive:t=!1,target:s=Xe,aliasMap:i=e_,passive:a=!0,onEventFired:l=Bs}=e,r=nn(new Set),c={toJSON(){return{}},current:r},u=t?nn(c):c,p=new Set,d=new Set;function f(k,y){k in u&&(t?u[k]=y:u[k].value=y)}function m(){r.clear();for(const k of d)f(k,!1)}function _(k,y){var C,x;const F=(C=k.key)==null?void 0:C.toLowerCase(),V=[(x=k.code)==null?void 0:x.toLowerCase(),F].filter(Boolean);F&&(y?r.add(F):r.delete(F));for(const K of V)d.add(K),f(K,y);F==="meta"&&!y?(p.forEach(K=>{r.delete(K),f(K,!1)}),p.clear()):typeof k.getModifierState=="function"&&k.getModifierState("Meta")&&y&&[...r,...V].forEach(K=>p.add(K))}Te(s,"keydown",k=>(_(k,!0),l(k)),{passive:a}),Te(s,"keyup",k=>(_(k,!1),l(k)),{passive:a}),Te("blur",m,{passive:!0}),Te("focus",m,{passive:!0});const g=new Proxy(u,{get(k,y,C){if(typeof y!="string")return Reflect.get(k,y,C);if(y=y.toLowerCase(),y in i&&(y=i[y]),!(y in u))if(/[+_-]/.test(y)){const F=y.split(/[+_-]/g).map(O=>O.trim());u[y]=M(()=>F.every(O=>w(g[O])))}else u[y]=le(!1);const x=Reflect.get(k,y,C);return t?w(x):x}});return g}function BC(e={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:i=!1,initialValue:a={x:0,y:0},window:l=Xe,eventFilter:r}=e,c=le(a.x),u=le(a.y),p=le(null),d=k=>{t==="page"?(c.value=k.pageX,u.value=k.pageY):t==="client"?(c.value=k.clientX,u.value=k.clientY):t==="movement"&&(c.value=k.movementX,u.value=k.movementY),p.value="mouse"},f=()=>{c.value=a.x,u.value=a.y},m=k=>{if(k.touches.length>0){const y=k.touches[0];t==="page"?(c.value=y.pageX,u.value=y.pageY):t==="client"&&(c.value=y.clientX,u.value=y.clientY),p.value="touch"}},_=k=>r===void 0?d(k):r(()=>d(k),{}),g=k=>r===void 0?m(k):r(()=>m(k),{});return l&&(Te(l,"mousemove",_,{passive:!0}),Te(l,"dragover",_,{passive:!0}),s&&t!=="movement"&&(Te(l,"touchstart",g,{passive:!0}),Te(l,"touchmove",g,{passive:!0}),i&&Te(l,"touchend",f,{passive:!0}))),{x:c,y:u,sourceType:p}}var it;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(it||(it={}));function t_(e,t={}){const s=pu(e),{threshold:i=50,onSwipe:a,onSwipeEnd:l,onSwipeStart:r}=t,c=nn({x:0,y:0}),u=(K,B)=>{c.x=K,c.y=B},p=nn({x:0,y:0}),d=(K,B)=>{p.x=K,p.y=B},f=M(()=>c.x-p.x),m=M(()=>c.y-p.y),{max:_,abs:g}=Math,k=M(()=>_(g(f.value),g(m.value))>=i),y=le(!1),C=le(!1),x=M(()=>k.value?g(f.value)>g(m.value)?f.value>0?it.LEFT:it.RIGHT:m.value>0?it.UP:it.DOWN:it.NONE),F=K=>{var B,H,se;const ae=K.buttons===0,fe=K.buttons===1;return(se=(H=(B=t.pointerTypes)==null?void 0:B.includes(K.pointerType))!=null?H:ae||fe)!=null?se:!0},O=[Te(e,"pointerdown",K=>{var B,H;if(!F(K))return;C.value=!0,(H=(B=s.value)==null?void 0:B.style)==null||H.setProperty("touch-action","none");const se=K.target;se==null||se.setPointerCapture(K.pointerId);const{clientX:ae,clientY:fe}=K;u(ae,fe),d(ae,fe),r==null||r(K)}),Te(e,"pointermove",K=>{if(!F(K)||!C.value)return;const{clientX:B,clientY:H}=K;d(B,H),!y.value&&k.value&&(y.value=!0),y.value&&(a==null||a(K))}),Te(e,"pointerup",K=>{var B,H;F(K)&&(y.value&&(l==null||l(K,x.value)),C.value=!1,y.value=!1,(H=(B=s.value)==null?void 0:B.style)==null||H.setProperty("touch-action","initial"))})],V=()=>O.forEach(K=>K());return{isSwiping:Wn(y),direction:Wn(x),posStart:Wn(c),posEnd:Wn(p),distanceX:f,distanceY:m,stop:V}}let s_=0;function WC(e,t={}){const s=le(!1),{document:i=hu,immediate:a=!0,manual:l=!1,id:r=`vueuse_styletag_${++s_}`}=t,c=le(e);let u=()=>{};const p=()=>{if(!i)return;const f=i.getElementById(r)||i.createElement("style");f.isConnected||(f.type="text/css",f.id=r,t.media&&(f.media=t.media),i.head.appendChild(f)),!s.value&&(u=He(c,m=>{f.textContent=m},{immediate:!0}),s.value=!0)},d=()=>{!i||!s.value||(u(),i.head.removeChild(i.getElementById(r)),s.value=!1)};return a&&!l&&Na(p),l||Yn(d),{id:r,css:c,unload:d,load:p,isLoaded:Wn(s)}}var i_=Object.defineProperty,tr=Object.getOwnPropertySymbols,o_=Object.prototype.hasOwnProperty,a_=Object.prototype.propertyIsEnumerable,sr=(e,t,s)=>t in e?i_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,l_=(e,t)=>{for(var s in t||(t={}))o_.call(t,s)&&sr(e,s,t[s]);if(tr)for(var s of tr(t))a_.call(t,s)&&sr(e,s,t[s]);return e};function VC(e={}){const{controls:t=!1,offset:s=0,immediate:i=!0,interval:a="requestAnimationFrame",callback:l}=e,r=le(Yo()+s),c=()=>r.value=Yo()+s,u=l?()=>{c(),l(r.value)}:c,p=a==="requestAnimationFrame"?Zh(u,{immediate:i}):oh(u,a,{immediate:i});return t?l_({timestamp:r},p):r}var r_=Object.defineProperty,ir=Object.getOwnPropertySymbols,c_=Object.prototype.hasOwnProperty,u_=Object.prototype.propertyIsEnumerable,or=(e,t,s)=>t in e?r_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,p_=(e,t)=>{for(var s in t||(t={}))c_.call(t,s)&&or(e,s,t[s]);if(ir)for(var s of ir(t))u_.call(t,s)&&or(e,s,t[s]);return e};const d_={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};p_({linear:qm},d_);function Vn(e,t,s,i={}){var a,l,r;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:f}=i,m=Qn(),_=s||(m==null?void 0:m.emit)||((a=m==null?void 0:m.$emit)==null?void 0:a.bind(m))||((r=(l=m==null?void 0:m.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(m==null?void 0:m.proxy));let g=p;t||(t="modelValue"),g=p||g||`update:${t.toString()}`;const k=C=>c?ni(c)?c(C):Sh(C):C,y=()=>Bm(e[t])?k(e[t]):f;if(u){const C=y(),x=le(C);return He(()=>e[t],F=>x.value=k(F)),He(x,F=>{(F!==e[t]||d)&&_(g,F)},{deep:d}),x}else return M({get(){return y()},set(C){_(g,C)}})}function KC({window:e=Xe}={}){if(!e)return le(!1);const t=le(e.document.hasFocus());return Te(e,"blur",()=>{t.value=!1}),Te(e,"focus",()=>{t.value=!0}),t}function f_(e={}){const{window:t=Xe,initialWidth:s=1/0,initialHeight:i=1/0,listenOrientation:a=!0,includeScrollbar:l=!0}=e,r=le(s),c=le(i),u=()=>{t&&(l?(r.value=t.innerWidth,c.value=t.innerHeight):(r.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};return u(),Na(u),Te("resize",u,{passive:!0}),a&&Te("orientationchange",u,{passive:!0}),{width:r,height:c}}function m_(){return _u().__VUE_DEVTOOLS_GLOBAL_HOOK__}function _u(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const h_=typeof Proxy=="function",__="devtools-plugin:setup",g_="plugin:settings:set";let is,Xo;function v_(){var e;return is!==void 0||(typeof window<"u"&&window.performance?(is=!0,Xo=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(is=!0,Xo=global.perf_hooks.performance):is=!1),is}function k_(){return v_()?Xo.now():Date.now()}class b_{constructor(t,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=s;const i={};if(t.settings)for(const r in t.settings){const c=t.settings[r];i[r]=c.defaultValue}const a=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},i);try{const r=localStorage.getItem(a),c=JSON.parse(r);Object.assign(l,c)}catch{}this.fallbacks={getSettings(){return l},setSettings(r){try{localStorage.setItem(a,JSON.stringify(r))}catch{}l=r},now(){return k_()}},s&&s.on(g_,(r,c)=>{r===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(r,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(r,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(t){this.target=t;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function y_(e,t){const s=e,i=_u(),a=m_(),l=h_&&s.enableEarlyProxy;if(a&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))a.emit(__,e,t);else{const r=l?new b_(s,a):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const tt=typeof window<"u";function w_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Io(e,t){const s={};for(const i in t){const a=t[i];s[i]=yn(a)?a.map(e):e(a)}return s}const Ws=()=>{},yn=Array.isArray;function Ee(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const I_=/\/$/,x_=e=>e.replace(I_,"");function xo(e,t,s="/"){let i,a={},l="",r="";const c=t.indexOf("#");let u=t.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(i=t.slice(0,u),l=t.slice(u+1,c>-1?c:t.length),a=e(l)),c>-1&&(i=i||t.slice(0,c),r=t.slice(c,t.length)),i=C_(i??t,s),{fullPath:i+(l&&"?")+l+r,path:i,query:a,hash:r}}function $_(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function ar(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lr(e,t,s){const i=t.matched.length-1,a=s.matched.length-1;return i>-1&&i===a&&Ot(t.matched[i],s.matched[a])&&gu(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function Ot(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function gu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!E_(e[s],t[s]))return!1;return!0}function E_(e,t){return yn(e)?rr(e,t):yn(t)?rr(t,e):e===t}function rr(e,t){return yn(t)?e.length===t.length&&e.every((s,i)=>s===t[i]):e.length===1&&e[0]===t}function C_(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const s=t.split("/"),i=e.split("/");let a=s.length-1,l,r;for(l=0;l<i.length;l++)if(r=i[l],r!==".")if(r==="..")a>1&&a--;else break;return s.slice(0,a).join("/")+"/"+i.slice(l-(l===i.length?1:0)).join("/")}var ti;(function(e){e.pop="pop",e.push="push"})(ti||(ti={}));var Vs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Vs||(Vs={}));function F_(e){if(!e)if(tt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),x_(e)}const O_=/^[^#]+#/;function S_(e,t){return e.replace(O_,"#")+t}function L_(e,t){const s=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-s.left-(t.left||0),top:i.top-s.top-(t.top||0)}}const uo=()=>({left:window.pageXOffset,top:window.pageYOffset});function M_(e){let t;if("el"in e){const s=e.el,i=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!i||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(i&&l){Ee(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ee(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof s=="string"?i?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a){Ee(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=L_(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function cr(e,t){return(history.state?history.state.position-t:-1)+e}const Jo=new Map;function T_(e,t){Jo.set(e,t)}function A_(e){const t=Jo.get(e);return Jo.delete(e),t}let z_=()=>location.protocol+"//"+location.host;function vu(e,t){const{pathname:s,search:i,hash:a}=t,l=e.indexOf("#");if(l>-1){let c=a.includes(e.slice(l))?e.slice(l).length:1,u=a.slice(c);return u[0]!=="/"&&(u="/"+u),ar(u,"")}return ar(s,e)+i+a}function P_(e,t,s,i){let a=[],l=[],r=null;const c=({state:m})=>{const _=vu(e,location),g=s.value,k=t.value;let y=0;if(m){if(s.value=_,t.value=m,r&&r===g){r=null;return}y=k?m.position-k.position:0}else i(_);a.forEach(C=>{C(s.value,g,{delta:y,type:ti.pop,direction:y?y>0?Vs.forward:Vs.back:Vs.unknown})})};function u(){r=s.value}function p(m){a.push(m);const _=()=>{const g=a.indexOf(m);g>-1&&a.splice(g,1)};return l.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:uo()}),"")}function f(){for(const m of l)m();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:p,destroy:f}}function ur(e,t,s,i=!1,a=!1){return{back:e,current:t,forward:s,replaced:i,position:window.history.length,scroll:a?uo():null}}function R_(e){const{history:t,location:s}=window,i={value:vu(e,s)},a={value:t.state};a.value||l(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const f=e.indexOf("#"),m=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+u:z_()+e+u;try{t[d?"replaceState":"pushState"](p,"",m),a.value=p}catch(_){Ee("Error with push/replace State",_),s[d?"replace":"assign"](m)}}function r(u,p){const d=Oe({},t.state,ur(a.value.back,u,a.value.forward,!0),p,{position:a.value.position});l(u,d,!0),i.value=u}function c(u,p){const d=Oe({},a.value,t.state,{forward:u,scroll:uo()});t.state||Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const f=Oe({},ur(i.value,u,null),{position:d.position+1},p);l(u,f,!1),i.value=u}return{location:i,state:a,push:c,replace:r}}function N_(e){e=F_(e);const t=R_(e),s=P_(e,t.state,t.location,t.replace);function i(l,r=!0){r||s.pauseListeners(),history.go(l)}const a=Oe({location:"",base:e,go:i,createHref:S_.bind(null,e)},t,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function D_(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&Ee(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),N_(e)}function U_(e){return typeof e=="string"||e&&typeof e=="object"}function ku(e){return typeof e=="string"||typeof e=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bu=Symbol("navigation failure");var pr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pr||(pr={}));const H_={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${B_(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function bs(e,t){return Oe(new Error(H_[e](t)),{type:e,[bu]:!0},t)}function Zn(e,t){return e instanceof Error&&bu in e&&(t==null||!!(e.type&t))}const j_=["params","query","hash"];function B_(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const s of j_)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}const dr="[^/]+?",W_={sensitive:!1,strict:!1,start:!0,end:!0},V_=/[.+*?^${}()[\]/\\]/g;function K_(e,t){const s=Oe({},W_,t),i=[];let a=s.start?"^":"";const l=[];for(const p of e){const d=p.length?[]:[90];s.strict&&!p.length&&(a+="/");for(let f=0;f<p.length;f++){const m=p[f];let _=40+(s.sensitive?.25:0);if(m.type===0)f||(a+="/"),a+=m.value.replace(V_,"\\$&"),_+=40;else if(m.type===1){const{value:g,repeatable:k,optional:y,regexp:C}=m;l.push({name:g,repeatable:k,optional:y});const x=C||dr;if(x!==dr){_+=10;try{new RegExp(`(${x})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+O.message)}}let F=k?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(F=y&&p.length<2?`(?:/${F})`:"/"+F),y&&(F+="?"),a+=F,_+=20,y&&(_+=-8),k&&(_+=-20),x===".*"&&(_+=-50)}d.push(_)}i.push(d)}if(s.strict&&s.end){const p=i.length-1;i[p][i[p].length-1]+=.7000000000000001}s.strict||(a+="/?"),s.end?a+="$":s.strict&&(a+="(?:/|$)");const r=new RegExp(a,s.sensitive?"":"i");function c(p){const d=p.match(r),f={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",g=l[m-1];f[g.name]=_&&g.repeatable?_.split("/"):_}return f}function u(p){let d="",f=!1;for(const m of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:g,repeatable:k,optional:y}=_,C=g in p?p[g]:"";if(yn(C)&&!k)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=yn(C)?C.join("/"):C;if(!x)if(y)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);d+=x}}return d||"/"}return{re:r,score:i,keys:l,parse:c,stringify:u}}function q_(e,t){let s=0;for(;s<e.length&&s<t.length;){const i=t[s]-e[s];if(i)return i;s++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function G_(e,t){let s=0;const i=e.score,a=t.score;for(;s<i.length&&s<a.length;){const l=q_(i[s],a[s]);if(l)return l;s++}if(Math.abs(a.length-i.length)===1){if(fr(i))return 1;if(fr(a))return-1}return a.length-i.length}function fr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Y_={type:0,value:""},Q_=/[a-zA-Z0-9_]/;function Z_(e){if(!e)return[[]];if(e==="/")return[[Y_]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(_){throw new Error(`ERR (${s})/"${p}": ${_}`)}let s=0,i=s;const a=[];let l;function r(){l&&a.push(l),l=[]}let c=0,u,p="",d="";function f(){p&&(s===0?l.push({type:0,value:p}):s===1||s===2||s===3?(l.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&s!==2){i=s,s=4;continue}switch(s){case 0:u==="/"?(p&&f(),r()):u===":"?(f(),s=1):m();break;case 4:m(),s=i;break;case 1:u==="("?s=2:Q_.test(u)?m():(f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:s=3:d+=u;break;case 3:f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${p}"`),f(),r(),a}function X_(e,t,s){const i=K_(Z_(e.path),s);{const l=new Set;for(const r of i.keys)l.has(r.name)&&Ee(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(r.name)}const a=Oe(i,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function J_(e,t){const s=[],i=new Map;t=_r({strict:!1,end:!0,sensitive:!1},t);function a(d){return i.get(d)}function l(d,f,m){const _=!m,g=eg(d);ig(g,f),g.aliasOf=m&&m.record;const k=_r(t,d),y=[g];if("alias"in d){const F=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of F)y.push(Oe({},g,{components:m?m.record.components:g.components,path:O,aliasOf:m?m.record:g}))}let C,x;for(const F of y){const{path:O}=F;if(f&&O[0]!=="/"){const V=f.record.path,K=V[V.length-1]==="/"?"":"/";F.path=f.record.path+(O&&K+O)}if(F.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(C=X_(F,f,k),f&&O[0]==="/"&&og(C,f),m?(m.alias.push(C),sg(m,C)):(x=x||C,x!==C&&x.alias.push(C),_&&d.name&&!hr(C)&&r(d.name)),g.children){const V=g.children;for(let K=0;K<V.length;K++)l(V[K],C,m&&m.children[K])}m=m||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&u(C)}return x?()=>{r(x)}:Ws}function r(d){if(ku(d)){const f=i.get(d);f&&(i.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(r),f.alias.forEach(r))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return s}function u(d){let f=0;for(;f<s.length&&G_(d,s[f])>=0&&(d.record.path!==s[f].record.path||!yu(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!hr(d)&&i.set(d.record.name,d)}function p(d,f){let m,_={},g,k;if("name"in d&&d.name){if(m=i.get(d.name),!m)throw bs(1,{location:d});{const x=Object.keys(d.params||{}).filter(F=>!m.keys.find(O=>O.name===F));x.length&&Ee(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}k=m.record.name,_=Oe(mr(f.params,m.keys.filter(x=>!x.optional).map(x=>x.name)),d.params&&mr(d.params,m.keys.map(x=>x.name))),g=m.stringify(_)}else if("path"in d)g=d.path,g.startsWith("/")||Ee(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),m=s.find(x=>x.re.test(g)),m&&(_=m.parse(g),k=m.record.name);else{if(m=f.name?i.get(f.name):s.find(x=>x.re.test(f.path)),!m)throw bs(1,{location:d,currentLocation:f});k=m.record.name,_=Oe({},f.params,d.params),g=m.stringify(_)}const y=[];let C=m;for(;C;)y.unshift(C.record),C=C.parent;return{name:k,path:g,params:_,matched:y,meta:tg(y)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:a}}function mr(e,t){const s={};for(const i of t)i in e&&(s[i]=e[i]);return s}function eg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ng(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ng(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const i in e.components)t[i]=typeof s=="boolean"?s:s[i];return t}function hr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function tg(e){return e.reduce((t,s)=>Oe(t,s.meta),{})}function _r(e,t){const s={};for(const i in e)s[i]=i in t?t[i]:e[i];return s}function ea(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function sg(e,t){for(const s of e.keys)if(!s.optional&&!t.keys.find(ea.bind(null,s)))return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of t.keys)if(!s.optional&&!e.keys.find(ea.bind(null,s)))return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function ig(e,t){t&&t.record.name&&!e.name&&!e.path&&Ee(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function og(e,t){for(const s of t.keys)if(!e.keys.find(ea.bind(null,s)))return Ee(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${t.record.path}".`)}function yu(e,t){return t.children.some(s=>s===e||yu(e,s))}const wu=/#/g,ag=/&/g,lg=/\//g,rg=/=/g,cg=/\?/g,Iu=/\+/g,ug=/%5B/g,pg=/%5D/g,xu=/%5E/g,dg=/%60/g,$u=/%7B/g,fg=/%7C/g,Eu=/%7D/g,mg=/%20/g;function Da(e){return encodeURI(""+e).replace(fg,"|").replace(ug,"[").replace(pg,"]")}function hg(e){return Da(e).replace($u,"{").replace(Eu,"}").replace(xu,"^")}function na(e){return Da(e).replace(Iu,"%2B").replace(mg,"+").replace(wu,"%23").replace(ag,"%26").replace(dg,"`").replace($u,"{").replace(Eu,"}").replace(xu,"^")}function _g(e){return na(e).replace(rg,"%3D")}function gg(e){return Da(e).replace(wu,"%23").replace(cg,"%3F")}function vg(e){return e==null?"":gg(e).replace(lg,"%2F")}function si(e){try{return decodeURIComponent(""+e)}catch{Ee(`Error decoding "${e}". Using original value`)}return""+e}function kg(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<i.length;++a){const l=i[a].replace(Iu," "),r=l.indexOf("="),c=si(r<0?l:l.slice(0,r)),u=r<0?null:si(l.slice(r+1));if(c in t){let p=t[c];yn(p)||(p=t[c]=[p]),p.push(u)}else t[c]=u}return t}function gr(e){let t="";for(let s in e){const i=e[s];if(s=_g(s),i==null){i!==void 0&&(t+=(t.length?"&":"")+s);continue}(yn(i)?i.map(l=>l&&na(l)):[i&&na(i)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+s,l!=null&&(t+="="+l))})}return t}function bg(e){const t={};for(const s in e){const i=e[s];i!==void 0&&(t[s]=yn(i)?i.map(a=>a==null?null:""+a):i==null?i:""+i)}return t}const yg=Symbol("router view location matched"),vr=Symbol("router view depth"),Ua=Symbol("router"),Cu=Symbol("route location"),ta=Symbol("router view location");function Os(){let e=[];function t(i){return e.push(i),()=>{const a=e.indexOf(i);a>-1&&e.splice(a,1)}}function s(){e=[]}return{add:t,list:()=>e,reset:s}}function gt(e,t,s,i,a){const l=i&&(i.enterCallbacks[a]=i.enterCallbacks[a]||[]);return()=>new Promise((r,c)=>{const u=f=>{f===!1?c(bs(4,{from:s,to:t})):f instanceof Error?c(f):U_(f)?c(bs(2,{from:t,to:f})):(l&&i.enterCallbacks[a]===l&&typeof f=="function"&&l.push(f),r())},p=e.call(i&&i.instances[a],t,s,wg(u,t,s));let d=Promise.resolve(p);if(e.length<3&&(d=d.then(u)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(m=>u._called?m:(Ee(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){Ee(f),c(new Error("Invalid navigation guard"));return}}d.catch(f=>c(f))})}function wg(e,t,s){let i=0;return function(){i++===1&&Ee(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,i===1&&e.apply(null,arguments)}}function $o(e,t,s,i){const a=[];for(const l of e){!l.components&&!l.children.length&&Ee(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const r in l.components){let c=l.components[r];{if(!c||typeof c!="object"&&typeof c!="function")throw Ee(`Component "${r}" in record with path "${l.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Ee(`Component "${r}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Ee(`Component "${r}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[r]))if(Ig(c)){const p=(c.__vccOpts||c)[t];p&&a.push(gt(p,s,i,l,r))}else{let u=c();"catch"in u||(Ee(`Component "${r}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),a.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=w_(p)?p.default:p;l.components[r]=d;const m=(d.__vccOpts||d)[t];return m&&gt(m,s,i,l,r)()}))}}}return a}function Ig(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function kr(e){const t=S(Ua),s=S(Cu),i=M(()=>t.resolve(w(e.to))),a=M(()=>{const{matched:u}=i.value,{length:p}=u,d=u[p-1],f=s.matched;if(!d||!f.length)return-1;const m=f.findIndex(Ot.bind(null,d));if(m>-1)return m;const _=br(u[p-2]);return p>1&&br(d)===_&&f[f.length-1].path!==_?f.findIndex(Ot.bind(null,u[p-2])):m}),l=M(()=>a.value>-1&&Cg(s.params,i.value.params)),r=M(()=>a.value>-1&&a.value===s.matched.length-1&&gu(s.params,i.value.params));function c(u={}){return Eg(u)?t[w(e.replace)?"replace":"push"](w(e.to)).catch(Ws):Promise.resolve()}if(tt){const u=Qn();if(u){const p={route:i.value,isActive:l.value,isExactActive:r.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),Is(()=>{p.route=i.value,p.isActive=l.value,p.isExactActive=r.value},{flush:"post"})}}return{route:i,href:M(()=>i.value.href),isActive:l,isExactActive:r,navigate:c}}const xg=je({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kr,setup(e,{slots:t}){const s=nn(kr(e)),{options:i}=S(Ua),a=M(()=>({[yr(e.activeClass,i.linkActiveClass,"router-link-active")]:s.isActive,[yr(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=t.default&&t.default(s);return e.custom?l:mi("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},l)}}}),$g=xg;function Eg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Cg(e,t){for(const s in t){const i=t[s],a=e[s];if(typeof i=="string"){if(i!==a)return!1}else if(!yn(a)||a.length!==i.length||i.some((l,r)=>l!==a[r]))return!1}return!0}function br(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const yr=(e,t,s)=>e??t??s,Fg=je({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){Sg();const i=S(ta),a=M(()=>e.route||i.value),l=S(vr,0),r=M(()=>{let p=w(l);const{matched:d}=a.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),c=M(()=>a.value.matched[r.value]);kn(vr,M(()=>r.value+1)),kn(yg,c),kn(ta,a);const u=le();return He(()=>[u.value,c.value,e.name],([p,d,f],[m,_,g])=>{d&&(d.instances[f]=p,_&&_!==d&&p&&p===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),p&&d&&(!_||!Ot(d,_)||!m)&&(d.enterCallbacks[f]||[]).forEach(k=>k(p))},{flush:"post"}),()=>{const p=a.value,d=e.name,f=c.value,m=f&&f.components[d];if(!m)return wr(s.default,{Component:m,route:p});const _=f.props[d],g=_?_===!0?p.params:typeof _=="function"?_(p):_:null,y=mi(m,Oe({},g,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[d]=null)},ref:u}));if(tt&&y.ref){const C={depth:r.value,name:f.name,path:f.path,meta:f.meta};(yn(y.ref)?y.ref.map(F=>F.i):[y.ref.i]).forEach(F=>{F.__vrv_devtools=C})}return wr(s.default,{Component:y,route:p})||y}}});function wr(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const Og=Fg;function Sg(){const e=Qn(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const s=t==="KeepAlive"?"keep-alive":"transition";Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Ss(e,t){const s=Oe({},e,{matched:e.matched.map(i=>Dg(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:s}}}function Ii(e){return{_custom:{display:e}}}let Lg=0;function Mg(e,t,s){if(t.__hasDevtools)return;t.__hasDevtools=!0;const i=Lg++;y_({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ss(t.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const m=f.__vrv_devtools;d.tags.push({label:(m.name?`${m.name.toString()}: `:"")+m.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Fu})}yn(f.__vrl_devtools)&&(f.__devtoolsApi=a,f.__vrl_devtools.forEach(m=>{let _=Lu,g="";m.isExactActive?(_=Su,g="This is exactly active"):m.isActive&&(_=Ou,g="This link is active"),d.tags.push({label:m.route.path,textColor:0,tooltip:g,backgroundColor:_})}))}),He(t.currentRoute,()=>{u(),a.notifyComponentUpdate(),a.sendInspectorTree(c),a.sendInspectorState(c)});const l="router:navigations:"+i;a.addTimelineLayer({id:l,label:`Router${i?" "+i:""} Navigations`,color:4237508}),t.onError((d,f)=>{a.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:a.now(),data:{error:d},groupId:f.meta.__navigationId}})});let r=0;t.beforeEach((d,f)=>{const m={guard:Ii("beforeEach"),from:Ss(f,"Current Location during this navigation"),to:Ss(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:r++}),a.addTimelineEvent({layerId:l,event:{time:a.now(),title:"Start of navigation",subtitle:d.fullPath,data:m,groupId:d.meta.__navigationId}})}),t.afterEach((d,f,m)=>{const _={guard:Ii("afterEach")};m?(_.failure={_custom:{type:Error,readOnly:!0,display:m?m.message:"",tooltip:"Navigation Failure",value:m}},_.status=Ii("❌")):_.status=Ii("✅"),_.from=Ss(f,"Current Location during this navigation"),_.to=Ss(d,"Target location"),a.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:a.now(),data:_,logType:m?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+i;a.addInspector({id:c,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let f=s.getRoutes().filter(m=>!m.parent);f.forEach(Au),d.filter&&(f=f.filter(m=>sa(m,d.filter.toLowerCase()))),f.forEach(m=>Tu(m,t.currentRoute.value)),d.rootNodes=f.map(Mu)}let p;a.on.getInspectorTree(d=>{p=d,d.app===e&&d.inspectorId===c&&u()}),a.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===c){const m=s.getRoutes().find(_=>_.record.__vd_id===d.nodeId);m&&(d.state={options:Ag(m)})}}),a.sendInspectorTree(c),a.sendInspectorState(c)})}function Tg(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function Ag(e){const{record:t}=e,s=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&s.push({editable:!1,key:"name",value:t.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(i=>`${i.name}${Tg(i)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&s.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(i=>i.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const Fu=15485081,Ou=2450411,Su=8702998,zg=2282478,Lu=16486972,Pg=6710886;function Mu(e){const t=[],{record:s}=e;s.name!=null&&t.push({label:String(s.name),textColor:0,backgroundColor:zg}),s.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Lu}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Fu}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Su}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Ou}),s.redirect&&t.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:Pg});let i=s.__vd_id;return i==null&&(i=String(Rg++),s.__vd_id=i),{id:i,label:s.path,tags:t,children:e.children.map(Mu)}}let Rg=0;const Ng=/^\/(.*)\/([a-z]*)$/;function Tu(e,t){const s=t.matched.length&&Ot(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=t.matched.some(i=>Ot(i,e.record))),e.children.forEach(i=>Tu(i,t))}function Au(e){e.__vd_match=!1,e.children.forEach(Au)}function sa(e,t){const s=String(e.re).match(Ng);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(t))return e.children.forEach(r=>sa(r,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const a=e.record.path.toLowerCase(),l=si(a);return!t.startsWith("/")&&(l.includes(t)||a.includes(t))||l.startsWith(t)||a.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(r=>sa(r,t))}function Dg(e,t){const s={};for(const i in e)t.includes(i)||(s[i]=e[i]);return s}function Ug(e){const t=J_(e.routes,e),s=e.parseQuery||kg,i=e.stringifyQuery||gr,a=e.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Os(),r=Os(),c=Os(),u=Gn(ft);let p=ft;tt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Io.bind(null,E=>""+E),f=Io.bind(null,vg),m=Io.bind(null,si);function _(E,ee){let q,te;return ku(E)?(q=t.getRecordMatcher(E),te=ee):te=E,t.addRoute(te,q)}function g(E){const ee=t.getRecordMatcher(E);ee?t.removeRoute(ee):Ee(`Cannot remove non-existent route "${String(E)}"`)}function k(){return t.getRoutes().map(E=>E.record)}function y(E){return!!t.getRecordMatcher(E)}function C(E,ee){if(ee=Oe({},ee||u.value),typeof E=="string"){const de=xo(s,E,ee.path),h=t.resolve({path:de.path},ee),v=a.createHref(de.fullPath);return v.startsWith("//")?Ee(`Location "${E}" resolved to "${v}". A resolved location cannot start with multiple slashes.`):h.matched.length||Ee(`No match found for location with path "${E}"`),Oe(de,h,{params:m(h.params),hash:si(de.hash),redirectedFrom:void 0,href:v})}let q;if("path"in E)"params"in E&&!("name"in E)&&Object.keys(E.params).length&&Ee(`Path "${E.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),q=Oe({},E,{path:xo(s,E.path,ee.path).path});else{const de=Oe({},E.params);for(const h in de)de[h]==null&&delete de[h];q=Oe({},E,{params:f(E.params)}),ee.params=f(ee.params)}const te=t.resolve(q,ee),be=E.hash||"";be&&!be.startsWith("#")&&Ee(`A \`hash\` should always start with the character "#". Replace "${be}" with "#${be}".`),te.params=d(m(te.params));const $e=$_(i,Oe({},E,{hash:hg(be),path:te.path})),_e=a.createHref($e);return _e.startsWith("//")?Ee(`Location "${E}" resolved to "${_e}". A resolved location cannot start with multiple slashes.`):te.matched.length||Ee(`No match found for location with path "${"path"in E?E.path:E}"`),Oe({fullPath:$e,hash:be,query:i===gr?bg(E.query):E.query||{}},te,{redirectedFrom:void 0,href:_e})}function x(E){return typeof E=="string"?xo(s,E,u.value.path):Oe({},E)}function F(E,ee){if(p!==E)return bs(8,{from:ee,to:E})}function O(E){return B(E)}function V(E){return O(Oe(x(E),{replace:!0}))}function K(E){const ee=E.matched[E.matched.length-1];if(ee&&ee.redirect){const{redirect:q}=ee;let te=typeof q=="function"?q(E):q;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=x(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw Ee(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${E.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Oe({query:E.query,hash:E.hash,params:"path"in te?{}:E.params},te)}}function B(E,ee){const q=p=C(E),te=u.value,be=E.state,$e=E.force,_e=E.replace===!0,de=K(q);if(de)return B(Oe(x(de),{state:typeof de=="object"?Oe({},be,de.state):be,force:$e,replace:_e}),ee||q);const h=q;h.redirectedFrom=ee;let v;return!$e&&lr(i,te,q)&&(v=bs(16,{to:h,from:te}),Ae(te,te,!0,!1)),(v?Promise.resolve(v):se(h,te)).catch(I=>Zn(I)?Zn(I,2)?I:ke(I):J(I,h,te)).then(I=>{if(I){if(Zn(I,2))return lr(i,C(I.to),h)&&ee&&(ee._count=ee._count?ee._count+1:1)>10?(Ee(`Detected an infinite redirection in a navigation guard when going from "${te.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(Oe({replace:_e},x(I.to),{state:typeof I.to=="object"?Oe({},be,I.to.state):be,force:$e}),ee||h)}else I=fe(h,te,!0,_e,be);return ae(h,te,I),I})}function H(E,ee){const q=F(E,ee);return q?Promise.reject(q):Promise.resolve()}function se(E,ee){let q;const[te,be,$e]=Hg(E,ee);q=$o(te.reverse(),"beforeRouteLeave",E,ee);for(const de of te)de.leaveGuards.forEach(h=>{q.push(gt(h,E,ee))});const _e=H.bind(null,E,ee);return q.push(_e),os(q).then(()=>{q=[];for(const de of l.list())q.push(gt(de,E,ee));return q.push(_e),os(q)}).then(()=>{q=$o(be,"beforeRouteUpdate",E,ee);for(const de of be)de.updateGuards.forEach(h=>{q.push(gt(h,E,ee))});return q.push(_e),os(q)}).then(()=>{q=[];for(const de of E.matched)if(de.beforeEnter&&!ee.matched.includes(de))if(yn(de.beforeEnter))for(const h of de.beforeEnter)q.push(gt(h,E,ee));else q.push(gt(de.beforeEnter,E,ee));return q.push(_e),os(q)}).then(()=>(E.matched.forEach(de=>de.enterCallbacks={}),q=$o($e,"beforeRouteEnter",E,ee),q.push(_e),os(q))).then(()=>{q=[];for(const de of r.list())q.push(gt(de,E,ee));return q.push(_e),os(q)}).catch(de=>Zn(de,8)?de:Promise.reject(de))}function ae(E,ee,q){for(const te of c.list())te(E,ee,q)}function fe(E,ee,q,te,be){const $e=F(E,ee);if($e)return $e;const _e=ee===ft,de=tt?history.state:{};q&&(te||_e?a.replace(E.fullPath,Oe({scroll:_e&&de&&de.scroll},be)):a.push(E.fullPath,be)),u.value=E,Ae(E,ee,q,_e),ke()}let Z;function Ie(){Z||(Z=a.listen((E,ee,q)=>{if(!ut.listening)return;const te=C(E),be=K(te);if(be){B(Oe(be,{replace:!0}),te).catch(Ws);return}p=te;const $e=u.value;tt&&T_(cr($e.fullPath,q.delta),uo()),se(te,$e).catch(_e=>Zn(_e,12)?_e:Zn(_e,2)?(B(_e.to,te).then(de=>{Zn(de,20)&&!q.delta&&q.type===ti.pop&&a.go(-1,!1)}).catch(Ws),Promise.reject()):(q.delta&&a.go(-q.delta,!1),J(_e,te,$e))).then(_e=>{_e=_e||fe(te,$e,!1),_e&&(q.delta&&!Zn(_e,8)?a.go(-q.delta,!1):q.type===ti.pop&&Zn(_e,20)&&a.go(-1,!1)),ae(te,$e,_e)}).catch(Ws)}))}let Re=Os(),Fe=Os(),Ne;function J(E,ee,q){ke(E);const te=Fe.list();return te.length?te.forEach(be=>be(E,ee,q)):(Ee("uncaught error during route navigation:"),console.error(E)),Promise.reject(E)}function ue(){return Ne&&u.value!==ft?Promise.resolve():new Promise((E,ee)=>{Re.add([E,ee])})}function ke(E){return Ne||(Ne=!E,Ie(),Re.list().forEach(([ee,q])=>E?q(E):ee()),Re.reset()),E}function Ae(E,ee,q,te){const{scrollBehavior:be}=e;if(!tt||!be)return Promise.resolve();const $e=!q&&A_(cr(E.fullPath,0))||(te||!q)&&history.state&&history.state.scroll||null;return zn().then(()=>be(E,ee,$e)).then(_e=>_e&&M_(_e)).catch(_e=>J(_e,E,ee))}const _n=E=>a.go(E);let tn;const fn=new Set,ut={currentRoute:u,listening:!0,addRoute:_,removeRoute:g,hasRoute:y,getRoutes:k,resolve:C,options:e,push:O,replace:V,go:_n,back:()=>_n(-1),forward:()=>_n(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:Fe.add,isReady:ue,install(E){const ee=this;E.component("RouterLink",$g),E.component("RouterView",Og),E.config.globalProperties.$router=ee,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>w(u)}),tt&&!tn&&u.value===ft&&(tn=!0,O(a.location).catch(be=>{Ee("Unexpected error when starting the router:",be)}));const q={};for(const be in ft)q[be]=M(()=>u.value[be]);E.provide(Ua,ee),E.provide(Cu,nn(q)),E.provide(ta,u);const te=E.unmount;fn.add(E),E.unmount=function(){fn.delete(E),fn.size<1&&(p=ft,Z&&Z(),Z=null,u.value=ft,tn=!1,Ne=!1),te()},tt&&Mg(E,ee,t)}};return ut}function os(e){return e.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function Hg(e,t){const s=[],i=[],a=[],l=Math.max(t.matched.length,e.matched.length);for(let r=0;r<l;r++){const c=t.matched[r];c&&(e.matched.find(p=>Ot(p,c))?i.push(c):s.push(c));const u=e.matched[r];u&&(t.matched.find(p=>Ot(p,u))||a.push(u))}return[s,i,a]}const Eo=le(!1),Ks=le(!1),ds=le(!1),jg=le(!0),ia=Fh({xs:460,...Ih}),Kt=f_(),zu=n_(),Bg=M(()=>Kt.height.value-Kt.width.value/It>180),Pu=Jh(Rn?document.body:null),gs=wh(),Wg=M(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=gs.value)==null?void 0:e.tagName)||"")||((t=gs.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Vg=M(()=>{var e;return["BUTTON","A"].includes(((e=gs.value)==null?void 0:e.tagName)||"")});Dn("slidev-camera","default");Dn("slidev-mic","default");const Si=Dn("slidev-scale",0),rn=Dn("slidev-show-overview",!1),Co=Dn("slidev-presenter-cursor",!0),Ir=Dn("slidev-show-editor",!1);Dn("slidev-editor-width",Rn?window.innerWidth*.4:100);const Ru=du(rn);function xr(e,t,s,i=a=>a){return e*i(.5-t*(.5-s))}function Kg(e){return[-e[0],-e[1]]}function Ln(e,t){return[e[0]+t[0],e[1]+t[1]]}function xn(e,t){return[e[0]-t[0],e[1]-t[1]]}function Sn(e,t){return[e[0]*t,e[1]*t]}function qg(e,t){return[e[0]/t,e[1]/t]}function Ls(e){return[e[1],-e[0]]}function $r(e,t){return e[0]*t[0]+e[1]*t[1]}function Gg(e,t){return e[0]===t[0]&&e[1]===t[1]}function Yg(e){return Math.hypot(e[0],e[1])}function Qg(e){return e[0]*e[0]+e[1]*e[1]}function Er(e,t){return Qg(xn(e,t))}function Nu(e){return qg(e,Yg(e))}function Zg(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Ms(e,t,s){let i=Math.sin(s),a=Math.cos(s),l=e[0]-t[0],r=e[1]-t[1],c=l*a-r*i,u=l*i+r*a;return[c+t[0],u+t[1]]}function oa(e,t,s){return Ln(e,Sn(xn(t,e),s))}function Cr(e,t,s){return Ln(e,Sn(t,s))}var{min:as,PI:Xg}=Math,Fr=.275,Ts=Xg+1e-4;function Jg(e,t={}){let{size:s=16,smoothing:i=.5,thinning:a=.5,simulatePressure:l=!0,easing:r=J=>J,start:c={},end:u={},last:p=!1}=t,{cap:d=!0,easing:f=J=>J*(2-J)}=c,{cap:m=!0,easing:_=J=>--J*J*J+1}=u;if(e.length===0||s<=0)return[];let g=e[e.length-1].runningLength,k=c.taper===!1?0:c.taper===!0?Math.max(s,g):c.taper,y=u.taper===!1?0:u.taper===!0?Math.max(s,g):u.taper,C=Math.pow(s*i,2),x=[],F=[],O=e.slice(0,10).reduce((J,ue)=>{let ke=ue.pressure;if(l){let Ae=as(1,ue.distance/s),_n=as(1,1-Ae);ke=as(1,J+(_n-J)*(Ae*Fr))}return(J+ke)/2},e[0].pressure),V=xr(s,a,e[e.length-1].pressure,r),K,B=e[0].vector,H=e[0].point,se=H,ae=H,fe=se,Z=!1;for(let J=0;J<e.length;J++){let{pressure:ue}=e[J],{point:ke,vector:Ae,distance:_n,runningLength:tn}=e[J];if(J<e.length-1&&g-tn<3)continue;if(a){if(l){let $e=as(1,_n/s),_e=as(1,1-$e);ue=as(1,O+(_e-O)*($e*Fr))}V=xr(s,a,ue,r)}else V=s/2;K===void 0&&(K=V);let fn=tn<k?f(tn/k):1,ut=g-tn<y?_((g-tn)/y):1;V=Math.max(.01,V*Math.min(fn,ut));let E=(J<e.length-1?e[J+1]:e[J]).vector,ee=J<e.length-1?$r(Ae,E):1,q=$r(Ae,B)<0&&!Z,te=ee!==null&&ee<0;if(q||te){let $e=Sn(Ls(B),V);for(let _e=1/13,de=0;de<=1;de+=_e)ae=Ms(xn(ke,$e),ke,Ts*de),x.push(ae),fe=Ms(Ln(ke,$e),ke,Ts*-de),F.push(fe);H=ae,se=fe,te&&(Z=!0);continue}if(Z=!1,J===e.length-1){let $e=Sn(Ls(Ae),V);x.push(xn(ke,$e)),F.push(Ln(ke,$e));continue}let be=Sn(Ls(oa(E,Ae,ee)),V);ae=xn(ke,be),(J<=1||Er(H,ae)>C)&&(x.push(ae),H=ae),fe=Ln(ke,be),(J<=1||Er(se,fe)>C)&&(F.push(fe),se=fe),O=ue,B=Ae}let Ie=e[0].point.slice(0,2),Re=e.length>1?e[e.length-1].point.slice(0,2):Ln(e[0].point,[1,1]),Fe=[],Ne=[];if(e.length===1){if(!(k||y)||p){let J=Cr(Ie,Nu(Ls(xn(Ie,Re))),-(K||V)),ue=[];for(let ke=1/13,Ae=ke;Ae<=1;Ae+=ke)ue.push(Ms(J,Ie,Ts*2*Ae));return ue}}else{if(!(k||y&&e.length===1))if(d)for(let ue=1/13,ke=ue;ke<=1;ke+=ue){let Ae=Ms(F[0],Ie,Ts*ke);Fe.push(Ae)}else{let ue=xn(x[0],F[0]),ke=Sn(ue,.5),Ae=Sn(ue,.51);Fe.push(xn(Ie,ke),xn(Ie,Ae),Ln(Ie,Ae),Ln(Ie,ke))}let J=Ls(Kg(e[e.length-1].vector));if(y||k&&e.length===1)Ne.push(Re);else if(m){let ue=Cr(Re,J,V);for(let ke=1/29,Ae=ke;Ae<1;Ae+=ke)Ne.push(Ms(ue,Re,Ts*3*Ae))}else Ne.push(Ln(Re,Sn(J,V)),Ln(Re,Sn(J,V*.99)),xn(Re,Sn(J,V*.99)),xn(Re,Sn(J,V)))}return x.concat(Ne,F.reverse(),Fe)}function e0(e,t={}){var s;let{streamline:i=.5,size:a=16,last:l=!1}=t;if(e.length===0)return[];let r=.15+(1-i)*.85,c=Array.isArray(e[0])?e:e.map(({x:_,y:g,pressure:k=.5})=>[_,g,k]);if(c.length===2){let _=c[1];c=c.slice(0,-1);for(let g=1;g<5;g++)c.push(oa(c[0],_,g/4))}c.length===1&&(c=[...c,[...Ln(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=u[0],m=c.length-1;for(let _=1;_<c.length;_++){let g=l&&_===m?c[_].slice(0,2):oa(f.point,c[_],r);if(Gg(f.point,g))continue;let k=Zg(g,f.point);if(d+=k,_<m&&!p){if(d<a)continue;p=!0}f={point:g,pressure:c[_][2]>=0?c[_][2]:.5,vector:Nu(xn(f.point,g)),distance:k,runningLength:d},u.push(f)}return u[0].vector=((s=u[1])==null?void 0:s.vector)||[0,0],u}function n0(e,t={}){return Jg(e0(e,t),t)}var t0=()=>({events:{},emit(e,...t){let s=this.events[e]||[];for(let i=0,a=s.length;i<a;i++)s[i](...t)},on(e,t){var s;return(s=this.events[e])!=null&&s.push(t)||(this.events[e]=[t]),()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(a=>t!==a)}}});function Vi(e,t){return e-t}function s0(e){return e<0?-1:1}function Ki(e){return[Math.abs(e),s0(e)]}function Du(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var i0=2,st=i0,xs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const s=this.drauu.el,i=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*i,y:(e.pageY-a.top)*i,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const l=a.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*i,y:l.y*i,pressure:e.pressure}}}createElement(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg",e),i=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",i.fill??"transparent"),s.setAttribute("stroke",i.color),s.setAttribute("stroke-width",i.size.toString()),s.setAttribute("stroke-linecap","round"),i.dasharray&&s.setAttribute("stroke-dasharray",i.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(st))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},o0=class extends xs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=n0(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((i,[a,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return i.push(a,l,(a+u)/2,(l+p)/2),i},["M",...t[0],"Q"]);return s.push("Z"),s.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}},a0=class extends xs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ki(e.x-this.start.x),[i,a]=Ki(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,i);t=l,i=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",i);else{const[l,r]=[this.start.x,this.start.x+t*s].sort(Vi),[c,u]=[this.start.y,this.start.y+i*a].sort(Vi);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Uu(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),i=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",t),i.setAttribute("id",e),i.setAttribute("viewBox","0 -5 10 10"),i.setAttribute("refX","5"),i.setAttribute("refY","0"),i.setAttribute("markerWidth","4"),i.setAttribute("markerHeight","4"),i.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),i.appendChild(a),s.appendChild(i),s}var l0=class extends xs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Du(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Uu(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:s}=e;if(this.shiftPressed){const i=e.x-this.start.x,a=e.y-this.start.y;if(a!==0){let l=i/a;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+a*l,s=this.start.y+a):(t=this.start.x+i,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},r0=class extends xs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Ki(e.x-this.start.x),[i,a]=Ki(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,i);t=l,i=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-i),this.attr("width",t*2),this.attr("height",i*2);else{const[l,r]=[this.start.x,this.start.x+t*s].sort(Vi),[c,u]=[this.start.y,this.start.y+i*a].sort(Vi);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function c0(e,t){const s=e.x-t.x,i=e.y-t.y;return s*s+i*i}function u0(e,t,s){let i=t.x,a=t.y,l=s.x-i,r=s.y-a;if(l!==0||r!==0){const c=((e.x-i)*l+(e.y-a)*r)/(l*l+r*r);c>1?(i=s.x,a=s.y):c>0&&(i+=l*c,a+=r*c)}return l=e.x-i,r=e.y-a,l*l+r*r}function p0(e,t){let s=e[0];const i=[s];let a;for(let l=1,r=e.length;l<r;l++)a=e[l],c0(a,s)>t&&(i.push(a),s=a);return s!==a&&a&&i.push(a),i}function aa(e,t,s,i,a){let l=i,r=0;for(let c=t+1;c<s;c++){const u=u0(e[c],e[t],e[s]);u>l&&(r=c,l=u)}l>i&&(r-t>1&&aa(e,t,r,i,a),a.push(e[r]),s-r>1&&aa(e,r,s,i,a))}function d0(e,t){const s=e.length-1,i=[e[0]];return aa(e,0,s,t,i),i.push(e[s]),i}function Or(e,t,s=!1){if(e.length<=2)return e;const i=t!==void 0?t*t:1;return e=s?e:p0(e,i),e=d0(e,i),e}var f0=class extends xs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Du();const t=Uu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Or(this.points,1,!0),this.count=0),this.attr("d",Lr(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Lr(Or(this.points,1,!0))),!e.getTotalLength()))}};function m0(e,t){const s=t.x-e.x,i=t.y-e.y;return{length:Math.sqrt(s**2+i**2),angle:Math.atan2(i,s)}}function Sr(e,t,s,i){const a=t||e,l=s||e,r=.2,c=m0(a,l),u=c.angle+(i?Math.PI:0),p=c.length*r,d=e.x+Math.cos(u)*p,f=e.y+Math.sin(u)*p;return{x:d,y:f}}function h0(e,t,s){const i=Sr(s[t-1],s[t-2],e),a=Sr(e,s[t-1],s[t+1],!0);return`C ${i.x.toFixed(st)},${i.y.toFixed(st)} ${a.x.toFixed(st)},${a.y.toFixed(st)} ${e.x.toFixed(st)},${e.y.toFixed(st)}`}function Lr(e){return e.reduce((t,s,i,a)=>i===0?`M ${s.x.toFixed(st)},${s.y.toFixed(st)}`:`${t} ${h0(s,i,a)}`,"")}var _0=class extends xs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(s,i)=>{if(s&&s.length)for(let a=0;a<s.length;a++){const l=s[a];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:i||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],i={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,i)&&(s.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,t){const s=e.x1,i=e.x2,a=t.x1,l=t.x2,r=e.y1,c=e.y2,u=t.y1,p=t.y2,d=(s-i)*(u-p)-(r-c)*(a-l),f=(s*c-r*i)*(a-l)-(s-i)*(a*p-u*l),m=(s*c-r*i)*(u-p)-(r-c)*(a*p-u*l),_=(g,k,y)=>g>=k&&g<=y?!0:g>=y&&g<=k;if(d===0)return!1;{const g={x:f/d,y:m/d};return _(g.x,s,i)&&_(g.y,r,c)&&_(g.x,a,l)&&_(g.y,u,p)}}};function g0(e){return{draw:new f0(e),stylus:new o0(e),line:new l0(e),rectangle:new r0(e),ellipse:new a0(e),eraseLine:new _0(e)}}var v0=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=t0(),this._models=g0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,i=this.eventStart.bind(this),a=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",i,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",i),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function k0(e){return new v0(e)}const la=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Kn=Dn("slidev-drawing-enabled",!1),qC=Dn("slidev-drawing-pinned",!1),b0=le(!1),y0=le(!1),w0=le(!1),ii=le(!1),Dt=Qm(Dn("slidev-drawing-brush",{color:la[0],size:4,mode:"stylus"})),Mr=le("stylus"),Hu=M(()=>Me.drawings.syncAll||Tn.value);let oi=!1;const As=M({get(){return Mr.value},set(e){Mr.value=e,e==="arrow"?(Dt.mode="line",Dt.arrowEnd=!0):(Dt.mode=e,Dt.arrowEnd=!1)}}),I0=nn({brush:Dt,acceptsInputTypes:M(()=>Kn.value&&(!Me.drawings.presenterOnly||Tn.value)?void 0:["pen"]),coordinateTransform:!1}),dn=ka(k0(I0));function x0(){dn.clear(),Hu.value&&ru(Qe.value,"")}function Ha(){var e;y0.value=dn.canRedo(),b0.value=dn.canUndo(),w0.value=!!((e=dn.el)!=null&&e.children.length)}function $0(e){oi=!0;const t=Bi[e||Qe.value];t!=null?dn.load(t):dn.clear(),Ha(),oi=!1}dn.on("changed",()=>{if(Ha(),!oi){const e=dn.dump(),t=Qe.value;(Bi[t]||"")!==e&&Hu.value&&ru(t,dn.dump())}});Um(e=>{oi=!0,e[Qe.value]!=null&&dn.load(e[Qe.value]||""),oi=!1,Ha()});zn(()=>{He(Qe,()=>{dn.mounted&&$0()},{immediate:!0})});dn.on("start",()=>ii.value=!0);dn.on("end",()=>ii.value=!1);window.addEventListener("keydown",e=>{if(!Kn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?dn.redo():dn.undo():e.code==="Escape"?Kn.value=!1:e.code==="KeyL"&&t?As.value="line":e.code==="KeyA"&&t?As.value="arrow":e.code==="KeyS"&&t?As.value="stylus":e.code==="KeyR"&&t?As.value="rectangle":e.code==="KeyE"&&t?As.value="ellipse":e.code==="KeyC"&&t?x0():e.code.startsWith("Digit")&&t&&+e.code[5]<=la.length?Dt.color=la[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Ge(...e){return M(()=>e.every(t=>pn(t)))}function gn(e){return M(()=>!pn(e))}const Tr=Dh(),Fo=Dn("slidev-color-schema","auto"),ra=M(()=>Me.colorSchema!=="auto"),ja=M({get(){return ra.value?Me.colorSchema==="dark":Fo.value==="auto"?Tr.value:Fo.value==="dark"},set(e){ra.value||(Fo.value=e===Tr.value?"auto":e?"dark":"light")}}),ju=du(ja);Rn&&He(ja,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Li=le(1),Mi=M(()=>qe.length-1),bn=le(0),Ba=le(0);function E0(){bn.value>Li.value&&(bn.value-=1)}function C0(){bn.value<Mi.value&&(bn.value+=1)}function F0(){if(bn.value>Li.value){let e=bn.value-Ba.value;e<Li.value&&(e=Li.value),bn.value=e}}function O0(){if(bn.value<Mi.value){let e=bn.value+Ba.value;e>Mi.value&&(e=Mi.value),bn.value=e}}function S0(){const{escape:e,space:t,shift:s,left:i,right:a,up:l,down:r,enter:c,d:u,g:p,o:d}=zu;let f=[{name:"next_space",key:Ge(t,gn(s)),fn:qt,autoRepeat:!0},{name:"prev_space",key:Ge(t,s),fn:Gt,autoRepeat:!0},{name:"next_right",key:Ge(a,gn(s),gn(rn)),fn:qt,autoRepeat:!0},{name:"prev_left",key:Ge(i,gn(s),gn(rn)),fn:Gt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:qt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Gt,autoRepeat:!0},{name:"next_down",key:Ge(r,gn(rn)),fn:Gi,autoRepeat:!0},{name:"prev_up",key:Ge(l,gn(rn)),fn:()=>Yi(!1),autoRepeat:!0},{name:"next_shift",key:Ge(a,s),fn:Gi,autoRepeat:!0},{name:"prev_shift",key:Ge(i,s),fn:()=>Yi(!1),autoRepeat:!0},{name:"toggle_dark",key:Ge(u,gn(Kn)),fn:ju},{name:"toggle_overview",key:Ge(d,gn(Kn)),fn:Ru},{name:"hide_overview",key:Ge(e,gn(Kn)),fn:()=>rn.value=!1},{name:"goto",key:Ge(p,gn(Kn)),fn:()=>ds.value=!ds.value},{name:"next_overview",key:Ge(a,rn),fn:C0},{name:"prev_overview",key:Ge(i,rn),fn:E0},{name:"up_overview",key:Ge(l,rn),fn:F0},{name:"down_overview",key:Ge(r,rn),fn:O0},{name:"goto_from_overview",key:Ge(c,rn),fn:()=>{ws(bn.value),rn.value=!1}}];const m=new Set(f.map(g=>g.name));if(f.filter(g=>g.name&&m.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return f}const Bu=Ge(gn(Wg),gn(Vg),jg);function L0(e,t,s=!1){typeof e=="string"&&(e=zu[e]);const i=Ge(e,Bu);let a=0,l;const r=()=>{if(clearTimeout(l),!i.value){a=0;return}s&&(l=setTimeout(r,Math.max(1e3-a*250,150)),a++),t()};return He(i,r,{flush:"sync"})}function M0(e,t){return yh(e,s=>{Bu.value&&(s.repeat||t())})}function T0(){const e=S0();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&L0(s.key,s.fn,s.autoRepeat)}),M0("f",()=>Pu.toggle())}const A0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z0=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),P0=[z0];function R0(e,t){return b(),ne("svg",A0,P0)}const N0={name:"carbon-close",render:R0};function Wa(e,t=""){var a,l;const s=["slidev-page",t],i=(l=(a=e==null?void 0:e.meta)==null?void 0:a.slide)==null?void 0:l.no;return i!=null&&s.push(`slidev-page-${i}`),s.filter(Boolean).join(" ")}const D0=je({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;S(P);const s=le(),i=Xh(s),a=M(()=>t.width?t.width:i.width.value),l=M(()=>t.width?t.width/It:i.height.value);t.width&&Is(()=>{s.value&&(s.value.style.width=`${a.value}px`,s.value.style.height=`${l.value}px`)});const r=M(()=>a.value/l.value),c=M(()=>t.scale&&!ys.value?t.scale:r.value<It?a.value/xt:l.value*It/xt),u=M(()=>({height:`${Pa}px`,width:`${xt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=M(()=>({"select-none":!Me.selectable,"slidev-code-line-numbers":Me.lineNumbers}));return kn(au,c),(d,f)=>(b(),ne("div",{id:"slide-container",ref_key:"root",ref:s,class:Ve(w(p))},[n("div",{id:"slide-content",style:en(w(u))},[rt(d.$slots,"default")],4),rt(d.$slots,"controls")],2))}});const R=(e,t)=>{const s=e.__vccOpts||e;for(const[i,a]of t)s[i]=a;return s},Wu=R(D0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Va=je({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const s=Vn(e,"clicks",t),i=Vn(e,"clicksElements",t),a=Vn(e,"clicksDisabled",t),l=Vn(e,"clicksOrderMap",t);i.value.length=0,kn(Om,e.route),kn(Sm,e.context),kn(su,s),kn(ou,a),kn(iu,i),kn(Fm,l)},render(){var e,t;return this.$props.is?mi(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),U0=["innerHTML"],H0=je({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return S(P),(t,s)=>w(Bi)[e.page]?(b(),ne("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Bi)[e.page]},null,8,U0)):pe("v-if",!0)}}),Vu=R(H0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),j0=Object.freeze(Object.defineProperty({__proto__:null,default:Vu},Symbol.toStringTag,{value:"Module"})),B0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},W0=["onClick"],V0=je({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const s=e;S(P);const i=Vn(s,"modelValue",t);function a(){i.value=!1}function l(_){ws(_),a()}function r(_){return _===bn.value}const c=ia.smaller("xs"),u=ia.smaller("sm"),p=4*16*2,d=2*16,f=M(()=>c.value?Kt.width.value-p:u.value?(Kt.width.value-p-d)/2:300),m=M(()=>Math.floor((Kt.width.value-p)/(f.value+d)));return Is(()=>{bn.value=Qe.value,Ba.value=m.value}),(_,g)=>{const k=N0;return b(),ne(Se,null,[La(n("div",B0,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:en(`grid-template-columns: repeat(auto-fit,minmax(${w(f)}px,1fr))`)},[(b(!0),ne(Se,null,di(w(qe).slice(0,-1),(y,C)=>(b(),ne("div",{key:y.path,class:"relative"},[n("div",{class:Ve(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(C+1),"border-gray-400":!r(C+1)}]),style:en(w(Ra)),onClick:x=>l(+y.path)},[(b(),T(Wu,{key:y.path,width:w(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:$(()=>[D(w(Va),{is:y==null?void 0:y.component,"clicks-disabled":!0,class:Ve(w(Wa)(y)),route:y,context:"overview"},null,8,["is","class","route"]),D(Vu,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],14,W0),n("div",{class:"absolute top-0 opacity-50",style:en(`left: ${w(f)+5}px`)},$n(C+1),5)]))),128))],4)],512),[[tu,w(i)]]),w(i)?(b(),ne("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:a},[D(k)])):pe("v-if",!0)],64)}}});const K0=R(V0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),q0="/INFORMATICA/3/files/assets/logo-b72bde5d.png",G0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Y0=je({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const s=e;S(P);const i=Vn(s,"modelValue",t);function a(){i.value=!1}return(l,r)=>(b(),T(Oc,null,[w(i)?(b(),ne("div",G0,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>a())}),n("div",{class:Ve(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[rt(l.$slots,"default")],2)])):pe("v-if",!0)],1024))}}),Q0=R(Y0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Z0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},X0=["innerHTML"],J0=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:q0,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),o("dev ")])])],-1),ev=je({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const s=e;S(P);const i=Vn(s,"modelValue",t),a=M(()=>typeof Me.info=="string");return(l,r)=>(b(),T(Q0,{modelValue:w(i),"onUpdate:modelValue":r[0]||(r[0]=c=>Ce(i)?i.value=c:null),class:"px-6 py-4"},{default:$(()=>[n("div",Z0,[w(a)?(b(),ne("div",{key:0,class:"mb-4",innerHTML:w(Me).info},null,8,X0)):pe("v-if",!0),J0])]),_:1},8,["modelValue"]))}});const nv=R(ev,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]),tv=["disabled","onKeydown"],sv=je({__name:"Goto",setup(e){S(P);const t=le(),s=le(""),i=M(()=>{if(s.value.startsWith("/"))return!!qe.find(r=>r.path===s.value.substring(1));{const r=+s.value;return!isNaN(r)&&r>0&&r<=ap.value}});function a(){i.value&&(s.value.startsWith("/")?ws(s.value.substring(1)):ws(+s.value)),l()}function l(){ds.value=!1}return He(ds,async r=>{var c,u;r?(await zn(),s.value="",(c=t.value)==null||c.focus()):(u=t.value)==null||u.blur()}),He(s,r=>{r.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(r,c)=>(b(),ne("div",{id:"slidev-goto-dialog",class:Ve(["fixed right-5 bg-main transform transition-all",w(ds)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[La(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),type:"text",disabled:!w(ds),class:Ve(["outline-none bg-transparent",{"text-red-400":!w(i)&&s.value}]),placeholder:"Goto...",onKeydown:[Dl(a,["enter"]),Dl(l,["escape"])],onBlur:l},null,42,tv),[[bm,s.value]])],2))}}),iv=R(sv,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),ov=je({__name:"Controls",setup(e){S(P);const t=Gn(),s=Gn();return(i,a)=>(b(),ne(Se,null,[D(K0,{modelValue:w(rn),"onUpdate:modelValue":a[0]||(a[0]=l=>Ce(rn)?rn.value=l:null)},null,8,["modelValue"]),D(iv),w(t)?(b(),T(w(t),{key:0})):pe("v-if",!0),w(s)?(b(),T(w(s),{key:1,modelValue:w(Eo),"onUpdate:modelValue":a[1]||(a[1]=l=>Ce(Eo)?Eo.value=l:null)},null,8,["modelValue"])):pe("v-if",!0),w(Me).info?(b(),T(nv,{key:2,modelValue:w(Ks),"onUpdate:modelValue":a[2]||(a[2]=l=>Ce(Ks)?Ks.value=l:null)},null,8,["modelValue"])):pe("v-if",!0)],64))}}),av=R(ov,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),lv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rv=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),cv=[rv];function uv(e,t){return b(),ne("svg",lv,cv)}const pv={name:"carbon-settings-adjust",render:uv},dv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fv=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),mv=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),hv=[fv,mv];function _v(e,t){return b(),ne("svg",dv,hv)}const gv={name:"carbon-information",render:_v},vv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kv=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),bv=[kv];function yv(e,t){return b(),ne("svg",vv,bv)}const wv={name:"carbon-download",render:yv},Iv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xv=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),$v=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Ev=[xv,$v];function Cv(e,t){return b(),ne("svg",Iv,Ev)}const Fv={name:"carbon-user-speaker",render:Cv},Ov={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sv=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Lv=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Mv=[Sv,Lv];function Tv(e,t){return b(),ne("svg",Ov,Mv)}const Av={name:"carbon-presentation-file",render:Tv},zv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pv=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Rv=[Pv];function Nv(e,t){return b(),ne("svg",zv,Rv)}const Dv={name:"carbon-pen",render:Nv},Uv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Hv=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),jv=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Bv=[Hv,jv];function Wv(e,t){return b(),ne("svg",Uv,Bv)}const Vv={name:"ph-cursor-duotone",render:Wv},Kv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qv=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Gv=[qv];function Yv(e,t){return b(),ne("svg",Kv,Gv)}const Ku={name:"ph-cursor-fill",render:Yv},Qv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zv=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Xv=[Zv];function Jv(e,t){return b(),ne("svg",Qv,Xv)}const e1={name:"carbon-sun",render:Jv},n1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),s1=[t1];function i1(e,t){return b(),ne("svg",n1,s1)}const o1={name:"carbon-moon",render:i1},a1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l1=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),r1=[l1];function c1(e,t){return b(),ne("svg",a1,r1)}const u1={name:"carbon-apps",render:c1},p1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d1=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),f1=[d1];function m1(e,t){return b(),ne("svg",p1,f1)}const qu={name:"carbon-arrow-right",render:m1},h1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_1=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),g1=[_1];function v1(e,t){return b(),ne("svg",h1,g1)}const k1={name:"carbon-arrow-left",render:v1},b1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y1=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),w1=[y1];function I1(e,t){return b(),ne("svg",b1,w1)}const x1={name:"carbon-maximize",render:I1},$1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E1=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),C1=[E1];function F1(e,t){return b(),ne("svg",$1,C1)}const O1={name:"carbon-minimize",render:F1},S1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L1=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),M1=[L1];function T1(e,t){return b(),ne("svg",S1,M1)}const A1={name:"carbon-checkmark",render:T1},z1={class:"select-list"},P1={class:"title"},R1={class:"items"},N1=["onClick"],D1=je({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const s=e;S(P);const i=Vn(s,"modelValue",t,{passive:!0});return(a,l)=>{const r=A1;return b(),ne("div",z1,[n("div",P1,$n(e.title),1),n("div",R1,[(b(!0),ne(Se,null,di(e.items,c=>(b(),ne("div",{key:c.value,class:Ve(["item",{active:w(i)===c.value}]),onClick:()=>{var u;i.value=c.value,(u=c.onClick)==null||u.call(c)}},[D(r,{class:Ve(["text-green-500",{"opacity-0":w(i)!==c.value}])},null,8,["class"]),o(" "+$n(c.display||c.value),1)],10,N1))),128))])])}}});const U1=R(D1,[["__scopeId","data-v-3f89fa11"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),H1={class:"text-sm"},j1=je({__name:"Settings",setup(e){S(P);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,i)=>(b(),ne("div",H1,[D(U1,{modelValue:w(Si),"onUpdate:modelValue":i[0]||(i[0]=a=>Ce(Si)?Si.value=a:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),B1=R(j1,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),W1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},V1=je({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const s=e;S(P);const i=Vn(s,"modelValue",t,{passive:!0}),a=le();return kh(a,()=>{i.value=!1}),(l,r)=>(b(),ne("div",{ref_key:"el",ref:a,class:"flex relative"},[n("button",{class:Ve({disabled:e.disabled}),onClick:r[0]||(r[0]=c=>i.value=!w(i))},[rt(l.$slots,"button",{class:Ve({disabled:e.disabled})})],2),(b(),T(Oc,null,[w(i)?(b(),ne("div",W1,[rt(l.$slots,"menu")])):pe("v-if",!0)],1024))],512))}}),K1=R(V1,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),q1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},G1={__name:"VerticalDivider",setup(e){return S(P),(t,s)=>(b(),ne("div",q1))}},xi=R(G1,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Y1={render(){return[]}},Q1={class:"slidev-icon-btn"},Z1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},X1={class:"my-auto"},J1={class:"opacity-50"},ek=je({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;S(P);const s=ia.smaller("md"),{isFullscreen:i,toggle:a}=Pu,l=M(()=>ua.value?`?password=${ua.value}`:""),r=M(()=>`/presenter/${Qe.value}${l.value}`),c=M(()=>`/${Qe.value}${l.value}`),u=le(),p=()=>{u.value&&gs.value&&u.value.contains(gs.value)&&gs.value.blur()},d=M(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Gn(),m=Gn();return $t(()=>import("./DrawingControls-96edf271.js"),[]).then(_=>m.value=_.default),(_,g)=>{const k=O1,y=x1,C=k1,x=qu,F=u1,O=o1,V=e1,K=Ku,B=Vv,H=Dv,se=Av,ae=Qd("RouterLink"),fe=Fv,Z=wv,Ie=gv,Re=pv;return b(),ne("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[n("div",{class:Ve(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(d)]),onMouseleave:p},[w(nt)?pe("v-if",!0):(b(),ne("button",{key:0,class:"slidev-icon-btn",onClick:g[0]||(g[0]=(...Fe)=>w(a)&&w(a)(...Fe))},[w(i)?(b(),T(k,{key:0})):(b(),T(y,{key:1}))])),n("button",{class:Ve(["slidev-icon-btn",{disabled:!w(mC)}]),onClick:g[1]||(g[1]=(...Fe)=>w(Gt)&&w(Gt)(...Fe))},[D(C)],2),n("button",{class:Ve(["slidev-icon-btn",{disabled:!w(fC)}]),title:"Next",onClick:g[2]||(g[2]=(...Fe)=>w(qt)&&w(qt)(...Fe))},[D(x)],2),w(nt)?pe("v-if",!0):(b(),ne("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Fe=>w(Ru)())},[D(F)])),w(ra)?pe("v-if",!0):(b(),ne("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Fe=>w(ju)())},[w(ja)?(b(),T(O,{key:0})):(b(),T(V,{key:1}))])),D(xi),w(nt)?pe("v-if",!0):(b(),ne(Se,{key:3},[!w(Tn)&&!w(s)&&w(f)?(b(),ne(Se,{key:0},[D(w(f)),D(xi)],64)):pe("v-if",!0),w(Tn)?(b(),ne("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Fe=>Co.value=!w(Co))},[w(Co)?(b(),T(K,{key:0})):(b(),T(B,{key:1,class:"opacity-50"}))])):pe("v-if",!0)],64)),(!w(Me).drawings.presenterOnly||w(Tn))&&!w(nt)?(b(),ne(Se,{key:4},[n("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Fe=>Kn.value=!w(Kn))},[D(H),w(Kn)?(b(),ne("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:en({background:w(Dt).color})},null,4)):pe("v-if",!0)]),D(xi)],64)):pe("v-if",!0),w(nt)?pe("v-if",!0):(b(),ne(Se,{key:5},[w(Tn)?(b(),T(ae,{key:0,to:w(c),class:"slidev-icon-btn",title:"Play Mode"},{default:$(()=>[D(se)]),_:1},8,["to"])):pe("v-if",!0),w(cC)?(b(),T(ae,{key:1,to:w(r),class:"slidev-icon-btn",title:"Presenter Mode"},{default:$(()=>[D(fe)]),_:1},8,["to"])):pe("v-if",!0),pe("v-if",!0)],64)),(b(),ne(Se,{key:6},[w(Me).download?(b(),ne("button",{key:0,class:"slidev-icon-btn",onClick:g[8]||(g[8]=(...Fe)=>w(Ur)&&w(Ur)(...Fe))},[D(Z)])):pe("v-if",!0)],64)),!w(Tn)&&w(Me).info&&!w(nt)?(b(),ne("button",{key:7,class:"slidev-icon-btn",onClick:g[9]||(g[9]=Fe=>Ks.value=!w(Ks))},[D(Ie)])):pe("v-if",!0),!w(Tn)&&!w(nt)?(b(),T(K1,{key:8},{button:$(()=>[n("button",Q1,[D(Re)])]),menu:$(()=>[D(B1)]),_:1})):pe("v-if",!0),w(nt)?pe("v-if",!0):(b(),T(xi,{key:9})),n("div",Z1,[n("div",X1,[o($n(w(Qe))+" ",1),n("span",J1,"/ "+$n(w(ap)),1)])]),D(w(Y1))],34)],512)}}}),nk=R(ek,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),tk={style:{"font-size":"0.55rem","line-height":"1rem"}},sk=n("div",{class:"absolute bottom-0 left-1"},[n("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),ik={class:"absolute bottom-1 left-89 text-gray-700"},ok={key:0,class:"absolute bottom-1 right-1 text-gray-700"},ak={__name:"global-top",setup(e){const t=S(P);return(s,i)=>(b(),ne("footer",tk,[sk,n("div",ik," ITT E.Agnelli - Informatica - "+$n(w(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+$n(w(t).configs.as)+" - v "+$n(w(t).configs.version||0),1),w(t).nav.currentPage!==1&&w(t).nav.currentPage!=w(t).nav.total+1?(b(),ne("div",ok,$n(w(t).nav.currentPage-1)+" / "+$n(w(t).nav.total-1),1)):pe("v-if",!0)]))}},lk=R(ak,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Gu={render(){return[mi(lk)]}},Yu={render(){return[]}},rk={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ck=je({__name:"PresenterMouse",setup(e){return S(P),(t,s)=>{const i=Ku;return w(wo).cursor?(b(),ne("div",rk,[D(i,{class:"absolute",style:en({left:`${w(wo).cursor.x}%`,top:`${w(wo).cursor.y}%`})},null,8,["style"])])):pe("v-if",!0)}}}),uk=R(ck,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),pk=je({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){S(P),He(cn,()=>{var i,a;(i=cn.value)!=null&&i.meta&&cn.value.meta.preload!==!1&&(cn.value.meta.__preloaded=!0),(a=Oo.value)!=null&&a.meta&&Oo.value.meta.preload!==!1&&(Oo.value.meta.__preloaded=!0)},{immediate:!0});const t=Gn();$t(()=>import("./DrawingLayer-ffdbd15f.js"),[]).then(i=>t.value=i.default);const s=M(()=>qe.filter(i=>{var a;return((a=i.meta)==null?void 0:a.__preloaded)||i===cn.value}));return(i,a)=>(b(),ne(Se,null,[pe(" Global Bottom "),D(w(Yu)),pe(" Slides "),D(mm,Q(Y(w(gC))),{default:$(()=>[(b(!0),ne(Se,null,di(w(s),l=>{var r;return La((b(),T(w(Va),{key:l.path,is:l==null?void 0:l.component,clicks:l===w(cn)?w(Xt):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:Ve(w(Wa)(l)),route:l,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[tu,l===w(cn)]])}),128))]),_:1},16),pe(" Global Top "),D(w(Gu)),w(t)?(b(),T(w(t),{key:0})):pe("v-if",!0),w(Tn)?pe("v-if",!0):(b(),T(uk,{key:1}))],64))}}),dk=R(pk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),fk=je({__name:"PrintStyle",setup(e){S(P);function t(s,{slots:i}){if(i.default)return mi("style",i.default())}return(s,i)=>(b(),T(t,null,{default:$(()=>[o(" @page { size: "+$n(w(xt))+"px "+$n(w(Pa))+"px; margin: 0px; } ",1)]),_:1}))}}),Qu=R(fk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),mk=je({__name:"Play",setup(e){S(P),T0();const t=le();function s(l){var r;Ir.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?qt():Gt())}vC(t);const i=M(()=>Bg.value||Ir.value);Gn();const a=Gn();return $t(()=>import("./DrawingControls-96edf271.js"),[]).then(l=>a.value=l.default),(l,r)=>(b(),ne(Se,null,[w(ys)?(b(),T(Qu,{key:0})):pe("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:en(w(Ra))},[D(Wu,{class:"w-full h-full",style:en({background:"var(--slidev-slide-container-background, black)"}),width:w(ys)?w(Kt).width.value:void 0,scale:w(Si),onPointerdown:s},{default:$(()=>[D(dk,{context:"slide"})]),controls:$(()=>[n("div",{class:Ve(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(i)?"opacity-100 right-0":"opacity-0 p-2",w(ii)?"pointer-events-none":""]])},[D(nk,{class:"m-auto",persist:w(i)},null,8,["persist"])],2),!w(Me).drawings.presenterOnly&&!w(nt)&&w(a)?(b(),T(w(a),{key:0,class:"ml-0"})):pe("v-if",!0)]),_:1},8,["style","width","scale"]),pe("v-if",!0)],4),D(av)],64))}}),hk=R(mk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Zu(e){return typeof e>"u"||e===null}function _k(e){return typeof e=="object"&&e!==null}function gk(e){return Array.isArray(e)?e:Zu(e)?[]:[e]}function vk(e,t){var s,i,a,l;if(t)for(l=Object.keys(t),s=0,i=l.length;s<i;s+=1)a=l[s],e[a]=t[a];return e}function kk(e,t){var s="",i;for(i=0;i<t;i+=1)s+=e;return s}function bk(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var yk=Zu,wk=_k,Ik=gk,xk=kk,$k=bk,Ek=vk,Ka={isNothing:yk,isObject:wk,toArray:Ik,repeat:xk,isNegativeZero:$k,extend:Ek};function Xu(e,t){var s="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(s+=`

`+e.mark.snippet),i+" "+s):i}function ai(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Xu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ai.prototype=Object.create(Error.prototype);ai.prototype.constructor=ai;ai.prototype.toString=function(t){return this.name+": "+Xu(this,t)};var Rt=ai,Ck=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Fk=["scalar","sequence","mapping"];function Ok(e){var t={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(i){t[String(i)]=s})}),t}function Sk(e,t){if(t=t||{},Object.keys(t).forEach(function(s){if(Ck.indexOf(s)===-1)throw new Rt('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Ok(t.styleAliases||null),Fk.indexOf(this.kind)===-1)throw new Rt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var on=Sk;function Ar(e,t){var s=[];return e[t].forEach(function(i){var a=s.length;s.forEach(function(l,r){l.tag===i.tag&&l.kind===i.kind&&l.multi===i.multi&&(a=r)}),s[a]=i}),s}function Lk(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function i(a){a.multi?(e.multi[a.kind].push(a),e.multi.fallback.push(a)):e[a.kind][a.tag]=e.fallback[a.tag]=a}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(i);return e}function ca(e){return this.extend(e)}ca.prototype.extend=function(t){var s=[],i=[];if(t instanceof on)i.push(t);else if(Array.isArray(t))i=i.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(i=i.concat(t.explicit));else throw new Rt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(l){if(!(l instanceof on))throw new Rt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Rt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Rt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(l){if(!(l instanceof on))throw new Rt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(ca.prototype);return a.implicit=(this.implicit||[]).concat(s),a.explicit=(this.explicit||[]).concat(i),a.compiledImplicit=Ar(a,"implicit"),a.compiledExplicit=Ar(a,"explicit"),a.compiledTypeMap=Lk(a.compiledImplicit,a.compiledExplicit),a};var Mk=ca,Tk=new on("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Ak=new on("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),zk=new on("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Pk=new Mk({explicit:[Tk,Ak,zk]});function Rk(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Nk(){return null}function Dk(e){return e===null}var Uk=new on("tag:yaml.org,2002:null",{kind:"scalar",resolve:Rk,construct:Nk,predicate:Dk,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Hk(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function jk(e){return e==="true"||e==="True"||e==="TRUE"}function Bk(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Wk=new on("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Hk,construct:jk,predicate:Bk,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Vk(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Kk(e){return 48<=e&&e<=55}function qk(e){return 48<=e&&e<=57}function Gk(e){if(e===null)return!1;var t=e.length,s=0,i=!1,a;if(!t)return!1;if(a=e[s],(a==="-"||a==="+")&&(a=e[++s]),a==="0"){if(s+1===t)return!0;if(a=e[++s],a==="b"){for(s++;s<t;s++)if(a=e[s],a!=="_"){if(a!=="0"&&a!=="1")return!1;i=!0}return i&&a!=="_"}if(a==="x"){for(s++;s<t;s++)if(a=e[s],a!=="_"){if(!Vk(e.charCodeAt(s)))return!1;i=!0}return i&&a!=="_"}if(a==="o"){for(s++;s<t;s++)if(a=e[s],a!=="_"){if(!Kk(e.charCodeAt(s)))return!1;i=!0}return i&&a!=="_"}}if(a==="_")return!1;for(;s<t;s++)if(a=e[s],a!=="_"){if(!qk(e.charCodeAt(s)))return!1;i=!0}return!(!i||a==="_")}function Yk(e){var t=e,s=1,i;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),i=t[0],(i==="-"||i==="+")&&(i==="-"&&(s=-1),t=t.slice(1),i=t[0]),t==="0")return 0;if(i==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function Qk(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ka.isNegativeZero(e)}var Zk=new on("tag:yaml.org,2002:int",{kind:"scalar",resolve:Gk,construct:Yk,predicate:Qk,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Xk=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Jk(e){return!(e===null||!Xk.test(e)||e[e.length-1]==="_")}function eb(e){var t,s;return t=e.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var nb=/^[-+]?[0-9]+e/;function tb(e,t){var s;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ka.isNegativeZero(e))return"-0.0";return s=e.toString(10),nb.test(s)?s.replace("e",".e"):s}function sb(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ka.isNegativeZero(e))}var ib=new on("tag:yaml.org,2002:float",{kind:"scalar",resolve:Jk,construct:eb,predicate:sb,represent:tb,defaultStyle:"lowercase"}),ob=Pk.extend({implicit:[Uk,Wk,Zk,ib]}),ab=ob,Ju=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ep=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function lb(e){return e===null?!1:Ju.exec(e)!==null||ep.exec(e)!==null}function rb(e){var t,s,i,a,l,r,c,u=0,p=null,d,f,m;if(t=Ju.exec(e),t===null&&(t=ep.exec(e)),t===null)throw new Error("Date resolve error");if(s=+t[1],i=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(s,i,a));if(l=+t[4],r=+t[5],c=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(d=+t[10],f=+(t[11]||0),p=(d*60+f)*6e4,t[9]==="-"&&(p=-p)),m=new Date(Date.UTC(s,i,a,l,r,c,u)),p&&m.setTime(m.getTime()-p),m}function cb(e){return e.toISOString()}var ub=new on("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:lb,construct:rb,instanceOf:Date,represent:cb});function pb(e){return e==="<<"||e===null}var db=new on("tag:yaml.org,2002:merge",{kind:"scalar",resolve:pb}),qa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function fb(e){if(e===null)return!1;var t,s,i=0,a=e.length,l=qa;for(s=0;s<a;s++)if(t=l.indexOf(e.charAt(s)),!(t>64)){if(t<0)return!1;i+=6}return i%8===0}function mb(e){var t,s,i=e.replace(/[\r\n=]/g,""),a=i.length,l=qa,r=0,c=[];for(t=0;t<a;t++)t%4===0&&t&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(i.charAt(t));return s=a%4*6,s===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):s===18?(c.push(r>>10&255),c.push(r>>2&255)):s===12&&c.push(r>>4&255),new Uint8Array(c)}function hb(e){var t="",s=0,i,a,l=e.length,r=qa;for(i=0;i<l;i++)i%3===0&&i&&(t+=r[s>>18&63],t+=r[s>>12&63],t+=r[s>>6&63],t+=r[s&63]),s=(s<<8)+e[i];return a=l%3,a===0?(t+=r[s>>18&63],t+=r[s>>12&63],t+=r[s>>6&63],t+=r[s&63]):a===2?(t+=r[s>>10&63],t+=r[s>>4&63],t+=r[s<<2&63],t+=r[64]):a===1&&(t+=r[s>>2&63],t+=r[s<<4&63],t+=r[64],t+=r[64]),t}function _b(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var gb=new on("tag:yaml.org,2002:binary",{kind:"scalar",resolve:fb,construct:mb,predicate:_b,represent:hb}),vb=Object.prototype.hasOwnProperty,kb=Object.prototype.toString;function bb(e){if(e===null)return!0;var t=[],s,i,a,l,r,c=e;for(s=0,i=c.length;s<i;s+=1){if(a=c[s],r=!1,kb.call(a)!=="[object Object]")return!1;for(l in a)if(vb.call(a,l))if(!r)r=!0;else return!1;if(!r)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function yb(e){return e!==null?e:[]}var wb=new on("tag:yaml.org,2002:omap",{kind:"sequence",resolve:bb,construct:yb}),Ib=Object.prototype.toString;function xb(e){if(e===null)return!0;var t,s,i,a,l,r=e;for(l=new Array(r.length),t=0,s=r.length;t<s;t+=1){if(i=r[t],Ib.call(i)!=="[object Object]"||(a=Object.keys(i),a.length!==1))return!1;l[t]=[a[0],i[a[0]]]}return!0}function $b(e){if(e===null)return[];var t,s,i,a,l,r=e;for(l=new Array(r.length),t=0,s=r.length;t<s;t+=1)i=r[t],a=Object.keys(i),l[t]=[a[0],i[a[0]]];return l}var Eb=new on("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:xb,construct:$b}),Cb=Object.prototype.hasOwnProperty;function Fb(e){if(e===null)return!0;var t,s=e;for(t in s)if(Cb.call(s,t)&&s[t]!==null)return!1;return!0}function Ob(e){return e!==null?e:{}}var Sb=new on("tag:yaml.org,2002:set",{kind:"mapping",resolve:Fb,construct:Ob});ab.extend({implicit:[ub,db],explicit:[gb,wb,Eb,Sb]});function zr(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var Lb=new Array(256),Mb=new Array(256);for(var ls=0;ls<256;ls++)Lb[ls]=zr(ls)?1:0,Mb[ls]=zr(ls);function Tb(e){return Array.from(new Set(e))}function Pr(...e){let t,s,i;e.length===1?(t=0,i=1,[s]=e):[t,s,i=1]=e;const a=[];let l=t;for(;l<s;)a.push(l),l+=i||1;return a}function np(e,t){if(!t||t==="all"||t==="*")return Pr(1,e+1);const s=[];for(const i of t.split(/[,;]/g))if(!i.includes("-"))s.push(+i);else{const[a,l]=i.split("-",2);s.push(...Pr(+a,l?+l+1:e+1))}return Tb(s).filter(i=>i<=e).sort((i,a)=>i-a)}function Ab(e){const t=M(()=>e.value.path),s=M(()=>qe.length-1),i=M(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),a=M(()=>Ga(i.value)),l=M(()=>qe.find(m=>m.path===`${i.value}`)),r=M(()=>{var m,_,g;return(g=(_=(m=l.value)==null?void 0:m.meta)==null?void 0:_.slide)==null?void 0:g.id}),c=M(()=>{var m,_;return((_=(m=l.value)==null?void 0:m.meta)==null?void 0:_.layout)||(i.value===1?"cover":"default")}),u=M(()=>qe.find(m=>m.path===`${Math.min(qe.length,i.value+1)}`)),p=M(()=>qe.filter(m=>{var _,g;return(g=(_=m.meta)==null?void 0:_.slide)==null?void 0:g.title}).reduce((m,_)=>(Ya(m,_),m),[])),d=M(()=>Qa(p.value,l.value)),f=M(()=>Za(d.value));return{route:e,path:t,total:s,currentPage:i,currentPath:a,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:f}}function zb(e,t,s){const i=le(0);zn(()=>{Et.afterEach(async()=>{await zn(),i.value+=1})});const a=M(()=>{var u,p;return i.value,((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=M(()=>{var u,p;return+(((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.clicks)??a.value.length)}),r=M(()=>s.value<qe.length-1||e.value<l.value),c=M(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:a,clicksTotal:l,hasNext:r,hasPrev:c}}const Pb=["id"],Rb=je({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const s=e,i=Vn(s,"clicksElements",t),a=M(()=>({height:`${Pa}px`,width:`${xt}px`})),l=Gn();$t(()=>Promise.resolve().then(()=>j0),void 0).then(p=>l.value=p.default);const r=M(()=>s.clicks),c=zb(r,s.nav.currentRoute,s.nav.currentPage),u=M(()=>`${s.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return kn(P,nn({nav:{...s.nav,...c},configs:Me,themeConfigs:M(()=>Me.themeConfig)})),(p,d)=>{var f;return b(),ne("div",{id:w(u),class:"print-slide-container",style:en(w(a))},[D(w(Yu)),D(w(Va),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":w(i),"onUpdate:clicksElements":d[0]||(d[0]=m=>Ce(i)?i.value=m:null),clicks:w(r),"clicks-disabled":!1,class:Ve(w(Wa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),w(l)?(b(),T(w(l),{key:0,page:+e.route.path},null,8,["page"])):pe("v-if",!0),D(w(Gu))],12,Pb)}}}),Rr=R(Rb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Nb=je({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var l;const t=e;S(P);const s=nn(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),i=M(()=>t.route),a=Ab(i);return(r,c)=>(b(),ne(Se,null,[D(Rr,{"clicks-elements":s,"onUpdate:clicksElements":c[0]||(c[0]=u=>s=u),clicks:0,nav:w(a),route:w(i)},null,8,["clicks-elements","nav","route"]),w(op)?pe("v-if",!0):(b(!0),ne(Se,{key:0},di(s.length,u=>(b(),T(Rr,{key:u,clicks:u,nav:w(a),route:w(i)},null,8,["clicks","nav","route"]))),128))],64))}}),Db=R(Nb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),Ub={id:"print-content"},Hb=je({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;S(P);const s=M(()=>t.width),i=M(()=>t.width/It),a=M(()=>s.value/i.value),l=M(()=>a.value<It?s.value/xt:i.value*It/xt);let r=qe.slice(0,-1);Nn.value.query.range&&(r=np(r.length,Nn.value.query.range).map(p=>r[p-1]));const c=M(()=>({"select-none":!Me.selectable,"slidev-code-line-numbers":Me.lineNumbers}));return kn(au,l),(u,p)=>(b(),ne("div",{id:"print-container",class:Ve(w(c))},[n("div",Ub,[(b(!0),ne(Se,null,di(w(r),d=>(b(),T(Db,{key:d.path,route:d},null,8,["route"]))),128))]),rt(u.$slots,"controls")],2))}});const jb=R(Hb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),Bb=je({__name:"Print",setup(e){return S(P),Is(()=>{ys?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,s)=>(b(),ne(Se,null,[w(ys)?(b(),T(Qu,{key:0})):pe("v-if",!0),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:en(w(Ra))},[D(jb,{class:"w-full h-full",style:en({background:"var(--slidev-slide-container-background, black)"}),width:w(Kt).width.value},null,8,["style","width"])],4)],64))}});const Wb=R(Bb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const Vb={class:"slidev-layout end"},Kb={__name:"end",setup(e){return S(P),(t,s)=>(b(),ne("div",Vb," END "))}},qb=R(Kb,[["__scopeId","data-v-e532b98d"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function Nr(e){return e.startsWith("/")?"/INFORMATICA/3/files/"+e.slice(1):e}function Gb(e,t=!1){const s=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),i={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?t?`linear-gradient(#0005, #0008), url(${Nr(e)})`:`url("${Nr(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return i.background||delete i.background,i}const Yb={class:"my-auto w-full"},Qb=je({__name:"cover",props:{background:{default:""}},setup(e){const t=e;S(P);const s=M(()=>Gb(t.background,!0));return(i,a)=>(b(),ne("div",{class:"slidev-layout cover",style:en(w(s))},[n("div",Yb,[rt(i.$slots,"default")])],4))}}),Zb=R(Qb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),Xb=n("h1",null,"I File",-1),Jb=n("p",null,"I/O e gestione dei File",-1),ey={class:"pt-12"},ny={class:"px-2 py-1"},ty={__name:"1",setup(e){const t={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"INFORMATICA",as:"2022/2023",version:"1.0.0"};return S(P),(s,i)=>{const a=qu;return b(),T(Zb,Q(Y(t)),{default:$(()=>[pe(` http://www.primeeng.it/downloads/materiale%202013/12%20Linguaggio%20C%20-%20Gestione%20di%20file.pdf
https://www.unife.it/scienze/informatica/insegnamenti/programmazione-e-laboratorio/materiale-didattico-anni-precedenti/materiale-didattico-a-a-2016-17/diapositive/120-file-di-testo
https://lia.disi.unibo.it/Courses/FondT-0910-ELT/materiale/10.file.pdf
https://www.freecodecamp.org/italian/news/gestione-dei-file-in-c-come-aprire-chiudere-e-scrivere-su-file/
http://www.diit.unict.it/users/mpalesi/COURSES/LDI_02-03/DISPENSE/files.pdf `),pe(" gist "),pe(" fopen: https://gist.github.com/profmancusoa/b925aa12bd9baaabe4f8eb5161cb73f2 "),pe(" fclose https://gist.github.com/profmancusoa/c75eff492742b57461ec796f9c29dc66 "),pe(" fprintf https://gist.github.com/profmancusoa/0cf0c214ded614e4f39ec827457e074e "),pe(" fscanf https://gist.github.com/profmancusoa/2d708a308d7e6ab8fd3273f63a8e60a1 "),pe(" fwrite https://gist.github.com/profmancusoa/06cb6ac48e97e11bb08773df6a4bcf5a "),pe(" fread https://gist.github.com/profmancusoa/7179a3d913de2303b14b076f6eb87b6d "),pe(" persist array https://gist.github.com/profmancusoa/1efa0c3cde1e38fd8b0a9bfe05b4c669 "),pe(" persist array2 https://gist.github.com/profmancusoa/39f5fc4a9845a5762db38fb34b564787 "),Xb,Jb,n("div",ey,[n("span",ny,[o(" Premi spazio o "),D(a,{class:"inline"}),o(" per la prossima slide ")])])]),_:1},16)}}},sy=R(ty,[["__file","/@slidev/slides/1.md"]]),iy={class:"slidev-layout default"},oy={__name:"default",setup(e){return S(P),(t,s)=>(b(),ne("div",iy,[rt(t.$slots,"default")]))}},X=R(oy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),ay=n("h1",null,"I File",-1),ly=n("p",null,"Introduzione",-1),ry=n("ul",null,[n("li",null,"Ogni programma in C che abbiamo scritto fino ad ora manipola dati e strutture dati presenti solamente nella memoria RAM"),n("li",null,[o("Ciò significa che i dati manipolati dal nostro programma non sono persistenti, cioò sono "),n("em",null,"volatili")]),n("li",null,"In altre parole ogni esecuzione di un programma in C NON ha acesso ai dati generati dall’esecuzioni precedenti"),n("li",null,"Quindi i dati generati e gestiti dal programma sono disponibili solo durante l’esecuzione a runtime dello stesso"),n("li",null,"Una volta che il programma termina tutto il contenuto della RAM del processo viene rilasciato e non più disponibile (in Linux le pagine allocate al processo sono cancellate)"),n("li",null,"Anche in caso in cui manchi l’alimentazione al computer tutti i dati del programma in esecuzione vengono irremediabilmente persi")],-1),cy={__name:"2",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[ay,ly,ry]),_:1},16))}},uy=R(cy,[["__file","/@slidev/slides/2.md"]]),py="/INFORMATICA/3/files/assets/files_01-44d473b6.png",dy=n("h1",null,"I File",-1),fy=n("p",null,"Introduzione",-1),my=n("ul",null,[n("li",null,[o("Per poter mantenere disponibili i dati tra le diverse esecuzioni di un programma è necessario rendere i dati stessi "),n("strong",null,"persistenti")]),n("li",null,[o("Il modo più facile per rendere i dati di un programma persistenti è l’archiviazione su memoria di massa "),n("ul",null,[n("li",null,"HDD"),n("li",null,"SSD"),n("li",null,"SD card"),n("li",null,"flashcard"),n("li",null,"…")])])],-1),hy=n("img",{src:py,width:"550",style:{position:"relative",top:"-8rem",left:"15rem"}},null,-1),_y={__name:"3",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[dy,fy,my,hy]),_:1},16))}},gy=R(_y,[["__file","/@slidev/slides/3.md"]]),vy="/INFORMATICA/3/files/assets/files_02-0e512623.png",ky="/INFORMATICA/3/files/assets/files_03-8cbafb48.png",by=n("h1",null,"I File",-1),yy=n("p",null,"Introduzione",-1),wy=n("img",{src:vy,width:"300",style:{position:"relative",top:"3rem",left:"35rem"}},null,-1),Iy=n("img",{src:ky,width:"500",style:{position:"relative",top:"-12rem",left:"0rem"}},null,-1),xy={__name:"4",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[by,yy,wy,Iy]),_:1},16))}},$y=R(xy,[["__file","/@slidev/slides/4.md"]]),Ey="/INFORMATICA/3/files/assets/files_04-c1fc8969.png",Cy=n("h1",null,"I File",-1),Fy=n("p",null,"Introduzione",-1),Oy=n("div",{style:{width:"60%"}},[n("ul",null,[n("li",null,[o("Al fine di poter archiviare dei dati sulla memoria di massa, il sistema operativo mette a disposizione il concetto di "),n("strong",null,"file")]),n("li",null,"Un file è una astrazione fornita dal sistema operativo, il cui scopo è consentire la memorizzazione di informazioni su memoria di massa."),n("li",null,[o("Il file è "),n("strong",null,"l’unita logica di memorizzazione"),o(" dei dati su memoria di massa, che consente una memorizzazione persistente dei dati, non limitata dalle dimensioni della memoria centrale.")]),n("li",null,[o("Un file si può anche considerare come "),n("strong",null,"un insieme di record correlati tra loro"),o(" (ossia un insieme di informazioni strutturate e organizzate in un archivio)")])])],-1),Sy=n("img",{src:Ey,width:"350",style:{position:"relative",top:"-15rem",left:"33rem"}},null,-1),Ly={__name:"5",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[Cy,Fy,Oy,Sy]),_:1},16))}},My=R(Ly,[["__file","/@slidev/slides/5.md"]]),Ty="/INFORMATICA/3/files/assets/files_05-5f99b7f1.png",Ay="/INFORMATICA/3/files/assets/files_06-b6ade4ca.png",zy=n("h1",null,"I File",-1),Py=n("p",null,"Introduzione",-1),Ry=n("ul",null,[n("li",null,[o("I file vengono distinti in due categorie: "),n("ul",null,[n("li",null,[n("p",null,[n("code",null,"file di testo"),o(": trattati come sequenze di caratteri e organizzati in linee (ciascuna terminata da '\\n')")])]),n("li",null,[n("p",null,[n("code",null,"file binari"),o(": visti come sequenze di byte")])])])])],-1),Ny=n("img",{src:Ty,width:"400",style:{position:"relative",top:"1rem",left:"-2rem"}},null,-1),Dy=n("img",{src:Ay,width:"500",style:{position:"relative",top:"-12rem",left:"25rem"}},null,-1),Uy={__name:"6",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[zy,Py,Ry,Ny,Dy]),_:1},16))}},Hy=R(Uy,[["__file","/@slidev/slides/6.md"]]),jy="/INFORMATICA/3/files/assets/files_07-8ea906e2.png",By=n("h1",null,"I File",-1),Wy=n("p",null,"Introduzione",-1),Vy=n("ul",null,[n("li",null,[o("I "),n("strong",null,"file di testo"),o(" sono file di caratteri, organizzati in linee")]),n("li",null,"Ogni linea e` terminata da una marca di fine linea (newline, carattere '\\n')"),n("li",null,[n("code",null,"Il record logico può essere il singolo carattere, la parola, oppure la linea")])],-1),Ky=n("img",{src:jy,width:"650",style:{position:"relative",top:"2rem",left:"7rem"}},null,-1),qy={__name:"7",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[By,Wy,Vy,Ky]),_:1},16))}},Gy=R(qy,[["__file","/@slidev/slides/7.md"]]),Yy="/INFORMATICA/3/files/assets/files_08-704eeb82.png",Qy=n("h1",null,"I File",-1),Zy=n("p",null,"Introduzione",-1),Xy=n("ul",null,[n("li",null,[o("I "),n("strong",null,"file di binari"),o(" sono file di byte con un organizzazione puramente sequenziale")]),n("li",null,"Non c’è una suddivisione in linee e pertanto non c’è un terminatore di linea (\\n)"),n("li",null,[n("code",null,"Il record logico è il singolo byte")])],-1),Jy=n("img",{src:Yy,width:"600",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),ew={__name:"8",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[Qy,Zy,Xy,Jy]),_:1},16))}},nw=R(ew,[["__file","/@slidev/slides/8.md"]]),tw="/INFORMATICA/3/files/assets/files_10-3ef5f1ea.png",sw=n("h1",null,"I File",-1),iw=n("p",null,"Introduzione",-1),ow=n("ul",null,[n("li",null,[o("In genere i file hanno una struttura sequenziale, cioè: "),n("ul",null,[n("li",null,"i record logici sono organizzati in una sequenza rigidamente ordinata"),n("li",null,'per accedere ad un particolare record logico, è necessario "scorrere" tutti quelli che lo precedono')])])],-1),aw=n("img",{src:tw,width:"550",style:{position:"relative",top:"3rem",left:"10rem"}},null,-1),lw={__name:"9",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[sw,iw,ow,aw]),_:1},16))}},rw=R(lw,[["__file","/@slidev/slides/9.md"]]),cw="/INFORMATICA/3/files/assets/files_09-dfac64b4.png",uw=n("h1",null,"I File",-1),pw=n("p",null,"Introduzione",-1),dw=n("ul",null,[n("li",null,[o("Genralmente è possibile accedere ad un file in due modi diversi: "),n("ul",null,[n("li",null,[n("strong",null,"Accesso Sequenziale"),o(": si accede ai record del file partendo dal primo e scandendo in modo ordinato ogni record. In altre parole per accedere al record N, è ncessario aver prima letto tutti gli N-1 record precedenti")])])])],-1),fw=n("img",{src:cw,width:"650",style:{position:"relative",top:"1rem",left:"7rem"}},null,-1),mw={__name:"10",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[uw,pw,dw,fw]),_:1},16))}},hw=R(mw,[["__file","/@slidev/slides/10.md"]]),_w="/INFORMATICA/3/files/assets/files_09a-f41b1d1e.png",gw=n("h1",null,"I File",-1),vw=n("p",null,"Introduzione",-1),kw=n("ul",null,[n("li",null,[o("Genralmente è possibile accedere ad un file in due modi diversi: "),n("ul",null,[n("li",null,[n("strong",null,"Accesso Casuale o Diretto"),o(": nel caso di record aventi tutti la stessa lunghezza, è possibile leggere un record alla posizione N indipendentemente dal record letto precedentemente. In altre parole per accedere al record N "),n("strong",null,"NON"),o(" è necessario dover leggere tutti quelli precedenti")])])])],-1),bw=n("img",{src:_w,width:"650",style:{position:"relative",top:"1rem",left:"7rem"}},null,-1),yw={__name:"11",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[gw,vw,kw,bw]),_:1},16))}},ww=R(yw,[["__file","/@slidev/slides/11.md"]]),Iw=n("h1",null,"I File",-1),xw=n("p",null,"I file in C",-1),$w=n("ul",null,[n("li",null,"Come abbiamo già visto, il linguaggio C non mette a disposizione nessuna istruzione di Input/Output"),n("li",null,"Le operazioni di I/O (printf e scanf) sono definite e fornite dalla libreria standard stdio.h"),n("li",null,"Questa libreria, in modo analogo alle funzioni di I/O per il terminale, mette a disposizione le funzioni per la lettura/scrittura dei file sul disco in modo indipendente dalle caratteristiche proprie dei dispositivi fisici"),n("li",null,"Infatti useremo le stesse funzioni di libreria sia per scrivere su un disco HDD che su uno SSD anche se profondamente diversi a livello fisico"),n("li",null,"Ciò è possibile poichè il sistema di I/O del C è caratterizzato da un’interfaccia indipendente dal dispositivo effettivo che si interpone tra il programmatore e il dispositivo stesso")],-1),Ew={__name:"12",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[Iw,xw,$w]),_:1},16))}},Cw=R(Ew,[["__file","/@slidev/slides/12.md"]]),Fw=n("h1",null,"I File",-1),Ow=n("p",null,"I file in C",-1),Sw=n("ul",null,[n("li",null,[o("La libreria standard del C mette a disposizioni specifiche funzioni per effettuare le principali attività sui file: "),n("ul",null,[n("li",null,[n("strong",null,"Apertura di un file"),o(": Prima di poter accedere ad un file è necessario aprirlo, cioè è necessario creare un collegamento logico, che permette di accedere ai record del file presente su disco")]),n("li",null,[n("strong",null,"Chiusura di un file"),o(": rilascia le risorse allocate e chiude il collegamento logico precedentemente creato")]),n("li",null,[n("strong",null,"Lettura da file"),o(": permette di leggere i record presenti nel file e di trasferirli nella memoria centrale")]),n("li",null,[n("strong",null,"Scrittura su file"),o(": permette di scrivere i recorc su un file trasferendoli dalla memoria centrale a quella di massa")]),n("li",null,[n("strong",null,"Posizionamento in un file"),o(": permette di accedere in modo diretto ai record di un file")])])])],-1),Lw={__name:"13",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[Fw,Ow,Sw]),_:1},16))}},Mw=R(Lw,[["__file","/@slidev/slides/13.md"]]),Tw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Aw=n("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),zw=[Aw];function Pw(e,t){return b(),ne("svg",Tw,zw)}const Rw={name:"ph-clipboard",render:Pw},Nw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Dw=n("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Uw=[Dw];function Hw(e,t){return b(),ne("svg",Nw,Uw)}const jw={name:"ph-check-circle",render:Hw},Bw=["title"],Ww=je({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;S(P);const s=S(su),i=S(iu),a=S(ou);function l(f=5){const m=[],_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=_.length;for(let k=0;k<f;k++)m.push(_.charAt(Math.floor(Math.random()*g)));return m.join("")}const r=le(),c=Qn();pi(()=>{const f=t.at==null?i==null?void 0:i.value.length:t.at,m=M(()=>a!=null&&a.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),t.ranges.length-1)),_=M(()=>t.ranges[m.value]||"");if(t.ranges.length>=2&&!(a!=null&&a.value)){const g=l(),k=Tm(t.ranges.length-1).map(y=>g+y);i!=null&&i.value&&(i.value.push(...k),ao(()=>k.forEach(y=>Mm(i.value,y)),c))}Is(()=>{if(!r.value)return;const k=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const y of k){const C=Array.from(y.querySelectorAll(".line")),x=np(C.length,_.value);if(C.forEach((F,O)=>{const V=x.includes(O+1);F.classList.toggle(Lm,!0),F.classList.toggle("highlighted",V),F.classList.toggle("dishonored",!V)}),t.maxHeight){const F=y.querySelector(".line.highlighted");F&&F.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=Oh();function d(){var m,_;const f=(_=(m=r.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:_.textContent;f&&p(f)}return(f,m)=>{const _=jw,g=Rw;return b(),ne("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:en({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[rt(f.$slots,"default"),w(Me).codeCopy?(b(),ne("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(u)?"Copied":"Copy",onClick:m[0]||(m[0]=k=>d())},[w(u)?(b(),T(_,{key:0,class:"p-2 w-8 h-8"})):(b(),T(g,{key:1,class:"p-2 w-8 h-8"}))],8,Bw)):pe("v-if",!0)],4)}}}),we=R(Ww,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),Vw=n("h1",null,"I File",-1),Kw=n("p",null,"I file in C",-1),qw=n("ul",null,[n("li",null,[o("In C un file è identificato da un "),n("code",null,"puntatore a file"),o(" che punta ad una struttura datri contenente tutte le informazioni necessarie ad integragire ocn il file stesso")]),n("li",null,[o("In altre parole, il "),n("strong",null,"puntatore a file"),o(" è il collegamento logico che viene creato in fase di "),n("em",null,"apertura del file")])],-1),Gw=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"struct"),o(),n("span",{class:"token class-name"},"_IO_FILE"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token keyword"},"int"),o(" _flags"),n("span",{class:"token punctuation"},";"),o("           "),n("span",{class:"token comment"},"/* High-order word is _IO_MAGIC; rest is flags. */")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token keyword"},"char"),o(),n("span",{class:"token operator"},"*"),o("_IO_read_ptr"),n("span",{class:"token punctuation"},";"),o("   "),n("span",{class:"token comment"},"/* Current read pointer */")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token keyword"},"char"),o(),n("span",{class:"token operator"},"*"),o("_IO_read_end"),n("span",{class:"token punctuation"},";"),o("   "),n("span",{class:"token comment"},"/* End of get area. */")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token keyword"},"char"),o(),n("span",{class:"token operator"},"*"),o("_IO_read_base"),n("span",{class:"token punctuation"},";"),o("  "),n("span",{class:"token comment"},"/* Start of putback+get area. */")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token keyword"},"char"),o(),n("span",{class:"token operator"},"*"),o("_IO_write_base"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token comment"},"/* Start of put area. */")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token keyword"},"char"),o(),n("span",{class:"token operator"},"*"),o("_IO_write_ptr"),n("span",{class:"token punctuation"},";"),o("  "),n("span",{class:"token comment"},"/* Current put pointer. */")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},".")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},".")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},".")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token keyword"},"int"),o(" _fileno"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("  "),n("span",{class:"token keyword"},"int"),o(" _mode"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"typedef"),o(),n("span",{class:"token keyword"},"struct"),o(),n("span",{class:"token class-name"},"_IO_FILE"),o(" FILE"),n("span",{class:"token punctuation"},";")])])],-1),Yw={__name:"14",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[Vw,Kw,qw,D(a,ve({},{ranges:[""]}),{default:$(()=>[Gw]),_:1},16)]),_:1},16)}}},Qw=R(Yw,[["__file","/@slidev/slides/14.md"]]),Zw=n("h1",null,"I File",-1),Xw=n("p",null,"I file in C",-1),Jw=n("ul",null,[n("li",null,"Il puntatore a file è una variabile che viene utilizzata per indirizzare un file durante le operazioni di accesso (lettura e scrittura.)"),n("li",null,[o("Esso contiene, tra l’altro: "),n("ul",null,[n("li",null,"il file"),n("li",null,"l’elemento corrente all’interno della sequenza")])]),n("li",null,"Il puntatore viene dichiarato nel seguente modo")],-1),eI=n("br",null,null,-1),nI=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")])])],-1),tI=n("br",null,null,-1),sI=n("ul",null,[n("li",null,"Questo puntatore è utilizzato da tutte le funzione che leggomno e scrivono sul file"),n("li",null,"E’ importante, alla fine delle operazioni sul file, chiudere e quindi rilasciare il puntatore al file"),n("li",null,"Ciò è necessario per rilasciare, in modo corretto, le risorse allocate (memoria, …) durante l’apertura del file")],-1),iI={__name:"15",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[Zw,Xw,Jw,eI,D(a,ve({},{ranges:[""]}),{default:$(()=>[nI]),_:1},16),tI,sI]),_:1},16)}}},oI=R(iI,[["__file","/@slidev/slides/15.md"]]),aI=n("h1",null,"I File",-1),lI=n("p",null,"I file in C",-1),rI=n("p",null,"Le principali funzioni per gestire i file in C sono:",-1),cI=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,[n("strong",null,"Funzione")]),n("th",null,[n("strong",null,"Descrizione")])])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"fopen")]),n("td",null,"apre un file dato il suo nome e restituisce un puntatore ad esso")]),n("tr",null,[n("td",null,[n("code",null,"flcose")]),n("td",null,"chiude un file, scrivendo su disco eventuali dati in cache e restituisce le risorse allocate")]),n("tr",null,[n("td",null,[n("code",null,"fprintf")]),n("td",null,"scrive un output su un file. Dal nome è chiaro che si comporta esattamente come printf, ma anzichè scrivere su terminale scrive su file")]),n("tr",null,[n("td",null,[n("code",null,"fscanf")]),n("td",null,"esattamente come scanf, permette di leggere un input formattato da file")]),n("tr",null,[n("td",null,[n("code",null,"fread")]),n("td",null,"legge uno o più record da un file")]),n("tr",null,[n("td",null,[n("code",null,"fwrite")]),n("td",null,"scrive uno o più record su file")]),n("tr",null,[n("td",null,[n("code",null,"fseek")]),n("td",null,"cambia la posizione attuale all’interno del file permettendo l’accesso casuale al file stesso")])])],-1),uI=n("ul",null,[n("li",null,[o("Il manuale di ogni funzione è disponibile digitando "),n("code",null,"man <nome funzione>")])],-1),pI={__name:"16",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[aI,lI,rI,cI,uI]),_:1},16))}},dI=R(pI,[["__file","/@slidev/slides/16.md"]]),fI=n("h1",null,"I File",-1),mI=n("p",null,"Apertura di un file con fopen",-1),hI=n("p",null,[n("code",null,"FILE *fopen(const char *pathname, const char *mode);")],-1),_I=n("ul",null,[n("li",null,[o("Apre un file di nome "),n("em",null,"pathname"),o(" in modalità "),n("em",null,"mode")])],-1),gI=n("p",null,"dove:",-1),vI=n("ul",null,[n("li",null,[n("strong",null,"pathname"),o(": percorco relativo o assoluto del file. Include il nome del file")]),n("li",null,[n("strong",null,"mode"),o(": modalità di apertura del file secondo la seguente tabella (vedi prossima slide)")])],-1),kI=n("p",null,"restituisce:",-1),bI=n("ul",null,[n("li",null,[n("strong",null,"NULL"),o(": in caso di errore di apertura del file (es: file non esistente)")]),n("li",null,[n("strong",null,"FILE *"),o(": puntatore al file appena aperto")])],-1),yI={__name:"17",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[fI,mI,hI,_I,gI,vI,kI,bI]),_:1},16))}},wI=R(yI,[["__file","/@slidev/slides/17.md"]]),II=n("h1",null,"I File",-1),xI=n("p",null,"Apertura di un file con fopen",-1),$I=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,[n("strong",null,"mode")]),n("th",null,[n("strong",null,"Descrizione")]),n("th",null,[n("strong",null,"Note")])])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"r")]),n("td",null,"apre il file in sola lettura"),n("td",null,"Il puntatore è posizionato all’inizio del file")]),n("tr",null,[n("td",null,[n("code",null,"r+")]),n("td",null,"apre il file in lettura e scrittura"),n("td",null,"Il puntatore è posizionato all’inizio del file")]),n("tr",null,[n("td",null,[n("code",null,"w")]),n("td",null,"crea o sovrascrive un file in scrittura"),n("td",null,"Il puntatore è posizionato all’inizio del file")]),n("tr",null,[n("td",null,[n("code",null,"w+")]),n("td",null,"crea o sovrascrive un file in scrittura e lettura"),n("td",null,"Il puntatore è posizionato all’inizio del file")]),n("tr",null,[n("td",null,[n("code",null,"a")]),n("td",null,"apre il file in scrittura se esiste o lo crera in caso contrario"),n("td",null,"Il puntatore è posizionato alla file del file")]),n("tr",null,[n("td",null,[n("code",null,"a+")]),n("td",null,"apre il file in scrittura e lettura se esiste o lo crera in caso contrario"),n("td",null,"Il puntatore è posizionato alla file del file")])])],-1),EI={__name:"18",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[II,xI,$I]),_:1},16))}},CI=R(EI,[["__file","/@slidev/slides/18.md"]]),tp="/INFORMATICA/3/files/assets/files_11-4143c2a2.png",FI=n("h1",null,"I File",-1),OI=n("p",null,"I file in C",-1),SI=n("p",null,[o("mode: "),n("strong",null,"r"),o(" e "),n("strong",null,"r+")],-1),LI=n("ul",null,[n("li",null,"se il file è esistente"),n("li",null,"apre il file e posiziona il puntatore all’inizio del file (primo record)")],-1),MI=n("img",{src:tp,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),TI={__name:"19",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[FI,OI,SI,LI,MI]),_:1},16))}},AI=R(TI,[["__file","/@slidev/slides/19.md"]]),zI="/INFORMATICA/3/files/assets/files_12-7dd1b4b3.png",PI=n("h1",null,"I File",-1),RI=n("p",null,"I file in C",-1),NI=n("p",null,[o("mode: "),n("strong",null,"w"),o(" e "),n("strong",null,"w+")],-1),DI=n("ul",null,[n("li",null,"se il file è esistente"),n("li",null,"apre il file in scrittura e posiziona il puntatore all’inizio del file (primo record)"),n("li",null,"cancella il contenuto del file esistente e viene riscritto")],-1),UI=n("img",{src:zI,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),HI={__name:"20",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[PI,RI,NI,DI,UI]),_:1},16))}},jI=R(HI,[["__file","/@slidev/slides/20.md"]]),BI="/INFORMATICA/3/files/assets/files_13-937f55d6.png",WI=n("h1",null,"I File",-1),VI=n("p",null,"I file in C",-1),KI=n("p",null,[o("mode: "),n("strong",null,"a"),o(" e "),n("strong",null,"a+")],-1),qI=n("ul",null,[n("li",null,"apr eil file e posiziona il puntatore alla fine del file (ultimo record)"),n("li",null,[o("se il file è esistente il suo contenuto non viene perso e i nuovi dati sono aggiunti in coda ("),n("strong",null,"append"),o(")")])],-1),GI=n("img",{src:BI,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),YI={__name:"21",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[WI,VI,KI,qI,GI]),_:1},16))}},QI=R(YI,[["__file","/@slidev/slides/21.md"]]),ZI=n("h1",null,"I File",-1),XI=n("p",null,"Apertura di un file con fopen",-1),JI=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},".")]),o(`
`),n("span",{class:"line"},[o("FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token comment"},"//dichiara il puntatore a file")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/home/antonio/test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"r"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token comment"},"//apre il file in modalità sola lettura")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{"),o(),n("span",{class:"token comment"},"//se il puntatore è NULL non è stato possibile aprire il file")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},`"Errore nell'apertura del file\\n"`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token comment"},"//stampa un messaggio di errore sulla console")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token comment"},"//esce dal programma")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},".")])])],-1),ex=n("p",null,"oppure in maniera più concisa",-1),nx=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[o("FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token comment"},"//dichiara il puntatore a file")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/home/antonio/test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"r"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{"),o(),n("span",{class:"token comment"},"//se il puntatore è NULL non è stato possibile aprire il file")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},`"Errore nell'apertura del file\\n"`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token comment"},"//stampa un messaggio di errore sulla console")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),o(),n("span",{class:"token comment"},"//esce dal programma")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),tx={__name:"22",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[ZI,XI,D(a,ve({},{ranges:[""]}),{default:$(()=>[JI]),_:1},16),ex,D(a,ve({},{ranges:[""]}),{default:$(()=>[nx]),_:1},16)]),_:1},16)}}},sx=R(tx,[["__file","/@slidev/slides/22.md"]]),ix=n("h1",null,"I File",-1),ox=n("p",null,"I file in C",-1),ax=n("ul",null,[n("li",null,"eseguendo questo programma otteniamo")],-1),lx=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# ./file            ")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Impossibile aprire il file")])])],-1),rx=n("br",null,null,-1),cx=n("ul",null,[n("li",null,"Questo messaggio ci dice che non è stato possibile aprire il file"),n("li",null,"Tuttavia non ci fornisce nessuna informazione sul motivo"),n("li",null,"La libreria C mette a disposizione un metodo molto facile per conoscere la motivazione del falliemento")],-1),ux={__name:"23",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[ix,ox,ax,D(a,ve({},{ranges:[""]}),{default:$(()=>[lx]),_:1},16),rx,cx]),_:1},16)}}},px=R(ux,[["__file","/@slidev/slides/23.md"]]),dx=n("h1",null,"I File",-1),fx=n("p",null,"errno e gli errori in C",-1),mx=n("ul",null,[n("li",null,"Spesso, se non sempre, è utile sapere se una chiamata a funzione è andata a buon fine oppure no"),n("li",null,"Ma ancor più importante, in caso di fallimento, è sapere il motivo per cui la chiamata non è andata a buon fine"),n("li",null,[o("La maggioranza delle funzioni di libreria C, e tutte le system call, in caso di fallimento impostano una speciale variabile chiamata "),n("code",null,"errno"),o(" con un valore che indica il motivo del fallimento")]),n("li",null,"In caso che la chiamata vada a buon fine, il valore di errno non è da considerarsi valido"),n("li",null,[o("Pertanto esaminando il valore di "),n("strong",null,"errno"),o(" un programma può capire il motivo del fallimento dell’ultima chiamata")])],-1),hx={__name:"24",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[dx,fx,mx]),_:1},16))}},_x=R(hx,[["__file","/@slidev/slides/24.md"]]),gx=n("h1",null,"I File",-1),vx=n("p",null,"errno e gli errori in C",-1),kx=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<errno.h>")])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"r"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file: %d\\n"'),n("span",{class:"token punctuation"},","),o(" errno"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("# "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),o("file            ")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),o(),n("span",{class:"token expression"},[o("Impossibile aprire il file"),n("span",{class:"token operator"},":"),o(),n("span",{class:"token number"},"2")])])])])],-1),bx={__name:"25",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[gx,vx,D(a,ve({},{ranges:[""]}),{default:$(()=>[kx]),_:1},16)]),_:1},16)}}},yx=R(bx,[["__file","/@slidev/slides/25.md"]]),wx=n("h1",null,"I File",-1),Ix=n("p",null,"errno e gli errori in C",-1),xx=n("ul",null,[n("li",null,"Quindi ora sappiamo che non è possibile aprire il file e il motivo è rappresentato dal codice 2"),n("li",null,"Ma cosa significa il codice 2?"),n("li",null,[o("Per rispondere questa domanda possiamo legger eil contenuto del file "),n("em",null,"errno.h")]),n("li",null,"Oppure più semplicemente invocare il comando errno in questo modo")],-1),$x=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# errno -l   ")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("EPERM "),n("span",{class:"token number"},"1"),o(" Operazione non permessa")]),o(`
`),n("span",{class:"line"},[o("ENOENT "),n("span",{class:"token number"},"2"),o(" File o directory non esistente")]),o(`
`),n("span",{class:"line"},[o("ESRCH "),n("span",{class:"token number"},"3"),o(" Nessun processo corrisponde")]),o(`
`),n("span",{class:"line"},[o("EINTR "),n("span",{class:"token number"},"4"),o(" Chiamata di sistema interrotta")]),o(`
`),n("span",{class:"line"},[o("EIO "),n("span",{class:"token number"},"5"),o(" Errore di input/output")]),o(`
`),n("span",{class:"line"},[o("ENXIO "),n("span",{class:"token number"},"6"),o(" Device o indirizzo non esistente")]),o(`
`),n("span",{class:"line"},[o("E2BIG "),n("span",{class:"token number"},"7"),o(" Elenco degli argomenti troppo lungo")])])],-1),Ex=n("ul",null,[n("li",null,"Come si può notare il numero 2 significa che il file o la directory che stiamo provando ad aprire non è esistente")],-1),Cx={__name:"26",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[wx,Ix,xx,D(a,ve({},{ranges:[""]}),{default:$(()=>[$x]),_:1},16),Ex]),_:1},16)}}},Fx=R(Cx,[["__file","/@slidev/slides/26.md"]]),Ox=n("h1",null,"I File",-1),Sx=n("p",null,"perror e gli errori in C",-1),Lx=n("ul",null,[n("li",null,"Sarebbe utile accedere alla tabella di mapping tra codice e stringa di error all’interno del nostro codice C"),n("li",null,"La libreria C ci viene in aiuto mettendoci a disposizione la funzione")],-1),Mx=n("p",null,[n("code",null,"void perror(const char *s);")],-1),Tx=n("ul",null,[n("li",null,[o("Questa funzione genera un messaggio di errore, preceduto dal nostro messaggio "),n("strong",null,"s"),o(", che descrive il motivo del fallimento dell’ultima chiamata a funzione")]),n("li",null,"In questo modo possiamo dotare i nostri programmi in C di una miglior gestione degli errori e renderli maggiormente uiser friendly")],-1),Ax={__name:"27",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[Ox,Sx,Lx,Mx,Tx]),_:1},16))}},zx=R(Ax,[["__file","/@slidev/slides/27.md"]]),Px=n("h1",null,"I File",-1),Rx=n("p",null,"perror e gli errori in C",-1),Nx=n("ul",null,[n("li",null,"Trasformiamo il programma precedente in modo che usi la funzione perror")],-1),Dx=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"r"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("# "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),o("file")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),o(),n("span",{class:"token expression"},[o("Impossibile aprire il file"),n("span",{class:"token operator"},":"),o(" No such file or directory")])])])])],-1),Ux=n("ul",null,[n("li",null,"Come si vede ora il messaggio di errore è accurato e fornisce informazioni dettagliate sul motivo del fallimento")],-1),Hx={__name:"28",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[Px,Rx,Nx,D(a,ve({},{ranges:[""]}),{default:$(()=>[Dx]),_:1},16),Ux]),_:1},16)}}},jx=R(Hx,[["__file","/@slidev/slides/28.md"]]),Bx=n("h1",null,"I File",-1),Wx=n("p",null,"Chiusura di un file con fclose",-1),Vx=n("p",null,[n("code",null,"int fclose(FILE *stream)")],-1),Kx=n("ul",null,[n("li",null,[o("Chiude un file puntato da "),n("em",null,"stream")])],-1),qx=n("p",null,"dove:",-1),Gx=n("ul",null,[n("li",null,[n("strong",null,"stream"),o(": il puntatore a file restituito da fopen")])],-1),Yx=n("p",null,"restituisce:",-1),Qx=n("ul",null,[n("li",null,[n("strong",null,"0"),o(": in caso di esecuzione corretta (chiusura del file)")]),n("li",null,[n("strong",null,"EOF"),o(": in caso di fallimento. errno è settato con il codice di errore appropriato")])],-1),Zx={__name:"29",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[Bx,Wx,Vx,Kx,qx,Gx,Yx,Qx]),_:1},16))}},Xx=R(Zx,[["__file","/@slidev/slides/29.md"]]),Jx=n("h1",null,"I File",-1),e2=n("p",null,"Chiusura di un file con fclose",-1),n2=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"r"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token comment"},"//codice che interagisce con il file")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fclose"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token comment"},"// se != 0 c'è un errore")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile chiudere il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},"    "),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),t2={__name:"30",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[Jx,e2,D(a,ve({},{ranges:[""]}),{default:$(()=>[n2]),_:1},16)]),_:1},16)}}},s2=R(t2,[["__file","/@slidev/slides/30.md"]]),i2=n("h1",null,"I File",-1),o2=n("p",null,"Output formattato su file con fprintf",-1),a2=n("p",null,[n("code",null,"int fprintf(FILE *stream, const char *format, ...);")],-1),l2=n("p",null,"dove:",-1),r2=n("ul",null,[n("li",null,[n("p",null,[n("strong",null,"stream"),o(": puntatore a file restituito da fopen")])]),n("li",null,[n("p",null,"Questa funzione va utilizzata esattamente come printf, ma anzichè stampare un output formattato su schermo lo scrive su file")]),n("li",null,[n("p",null,"Ovviamente il file va aperto in scrittura")])],-1),c2={__name:"31",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[i2,o2,a2,l2,r2]),_:1},16))}},u2=R(c2,[["__file","/@slidev/slides/31.md"]]),p2=n("h1",null,"I File",-1),d2=n("p",null,"Output formattato su file con fprintf",-1),f2=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"w"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"fprintf"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"Linea di testo #1\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"fprintf"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"Linea di testo #2\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"fprintf"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"Linea di testo #...\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"fprintf"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"Linea di testo #N\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},"    "),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fclose"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile chiudere il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"File test.txt generato correttamente\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),m2={__name:"32",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[p2,d2,D(a,ve({},{ranges:[""]}),{default:$(()=>[f2]),_:1},16)]),_:1},16)}}},h2=R(m2,[["__file","/@slidev/slides/32.md"]]),_2=n("h1",null,"I File",-1),g2=n("p",null,"Output formattato su file con fprintf",-1),v2=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# ./file            ")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# File test.txt generato correttamente")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# more test.txt")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("Linea di testo "),n("span",{class:"token comment"},"#1")]),o(`
`),n("span",{class:"line"},[o("Linea di testo "),n("span",{class:"token comment"},"#2")]),o(`
`),n("span",{class:"line"},[o("Linea di testo "),n("span",{class:"token comment"},"#...")]),o(`
`),n("span",{class:"line"},[o("Linea di testo "),n("span",{class:"token comment"},"#N")])])],-1),k2=n("ul",null,[n("li",null,"Come si può facilemnte notare, i 4 fprintf non hanno stampato nulla sullo schermo ma scritto 4 linee di testo nel file test.txt"),n("li",null,"Mentre l’ultimo printf ha stampato un messaggio su schermo ma non ha modificato il file"),n("li",null,[o("Il file test.txt non era esistente ed è stato creato siccome abbiamo aperto il file in modalità "),n("strong",null,"w")]),n("li",null,"Se il file test.txt era già esistente sarebbe stato completamente sovrascritto dall’esecuzione del programma")],-1),b2={__name:"33",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[_2,g2,D(a,ve({},{ranges:[""]}),{default:$(()=>[v2]),_:1},16),k2]),_:1},16)}}},y2=R(b2,[["__file","/@slidev/slides/33.md"]]),w2=n("h1",null,"I File",-1),I2=n("p",null,"Output formattato su file con fprintf",-1),x2=n("ul",null,[n("li",null,"Proviamo ora a scrivere un output formattato su file")],-1),$2=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"w"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"fprintf"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"LE TABELLINE\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"fprintf"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"------------\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),o(" i "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),o(" i "),n("span",{class:"token operator"},"<"),o(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},";"),o(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),o(" j "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),o(" j "),n("span",{class:"token operator"},"<"),o(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},";"),o(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("            "),n("span",{class:"token function"},"fprintf"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"%d x %d = %d\\n"'),n("span",{class:"token punctuation"},","),o(" i"),n("span",{class:"token punctuation"},","),o(" j"),n("span",{class:"token punctuation"},","),o(" i "),n("span",{class:"token operator"},"*"),o(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"fprintf"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"------------\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fclose"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile chiudere il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"File test.txt generato correttamente\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),E2={__name:"34",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[w2,I2,x2,D(a,ve({},{ranges:[""]}),{default:$(()=>[$2]),_:1},16)]),_:1},16)}}},C2=R(E2,[["__file","/@slidev/slides/34.md"]]),F2=n("h1",null,"I File",-1),O2=n("p",null,"Output formattato su file con fprintf",-1),S2=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# ./file                                      ")]),o(`
`),n("span",{class:"line"},"File test.txt generato correttamente"),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# more test.txt  ")]),o(`
`),n("span",{class:"line"},"LE TABELLINE"),o(`
`),n("span",{class:"line"},"------------"),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1"),o(" x "),n("span",{class:"token number"},"1"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"1")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1"),o(" x "),n("span",{class:"token number"},"2"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"2")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},".."),o(".")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1"),o(" x "),n("span",{class:"token number"},"10"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"10")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2"),o(" x "),n("span",{class:"token number"},"1"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"2")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2"),o(" x "),n("span",{class:"token number"},"2"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"4")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},".."),o(".")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2"),o(" x "),n("span",{class:"token number"},"10"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"20")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},".."),o(".")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4"),o(" x "),n("span",{class:"token number"},"5"),o(),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"20")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},".."),o(".")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},".."),o(".")])])],-1),L2={__name:"35",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[F2,O2,D(a,ve({},{ranges:[""]}),{default:$(()=>[S2]),_:1},16)]),_:1},16)}}},M2=R(L2,[["__file","/@slidev/slides/35.md"]]),T2=n("h1",null,"I File",-1),A2=n("p",null,"Esercizio file_01",-1),z2=n("ul",null,[n("li",null,"Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file"),n("li",null,"Per il nome del file usare un percorso assoluto"),n("li",null,[o("Consegnare il file con nome: "),n("em",null,"|cognome|_file_01.c")])],-1),P2=n("p",null,"Output",-1),R2=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# ./_file01 && more test.txt")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# ./_file01 &&  more test.txt")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"22")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# ./_file01 &&  more test.txt")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"53")])])],-1),N2={__name:"36",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[T2,A2,z2,P2,D(a,ve({},{ranges:[""]}),{default:$(()=>[R2]),_:1},16)]),_:1},16)}}},D2=R(N2,[["__file","/@slidev/slides/36.md"]]),U2=n("h1",null,"I File",-1),H2=n("p",null,"Esercizio file_02",-1),j2=n("ul",null,[n("li",null,"Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file in coda ai numeri precedenti"),n("li",null,"Per il nome del file usare un percorso relativo"),n("li",null,[o("Consegnare il file con nome: "),n("em",null,"|cognome|_file_02.c")])],-1),B2=n("p",null,"Output",-1),W2=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# ./_file02 &&  more test.txt")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# ./_file02 &&  more test.txt")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"22")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# ./_file02 &&  more test.txt")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"22")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"53")])])],-1),V2={__name:"37",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[U2,H2,j2,B2,D(a,ve({},{ranges:[""]}),{default:$(()=>[W2]),_:1},16)]),_:1},16)}}},K2=R(V2,[["__file","/@slidev/slides/37.md"]]),q2=n("h1",null,"I File",-1),G2=n("p",null,"Esercizio file_03",-1),Y2=n("ul",null,[n("li",null,"Scrivere un programma in C, che letto da linea di comando il nome, il cognome, età e il numero di telefono di un utente lo scrive su un file, in coda ai record precedenti, in formato CSV"),n("li",null,[o("Consegnare il file con nome: "),n("em",null,"|cognome|_file_03.c")])],-1),Q2=n("p",null,"Output",-1),Z2=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# ./_file03 &&  more test.csv")]),o(`
`),n("span",{class:"line"},"Mario,Rossi,32,3786543213"),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# ./_file03 &&  more test.csv")]),o(`
`),n("span",{class:"line"},"Mario,Rossi,32,3786543213"),o(`
`),n("span",{class:"line"},"Giuseppe,Verdi,45,3217864286"),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# ./_file03 &&  more test.csv")]),o(`
`),n("span",{class:"line"},"Mario,Rossi,32,3786543213"),o(`
`),n("span",{class:"line"},"Giuseppe,Verdi,45,3217864286"),o(`
`),n("span",{class:"line"},"Mirko,Bianchi,63,3984368763")])],-1),X2={__name:"38",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[q2,G2,Y2,Q2,D(a,ve({},{ranges:[""]}),{default:$(()=>[Z2]),_:1},16)]),_:1},16)}}},J2=R(X2,[["__file","/@slidev/slides/38.md"]]),e$=n("h1",null,"I File",-1),n$=n("p",null,"Lettura formattata di un file con fscanf",-1),t$=n("p",null,[n("code",null,"int fscanf(FILE *stream, const char *format, ...);")],-1),s$=n("p",null,"dove:",-1),i$=n("ul",null,[n("li",null,[n("p",null,[n("strong",null,"stream"),o(": è il file pointer restituito da fopen")])]),n("li",null,[n("p",null,"Questa funzione si comporta esattamente come scanf, ma anzichè leggere da tastiera, legge un input formattato da file")])],-1),o$={__name:"39",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[e$,n$,t$,s$,i$]),_:1},16))}},a$=R(o$,[["__file","/@slidev/slides/39.md"]]),l$=n("h1",null,"I File",-1),r$=n("p",null,"Lettura formattata di un file con fscanf",-1),c$=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<string.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"define"),o(),n("span",{class:"token macro-name"},"MAX_BUFF"),o(),n("span",{class:"token expression"},[n("span",{class:"token number"},"50")])])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"char"),o(" buff"),n("span",{class:"token punctuation"},"["),o("MAX_BUFF"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"r"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"bzero"),n("span",{class:"token punctuation"},"("),o("buff"),n("span",{class:"token punctuation"},","),o(" MAX_BUFF"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"fscanf"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"%s"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token operator"},"&"),o("buff"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Linea letta da file\\n%s\\n"'),n("span",{class:"token punctuation"},","),o(" buff"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fclose"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile chiudere il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),u$={__name:"40",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[l$,r$,D(a,ve({},{ranges:[""]}),{default:$(()=>[c$]),_:1},16)]),_:1},16)}}},p$=R(u$,[["__file","/@slidev/slides/40.md"]]),d$=n("h1",null,"I File",-1),f$=n("p",null,"Lettura formattata di un file con fscanf",-1),m$=n("ul",null,[n("li",null,"Eseguiamo il programma leggendo il seguente file di test")],-1),h$=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},"Linea1"),o(`
`),n("span",{class:"line"},"Linea2"),o(`
`),n("span",{class:"line"},"Linea3")])],-1),_$=n("br",null,null,-1),g$=n("ul",null,[n("li",null,"L’output che otterremo è il seguente")],-1),v$=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# ./file            ")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("Linea letta da "),n("span",{class:"token function"},"file")]),o(`
`),n("span",{class:"line"},"Linea1")])],-1),k$=n("ul",null,[n("li",null,"Come ci aspettavamo solo la prima linea è stata letta."),n("li",null,"Vediamo ora come leggere tutte le linee usando feof")],-1),b$={__name:"41",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[d$,f$,m$,D(a,ve({},{ranges:[""]}),{default:$(()=>[h$]),_:1},16),_$,g$,D(a,ve({},{ranges:[""]}),{default:$(()=>[v$]),_:1},16),k$]),_:1},16)}}},y$=R(b$,[["__file","/@slidev/slides/41.md"]]),w$=n("h1",null,"I File",-1),I$=n("p",null,"Verifica fine file con feof",-1),x$=n("p",null,[n("code",null,"int feof(FILE *stream);")],-1),$$=n("ul",null,[n("li",null,[o("Verifica se il file puntato da "),n("em",null,"stream"),o(" ha raggiunto la fine")]),n("li",null,"In altre parole verifica se è ancora possibile leggere fdati dal file oppure no")],-1),E$=n("p",null,"restituisce:",-1),C$=n("ul",null,[n("li",null,[n("strong",null,"0 (false)"),o(": se il puntatore non ha raggounto la fine del file quindi è ancora possibile leggere")]),n("li",null,[n("strong",null,"1 (true)"),o(": se il puntatore ha raggiunto la fine del file quindi non è più possibile leggere")])],-1),F$={__name:"42",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[w$,I$,x$,$$,E$,C$]),_:1},16))}},O$=R(F$,[["__file","/@slidev/slides/42.md"]]),S$=n("h1",null,"I File",-1),L$=n("p",null,"Verifica fine file con feof",-1),M$=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"r"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"EOF?: %d\\n"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token function"},"feof"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fclose"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile chiudere il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},"    "),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"EOF?: %d\\n"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token function"},"feof"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},"    "),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),T$={__name:"43",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[S$,L$,D(a,ve({},{ranges:[""]}),{default:$(()=>[M$]),_:1},16)]),_:1},16)}}},A$=R(T$,[["__file","/@slidev/slides/43.md"]]),z$=n("h1",null,"I File",-1),P$=n("p",null,"Verifica fine file con feof",-1),R$=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# ./file            ")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("EOF?: "),n("span",{class:"token number"},"0"),o(" //il "),n("span",{class:"token function"},"file"),o(" non ha raggiunto la fine")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("EOF?: "),n("span",{class:"token number"},"1"),o(" //il "),n("span",{class:"token function"},"file"),o(" ha raggiunto la fine")])])],-1),N$=n("img",{src:tp,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),D$={__name:"44",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[z$,P$,D(a,ve({},{ranges:[""]}),{default:$(()=>[R$]),_:1},16),N$]),_:1},16)}}},U$=R(D$,[["__file","/@slidev/slides/44.md"]]),H$=n("h1",null,"I File",-1),j$=n("p",null,"Lettura formattata di un file con fscanf",-1),B$=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<string.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"define"),o(),n("span",{class:"token macro-name"},"MAX_BUFF"),o(),n("span",{class:"token expression"},[n("span",{class:"token number"},"50")])])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"char"),o(" buff"),n("span",{class:"token punctuation"},"["),o("MAX_BUFF"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},"    "),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token comment"},"//codice di apertura del file")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Linee lette da file\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"feof"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"bzero"),n("span",{class:"token punctuation"},"("),o("buff"),n("span",{class:"token punctuation"},","),o(" MAX_BUFF"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"fscanf"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"%s"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token operator"},"&"),o("buff"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%s\\n"'),n("span",{class:"token punctuation"},","),o(" buff"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fclose"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile chiudere il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),W$={__name:"45",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[H$,j$,D(a,ve({},{ranges:[""]}),{default:$(()=>[B$]),_:1},16)]),_:1},16)}}},V$=R(W$,[["__file","/@slidev/slides/45.md"]]),K$=n("h1",null,"I File",-1),q$=n("p",null,"Lettura formattata di un file con fscanf",-1),G$=n("ul",null,[n("li",null,"Eseguiamo il programma leggendo il seguente file di test")],-1),Y$=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},"Linea1"),o(`
`),n("span",{class:"line"},"Linea2"),o(`
`),n("span",{class:"line"},"Linea3")])],-1),Q$=n("br",null,null,-1),Z$=n("ul",null,[n("li",null,"L’output che otterremo è il seguente")],-1),X$=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# ./file            ")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("Linee lette da "),n("span",{class:"token function"},"file")]),o(`
`),n("span",{class:"line"},"Linea1"),o(`
`),n("span",{class:"line"},"Linea2"),o(`
`),n("span",{class:"line"},"Linea3")])],-1),J$=n("ul",null,[n("li",null,"Quindi in questo caso tutte le linee del file sono state correttamente lette")],-1),eE={__name:"46",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[K$,q$,G$,D(a,ve({},{ranges:[""]}),{default:$(()=>[Y$]),_:1},16),Q$,Z$,D(a,ve({},{ranges:[""]}),{default:$(()=>[X$]),_:1},16),J$]),_:1},16)}}},nE=R(eE,[["__file","/@slidev/slides/46.md"]]),tE=n("h1",null,"I File",-1),sE=n("p",null,"Esercizio file_04",-1),iE=n("ul",null,[n("li",null,"Scrivere un programma in C, che legga un file con 4 colonne separate da uno spazio")],-1),oE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[o("Mario Rossi "),n("span",{class:"token number"},"32"),o(),n("span",{class:"token number"},"3786543213")]),o(`
`),n("span",{class:"line"},[o("Giuseppe Verdi "),n("span",{class:"token number"},"45"),o(),n("span",{class:"token number"},"3217864286")]),o(`
`),n("span",{class:"line"},[o("Mirko Bianchi "),n("span",{class:"token number"},"63"),o(),n("span",{class:"token number"},"3984368763")])])],-1),aE={__name:"47",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[tE,sE,iE,D(a,ve({},{ranges:[""]}),{default:$(()=>[oE]),_:1},16)]),_:1},16)}}},lE=R(aE,[["__file","/@slidev/slides/47.md"]]),rE=n("h1",null,"I File",-1),cE=n("p",null,"Esercizio file_04",-1),uE=n("ul",null,[n("li",null,"Il programma deve generare il seguente output:")],-1),pE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"### Utente 1 ###")]),o(`
`),n("span",{class:"line"},"Nome:     Mario"),o(`
`),n("span",{class:"line"},"Cognome:  Rossi"),o(`
`),n("span",{class:"line"},[o("Età:      "),n("span",{class:"token number"},"32")]),o(`
`),n("span",{class:"line"},[o("Telefono: "),n("span",{class:"token number"},"3786543213")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},".."),o(".")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},".."),o(".")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"### Utente 3 ###")]),o(`
`),n("span",{class:"line"},"Nome:     Mirko"),o(`
`),n("span",{class:"line"},"Cognome:  Bianchi"),o(`
`),n("span",{class:"line"},[o("Età:      "),n("span",{class:"token number"},"63")]),o(`
`),n("span",{class:"line"},[o("Telefono: "),n("span",{class:"token number"},"3984368763")])])],-1),dE=n("ul",null,[n("li",null,[o("Consegnare il file con nome: "),n("em",null,"|cognome|_file_04.c")])],-1),fE={__name:"48",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[rE,cE,uE,D(a,ve({},{ranges:[""]}),{default:$(()=>[pE]),_:1},16),dE]),_:1},16)}}},mE=R(fE,[["__file","/@slidev/slides/48.md"]]),hE=n("h1",null,"I File",-1),_E=n("p",null,"Esercizio file_05",-1),gE=n("ul",null,[n("li",null,[n("p",null,"Scrivere un programma in C, che legga un file con lo stesso formato dell’esercizio 04")]),n("li",null,[n("p",null,"Il programma deve memorizzare i dati letti di ogni utente in una struttura (array di strutture)")]),n("li",null,[n("p",null,"Il programma deve poi stampare l’ouput come l’esercizio 04, scandendo l’array di strutture")]),n("li",null,[n("p",null,[o("Consegnare il file con nome: "),n("em",null,"|cognome|_file_05.c")])])],-1),vE={__name:"49",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[hE,_E,gE]),_:1},16))}},kE=R(vE,[["__file","/@slidev/slides/49.md"]]),bE=n("h1",null,"I File",-1),yE=n("p",null,"Scrittura di un file binario con fwrite",-1),wE=n("p",null,[n("code",null,"size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);")],-1),IE=n("p",null,[o("fwite scrive "),n("em",null,"nmemb"),o(" record, ciascuno di dimensione "),n("em",null,"size"),o(", sul file puntato da "),n("em",null,"stream")],-1),xE=n("p",null,[o("Il puntatore della posizione all’interno del file viene spostata in avanti di "),n("em",null,"nmemb x size"),o(" byte")],-1),$E=n("p",null,"dove:",-1),EE=n("ul",null,[n("li",null,[n("strong",null,"ptr"),o(": puntatore al buffer di memoria che vogliamo scrivere su file")]),n("li",null,[n("strong",null,"size"),o(": dimensione in byte del singolo record da scrivere")]),n("li",null,[n("strong",null,"nmemb"),o(": numero di record da scrivere sul file")]),n("li",null,[n("strong",null,"stream"),o(": file pointer da utilizzare")])],-1),CE=n("p",null,"restituisce:",-1),FE=n("ul",null,[n("li",null,[n("strong",null,"N"),o(": il numero di record effettivamente scritti su disco")]),n("li",null,[n("strong",null,"0"),o(": in caso di errore o di impossibilità di scrivere i record su file")])],-1),OE={__name:"50",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[bE,yE,wE,IE,xE,$E,EE,CE,FE]),_:1},16))}},SE=R(OE,[["__file","/@slidev/slides/50.md"]]),LE=n("h1",null,"I File",-1),ME=n("p",null,"Scrittura di un file binario con fwrite",-1),TE=n("ul",null,[n("li",null,"E’ importante notare che il buffer utilizzato da fwrite può anche essere un array di caratteri e quindi stringhe"),n("li",null,"Tuttavia fwrite viene prevalentemente utilizzato per scrivere file binari"),n("li",null,"Quindi vediamo un modo per rendere persistenti le strutture dati dei nostri programmi"),n("li",null,"In questo modo ad una successiva esecuzione, il nostro programma potrà leggere i dati da file e processarli"),n("li",null,"La possibilità di scrivere file binari ci permette di realizzare un semplice DB, o meccanismo di persistenza e quindi rendere i nostri programmi più sofisticati e funzionali")],-1),AE={__name:"51",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[LE,ME,TE]),_:1},16))}},zE=R(AE,[["__file","/@slidev/slides/51.md"]]),PE=n("h1",null,"I File",-1),RE=n("p",null,"Scrittura di un file binario con fwrite",-1),NE=n("ul",null,[n("li",null,"Data la seguente struttura vogliamo scrivere un programma che la salvi su disco in formato binario")],-1),DE=n("br",null,null,-1),UE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[o("struct s_studente "),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    char nome"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    char cognome"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    int anni"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    float voto"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),HE={__name:"52",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[PE,RE,NE,DE,D(a,ve({},{ranges:[""]}),{default:$(()=>[UE]),_:1},16)]),_:1},16)}}},jE=R(HE,[["__file","/@slidev/slides/52.md"]]),BE=n("h1",null,"I File",-1),WE=n("p",null,"Scrittura di un file binario con fwrite",-1),VE=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<string.h>")])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"typedef"),o(),n("span",{class:"token keyword"},"struct"),o(),n("span",{class:"token class-name"},"s_studente"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"char"),o(" nome"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"char"),o(" cognome"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"int"),o(" anni"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"float"),o(" voto"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),o(" studente"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    studente alunnno "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token string"},'"Mario"'),n("span",{class:"token punctuation"},",")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token string"},'"Rossi"'),n("span",{class:"token punctuation"},",")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},",")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token number"},"8.5")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},".")])])],-1),KE={__name:"53",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[BE,WE,D(a,ve({},{ranges:[""]}),{default:$(()=>[VE]),_:1},16)]),_:1},16)}}},qE=R(KE,[["__file","/@slidev/slides/53.md"]]),GE=n("h1",null,"I File",-1),YE=n("p",null,"Scrittura di un file binario con fwrite",-1),QE=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"w"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fwrite"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("alunnno"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token keyword"},"sizeof"),n("span",{class:"token punctuation"},"("),o("studente"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),o(" fp"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Errore nella scrittura su file\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"else")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Record salvato correttamente\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fclose"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile chiudere il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),ZE={__name:"54",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[GE,YE,D(a,ve({},{ranges:[""]}),{default:$(()=>[QE]),_:1},16)]),_:1},16)}}},XE=R(ZE,[["__file","/@slidev/slides/54.md"]]),JE=n("h1",null,"I File",-1),e3=n("p",null,"Scrittura di un file binario con fwrite",-1),n3=n("ul",null,[n("li",null,"Eseguiamo ora il programma e verifichiamo il file generato")],-1),t3=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# ./file                                      ")]),o(`
`),n("span",{class:"line"},"Record salvato correttamente"),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#more test.txt ")]),o(`
`),n("span",{class:"line"},"MarioRossA")])],-1),s3=n("ul",null,[n("li",null,"Questo output è molto strano ed infatti è la stampa di un file binario e non di un file testuale")],-1),i3=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# hexdump -C test.txt")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("00000000  4d "),n("span",{class:"token number"},"61"),o(),n("span",{class:"token number"},"72"),o(),n("span",{class:"token number"},"69"),o(" 6f 00 00 00  00 00 00 00 00 00 00 00  "),n("span",{class:"token operator"},"|"),o("Mario"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),o("."),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},[o("00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 "),n("span",{class:"token number"},"52"),o(" 6f  "),n("span",{class:"token operator"},"|"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),o("Ro"),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},[o("00000020  "),n("span",{class:"token number"},"73"),o(),n("span",{class:"token number"},"73"),o(),n("span",{class:"token number"},"69"),o(" 00 00 00 00 00  00 00 00 00 00 00 00 00  "),n("span",{class:"token operator"},"|"),o("ssi"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),o("."),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},[o("00000030  00 00 00 00 00 00 00 00  00 00 00 00 "),n("span",{class:"token number"},"12"),o(" 00 00 00  "),n("span",{class:"token operator"},"|"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},[o("00000040  00 00 08 "),n("span",{class:"token number"},"41"),o("                                       "),n("span",{class:"token operator"},"|"),n("span",{class:"token punctuation"},".."),o(".A"),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},"00000044")])],-1),o3={__name:"55",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[JE,e3,n3,D(a,ve({},{ranges:[""]}),{default:$(()=>[t3]),_:1},16),s3,D(a,ve({},{ranges:[""]}),{default:$(()=>[i3]),_:1},16)]),_:1},16)}}},a3=R(o3,[["__file","/@slidev/slides/55.md"]]),l3=n("h1",null,"I File",-1),r3=n("p",null,"Esercizio file_06",-1),c3=n("ul",null,[n("li",null,"Scrivere un programma in C, che letto da linea di comando il nome di città, la temperatura minima e massima, stampi a video i dati inseriti e li salvi su file binario in coda ai dati gia eventualmente presenti"),n("li",null,[o("Consegnare il file con nome: "),n("em",null,"|cognome|_file_06.c")])],-1),u3={__name:"56",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[l3,r3,c3]),_:1},16))}},p3=R(u3,[["__file","/@slidev/slides/56.md"]]),d3=n("h1",null,"I File",-1),f3=n("p",null,"Lettura di un file binario con fread",-1),m3=n("p",null,[n("code",null," size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);")],-1),h3=n("p",null,"dove:",-1),_3=n("ul",null,[n("li",null,[n("strong",null,"ptr"),o(": puntatore al buffer di memoria che vogliamo scrivere su file")]),n("li",null,[n("strong",null,"size"),o(": dimensione in byte del singolo record da leggere")]),n("li",null,[n("strong",null,"nmemb"),o(": numero di record da leggere da file")]),n("li",null,[n("strong",null,"stream"),o(": file pointer da utilizzare")])],-1),g3=n("p",null,"restituisce:",-1),v3=n("ul",null,[n("li",null,[n("strong",null,"N"),o(": il numero di record effettivamente letti dal disco")]),n("li",null,[n("strong",null,"0"),o(": in caso di errore o di impossibilità nel legegre i record dal file")])],-1),k3={__name:"57",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[d3,f3,m3,h3,_3,g3,v3]),_:1},16))}},b3=R(k3,[["__file","/@slidev/slides/57.md"]]),y3=n("h1",null,"I File",-1),w3=n("p",null,"Lettura di un file binario con fread",-1),I3=n("ul",null,[n("li",null,"Vediamo ora come leggere il file generato precedentemente con fwrite")],-1),x3=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<string.h>")])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"typedef"),o(),n("span",{class:"token keyword"},"struct"),o(),n("span",{class:"token class-name"},"s_studente"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"char"),o(" nome"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"char"),o(" cognome"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"int"),o(" anni"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"float"),o(" voto"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),o(" studente"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    studente alunno"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},"    "),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"r"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},".")])])],-1),$3={__name:"58",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[y3,w3,I3,D(a,ve({},{ranges:[""]}),{default:$(()=>[x3]),_:1},16)]),_:1},16)}}},E3=R($3,[["__file","/@slidev/slides/58.md"]]),C3=n("h1",null,"I File",-1),F3=n("p",null,"Lettura di un file binario con fread",-1),O3=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fread"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("alunno"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token keyword"},"sizeof"),n("span",{class:"token punctuation"},"("),o("studente"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),o(" fp"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Errore nella lettura da file\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"else"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Record letto correttamente\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Nome: %s\\n"'),n("span",{class:"token punctuation"},","),o(" alunno"),n("span",{class:"token punctuation"},"."),o("nome"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Cognome: %s\\n"'),n("span",{class:"token punctuation"},","),o(" alunno"),n("span",{class:"token punctuation"},"."),o("cognome"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Anni: %d\\n"'),n("span",{class:"token punctuation"},","),o(" alunno"),n("span",{class:"token punctuation"},"."),o("anni"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Voto: %.2f\\n"'),n("span",{class:"token punctuation"},","),o(" alunno"),n("span",{class:"token punctuation"},"."),o("voto"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fclose"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile chiudere il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),S3={__name:"59",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[C3,F3,D(a,ve({},{ranges:[""]}),{default:$(()=>[O3]),_:1},16)]),_:1},16)}}},L3=R(S3,[["__file","/@slidev/slides/59.md"]]),M3=n("h1",null,"I File",-1),T3=n("p",null,"Lettura di un file binario con fread",-1),A3=n("ul",null,[n("li",null,"Eseguiamo ora il programmma e vediamo l’output generato")],-1),z3=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# hexdump -C test.txt")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("00000000  4d "),n("span",{class:"token number"},"61"),o(),n("span",{class:"token number"},"72"),o(),n("span",{class:"token number"},"69"),o(" 6f 00 00 00  00 00 00 00 00 00 00 00  "),n("span",{class:"token operator"},"|"),o("Mario"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),o("."),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},[o("00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 "),n("span",{class:"token number"},"52"),o(" 6f  "),n("span",{class:"token operator"},"|"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),o("Ro"),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},[o("00000020  "),n("span",{class:"token number"},"73"),o(),n("span",{class:"token number"},"73"),o(),n("span",{class:"token number"},"69"),o(" 00 00 00 00 00  00 00 00 00 00 00 00 00  "),n("span",{class:"token operator"},"|"),o("ssi"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),o("."),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},[o("00000030  00 00 00 00 00 00 00 00  00 00 00 00 "),n("span",{class:"token number"},"12"),o(" 00 00 00  "),n("span",{class:"token operator"},"|"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},[o("00000040  00 00 08 "),n("span",{class:"token number"},"41"),o("                                       "),n("span",{class:"token operator"},"|"),n("span",{class:"token punctuation"},".."),o(".A"),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},"00000044"),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# ./file")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},"Record letto correttamente"),o(`
`),n("span",{class:"line"},"Nome: Mario"),o(`
`),n("span",{class:"line"},"Cognome: Rossi"),o(`
`),n("span",{class:"line"},[o("Anni: "),n("span",{class:"token number"},"18")]),o(`
`),n("span",{class:"line"},[o("Voto: "),n("span",{class:"token number"},"8.50")])])],-1),P3={__name:"60",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[M3,T3,A3,D(a,ve({},{ranges:[""]}),{default:$(()=>[z3]),_:1},16)]),_:1},16)}}},R3=R(P3,[["__file","/@slidev/slides/60.md"]]),N3=n("h1",null,"I File",-1),D3=n("p",null,"Esercizio file_07",-1),U3=n("ul",null,[n("li",null,"Scrivere un programma in C, che legga il file generato come output del programma 06, e stampi a video il record letto"),n("li",null,[o("Consegnare il file con nome: "),n("em",null,"|cognome|_file_07.c")])],-1),H3={__name:"61",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[N3,D3,U3]),_:1},16))}},j3=R(H3,[["__file","/@slidev/slides/61.md"]]),B3=n("h1",null,"I File",-1),W3=n("p",null,"Persistenza di un array",-1),V3=n("ul",null,[n("li",null,"Vediamo ora come è possibile scrivere e leggere un array su un file"),n("li",null,"In generale è possibile persistere qualsiasi struttura dati (negli esempi precdenti abbiamo visto come salvare e leggere una struct)")],-1),K3=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<string.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"define"),o(),n("span",{class:"token macro-name"},"NUM"),o(),n("span",{class:"token expression"},[n("span",{class:"token number"},"10")])])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"int"),o(" numeri"),n("span",{class:"token punctuation"},"["),o("NUM"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),o(" i "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),o(" i "),n("span",{class:"token operator"},"<"),o(" NUM"),n("span",{class:"token punctuation"},";"),o(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        numeri"),n("span",{class:"token punctuation"},"["),o("i"),n("span",{class:"token punctuation"},"]"),o(),n("span",{class:"token operator"},"="),o(" i "),n("span",{class:"token operator"},"+"),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"w"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")])])],-1),q3={__name:"62",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[B3,W3,V3,D(a,ve({},{ranges:[""]}),{default:$(()=>[K3]),_:1},16)]),_:1},16)}}},G3=R(q3,[["__file","/@slidev/slides/62.md"]]),Y3=n("h1",null,"I File",-1),Q3=n("p",null,"Persistenza di un array",-1),Z3=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),o(" i "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),o(" i "),n("span",{class:"token operator"},"<"),o(" NUM"),n("span",{class:"token punctuation"},";"),o(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fwrite"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("numeri"),n("span",{class:"token punctuation"},"["),o("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token keyword"},"sizeof"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),o(" fp"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("            "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Errore nella scrittura del record!\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token keyword"},"else"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("            "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"numeri[%d] scritto du file\\n"'),n("span",{class:"token punctuation"},","),o(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fclose"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile chiudere il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),X3=n("ul",null,[n("li",null,"Quindi abbiamo scritto 10 record (NUM elementi dell’array)")],-1),J3={__name:"63",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[Y3,Q3,D(a,ve({},{ranges:[""]}),{default:$(()=>[Z3]),_:1},16),X3]),_:1},16)}}},e6=R(J3,[["__file","/@slidev/slides/63.md"]]),n6=n("h1",null,"I File",-1),t6=n("p",null,"Persistenza di un array",-1),s6=n("ul",null,[n("li",null,"Il file generato è il seguente")],-1),i6=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# hexdump -C test.txt")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("00000000  01 00 00 00 02 00 00 00  03 00 00 00 04 00 00 00  "),n("span",{class:"token operator"},"|"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},[o("00000010  05 00 00 00 06 00 00 00  07 00 00 00 08 00 00 00  "),n("span",{class:"token operator"},"|"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},[o("00000020  09 00 00 00 0a 00 00 00                           "),n("span",{class:"token operator"},"|"),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token punctuation"},".."),n("span",{class:"token operator"},"|")]),o(`
`),n("span",{class:"line"},"00000028")])],-1),o6=n("br",null,null,-1),a6=n("ul",null,[n("li",null,"Come mai quest’ordine nel salvare gli elementi dell’array su file? E’ giusto?")],-1),l6={__name:"64",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[n6,t6,s6,D(a,ve({},{ranges:[""]}),{default:$(()=>[i6]),_:1},16),o6,a6]),_:1},16)}}},r6=R(l6,[["__file","/@slidev/slides/64.md"]]),c6=n("h1",null,"I File",-1),u6=n("p",null,"Persistenza di un array",-1),p6=n("ul",null,[n("li",null,"Vediamo come modificare il programma per scrivere tutto l’array in una sola operazione")],-1),d6=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdio.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<stdlib.h>")])]),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),o(),n("span",{class:"token string"},"<string.h>")])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"define"),o(),n("span",{class:"token macro-name"},"NUM"),o(),n("span",{class:"token expression"},[n("span",{class:"token number"},"10")])])]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"int"),o(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("    FILE "),n("span",{class:"token operator"},"*"),o("fp"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},"    "),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"int"),o(" numeri"),n("span",{class:"token punctuation"},"["),o("NUM"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),o(" i "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),o(" i "),n("span",{class:"token operator"},"<"),o(" NUM"),n("span",{class:"token punctuation"},";"),o(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        numeri"),n("span",{class:"token punctuation"},"["),o("i"),n("span",{class:"token punctuation"},"]"),o(),n("span",{class:"token operator"},"="),o(" i "),n("span",{class:"token operator"},"+"),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),o(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),o("fp "),n("span",{class:"token operator"},"="),o(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./test.txt"'),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token string"},'"w"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"=="),o(),n("span",{class:"token constant"},"NULL"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile aprire il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"exit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")])])],-1),f6={__name:"65",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[c6,u6,p6,D(a,ve({},{ranges:[""]}),{default:$(()=>[d6]),_:1},16)]),_:1},16)}}},m6=R(f6,[["__file","/@slidev/slides/65.md"]]),h6=n("h1",null,"I File",-1),_6=n("p",null,"Persistenza di un array",-1),g6=n("pre",{class:"slidev-code language-c"},[n("code",null,[n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fwrite"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"&"),o("numeri"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token keyword"},"sizeof"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"*"),o(" NUM"),n("span",{class:"token punctuation"},","),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),o(" fp"),n("span",{class:"token punctuation"},")"),o(),n("span",{class:"token operator"},"!="),o(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Errore nella scrittura del record!\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"else"),o(),n("span",{class:"token punctuation"},"{")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Array scritto su file\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token punctuation"},"}")]),o(`
`),n("span",{class:"line"},"    "),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fclose"),n("span",{class:"token punctuation"},"("),o("fp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),o(`
`),n("span",{class:"line"},[o("        "),n("span",{class:"token function"},"perror"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Impossibile chiudere il file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[o("    "),n("span",{class:"token keyword"},"return"),o(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";")]),o(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),v6={__name:"66",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[h6,_6,D(a,ve({},{ranges:[""]}),{default:$(()=>[g6]),_:1},16)]),_:1},16)}}},k6=R(v6,[["__file","/@slidev/slides/66.md"]]),b6=n("h1",null,"I File",-1),y6=n("p",null,"Persistenza di un array",-1),w6=n("ul",null,[n("li",null,"Ma quindi che differenza c’è tra le due verisoni del programma?"),n("li",null,"Proviamo ad analizzare i tempi di esecuzione con NUM = 1.000.000")],-1),I6=n("p",null,"100 x 1.000.000 di record da 4 byte (int)",-1),x6=n("p",null,[n("a",{href:"https://gist.github.com/profmancusoa/a4767b804a1b266142b1acfcfcde7037",target:"_blank",rel:"noopener"},"src code")],-1),$6=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"#  time ./file")]),o(`
`),n("span",{class:"line"}),o(`
`),n("span",{class:"line"},[o("Array scritto "),n("span",{class:"token function"},"su"),o(),n("span",{class:"token function"},"file")]),o(`
`),n("span",{class:"line"},[o("./file  "),n("span",{class:"token number"},"5"),o(",50s user "),n("span",{class:"token number"},"1"),o(",08s system "),n("span",{class:"token number"},"99"),o("% cpu "),n("span",{class:"token number"},"6,627"),o(" total")])])],-1),E6={__name:"67",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[b6,y6,w6,I6,x6,D(a,ve({},{ranges:[""]}),{default:$(()=>[$6]),_:1},16)]),_:1},16)}}},C6=R(E6,[["__file","/@slidev/slides/67.md"]]),F6=n("h1",null,"I File",-1),O6=n("p",null,"Persistenza di un array",-1),S6=n("p",null,"100 x 1 record da 4 * 1.000.000 byte (int)",-1),L6=n("p",null,[n("a",{href:"https://gist.github.com/profmancusoa/e8b0e65523b3489d7efa9dea4108f9ea",target:"_blank",rel:"noopener"},"src code")],-1),M6=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# time ./file       ")]),o(`
`),n("span",{class:"line"},[o("Array scritto "),n("span",{class:"token function"},"su"),o(),n("span",{class:"token function"},"file")]),o(`
`),n("span",{class:"line"},[o("./file  "),n("span",{class:"token number"},"0"),o(",01s user "),n("span",{class:"token number"},"0"),o(",63s system "),n("span",{class:"token number"},"94"),o("% cpu "),n("span",{class:"token number"},"0,672"),o(" total")])])],-1),T6=n("ul",null,[n("li",null,"Quindi scrivere 100 record da 4MByte ciascuno è circa 10 volte più veloce che scrivere 100M di record da 4 byte ciascuno")],-1),A6={__name:"68",setup(e){const t={};return S(P),(s,i)=>{const a=we;return b(),T(X,Q(Y(t)),{default:$(()=>[F6,O6,S6,L6,D(a,ve({},{ranges:[""]}),{default:$(()=>[M6]),_:1},16),T6]),_:1},16)}}},z6=R(A6,[["__file","/@slidev/slides/68.md"]]),P6=n("h1",null,"I File",-1),R6=n("p",null,"Persistenza di un array",-1),N6={__name:"69",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[P6,R6]),_:1},16))}},D6=R(N6,[["__file","/@slidev/slides/69.md"]]),U6=n("h1",null,"I File",-1),H6=n("p",null,"Persistenza di un array",-1),j6={__name:"70",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[U6,H6]),_:1},16))}},B6=R(j6,[["__file","/@slidev/slides/70.md"]]),W6=n("h1",null,"I File",-1),V6=n("p",null,"Persistenza di un array",-1),K6={__name:"71",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[W6,V6]),_:1},16))}},q6=R(K6,[["__file","/@slidev/slides/71.md"]]),G6=n("h1",null,"I File",-1),Y6=n("p",null,"Persistenza di un array",-1),Q6={__name:"72",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[G6,Y6]),_:1},16))}},Z6=R(Q6,[["__file","/@slidev/slides/72.md"]]),X6=n("h1",null,"I File",-1),J6=n("p",null,"Persistenza di un array",-1),eC={__name:"73",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[X6,J6]),_:1},16))}},nC=R(eC,[["__file","/@slidev/slides/73.md"]]),tC=n("h1",null,"I File",-1),sC=n("p",null,"Persistenza di un array",-1),iC={__name:"74",setup(e){const t={};return S(P),(s,i)=>(b(),T(X,Q(Y(t)),{default:$(()=>[tC,sC]),_:1},16))}},oC=R(iC,[["__file","/@slidev/slides/74.md"]]),aC=[{path:"1",name:"page-1",component:sy,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"INFORMATICA",as:"2022/2023",version:"1.0.0",title:"I File",slide:{raw:`---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: INFORMATICA
as: 2022/2023
version: '1.0.0'
---  

<!-- http://www.primeeng.it/downloads/materiale%202013/12%20Linguaggio%20C%20-%20Gestione%20di%20file.pdf
https://www.unife.it/scienze/informatica/insegnamenti/programmazione-e-laboratorio/materiale-didattico-anni-precedenti/materiale-didattico-a-a-2016-17/diapositive/120-file-di-testo
https://lia.disi.unibo.it/Courses/FondT-0910-ELT/materiale/10.file.pdf
https://www.freecodecamp.org/italian/news/gestione-dei-file-in-c-come-aprire-chiudere-e-scrivere-su-file/
http://www.diit.unict.it/users/mpalesi/COURSES/LDI_02-03/DISPENSE/files.pdf -->

<!-- gist -->
<!-- fopen: https://gist.github.com/profmancusoa/b925aa12bd9baaabe4f8eb5161cb73f2 -->
<!-- fclose https://gist.github.com/profmancusoa/c75eff492742b57461ec796f9c29dc66 -->
<!-- fprintf https://gist.github.com/profmancusoa/0cf0c214ded614e4f39ec827457e074e -->
<!-- fscanf https://gist.github.com/profmancusoa/2d708a308d7e6ab8fd3273f63a8e60a1 -->
<!-- fwrite https://gist.github.com/profmancusoa/06cb6ac48e97e11bb08773df6a4bcf5a -->
<!-- fread https://gist.github.com/profmancusoa/7179a3d913de2303b14b076f6eb87b6d -->
<!-- persist array https://gist.github.com/profmancusoa/1efa0c3cde1e38fd8b0a9bfe05b4c669 -->
<!-- persist array2 https://gist.github.com/profmancusoa/39f5fc4a9845a5762db38fb34b564787 -->





# I File

I/O e gestione dei File

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>


`,title:"I File",level:1,content:`<!-- http://www.primeeng.it/downloads/materiale%202013/12%20Linguaggio%20C%20-%20Gestione%20di%20file.pdf
https://www.unife.it/scienze/informatica/insegnamenti/programmazione-e-laboratorio/materiale-didattico-anni-precedenti/materiale-didattico-a-a-2016-17/diapositive/120-file-di-testo
https://lia.disi.unibo.it/Courses/FondT-0910-ELT/materiale/10.file.pdf
https://www.freecodecamp.org/italian/news/gestione-dei-file-in-c-come-aprire-chiudere-e-scrivere-su-file/
http://www.diit.unict.it/users/mpalesi/COURSES/LDI_02-03/DISPENSE/files.pdf -->

<!-- gist -->
<!-- fopen: https://gist.github.com/profmancusoa/b925aa12bd9baaabe4f8eb5161cb73f2 -->
<!-- fclose https://gist.github.com/profmancusoa/c75eff492742b57461ec796f9c29dc66 -->
<!-- fprintf https://gist.github.com/profmancusoa/0cf0c214ded614e4f39ec827457e074e -->
<!-- fscanf https://gist.github.com/profmancusoa/2d708a308d7e6ab8fd3273f63a8e60a1 -->
<!-- fwrite https://gist.github.com/profmancusoa/06cb6ac48e97e11bb08773df6a4bcf5a -->
<!-- fread https://gist.github.com/profmancusoa/7179a3d913de2303b14b076f6eb87b6d -->
<!-- persist array https://gist.github.com/profmancusoa/1efa0c3cde1e38fd8b0a9bfe05b4c669 -->
<!-- persist array2 https://gist.github.com/profmancusoa/39f5fc4a9845a5762db38fb34b564787 -->





# I File

I/O e gestione dei File

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"INFORMATICA",as:"2022/2023",version:"1.0.0",title:"I File"},index:0,start:0,end:50,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:uy,meta:{slide:{raw:`
# I File

Introduzione

- Ogni programma in C che abbiamo scritto fino ad ora manipola dati e strutture dati presenti solamente nella memoria RAM
- Ciò significa che i dati manipolati dal nostro programma non sono persistenti, cioò sono *volatili*
- In altre parole ogni esecuzione di un programma in C NON ha acesso ai dati generati dall'esecuzioni precedenti
- Quindi i dati generati e gestiti dal programma sono disponibili solo durante l'esecuzione a runtime dello stesso
- Una volta che il programma termina tutto il contenuto della RAM del processo viene rilasciato e non più disponibile (in Linux le pagine allocate al processo sono cancellate)
- Anche in caso in cui manchi l'alimentazione al computer tutti i dati del programma in esecuzione vengono irremediabilmente persi

`,title:"I File",level:1,content:`# I File

Introduzione

- Ogni programma in C che abbiamo scritto fino ad ora manipola dati e strutture dati presenti solamente nella memoria RAM
- Ciò significa che i dati manipolati dal nostro programma non sono persistenti, cioò sono *volatili*
- In altre parole ogni esecuzione di un programma in C NON ha acesso ai dati generati dall'esecuzioni precedenti
- Quindi i dati generati e gestiti dal programma sono disponibili solo durante l'esecuzione a runtime dello stesso
- Una volta che il programma termina tutto il contenuto della RAM del processo viene rilasciato e non più disponibile (in Linux le pagine allocate al processo sono cancellate)
- Anche in caso in cui manchi l'alimentazione al computer tutti i dati del programma in esecuzione vengono irremediabilmente persi`,frontmatter:{},index:1,start:51,end:64,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:gy,meta:{slide:{raw:`
# I File

Introduzione

- Per poter mantenere disponibili i dati tra le diverse esecuzioni di un programma è necessario rendere i dati stessi **persistenti**
- Il modo più facile per rendere i dati di un programma persistenti è l'archiviazione su memoria di massa
  - HDD
  - SSD
  - SD card
  - flashcard
  - ...

<img src="/media/files_01.png" width="550" style="position:relative;top: -8rem; left:15rem;"/>
`,title:"I File",level:1,content:`# I File

Introduzione

- Per poter mantenere disponibili i dati tra le diverse esecuzioni di un programma è necessario rendere i dati stessi **persistenti**
- Il modo più facile per rendere i dati di un programma persistenti è l'archiviazione su memoria di massa
  - HDD
  - SSD
  - SD card
  - flashcard
  - ...

<img src="/media/files_01.png" width="550" style="position:relative;top: -8rem; left:15rem;"/>`,frontmatter:{},index:2,start:65,end:80,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:$y,meta:{slide:{raw:`
# I File

Introduzione


<img src="/media/files_02.png" width="300" style="position:relative;top: 3rem; left:35rem;"/>
<img src="/media/files_03.png" width="500" style="position:relative;top: -12rem; left:0rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione


<img src="/media/files_02.png" width="300" style="position:relative;top: 3rem; left:35rem;"/>
<img src="/media/files_03.png" width="500" style="position:relative;top: -12rem; left:0rem;"/>`,frontmatter:{},index:3,start:81,end:91,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:My,meta:{slide:{raw:`
# I File

Introduzione

<div style="width: 60%;">

- Al fine di poter archiviare dei dati sulla memoria di massa, il sistema operativo mette a disposizione il concetto di **file**
- Un file è una astrazione fornita dal sistema operativo, il cui scopo è consentire la memorizzazione di informazioni su memoria di massa.
- Il file è  **l'unita logica di memorizzazione** dei dati su memoria di massa, che consente una memorizzazione persistente dei dati, non limitata dalle dimensioni della memoria centrale.
- Un file si può anche considerare come **un insieme di record correlati tra loro** (ossia un insieme di informazioni strutturate e organizzate in un archivio)

</div>

<img src="/media/files_04.png" width="350" style="position:relative;top: -15rem; left:33rem;"/>
`,title:"I File",level:1,content:`# I File

Introduzione

<div style="width: 60%;">

- Al fine di poter archiviare dei dati sulla memoria di massa, il sistema operativo mette a disposizione il concetto di **file**
- Un file è una astrazione fornita dal sistema operativo, il cui scopo è consentire la memorizzazione di informazioni su memoria di massa.
- Il file è  **l'unita logica di memorizzazione** dei dati su memoria di massa, che consente una memorizzazione persistente dei dati, non limitata dalle dimensioni della memoria centrale.
- Un file si può anche considerare come **un insieme di record correlati tra loro** (ossia un insieme di informazioni strutturate e organizzate in un archivio)

</div>

<img src="/media/files_04.png" width="350" style="position:relative;top: -15rem; left:33rem;"/>`,frontmatter:{},index:4,start:92,end:108,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Hy,meta:{slide:{raw:`
# I File

Introduzione

- I file vengono distinti in due categorie:
  - \`file di testo\`: trattati come sequenze di caratteri e organizzati in linee (ciascuna terminata da '\\n')
  
  - \`file binari\`: visti come sequenze di byte

<img src="/media/files_05.png" width="400" style="position:relative;top: 1rem; left:-2rem;"/>
<img src="/media/files_06.png" width="500" style="position:relative;top: -12rem; left:25rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione

- I file vengono distinti in due categorie:
  - \`file di testo\`: trattati come sequenze di caratteri e organizzati in linee (ciascuna terminata da '\\n')
  
  - \`file binari\`: visti come sequenze di byte

<img src="/media/files_05.png" width="400" style="position:relative;top: 1rem; left:-2rem;"/>
<img src="/media/files_06.png" width="500" style="position:relative;top: -12rem; left:25rem;"/>`,frontmatter:{},index:5,start:109,end:123,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Gy,meta:{slide:{raw:`
# I File

Introduzione

- I **file di testo** sono file di caratteri, organizzati in linee
- Ogni linea e\` terminata da una marca di fine linea (newline, carattere '\\n')
- \`Il record logico può essere il singolo carattere, la parola, oppure la linea\`


<img src="/media/files_07.png" width="650" style="position:relative;top: 2rem; left:7rem;"/>
`,title:"I File",level:1,content:`# I File

Introduzione

- I **file di testo** sono file di caratteri, organizzati in linee
- Ogni linea e\` terminata da una marca di fine linea (newline, carattere '\\n')
- \`Il record logico può essere il singolo carattere, la parola, oppure la linea\`


<img src="/media/files_07.png" width="650" style="position:relative;top: 2rem; left:7rem;"/>`,frontmatter:{},index:6,start:124,end:136,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:nw,meta:{slide:{raw:`
# I File

Introduzione

- I **file di binari** sono file di byte con un organizzazione puramente sequenziale
- Non c'è una suddivisione in linee e pertanto non c'è un terminatore di linea (\\n)
- \`Il record logico è il singolo byte\`
  
<img src="/media/files_08.png" width="600" style="position:relative;top: 3rem; left:7rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione

- I **file di binari** sono file di byte con un organizzazione puramente sequenziale
- Non c'è una suddivisione in linee e pertanto non c'è un terminatore di linea (\\n)
- \`Il record logico è il singolo byte\`
  
<img src="/media/files_08.png" width="600" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:7,start:137,end:149,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:rw,meta:{slide:{raw:`
# I File

Introduzione

- In genere i file hanno una struttura sequenziale, cioè:
  - i record logici sono organizzati in una sequenza rigidamente ordinata
  - per accedere ad un particolare record logico, è necessario "scorrere" tutti quelli che lo precedono

<img src="/media/files_10.png" width="550" style="position:relative;top: 3rem; left:10rem;"/>
`,title:"I File",level:1,content:`# I File

Introduzione

- In genere i file hanno una struttura sequenziale, cioè:
  - i record logici sono organizzati in una sequenza rigidamente ordinata
  - per accedere ad un particolare record logico, è necessario "scorrere" tutti quelli che lo precedono

<img src="/media/files_10.png" width="550" style="position:relative;top: 3rem; left:10rem;"/>`,frontmatter:{},index:8,start:150,end:161,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:hw,meta:{slide:{raw:`
# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Sequenziale**: si accede ai record del file partendo dal primo e scandendo in modo ordinato ogni record. In altre parole per accedere al record N, è ncessario aver prima letto tutti gli N-1 record precedenti

<img src="/media/files_09.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Sequenziale**: si accede ai record del file partendo dal primo e scandendo in modo ordinato ogni record. In altre parole per accedere al record N, è ncessario aver prima letto tutti gli N-1 record precedenti

<img src="/media/files_09.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>`,frontmatter:{},index:9,start:162,end:173,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:ww,meta:{slide:{raw:`
# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Casuale o Diretto**: nel caso di record aventi tutti la stessa lunghezza, è possibile leggere un record alla posizione N indipendentemente dal record letto precedentemente. In altre parole per accedere al record N **NON** è necessario dover leggere tutti quelli precedenti

<img src="/media/files_09a.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Casuale o Diretto**: nel caso di record aventi tutti la stessa lunghezza, è possibile leggere un record alla posizione N indipendentemente dal record letto precedentemente. In altre parole per accedere al record N **NON** è necessario dover leggere tutti quelli precedenti

<img src="/media/files_09a.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>`,frontmatter:{},index:10,start:174,end:185,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Cw,meta:{slide:{raw:`
# I File

I file in C

- Come abbiamo già visto, il linguaggio C non mette a disposizione nessuna istruzione di Input/Output
- Le operazioni di I/O (printf e scanf) sono definite e fornite dalla libreria standard stdio.h 
- Questa libreria, in modo analogo alle funzioni di I/O per il terminale, mette a disposizione le funzioni per la lettura/scrittura dei file sul disco in modo indipendente dalle caratteristiche proprie dei dispositivi fisici
- Infatti useremo le stesse funzioni di libreria sia per scrivere su un disco HDD che su uno SSD anche se profondamente diversi a livello fisico
- Ciò è possibile poichè il sistema di I/O del C è caratterizzato da un’interfaccia indipendente dal dispositivo effettivo che si interpone tra il programmatore e il dispositivo stesso

`,title:"I File",level:1,content:`# I File

I file in C

- Come abbiamo già visto, il linguaggio C non mette a disposizione nessuna istruzione di Input/Output
- Le operazioni di I/O (printf e scanf) sono definite e fornite dalla libreria standard stdio.h 
- Questa libreria, in modo analogo alle funzioni di I/O per il terminale, mette a disposizione le funzioni per la lettura/scrittura dei file sul disco in modo indipendente dalle caratteristiche proprie dei dispositivi fisici
- Infatti useremo le stesse funzioni di libreria sia per scrivere su un disco HDD che su uno SSD anche se profondamente diversi a livello fisico
- Ciò è possibile poichè il sistema di I/O del C è caratterizzato da un’interfaccia indipendente dal dispositivo effettivo che si interpone tra il programmatore e il dispositivo stesso`,frontmatter:{},index:11,start:186,end:198,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Mw,meta:{slide:{raw:`
# I File

I file in C

- La libreria standard del C mette a disposizioni specifiche funzioni per effettuare le principali attività sui file:
  - **Apertura di un file**: Prima di poter accedere ad un file è necessario aprirlo, cioè è necessario creare un collegamento logico, che permette di accedere ai record del file presente su disco
  - **Chiusura di un file**: rilascia le risorse allocate e chiude il collegamento logico precedentemente creato
  - **Lettura da file**: permette di leggere i record presenti nel file e di trasferirli nella memoria centrale
  - **Scrittura su file**: permette di scrivere i recorc su un file trasferendoli dalla memoria centrale a quella di massa
  - **Posizionamento in un file**: permette di accedere in modo diretto ai record di un file 
`,title:"I File",level:1,content:`# I File

I file in C

- La libreria standard del C mette a disposizioni specifiche funzioni per effettuare le principali attività sui file:
  - **Apertura di un file**: Prima di poter accedere ad un file è necessario aprirlo, cioè è necessario creare un collegamento logico, che permette di accedere ai record del file presente su disco
  - **Chiusura di un file**: rilascia le risorse allocate e chiude il collegamento logico precedentemente creato
  - **Lettura da file**: permette di leggere i record presenti nel file e di trasferirli nella memoria centrale
  - **Scrittura su file**: permette di scrivere i recorc su un file trasferendoli dalla memoria centrale a quella di massa
  - **Posizionamento in un file**: permette di accedere in modo diretto ai record di un file`,frontmatter:{},index:12,start:199,end:211,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Qw,meta:{slide:{raw:`
# I File

I file in C

- In C un file è identificato da un \`puntatore a file\` che punta ad una struttura datri contenente tutte le informazioni necessarie ad integragire ocn il file stesso
- In altre parole, il **puntatore a file** è il collegamento logico che viene creato in fase di *apertura del file*

\`\`\`c
struct _IO_FILE {
  int _flags;           /* High-order word is _IO_MAGIC; rest is flags. */
  char *_IO_read_ptr;   /* Current read pointer */
  char *_IO_read_end;   /* End of get area. */
  char *_IO_read_base;  /* Start of putback+get area. */
  char *_IO_write_base; /* Start of put area. */
  char *_IO_write_ptr;  /* Current put pointer. */
  ...
  ...
  ...
  int _fileno;
  int _mode;
};

typedef struct _IO_FILE FILE;
\`\`\`
`,title:"I File",level:1,content:`# I File

I file in C

- In C un file è identificato da un \`puntatore a file\` che punta ad una struttura datri contenente tutte le informazioni necessarie ad integragire ocn il file stesso
- In altre parole, il **puntatore a file** è il collegamento logico che viene creato in fase di *apertura del file*

\`\`\`c
struct _IO_FILE {
  int _flags;           /* High-order word is _IO_MAGIC; rest is flags. */
  char *_IO_read_ptr;   /* Current read pointer */
  char *_IO_read_end;   /* End of get area. */
  char *_IO_read_base;  /* Start of putback+get area. */
  char *_IO_write_base; /* Start of put area. */
  char *_IO_write_ptr;  /* Current put pointer. */
  ...
  ...
  ...
  int _fileno;
  int _mode;
};

typedef struct _IO_FILE FILE;
\`\`\``,frontmatter:{},index:13,start:212,end:238,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:oI,meta:{slide:{raw:`
# I File


I file in C

- Il puntatore a file è una variabile che viene utilizzata per indirizzare un file durante le operazioni di accesso (lettura e scrittura.)
- Esso contiene, tra l'altro: 
  - il file
  - l'elemento corrente all'interno della sequenza
- Il puntatore viene dichiarato nel seguente modo

<br>

\`\`\`c
#include <stdio.h>

FILE *fp;
\`\`\`

<br>

- Questo puntatore è utilizzato da tutte le funzione che leggomno e scrivono sul file
- E' importante, alla fine delle operazioni sul file, chiudere e quindi rilasciare il puntatore al file
- Ciò è necessario per rilasciare, in modo corretto, le risorse allocate (memoria, ...) durante l'apertura del file
  
`,title:"I File",level:1,content:`# I File


I file in C

- Il puntatore a file è una variabile che viene utilizzata per indirizzare un file durante le operazioni di accesso (lettura e scrittura.)
- Esso contiene, tra l'altro: 
  - il file
  - l'elemento corrente all'interno della sequenza
- Il puntatore viene dichiarato nel seguente modo

<br>

\`\`\`c
#include <stdio.h>

FILE *fp;
\`\`\`

<br>

- Questo puntatore è utilizzato da tutte le funzione che leggomno e scrivono sul file
- E' importante, alla fine delle operazioni sul file, chiudere e quindi rilasciare il puntatore al file
- Ciò è necessario per rilasciare, in modo corretto, le risorse allocate (memoria, ...) durante l'apertura del file`,frontmatter:{},index:14,start:239,end:266,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:dI,meta:{slide:{raw:`
# I File

I file in C

Le principali funzioni per gestire i file in C sono:

| **Funzione** | **Descrizione**                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| \`fopen\`      | apre un file dato il suo nome e restituisce un puntatore ad esso                                                                        |
| \`flcose\`     | chiude un file, scrivendo su disco eventuali dati in cache e restituisce le risorse allocate                                            |
| \`fprintf\`    | scrive un output su un file. Dal nome è chiaro che si comporta esattamente come printf, ma anzichè scrivere su terminale scrive su file |
| \`fscanf\`     | esattamente come scanf, permette di leggere un input formattato da file                                                                 |
| \`fread\`      | legge uno o più record da un file                                                                                                       |
| \`fwrite\`     | scrive uno o più record su file                                                                                                         |
| \`fseek\`      | cambia la posizione attuale all'interno del file permettendo l'accesso casuale al file stesso                                           |

- Il manuale di ogni funzione è disponibile digitando \`man <nome funzione>\`
`,title:"I File",level:1,content:"# I File\n\nI file in C\n\nLe principali funzioni per gestire i file in C sono:\n\n| **Funzione** | **Descrizione**                                                                                                                         |\n| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |\n| `fopen`      | apre un file dato il suo nome e restituisce un puntatore ad esso                                                                        |\n| `flcose`     | chiude un file, scrivendo su disco eventuali dati in cache e restituisce le risorse allocate                                            |\n| `fprintf`    | scrive un output su un file. Dal nome è chiaro che si comporta esattamente come printf, ma anzichè scrivere su terminale scrive su file |\n| `fscanf`     | esattamente come scanf, permette di leggere un input formattato da file                                                                 |\n| `fread`      | legge uno o più record da un file                                                                                                       |\n| `fwrite`     | scrive uno o più record su file                                                                                                         |\n| `fseek`      | cambia la posizione attuale all'interno del file permettendo l'accesso casuale al file stesso                                           |\n\n- Il manuale di ogni funzione è disponibile digitando `man <nome funzione>`",frontmatter:{},index:15,start:267,end:286,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:wI,meta:{slide:{raw:`
# I File

Apertura di un file con fopen

\`FILE *fopen(const char *pathname, const char *mode);\`

- Apre un file di nome *pathname* in modalità *mode*

dove: 
- **pathname**: percorco relativo o assoluto del file. Include il nome del file
- **mode**: modalità di apertura del file secondo la seguente tabella (vedi prossima slide)

restituisce:
  - **NULL**: in caso di errore di apertura del file (es: file non esistente)
  - **FILE \\***: puntatore al file appena aperto

`,title:"I File",level:1,content:`# I File

Apertura di un file con fopen

\`FILE *fopen(const char *pathname, const char *mode);\`

- Apre un file di nome *pathname* in modalità *mode*

dove: 
- **pathname**: percorco relativo o assoluto del file. Include il nome del file
- **mode**: modalità di apertura del file secondo la seguente tabella (vedi prossima slide)

restituisce:
  - **NULL**: in caso di errore di apertura del file (es: file non esistente)
  - **FILE \\***: puntatore al file appena aperto`,frontmatter:{},index:16,start:287,end:305,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:CI,meta:{slide:{raw:`
# I File

Apertura di un file con fopen


| **mode** | **Descrizione**                                                            | **Note**                                       |
| -------- | -------------------------------------------------------------------------- | ---------------------------------------------- |
| \`r\`      | apre il file in sola lettura                                               | Il puntatore è posizionato all'inizio del file |
| \`r+\`     | apre il file in lettura e scrittura                                        | Il puntatore è posizionato all'inizio del file |
| \`w\`      | crea o sovrascrive un file in scrittura                                    | Il puntatore è posizionato all'inizio del file |
| \`w+\`     | crea o sovrascrive un file in scrittura e lettura                          | Il puntatore è posizionato all'inizio del file |
| \`a\`      | apre il file in scrittura se esiste o lo crera in caso contrario           | Il puntatore è posizionato alla file del file  |
| \`a+\`     | apre il file in scrittura e lettura se esiste o lo crera in caso contrario | Il puntatore è posizionato alla file del file  |

`,title:"I File",level:1,content:"# I File\n\nApertura di un file con fopen\n\n\n| **mode** | **Descrizione**                                                            | **Note**                                       |\n| -------- | -------------------------------------------------------------------------- | ---------------------------------------------- |\n| `r`      | apre il file in sola lettura                                               | Il puntatore è posizionato all'inizio del file |\n| `r+`     | apre il file in lettura e scrittura                                        | Il puntatore è posizionato all'inizio del file |\n| `w`      | crea o sovrascrive un file in scrittura                                    | Il puntatore è posizionato all'inizio del file |\n| `w+`     | crea o sovrascrive un file in scrittura e lettura                          | Il puntatore è posizionato all'inizio del file |\n| `a`      | apre il file in scrittura se esiste o lo crera in caso contrario           | Il puntatore è posizionato alla file del file  |\n| `a+`     | apre il file in scrittura e lettura se esiste o lo crera in caso contrario | Il puntatore è posizionato alla file del file  |",frontmatter:{},index:17,start:306,end:322,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:AI,meta:{slide:{raw:`
# I File

I file in C

mode: **r** e **r+**

- se il file è esistente 
- apre il file e posiziona il puntatore all'inizio del file (primo record)

<img src="/media/files_11.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>

`,title:"I File",level:1,content:`# I File

I file in C

mode: **r** e **r+**

- se il file è esistente 
- apre il file e posiziona il puntatore all'inizio del file (primo record)

<img src="/media/files_11.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:18,start:323,end:336,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:jI,meta:{slide:{raw:`
# I File

I file in C

mode: **w** e **w+**

- se il file è esistente
- apre il file in scrittura e posiziona il puntatore all'inizio del file (primo record)
- cancella il contenuto del file esistente e viene riscritto
  
<img src="/media/files_12.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>

`,title:"I File",level:1,content:`# I File

I file in C

mode: **w** e **w+**

- se il file è esistente
- apre il file in scrittura e posiziona il puntatore all'inizio del file (primo record)
- cancella il contenuto del file esistente e viene riscritto
  
<img src="/media/files_12.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:19,start:337,end:351,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:QI,meta:{slide:{raw:`
# I File

I file in C

mode: **a** e **a+**

- apr eil file e posiziona il puntatore alla fine del file (ultimo record)
- se il file è esistente il suo contenuto non viene perso e i nuovi dati sono aggiunti in coda (**append**)
  
<img src="/media/files_13.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>

`,title:"I File",level:1,content:`# I File

I file in C

mode: **a** e **a+**

- apr eil file e posiziona il puntatore alla fine del file (ultimo record)
- se il file è esistente il suo contenuto non viene perso e i nuovi dati sono aggiunti in coda (**append**)
  
<img src="/media/files_13.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:20,start:352,end:365,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:sx,meta:{slide:{raw:`
# I File

Apertura di un file con fopen

\`\`\`c
...
FILE *fp; //dichiara il puntatore a file

fp = fopen("/home/antonio/test.txt", "r"); //apre il file in modalità sola lettura

if(fp == NULL) { //se il puntatore è NULL non è stato possibile aprire il file
    printf("Errore nell'apertura del file\\n"); //stampa un messaggio di errore sulla console
    exit(1); //esce dal programma
}
...
\`\`\`

oppure in maniera più concisa

\`\`\`c
FILE *fp; //dichiara il puntatore a file

if((fp = fopen("/home/antonio/test.txt", "r")) == NULL) { //se il puntatore è NULL non è stato possibile aprire il file
    printf("Errore nell'apertura del file\\n"); //stampa un messaggio di errore sulla console
    exit(1); //esce dal programma
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Apertura di un file con fopen

\`\`\`c
...
FILE *fp; //dichiara il puntatore a file

fp = fopen("/home/antonio/test.txt", "r"); //apre il file in modalità sola lettura

if(fp == NULL) { //se il puntatore è NULL non è stato possibile aprire il file
    printf("Errore nell'apertura del file\\n"); //stampa un messaggio di errore sulla console
    exit(1); //esce dal programma
}
...
\`\`\`

oppure in maniera più concisa

\`\`\`c
FILE *fp; //dichiara il puntatore a file

if((fp = fopen("/home/antonio/test.txt", "r")) == NULL) { //se il puntatore è NULL non è stato possibile aprire il file
    printf("Errore nell'apertura del file\\n"); //stampa un messaggio di errore sulla console
    exit(1); //esce dal programma
}
\`\`\``,frontmatter:{},index:21,start:366,end:395,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:px,meta:{slide:{raw:`
# I File

I file in C

- eseguendo questo programma otteniamo

\`\`\`bash
# ./file            

# Impossibile aprire il file

\`\`\`

<br>

- Questo messaggio ci dice che non è stato possibile aprire il file
- Tuttavia non ci fornisce nessuna informazione sul motivo
- La libreria C mette a disposizione un metodo molto facile per conoscere la motivazione del falliemento

`,title:"I File",level:1,content:`# I File

I file in C

- eseguendo questo programma otteniamo

\`\`\`bash
# ./file            

# Impossibile aprire il file

\`\`\`

<br>

- Questo messaggio ci dice che non è stato possibile aprire il file
- Tuttavia non ci fornisce nessuna informazione sul motivo
- La libreria C mette a disposizione un metodo molto facile per conoscere la motivazione del falliemento`,frontmatter:{},index:22,start:396,end:417,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:_x,meta:{slide:{raw:`
# I File

errno e gli errori in C

- Spesso, se non sempre, è utile sapere se una chiamata a funzione è andata a buon fine oppure no
- Ma ancor più importante, in caso di fallimento, è sapere il motivo per cui la chiamata non è andata a buon fine
- La maggioranza delle funzioni di libreria C, e tutte le system call,  in caso di fallimento impostano una speciale variabile chiamata \`errno\` con un valore che indica il motivo del fallimento
- In caso che la chiamata vada a buon fine, il valore di errno non è da considerarsi valido
- Pertanto esaminando il valore di **errno** un programma può capire il motivo del fallimento dell'ultima chiamata
 
`,title:"I File",level:1,content:`# I File

errno e gli errori in C

- Spesso, se non sempre, è utile sapere se una chiamata a funzione è andata a buon fine oppure no
- Ma ancor più importante, in caso di fallimento, è sapere il motivo per cui la chiamata non è andata a buon fine
- La maggioranza delle funzioni di libreria C, e tutte le system call,  in caso di fallimento impostano una speciale variabile chiamata \`errno\` con un valore che indica il motivo del fallimento
- In caso che la chiamata vada a buon fine, il valore di errno non è da considerarsi valido
- Pertanto esaminando il valore di **errno** un programma può capire il motivo del fallimento dell'ultima chiamata`,frontmatter:{},index:23,start:418,end:430,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:yx,meta:{slide:{raw:`
# I File

errno e gli errori in C


\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        printf("Impossibile aprire il file: %d\\n", errno);
        exit(1);
    }

    return 0;
}

# ./file            

# Impossibile aprire il file: 2 
\`\`\`
`,title:"I File",level:1,content:`# I File

errno e gli errori in C


\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        printf("Impossibile aprire il file: %d\\n", errno);
        exit(1);
    }

    return 0;
}

# ./file            

# Impossibile aprire il file: 2 
\`\`\``,frontmatter:{},index:24,start:431,end:458,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Fx,meta:{slide:{raw:`
# I File

errno e gli errori in C

- Quindi ora sappiamo che non è possibile aprire il file e il motivo è rappresentato dal codice 2
- Ma cosa significa il codice 2?
- Per rispondere  questa domanda possiamo legger eil contenuto del file *errno.h*
- Oppure più semplicemente invocare il comando errno in questo modo

\`\`\`bash
# errno -l   

EPERM 1 Operazione non permessa
ENOENT 2 File o directory non esistente
ESRCH 3 Nessun processo corrisponde
EINTR 4 Chiamata di sistema interrotta
EIO 5 Errore di input/output
ENXIO 6 Device o indirizzo non esistente
E2BIG 7 Elenco degli argomenti troppo lungo
\`\`\`

- Come si può notare il numero 2 significa che il file o la directory che stiamo provando ad aprire non è esistente

`,title:"I File",level:1,content:`# I File

errno e gli errori in C

- Quindi ora sappiamo che non è possibile aprire il file e il motivo è rappresentato dal codice 2
- Ma cosa significa il codice 2?
- Per rispondere  questa domanda possiamo legger eil contenuto del file *errno.h*
- Oppure più semplicemente invocare il comando errno in questo modo

\`\`\`bash
# errno -l   

EPERM 1 Operazione non permessa
ENOENT 2 File o directory non esistente
ESRCH 3 Nessun processo corrisponde
EINTR 4 Chiamata di sistema interrotta
EIO 5 Errore di input/output
ENXIO 6 Device o indirizzo non esistente
E2BIG 7 Elenco degli argomenti troppo lungo
\`\`\`

- Come si può notare il numero 2 significa che il file o la directory che stiamo provando ad aprire non è esistente`,frontmatter:{},index:25,start:459,end:484,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:zx,meta:{slide:{raw:`
# I File

perror e gli errori in C

- Sarebbe utile accedere alla tabella di mapping tra codice e stringa di error all'interno del nostro codice C
- La libreria C ci viene in aiuto mettendoci a disposizione la funzione


\`void perror(const char *s);\`

- Questa funzione genera un messaggio di errore, preceduto dal nostro messaggio **s**, che descrive il motivo del fallimento dell'ultima chiamata a funzione
- In questo modo possiamo dotare i nostri programmi in C di una miglior gestione degli errori e renderli maggiormente uiser friendly
`,title:"I File",level:1,content:`# I File

perror e gli errori in C

- Sarebbe utile accedere alla tabella di mapping tra codice e stringa di error all'interno del nostro codice C
- La libreria C ci viene in aiuto mettendoci a disposizione la funzione


\`void perror(const char *s);\`

- Questa funzione genera un messaggio di errore, preceduto dal nostro messaggio **s**, che descrive il motivo del fallimento dell'ultima chiamata a funzione
- In questo modo possiamo dotare i nostri programmi in C di una miglior gestione degli errori e renderli maggiormente uiser friendly`,frontmatter:{},index:26,start:485,end:499,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:jx,meta:{slide:{raw:`
# I File

perror e gli errori in C

- Trasformiamo il programma precedente in modo che usi la funzione perror

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    return 0;
}

# ./file
# Impossibile aprire il file: No such file or directory
\`\`\`

- Come si vede ora il messaggio di errore è accurato e fornisce informazioni dettagliate sul motivo del fallimento
`,title:"I File",level:1,content:`# I File

perror e gli errori in C

- Trasformiamo il programma precedente in modo che usi la funzione perror

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    return 0;
}

# ./file
# Impossibile aprire il file: No such file or directory
\`\`\`

- Come si vede ora il messaggio di errore è accurato e fornisce informazioni dettagliate sul motivo del fallimento`,frontmatter:{},index:27,start:500,end:527,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Xx,meta:{slide:{raw:`
# I File

Chiusura di un file con fclose

\`int fclose(FILE *stream)\`

- Chiude un file puntato da *stream*

dove: 
- **stream**: il puntatore a file restituito da fopen

restituisce:
  - **0**: in caso di esecuzione corretta (chiusura del file)
  - **EOF**: in caso di fallimento. errno è settato con il codice di errore appropriato

`,title:"I File",level:1,content:`# I File

Chiusura di un file con fclose

\`int fclose(FILE *stream)\`

- Chiude un file puntato da *stream*

dove: 
- **stream**: il puntatore a file restituito da fopen

restituisce:
  - **0**: in caso di esecuzione corretta (chiusura del file)
  - **EOF**: in caso di fallimento. errno è settato con il codice di errore appropriato`,frontmatter:{},index:28,start:528,end:545,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:s2,meta:{slide:{raw:`
# I File

Chiusura di un file con fclose

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    //codice che interagisce con il file

    if(fclose(fp)) // se != 0 c'è un errore
        perror("Impossibile chiudere il file");
    
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Chiusura di un file con fclose

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    //codice che interagisce con il file

    if(fclose(fp)) // se != 0 c'è un errore
        perror("Impossibile chiudere il file");
    
    return 0;
}
\`\`\``,frontmatter:{},index:29,start:546,end:572,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:u2,meta:{slide:{raw:`
# I File

Output formattato su file con fprintf

\`int fprintf(FILE *stream, const char *format, ...);\`

dove:
- **stream**: puntatore a file restituito da fopen

- Questa funzione va utilizzata esattamente come printf, ma anzichè stampare un output formattato su schermo lo scrive su file
- Ovviamente il file va aperto in scrittura
`,title:"I File",level:1,content:`# I File

Output formattato su file con fprintf

\`int fprintf(FILE *stream, const char *format, ...);\`

dove:
- **stream**: puntatore a file restituito da fopen

- Questa funzione va utilizzata esattamente come printf, ma anzichè stampare un output formattato su schermo lo scrive su file
- Ovviamente il file va aperto in scrittura`,frontmatter:{},index:30,start:573,end:586,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:h2,meta:{slide:{raw:`
# I File

Output formattato su file con fprintf

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    fprintf(fp, "Linea di testo #1\\n");
    fprintf(fp, "Linea di testo #2\\n");
    fprintf(fp, "Linea di testo #...\\n");
    fprintf(fp, "Linea di testo #N\\n");
    
    if(fclose(fp))
        perror("Impossibile chiudere il file");

    printf("File test.txt generato correttamente\\n");
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Output formattato su file con fprintf

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    fprintf(fp, "Linea di testo #1\\n");
    fprintf(fp, "Linea di testo #2\\n");
    fprintf(fp, "Linea di testo #...\\n");
    fprintf(fp, "Linea di testo #N\\n");
    
    if(fclose(fp))
        perror("Impossibile chiudere il file");

    printf("File test.txt generato correttamente\\n");
    return 0;
}
\`\`\``,frontmatter:{},index:31,start:587,end:616,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:y2,meta:{slide:{raw:`
# I File

Output formattato su file con fprintf

\`\`\`bash
# ./file            
# File test.txt generato correttamente

# more test.txt

Linea di testo #1
Linea di testo #2
Linea di testo #...
Linea di testo #N
\`\`\`

- Come si può facilemnte notare, i 4 fprintf non hanno stampato nulla sullo schermo ma scritto 4 linee di testo nel file test.txt
- Mentre l'ultimo printf ha stampato un messaggio su schermo ma non ha modificato il file
- Il file test.txt non era esistente ed è stato creato siccome abbiamo aperto il file in modalità **w**
- Se il file test.txt era già esistente sarebbe stato completamente sovrascritto dall'esecuzione del programma
`,title:"I File",level:1,content:`# I File

Output formattato su file con fprintf

\`\`\`bash
# ./file            
# File test.txt generato correttamente

# more test.txt

Linea di testo #1
Linea di testo #2
Linea di testo #...
Linea di testo #N
\`\`\`

- Come si può facilemnte notare, i 4 fprintf non hanno stampato nulla sullo schermo ma scritto 4 linee di testo nel file test.txt
- Mentre l'ultimo printf ha stampato un messaggio su schermo ma non ha modificato il file
- Il file test.txt non era esistente ed è stato creato siccome abbiamo aperto il file in modalità **w**
- Se il file test.txt era già esistente sarebbe stato completamente sovrascritto dall'esecuzione del programma`,frontmatter:{},index:32,start:617,end:639,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:C2,meta:{slide:{raw:`
# I File

Output formattato su file con fprintf

- Proviamo ora a scrivere un output formattato su file

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
int main() {
    FILE *fp;
    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    fprintf(fp, "LE TABELLINE\\n");
    fprintf(fp, "------------\\n");
    for(int i = 1; i < 11; i++)
        for(int j = 1; j < 11; j++)
            fprintf(fp, "%d x %d = %d\\n", i, j, i * j);
    fprintf(fp, "------------\\n");

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    printf("File test.txt generato correttamente\\n");
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Output formattato su file con fprintf

- Proviamo ora a scrivere un output formattato su file

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
int main() {
    FILE *fp;
    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    fprintf(fp, "LE TABELLINE\\n");
    fprintf(fp, "------------\\n");
    for(int i = 1; i < 11; i++)
        for(int j = 1; j < 11; j++)
            fprintf(fp, "%d x %d = %d\\n", i, j, i * j);
    fprintf(fp, "------------\\n");

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    printf("File test.txt generato correttamente\\n");
    return 0;
}
\`\`\``,frontmatter:{},index:33,start:640,end:670,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:M2,meta:{slide:{raw:`
# I File

Output formattato su file con fprintf

\`\`\`bash
# ./file                                      
File test.txt generato correttamente
# more test.txt  
LE TABELLINE
------------
1 x 1 = 1
1 x 2 = 2
...
1 x 10 = 10
2 x 1 = 2
2 x 2 = 4
...
2 x 10 = 20
...
4 x 5 = 20
...
...
\`\`\`
`,title:"I File",level:1,content:`# I File

Output formattato su file con fprintf

\`\`\`bash
# ./file                                      
File test.txt generato correttamente
# more test.txt  
LE TABELLINE
------------
1 x 1 = 1
1 x 2 = 2
...
1 x 10 = 10
2 x 1 = 2
2 x 2 = 4
...
2 x 10 = 20
...
4 x 5 = 20
...
...
\`\`\``,frontmatter:{},index:34,start:671,end:696,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:D2,meta:{slide:{raw:`
# I File

Esercizio file_01

- Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file
- Per il nome del file usare un percorso assoluto
- Consegnare il file con nome: *|cognome|_file_01.c*

Output

\`\`\`bash
# ./_file01 && more test.txt
4

# ./_file01 &&  more test.txt
22

# ./_file01 &&  more test.txt
53
\`\`\`
`,title:"I File",level:1,content:`# I File

Esercizio file_01

- Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file
- Per il nome del file usare un percorso assoluto
- Consegnare il file con nome: *|cognome|_file_01.c*

Output

\`\`\`bash
# ./_file01 && more test.txt
4

# ./_file01 &&  more test.txt
22

# ./_file01 &&  more test.txt
53
\`\`\``,frontmatter:{},index:35,start:697,end:719,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:K2,meta:{slide:{raw:`
# I File

Esercizio file_02

- Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file in coda ai numeri precedenti
- Per il nome del file usare un percorso relativo
- Consegnare il file con nome: *|cognome|_file_02.c*
  
Output

\`\`\`bash
# ./_file02 &&  more test.txt
4

# ./_file02 &&  more test.txt
4
22

# ./_file02 &&  more test.txt
4
22
53
\`\`\`

`,title:"I File",level:1,content:`# I File

Esercizio file_02

- Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file in coda ai numeri precedenti
- Per il nome del file usare un percorso relativo
- Consegnare il file con nome: *|cognome|_file_02.c*
  
Output

\`\`\`bash
# ./_file02 &&  more test.txt
4

# ./_file02 &&  more test.txt
4
22

# ./_file02 &&  more test.txt
4
22
53
\`\`\``,frontmatter:{},index:36,start:720,end:746,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:J2,meta:{slide:{raw:`
# I File

Esercizio file_03

- Scrivere un programma in C, che letto da linea di comando il nome, il cognome, età e il numero di telefono di un utente lo scrive su un file, in coda ai record precedenti, in formato CSV
- Consegnare il file con nome: *|cognome|_file_03.c*

Output

\`\`\`bash
# ./_file03 &&  more test.csv
Mario,Rossi,32,3786543213

# ./_file03 &&  more test.csv
Mario,Rossi,32,3786543213
Giuseppe,Verdi,45,3217864286

# ./_file03 &&  more test.csv
Mario,Rossi,32,3786543213
Giuseppe,Verdi,45,3217864286
Mirko,Bianchi,63,3984368763
\`\`\`
`,title:"I File",level:1,content:`# I File

Esercizio file_03

- Scrivere un programma in C, che letto da linea di comando il nome, il cognome, età e il numero di telefono di un utente lo scrive su un file, in coda ai record precedenti, in formato CSV
- Consegnare il file con nome: *|cognome|_file_03.c*

Output

\`\`\`bash
# ./_file03 &&  more test.csv
Mario,Rossi,32,3786543213

# ./_file03 &&  more test.csv
Mario,Rossi,32,3786543213
Giuseppe,Verdi,45,3217864286

# ./_file03 &&  more test.csv
Mario,Rossi,32,3786543213
Giuseppe,Verdi,45,3217864286
Mirko,Bianchi,63,3984368763
\`\`\``,frontmatter:{},index:37,start:747,end:771,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:a$,meta:{slide:{raw:`
# I File

Lettura formattata di un file con fscanf

\`int fscanf(FILE *stream, const char *format, ...);\`

dove:
- **stream**: è il file pointer restituito da fopen

- Questa funzione si comporta esattamente come scanf, ma anzichè leggere da tastiera, legge un input formattato da file

`,title:"I File",level:1,content:`# I File

Lettura formattata di un file con fscanf

\`int fscanf(FILE *stream, const char *format, ...);\`

dove:
- **stream**: è il file pointer restituito da fopen

- Questa funzione si comporta esattamente come scanf, ma anzichè leggere da tastiera, legge un input formattato da file`,frontmatter:{},index:38,start:772,end:785,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:p$,meta:{slide:{raw:`
# I File

Lettura formattata di un file con fscanf

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_BUFF 50

int main() {
    FILE *fp;
    char buff[MAX_BUFF];

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    bzero(buff, MAX_BUFF);
    fscanf(fp, "%s", &buff[0]);
    printf("Linea letta da file\\n%s\\n", buff);
    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Lettura formattata di un file con fscanf

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_BUFF 50

int main() {
    FILE *fp;
    char buff[MAX_BUFF];

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    bzero(buff, MAX_BUFF);
    fscanf(fp, "%s", &buff[0]);
    printf("Linea letta da file\\n%s\\n", buff);
    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\``,frontmatter:{},index:39,start:786,end:815,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:y$,meta:{slide:{raw:`
# I File

Lettura formattata di un file con fscanf

- Eseguiamo il programma leggendo il seguente file di test

\`\`\`bash
Linea1
Linea2
Linea3
\`\`\`

<br>

- L'output che otterremo è il seguente

\`\`\`bash
# ./file            

Linea letta da file
Linea1
\`\`\`

- Come ci aspettavamo solo la prima linea è stata letta. 
- Vediamo ora come leggere tutte le linee usando feof


`,title:"I File",level:1,content:`# I File

Lettura formattata di un file con fscanf

- Eseguiamo il programma leggendo il seguente file di test

\`\`\`bash
Linea1
Linea2
Linea3
\`\`\`

<br>

- L'output che otterremo è il seguente

\`\`\`bash
# ./file            

Linea letta da file
Linea1
\`\`\`

- Come ci aspettavamo solo la prima linea è stata letta. 
- Vediamo ora come leggere tutte le linee usando feof`,frontmatter:{},index:40,start:816,end:845,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:O$,meta:{slide:{raw:`
# I File

Verifica fine file con feof

\`int feof(FILE *stream);\`

- Verifica se il file puntato da *stream* ha raggiunto la fine
- In altre parole verifica se è ancora possibile leggere fdati dal file oppure no

restituisce:
- **0 (false)**: se il puntatore non ha raggounto la fine del file quindi è ancora possibile leggere
- **1 (true)**: se il puntatore ha raggiunto la fine del file quindi non è più possibile leggere
`,title:"I File",level:1,content:`# I File

Verifica fine file con feof

\`int feof(FILE *stream);\`

- Verifica se il file puntato da *stream* ha raggiunto la fine
- In altre parole verifica se è ancora possibile leggere fdati dal file oppure no

restituisce:
- **0 (false)**: se il puntatore non ha raggounto la fine del file quindi è ancora possibile leggere
- **1 (true)**: se il puntatore ha raggiunto la fine del file quindi non è più possibile leggere`,frontmatter:{},index:41,start:846,end:860,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:A$,meta:{slide:{raw:`
# I File

Verifica fine file con feof

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    printf("EOF?: %d\\n", feof(fp));

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    
    printf("EOF?: %d\\n", feof(fp));
    
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Verifica fine file con feof

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;

    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    printf("EOF?: %d\\n", feof(fp));

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    
    printf("EOF?: %d\\n", feof(fp));
    
    return 0;
}
\`\`\``,frontmatter:{},index:42,start:861,end:889,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:U$,meta:{slide:{raw:`
# I File

Verifica fine file con feof

\`\`\`bash
# ./file            

EOF?: 0 //il file non ha raggiunto la fine

EOF?: 1 //il file ha raggiunto la fine
\`\`\`

<img src="/media/files_11.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>


`,title:"I File",level:1,content:`# I File

Verifica fine file con feof

\`\`\`bash
# ./file            

EOF?: 0 //il file non ha raggiunto la fine

EOF?: 1 //il file ha raggiunto la fine
\`\`\`

<img src="/media/files_11.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:43,start:890,end:907,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:V$,meta:{slide:{raw:`
# I File

Lettura formattata di un file con fscanf

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_BUFF 50

int main() {
    FILE *fp;
    char buff[MAX_BUFF];
    
    //codice di apertura del file

    printf("Linee lette da file\\n");
    while(!feof(fp)) {
        bzero(buff, MAX_BUFF);
        fscanf(fp, "%s", &buff[0]);
        printf("%s\\n", buff);
    }
    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Lettura formattata di un file con fscanf

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_BUFF 50

int main() {
    FILE *fp;
    char buff[MAX_BUFF];
    
    //codice di apertura del file

    printf("Linee lette da file\\n");
    while(!feof(fp)) {
        bzero(buff, MAX_BUFF);
        fscanf(fp, "%s", &buff[0]);
        printf("%s\\n", buff);
    }
    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\``,frontmatter:{},index:44,start:908,end:937,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:nE,meta:{slide:{raw:`
# I File

Lettura formattata di un file con fscanf

- Eseguiamo il programma leggendo il seguente file di test

\`\`\`bash
Linea1
Linea2
Linea3
\`\`\`

<br>

- L'output che otterremo è il seguente

\`\`\`bash
# ./file            

Linee lette da file
Linea1
Linea2
Linea3

\`\`\`

- Quindi in questo caso tutte le linee del file sono state correttamente lette

`,title:"I File",level:1,content:`# I File

Lettura formattata di un file con fscanf

- Eseguiamo il programma leggendo il seguente file di test

\`\`\`bash
Linea1
Linea2
Linea3
\`\`\`

<br>

- L'output che otterremo è il seguente

\`\`\`bash
# ./file            

Linee lette da file
Linea1
Linea2
Linea3

\`\`\`

- Quindi in questo caso tutte le linee del file sono state correttamente lette`,frontmatter:{},index:45,start:938,end:968,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:lE,meta:{slide:{raw:`
# I File

Esercizio file_04

- Scrivere un programma in C, che legga un file con 4 colonne separate da uno spazio


\`\`\`bash
Mario Rossi 32 3786543213
Giuseppe Verdi 45 3217864286
Mirko Bianchi 63 3984368763

\`\`\`
`,title:"I File",level:1,content:`# I File

Esercizio file_04

- Scrivere un programma in C, che legga un file con 4 colonne separate da uno spazio


\`\`\`bash
Mario Rossi 32 3786543213
Giuseppe Verdi 45 3217864286
Mirko Bianchi 63 3984368763

\`\`\``,frontmatter:{},index:46,start:969,end:984,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:mE,meta:{slide:{raw:`
# I File

Esercizio file_04

- Il programma deve generare il seguente output:

\`\`\`bash
### Utente 1 ###
Nome:     Mario
Cognome:  Rossi
Età:      32
Telefono: 3786543213

...
...

### Utente 3 ###
Nome:     Mirko
Cognome:  Bianchi
Età:      63
Telefono: 3984368763
\`\`\`

- Consegnare il file con nome: *|cognome|_file_04.c*

`,title:"I File",level:1,content:`# I File

Esercizio file_04

- Il programma deve generare il seguente output:

\`\`\`bash
### Utente 1 ###
Nome:     Mario
Cognome:  Rossi
Età:      32
Telefono: 3786543213

...
...

### Utente 3 ###
Nome:     Mirko
Cognome:  Bianchi
Età:      63
Telefono: 3984368763
\`\`\`

- Consegnare il file con nome: *|cognome|_file_04.c*`,frontmatter:{},index:47,start:985,end:1012,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:kE,meta:{slide:{raw:`
# I File

Esercizio file_05

- Scrivere un programma in C, che legga un file con lo stesso formato dell'esercizio 04
- Il programma deve memorizzare i dati letti di ogni utente in una struttura (array di strutture)
- Il programma deve poi stampare l'ouput come l'esercizio 04, scandendo l'array di strutture


- Consegnare il file con nome: *|cognome|_file_05.c*
`,title:"I File",level:1,content:`# I File

Esercizio file_05

- Scrivere un programma in C, che legga un file con lo stesso formato dell'esercizio 04
- Il programma deve memorizzare i dati letti di ogni utente in una struttura (array di strutture)
- Il programma deve poi stampare l'ouput come l'esercizio 04, scandendo l'array di strutture


- Consegnare il file con nome: *|cognome|_file_05.c*`,frontmatter:{},index:48,start:1013,end:1025,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:SE,meta:{slide:{raw:`
# I File

Scrittura di un file binario con fwrite

\`size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);\`


fwite scrive *nmemb* record, ciascuno di dimensione *size*, sul file puntato da *stream*

Il puntatore della posizione all'interno del file viene spostata in avanti di *nmemb x size* byte

dove:
- **ptr**: puntatore al buffer di memoria che vogliamo scrivere su file
- **size**: dimensione in byte del singolo record da scrivere
- **nmemb**: numero di record da scrivere sul file
- **stream**: file pointer da utilizzare


restituisce:
- **N**: il numero di record effettivamente scritti su disco
- **0**: in caso di errore o di impossibilità di scrivere i record su file 
`,title:"I File",level:1,content:`# I File

Scrittura di un file binario con fwrite

\`size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);\`


fwite scrive *nmemb* record, ciascuno di dimensione *size*, sul file puntato da *stream*

Il puntatore della posizione all'interno del file viene spostata in avanti di *nmemb x size* byte

dove:
- **ptr**: puntatore al buffer di memoria che vogliamo scrivere su file
- **size**: dimensione in byte del singolo record da scrivere
- **nmemb**: numero di record da scrivere sul file
- **stream**: file pointer da utilizzare


restituisce:
- **N**: il numero di record effettivamente scritti su disco
- **0**: in caso di errore o di impossibilità di scrivere i record su file`,frontmatter:{},index:49,start:1026,end:1049,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:zE,meta:{slide:{raw:`
# I File

Scrittura di un file binario con fwrite

- E' importante notare che il buffer utilizzato da fwrite può anche essere un array di caratteri e quindi stringhe
- Tuttavia fwrite viene prevalentemente utilizzato per scrivere file binari
- Quindi vediamo un modo per rendere persistenti le strutture dati dei nostri programmi
- In questo modo ad una successiva esecuzione, il nostro programma potrà leggere i dati da file e processarli
- La possibilità di scrivere file binari ci permette di realizzare un semplice DB, o meccanismo di persistenza e quindi rendere i nostri programmi più sofisticati e funzionali 

`,title:"I File",level:1,content:`# I File

Scrittura di un file binario con fwrite

- E' importante notare che il buffer utilizzato da fwrite può anche essere un array di caratteri e quindi stringhe
- Tuttavia fwrite viene prevalentemente utilizzato per scrivere file binari
- Quindi vediamo un modo per rendere persistenti le strutture dati dei nostri programmi
- In questo modo ad una successiva esecuzione, il nostro programma potrà leggere i dati da file e processarli
- La possibilità di scrivere file binari ci permette di realizzare un semplice DB, o meccanismo di persistenza e quindi rendere i nostri programmi più sofisticati e funzionali`,frontmatter:{},index:50,start:1050,end:1062,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:jE,meta:{slide:{raw:`
# I File

Scrittura di un file binario con fwrite

- Data la seguente struttura vogliamo scrivere un programma che la salvi su disco in formato binario

<br> 

\`\`\`bash
struct s_studente {
    char nome[30];
    char cognome[30];
    int anni;
    float voto;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Scrittura di un file binario con fwrite

- Data la seguente struttura vogliamo scrivere un programma che la salvi su disco in formato binario

<br> 

\`\`\`bash
struct s_studente {
    char nome[30];
    char cognome[30];
    int anni;
    float voto;
}
\`\`\``,frontmatter:{},index:51,start:1063,end:1081,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:qE,meta:{slide:{raw:`
# I File

Scrittura di un file binario con fwrite

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct s_studente {
    char nome[30];
    char cognome[30];
    int anni;
    float voto;
} studente;

int main() {
    FILE *fp;

    studente alunnno = {
        "Mario",
        "Rossi",
        18,
        8.5
    };
    ...
\`\`\`
`,title:"I File",level:1,content:`# I File

Scrittura di un file binario con fwrite

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct s_studente {
    char nome[30];
    char cognome[30];
    int anni;
    float voto;
} studente;

int main() {
    FILE *fp;

    studente alunnno = {
        "Mario",
        "Rossi",
        18,
        8.5
    };
    ...
\`\`\``,frontmatter:{},index:52,start:1082,end:1111,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:XE,meta:{slide:{raw:`
# I File

Scrittura di un file binario con fwrite

\`\`\`c
    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    if(fwrite(&alunnno, sizeof(studente), 1, fp) != 1)
        printf("Errore nella scrittura su file\\n");
    else
        printf("Record salvato correttamente\\n");

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Scrittura di un file binario con fwrite

\`\`\`c
    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }

    if(fwrite(&alunnno, sizeof(studente), 1, fp) != 1)
        printf("Errore nella scrittura su file\\n");
    else
        printf("Record salvato correttamente\\n");

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\``,frontmatter:{},index:53,start:1112,end:1134,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:a3,meta:{slide:{raw:`
# I File

Scrittura di un file binario con fwrite

- Eseguiamo ora il programma e verifichiamo il file generato

\`\`\`bash
# ./file                                      
Record salvato correttamente

#more test.txt 
MarioRossA

\`\`\`

- Questo output è molto strano ed infatti è la stampa di un file binario e non di un file testuale

\`\`\`bash
# hexdump -C test.txt

00000000  4d 61 72 69 6f 00 00 00  00 00 00 00 00 00 00 00  |Mario...........|
00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 52 6f  |..............Ro|
00000020  73 73 69 00 00 00 00 00  00 00 00 00 00 00 00 00  |ssi.............|
00000030  00 00 00 00 00 00 00 00  00 00 00 00 12 00 00 00  |................|
00000040  00 00 08 41                                       |...A|
00000044
\`\`\`

`,title:"I File",level:1,content:`# I File

Scrittura di un file binario con fwrite

- Eseguiamo ora il programma e verifichiamo il file generato

\`\`\`bash
# ./file                                      
Record salvato correttamente

#more test.txt 
MarioRossA

\`\`\`

- Questo output è molto strano ed infatti è la stampa di un file binario e non di un file testuale

\`\`\`bash
# hexdump -C test.txt

00000000  4d 61 72 69 6f 00 00 00  00 00 00 00 00 00 00 00  |Mario...........|
00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 52 6f  |..............Ro|
00000020  73 73 69 00 00 00 00 00  00 00 00 00 00 00 00 00  |ssi.............|
00000030  00 00 00 00 00 00 00 00  00 00 00 00 12 00 00 00  |................|
00000040  00 00 08 41                                       |...A|
00000044
\`\`\``,frontmatter:{},index:54,start:1135,end:1165,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:p3,meta:{slide:{raw:`
# I File

Esercizio file_06

- Scrivere un programma in C, che letto da linea di comando il nome di città, la temperatura minima e massima, stampi a video i dati inseriti e li salvi su file binario in coda ai dati gia eventualmente presenti
- Consegnare il file con nome: *|cognome|_file_06.c*

`,title:"I File",level:1,content:`# I File

Esercizio file_06

- Scrivere un programma in C, che letto da linea di comando il nome di città, la temperatura minima e massima, stampi a video i dati inseriti e li salvi su file binario in coda ai dati gia eventualmente presenti
- Consegnare il file con nome: *|cognome|_file_06.c*`,frontmatter:{},index:55,start:1166,end:1175,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:b3,meta:{slide:{raw:`
# I File

Lettura di un file binario con fread

\` size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);\`

dove:
- **ptr**: puntatore al buffer di memoria che vogliamo scrivere su file
- **size**: dimensione in byte del singolo record da leggere
- **nmemb**: numero di record da leggere da file
- **stream**: file pointer da utilizzare


restituisce:
- **N**: il numero di record effettivamente letti dal disco
- **0**: in caso di errore o di impossibilità nel legegre i record dal file 
`,title:"I File",level:1,content:`# I File

Lettura di un file binario con fread

\` size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);\`

dove:
- **ptr**: puntatore al buffer di memoria che vogliamo scrivere su file
- **size**: dimensione in byte del singolo record da leggere
- **nmemb**: numero di record da leggere da file
- **stream**: file pointer da utilizzare


restituisce:
- **N**: il numero di record effettivamente letti dal disco
- **0**: in caso di errore o di impossibilità nel legegre i record dal file`,frontmatter:{},index:56,start:1176,end:1194,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:E3,meta:{slide:{raw:`
# I File

Lettura di un file binario con fread

- Vediamo ora come leggere il file generato precedentemente con fwrite

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct s_studente {
    char nome[30];
    char cognome[30];
    int anni;
    float voto;
} studente;

int main() {
    FILE *fp;
    studente alunno;
    
    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    ...
\`\`\`

  `,title:"I File",level:1,content:`# I File

Lettura di un file binario con fread

- Vediamo ora come leggere il file generato precedentemente con fwrite

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct s_studente {
    char nome[30];
    char cognome[30];
    int anni;
    float voto;
} studente;

int main() {
    FILE *fp;
    studente alunno;
    
    if ((fp = fopen("./test.txt", "r")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
    ...
\`\`\``,frontmatter:{},index:57,start:1195,end:1226,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:L3,meta:{slide:{raw:`
# I File

Lettura di un file binario con fread

\`\`\`c
    if(fread(&alunno, sizeof(studente), 1, fp) != 1)
        printf("Errore nella lettura da file\\n");
    else {
        printf("Record letto correttamente\\n");
        printf("Nome: %s\\n", alunno.nome);
        printf("Cognome: %s\\n", alunno.cognome);
        printf("Anni: %d\\n", alunno.anni);
        printf("Voto: %.2f\\n", alunno.voto);
    }

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Lettura di un file binario con fread

\`\`\`c
    if(fread(&alunno, sizeof(studente), 1, fp) != 1)
        printf("Errore nella lettura da file\\n");
    else {
        printf("Record letto correttamente\\n");
        printf("Nome: %s\\n", alunno.nome);
        printf("Cognome: %s\\n", alunno.cognome);
        printf("Anni: %d\\n", alunno.anni);
        printf("Voto: %.2f\\n", alunno.voto);
    }

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\``,frontmatter:{},index:58,start:1227,end:1249,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:R3,meta:{slide:{raw:`
# I File

Lettura di un file binario con fread

- Eseguiamo ora il programmma e vediamo l'output generato

\`\`\`bash
# hexdump -C test.txt

00000000  4d 61 72 69 6f 00 00 00  00 00 00 00 00 00 00 00  |Mario...........|
00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 52 6f  |..............Ro|
00000020  73 73 69 00 00 00 00 00  00 00 00 00 00 00 00 00  |ssi.............|
00000030  00 00 00 00 00 00 00 00  00 00 00 00 12 00 00 00  |................|
00000040  00 00 08 41                                       |...A|
00000044


# ./file

Record letto correttamente
Nome: Mario
Cognome: Rossi
Anni: 18
Voto: 8.50
\`\`\`
`,title:"I File",level:1,content:`# I File

Lettura di un file binario con fread

- Eseguiamo ora il programmma e vediamo l'output generato

\`\`\`bash
# hexdump -C test.txt

00000000  4d 61 72 69 6f 00 00 00  00 00 00 00 00 00 00 00  |Mario...........|
00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 52 6f  |..............Ro|
00000020  73 73 69 00 00 00 00 00  00 00 00 00 00 00 00 00  |ssi.............|
00000030  00 00 00 00 00 00 00 00  00 00 00 00 12 00 00 00  |................|
00000040  00 00 08 41                                       |...A|
00000044


# ./file

Record letto correttamente
Nome: Mario
Cognome: Rossi
Anni: 18
Voto: 8.50
\`\`\``,frontmatter:{},index:59,start:1250,end:1277,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:j3,meta:{slide:{raw:`
# I File

Esercizio file_07

- Scrivere un programma in C, che legga il file generato come output del programma 06, e stampi a video il record letto
- Consegnare il file con nome: *|cognome|_file_07.c*

`,title:"I File",level:1,content:`# I File

Esercizio file_07

- Scrivere un programma in C, che legga il file generato come output del programma 06, e stampi a video il record letto
- Consegnare il file con nome: *|cognome|_file_07.c*`,frontmatter:{},index:60,start:1278,end:1287,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:G3,meta:{slide:{raw:`
# I File

Persistenza di un array 

- Vediamo ora come è possibile scrivere e leggere un array su un file
- In generale è possibile persistere qualsiasi struttura dati (negli esempi precdenti abbiamo visto come salvare e leggere una struct)

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define NUM 10

int main() {
    FILE *fp;
    int numeri[NUM];

    for(int i = 0; i < NUM; i++)
        numeri[i] = i + 1;

    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
\`\`\`
`,title:"I File",level:1,content:`# I File

Persistenza di un array 

- Vediamo ora come è possibile scrivere e leggere un array su un file
- In generale è possibile persistere qualsiasi struttura dati (negli esempi precdenti abbiamo visto come salvare e leggere una struct)

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define NUM 10

int main() {
    FILE *fp;
    int numeri[NUM];

    for(int i = 0; i < NUM; i++)
        numeri[i] = i + 1;

    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
\`\`\``,frontmatter:{},index:61,start:1288,end:1315,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:e6,meta:{slide:{raw:`
# I File

Persistenza di un array 

\`\`\`c
    for(int i = 0; i < NUM; i++) {
        if(fwrite(&numeri[i], sizeof(int), 1, fp) != 1)
            printf("Errore nella scrittura del record!\\n");
        else {
            printf("numeri[%d] scritto du file\\n", i);
        }
    }

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\`

- Quindi abbiamo scritto 10 record (NUM elementi dell'array)
  `,title:"I File",level:1,content:`# I File

Persistenza di un array 

\`\`\`c
    for(int i = 0; i < NUM; i++) {
        if(fwrite(&numeri[i], sizeof(int), 1, fp) != 1)
            printf("Errore nella scrittura del record!\\n");
        else {
            printf("numeri[%d] scritto du file\\n", i);
        }
    }

    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\`

- Quindi abbiamo scritto 10 record (NUM elementi dell'array)`,frontmatter:{},index:62,start:1316,end:1338,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:r6,meta:{slide:{raw:`
# I File

Persistenza di un array 

- Il file generato è il seguente

\`\`\`bash
# hexdump -C test.txt

00000000  01 00 00 00 02 00 00 00  03 00 00 00 04 00 00 00  |................|
00000010  05 00 00 00 06 00 00 00  07 00 00 00 08 00 00 00  |................|
00000020  09 00 00 00 0a 00 00 00                           |........|
00000028

\`\`\`

<br>

- Come mai quest'ordine nel salvare gli elementi dell'array su file? E' giusto?
`,title:"I File",level:1,content:`# I File

Persistenza di un array 

- Il file generato è il seguente

\`\`\`bash
# hexdump -C test.txt

00000000  01 00 00 00 02 00 00 00  03 00 00 00 04 00 00 00  |................|
00000010  05 00 00 00 06 00 00 00  07 00 00 00 08 00 00 00  |................|
00000020  09 00 00 00 0a 00 00 00                           |........|
00000028

\`\`\`

<br>

- Come mai quest'ordine nel salvare gli elementi dell'array su file? E' giusto?`,frontmatter:{},index:63,start:1339,end:1360,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:m6,meta:{slide:{raw:`
# I File

Persistenza di un array 

- Vediamo come modificare il programma per scrivere tutto l'array in una sola operazione

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NUM 10

int main() {
    FILE *fp;
    
    int numeri[NUM];

    for(int i = 0; i < NUM; i++)
        numeri[i] = i + 1;

    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
\`\`\`

`,title:"I File",level:1,content:`# I File

Persistenza di un array 

- Vediamo come modificare il programma per scrivere tutto l'array in una sola operazione

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NUM 10

int main() {
    FILE *fp;
    
    int numeri[NUM];

    for(int i = 0; i < NUM; i++)
        numeri[i] = i + 1;

    if ((fp = fopen("./test.txt", "w")) == NULL) {
        perror("Impossibile aprire il file");
        exit(1);
    }
\`\`\``,frontmatter:{},index:64,start:1361,end:1390,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:k6,meta:{slide:{raw:`
# I File

Persistenza di un array 

\`\`\`c
    if(fwrite(&numeri, sizeof(int) * NUM, 1, fp) != 1)
        printf("Errore nella scrittura del record!\\n");
    else {
        printf("Array scritto su file\\n");
    }
    
    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Persistenza di un array 

\`\`\`c
    if(fwrite(&numeri, sizeof(int) * NUM, 1, fp) != 1)
        printf("Errore nella scrittura del record!\\n");
    else {
        printf("Array scritto su file\\n");
    }
    
    if(fclose(fp))
        perror("Impossibile chiudere il file");
    return 0;
}
\`\`\``,frontmatter:{},index:65,start:1391,end:1409,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:C6,meta:{slide:{raw:`
# I File

Persistenza di un array

- Ma quindi che differenza c'è tra le due verisoni del programma?
- Proviamo ad analizzare i tempi di esecuzione con NUM = 1.000.000 

100 x 1.000.000 di record da 4 byte (int)

[src code](https://gist.github.com/profmancusoa/a4767b804a1b266142b1acfcfcde7037)

\`\`\`bash
#  time ./file

Array scritto su file
./file  5,50s user 1,08s system 99% cpu 6,627 total
\`\`\`
`,title:"I File",level:1,content:`# I File

Persistenza di un array

- Ma quindi che differenza c'è tra le due verisoni del programma?
- Proviamo ad analizzare i tempi di esecuzione con NUM = 1.000.000 

100 x 1.000.000 di record da 4 byte (int)

[src code](https://gist.github.com/profmancusoa/a4767b804a1b266142b1acfcfcde7037)

\`\`\`bash
#  time ./file

Array scritto su file
./file  5,50s user 1,08s system 99% cpu 6,627 total
\`\`\``,frontmatter:{},index:66,start:1410,end:1429,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:z6,meta:{slide:{raw:`
# I File

Persistenza di un array


100 x 1 record da 4 * 1.000.000 byte (int)

[src code](https://gist.github.com/profmancusoa/e8b0e65523b3489d7efa9dea4108f9ea)

\`\`\`bash
# time ./file       
Array scritto su file
./file  0,01s user 0,63s system 94% cpu 0,672 total
\`\`\`

- Quindi scrivere 100 record da 4MByte ciascuno è circa 10 volte più veloce che scrivere 100M di record da 4 byte ciascuno
`,title:"I File",level:1,content:`# I File

Persistenza di un array


100 x 1 record da 4 * 1.000.000 byte (int)

[src code](https://gist.github.com/profmancusoa/e8b0e65523b3489d7efa9dea4108f9ea)

\`\`\`bash
# time ./file       
Array scritto su file
./file  0,01s user 0,63s system 94% cpu 0,672 total
\`\`\`

- Quindi scrivere 100 record da 4MByte ciascuno è circa 10 volte più veloce che scrivere 100M di record da 4 byte ciascuno`,frontmatter:{},index:67,start:1430,end:1448,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:D6,meta:{slide:{raw:`
# I File

Persistenza di un array 
`,title:"I File",level:1,content:`# I File

Persistenza di un array`,frontmatter:{},index:68,start:1449,end:1454,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:B6,meta:{slide:{raw:`
# I File

Persistenza di un array 
`,title:"I File",level:1,content:`# I File

Persistenza di un array`,frontmatter:{},index:69,start:1455,end:1460,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:q6,meta:{slide:{raw:`
# I File

Persistenza di un array 
`,title:"I File",level:1,content:`# I File

Persistenza di un array`,frontmatter:{},index:70,start:1461,end:1466,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:Z6,meta:{slide:{raw:`
# I File

Persistenza di un array 
`,title:"I File",level:1,content:`# I File

Persistenza di un array`,frontmatter:{},index:71,start:1467,end:1472,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:nC,meta:{slide:{raw:`
# I File

Persistenza di un array 
`,title:"I File",level:1,content:`# I File

Persistenza di un array`,frontmatter:{},index:72,start:1473,end:1478,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:oC,meta:{slide:{raw:`
# I File

Persistenza di un array `,title:"I File",level:1,content:`# I File

Persistenza di un array`,frontmatter:{},index:73,start:1479,end:1483,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",component:qb,meta:{layout:"end"}}],qe=aC,Ds=[{name:"play",path:"/",component:hk,children:[...qe]},{name:"print",path:"/print",component:Wb},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!Ns.remote||Ns.remote===t.query.password)return!0;if(Ns.remote&&t.query.password===void 0){const s=prompt("Enter password");if(Ns.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};Ds.push({path:"/presenter/print",component:()=>$t(()=>import("./PresenterPrint-9fea46e0.js"),["assets/PresenterPrint-9fea46e0.js","assets/NoteDisplay-78e14632.js","assets/index-cf43d2e9.js"])}),Ds.push({name:"notes",path:"/notes",component:()=>$t(()=>import("./NotesView-6f5ddeb1.js"),["assets/NotesView-6f5ddeb1.js","assets/NoteDisplay-78e14632.js","assets/index-cf43d2e9.js"]),beforeEnter:e}),Ds.push({name:"presenter",path:"/presenter/:no",component:()=>$t(()=>import("./Presenter-06fb296b.js"),["assets/Presenter-06fb296b.js","assets/NoteDisplay-78e14632.js","assets/DrawingControls-96edf271.js","assets/index-cf43d2e9.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),Ds.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Et=Ug({history:D_("/INFORMATICA/3/files/"),routes:Ds});function lC(e,t,{mode:s="replace"}={}){return M({get(){const i=Et.currentRoute.value.query[e];return i==null?t??null:Array.isArray(i)?i.filter(Boolean):i},set(i){zn(()=>{Et[w(s)]({query:{...Et.currentRoute.value.query,[e]:i}})})}})}const sp=le(0);zn(()=>{Et.afterEach(async()=>{await zn(),sp.value+=1})});const ip=le(0),Nn=M(()=>Et.currentRoute.value),ys=M(()=>Nn.value.query.print!==void 0),rC=M(()=>Nn.value.query.print==="clicks"),nt=M(()=>Nn.value.query.embedded!==void 0),Tn=M(()=>Nn.value.path.startsWith("/presenter")),GC=M(()=>Nn.value.path.startsWith("/notes")),op=M(()=>ys.value&&!rC.value),ua=M(()=>Nn.value.query.password),cC=M(()=>!Tn.value&&(!Me.remote||ua.value===Me.remote)),Dr=lC("clicks","0"),ap=M(()=>qe.length-1),uC=M(()=>Nn.value.path),Qe=M(()=>parseInt(uC.value.split(/\//g).slice(-1)[0])||1);M(()=>Ga(Qe.value));const cn=M(()=>qe.find(e=>e.path===`${Qe.value}`));M(()=>{var e,t,s;return(s=(t=(e=cn.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:s.id});M(()=>{var e,t;return((t=(e=cn.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Qe.value===1?"cover":"default")});const Oo=M(()=>qe.find(e=>e.path===`${Math.min(qe.length,Qe.value+1)}`)),pC=M(()=>qe.find(e=>e.path===`${Math.max(1,Qe.value-1)}`)),dC=M(()=>{var e,t;return sp.value,((t=(e=cn.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Xt=M({get(){if(op.value)return 99999;let e=+(Dr.value||0);return isNaN(e)&&(e=0),e},set(e){Dr.value=e.toString()}}),qi=M(()=>{var e,t;return+(((t=(e=cn.value)==null?void 0:e.meta)==null?void 0:t.clicks)??dC.value.length)}),fC=M(()=>Qe.value<qe.length-1||Xt.value<qi.value),mC=M(()=>Qe.value>1||Xt.value>0),hC=M(()=>qe.filter(e=>{var t,s;return(s=(t=e.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((e,t)=>(Ya(e,t),e),[])),_C=M(()=>Qa(hC.value,cn.value));M(()=>Za(_C.value));const gC=M(()=>yC(ip.value,cn.value,pC.value));He(cn,(e,t)=>{ip.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function qt(){qi.value<=Xt.value?Gi():Xt.value+=1}async function Gt(){Xt.value<=0?await Yi():Xt.value-=1}function Ga(e){return Tn.value?`/presenter/${e}`:`/${e}`}function Gi(){const e=Math.min(qe.length,Qe.value+1);return ws(e)}async function Yi(e=!0){const t=Math.max(1,Qe.value-1);await ws(t),e&&qi.value&&Et.replace({query:{...Nn.value.query,clicks:qi.value}})}function ws(e,t){return Et.push({path:Ga(e),query:{...Nn.value.query,clicks:t}})}function vC(e){const t=le(0),{direction:s,distanceX:i,distanceY:a}=t_(e,{onSwipeStart(l){l.pointerType==="touch"&&(ii.value||(t.value=Yo()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||ii.value)return;const r=Math.abs(i.value),c=Math.abs(a.value);r/window.innerWidth>.3||r>100?s.value===it.LEFT?qt():Gt():(c/window.innerHeight>.4||c>200)&&(s.value===it.DOWN?Yi():Gi())}})}async function Ur(){const{saveAs:e}=await $t(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(cu(Me.download)?Me.download:Me.exportFilename?`${Me.exportFilename}.pdf`:"/INFORMATICA/3/files/slidev-exported.pdf",`${Me.title}.pdf`)}async function YC(e){var t,s;if(e==null){const i=(s=(t=cn.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(i!=null&&i.filepath))return!1;e=`${i.filepath}:${i.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ya(e,t,s=1){var a,l,r,c,u;const i=(l=(a=t.meta)==null?void 0:a.slide)==null?void 0:l.level;i&&i>s&&e.length>0?Ya(e[e.length-1].children,t,s+1):e.push({children:[],level:s,path:t.path,hideInToc:Boolean((r=t.meta)==null?void 0:r.hideInToc),title:(u=(c=t.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Qa(e,t,s=!1,i){return e.map(a=>{const l={...a,active:a.path===(t==null?void 0:t.path),hasActiveParent:s};return l.children.length>0&&(l.children=Qa(l.children,t,l.active||l.hasActiveParent,l)),i&&(l.active||l.activeParent)&&(i.activeParent=!0),l})}function Za(e,t=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:Za(s.children,t+1)}))}const kC={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function bC(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:kC[e.name]||e.name;if(s.includes("|")){const[i,a]=s.split("|").map(l=>l.trim());s=t?a:i}if(s)return{...e,name:s}}function yC(e,t,s){var a,l;let i=e>0?(a=s==null?void 0:s.meta)==null?void 0:a.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return i||(i=Me.transition),bC(i,e<0)}export{su as $,fp as A,le as B,DC as C,NC as D,Te as E,Se as F,jC as G,En as H,UC as I,Yr as J,$p as K,pi as L,zn as M,Sa as N,ve as O,Zt as P,ka as Q,$C as R,Qn as S,TC as T,wC as U,op as V,Lm as W,Mm as X,ou as Y,iu as Z,R as _,RC as a,Dt as a$,Fm as a0,SC as a1,LC as a2,MC as a3,FC as a4,OC as a5,Ab as a6,zb as a7,Ur as a8,qt as a9,O1 as aA,x1 as aB,VC as aC,cn as aD,T0 as aE,vC as aF,BC as aG,KC as aH,$ as aI,Wu as aJ,rn as aK,K0 as aL,qi as aM,fC as aN,Oo as aO,ii as aP,Co as aQ,dk as aR,Wa as aS,Va as aT,IC as aU,xC as aV,nk as aW,iv as aX,HC as aY,rt as aZ,As as a_,Gi as aa,YC as ab,Gt as ac,Yi as ad,Nn as ae,CC as af,Is as ag,jd as ah,Hd as ai,Ce as aj,WC as ak,rd as al,n as am,$n as an,di as ao,en as ap,qe as aq,ap as ar,o as as,pe as at,Ra as au,Ve as av,Dn as aw,T as ax,wo as ay,Pu as az,Qe as b,Kn as b0,la as b1,b0 as b2,y0 as b3,w0 as b4,x0 as b5,La as b6,tu as b7,qC as b8,dn as b9,xi as ba,Dv as bb,au as bc,$0 as bd,Me as c,Xt as d,GC as e,Tn as f,Ga as g,je as h,AC as i,S as j,P as k,Qd as l,ne as m,D as n,zC as o,PC as p,b as q,Et as r,nn as s,mi as t,EC as u,$l as v,He as w,M as x,Oa as y,w as z};
