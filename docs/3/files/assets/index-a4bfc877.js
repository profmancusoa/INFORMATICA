(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();function Dt(e,n){const s=Object.create(null),i=e.split(",");for(let o=0;o<i.length;o++)s[i[o]]=!0;return n?o=>!!s[o.toLowerCase()]:o=>!!s[o]}const De=Object.freeze({}),Ss=Object.freeze([]),bn=()=>{},fp=()=>!1,Vm=/^on[^a-z]/,Ri=e=>Vm.test(e),wo=e=>e.startsWith("onUpdate:"),Ue=Object.assign,Yl=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},Bm=Object.prototype.hasOwnProperty,Ce=(e,n)=>Bm.call(e,n),re=Array.isArray,ls=e=>Ni(e)==="[object Map]",mp=e=>Ni(e)==="[object Set]",Wm=e=>Ni(e)==="[object RegExp]",fe=e=>typeof e=="function",Ve=e=>typeof e=="string",Gl=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",Ql=e=>Le(e)&&fe(e.then)&&fe(e.catch),hp=Object.prototype.toString,Ni=e=>hp.call(e),Zl=e=>Ni(e).slice(8,-1),_p=e=>Ni(e)==="[object Object]",Xl=e=>Ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,po=Dt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Km=Dt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Yo=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},qm=/-(\w)/g,tt=Yo(e=>e.replace(qm,(n,s)=>s?s.toUpperCase():"")),Ym=/\B([A-Z])/g,_t=Yo(e=>e.replace(Ym,"-$1").toLowerCase()),hs=Yo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Gt=Yo(e=>e?`on${hs(e)}`:""),bi=(e,n)=>!Object.is(e,n),Zt=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},Io=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},Gm=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Qm=e=>{const n=Ve(e)?Number(e):NaN;return isNaN(n)?e:n};let Gr;const xo=()=>Gr||(Gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nn(e){if(re(e)){const n={};for(let s=0;s<e.length;s++){const i=e[s],o=Ve(i)?eh(i):nn(i);if(o)for(const l in o)n[l]=o[l]}return n}else{if(Ve(e))return e;if(Le(e))return e}}const Zm=/;(?![^(]*\))/g,Xm=/:([^]+)/,Jm=/\/\*[^]*?\*\//g;function eh(e){const n={};return e.replace(Jm,"").split(Zm).forEach(s=>{if(s){const i=s.split(Xm);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function We(e){let n="";if(Ve(e))n=e;else if(re(e))for(let s=0;s<e.length;s++){const i=We(e[s]);i&&(n+=i+" ")}else if(Le(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function Q(e){if(!e)return null;let{class:n,style:s}=e;return n&&!Ve(n)&&(e.class=We(n)),s&&(e.style=nn(s)),e}const nh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",th="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",gp=Dt(nh),sh=Dt(th),ih="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oh=Dt(ih);function vp(e){return!!e||e===""}const kn=e=>Ve(e)?e:e==null?"":re(e)||Le(e)&&(e.toString===hp||!fe(e.toString))?JSON.stringify(e,kp,2):String(e),kp=(e,n)=>n&&n.__v_isRef?kp(e,n.value):ls(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[i,o])=>(s[`${i} =>`]=o,s),{})}:mp(n)?{[`Set(${n.size})`]:[...n.values()]}:Le(n)&&!re(n)&&!_p(n)?String(n):n;function Eo(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let En;class bp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=En,!n&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=En;try{return En=this,n()}finally{En=s}}else Eo("cannot run an inactive effect scope.")}on(){En=this}off(){En=this.parent}stop(n){if(this._active){let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.scopes)for(s=0,i=this.scopes.length;s<i;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function ah(e){return new bp(e)}function lh(e,n=En){n&&n.active&&n.effects.push(e)}function Jl(){return En}function yp(e){En?En.cleanups.push(e):Eo("onScopeDispose() is called when there is no active effect scope to be associated with.")}const er=e=>{const n=new Set(e);return n.w=0,n.n=0,n},wp=e=>(e.w&Pt)>0,Ip=e=>(e.n&Pt)>0,rh=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Pt},ch=e=>{const{deps:n}=e;if(n.length){let s=0;for(let i=0;i<n.length;i++){const o=n[i];wp(o)&&!Ip(o)?o.delete(e):n[s++]=o,o.w&=~Pt,o.n&=~Pt}n.length=s}},$o=new WeakMap;let ni=0,Pt=1;const qa=30;let fn;const rs=Symbol("iterate"),Ya=Symbol("Map key iterate");class nr{constructor(n,s=null,i){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,lh(this,i)}run(){if(!this.active)return this.fn();let n=fn,s=Ot;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=fn,fn=this,Ot=!0,Pt=1<<++ni,ni<=qa?rh(this):Qr(this),this.fn()}finally{ni<=qa&&ch(this),Pt=1<<--ni,fn=this.parent,Ot=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(Qr(this),this.onStop&&this.onStop(),this.active=!1)}}function Qr(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let Ot=!0;const xp=[];function gs(){xp.push(Ot),Ot=!1}function vs(){const e=xp.pop();Ot=e===void 0?!0:e}function rn(e,n,s){if(Ot&&fn){let i=$o.get(e);i||$o.set(e,i=new Map);let o=i.get(s);o||i.set(s,o=er()),Ep(o,{effect:fn,target:e,type:n,key:s})}}function Ep(e,n){let s=!1;ni<=qa?Ip(e)||(e.n|=Pt,s=!wp(e)):s=!e.has(fn),s&&(e.add(fn),fn.deps.push(e),fn.onTrack&&fn.onTrack(Ue({effect:fn},n)))}function st(e,n,s,i,o,l){const r=$o.get(e);if(!r)return;let c=[];if(n==="clear")c=[...r.values()];else if(s==="length"&&re(e)){const p=Number(i);r.forEach((d,f)=>{(f==="length"||f>=p)&&c.push(d)})}else switch(s!==void 0&&c.push(r.get(s)),n){case"add":re(e)?Xl(s)&&c.push(r.get("length")):(c.push(r.get(rs)),ls(e)&&c.push(r.get(Ya)));break;case"delete":re(e)||(c.push(r.get(rs)),ls(e)&&c.push(r.get(Ya)));break;case"set":ls(e)&&c.push(r.get(rs));break}const u={target:e,type:n,key:s,newValue:i,oldValue:o,oldTarget:l};if(c.length===1)c[0]&&Ga(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Ga(er(p),u)}}function Ga(e,n){const s=re(e)?e:[...e];for(const i of s)i.computed&&Zr(i,n);for(const i of s)i.computed||Zr(i,n)}function Zr(e,n){(e!==fn||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ue({effect:e},n)),e.scheduler?e.scheduler():e.run())}function uh(e,n){var s;return(s=$o.get(e))==null?void 0:s.get(n)}const ph=Dt("__proto__,__v_isRef,__isVue"),$p=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Gl)),dh=Go(),fh=Go(!1,!0),mh=Go(!0),hh=Go(!0,!0),Xr=_h();function _h(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const i=ge(this);for(let l=0,r=this.length;l<r;l++)rn(i,"get",l+"");const o=i[n](...s);return o===-1||o===!1?i[n](...s.map(ge)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){gs();const i=ge(this)[n].apply(this,s);return vs(),i}}),e}function gh(e){const n=ge(this);return rn(n,"has",e),n.hasOwnProperty(e)}function Go(e=!1,n=!1){return function(i,o,l){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&l===(e?n?zp:Lp:n?Tp:Fp).get(i))return i;const r=re(i);if(!e){if(r&&Ce(Xr,o))return Reflect.get(Xr,o,l);if(o==="hasOwnProperty")return gh}const c=Reflect.get(i,o,l);return(Gl(o)?$p.has(o):ph(o))||(e||rn(i,"get",o),n)?c:Fe(c)?r&&Xl(o)?c:c.value:Le(c)?e?Bn(c):Be(c):c}}const vh=Cp(),kh=Cp(!0);function Cp(e=!1){return function(s,i,o,l){let r=s[i];if(Rt(r)&&Fe(r)&&!Fe(o))return!1;if(!e&&(!Co(o)&&!Rt(o)&&(r=ge(r),o=ge(o)),!re(s)&&Fe(r)&&!Fe(o)))return r.value=o,!0;const c=re(s)&&Xl(i)?Number(i)<s.length:Ce(s,i),u=Reflect.set(s,i,o,l);return s===ge(l)&&(c?bi(o,r)&&st(s,"set",i,o,r):st(s,"add",i,o)),u}}function bh(e,n){const s=Ce(e,n),i=e[n],o=Reflect.deleteProperty(e,n);return o&&s&&st(e,"delete",n,void 0,i),o}function yh(e,n){const s=Reflect.has(e,n);return(!Gl(n)||!$p.has(n))&&rn(e,"has",n),s}function wh(e){return rn(e,"iterate",re(e)?"length":rs),Reflect.ownKeys(e)}const Op={get:dh,set:vh,deleteProperty:bh,has:yh,ownKeys:wh},Sp={get:mh,set(e,n){return Eo(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0},deleteProperty(e,n){return Eo(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}},Ih=Ue({},Op,{get:fh,set:kh}),xh=Ue({},Sp,{get:hh}),tr=e=>e,Qo=e=>Reflect.getPrototypeOf(e);function qi(e,n,s=!1,i=!1){e=e.__v_raw;const o=ge(e),l=ge(n);s||(n!==l&&rn(o,"get",n),rn(o,"get",l));const{has:r}=Qo(o),c=i?tr:s?sr:yi;if(r.call(o,n))return c(e.get(n));if(r.call(o,l))return c(e.get(l));e!==o&&e.get(n)}function Yi(e,n=!1){const s=this.__v_raw,i=ge(s),o=ge(e);return n||(e!==o&&rn(i,"has",e),rn(i,"has",o)),e===o?s.has(e):s.has(e)||s.has(o)}function Gi(e,n=!1){return e=e.__v_raw,!n&&rn(ge(e),"iterate",rs),Reflect.get(e,"size",e)}function Jr(e){e=ge(e);const n=ge(this);return Qo(n).has.call(n,e)||(n.add(e),st(n,"add",e,e)),this}function ec(e,n){n=ge(n);const s=ge(this),{has:i,get:o}=Qo(s);let l=i.call(s,e);l?Mp(s,i,e):(e=ge(e),l=i.call(s,e));const r=o.call(s,e);return s.set(e,n),l?bi(n,r)&&st(s,"set",e,n,r):st(s,"add",e,n),this}function nc(e){const n=ge(this),{has:s,get:i}=Qo(n);let o=s.call(n,e);o?Mp(n,s,e):(e=ge(e),o=s.call(n,e));const l=i?i.call(n,e):void 0,r=n.delete(e);return o&&st(n,"delete",e,void 0,l),r}function tc(){const e=ge(this),n=e.size!==0,s=ls(e)?new Map(e):new Set(e),i=e.clear();return n&&st(e,"clear",void 0,void 0,s),i}function Qi(e,n){return function(i,o){const l=this,r=l.__v_raw,c=ge(r),u=n?tr:e?sr:yi;return!e&&rn(c,"iterate",rs),r.forEach((p,d)=>i.call(o,u(p),u(d),l))}}function Zi(e,n,s){return function(...i){const o=this.__v_raw,l=ge(o),r=ls(l),c=e==="entries"||e===Symbol.iterator&&r,u=e==="keys"&&r,p=o[e](...i),d=s?tr:n?sr:yi;return!n&&rn(l,"iterate",u?Ya:rs),{next(){const{value:f,done:m}=p.next();return m?{value:f,done:m}:{value:c?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function kt(e){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${hs(e)} operation ${s}failed: target is readonly.`,ge(this))}return e==="delete"?!1:this}}function Eh(){const e={get(l){return qi(this,l)},get size(){return Gi(this)},has:Yi,add:Jr,set:ec,delete:nc,clear:tc,forEach:Qi(!1,!1)},n={get(l){return qi(this,l,!1,!0)},get size(){return Gi(this)},has:Yi,add:Jr,set:ec,delete:nc,clear:tc,forEach:Qi(!1,!0)},s={get(l){return qi(this,l,!0)},get size(){return Gi(this,!0)},has(l){return Yi.call(this,l,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Qi(!0,!1)},i={get(l){return qi(this,l,!0,!0)},get size(){return Gi(this,!0)},has(l){return Yi.call(this,l,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=Zi(l,!1,!1),s[l]=Zi(l,!0,!1),n[l]=Zi(l,!1,!0),i[l]=Zi(l,!0,!0)}),[e,s,n,i]}const[$h,Ch,Oh,Sh]=Eh();function Zo(e,n){const s=n?e?Sh:Oh:e?Ch:$h;return(i,o,l)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(Ce(s,o)&&o in i?s:i,o,l)}const Mh={get:Zo(!1,!1)},Fh={get:Zo(!1,!0)},Th={get:Zo(!0,!1)},Lh={get:Zo(!0,!0)};function Mp(e,n,s){const i=ge(s);if(i!==s&&n.call(e,i)){const o=Zl(e);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Fp=new WeakMap,Tp=new WeakMap,Lp=new WeakMap,zp=new WeakMap;function zh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ah(e){return e.__v_skip||!Object.isExtensible(e)?0:zh(Zl(e))}function Be(e){return Rt(e)?e:Xo(e,!1,Op,Mh,Fp)}function Ph(e){return Xo(e,!1,Ih,Fh,Tp)}function Bn(e){return Xo(e,!0,Sp,Th,Lp)}function ti(e){return Xo(e,!0,xh,Lh,zp)}function Xo(e,n,s,i,o){if(!Le(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(n&&e.__v_isReactive))return e;const l=o.get(e);if(l)return l;const r=Ah(e);if(r===0)return e;const c=new Proxy(e,r===2?i:s);return o.set(e,c),c}function cs(e){return Rt(e)?cs(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function Co(e){return!!(e&&e.__v_isShallow)}function Oo(e){return cs(e)||Rt(e)}function ge(e){const n=e&&e.__v_raw;return n?ge(n):e}function Jo(e){return Io(e,"__v_skip",!0),e}const yi=e=>Le(e)?Be(e):e,sr=e=>Le(e)?Bn(e):e;function ir(e){Ot&&fn&&(e=ge(e),Ep(e.dep||(e.dep=er()),{target:e,type:"get",key:"value"}))}function or(e,n){e=ge(e);const s=e.dep;s&&Ga(s,{target:e,type:"set",key:"value",newValue:n})}function Fe(e){return!!(e&&e.__v_isRef===!0)}function G(e){return Ap(e,!1)}function it(e){return Ap(e,!0)}function Ap(e,n){return Fe(e)?e:new Rh(e,n)}class Rh{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:ge(n),this._value=s?n:yi(n)}get value(){return ir(this),this._value}set value(n){const s=this.__v_isShallow||Co(n)||Rt(n);n=s?n:ge(n),bi(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:yi(n),or(this,n))}}function S(e){return Fe(e)?e.value:e}const Nh={get:(e,n,s)=>S(Reflect.get(e,n,s)),set:(e,n,s,i)=>{const o=e[n];return Fe(o)&&!Fe(s)?(o.value=s,!0):Reflect.set(e,n,s,i)}};function Pp(e){return cs(e)?e:new Proxy(e,Nh)}class jh{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:i}=n(()=>ir(this),()=>or(this));this._get=s,this._set=i}get value(){return this._get()}set value(n){this._set(n)}}function ar(e){return new jh(e)}function Dh(e){Oo(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=re(e)?new Array(e.length):{};for(const s in e)n[s]=Rp(e,s);return n}class Hh{constructor(n,s,i){this._object=n,this._key=s,this._defaultValue=i,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return uh(ge(this._object),this._key)}}class Uh{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Vh(e,n,s){return Fe(e)?e:fe(e)?new Uh(e):Le(e)&&arguments.length>1?Rp(e,n,s):G(e)}function Rp(e,n,s){const i=e[n];return Fe(i)?i:new Hh(e,n,s)}class Bh{constructor(n,s,i,o){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new nr(n,()=>{this._dirty||(this._dirty=!0,or(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=i}get value(){const n=ge(this);return ir(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Wh(e,n,s=!1){let i,o;const l=fe(e);l?(i=e,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(i=e.get,o=e.set);const r=new Bh(i,o,l||!o,s);return n&&!s&&(r.effect.onTrack=n.onTrack,r.effect.onTrigger=n.onTrigger),r}const us=[];function fo(e){us.push(e)}function mo(){us.pop()}function U(e,...n){gs();const s=us.length?us[us.length-1].component:null,i=s&&s.appContext.config.warnHandler,o=Kh();if(i)ht(i,s,11,[e+n.join(""),s&&s.proxy,o.map(({vnode:l})=>`at <${ca(s,l.type)}>`).join(`
`),o]);else{const l=[`[Vue warn]: ${e}`,...n];o.length&&l.push(`
`,...qh(o)),console.warn(...l)}vs()}function Kh(){let e=us[us.length-1];if(!e)return[];const n=[];for(;e;){const s=n[0];s&&s.vnode===e?s.recurseCount++:n.push({vnode:e,recurseCount:0});const i=e.component&&e.component.parent;e=i&&i.vnode}return n}function qh(e){const n=[];return e.forEach((s,i)=>{n.push(...i===0?[]:[`
`],...Yh(s))}),n}function Yh({vnode:e,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",i=e.component?e.component.parent==null:!1,o=` at <${ca(e.component,e.type,i)}`,l=">"+s;return e.props?[o,...Gh(e.props),l]:[o+l]}function Gh(e){const n=[],s=Object.keys(e);return s.slice(0,3).forEach(i=>{n.push(...Np(i,e[i]))}),s.length>3&&n.push(" ..."),n}function Np(e,n,s){return Ve(n)?(n=JSON.stringify(n),s?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${e}=${n}`]:Fe(n)?(n=Np(e,ge(n.value),!0),s?n:[`${e}=Ref<`,n,">"]):fe(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=ge(n),s?n:[`${e}=`,n])}function Qh(e,n){e!==void 0&&(typeof e!="number"?U(`${n} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&U(`${n} is NaN - the duration expression might be incorrect.`))}const lr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ht(e,n,s,i){let o;try{o=i?e(...i):e()}catch(l){ea(l,n,s)}return o}function Rn(e,n,s,i){if(fe(e)){const l=ht(e,n,s,i);return l&&Ql(l)&&l.catch(r=>{ea(r,n,s)}),l}const o=[];for(let l=0;l<e.length;l++)o.push(Rn(e[l],n,s,i));return o}function ea(e,n,s,i=!0){const o=n?n.vnode:null;if(n){let l=n.parent;const r=n.proxy,c=lr[s];for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,r,c)===!1)return}l=l.parent}const u=n.appContext.config.errorHandler;if(u){ht(u,null,10,[e,r,c]);return}}Zh(e,s,o,i)}function Zh(e,n,s,i=!0){{const o=lr[n];if(s&&fo(s),U(`Unhandled error${o?` during execution of ${o}`:""}`),s&&mo(),i)throw e;console.error(e)}}let wi=!1,Qa=!1;const sn=[];let Zn=0;const Ms=[];let Qn=null,It=0;const jp=Promise.resolve();let rr=null;const Xh=100;function on(e){const n=rr||jp;return e?n.then(this?e.bind(this):e):n}function Jh(e){let n=Zn+1,s=sn.length;for(;n<s;){const i=n+s>>>1;Ii(sn[i])<e?n=i+1:s=i}return n}function na(e){(!sn.length||!sn.includes(e,wi&&e.allowRecurse?Zn+1:Zn))&&(e.id==null?sn.push(e):sn.splice(Jh(e.id),0,e),Dp())}function Dp(){!wi&&!Qa&&(Qa=!0,rr=jp.then(Vp))}function e_(e){const n=sn.indexOf(e);n>Zn&&sn.splice(n,1)}function Hp(e){re(e)?Ms.push(...e):(!Qn||!Qn.includes(e,e.allowRecurse?It+1:It))&&Ms.push(e),Dp()}function sc(e,n=wi?Zn+1:0){for(e=e||new Map;n<sn.length;n++){const s=sn[n];if(s&&s.pre){if(cr(e,s))continue;sn.splice(n,1),n--,s()}}}function Up(e){if(Ms.length){const n=[...new Set(Ms)];if(Ms.length=0,Qn){Qn.push(...n);return}for(Qn=n,e=e||new Map,Qn.sort((s,i)=>Ii(s)-Ii(i)),It=0;It<Qn.length;It++)cr(e,Qn[It])||Qn[It]();Qn=null,It=0}}const Ii=e=>e.id==null?1/0:e.id,n_=(e,n)=>{const s=Ii(e)-Ii(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function Vp(e){Qa=!1,wi=!0,e=e||new Map,sn.sort(n_);const n=s=>cr(e,s);try{for(Zn=0;Zn<sn.length;Zn++){const s=sn[Zn];if(s&&s.active!==!1){if(n(s))continue;ht(s,null,14)}}}finally{Zn=0,sn.length=0,Up(e),wi=!1,rr=null,(sn.length||Ms.length)&&Vp(e)}}function cr(e,n){if(!e.has(n))e.set(n,1);else{const s=e.get(n);if(s>Xh){const i=n.ownerInstance,o=i&&$i(i.type);return U(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(n,s+1)}}let St=!1;const Cs=new Set;xo().__VUE_HMR_RUNTIME__={createRecord:ha(Bp),rerender:ha(i_),reload:ha(o_)};const _s=new Map;function t_(e){const n=e.type.__hmrId;let s=_s.get(n);s||(Bp(n,e.type),s=_s.get(n)),s.instances.add(e)}function s_(e){_s.get(e.type.__hmrId).instances.delete(e)}function Bp(e,n){return _s.has(e)?!1:(_s.set(e,{initialDef:ri(n),instances:new Set}),!0)}function ri(e){return wd(e)?e.__vccOpts:e}function i_(e,n){const s=_s.get(e);s&&(s.initialDef.render=n,[...s.instances].forEach(i=>{n&&(i.render=n,ri(i.type).render=n),i.renderCache=[],St=!0,i.update(),St=!1}))}function o_(e,n){const s=_s.get(e);if(!s)return;n=ri(n),ic(s.initialDef,n);const i=[...s.instances];for(const o of i){const l=ri(o.type);Cs.has(l)||(l!==s.initialDef&&ic(l,n),Cs.add(l)),o.appContext.propsCache.delete(o.type),o.appContext.emitsCache.delete(o.type),o.appContext.optionsCache.delete(o.type),o.ceReload?(Cs.add(l),o.ceReload(n.styles),Cs.delete(l)):o.parent?na(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Hp(()=>{for(const o of i)Cs.delete(ri(o.type))})}function ic(e,n){Ue(e,n);for(const s in e)s!=="__file"&&!(s in n)&&delete e[s]}function ha(e){return(n,s)=>{try{return e(n,s)}catch(i){console.error(i),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Xn,si=[],Za=!1;function ji(e,...n){Xn?Xn.emit(e,...n):Za||si.push({event:e,args:n})}function Wp(e,n){var s,i;Xn=e,Xn?(Xn.enabled=!0,si.forEach(({event:o,args:l})=>Xn.emit(o,...l)),si=[]):typeof window<"u"&&window.HTMLElement&&!((i=(s=window.navigator)==null?void 0:s.userAgent)!=null&&i.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Wp(l,n)}),setTimeout(()=>{Xn||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Za=!0,si=[])},3e3)):(Za=!0,si=[])}function a_(e,n){ji("app:init",e,n,{Fragment:Te,Text:Hi,Comment:mn,Static:ho})}function l_(e){ji("app:unmount",e)}const Xa=ur("component:added"),Kp=ur("component:updated"),r_=ur("component:removed"),c_=e=>{Xn&&typeof Xn.cleanupBuffer=="function"&&!Xn.cleanupBuffer(e)&&r_(e)};function ur(e){return n=>{ji(e,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const u_=qp("perf:start"),p_=qp("perf:end");function qp(e){return(n,s,i)=>{ji(e,n.appContext.app,n.uid,n,s,i)}}function d_(e,n,s){ji("component:emit",e.appContext.app,e,n,s)}function f_(e,n,...s){if(e.isUnmounted)return;const i=e.vnode.props||De;{const{emitsOptions:d,propsOptions:[f]}=e;if(d)if(!(n in d))(!f||!(Gt(n)in f))&&U(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${Gt(n)}" prop.`);else{const m=d[n];fe(m)&&(m(...s)||U(`Invalid event arguments: event validation failed for event "${n}".`))}}let o=s;const l=n.startsWith("update:"),r=l&&n.slice(7);if(r&&r in i){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:f,trim:m}=i[d]||De;m&&(o=s.map(h=>Ve(h)?h.trim():h)),f&&(o=s.map(Gm))}d_(e,n,o);{const d=n.toLowerCase();d!==n&&i[Gt(d)]&&U(`Event "${d}" is emitted in component ${ca(e,e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_t(n)}" instead of "${n}".`)}let c,u=i[c=Gt(n)]||i[c=Gt(tt(n))];!u&&l&&(u=i[c=Gt(_t(n))]),u&&Rn(u,e,6,o);const p=i[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Rn(p,e,6,o)}}function Yp(e,n,s=!1){const i=n.emitsCache,o=i.get(e);if(o!==void 0)return o;const l=e.emits;let r={},c=!1;if(!fe(e)){const u=p=>{const d=Yp(p,n,!0);d&&(c=!0,Ue(r,d))};!s&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!l&&!c?(Le(e)&&i.set(e,null),null):(re(l)?l.forEach(u=>r[u]=null):Ue(r,l),Le(e)&&i.set(e,r),r)}function ta(e,n){return!e||!Ri(n)?!1:(n=n.slice(2).replace(/Once$/,""),Ce(e,n[0].toLowerCase()+n.slice(1))||Ce(e,_t(n))||Ce(e,n))}let Xe=null,sa=null;function So(e){const n=Xe;return Xe=e,sa=e&&e.type.__scopeId||null,n}function O5(e){sa=e}function S5(){sa=null}function O(e,n=Xe,s){if(!n||e._n)return e;const i=(...o)=>{i._d&&vc(-1);const l=So(n);let r;try{r=e(...o)}finally{So(l),i._d&&vc(1)}return Kp(n),r};return i._n=!0,i._c=!0,i._d=!0,i}let Ja=!1;function Mo(){Ja=!0}function _a(e){const{type:n,vnode:s,proxy:i,withProxy:o,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:f,data:m,setupState:h,ctx:_,inheritAttrs:b}=e;let y,w;const I=So(e);Ja=!1;try{if(s.shapeFlag&4){const E=o||i;y=Vn(d.call(E,E,f,l,h,m,_)),w=u}else{const E=n;u===l&&Mo(),y=Vn(E.length>1?E(l,{get attrs(){return Mo(),u},slots:c,emit:p}):E(l,null)),w=n.props?u:h_(u)}}catch(E){ci.length=0,ea(E,e,1),y=H(mn)}let v=y,C;if(y.patchFlag>0&&y.patchFlag&2048&&([v,C]=m_(y)),w&&b!==!1){const E=Object.keys(w),{shapeFlag:M}=v;if(E.length){if(M&7)r&&E.some(wo)&&(w=__(w,r)),v=at(v,w);else if(!Ja&&v.type!==mn){const D=Object.keys(u),T=[],B=[];for(let oe=0,de=D.length;oe<de;oe++){const X=D[oe];Ri(X)?wo(X)||T.push(X[2].toLowerCase()+X.slice(3)):B.push(X)}B.length&&U(`Extraneous non-props attributes (${B.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),T.length&&U(`Extraneous non-emits event listeners (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(oc(v)||U("Runtime directive used on component with non-element root node. The directives will not function as intended."),v=at(v),v.dirs=v.dirs?v.dirs.concat(s.dirs):s.dirs),s.transition&&(oc(v)||U("Component inside <Transition> renders non-element root node that cannot be animated."),v.transition=s.transition),C?C(v):y=v,So(I),y}const m_=e=>{const n=e.children,s=e.dynamicChildren,i=Gp(n);if(!i)return[e,void 0];const o=n.indexOf(i),l=s?s.indexOf(i):-1,r=c=>{n[o]=c,s&&(l>-1?s[l]=c:c.patchFlag>0&&(e.dynamicChildren=[...s,c]))};return[Vn(i),r]};function Gp(e){let n;for(let s=0;s<e.length;s++){const i=e[s];if(Nt(i)){if(i.type!==mn||i.children==="v-if"){if(n)return;n=i}}else return}return n}const h_=e=>{let n;for(const s in e)(s==="class"||s==="style"||Ri(s))&&((n||(n={}))[s]=e[s]);return n},__=(e,n)=>{const s={};for(const i in e)(!wo(i)||!(i.slice(9)in n))&&(s[i]=e[i]);return s},oc=e=>e.shapeFlag&7||e.type===mn;function g_(e,n,s){const{props:i,children:o,component:l}=e,{props:r,children:c,patchFlag:u}=n,p=l.emitsOptions;if((o||c)&&St||n.dirs||n.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return i?ac(i,r,p):!!r;if(u&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(r[m]!==i[m]&&!ta(p,m))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:i===r?!1:i?r?ac(i,r,p):!0:!!r;return!1}function ac(e,n,s){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const l=i[o];if(n[l]!==e[l]&&!ta(s,l))return!0}return!1}function v_({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const Qp=e=>e.__isSuspense;function k_(e,n){n&&n.pendingBranch?re(e)?n.effects.push(...e):n.effects.push(e):Hp(e)}function ks(e,n){return pr(e,null,n)}const Xi={};function ke(e,n,s){return fe(n)||U("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),pr(e,n,s)}function pr(e,n,{immediate:s,deep:i,flush:o,onTrack:l,onTrigger:r}=De){var c;n||(s!==void 0&&U('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&U('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=E=>{U("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=Jl()===((c=Ze)==null?void 0:c.scope)?Ze:null;let d,f=!1,m=!1;if(Fe(e)?(d=()=>e.value,f=Co(e)):cs(e)?(d=()=>e,i=!0):re(e)?(m=!0,f=e.some(E=>cs(E)||Co(E)),d=()=>e.map(E=>{if(Fe(E))return E.value;if(cs(E))return is(E);if(fe(E))return ht(E,p,2);u(E)})):fe(e)?n?d=()=>ht(e,p,2):d=()=>{if(!(p&&p.isUnmounted))return h&&h(),Rn(e,p,3,[_])}:(d=bn,u(e)),n&&i){const E=d;d=()=>is(E())}let h,_=E=>{h=v.onStop=()=>{ht(E,p,4)}},b;if(Ei)if(_=bn,n?s&&Rn(n,p,3,[d(),m?[]:void 0,_]):d(),o==="sync"){const E=Cg();b=E.__watcherHandles||(E.__watcherHandles=[])}else return bn;let y=m?new Array(e.length).fill(Xi):Xi;const w=()=>{if(v.active)if(n){const E=v.run();(i||f||(m?E.some((M,D)=>bi(M,y[D])):bi(E,y)))&&(h&&h(),Rn(n,p,3,[E,y===Xi?void 0:m&&y[0]===Xi?[]:y,_]),y=E)}else v.run()};w.allowRecurse=!!n;let I;o==="sync"?I=w:o==="post"?I=()=>en(w,p&&p.suspense):(w.pre=!0,p&&(w.id=p.uid),I=()=>na(w));const v=new nr(d,I);v.onTrack=l,v.onTrigger=r,n?s?w():y=v.run():o==="post"?en(v.run.bind(v),p&&p.suspense):v.run();const C=()=>{v.stop(),p&&p.scope&&Yl(p.scope.effects,v)};return b&&b.push(C),C}function b_(e,n,s){const i=this.proxy,o=Ve(e)?e.includes(".")?Zp(i,e):()=>i[e]:e.bind(i,i);let l;fe(n)?l=n:(l=n.handler,s=n);const r=Ze;zs(this);const c=pr(o,l.bind(i),s);return r?zs(r):ds(),c}function Zp(e,n){const s=n.split(".");return()=>{let i=e;for(let o=0;o<s.length&&i;o++)i=i[s[o]];return i}}function is(e,n){if(!Le(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Fe(e))is(e.value,n);else if(re(e))for(let s=0;s<e.length;s++)is(e[s],n);else if(mp(e)||ls(e))e.forEach(s=>{is(s,n)});else if(_p(e))for(const s in e)is(e[s],n);return e}function Xp(e){Km(e)&&U("Do not use built-in directive ids as custom directive id: "+e)}function Jp(e,n){const s=Xe;if(s===null)return U("withDirectives can only be used inside render functions."),e;const i=ra(s)||s.proxy,o=e.dirs||(e.dirs=[]);for(let l=0;l<n.length;l++){let[r,c,u,p=De]=n[l];r&&(fe(r)&&(r={mounted:r,updated:r}),r.deep&&is(c),o.push({dir:r,instance:i,value:c,oldValue:void 0,arg:u,modifiers:p}))}return e}function Bt(e,n,s,i){const o=e.dirs,l=n&&n.dirs;for(let r=0;r<o.length;r++){const c=o[r];l&&(c.oldValue=l[r].value);let u=c.dir[i];u&&(gs(),Rn(u,s,8,[e.el,c,e,n]),vs())}}function y_(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ht(()=>{e.isMounted=!0}),Di(()=>{e.isUnmounting=!0}),e}const Ln=[Function,Array],w_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ln,onEnter:Ln,onAfterEnter:Ln,onEnterCancelled:Ln,onBeforeLeave:Ln,onLeave:Ln,onAfterLeave:Ln,onLeaveCancelled:Ln,onBeforeAppear:Ln,onAppear:Ln,onAfterAppear:Ln,onAppearCancelled:Ln};function I_(e,n){const{leavingVNodes:s}=e;let i=s.get(n.type);return i||(i=Object.create(null),s.set(n.type,i)),i}function el(e,n,s,i){const{appear:o,mode:l,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:h,onLeaveCancelled:_,onBeforeAppear:b,onAppear:y,onAfterAppear:w,onAppearCancelled:I}=n,v=String(e.key),C=I_(s,e),E=(T,B)=>{T&&Rn(T,i,9,B)},M=(T,B)=>{const oe=B[1];E(T,B),re(T)?T.every(de=>de.length<=1)&&oe():T.length<=1&&oe()},D={mode:l,persisted:r,beforeEnter(T){let B=c;if(!s.isMounted)if(o)B=b||c;else return;T._leaveCb&&T._leaveCb(!0);const oe=C[v];oe&&Xt(e,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),E(B,[T])},enter(T){let B=u,oe=p,de=d;if(!s.isMounted)if(o)B=y||u,oe=w||p,de=I||d;else return;let X=!1;const ve=T._enterCb=be=>{X||(X=!0,be?E(de,[T]):E(oe,[T]),D.delayedLeave&&D.delayedLeave(),T._enterCb=void 0)};B?M(B,[T,ve]):ve()},leave(T,B){const oe=String(e.key);if(T._enterCb&&T._enterCb(!0),s.isUnmounting)return B();E(f,[T]);let de=!1;const X=T._leaveCb=ve=>{de||(de=!0,B(),ve?E(_,[T]):E(h,[T]),T._leaveCb=void 0,C[oe]===e&&delete C[oe])};C[oe]=e,m?M(m,[T,X]):X()},clone(T){return el(T,n,s,i)}};return D}function Fo(e,n){e.shapeFlag&6&&e.component?Fo(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ed(e,n=!1,s){let i=[],o=0;for(let l=0;l<e.length;l++){let r=e[l];const c=s==null?r.key:String(s)+String(r.key!=null?r.key:l);r.type===Te?(r.patchFlag&128&&o++,i=i.concat(ed(r.children,n,c))):(n||r.type!==mn)&&i.push(c!=null?at(r,{key:c}):r)}if(o>1)for(let l=0;l<i.length;l++)i[l].patchFlag=-2;return i}function Ae(e,n){return fe(e)?(()=>Ue({name:e.name},n,{setup:e}))():e}const Fs=e=>!!e.type.__asyncLoader,dr=e=>e.type.__isKeepAlive,x_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=Mn(),i=s.ctx;if(!i.renderer)return()=>{const I=n.default&&n.default();return I&&I.length===1?I[0]:I};const o=new Map,l=new Set;let r=null;s.__v_cache=o;const c=s.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:f}}}=i,m=f("div");i.activate=(I,v,C,E,M)=>{const D=I.component;p(I,v,C,0,c),u(D.vnode,I,v,C,D,c,E,I.slotScopeIds,M),en(()=>{D.isDeactivated=!1,D.a&&Zt(D.a);const T=I.props&&I.props.onVnodeMounted;T&&zn(T,D.parent,I)},c),Xa(D)},i.deactivate=I=>{const v=I.component;p(I,m,null,1,c),en(()=>{v.da&&Zt(v.da);const C=I.props&&I.props.onVnodeUnmounted;C&&zn(C,v.parent,I),v.isDeactivated=!0},c),Xa(v)};function h(I){ga(I),d(I,s,c,!0)}function _(I){o.forEach((v,C)=>{const E=$i(v.type);E&&(!I||!I(E))&&b(C)})}function b(I){const v=o.get(I);!r||!Xt(v,r)?h(v):r&&ga(r),o.delete(I),l.delete(I)}ke(()=>[e.include,e.exclude],([I,v])=>{I&&_(C=>ii(I,C)),v&&_(C=>!ii(v,C))},{flush:"post",deep:!0});let y=null;const w=()=>{y!=null&&o.set(y,va(s.subTree))};return Ht(w),oa(w),Di(()=>{o.forEach(I=>{const{subTree:v,suspense:C}=s,E=va(v);if(I.type===E.type&&I.key===E.key){ga(E);const M=E.component.da;M&&en(M,C);return}h(I)})}),()=>{if(y=null,!n.default)return null;const I=n.default(),v=I[0];if(I.length>1)return U("KeepAlive should contain exactly one component child."),r=null,I;if(!Nt(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return r=null,v;let C=va(v);const E=C.type,M=$i(Fs(C)?C.type.__asyncResolved||{}:E),{include:D,exclude:T,max:B}=e;if(D&&(!M||!ii(D,M))||T&&M&&ii(T,M))return r=C,v;const oe=C.key==null?E:C.key,de=o.get(oe);return C.el&&(C=at(C),v.shapeFlag&128&&(v.ssContent=C)),y=oe,de?(C.el=de.el,C.component=de.component,C.transition&&Fo(C,C.transition),C.shapeFlag|=512,l.delete(oe),l.add(oe)):(l.add(oe),B&&l.size>parseInt(B,10)&&b(l.values().next().value)),C.shapeFlag|=256,r=C,Qp(v.type)?v:C}}},nd=x_;function ii(e,n){return re(e)?e.some(s=>ii(s,n)):Ve(e)?e.split(",").includes(n):Wm(e)?e.test(n):!1}function td(e,n){id(e,"a",n)}function sd(e,n){id(e,"da",n)}function id(e,n,s=Ze){const i=e.__wdc||(e.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ia(n,i,s),s){let o=s.parent;for(;o&&o.parent;)dr(o.parent.vnode)&&E_(i,n,s,o),o=o.parent}}function E_(e,n,s,i){const o=ia(n,e,i,!0);aa(()=>{Yl(i[n],o)},s)}function ga(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function va(e){return e.shapeFlag&128?e.ssContent:e}function ia(e,n,s=Ze,i=!1){if(s){const o=s[e]||(s[e]=[]),l=n.__weh||(n.__weh=(...r)=>{if(s.isUnmounted)return;gs(),zs(s);const c=Rn(n,s,e,r);return ds(),vs(),c});return i?o.unshift(l):o.push(l),l}else{const o=Gt(lr[e].replace(/ hook$/,""));U(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const vt=e=>(n,s=Ze)=>(!Ei||e==="sp")&&ia(e,(...i)=>n(...i),s),$_=vt("bm"),Ht=vt("m"),C_=vt("bu"),oa=vt("u"),Di=vt("bum"),aa=vt("um"),O_=vt("sp"),S_=vt("rtg"),M_=vt("rtc");function F_(e,n=Ze){ia("ec",e,n)}const nl="components";function To(e,n){return L_(nl,e,!0,n)||e}const T_=Symbol.for("v-ndc");function L_(e,n,s=!0,i=!1){const o=Xe||Ze;if(o){const l=o.type;if(e===nl){const c=$i(l,!1);if(c&&(c===n||c===tt(n)||c===hs(tt(n))))return l}const r=lc(o[e]||l[e],n)||lc(o.appContext[e],n);if(!r&&i)return l;if(s&&!r){const c=e===nl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";U(`Failed to resolve ${e.slice(0,-1)}: ${n}${c}`)}return r}else U(`resolve${hs(e.slice(0,-1))} can only be used in render() or setup().`)}function lc(e,n){return e&&(e[n]||e[tt(n)]||e[hs(tt(n))])}function Ns(e,n,s,i){let o;const l=s&&s[i];if(re(e)||Ve(e)){o=new Array(e.length);for(let r=0,c=e.length;r<c;r++)o[r]=n(e[r],r,void 0,l&&l[r])}else if(typeof e=="number"){Number.isInteger(e)||U(`The v-for range expect an integer value but got ${e}.`),o=new Array(e);for(let r=0;r<e;r++)o[r]=n(r+1,r,void 0,l&&l[r])}else if(Le(e))if(e[Symbol.iterator])o=Array.from(e,(r,c)=>n(r,c,void 0,l&&l[c]));else{const r=Object.keys(e);o=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];o[c]=n(e[p],p,c,l&&l[c])}}else o=[];return s&&(s[i]=o),o}function ot(e,n,s={},i,o){if(Xe.isCE||Xe.parent&&Fs(Xe.parent)&&Xe.parent.isCE)return n!=="default"&&(s.name=n),H("slot",s,i&&i());let l=e[n];l&&l.length>1&&(U("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),x();const r=l&&od(l(s)),c=P(Te,{key:s.key||r&&r.key||`_${n}`},r||(i?i():[]),r&&e._===1?64:-2);return!o&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function od(e){return e.some(n=>Nt(n)?!(n.type===mn||n.type===Te&&!od(n.children)):!0)?e:null}const tl=e=>e?kd(e)?ra(e)||e.proxy:tl(e.parent):null,ps=Ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ti(e.props),$attrs:e=>ti(e.attrs),$slots:e=>ti(e.slots),$refs:e=>ti(e.refs),$parent:e=>tl(e.parent),$root:e=>tl(e.root),$emit:e=>e.emit,$options:e=>mr(e),$forceUpdate:e=>e.f||(e.f=()=>na(e.update)),$nextTick:e=>e.n||(e.n=on.bind(e.proxy)),$watch:e=>b_.bind(e)}),fr=e=>e==="_"||e==="$",ka=(e,n)=>e!==De&&!e.__isScriptSetup&&Ce(e,n),ad={get({_:e},n){const{ctx:s,setupState:i,data:o,props:l,accessCache:r,type:c,appContext:u}=e;if(n==="__isVue")return!0;let p;if(n[0]!=="$"){const h=r[n];if(h!==void 0)switch(h){case 1:return i[n];case 2:return o[n];case 4:return s[n];case 3:return l[n]}else{if(ka(i,n))return r[n]=1,i[n];if(o!==De&&Ce(o,n))return r[n]=2,o[n];if((p=e.propsOptions[0])&&Ce(p,n))return r[n]=3,l[n];if(s!==De&&Ce(s,n))return r[n]=4,s[n];sl&&(r[n]=0)}}const d=ps[n];let f,m;if(d)return n==="$attrs"?(rn(e,"get",n),Mo()):n==="$slots"&&rn(e,"get",n),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(s!==De&&Ce(s,n))return r[n]=4,s[n];if(m=u.config.globalProperties,Ce(m,n))return m[n];Xe&&(!Ve(n)||n.indexOf("__v")!==0)&&(o!==De&&fr(n[0])&&Ce(o,n)?U(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Xe&&U(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:e},n,s){const{data:i,setupState:o,ctx:l}=e;return ka(o,n)?(o[n]=s,!0):o.__isScriptSetup&&Ce(o,n)?(U(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):i!==De&&Ce(i,n)?(i[n]=s,!0):Ce(e.props,n)?(U(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?(U(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in e.appContext.config.globalProperties?Object.defineProperty(l,n,{enumerable:!0,configurable:!0,value:s}):l[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:i,appContext:o,propsOptions:l}},r){let c;return!!s[r]||e!==De&&Ce(e,r)||ka(n,r)||(c=l[0])&&Ce(c,r)||Ce(i,r)||Ce(ps,r)||Ce(o.config.globalProperties,r)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:Ce(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};ad.ownKeys=e=>(U("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function z_(e){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ps).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>ps[s](e),set:bn})}),n}function A_(e){const{ctx:n,propsOptions:[s]}=e;s&&Object.keys(s).forEach(i=>{Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>e.props[i],set:bn})})}function P_(e){const{ctx:n,setupState:s}=e;Object.keys(ge(s)).forEach(i=>{if(!s.__isScriptSetup){if(fr(i[0])){U(`setup() return property ${JSON.stringify(i)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>s[i],set:bn})}})}function R_(){return N_().slots}function N_(){const e=Mn();return e||U("useContext() called without active instance."),e.setupContext||(e.setupContext=yd(e))}function rc(e){return re(e)?e.reduce((n,s)=>(n[s]=null,n),{}):e}function j_(){const e=Object.create(null);return(n,s)=>{e[s]?U(`${n} property "${s}" is already defined in ${e[s]}.`):e[s]=n}}let sl=!0;function D_(e){const n=mr(e),s=e.proxy,i=e.ctx;sl=!1,n.beforeCreate&&cc(n.beforeCreate,e,"bc");const{data:o,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:f,mounted:m,beforeUpdate:h,updated:_,activated:b,deactivated:y,beforeDestroy:w,beforeUnmount:I,destroyed:v,unmounted:C,render:E,renderTracked:M,renderTriggered:D,errorCaptured:T,serverPrefetch:B,expose:oe,inheritAttrs:de,components:X,directives:ve,filters:be}=n,Ie=j_();{const[te]=e.propsOptions;if(te)for(const ce in te)Ie("Props",ce)}if(p&&H_(p,i,Ie),r)for(const te in r){const ce=r[te];fe(ce)?(Object.defineProperty(i,te,{value:ce.bind(s),configurable:!0,enumerable:!0,writable:!0}),Ie("Methods",te)):U(`Method "${te}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(o){fe(o)||U("The data option must be a function. Plain object usage is no longer supported.");const te=o.call(s,s);if(Ql(te)&&U("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Le(te))U("data() should return an object.");else{e.data=Be(te);for(const ce in te)Ie("Data",ce),fr(ce[0])||Object.defineProperty(i,ce,{configurable:!0,enumerable:!0,get:()=>te[ce],set:bn})}}if(sl=!0,l)for(const te in l){const ce=l[te],$e=fe(ce)?ce.bind(s,s):fe(ce.get)?ce.get.bind(s,s):bn;$e===bn&&U(`Computed property "${te}" has no getter.`);const Pe=!fe(ce)&&fe(ce.set)?ce.set.bind(s):()=>{U(`Write operation failed: computed property "${te}" is readonly.`)},Fn=L({get:$e,set:Pe});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Fn.value,set:tn=>Fn.value=tn}),Ie("Computed",te)}if(c)for(const te in c)ld(c[te],i,s,te);if(u){const te=fe(u)?u.call(s):u;Reflect.ownKeys(te).forEach(ce=>{$n(ce,te[ce])})}d&&cc(d,e,"c");function Re(te,ce){re(ce)?ce.forEach($e=>te($e.bind(s))):ce&&te(ce.bind(s))}if(Re($_,f),Re(Ht,m),Re(C_,h),Re(oa,_),Re(td,b),Re(sd,y),Re(F_,T),Re(M_,M),Re(S_,D),Re(Di,I),Re(aa,C),Re(O_,B),re(oe))if(oe.length){const te=e.exposed||(e.exposed={});oe.forEach(ce=>{Object.defineProperty(te,ce,{get:()=>s[ce],set:$e=>s[ce]=$e})})}else e.exposed||(e.exposed={});E&&e.render===bn&&(e.render=E),de!=null&&(e.inheritAttrs=de),X&&(e.components=X),ve&&(e.directives=ve)}function H_(e,n,s=bn){re(e)&&(e=il(e));for(const i in e){const o=e[i];let l;Le(o)?"default"in o?l=z(o.from||i,o.default,!0):l=z(o.from||i):l=z(o),Fe(l)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):n[i]=l,s("Inject",i)}}function cc(e,n,s){Rn(re(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,s)}function ld(e,n,s,i){const o=i.includes(".")?Zp(s,i):()=>s[i];if(Ve(e)){const l=n[e];fe(l)?ke(o,l):U(`Invalid watch handler specified by key "${e}"`,l)}else if(fe(e))ke(o,e.bind(s));else if(Le(e))if(re(e))e.forEach(l=>ld(l,n,s,i));else{const l=fe(e.handler)?e.handler.bind(s):n[e.handler];fe(l)?ke(o,l,e):U(`Invalid watch handler specified by key "${e.handler}"`,l)}else U(`Invalid watch option: "${i}"`,e)}function mr(e){const n=e.type,{mixins:s,extends:i}=n,{mixins:o,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,c=l.get(n);let u;return c?u=c:!o.length&&!s&&!i?u=n:(u={},o.length&&o.forEach(p=>Lo(u,p,r,!0)),Lo(u,n,r)),Le(n)&&l.set(n,u),u}function Lo(e,n,s,i=!1){const{mixins:o,extends:l}=n;l&&Lo(e,l,s,!0),o&&o.forEach(r=>Lo(e,r,s,!0));for(const r in n)if(i&&r==="expose")U('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=U_[r]||s&&s[r];e[r]=c?c(e[r],n[r]):n[r]}return e}const U_={data:uc,props:pc,emits:pc,methods:oi,computed:oi,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:oi,directives:oi,watch:B_,provide:uc,inject:V_};function uc(e,n){return n?e?function(){return Ue(fe(e)?e.call(this,this):e,fe(n)?n.call(this,this):n)}:n:e}function V_(e,n){return oi(il(e),il(n))}function il(e){if(re(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function un(e,n){return e?[...new Set([].concat(e,n))]:n}function oi(e,n){return e?Ue(Object.create(null),e,n):n}function pc(e,n){return e?re(e)&&re(n)?[...new Set([...e,...n])]:Ue(Object.create(null),rc(e),rc(n??{})):n}function B_(e,n){if(!e)return n;if(!n)return e;const s=Ue(Object.create(null),e);for(const i in n)s[i]=un(e[i],n[i]);return s}function rd(){return{app:null,config:{isNativeTag:fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let W_=0;function K_(e,n){return function(i,o=null){fe(i)||(i=Ue({},i)),o!=null&&!Le(o)&&(U("root props passed to app.mount() must be an object."),o=null);const l=rd();Object.defineProperty(l.config,"unwrapInjectedRef",{get(){return!0},set(){U("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const r=new Set;let c=!1;const u=l.app={_uid:W_++,_component:i,_props:o,_container:null,_context:l,_instance:null,version:Ro,get config(){return l.config},set config(p){U("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return r.has(p)?U("Plugin has already been applied to target app."):p&&fe(p.install)?(r.add(p),p.install(u,...d)):fe(p)?(r.add(p),p(u,...d)):U('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return l.mixins.includes(p)?U("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):l.mixins.push(p),u},component(p,d){return cl(p,l.config),d?(l.components[p]&&U(`Component "${p}" has already been registered in target app.`),l.components[p]=d,u):l.components[p]},directive(p,d){return Xp(p),d?(l.directives[p]&&U(`Directive "${p}" has already been registered in target app.`),l.directives[p]=d,u):l.directives[p]},mount(p,d,f){if(c)U("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&U("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const m=H(i,o);return m.appContext=l,l.reload=()=>{e(at(m),p,f)},d&&n?n(m,p):e(m,p,f),c=!0,u._container=p,p.__vue_app__=u,u._instance=m.component,a_(u,Ro),ra(m.component)||m.component.proxy}},unmount(){c?(e(null,u._container),u._instance=null,l_(u),delete u._container.__vue_app__):U("Cannot unmount an app that is not mounted.")},provide(p,d){return p in l.provides&&U(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),l.provides[p]=d,u},runWithContext(p){zo=u;try{return p()}finally{zo=null}}};return u}}let zo=null;function $n(e,n){if(!Ze)U("provide() can only be used inside setup().");else{let s=Ze.provides;const i=Ze.parent&&Ze.parent.provides;i===s&&(s=Ze.provides=Object.create(i)),s[e]=n}}function z(e,n,s=!1){const i=Ze||Xe;if(i||zo){const o=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:zo._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return s&&fe(n)?n.call(i&&i.proxy):n;U(`injection "${String(e)}" not found.`)}else U("inject() can only be used inside setup() or functional components.")}function q_(e,n,s,i=!1){const o={},l={};Io(l,la,1),e.propsDefaults=Object.create(null),cd(e,n,o,l);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);pd(n||{},o,e),s?e.props=i?o:Ph(o):e.type.props?e.props=o:e.props=l,e.attrs=l}function Y_(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function G_(e,n,s,i){const{props:o,attrs:l,vnode:{patchFlag:r}}=e,c=ge(o),[u]=e.propsOptions;let p=!1;if(!Y_(e)&&(i||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(ta(e.emitsOptions,m))continue;const h=n[m];if(u)if(Ce(l,m))h!==l[m]&&(l[m]=h,p=!0);else{const _=tt(m);o[_]=ol(u,c,_,h,e,!1)}else h!==l[m]&&(l[m]=h,p=!0)}}}else{cd(e,n,o,l)&&(p=!0);let d;for(const f in c)(!n||!Ce(n,f)&&((d=_t(f))===f||!Ce(n,d)))&&(u?s&&(s[f]!==void 0||s[d]!==void 0)&&(o[f]=ol(u,c,f,void 0,e,!0)):delete o[f]);if(l!==c)for(const f in l)(!n||!Ce(n,f))&&(delete l[f],p=!0)}p&&st(e,"set","$attrs"),pd(n||{},o,e)}function cd(e,n,s,i){const[o,l]=e.propsOptions;let r=!1,c;if(n)for(let u in n){if(po(u))continue;const p=n[u];let d;o&&Ce(o,d=tt(u))?!l||!l.includes(d)?s[d]=p:(c||(c={}))[d]=p:ta(e.emitsOptions,u)||(!(u in i)||p!==i[u])&&(i[u]=p,r=!0)}if(l){const u=ge(s),p=c||De;for(let d=0;d<l.length;d++){const f=l[d];s[f]=ol(o,u,f,p[f],e,!Ce(p,f))}}return r}function ol(e,n,s,i,o,l){const r=e[s];if(r!=null){const c=Ce(r,"default");if(c&&i===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&fe(u)){const{propsDefaults:p}=o;s in p?i=p[s]:(zs(o),i=p[s]=u.call(null,n),ds())}else i=u}r[0]&&(l&&!c?i=!1:r[1]&&(i===""||i===_t(s))&&(i=!0))}return i}function ud(e,n,s=!1){const i=n.propsCache,o=i.get(e);if(o)return o;const l=e.props,r={},c=[];let u=!1;if(!fe(e)){const d=f=>{u=!0;const[m,h]=ud(f,n,!0);Ue(r,m),h&&c.push(...h)};!s&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!u)return Le(e)&&i.set(e,Ss),Ss;if(re(l))for(let d=0;d<l.length;d++){Ve(l[d])||U("props must be strings when using array syntax.",l[d]);const f=tt(l[d]);dc(f)&&(r[f]=De)}else if(l){Le(l)||U("invalid props options",l);for(const d in l){const f=tt(d);if(dc(f)){const m=l[d],h=r[f]=re(m)||fe(m)?{type:m}:Ue({},m);if(h){const _=mc(Boolean,h.type),b=mc(String,h.type);h[0]=_>-1,h[1]=b<0||_<b,(_>-1||Ce(h,"default"))&&c.push(f)}}}}const p=[r,c];return Le(e)&&i.set(e,p),p}function dc(e){return e[0]!=="$"?!0:(U(`Invalid prop name: "${e}" is a reserved property.`),!1)}function al(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function fc(e,n){return al(e)===al(n)}function mc(e,n){return re(n)?n.findIndex(s=>fc(s,e)):fe(n)&&fc(n,e)?0:-1}function pd(e,n,s){const i=ge(n),o=s.propsOptions[0];for(const l in o){let r=o[l];r!=null&&Q_(l,i[l],r,!Ce(e,l)&&!Ce(e,_t(l)))}}function Q_(e,n,s,i){const{type:o,required:l,validator:r,skipCheck:c}=s;if(l&&i){U('Missing required prop: "'+e+'"');return}if(!(n==null&&!l)){if(o!=null&&o!==!0&&!c){let u=!1;const p=re(o)?o:[o],d=[];for(let f=0;f<p.length&&!u;f++){const{valid:m,expectedType:h}=X_(n,p[f]);d.push(h||""),u=m}if(!u){U(J_(e,n,d));return}}r&&!r(n)&&U('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Z_=Dt("String,Number,Boolean,Function,Symbol,BigInt");function X_(e,n){let s;const i=al(n);if(Z_(i)){const o=typeof e;s=o===i.toLowerCase(),!s&&o==="object"&&(s=e instanceof n)}else i==="Object"?s=Le(e):i==="Array"?s=re(e):i==="null"?s=e===null:s=e instanceof n;return{valid:s,expectedType:i}}function J_(e,n,s){let i=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(hs).join(" | ")}`;const o=s[0],l=Zl(n),r=hc(n,o),c=hc(n,l);return s.length===1&&_c(o)&&!eg(o,l)&&(i+=` with value ${r}`),i+=`, got ${l} `,_c(l)&&(i+=`with value ${c}.`),i}function hc(e,n){return n==="String"?`"${e}"`:n==="Number"?`${Number(e)}`:`${e}`}function _c(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function eg(...e){return e.some(n=>n.toLowerCase()==="boolean")}const dd=e=>e[0]==="_"||e==="$stable",hr=e=>re(e)?e.map(Vn):[Vn(e)],ng=(e,n,s)=>{if(n._n)return n;const i=O((...o)=>(Ze&&U(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),hr(n(...o))),s);return i._c=!1,i},fd=(e,n,s)=>{const i=e._ctx;for(const o in e){if(dd(o))continue;const l=e[o];if(fe(l))n[o]=ng(o,l,i);else if(l!=null){U(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const r=hr(l);n[o]=()=>r}}},md=(e,n)=>{dr(e.vnode)||U("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=hr(n);e.slots.default=()=>s},tg=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=ge(n),Io(n,"_",s)):fd(n,e.slots={})}else e.slots={},n&&md(e,n);Io(e.slots,la,1)},sg=(e,n,s)=>{const{vnode:i,slots:o}=e;let l=!0,r=De;if(i.shapeFlag&32){const c=n._;c?St?(Ue(o,n),st(e,"set","$slots")):s&&c===1?l=!1:(Ue(o,n),!s&&c===1&&delete o._):(l=!n.$stable,fd(n,o)),r=n}else n&&(md(e,n),r={default:1});if(l)for(const c in o)!dd(c)&&!(c in r)&&delete o[c]};function ll(e,n,s,i,o=!1){if(re(e)){e.forEach((m,h)=>ll(m,n&&(re(n)?n[h]:n),s,i,o));return}if(Fs(i)&&!o)return;const l=i.shapeFlag&4?ra(i.component)||i.component.proxy:i.el,r=o?null:l,{i:c,r:u}=e;if(!c){U("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=n&&n.r,d=c.refs===De?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==u&&(Ve(p)?(d[p]=null,Ce(f,p)&&(f[p]=null)):Fe(p)&&(p.value=null)),fe(u))ht(u,c,12,[r,d]);else{const m=Ve(u),h=Fe(u);if(m||h){const _=()=>{if(e.f){const b=m?Ce(f,u)?f[u]:d[u]:u.value;o?re(b)&&Yl(b,l):re(b)?b.includes(l)||b.push(l):m?(d[u]=[l],Ce(f,u)&&(f[u]=d[u])):(u.value=[l],e.k&&(d[e.k]=u.value))}else m?(d[u]=r,Ce(f,u)&&(f[u]=r)):h?(u.value=r,e.k&&(d[e.k]=r)):U("Invalid template ref type:",u,`(${typeof u})`)};r?(_.id=-1,en(_,s)):_()}else U("Invalid template ref type:",u,`(${typeof u})`)}}let Vs,$t;function ct(e,n){e.appContext.config.performance&&Ao()&&$t.mark(`vue-${n}-${e.uid}`),u_(e,n,Ao()?$t.now():Date.now())}function ut(e,n){if(e.appContext.config.performance&&Ao()){const s=`vue-${n}-${e.uid}`,i=s+":end";$t.mark(i),$t.measure(`<${ca(e,e.type)}> ${n}`,s,i),$t.clearMarks(s),$t.clearMarks(i)}p_(e,n,Ao()?$t.now():Date.now())}function Ao(){return Vs!==void 0||(typeof window<"u"&&window.performance?(Vs=!0,$t=window.performance):Vs=!1),Vs}function ig(){const e=[];if(e.length){const n=e.length>1;console.warn(`Feature flag${n?"s":""} ${e.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const en=k_;function og(e){return ag(e)}function ag(e,n){ig();const s=xo();s.__VUE__=!0,Wp(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:i,remove:o,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:f,nextSibling:m,setScopeId:h=bn,insertStaticContent:_}=e,b=(g,k,$,R=null,A=null,K=null,ee=!1,W=null,Y=St?!1:!!k.dynamicChildren)=>{if(g===k)return;g&&!Xt(g,k)&&(R=J(g),_n(g,A,K,!0),g=null),k.patchFlag===-2&&(Y=!1,k.dynamicChildren=null);const{type:V,ref:le,shapeFlag:ae}=k;switch(V){case Hi:y(g,k,$,R);break;case mn:w(g,k,$,R);break;case ho:g==null?I(k,$,R,ee):v(g,k,$,ee);break;case Te:ve(g,k,$,R,A,K,ee,W,Y);break;default:ae&1?M(g,k,$,R,A,K,ee,W,Y):ae&6?be(g,k,$,R,A,K,ee,W,Y):ae&64||ae&128?V.process(g,k,$,R,A,K,ee,W,Y,se):U("Invalid VNode type:",V,`(${typeof V})`)}le!=null&&A&&ll(le,g&&g.ref,K,k||g,!k)},y=(g,k,$,R)=>{if(g==null)i(k.el=c(k.children),$,R);else{const A=k.el=g.el;k.children!==g.children&&p(A,k.children)}},w=(g,k,$,R)=>{g==null?i(k.el=u(k.children||""),$,R):k.el=g.el},I=(g,k,$,R)=>{[g.el,g.anchor]=_(g.children,k,$,R,g.el,g.anchor)},v=(g,k,$,R)=>{if(k.children!==g.children){const A=m(g.anchor);E(g),[k.el,k.anchor]=_(k.children,$,A,R)}else k.el=g.el,k.anchor=g.anchor},C=({el:g,anchor:k},$,R)=>{let A;for(;g&&g!==k;)A=m(g),i(g,$,R),g=A;i(k,$,R)},E=({el:g,anchor:k})=>{let $;for(;g&&g!==k;)$=m(g),o(g),g=$;o(k)},M=(g,k,$,R,A,K,ee,W,Y)=>{ee=ee||k.type==="svg",g==null?D(k,$,R,A,K,ee,W,Y):oe(g,k,A,K,ee,W,Y)},D=(g,k,$,R,A,K,ee,W)=>{let Y,V;const{type:le,props:ae,shapeFlag:pe,transition:_e,dirs:Oe}=g;if(Y=g.el=r(g.type,K,ae&&ae.is,ae),pe&8?d(Y,g.children):pe&16&&B(g.children,Y,null,R,A,K&&le!=="foreignObject",ee,W),Oe&&Bt(g,null,R,"created"),T(Y,g,g.scopeId,ee,R),ae){for(const je in ae)je!=="value"&&!po(je)&&l(Y,je,null,ae[je],K,g.children,R,A,F);"value"in ae&&l(Y,"value",null,ae.value),(V=ae.onVnodeBeforeMount)&&zn(V,R,g)}Object.defineProperty(Y,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(Y,"__vueParentComponent",{value:R,enumerable:!1}),Oe&&Bt(g,null,R,"beforeMount");const He=(!A||A&&!A.pendingBranch)&&_e&&!_e.persisted;He&&_e.beforeEnter(Y),i(Y,k,$),((V=ae&&ae.onVnodeMounted)||He||Oe)&&en(()=>{V&&zn(V,R,g),He&&_e.enter(Y),Oe&&Bt(g,null,R,"mounted")},A)},T=(g,k,$,R,A)=>{if($&&h(g,$),R)for(let K=0;K<R.length;K++)h(g,R[K]);if(A){let K=A.subTree;if(K.patchFlag>0&&K.patchFlag&2048&&(K=Gp(K.children)||K),k===K){const ee=A.vnode;T(g,ee,ee.scopeId,ee.slotScopeIds,A.parent)}}},B=(g,k,$,R,A,K,ee,W,Y=0)=>{for(let V=Y;V<g.length;V++){const le=g[V]=W?xt(g[V]):Vn(g[V]);b(null,le,k,$,R,A,K,ee,W)}},oe=(g,k,$,R,A,K,ee)=>{const W=k.el=g.el;let{patchFlag:Y,dynamicChildren:V,dirs:le}=k;Y|=g.patchFlag&16;const ae=g.props||De,pe=k.props||De;let _e;$&&Wt($,!1),(_e=pe.onVnodeBeforeUpdate)&&zn(_e,$,k,g),le&&Bt(k,g,$,"beforeUpdate"),$&&Wt($,!0),St&&(Y=0,ee=!1,V=null);const Oe=A&&k.type!=="foreignObject";if(V?(de(g.dynamicChildren,V,W,$,R,Oe,K),Po(g,k)):ee||$e(g,k,W,null,$,R,Oe,K,!1),Y>0){if(Y&16)X(W,k,ae,pe,$,R,A);else if(Y&2&&ae.class!==pe.class&&l(W,"class",null,pe.class,A),Y&4&&l(W,"style",ae.style,pe.style,A),Y&8){const He=k.dynamicProps;for(let je=0;je<He.length;je++){const qe=He[je],Dn=ae[qe],ws=pe[qe];(ws!==Dn||qe==="value")&&l(W,qe,Dn,ws,A,g.children,$,R,F)}}Y&1&&g.children!==k.children&&d(W,k.children)}else!ee&&V==null&&X(W,k,ae,pe,$,R,A);((_e=pe.onVnodeUpdated)||le)&&en(()=>{_e&&zn(_e,$,k,g),le&&Bt(k,g,$,"updated")},R)},de=(g,k,$,R,A,K,ee)=>{for(let W=0;W<k.length;W++){const Y=g[W],V=k[W],le=Y.el&&(Y.type===Te||!Xt(Y,V)||Y.shapeFlag&70)?f(Y.el):$;b(Y,V,le,null,R,A,K,ee,!0)}},X=(g,k,$,R,A,K,ee)=>{if($!==R){if($!==De)for(const W in $)!po(W)&&!(W in R)&&l(g,W,$[W],null,ee,k.children,A,K,F);for(const W in R){if(po(W))continue;const Y=R[W],V=$[W];Y!==V&&W!=="value"&&l(g,W,V,Y,ee,k.children,A,K,F)}"value"in R&&l(g,"value",$.value,R.value)}},ve=(g,k,$,R,A,K,ee,W,Y)=>{const V=k.el=g?g.el:c(""),le=k.anchor=g?g.anchor:c("");let{patchFlag:ae,dynamicChildren:pe,slotScopeIds:_e}=k;(St||ae&2048)&&(ae=0,Y=!1,pe=null),_e&&(W=W?W.concat(_e):_e),g==null?(i(V,$,R),i(le,$,R),B(k.children,$,le,A,K,ee,W,Y)):ae>0&&ae&64&&pe&&g.dynamicChildren?(de(g.dynamicChildren,pe,$,A,K,ee,W),Po(g,k)):$e(g,k,$,le,A,K,ee,W,Y)},be=(g,k,$,R,A,K,ee,W,Y)=>{k.slotScopeIds=W,g==null?k.shapeFlag&512?A.ctx.activate(k,$,R,ee,Y):Ie(k,$,R,A,K,ee,Y):Re(g,k,Y)},Ie=(g,k,$,R,A,K,ee)=>{const W=g.component=gg(g,R,A);if(W.type.__hmrId&&t_(W),fo(g),ct(W,"mount"),dr(g)&&(W.ctx.renderer=se),ct(W,"init"),kg(W),ut(W,"init"),W.asyncDep){if(A&&A.registerDep(W,te),!g.el){const Y=W.subTree=H(mn);w(null,Y,k,$)}return}te(W,g,k,$,A,K,ee),mo(),ut(W,"mount")},Re=(g,k,$)=>{const R=k.component=g.component;if(g_(g,k,$))if(R.asyncDep&&!R.asyncResolved){fo(k),ce(R,k,$),mo();return}else R.next=k,e_(R.update),R.update();else k.el=g.el,R.vnode=k},te=(g,k,$,R,A,K,ee)=>{const W=()=>{if(g.isMounted){let{next:le,bu:ae,u:pe,parent:_e,vnode:Oe}=g,He=le,je;fo(le||g.vnode),Wt(g,!1),le?(le.el=Oe.el,ce(g,le,ee)):le=Oe,ae&&Zt(ae),(je=le.props&&le.props.onVnodeBeforeUpdate)&&zn(je,_e,le,Oe),Wt(g,!0),ct(g,"render");const qe=_a(g);ut(g,"render");const Dn=g.subTree;g.subTree=qe,ct(g,"patch"),b(Dn,qe,f(Dn.el),J(Dn),g,A,K),ut(g,"patch"),le.el=qe.el,He===null&&v_(g,qe.el),pe&&en(pe,A),(je=le.props&&le.props.onVnodeUpdated)&&en(()=>zn(je,_e,le,Oe),A),Kp(g),mo()}else{let le;const{el:ae,props:pe}=k,{bm:_e,m:Oe,parent:He}=g,je=Fs(k);if(Wt(g,!1),_e&&Zt(_e),!je&&(le=pe&&pe.onVnodeBeforeMount)&&zn(le,He,k),Wt(g,!0),ae&&Ne){const qe=()=>{ct(g,"render"),g.subTree=_a(g),ut(g,"render"),ct(g,"hydrate"),Ne(ae,g.subTree,g,A,null),ut(g,"hydrate")};je?k.type.__asyncLoader().then(()=>!g.isUnmounted&&qe()):qe()}else{ct(g,"render");const qe=g.subTree=_a(g);ut(g,"render"),ct(g,"patch"),b(null,qe,$,R,g,A,K),ut(g,"patch"),k.el=qe.el}if(Oe&&en(Oe,A),!je&&(le=pe&&pe.onVnodeMounted)){const qe=k;en(()=>zn(le,He,qe),A)}(k.shapeFlag&256||He&&Fs(He.vnode)&&He.vnode.shapeFlag&256)&&g.a&&en(g.a,A),g.isMounted=!0,Xa(g),k=$=R=null}},Y=g.effect=new nr(W,()=>na(V),g.scope),V=g.update=()=>Y.run();V.id=g.uid,Wt(g,!0),Y.onTrack=g.rtc?le=>Zt(g.rtc,le):void 0,Y.onTrigger=g.rtg?le=>Zt(g.rtg,le):void 0,V.ownerInstance=g,V()},ce=(g,k,$)=>{k.component=g;const R=g.vnode.props;g.vnode=k,g.next=null,G_(g,k.props,R,$),sg(g,k.children,$),gs(),sc(),vs()},$e=(g,k,$,R,A,K,ee,W,Y=!1)=>{const V=g&&g.children,le=g?g.shapeFlag:0,ae=k.children,{patchFlag:pe,shapeFlag:_e}=k;if(pe>0){if(pe&128){Fn(V,ae,$,R,A,K,ee,W,Y);return}else if(pe&256){Pe(V,ae,$,R,A,K,ee,W,Y);return}}_e&8?(le&16&&F(V,A,K),ae!==V&&d($,ae)):le&16?_e&16?Fn(V,ae,$,R,A,K,ee,W,Y):F(V,A,K,!0):(le&8&&d($,""),_e&16&&B(ae,$,R,A,K,ee,W,Y))},Pe=(g,k,$,R,A,K,ee,W,Y)=>{g=g||Ss,k=k||Ss;const V=g.length,le=k.length,ae=Math.min(V,le);let pe;for(pe=0;pe<ae;pe++){const _e=k[pe]=Y?xt(k[pe]):Vn(k[pe]);b(g[pe],_e,$,null,A,K,ee,W,Y)}V>le?F(g,A,K,!0,!1,ae):B(k,$,R,A,K,ee,W,Y,ae)},Fn=(g,k,$,R,A,K,ee,W,Y)=>{let V=0;const le=k.length;let ae=g.length-1,pe=le-1;for(;V<=ae&&V<=pe;){const _e=g[V],Oe=k[V]=Y?xt(k[V]):Vn(k[V]);if(Xt(_e,Oe))b(_e,Oe,$,null,A,K,ee,W,Y);else break;V++}for(;V<=ae&&V<=pe;){const _e=g[ae],Oe=k[pe]=Y?xt(k[pe]):Vn(k[pe]);if(Xt(_e,Oe))b(_e,Oe,$,null,A,K,ee,W,Y);else break;ae--,pe--}if(V>ae){if(V<=pe){const _e=pe+1,Oe=_e<le?k[_e].el:R;for(;V<=pe;)b(null,k[V]=Y?xt(k[V]):Vn(k[V]),$,Oe,A,K,ee,W,Y),V++}}else if(V>pe)for(;V<=ae;)_n(g[V],A,K,!0),V++;else{const _e=V,Oe=V,He=new Map;for(V=Oe;V<=pe;V++){const cn=k[V]=Y?xt(k[V]):Vn(k[V]);cn.key!=null&&(He.has(cn.key)&&U("Duplicate keys found during update:",JSON.stringify(cn.key),"Make sure keys are unique."),He.set(cn.key,V))}let je,qe=0;const Dn=pe-Oe+1;let ws=!1,Kr=0;const Us=new Array(Dn);for(V=0;V<Dn;V++)Us[V]=0;for(V=_e;V<=ae;V++){const cn=g[V];if(qe>=Dn){_n(cn,A,K,!0);continue}let Gn;if(cn.key!=null)Gn=He.get(cn.key);else for(je=Oe;je<=pe;je++)if(Us[je-Oe]===0&&Xt(cn,k[je])){Gn=je;break}Gn===void 0?_n(cn,A,K,!0):(Us[Gn-Oe]=V+1,Gn>=Kr?Kr=Gn:ws=!0,b(cn,k[Gn],$,null,A,K,ee,W,Y),qe++)}const qr=ws?lg(Us):Ss;for(je=qr.length-1,V=Dn-1;V>=0;V--){const cn=Oe+V,Gn=k[cn],Yr=cn+1<le?k[cn+1].el:R;Us[V]===0?b(null,Gn,$,Yr,A,K,ee,W,Y):ws&&(je<0||V!==qr[je]?tn(Gn,$,Yr,2):je--)}}},tn=(g,k,$,R,A=null)=>{const{el:K,type:ee,transition:W,children:Y,shapeFlag:V}=g;if(V&6){tn(g.component.subTree,k,$,R);return}if(V&128){g.suspense.move(k,$,R);return}if(V&64){ee.move(g,k,$,se);return}if(ee===Te){i(K,k,$);for(let ae=0;ae<Y.length;ae++)tn(Y[ae],k,$,R);i(g.anchor,k,$);return}if(ee===ho){C(g,k,$);return}if(R!==2&&V&1&&W)if(R===0)W.beforeEnter(K),i(K,k,$),en(()=>W.enter(K),A);else{const{leave:ae,delayLeave:pe,afterLeave:_e}=W,Oe=()=>i(K,k,$),He=()=>{ae(K,()=>{Oe(),_e&&_e()})};pe?pe(K,Oe,He):He()}else i(K,k,$)},_n=(g,k,$,R=!1,A=!1)=>{const{type:K,props:ee,ref:W,children:Y,dynamicChildren:V,shapeFlag:le,patchFlag:ae,dirs:pe}=g;if(W!=null&&ll(W,null,$,g,!0),le&256){k.ctx.deactivate(g);return}const _e=le&1&&pe,Oe=!Fs(g);let He;if(Oe&&(He=ee&&ee.onVnodeBeforeUnmount)&&zn(He,k,g),le&6)Tn(g.component,$,R);else{if(le&128){g.suspense.unmount($,R);return}_e&&Bt(g,null,k,"beforeUnmount"),le&64?g.type.remove(g,k,$,A,se,R):V&&(K!==Te||ae>0&&ae&64)?F(V,k,$,!1,!0):(K===Te&&ae&384||!A&&le&16)&&F(Y,k,$),R&&Yn(g)}(Oe&&(He=ee&&ee.onVnodeUnmounted)||_e)&&en(()=>{He&&zn(He,k,g),_e&&Bt(g,null,k,"unmounted")},$)},Yn=g=>{const{type:k,el:$,anchor:R,transition:A}=g;if(k===Te){g.patchFlag>0&&g.patchFlag&2048&&A&&!A.persisted?g.children.forEach(ee=>{ee.type===mn?o(ee.el):Yn(ee)}):Vt($,R);return}if(k===ho){E(g);return}const K=()=>{o($),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(g.shapeFlag&1&&A&&!A.persisted){const{leave:ee,delayLeave:W}=A,Y=()=>ee($,K);W?W(g.el,K,Y):Y()}else K()},Vt=(g,k)=>{let $;for(;g!==k;)$=m(g),o(g),g=$;o(k)},Tn=(g,k,$)=>{g.type.__hmrId&&s_(g);const{bum:R,scope:A,update:K,subTree:ee,um:W}=g;R&&Zt(R),A.stop(),K&&(K.active=!1,_n(ee,g,k,$)),W&&en(W,k),en(()=>{g.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve()),c_(g)},F=(g,k,$,R=!1,A=!1,K=0)=>{for(let ee=K;ee<g.length;ee++)_n(g[ee],k,$,R,A)},J=g=>g.shapeFlag&6?J(g.component.subTree):g.shapeFlag&128?g.suspense.next():m(g.anchor||g.el),ne=(g,k,$)=>{g==null?k._vnode&&_n(k._vnode,null,null,!0):b(k._vnode||null,g,k,null,null,null,$),sc(),Up(),k._vnode=g},se={p:b,um:_n,m:tn,r:Yn,mt:Ie,mc:B,pc:$e,pbc:de,n:J,o:e};let Ee,Ne;return n&&([Ee,Ne]=n(se)),{render:ne,hydrate:Ee,createApp:K_(ne,Ee)}}function Wt({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function Po(e,n,s=!1){const i=e.children,o=n.children;if(re(i)&&re(o))for(let l=0;l<i.length;l++){const r=i[l];let c=o[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[l]=xt(o[l]),c.el=r.el),s||Po(r,c)),c.type===Hi&&(c.el=r.el),c.type===mn&&!c.el&&(c.el=r.el)}}function lg(e){const n=e.slice(),s=[0];let i,o,l,r,c;const u=e.length;for(i=0;i<u;i++){const p=e[i];if(p!==0){if(o=s[s.length-1],e[o]<p){n[i]=o,s.push(i);continue}for(l=0,r=s.length-1;l<r;)c=l+r>>1,e[s[c]]<p?l=c+1:r=c;p<e[s[l]]&&(l>0&&(n[i]=s[l-1]),s[l]=i)}}for(l=s.length,r=s[l-1];l-- >0;)s[l]=r,r=n[r];return s}const rg=e=>e.__isTeleport,Ts=e=>e&&(e.disabled||e.disabled===""),gc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,rl=(e,n)=>{const s=e&&e.to;if(Ve(s))if(n){const i=n(s);return i||U(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),i}else return U("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Ts(e)&&U(`Invalid Teleport target: ${s}`),s},cg={__isTeleport:!0,process(e,n,s,i,o,l,r,c,u,p){const{mc:d,pc:f,pbc:m,o:{insert:h,querySelector:_,createText:b,createComment:y}}=p,w=Ts(n.props);let{shapeFlag:I,children:v,dynamicChildren:C}=n;if(St&&(u=!1,C=null),e==null){const E=n.el=y("teleport start"),M=n.anchor=y("teleport end");h(E,s,i),h(M,s,i);const D=n.target=rl(n.props,_),T=n.targetAnchor=b("");D?(h(T,D),r=r||gc(D)):w||U("Invalid Teleport target on mount:",D,`(${typeof D})`);const B=(oe,de)=>{I&16&&d(v,oe,de,o,l,r,c,u)};w?B(s,M):D&&B(D,T)}else{n.el=e.el;const E=n.anchor=e.anchor,M=n.target=e.target,D=n.targetAnchor=e.targetAnchor,T=Ts(e.props),B=T?s:M,oe=T?E:D;if(r=r||gc(M),C?(m(e.dynamicChildren,C,B,o,l,r,c),Po(e,n,!0)):u||f(e,n,B,oe,o,l,r,c,!1),w)T||Ji(n,s,E,p,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const de=n.target=rl(n.props,_);de?Ji(n,de,null,p,0):U("Invalid Teleport target on update:",M,`(${typeof M})`)}else T&&Ji(n,M,D,p,1)}hd(n)},remove(e,n,s,i,{um:o,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:f,props:m}=e;if(f&&l(d),(r||!Ts(m))&&(l(p),c&16))for(let h=0;h<u.length;h++){const _=u[h];o(_,n,s,!0,!!_.dynamicChildren)}},move:Ji,hydrate:ug};function Ji(e,n,s,{o:{insert:i},m:o},l=2){l===0&&i(e.targetAnchor,n,s);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=e,f=l===2;if(f&&i(r,n,s),(!f||Ts(d))&&u&16)for(let m=0;m<p.length;m++)o(p[m],n,s,2);f&&i(c,n,s)}function ug(e,n,s,i,o,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=n.target=rl(n.props,u);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if(Ts(n.props))n.anchor=p(r(e),n,c(e),s,i,o,l),n.targetAnchor=f;else{n.anchor=r(e);let m=f;for(;m;)if(m=r(m),m&&m.nodeType===8&&m.data==="teleport anchor"){n.targetAnchor=m,d._lpa=n.targetAnchor&&r(n.targetAnchor);break}p(f,n,d,s,i,o,l)}hd(n)}return n.anchor&&r(n.anchor)}const pg=cg;function hd(e){const n=e.ctx;if(n&&n.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Te=Symbol.for("v-fgt"),Hi=Symbol.for("v-txt"),mn=Symbol.for("v-cmt"),ho=Symbol.for("v-stc"),ci=[];let Wn=null;function x(e=!1){ci.push(Wn=e?null:[])}function dg(){ci.pop(),Wn=ci[ci.length-1]||null}let xi=1;function vc(e){xi+=e}function _d(e){return e.dynamicChildren=xi>0?Wn||Ss:null,dg(),xi>0&&Wn&&Wn.push(e),e}function ie(e,n,s,i,o,l){return _d(t(e,n,s,i,o,l,!0))}function P(e,n,s,i,o){return _d(H(e,n,s,i,o,!0))}function Nt(e){return e?e.__v_isVNode===!0:!1}function Xt(e,n){return n.shapeFlag&6&&Cs.has(n.type)?(e.shapeFlag&=-257,n.shapeFlag&=-513,!1):e.type===n.type&&e.key===n.key}const fg=(...e)=>mg(...e),la="__vInternal",gd=({key:e})=>e??null,_o=({ref:e,ref_key:n,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Ve(e)||Fe(e)||fe(e)?{i:Xe,r:e,k:n,f:!!s}:e:null);function t(e,n=null,s=null,i=0,o=null,l=e===Te?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&gd(n),ref:n&&_o(n),scopeId:sa,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Xe};return c?(_r(u,s),l&128&&e.normalize(u)):s&&(u.shapeFlag|=Ve(s)?8:16),u.key!==u.key&&U("VNode created with invalid key (NaN). VNode type:",u.type),xi>0&&!r&&Wn&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Wn.push(u),u}const H=fg;function mg(e,n=null,s=null,i=0,o=null,l=!1){if((!e||e===T_)&&(e||U(`Invalid vnode type when creating vnode: ${e}.`),e=mn),Nt(e)){const c=at(e,n,!0);return s&&_r(c,s),xi>0&&!l&&Wn&&(c.shapeFlag&6?Wn[Wn.indexOf(e)]=c:Wn.push(c)),c.patchFlag|=-2,c}if(wd(e)&&(e=e.__vccOpts),n){n=q(n);let{class:c,style:u}=n;c&&!Ve(c)&&(n.class=We(c)),Le(u)&&(Oo(u)&&!re(u)&&(u=Ue({},u)),n.style=nn(u))}const r=Ve(e)?1:Qp(e)?128:rg(e)?64:Le(e)?4:fe(e)?2:0;return r&4&&Oo(e)&&(e=ge(e),U("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),t(e,n,s,i,o,r,l,!0)}function q(e){return e?Oo(e)||la in e?Ue({},e):e:null}function at(e,n,s=!1){const{props:i,ref:o,patchFlag:l,children:r}=e,c=n?ue(i||{},n):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&gd(c),ref:n&&n.ref?s&&o?re(o)?o.concat(_o(n)):[o,_o(n)]:_o(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l===-1&&re(r)?r.map(vd):r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Te?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&at(e.ssContent),ssFallback:e.ssFallback&&at(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function vd(e){const n=at(e);return re(e.children)&&(n.children=e.children.map(vd)),n}function a(e=" ",n=0){return H(Hi,null,e,n)}function we(e="",n=!1){return n?(x(),P(mn,null,e)):H(mn,null,e)}function Vn(e){return e==null||typeof e=="boolean"?H(mn):re(e)?H(Te,null,e.slice()):typeof e=="object"?xt(e):H(Hi,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:at(e)}function _r(e,n){let s=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(re(n))s=16;else if(typeof n=="object")if(i&65){const o=n.default;o&&(o._c&&(o._d=!1),_r(e,o()),o._c&&(o._d=!0));return}else{s=32;const o=n._;!o&&!(la in n)?n._ctx=Xe:o===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else fe(n)?(n={default:n,_ctx:Xe},s=32):(n=String(n),i&64?(s=16,n=[a(n)]):s=8);e.children=n,e.shapeFlag|=s}function ue(...e){const n={};for(let s=0;s<e.length;s++){const i=e[s];for(const o in i)if(o==="class")n.class!==i.class&&(n.class=We([n.class,i.class]));else if(o==="style")n.style=nn([n.style,i.style]);else if(Ri(o)){const l=n[o],r=i[o];r&&l!==r&&!(re(l)&&l.includes(r))&&(n[o]=l?[].concat(l,r):r)}else o!==""&&(n[o]=i[o])}return n}function zn(e,n,s,i=null){Rn(e,n,7,[s,i])}const hg=rd();let _g=0;function gg(e,n,s){const i=e.type,o=(n?n.appContext:e.appContext)||hg,l={uid:_g++,vnode:e,type:i,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ud(i,o),emitsOptions:Yp(i,o),emit:null,emitted:null,propsDefaults:De,inheritAttrs:i.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=z_(l),l.root=n?n.root:l,l.emit=f_.bind(null,l),e.ce&&e.ce(l),l}let Ze=null;const Mn=()=>Ze||Xe;let gr,Is,kc="__VUE_INSTANCE_SETTERS__";(Is=xo()[kc])||(Is=xo()[kc]=[]),Is.push(e=>Ze=e),gr=e=>{Is.length>1?Is.forEach(n=>n(e)):Is[0](e)};const zs=e=>{gr(e),e.scope.on()},ds=()=>{Ze&&Ze.scope.off(),gr(null)},vg=Dt("slot,component");function cl(e,n){const s=n.isNativeTag||fp;(vg(e)||s(e))&&U("Do not use built-in or reserved HTML elements as component id: "+e)}function kd(e){return e.vnode.shapeFlag&4}let Ei=!1;function kg(e,n=!1){Ei=n;const{props:s,children:i}=e.vnode,o=kd(e);q_(e,s,o,n),tg(e,i);const l=o?bg(e,n):void 0;return Ei=!1,l}function bg(e,n){var s;const i=e.type;{if(i.name&&cl(i.name,e.appContext.config),i.components){const l=Object.keys(i.components);for(let r=0;r<l.length;r++)cl(l[r],e.appContext.config)}if(i.directives){const l=Object.keys(i.directives);for(let r=0;r<l.length;r++)Xp(l[r])}i.compilerOptions&&yg()&&U('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Jo(new Proxy(e.ctx,ad)),A_(e);const{setup:o}=i;if(o){const l=e.setupContext=o.length>1?yd(e):null;zs(e),gs();const r=ht(o,e,0,[ti(e.props),l]);if(vs(),ds(),Ql(r)){if(r.then(ds,ds),n)return r.then(c=>{bc(e,c,n)}).catch(c=>{ea(c,e,0)});if(e.asyncDep=r,!e.suspense){const c=(s=i.name)!=null?s:"Anonymous";U(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else bc(e,r,n)}else bd(e,n)}function bc(e,n,s){fe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Le(n)?(Nt(n)&&U("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=n,e.setupState=Pp(n),P_(e)):n!==void 0&&U(`setup() should return an object. Received: ${n===null?"null":typeof n}`),bd(e,s)}let ul;const yg=()=>!ul;function bd(e,n,s){const i=e.type;if(!e.render){if(!n&&ul&&!i.render){const o=i.template||mr(e).template;if(o){ct(e,"compile");const{isCustomElement:l,compilerOptions:r}=e.appContext.config,{delimiters:c,compilerOptions:u}=i,p=Ue(Ue({isCustomElement:l,delimiters:c},r),u);i.render=ul(o,p),ut(e,"compile")}}e.render=i.render||bn}zs(e),gs(),D_(e),vs(),ds(),!i.render&&e.render===bn&&!n&&(i.template?U('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):U("Component is missing template or render function."))}function wg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,s){return Mo(),rn(e,"get","$attrs"),n[s]},set(){return U("setupContext.attrs is readonly."),!1},deleteProperty(){return U("setupContext.attrs is readonly."),!1}}))}function Ig(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(n,s){return rn(e,"get","$slots"),n[s]}}))}function yd(e){return Object.freeze({get attrs(){return wg(e)},get slots(){return Ig(e)},get emit(){return(s,...i)=>e.emit(s,...i)},expose:s=>{if(e.exposed&&U("expose() should be called only once per setup()."),s!=null){let i=typeof s;i==="object"&&(re(s)?i="array":Fe(s)&&(i="ref")),i!=="object"&&U(`expose() should be passed a plain object, received ${i}.`)}e.exposed=s||{}}})}function ra(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Pp(Jo(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in ps)return ps[s](e)},has(n,s){return s in n||s in ps}}))}const xg=/(?:^|[-_])(\w)/g,Eg=e=>e.replace(xg,n=>n.toUpperCase()).replace(/[-_]/g,"");function $i(e,n=!0){return fe(e)?e.displayName||e.name:e.name||n&&e.__name}function ca(e,n,s=!1){let i=$i(n);if(!i&&n.__file){const o=n.__file.match(/([^/\\]+)\.\w+$/);o&&(i=o[1])}if(!i&&e&&e.parent){const o=l=>{for(const r in l)if(l[r]===n)return r};i=o(e.components||e.parent.type.components)||o(e.appContext.components)}return i?Eg(i):s?"App":"Anonymous"}function wd(e){return fe(e)&&"__vccOpts"in e}const L=(e,n)=>Wh(e,n,Ei);function wn(e,n,s){const i=arguments.length;return i===2?Le(n)&&!re(n)?Nt(n)?H(e,null,[n]):H(e,n):H(e,null,n):(i>3?s=Array.prototype.slice.call(arguments,2):i===3&&Nt(s)&&(s=[s]),H(e,n,s))}const $g=Symbol.for("v-scx"),Cg=()=>{{const e=z($g);return e||U("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function ba(e){return!!(e&&e.__v_isShallow)}function Og(){if(typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},i={style:"color:#9d288c"},o={header(f){return Le(f)?f.__isVue?["div",e,"VueInstance"]:Fe(f)?["div",{},["span",e,d(f)],"<",c(f.value),">"]:cs(f)?["div",{},["span",e,ba(f)?"ShallowReactive":"Reactive"],"<",c(f),`>${Rt(f)?" (readonly)":""}`]:Rt(f)?["div",{},["span",e,ba(f)?"ShallowReadonly":"Readonly"],"<",c(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...l(f.$)]}};function l(f){const m=[];f.type.props&&f.props&&m.push(r("props",ge(f.props))),f.setupState!==De&&m.push(r("setup",f.setupState)),f.data!==De&&m.push(r("data",ge(f.data)));const h=u(f,"computed");h&&m.push(r("computed",h));const _=u(f,"inject");return _&&m.push(r("injected",_)),m.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),m}function r(f,m){return m=Ue({},m),Object.keys(m).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(m).map(h=>["div",{},["span",i,h+": "],c(m[h],!1)])]]:["span",{}]}function c(f,m=!0){return typeof f=="number"?["span",n,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",i,f]:Le(f)?["object",{object:m?ge(f):f}]:["span",s,String(f)]}function u(f,m){const h=f.type;if(fe(h))return;const _={};for(const b in f.ctx)p(h,b,m)&&(_[b]=f.ctx[b]);return _}function p(f,m,h){const _=f[h];if(re(_)&&_.includes(m)||Le(_)&&m in _||f.extends&&p(f.extends,m,h)||f.mixins&&f.mixins.some(b=>p(b,m,h)))return!0}function d(f){return ba(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const Ro="3.3.4",Sg="http://www.w3.org/2000/svg",Jt=typeof document<"u"?document:null,yc=Jt&&Jt.createElement("template"),Mg={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,i)=>{const o=n?Jt.createElementNS(Sg,e):Jt.createElement(e,s?{is:s}:void 0);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>Jt.createTextNode(e),createComment:e=>Jt.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Jt.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,i,o,l){const r=s?s.previousSibling:n.lastChild;if(o&&(o===l||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),s),!(o===l||!(o=o.nextSibling)););else{yc.innerHTML=i?`<svg>${e}</svg>`:e;const c=yc.content;if(i){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}n.insertBefore(c,s)}return[r?r.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Fg(e,n,s){const i=e._vtc;i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function Tg(e,n,s){const i=e.style,o=Ve(s);if(s&&!o){if(n&&!Ve(n))for(const l in n)s[l]==null&&pl(i,l,"");for(const l in s)pl(i,l,s[l])}else{const l=i.display;o?n!==s&&(i.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(i.display=l)}}const Lg=/[^\\];\s*$/,wc=/\s*!important$/;function pl(e,n,s){if(re(s))s.forEach(i=>pl(e,n,i));else if(s==null&&(s=""),Lg.test(s)&&U(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))e.setProperty(n,s);else{const i=zg(e,n);wc.test(s)?e.setProperty(_t(i),s.replace(wc,""),"important"):e[i]=s}}const Ic=["Webkit","Moz","ms"],ya={};function zg(e,n){const s=ya[n];if(s)return s;let i=tt(n);if(i!=="filter"&&i in e)return ya[n]=i;i=hs(i);for(let o=0;o<Ic.length;o++){const l=Ic[o]+i;if(l in e)return ya[n]=l}return n}const xc="http://www.w3.org/1999/xlink";function Ag(e,n,s,i,o){if(i&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(xc,n.slice(6,n.length)):e.setAttributeNS(xc,n,s);else{const l=oh(n);s==null||l&&!vp(s)?e.removeAttribute(n):e.setAttribute(n,l?"":s)}}function Pg(e,n,s,i,o,l,r){if(n==="innerHTML"||n==="textContent"){i&&r(i,o,l),e[n]=s??"";return}const c=e.tagName;if(n==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=s;const p=c==="OPTION"?e.getAttribute("value"):e.value,d=s??"";p!==d&&(e.value=d),s==null&&e.removeAttribute(n);return}let u=!1;if(s===""||s==null){const p=typeof e[n];p==="boolean"?s=vp(s):s==null&&p==="string"?(s="",u=!0):p==="number"&&(s=0,u=!0)}try{e[n]=s}catch(p){u||U(`Failed setting prop "${n}" on <${c.toLowerCase()}>: value ${s} is invalid.`,p)}u&&e.removeAttribute(n)}function Rg(e,n,s,i){e.addEventListener(n,s,i)}function Ng(e,n,s,i){e.removeEventListener(n,s,i)}function jg(e,n,s,i,o=null){const l=e._vei||(e._vei={}),r=l[n];if(i&&r)r.value=i;else{const[c,u]=Dg(n);if(i){const p=l[n]=Vg(i,o);Rg(e,c,p,u)}else r&&(Ng(e,c,r,u),l[n]=void 0)}}const Ec=/(?:Once|Passive|Capture)$/;function Dg(e){let n;if(Ec.test(e)){n={};let i;for(;i=e.match(Ec);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_t(e.slice(2)),n]}let wa=0;const Hg=Promise.resolve(),Ug=()=>wa||(Hg.then(()=>wa=0),wa=Date.now());function Vg(e,n){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;Rn(Bg(i,s.value),n,5,[i])};return s.value=e,s.attached=Ug(),s}function Bg(e,n){if(re(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(i=>o=>!o._stopped&&i&&i(o))}else return n}const $c=/^on[a-z]/,Wg=(e,n,s,i,o=!1,l,r,c,u)=>{n==="class"?Fg(e,i,o):n==="style"?Tg(e,s,i):Ri(n)?wo(n)||jg(e,n,s,i,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Kg(e,n,i,o))?Pg(e,n,i,l,r,c,u):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),Ag(e,n,i,o))};function Kg(e,n,s,i){return i?!!(n==="innerHTML"||n==="textContent"||n in e&&$c.test(n)&&fe(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||$c.test(n)&&Ve(s)?!1:n in e}const bt="transition",Bs="animation",Id={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qg=Ue({},w_,Id),Kt=(e,n=[])=>{re(e)?e.forEach(s=>s(...n)):e&&e(...n)},Cc=e=>e?re(e)?e.some(n=>n.length>1):e.length>1:!1;function Yg(e){const n={};for(const X in e)X in Id||(n[X]=e[X]);if(e.css===!1)return n;const{name:s="v",type:i,duration:o,enterFromClass:l=`${s}-enter-from`,enterActiveClass:r=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:u=l,appearActiveClass:p=r,appearToClass:d=c,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:m=`${s}-leave-active`,leaveToClass:h=`${s}-leave-to`}=e,_=Gg(o),b=_&&_[0],y=_&&_[1],{onBeforeEnter:w,onEnter:I,onEnterCancelled:v,onLeave:C,onLeaveCancelled:E,onBeforeAppear:M=w,onAppear:D=I,onAppearCancelled:T=v}=n,B=(X,ve,be)=>{wt(X,ve?d:c),wt(X,ve?p:r),be&&be()},oe=(X,ve)=>{X._isLeaving=!1,wt(X,f),wt(X,h),wt(X,m),ve&&ve()},de=X=>(ve,be)=>{const Ie=X?D:I,Re=()=>B(ve,X,be);Kt(Ie,[ve,Re]),Oc(()=>{wt(ve,X?u:l),pt(ve,X?d:c),Cc(Ie)||Sc(ve,i,b,Re)})};return Ue(n,{onBeforeEnter(X){Kt(w,[X]),pt(X,l),pt(X,r)},onBeforeAppear(X){Kt(M,[X]),pt(X,u),pt(X,p)},onEnter:de(!1),onAppear:de(!0),onLeave(X,ve){X._isLeaving=!0;const be=()=>oe(X,ve);pt(X,f),Ed(),pt(X,m),Oc(()=>{X._isLeaving&&(wt(X,f),pt(X,h),Cc(C)||Sc(X,i,y,be))}),Kt(C,[X,be])},onEnterCancelled(X){B(X,!1),Kt(v,[X])},onAppearCancelled(X){B(X,!0),Kt(T,[X])},onLeaveCancelled(X){oe(X),Kt(E,[X])}})}function Gg(e){if(e==null)return null;if(Le(e))return[Ia(e.enter),Ia(e.leave)];{const n=Ia(e);return[n,n]}}function Ia(e){const n=Qm(e);return Qh(n,"<transition> explicit duration"),n}function pt(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(n)}function wt(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const{_vtc:s}=e;s&&(s.delete(n),s.size||(e._vtc=void 0))}function Oc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Qg=0;function Sc(e,n,s,i){const o=e._endId=++Qg,l=()=>{o===e._endId&&i()};if(s)return setTimeout(l,s);const{type:r,timeout:c,propCount:u}=xd(e,n);if(!r)return i();const p=r+"end";let d=0;const f=()=>{e.removeEventListener(p,m),l()},m=h=>{h.target===e&&++d>=u&&f()};setTimeout(()=>{d<u&&f()},c+1),e.addEventListener(p,m)}function xd(e,n){const s=window.getComputedStyle(e),i=_=>(s[_]||"").split(", "),o=i(`${bt}Delay`),l=i(`${bt}Duration`),r=Mc(o,l),c=i(`${Bs}Delay`),u=i(`${Bs}Duration`),p=Mc(c,u);let d=null,f=0,m=0;n===bt?r>0&&(d=bt,f=r,m=l.length):n===Bs?p>0&&(d=Bs,f=p,m=u.length):(f=Math.max(r,p),d=f>0?r>p?bt:Bs:null,m=d?d===bt?l.length:u.length:0);const h=d===bt&&/\b(transform|all)(,|$)/.test(i(`${bt}Property`).toString());return{type:d,timeout:f,propCount:m,hasTransform:h}}function Mc(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((s,i)=>Fc(s)+Fc(e[i])))}function Fc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Ed(){return document.body.offsetHeight}const $d=new WeakMap,Cd=new WeakMap,Od={name:"TransitionGroup",props:Ue({},qg,{tag:String,moveClass:String}),setup(e,{slots:n}){const s=Mn(),i=y_();let o,l;return oa(()=>{if(!o.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!t0(o[0].el,s.vnode.el,r))return;o.forEach(Jg),o.forEach(e0);const c=o.filter(n0);Ed(),c.forEach(u=>{const p=u.el,d=p.style;pt(p,r),d.transform=d.webkitTransform=d.transitionDuration="";const f=p._moveCb=m=>{m&&m.target!==p||(!m||/transform$/.test(m.propertyName))&&(p.removeEventListener("transitionend",f),p._moveCb=null,wt(p,r))};p.addEventListener("transitionend",f)})}),()=>{const r=ge(e),c=Yg(r);let u=r.tag||Te;o=l,l=n.default?ed(n.default()):[];for(let p=0;p<l.length;p++){const d=l[p];d.key!=null?Fo(d,el(d,c,i,s)):U("<TransitionGroup> children must be keyed.")}if(o)for(let p=0;p<o.length;p++){const d=o[p];Fo(d,el(d,c,i,s)),$d.set(d,d.el.getBoundingClientRect())}return H(u,null,l)}}},Zg=e=>delete e.mode;Od.props;const Xg=Od;function Jg(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function e0(e){Cd.set(e,e.el.getBoundingClientRect())}function n0(e){const n=$d.get(e),s=Cd.get(e),i=n.left-s.left,o=n.top-s.top;if(i||o){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${i}px,${o}px)`,l.transitionDuration="0s",e}}function t0(e,n,s){const i=e.cloneNode();e._vtc&&e._vtc.forEach(r=>{r.split(/\s+/).forEach(c=>c&&i.classList.remove(c))}),s.split(/\s+/).forEach(r=>r&&i.classList.add(r)),i.style.display="none";const o=n.nodeType===1?n:n.parentNode;o.appendChild(i);const{hasTransform:l}=xd(i);return o.removeChild(i),l}const s0=["ctrl","shift","alt","meta"],i0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>s0.some(s=>e[`${s}Key`]&&!n.includes(s))},o0=(e,n)=>(s,...i)=>{for(let o=0;o<n.length;o++){const l=i0[n[o]];if(l&&l(s,n))return}return e(s,...i)},a0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},eo=(e,n)=>s=>{if(!("key"in s))return;const i=_t(s.key);if(n.some(o=>o===i||a0[o]===i))return e(s)},Sd={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):Ws(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:i}){!n!=!s&&(i?n?(i.beforeEnter(e),Ws(e,!0),i.enter(e)):i.leave(e,()=>{Ws(e,!1)}):Ws(e,n))},beforeUnmount(e,{value:n}){Ws(e,n)}};function Ws(e,n){e.style.display=n?e._vod:"none"}const l0=Ue({patchProp:Wg},Mg);let Tc;function r0(){return Tc||(Tc=og(l0))}const c0=(...e)=>{const n=r0().createApp(...e);u0(n),p0(n);const{mount:s}=n;return n.mount=i=>{const o=d0(i);if(!o)return;const l=n._component;!fe(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.innerHTML="";const r=s(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},n};function u0(e){Object.defineProperty(e.config,"isNativeTag",{value:n=>gp(n)||sh(n),writable:!1})}function p0(e){{const n=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return n},set(){U("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,i='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return U(i),s},set(){U(i)}})}}function d0(e){if(Ve(e)){const n=document.querySelector(e);return n||U(`Failed to mount app: mount target selector "${e}" returned null.`),n}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&U('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function f0(){Og()}f0();function dl(e,n={},s){for(const i in e){const o=e[i],l=s?`${s}:${i}`:i;typeof o=="object"&&o!==null?dl(o,n,l):typeof o=="function"&&(n[l]=o)}return n}const m0={run:e=>e()},h0=()=>m0,Md=typeof console.createTask<"u"?console.createTask:h0;function _0(e,n){const s=n.shift(),i=Md(s);return e.reduce((o,l)=>o.then(()=>i.run(()=>l(...n))),Promise.resolve())}function g0(e,n){const s=n.shift(),i=Md(s);return Promise.all(e.map(o=>i.run(()=>o(...n))))}function xa(e,n){for(const s of[...e])s(n)}class v0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,s,i={}){if(!n||typeof s!="function")return()=>{};const o=n;let l;for(;this._deprecatedHooks[n];)l=this._deprecatedHooks[n],n=l.to;if(l&&!i.allowDeprecated){let r=l.message;r||(r=`${o} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(s),()=>{s&&(this.removeHook(n,s),s=void 0)}}hookOnce(n,s){let i,o=(...l)=>(typeof i=="function"&&i(),i=void 0,o=void 0,s(...l));return i=this.hook(n,o),i}removeHook(n,s){if(this._hooks[n]){const i=this._hooks[n].indexOf(s);i!==-1&&this._hooks[n].splice(i,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,s){this._deprecatedHooks[n]=typeof s=="string"?{to:s}:s;const i=this._hooks[n]||[];delete this._hooks[n];for(const o of i)this.hook(n,o)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const s in n)this.deprecateHook(s,n[s])}addHooks(n){const s=dl(n),i=Object.keys(s).map(o=>this.hook(o,s[o]));return()=>{for(const o of i.splice(0,i.length))o()}}removeHooks(n){const s=dl(n);for(const i in s)this.removeHook(i,s[i])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...s){return s.unshift(n),this.callHookWith(_0,n,...s)}callHookParallel(n,...s){return s.unshift(n),this.callHookWith(g0,n,...s)}callHookWith(n,s,...i){const o=this._before||this._after?{name:s,args:i,context:{}}:void 0;this._before&&xa(this._before,o);const l=n(s in this._hooks?[...this._hooks[s]]:[],i);return l instanceof Promise?l.finally(()=>{this._after&&o&&xa(this._after,o)}):(this._after&&o&&xa(this._after,o),l)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const s=this._before.indexOf(n);s!==-1&&this._before.splice(s,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const s=this._after.indexOf(n);s!==-1&&this._after.splice(s,1)}}}}function k0(){return new v0}function b0(e){return Array.isArray(e)?e:[e]}const Fd=["title","script","style","noscript"],Td=["base","meta","link","style","script","noscript"],y0=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],w0=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],I0=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Ld(e){let n=9;for(let s=0;s<e.length;)n=Math.imul(n^e.charCodeAt(s++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function fl(e){return Ld(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`)}function x0(e){let n=9;for(const s of e)for(let i=0;i<s.length;)n=Math.imul(n^s.charCodeAt(i++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function zd(e,n){const{props:s,tag:i}=e;if(w0.includes(i))return i;if(i==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const o=["id"];i==="meta"&&o.push("name","property","http-equiv");for(const l of o)if(typeof s[l]<"u"){const r=String(s[l]);return n&&!n(r)?!1:`${i}:${l}:${r}`}return!1}function Lc(e,n){return e==null?n||null:typeof e=="function"?e(n):e}function no(e,n=!1,s){const{tag:i,$el:o}=e;o&&(Object.entries(i.props).forEach(([l,r])=>{r=String(r);const c=`attr:${l}`;if(l==="class"){if(!r)return;for(const u of r.split(" ")){const p=`${c}:${u}`;s&&s(e,p,()=>o.classList.remove(u)),o.classList.contains(u)||o.classList.add(u)}return}s&&!l.startsWith("data-h-")&&s(e,c,()=>o.removeAttribute(l)),(n||o.getAttribute(l)!==r)&&o.setAttribute(l,r)}),Fd.includes(i.tag)&&(i.textContent&&i.textContent!==o.textContent?o.textContent=i.textContent:i.innerHTML&&i.innerHTML!==o.innerHTML&&(o.innerHTML=i.innerHTML)))}let Ks=!1;async function Ad(e,n={}){var m,h;const s={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const i=n.document||e.resolvedOptions.document||window.document,o=(await e.resolveTags()).map(c);if(e.resolvedOptions.experimentalHashHydration&&(Ks=Ks||e._hash||!1,Ks)){const _=x0(o.map(b=>b.tag._h));if(Ks===_)return;Ks=_}const l=e._popSideEffectQueue();e.headEntries().map(_=>_._sde).forEach(_=>{Object.entries(_).forEach(([b,y])=>{l[b]=y})});const r=(_,b,y)=>{b=`${_.renderId}:${b}`,_.entry&&(_.entry._sde[b]=y),delete l[b]};function c(_){const b=e.headEntries().find(w=>w._i===_._e),y={renderId:_._d||fl(_),$el:null,shouldRender:!0,tag:_,entry:b,markSideEffect:(w,I)=>r(y,w,I)};return y}const u=[],p={body:[],head:[]},d=_=>{e._elMap[_.renderId]=_.$el,u.push(_),r(_,"el",()=>{var b;(b=_.$el)==null||b.remove(),delete e._elMap[_.renderId]})};for(const _ of o){if(await e.hooks.callHook("dom:beforeRenderTag",_),!_.shouldRender)continue;const{tag:b}=_;if(b.tag==="title"){i.title=b.textContent||"",u.push(_);continue}if(b.tag==="htmlAttrs"||b.tag==="bodyAttrs"){_.$el=i[b.tag==="htmlAttrs"?"documentElement":"body"],no(_,!1,r),u.push(_);continue}if(_.$el=e._elMap[_.renderId],!_.$el&&b.key&&(_.$el=i.querySelector(`${(m=b.tagPosition)!=null&&m.startsWith("body")?"body":"head"} > ${b.tag}[data-h-${b._h}]`)),_.$el){_.tag._d&&no(_),d(_);continue}p[(h=b.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(_)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([_,b])=>{var w;if(!b.length)return;const y=(w=i==null?void 0:i[_])==null?void 0:w.children;if(y){for(const I of[...y].reverse()){const v=I.tagName.toLowerCase();if(!Td.includes(v))continue;const C=I.getAttributeNames().reduce((T,B)=>({...T,[B]:I.getAttribute(B)}),{}),E={tag:v,props:C};I.innerHTML&&(E.innerHTML=I.innerHTML);const M=fl(E);let D=b.findIndex(T=>(T==null?void 0:T.renderId)===M);if(D===-1){const T=zd(E);D=b.findIndex(B=>(B==null?void 0:B.tag._d)&&B.tag._d===T)}if(D!==-1){const T=b[D];T.$el=I,no(T),d(T),delete b[D]}}b.forEach(I=>{const v=I.tag.tagPosition||"head";f[v]=f[v]||i.createDocumentFragment(),I.$el||(I.$el=i.createElement(I.tag.tag),no(I,!0)),f[v].appendChild(I.$el),d(I)})}}),f.head&&i.head.appendChild(f.head),f.bodyOpen&&i.body.insertBefore(f.bodyOpen,i.body.firstChild),f.bodyClose&&i.body.appendChild(f.bodyClose);for(const _ of u)await e.hooks.callHook("dom:renderTag",_);Object.values(l).forEach(_=>_())}let Ea=null;async function Pd(e,n={}){function s(){return Ea=null,Ad(e,n)}const i=n.delayFn||(o=>setTimeout(o,10));return Ea=Ea||new Promise(o=>i(()=>o(s())))}function E0(e){return{hooks:{"entries:updated":function(n){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let s=e==null?void 0:e.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),Pd(n,{document:(e==null?void 0:e.document)||window.document,delayFn:s})}}}}function $0(e){var n;return((n=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const zc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Ac(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const n=e.tagPriority||e.tag;return n in zc?zc[n]:10}const C0=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function O0(){return{hooks:{"tags:resolve":e=>{const n=s=>{var i;return(i=e.tags.find(o=>o._d===s))==null?void 0:i._p};for(const{prefix:s,offset:i}of C0)for(const o of e.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(s))){const l=n(o.tagPriority.replace(s,""));typeof l<"u"&&(o._p=l+i)}e.tags.sort((s,i)=>s._p-i._p).sort((s,i)=>Ac(s)-Ac(i))}}}}function S0(){return{hooks:{"tags:resolve":e=>{const{tags:n}=e;let s=n.findIndex(o=>o.tag==="titleTemplate");const i=n.findIndex(o=>o.tag==="title");if(i!==-1&&s!==-1){const o=Lc(n[s].textContent,n[i].textContent);o!==null?n[i].textContent=o||n[i].textContent:delete n[i]}else if(s!==-1){const o=Lc(n[s].textContent);o!==null&&(n[s].textContent=o,n[s].tag="title",s=-1)}s!==-1&&delete n[s],e.tags=n.filter(Boolean)}}}}function M0(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const F0=["link","style","script","noscript"];function T0(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:n})=>{n.experimentalHashHydration===!0&&(e._h=fl(e)),e.key&&F0.includes(e.tag)&&(e._h=Ld(e.key),e.props[`data-h-${e._h}`]="")}}}}const Pc=["script","link","bodyAttrs"];function L0(){const e=(n,s)=>{const i={},o={};Object.entries(s.props).forEach(([r,c])=>{r.startsWith("on")&&typeof c=="function"?o[r]=c:i[r]=c});let l;return n==="dom"&&s.tag==="script"&&typeof i.src=="string"&&typeof o.onload<"u"&&(l=i.src,delete i.src),{props:i,eventHandlers:o,delayedSrc:l}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(s=>(!Pc.includes(s.tag)||!Object.entries(s.props).find(([i,o])=>i.startsWith("on")&&typeof o=="function")||(s.props=e("ssr",s).props),s))},"dom:beforeRenderTag":function(n){if(!Pc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([l,r])=>l.startsWith("on")&&typeof r=="function"))return;const{props:s,eventHandlers:i,delayedSrc:o}=e("dom",n.tag);Object.keys(i).length&&(n.tag.props=s,n.tag._eventHandlers=i,n.tag._delayedSrc=o)},"dom:renderTag":function(n){const s=n.$el;if(!n.tag._eventHandlers||!s)return;const i=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(n.tag._eventHandlers).forEach(([o,l])=>{const r=`${n.tag._d||n.tag._p}:${o}`,c=o.slice(2).toLowerCase(),u=`data-h-${c}`;if(n.markSideEffect(r,()=>{}),s.hasAttribute(u))return;const p=l;s.setAttribute(u,""),i.addEventListener(c,p),n.entry&&(n.entry._sde[r]=()=>{i.removeEventListener(c,p),s.removeAttribute(u)})}),n.tag._delayedSrc&&s.setAttribute("src",n.tag._delayedSrc)}}}}const z0=["templateParams","htmlAttrs","bodyAttrs"];function A0(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(i=>{e.props[i]&&(e.key=e.props[i],delete e.props[i])});const s=zd(e)||(e.key?`${e.tag}:${e.key}`:!1);s&&(e._d=s)},"tags:resolve":function(e){const n={};e.tags.forEach(i=>{const o=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,l=n[o];if(l){let c=i==null?void 0:i.tagDuplicateStrategy;if(!c&&z0.includes(i.tag)&&(c="merge"),c==="merge"){const u=l.props;["class","style"].forEach(p=>{i.props[p]&&u[p]&&(p==="style"&&!u[p].endsWith(";")&&(u[p]+=";"),i.props[p]=`${u[p]} ${i.props[p]}`)}),n[o].props={...u,...i.props};return}else if(i._e===l._e){l._duped=l._duped||[],i._d=`${l._d}:${l._duped.length+1}`,l._duped.push(i);return}}const r=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(Td.includes(i.tag)&&r===0){delete n[o];return}n[o]=i});const s=[];Object.values(n).forEach(i=>{const o=i._duped;delete i._duped,s.push(i),o&&s.push(...o)}),e.tags=s}}}}function to(e,n){function s(l){if(["s","pageTitle"].includes(l))return n.pageTitle;let r;return l.includes(".")?r=l.split(".").reduce((c,u)=>c&&c[u]||void 0,n):r=n[l],typeof r<"u"?r||"":!1}let i=e;try{i=decodeURI(e)}catch{}return(i.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const r=s(l.slice(1));typeof r=="string"&&(e=e.replace(new RegExp(`\\${l}(\\W|$)`,"g"),`${r}$1`).trim())}),n.separator&&(e.endsWith(n.separator)&&(e=e.slice(0,-n.separator.length).trim()),e.startsWith(n.separator)&&(e=e.slice(n.separator.length).trim()),e=e.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),e}function P0(){return{hooks:{"tags:resolve":e=>{var l;const{tags:n}=e,s=(l=n.find(r=>r.tag==="title"))==null?void 0:l.textContent,i=n.findIndex(r=>r.tag==="templateParams"),o=i!==-1?n[i].props:{};o.pageTitle=o.pageTitle||s||"";for(const r of n)if(["titleTemplate","title"].includes(r.tag)&&typeof r.textContent=="string")r.textContent=to(r.textContent,o);else if(r.tag==="meta"&&typeof r.props.content=="string")r.props.content=to(r.props.content,o);else if(r.tag==="link"&&typeof r.props.href=="string")r.props.href=to(r.props.href,o);else if(r.tag==="script"&&["application/json","application/ld+json"].includes(r.props.type)&&typeof r.innerHTML=="string")try{r.innerHTML=JSON.stringify(JSON.parse(r.innerHTML),(c,u)=>typeof u=="string"?to(u,o):u)}catch{}e.tags=n.filter(r=>r.tag!=="templateParams")}}}}const R0=typeof window<"u";let Rd;function N0(e){return Rd=e}function j0(){return Rd}async function D0(e,n){const s={tag:e,props:{}};return e==="templateParams"?(s.props=n,s):["title","titleTemplate"].includes(e)?(s.textContent=n instanceof Promise?await n:n,s):typeof n=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?s.props.src=n:s.innerHTML=n,s):!1:(s.props=await U0(e,{...n}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(i=>I0.includes(i)).forEach(i=>{(!["innerHTML","textContent"].includes(i)||Fd.includes(s.tag))&&(s[i]=s.props[i]),delete s.props[i]}),["innerHTML","textContent"].forEach(i=>{if(s.tag==="script"&&typeof s[i]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[i]=JSON.parse(s[i])}catch{s[i]=""}typeof s[i]=="object"&&(s[i]=JSON.stringify(s[i]))}),s.props.class&&(s.props.class=H0(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(i=>({...s,props:{...s.props,content:i}})):s)}function H0(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(n=>e[n])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function U0(e,n){for(const s of Object.keys(n)){const i=s.startsWith("data-");n[s]instanceof Promise&&(n[s]=await n[s]),String(n[s])==="true"?n[s]=i?"true":"":String(n[s])==="false"&&(i?n[s]="false":delete n[s])}return n}const V0=10;async function B0(e){const n=[];return Object.entries(e.resolvedInput).filter(([s,i])=>typeof i<"u"&&y0.includes(s)).forEach(([s,i])=>{const o=b0(i);n.push(...o.map(l=>D0(s,l)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((s,i)=>(s._e=e._i,s._p=(e._i<<V0)+i,s))}function W0(){return[A0(),O0(),P0(),S0(),T0(),L0(),M0()]}function K0(e={}){return[E0({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function q0(e={}){const n=Y0({...e,plugins:[...K0(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=$0(n.resolvedOptions.document)),N0(n),n}function Y0(e={}){let n=[],s={},i=0;const o=k0();e!=null&&e.hooks&&o.addHooks(e.hooks),e.plugins=[...W0(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(c=>c.hooks&&o.addHooks(c.hooks)),e.document=e.document||(R0?document:void 0);const l=()=>o.callHook("entries:updated",r),r={resolvedOptions:e,headEntries(){return n},get hooks(){return o},use(c){c.hooks&&o.addHooks(c.hooks)},push(c,u){const p={_i:i++,input:c,_sde:{}};return u!=null&&u.mode&&(p._m=u==null?void 0:u.mode),u!=null&&u.transform&&(p._t=u==null?void 0:u.transform),n.push(p),l(),{dispose(){n=n.filter(d=>d._i!==p._i?!0:(s={...s,...d._sde||{}},d._sde={},l(),!1))},patch(d){n=n.map(f=>(f._i===p._i&&(p.input=f.input=d,l()),f))}}},async resolveTags(){const c={tags:[],entries:[...n]};await o.callHook("entries:resolve",c);for(const u of c.entries){const p=u._t||(d=>d);if(u.resolvedInput=p(u.resolvedInput||u.input),u.resolvedInput)for(const d of await B0(u)){const f={tag:d,entry:u,resolvedOptions:r.resolvedOptions};await o.callHook("tag:normalise",f),c.tags.push(f.tag)}}return await o.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...s};return s={},c},_elMap:{}};return r.hooks.callHook("init",r),r}function G0(e){return typeof e=="function"?e():S(e)}function No(e,n=""){if(e instanceof Promise)return e;const s=G0(e);return!e||!s?s:Array.isArray(s)?s.map(i=>No(i,n)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([i,o])=>i==="titleTemplate"||i.startsWith("on")?[i,S(o)]:[i,No(o,i)])):s}const Q0=Ro.startsWith("3"),Z0=typeof window<"u",Nd="usehead";function vr(){return Mn()&&z(Nd)||j0()}function X0(e){return{install(s){Q0&&(s.config.globalProperties.$unhead=e,s.config.globalProperties.$head=e,s.provide(Nd,e))}}.install}function J0(e={}){const n=q0({...e,domDelayFn:s=>setTimeout(()=>on(()=>s()),10),plugins:[ev(),...(e==null?void 0:e.plugins)||[]]});return n.install=X0(n),n}function ev(){return{hooks:{"entries:resolve":function(e){for(const n of e.entries)n.resolvedInput=No(n.input)}}}}function nv(e,n={}){const s=vr(),i=G(!1),o=G({});ks(()=>{o.value=i.value?{}:No(e)});const l=s.push(o.value,n);return ke(o,c=>{l.patch(c)}),Mn()&&(Di(()=>{l.dispose()}),sd(()=>{i.value=!0}),td(()=>{i.value=!1})),l}function tv(e,n={}){return vr().push(e,n)}function jd(e,n={}){var i;const s=vr();if(s){const o=Z0||!!((i=s.resolvedOptions)!=null&&i.document);return n.mode==="server"&&o||n.mode==="client"&&!o?void 0:o?nv(e,n):tv(e,n)}}function sv(e,n){const s=J0(n||{}),i={unhead:s,install(o){Ro.startsWith("3")&&(o.config.globalProperties.$head=s,o.provide("usehead",s))},use(o){s.use(o)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(o,l){return s.push(o,l)},addEntry(o,l){return s.push(o,l)},addHeadObjs(o,l){return s.push(o,l)},addReactiveEntry(o,l){const r=jd(o,l);return typeof r<"u"?r.dispose:()=>{}},removeHeadObjs(){},updateDOM(o,l){l?Ad(s,{document:o}):Pd(s,{delayFn:r=>setTimeout(()=>r(),50),document:o})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=i.addHeadObjs,s.updateDOM=i.updateDOM,s.hooks.hook("dom:beforeRender",o=>{for(const l of i.hooks["before:dom"])l()===!1&&(o.shouldRender=!1)}),e&&i.addHeadObjs(e),i}const ui=Symbol("v-click-clicks"),es=Symbol("v-click-clicks-elements"),ml=Symbol("v-click-clicks-order-map"),pi=Symbol("v-click-clicks-disabled"),Dd=Symbol("slidev-slide-scale"),N=Symbol("slidev-slidev-context"),iv=Symbol("slidev-route"),ov=Symbol("slidev-slide-context"),Qt="slidev-vclick-target",$a="slidev-vclick-hidden",av="slidev-vclick-fade",Ca="slidev-vclick-hidden-explicitly",qs="slidev-vclick-current",so="slidev-vclick-prior",lv=["localhost","127.0.0.1"];let rv=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");function hl(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function cv(...e){let n,s,i;e.length===1?(n=0,i=1,[s]=e):[n,s,i=1]=e;const o=[];let l=n;for(;l<s;)o.push(l),l+=i||1;return o}function uv(e){return e!=null}function pv(e,n){return Object.fromEntries(Object.entries(e).map(([s,i])=>n(s,i)).filter(uv))}const ai={theme:"default",title:"I File",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",materia:"INFORMATICA",as:"2022/2023",version:"1.1.0"},Me=ai,Mt=Me.aspectRatio??16/9,Ft=Me.canvasWidth??980,kr=Math.ceil(Ft/Mt),br=L(()=>pv(Me.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function Hd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function jn(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const bs=Be({page:0,clicks:0});let dv=[],fv=[];jn(bs,"$syncUp",!0);jn(bs,"$syncDown",!0);jn(bs,"$paused",!1);jn(bs,"$onSet",e=>dv.push(e));jn(bs,"$onPatch",e=>fv.push(e));Hd();jn(bs,"$patch",async()=>!1);function Ud(e,n,s=!1){const i=[];let o=!1,l=!1,r,c;const u=Be(n);function p(h){i.push(h)}function d(h,_){u[h]!==_&&(clearTimeout(r),o=!0,u[h]=_,r=setTimeout(()=>o=!1,0))}function f(h){o||(clearTimeout(c),l=!0,Object.entries(h).forEach(([_,b])=>{u[_]=b}),c=setTimeout(()=>l=!1,0))}function m(h){let _;s?s&&window.addEventListener("storage",y=>{y&&y.key===h&&y.newValue&&f(JSON.parse(y.newValue))}):(_=new BroadcastChannel(h),_.addEventListener("message",y=>f(y.data)));function b(){!s&&_&&!l?_.postMessage(ge(u)):s&&!l&&window.localStorage.setItem(h,JSON.stringify(u)),o||i.forEach(y=>y(u))}if(ke(u,b,{deep:!0,flush:"sync"}),s){const y=window.localStorage.getItem(h);y&&f(JSON.parse(y))}}return{init:m,onPatch:p,patch:d,state:u}}const{init:mv,onPatch:hv,patch:Ys,state:Oa}=Ud(bs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ys=Be({});let _v=[],gv=[];jn(ys,"$syncUp",!0);jn(ys,"$syncDown",!0);jn(ys,"$paused",!1);jn(ys,"$onSet",e=>_v.push(e));jn(ys,"$onPatch",e=>gv.push(e));Hd();jn(ys,"$patch",async()=>!1);const{init:vv,onPatch:kv,patch:Vd,state:jo}=Ud(ys,{},!1),bv="modulepreload",yv=function(e){return"/3/files/"+e},Rc={},Tt=function(n,s,i){if(!s||s.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=yv(l),l in Rc)return;Rc[l]=!0;const r=l.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!i)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===l&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":bv,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>n())};function wv(e,n){let s,i,o;const l=G(!0),r=()=>{l.value=!0,o()};ke(e,r,{flush:"sync"});const c=typeof n=="function"?n:n.get,u=typeof n=="function"?void 0:n.set,p=ar((d,f)=>(i=d,o=f,{get(){return l.value&&(s=c(),l.value=!1),i(),s},set(m){u==null||u(m)}}));return Object.isExtensible(p)&&(p.trigger=r),p}function lt(e){return Jl()?(yp(e),!0):!1}function Ye(e){return typeof e=="function"?e():S(e)}function Iv(e){if(!Fe(e))return Be(e);const n=new Proxy({},{get(s,i,o){return S(Reflect.get(e.value,i,o))},set(s,i,o){return Fe(e.value[i])&&!Fe(o)?e.value[i].value=o:e.value[i]=o,!0},deleteProperty(s,i){return Reflect.deleteProperty(e.value,i)},has(s,i){return Reflect.has(e.value,i)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Be(n)}const Kn=typeof window<"u",xv=e=>typeof e<"u",Ev=e=>e!=null,$v=Object.prototype.toString,_l=e=>$v.call(e)==="[object Object]",gl=()=>+Date.now(),fs=()=>{},Cv=Ov();function Ov(){var e;return Kn&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Sv(e,n){function s(...i){return new Promise((o,l)=>{Promise.resolve(e(()=>n.apply(this,i),{fn:n,thisArg:this,args:i})).then(o).catch(l)})}return s}const Bd=e=>e();function Mv(e=Bd){const n=G(!0);function s(){n.value=!1}function i(){n.value=!0}const o=(...l)=>{n.value&&e(...l)};return{isActive:Bn(n),pause:s,resume:i,eventFilter:o}}function Fv(e,n){var s;if(typeof e=="number")return e+n;const i=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",o=e.slice(i.length),l=parseFloat(i)+n;return Number.isNaN(l)?e:l+o}function Wd(...e){if(e.length!==1)return Vh(...e);const n=e[0];return typeof n=="function"?Bn(ar(()=>({get:n,set:fs}))):G(n)}var Tv=Object.defineProperty,Lv=Object.defineProperties,zv=Object.getOwnPropertyDescriptors,Nc=Object.getOwnPropertySymbols,Av=Object.prototype.hasOwnProperty,Pv=Object.prototype.propertyIsEnumerable,jc=(e,n,s)=>n in e?Tv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Rv=(e,n)=>{for(var s in n||(n={}))Av.call(n,s)&&jc(e,s,n[s]);if(Nc)for(var s of Nc(n))Pv.call(n,s)&&jc(e,s,n[s]);return e},Nv=(e,n)=>Lv(e,zv(n));function jv(e){if(!Fe(e))return Dh(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=ar(()=>({get(){return e.value[s]},set(i){if(Array.isArray(e.value)){const o=[...e.value];o[s]=i,e.value=o}else{const o=Nv(Rv({},e.value),{[s]:i});Object.setPrototypeOf(o,e.value),e.value=o}}}));return n}function Kd(e,n=!0){Mn()?Ht(e):n?e():on(e)}function Dv(e){Mn()&&aa(e)}function Hv(e,n=1e3,s={}){const{immediate:i=!0,immediateCallback:o=!1}=s;let l=null;const r=G(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){const d=Ye(n);d<=0||(r.value=!0,o&&e(),c(),l=setInterval(e,d))}if(i&&Kn&&p(),Fe(n)||typeof n=="function"){const d=ke(n,()=>{r.value&&Kn&&p()});lt(d)}return lt(u),{isActive:r,pause:u,resume:p}}function Uv(e,n,s={}){const{immediate:i=!0}=s,o=G(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){o.value=!1,r()}function u(...p){r(),o.value=!0,l=setTimeout(()=>{o.value=!1,l=null,e(...p)},Ye(n))}return i&&(o.value=!0,Kn&&u()),lt(c),{isPending:Bn(o),start:u,stop:c}}function qd(e=!1,n={}){const{truthyValue:s=!0,falsyValue:i=!1}=n,o=Fe(e),l=G(e);function r(c){if(arguments.length)return l.value=c,l.value;{const u=Ye(s);return l.value=l.value===u?Ye(i):u,l.value}}return o?r:[l,r]}var Dc=Object.getOwnPropertySymbols,Vv=Object.prototype.hasOwnProperty,Bv=Object.prototype.propertyIsEnumerable,Wv=(e,n)=>{var s={};for(var i in e)Vv.call(e,i)&&n.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&Dc)for(var i of Dc(e))n.indexOf(i)<0&&Bv.call(e,i)&&(s[i]=e[i]);return s};function Kv(e,n,s={}){const i=s,{eventFilter:o=Bd}=i,l=Wv(i,["eventFilter"]);return ke(e,Sv(o,n),l)}var qv=Object.defineProperty,Yv=Object.defineProperties,Gv=Object.getOwnPropertyDescriptors,Do=Object.getOwnPropertySymbols,Yd=Object.prototype.hasOwnProperty,Gd=Object.prototype.propertyIsEnumerable,Hc=(e,n,s)=>n in e?qv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Qv=(e,n)=>{for(var s in n||(n={}))Yd.call(n,s)&&Hc(e,s,n[s]);if(Do)for(var s of Do(n))Gd.call(n,s)&&Hc(e,s,n[s]);return e},Zv=(e,n)=>Yv(e,Gv(n)),Xv=(e,n)=>{var s={};for(var i in e)Yd.call(e,i)&&n.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&Do)for(var i of Do(e))n.indexOf(i)<0&&Gd.call(e,i)&&(s[i]=e[i]);return s};function Jv(e,n,s={}){const i=s,{eventFilter:o}=i,l=Xv(i,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=Mv(o);return{stop:Kv(e,n,Zv(Qv({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function an(e){var n;const s=Ye(e);return(n=s==null?void 0:s.$el)!=null?n:s}const Je=Kn?window:void 0,Qd=Kn?window.document:void 0,e1=Kn?window.navigator:void 0;function xe(...e){let n,s,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,i,o]=e,n=Je):[n,s,i,o]=e,!n)return fs;Array.isArray(s)||(s=[s]),Array.isArray(i)||(i=[i]);const l=[],r=()=>{l.forEach(d=>d()),l.length=0},c=(d,f,m,h)=>(d.addEventListener(f,m,h),()=>d.removeEventListener(f,m,h)),u=ke(()=>[an(n),Ye(o)],([d,f])=>{r(),d&&l.push(...s.flatMap(m=>i.map(h=>c(d,m,h,f))))},{immediate:!0,flush:"post"}),p=()=>{u(),r()};return lt(p),p}let Uc=!1;function n1(e,n,s={}){const{window:i=Je,ignore:o=[],capture:l=!0,detectIframe:r=!1}=s;if(!i)return;Cv&&!Uc&&(Uc=!0,Array.from(i.document.body.children).forEach(m=>m.addEventListener("click",fs)));let c=!0;const u=m=>o.some(h=>{if(typeof h=="string")return Array.from(i.document.querySelectorAll(h)).some(_=>_===m.target||m.composedPath().includes(_));{const _=an(h);return _&&(m.target===_||m.composedPath().includes(_))}}),d=[xe(i,"click",m=>{const h=an(e);if(!(!h||h===m.target||m.composedPath().includes(h))){if(m.detail===0&&(c=!u(m)),!c){c=!0;return}n(m)}},{passive:!0,capture:l}),xe(i,"pointerdown",m=>{const h=an(e);h&&(c=!m.composedPath().includes(h)&&!u(m))},{passive:!0}),r&&xe(i,"blur",m=>{var h;const _=an(e);((h=i.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(_!=null&&_.contains(i.document.activeElement))&&n(m)})].filter(Boolean);return()=>d.forEach(m=>m())}function t1(e){return typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0}function s1(...e){let n,s,i={};e.length===3?(n=e[0],s=e[1],i=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,s=e[0],i=e[1]):(n=e[0],s=e[1]):(n=!0,s=e[0]);const{target:o=Je,eventName:l="keydown",passive:r=!1,dedupe:c=!1}=i,u=t1(n);return xe(o,l,d=>{d.repeat&&Ye(c)||u(d)&&s(d)},r)}function i1(e={}){var n;const{window:s=Je}=e,i=(n=e.document)!=null?n:s==null?void 0:s.document,o=wv(()=>null,()=>i==null?void 0:i.activeElement);return s&&(xe(s,"blur",l=>{l.relatedTarget===null&&o.trigger()},!0),xe(s,"focus",o.trigger,!0)),o}function o1(){const e=G(!1);return Mn()&&Ht(()=>{e.value=!0}),e}function Ui(e){const n=o1();return L(()=>(n.value,!!e()))}function a1(e,n={}){const{immediate:s=!0,window:i=Je}=n,o=G(!1);let l=0,r=null;function c(d){if(!o.value||!i)return;const f=d-l;e({delta:f,timestamp:d}),l=d,r=i.requestAnimationFrame(c)}function u(){!o.value&&i&&(o.value=!0,r=i.requestAnimationFrame(c))}function p(){o.value=!1,r!=null&&i&&(i.cancelAnimationFrame(r),r=null)}return s&&u(),lt(p),{isActive:Bn(o),pause:p,resume:u}}function ns(e,n={}){const{window:s=Je}=n,i=Ui(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let o;const l=G(!1),r=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",c):o.removeListener(c))},c=()=>{i.value&&(r(),o=s.matchMedia(Wd(e).value),l.value=!!(o!=null&&o.matches),o&&("addEventListener"in o?o.addEventListener("change",c):o.addListener(c)))};return ks(c),lt(()=>r()),l}const l1={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function r1(e,n={}){function s(c,u){let p=e[c];return u!=null&&(p=Fv(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:i=Je}=n;function o(c){return i?i.matchMedia(c).matches:!1}const l=c=>ns(`(min-width: ${s(c)})`,n),r=Object.keys(e).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Object.assign(r,{greater(c){return ns(`(min-width: ${s(c,.1)})`,n)},greaterOrEqual:l,smaller(c){return ns(`(max-width: ${s(c,-.1)})`,n)},smallerOrEqual(c){return ns(`(max-width: ${s(c)})`,n)},between(c,u){return ns(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`,n)},isGreater(c){return o(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return o(`(min-width: ${s(c)})`)},isSmaller(c){return o(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return o(`(max-width: ${s(c)})`)},isInBetween(c,u){return o(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`)},current(){const c=Object.keys(e).map(u=>[u,l(u)]);return L(()=>c.filter(([,u])=>u.value).map(([u])=>u))}})}function c1(e={}){const{navigator:n=e1,read:s=!1,source:i,copiedDuring:o=1500,legacy:l=!1}=e,r=["copy","cut"],c=Ui(()=>n&&"clipboard"in n),u=L(()=>c.value||l),p=G(""),d=G(!1),f=Uv(()=>d.value=!1,o);function m(){c.value?n.clipboard.readText().then(y=>{p.value=y}):p.value=b()}if(u.value&&s)for(const y of r)xe(y,m);async function h(y=Ye(i)){u.value&&y!=null&&(c.value?await n.clipboard.writeText(y):_(y),p.value=y,d.value=!0,f.start())}function _(y){const w=document.createElement("textarea");w.value=y??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function b(){var y,w,I;return(I=(w=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:w.toString())!=null?I:""}return{isSupported:u,text:p,copied:d,copy:h}}function u1(e){return JSON.parse(JSON.stringify(e))}const io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oo="__vueuse_ssr_handlers__",p1=d1();function d1(){return oo in io||(io[oo]=io[oo]||{}),io[oo]}function f1(e,n){return p1[e]||n}function m1(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var h1=Object.defineProperty,Vc=Object.getOwnPropertySymbols,_1=Object.prototype.hasOwnProperty,g1=Object.prototype.propertyIsEnumerable,Bc=(e,n,s)=>n in e?h1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Wc=(e,n)=>{for(var s in n||(n={}))_1.call(n,s)&&Bc(e,s,n[s]);if(Vc)for(var s of Vc(n))g1.call(n,s)&&Bc(e,s,n[s]);return e};const v1={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Kc="vueuse-storage";function k1(e,n,s,i={}){var o;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:f=Je,eventFilter:m,onError:h=T=>{console.error(T)}}=i,_=(d?it:G)(n);if(!s)try{s=f1("getDefaultStorage",()=>{var T;return(T=Je)==null?void 0:T.localStorage})()}catch(T){h(T)}if(!s)return _;const b=Ye(n),y=m1(b),w=(o=i.serializer)!=null?o:v1[y],{pause:I,resume:v}=Jv(_,()=>C(_.value),{flush:l,deep:r,eventFilter:m});return f&&c&&(xe(f,"storage",D),xe(f,Kc,M)),D(),_;function C(T){try{if(T==null)s.removeItem(e);else{const B=w.write(T),oe=s.getItem(e);oe!==B&&(s.setItem(e,B),f&&f.dispatchEvent(new CustomEvent(Kc,{detail:{key:e,oldValue:oe,newValue:B,storageArea:s}})))}}catch(B){h(B)}}function E(T){const B=T?T.newValue:s.getItem(e);if(B==null)return u&&b!==null&&s.setItem(e,w.write(b)),b;if(!T&&p){const oe=w.read(B);return typeof p=="function"?p(oe,b):y==="object"&&!Array.isArray(oe)?Wc(Wc({},b),oe):oe}else return typeof B!="string"?B:w.read(B)}function M(T){D(T.detail)}function D(T){if(!(T&&T.storageArea!==s)){if(T&&T.key==null){_.value=b;return}if(!(T&&T.key!==e)){I();try{_.value=E(T)}catch(B){h(B)}finally{T?on(v):v()}}}}}function b1(e){return ns("(prefers-color-scheme: dark)",e)}var y1=Object.defineProperty,w1=Object.defineProperties,I1=Object.getOwnPropertyDescriptors,qc=Object.getOwnPropertySymbols,x1=Object.prototype.hasOwnProperty,E1=Object.prototype.propertyIsEnumerable,Yc=(e,n,s)=>n in e?y1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,$1=(e,n)=>{for(var s in n||(n={}))x1.call(n,s)&&Yc(e,s,n[s]);if(qc)for(var s of qc(n))E1.call(n,s)&&Yc(e,s,n[s]);return e},C1=(e,n)=>w1(e,I1(n));function M5(e,n={}){var s,i;const{pointerTypes:o,preventDefault:l,stopPropagation:r,exact:c,onMove:u,onEnd:p,onStart:d,initialValue:f,axis:m="both",draggingElement:h=Je,handle:_=e}=n,b=G((s=Ye(f))!=null?s:{x:0,y:0}),y=G(),w=M=>o?o.includes(M.pointerType):!0,I=M=>{Ye(l)&&M.preventDefault(),Ye(r)&&M.stopPropagation()},v=M=>{if(!w(M)||Ye(c)&&M.target!==Ye(e))return;const D=Ye(e).getBoundingClientRect(),T={x:M.clientX-D.left,y:M.clientY-D.top};(d==null?void 0:d(T,M))!==!1&&(y.value=T,I(M))},C=M=>{if(!w(M)||!y.value)return;let{x:D,y:T}=b.value;(m==="x"||m==="both")&&(D=M.clientX-y.value.x),(m==="y"||m==="both")&&(T=M.clientY-y.value.y),b.value={x:D,y:T},u==null||u(b.value,M),I(M)},E=M=>{w(M)&&y.value&&(y.value=void 0,p==null||p(b.value,M),I(M))};if(Kn){const M={capture:(i=n.capture)!=null?i:!0};xe(_,"pointerdown",v,M),xe(h,"pointermove",C,M),xe(h,"pointerup",E,M)}return C1($1({},jv(b)),{position:b,isDragging:L(()=>!!y.value),style:L(()=>`left:${b.value.x}px;top:${b.value.y}px;`)})}var Gc=Object.getOwnPropertySymbols,O1=Object.prototype.hasOwnProperty,S1=Object.prototype.propertyIsEnumerable,M1=(e,n)=>{var s={};for(var i in e)O1.call(e,i)&&n.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&Gc)for(var i of Gc(e))n.indexOf(i)<0&&S1.call(e,i)&&(s[i]=e[i]);return s};function F1(e,n,s={}){const i=s,{window:o=Je}=i,l=M1(i,["window"]);let r;const c=Ui(()=>o&&"ResizeObserver"in o),u=()=>{r&&(r.disconnect(),r=void 0)},p=L(()=>Array.isArray(e)?e.map(m=>an(m)):[an(e)]),d=ke(p,m=>{if(u(),c.value&&o){r=new ResizeObserver(n);for(const h of m)h&&r.observe(h,l)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{u(),d()};return lt(f),{isSupported:c,stop:f}}function T1(e,n={width:0,height:0},s={}){const{window:i=Je,box:o="content-box"}=s,l=L(()=>{var u,p;return(p=(u=an(e))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),r=G(n.width),c=G(n.height);return F1(e,([u])=>{const p=o==="border-box"?u.borderBoxSize:o==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(i&&l.value){const d=an(e);if(d){const f=i.getComputedStyle(d);r.value=parseFloat(f.width),c.value=parseFloat(f.height)}}else if(p){const d=Array.isArray(p)?p:[p];r.value=d.reduce((f,{inlineSize:m})=>f+m,0),c.value=d.reduce((f,{blockSize:m})=>f+m,0)}else r.value=u.contentRect.width,c.value=u.contentRect.height},s),ke(()=>an(e),u=>{r.value=u?n.width:0,c.value=u?n.height:0}),{width:r,height:c}}function L1(e,n,s={}){const{root:i,rootMargin:o="0px",threshold:l=.1,window:r=Je,immediate:c=!0}=s,u=Ui(()=>r&&"IntersectionObserver"in r),p=L(()=>{const _=Ye(e);return(Array.isArray(_)?_:[_]).map(an).filter(Ev)});let d=fs;const f=G(c),m=u.value?ke(()=>[p.value,an(i),f.value],([_,b])=>{if(d(),!f.value||!_.length)return;const y=new IntersectionObserver(n,{root:an(b),rootMargin:o,threshold:l});_.forEach(w=>w&&y.observe(w)),d=()=>{y.disconnect(),d=fs}},{immediate:c,flush:"post"}):fs,h=()=>{d(),m(),f.value=!1};return lt(h),{isSupported:u,isActive:f,pause(){d(),f.value=!1},resume(){f.value=!0},stop:h}}const Qc=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function z1(e,n={}){const{document:s=Qd,autoExit:i=!1}=n,o=L(()=>{var w;return(w=an(e))!=null?w:s==null?void 0:s.querySelector("html")}),l=G(!1),r=L(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(w=>s&&w in s||o.value&&w in o.value)),c=L(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(w=>s&&w in s||o.value&&w in o.value)),u=L(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(w=>s&&w in s||o.value&&w in o.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(w=>s&&w in s),d=Ui(()=>o.value&&s&&r.value!==void 0&&c.value!==void 0&&u.value!==void 0),f=()=>p?(s==null?void 0:s[p])===o.value:!1,m=()=>{if(u.value){if(s&&s[u.value]!=null)return s[u.value];{const w=o.value;if((w==null?void 0:w[u.value])!=null)return!!w[u.value]}}return!1};async function h(){if(d.value){if(c.value)if((s==null?void 0:s[c.value])!=null)await s[c.value]();else{const w=o.value;(w==null?void 0:w[c.value])!=null&&await w[c.value]()}l.value=!1}}async function _(){if(!d.value)return;m()&&await h();const w=o.value;r.value&&(w==null?void 0:w[r.value])!=null&&(await w[r.value](),l.value=!0)}async function b(){await(l.value?h():_())}const y=()=>{const w=m();(!w||w&&f())&&(l.value=w)};return xe(s,Qc,y,!1),xe(()=>an(o),Qc,y,!1),i&&lt(h),{isSupported:d,isFullscreen:l,enter:_,exit:h,toggle:b}}function qn(e,n,s={}){const{window:i=Je}=s;return k1(e,n,i==null?void 0:i.localStorage,s)}const A1={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function P1(e={}){const{reactive:n=!1,target:s=Je,aliasMap:i=A1,passive:o=!0,onEventFired:l=fs}=e,r=Be(new Set),c={toJSON(){return{}},current:r},u=n?Be(c):c,p=new Set,d=new Set;function f(b,y){b in u&&(n?u[b]=y:u[b].value=y)}function m(){r.clear();for(const b of d)f(b,!1)}function h(b,y){var w,I;const v=(w=b.key)==null?void 0:w.toLowerCase(),E=[(I=b.code)==null?void 0:I.toLowerCase(),v].filter(Boolean);v&&(y?r.add(v):r.delete(v));for(const M of E)d.add(M),f(M,y);v==="meta"&&!y?(p.forEach(M=>{r.delete(M),f(M,!1)}),p.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&y&&[...r,...E].forEach(M=>p.add(M))}xe(s,"keydown",b=>(h(b,!0),l(b)),{passive:o}),xe(s,"keyup",b=>(h(b,!1),l(b)),{passive:o}),xe("blur",m,{passive:!0}),xe("focus",m,{passive:!0});const _=new Proxy(u,{get(b,y,w){if(typeof y!="string")return Reflect.get(b,y,w);if(y=y.toLowerCase(),y in i&&(y=i[y]),!(y in u))if(/[+_-]/.test(y)){const v=y.split(/[+_-]/g).map(C=>C.trim());u[y]=L(()=>v.every(C=>Ye(_[C])))}else u[y]=G(!1);const I=Reflect.get(b,y,w);return n?Ye(I):I}});return _}const R1={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function F5(e={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:i=!1,initialValue:o={x:0,y:0},window:l=Je,target:r=l,eventFilter:c}=e,u=G(o.x),p=G(o.y),d=G(null),f=typeof n=="function"?n:R1[n],m=w=>{const I=f(w);I&&([u.value,p.value]=I,d.value="mouse")},h=w=>{if(w.touches.length>0){const I=f(w.touches[0]);I&&([u.value,p.value]=I,d.value="touch")}},_=()=>{u.value=o.x,p.value=o.y},b=c?w=>c(()=>m(w),{}):w=>m(w),y=c?w=>c(()=>h(w),{}):w=>h(w);return r&&(xe(r,"mousemove",b,{passive:!0}),xe(r,"dragover",b,{passive:!0}),s&&n!=="movement"&&(xe(r,"touchstart",y,{passive:!0}),xe(r,"touchmove",y,{passive:!0}),i&&xe(r,"touchend",_,{passive:!0}))),{x:u,y:p,sourceType:d}}function N1(e,n={}){const s=Wd(e),{threshold:i=50,onSwipe:o,onSwipeEnd:l,onSwipeStart:r}=n,c=Be({x:0,y:0}),u=(M,D)=>{c.x=M,c.y=D},p=Be({x:0,y:0}),d=(M,D)=>{p.x=M,p.y=D},f=L(()=>c.x-p.x),m=L(()=>c.y-p.y),{max:h,abs:_}=Math,b=L(()=>h(_(f.value),_(m.value))>=i),y=G(!1),w=G(!1),I=L(()=>b.value?_(f.value)>_(m.value)?f.value>0?"left":"right":m.value>0?"up":"down":"none"),v=M=>{var D,T,B;const oe=M.buttons===0,de=M.buttons===1;return(B=(T=(D=n.pointerTypes)==null?void 0:D.includes(M.pointerType))!=null?T:oe||de)!=null?B:!0},C=[xe(e,"pointerdown",M=>{var D,T;if(!v(M))return;w.value=!0,(T=(D=s.value)==null?void 0:D.style)==null||T.setProperty("touch-action","none");const B=M.target;B==null||B.setPointerCapture(M.pointerId);const{clientX:oe,clientY:de}=M;u(oe,de),d(oe,de),r==null||r(M)}),xe(e,"pointermove",M=>{if(!v(M)||!w.value)return;const{clientX:D,clientY:T}=M;d(D,T),!y.value&&b.value&&(y.value=!0),y.value&&(o==null||o(M))}),xe(e,"pointerup",M=>{var D,T;v(M)&&(y.value&&(l==null||l(M,I.value)),w.value=!1,y.value=!1,(T=(D=s.value)==null?void 0:D.style)==null||T.setProperty("touch-action","initial"))})],E=()=>C.forEach(M=>M());return{isSwiping:Bn(y),direction:Bn(I),posStart:Bn(c),posEnd:Bn(p),distanceX:f,distanceY:m,stop:E}}let j1=0;function T5(e,n={}){const s=G(!1),{document:i=Qd,immediate:o=!0,manual:l=!1,id:r=`vueuse_styletag_${++j1}`}=n,c=G(e);let u=()=>{};const p=()=>{if(!i)return;const f=i.getElementById(r)||i.createElement("style");f.isConnected||(f.type="text/css",f.id=r,n.media&&(f.media=n.media),i.head.appendChild(f)),!s.value&&(u=ke(c,m=>{f.textContent=m},{immediate:!0}),s.value=!0)},d=()=>{!i||!s.value||(u(),i.head.removeChild(i.getElementById(r)),s.value=!1)};return o&&!l&&Kd(p),l||lt(d),{id:r,css:c,unload:d,load:p,isLoaded:Bn(s)}}var D1=Object.defineProperty,Zc=Object.getOwnPropertySymbols,H1=Object.prototype.hasOwnProperty,U1=Object.prototype.propertyIsEnumerable,Xc=(e,n,s)=>n in e?D1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,V1=(e,n)=>{for(var s in n||(n={}))H1.call(n,s)&&Xc(e,s,n[s]);if(Zc)for(var s of Zc(n))U1.call(n,s)&&Xc(e,s,n[s]);return e};function L5(e={}){const{controls:n=!1,offset:s=0,immediate:i=!0,interval:o="requestAnimationFrame",callback:l}=e,r=G(gl()+s),c=()=>r.value=gl()+s,u=l?()=>{c(),l(r.value)}:c,p=o==="requestAnimationFrame"?a1(u,{immediate:i}):Hv(u,o,{immediate:i});return n?V1({timestamp:r},p):r}function Jn(e,n,s,i={}){var o,l,r;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:f,shouldEmit:m}=i,h=Mn(),_=s||(h==null?void 0:h.emit)||((o=h==null?void 0:h.$emit)==null?void 0:o.bind(h))||((r=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(h==null?void 0:h.proxy));let b=p;n||(n="modelValue"),b=p||b||`update:${n.toString()}`;const y=v=>c?typeof c=="function"?c(v):u1(v):v,w=()=>xv(e[n])?y(e[n]):f,I=v=>{m?m(v)&&_(b,v):_(b,v)};if(u){const v=w(),C=G(v);return ke(()=>e[n],E=>C.value=y(E)),ke(C,E=>{(E!==e[n]||d)&&I(E)},{deep:d}),C}else return L({get(){return w()},set(v){I(v)}})}function z5({window:e=Je}={}){if(!e)return G(!1);const n=G(e.document.hasFocus());return xe(e,"blur",()=>{n.value=!1}),xe(e,"focus",()=>{n.value=!0}),n}function B1(e={}){const{window:n=Je,initialWidth:s=1/0,initialHeight:i=1/0,listenOrientation:o=!0,includeScrollbar:l=!0}=e,r=G(s),c=G(i),u=()=>{n&&(l?(r.value=n.innerWidth,c.value=n.innerHeight):(r.value=n.document.documentElement.clientWidth,c.value=n.document.documentElement.clientHeight))};if(u(),Kd(u),xe("resize",u,{passive:!0}),o){const p=ns("(orientation: portrait)");ke(p,()=>u())}return{width:r,height:c}}function W1(){return Zd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Zd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const K1=typeof Proxy=="function",q1="devtools-plugin:setup",Y1="plugin:settings:set";let xs,vl;function G1(){var e;return xs!==void 0||(typeof window<"u"&&window.performance?(xs=!0,vl=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(xs=!0,vl=global.perf_hooks.performance):xs=!1),xs}function Q1(){return G1()?vl.now():Date.now()}class Z1{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const i={};if(n.settings)for(const r in n.settings){const c=n.settings[r];i[r]=c.defaultValue}const o=`__vue-devtools-plugin-settings__${n.id}`;let l=Object.assign({},i);try{const r=localStorage.getItem(o),c=JSON.parse(r);Object.assign(l,c)}catch{}this.fallbacks={getSettings(){return l},setSettings(r){try{localStorage.setItem(o,JSON.stringify(r))}catch{}l=r},now(){return Q1()}},s&&s.on(Y1,(r,c)=>{r===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(r,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(r,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function X1(e,n){const s=e,i=Zd(),o=W1(),l=K1&&s.enableEarlyProxy;if(o&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))o.emit(q1,e,n);else{const r=l?new Z1(s,o):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:r}),r&&n(r.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ft=typeof window<"u";function J1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ze=Object.assign;function Sa(e,n){const s={};for(const i in n){const o=n[i];s[i]=Sn(o)?o.map(e):e(o)}return s}const di=()=>{},Sn=Array.isArray;function Se(e){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(n))}const ek=/\/$/,nk=e=>e.replace(ek,"");function Ma(e,n,s="/"){let i,o={},l="",r="";const c=n.indexOf("#");let u=n.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(i=n.slice(0,u),l=n.slice(u+1,c>-1?c:n.length),o=e(l)),c>-1&&(i=i||n.slice(0,c),r=n.slice(c,n.length)),i=ik(i??n,s),{fullPath:i+(l&&"?")+l+r,path:i,query:o,hash:r}}function tk(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Jc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function eu(e,n,s){const i=n.matched.length-1,o=s.matched.length-1;return i>-1&&i===o&&jt(n.matched[i],s.matched[o])&&Xd(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function jt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Xd(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!sk(e[s],n[s]))return!1;return!0}function sk(e,n){return Sn(e)?nu(e,n):Sn(n)?nu(n,e):e===n}function nu(e,n){return Sn(n)?e.length===n.length&&e.every((s,i)=>s===n[i]):e.length===1&&e[0]===n}function ik(e,n){if(e.startsWith("/"))return e;if(!n.startsWith("/"))return Se(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${n}". It should look like "/${n}".`),e;if(!e)return n;const s=n.split("/"),i=e.split("/"),o=i[i.length-1];(o===".."||o===".")&&i.push("");let l=s.length-1,r,c;for(r=0;r<i.length;r++)if(c=i[r],c!==".")if(c==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Ci;(function(e){e.pop="pop",e.push="push"})(Ci||(Ci={}));var fi;(function(e){e.back="back",e.forward="forward",e.unknown=""})(fi||(fi={}));function ok(e){if(!e)if(ft){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),nk(e)}const ak=/^[^#]+#/;function lk(e,n){return e.replace(ak,"#")+n}function rk(e,n){const s=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:n.behavior,left:i.left-s.left-(n.left||0),top:i.top-s.top-(n.top||0)}}const ua=()=>({left:window.pageXOffset,top:window.pageYOffset});function ck(e){let n;if("el"in e){const s=e.el,i=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!i||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(i&&l){Se(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Se(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof s=="string"?i?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!o){Se(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}n=rk(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function tu(e,n){return(history.state?history.state.position-n:-1)+e}const kl=new Map;function uk(e,n){kl.set(e,n)}function pk(e){const n=kl.get(e);return kl.delete(e),n}let dk=()=>location.protocol+"//"+location.host;function Jd(e,n){const{pathname:s,search:i,hash:o}=n,l=e.indexOf("#");if(l>-1){let c=o.includes(e.slice(l))?e.slice(l).length:1,u=o.slice(c);return u[0]!=="/"&&(u="/"+u),Jc(u,"")}return Jc(s,e)+i+o}function fk(e,n,s,i){let o=[],l=[],r=null;const c=({state:m})=>{const h=Jd(e,location),_=s.value,b=n.value;let y=0;if(m){if(s.value=h,n.value=m,r&&r===_){r=null;return}y=b?m.position-b.position:0}else i(h);o.forEach(w=>{w(s.value,_,{delta:y,type:Ci.pop,direction:y?y>0?fi.forward:fi.back:fi.unknown})})};function u(){r=s.value}function p(m){o.push(m);const h=()=>{const _=o.indexOf(m);_>-1&&o.splice(_,1)};return l.push(h),h}function d(){const{history:m}=window;m.state&&m.replaceState(ze({},m.state,{scroll:ua()}),"")}function f(){for(const m of l)m();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:p,destroy:f}}function su(e,n,s,i=!1,o=!1){return{back:e,current:n,forward:s,replaced:i,position:window.history.length,scroll:o?ua():null}}function mk(e){const{history:n,location:s}=window,i={value:Jd(e,s)},o={value:n.state};o.value||l(i.value,{back:null,current:i.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const f=e.indexOf("#"),m=f>-1?(s.host&&document.querySelector("base")?e:e.slice(f))+u:dk()+e+u;try{n[d?"replaceState":"pushState"](p,"",m),o.value=p}catch(h){Se("Error with push/replace State",h),s[d?"replace":"assign"](m)}}function r(u,p){const d=ze({},n.state,su(o.value.back,u,o.value.forward,!0),p,{position:o.value.position});l(u,d,!0),i.value=u}function c(u,p){const d=ze({},o.value,n.state,{forward:u,scroll:ua()});n.state||Se(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const f=ze({},su(i.value,u,null),{position:d.position+1},p);l(u,f,!1),i.value=u}return{location:i,state:o,push:c,replace:r}}function hk(e){e=ok(e);const n=mk(e),s=fk(e,n.state,n.location,n.replace);function i(l,r=!0){r||s.pauseListeners(),history.go(l)}const o=ze({location:"",base:e,go:i,createHref:lk.bind(null,e)},n,s);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function _k(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&Se(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),hk(e)}function gk(e){return typeof e=="string"||e&&typeof e=="object"}function ef(e){return typeof e=="string"||typeof e=="symbol"}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nf=Symbol("navigation failure");var iu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(iu||(iu={}));const vk={[1]({location:e,currentLocation:n}){return`No match for
 ${JSON.stringify(e)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:e,to:n}){return`Redirected from "${e.fullPath}" to "${bk(n)}" via a navigation guard.`},[4]({from:e,to:n}){return`Navigation aborted from "${e.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:e,to:n}){return`Navigation cancelled from "${e.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:e,to:n}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function As(e,n){return ze(new Error(vk[e](n)),{type:e,[nf]:!0},n)}function rt(e,n){return e instanceof Error&&nf in e&&(n==null||!!(e.type&n))}const kk=["params","query","hash"];function bk(e){if(typeof e=="string")return e;if("path"in e)return e.path;const n={};for(const s of kk)s in e&&(n[s]=e[s]);return JSON.stringify(n,null,2)}const ou="[^/]+?",yk={sensitive:!1,strict:!1,start:!0,end:!0},wk=/[.+*?^${}()[\]/\\]/g;function Ik(e,n){const s=ze({},yk,n),i=[];let o=s.start?"^":"";const l=[];for(const p of e){const d=p.length?[]:[90];s.strict&&!p.length&&(o+="/");for(let f=0;f<p.length;f++){const m=p[f];let h=40+(s.sensitive?.25:0);if(m.type===0)f||(o+="/"),o+=m.value.replace(wk,"\\$&"),h+=40;else if(m.type===1){const{value:_,repeatable:b,optional:y,regexp:w}=m;l.push({name:_,repeatable:b,optional:y});const I=w||ou;if(I!==ou){h+=10;try{new RegExp(`(${I})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${_}" (${I}): `+C.message)}}let v=b?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;f||(v=y&&p.length<2?`(?:/${v})`:"/"+v),y&&(v+="?"),o+=v,h+=20,y&&(h+=-8),b&&(h+=-20),I===".*"&&(h+=-50)}d.push(h)}i.push(d)}if(s.strict&&s.end){const p=i.length-1;i[p][i[p].length-1]+=.7000000000000001}s.strict||(o+="/?"),s.end?o+="$":s.strict&&(o+="(?:/|$)");const r=new RegExp(o,s.sensitive?"":"i");function c(p){const d=p.match(r),f={};if(!d)return null;for(let m=1;m<d.length;m++){const h=d[m]||"",_=l[m-1];f[_.name]=h&&_.repeatable?h.split("/"):h}return f}function u(p){let d="",f=!1;for(const m of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const h of m)if(h.type===0)d+=h.value;else if(h.type===1){const{value:_,repeatable:b,optional:y}=h,w=_ in p?p[_]:"";if(Sn(w)&&!b)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const I=Sn(w)?w.join("/"):w;if(!I)if(y)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);d+=I}}return d||"/"}return{re:r,score:i,keys:l,parse:c,stringify:u}}function xk(e,n){let s=0;for(;s<e.length&&s<n.length;){const i=n[s]-e[s];if(i)return i;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Ek(e,n){let s=0;const i=e.score,o=n.score;for(;s<i.length&&s<o.length;){const l=xk(i[s],o[s]);if(l)return l;s++}if(Math.abs(o.length-i.length)===1){if(au(i))return 1;if(au(o))return-1}return o.length-i.length}function au(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const $k={type:0,value:""},Ck=/[a-zA-Z0-9_]/;function Ok(e){if(!e)return[[]];if(e==="/")return[[$k]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function n(h){throw new Error(`ERR (${s})/"${p}": ${h}`)}let s=0,i=s;const o=[];let l;function r(){l&&o.push(l),l=[]}let c=0,u,p="",d="";function f(){p&&(s===0?l.push({type:0,value:p}):s===1||s===2||s===3?(l.length>1&&(u==="*"||u==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):n("Invalid state to consume buffer"),p="")}function m(){p+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&s!==2){i=s,s=4;continue}switch(s){case 0:u==="/"?(p&&f(),r()):u===":"?(f(),s=1):m();break;case 4:m(),s=i;break;case 1:u==="("?s=2:Ck.test(u)?m():(f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:s=3:d+=u;break;case 3:f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${p}"`),f(),r(),o}function Sk(e,n,s){const i=Ik(Ok(e.path),s);{const l=new Set;for(const r of i.keys)l.has(r.name)&&Se(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(r.name)}const o=ze(i,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function Mk(e,n){const s=[],i=new Map;n=cu({strict:!1,end:!0,sensitive:!1},n);function o(d){return i.get(d)}function l(d,f,m){const h=!m,_=Fk(d);Ak(_,f),_.aliasOf=m&&m.record;const b=cu(n,d),y=[_];if("alias"in d){const v=typeof d.alias=="string"?[d.alias]:d.alias;for(const C of v)y.push(ze({},_,{components:m?m.record.components:_.components,path:C,aliasOf:m?m.record:_}))}let w,I;for(const v of y){const{path:C}=v;if(f&&C[0]!=="/"){const E=f.record.path,M=E[E.length-1]==="/"?"":"/";v.path=f.record.path+(C&&M+C)}if(v.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(w=Sk(v,f,b),f&&C[0]==="/"&&Pk(w,f),m?(m.alias.push(w),zk(m,w)):(I=I||w,I!==w&&I.alias.push(w),h&&d.name&&!ru(w)&&r(d.name)),_.children){const E=_.children;for(let M=0;M<E.length;M++)l(E[M],w,m&&m.children[M])}m=m||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&u(w)}return I?()=>{r(I)}:di}function r(d){if(ef(d)){const f=i.get(d);f&&(i.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(r),f.alias.forEach(r))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return s}function u(d){let f=0;for(;f<s.length&&Ek(d,s[f])>=0&&(d.record.path!==s[f].record.path||!tf(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!ru(d)&&i.set(d.record.name,d)}function p(d,f){let m,h={},_,b;if("name"in d&&d.name){if(m=i.get(d.name),!m)throw As(1,{location:d});{const I=Object.keys(d.params||{}).filter(v=>!m.keys.find(C=>C.name===v));I.length&&Se(`Discarded invalid param(s) "${I.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=m.record.name,h=ze(lu(f.params,m.keys.filter(I=>!I.optional).map(I=>I.name)),d.params&&lu(d.params,m.keys.map(I=>I.name))),_=m.stringify(h)}else if("path"in d)_=d.path,_.startsWith("/")||Se(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),m=s.find(I=>I.re.test(_)),m&&(h=m.parse(_),b=m.record.name);else{if(m=f.name?i.get(f.name):s.find(I=>I.re.test(f.path)),!m)throw As(1,{location:d,currentLocation:f});b=m.record.name,h=ze({},f.params,d.params),_=m.stringify(h)}const y=[];let w=m;for(;w;)y.unshift(w.record),w=w.parent;return{name:b,path:_,params:h,matched:y,meta:Lk(y)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:o}}function lu(e,n){const s={};for(const i of n)i in e&&(s[i]=e[i]);return s}function Fk(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Tk(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Tk(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const i in e.components)n[i]=typeof s=="boolean"?s:s[i];return n}function ru(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Lk(e){return e.reduce((n,s)=>ze(n,s.meta),{})}function cu(e,n){const s={};for(const i in e)s[i]=i in n?n[i]:e[i];return s}function bl(e,n){return e.name===n.name&&e.optional===n.optional&&e.repeatable===n.repeatable}function zk(e,n){for(const s of e.keys)if(!s.optional&&!n.keys.find(bl.bind(null,s)))return Se(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!e.keys.find(bl.bind(null,s)))return Se(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function Ak(e,n){n&&n.record.name&&!e.name&&!e.path&&Se(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Pk(e,n){for(const s of n.keys)if(!e.keys.find(bl.bind(null,s)))return Se(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function tf(e,n){return n.children.some(s=>s===e||tf(e,s))}const sf=/#/g,Rk=/&/g,Nk=/\//g,jk=/=/g,Dk=/\?/g,of=/\+/g,Hk=/%5B/g,Uk=/%5D/g,af=/%5E/g,Vk=/%60/g,lf=/%7B/g,Bk=/%7C/g,rf=/%7D/g,Wk=/%20/g;function yr(e){return encodeURI(""+e).replace(Bk,"|").replace(Hk,"[").replace(Uk,"]")}function Kk(e){return yr(e).replace(lf,"{").replace(rf,"}").replace(af,"^")}function yl(e){return yr(e).replace(of,"%2B").replace(Wk,"+").replace(sf,"%23").replace(Rk,"%26").replace(Vk,"`").replace(lf,"{").replace(rf,"}").replace(af,"^")}function qk(e){return yl(e).replace(jk,"%3D")}function Yk(e){return yr(e).replace(sf,"%23").replace(Dk,"%3F")}function Gk(e){return e==null?"":Yk(e).replace(Nk,"%2F")}function Oi(e){try{return decodeURIComponent(""+e)}catch{Se(`Error decoding "${e}". Using original value`)}return""+e}function Qk(e){const n={};if(e===""||e==="?")return n;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<i.length;++o){const l=i[o].replace(of," "),r=l.indexOf("="),c=Oi(r<0?l:l.slice(0,r)),u=r<0?null:Oi(l.slice(r+1));if(c in n){let p=n[c];Sn(p)||(p=n[c]=[p]),p.push(u)}else n[c]=u}return n}function uu(e){let n="";for(let s in e){const i=e[s];if(s=qk(s),i==null){i!==void 0&&(n+=(n.length?"&":"")+s);continue}(Sn(i)?i.map(l=>l&&yl(l)):[i&&yl(i)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+s,l!=null&&(n+="="+l))})}return n}function Zk(e){const n={};for(const s in e){const i=e[s];i!==void 0&&(n[s]=Sn(i)?i.map(o=>o==null?null:""+o):i==null?i:""+i)}return n}const Xk=Symbol("router view location matched"),pu=Symbol("router view depth"),wr=Symbol("router"),cf=Symbol("route location"),wl=Symbol("router view location");function Gs(){let e=[];function n(i){return e.push(i),()=>{const o=e.indexOf(i);o>-1&&e.splice(o,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function Et(e,n,s,i,o){const l=i&&(i.enterCallbacks[o]=i.enterCallbacks[o]||[]);return()=>new Promise((r,c)=>{const u=f=>{f===!1?c(As(4,{from:s,to:n})):f instanceof Error?c(f):gk(f)?c(As(2,{from:n,to:f})):(l&&i.enterCallbacks[o]===l&&typeof f=="function"&&l.push(f),r())},p=e.call(i&&i.instances[o],n,s,Jk(u,n,s));let d=Promise.resolve(p);if(e.length<3&&(d=d.then(u)),e.length>2){const f=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(m=>u._called?m:(Se(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){Se(f),c(new Error("Invalid navigation guard"));return}}d.catch(f=>c(f))})}function Jk(e,n,s){let i=0;return function(){i++===1&&Se(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,i===1&&e.apply(null,arguments)}}function Fa(e,n,s,i){const o=[];for(const l of e){!l.components&&!l.children.length&&Se(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const r in l.components){let c=l.components[r];{if(!c||typeof c!="object"&&typeof c!="function")throw Se(`Component "${r}" in record with path "${l.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Se(`Component "${r}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Se(`Component "${r}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!l.instances[r]))if(eb(c)){const p=(c.__vccOpts||c)[n];p&&o.push(Et(p,s,i,l,r))}else{let u=c();"catch"in u||(Se(`Component "${r}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),o.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=J1(p)?p.default:p;l.components[r]=d;const m=(d.__vccOpts||d)[n];return m&&Et(m,s,i,l,r)()}))}}}return o}function eb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function du(e){const n=z(wr),s=z(cf),i=L(()=>n.resolve(S(e.to))),o=L(()=>{const{matched:u}=i.value,{length:p}=u,d=u[p-1],f=s.matched;if(!d||!f.length)return-1;const m=f.findIndex(jt.bind(null,d));if(m>-1)return m;const h=fu(u[p-2]);return p>1&&fu(d)===h&&f[f.length-1].path!==h?f.findIndex(jt.bind(null,u[p-2])):m}),l=L(()=>o.value>-1&&ib(s.params,i.value.params)),r=L(()=>o.value>-1&&o.value===s.matched.length-1&&Xd(s.params,i.value.params));function c(u={}){return sb(u)?n[S(e.replace)?"replace":"push"](S(e.to)).catch(di):Promise.resolve()}if(ft){const u=Mn();if(u){const p={route:i.value,isActive:l.value,isExactActive:r.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),ks(()=>{p.route=i.value,p.isActive=l.value,p.isExactActive=r.value},{flush:"post"})}}return{route:i,href:L(()=>i.value.href),isActive:l,isExactActive:r,navigate:c}}const nb=Ae({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:du,setup(e,{slots:n}){const s=Be(du(e)),{options:i}=z(wr),o=L(()=>({[mu(e.activeClass,i.linkActiveClass,"router-link-active")]:s.isActive,[mu(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=n.default&&n.default(s);return e.custom?l:wn("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:o.value},l)}}}),tb=nb;function sb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function ib(e,n){for(const s in n){const i=n[s],o=e[s];if(typeof i=="string"){if(i!==o)return!1}else if(!Sn(o)||o.length!==i.length||i.some((l,r)=>l!==o[r]))return!1}return!0}function fu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const mu=(e,n,s)=>e??n??s,ob=Ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){lb();const i=z(wl),o=L(()=>e.route||i.value),l=z(pu,0),r=L(()=>{let p=S(l);const{matched:d}=o.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),c=L(()=>o.value.matched[r.value]);$n(pu,L(()=>r.value+1)),$n(Xk,c),$n(wl,o);const u=G();return ke(()=>[u.value,c.value,e.name],([p,d,f],[m,h,_])=>{d&&(d.instances[f]=p,h&&h!==d&&p&&p===m&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),p&&d&&(!h||!jt(d,h)||!m)&&(d.enterCallbacks[f]||[]).forEach(b=>b(p))},{flush:"post"}),()=>{const p=o.value,d=e.name,f=c.value,m=f&&f.components[d];if(!m)return hu(s.default,{Component:m,route:p});const h=f.props[d],_=h?h===!0?p.params:typeof h=="function"?h(p):h:null,y=wn(m,ze({},_,n,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[d]=null)},ref:u}));if(ft&&y.ref){const w={depth:r.value,name:f.name,path:f.path,meta:f.meta};(Sn(y.ref)?y.ref.map(v=>v.i):[y.ref.i]).forEach(v=>{v.__vrv_devtools=w})}return hu(s.default,{Component:y,route:p})||y}}});function hu(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const ab=ob;function lb(){const e=Mn(),n=e.parent&&e.parent.type.name,s=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(n&&(n==="KeepAlive"||n.includes("Transition"))&&typeof s=="object"&&s.name==="RouterView"){const i=n==="KeepAlive"?"keep-alive":"transition";Se(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${i}>
    <component :is="Component" />
  </${i}>
</router-view>`)}}function Qs(e,n){const s=ze({},e,{matched:e.matched.map(i=>_b(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:n,value:s}}}function ao(e){return{_custom:{display:e}}}let rb=0;function cb(e,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const i=rb++;X1({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Qs(n.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const m=f.__vrv_devtools;d.tags.push({label:(m.name?`${m.name.toString()}: `:"")+m.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:uf})}Sn(f.__vrl_devtools)&&(f.__devtoolsApi=o,f.__vrl_devtools.forEach(m=>{let h=ff,_="";m.isExactActive?(h=df,_="This is exactly active"):m.isActive&&(h=pf,_="This link is active"),d.tags.push({label:m.route.path,textColor:0,tooltip:_,backgroundColor:h})}))}),ke(n.currentRoute,()=>{u(),o.notifyComponentUpdate(),o.sendInspectorTree(c),o.sendInspectorState(c)});const l="router:navigations:"+i;o.addTimelineLayer({id:l,label:`Router${i?" "+i:""} Navigations`,color:4237508}),n.onError((d,f)=>{o.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:o.now(),data:{error:d},groupId:f.meta.__navigationId}})});let r=0;n.beforeEach((d,f)=>{const m={guard:ao("beforeEach"),from:Qs(f,"Current Location during this navigation"),to:Qs(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:r++}),o.addTimelineEvent({layerId:l,event:{time:o.now(),title:"Start of navigation",subtitle:d.fullPath,data:m,groupId:d.meta.__navigationId}})}),n.afterEach((d,f,m)=>{const h={guard:ao("afterEach")};m?(h.failure={_custom:{type:Error,readOnly:!0,display:m?m.message:"",tooltip:"Navigation Failure",value:m}},h.status=ao("❌")):h.status=ao("✅"),h.from=Qs(f,"Current Location during this navigation"),h.to=Qs(d,"Target location"),o.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:o.now(),data:h,logType:m?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+i;o.addInspector({id:c,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let f=s.getRoutes().filter(m=>!m.parent);f.forEach(_f),d.filter&&(f=f.filter(m=>Il(m,d.filter.toLowerCase()))),f.forEach(m=>hf(m,n.currentRoute.value)),d.rootNodes=f.map(mf)}let p;o.on.getInspectorTree(d=>{p=d,d.app===e&&d.inspectorId===c&&u()}),o.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===c){const m=s.getRoutes().find(h=>h.record.__vd_id===d.nodeId);m&&(d.state={options:pb(m)})}}),o.sendInspectorTree(c),o.sendInspectorState(c)})}function ub(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function pb(e){const{record:n}=e,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(i=>`${i.name}${ub(i)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(i=>i.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const uf=15485081,pf=2450411,df=8702998,db=2282478,ff=16486972,fb=6710886;function mf(e){const n=[],{record:s}=e;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:db}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:ff}),e.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:uf}),e.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:df}),e.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:pf}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:fb});let i=s.__vd_id;return i==null&&(i=String(mb++),s.__vd_id=i),{id:i,label:s.path,tags:n,children:e.children.map(mf)}}let mb=0;const hb=/^\/(.*)\/([a-z]*)$/;function hf(e,n){const s=n.matched.length&&jt(n.matched[n.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=n.matched.some(i=>jt(i,e.record))),e.children.forEach(i=>hf(i,n))}function _f(e){e.__vd_match=!1,e.children.forEach(_f)}function Il(e,n){const s=String(e.re).match(hb);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return e.children.forEach(r=>Il(r,n)),e.record.path!=="/"||n==="/"?(e.__vd_match=e.re.test(n),!0):!1;const o=e.record.path.toLowerCase(),l=Oi(o);return!n.startsWith("/")&&(l.includes(n)||o.includes(n))||l.startsWith(n)||o.startsWith(n)||e.record.name&&String(e.record.name).includes(n)?!0:e.children.some(r=>Il(r,n))}function _b(e,n){const s={};for(const i in e)n.includes(i)||(s[i]=e[i]);return s}function gb(e){const n=Mk(e.routes,e),s=e.parseQuery||Qk,i=e.stringifyQuery||uu,o=e.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Gs(),r=Gs(),c=Gs(),u=it(yt);let p=yt;ft&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Sa.bind(null,F=>""+F),f=Sa.bind(null,Gk),m=Sa.bind(null,Oi);function h(F,J){let ne,se;return ef(F)?(ne=n.getRecordMatcher(F),se=J):se=F,n.addRoute(se,ne)}function _(F){const J=n.getRecordMatcher(F);J?n.removeRoute(J):Se(`Cannot remove non-existent route "${String(F)}"`)}function b(){return n.getRoutes().map(F=>F.record)}function y(F){return!!n.getRecordMatcher(F)}function w(F,J){if(J=ze({},J||u.value),typeof F=="string"){const k=Ma(s,F,J.path),$=n.resolve({path:k.path},J),R=o.createHref(k.fullPath);return R.startsWith("//")?Se(`Location "${F}" resolved to "${R}". A resolved location cannot start with multiple slashes.`):$.matched.length||Se(`No match found for location with path "${F}"`),ze(k,$,{params:m($.params),hash:Oi(k.hash),redirectedFrom:void 0,href:R})}let ne;if("path"in F)"params"in F&&!("name"in F)&&Object.keys(F.params).length&&Se(`Path "${F.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),ne=ze({},F,{path:Ma(s,F.path,J.path).path});else{const k=ze({},F.params);for(const $ in k)k[$]==null&&delete k[$];ne=ze({},F,{params:f(k)}),J.params=f(J.params)}const se=n.resolve(ne,J),Ee=F.hash||"";Ee&&!Ee.startsWith("#")&&Se(`A \`hash\` should always start with the character "#". Replace "${Ee}" with "#${Ee}".`),se.params=d(m(se.params));const Ne=tk(i,ze({},F,{hash:Kk(Ee),path:se.path})),g=o.createHref(Ne);return g.startsWith("//")?Se(`Location "${F}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):se.matched.length||Se(`No match found for location with path "${"path"in F?F.path:F}"`),ze({fullPath:Ne,hash:Ee,query:i===uu?Zk(F.query):F.query||{}},se,{redirectedFrom:void 0,href:g})}function I(F){return typeof F=="string"?Ma(s,F,u.value.path):ze({},F)}function v(F,J){if(p!==F)return As(8,{from:J,to:F})}function C(F){return D(F)}function E(F){return C(ze(I(F),{replace:!0}))}function M(F){const J=F.matched[F.matched.length-1];if(J&&J.redirect){const{redirect:ne}=J;let se=typeof ne=="function"?ne(F):ne;if(typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=I(se):{path:se},se.params={}),!("path"in se)&&!("name"in se))throw Se(`Invalid redirect found:
${JSON.stringify(se,null,2)}
 when navigating to "${F.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ze({query:F.query,hash:F.hash,params:"path"in se?{}:F.params},se)}}function D(F,J){const ne=p=w(F),se=u.value,Ee=F.state,Ne=F.force,g=F.replace===!0,k=M(ne);if(k)return D(ze(I(k),{state:typeof k=="object"?ze({},Ee,k.state):Ee,force:Ne,replace:g}),J||ne);const $=ne;$.redirectedFrom=J;let R;return!Ne&&eu(i,se,ne)&&(R=As(16,{to:$,from:se}),Fn(se,se,!0,!1)),(R?Promise.resolve(R):oe($,se)).catch(A=>rt(A)?rt(A,2)?A:Pe(A):ce(A,$,se)).then(A=>{if(A){if(rt(A,2))return eu(i,w(A.to),$)&&J&&(J._count=J._count?J._count+1:1)>30?(Se(`Detected a possibly infinite redirection in a navigation guard when going from "${se.fullPath}" to "${$.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):D(ze({replace:g},I(A.to),{state:typeof A.to=="object"?ze({},Ee,A.to.state):Ee,force:Ne}),J||$)}else A=X($,se,!0,g,Ee);return de($,se,A),A})}function T(F,J){const ne=v(F,J);return ne?Promise.reject(ne):Promise.resolve()}function B(F){const J=Yn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(F):F()}function oe(F,J){let ne;const[se,Ee,Ne]=vb(F,J);ne=Fa(se.reverse(),"beforeRouteLeave",F,J);for(const k of se)k.leaveGuards.forEach($=>{ne.push(Et($,F,J))});const g=T.bind(null,F,J);return ne.push(g),Tn(ne).then(()=>{ne=[];for(const k of l.list())ne.push(Et(k,F,J));return ne.push(g),Tn(ne)}).then(()=>{ne=Fa(Ee,"beforeRouteUpdate",F,J);for(const k of Ee)k.updateGuards.forEach($=>{ne.push(Et($,F,J))});return ne.push(g),Tn(ne)}).then(()=>{ne=[];for(const k of F.matched)if(k.beforeEnter&&!J.matched.includes(k))if(Sn(k.beforeEnter))for(const $ of k.beforeEnter)ne.push(Et($,F,J));else ne.push(Et(k.beforeEnter,F,J));return ne.push(g),Tn(ne)}).then(()=>(F.matched.forEach(k=>k.enterCallbacks={}),ne=Fa(Ne,"beforeRouteEnter",F,J),ne.push(g),Tn(ne))).then(()=>{ne=[];for(const k of r.list())ne.push(Et(k,F,J));return ne.push(g),Tn(ne)}).catch(k=>rt(k,8)?k:Promise.reject(k))}function de(F,J,ne){for(const se of c.list())B(()=>se(F,J,ne))}function X(F,J,ne,se,Ee){const Ne=v(F,J);if(Ne)return Ne;const g=J===yt,k=ft?history.state:{};ne&&(se||g?o.replace(F.fullPath,ze({scroll:g&&k&&k.scroll},Ee)):o.push(F.fullPath,Ee)),u.value=F,Fn(F,J,ne,g),Pe()}let ve;function be(){ve||(ve=o.listen((F,J,ne)=>{if(!Vt.listening)return;const se=w(F),Ee=M(se);if(Ee){D(ze(Ee,{replace:!0}),se).catch(di);return}p=se;const Ne=u.value;ft&&uk(tu(Ne.fullPath,ne.delta),ua()),oe(se,Ne).catch(g=>rt(g,12)?g:rt(g,2)?(D(g.to,se).then(k=>{rt(k,20)&&!ne.delta&&ne.type===Ci.pop&&o.go(-1,!1)}).catch(di),Promise.reject()):(ne.delta&&o.go(-ne.delta,!1),ce(g,se,Ne))).then(g=>{g=g||X(se,Ne,!1),g&&(ne.delta&&!rt(g,8)?o.go(-ne.delta,!1):ne.type===Ci.pop&&rt(g,20)&&o.go(-1,!1)),de(se,Ne,g)}).catch(di)}))}let Ie=Gs(),Re=Gs(),te;function ce(F,J,ne){Pe(F);const se=Re.list();return se.length?se.forEach(Ee=>Ee(F,J,ne)):(Se("uncaught error during route navigation:"),console.error(F)),Promise.reject(F)}function $e(){return te&&u.value!==yt?Promise.resolve():new Promise((F,J)=>{Ie.add([F,J])})}function Pe(F){return te||(te=!F,be(),Ie.list().forEach(([J,ne])=>F?ne(F):J()),Ie.reset()),F}function Fn(F,J,ne,se){const{scrollBehavior:Ee}=e;if(!ft||!Ee)return Promise.resolve();const Ne=!ne&&pk(tu(F.fullPath,0))||(se||!ne)&&history.state&&history.state.scroll||null;return on().then(()=>Ee(F,J,Ne)).then(g=>g&&ck(g)).catch(g=>ce(g,F,J))}const tn=F=>o.go(F);let _n;const Yn=new Set,Vt={currentRoute:u,listening:!0,addRoute:h,removeRoute:_,hasRoute:y,getRoutes:b,resolve:w,options:e,push:C,replace:E,go:tn,back:()=>tn(-1),forward:()=>tn(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:Re.add,isReady:$e,install(F){const J=this;F.component("RouterLink",tb),F.component("RouterView",ab),F.config.globalProperties.$router=J,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>S(u)}),ft&&!_n&&u.value===yt&&(_n=!0,C(o.location).catch(Ee=>{Se("Unexpected error when starting the router:",Ee)}));const ne={};for(const Ee in yt)ne[Ee]=L(()=>u.value[Ee]);F.provide(wr,J),F.provide(cf,Be(ne)),F.provide(wl,u);const se=F.unmount;Yn.add(F),F.unmount=function(){Yn.delete(F),Yn.size<1&&(p=yt,ve&&ve(),ve=null,u.value=yt,_n=!1,te=!1),se()},ft&&cb(F,J,n)}};function Tn(F){return F.reduce((J,ne)=>J.then(()=>B(ne)),Promise.resolve())}return Vt}function vb(e,n){const s=[],i=[],o=[],l=Math.max(n.matched.length,e.matched.length);for(let r=0;r<l;r++){const c=n.matched[r];c&&(e.matched.find(p=>jt(p,c))?i.push(c):s.push(c));const u=e.matched[r];u&&(n.matched.find(p=>jt(p,u))||o.push(u))}return[s,i,o]}const Ta=G(!1),mi=G(!1),Os=G(!1),kb=G(!0),xl=r1({xs:460,...l1}),ms=B1(),gf=P1(),bb=L(()=>ms.height.value-ms.width.value/Mt>180),vf=z1(Kn?document.body:null),Lt=i1(),yb=L(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=Lt.value)==null?void 0:e.tagName)||"")||((n=Lt.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),wb=L(()=>{var e;return["BUTTON","A"].includes(((e=Lt.value)==null?void 0:e.tagName)||"")});qn("slidev-camera","default");qn("slidev-mic","default");const go=qn("slidev-scale",0),pn=qn("slidev-show-overview",!1),La=qn("slidev-presenter-cursor",!0),_u=qn("slidev-show-editor",!1);qn("slidev-editor-width",Kn?window.innerWidth*.4:100);const kf=qd(pn);function gu(e,n,s,i=o=>o){return e*i(.5-n*(.5-s))}function Ib(e){return[-e[0],-e[1]]}function Un(e,n){return[e[0]+n[0],e[1]+n[1]]}function An(e,n){return[e[0]-n[0],e[1]-n[1]]}function Hn(e,n){return[e[0]*n,e[1]*n]}function xb(e,n){return[e[0]/n,e[1]/n]}function Zs(e){return[e[1],-e[0]]}function vu(e,n){return e[0]*n[0]+e[1]*n[1]}function Eb(e,n){return e[0]===n[0]&&e[1]===n[1]}function $b(e){return Math.hypot(e[0],e[1])}function Cb(e){return e[0]*e[0]+e[1]*e[1]}function ku(e,n){return Cb(An(e,n))}function bf(e){return xb(e,$b(e))}function Ob(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function Xs(e,n,s){let i=Math.sin(s),o=Math.cos(s),l=e[0]-n[0],r=e[1]-n[1],c=l*o-r*i,u=l*i+r*o;return[c+n[0],u+n[1]]}function El(e,n,s){return Un(e,Hn(An(n,e),s))}function bu(e,n,s){return Un(e,Hn(n,s))}var{min:Es,PI:Sb}=Math,yu=.275,Js=Sb+1e-4;function Mb(e,n={}){let{size:s=16,smoothing:i=.5,thinning:o=.5,simulatePressure:l=!0,easing:r=te=>te,start:c={},end:u={},last:p=!1}=n,{cap:d=!0,easing:f=te=>te*(2-te)}=c,{cap:m=!0,easing:h=te=>--te*te*te+1}=u;if(e.length===0||s<=0)return[];let _=e[e.length-1].runningLength,b=c.taper===!1?0:c.taper===!0?Math.max(s,_):c.taper,y=u.taper===!1?0:u.taper===!0?Math.max(s,_):u.taper,w=Math.pow(s*i,2),I=[],v=[],C=e.slice(0,10).reduce((te,ce)=>{let $e=ce.pressure;if(l){let Pe=Es(1,ce.distance/s),Fn=Es(1,1-Pe);$e=Es(1,te+(Fn-te)*(Pe*yu))}return(te+$e)/2},e[0].pressure),E=gu(s,o,e[e.length-1].pressure,r),M,D=e[0].vector,T=e[0].point,B=T,oe=T,de=B,X=!1;for(let te=0;te<e.length;te++){let{pressure:ce}=e[te],{point:$e,vector:Pe,distance:Fn,runningLength:tn}=e[te];if(te<e.length-1&&_-tn<3)continue;if(o){if(l){let se=Es(1,Fn/s),Ee=Es(1,1-se);ce=Es(1,C+(Ee-C)*(se*yu))}E=gu(s,o,ce,r)}else E=s/2;M===void 0&&(M=E);let _n=tn<b?f(tn/b):1,Yn=_-tn<y?h((_-tn)/y):1;E=Math.max(.01,E*Math.min(_n,Yn));let Vt=(te<e.length-1?e[te+1]:e[te]).vector,Tn=te<e.length-1?vu(Pe,Vt):1,F=vu(Pe,D)<0&&!X,J=Tn!==null&&Tn<0;if(F||J){let se=Hn(Zs(D),E);for(let Ee=1/13,Ne=0;Ne<=1;Ne+=Ee)oe=Xs(An($e,se),$e,Js*Ne),I.push(oe),de=Xs(Un($e,se),$e,Js*-Ne),v.push(de);T=oe,B=de,J&&(X=!0);continue}if(X=!1,te===e.length-1){let se=Hn(Zs(Pe),E);I.push(An($e,se)),v.push(Un($e,se));continue}let ne=Hn(Zs(El(Vt,Pe,Tn)),E);oe=An($e,ne),(te<=1||ku(T,oe)>w)&&(I.push(oe),T=oe),de=Un($e,ne),(te<=1||ku(B,de)>w)&&(v.push(de),B=de),C=ce,D=Pe}let ve=e[0].point.slice(0,2),be=e.length>1?e[e.length-1].point.slice(0,2):Un(e[0].point,[1,1]),Ie=[],Re=[];if(e.length===1){if(!(b||y)||p){let te=bu(ve,bf(Zs(An(ve,be))),-(M||E)),ce=[];for(let $e=1/13,Pe=$e;Pe<=1;Pe+=$e)ce.push(Xs(te,ve,Js*2*Pe));return ce}}else{if(!(b||y&&e.length===1))if(d)for(let ce=1/13,$e=ce;$e<=1;$e+=ce){let Pe=Xs(v[0],ve,Js*$e);Ie.push(Pe)}else{let ce=An(I[0],v[0]),$e=Hn(ce,.5),Pe=Hn(ce,.51);Ie.push(An(ve,$e),An(ve,Pe),Un(ve,Pe),Un(ve,$e))}let te=Zs(Ib(e[e.length-1].vector));if(y||b&&e.length===1)Re.push(be);else if(m){let ce=bu(be,te,E);for(let $e=1/29,Pe=$e;Pe<1;Pe+=$e)Re.push(Xs(ce,be,Js*3*Pe))}else Re.push(Un(be,Hn(te,E)),Un(be,Hn(te,E*.99)),An(be,Hn(te,E*.99)),An(be,Hn(te,E)))}return I.concat(Re,v.reverse(),Ie)}function Fb(e,n={}){var s;let{streamline:i=.5,size:o=16,last:l=!1}=n;if(e.length===0)return[];let r=.15+(1-i)*.85,c=Array.isArray(e[0])?e:e.map(({x:h,y:_,pressure:b=.5})=>[h,_,b]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let _=1;_<5;_++)c.push(El(c[0],h,_/4))}c.length===1&&(c=[...c,[...Un(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=u[0],m=c.length-1;for(let h=1;h<c.length;h++){let _=l&&h===m?c[h].slice(0,2):El(f.point,c[h],r);if(Eb(f.point,_))continue;let b=Ob(_,f.point);if(d+=b,h<m&&!p){if(d<o)continue;p=!0}f={point:_,pressure:c[h][2]>=0?c[h][2]:.5,vector:bf(An(f.point,_)),distance:b,runningLength:d},u.push(f)}return u[0].vector=((s=u[1])==null?void 0:s.vector)||[0,0],u}function Tb(e,n={}){return Mb(Fb(e,n),n)}var Lb=()=>({events:{},emit(e,...n){let s=this.events[e]||[];for(let i=0,o=s.length;i<o;i++)s[i](...n)},on(e,n){var s;return(s=this.events[e])!=null&&s.push(n)||(this.events[e]=[n]),()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(o=>n!==o)}}});function Ho(e,n){return e-n}function zb(e){return e<0?-1:1}function Uo(e){return[Math.abs(e),zb(e)]}function yf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Ab=2,mt=Ab,js=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n;const s=this.drauu.el,i=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*i,y:(e.pageY-o.top)*i,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const l=o.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*i,y:l.y*i,pressure:e.pressure}}}createElement(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg",e),i=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",i.fill??"transparent"),s.setAttribute("stroke",i.color),s.setAttribute("stroke-width",i.size.toString()),s.setAttribute("stroke-linecap","round"),i.dasharray&&s.setAttribute("stroke-dasharray",i.dasharray),s}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(mt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Pb=class extends js{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=Tb(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((i,[o,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return i.push(o,l,(o+u)/2,(l+p)/2),i},["M",...n[0],"Q"]);return s.push("Z"),s.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}},Rb=class extends js{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Uo(e.x-this.start.x),[i,o]=Uo(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,i);n=l,i=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",i);else{const[l,r]=[this.start.x,this.start.x+n*s].sort(Ho),[c,u]=[this.start.y,this.start.y+i*o].sort(Ho);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function wf(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),i=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",n),i.setAttribute("id",e),i.setAttribute("viewBox","0 -5 10 10"),i.setAttribute("refX","5"),i.setAttribute("refY","0"),i.setAttribute("markerWidth","4"),i.setAttribute("markerHeight","4"),i.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),i.appendChild(o),s.appendChild(i),s}var Nb=class extends js{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=yf(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(wf(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const i=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let l=i/o;l=Math.round(l),Math.abs(l)<=1?(n=this.start.x+o*l,s=this.start.y+o):(n=this.start.x+i,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},jb=class extends js{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Uo(e.x-this.start.x),[i,o]=Uo(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,i);n=l,i=l}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-i),this.attr("width",n*2),this.attr("height",i*2);else{const[l,r]=[this.start.x,this.start.x+n*s].sort(Ho),[c,u]=[this.start.y,this.start.y+i*o].sort(Ho);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Db(e,n){const s=e.x-n.x,i=e.y-n.y;return s*s+i*i}function Hb(e,n,s){let i=n.x,o=n.y,l=s.x-i,r=s.y-o;if(l!==0||r!==0){const c=((e.x-i)*l+(e.y-o)*r)/(l*l+r*r);c>1?(i=s.x,o=s.y):c>0&&(i+=l*c,o+=r*c)}return l=e.x-i,r=e.y-o,l*l+r*r}function Ub(e,n){let s=e[0];const i=[s];let o;for(let l=1,r=e.length;l<r;l++)o=e[l],Db(o,s)>n&&(i.push(o),s=o);return s!==o&&o&&i.push(o),i}function $l(e,n,s,i,o){let l=i,r=0;for(let c=n+1;c<s;c++){const u=Hb(e[c],e[n],e[s]);u>l&&(r=c,l=u)}l>i&&(r-n>1&&$l(e,n,r,i,o),o.push(e[r]),s-r>1&&$l(e,r,s,i,o))}function Vb(e,n){const s=e.length-1,i=[e[0]];return $l(e,0,s,n,i),i.push(e[s]),i}function wu(e,n,s=!1){if(e.length<=2)return e;const i=n!==void 0?n*n:1;return e=s?e:Ub(e,i),e=Vb(e,i),e}var Bb=class extends js{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=yf();const n=wf(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=wu(this.points,1,!0),this.count=0),this.attr("d",xu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",xu(wu(this.points,1,!0))),!e.getTotalLength()))}};function Wb(e,n){const s=n.x-e.x,i=n.y-e.y;return{length:Math.sqrt(s**2+i**2),angle:Math.atan2(i,s)}}function Iu(e,n,s,i){const o=n||e,l=s||e,r=.2,c=Wb(o,l),u=c.angle+(i?Math.PI:0),p=c.length*r,d=e.x+Math.cos(u)*p,f=e.y+Math.sin(u)*p;return{x:d,y:f}}function Kb(e,n,s){const i=Iu(s[n-1],s[n-2],e),o=Iu(e,s[n-1],s[n+1],!0);return`C ${i.x.toFixed(mt)},${i.y.toFixed(mt)} ${o.x.toFixed(mt)},${o.y.toFixed(mt)} ${e.x.toFixed(mt)},${e.y.toFixed(mt)}`}function xu(e){return e.reduce((n,s,i,o)=>i===0?`M ${s.x.toFixed(mt)},${s.y.toFixed(mt)}`:`${n} ${Kb(s,i,o)}`,"")}var qb=class extends js{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,i)=>{if(s&&s.length)for(let o=0;o<s.length;o++){const l=s[o];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:i||l})}}else l.children&&n(l.children,l)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],i={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,i)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,i=e.x2,o=n.x1,l=n.x2,r=e.y1,c=e.y2,u=n.y1,p=n.y2,d=(s-i)*(u-p)-(r-c)*(o-l),f=(s*c-r*i)*(o-l)-(s-i)*(o*p-u*l),m=(s*c-r*i)*(u-p)-(r-c)*(o*p-u*l),h=(_,b,y)=>_>=b&&_<=y?!0:_>=y&&_<=b;if(d===0)return!1;{const _={x:f/d,y:m/d};return h(_.x,s,i)&&h(_.y,r,c)&&h(_.x,o,l)&&h(_.y,u,p)}}};function Yb(e){return{draw:new Bb(e),stylus:new Pb(e),line:new Nb(e),rectangle:new jb(e),ellipse:new Rb(e),eraseLine:new qb(e)}}var Gb=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Lb(),this._models=Yb(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,i=this.eventStart.bind(this),o=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",i,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",i),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Qb(e){return new Gb(e)}const Cl=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],et=qn("slidev-drawing-enabled",!1),A5=qn("slidev-drawing-pinned",!1),Zb=G(!1),Xb=G(!1),Jb=G(!1),Si=G(!1),os=Iv(qn("slidev-drawing-brush",{color:Cl[0],size:4,mode:"stylus"})),Eu=G("stylus"),If=L(()=>Me.drawings.syncAll||vn.value);let Mi=!1;const ei=L({get(){return Eu.value},set(e){Eu.value=e,e==="arrow"?(os.mode="line",os.arrowEnd=!0):(os.mode=e,os.arrowEnd=!1)}}),ey=Be({brush:os,acceptsInputTypes:L(()=>et.value&&(!Me.drawings.presenterOnly||vn.value)?void 0:["pen"]),coordinateTransform:!1}),hn=Jo(Qb(ey));function ny(){hn.clear(),If.value&&Vd(Ke.value,"")}function Ir(){var e;Xb.value=hn.canRedo(),Zb.value=hn.canUndo(),Jb.value=!!((e=hn.el)!=null&&e.children.length)}function ty(e){Mi=!0;const n=jo[e||Ke.value];n!=null?hn.load(n):hn.clear(),Ir(),Mi=!1}hn.on("changed",()=>{if(Ir(),!Mi){const e=hn.dump(),n=Ke.value;(jo[n]||"")!==e&&If.value&&Vd(n,hn.dump())}});kv(e=>{Mi=!0,e[Ke.value]!=null&&hn.load(e[Ke.value]||""),Mi=!1,Ir()});on(()=>{ke(Ke,()=>{hn.mounted&&ty()},{immediate:!0})});hn.on("start",()=>Si.value=!0);hn.on("end",()=>Si.value=!1);window.addEventListener("keydown",e=>{if(!et.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?hn.redo():hn.undo():e.code==="Escape"?et.value=!1:e.code==="KeyL"&&n?ei.value="line":e.code==="KeyA"&&n?ei.value="arrow":e.code==="KeyS"&&n?ei.value="stylus":e.code==="KeyR"&&n?ei.value="rectangle":e.code==="KeyE"&&n?ei.value="ellipse":e.code==="KeyC"&&n?ny():e.code.startsWith("Digit")&&n&&+e.code[5]<=Cl.length?os.color=Cl[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function Qe(...e){return L(()=>e.every(n=>Ye(n)))}function xn(e){return L(()=>!Ye(e))}const $u=b1(),za=qn("slidev-color-schema","auto"),Ol=L(()=>Me.colorSchema!=="auto"),xr=L({get(){return Ol.value?Me.colorSchema==="dark":za.value==="auto"?$u.value:za.value==="dark"},set(e){Ol.value||(za.value=e===$u.value?"auto":e?"dark":"light")}}),xf=qd(xr);Kn&&ke(xr,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const vo=G(1),ko=L(()=>Ge.length-1),On=G(0),Er=G(0);function sy(){On.value>vo.value&&(On.value-=1)}function iy(){On.value<ko.value&&(On.value+=1)}function oy(){if(On.value>vo.value){let e=On.value-Er.value;e<vo.value&&(e=vo.value),On.value=e}}function ay(){if(On.value<ko.value){let e=On.value+Er.value;e>ko.value&&(e=ko.value),On.value=e}}function ly(){const{escape:e,space:n,shift:s,left:i,right:o,up:l,down:r,enter:c,d:u,g:p,o:d}=gf;let f=[{name:"next_space",key:Qe(n,xn(s)),fn:zt,autoRepeat:!0},{name:"prev_space",key:Qe(n,s),fn:At,autoRepeat:!0},{name:"next_right",key:Qe(o,xn(s),xn(pn)),fn:zt,autoRepeat:!0},{name:"prev_left",key:Qe(i,xn(s),xn(pn)),fn:At,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:zt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:At,autoRepeat:!0},{name:"next_down",key:Qe(r,xn(pn)),fn:Ti,autoRepeat:!0},{name:"prev_up",key:Qe(l,xn(pn)),fn:()=>Li(!1),autoRepeat:!0},{name:"next_shift",key:Qe(o,s),fn:Ti,autoRepeat:!0},{name:"prev_shift",key:Qe(i,s),fn:()=>Li(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(u,xn(et)),fn:xf},{name:"toggle_overview",key:Qe(d,xn(et)),fn:kf},{name:"hide_overview",key:Qe(e,xn(et)),fn:()=>pn.value=!1},{name:"goto",key:Qe(p,xn(et)),fn:()=>Os.value=!Os.value},{name:"next_overview",key:Qe(o,pn),fn:iy},{name:"prev_overview",key:Qe(i,pn),fn:sy},{name:"up_overview",key:Qe(l,pn),fn:oy},{name:"down_overview",key:Qe(r,pn),fn:ay},{name:"goto_from_overview",key:Qe(c,pn),fn:()=>{Rs(On.value),pn.value=!1}}];const m=new Set(f.map(_=>_.name));if(f.filter(_=>_.name&&m.has(_.name)).length===0){const _=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(_),console.warn(_)}return f}const Ef=Qe(xn(yb),xn(wb),kb);function ry(e,n,s=!1){typeof e=="string"&&(e=gf[e]);const i=Qe(e,Ef);let o=0,l;const r=()=>{if(clearTimeout(l),!i.value){o=0;return}s&&(l=setTimeout(r,Math.max(1e3-o*250,150)),o++),n()};return ke(i,r,{flush:"sync"})}function cy(e,n){return s1(e,s=>{Ef.value&&(s.repeat||n())})}function uy(){const e=ly();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&ry(s.key,s.fn,s.autoRepeat)}),cy("f",()=>vf.toggle())}const py={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dy=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),fy=[dy];function my(e,n){return x(),ie("svg",py,fy)}const hy={name:"carbon-close",render:my};function $r(e,n=""){var o,l;const s=["slidev-page",n],i=(l=(o=e==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:l.no;return i!=null&&s.push(`slidev-page-${i}`),s.filter(Boolean).join(" ")}const _y=Ae({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;z(N);const s=G(),i=T1(s),o=L(()=>n.width?n.width:i.width.value),l=L(()=>n.width?n.width/Mt:i.height.value);n.width&&ks(()=>{s.value&&(s.value.style.width=`${o.value}px`,s.value.style.height=`${l.value}px`)});const r=L(()=>o.value/l.value),c=L(()=>n.scale&&!Ps.value?n.scale:r.value<Mt?o.value/Ft:l.value*Mt/Ft),u=L(()=>({height:`${kr}px`,width:`${Ft}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=L(()=>({"select-none":!Me.selectable,"slidev-code-line-numbers":Me.lineNumbers}));return $n(Dd,c),(d,f)=>(x(),ie("div",{id:"slide-container",ref_key:"root",ref:s,class:We(p.value)},[t("div",{id:"slide-content",style:nn(u.value)},[ot(d.$slots,"default")],4),ot(d.$slots,"controls")],2))}});const j=(e,n)=>{const s=e.__vccOpts||e;for(const[i,o]of n)s[i]=o;return s},$f=j(_y,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Cr=Ae({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=Jn(e,"clicks",n),i=Jn(e,"clicksElements",n),o=Jn(e,"clicksDisabled",n),l=Jn(e,"clicksOrderMap",n);i.value.length=0,$n(iv,e.route),$n(ov,e.context),$n(ui,s),$n(pi,o),$n(es,i),$n(ml,l)},render(){var e,n;return this.$props.is?wn(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),gy=["innerHTML"],vy=Ae({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return z(N),(n,s)=>S(jo)[n.page]?(x(),ie("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:S(jo)[n.page]},null,8,gy)):we("v-if",!0)}}),Cf=j(vy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),ky=Object.freeze(Object.defineProperty({__proto__:null,default:Cf},Symbol.toStringTag,{value:"Module"})),by={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},yy=["onClick"],Aa=4*16*2,Cu=2*16,wy=Ae({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:n}){const s=e;z(N);const i=Jn(s,"modelValue",n);function o(){i.value=!1}function l(f){Rs(f),o()}function r(f){return f===On.value}const c=xl.smaller("xs"),u=xl.smaller("sm"),p=L(()=>c.value?ms.width.value-Aa:u.value?(ms.width.value-Aa-Cu)/2:300),d=L(()=>Math.floor((ms.width.value-Aa)/(p.value+Cu)));return ks(()=>{On.value=Ke.value,Er.value=d.value}),(f,m)=>{const h=hy;return x(),ie(Te,null,[Jp(t("div",by,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:nn(`grid-template-columns: repeat(auto-fit,minmax(${p.value}px,1fr))`)},[(x(!0),ie(Te,null,Ns(S(Ge).slice(0,-1),(_,b)=>(x(),ie("div",{key:_.path,class:"relative"},[t("div",{class:We(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(b+1),"border-gray-400":!r(b+1)}]),style:nn(S(br)),onClick:y=>l(+_.path)},[(x(),P($f,{key:_.path,width:p.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:O(()=>[_!=null&&_.component?(x(),P(S(Cr),{key:0,is:_.component,"clicks-disabled":!0,class:We(S($r)(_)),route:_,context:"overview"},null,8,["is","class","route"])):we("v-if",!0),H(Cf,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,yy),t("div",{class:"absolute top-0 opacity-50",style:nn(`left: ${p.value+5}px`)},kn(b+1),5)]))),128))],4)],512),[[Sd,S(i)]]),S(i)?(x(),ie("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:o},[H(h)])):we("v-if",!0)],64)}}});const Iy=j(wy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),xy="/3/files/assets/logo-b72bde5d.png",Ey={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},$y=Ae({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;z(N);const i=Jn(s,"modelValue",n);function o(){i.value=!1}return(l,r)=>(x(),P(nd,null,[S(i)?(x(),ie("div",Ey,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>o())}),t("div",{class:We(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[ot(l.$slots,"default")],2)])):we("v-if",!0)],1024))}}),Cy=j($y,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Oy={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Sy=["innerHTML"],My=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:xy,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),a("dev ")])])],-1),Fy=Ae({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;z(N);const i=Jn(s,"modelValue",n),o=L(()=>typeof Me.info=="string");return(l,r)=>(x(),P(Cy,{modelValue:S(i),"onUpdate:modelValue":r[0]||(r[0]=c=>Fe(i)?i.value=c:null),class:"px-6 py-4"},{default:O(()=>[t("div",Oy,[o.value?(x(),ie("div",{key:0,class:"mb-4",innerHTML:S(Me).info},null,8,Sy)):we("v-if",!0),My])]),_:1},8,["modelValue"]))}});const Ty=j(Fy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function gt(e){return Array.isArray?Array.isArray(e):Mf(e)==="[object Array]"}const Ly=1/0;function zy(e){if(typeof e=="string")return e;let n=e+"";return n=="0"&&1/e==-Ly?"-0":n}function Ay(e){return e==null?"":zy(e)}function nt(e){return typeof e=="string"}function Of(e){return typeof e=="number"}function Py(e){return e===!0||e===!1||Ry(e)&&Mf(e)=="[object Boolean]"}function Sf(e){return typeof e=="object"}function Ry(e){return Sf(e)&&e!==null}function Cn(e){return e!=null}function Pa(e){return!e.trim().length}function Mf(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Ny="Incorrect 'index' type",jy=e=>`Invalid value for key ${e}`,Dy=e=>`Pattern length exceeds max of ${e}.`,Hy=e=>`Missing ${e} property in key`,Uy=e=>`Property 'weight' in key '${e}' must be a positive integer`,Ou=Object.prototype.hasOwnProperty;class Vy{constructor(n){this._keys=[],this._keyMap={};let s=0;n.forEach(i=>{let o=Ff(i);s+=o.weight,this._keys.push(o),this._keyMap[o.id]=o,s+=o.weight}),this._keys.forEach(i=>{i.weight/=s})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ff(e){let n=null,s=null,i=null,o=1,l=null;if(nt(e)||gt(e))i=e,n=Su(e),s=Sl(e);else{if(!Ou.call(e,"name"))throw new Error(Hy("name"));const r=e.name;if(i=r,Ou.call(e,"weight")&&(o=e.weight,o<=0))throw new Error(Uy(r));n=Su(r),s=Sl(r),l=e.getFn}return{path:n,id:s,weight:o,src:i,getFn:l}}function Su(e){return gt(e)?e:e.split(".")}function Sl(e){return gt(e)?e.join("."):e}function By(e,n){let s=[],i=!1;const o=(l,r,c)=>{if(Cn(l))if(!r[c])s.push(l);else{let u=r[c];const p=l[u];if(!Cn(p))return;if(c===r.length-1&&(nt(p)||Of(p)||Py(p)))s.push(Ay(p));else if(gt(p)){i=!0;for(let d=0,f=p.length;d<f;d+=1)o(p[d],r,c+1)}else r.length&&o(p,r,c+1)}};return o(e,nt(n)?n.split("."):n,0),i?s:s[0]}const Wy={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ky={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,n)=>e.score===n.score?e.idx<n.idx?-1:1:e.score<n.score?-1:1},qy={location:0,threshold:.6,distance:100},Yy={useExtendedSearch:!1,getFn:By,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var me={...Ky,...Wy,...qy,...Yy};const Gy=/[^ ]+/g;function Qy(e=1,n=3){const s=new Map,i=Math.pow(10,n);return{get(o){const l=o.match(Gy).length;if(s.has(l))return s.get(l);const r=1/Math.pow(l,.5*e),c=parseFloat(Math.round(r*i)/i);return s.set(l,c),c},clear(){s.clear()}}}class Or{constructor({getFn:n=me.getFn,fieldNormWeight:s=me.fieldNormWeight}={}){this.norm=Qy(s,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((s,i)=>{this._keysMap[s.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,nt(this.docs[0])?this.docs.forEach((n,s)=>{this._addString(n,s)}):this.docs.forEach((n,s)=>{this._addObject(n,s)}),this.norm.clear())}add(n){const s=this.size();nt(n)?this._addString(n,s):this._addObject(n,s)}removeAt(n){this.records.splice(n,1);for(let s=n,i=this.size();s<i;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(n,s){return n[this._keysMap[s]]}size(){return this.records.length}_addString(n,s){if(!Cn(n)||Pa(n))return;let i={v:n,i:s,n:this.norm.get(n)};this.records.push(i)}_addObject(n,s){let i={i:s,$:{}};this.keys.forEach((o,l)=>{let r=o.getFn?o.getFn(n):this.getFn(n,o.path);if(Cn(r)){if(gt(r)){let c=[];const u=[{nestedArrIndex:-1,value:r}];for(;u.length;){const{nestedArrIndex:p,value:d}=u.pop();if(Cn(d))if(nt(d)&&!Pa(d)){let f={v:d,i:p,n:this.norm.get(d)};c.push(f)}else gt(d)&&d.forEach((f,m)=>{u.push({nestedArrIndex:m,value:f})})}i.$[l]=c}else if(nt(r)&&!Pa(r)){let c={v:r,n:this.norm.get(r)};i.$[l]=c}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function Tf(e,n,{getFn:s=me.getFn,fieldNormWeight:i=me.fieldNormWeight}={}){const o=new Or({getFn:s,fieldNormWeight:i});return o.setKeys(e.map(Ff)),o.setSources(n),o.create(),o}function Zy(e,{getFn:n=me.getFn,fieldNormWeight:s=me.fieldNormWeight}={}){const{keys:i,records:o}=e,l=new Or({getFn:n,fieldNormWeight:s});return l.setKeys(i),l.setIndexRecords(o),l}function lo(e,{errors:n=0,currentLocation:s=0,expectedLocation:i=0,distance:o=me.distance,ignoreLocation:l=me.ignoreLocation}={}){const r=n/e.length;if(l)return r;const c=Math.abs(i-s);return o?r+c/o:c?1:r}function Xy(e=[],n=me.minMatchCharLength){let s=[],i=-1,o=-1,l=0;for(let r=e.length;l<r;l+=1){let c=e[l];c&&i===-1?i=l:!c&&i!==-1&&(o=l-1,o-i+1>=n&&s.push([i,o]),i=-1)}return e[l-1]&&l-i>=n&&s.push([i,l-1]),s}const ts=32;function Jy(e,n,s,{location:i=me.location,distance:o=me.distance,threshold:l=me.threshold,findAllMatches:r=me.findAllMatches,minMatchCharLength:c=me.minMatchCharLength,includeMatches:u=me.includeMatches,ignoreLocation:p=me.ignoreLocation}={}){if(n.length>ts)throw new Error(Dy(ts));const d=n.length,f=e.length,m=Math.max(0,Math.min(i,f));let h=l,_=m;const b=c>1||u,y=b?Array(f):[];let w;for(;(w=e.indexOf(n,_))>-1;){let D=lo(n,{currentLocation:w,expectedLocation:m,distance:o,ignoreLocation:p});if(h=Math.min(D,h),_=w+d,b){let T=0;for(;T<d;)y[w+T]=1,T+=1}}_=-1;let I=[],v=1,C=d+f;const E=1<<d-1;for(let D=0;D<d;D+=1){let T=0,B=C;for(;T<B;)lo(n,{errors:D,currentLocation:m+B,expectedLocation:m,distance:o,ignoreLocation:p})<=h?T=B:C=B,B=Math.floor((C-T)/2+T);C=B;let oe=Math.max(1,m-B+1),de=r?f:Math.min(m+B,f)+d,X=Array(de+2);X[de+1]=(1<<D)-1;for(let be=de;be>=oe;be-=1){let Ie=be-1,Re=s[e.charAt(Ie)];if(b&&(y[Ie]=+!!Re),X[be]=(X[be+1]<<1|1)&Re,D&&(X[be]|=(I[be+1]|I[be])<<1|1|I[be+1]),X[be]&E&&(v=lo(n,{errors:D,currentLocation:Ie,expectedLocation:m,distance:o,ignoreLocation:p}),v<=h)){if(h=v,_=Ie,_<=m)break;oe=Math.max(1,2*m-_)}}if(lo(n,{errors:D+1,currentLocation:m,expectedLocation:m,distance:o,ignoreLocation:p})>h)break;I=X}const M={isMatch:_>=0,score:Math.max(.001,v)};if(b){const D=Xy(y,c);D.length?u&&(M.indices=D):M.isMatch=!1}return M}function ew(e){let n={};for(let s=0,i=e.length;s<i;s+=1){const o=e.charAt(s);n[o]=(n[o]||0)|1<<i-s-1}return n}class Lf{constructor(n,{location:s=me.location,threshold:i=me.threshold,distance:o=me.distance,includeMatches:l=me.includeMatches,findAllMatches:r=me.findAllMatches,minMatchCharLength:c=me.minMatchCharLength,isCaseSensitive:u=me.isCaseSensitive,ignoreLocation:p=me.ignoreLocation}={}){if(this.options={location:s,threshold:i,distance:o,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p},this.pattern=u?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(m,h)=>{this.chunks.push({pattern:m,alphabet:ew(m),startIndex:h})},f=this.pattern.length;if(f>ts){let m=0;const h=f%ts,_=f-h;for(;m<_;)d(this.pattern.substr(m,ts),m),m+=ts;if(h){const b=f-ts;d(this.pattern.substr(b),b)}}else d(this.pattern,0)}searchIn(n){const{isCaseSensitive:s,includeMatches:i}=this.options;if(s||(n=n.toLowerCase()),this.pattern===n){let _={isMatch:!0,score:0};return i&&(_.indices=[[0,n.length-1]]),_}const{location:o,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,ignoreLocation:p}=this.options;let d=[],f=0,m=!1;this.chunks.forEach(({pattern:_,alphabet:b,startIndex:y})=>{const{isMatch:w,score:I,indices:v}=Jy(n,_,b,{location:o+y,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:p});w&&(m=!0),f+=I,w&&v&&(d=[...d,...v])});let h={isMatch:m,score:m?f/this.chunks.length:1};return m&&i&&(h.indices=d),h}}class Ut{constructor(n){this.pattern=n}static isMultiMatch(n){return Mu(n,this.multiRegex)}static isSingleMatch(n){return Mu(n,this.singleRegex)}search(){}}function Mu(e,n){const s=e.match(n);return s?s[1]:null}class nw extends Ut{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const s=n===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class tw extends Ut{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const i=n.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,n.length-1]}}}class sw extends Ut{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const s=n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class iw extends Ut{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const s=!n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class ow extends Ut{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const s=n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class aw extends Ut{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const s=!n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class zf extends Ut{constructor(n,{location:s=me.location,threshold:i=me.threshold,distance:o=me.distance,includeMatches:l=me.includeMatches,findAllMatches:r=me.findAllMatches,minMatchCharLength:c=me.minMatchCharLength,isCaseSensitive:u=me.isCaseSensitive,ignoreLocation:p=me.ignoreLocation}={}){super(n),this._bitapSearch=new Lf(n,{location:s,threshold:i,distance:o,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class Af extends Ut{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let s=0,i;const o=[],l=this.pattern.length;for(;(i=n.indexOf(this.pattern,s))>-1;)s=i+l,o.push([i,s-1]);const r=!!o.length;return{isMatch:r,score:r?0:1,indices:o}}}const Ml=[nw,Af,sw,iw,aw,ow,tw,zf],Fu=Ml.length,lw=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,rw="|";function cw(e,n={}){return e.split(rw).map(s=>{let i=s.trim().split(lw).filter(l=>l&&!!l.trim()),o=[];for(let l=0,r=i.length;l<r;l+=1){const c=i[l];let u=!1,p=-1;for(;!u&&++p<Fu;){const d=Ml[p];let f=d.isMultiMatch(c);f&&(o.push(new d(f,n)),u=!0)}if(!u)for(p=-1;++p<Fu;){const d=Ml[p];let f=d.isSingleMatch(c);if(f){o.push(new d(f,n));break}}}return o})}const uw=new Set([zf.type,Af.type]);class pw{constructor(n,{isCaseSensitive:s=me.isCaseSensitive,includeMatches:i=me.includeMatches,minMatchCharLength:o=me.minMatchCharLength,ignoreLocation:l=me.ignoreLocation,findAllMatches:r=me.findAllMatches,location:c=me.location,threshold:u=me.threshold,distance:p=me.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:i,minMatchCharLength:o,findAllMatches:r,ignoreLocation:l,location:c,threshold:u,distance:p},this.pattern=s?n:n.toLowerCase(),this.query=cw(this.pattern,this.options)}static condition(n,s){return s.useExtendedSearch}searchIn(n){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:o}=this.options;n=o?n:n.toLowerCase();let l=0,r=[],c=0;for(let u=0,p=s.length;u<p;u+=1){const d=s[u];r.length=0,l=0;for(let f=0,m=d.length;f<m;f+=1){const h=d[f],{isMatch:_,indices:b,score:y}=h.search(n);if(_){if(l+=1,c+=y,i){const w=h.constructor.type;uw.has(w)?r=[...r,...b]:r.push(b)}}else{c=0,l=0,r.length=0;break}}if(l){let f={isMatch:!0,score:c/l};return i&&(f.indices=r),f}}return{isMatch:!1,score:1}}}const Fl=[];function dw(...e){Fl.push(...e)}function Tl(e,n){for(let s=0,i=Fl.length;s<i;s+=1){let o=Fl[s];if(o.condition(e,n))return new o(e,n)}return new Lf(e,n)}const Vo={AND:"$and",OR:"$or"},Ll={PATH:"$path",PATTERN:"$val"},zl=e=>!!(e[Vo.AND]||e[Vo.OR]),fw=e=>!!e[Ll.PATH],mw=e=>!gt(e)&&Sf(e)&&!zl(e),Tu=e=>({[Vo.AND]:Object.keys(e).map(n=>({[n]:e[n]}))});function Pf(e,n,{auto:s=!0}={}){const i=o=>{let l=Object.keys(o);const r=fw(o);if(!r&&l.length>1&&!zl(o))return i(Tu(o));if(mw(o)){const u=r?o[Ll.PATH]:l[0],p=r?o[Ll.PATTERN]:o[u];if(!nt(p))throw new Error(jy(u));const d={keyId:Sl(u),pattern:p};return s&&(d.searcher=Tl(p,n)),d}let c={children:[],operator:l[0]};return l.forEach(u=>{const p=o[u];gt(p)&&p.forEach(d=>{c.children.push(i(d))})}),c};return zl(e)||(e=Tu(e)),i(e)}function hw(e,{ignoreFieldNorm:n=me.ignoreFieldNorm}){e.forEach(s=>{let i=1;s.matches.forEach(({key:o,norm:l,score:r})=>{const c=o?o.weight:null;i*=Math.pow(r===0&&c?Number.EPSILON:r,(c||1)*(n?1:l))}),s.score=i})}function _w(e,n){const s=e.matches;n.matches=[],Cn(s)&&s.forEach(i=>{if(!Cn(i.indices)||!i.indices.length)return;const{indices:o,value:l}=i;let r={indices:o,value:l};i.key&&(r.key=i.key.src),i.idx>-1&&(r.refIndex=i.idx),n.matches.push(r)})}function gw(e,n){n.score=e.score}function vw(e,n,{includeMatches:s=me.includeMatches,includeScore:i=me.includeScore}={}){const o=[];return s&&o.push(_w),i&&o.push(gw),e.map(l=>{const{idx:r}=l,c={item:n[r],refIndex:r};return o.length&&o.forEach(u=>{u(l,c)}),c})}class Ds{constructor(n,s={},i){this.options={...me,...s},this.options.useExtendedSearch,this._keyStore=new Vy(this.options.keys),this.setCollection(n,i)}setCollection(n,s){if(this._docs=n,s&&!(s instanceof Or))throw new Error(Ny);this._myIndex=s||Tf(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){Cn(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const s=[];for(let i=0,o=this._docs.length;i<o;i+=1){const l=this._docs[i];n(l,i)&&(this.removeAt(i),i-=1,o-=1,s.push(l))}return s}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:s=-1}={}){const{includeMatches:i,includeScore:o,shouldSort:l,sortFn:r,ignoreFieldNorm:c}=this.options;let u=nt(n)?nt(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return hw(u,{ignoreFieldNorm:c}),l&&u.sort(r),Of(s)&&s>-1&&(u=u.slice(0,s)),vw(u,this._docs,{includeMatches:i,includeScore:o})}_searchStringList(n){const s=Tl(n,this.options),{records:i}=this._myIndex,o=[];return i.forEach(({v:l,i:r,n:c})=>{if(!Cn(l))return;const{isMatch:u,score:p,indices:d}=s.searchIn(l);u&&o.push({item:l,idx:r,matches:[{score:p,value:l,norm:c,indices:d}]})}),o}_searchLogical(n){const s=Pf(n,this.options),i=(c,u,p)=>{if(!c.children){const{keyId:f,searcher:m}=c,h=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(u,f),searcher:m});return h&&h.length?[{idx:p,item:u,matches:h}]:[]}const d=[];for(let f=0,m=c.children.length;f<m;f+=1){const h=c.children[f],_=i(h,u,p);if(_.length)d.push(..._);else if(c.operator===Vo.AND)return[]}return d},o=this._myIndex.records,l={},r=[];return o.forEach(({$:c,i:u})=>{if(Cn(c)){let p=i(s,c,u);p.length&&(l[u]||(l[u]={idx:u,item:c,matches:[]},r.push(l[u])),p.forEach(({matches:d})=>{l[u].matches.push(...d)}))}}),r}_searchObjectList(n){const s=Tl(n,this.options),{keys:i,records:o}=this._myIndex,l=[];return o.forEach(({$:r,i:c})=>{if(!Cn(r))return;let u=[];i.forEach((p,d)=>{u.push(...this._findMatches({key:p,value:r[d],searcher:s}))}),u.length&&l.push({idx:c,item:r,matches:u})}),l}_findMatches({key:n,value:s,searcher:i}){if(!Cn(s))return[];let o=[];if(gt(s))s.forEach(({v:l,i:r,n:c})=>{if(!Cn(l))return;const{isMatch:u,score:p,indices:d}=i.searchIn(l);u&&o.push({score:p,key:n,value:l,idx:r,norm:c,indices:d})});else{const{v:l,n:r}=s,{isMatch:c,score:u,indices:p}=i.searchIn(l);c&&o.push({score:u,key:n,value:l,norm:r,indices:p})}return o}}Ds.version="6.6.2";Ds.createIndex=Tf;Ds.parseIndex=Zy;Ds.config=me;Ds.parseQuery=Pf;dw(pw);const kw={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},bw=["value","disabled","onKeydown"],yw=["border","onClick"],ww={"w-4":"","text-right":"",op50:"","text-sm":""},Iw=Ae({__name:"Goto",setup(e){z(N);const n=G(),s=G(),i=G(),o=G(),l=G(""),r=G(0);function c(v){return v!=null}const u=L(()=>new Ds(Ge.map(v=>{var C;return(C=v.meta)==null?void 0:C.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=L(()=>l.value.startsWith("/")?l.value.substring(1):l.value),d=L(()=>u.value.search(p.value).map(v=>v.item)),f=L(()=>!!d.value.length);function m(){if(f.value){const v=d.value.at(r.value||0);v&&Rs(v.no)}h()}function h(){l.value="",Os.value=!1}function _(v){v.preventDefault(),r.value++,r.value>=d.value.length&&(r.value=0),y()}function b(v){v.preventDefault(),r.value--,r.value<=-2&&(r.value=d.value.length-1),y()}function y(){var C;const v=(C=o.value)==null?void 0:C[r.value];v&&i.value&&(v.offsetTop+v.offsetHeight>i.value.offsetHeight+i.value.scrollTop?i.value.scrollTo({behavior:"smooth",top:v.offsetTop+v.offsetHeight-i.value.offsetHeight+1}):v.offsetTop<i.value.scrollTop&&i.value.scrollTo({behavior:"smooth",top:v.offsetTop}))}function w(v){r.value=0,l.value=v.target.value}function I(v){Rs(v),h()}return ke(Os,async v=>{var C;v?(l.value="",r.value=0,setTimeout(()=>{var E;return(E=s.value)==null?void 0:E.focus()},0)):(C=s.value)==null||C.blur()}),ke(Lt,()=>{var v;(v=n.value)!=null&&v.contains(Lt.value)||h()}),(v,C)=>(x(),ie("div",{id:"slidev-goto-dialog",ref_key:"container",ref:n,class:We(["fixed right-5 transition-all",S(Os)?"top-5":"-top-20"]),"w-90":""},[t("div",kw,[t("input",{ref_key:"input",ref:s,value:l.value,type:"text",disabled:!S(Os),class:We(["outline-none bg-transparent",{"text-red-400":!f.value&&l.value}]),placeholder:"Goto...",onKeydown:[eo(m,["enter"]),eo(h,["escape"]),eo(_,["down"]),eo(b,["up"])],onInput:w},null,42,bw)]),d.value.length>0?(x(),ie("ul",{key:0,ref_key:"list",ref:i,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(x(!0),ie(Te,null,Ns(d.value,(E,M)=>(x(),ie("li",{ref_for:!0,ref_key:"items",ref:o,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:M===0?"":"t main",class:We(r.value===M?"bg-active op100":"op80"),onClick:o0(D=>I(E.no),["stop"])},[t("div",ww,kn(E.no),1),a(" "+kn(E.title),1)],10,yw))),128))],512)):we("v-if",!0)],2))}});const xw=j(Iw,[["__scopeId","data-v-f5ee02a7"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),Ew=Ae({__name:"Controls",setup(e){z(N);const n=it(),s=it();return(i,o)=>(x(),ie(Te,null,[H(Iy,{modelValue:S(pn),"onUpdate:modelValue":o[0]||(o[0]=l=>Fe(pn)?pn.value=l:null)},null,8,["modelValue"]),H(xw),n.value?(x(),P(S(n),{key:0})):we("v-if",!0),s.value?(x(),P(S(s),{key:1,modelValue:S(Ta),"onUpdate:modelValue":o[1]||(o[1]=l=>Fe(Ta)?Ta.value=l:null)},null,8,["modelValue"])):we("v-if",!0),S(Me).info?(x(),P(Ty,{key:2,modelValue:S(mi),"onUpdate:modelValue":o[2]||(o[2]=l=>Fe(mi)?mi.value=l:null)},null,8,["modelValue"])):we("v-if",!0)],64))}}),$w=j(Ew,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),Cw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ow=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Sw=[Ow];function Mw(e,n){return x(),ie("svg",Cw,Sw)}const Fw={name:"carbon-settings-adjust",render:Mw},Tw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lw=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),zw=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Aw=[Lw,zw];function Pw(e,n){return x(),ie("svg",Tw,Aw)}const Rw={name:"carbon-information",render:Pw},Nw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jw=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Dw=[jw];function Hw(e,n){return x(),ie("svg",Nw,Dw)}const Uw={name:"carbon-download",render:Hw},Vw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bw=t("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Ww=t("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Kw=[Bw,Ww];function qw(e,n){return x(),ie("svg",Vw,Kw)}const Yw={name:"carbon-user-speaker",render:qw},Gw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qw=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Zw=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Xw=[Qw,Zw];function Jw(e,n){return x(),ie("svg",Gw,Xw)}const eI={name:"carbon-presentation-file",render:Jw},nI={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tI=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),sI=[tI];function iI(e,n){return x(),ie("svg",nI,sI)}const oI={name:"carbon-pen",render:iI},aI={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},lI=t("g",{fill:"currentColor"},[t("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),t("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),rI=[lI];function cI(e,n){return x(),ie("svg",aI,rI)}const uI={name:"ph-cursor-duotone",render:cI},pI={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},dI=t("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),fI=[dI];function mI(e,n){return x(),ie("svg",pI,fI)}const Rf={name:"ph-cursor-fill",render:mI},hI={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_I=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),gI=[_I];function vI(e,n){return x(),ie("svg",hI,gI)}const kI={name:"carbon-sun",render:vI},bI={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yI=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),wI=[yI];function II(e,n){return x(),ie("svg",bI,wI)}const xI={name:"carbon-moon",render:II},EI={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$I=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),CI=[$I];function OI(e,n){return x(),ie("svg",EI,CI)}const SI={name:"carbon-apps",render:OI},MI={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},FI=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),TI=[FI];function LI(e,n){return x(),ie("svg",MI,TI)}const Nf={name:"carbon-arrow-right",render:LI},zI={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},AI=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),PI=[AI];function RI(e,n){return x(),ie("svg",zI,PI)}const NI={name:"carbon-arrow-left",render:RI},jI={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},DI=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),HI=[DI];function UI(e,n){return x(),ie("svg",jI,HI)}const VI={name:"carbon-maximize",render:UI},BI={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},WI=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),KI=[WI];function qI(e,n){return x(),ie("svg",BI,KI)}const YI={name:"carbon-minimize",render:qI},GI={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},QI=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),ZI=[QI];function XI(e,n){return x(),ie("svg",GI,ZI)}const JI={name:"carbon-checkmark",render:XI},ex={class:"select-list"},nx={class:"title"},tx={class:"items"},sx=["onClick"],ix=Ae({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;z(N);const i=Jn(s,"modelValue",n,{passive:!0});return(o,l)=>{const r=JI;return x(),ie("div",ex,[t("div",nx,kn(e.title),1),t("div",tx,[(x(!0),ie(Te,null,Ns(e.items,c=>(x(),ie("div",{key:c.value,class:We(["item",{active:S(i)===c.value}]),onClick:()=>{var u;i.value=c.value,(u=c.onClick)==null||u.call(c)}},[H(r,{class:We(["text-green-500",{"opacity-0":S(i)!==c.value}])},null,8,["class"]),a(" "+kn(c.display||c.value),1)],10,sx))),128))])])}}});const ox=j(ix,[["__scopeId","data-v-3f89fa11"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),ax={class:"text-sm"},lx=Ae({__name:"Settings",setup(e){z(N);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,i)=>(x(),ie("div",ax,[H(ox,{modelValue:S(go),"onUpdate:modelValue":i[0]||(i[0]=o=>Fe(go)?go.value=o:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),rx=j(lx,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),cx={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},ux=Ae({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;z(N);const i=Jn(s,"modelValue",n,{passive:!0}),o=G();return n1(o,()=>{i.value=!1}),(l,r)=>(x(),ie("div",{ref_key:"el",ref:o,class:"flex relative"},[t("button",{class:We({disabled:e.disabled}),onClick:r[0]||(r[0]=c=>i.value=!S(i))},[ot(l.$slots,"button",{class:We({disabled:e.disabled})})],2),(x(),P(nd,null,[S(i)?(x(),ie("div",cx,[ot(l.$slots,"menu")])):we("v-if",!0)],1024))],512))}}),px=j(ux,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),dx={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},fx={__name:"VerticalDivider",setup(e){return z(N),(n,s)=>(x(),ie("div",dx))}},ro=j(fx,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),mx={render(){return[]}},hx={class:"slidev-icon-btn"},_x={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},gx={class:"my-auto"},vx={class:"opacity-50"},kx=Ae({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;z(N);const s=xl.smaller("md"),{isFullscreen:i,toggle:o}=vf,l=L(()=>Pl.value?`?password=${Pl.value}`:""),r=L(()=>`/presenter/${Ke.value}${l.value}`),c=L(()=>`/${Ke.value}${l.value}`),u=G();function p(){u.value&&Lt.value&&u.value.contains(Lt.value)&&Lt.value.blur()}const d=L(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=it(),m=it();return Tt(()=>import("./DrawingControls-ef123842.js"),[]).then(h=>m.value=h.default),(h,_)=>{const b=YI,y=VI,w=NI,I=Nf,v=SI,C=xI,E=kI,M=Rf,D=uI,T=oI,B=eI,oe=To("RouterLink"),de=Yw,X=Uw,ve=Rw,be=Fw;return x(),ie("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[t("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:p},[S(dt)?we("v-if",!0):(x(),ie("button",{key:0,class:"slidev-icon-btn",onClick:_[0]||(_[0]=(...Ie)=>S(o)&&S(o)(...Ie))},[S(i)?(x(),P(b,{key:0})):(x(),P(y,{key:1}))])),t("button",{class:We(["slidev-icon-btn",{disabled:!S(ZT)}]),onClick:_[1]||(_[1]=(...Ie)=>S(At)&&S(At)(...Ie))},[H(w)],2),t("button",{class:We(["slidev-icon-btn",{disabled:!S(QT)}]),title:"Next",onClick:_[2]||(_[2]=(...Ie)=>S(zt)&&S(zt)(...Ie))},[H(I)],2),S(dt)?we("v-if",!0):(x(),ie("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:_[3]||(_[3]=Ie=>S(kf)())},[H(v)])),S(Ol)?we("v-if",!0):(x(),ie("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:_[4]||(_[4]=Ie=>S(xf)())},[S(xr)?(x(),P(C,{key:0})):(x(),P(E,{key:1}))])),H(ro),S(dt)?we("v-if",!0):(x(),ie(Te,{key:3},[!S(vn)&&!S(s)&&f.value?(x(),ie(Te,{key:0},[H(S(f)),H(ro)],64)):we("v-if",!0),S(vn)?(x(),ie("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:_[5]||(_[5]=Ie=>La.value=!S(La))},[S(La)?(x(),P(M,{key:0})):(x(),P(D,{key:1,class:"opacity-50"}))])):we("v-if",!0)],64)),(!S(Me).drawings.presenterOnly||S(vn))&&!S(dt)?(x(),ie(Te,{key:4},[t("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:_[6]||(_[6]=Ie=>et.value=!S(et))},[H(T),S(et)?(x(),ie("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:nn({background:S(os).color})},null,4)):we("v-if",!0)]),H(ro)],64)):we("v-if",!0),S(dt)?we("v-if",!0):(x(),ie(Te,{key:5},[S(vn)?(x(),P(oe,{key:0,to:c.value,class:"slidev-icon-btn",title:"Play Mode"},{default:O(()=>[H(B)]),_:1},8,["to"])):we("v-if",!0),S(WT)?(x(),P(oe,{key:1,to:r.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:O(()=>[H(de)]),_:1},8,["to"])):we("v-if",!0),we("v-if",!0)],64)),(x(),ie(Te,{key:6},[S(Me).download?(x(),ie("button",{key:0,class:"slidev-icon-btn",onClick:_[8]||(_[8]=(...Ie)=>S(Rl)&&S(Rl)(...Ie))},[H(X)])):we("v-if",!0)],64)),!S(vn)&&S(Me).info&&!S(dt)?(x(),ie("button",{key:7,class:"slidev-icon-btn",onClick:_[9]||(_[9]=Ie=>mi.value=!S(mi))},[H(ve)])):we("v-if",!0),!S(vn)&&!S(dt)?(x(),P(px,{key:8},{button:O(()=>[t("button",hx,[H(be)])]),menu:O(()=>[H(rx)]),_:1})):we("v-if",!0),S(dt)?we("v-if",!0):(x(),P(ro,{key:9})),t("div",_x,[t("div",gx,[a(kn(S(Ke))+" ",1),t("span",vx,"/ "+kn(S(KT)),1)])]),H(S(mx))],34)],512)}}}),bx=j(kx,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),yx={style:{"font-size":"0.55rem","line-height":"1rem"}},wx=t("div",{class:"absolute bottom-0 left-1"},[t("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),Ix={class:"absolute bottom-1 left-89 text-gray-700"},xx={key:0,class:"absolute bottom-1 right-1 text-gray-700"},Ex={__name:"global-top",setup(e){const n=z(N);return(s,i)=>(x(),ie("footer",yx,[wx,t("div",Ix," ITT E.Agnelli - Informatica - "+kn(S(n).configs.materia)+" - prof. Antonio Mancuso - a.s. "+kn(S(n).configs.as)+" - v "+kn(S(n).configs.version||0),1),S(n).nav.currentPage!==1&&S(n).nav.currentPage!=S(n).nav.total+1?(x(),ie("div",xx,kn(S(n).nav.currentPage-1)+" / "+kn(S(n).nav.total-1),1)):we("v-if",!0)]))}},$x=j(Ex,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),jf={render(){return[wn($x)]}},Df={render(){return[]}},Cx={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Ox=Ae({__name:"PresenterMouse",setup(e){return z(N),(n,s)=>{const i=Rf;return S(Oa).cursor?(x(),ie("div",Cx,[H(i,{class:"absolute",style:nn({left:`${S(Oa).cursor.x}%`,top:`${S(Oa).cursor.y}%`})},null,8,["style"])])):we("v-if",!0)}}}),Sx=j(Ox,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Mx=Ae({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){z(N),ke(dn,()=>{var i,o;(i=dn.value)!=null&&i.meta&&dn.value.meta.preload!==!1&&(dn.value.meta.__preloaded=!0),(o=Ra.value)!=null&&o.meta&&Ra.value.meta.preload!==!1&&(Ra.value.meta.__preloaded=!0)},{immediate:!0});const n=it();Tt(()=>import("./DrawingLayer-ef3eeb5f.js"),[]).then(i=>n.value=i.default);const s=L(()=>Ge.filter(i=>{var o;return((o=i.meta)==null?void 0:o.__preloaded)||i===dn.value}));return(i,o)=>(x(),ie(Te,null,[we(" Global Bottom "),H(S(Df)),we(" Slides "),H(Xg,ue(S(eL),{id:"slideshow",tag:"div"}),{default:O(()=>[(x(!0),ie(Te,null,Ns(s.value,l=>{var r;return Jp((x(),P(S(Cr),{key:l.path,is:l==null?void 0:l.component,clicks:l===S(dn)?S(Pn):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:We(S($r)(l)),route:l,context:i.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Sd,l===S(dn)]])}),128))]),_:1},16),we(" Global Top "),H(S(jf)),n.value?(x(),P(S(n),{key:0})):we("v-if",!0),S(vn)?we("v-if",!0):(x(),P(Sx,{key:1}))],64))}});const Fx=j(Mx,[["__scopeId","data-v-afb4231e"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Tx=Ae({__name:"PrintStyle",setup(e){z(N);function n(s,{slots:i}){if(i.default)return wn("style",i.default())}return(s,i)=>(x(),P(n,null,{default:O(()=>[a(" @page { size: "+kn(S(Ft))+"px "+kn(S(kr))+"px; margin: 0px; } ",1)]),_:1}))}}),Hf=j(Tx,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Lx=Ae({__name:"Play",setup(e){z(N),uy();const n=G();function s(l){var r;_u.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?zt():At())}nL(n);const i=L(()=>bb.value||_u.value);it();const o=it();return Tt(()=>import("./DrawingControls-ef123842.js"),[]).then(l=>o.value=l.default),(l,r)=>(x(),ie(Te,null,[S(Ps)?(x(),P(Hf,{key:0})):we("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:nn(S(br))},[H($f,{class:"w-full h-full",style:nn({background:"var(--slidev-slide-container-background, black)"}),width:S(Ps)?S(ms).width.value:void 0,scale:S(go),onPointerdown:s},{default:O(()=>[H(Fx,{context:"slide"})]),controls:O(()=>[t("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[i.value?"opacity-100 right-0":"opacity-0 p-2",S(Si)?"pointer-events-none":""]])},[H(bx,{class:"m-auto",persist:i.value},null,8,["persist"])],2),!S(Me).drawings.presenterOnly&&!S(dt)&&o.value?(x(),P(S(o),{key:0,class:"ml-0"})):we("v-if",!0)]),_:1},8,["style","width","scale"]),we("v-if",!0)],4),H($w)],64))}}),zx=j(Lx,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Uf(e){return typeof e>"u"||e===null}function Ax(e){return typeof e=="object"&&e!==null}function Px(e){return Array.isArray(e)?e:Uf(e)?[]:[e]}function Rx(e,n){var s,i,o,l;if(n)for(l=Object.keys(n),s=0,i=l.length;s<i;s+=1)o=l[s],e[o]=n[o];return e}function Nx(e,n){var s="",i;for(i=0;i<n;i+=1)s+=e;return s}function jx(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Dx=Uf,Hx=Ax,Ux=Px,Vx=Nx,Bx=jx,Wx=Rx,Sr={isNothing:Dx,isObject:Hx,toArray:Ux,repeat:Vx,isNegativeZero:Bx,extend:Wx};function Vf(e,n){var s="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),i+" "+s):i}function Fi(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=Vf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Fi.prototype=Object.create(Error.prototype);Fi.prototype.constructor=Fi;Fi.prototype.toString=function(n){return this.name+": "+Vf(this,n)};var ss=Fi,Kx=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],qx=["scalar","sequence","mapping"];function Yx(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(i){n[String(i)]=s})}),n}function Gx(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(Kx.indexOf(s)===-1)throw new ss('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Yx(n.styleAliases||null),qx.indexOf(this.kind)===-1)throw new ss('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var ln=Gx;function Lu(e,n){var s=[];return e[n].forEach(function(i){var o=s.length;s.forEach(function(l,r){l.tag===i.tag&&l.kind===i.kind&&l.multi===i.multi&&(o=r)}),s[o]=i}),s}function Qx(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function i(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(i);return e}function Al(e){return this.extend(e)}Al.prototype.extend=function(n){var s=[],i=[];if(n instanceof ln)i.push(n);else if(Array.isArray(n))i=i.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(i=i.concat(n.explicit));else throw new ss("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(l){if(!(l instanceof ln))throw new ss("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new ss("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new ss("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(l){if(!(l instanceof ln))throw new ss("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(Al.prototype);return o.implicit=(this.implicit||[]).concat(s),o.explicit=(this.explicit||[]).concat(i),o.compiledImplicit=Lu(o,"implicit"),o.compiledExplicit=Lu(o,"explicit"),o.compiledTypeMap=Qx(o.compiledImplicit,o.compiledExplicit),o};var Zx=Al,Xx=new ln("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Jx=new ln("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),eE=new ln("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),nE=new Zx({explicit:[Xx,Jx,eE]});function tE(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function sE(){return null}function iE(e){return e===null}var oE=new ln("tag:yaml.org,2002:null",{kind:"scalar",resolve:tE,construct:sE,predicate:iE,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function aE(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function lE(e){return e==="true"||e==="True"||e==="TRUE"}function rE(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var cE=new ln("tag:yaml.org,2002:bool",{kind:"scalar",resolve:aE,construct:lE,predicate:rE,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function uE(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function pE(e){return 48<=e&&e<=55}function dE(e){return 48<=e&&e<=57}function fE(e){if(e===null)return!1;var n=e.length,s=0,i=!1,o;if(!n)return!1;if(o=e[s],(o==="-"||o==="+")&&(o=e[++s]),o==="0"){if(s+1===n)return!0;if(o=e[++s],o==="b"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(o!=="0"&&o!=="1")return!1;i=!0}return i&&o!=="_"}if(o==="x"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(!uE(e.charCodeAt(s)))return!1;i=!0}return i&&o!=="_"}if(o==="o"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(!pE(e.charCodeAt(s)))return!1;i=!0}return i&&o!=="_"}}if(o==="_")return!1;for(;s<n;s++)if(o=e[s],o!=="_"){if(!dE(e.charCodeAt(s)))return!1;i=!0}return!(!i||o==="_")}function mE(e){var n=e,s=1,i;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),i=n[0],(i==="-"||i==="+")&&(i==="-"&&(s=-1),n=n.slice(1),i=n[0]),n==="0")return 0;if(i==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function hE(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Sr.isNegativeZero(e)}var _E=new ln("tag:yaml.org,2002:int",{kind:"scalar",resolve:fE,construct:mE,predicate:hE,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),gE=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vE(e){return!(e===null||!gE.test(e)||e[e.length-1]==="_")}function kE(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var bE=/^[-+]?[0-9]+e/;function yE(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Sr.isNegativeZero(e))return"-0.0";return s=e.toString(10),bE.test(s)?s.replace("e",".e"):s}function wE(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Sr.isNegativeZero(e))}var IE=new ln("tag:yaml.org,2002:float",{kind:"scalar",resolve:vE,construct:kE,predicate:wE,represent:yE,defaultStyle:"lowercase"}),xE=nE.extend({implicit:[oE,cE,_E,IE]}),EE=xE,Bf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Wf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function $E(e){return e===null?!1:Bf.exec(e)!==null||Wf.exec(e)!==null}function CE(e){var n,s,i,o,l,r,c,u=0,p=null,d,f,m;if(n=Bf.exec(e),n===null&&(n=Wf.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],i=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(s,i,o));if(l=+n[4],r=+n[5],c=+n[6],n[7]){for(u=n[7].slice(0,3);u.length<3;)u+="0";u=+u}return n[9]&&(d=+n[10],f=+(n[11]||0),p=(d*60+f)*6e4,n[9]==="-"&&(p=-p)),m=new Date(Date.UTC(s,i,o,l,r,c,u)),p&&m.setTime(m.getTime()-p),m}function OE(e){return e.toISOString()}var SE=new ln("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:$E,construct:CE,instanceOf:Date,represent:OE});function ME(e){return e==="<<"||e===null}var FE=new ln("tag:yaml.org,2002:merge",{kind:"scalar",resolve:ME}),Mr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function TE(e){if(e===null)return!1;var n,s,i=0,o=e.length,l=Mr;for(s=0;s<o;s++)if(n=l.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;i+=6}return i%8===0}function LE(e){var n,s,i=e.replace(/[\r\n=]/g,""),o=i.length,l=Mr,r=0,c=[];for(n=0;n<o;n++)n%4===0&&n&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(i.charAt(n));return s=o%4*6,s===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):s===18?(c.push(r>>10&255),c.push(r>>2&255)):s===12&&c.push(r>>4&255),new Uint8Array(c)}function zE(e){var n="",s=0,i,o,l=e.length,r=Mr;for(i=0;i<l;i++)i%3===0&&i&&(n+=r[s>>18&63],n+=r[s>>12&63],n+=r[s>>6&63],n+=r[s&63]),s=(s<<8)+e[i];return o=l%3,o===0?(n+=r[s>>18&63],n+=r[s>>12&63],n+=r[s>>6&63],n+=r[s&63]):o===2?(n+=r[s>>10&63],n+=r[s>>4&63],n+=r[s<<2&63],n+=r[64]):o===1&&(n+=r[s>>2&63],n+=r[s<<4&63],n+=r[64],n+=r[64]),n}function AE(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var PE=new ln("tag:yaml.org,2002:binary",{kind:"scalar",resolve:TE,construct:LE,predicate:AE,represent:zE}),RE=Object.prototype.hasOwnProperty,NE=Object.prototype.toString;function jE(e){if(e===null)return!0;var n=[],s,i,o,l,r,c=e;for(s=0,i=c.length;s<i;s+=1){if(o=c[s],r=!1,NE.call(o)!=="[object Object]")return!1;for(l in o)if(RE.call(o,l))if(!r)r=!0;else return!1;if(!r)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function DE(e){return e!==null?e:[]}var HE=new ln("tag:yaml.org,2002:omap",{kind:"sequence",resolve:jE,construct:DE}),UE=Object.prototype.toString;function VE(e){if(e===null)return!0;var n,s,i,o,l,r=e;for(l=new Array(r.length),n=0,s=r.length;n<s;n+=1){if(i=r[n],UE.call(i)!=="[object Object]"||(o=Object.keys(i),o.length!==1))return!1;l[n]=[o[0],i[o[0]]]}return!0}function BE(e){if(e===null)return[];var n,s,i,o,l,r=e;for(l=new Array(r.length),n=0,s=r.length;n<s;n+=1)i=r[n],o=Object.keys(i),l[n]=[o[0],i[o[0]]];return l}var WE=new ln("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:VE,construct:BE}),KE=Object.prototype.hasOwnProperty;function qE(e){if(e===null)return!0;var n,s=e;for(n in s)if(KE.call(s,n)&&s[n]!==null)return!1;return!0}function YE(e){return e!==null?e:{}}var GE=new ln("tag:yaml.org,2002:set",{kind:"mapping",resolve:qE,construct:YE});EE.extend({implicit:[SE,FE],explicit:[PE,HE,WE,GE]});function zu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var QE=new Array(256),ZE=new Array(256);for(var $s=0;$s<256;$s++)QE[$s]=zu($s)?1:0,ZE[$s]=zu($s);function XE(e){return Array.from(new Set(e))}function Au(...e){let n,s,i;e.length===1?(n=0,i=1,[s]=e):[n,s,i=1]=e;const o=[];let l=n;for(;l<s;)o.push(l),l+=i||1;return o}function Kf(e,n){if(!n||n==="all"||n==="*")return Au(1,e+1);const s=[];for(const i of n.split(/[,;]/g))if(!i.includes("-"))s.push(+i);else{const[o,l]=i.split("-",2);s.push(...Au(+o,l?+l+1:e+1))}return XE(s).filter(i=>i<=e).sort((i,o)=>i-o)}function qf(e){const n=L(()=>e.value.path),s=L(()=>Ge.length-1),i=L(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),o=L(()=>pa(i.value)),l=L(()=>Ge.find(m=>m.path===`${i.value}`)),r=L(()=>{var m,h,_;return(_=(h=(m=l.value)==null?void 0:m.meta)==null?void 0:h.slide)==null?void 0:_.id}),c=L(()=>{var m,h;return((h=(m=l.value)==null?void 0:m.meta)==null?void 0:h.layout)||(i.value===1?"cover":"default")}),u=L(()=>Ge.find(m=>m.path===`${Math.min(Ge.length,i.value+1)}`)),p=L(()=>Ge.filter(m=>{var h,_;return(_=(h=m.meta)==null?void 0:h.slide)==null?void 0:_.title}).reduce((m,h)=>(Fr(m,h),m),[])),d=L(()=>Tr(p.value,l.value)),f=L(()=>Lr(d.value));return{route:e,path:n,total:s,currentPage:i,currentPath:o,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:f,downloadPDF:Rl,next:zt,nextSlide:Ti,openInEditor:tL,prev:At,prevSlide:Li}}function Yf(e,n,s){const i=G(0);on(()=>{yn.afterEach(async()=>{await on(),i.value+=1})});const o=L(()=>{var u,p;return i.value,((p=(u=n.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=L(()=>{var u,p;return+(((p=(u=n.value)==null?void 0:u.meta)==null?void 0:p.clicks)??o.value.length)}),r=L(()=>s.value<Ge.length-1||e.value<l.value),c=L(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:l,hasNext:r,hasPrev:c}}const JE=["id"],e2=Ae({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,i=Jn(s,"clicksElements",n),o=L(()=>({height:`${kr}px`,width:`${Ft}px`})),l=it();Tt(()=>Promise.resolve().then(()=>ky),void 0).then(p=>l.value=p.default);const r=L(()=>s.clicks),c=Yf(r,s.nav.currentRoute,s.nav.currentPage),u=L(()=>`${s.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return $n(N,Be({nav:{...s.nav,...c},configs:Me,themeConfigs:L(()=>Me.themeConfig)})),(p,d)=>{var f;return x(),ie("div",{id:u.value,class:"print-slide-container",style:nn(o.value)},[H(S(Df)),H(S(Cr),{is:(f=p.route)==null?void 0:f.component,"clicks-elements":S(i),"onUpdate:clicksElements":d[0]||(d[0]=m=>Fe(i)?i.value=m:null),clicks:r.value,"clicks-disabled":!1,class:We(S($r)(p.route)),route:p.route},null,8,["is","clicks-elements","clicks","class","route"]),l.value?(x(),P(S(l),{key:0,page:+p.route.path},null,8,["page"])):we("v-if",!0),H(S(jf))],12,JE)}}}),Pu=j(e2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),n2=Ae({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var l;const n=e;z(N);const s=G(((l=n.route.meta)==null?void 0:l.__clicksElements)||[]),i=L(()=>n.route),o=qf(i);return(r,c)=>(x(),ie(Te,null,[H(Pu,{"clicks-elements":s.value,"onUpdate:clicksElements":c[0]||(c[0]=u=>s.value=u),clicks:0,nav:S(o),route:i.value},null,8,["clicks-elements","nav","route"]),S(hi)?we("v-if",!0):(x(!0),ie(Te,{key:0},Ns(s.value.length,u=>(x(),P(Pu,{key:u,clicks:u,nav:S(o),route:i.value},null,8,["clicks","nav","route"]))),128))],64))}}),t2=j(n2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),s2={id:"print-content"},i2=Ae({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const n=e;z(N);const s=L(()=>n.width),i=L(()=>n.width/Mt),o=L(()=>s.value/i.value),l=L(()=>o.value<Mt?s.value/Ft:i.value*Mt/Ft);let r=Ge.slice(0,-1);Nn.value.query.range&&(r=Kf(r.length,Nn.value.query.range).map(p=>r[p-1]));const c=L(()=>({"select-none":!Me.selectable,"slidev-code-line-numbers":Me.lineNumbers}));return $n(Dd,l),(u,p)=>(x(),ie("div",{id:"print-container",class:We(c.value)},[t("div",s2,[(x(!0),ie(Te,null,Ns(S(r),d=>(x(),P(t2,{key:d.path,route:d},null,8,["route"]))),128))]),ot(u.$slots,"controls")],2))}});const o2=j(i2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),a2=Ae({__name:"Print",setup(e){return z(N),ks(()=>{Ps?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(x(),ie(Te,null,[S(Ps)?(x(),P(Hf,{key:0})):we("v-if",!0),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:nn(S(br))},[H(o2,{class:"w-full h-full",style:nn({background:"var(--slidev-slide-container-background, black)"}),width:S(ms).width.value},null,8,["style","width"])],4)],64))}});const l2=j(a2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const r2={class:"slidev-layout end"},c2={__name:"end",setup(e){return z(N),(n,s)=>(x(),ie("div",r2,[ot(n.$slots,"default",{},()=>[a("END")],!0)]))}},u2=j(c2,[["__scopeId","data-v-e532b98d"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function Ru(e){return e.startsWith("/")?"/3/files/"+e.slice(1):e}function p2(e,n=!1){const s=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),i={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${Ru(e)})`:`url("${Ru(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return i.background||delete i.background,i}const d2={class:"my-auto w-full"},f2=Ae({__name:"cover",props:{background:{default:""}},setup(e){const n=e;z(N);const s=L(()=>p2(n.background,!0));return(i,o)=>(x(),ie("div",{class:"slidev-layout cover",style:nn(s.value)},[t("div",d2,[ot(i.$slots,"default")])],4))}}),m2=j(f2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),h2=t("h1",null,"I File",-1),_2=t("p",null,"I/O e gestione dei File",-1),g2={class:"pt-12"},v2={class:"px-2 py-1"},k2={__name:"1",setup(e){const n={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"INFORMATICA",as:"2022/2023",version:"1.1.0"};return z(N),(s,i)=>{const o=Nf;return x(),P(m2,Q(q(n)),{default:O(()=>[we(` http://www.primeeng.it/downloads/materiale%202013/12%20Linguaggio%20C%20-%20Gestione%20di%20file.pdf
https://www.unife.it/scienze/informatica/insegnamenti/programmazione-e-laboratorio/materiale-didattico-anni-precedenti/materiale-didattico-a-a-2016-17/diapositive/120-file-di-testo
https://lia.disi.unibo.it/Courses/FondT-0910-ELT/materiale/10.file.pdf
https://www.freecodecamp.org/italian/news/gestione-dei-file-in-c-come-aprire-chiudere-e-scrivere-su-file/
http://www.diit.unict.it/users/mpalesi/COURSES/LDI_02-03/DISPENSE/files.pdf `),h2,_2,t("div",g2,[t("span",v2,[a(" Premi spazio o "),H(o,{class:"inline"}),a(" per la prossima slide ")])])]),_:1},16)}}},b2=j(k2,[["__file","/@slidev/slides/1.md"]]),y2={class:"slidev-layout default"},w2={__name:"default",setup(e){return z(N),(n,s)=>(x(),ie("div",y2,[ot(n.$slots,"default")]))}},Z=j(w2,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),I2=t("h1",null,"I File",-1),x2=t("p",null,"Introduzione",-1),E2=t("ul",null,[t("li",null,"Ogni programma in C che abbiamo scritto fino ad ora manipola dati e strutture dati presenti solamente nella memoria RAM"),t("li",null,[a("Ciò significa che i dati manipolati dal nostro programma non sono persistenti, cioò sono "),t("em",null,"volatili")]),t("li",null,"In altre parole ogni esecuzione di un programma in C NON ha acesso ai dati generati dall’esecuzioni precedenti"),t("li",null,"Quindi i dati generati e gestiti dal programma sono disponibili solo durante l’esecuzione a runtime dello stesso"),t("li",null,"Una volta che il programma termina tutto il contenuto della RAM del processo viene rilasciato e non più disponibile (in Linux le pagine allocate al processo sono cancellate)"),t("li",null,"Anche in caso in cui manchi l’alimentazione al computer tutti i dati del programma in esecuzione vengono irremediabilmente persi")],-1),$2={__name:"2",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[I2,x2,E2]),_:1},16))}},C2=j($2,[["__file","/@slidev/slides/2.md"]]),O2="/3/files/assets/files_01-44d473b6.png",S2=t("h1",null,"I File",-1),M2=t("p",null,"Introduzione",-1),F2=t("ul",null,[t("li",null,[a("Per poter mantenere disponibili i dati tra le diverse esecuzioni di un programma è necessario rendere i dati stessi "),t("strong",null,"persistenti")]),t("li",null,[a("Il modo più facile per rendere i dati di un programma persistenti è l’archiviazione su memoria di massa "),t("ul",null,[t("li",null,"HDD"),t("li",null,"SSD"),t("li",null,"SD card"),t("li",null,"flashcard"),t("li",null,"…")])])],-1),T2=t("img",{src:O2,width:"550",style:{position:"relative",top:"-8rem",left:"15rem"}},null,-1),L2={__name:"3",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[S2,M2,F2,T2]),_:1},16))}},z2=j(L2,[["__file","/@slidev/slides/3.md"]]),A2="/3/files/assets/files_02-0e512623.png",P2="/3/files/assets/files_03-8cbafb48.png",R2=t("h1",null,"I File",-1),N2=t("p",null,"Introduzione",-1),j2=t("img",{src:A2,width:"300",style:{position:"relative",top:"3rem",left:"35rem"}},null,-1),D2=t("img",{src:P2,width:"500",style:{position:"relative",top:"-12rem",left:"0rem"}},null,-1),H2={__name:"4",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[R2,N2,j2,D2]),_:1},16))}},U2=j(H2,[["__file","/@slidev/slides/4.md"]]),V2="/3/files/assets/files_04-c1fc8969.png",B2=t("h1",null,"I File",-1),W2=t("p",null,"Introduzione",-1),K2=t("div",{style:{width:"60%"}},[t("ul",null,[t("li",null,[a("Al fine di poter archiviare dei dati sulla memoria di massa, il sistema operativo mette a disposizione il concetto di "),t("strong",null,"file")]),t("li",null,"Un file è una astrazione fornita dal sistema operativo, il cui scopo è consentire la memorizzazione di informazioni su memoria di massa."),t("li",null,[a("Il file è "),t("strong",null,"l’unita logica di memorizzazione"),a(" dei dati su memoria di massa, che consente una memorizzazione persistente dei dati, non limitata dalle dimensioni della memoria centrale.")]),t("li",null,[a("Un file si può anche considerare come "),t("strong",null,"un insieme di record correlati tra loro"),a(" (ossia un insieme di informazioni strutturate e organizzate in un archivio)")])])],-1),q2=t("img",{src:V2,width:"350",style:{position:"relative",top:"-15rem",left:"33rem"}},null,-1),Y2={__name:"5",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[B2,W2,K2,q2]),_:1},16))}},G2=j(Y2,[["__file","/@slidev/slides/5.md"]]),Q2="/3/files/assets/files_05-5f99b7f1.png",Z2="/3/files/assets/files_06-b6ade4ca.png",X2=t("h1",null,"I File",-1),J2=t("p",null,"Introduzione",-1),e$=t("ul",null,[t("li",null,[a("I file vengono distinti in due categorie: "),t("ul",null,[t("li",null,[t("p",null,[t("code",null,"file di testo"),a(": trattati come sequenze di caratteri e organizzati in linee (ciascuna terminata da '\\n')")])]),t("li",null,[t("p",null,[t("code",null,"file binari"),a(": visti come sequenze di byte")])])])])],-1),n$=t("img",{src:Q2,width:"400",style:{position:"relative",top:"1rem",left:"-2rem"}},null,-1),t$=t("img",{src:Z2,width:"500",style:{position:"relative",top:"-12rem",left:"25rem"}},null,-1),s$={__name:"6",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[X2,J2,e$,n$,t$]),_:1},16))}},i$=j(s$,[["__file","/@slidev/slides/6.md"]]),o$="/3/files/assets/files_07-8ea906e2.png",a$=t("h1",null,"I File",-1),l$=t("p",null,"Introduzione",-1),r$=t("ul",null,[t("li",null,[a("I "),t("strong",null,"file di testo"),a(" sono file di caratteri, organizzati in linee")]),t("li",null,"Ogni linea e` terminata da una marca di fine linea (newline, carattere '\\n')"),t("li",null,[t("code",null,"Il record logico può essere il singolo carattere, la parola, oppure la linea")])],-1),c$=t("img",{src:o$,width:"650",style:{position:"relative",top:"2rem",left:"7rem"}},null,-1),u$={__name:"7",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[a$,l$,r$,c$]),_:1},16))}},p$=j(u$,[["__file","/@slidev/slides/7.md"]]),d$="/3/files/assets/files_08-704eeb82.png",f$=t("h1",null,"I File",-1),m$=t("p",null,"Introduzione",-1),h$=t("ul",null,[t("li",null,[a("I "),t("strong",null,"file di binari"),a(" sono file di byte con un organizzazione puramente sequenziale")]),t("li",null,"Non c’è una suddivisione in linee e pertanto non c’è un terminatore di linea (\\n)"),t("li",null,[t("code",null,"Il record logico è il singolo byte")])],-1),_$=t("img",{src:d$,width:"600",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),g$={__name:"8",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[f$,m$,h$,_$]),_:1},16))}},v$=j(g$,[["__file","/@slidev/slides/8.md"]]),k$="/3/files/assets/files_10-3ef5f1ea.png",b$=t("h1",null,"I File",-1),y$=t("p",null,"Introduzione",-1),w$=t("ul",null,[t("li",null,[a("In genere i file hanno una struttura sequenziale, cioè: "),t("ul",null,[t("li",null,"i record logici sono organizzati in una sequenza rigidamente ordinata"),t("li",null,'per accedere ad un particolare record logico, è necessario "scorrere" tutti quelli che lo precedono')])])],-1),I$=t("img",{src:k$,width:"550",style:{position:"relative",top:"3rem",left:"10rem"}},null,-1),x$={__name:"9",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[b$,y$,w$,I$]),_:1},16))}},E$=j(x$,[["__file","/@slidev/slides/9.md"]]),$$="/3/files/assets/files_09-dfac64b4.png",C$=t("h1",null,"I File",-1),O$=t("p",null,"Introduzione",-1),S$=t("ul",null,[t("li",null,[a("Genralmente è possibile accedere ad un file in due modi diversi: "),t("ul",null,[t("li",null,[t("strong",null,"Accesso Sequenziale"),a(": si accede ai record del file partendo dal primo e scandendo in modo ordinato ogni record. In altre parole per accedere al record N, è ncessario aver prima letto tutti gli N-1 record precedenti")])])])],-1),M$=t("img",{src:$$,width:"650",style:{position:"relative",top:"1rem",left:"7rem"}},null,-1),F$={__name:"10",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[C$,O$,S$,M$]),_:1},16))}},T$=j(F$,[["__file","/@slidev/slides/10.md"]]),L$="/3/files/assets/files_09a-f41b1d1e.png",z$=t("h1",null,"I File",-1),A$=t("p",null,"Introduzione",-1),P$=t("ul",null,[t("li",null,[a("Genralmente è possibile accedere ad un file in due modi diversi: "),t("ul",null,[t("li",null,[t("strong",null,"Accesso Casuale o Diretto"),a(": nel caso di record aventi tutti la stessa lunghezza, è possibile leggere un record alla posizione N indipendentemente dal record letto precedentemente. In altre parole per accedere al record N "),t("strong",null,"NON"),a(" è necessario dover leggere tutti quelli precedenti")])])])],-1),R$=t("img",{src:L$,width:"650",style:{position:"relative",top:"1rem",left:"7rem"}},null,-1),N$={__name:"11",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[z$,A$,P$,R$]),_:1},16))}},j$=j(N$,[["__file","/@slidev/slides/11.md"]]),D$=t("h1",null,"I File",-1),H$=t("p",null,"I file in C",-1),U$=t("ul",null,[t("li",null,"Come abbiamo già visto, il linguaggio C non mette a disposizione nessuna istruzione di Input/Output"),t("li",null,"Le operazioni di I/O (printf e scanf) sono definite e fornite dalla libreria standard stdio.h"),t("li",null,"Questa libreria, in modo analogo alle funzioni di I/O per il terminale, mette a disposizione le funzioni per la lettura/scrittura dei file sul disco in modo indipendente dalle caratteristiche proprie dei dispositivi fisici"),t("li",null,"Infatti useremo le stesse funzioni di libreria sia per scrivere su un disco HDD che su uno SSD anche se profondamente diversi a livello fisico"),t("li",null,"Ciò è possibile poichè il sistema di I/O del C è caratterizzato da un’interfaccia indipendente dal dispositivo effettivo che si interpone tra il programmatore e il dispositivo stesso")],-1),V$={__name:"12",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[D$,H$,U$]),_:1},16))}},B$=j(V$,[["__file","/@slidev/slides/12.md"]]),W$=t("h1",null,"I File",-1),K$=t("p",null,"I file in C",-1),q$=t("ul",null,[t("li",null,[a("La libreria standard del C mette a disposizioni specifiche funzioni per effettuare le principali attività sui file: "),t("ul",null,[t("li",null,[t("strong",null,"Apertura di un file"),a(": Prima di poter accedere ad un file è necessario aprirlo, cioè è necessario creare un collegamento logico, che permette di accedere ai record del file presente su disco")]),t("li",null,[t("strong",null,"Chiusura di un file"),a(": rilascia le risorse allocate e chiude il collegamento logico precedentemente creato")]),t("li",null,[t("strong",null,"Lettura da file"),a(": permette di leggere i record presenti nel file e di trasferirli nella memoria centrale")]),t("li",null,[t("strong",null,"Scrittura su file"),a(": permette di scrivere i recorc su un file trasferendoli dalla memoria centrale a quella di massa")]),t("li",null,[t("strong",null,"Posizionamento in un file"),a(": permette di accedere in modo diretto ai record di un file")])])])],-1),Y$={__name:"13",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[W$,K$,q$]),_:1},16))}},G$=j(Y$,[["__file","/@slidev/slides/13.md"]]),Q$={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Z$=t("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),X$=[Z$];function J$(e,n){return x(),ie("svg",Q$,X$)}const e3={name:"ph-clipboard",render:J$},n3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},t3=t("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),s3=[t3];function i3(e,n){return x(),ie("svg",n3,s3)}const o3={name:"ph-check-circle",render:i3},a3=["title"],l3=Ae({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;z(N);const s=z(ui),i=z(es),o=z(pi);function l(f=5){const m=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_=h.length;for(let b=0;b<f;b++)m.push(h.charAt(Math.floor(Math.random()*_)));return m.join("")}const r=G(),c=Mn();Ht(()=>{const f=n.at==null?i==null?void 0:i.value.length:n.at,m=L(()=>o!=null&&o.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),h=L(()=>n.ranges[m.value]||"");if(n.ranges.length>=2&&!(o!=null&&o.value)){const _=l(),b=cv(n.ranges.length-1).map(y=>_+y);i!=null&&i.value&&(i.value.push(...b),aa(()=>b.forEach(y=>hl(i.value,y)),c))}ks(()=>{if(!r.value)return;const b=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const y of b){const w=Array.from(y.querySelectorAll(".line")),I=Kf(w.length,h.value);if(w.forEach((v,C)=>{const E=I.includes(C+1);v.classList.toggle(Qt,!0),v.classList.toggle("highlighted",E),v.classList.toggle("dishonored",!E)}),n.maxHeight){const v=Array.from(y.querySelectorAll(".line.highlighted"));v.reduce((E,M)=>M.offsetHeight+E,0)>r.value.offsetHeight?v[0].scrollIntoView({behavior:"smooth",block:"start"}):v.length>0&&v[Math.round((v.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=c1();function d(){var m,h;const f=(h=(m=r.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&p(f)}return(f,m)=>{const h=o3,_=e3;return x(),ie("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:nn({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[ot(f.$slots,"default"),S(Me).codeCopy?(x(),ie("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:S(u)?"Copied":"Copy",onClick:m[0]||(m[0]=b=>d())},[S(u)?(x(),P(h,{key:0,class:"p-2 w-8 h-8"})):(x(),P(_,{key:1,class:"p-2 w-8 h-8"}))],8,a3)):we("v-if",!0)],4)}}}),he=j(l3,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),r3=t("h1",null,"I File",-1),c3=t("p",null,"I file in C",-1),u3=t("ul",null,[t("li",null,[a("In C un file è identificato da un "),t("code",null,"puntatore a file"),a(" che punta ad una struttura datri contenente tutte le informazioni necessarie ad integragire ocn il file stesso")]),t("li",null,[a("In altre parole, il "),t("strong",null,"puntatore a file"),a(" è il collegamento logico che viene creato in fase di "),t("em",null,"apertura del file")])],-1),p3=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"struct"),a(),t("span",{class:"token class-name"},"_IO_FILE"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token keyword"},"int"),a(" _flags"),t("span",{class:"token punctuation"},";"),a("           "),t("span",{class:"token comment"},"/* High-order word is _IO_MAGIC; rest is flags. */")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token keyword"},"char"),a(),t("span",{class:"token operator"},"*"),a("_IO_read_ptr"),t("span",{class:"token punctuation"},";"),a("   "),t("span",{class:"token comment"},"/* Current read pointer */")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token keyword"},"char"),a(),t("span",{class:"token operator"},"*"),a("_IO_read_end"),t("span",{class:"token punctuation"},";"),a("   "),t("span",{class:"token comment"},"/* End of get area. */")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token keyword"},"char"),a(),t("span",{class:"token operator"},"*"),a("_IO_read_base"),t("span",{class:"token punctuation"},";"),a("  "),t("span",{class:"token comment"},"/* Start of putback+get area. */")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token keyword"},"char"),a(),t("span",{class:"token operator"},"*"),a("_IO_write_base"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"/* Start of put area. */")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token keyword"},"char"),a(),t("span",{class:"token operator"},"*"),a("_IO_write_ptr"),t("span",{class:"token punctuation"},";"),a("  "),t("span",{class:"token comment"},"/* Current put pointer. */")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token keyword"},"int"),a(" _fileno"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("  "),t("span",{class:"token keyword"},"int"),a(" _mode"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"typedef"),a(),t("span",{class:"token keyword"},"struct"),a(),t("span",{class:"token class-name"},"_IO_FILE"),a(" FILE"),t("span",{class:"token punctuation"},";")])])],-1),d3={__name:"14",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[r3,c3,u3,H(o,ue({},{ranges:[""]}),{default:O(()=>[p3]),_:1},16)]),_:1},16)}}},f3=j(d3,[["__file","/@slidev/slides/14.md"]]),m3=t("h1",null,"I File",-1),h3=t("p",null,"I file in C",-1),_3=t("ul",null,[t("li",null,"Il puntatore a file è una variabile che viene utilizzata per indirizzare un file durante le operazioni di accesso (lettura e scrittura.)"),t("li",null,[a("Esso contiene, tra l’altro: "),t("ul",null,[t("li",null,"il file"),t("li",null,"l’elemento corrente all’interno della sequenza")])]),t("li",null,"Il puntatore viene dichiarato nel seguente modo")],-1),g3=t("br",null,null,-1),v3=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")])])],-1),k3=t("br",null,null,-1),b3=t("ul",null,[t("li",null,"Questo puntatore è utilizzato da tutte le funzione che leggomno e scrivono sul file"),t("li",null,"E’ importante, alla fine delle operazioni sul file, chiudere e quindi rilasciare il puntatore al file"),t("li",null,"Ciò è necessario per rilasciare, in modo corretto, le risorse allocate (memoria, …) durante l’apertura del file")],-1),y3={__name:"15",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[m3,h3,_3,g3,H(o,ue({},{ranges:[""]}),{default:O(()=>[v3]),_:1},16),k3,b3]),_:1},16)}}},w3=j(y3,[["__file","/@slidev/slides/15.md"]]),I3=t("h1",null,"I File",-1),x3=t("p",null,"I file in C",-1),E3=t("p",null,"Le principali funzioni per gestire i file in C sono:",-1),$3=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,[t("strong",null,"Funzione")]),t("th",null,[t("strong",null,"Descrizione")])])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"fopen")]),t("td",null,"apre un file dato il suo nome e restituisce un puntatore ad esso")]),t("tr",null,[t("td",null,[t("code",null,"flcose")]),t("td",null,"chiude un file, scrivendo su disco eventuali dati in cache e restituisce le risorse allocate")]),t("tr",null,[t("td",null,[t("code",null,"fprintf")]),t("td",null,"scrive un output su un file. Dal nome è chiaro che si comporta esattamente come printf, ma anzichè scrivere su terminale scrive su file")]),t("tr",null,[t("td",null,[t("code",null,"fscanf")]),t("td",null,"esattamente come scanf, permette di leggere un input formattato da file")]),t("tr",null,[t("td",null,[t("code",null,"fread")]),t("td",null,"legge uno o più record da un file")]),t("tr",null,[t("td",null,[t("code",null,"fwrite")]),t("td",null,"scrive uno o più record su file")]),t("tr",null,[t("td",null,[t("code",null,"fseek")]),t("td",null,"cambia la posizione attuale all’interno del file permettendo l’accesso casuale al file stesso")])])],-1),C3=t("ul",null,[t("li",null,[a("Il manuale di ogni funzione è disponibile digitando "),t("code",null,"man <nome funzione>")])],-1),O3={__name:"16",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[I3,x3,E3,$3,C3]),_:1},16))}},S3=j(O3,[["__file","/@slidev/slides/16.md"]]),M3=t("h1",null,"I File",-1),F3=t("p",null,"Apertura di un file con fopen",-1),T3=t("p",null,[t("code",null,"FILE *fopen(const char *pathname, const char *mode);")],-1),L3=t("ul",null,[t("li",null,[a("Apre un file di nome "),t("em",null,"pathname"),a(" in modalità "),t("em",null,"mode")])],-1),z3=t("p",null,"dove:",-1),A3=t("ul",null,[t("li",null,[t("strong",null,"pathname"),a(": percorco relativo o assoluto del file. Include il nome del file")]),t("li",null,[t("strong",null,"mode"),a(": modalità di apertura del file secondo la seguente tabella (vedi prossima slide)")])],-1),P3=t("p",null,"restituisce:",-1),R3=t("ul",null,[t("li",null,[t("strong",null,"NULL"),a(": in caso di errore di apertura del file (es: file non esistente)")]),t("li",null,[t("strong",null,"FILE *"),a(": puntatore al file appena aperto")])],-1),N3={__name:"17",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[M3,F3,T3,L3,z3,A3,P3,R3]),_:1},16))}},j3=j(N3,[["__file","/@slidev/slides/17.md"]]),D3=t("h1",null,"I File",-1),H3=t("p",null,"Apertura di un file con fopen",-1),U3=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,[t("strong",null,"mode")]),t("th",null,[t("strong",null,"Descrizione")]),t("th",null,[t("strong",null,"Note")])])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"r")]),t("td",null,"apre il file in sola lettura"),t("td",null,"Il puntatore è posizionato all’inizio del file")]),t("tr",null,[t("td",null,[t("code",null,"r+")]),t("td",null,"apre il file in lettura e scrittura"),t("td",null,"Il puntatore è posizionato all’inizio del file")]),t("tr",null,[t("td",null,[t("code",null,"w")]),t("td",null,"crea o sovrascrive un file in scrittura"),t("td",null,"Il puntatore è posizionato all’inizio del file")]),t("tr",null,[t("td",null,[t("code",null,"w+")]),t("td",null,"crea o sovrascrive un file in scrittura e lettura"),t("td",null,"Il puntatore è posizionato all’inizio del file")]),t("tr",null,[t("td",null,[t("code",null,"a")]),t("td",null,"apre il file in scrittura se esiste o lo crera in caso contrario"),t("td",null,"Il puntatore è posizionato alla file del file")]),t("tr",null,[t("td",null,[t("code",null,"a+")]),t("td",null,"apre il file in scrittura e lettura se esiste o lo crera in caso contrario"),t("td",null,"Il puntatore è posizionato alla file del file")])])],-1),V3={__name:"18",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[D3,H3,U3]),_:1},16))}},B3=j(V3,[["__file","/@slidev/slides/18.md"]]),Gf="/3/files/assets/files_11-4143c2a2.png",W3=t("h1",null,"I File",-1),K3=t("p",null,"I file in C",-1),q3=t("p",null,[a("mode: "),t("strong",null,"r"),a(" e "),t("strong",null,"r+")],-1),Y3=t("ul",null,[t("li",null,"se il file è esistente"),t("li",null,"apre il file e posiziona il puntatore all’inizio del file (primo record)")],-1),G3=t("img",{src:Gf,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),Q3={__name:"19",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[W3,K3,q3,Y3,G3]),_:1},16))}},Z3=j(Q3,[["__file","/@slidev/slides/19.md"]]),X3="/3/files/assets/files_12-7dd1b4b3.png",J3=t("h1",null,"I File",-1),eC=t("p",null,"I file in C",-1),nC=t("p",null,[a("mode: "),t("strong",null,"w"),a(" e "),t("strong",null,"w+")],-1),tC=t("ul",null,[t("li",null,"se il file è esistente"),t("li",null,"apre il file in scrittura e posiziona il puntatore all’inizio del file (primo record)"),t("li",null,"cancella il contenuto del file esistente e viene riscritto")],-1),sC=t("img",{src:X3,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),iC={__name:"20",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[J3,eC,nC,tC,sC]),_:1},16))}},oC=j(iC,[["__file","/@slidev/slides/20.md"]]),aC="/3/files/assets/files_13-937f55d6.png",lC=t("h1",null,"I File",-1),rC=t("p",null,"I file in C",-1),cC=t("p",null,[a("mode: "),t("strong",null,"a"),a(" e "),t("strong",null,"a+")],-1),uC=t("ul",null,[t("li",null,"apr eil file e posiziona il puntatore alla fine del file (ultimo record)"),t("li",null,[a("se il file è esistente il suo contenuto non viene perso e i nuovi dati sono aggiunti in coda ("),t("strong",null,"append"),a(")")])],-1),pC=t("img",{src:aC,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),dC={__name:"21",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[lC,rC,cC,uC,pC]),_:1},16))}},fC=j(dC,[["__file","/@slidev/slides/21.md"]]),mC=t("h1",null,"I File",-1),hC=t("p",null,"Apertura di un file con fopen",-1),_C=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")]),a(`
`),t("span",{class:"line"},[a("FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"//dichiara il puntatore a file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"/home/antonio/test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"r"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"//apre il file in modalità sola lettura")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token comment"},"//se il puntatore è NULL non è stato possibile aprire il file")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},`"Errore nell'apertura del file\\n"`),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"//stampa un messaggio di errore sulla console")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"//esce dal programma")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")])])],-1),gC=t("p",null,"oppure in maniera più concisa",-1),vC=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[a("FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"//dichiara il puntatore a file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"/home/antonio/test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"r"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token comment"},"//se il puntatore è NULL non è stato possibile aprire il file")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},`"Errore nell'apertura del file\\n"`),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"//stampa un messaggio di errore sulla console")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"//esce dal programma")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),kC={__name:"22",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[mC,hC,H(o,ue({},{ranges:[""]}),{default:O(()=>[_C]),_:1},16),gC,H(o,ue({},{ranges:[""]}),{default:O(()=>[vC]),_:1},16)]),_:1},16)}}},bC=j(kC,[["__file","/@slidev/slides/22.md"]]),yC=t("h1",null,"I File",-1),wC=t("p",null,"I file in C",-1),IC=t("ul",null,[t("li",null,"eseguendo questo programma otteniamo")],-1),xC=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file            ")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# Impossibile aprire il file")])])],-1),EC=t("br",null,null,-1),$C=t("ul",null,[t("li",null,"Questo messaggio ci dice che non è stato possibile aprire il file"),t("li",null,"Tuttavia non ci fornisce nessuna informazione sul motivo"),t("li",null,"La libreria C mette a disposizione un metodo molto facile per conoscere la motivazione del falliemento")],-1),CC={__name:"23",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[yC,wC,IC,H(o,ue({},{ranges:[""]}),{default:O(()=>[xC]),_:1},16),EC,$C]),_:1},16)}}},OC=j(CC,[["__file","/@slidev/slides/23.md"]]),SC=t("h1",null,"I File",-1),MC=t("p",null,"errno e gli errori in C",-1),FC=t("ul",null,[t("li",null,"Spesso, se non sempre, è utile sapere se una chiamata a funzione è andata a buon fine oppure no"),t("li",null,"Ma ancor più importante, in caso di fallimento, è sapere il motivo per cui la chiamata non è andata a buon fine"),t("li",null,[a("La maggioranza delle funzioni di libreria C, e tutte le system call, in caso di fallimento impostano una speciale variabile chiamata "),t("code",null,"errno"),a(" con un valore che indica il motivo del fallimento")]),t("li",null,"In caso che la chiamata vada a buon fine, il valore di errno non è da considerarsi valido"),t("li",null,[a("Pertanto esaminando il valore di "),t("strong",null,"errno"),a(" un programma può capire il motivo del fallimento dell’ultima chiamata")])],-1),TC={__name:"24",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[SC,MC,FC]),_:1},16))}},LC=j(TC,[["__file","/@slidev/slides/24.md"]]),zC=t("h1",null,"I File",-1),AC=t("p",null,"errno e gli errori in C",-1),PC=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<errno.h>")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"r"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file: %d\\n"'),t("span",{class:"token punctuation"},","),a(" errno"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("# "),t("span",{class:"token punctuation"},"."),t("span",{class:"token operator"},"/"),a("file            ")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),a(),t("span",{class:"token expression"},[a("Impossibile aprire il file"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token number"},"2")])])])])],-1),RC={__name:"25",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[zC,AC,H(o,ue({},{ranges:[""]}),{default:O(()=>[PC]),_:1},16)]),_:1},16)}}},NC=j(RC,[["__file","/@slidev/slides/25.md"]]),jC=t("h1",null,"I File",-1),DC=t("p",null,"errno e gli errori in C",-1),HC=t("ul",null,[t("li",null,"Quindi ora sappiamo che non è possibile aprire il file e il motivo è rappresentato dal codice 2"),t("li",null,"Ma cosa significa il codice 2?"),t("li",null,[a("Per rispondere questa domanda possiamo legger eil contenuto del file "),t("em",null,"errno.h")]),t("li",null,"Oppure più semplicemente invocare il comando errno in questo modo")],-1),UC=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# errno -l   ")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("EPERM "),t("span",{class:"token number"},"1"),a(" Operazione non permessa")]),a(`
`),t("span",{class:"line"},[a("ENOENT "),t("span",{class:"token number"},"2"),a(" File o directory non esistente")]),a(`
`),t("span",{class:"line"},[a("ESRCH "),t("span",{class:"token number"},"3"),a(" Nessun processo corrisponde")]),a(`
`),t("span",{class:"line"},[a("EINTR "),t("span",{class:"token number"},"4"),a(" Chiamata di sistema interrotta")]),a(`
`),t("span",{class:"line"},[a("EIO "),t("span",{class:"token number"},"5"),a(" Errore di input/output")]),a(`
`),t("span",{class:"line"},[a("ENXIO "),t("span",{class:"token number"},"6"),a(" Device o indirizzo non esistente")]),a(`
`),t("span",{class:"line"},[a("E2BIG "),t("span",{class:"token number"},"7"),a(" Elenco degli argomenti troppo lungo")])])],-1),VC=t("ul",null,[t("li",null,"Come si può notare il numero 2 significa che il file o la directory che stiamo provando ad aprire non è esistente")],-1),BC={__name:"26",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[jC,DC,HC,H(o,ue({},{ranges:[""]}),{default:O(()=>[UC]),_:1},16),VC]),_:1},16)}}},WC=j(BC,[["__file","/@slidev/slides/26.md"]]),KC=t("h1",null,"I File",-1),qC=t("p",null,"perror e gli errori in C",-1),YC=t("ul",null,[t("li",null,"Sarebbe utile accedere alla tabella di mapping tra codice e stringa di error all’interno del nostro codice C"),t("li",null,"La libreria C ci viene in aiuto mettendoci a disposizione la funzione")],-1),GC=t("p",null,[t("code",null,"void perror(const char *s);")],-1),QC=t("ul",null,[t("li",null,[a("Questa funzione genera un messaggio di errore, preceduto dal nostro messaggio "),t("strong",null,"s"),a(", che descrive il motivo del fallimento dell’ultima chiamata a funzione")]),t("li",null,"In questo modo possiamo dotare i nostri programmi in C di una miglior gestione degli errori e renderli maggiormente uiser friendly")],-1),ZC={__name:"27",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[KC,qC,YC,GC,QC]),_:1},16))}},XC=j(ZC,[["__file","/@slidev/slides/27.md"]]),JC=t("h1",null,"I File",-1),eO=t("p",null,"perror e gli errori in C",-1),nO=t("ul",null,[t("li",null,"Trasformiamo il programma precedente in modo che usi la funzione perror")],-1),tO=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"r"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("# "),t("span",{class:"token punctuation"},"."),t("span",{class:"token operator"},"/"),a("file")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),a(),t("span",{class:"token expression"},[a("Impossibile aprire il file"),t("span",{class:"token operator"},":"),a(" No such file or directory")])])])])],-1),sO=t("ul",null,[t("li",null,"Come si vede ora il messaggio di errore è accurato e fornisce informazioni dettagliate sul motivo del fallimento")],-1),iO={__name:"28",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[JC,eO,nO,H(o,ue({},{ranges:[""]}),{default:O(()=>[tO]),_:1},16),sO]),_:1},16)}}},oO=j(iO,[["__file","/@slidev/slides/28.md"]]),aO=t("h1",null,"I File",-1),lO=t("p",null,"Chiusura di un file con fclose",-1),rO=t("p",null,[t("code",null,"int fclose(FILE *stream)")],-1),cO=t("ul",null,[t("li",null,[a("Chiude un file puntato da "),t("em",null,"stream")])],-1),uO=t("p",null,"dove:",-1),pO=t("ul",null,[t("li",null,[t("strong",null,"stream"),a(": il puntatore a file restituito da fopen")])],-1),dO=t("p",null,"restituisce:",-1),fO=t("ul",null,[t("li",null,[t("strong",null,"0"),a(": in caso di esecuzione corretta (chiusura del file)")]),t("li",null,[t("strong",null,"EOF"),a(": in caso di fallimento. errno è settato con il codice di errore appropriato")])],-1),mO={__name:"29",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[aO,lO,rO,cO,uO,pO,dO,fO]),_:1},16))}},hO=j(mO,[["__file","/@slidev/slides/29.md"]]),_O=t("h1",null,"I File",-1),gO=t("p",null,"Chiusura di un file con fclose",-1),vO=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"r"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"//codice che interagisce con il file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fclose"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token comment"},"// se != 0 c'è un errore")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile chiudere il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},"    "),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),kO={__name:"30",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[_O,gO,H(o,ue({},{ranges:[""]}),{default:O(()=>[vO]),_:1},16)]),_:1},16)}}},bO=j(kO,[["__file","/@slidev/slides/30.md"]]),yO=t("h1",null,"I File",-1),wO=t("p",null,"Output formattato su file con fprintf",-1),IO=t("p",null,[t("code",null,"int fprintf(FILE *stream, const char *format, ...);")],-1),xO=t("p",null,"dove:",-1),EO=t("ul",null,[t("li",null,[t("p",null,[t("strong",null,"stream"),a(": puntatore a file restituito da fopen")])]),t("li",null,[t("p",null,"Questa funzione va utilizzata esattamente come printf, ma anzichè stampare un output formattato su schermo lo scrive su file")]),t("li",null,[t("p",null,"Ovviamente il file va aperto in scrittura")])],-1),$O={__name:"31",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[yO,wO,IO,xO,EO]),_:1},16))}},CO=j($O,[["__file","/@slidev/slides/31.md"]]),OO=t("h1",null,"I File",-1),SO=t("p",null,"Output formattato su file con fprintf",-1),MO=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"w"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fprintf"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"Linea di testo #1\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fprintf"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"Linea di testo #2\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fprintf"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"Linea di testo #...\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fprintf"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"Linea di testo #N\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},"    "),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fclose"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile chiudere il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"File test.txt generato correttamente\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),FO={__name:"32",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[OO,SO,H(o,ue({},{ranges:[""]}),{default:O(()=>[MO]),_:1},16)]),_:1},16)}}},TO=j(FO,[["__file","/@slidev/slides/32.md"]]),LO=t("h1",null,"I File",-1),zO=t("p",null,"Output formattato su file con fprintf",-1),AO=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file            ")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# File test.txt generato correttamente")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# more test.txt")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("Linea di testo "),t("span",{class:"token comment"},"#1")]),a(`
`),t("span",{class:"line"},[a("Linea di testo "),t("span",{class:"token comment"},"#2")]),a(`
`),t("span",{class:"line"},[a("Linea di testo "),t("span",{class:"token comment"},"#...")]),a(`
`),t("span",{class:"line"},[a("Linea di testo "),t("span",{class:"token comment"},"#N")])])],-1),PO=t("ul",null,[t("li",null,"Come si può facilemnte notare, i 4 fprintf non hanno stampato nulla sullo schermo ma scritto 4 linee di testo nel file test.txt"),t("li",null,"Mentre l’ultimo printf ha stampato un messaggio su schermo ma non ha modificato il file"),t("li",null,[a("Il file test.txt non era esistente ed è stato creato siccome abbiamo aperto il file in modalità "),t("strong",null,"w")]),t("li",null,"Se il file test.txt era già esistente sarebbe stato completamente sovrascritto dall’esecuzione del programma")],-1),RO={__name:"33",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[LO,zO,H(o,ue({},{ranges:[""]}),{default:O(()=>[AO]),_:1},16),PO]),_:1},16)}}},NO=j(RO,[["__file","/@slidev/slides/33.md"]]),jO=t("h1",null,"I File",-1),DO=t("p",null,"Output formattato su file con fprintf",-1),HO=t("ul",null,[t("li",null,"Proviamo ora a scrivere un output formattato su file")],-1),UO=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"w"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fprintf"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"LE TABELLINE\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fprintf"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"------------\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"for"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),a(" i "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),a(" i "),t("span",{class:"token operator"},"<"),a(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},";"),a(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token keyword"},"for"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),a(" j "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),a(" j "),t("span",{class:"token operator"},"<"),a(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},";"),a(" j"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token function"},"fprintf"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"%d x %d = %d\\n"'),t("span",{class:"token punctuation"},","),a(" i"),t("span",{class:"token punctuation"},","),a(" j"),t("span",{class:"token punctuation"},","),a(" i "),t("span",{class:"token operator"},"*"),a(" j"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fprintf"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"------------\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fclose"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile chiudere il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"File test.txt generato correttamente\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),VO={__name:"34",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[jO,DO,HO,H(o,ue({},{ranges:[""]}),{default:O(()=>[UO]),_:1},16)]),_:1},16)}}},BO=j(VO,[["__file","/@slidev/slides/34.md"]]),WO=t("h1",null,"I File",-1),KO=t("p",null,"Output formattato su file con fprintf",-1),qO=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file                                      ")]),a(`
`),t("span",{class:"line"},"File test.txt generato correttamente"),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# more test.txt  ")]),a(`
`),t("span",{class:"line"},"LE TABELLINE"),a(`
`),t("span",{class:"line"},"------------"),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"1"),a(" x "),t("span",{class:"token number"},"1"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"1")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"1"),a(" x "),t("span",{class:"token number"},"2"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"2")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},".."),a(".")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"1"),a(" x "),t("span",{class:"token number"},"10"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"10")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"2"),a(" x "),t("span",{class:"token number"},"1"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"2")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"2"),a(" x "),t("span",{class:"token number"},"2"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"4")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},".."),a(".")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"2"),a(" x "),t("span",{class:"token number"},"10"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"20")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},".."),a(".")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"4"),a(" x "),t("span",{class:"token number"},"5"),a(),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"20")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},".."),a(".")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},".."),a(".")])])],-1),YO={__name:"35",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[WO,KO,H(o,ue({},{ranges:[""]}),{default:O(()=>[qO]),_:1},16)]),_:1},16)}}},GO=j(YO,[["__file","/@slidev/slides/35.md"]]),QO=t("h1",null,"I File",-1),ZO=t("p",null,"Esercizio file_01",-1),XO=t("ul",null,[t("li",null,"Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file"),t("li",null,"Per il nome del file usare un percorso assoluto"),t("li",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_01.c")])],-1),JO=t("p",null,"Output",-1),eS=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./_file01 && more test.txt")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"4")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# ./_file01 &&  more test.txt")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"22")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# ./_file01 &&  more test.txt")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"53")])])],-1),nS={__name:"36",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[QO,ZO,XO,JO,H(o,ue({},{ranges:[""]}),{default:O(()=>[eS]),_:1},16)]),_:1},16)}}},tS=j(nS,[["__file","/@slidev/slides/36.md"]]),sS=t("h1",null,"I File",-1),iS=t("p",null,"Esercizio file_02",-1),oS=t("ul",null,[t("li",null,"Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file in coda ai numeri precedenti"),t("li",null,"Per il nome del file usare un percorso relativo"),t("li",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_02.c")])],-1),aS=t("p",null,"Output",-1),lS=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./_file02 &&  more test.txt")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"4")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# ./_file02 &&  more test.txt")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"4")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"22")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# ./_file02 &&  more test.txt")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"4")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"22")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token number"},"53")])])],-1),rS={__name:"37",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[sS,iS,oS,aS,H(o,ue({},{ranges:[""]}),{default:O(()=>[lS]),_:1},16)]),_:1},16)}}},cS=j(rS,[["__file","/@slidev/slides/37.md"]]),uS=t("h1",null,"I File",-1),pS=t("p",null,"Esercizio file_03",-1),dS=t("ul",null,[t("li",null,"Scrivere un programma in C, che letto da linea di comando il nome, il cognome, età e il numero di telefono di un utente lo scrive su un file, in coda ai record precedenti, in formato CSV"),t("li",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_03.c")])],-1),fS=t("p",null,"Output",-1),mS=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./_file03 &&  more test.csv")]),a(`
`),t("span",{class:"line"},"Mario,Rossi,32,3786543213"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# ./_file03 &&  more test.csv")]),a(`
`),t("span",{class:"line"},"Mario,Rossi,32,3786543213"),a(`
`),t("span",{class:"line"},"Giuseppe,Verdi,45,3217864286"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# ./_file03 &&  more test.csv")]),a(`
`),t("span",{class:"line"},"Mario,Rossi,32,3786543213"),a(`
`),t("span",{class:"line"},"Giuseppe,Verdi,45,3217864286"),a(`
`),t("span",{class:"line"},"Mirko,Bianchi,63,3984368763")])],-1),hS={__name:"38",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[uS,pS,dS,fS,H(o,ue({},{ranges:[""]}),{default:O(()=>[mS]),_:1},16)]),_:1},16)}}},_S=j(hS,[["__file","/@slidev/slides/38.md"]]),gS=t("h1",null,"I File",-1),vS=t("p",null,"Lettura formattata di un file con fscanf",-1),kS=t("p",null,[t("code",null,"int fscanf(FILE *stream, const char *format, ...);")],-1),bS=t("p",null,"dove:",-1),yS=t("ul",null,[t("li",null,[t("p",null,[t("strong",null,"stream"),a(": è il file pointer restituito da fopen")])]),t("li",null,[t("p",null,"Questa funzione si comporta esattamente come scanf, ma anzichè leggere da tastiera, legge un input formattato da file")])],-1),wS={__name:"39",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[gS,vS,kS,bS,yS]),_:1},16))}},IS=j(wS,[["__file","/@slidev/slides/39.md"]]),xS=t("h1",null,"I File",-1),ES=t("p",null,"Lettura formattata di un file con fscanf",-1),$S=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<string.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"define"),a(),t("span",{class:"token macro-name"},"MAX_BUFF"),a(),t("span",{class:"token expression"},[t("span",{class:"token number"},"50")])])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"char"),a(" buff"),t("span",{class:"token punctuation"},"["),a("MAX_BUFF"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"r"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"bzero"),t("span",{class:"token punctuation"},"("),a("buff"),t("span",{class:"token punctuation"},","),a(" MAX_BUFF"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fscanf"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"%s"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token operator"},"&"),a("buff"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Linea letta da file\\n%s\\n"'),t("span",{class:"token punctuation"},","),a(" buff"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fclose"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile chiudere il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),CS={__name:"40",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[xS,ES,H(o,ue({},{ranges:[""]}),{default:O(()=>[$S]),_:1},16)]),_:1},16)}}},OS=j(CS,[["__file","/@slidev/slides/40.md"]]),SS=t("h1",null,"I File",-1),MS=t("p",null,"Lettura formattata di un file con fscanf",-1),FS=t("ul",null,[t("li",null,"Eseguiamo il programma leggendo il seguente file di test")],-1),TS=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},"Linea1"),a(`
`),t("span",{class:"line"},"Linea2"),a(`
`),t("span",{class:"line"},"Linea3")])],-1),LS=t("br",null,null,-1),zS=t("ul",null,[t("li",null,"L’output che otterremo è il seguente")],-1),AS=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file            ")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("Linea letta da "),t("span",{class:"token function"},"file")]),a(`
`),t("span",{class:"line"},"Linea1")])],-1),PS=t("ul",null,[t("li",null,"Come ci aspettavamo solo la prima linea è stata letta."),t("li",null,"Vediamo ora come leggere tutte le linee usando feof")],-1),RS={__name:"41",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[SS,MS,FS,H(o,ue({},{ranges:[""]}),{default:O(()=>[TS]),_:1},16),LS,zS,H(o,ue({},{ranges:[""]}),{default:O(()=>[AS]),_:1},16),PS]),_:1},16)}}},NS=j(RS,[["__file","/@slidev/slides/41.md"]]),jS=t("h1",null,"I File",-1),DS=t("p",null,"Verifica fine file con feof",-1),HS=t("p",null,[t("code",null,"int feof(FILE *stream);")],-1),US=t("ul",null,[t("li",null,[a("Verifica se il file puntato da "),t("em",null,"stream"),a(" ha raggiunto la fine")]),t("li",null,"In altre parole verifica se è ancora possibile leggere fdati dal file oppure no")],-1),VS=t("p",null,"restituisce:",-1),BS=t("ul",null,[t("li",null,[t("strong",null,"0 (false)"),a(": se il puntatore non ha raggounto la fine del file quindi è ancora possibile leggere")]),t("li",null,[t("strong",null,"1 (true)"),a(": se il puntatore ha raggiunto la fine del file quindi non è più possibile leggere")])],-1),WS={__name:"42",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[jS,DS,HS,US,VS,BS]),_:1},16))}},KS=j(WS,[["__file","/@slidev/slides/42.md"]]),qS=t("h1",null,"I File",-1),YS=t("p",null,"Verifica fine file con feof",-1),GS=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"r"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"EOF?: %d\\n"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token function"},"feof"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fclose"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile chiudere il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},"    "),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"EOF?: %d\\n"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token function"},"feof"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},"    "),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),QS={__name:"43",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[qS,YS,H(o,ue({},{ranges:[""]}),{default:O(()=>[GS]),_:1},16)]),_:1},16)}}},ZS=j(QS,[["__file","/@slidev/slides/43.md"]]),XS=t("h1",null,"I File",-1),JS=t("p",null,"Verifica fine file con feof",-1),e6=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file            ")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("EOF?: "),t("span",{class:"token number"},"0"),a(" //il "),t("span",{class:"token function"},"file"),a(" non ha raggiunto la fine")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("EOF?: "),t("span",{class:"token number"},"1"),a(" //il "),t("span",{class:"token function"},"file"),a(" ha raggiunto la fine")])])],-1),n6=t("img",{src:Gf,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),t6={__name:"44",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[XS,JS,H(o,ue({},{ranges:[""]}),{default:O(()=>[e6]),_:1},16),n6]),_:1},16)}}},s6=j(t6,[["__file","/@slidev/slides/44.md"]]),i6=t("h1",null,"I File",-1),o6=t("p",null,"Lettura formattata di un file con fscanf",-1),a6=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<string.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"define"),a(),t("span",{class:"token macro-name"},"MAX_BUFF"),a(),t("span",{class:"token expression"},[t("span",{class:"token number"},"50")])])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"char"),a(" buff"),t("span",{class:"token punctuation"},"["),a("MAX_BUFF"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},"    "),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"//codice di apertura del file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Linee lette da file\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"while"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),t("span",{class:"token function"},"feof"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"bzero"),t("span",{class:"token punctuation"},"("),a("buff"),t("span",{class:"token punctuation"},","),a(" MAX_BUFF"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"fscanf"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"%s"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token operator"},"&"),a("buff"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"%s\\n"'),t("span",{class:"token punctuation"},","),a(" buff"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fclose"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile chiudere il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),l6={__name:"45",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[i6,o6,H(o,ue({},{ranges:[""]}),{default:O(()=>[a6]),_:1},16)]),_:1},16)}}},r6=j(l6,[["__file","/@slidev/slides/45.md"]]),c6=t("h1",null,"I File",-1),u6=t("p",null,"Lettura formattata di un file con fscanf",-1),p6=t("ul",null,[t("li",null,"Eseguiamo il programma leggendo il seguente file di test")],-1),d6=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},"Linea1"),a(`
`),t("span",{class:"line"},"Linea2"),a(`
`),t("span",{class:"line"},"Linea3")])],-1),f6=t("br",null,null,-1),m6=t("ul",null,[t("li",null,"L’output che otterremo è il seguente")],-1),h6=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file            ")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("Linee lette da "),t("span",{class:"token function"},"file")]),a(`
`),t("span",{class:"line"},"Linea1"),a(`
`),t("span",{class:"line"},"Linea2"),a(`
`),t("span",{class:"line"},"Linea3")])],-1),_6=t("ul",null,[t("li",null,"Quindi in questo caso tutte le linee del file sono state correttamente lette")],-1),g6={__name:"46",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[c6,u6,p6,H(o,ue({},{ranges:[""]}),{default:O(()=>[d6]),_:1},16),f6,m6,H(o,ue({},{ranges:[""]}),{default:O(()=>[h6]),_:1},16),_6]),_:1},16)}}},v6=j(g6,[["__file","/@slidev/slides/46.md"]]),k6=t("h1",null,"I File",-1),b6=t("p",null,"Esercizio file_04",-1),y6=t("ul",null,[t("li",null,"Scrivere un programma in C, che legga un file con 4 colonne separate da uno spazio")],-1),w6=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[a("Mario Rossi "),t("span",{class:"token number"},"32"),a(),t("span",{class:"token number"},"3786543213")]),a(`
`),t("span",{class:"line"},[a("Giuseppe Verdi "),t("span",{class:"token number"},"45"),a(),t("span",{class:"token number"},"3217864286")]),a(`
`),t("span",{class:"line"},[a("Mirko Bianchi "),t("span",{class:"token number"},"63"),a(),t("span",{class:"token number"},"3984368763")])])],-1),I6={__name:"47",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[k6,b6,y6,H(o,ue({},{ranges:[""]}),{default:O(()=>[w6]),_:1},16)]),_:1},16)}}},x6=j(I6,[["__file","/@slidev/slides/47.md"]]),E6=t("h1",null,"I File",-1),$6=t("p",null,"Esercizio file_04",-1),C6=t("ul",null,[t("li",null,"Il programma deve generare il seguente output:")],-1),O6=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"### Utente 1 ###")]),a(`
`),t("span",{class:"line"},"Nome:     Mario"),a(`
`),t("span",{class:"line"},"Cognome:  Rossi"),a(`
`),t("span",{class:"line"},[a("Età:      "),t("span",{class:"token number"},"32")]),a(`
`),t("span",{class:"line"},[a("Telefono: "),t("span",{class:"token number"},"3786543213")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},".."),a(".")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},".."),a(".")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"### Utente 3 ###")]),a(`
`),t("span",{class:"line"},"Nome:     Mirko"),a(`
`),t("span",{class:"line"},"Cognome:  Bianchi"),a(`
`),t("span",{class:"line"},[a("Età:      "),t("span",{class:"token number"},"63")]),a(`
`),t("span",{class:"line"},[a("Telefono: "),t("span",{class:"token number"},"3984368763")])])],-1),S6=t("ul",null,[t("li",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_04.c")])],-1),M6={__name:"48",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[E6,$6,C6,H(o,ue({},{ranges:[""]}),{default:O(()=>[O6]),_:1},16),S6]),_:1},16)}}},F6=j(M6,[["__file","/@slidev/slides/48.md"]]),T6=t("h1",null,"I File",-1),L6=t("p",null,"Esercizio file_05",-1),z6=t("ul",null,[t("li",null,[t("p",null,"Scrivere un programma in C, che legga un file con lo stesso formato dell’esercizio 04")]),t("li",null,[t("p",null,"Il programma deve memorizzare i dati letti di ogni utente in una struttura (array di strutture)")]),t("li",null,[t("p",null,"Il programma deve poi stampare l’ouput come l’esercizio 04, scandendo l’array di strutture")]),t("li",null,[t("p",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_05.c")])])],-1),A6={__name:"49",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[T6,L6,z6]),_:1},16))}},P6=j(A6,[["__file","/@slidev/slides/49.md"]]),R6=t("h1",null,"I File",-1),N6=t("p",null,"Scrittura di un file binario con fwrite",-1),j6=t("p",null,[t("code",null,"size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);")],-1),D6=t("p",null,[a("fwite scrive "),t("em",null,"nmemb"),a(" record, ciascuno di dimensione "),t("em",null,"size"),a(", sul file puntato da "),t("em",null,"stream")],-1),H6=t("p",null,[a("Il puntatore della posizione all’interno del file viene spostata in avanti di "),t("em",null,"nmemb x size"),a(" byte")],-1),U6=t("p",null,"dove:",-1),V6=t("ul",null,[t("li",null,[t("strong",null,"ptr"),a(": puntatore al buffer di memoria che vogliamo scrivere su file")]),t("li",null,[t("strong",null,"size"),a(": dimensione in byte del singolo record da scrivere")]),t("li",null,[t("strong",null,"nmemb"),a(": numero di record da scrivere sul file")]),t("li",null,[t("strong",null,"stream"),a(": file pointer da utilizzare")])],-1),B6=t("p",null,"restituisce:",-1),W6=t("ul",null,[t("li",null,[t("strong",null,"N"),a(": il numero di record effettivamente scritti su disco")]),t("li",null,[t("strong",null,"0"),a(": in caso di errore o di impossibilità di scrivere i record su file")])],-1),K6={__name:"50",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[R6,N6,j6,D6,H6,U6,V6,B6,W6]),_:1},16))}},q6=j(K6,[["__file","/@slidev/slides/50.md"]]),Y6=t("h1",null,"I File",-1),G6=t("p",null,"Scrittura di un file binario con fwrite",-1),Q6=t("ul",null,[t("li",null,"E’ importante notare che il buffer utilizzato da fwrite può anche essere un array di caratteri e quindi stringhe"),t("li",null,"Tuttavia fwrite viene prevalentemente utilizzato per scrivere file binari"),t("li",null,"Quindi vediamo un modo per rendere persistenti le strutture dati dei nostri programmi"),t("li",null,"In questo modo ad una successiva esecuzione, il nostro programma potrà leggere i dati da file e processarli"),t("li",null,"La possibilità di scrivere file binari ci permette di realizzare un semplice DB, o meccanismo di persistenza e quindi rendere i nostri programmi più sofisticati e funzionali")],-1),Z6={__name:"51",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[Y6,G6,Q6]),_:1},16))}},X6=j(Z6,[["__file","/@slidev/slides/51.md"]]),J6=t("h1",null,"I File",-1),e4=t("p",null,"Scrittura di un file binario con fwrite",-1),n4=t("ul",null,[t("li",null,"Data la seguente struttura vogliamo scrivere un programma che la salvi su disco in formato binario")],-1),t4=t("br",null,null,-1),s4=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[a("struct s_studente "),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    char nome"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    char cognome"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    int anni"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    float voto"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),i4={__name:"52",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[J6,e4,n4,t4,H(o,ue({},{ranges:[""]}),{default:O(()=>[s4]),_:1},16)]),_:1},16)}}},o4=j(i4,[["__file","/@slidev/slides/52.md"]]),a4=t("h1",null,"I File",-1),l4=t("p",null,"Scrittura di un file binario con fwrite",-1),r4=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<string.h>")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"typedef"),a(),t("span",{class:"token keyword"},"struct"),a(),t("span",{class:"token class-name"},"s_studente"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"char"),a(" nome"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"char"),a(" cognome"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"int"),a(" anni"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"float"),a(" voto"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}"),a(" studente"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    studente alunnno "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token string"},'"Mario"'),t("span",{class:"token punctuation"},",")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token string"},'"Rossi"'),t("span",{class:"token punctuation"},",")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},",")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token number"},"8.5")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")])])],-1),c4={__name:"53",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[a4,l4,H(o,ue({},{ranges:[""]}),{default:O(()=>[r4]),_:1},16)]),_:1},16)}}},u4=j(c4,[["__file","/@slidev/slides/53.md"]]),p4=t("h1",null,"I File",-1),d4=t("p",null,"Scrittura di un file binario con fwrite",-1),f4=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"w"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fwrite"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("alunnno"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),a("studente"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"!="),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Errore nella scrittura su file\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"else")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Record salvato correttamente\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fclose"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile chiudere il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),m4={__name:"54",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[p4,d4,H(o,ue({},{ranges:[""]}),{default:O(()=>[f4]),_:1},16)]),_:1},16)}}},h4=j(m4,[["__file","/@slidev/slides/54.md"]]),_4=t("h1",null,"I File",-1),g4=t("p",null,"Scrittura di un file binario con fwrite",-1),v4=t("ul",null,[t("li",null,"Eseguiamo ora il programma e verifichiamo il file generato")],-1),k4=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file                                      ")]),a(`
`),t("span",{class:"line"},"Record salvato correttamente"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"#more test.txt ")]),a(`
`),t("span",{class:"line"},"MarioRossA")])],-1),b4=t("ul",null,[t("li",null,"Questo output è molto strano ed infatti è la stampa di un file binario e non di un file testuale")],-1),y4=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# hexdump -C test.txt")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("00000000  4d "),t("span",{class:"token number"},"61"),a(),t("span",{class:"token number"},"72"),a(),t("span",{class:"token number"},"69"),a(" 6f 00 00 00  00 00 00 00 00 00 00 00  "),t("span",{class:"token operator"},"|"),a("Mario"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),a("."),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},[a("00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 "),t("span",{class:"token number"},"52"),a(" 6f  "),t("span",{class:"token operator"},"|"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),a("Ro"),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},[a("00000020  "),t("span",{class:"token number"},"73"),a(),t("span",{class:"token number"},"73"),a(),t("span",{class:"token number"},"69"),a(" 00 00 00 00 00  00 00 00 00 00 00 00 00  "),t("span",{class:"token operator"},"|"),a("ssi"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),a("."),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},[a("00000030  00 00 00 00 00 00 00 00  00 00 00 00 "),t("span",{class:"token number"},"12"),a(" 00 00 00  "),t("span",{class:"token operator"},"|"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},[a("00000040  00 00 08 "),t("span",{class:"token number"},"41"),a("                                       "),t("span",{class:"token operator"},"|"),t("span",{class:"token punctuation"},".."),a(".A"),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},"00000044")])],-1),w4={__name:"55",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[_4,g4,v4,H(o,ue({},{ranges:[""]}),{default:O(()=>[k4]),_:1},16),b4,H(o,ue({},{ranges:[""]}),{default:O(()=>[y4]),_:1},16)]),_:1},16)}}},I4=j(w4,[["__file","/@slidev/slides/55.md"]]),x4=t("h1",null,"I File",-1),E4=t("p",null,"Esercizio file_06",-1),$4=t("ul",null,[t("li",null,"Scrivere un programma in C, che letto da linea di comando il nome di città, la temperatura minima e massima, stampi a video i dati inseriti e li salvi su file binario in coda ai dati gia eventualmente presenti"),t("li",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_06.c")])],-1),C4={__name:"56",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[x4,E4,$4]),_:1},16))}},O4=j(C4,[["__file","/@slidev/slides/56.md"]]),S4=t("h1",null,"I File",-1),M4=t("p",null,"Lettura di un file binario con fread",-1),F4=t("p",null,[t("code",null," size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);")],-1),T4=t("p",null,"dove:",-1),L4=t("ul",null,[t("li",null,[t("strong",null,"ptr"),a(": puntatore al buffer di memoria che vogliamo scrivere su file")]),t("li",null,[t("strong",null,"size"),a(": dimensione in byte del singolo record da leggere")]),t("li",null,[t("strong",null,"nmemb"),a(": numero di record da leggere da file")]),t("li",null,[t("strong",null,"stream"),a(": file pointer da utilizzare")])],-1),z4=t("p",null,"restituisce:",-1),A4=t("ul",null,[t("li",null,[t("strong",null,"N"),a(": il numero di record effettivamente letti dal disco")]),t("li",null,[t("strong",null,"0"),a(": in caso di errore o di impossibilità nel legegre i record dal file")])],-1),P4={__name:"57",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[S4,M4,F4,T4,L4,z4,A4]),_:1},16))}},R4=j(P4,[["__file","/@slidev/slides/57.md"]]),N4=t("h1",null,"I File",-1),j4=t("p",null,"Lettura di un file binario con fread",-1),D4=t("ul",null,[t("li",null,"Vediamo ora come leggere il file generato precedentemente con fwrite")],-1),H4=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<string.h>")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"typedef"),a(),t("span",{class:"token keyword"},"struct"),a(),t("span",{class:"token class-name"},"s_studente"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"char"),a(" nome"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"char"),a(" cognome"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"int"),a(" anni"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"float"),a(" voto"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}"),a(" studente"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    studente alunno"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},"    "),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"r"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")])])],-1),U4={__name:"58",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[N4,j4,D4,H(o,ue({},{ranges:[""]}),{default:O(()=>[H4]),_:1},16)]),_:1},16)}}},V4=j(U4,[["__file","/@slidev/slides/58.md"]]),B4=t("h1",null,"I File",-1),W4=t("p",null,"Lettura di un file binario con fread",-1),K4=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("alunno"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),a("studente"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"!="),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Errore nella lettura da file\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"else"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Record letto correttamente\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Nome: %s\\n"'),t("span",{class:"token punctuation"},","),a(" alunno"),t("span",{class:"token punctuation"},"."),a("nome"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Cognome: %s\\n"'),t("span",{class:"token punctuation"},","),a(" alunno"),t("span",{class:"token punctuation"},"."),a("cognome"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Anni: %d\\n"'),t("span",{class:"token punctuation"},","),a(" alunno"),t("span",{class:"token punctuation"},"."),a("anni"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Voto: %.2f\\n"'),t("span",{class:"token punctuation"},","),a(" alunno"),t("span",{class:"token punctuation"},"."),a("voto"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fclose"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile chiudere il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),q4={__name:"59",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[B4,W4,H(o,ue({},{ranges:[""]}),{default:O(()=>[K4]),_:1},16)]),_:1},16)}}},Y4=j(q4,[["__file","/@slidev/slides/59.md"]]),G4=t("h1",null,"I File",-1),Q4=t("p",null,"Lettura di un file binario con fread",-1),Z4=t("ul",null,[t("li",null,"Eseguiamo ora il programmma e vediamo l’output generato")],-1),X4=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# hexdump -C test.txt")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("00000000  4d "),t("span",{class:"token number"},"61"),a(),t("span",{class:"token number"},"72"),a(),t("span",{class:"token number"},"69"),a(" 6f 00 00 00  00 00 00 00 00 00 00 00  "),t("span",{class:"token operator"},"|"),a("Mario"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),a("."),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},[a("00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 "),t("span",{class:"token number"},"52"),a(" 6f  "),t("span",{class:"token operator"},"|"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),a("Ro"),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},[a("00000020  "),t("span",{class:"token number"},"73"),a(),t("span",{class:"token number"},"73"),a(),t("span",{class:"token number"},"69"),a(" 00 00 00 00 00  00 00 00 00 00 00 00 00  "),t("span",{class:"token operator"},"|"),a("ssi"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),a("."),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},[a("00000030  00 00 00 00 00 00 00 00  00 00 00 00 "),t("span",{class:"token number"},"12"),a(" 00 00 00  "),t("span",{class:"token operator"},"|"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},[a("00000040  00 00 08 "),t("span",{class:"token number"},"41"),a("                                       "),t("span",{class:"token operator"},"|"),t("span",{class:"token punctuation"},".."),a(".A"),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},"00000044"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"Record letto correttamente"),a(`
`),t("span",{class:"line"},"Nome: Mario"),a(`
`),t("span",{class:"line"},"Cognome: Rossi"),a(`
`),t("span",{class:"line"},[a("Anni: "),t("span",{class:"token number"},"18")]),a(`
`),t("span",{class:"line"},[a("Voto: "),t("span",{class:"token number"},"8.50")])])],-1),J4={__name:"60",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[G4,Q4,Z4,H(o,ue({},{ranges:[""]}),{default:O(()=>[X4]),_:1},16)]),_:1},16)}}},eM=j(J4,[["__file","/@slidev/slides/60.md"]]),nM=t("h1",null,"I File",-1),tM=t("p",null,"Esercizio file_07",-1),sM=t("ul",null,[t("li",null,"Scrivere un programma in C, che legga il file generato come output del programma 06, e stampi a video il record letto"),t("li",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_07.c")])],-1),iM={__name:"61",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[nM,tM,sM]),_:1},16))}},oM=j(iM,[["__file","/@slidev/slides/61.md"]]),aM=t("h1",null,"I File",-1),lM=t("p",null,"Persistenza di un array",-1),rM=t("ul",null,[t("li",null,"Vediamo ora come è possibile scrivere e leggere un array su un file"),t("li",null,"In generale è possibile persistere qualsiasi struttura dati (negli esempi precdenti abbiamo visto come salvare e leggere una struct)")],-1),cM=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<string.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"define"),a(),t("span",{class:"token macro-name"},"NUM"),a(),t("span",{class:"token expression"},[t("span",{class:"token number"},"10")])])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"int"),a(" numeri"),t("span",{class:"token punctuation"},"["),a("NUM"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"for"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),a(" i "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),a(" i "),t("span",{class:"token operator"},"<"),a(" NUM"),t("span",{class:"token punctuation"},";"),a(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        numeri"),t("span",{class:"token punctuation"},"["),a("i"),t("span",{class:"token punctuation"},"]"),a(),t("span",{class:"token operator"},"="),a(" i "),t("span",{class:"token operator"},"+"),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"w"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")])])],-1),uM={__name:"62",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[aM,lM,rM,H(o,ue({},{ranges:[""]}),{default:O(()=>[cM]),_:1},16)]),_:1},16)}}},pM=j(uM,[["__file","/@slidev/slides/62.md"]]),dM=t("h1",null,"I File",-1),fM=t("p",null,"Persistenza di un array",-1),mM=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"for"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),a(" i "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),a(" i "),t("span",{class:"token operator"},"<"),a(" NUM"),t("span",{class:"token punctuation"},";"),a(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fwrite"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("numeri"),t("span",{class:"token punctuation"},"["),a("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"!="),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Errore nella scrittura del record!\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token keyword"},"else"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"numeri[%d] scritto du file\\n"'),t("span",{class:"token punctuation"},","),a(" i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fclose"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile chiudere il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),hM=t("ul",null,[t("li",null,"Quindi abbiamo scritto 10 record (NUM elementi dell’array)")],-1),_M={__name:"63",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[dM,fM,H(o,ue({},{ranges:[""]}),{default:O(()=>[mM]),_:1},16),hM]),_:1},16)}}},gM=j(_M,[["__file","/@slidev/slides/63.md"]]),vM=t("h1",null,"I File",-1),kM=t("p",null,"Persistenza di un array",-1),bM=t("ul",null,[t("li",null,"Il file generato è il seguente")],-1),yM=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# hexdump -C test.txt")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("00000000  01 00 00 00 02 00 00 00  03 00 00 00 04 00 00 00  "),t("span",{class:"token operator"},"|"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},[a("00000010  05 00 00 00 06 00 00 00  07 00 00 00 08 00 00 00  "),t("span",{class:"token operator"},"|"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},[a("00000020  09 00 00 00 0a 00 00 00                           "),t("span",{class:"token operator"},"|"),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token punctuation"},".."),t("span",{class:"token operator"},"|")]),a(`
`),t("span",{class:"line"},"00000028")])],-1),wM=t("br",null,null,-1),IM=t("ul",null,[t("li",null,"Come mai quest’ordine nel salvare gli elementi dell’array su file? E’ giusto?")],-1),xM={__name:"64",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[vM,kM,bM,H(o,ue({},{ranges:[""]}),{default:O(()=>[yM]),_:1},16),wM,IM]),_:1},16)}}},EM=j(xM,[["__file","/@slidev/slides/64.md"]]),$M=t("h1",null,"I File",-1),CM=t("p",null,"Persistenza di un array",-1),OM=t("ul",null,[t("li",null,"Vediamo come modificare il programma per scrivere tutto l’array in una sola operazione")],-1),SM=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<string.h>")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"define"),a(),t("span",{class:"token macro-name"},"NUM"),a(),t("span",{class:"token expression"},[t("span",{class:"token number"},"10")])])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},"    "),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"int"),a(" numeri"),t("span",{class:"token punctuation"},"["),a("NUM"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"for"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),a(" i "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),a(" i "),t("span",{class:"token operator"},"<"),a(" NUM"),t("span",{class:"token punctuation"},";"),a(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        numeri"),t("span",{class:"token punctuation"},"["),a("i"),t("span",{class:"token punctuation"},"]"),a(),t("span",{class:"token operator"},"="),a(" i "),t("span",{class:"token operator"},"+"),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),a(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),a("fp "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"fopen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"./test.txt"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token string"},'"w"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token constant"},"NULL"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile aprire il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")])])],-1),MM={__name:"65",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[$M,CM,OM,H(o,ue({},{ranges:[""]}),{default:O(()=>[SM]),_:1},16)]),_:1},16)}}},FM=j(MM,[["__file","/@slidev/slides/65.md"]]),TM=t("h1",null,"I File",-1),LM=t("p",null,"Persistenza di un array",-1),zM=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fwrite"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("numeri"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"*"),a(" NUM"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"!="),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Errore nella scrittura del record!\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"else"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Array scritto su file\\n"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},"    "),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fclose"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"perror"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Impossibile chiudere il file"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),AM={__name:"66",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[TM,LM,H(o,ue({},{ranges:[""]}),{default:O(()=>[zM]),_:1},16)]),_:1},16)}}},PM=j(AM,[["__file","/@slidev/slides/66.md"]]),RM=t("h1",null,"I File",-1),NM=t("p",null,"Persistenza di un array",-1),jM=t("ul",null,[t("li",null,"Ma quindi che differenza c’è tra le due verisoni del programma?"),t("li",null,"Proviamo ad analizzare i tempi di esecuzione con NUM = 1.000.000")],-1),DM=t("p",null,"100 x 1.000.000 di record da 4 byte (int)",-1),HM=t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/a4767b804a1b266142b1acfcfcde7037",target:"_blank",rel:"noopener"},"src code")],-1),UM=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"#  time ./file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("Array scritto "),t("span",{class:"token function"},"su"),a(),t("span",{class:"token function"},"file")]),a(`
`),t("span",{class:"line"},[a("./file  "),t("span",{class:"token number"},"5"),a(",50s user "),t("span",{class:"token number"},"1"),a(",08s system "),t("span",{class:"token number"},"99"),a("% cpu "),t("span",{class:"token number"},"6,627"),a(" total")])])],-1),VM={__name:"67",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[RM,NM,jM,DM,HM,H(o,ue({},{ranges:[""]}),{default:O(()=>[UM]),_:1},16)]),_:1},16)}}},BM=j(VM,[["__file","/@slidev/slides/67.md"]]),WM=t("h1",null,"I File",-1),KM=t("p",null,"Persistenza di un array",-1),qM=t("p",null,"100 x 1 record da 4 * 1.000.000 byte (int)",-1),YM=t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/e8b0e65523b3489d7efa9dea4108f9ea",target:"_blank",rel:"noopener"},"src code")],-1),GM=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# time ./file       ")]),a(`
`),t("span",{class:"line"},[a("Array scritto "),t("span",{class:"token function"},"su"),a(),t("span",{class:"token function"},"file")]),a(`
`),t("span",{class:"line"},[a("./file  "),t("span",{class:"token number"},"0"),a(",01s user "),t("span",{class:"token number"},"0"),a(",63s system "),t("span",{class:"token number"},"94"),a("% cpu "),t("span",{class:"token number"},"0,672"),a(" total")])])],-1),QM=t("ul",null,[t("li",null,"Quindi scrivere 100 record da 4MByte ciascuno è circa 10 volte più veloce che scrivere 100M di record da 4 byte ciascuno")],-1),ZM={__name:"68",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[WM,KM,qM,YM,H(o,ue({},{ranges:[""]}),{default:O(()=>[GM]),_:1},16),QM]),_:1},16)}}},XM=j(ZM,[["__file","/@slidev/slides/68.md"]]),JM=t("h1",null,"I File",-1),eF=t("p",null,"Muoversi all’interno di un file",-1),nF=t("p",null,[t("code",null,"int fseek(FILE *stream, long offset, int whence);")],-1),tF=t("p",null,[a("fseek imposta la posizione del fiel pointer per il file puntato da "),t("em",null,"stream")],-1),sF=t("ul",null,[t("li",null,[t("strong",null,"stream"),a(": file pointer da utilizzare")]),t("li",null,[t("strong",null,"offset"),a(": sposta il puntatore al file del numero specificato di byte")]),t("li",null,[t("strong",null,"whence"),a(": indica la posizione da cui partire nell’operazione di seek")])],-1),iF=t("p",null,[a("Nello specifico "),t("strong",null,"whence"),a(" può assumere i seguenti valori:")],-1),oF=t("ul",null,[t("li",null,[t("strong",null,"SEEK_SET"),a(": indica l’inizio del file")]),t("li",null,[t("strong",null,"SEEK_CUR"),a(": indica la posizione corrente")]),t("li",null,[t("strong",null,"SEEK_END"),a(": indica la fine del file")])],-1),aF=t("p",null,"restituisce:",-1),lF=t("ul",null,[t("li",null,[t("strong",null,"0"),a(": in caso di successo")]),t("li",null,[t("strong",null,"-1"),a(": in caso di errore")])],-1),rF={__name:"69",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[JM,eF,nF,tF,sF,iF,oF,aF,lF]),_:1},16))}},cF=j(rF,[["__file","/@slidev/slides/69.md"]]),uF=t("h1",null,"I File",-1),pF=t("p",null,"Muoversi all’interno di un file",-1),dF=t("ul",null,[t("li",null,"Dato un file binario contenente un array con i numeri da 1 a 100"),t("li",null,"Vediamo come legegre uno specifico numero partendo dall’inizio del file")],-1),fF=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<string.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"define"),a(),t("span",{class:"token macro-name"},"NUM"),a(),t("span",{class:"token expression"},[t("span",{class:"token number"},"100")])])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token keyword"},"int"),a(" num"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"//apertura di un file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fseek"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"40"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token constant"},"SEEK_SET"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("num"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Il numero letto è: %d\\n"'),t("span",{class:"token punctuation"},","),a(" num"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"//chiusura di un file")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),mF={__name:"70",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[uF,pF,dF,H(o,ue({},{ranges:[""]}),{default:O(()=>[fF]),_:1},16)]),_:1},16)}}},hF=j(mF,[["__file","/@slidev/slides/70.md"]]),_F=t("h1",null,"I File",-1),gF=t("p",null,"Muoversi all’interno di un file",-1),vF=t("ul",null,[t("li",null,"Eseguiamo e verifichiamo che il risultato sia quello atteso")],-1),kF=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("Il numero letto è: "),t("span",{class:"token number"},"11")])])],-1),bF=t("br",null,null,-1),yF=t("ul",null,[t("li",null,"Questo è corretto in quanto inizalmente abbiamo spostato (fseek) di 40 byte dall’inizio del file (SEEK_SET)"),t("li",null,"Pertanto abbiamo saltato i primo 10 numeri (un int è 4 byte)"),t("li",null,"Quindi ci siamo posizionati all’inizio dell’11mo numero che viene letto da fread")],-1),wF={__name:"71",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[_F,gF,vF,H(o,ue({},{ranges:[""]}),{default:O(()=>[kF]),_:1},16),bF,yF]),_:1},16)}}},IF=j(wF,[["__file","/@slidev/slides/71.md"]]),xF=t("h1",null,"I File",-1),EF=t("p",null,"Muoversi all’interno di un file",-1),$F=t("ul",null,[t("li",null,"In modo analogo vediamo come posizionarsi a partire dalla fine del file")],-1),CF=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<string.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"define"),a(),t("span",{class:"token macro-name"},"NUM"),a(),t("span",{class:"token expression"},[t("span",{class:"token number"},"100")])])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token keyword"},"int"),a(" num"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"//apertura di un file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fseek"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"40"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token constant"},"SEEK_END"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("num"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Il numero letto è: %d\\n"'),t("span",{class:"token punctuation"},","),a(" num"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"//chiusura di un file")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),OF={__name:"72",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[xF,EF,$F,H(o,ue({},{ranges:[""]}),{default:O(()=>[CF]),_:1},16)]),_:1},16)}}},SF=j(OF,[["__file","/@slidev/slides/72.md"]]),MF=t("h1",null,"I File",-1),FF=t("p",null,"Muoversi all’interno di un file",-1),TF=t("ul",null,[t("li",null,"Eseguiamo e verifichiamo che il risultato sia quello atteso")],-1),LF=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("Il numero letto è: "),t("span",{class:"token number"},"91")])])],-1),zF=t("br",null,null,-1),AF=t("ul",null,[t("li",null,"Questo è corretto in quanto inizalmente abbiamo spostato (fseek) di -40 byte dalla fine del file (SEEK_END)"),t("li",null,"Pertanto abbiamo posizionato il puntatore a partire dal 10mo numero prima della file")],-1),PF={__name:"73",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[MF,FF,TF,H(o,ue({},{ranges:[""]}),{default:O(()=>[LF]),_:1},16),zF,AF]),_:1},16)}}},RF=j(PF,[["__file","/@slidev/slides/73.md"]]),NF=t("h1",null,"I File",-1),jF=t("p",null,"Muoversi all’interno di un file",-1),DF=t("ul",null,[t("li",null,"Vediamo ancora come posizionarsi a partire dalla posizione corrente")],-1),HF=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdio.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<stdlib.h>")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"include"),a(),t("span",{class:"token string"},"<string.h>")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token macro property"},[t("span",{class:"token directive-hash"},"#"),t("span",{class:"token directive keyword"},"define"),a(),t("span",{class:"token macro-name"},"NUM"),a(),t("span",{class:"token expression"},[t("span",{class:"token number"},"100")])])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"int"),a(),t("span",{class:"token function"},"main"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    FILE "),t("span",{class:"token operator"},"*"),a("fp"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token keyword"},"int"),a(" num"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"//apertura file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("num"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("num"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("num"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fseek"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token constant"},"SEEK_CUR"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("num"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Il numero letto è: %d\\n"'),t("span",{class:"token punctuation"},","),a(" num"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")])])],-1),UF={__name:"74",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[NF,jF,DF,H(o,ue({},{ranges:[""]}),{default:O(()=>[HF]),_:1},16)]),_:1},16)}}},VF=j(UF,[["__file","/@slidev/slides/74.md"]]),BF=t("h1",null,"I File",-1),WF=t("p",null,"Muoversi all’interno di un file",-1),KF=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")]),a(`
`),t("span",{class:"line"},"    "),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fseek"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token operator"},"-"),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token constant"},"SEEK_CUR"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("num"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=="),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Il numero letto è: %d\\n"'),t("span",{class:"token punctuation"},","),a(" num"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"//chiusura file")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),qF={__name:"75",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[BF,WF,H(o,ue({},{ranges:[""]}),{default:O(()=>[KF]),_:1},16)]),_:1},16)}}},YF=j(qF,[["__file","/@slidev/slides/75.md"]]),GF=t("h1",null,"I File",-1),QF=t("p",null,"Muoversi all’interno di un file",-1),ZF=t("ul",null,[t("li",null,"Eseguiamo e verifichiamo che il risultato sia quello atteso")],-1),XF=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"#/file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("Il numero letto è: "),t("span",{class:"token number"},"6")]),a(`
`),t("span",{class:"line"},[a("Il numero letto è: "),t("span",{class:"token number"},"1")])])],-1),JF=t("br",null,null,-1),eT=t("ul",null,[t("li",null,"Questo è corretto in quanto inizalmente con le 3 fread abbiamo spostato il puntatore di 12 dall’inizio del file"),t("li",null,"Poi con fseek ci spostiamo di 8 byte dalla posizione corrente (SEEK_CUR), di fatto posizionandoci all’inizio del numero 6"),t("li",null,"Dopo aver letto il numero 6, il puntatore ora è stato spostato al 24mo byte"),t("li",null,"Ora facendo un fseek di -24 byte dalla posizione corrente (SEEK_CUR) torniamo all’inizio del file"),t("li",null,"Pertanto la successiva lettura, legge il numero 1")],-1),nT={__name:"76",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[GF,QF,ZF,H(o,ue({},{ranges:[""]}),{default:O(()=>[XF]),_:1},16),JF,eT]),_:1},16)}}},tT=j(nT,[["__file","/@slidev/slides/76.md"]]),sT=t("h1",null,"I File",-1),iT=t("p",null,"Esercizio file_08",-1),oT=t("ul",null,[t("li",null,"Scrivere un programma in C, che legga il file generato come output del programma 06"),t("li",null,"Il programma legge un parametro numerico da linea di comando (N)"),t("li",null,"Il programma stampa l’N record presente nel file (assumere che N sia <= al numero di città presenti nel file)"),t("li",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_08.c")])],-1),aT={__name:"77",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[sT,iT,oT]),_:1},16))}},lT=j(aT,[["__file","/@slidev/slides/77.md"]]),rT=t("h1",null,"I File",-1),cT=t("p",null,"Muoversi all’interno di un file",-1),uT=t("p",null,[t("code",null,"long ftell(FILE *stream);")],-1),pT=t("p",null,[a("ftell restituisce la posizione corrente all’interno del file puntato da "),t("em",null,"stream")],-1),dT=t("pre",{class:"slidev-code language-c"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("num"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("num"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"fread"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"&"),a("num"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token keyword"},"sizeof"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),a(" fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token function"},"printf"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Il file è in posizione: %ld\\n"'),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token function"},"ftell"),t("span",{class:"token punctuation"},"("),a("fp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},"."),t("span",{class:"token punctuation"},".")])])],-1),fT=t("br",null,null,-1),mT=t("pre",{class:"slidev-code language-bash"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"# ./file")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("Il "),t("span",{class:"token function"},"file"),a(" è "),t("span",{class:"token keyword"},"in"),a(" posizione: "),t("span",{class:"token number"},"12")])])],-1),hT={__name:"78",setup(e){const n={};return z(N),(s,i)=>{const o=he;return x(),P(Z,Q(q(n)),{default:O(()=>[rT,cT,uT,pT,H(o,ue({},{ranges:[""]}),{default:O(()=>[dT]),_:1},16),fT,H(o,ue({},{ranges:[""]}),{default:O(()=>[mT]),_:1},16)]),_:1},16)}}},_T=j(hT,[["__file","/@slidev/slides/78.md"]]),gT=t("h1",null,"I File",-1),vT=t("p",null,"Esercizio file_09",-1),kT=t("ul",null,[t("li",null,"Scrivere un programma in C, che legga da linea di comando il nome comopleto (percorso e nome) di un file"),t("li",null,"Il programma stampa a video la lunghezza del file"),t("li",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_09.c")])],-1),bT={__name:"79",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[gT,vT,kT]),_:1},16))}},yT=j(bT,[["__file","/@slidev/slides/79.md"]]),wT=t("h1",null,"I File",-1),IT=t("p",null,"Esercizio file_10",-1),xT=t("ul",null,[t("li",null,"Scrivere un programma in C, che legga da linea di comando il nome comopleto (percorso e nome) di un file"),t("li",null,"Il programma stampa a video la lunghezza del file"),t("li",null,"Il programma non può leggere il file di cui si vuole calcolare la lunghezza"),t("li",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_10.c")])],-1),ET={__name:"80",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[wT,IT,xT]),_:1},16))}},$T=j(ET,[["__file","/@slidev/slides/80.md"]]),CT=t("h1",null,"I File",-1),OT=t("p",null,"Esercizio file_11",-1),ST=t("ul",null,[t("li",null,"Scrivere un programma in linguaggio C che, permetta la gestione di un magazzino ricambi."),t("li",null,[a("Il programma, tramite un’interfaccia utente testuale (TUI – Text User Interface), deve visualizzare un menu di scelta che permetta all’utente di: "),t("ol",null,[t("li",null,"inserire e memorizzare un ricambio con la relativa quantità"),t("li",null,"visualizzare la lista di tutti i ricambi come inserita dall’utente, visualizzando il nome del ricambio e la quantità disponibile a magazzino"),t("li",null,"visualizzare solo il ricambio N"),t("li",null,"modificare il ricambio numero N"),t("li",null,"uscire dal programma")])])],-1),MT={__name:"81",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[CT,OT,ST]),_:1},16))}},FT=j(MT,[["__file","/@slidev/slides/81.md"]]),TT=t("h1",null,"I File",-1),LT=t("p",null,"Esercizio file_11",-1),zT=t("ul",null,[t("li",null,"Date le dimensioni, il programma non può leggere TUTTO il magazzino da file in memoria"),t("li",null,"Il programma deve operare solo su file ed ovviamente avere un ricambio in memoria per le necessarie manipolazioni"),t("li",null,"Il programma terminata un’operazione, rimane in attesa della pressione di un tasto e successivamente ripropone il menu di scelta. Il programma termina solo su esplicita scelta dell’utente."),t("li",null,[a("Consegnare il file con nome: "),t("em",null,"|cognome|_file_11.c")])],-1),AT={__name:"82",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[TT,LT,zT]),_:1},16))}},PT=j(AT,[["__file","/@slidev/slides/82.md"]]),RT=t("h1",null,"I File",-1),NT=t("ul",null,[t("li",null,[t("p",null,"Qui i link ai gist contenente tutto il codice sorgente usato in queste slide")]),t("li",null,[t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/b925aa12bd9baaabe4f8eb5161cb73f2",target:"_blank",rel:"noopener"},"fopen:")])]),t("li",null,[t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/c75eff492742b57461ec796f9c29dc66",target:"_blank",rel:"noopener"},"fclose:")])]),t("li",null,[t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/0cf0c214ded614e4f39ec827457e074e",target:"_blank",rel:"noopener"},"fprintf:")])]),t("li",null,[t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/2d708a308d7e6ab8fd3273f63a8e60a1",target:"_blank",rel:"noopener"},"fscanf:")])]),t("li",null,[t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/06cb6ac48e97e11bb08773df6a4bcf5a",target:"_blank",rel:"noopener"},"fwrite:")])]),t("li",null,[t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/7179a3d913de2303b14b076f6eb87b6d",target:"_blank",rel:"noopener"},"fread:")])]),t("li",null,[t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/1efa0c3cde1e38fd8b0a9bfe05b4c669",target:"_blank",rel:"noopener"},"persist array:")])]),t("li",null,[t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/39f5fc4a9845a5762db38fb34b564787",target:"_blank",rel:"noopener"},"persist array2:")])]),t("li",null,[t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/eb0afc3c6cea43811477a52611ad060a",target:"_blank",rel:"noopener"},"fseek 01:")])]),t("li",null,[t("p",null,[t("a",{href:"https://gist.github.com/profmancusoa/fd1b256d6e82cdcbdb2c02e432c84fdb",target:"_blank",rel:"noopener"},"fseek 02:"),a(" e "),t("a",{href:"https://gist.github.com/profmancusoa/60a045625dd9249538b18c57980ac761",target:"_blank",rel:"noopener"},"fseek 03:")])])],-1),jT={__name:"83",setup(e){const n={};return z(N),(s,i)=>(x(),P(Z,Q(q(n)),{default:O(()=>[RT,NT]),_:1},16))}},DT=j(jT,[["__file","/@slidev/slides/83.md"]]),HT=[{path:"1",name:"page-1",component:b2,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"INFORMATICA",as:"2022/2023",version:"1.1.0",title:"I File",slide:{raw:`---
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
version: '1.1.0'
---  

<!-- http://www.primeeng.it/downloads/materiale%202013/12%20Linguaggio%20C%20-%20Gestione%20di%20file.pdf
https://www.unife.it/scienze/informatica/insegnamenti/programmazione-e-laboratorio/materiale-didattico-anni-precedenti/materiale-didattico-a-a-2016-17/diapositive/120-file-di-testo
https://lia.disi.unibo.it/Courses/FondT-0910-ELT/materiale/10.file.pdf
https://www.freecodecamp.org/italian/news/gestione-dei-file-in-c-come-aprire-chiudere-e-scrivere-su-file/
http://www.diit.unict.it/users/mpalesi/COURSES/LDI_02-03/DISPENSE/files.pdf -->


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


# I File

I/O e gestione dei File

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"INFORMATICA",as:"2022/2023",version:"1.1.0",title:"I File"},index:0,start:0,end:37,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:C2,meta:{slide:{raw:`
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
- Anche in caso in cui manchi l'alimentazione al computer tutti i dati del programma in esecuzione vengono irremediabilmente persi`,frontmatter:{},index:1,start:38,end:51,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:z2,meta:{slide:{raw:`
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

<img src="/media/files_01.png" width="550" style="position:relative;top: -8rem; left:15rem;"/>`,frontmatter:{},index:2,start:52,end:67,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:U2,meta:{slide:{raw:`
# I File

Introduzione


<img src="/media/files_02.png" width="300" style="position:relative;top: 3rem; left:35rem;"/>
<img src="/media/files_03.png" width="500" style="position:relative;top: -12rem; left:0rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione


<img src="/media/files_02.png" width="300" style="position:relative;top: 3rem; left:35rem;"/>
<img src="/media/files_03.png" width="500" style="position:relative;top: -12rem; left:0rem;"/>`,frontmatter:{},index:3,start:68,end:78,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:G2,meta:{slide:{raw:`
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

<img src="/media/files_04.png" width="350" style="position:relative;top: -15rem; left:33rem;"/>`,frontmatter:{},index:4,start:79,end:95,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:i$,meta:{slide:{raw:`
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
<img src="/media/files_06.png" width="500" style="position:relative;top: -12rem; left:25rem;"/>`,frontmatter:{},index:5,start:96,end:110,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:p$,meta:{slide:{raw:`
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


<img src="/media/files_07.png" width="650" style="position:relative;top: 2rem; left:7rem;"/>`,frontmatter:{},index:6,start:111,end:123,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:v$,meta:{slide:{raw:`
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
  
<img src="/media/files_08.png" width="600" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:7,start:124,end:136,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:E$,meta:{slide:{raw:`
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

<img src="/media/files_10.png" width="550" style="position:relative;top: 3rem; left:10rem;"/>`,frontmatter:{},index:8,start:137,end:148,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:T$,meta:{slide:{raw:`
# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Sequenziale**: si accede ai record del file partendo dal primo e scandendo in modo ordinato ogni record. In altre parole per accedere al record N, è ncessario aver prima letto tutti gli N-1 record precedenti

<img src="/media/files_09.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Sequenziale**: si accede ai record del file partendo dal primo e scandendo in modo ordinato ogni record. In altre parole per accedere al record N, è ncessario aver prima letto tutti gli N-1 record precedenti

<img src="/media/files_09.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>`,frontmatter:{},index:9,start:149,end:160,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:j$,meta:{slide:{raw:`
# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Casuale o Diretto**: nel caso di record aventi tutti la stessa lunghezza, è possibile leggere un record alla posizione N indipendentemente dal record letto precedentemente. In altre parole per accedere al record N **NON** è necessario dover leggere tutti quelli precedenti

<img src="/media/files_09a.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Casuale o Diretto**: nel caso di record aventi tutti la stessa lunghezza, è possibile leggere un record alla posizione N indipendentemente dal record letto precedentemente. In altre parole per accedere al record N **NON** è necessario dover leggere tutti quelli precedenti

<img src="/media/files_09a.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>`,frontmatter:{},index:10,start:161,end:172,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:B$,meta:{slide:{raw:`
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
- Ciò è possibile poichè il sistema di I/O del C è caratterizzato da un’interfaccia indipendente dal dispositivo effettivo che si interpone tra il programmatore e il dispositivo stesso`,frontmatter:{},index:11,start:173,end:185,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:G$,meta:{slide:{raw:`
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
  - **Posizionamento in un file**: permette di accedere in modo diretto ai record di un file`,frontmatter:{},index:12,start:186,end:198,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:f3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:13,start:199,end:225,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:w3,meta:{slide:{raw:`
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
- Ciò è necessario per rilasciare, in modo corretto, le risorse allocate (memoria, ...) durante l'apertura del file`,frontmatter:{},index:14,start:226,end:253,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:S3,meta:{slide:{raw:`
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
`,title:"I File",level:1,content:"# I File\n\nI file in C\n\nLe principali funzioni per gestire i file in C sono:\n\n| **Funzione** | **Descrizione**                                                                                                                         |\n| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |\n| `fopen`      | apre un file dato il suo nome e restituisce un puntatore ad esso                                                                        |\n| `flcose`     | chiude un file, scrivendo su disco eventuali dati in cache e restituisce le risorse allocate                                            |\n| `fprintf`    | scrive un output su un file. Dal nome è chiaro che si comporta esattamente come printf, ma anzichè scrivere su terminale scrive su file |\n| `fscanf`     | esattamente come scanf, permette di leggere un input formattato da file                                                                 |\n| `fread`      | legge uno o più record da un file                                                                                                       |\n| `fwrite`     | scrive uno o più record su file                                                                                                         |\n| `fseek`      | cambia la posizione attuale all'interno del file permettendo l'accesso casuale al file stesso                                           |\n\n- Il manuale di ogni funzione è disponibile digitando `man <nome funzione>`",frontmatter:{},index:15,start:254,end:273,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:j3,meta:{slide:{raw:`
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
  - **FILE \\***: puntatore al file appena aperto`,frontmatter:{},index:16,start:274,end:292,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:B3,meta:{slide:{raw:`
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

`,title:"I File",level:1,content:"# I File\n\nApertura di un file con fopen\n\n\n| **mode** | **Descrizione**                                                            | **Note**                                       |\n| -------- | -------------------------------------------------------------------------- | ---------------------------------------------- |\n| `r`      | apre il file in sola lettura                                               | Il puntatore è posizionato all'inizio del file |\n| `r+`     | apre il file in lettura e scrittura                                        | Il puntatore è posizionato all'inizio del file |\n| `w`      | crea o sovrascrive un file in scrittura                                    | Il puntatore è posizionato all'inizio del file |\n| `w+`     | crea o sovrascrive un file in scrittura e lettura                          | Il puntatore è posizionato all'inizio del file |\n| `a`      | apre il file in scrittura se esiste o lo crera in caso contrario           | Il puntatore è posizionato alla file del file  |\n| `a+`     | apre il file in scrittura e lettura se esiste o lo crera in caso contrario | Il puntatore è posizionato alla file del file  |",frontmatter:{},index:17,start:293,end:309,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Z3,meta:{slide:{raw:`
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

<img src="/media/files_11.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:18,start:310,end:323,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:oC,meta:{slide:{raw:`
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
  
<img src="/media/files_12.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:19,start:324,end:338,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:fC,meta:{slide:{raw:`
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
  
<img src="/media/files_13.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:20,start:339,end:352,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:bC,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:21,start:353,end:382,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:OC,meta:{slide:{raw:`
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
- La libreria C mette a disposizione un metodo molto facile per conoscere la motivazione del falliemento`,frontmatter:{},index:22,start:383,end:404,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:LC,meta:{slide:{raw:`
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
- Pertanto esaminando il valore di **errno** un programma può capire il motivo del fallimento dell'ultima chiamata`,frontmatter:{},index:23,start:405,end:417,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:NC,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:24,start:418,end:445,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:WC,meta:{slide:{raw:`
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

- Come si può notare il numero 2 significa che il file o la directory che stiamo provando ad aprire non è esistente`,frontmatter:{},index:25,start:446,end:471,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:XC,meta:{slide:{raw:`
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
- In questo modo possiamo dotare i nostri programmi in C di una miglior gestione degli errori e renderli maggiormente uiser friendly`,frontmatter:{},index:26,start:472,end:486,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:oO,meta:{slide:{raw:`
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

- Come si vede ora il messaggio di errore è accurato e fornisce informazioni dettagliate sul motivo del fallimento`,frontmatter:{},index:27,start:487,end:514,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:hO,meta:{slide:{raw:`
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
  - **EOF**: in caso di fallimento. errno è settato con il codice di errore appropriato`,frontmatter:{},index:28,start:515,end:532,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:bO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:29,start:533,end:559,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:CO,meta:{slide:{raw:`
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
- Ovviamente il file va aperto in scrittura`,frontmatter:{},index:30,start:560,end:573,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:TO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:31,start:574,end:603,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:NO,meta:{slide:{raw:`
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
- Se il file test.txt era già esistente sarebbe stato completamente sovrascritto dall'esecuzione del programma`,frontmatter:{},index:32,start:604,end:626,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:BO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:33,start:627,end:657,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:GO,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:34,start:658,end:683,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:tS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:35,start:684,end:706,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:cS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:36,start:707,end:733,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:_S,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:37,start:734,end:758,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:IS,meta:{slide:{raw:`
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

- Questa funzione si comporta esattamente come scanf, ma anzichè leggere da tastiera, legge un input formattato da file`,frontmatter:{},index:38,start:759,end:772,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:OS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:39,start:773,end:802,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:NS,meta:{slide:{raw:`
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
- Vediamo ora come leggere tutte le linee usando feof`,frontmatter:{},index:40,start:803,end:832,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:KS,meta:{slide:{raw:`
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
- **1 (true)**: se il puntatore ha raggiunto la fine del file quindi non è più possibile leggere`,frontmatter:{},index:41,start:833,end:847,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:ZS,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:42,start:848,end:876,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:s6,meta:{slide:{raw:`
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

<img src="/media/files_11.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:43,start:877,end:894,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:r6,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:44,start:895,end:924,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:v6,meta:{slide:{raw:`
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

- Quindi in questo caso tutte le linee del file sono state correttamente lette`,frontmatter:{},index:45,start:925,end:955,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:x6,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:46,start:956,end:971,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:F6,meta:{slide:{raw:`
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

- Consegnare il file con nome: *|cognome|_file_04.c*`,frontmatter:{},index:47,start:972,end:999,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:P6,meta:{slide:{raw:`
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


- Consegnare il file con nome: *|cognome|_file_05.c*`,frontmatter:{},index:48,start:1e3,end:1012,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:q6,meta:{slide:{raw:`
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
- **0**: in caso di errore o di impossibilità di scrivere i record su file`,frontmatter:{},index:49,start:1013,end:1036,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:X6,meta:{slide:{raw:`
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
- La possibilità di scrivere file binari ci permette di realizzare un semplice DB, o meccanismo di persistenza e quindi rendere i nostri programmi più sofisticati e funzionali`,frontmatter:{},index:50,start:1037,end:1049,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:o4,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:51,start:1050,end:1068,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:u4,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:52,start:1069,end:1098,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:h4,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:53,start:1099,end:1121,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:I4,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:54,start:1122,end:1152,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:O4,meta:{slide:{raw:`
# I File

Esercizio file_06

- Scrivere un programma in C, che letto da linea di comando il nome di città, la temperatura minima e massima, stampi a video i dati inseriti e li salvi su file binario in coda ai dati gia eventualmente presenti
- Consegnare il file con nome: *|cognome|_file_06.c*

`,title:"I File",level:1,content:`# I File

Esercizio file_06

- Scrivere un programma in C, che letto da linea di comando il nome di città, la temperatura minima e massima, stampi a video i dati inseriti e li salvi su file binario in coda ai dati gia eventualmente presenti
- Consegnare il file con nome: *|cognome|_file_06.c*`,frontmatter:{},index:55,start:1153,end:1162,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:R4,meta:{slide:{raw:`
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
- **0**: in caso di errore o di impossibilità nel legegre i record dal file`,frontmatter:{},index:56,start:1163,end:1181,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:V4,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:57,start:1182,end:1213,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:Y4,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:58,start:1214,end:1236,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:eM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:59,start:1237,end:1264,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:oM,meta:{slide:{raw:`
# I File

Esercizio file_07

- Scrivere un programma in C, che legga il file generato come output del programma 06, e stampi a video il record letto
- Consegnare il file con nome: *|cognome|_file_07.c*

`,title:"I File",level:1,content:`# I File

Esercizio file_07

- Scrivere un programma in C, che legga il file generato come output del programma 06, e stampi a video il record letto
- Consegnare il file con nome: *|cognome|_file_07.c*`,frontmatter:{},index:60,start:1265,end:1274,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:pM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:61,start:1275,end:1302,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:gM,meta:{slide:{raw:`
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

- Quindi abbiamo scritto 10 record (NUM elementi dell'array)`,frontmatter:{},index:62,start:1303,end:1325,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:EM,meta:{slide:{raw:`
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

- Come mai quest'ordine nel salvare gli elementi dell'array su file? E' giusto?`,frontmatter:{},index:63,start:1326,end:1347,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:FM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:64,start:1348,end:1377,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:PM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:65,start:1378,end:1396,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:BM,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:66,start:1397,end:1416,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:XM,meta:{slide:{raw:`
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

- Quindi scrivere 100 record da 4MByte ciascuno è circa 10 volte più veloce che scrivere 100M di record da 4 byte ciascuno`,frontmatter:{},index:67,start:1417,end:1435,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:cF,meta:{slide:{raw:`
# I File

Muoversi all'interno di un file

\`int fseek(FILE *stream, long offset, int whence);\`

fseek imposta la posizione del fiel pointer per il file puntato da *stream*

- **stream**: file pointer da utilizzare
- **offset**: sposta il puntatore al file del numero specificato di byte
- **whence**: indica la posizione da cui partire nell'operazione di seek

Nello specifico **whence** può assumere i seguenti valori:
- **SEEK_SET**: indica l'inizio del file 
- **SEEK_CUR**: indica la posizione corrente
- **SEEK_END**: indica la fine del file

restituisce:
- **0**: in caso di successo
- **-1**: in caso di errore
`,title:"I File",level:1,content:`# I File

Muoversi all'interno di un file

\`int fseek(FILE *stream, long offset, int whence);\`

fseek imposta la posizione del fiel pointer per il file puntato da *stream*

- **stream**: file pointer da utilizzare
- **offset**: sposta il puntatore al file del numero specificato di byte
- **whence**: indica la posizione da cui partire nell'operazione di seek

Nello specifico **whence** può assumere i seguenti valori:
- **SEEK_SET**: indica l'inizio del file 
- **SEEK_CUR**: indica la posizione corrente
- **SEEK_END**: indica la fine del file

restituisce:
- **0**: in caso di successo
- **-1**: in caso di errore`,frontmatter:{},index:68,start:1436,end:1458,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:hF,meta:{slide:{raw:`
# I File

Muoversi all'interno di un file

- Dato un file binario contenente un array con i numeri da 1 a 100
- Vediamo come legegre uno specifico numero partendo dall'inizio del file
  
\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define NUM 100

int main() {
    FILE *fp; int num;

    //apertura di un file

    fseek(fp, 40, SEEK_SET);
    if(fread(&num, sizeof(int), 1, fp) == 1) {
        printf("Il numero letto è: %d\\n", num);
    }
    //chiusura di un file
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Muoversi all'interno di un file

- Dato un file binario contenente un array con i numeri da 1 a 100
- Vediamo come legegre uno specifico numero partendo dall'inizio del file
  
\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define NUM 100

int main() {
    FILE *fp; int num;

    //apertura di un file

    fseek(fp, 40, SEEK_SET);
    if(fread(&num, sizeof(int), 1, fp) == 1) {
        printf("Il numero letto è: %d\\n", num);
    }
    //chiusura di un file
    return 0;
}
\`\`\``,frontmatter:{},index:69,start:1459,end:1487,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:IF,meta:{slide:{raw:`
# I File

Muoversi all'interno di un file

- Eseguiamo e verifichiamo che il risultato sia quello atteso

\`\`\`bash
# ./file

Il numero letto è: 11
\`\`\`

<br>

- Questo è corretto in quanto inizalmente abbiamo spostato (fseek) di 40 byte dall'inizio del file (SEEK_SET)
- Pertanto abbiamo saltato i primo 10 numeri (un int è 4 byte)
- Quindi ci siamo posizionati all'inizio dell'11mo numero che viene letto da fread
  `,title:"I File",level:1,content:`# I File

Muoversi all'interno di un file

- Eseguiamo e verifichiamo che il risultato sia quello atteso

\`\`\`bash
# ./file

Il numero letto è: 11
\`\`\`

<br>

- Questo è corretto in quanto inizalmente abbiamo spostato (fseek) di 40 byte dall'inizio del file (SEEK_SET)
- Pertanto abbiamo saltato i primo 10 numeri (un int è 4 byte)
- Quindi ci siamo posizionati all'inizio dell'11mo numero che viene letto da fread`,frontmatter:{},index:70,start:1488,end:1507,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:SF,meta:{slide:{raw:`
# I File

Muoversi all'interno di un file

- In modo analogo vediamo come posizionarsi a partire dalla fine del file

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define NUM 100

int main() {
    FILE *fp; int num;

    //apertura di un file

    fseek(fp, -40, SEEK_END);
    if(fread(&num, sizeof(int), 1, fp) == 1) {
        printf("Il numero letto è: %d\\n", num);
    }
    //chiusura di un file
    return 0;
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Muoversi all'interno di un file

- In modo analogo vediamo come posizionarsi a partire dalla fine del file

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define NUM 100

int main() {
    FILE *fp; int num;

    //apertura di un file

    fseek(fp, -40, SEEK_END);
    if(fread(&num, sizeof(int), 1, fp) == 1) {
        printf("Il numero letto è: %d\\n", num);
    }
    //chiusura di un file
    return 0;
}
\`\`\``,frontmatter:{},index:71,start:1508,end:1535,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:RF,meta:{slide:{raw:`
# I File

Muoversi all'interno di un file

- Eseguiamo e verifichiamo che il risultato sia quello atteso

\`\`\`bash
# ./file

Il numero letto è: 91
\`\`\`

<br>

- Questo è corretto in quanto inizalmente abbiamo spostato (fseek) di -40 byte dalla fine del file (SEEK_END)
- Pertanto abbiamo posizionato il puntatore a partire dal 10mo numero prima della file 
`,title:"I File",level:1,content:`# I File

Muoversi all'interno di un file

- Eseguiamo e verifichiamo che il risultato sia quello atteso

\`\`\`bash
# ./file

Il numero letto è: 91
\`\`\`

<br>

- Questo è corretto in quanto inizalmente abbiamo spostato (fseek) di -40 byte dalla fine del file (SEEK_END)
- Pertanto abbiamo posizionato il puntatore a partire dal 10mo numero prima della file`,frontmatter:{},index:72,start:1536,end:1554,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:VF,meta:{slide:{raw:`
# I File

Muoversi all'interno di un file

- Vediamo ancora come posizionarsi a partire dalla posizione corrente

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NUM 100

int main() {
    FILE *fp; int num;
    //apertura file

    fread(&num, sizeof(int), 1, fp);
    fread(&num, sizeof(int), 1, fp);
    fread(&num, sizeof(int), 1, fp);

    fseek(fp, 8, SEEK_CUR);
    if(fread(&num, sizeof(int), 1, fp) == 1) {
        printf("Il numero letto è: %d\\n", num);
    }
    ...
    
\`\`\`
`,title:"I File",level:1,content:`# I File

Muoversi all'interno di un file

- Vediamo ancora come posizionarsi a partire dalla posizione corrente

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NUM 100

int main() {
    FILE *fp; int num;
    //apertura file

    fread(&num, sizeof(int), 1, fp);
    fread(&num, sizeof(int), 1, fp);
    fread(&num, sizeof(int), 1, fp);

    fseek(fp, 8, SEEK_CUR);
    if(fread(&num, sizeof(int), 1, fp) == 1) {
        printf("Il numero letto è: %d\\n", num);
    }
    ...
    
\`\`\``,frontmatter:{},index:73,start:1555,end:1585,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:YF,meta:{slide:{raw:`
# I File

Muoversi all'interno di un file

\`\`\`c
    ...
    
    fseek(fp, -24, SEEK_CUR);
    if(fread(&num, sizeof(int), 1, fp) == 1) {
        printf("Il numero letto è: %d\\n", num);
    }

    //chiusura file
}
\`\`\`
`,title:"I File",level:1,content:`# I File

Muoversi all'interno di un file

\`\`\`c
    ...
    
    fseek(fp, -24, SEEK_CUR);
    if(fread(&num, sizeof(int), 1, fp) == 1) {
        printf("Il numero letto è: %d\\n", num);
    }

    //chiusura file
}
\`\`\``,frontmatter:{},index:74,start:1586,end:1603,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:tT,meta:{slide:{raw:`
# I File

Muoversi all'interno di un file

- Eseguiamo e verifichiamo che il risultato sia quello atteso

\`\`\`bash
#/file

Il numero letto è: 6
Il numero letto è: 1

\`\`\`

<br>

- Questo è corretto in quanto inizalmente con le 3 fread abbiamo spostato il puntatore di 12 dall'inizio del file
- Poi con fseek ci spostiamo di 8 byte dalla posizione corrente  (SEEK_CUR), di fatto posizionandoci all'inizio del numero 6
- Dopo aver letto il numero 6, il puntatore ora è stato spostato al 24mo byte
- Ora facendo un fseek di -24 byte dalla posizione corrente (SEEK_CUR) torniamo all'inizio del file
- Pertanto la successiva lettura, legge il numero 1
`,title:"I File",level:1,content:`# I File

Muoversi all'interno di un file

- Eseguiamo e verifichiamo che il risultato sia quello atteso

\`\`\`bash
#/file

Il numero letto è: 6
Il numero letto è: 1

\`\`\`

<br>

- Questo è corretto in quanto inizalmente con le 3 fread abbiamo spostato il puntatore di 12 dall'inizio del file
- Poi con fseek ci spostiamo di 8 byte dalla posizione corrente  (SEEK_CUR), di fatto posizionandoci all'inizio del numero 6
- Dopo aver letto il numero 6, il puntatore ora è stato spostato al 24mo byte
- Ora facendo un fseek di -24 byte dalla posizione corrente (SEEK_CUR) torniamo all'inizio del file
- Pertanto la successiva lettura, legge il numero 1`,frontmatter:{},index:75,start:1604,end:1627,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:lT,meta:{slide:{raw:`
# I File

Esercizio file_08

- Scrivere un programma in C, che legga il file generato come output del programma 06
- Il programma legge un parametro numerico da linea di comando (N)
- Il programma stampa l'N record presente nel file (assumere che N sia <= al numero di città presenti nel file)
- Consegnare il file con nome: *|cognome|_file_08.c*
`,title:"I File",level:1,content:`# I File

Esercizio file_08

- Scrivere un programma in C, che legga il file generato come output del programma 06
- Il programma legge un parametro numerico da linea di comando (N)
- Il programma stampa l'N record presente nel file (assumere che N sia <= al numero di città presenti nel file)
- Consegnare il file con nome: *|cognome|_file_08.c*`,frontmatter:{},index:76,start:1628,end:1638,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:_T,meta:{slide:{raw:`
# I File

Muoversi all'interno di un file

\`long ftell(FILE *stream);\`

ftell restituisce la posizione corrente all'interno del file puntato da *stream*

\`\`\`c
...
...
    fread(&num, sizeof(int), 1, fp);
    fread(&num, sizeof(int), 1, fp);
    fread(&num, sizeof(int), 1, fp);

    printf("Il file è in posizione: %ld\\n", ftell(fp));
...
...
\`\`\`

<br>

\`\`\`bash
# ./file

Il file è in posizione: 12
\`\`\`
`,title:"I File",level:1,content:`# I File

Muoversi all'interno di un file

\`long ftell(FILE *stream);\`

ftell restituisce la posizione corrente all'interno del file puntato da *stream*

\`\`\`c
...
...
    fread(&num, sizeof(int), 1, fp);
    fread(&num, sizeof(int), 1, fp);
    fread(&num, sizeof(int), 1, fp);

    printf("Il file è in posizione: %ld\\n", ftell(fp));
...
...
\`\`\`

<br>

\`\`\`bash
# ./file

Il file è in posizione: 12
\`\`\``,frontmatter:{},index:77,start:1639,end:1668,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:yT,meta:{slide:{raw:`
# I File

Esercizio file_09

- Scrivere un programma in C, che legga da linea di comando il nome comopleto (percorso e nome) di un file
- Il programma stampa a video la lunghezza del file 
- Consegnare il file con nome: *|cognome|_file_09.c*
`,title:"I File",level:1,content:`# I File

Esercizio file_09

- Scrivere un programma in C, che legga da linea di comando il nome comopleto (percorso e nome) di un file
- Il programma stampa a video la lunghezza del file 
- Consegnare il file con nome: *|cognome|_file_09.c*`,frontmatter:{},index:78,start:1669,end:1678,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:$T,meta:{slide:{raw:`
# I File

Esercizio file_10

- Scrivere un programma in C, che legga da linea di comando il nome comopleto (percorso e nome) di un file
- Il programma stampa a video la lunghezza del file 
- Il programma non può leggere il file di cui si vuole calcolare la lunghezza
- Consegnare il file con nome: *|cognome|_file_10.c*
`,title:"I File",level:1,content:`# I File

Esercizio file_10

- Scrivere un programma in C, che legga da linea di comando il nome comopleto (percorso e nome) di un file
- Il programma stampa a video la lunghezza del file 
- Il programma non può leggere il file di cui si vuole calcolare la lunghezza
- Consegnare il file con nome: *|cognome|_file_10.c*`,frontmatter:{},index:79,start:1679,end:1689,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:FT,meta:{slide:{raw:`
# I File

Esercizio file_11

- Scrivere un programma in linguaggio C che, permetta la gestione di un magazzino ricambi.
- Il programma, tramite un’interfaccia utente testuale (TUI – Text User Interface), deve visualizzare un menu di scelta che permetta all’utente di:
    1. inserire e memorizzare un ricambio con la relativa quantità
    2. visualizzare la lista di tutti i ricambi come inserita dall’utente, visualizzando il nome del ricambio e la quantità disponibile a magazzino
    3. visualizzare solo il ricambio N
    4. modificare il ricambio numero N
    5. uscire dal programma
`,title:"I File",level:1,content:`# I File

Esercizio file_11

- Scrivere un programma in linguaggio C che, permetta la gestione di un magazzino ricambi.
- Il programma, tramite un’interfaccia utente testuale (TUI – Text User Interface), deve visualizzare un menu di scelta che permetta all’utente di:
    1. inserire e memorizzare un ricambio con la relativa quantità
    2. visualizzare la lista di tutti i ricambi come inserita dall’utente, visualizzando il nome del ricambio e la quantità disponibile a magazzino
    3. visualizzare solo il ricambio N
    4. modificare il ricambio numero N
    5. uscire dal programma`,frontmatter:{},index:80,start:1690,end:1703,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:PT,meta:{slide:{raw:`
# I File

Esercizio file_11

- Date le dimensioni, il programma non può leggere TUTTO il magazzino da file in memoria
- Il programma deve operare solo su file ed ovviamente avere un ricambio in memoria per le necessarie manipolazioni
- Il programma terminata un’operazione, rimane in attesa della pressione di un tasto e successivamente ripropone il menu di scelta. Il programma termina solo su esplicita scelta dell’utente.
- Consegnare il file con nome: *|cognome|_file_11.c*
`,title:"I File",level:1,content:`# I File

Esercizio file_11

- Date le dimensioni, il programma non può leggere TUTTO il magazzino da file in memoria
- Il programma deve operare solo su file ed ovviamente avere un ricambio in memoria per le necessarie manipolazioni
- Il programma terminata un’operazione, rimane in attesa della pressione di un tasto e successivamente ripropone il menu di scelta. Il programma termina solo su esplicita scelta dell’utente.
- Consegnare il file con nome: *|cognome|_file_11.c*`,frontmatter:{},index:81,start:1704,end:1714,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:DT,meta:{slide:{raw:`
# I File

- Qui i link ai gist contenente tutto il codice sorgente usato in queste slide
  
- [fopen:](https://gist.github.com/profmancusoa/b925aa12bd9baaabe4f8eb5161cb73f2)
- [fclose:](https://gist.github.com/profmancusoa/c75eff492742b57461ec796f9c29dc66)
- [fprintf:](https://gist.github.com/profmancusoa/0cf0c214ded614e4f39ec827457e074e)
- [fscanf:](https://gist.github.com/profmancusoa/2d708a308d7e6ab8fd3273f63a8e60a1)
- [fwrite:](https://gist.github.com/profmancusoa/06cb6ac48e97e11bb08773df6a4bcf5a)
- [fread:](https://gist.github.com/profmancusoa/7179a3d913de2303b14b076f6eb87b6d)
- [persist array:](https://gist.github.com/profmancusoa/1efa0c3cde1e38fd8b0a9bfe05b4c669)
- [persist array2:](https://gist.github.com/profmancusoa/39f5fc4a9845a5762db38fb34b564787)
- [fseek 01:](https://gist.github.com/profmancusoa/eb0afc3c6cea43811477a52611ad060a)
- [fseek 02:](https://gist.github.com/profmancusoa/fd1b256d6e82cdcbdb2c02e432c84fdb) e [fseek 03:](https://gist.github.com/profmancusoa/60a045625dd9249538b18c57980ac761)
`,title:"I File",level:1,content:`# I File

- Qui i link ai gist contenente tutto il codice sorgente usato in queste slide
  
- [fopen:](https://gist.github.com/profmancusoa/b925aa12bd9baaabe4f8eb5161cb73f2)
- [fclose:](https://gist.github.com/profmancusoa/c75eff492742b57461ec796f9c29dc66)
- [fprintf:](https://gist.github.com/profmancusoa/0cf0c214ded614e4f39ec827457e074e)
- [fscanf:](https://gist.github.com/profmancusoa/2d708a308d7e6ab8fd3273f63a8e60a1)
- [fwrite:](https://gist.github.com/profmancusoa/06cb6ac48e97e11bb08773df6a4bcf5a)
- [fread:](https://gist.github.com/profmancusoa/7179a3d913de2303b14b076f6eb87b6d)
- [persist array:](https://gist.github.com/profmancusoa/1efa0c3cde1e38fd8b0a9bfe05b4c669)
- [persist array2:](https://gist.github.com/profmancusoa/39f5fc4a9845a5762db38fb34b564787)
- [fseek 01:](https://gist.github.com/profmancusoa/eb0afc3c6cea43811477a52611ad060a)
- [fseek 02:](https://gist.github.com/profmancusoa/fd1b256d6e82cdcbdb2c02e432c84fdb) e [fseek 03:](https://gist.github.com/profmancusoa/60a045625dd9249538b18c57980ac761)`,frontmatter:{},index:82,start:1715,end:1731,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",component:u2,meta:{layout:"end"}}],Ge=HT,li=[{name:"play",path:"/",component:zx,children:[...Ge]},{name:"print",path:"/print",component:l2},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(n){if(!ai.remote||ai.remote===n.query.password)return!0;if(ai.remote&&n.query.password===void 0){const s=prompt("Enter password");if(ai.remote===s)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};li.push({path:"/presenter/print",component:()=>Tt(()=>import("./PresenterPrint-8c618b5c.js"),["assets/PresenterPrint-8c618b5c.js","assets/NoteDisplay-0f9d4ba8.js"])}),li.push({name:"notes",path:"/notes",component:()=>Tt(()=>import("./NotesView-d66b2e68.js"),["assets/NotesView-d66b2e68.js","assets/NoteDisplay-0f9d4ba8.js"]),beforeEnter:e}),li.push({name:"presenter",path:"/presenter/:no",component:()=>Tt(()=>import("./Presenter-76a368db.js"),["assets/Presenter-76a368db.js","assets/NoteDisplay-0f9d4ba8.js","assets/DrawingControls-ef123842.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),li.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const yn=gb({history:_k("/3/files/"),routes:li});function UT(e,n,{mode:s="replace"}={}){return L({get(){const i=yn.currentRoute.value.query[e];return i==null?n??null:Array.isArray(i)?i.filter(Boolean):i},set(i){on(()=>{yn[S(s)]({query:{...yn.currentRoute.value.query,[e]:i}})})}})}const Qf=G(0);on(()=>{yn.afterEach(async()=>{await on(),Qf.value+=1})});const Zf=G(0),Nn=L(()=>yn.currentRoute.value),Ps=L(()=>Nn.value.query.print!==void 0),VT=L(()=>Nn.value.query.print==="clicks"),dt=L(()=>Nn.value.query.embedded!==void 0),vn=L(()=>Nn.value.path.startsWith("/presenter")),BT=L(()=>Nn.value.path.startsWith("/notes")),hi=L(()=>Ps.value&&!VT.value),Pl=L(()=>Nn.value.query.password),WT=L(()=>!vn.value&&(!Me.remote||Pl.value===Me.remote)),Nu=UT("clicks","0"),KT=L(()=>Ge.length-1),qT=L(()=>Nn.value.path),Ke=L(()=>parseInt(qT.value.split(/\//g).slice(-1)[0])||1);L(()=>pa(Ke.value));const dn=L(()=>Ge.find(e=>e.path===`${Ke.value}`));L(()=>{var e,n,s;return(s=(n=(e=dn.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});L(()=>{var e,n;return((n=(e=dn.value)==null?void 0:e.meta)==null?void 0:n.layout)||(Ke.value===1?"cover":"default")});const Ra=L(()=>Ge.find(e=>e.path===`${Math.min(Ge.length,Ke.value+1)}`)),YT=L(()=>Ge.find(e=>e.path===`${Math.max(1,Ke.value-1)}`)),GT=L(()=>{var e,n;return Qf.value,((n=(e=dn.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Pn=L({get(){if(hi.value)return 99999;let e=+(Nu.value||0);return isNaN(e)&&(e=0),e},set(e){Nu.value=e.toString()}}),Bo=L(()=>{var e,n;return+(((n=(e=dn.value)==null?void 0:e.meta)==null?void 0:n.clicks)??GT.value.length)}),QT=L(()=>Ke.value<Ge.length-1||Pn.value<Bo.value),ZT=L(()=>Ke.value>1||Pn.value>0),XT=L(()=>Ge.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(Fr(e,n),e),[])),JT=L(()=>Tr(XT.value,dn.value));L(()=>Lr(JT.value));const eL=L(()=>oL(Zf.value,dn.value,YT.value));ke(dn,(e,n)=>{Zf.value=Number(e==null?void 0:e.path)-Number(n==null?void 0:n.path)});function zt(){Bo.value<=Pn.value?Ti():Pn.value+=1}async function At(){Pn.value<=0?await Li():Pn.value-=1}function pa(e){return vn.value?`/presenter/${e}`:`/${e}`}function Ti(){const e=Math.min(Ge.length,Ke.value+1);return Rs(e)}async function Li(e=!0){const n=Math.max(1,Ke.value-1);await Rs(n),e&&Bo.value&&yn.replace({query:{...Nn.value.query,clicks:Bo.value}})}function Rs(e,n){return yn.push({path:pa(e),query:{...Nn.value.query,clicks:n}})}function nL(e){const n=G(0),{direction:s,distanceX:i,distanceY:o}=N1(e,{onSwipeStart(l){l.pointerType==="touch"&&(Si.value||(n.value=gl()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!n.value||Si.value)return;const r=Math.abs(i.value),c=Math.abs(o.value);r/window.innerWidth>.3||r>100?s.value==="left"?zt():At():(c/window.innerHeight>.4||c>200)&&(s.value==="down"?Li():Ti())}})}async function Rl(){const{saveAs:e}=await Tt(()=>import("./FileSaver.min-23a5d44b.js").then(n=>n.F),[]);e(typeof Me.download=="string"?Me.download:Me.exportFilename?`${Me.exportFilename}.pdf`:"/3/files/slidev-exported.pdf",`${Me.title}.pdf`)}async function tL(e){var n,s;if(e==null){const i=(s=(n=dn.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(i!=null&&i.filepath))return!1;e=`${i.filepath}:${i.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Fr(e,n,s=1){var o,l,r,c,u;const i=(l=(o=n.meta)==null?void 0:o.slide)==null?void 0:l.level;i&&i>s&&e.length>0?Fr(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:!!((r=n.meta)!=null&&r.hideInToc),title:(u=(c=n.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Tr(e,n,s=!1,i){return e.map(o=>{const l={...o,active:o.path===(n==null?void 0:n.path),hasActiveParent:s};return l.children.length>0&&(l.children=Tr(l.children,n,l.active||l.hasActiveParent,l)),i&&(l.active||l.activeParent)&&(i.activeParent=!0),l})}function Lr(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:Lr(s.children,n+1)}))}const sL={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function iL(e,n=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:sL[e.name]||e.name;if(s.includes("|")){const[i,o]=s.split("|").map(l=>l.trim());s=n?o:i}if(s)return{...e,name:s}}function oL(e,n,s){var o,l;let i=e>0?(o=s==null?void 0:s.meta)==null?void 0:o.transition:(l=n==null?void 0:n.meta)==null?void 0:l.transition;return i||(i=Me.transition),iL(i,e<0)}function aL(){const e=Me.titleTemplate.replace("%s",Me.title||"Slidev");jd({title:e,htmlAttrs:Me.htmlAttrs}),mv(`${e} - shared`),vv(`${e} - drawings`);const n=`${location.origin}_${rv()}`;function s(){BT.value||!vn.value&&!lv.includes(location.host.split(":")[0])||(vn.value?(Ys("page",+Ke.value),Ys("clicks",Pn.value)):(Ys("viewerPage",+Ke.value),Ys("viewerClicks",Pn.value)),Ys("lastUpdate",{id:n,type:vn.value?"presenter":"viewer",time:new Date().getTime()}))}yn.afterEach(s),ke(Pn,s),hv(i=>{var l;yn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=i.lastUpdate)==null?void 0:l.type)==="presenter"&&(+i.page!=+Ke.value||+Pn.value!=+i.clicks)&&yn.replace({path:pa(i.page),query:{...yn.currentRoute.value.query,clicks:i.clicks||0}})})}const lL=Ae({__name:"App",setup(e){return z(N),aL(),(n,s)=>{const i=To("RouterView"),o=To("StarportCarrier");return x(),ie(Te,null,[H(i),H(o)],64)}}}),rL=j(lL,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/App.vue"]]);function Na(e){return e!==null&&typeof e=="object"}function Nl(e,n,s=".",i){if(!Na(n))return Nl(e,{},s,i);const o=Object.assign({},n);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const r=e[l];r!=null&&(i&&i(o,l,r,s)||(Array.isArray(r)&&Array.isArray(o[l])?o[l]=[...r,...o[l]]:Na(r)&&Na(o[l])?o[l]=Nl(r,o[l],(s?`${s}.`:"")+l.toString(),i):o[l]=r))}return o}function cL(e){return(...n)=>n.reduce((s,i)=>Nl(s,i,"",e),{})}const uL=cL(),Xf=1/60*1e3,pL=typeof performance<"u"?()=>performance.now():()=>Date.now(),Jf=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(pL()),Xf);function dL(e){let n=[],s=[],i=0,o=!1,l=!1;const r=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const f=d&&o,m=f?n:s;return p&&r.add(u),m.indexOf(u)===-1&&(m.push(u),f&&o&&(i=n.length)),u},cancel:u=>{const p=s.indexOf(u);p!==-1&&s.splice(p,1),r.delete(u)},process:u=>{if(o){l=!0;return}if(o=!0,[n,s]=[s,n],s.length=0,i=n.length,i)for(let p=0;p<i;p++){const d=n[p];d(u),r.has(d)&&(c.schedule(d),e())}o=!1,l&&(l=!1,c.process(u))}};return c}const fL=40;let jl=!0,zi=!1,Dl=!1;const Ls={delta:0,timestamp:0},Vi=["read","update","preRender","render","postRender"],da=Vi.reduce((e,n)=>(e[n]=dL(()=>zi=!0),e),{}),Hl=Vi.reduce((e,n)=>{const s=da[n];return e[n]=(i,o=!1,l=!1)=>(zi||_L(),s.schedule(i,o,l)),e},{}),mL=Vi.reduce((e,n)=>(e[n]=da[n].cancel,e),{});Vi.reduce((e,n)=>(e[n]=()=>da[n].process(Ls),e),{});const hL=e=>da[e].process(Ls),em=e=>{zi=!1,Ls.delta=jl?Xf:Math.max(Math.min(e-Ls.timestamp,fL),1),Ls.timestamp=e,Dl=!0,Vi.forEach(hL),Dl=!1,zi&&(jl=!1,Jf(em))},_L=()=>{zi=!0,jl=!0,Dl||Jf(em)},nm=()=>Ls;function tm(e,n){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]]);return s}var zr=function(){},Ai=function(){};zr=function(e,n){!e&&typeof console<"u"&&console.warn(n)},Ai=function(e,n){if(!e)throw new Error(n)};const Ul=(e,n,s)=>Math.min(Math.max(s,e),n),ja=.001,gL=.01,ju=10,vL=.05,kL=1;function bL({duration:e=800,bounce:n=.25,velocity:s=0,mass:i=1}){let o,l;zr(e<=ju*1e3,"Spring duration must be 10 seconds or less");let r=1-n;r=Ul(vL,kL,r),e=Ul(gL,ju,e/1e3),r<1?(o=p=>{const d=p*r,f=d*e,m=d-s,h=Vl(p,r),_=Math.exp(-f);return ja-m/h*_},l=p=>{const f=p*r*e,m=f*s+s,h=Math.pow(r,2)*Math.pow(p,2)*e,_=Math.exp(-f),b=Vl(Math.pow(p,2),r);return(-o(p)+ja>0?-1:1)*((m-h)*_)/b}):(o=p=>{const d=Math.exp(-p*e),f=(p-s)*e+1;return-ja+d*f},l=p=>{const d=Math.exp(-p*e),f=(s-p)*(e*e);return d*f});const c=5/e,u=wL(o,l,c);if(e=e*1e3,isNaN(u))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(u,2)*i;return{stiffness:p,damping:r*2*Math.sqrt(i*p),duration:e}}}const yL=12;function wL(e,n,s){let i=s;for(let o=1;o<yL;o++)i=i-e(i)/n(i);return i}function Vl(e,n){return e*Math.sqrt(1-n*n)}const IL=["duration","bounce"],xL=["stiffness","damping","mass"];function Du(e,n){return n.some(s=>e[s]!==void 0)}function EL(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Du(e,xL)&&Du(e,IL)){const s=bL(e);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function Ar(e){var{from:n=0,to:s=1,restSpeed:i=2,restDelta:o}=e,l=tm(e,["from","to","restSpeed","restDelta"]);const r={done:!1,value:n};let{stiffness:c,damping:u,mass:p,velocity:d,duration:f,isResolvedFromDuration:m}=EL(l),h=Hu,_=Hu;function b(){const y=d?-(d/1e3):0,w=s-n,I=u/(2*Math.sqrt(c*p)),v=Math.sqrt(c/p)/1e3;if(o===void 0&&(o=Math.min(Math.abs(s-n)/100,.4)),I<1){const C=Vl(v,I);h=E=>{const M=Math.exp(-I*v*E);return s-M*((y+I*v*w)/C*Math.sin(C*E)+w*Math.cos(C*E))},_=E=>{const M=Math.exp(-I*v*E);return I*v*M*(Math.sin(C*E)*(y+I*v*w)/C+w*Math.cos(C*E))-M*(Math.cos(C*E)*(y+I*v*w)-C*w*Math.sin(C*E))}}else if(I===1)h=C=>s-Math.exp(-v*C)*(w+(y+v*w)*C);else{const C=v*Math.sqrt(I*I-1);h=E=>{const M=Math.exp(-I*v*E),D=Math.min(C*E,300);return s-M*((y+I*v*w)*Math.sinh(D)+C*w*Math.cosh(D))/C}}}return b(),{next:y=>{const w=h(y);if(m)r.done=y>=f;else{const I=_(y)*1e3,v=Math.abs(I)<=i,C=Math.abs(s-w)<=o;r.done=v&&C}return r.value=r.done?s:w,r},flipTarget:()=>{d=-d,[n,s]=[s,n],b()}}}Ar.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const Hu=e=>0,sm=(e,n,s)=>{const i=n-e;return i===0?1:(s-e)/i},Pr=(e,n,s)=>-s*e+s*n+e,im=(e,n)=>s=>Math.max(Math.min(s,n),e),_i=e=>e%1?Number(e.toFixed(5)):e,Pi=/(-)?([\d]*\.?[\d])+/g,Bl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,$L=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Bi(e){return typeof e=="string"}const Wi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},gi=Object.assign(Object.assign({},Wi),{transform:im(0,1)}),co=Object.assign(Object.assign({},Wi),{default:1}),Rr=e=>({test:n=>Bi(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),qt=Rr("deg"),vi=Rr("%"),ye=Rr("px"),Uu=Object.assign(Object.assign({},vi),{parse:e=>vi.parse(e)/100,transform:e=>vi.transform(e*100)}),Nr=(e,n)=>s=>!!(Bi(s)&&$L.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),om=(e,n,s)=>i=>{if(!Bi(i))return i;const[o,l,r,c]=i.match(Pi);return{[e]:parseFloat(o),[n]:parseFloat(l),[s]:parseFloat(r),alpha:c!==void 0?parseFloat(c):1}},as={test:Nr("hsl","hue"),parse:om("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:i=1})=>"hsla("+Math.round(e)+", "+vi.transform(_i(n))+", "+vi.transform(_i(s))+", "+_i(gi.transform(i))+")"},CL=im(0,255),Da=Object.assign(Object.assign({},Wi),{transform:e=>Math.round(CL(e))}),Ct={test:Nr("rgb","red"),parse:om("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:i=1})=>"rgba("+Da.transform(e)+", "+Da.transform(n)+", "+Da.transform(s)+", "+_i(gi.transform(i))+")"};function OL(e){let n="",s="",i="",o="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),i=e.substr(5,2),o=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),i=e.substr(3,1),o=e.substr(4,1),n+=n,s+=s,i+=i,o+=o),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Wl={test:Nr("#"),parse:OL,transform:Ct.transform},gn={test:e=>Ct.test(e)||Wl.test(e)||as.test(e),parse:e=>Ct.test(e)?Ct.parse(e):as.test(e)?as.parse(e):Wl.parse(e),transform:e=>Bi(e)?e:e.hasOwnProperty("red")?Ct.transform(e):as.transform(e)},am="${c}",lm="${n}";function SL(e){var n,s,i,o;return isNaN(e)&&Bi(e)&&((s=(n=e.match(Pi))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((o=(i=e.match(Bl))===null||i===void 0?void 0:i.length)!==null&&o!==void 0?o:0)>0}function rm(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const i=e.match(Bl);i&&(s=i.length,e=e.replace(Bl,am),n.push(...i.map(gn.parse)));const o=e.match(Pi);return o&&(e=e.replace(Pi,lm),n.push(...o.map(Wi.parse))),{values:n,numColors:s,tokenised:e}}function cm(e){return rm(e).values}function um(e){const{values:n,numColors:s,tokenised:i}=rm(e),o=n.length;return l=>{let r=i;for(let c=0;c<o;c++)r=r.replace(c<s?am:lm,c<s?gn.transform(l[c]):_i(l[c]));return r}}const ML=e=>typeof e=="number"?0:e;function FL(e){const n=cm(e);return um(e)(n.map(ML))}const Ki={test:SL,parse:cm,createTransformer:um,getAnimatableNone:FL},TL=new Set(["brightness","contrast","saturate","opacity"]);function LL(e){let[n,s]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[i]=s.match(Pi)||[];if(!i)return e;const o=s.replace(i,"");let l=TL.has(n)?1:0;return i!==s&&(l*=100),n+"("+l+o+")"}const zL=/([a-z-]*)\(.*?\)/g,Kl=Object.assign(Object.assign({},Ki),{getAnimatableNone:e=>{const n=e.match(zL);return n?n.map(LL).join(" "):e}});function Ha(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}function Vu({hue:e,saturation:n,lightness:s,alpha:i}){e/=360,n/=100,s/=100;let o=0,l=0,r=0;if(!n)o=l=r=s;else{const c=s<.5?s*(1+n):s+n-s*n,u=2*s-c;o=Ha(u,c,e+1/3),l=Ha(u,c,e),r=Ha(u,c,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(r*255),alpha:i}}const AL=(e,n,s)=>{const i=e*e,o=n*n;return Math.sqrt(Math.max(0,s*(o-i)+i))},PL=[Wl,Ct,as],Bu=e=>PL.find(n=>n.test(e)),Wu=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,pm=(e,n)=>{let s=Bu(e),i=Bu(n);Ai(!!s,Wu(e)),Ai(!!i,Wu(n));let o=s.parse(e),l=i.parse(n);s===as&&(o=Vu(o),s=Ct),i===as&&(l=Vu(l),i=Ct);const r=Object.assign({},o);return c=>{for(const u in r)u!=="alpha"&&(r[u]=AL(o[u],l[u],c));return r.alpha=Pr(o.alpha,l.alpha,c),s.transform(r)}},RL=e=>typeof e=="number",NL=(e,n)=>s=>n(e(s)),dm=(...e)=>e.reduce(NL);function fm(e,n){return RL(e)?s=>Pr(e,n,s):gn.test(e)?pm(e,n):hm(e,n)}const mm=(e,n)=>{const s=[...e],i=s.length,o=e.map((l,r)=>fm(l,n[r]));return l=>{for(let r=0;r<i;r++)s[r]=o[r](l);return s}},jL=(e,n)=>{const s=Object.assign(Object.assign({},e),n),i={};for(const o in s)e[o]!==void 0&&n[o]!==void 0&&(i[o]=fm(e[o],n[o]));return o=>{for(const l in i)s[l]=i[l](o);return s}};function Ku(e){const n=Ki.parse(e),s=n.length;let i=0,o=0,l=0;for(let r=0;r<s;r++)i||typeof n[r]=="number"?i++:n[r].hue!==void 0?l++:o++;return{parsed:n,numNumbers:i,numRGB:o,numHSL:l}}const hm=(e,n)=>{const s=Ki.createTransformer(n),i=Ku(e),o=Ku(n);return i.numHSL===o.numHSL&&i.numRGB===o.numRGB&&i.numNumbers>=o.numNumbers?dm(mm(i.parsed,o.parsed),s):(zr(!0,`Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),r=>`${r>0?n:e}`)},DL=(e,n)=>s=>Pr(e,n,s);function HL(e){if(typeof e=="number")return DL;if(typeof e=="string")return gn.test(e)?pm:hm;if(Array.isArray(e))return mm;if(typeof e=="object")return jL}function UL(e,n,s){const i=[],o=s||HL(e[0]),l=e.length-1;for(let r=0;r<l;r++){let c=o(e[r],e[r+1]);if(n){const u=Array.isArray(n)?n[r]:n;c=dm(u,c)}i.push(c)}return i}function VL([e,n],[s]){return i=>s(sm(e,n,i))}function BL(e,n){const s=e.length,i=s-1;return o=>{let l=0,r=!1;if(o<=e[0]?r=!0:o>=e[i]&&(l=i-1,r=!0),!r){let u=1;for(;u<s&&!(e[u]>o||u===i);u++);l=u-1}const c=sm(e[l],e[l+1],o);return n[l](c)}}function _m(e,n,{clamp:s=!0,ease:i,mixer:o}={}){const l=e.length;Ai(l===n.length,"Both input and output ranges must be the same length"),Ai(!i||!Array.isArray(i)||i.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const r=UL(n,i,o),c=l===2?VL(e,r):BL(e,r);return s?u=>c(Ul(e[0],e[l-1],u)):c}const fa=e=>n=>1-e(1-n),jr=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,WL=e=>n=>Math.pow(n,e),gm=e=>n=>n*n*((e+1)*n-e),KL=e=>{const n=gm(e);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},vm=1.525,qL=4/11,YL=8/11,GL=9/10,km=e=>e,Dr=WL(2),QL=fa(Dr),bm=jr(Dr),ym=e=>1-Math.sin(Math.acos(e)),wm=fa(ym),ZL=jr(wm),Hr=gm(vm),XL=fa(Hr),JL=jr(Hr),ez=KL(vm),nz=4356/361,tz=35442/1805,sz=16061/1805,Wo=e=>{if(e===1||e===0)return e;const n=e*e;return e<qL?7.5625*n:e<YL?9.075*n-9.9*e+3.4:e<GL?nz*n-tz*e+sz:10.8*e*e-20.52*e+10.72},iz=fa(Wo),oz=e=>e<.5?.5*(1-Wo(1-e*2)):.5*Wo(e*2-1)+.5;function az(e,n){return e.map(()=>n||bm).splice(0,e.length-1)}function lz(e){const n=e.length;return e.map((s,i)=>i!==0?i/(n-1):0)}function rz(e,n){return e.map(s=>s*n)}function bo({from:e=0,to:n=1,ease:s,offset:i,duration:o=300}){const l={done:!1,value:e},r=Array.isArray(n)?n:[e,n],c=rz(i&&i.length===r.length?i:lz(r),o);function u(){return _m(c,r,{ease:Array.isArray(s)?s:az(r,s)})}let p=u();return{next:d=>(l.value=p(d),l.done=d>=o,l),flipTarget:()=>{r.reverse(),p=u()}}}function cz({velocity:e=0,from:n=0,power:s=.8,timeConstant:i=350,restDelta:o=.5,modifyTarget:l}){const r={done:!1,value:n};let c=s*e;const u=n+c,p=l===void 0?u:l(u);return p!==u&&(c=p-n),{next:d=>{const f=-c*Math.exp(-d/i);return r.done=!(f>o||f<-o),r.value=r.done?p:p+f,r},flipTarget:()=>{}}}const qu={keyframes:bo,spring:Ar,decay:cz};function uz(e){if(Array.isArray(e.to))return bo;if(qu[e.type])return qu[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?bo:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?Ar:bo}function Im(e,n,s=0){return e-n-s}function pz(e,n,s=0,i=!0){return i?Im(n+-e,n,s):n-(e-n)+s}function dz(e,n,s,i){return i?e>=n+s:e<=-s}const fz=e=>{const n=({delta:s})=>e(s);return{start:()=>Hl.update(n,!0),stop:()=>mL.update(n)}};function xm(e){var n,s,{from:i,autoplay:o=!0,driver:l=fz,elapsed:r=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:f,onComplete:m,onRepeat:h,onUpdate:_}=e,b=tm(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=b,w,I=0,v=b.duration,C,E=!1,M=!0,D;const T=uz(b);!((s=(n=T).needsInterpolation)===null||s===void 0)&&s.call(n,i,y)&&(D=_m([0,100],[i,y],{clamp:!1}),i=0,y=100);const B=T(Object.assign(Object.assign({},b),{from:i,to:y}));function oe(){I++,u==="reverse"?(M=I%2===0,r=pz(r,v,p,M)):(r=Im(r,v,p),u==="mirror"&&B.flipTarget()),E=!1,h&&h()}function de(){w.stop(),m&&m()}function X(be){if(M||(be=-be),r+=be,!E){const Ie=B.next(Math.max(0,r));C=Ie.value,D&&(C=D(C)),E=M?Ie.done:r<=0}_==null||_(C),E&&(I===0&&(v??(v=r)),I<c?dz(r,v,p,M)&&oe():de())}function ve(){d==null||d(),w=l(X),w.start()}return o&&ve(),{stop:()=>{f==null||f(),w.stop()}}}function Em(e,n){return n?e*(1e3/n):0}function mz({from:e=0,velocity:n=0,min:s,max:i,power:o=.8,timeConstant:l=750,bounceStiffness:r=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:f,onComplete:m,onStop:h}){let _;function b(v){return s!==void 0&&v<s||i!==void 0&&v>i}function y(v){return s===void 0?i:i===void 0||Math.abs(s-v)<Math.abs(i-v)?s:i}function w(v){_==null||_.stop(),_=xm(Object.assign(Object.assign({},v),{driver:d,onUpdate:C=>{var E;f==null||f(C),(E=v.onUpdate)===null||E===void 0||E.call(v,C)},onComplete:m,onStop:h}))}function I(v){w(Object.assign({type:"spring",stiffness:r,damping:c,restDelta:u},v))}if(b(e))I({from:e,velocity:n,to:y(e)});else{let v=o*n+e;typeof p<"u"&&(v=p(v));const C=y(v),E=C===s?-1:1;let M,D;const T=B=>{M=D,D=B,n=Em(B-M,nm().delta),(E===1&&B>C||E===-1&&B<C)&&I({from:B,to:C,velocity:n})};w({type:"decay",from:e,velocity:n,timeConstant:l,power:o,restDelta:u,modifyTarget:p,onUpdate:b(v)?T:void 0})}return{stop:()=>_==null?void 0:_.stop()}}const $m=(e,n)=>1-3*n+3*e,Cm=(e,n)=>3*n-6*e,Om=e=>3*e,Ko=(e,n,s)=>(($m(n,s)*e+Cm(n,s))*e+Om(n))*e,Sm=(e,n,s)=>3*$m(n,s)*e*e+2*Cm(n,s)*e+Om(n),hz=1e-7,_z=10;function gz(e,n,s,i,o){let l,r,c=0;do r=n+(s-n)/2,l=Ko(r,i,o)-e,l>0?s=r:n=r;while(Math.abs(l)>hz&&++c<_z);return r}const vz=8,kz=.001;function bz(e,n,s,i){for(let o=0;o<vz;++o){const l=Sm(n,s,i);if(l===0)return n;const r=Ko(n,s,i)-e;n-=r/l}return n}const yo=11,uo=1/(yo-1);function yz(e,n,s,i){if(e===n&&s===i)return km;const o=new Float32Array(yo);for(let r=0;r<yo;++r)o[r]=Ko(r*uo,e,s);function l(r){let c=0,u=1;const p=yo-1;for(;u!==p&&o[u]<=r;++u)c+=uo;--u;const d=(r-o[u])/(o[u+1]-o[u]),f=c+d*uo,m=Sm(f,e,s);return m>=kz?bz(r,f,e,s):m===0?f:gz(r,c,c+uo,e,s)}return r=>r===0||r===1?r:Ko(l(r),n,i)}const Ua={};class wz{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,i){if(this.subscriptions.size)for(const o of this.subscriptions)o(n,s,i)}clear(){this.subscriptions.clear()}}function Yu(e){return!isNaN(parseFloat(e))}class Iz{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new wz,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:i,timestamp:o}=nm();this.lastUpdated!==o&&(this.timeDelta=i,this.lastUpdated=o),Hl.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Hl.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=Yu(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=Yu(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Em(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:i}=n(s);this.stopAnimation=i}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function xz(e){return new Iz(e)}const{isArray:Ez}=Array;function $z(){const e=G({}),n=i=>{const o=l=>{e.value[l]&&(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};i?Ez(i)?i.forEach(o):o(i):Object.keys(e.value).forEach(o)},s=(i,o,l)=>{if(e.value[i])return e.value[i];const r=xz(o);return r.onChange(c=>l[i]=c),e.value[i]=r,r};return Dv(n),{motionValues:e,get:s,stop:n}}function Cz(e){return Array.isArray(e)}function Yt(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Va(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function Oz(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Ba(){return{type:"keyframes",ease:"linear",duration:300}}function Sz(e){return{type:"keyframes",duration:800,values:e}}const Gu={default:Oz,x:Yt,y:Yt,z:Yt,rotate:Yt,rotateX:Yt,rotateY:Yt,rotateZ:Yt,scaleX:Va,scaleY:Va,scale:Va,backgroundColor:Ba,color:Ba,opacity:Ba};function Mm(e,n){let s;return Cz(n)?s=Sz:s=Gu[e]||Gu.default,{to:n,...s(n)}}const Qu={...Wi,transform:Math.round},Fm={color:gn,backgroundColor:gn,outlineColor:gn,fill:gn,stroke:gn,borderColor:gn,borderTopColor:gn,borderRightColor:gn,borderBottomColor:gn,borderLeftColor:gn,borderWidth:ye,borderTopWidth:ye,borderRightWidth:ye,borderBottomWidth:ye,borderLeftWidth:ye,borderRadius:ye,radius:ye,borderTopLeftRadius:ye,borderTopRightRadius:ye,borderBottomRightRadius:ye,borderBottomLeftRadius:ye,width:ye,maxWidth:ye,height:ye,maxHeight:ye,size:ye,top:ye,right:ye,bottom:ye,left:ye,padding:ye,paddingTop:ye,paddingRight:ye,paddingBottom:ye,paddingLeft:ye,margin:ye,marginTop:ye,marginRight:ye,marginBottom:ye,marginLeft:ye,rotate:qt,rotateX:qt,rotateY:qt,rotateZ:qt,scale:co,scaleX:co,scaleY:co,scaleZ:co,skew:qt,skewX:qt,skewY:qt,distance:ye,translateX:ye,translateY:ye,translateZ:ye,x:ye,y:ye,z:ye,perspective:ye,transformPerspective:ye,opacity:gi,originX:Uu,originY:Uu,originZ:ye,zIndex:Qu,filter:Kl,WebkitFilter:Kl,fillOpacity:gi,strokeOpacity:gi,numOctaves:Qu},Ur=e=>Fm[e];function Tm(e,n){return n&&typeof e=="number"&&n.transform?n.transform(e):e}function Mz(e,n){let s=Ur(e);return s!==Kl&&(s=Ki),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const Fz={linear:km,easeIn:Dr,easeInOut:bm,easeOut:QL,circIn:ym,circInOut:ZL,circOut:wm,backIn:Hr,backInOut:JL,backOut:XL,anticipate:ez,bounceIn:iz,bounceInOut:oz,bounceOut:Wo};function Zu(e){if(Array.isArray(e)){const[n,s,i,o]=e;return yz(n,s,i,o)}else if(typeof e=="string")return Fz[e];return e}function Tz(e){return Array.isArray(e)&&typeof e[0]!="number"}function Xu(e,n){return e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Ki.test(n)&&!n.startsWith("url("))}function Lz(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function zz({ease:e,times:n,delay:s,...i}){const o={...i};return n&&(o.offset=n),e&&(o.ease=Tz(e)?e.map(Zu):Zu(e)),s&&(o.elapsed=-s),o}function Az(e,n,s){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),Lz(n),Pz(e)||(e={...e,...Mm(s,n.to)}),{...n,...zz(e)}}function Pz({delay:e,repeat:n,repeatType:s,repeatDelay:i,from:o,...l}){return!!Object.keys(l).length}function Rz(e,n){return e[n]||e.default||e}function Nz(e,n,s,i,o){const l=Rz(i,e);let r=l.from===null||l.from===void 0?n.get():l.from;const c=Xu(e,s);r==="none"&&c&&typeof s=="string"&&(r=Mz(e,s));const u=Xu(e,r);function p(f){const m={from:r,to:s,velocity:i.velocity?i.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return l.type==="inertia"||l.type==="decay"?mz({...m,...l}):xm({...Az(l,m,e),onUpdate:h=>{m.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{i.onComplete&&i.onComplete(),o&&o(),f&&f()}})}function d(f){return n.set(s),i.onComplete&&i.onComplete(),o&&o(),f&&f(),{stop:()=>{}}}return!u||!c||l.type===!1?d:p}function jz(){const{motionValues:e,stop:n,get:s}=$z();return{motionValues:e,stop:n,push:(o,l,r,c={},u)=>{const p=r[o],d=s(o,p,r);if(c&&c.immediate){d.set(l);return}const f=Nz(o,d,l,c,u);d.start(f)}}}function Dz(e,n={},{motionValues:s,push:i,stop:o}=jz()){const l=S(n),r=G(!1);ke(s,f=>{r.value=Object.values(f).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0});const c=f=>{if(!l||!l[f])throw new Error(`The variant ${f} does not exist.`);return l[f]},u=f=>(typeof f=="string"&&(f=c(f)),Promise.all(Object.entries(f).map(([m,h])=>{if(m!=="transition")return new Promise(_=>i(m,h,e,f.transition||Mm(m,f[m]),_))}).filter(Boolean)));return{isAnimating:r,apply:u,set:f=>{const m=_l(f)?f:c(f);Object.entries(m).forEach(([h,_])=>{h!=="transition"&&i(h,_,e,{immediate:!0})})},leave:async f=>{let m;if(l&&(l.leave&&(m=l.leave),!l.leave&&l.initial&&(m=l.initial)),!m){f();return}await u(m),f()},stop:o}}const Vr=typeof window<"u",Hz=()=>Vr&&window.onpointerdown===null,Uz=()=>Vr&&window.ontouchstart===null,Vz=()=>Vr&&window.onmousedown===null;function Bz({target:e,state:n,variants:s,apply:i}){const o=S(s),l=G(!1),r=G(!1),c=G(!1),u=L(()=>{let d=[];return o&&(o.hovered&&(d=[...d,...Object.keys(o.hovered)]),o.tapped&&(d=[...d,...Object.keys(o.tapped)]),o.focused&&(d=[...d,...Object.keys(o.focused)])),d}),p=L(()=>{const d={};Object.assign(d,n.value),l.value&&o.hovered&&Object.assign(d,o.hovered),r.value&&o.tapped&&Object.assign(d,o.tapped),c.value&&o.focused&&Object.assign(d,o.focused);for(const f in d)u.value.includes(f)||delete d[f];return d});o.hovered&&(xe(e,"mouseenter",()=>l.value=!0),xe(e,"mouseleave",()=>{l.value=!1,r.value=!1}),xe(e,"mouseout",()=>{l.value=!1,r.value=!1})),o.tapped&&(Vz()&&(xe(e,"mousedown",()=>r.value=!0),xe(e,"mouseup",()=>r.value=!1)),Hz()&&(xe(e,"pointerdown",()=>r.value=!0),xe(e,"pointerup",()=>r.value=!1)),Uz()&&(xe(e,"touchstart",()=>r.value=!0),xe(e,"touchend",()=>r.value=!1))),o.focused&&(xe(e,"focus",()=>c.value=!0),xe(e,"blur",()=>c.value=!1)),ke(p,i)}function Wz({set:e,target:n,variants:s,variant:i}){const o=S(s);ke(()=>n,()=>{o&&(o.initial&&e("initial"),o.enter&&(i.value="enter"))},{immediate:!0,flush:"pre"})}function Kz({state:e,apply:n}){ke(e,s=>{s&&n(s)},{immediate:!0})}function qz({target:e,variants:n,variant:s}){const i=S(n);i&&(i.visible||i.visibleOnce)&&L1(e,([{isIntersecting:o}])=>{i.visible?o?s.value="visible":s.value="initial":i.visibleOnce&&(o&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function Yz(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&Wz(e),n.syncVariants&&Kz(e),n.visibilityHooks&&qz(e),n.eventListeners&&Bz(e)}function Lm(e={}){const n=Be({...e}),s=G({});return ke(n,()=>{const i={};for(const[o,l]of Object.entries(n)){const r=Ur(o),c=Tm(l,r);i[o]=c}s.value=i},{immediate:!0,deep:!0}),{state:n,style:s}}function Br(e,n){ke(()=>an(e),s=>{s&&n(s)},{immediate:!0})}const Gz={x:"translateX",y:"translateY",z:"translateZ"};function zm(e={},n=!0){const s=Be({...e}),i=G("");return ke(s,o=>{let l="",r=!1;if(n&&(o.x||o.y||o.z)){const c=[o.x||0,o.y||0,o.z||0].map(ye.transform).join(",");l+=`translate3d(${c}) `,r=!0}for(const[c,u]of Object.entries(o)){if(n&&(c==="x"||c==="y"||c==="z"))continue;const p=Ur(c),d=Tm(u,p);l+=`${Gz[c]||c}(${d}) `}n&&!r&&(l+="translateZ(0px) "),i.value=l.trim()},{immediate:!0,deep:!0}),{state:s,transform:i}}const Qz=["","X","Y","Z"],Zz=["perspective","translate","scale","rotate","skew"],Am=["transformPerspective","x","y","z"];Zz.forEach(e=>{Qz.forEach(n=>{const s=e+n;Am.push(s)})});const Xz=new Set(Am);function Wr(e){return Xz.has(e)}const Jz=new Set(["originX","originY","originZ"]);function Pm(e){return Jz.has(e)}function eA(e){const n={},s={};return Object.entries(e).forEach(([i,o])=>{Wr(i)||Pm(i)?n[i]=o:s[i]=o}),{transform:n,style:s}}function Rm(e){const{transform:n,style:s}=eA(e),{transform:i}=zm(n),{style:o}=Lm(s);return i.value&&(o.value.transform=i.value),o.value}function nA(e,n){let s,i;const{state:o,style:l}=Lm();return Br(e,r=>{i=r;for(const c of Object.keys(Fm))r.style[c]===null||r.style[c]===""||Wr(c)||Pm(c)||(o[c]=r.style[c]);s&&Object.entries(s).forEach(([c,u])=>r.style[c]=u),n&&n(o)}),ke(l,r=>{if(!i){s=r;return}for(const c in r)i.style[c]=r[c]},{immediate:!0}),{style:o}}function tA(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const s=i=>i.endsWith("px")||i.endsWith("deg")?parseFloat(i):isNaN(Number(i))?Number(i):i;return n.reduce((i,o)=>{if(!o)return i;const[l,r]=o.split("("),u=r.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...i,[l]:p}},{})}function sA(e,n){Object.entries(tA(n)).forEach(([s,i])=>{const o=["x","y","z"];if(s==="translate3d"){if(i===0){o.forEach(l=>e[l]=0);return}i.forEach((l,r)=>e[o[r]]=l);return}if(i=parseFloat(i),s==="translateX"){e.x=i;return}if(s==="translateY"){e.y=i;return}if(s==="translateZ"){e.z=i;return}e[s]=i})}function iA(e,n){let s,i;const{state:o,transform:l}=zm();return Br(e,r=>{i=r,r.style.transform&&sA(o,r.style.transform),s&&(r.style.transform=s),n&&n(o)}),ke(l,r=>{if(!i){s=r;return}i.style.transform=r},{immediate:!0}),{transform:o}}function oA(e,n){const s=Be({}),i=r=>Object.entries(r).forEach(([c,u])=>s[c]=u),{style:o}=nA(e,i),{transform:l}=iA(e,i);return ke(s,r=>{Object.entries(r).forEach(([c,u])=>{const p=Wr(c)?l:o;p[c]&&p[c]===u||(p[c]=u)})},{immediate:!0,deep:!0}),Br(e,()=>n&&i(n)),{motionProperties:s,style:o,transform:l}}function aA(e={}){const n=S(e),s=G();return{state:L(()=>{if(s.value)return n[s.value]}),variant:s}}function Nm(e,n={},s){const{motionProperties:i}=oA(e),{variant:o,state:l}=aA(n),r=Dz(i,n),c={target:e,variant:o,variants:n,state:l,motionProperties:i,...r};return Yz(c,s),c}const lA=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function rA(e,n){const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&_l(s.variants)&&(n.value={...n.value,...s.variants}),lA.forEach(i=>{if(i==="delay"){if(s&&s[i]&&typeof s[i]=="number"){const o=s[i];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:o,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:o,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:o,...n.value.visibleOnce.transition}))}return}i==="visible-once"&&(i="visibleOnce"),s&&s[i]&&_l(s[i])&&(n.value[i]=s[i])}))}function Wa(e){return{created:(s,i,o)=>{const l=i.value&&typeof i.value=="string"?i.value:o.key;l&&Ua[l]&&Ua[l].stop();const r=G(e||{});typeof i.value=="object"&&(r.value=i.value),rA(o,r);const c=Nm(s,r);s.motionInstance=c,l&&(Ua[l]=c)},getSSRProps(s,i){let{initial:o}=s.value||i&&(i==null?void 0:i.props)||{};o=S(o);const l=uL((e==null?void 0:e.initial)||{},o||{});return!l||Object.keys(l).length===0?void 0:{style:Rm(l)}}}}const cA={initial:{opacity:0},enter:{opacity:1}},uA={initial:{opacity:0},visible:{opacity:1}},pA={initial:{opacity:0},visibleOnce:{opacity:1}},dA={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},fA={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},mA={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},hA={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},_A={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},gA={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},vA={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},kA={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},bA={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},yA={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},wA={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},IA={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},xA={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},EA={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},$A={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},CA={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},OA={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},SA={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},MA={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},FA={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},TA={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},LA={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},zA={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},AA={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},PA={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},RA={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},NA={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ql={__proto__:null,fade:cA,fadeVisible:uA,fadeVisibleOnce:pA,pop:dA,popVisible:fA,popVisibleOnce:mA,rollBottom:xA,rollLeft:hA,rollRight:vA,rollTop:yA,rollVisibleBottom:EA,rollVisibleLeft:_A,rollVisibleOnceBottom:$A,rollVisibleOnceLeft:gA,rollVisibleOnceRight:bA,rollVisibleOnceTop:IA,rollVisibleRight:kA,rollVisibleTop:wA,slideBottom:PA,slideLeft:CA,slideRight:MA,slideTop:LA,slideVisibleBottom:RA,slideVisibleLeft:OA,slideVisibleOnceBottom:NA,slideVisibleOnceLeft:SA,slideVisibleOnceRight:TA,slideVisibleOnceTop:AA,slideVisibleRight:FA,slideVisibleTop:zA},jA=Ae({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var c;const n=R_(),s=Be({});if(!e.is&&!n.default)return()=>wn("div",{});const i=L(()=>{let u;return e.preset&&(u=ql[e.preset]),u}),o=L(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=L(()=>{const u={...o.value,...i.value||{},...e.variants||{}};return e.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(e.delay)),u}),r=L(()=>{if(!e.is)return;let u=e.is;return typeof r.value=="string"&&!gp(u)&&(u=To(u)),u});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const u=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var f,m,h;(f=p.variants)!=null&&f.enter&&p.apply("enter"),(m=p.variants)!=null&&m.visible&&p.apply("visible"),(h=p.variants)!=null&&h.visibleOnce&&p.apply("visibleOnce")},10)};oa(()=>Object.entries(s).forEach(([p,d])=>u(d)))}return{slots:n,component:r,motionConfig:l,instances:s}},render({slots:e,motionConfig:n,instances:s,component:i}){var c;const o=Rm(n.initial||{}),l=(u,p)=>(u.props||(u.props={}),u.props.style=o,u.props.onVnodeMounted=({el:d})=>{const f=Nm(d,n);s[p]=f},u);if(i){const u=wn(i,void 0,e);return l(u,0),u}return(((c=e.default)==null?void 0:c.call(e))||[]).map((u,p)=>l(u,p))}});function DA(e){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",i=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(i,o=>s.charAt(n.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const HA={install(e,n){if(e.directive("motion",Wa()),e.component("Motion",jA),!n||n&&!n.excludePresets)for(const s in ql){const i=ql[s];e.directive(`motion-${DA(s)}`,Wa(i))}if(n&&n.directives)for(const s in n.directives){const i=n.directives[s];i.initial,e.directive(`motion-${s}`,Wa(i))}}};var Ju;const ki=typeof window<"u",UA=Object.prototype.toString,VA=e=>UA.call(e)==="[object Object]";ki&&((Ju=window==null?void 0:window.navigator)!=null&&Ju.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function BA(e){return Jl()?(yp(e),!0):!1}function WA(e){var n;const s=S(e);return(n=s==null?void 0:s.$el)!=null?n:s}const KA=ki?window:void 0,ep=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},np="__vueuse_ssr_handlers__";ep[np]=ep[np]||{};function qA(e,n={}){const{immediate:s=!0,window:i=KA}=n,o=G(!1);let l=null;function r(){!o.value||!i||(e(),l=i.requestAnimationFrame(r))}function c(){!o.value&&i&&(o.value=!0,r())}function u(){o.value=!1,l!=null&&i&&(i.cancelAnimationFrame(l),l=null)}return s&&c(),BA(u),{isActive:o,pause:u,resume:c}}var tp;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(tp||(tp={}));const ma="vue-starport-injection",jm="vue-starport-options",YA={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Dm={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var GA=Object.defineProperty,qo=Object.getOwnPropertySymbols,Hm=Object.prototype.hasOwnProperty,Um=Object.prototype.propertyIsEnumerable,sp=(e,n,s)=>n in e?GA(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,QA=(e,n)=>{for(var s in n||(n={}))Hm.call(n,s)&&sp(e,s,n[s]);if(qo)for(var s of qo(n))Um.call(n,s)&&sp(e,s,n[s]);return e},ip=(e,n)=>{var s={};for(var i in e)Hm.call(e,i)&&n.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&qo)for(var i of qo(e))n.indexOf(i)<0&&Um.call(e,i)&&(s[i]=e[i]);return s};const ZA=Ae({name:"StarportProxy",props:QA({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Dm),setup(e,n){const s=z(ma),i=L(()=>s.getInstance(e.port,e.component)),o=G(),l=i.value.generateId(),r=G(!1);return i.value.isVisible||(i.value.land(),r.value=!0),Ht(async()=>{if(i.value.el){console.error(`[Vue Starport] Multiple proxies of "${i.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(i.value.el=o.value,await on(),r.value=!0,i.value.rect.update(),i.value.rect.width===0||i.value.rect.height===0){const c=i.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${i.value.componentName}" (port "${e.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",i.value.el),console.warn("rect:",i.value.rect)}}),Di(async()=>{i.value.rect.update(),i.value.liftOff(),i.value.el=void 0,r.value=!1,!i.value.options.keepAlive&&(await on(),await on(),!i.value.el&&s.dispose(i.value.port))}),ke(()=>e,async()=>{i.value.props&&await on();const c=e,{props:u}=c,p=ip(c,["props"]);i.value.props=u||{},i.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=e,{initialProps:u,mountedProps:p}=c,d=ip(c,["initialProps","mountedProps"]),f=ue(d,(r.value?p:u)||{});return wn("div",ue(f,{id:l,ref:o,"data-starport-proxy":i.value.componentId,"data-starport-landed":i.value.isLanded?"true":void 0,"data-starport-floating":i.value.isLanded?void 0:"true"}),n.slots.default?wn(n.slots.default):void 0)}}});var XA=Object.defineProperty,JA=Object.defineProperties,e5=Object.getOwnPropertyDescriptors,op=Object.getOwnPropertySymbols,n5=Object.prototype.hasOwnProperty,t5=Object.prototype.propertyIsEnumerable,ap=(e,n,s)=>n in e?XA(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,s5=(e,n)=>{for(var s in n||(n={}))n5.call(n,s)&&ap(e,s,n[s]);if(op)for(var s of op(n))t5.call(n,s)&&ap(e,s,n[s]);return e},i5=(e,n)=>JA(e,e5(n));const o5=Ae({name:"Starport",inheritAttrs:!0,props:Dm,setup(e,n){const s=G(!1);return Ht(()=>{if(s.value=!0,!z(ma))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var r,c;const i=(c=(r=n.slots).default)==null?void 0:c.call(r);if(!i)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(i.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${i.length}`);const o=i[0];let l=o.type;return(!VA(l)||Nt(l))&&(l={render(){return i}}),wn(ZA,i5(s5({},e),{key:e.port,component:Jo(l),props:o.props}))}}});function a5(e){const n=Be({height:0,width:0,left:0,top:0,update:i,listen:l,pause:r,margin:"0px",padding:"0px"}),s=ki?document.documentElement||document.body:void 0;function i(){if(!ki)return;const c=WA(e);if(!c)return;const{height:u,width:p,left:d,top:f}=c.getBoundingClientRect(),m=window.getComputedStyle(c),h=m.margin,_=m.padding;Object.assign(n,{height:u,width:p,left:d,top:s.scrollTop+f,margin:h,padding:_})}const o=qA(i,{immediate:!1});function l(){ki&&(i(),o.resume())}function r(){o.pause()}return n}let l5=(e,n=21)=>(s=n)=>{let i="",o=s;for(;o--;)i+=e[Math.random()*e.length|0];return i};const lp=l5("abcdefghijklmnopqrstuvwxyz",5);function rp(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function r5(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var c5=Object.defineProperty,cp=Object.getOwnPropertySymbols,u5=Object.prototype.hasOwnProperty,p5=Object.prototype.propertyIsEnumerable,up=(e,n,s)=>n in e?c5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Ka=(e,n)=>{for(var s in n||(n={}))u5.call(n,s)&&up(e,s,n[s]);if(cp)for(var s of cp(n))p5.call(n,s)&&up(e,s,n[s]);return e};function d5(e,n,s={}){const i=r5(n),o=rp(i)||lp(),l=G(),r=G(null),c=G(!1),u=G(!1),p=ah(!0),d=G({}),f=L(()=>Ka(Ka(Ka({},YA),s),d.value)),m=G(0);let h;p.run(()=>{h=a5(l),ke(l,async w=>{w&&(u.value=!0),await on(),l.value||(u.value=!1)})});const _=rp(e);function b(){return`starport-${o}-${_}-${lp()}`}const y=b();return Be({el:l,id:y,port:e,props:r,rect:h,scope:p,isLanded:c,isVisible:u,options:f,liftOffTime:m,component:n,componentName:i,componentId:o,generateId:b,setLocalOptions(w={}){d.value=JSON.parse(JSON.stringify(w))},elRef(){return l},liftOff(){c.value&&(c.value=!1,m.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function f5(e){const n=Be(new Map);function s(o,l){let r=n.get(o);return r||(r=d5(o,l,e),n.set(o,r)),r.component=l,r}function i(o){var l;(l=n.get(o))==null||l.scope.stop(),n.delete(o)}return{portMap:n,dispose:i,getInstance:s}}var m5=Object.defineProperty,h5=Object.defineProperties,_5=Object.getOwnPropertyDescriptors,pp=Object.getOwnPropertySymbols,g5=Object.prototype.hasOwnProperty,v5=Object.prototype.propertyIsEnumerable,dp=(e,n,s)=>n in e?m5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,k5=(e,n)=>{for(var s in n||(n={}))g5.call(n,s)&&dp(e,s,n[s]);if(pp)for(var s of pp(n))v5.call(n,s)&&dp(e,s,n[s]);return e},b5=(e,n)=>h5(e,_5(n));const y5=Ae({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=z(ma);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=L(()=>n.getInstance(e.port,e.component)),i=L(()=>{var r;return((r=s.value.el)==null?void 0:r.id)||s.value.id}),o=L(()=>{const r=Date.now()-s.value.liftOffTime,c=Math.max(0,s.value.options.duration-r),u=s.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!s.value.isVisible||!s.value.el?b5(k5({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:s.value.options.easing}),p)}),l={onTransitionend(r){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${r.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const r=!!(s.value.isLanded&&s.value.el);return wn("div",{style:o.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},wn(pg,{to:r?`#${i.value}`:"body",disabled:!r},wn(s.value.component,ue(l,s.value.props))))}}}),w5=Ae({name:"StarportCarrier",setup(e,{slots:n}){const s=f5(z(jm,{}));return Mn().appContext.app.provide(ma,s),()=>{var o;return[(o=n.default)==null?void 0:o.call(n),Array.from(s.portMap.entries()).map(([l,{component:r}])=>wn(y5,{key:l,port:l,component:r}))]}}});function I5(e={}){return{install(n){n.provide(jm,e),n.component("Starport",o5),n.component("StarportCarrier",w5)}}}function x5(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(HA),e.app.use(I5({keepAlive:!0}))}function In(e,n,s){var i;return((i=e.instance)==null?void 0:i.$).provides[n]??s}function E5(){return{install(e){e.directive("click",{name:"v-click",mounted(n,s){var d,f,m,h,_,b;if(hi.value||(d=In(s,pi))!=null&&d.value)return;const i=In(s,es),o=In(s,ui),l=In(s,ml),r=s.modifiers.hide!==!1&&s.modifiers.hide!=null,c=s.modifiers.fade!==!1&&s.modifiers.fade!=null,u=((f=i==null?void 0:i.value)==null?void 0:f.length)||0,p=c?av:$a;if(i&&!((m=i==null?void 0:i.value)!=null&&m.includes(n))&&i.value.push(n),s.value==null&&(s.value=(h=i==null?void 0:i.value)==null?void 0:h.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((_=i==null?void 0:i.value)==null?void 0:_.length)||0)+Number(s.value)),!(l!=null&&l.value.has(s.value)))l==null||l.value.set(s.value,[n]);else if(!((b=l==null?void 0:l.value.get(s.value))!=null&&b.includes(n))){const y=(l==null?void 0:l.value.get(s.value))||[];l==null||l.value.set(s.value,[n].concat(y))}n==null||n.classList.toggle(Qt,!0),o&&ke(o,()=>{const y=(o==null?void 0:o.value)??0,w=s.value!=null?y>=s.value:y>u;n.classList.contains(Ca)||n.classList.toggle(p,!w),r!==!1&&r!==void 0&&n.classList.toggle(p,w),n.classList.toggle(qs,!1);const I=l==null?void 0:l.value.get(y);I==null||I.forEach((v,C)=>{v.classList.toggle(so,!1),C===I.length-1?v.classList.toggle(qs,!0):v.classList.toggle(so,!0)}),n.classList.contains(qs)||n.classList.toggle(so,w)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(Qt,!1);const i=In(s,es);i!=null&&i.value&&hl(i.value,n)}}),e.directive("after",{name:"v-after",mounted(n,s){var c,u,p;if(hi.value||(c=In(s,pi))!=null&&c.value)return;const i=In(s,es),o=In(s,ui),l=In(s,ml),r=i==null?void 0:i.value.length;s.value==null&&(s.value=i==null?void 0:i.value.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((u=i==null?void 0:i.value)==null?void 0:u.length)||0)+Number(s.value)),l!=null&&l.value.has(s.value)?(p=l==null?void 0:l.value.get(s.value))==null||p.push(n):l==null||l.value.set(s.value,[n]),n==null||n.classList.toggle(Qt,!0),o&&ke(o,()=>{const d=(o.value??0)>=(s.value??r??0);n.classList.contains(Ca)||n.classList.toggle($a,!d),n.classList.toggle(qs,!1),n.classList.contains(qs)||n.classList.toggle(so,d)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(Qt,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,s){var r,c,u;if(hi.value||(r=In(s,pi))!=null&&r.value)return;const i=In(s,es),o=In(s,ui),l=((c=i==null?void 0:i.value)==null?void 0:c.length)||0;i&&!((u=i==null?void 0:i.value)!=null&&u.includes(n))&&i.value.push(n),n==null||n.classList.toggle(Qt,!0),o&&ke(o,()=>{const p=(o==null?void 0:o.value)??0,d=s.value!=null?p>=s.value:p>l;n.classList.toggle($a,d),n.classList.toggle(Ca,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(Qt,!1);const i=In(s,es);i!=null&&i.value&&hl(i.value,n)}})}}}function $5(e,n){const s=qf(e),i=Yf(n,s.currentRoute,s.currentPage);return{nav:{...s,...i},configs:Me,themeConfigs:L(()=>Me.themeConfig)}}function C5(){return{install(e){const n=$5(Nn,Pn);e.provide(N,Be(n))}}}const Hs=c0(rL);Hs.use(yn);Hs.use(sv());Hs.use(E5());Hs.use(C5());x5({app:Hs,router:yn});Hs.mount("#app");export{Fx as $,VI as A,G as B,L5 as C,dn as D,We as E,Te as F,uy as G,nL as H,Pn as I,Bo as J,QT as K,Ra as L,Ht as M,Be as N,F5 as O,z5 as P,ke as Q,O as R,$f as S,Fe as T,pn as U,Iy as V,O5 as W,S5 as X,Si as Y,La as Z,j as _,N as a,$r as a0,Cr as a1,Ke as a2,bx as a3,xw as a4,M5 as a5,ot as a6,ei as a7,os as a8,et as a9,Cl as aa,Zb as ab,Xb as ac,Jb as ad,ny as ae,Jp as af,Sd as ag,A5 as ah,hn as ai,ro as aj,oI as ak,Dd as al,ty as am,Di as an,jd as b,Me as c,Ae as d,Wh as e,ie as f,t as g,S as h,z as i,Ge as j,KT as k,a as l,H as m,nn as n,x as o,we as p,br as q,Ns as r,qn as s,kn as t,T5 as u,L as v,Oa as w,P as x,vf as y,YI as z};
