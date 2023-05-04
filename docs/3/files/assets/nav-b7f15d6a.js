function St(n,t){const s=Object.create(null),o=n.split(",");for(let a=0;a<o.length;a++)s[o[a]]=!0;return t?a=>!!s[a.toLowerCase()]:a=>!!s[a]}function en(n){if(ce(n)){const t={};for(let s=0;s<n.length;s++){const o=n[s],a=Ue(o)?up(o):en(o);if(a)for(const l in a)t[l]=a[l]}return t}else{if(Ue(n))return n;if(Oe(n))return n}}const lp=/;(?![^(]*\))/g,rp=/:([^]+)/,cp=/\/\*.*?\*\//gs;function up(n){const t={};return n.replace(cp,"").split(lp).forEach(s=>{if(s){const o=s.split(rp);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function We(n){let t="";if(Ue(n))t=n;else if(ce(n))for(let s=0;s<n.length;s++){const o=We(n[s]);o&&(t+=o+" ")}else if(Oe(n))for(const s in n)n[s]&&(t+=s+" ");return t.trim()}function W(n){if(!n)return null;let{class:t,style:s}=n;return t&&!Ue(t)&&(n.class=We(t)),s&&(n.style=en(s)),n}const pp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",dp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",fp=St(pp),mp=St(dp),hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_p=St(hp);function Hr(n){return!!n||n===""}const En=n=>Ue(n)?n:n==null?"":ce(n)||Oe(n)&&(n.toString===Wr||!me(n.toString))?JSON.stringify(n,Br,2):String(n),Br=(n,t)=>t&&t.__v_isRef?Br(n,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,a])=>(s[`${o} =>`]=a,s),{})}:jr(t)?{[`Set(${t.size})`]:[...t.values()]}:Oe(t)&&!ce(t)&&!Vr(t)?String(t):t,Pe=Object.freeze({}),fs=Object.freeze([]),mn=()=>{},Kr=()=>!1,gp=/^on[^a-z]/,li=n=>gp.test(n),Mi=n=>n.startsWith("onUpdate:"),Ke=Object.assign,pa=(n,t)=>{const s=n.indexOf(t);s>-1&&n.splice(s,1)},vp=Object.prototype.hasOwnProperty,we=(n,t)=>vp.call(n,t),ce=Array.isArray,Ut=n=>ri(n)==="[object Map]",jr=n=>ri(n)==="[object Set]",kp=n=>ri(n)==="[object RegExp]",me=n=>typeof n=="function",Ue=n=>typeof n=="string",da=n=>typeof n=="symbol",Oe=n=>n!==null&&typeof n=="object",fa=n=>Oe(n)&&me(n.then)&&me(n.catch),Wr=Object.prototype.toString,ri=n=>Wr.call(n),ma=n=>ri(n).slice(8,-1),Vr=n=>ri(n)==="[object Object]",ha=n=>Ue(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ei=St(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bp=St("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Yi=n=>{const t=Object.create(null);return s=>t[s]||(t[s]=n(s))},yp=/-(\w)/g,qn=Yi(n=>n.replace(yp,(t,s)=>s?s.toUpperCase():"")),wp=/\B([A-Z])/g,at=Yi(n=>n.replace(wp,"-$1").toLowerCase()),Gt=Yi(n=>n.charAt(0).toUpperCase()+n.slice(1)),Tt=Yi(n=>n?`on${Gt(n)}`:""),qs=(n,t)=>!Object.is(n,t),vt=(n,t)=>{for(let s=0;s<n.length;s++)n[s](t)},Ti=(n,t,s)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:s})},So=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Ip=n=>{const t=Ue(n)?Number(n):NaN;return isNaN(t)?n:t};let nl;const qr=()=>nl||(nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ai(n,...t){console.warn(`[Vue warn] ${n}`,...t)}let vn;class Qr{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vn,!t&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=vn;try{return vn=this,t()}finally{vn=s}}else Ai("cannot run an inactive effect scope.")}on(){vn=this}off(){vn=this.parent}stop(t){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function UC(n){return new Qr(n)}function xp(n,t=vn){t&&t.active&&t.effects.push(n)}function Gr(){return vn}function Ep(n){vn?vn.cleanups.push(n):Ai("onScopeDispose() is called when there is no active effect scope to be associated with.")}const _a=n=>{const t=new Set(n);return t.w=0,t.n=0,t},Yr=n=>(n.w&Ct)>0,Zr=n=>(n.n&Ct)>0,$p=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=Ct},Cp=n=>{const{deps:t}=n;if(t.length){let s=0;for(let o=0;o<t.length;o++){const a=t[o];Yr(a)&&!Zr(a)?a.delete(n):t[s++]=a,a.w&=~Ct,a.n&=~Ct}t.length=s}},Pi=new WeakMap;let As=0,Ct=1;const Oo=30;let un;const Ht=Symbol("iterate"),Lo=Symbol("Map key iterate");class ga{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,xp(this,o)}run(){if(!this.active)return this.fn();let t=un,s=yt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=un,un=this,yt=!0,Ct=1<<++As,As<=Oo?$p(this):tl(this),this.fn()}finally{As<=Oo&&Cp(this),Ct=1<<--As,un=this.parent,yt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(tl(this),this.onStop&&this.onStop(),this.active=!1)}}function tl(n){const{deps:t}=n;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(n);t.length=0}}let yt=!0;const Xr=[];function Jt(){Xr.push(yt),yt=!1}function es(){const n=Xr.pop();yt=n===void 0?!0:n}function hn(n,t,s){if(yt&&un){let o=Pi.get(n);o||Pi.set(n,o=new Map);let a=o.get(s);a||o.set(s,a=_a()),Jr(a,{effect:un,target:n,type:t,key:s})}}function Jr(n,t){let s=!1;As<=Oo?Zr(n)||(n.n|=Ct,s=!Yr(n)):s=!n.has(un),s&&(n.add(un),un.deps.push(n),un.onTrack&&un.onTrack(Object.assign({effect:un},t)))}function lt(n,t,s,o,a,l){const r=Pi.get(n);if(!r)return;let c=[];if(t==="clear")c=[...r.values()];else if(s==="length"&&ce(n)){const p=Number(o);r.forEach((d,f)=>{(f==="length"||f>=p)&&c.push(d)})}else switch(s!==void 0&&c.push(r.get(s)),t){case"add":ce(n)?ha(s)&&c.push(r.get("length")):(c.push(r.get(Ht)),Ut(n)&&c.push(r.get(Lo)));break;case"delete":ce(n)||(c.push(r.get(Ht)),Ut(n)&&c.push(r.get(Lo)));break;case"set":Ut(n)&&c.push(r.get(Ht));break}const u={target:n,type:t,key:s,newValue:o,oldValue:a,oldTarget:l};if(c.length===1)c[0]&&Mo(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Mo(_a(p),u)}}function Mo(n,t){const s=ce(n)?n:[...n];for(const o of s)o.computed&&sl(o,t);for(const o of s)o.computed||sl(o,t)}function sl(n,t){(n!==un||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(Ke({effect:n},t)),n.scheduler?n.scheduler():n.run())}function zp(n,t){var s;return(s=Pi.get(n))===null||s===void 0?void 0:s.get(t)}const Fp=St("__proto__,__v_isRef,__isVue"),ec=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(da)),Sp=Zi(),Op=Zi(!1,!0),Lp=Zi(!0),Mp=Zi(!0,!0),il=Tp();function Tp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...s){const o=he(this);for(let l=0,r=this.length;l<r;l++)hn(o,"get",l+"");const a=o[t](...s);return a===-1||a===!1?o[t](...s.map(he)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...s){Jt();const o=he(this)[t].apply(this,s);return es(),o}}),n}function Ap(n){const t=he(this);return hn(t,"has",n),t.hasOwnProperty(n)}function Zi(n=!1,t=!1){return function(o,a,l){if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&l===(n?t?rc:lc:t?ac:oc).get(o))return o;const r=ce(o);if(!n){if(r&&we(il,a))return Reflect.get(il,a,l);if(a==="hasOwnProperty")return Ap}const c=Reflect.get(o,a,l);return(da(a)?ec.has(a):Fp(a))||(n||hn(o,"get",a),t)?c:Ce(c)?r&&ha(a)?c:c.value:Oe(c)?n?jn(c):nn(c):c}}const Pp=nc(),Np=nc(!0);function nc(n=!1){return function(s,o,a,l){let r=s[o];if(zt(r)&&Ce(r)&&!Ce(a))return!1;if(!n&&(!Ni(a)&&!zt(a)&&(r=he(r),a=he(a)),!ce(s)&&Ce(r)&&!Ce(a)))return r.value=a,!0;const c=ce(s)&&ha(o)?Number(o)<s.length:we(s,o),u=Reflect.set(s,o,a,l);return s===he(l)&&(c?qs(a,r)&&lt(s,"set",o,a,r):lt(s,"add",o,a)),u}}function Rp(n,t){const s=we(n,t),o=n[t],a=Reflect.deleteProperty(n,t);return a&&s&&lt(n,"delete",t,void 0,o),a}function Dp(n,t){const s=Reflect.has(n,t);return(!da(t)||!ec.has(t))&&hn(n,"has",t),s}function Up(n){return hn(n,"iterate",ce(n)?"length":Ht),Reflect.ownKeys(n)}const tc={get:Sp,set:Pp,deleteProperty:Rp,has:Dp,ownKeys:Up},sc={get:Lp,set(n,t){return Ai(`Set operation on key "${String(t)}" failed: target is readonly.`,n),!0},deleteProperty(n,t){return Ai(`Delete operation on key "${String(t)}" failed: target is readonly.`,n),!0}},Hp=Ke({},tc,{get:Op,set:Np}),Bp=Ke({},sc,{get:Mp}),va=n=>n,Xi=n=>Reflect.getPrototypeOf(n);function _i(n,t,s=!1,o=!1){n=n.__v_raw;const a=he(n),l=he(t);s||(t!==l&&hn(a,"get",t),hn(a,"get",l));const{has:r}=Xi(a),c=o?va:s?ba:Qs;if(r.call(a,t))return c(n.get(t));if(r.call(a,l))return c(n.get(l));n!==a&&n.get(t)}function gi(n,t=!1){const s=this.__v_raw,o=he(s),a=he(n);return t||(n!==a&&hn(o,"has",n),hn(o,"has",a)),n===a?s.has(n):s.has(n)||s.has(a)}function vi(n,t=!1){return n=n.__v_raw,!t&&hn(he(n),"iterate",Ht),Reflect.get(n,"size",n)}function ol(n){n=he(n);const t=he(this);return Xi(t).has.call(t,n)||(t.add(n),lt(t,"add",n,n)),this}function al(n,t){t=he(t);const s=he(this),{has:o,get:a}=Xi(s);let l=o.call(s,n);l?ic(s,o,n):(n=he(n),l=o.call(s,n));const r=a.call(s,n);return s.set(n,t),l?qs(t,r)&&lt(s,"set",n,t,r):lt(s,"add",n,t),this}function ll(n){const t=he(this),{has:s,get:o}=Xi(t);let a=s.call(t,n);a?ic(t,s,n):(n=he(n),a=s.call(t,n));const l=o?o.call(t,n):void 0,r=t.delete(n);return a&&lt(t,"delete",n,void 0,l),r}function rl(){const n=he(this),t=n.size!==0,s=Ut(n)?new Map(n):new Set(n),o=n.clear();return t&&lt(n,"clear",void 0,void 0,s),o}function ki(n,t){return function(o,a){const l=this,r=l.__v_raw,c=he(r),u=t?va:n?ba:Qs;return!n&&hn(c,"iterate",Ht),r.forEach((p,d)=>o.call(a,u(p),u(d),l))}}function bi(n,t,s){return function(...o){const a=this.__v_raw,l=he(a),r=Ut(l),c=n==="entries"||n===Symbol.iterator&&r,u=n==="keys"&&r,p=a[n](...o),d=s?va:t?ba:Qs;return!t&&hn(l,"iterate",u?Lo:Ht),{next(){const{value:f,done:m}=p.next();return m?{value:f,done:m}:{value:c?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function pt(n){return function(...t){{const s=t[0]?`on key "${t[0]}" `:"";console.warn(`${Gt(n)} operation ${s}failed: target is readonly.`,he(this))}return n==="delete"?!1:this}}function Kp(){const n={get(l){return _i(this,l)},get size(){return vi(this)},has:gi,add:ol,set:al,delete:ll,clear:rl,forEach:ki(!1,!1)},t={get(l){return _i(this,l,!1,!0)},get size(){return vi(this)},has:gi,add:ol,set:al,delete:ll,clear:rl,forEach:ki(!1,!0)},s={get(l){return _i(this,l,!0)},get size(){return vi(this,!0)},has(l){return gi.call(this,l,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:ki(!0,!1)},o={get(l){return _i(this,l,!0,!0)},get size(){return vi(this,!0)},has(l){return gi.call(this,l,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=bi(l,!1,!1),s[l]=bi(l,!0,!1),t[l]=bi(l,!1,!0),o[l]=bi(l,!0,!0)}),[n,s,t,o]}const[jp,Wp,Vp,qp]=Kp();function Ji(n,t){const s=t?n?qp:Vp:n?Wp:jp;return(o,a,l)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?o:Reflect.get(we(s,a)&&a in o?s:o,a,l)}const Qp={get:Ji(!1,!1)},Gp={get:Ji(!1,!0)},Yp={get:Ji(!0,!1)},Zp={get:Ji(!0,!0)};function ic(n,t,s){const o=he(s);if(o!==s&&t.call(n,o)){const a=ma(n);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const oc=new WeakMap,ac=new WeakMap,lc=new WeakMap,rc=new WeakMap;function Xp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jp(n){return n.__v_skip||!Object.isExtensible(n)?0:Xp(ma(n))}function nn(n){return zt(n)?n:eo(n,!1,tc,Qp,oc)}function ed(n){return eo(n,!1,Hp,Gp,ac)}function jn(n){return eo(n,!0,sc,Yp,lc)}function ps(n){return eo(n,!0,Bp,Zp,rc)}function eo(n,t,s,o,a){if(!Oe(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(t&&n.__v_isReactive))return n;const l=a.get(n);if(l)return l;const r=Jp(n);if(r===0)return n;const c=new Proxy(n,r===2?o:s);return a.set(n,c),c}function Bt(n){return zt(n)?Bt(n.__v_raw):!!(n&&n.__v_isReactive)}function zt(n){return!!(n&&n.__v_isReadonly)}function Ni(n){return!!(n&&n.__v_isShallow)}function Ri(n){return Bt(n)||zt(n)}function he(n){const t=n&&n.__v_raw;return t?he(t):n}function ka(n){return Ti(n,"__v_skip",!0),n}const Qs=n=>Oe(n)?nn(n):n,ba=n=>Oe(n)?jn(n):n;function ya(n){yt&&un&&(n=he(n),Jr(n.dep||(n.dep=_a()),{target:n,type:"get",key:"value"}))}function wa(n,t){n=he(n);const s=n.dep;s&&Mo(s,{target:n,type:"set",key:"value",newValue:t})}function Ce(n){return!!(n&&n.__v_isRef===!0)}function le(n){return cc(n,!1)}function Qn(n){return cc(n,!0)}function cc(n,t){return Ce(n)?n:new nd(n,t)}class nd{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:he(t),this._value=s?t:Qs(t)}get value(){return ya(this),this._value}set value(t){const s=this.__v_isShallow||Ni(t)||zt(t);t=s?t:he(t),qs(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Qs(t),wa(this,t))}}function w(n){return Ce(n)?n.value:n}const td={get:(n,t,s)=>w(Reflect.get(n,t,s)),set:(n,t,s,o)=>{const a=n[t];return Ce(a)&&!Ce(s)?(a.value=s,!0):Reflect.set(n,t,s,o)}};function uc(n){return Bt(n)?n:new Proxy(n,td)}class sd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>ya(this),()=>wa(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function pc(n){return new sd(n)}function id(n){Ri(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ce(n)?new Array(n.length):{};for(const s in n)t[s]=ad(n,s);return t}class od{constructor(t,s,o){this._object=t,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return zp(he(this._object),this._key)}}function ad(n,t,s){const o=n[t];return Ce(o)?o:new od(n,t,s)}var dc;class ld{constructor(t,s,o,a){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[dc]=!1,this._dirty=!0,this.effect=new ga(t,()=>{this._dirty||(this._dirty=!0,wa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=o}get value(){const t=he(this);return ya(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}dc="__v_isReadonly";function rd(n,t,s=!1){let o,a;const l=me(n);l?(o=n,a=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=n.get,a=n.set);const r=new ld(o,a,l||!a,s);return t&&!s&&(r.effect.onTrack=t.onTrack,r.effect.onTrigger=t.onTrigger),r}const Kt=[];function $i(n){Kt.push(n)}function Ci(){Kt.pop()}function R(n,...t){Jt();const s=Kt.length?Kt[Kt.length-1].component:null,o=s&&s.appContext.config.warnHandler,a=cd();if(o)ot(o,s,11,[n+t.join(""),s&&s.proxy,a.map(({vnode:l})=>`at <${co(s,l.type)}>`).join(`
`),a]);else{const l=[`[Vue warn]: ${n}`,...t];a.length&&l.push(`
`,...ud(a)),console.warn(...l)}es()}function cd(){let n=Kt[Kt.length-1];if(!n)return[];const t=[];for(;n;){const s=t[0];s&&s.vnode===n?s.recurseCount++:t.push({vnode:n,recurseCount:0});const o=n.component&&n.component.parent;n=o&&o.vnode}return t}function ud(n){const t=[];return n.forEach((s,o)=>{t.push(...o===0?[]:[`
`],...pd(s))}),t}function pd({vnode:n,recurseCount:t}){const s=t>0?`... (${t} recursive calls)`:"",o=n.component?n.component.parent==null:!1,a=` at <${co(n.component,n.type,o)}`,l=">"+s;return n.props?[a,...dd(n.props),l]:[a+l]}function dd(n){const t=[],s=Object.keys(n);return s.slice(0,3).forEach(o=>{t.push(...fc(o,n[o]))}),s.length>3&&t.push(" ..."),t}function fc(n,t,s){return Ue(t)?(t=JSON.stringify(t),s?t:[`${n}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?s?t:[`${n}=${t}`]:Ce(t)?(t=fc(n,he(t.value),!0),s?t:[`${n}=Ref<`,t,">"]):me(t)?[`${n}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),s?t:[`${n}=`,t])}function fd(n,t){n!==void 0&&(typeof n!="number"?R(`${t} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&R(`${t} is NaN - the duration expression might be incorrect.`))}const Ia={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ot(n,t,s,o){let a;try{a=o?n(...o):n()}catch(l){no(l,t,s)}return a}function Cn(n,t,s,o){if(me(n)){const l=ot(n,t,s,o);return l&&fa(l)&&l.catch(r=>{no(r,t,s)}),l}const a=[];for(let l=0;l<n.length;l++)a.push(Cn(n[l],t,s,o));return a}function no(n,t,s,o=!0){const a=t?t.vnode:null;if(t){let l=t.parent;const r=t.proxy,c=Ia[s];for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](n,r,c)===!1)return}l=l.parent}const u=t.appContext.config.errorHandler;if(u){ot(u,null,10,[n,r,c]);return}}md(n,s,a,o)}function md(n,t,s,o=!0){{const a=Ia[t];if(s&&$i(s),R(`Unhandled error${a?` during execution of ${a}`:""}`),s&&Ci(),o)throw n;console.error(n)}}let Gs=!1,To=!1;const sn=[];let Bn=0;const ms=[];let Hn=null,ht=0;const mc=Promise.resolve();let xa=null;const hd=100;function An(n){const t=xa||mc;return n?t.then(this?n.bind(this):n):t}function _d(n){let t=Bn+1,s=sn.length;for(;t<s;){const o=t+s>>>1;Ys(sn[o])<n?t=o+1:s=o}return t}function to(n){(!sn.length||!sn.includes(n,Gs&&n.allowRecurse?Bn+1:Bn))&&(n.id==null?sn.push(n):sn.splice(_d(n.id),0,n),hc())}function hc(){!Gs&&!To&&(To=!0,xa=mc.then(vc))}function gd(n){const t=sn.indexOf(n);t>Bn&&sn.splice(t,1)}function _c(n){ce(n)?ms.push(...n):(!Hn||!Hn.includes(n,n.allowRecurse?ht+1:ht))&&ms.push(n),hc()}function cl(n,t=Gs?Bn+1:0){for(n=n||new Map;t<sn.length;t++){const s=sn[t];if(s&&s.pre){if(Ea(n,s))continue;sn.splice(t,1),t--,s()}}}function gc(n){if(ms.length){const t=[...new Set(ms)];if(ms.length=0,Hn){Hn.push(...t);return}for(Hn=t,n=n||new Map,Hn.sort((s,o)=>Ys(s)-Ys(o)),ht=0;ht<Hn.length;ht++)Ea(n,Hn[ht])||Hn[ht]();Hn=null,ht=0}}const Ys=n=>n.id==null?1/0:n.id,vd=(n,t)=>{const s=Ys(n)-Ys(t);if(s===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return s};function vc(n){To=!1,Gs=!0,n=n||new Map,sn.sort(vd);const t=s=>Ea(n,s);try{for(Bn=0;Bn<sn.length;Bn++){const s=sn[Bn];if(s&&s.active!==!1){if(t(s))continue;ot(s,null,14)}}}finally{Bn=0,sn.length=0,gc(n),Gs=!1,xa=null,(sn.length||ms.length)&&vc(n)}}function Ea(n,t){if(!n.has(t))n.set(t,1);else{const s=n.get(t);if(s>hd){const o=t.ownerInstance,a=o&&ei(o.type);return R(`Maximum recursive updates exceeded${a?` in component <${a}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(t,s+1)}}let wt=!1;const rs=new Set;qr().__VUE_HMR_RUNTIME__={createRecord:po(kc),rerender:po(yd),reload:po(wd)};const Yt=new Map;function kd(n){const t=n.type.__hmrId;let s=Yt.get(t);s||(kc(t,n.type),s=Yt.get(t)),s.instances.add(n)}function bd(n){Yt.get(n.type.__hmrId).instances.delete(n)}function kc(n,t){return Yt.has(n)?!1:(Yt.set(n,{initialDef:Us(t),instances:new Set}),!0)}function Us(n){return Gc(n)?n.__vccOpts:n}function yd(n,t){const s=Yt.get(n);s&&(s.initialDef.render=t,[...s.instances].forEach(o=>{t&&(o.render=t,Us(o.type).render=t),o.renderCache=[],wt=!0,o.update(),wt=!1}))}function wd(n,t){const s=Yt.get(n);if(!s)return;t=Us(t),ul(s.initialDef,t);const o=[...s.instances];for(const a of o){const l=Us(a.type);rs.has(l)||(l!==s.initialDef&&ul(l,t),rs.add(l)),a.appContext.optionsCache.delete(a.type),a.ceReload?(rs.add(l),a.ceReload(t.styles),rs.delete(l)):a.parent?to(a.parent.update):a.appContext.reload?a.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}_c(()=>{for(const a of o)rs.delete(Us(a.type))})}function ul(n,t){Ke(n,t);for(const s in n)s!=="__file"&&!(s in t)&&delete n[s]}function po(n){return(t,s)=>{try{return n(t,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Kn,Ps=[],Ao=!1;function ci(n,...t){Kn?Kn.emit(n,...t):Ao||Ps.push({event:n,args:t})}function bc(n,t){var s,o;Kn=n,Kn?(Kn.enabled=!0,Ps.forEach(({event:a,args:l})=>Kn.emit(a,...l)),Ps=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{bc(l,t)}),setTimeout(()=>{Kn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ao=!0,Ps=[])},3e3)):(Ao=!0,Ps=[])}function Id(n,t){ci("app:init",n,t,{Fragment:Se,Text:fi,Comment:Ze,Static:zi})}function xd(n){ci("app:unmount",n)}const Po=$a("component:added"),yc=$a("component:updated"),Ed=$a("component:removed"),$d=n=>{Kn&&typeof Kn.cleanupBuffer=="function"&&!Kn.cleanupBuffer(n)&&Ed(n)};function $a(n){return t=>{ci(n,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Cd=wc("perf:start"),zd=wc("perf:end");function wc(n){return(t,s,o)=>{ci(n,t.appContext.app,t.uid,t,s,o)}}function Fd(n,t,s){ci("component:emit",n.appContext.app,n,t,s)}function Sd(n,t,...s){if(n.isUnmounted)return;const o=n.vnode.props||Pe;{const{emitsOptions:d,propsOptions:[f]}=n;if(d)if(!(t in d))(!f||!(Tt(t)in f))&&R(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Tt(t)}" prop.`);else{const m=d[t];me(m)&&(m(...s)||R(`Invalid event arguments: event validation failed for event "${t}".`))}}let a=s;const l=t.startsWith("update:"),r=l&&t.slice(7);if(r&&r in o){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:f,trim:m}=o[d]||Pe;m&&(a=s.map(_=>Ue(_)?_.trim():_)),f&&(a=s.map(So))}Fd(n,t,a);{const d=t.toLowerCase();d!==t&&o[Tt(d)]&&R(`Event "${d}" is emitted in component ${co(n,n.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${at(t)}" instead of "${t}".`)}let c,u=o[c=Tt(t)]||o[c=Tt(qn(t))];!u&&l&&(u=o[c=Tt(at(t))]),u&&Cn(u,n,6,a);const p=o[c+"Once"];if(p){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Cn(p,n,6,a)}}function Ic(n,t,s=!1){const o=t.emitsCache,a=o.get(n);if(a!==void 0)return a;const l=n.emits;let r={},c=!1;if(!me(n)){const u=p=>{const d=Ic(p,t,!0);d&&(c=!0,Ke(r,d))};!s&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!l&&!c?(Oe(n)&&o.set(n,null),null):(ce(l)?l.forEach(u=>r[u]=null):Ke(r,l),Oe(n)&&o.set(n,r),r)}function so(n,t){return!n||!li(t)?!1:(t=t.slice(2).replace(/Once$/,""),we(n,t[0].toLowerCase()+t.slice(1))||we(n,at(t))||we(n,t))}let Ge=null,io=null;function Di(n){const t=Ge;return Ge=n,io=n&&n.type.__scopeId||null,t}function HC(n){io=n}function BC(){io=null}function I(n,t=Ge,s){if(!t||n._n)return n;const o=(...a)=>{o._d&&Il(-1);const l=Di(t);let r;try{r=n(...a)}finally{Di(l),o._d&&Il(1)}return yc(t),r};return o._n=!0,o._c=!0,o._d=!0,o}let No=!1;function Ui(){No=!0}function fo(n){const{type:t,vnode:s,proxy:o,withProxy:a,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:f,data:m,setupState:_,ctx:g,inheritAttrs:k}=n;let y,z;const E=Di(n);No=!1;try{if(s.shapeFlag&4){const q=a||o;y=Ln(d.call(q,q,f,l,_,m,g)),z=u}else{const q=t;u===l&&Ui(),y=Ln(q.length>1?q(l,{get attrs(){return Ui(),u},slots:c,emit:p}):q(l,null)),z=t.props?u:Ld(u)}}catch(q){Bs.length=0,no(q,n,1),y=N(Ze)}let F=y,O;if(y.patchFlag>0&&y.patchFlag&2048&&([F,O]=Od(y)),z&&k!==!1){const q=Object.keys(z),{shapeFlag:G}=F;if(q.length){if(G&7)r&&q.some(Mi)&&(z=Md(z,r)),F=Pn(F,z);else if(!No&&F.type!==Ze){const j=Object.keys(u),H=[],se=[];for(let ae=0,fe=j.length;ae<fe;ae++){const X=j[ae];li(X)?Mi(X)||H.push(X[2].toLowerCase()+X.slice(3)):se.push(X)}se.length&&R(`Extraneous non-props attributes (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),H.length&&R(`Extraneous non-emits event listeners (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(pl(F)||R("Runtime directive used on component with non-element root node. The directives will not function as intended."),F=Pn(F),F.dirs=F.dirs?F.dirs.concat(s.dirs):s.dirs),s.transition&&(pl(F)||R("Component inside <Transition> renders non-element root node that cannot be animated."),F.transition=s.transition),O?O(F):y=F,Di(E),y}const Od=n=>{const t=n.children,s=n.dynamicChildren,o=xc(t);if(!o)return[n,void 0];const a=t.indexOf(o),l=s?s.indexOf(o):-1,r=c=>{t[a]=c,s&&(l>-1?s[l]=c:c.patchFlag>0&&(n.dynamicChildren=[...s,c]))};return[Ln(o),r]};function xc(n){let t;for(let s=0;s<n.length;s++){const o=n[s];if(Zt(o)){if(o.type!==Ze||o.children==="v-if"){if(t)return;t=o}}else return}return t}const Ld=n=>{let t;for(const s in n)(s==="class"||s==="style"||li(s))&&((t||(t={}))[s]=n[s]);return t},Md=(n,t)=>{const s={};for(const o in n)(!Mi(o)||!(o.slice(9)in t))&&(s[o]=n[o]);return s},pl=n=>n.shapeFlag&7||n.type===Ze;function Td(n,t,s){const{props:o,children:a,component:l}=n,{props:r,children:c,patchFlag:u}=t,p=l.emitsOptions;if((a||c)&&wt||t.dirs||t.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return o?dl(o,r,p):!!r;if(u&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(r[m]!==o[m]&&!so(p,m))return!0}}}else return(a||c)&&(!c||!c.$stable)?!0:o===r?!1:o?r?dl(o,r,p):!0:!!r;return!1}function dl(n,t,s){const o=Object.keys(t);if(o.length!==Object.keys(n).length)return!0;for(let a=0;a<o.length;a++){const l=o[a];if(t[l]!==n[l]&&!so(s,l))return!0}return!1}function Ad({vnode:n,parent:t},s){for(;t&&t.subTree===n;)(n=t.vnode).el=s,t=t.parent}const Ec=n=>n.__isSuspense;function Pd(n,t){t&&t.pendingBranch?ce(n)?t.effects.push(...n):t.effects.push(n):_c(n)}function kn(n,t){if(!je)R("provide() can only be used inside setup().");else{let s=je.provides;const o=je.parent&&je.parent.provides;o===s&&(s=je.provides=Object.create(o)),s[n]=t}}function C(n,t,s=!1){const o=je||Ge;if(o){const a=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(a&&n in a)return a[n];if(arguments.length>1)return s&&me(t)?t.call(o.proxy):t;R(`injection "${String(n)}" not found.`)}else R("inject() can only be used inside setup() or functional components.")}function Is(n,t){return Ca(n,null,t)}const yi={};function He(n,t,s){return me(t)||R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ca(n,t,s)}function Ca(n,t,{immediate:s,deep:o,flush:a,onTrack:l,onTrigger:r}=Pe){t||(s!==void 0&&R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=O=>{R("Invalid watch source: ",O,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Gr()===(je==null?void 0:je.scope)?je:null;let p,d=!1,f=!1;if(Ce(n)?(p=()=>n.value,d=Ni(n)):Bt(n)?(p=()=>n,o=!0):ce(n)?(f=!0,d=n.some(O=>Bt(O)||Ni(O)),p=()=>n.map(O=>{if(Ce(O))return O.value;if(Bt(O))return Rt(O);if(me(O))return ot(O,u,2);c(O)})):me(n)?t?p=()=>ot(n,u,2):p=()=>{if(!(u&&u.isUnmounted))return m&&m(),Cn(n,u,3,[_])}:(p=mn,c(n)),t&&o){const O=p;p=()=>Rt(O())}let m,_=O=>{m=E.onStop=()=>{ot(O,u,4)}},g;if(Js)if(_=mn,t?s&&Cn(t,u,3,[p(),f?[]:void 0,_]):p(),a==="sync"){const O=jf();g=O.__watcherHandles||(O.__watcherHandles=[])}else return mn;let k=f?new Array(n.length).fill(yi):yi;const y=()=>{if(E.active)if(t){const O=E.run();(o||d||(f?O.some((q,G)=>qs(q,k[G])):qs(O,k)))&&(m&&m(),Cn(t,u,3,[O,k===yi?void 0:f&&k[0]===yi?[]:k,_]),k=O)}else E.run()};y.allowRecurse=!!t;let z;a==="sync"?z=y:a==="post"?z=()=>Je(y,u&&u.suspense):(y.pre=!0,u&&(y.id=u.uid),z=()=>to(y));const E=new ga(p,z);E.onTrack=l,E.onTrigger=r,t?s?y():k=E.run():a==="post"?Je(E.run.bind(E),u&&u.suspense):E.run();const F=()=>{E.stop(),u&&u.scope&&pa(u.scope.effects,E)};return g&&g.push(F),F}function Nd(n,t,s){const o=this.proxy,a=Ue(n)?n.includes(".")?$c(o,n):()=>o[n]:n.bind(o,o);let l;me(t)?l=t:(l=t.handler,s=t);const r=je;ks(this);const c=Ca(a,l.bind(o),s);return r?ks(r):Wt(),c}function $c(n,t){const s=t.split(".");return()=>{let o=n;for(let a=0;a<s.length&&o;a++)o=o[s[a]];return o}}function Rt(n,t){if(!Oe(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Ce(n))Rt(n.value,t);else if(ce(n))for(let s=0;s<n.length;s++)Rt(n[s],t);else if(jr(n)||Ut(n))n.forEach(s=>{Rt(s,t)});else if(Vr(n))for(const s in n)Rt(n[s],t);return n}function Cc(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pi(()=>{n.isMounted=!0}),Sa(()=>{n.isUnmounting=!0}),n}const wn=[Function,Array],Rd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wn,onEnter:wn,onAfterEnter:wn,onEnterCancelled:wn,onBeforeLeave:wn,onLeave:wn,onAfterLeave:wn,onLeaveCancelled:wn,onBeforeAppear:wn,onAppear:wn,onAfterAppear:wn,onAppearCancelled:wn},setup(n,{slots:t}){const s=Yn(),o=Cc();let a;return()=>{const l=t.default&&za(t.default(),!0);if(!l||!l.length)return;let r=l[0];if(l.length>1){let k=!1;for(const y of l)if(y.type!==Ze){if(k){R("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}r=y,k=!0}}const c=he(n),{mode:u}=c;if(u&&u!=="in-out"&&u!=="out-in"&&u!=="default"&&R(`invalid <transition> mode: ${u}`),o.isLeaving)return mo(r);const p=fl(r);if(!p)return mo(r);const d=Zs(p,c,o,s);vs(p,d);const f=s.subTree,m=f&&fl(f);let _=!1;const{getTransitionKey:g}=p.type;if(g){const k=g();a===void 0?a=k:k!==a&&(a=k,_=!0)}if(m&&m.type!==Ze&&(!bt(p,m)||_)){const k=Zs(m,c,o,s);if(vs(m,k),u==="out-in")return o.isLeaving=!0,k.afterLeave=()=>{o.isLeaving=!1,s.update.active!==!1&&s.update()},mo(r);u==="in-out"&&p.type!==Ze&&(k.delayLeave=(y,z,E)=>{const F=zc(o,m);F[String(m.key)]=m,y._leaveCb=()=>{z(),y._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=E})}return r}}},Dd=Rd;function zc(n,t){const{leavingVNodes:s}=n;let o=s.get(t.type);return o||(o=Object.create(null),s.set(t.type,o)),o}function Zs(n,t,s,o){const{appear:a,mode:l,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:k,onAppear:y,onAfterAppear:z,onAppearCancelled:E}=t,F=String(n.key),O=zc(s,n),q=(H,se)=>{H&&Cn(H,o,9,se)},G=(H,se)=>{const ae=se[1];q(H,se),ce(H)?H.every(fe=>fe.length<=1)&&ae():H.length<=1&&ae()},j={mode:l,persisted:r,beforeEnter(H){let se=c;if(!s.isMounted)if(a)se=k||c;else return;H._leaveCb&&H._leaveCb(!0);const ae=O[F];ae&&bt(n,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),q(se,[H])},enter(H){let se=u,ae=p,fe=d;if(!s.isMounted)if(a)se=y||u,ae=z||p,fe=E||d;else return;let X=!1;const Ie=H._enterCb=Ne=>{X||(X=!0,Ne?q(fe,[H]):q(ae,[H]),j.delayedLeave&&j.delayedLeave(),H._enterCb=void 0)};se?G(se,[H,Ie]):Ie()},leave(H,se){const ae=String(n.key);if(H._enterCb&&H._enterCb(!0),s.isUnmounting)return se();q(f,[H]);let fe=!1;const X=H._leaveCb=Ie=>{fe||(fe=!0,se(),Ie?q(g,[H]):q(_,[H]),H._leaveCb=void 0,O[ae]===n&&delete O[ae])};O[ae]=n,m?G(m,[H,X]):X()},clone(H){return Zs(H,t,s,o)}};return j}function mo(n){if(ui(n))return n=Pn(n),n.children=null,n}function fl(n){return ui(n)?n.children?n.children[0]:void 0:n}function vs(n,t){n.shapeFlag&6&&n.component?vs(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function za(n,t=!1,s){let o=[],a=0;for(let l=0;l<n.length;l++){let r=n[l];const c=s==null?r.key:String(s)+String(r.key!=null?r.key:l);r.type===Se?(r.patchFlag&128&&a++,o=o.concat(za(r.children,t,c))):(t||r.type!==Ze)&&o.push(c!=null?Pn(r,{key:c}):r)}if(a>1)for(let l=0;l<o.length;l++)o[l].patchFlag=-2;return o}function Be(n){return me(n)?{setup:n,name:n.name}:n}const hs=n=>!!n.type.__asyncLoader,ui=n=>n.type.__isKeepAlive,Ud={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const s=Yn(),o=s.ctx;if(!o.renderer)return()=>{const E=t.default&&t.default();return E&&E.length===1?E[0]:E};const a=new Map,l=new Set;let r=null;s.__v_cache=a;const c=s.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:f}}}=o,m=f("div");o.activate=(E,F,O,q,G)=>{const j=E.component;p(E,F,O,0,c),u(j.vnode,E,F,O,j,c,q,E.slotScopeIds,G),Je(()=>{j.isDeactivated=!1,j.a&&vt(j.a);const H=E.props&&E.props.onVnodeMounted;H&&In(H,j.parent,E)},c),Po(j)},o.deactivate=E=>{const F=E.component;p(E,m,null,1,c),Je(()=>{F.da&&vt(F.da);const O=E.props&&E.props.onVnodeUnmounted;O&&In(O,F.parent,E),F.isDeactivated=!0},c),Po(F)};function _(E){ho(E),d(E,s,c,!0)}function g(E){a.forEach((F,O)=>{const q=ei(F.type);q&&(!E||!E(q))&&k(O)})}function k(E){const F=a.get(E);!r||!bt(F,r)?_(F):r&&ho(r),a.delete(E),l.delete(E)}He(()=>[n.include,n.exclude],([E,F])=>{E&&g(O=>Ns(E,O)),F&&g(O=>!Ns(F,O))},{flush:"post",deep:!0});let y=null;const z=()=>{y!=null&&a.set(y,_o(s.subTree))};return pi(z),Fa(z),Sa(()=>{a.forEach(E=>{const{subTree:F,suspense:O}=s,q=_o(F);if(E.type===q.type&&E.key===q.key){ho(q);const G=q.component.da;G&&Je(G,O);return}_(E)})}),()=>{if(y=null,!t.default)return null;const E=t.default(),F=E[0];if(E.length>1)return R("KeepAlive should contain exactly one component child."),r=null,E;if(!Zt(F)||!(F.shapeFlag&4)&&!(F.shapeFlag&128))return r=null,F;let O=_o(F);const q=O.type,G=ei(hs(O)?O.type.__asyncResolved||{}:q),{include:j,exclude:H,max:se}=n;if(j&&(!G||!Ns(j,G))||H&&G&&Ns(H,G))return r=O,F;const ae=O.key==null?q:O.key,fe=a.get(ae);return O.el&&(O=Pn(O),F.shapeFlag&128&&(F.ssContent=O)),y=ae,fe?(O.el=fe.el,O.component=fe.component,O.transition&&vs(O,O.transition),O.shapeFlag|=512,l.delete(ae),l.add(ae)):(l.add(ae),se&&l.size>parseInt(se,10)&&k(l.values().next().value)),O.shapeFlag|=256,r=O,Ec(F.type)?F:O}}},Fc=Ud;function Ns(n,t){return ce(n)?n.some(s=>Ns(s,t)):Ue(n)?n.split(",").includes(t):kp(n)?n.test(t):!1}function Hd(n,t){Sc(n,"a",t)}function Bd(n,t){Sc(n,"da",t)}function Sc(n,t,s=je){const o=n.__wdc||(n.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(oo(t,o,s),s){let a=s.parent;for(;a&&a.parent;)ui(a.parent.vnode)&&Kd(o,t,s,a),a=a.parent}}function Kd(n,t,s,o){const a=oo(t,n,o,!0);ao(()=>{pa(o[t],a)},s)}function ho(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function _o(n){return n.shapeFlag&128?n.ssContent:n}function oo(n,t,s=je,o=!1){if(s){const a=s[n]||(s[n]=[]),l=t.__weh||(t.__weh=(...r)=>{if(s.isUnmounted)return;Jt(),ks(s);const c=Cn(t,s,n,r);return Wt(),es(),c});return o?a.unshift(l):a.push(l),l}else{const a=Tt(Ia[n].replace(/ hook$/,""));R(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ct=n=>(t,s=je)=>(!Js||n==="sp")&&oo(n,(...o)=>t(...o),s),jd=ct("bm"),pi=ct("m"),Wd=ct("bu"),Fa=ct("u"),Sa=ct("bum"),ao=ct("um"),Vd=ct("sp"),qd=ct("rtg"),Qd=ct("rtc");function Gd(n,t=je){oo("ec",n,t)}function Oc(n){bp(n)&&R("Do not use built-in directive ids as custom directive id: "+n)}function Oa(n,t){const s=Ge;if(s===null)return R("withDirectives can only be used inside render functions."),n;const o=ro(s)||s.proxy,a=n.dirs||(n.dirs=[]);for(let l=0;l<t.length;l++){let[r,c,u,p=Pe]=t[l];r&&(me(r)&&(r={mounted:r,updated:r}),r.deep&&Rt(c),a.push({dir:r,instance:o,value:c,oldValue:void 0,arg:u,modifiers:p}))}return n}function Ot(n,t,s,o){const a=n.dirs,l=t&&t.dirs;for(let r=0;r<a.length;r++){const c=a[r];l&&(c.oldValue=l[r].value);let u=c.dir[o];u&&(Jt(),Cn(u,s,8,[n.el,c,n,t]),es())}}const Ro="components";function Yd(n,t){return Xd(Ro,n,!0,t)||n}const Zd=Symbol();function Xd(n,t,s=!0,o=!1){const a=Ge||je;if(a){const l=a.type;if(n===Ro){const c=ei(l,!1);if(c&&(c===t||c===qn(t)||c===Gt(qn(t))))return l}const r=ml(a[n]||l[n],t)||ml(a.appContext[n],t);if(!r&&o)return l;if(s&&!r){const c=n===Ro?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";R(`Failed to resolve ${n.slice(0,-1)}: ${t}${c}`)}return r}else R(`resolve${Gt(n.slice(0,-1))} can only be used in render() or setup().`)}function ml(n,t){return n&&(n[t]||n[qn(t)]||n[Gt(qn(t))])}function di(n,t,s,o){let a;const l=s&&s[o];if(ce(n)||Ue(n)){a=new Array(n.length);for(let r=0,c=n.length;r<c;r++)a[r]=t(n[r],r,void 0,l&&l[r])}else if(typeof n=="number"){Number.isInteger(n)||R(`The v-for range expect an integer value but got ${n}.`),a=new Array(n);for(let r=0;r<n;r++)a[r]=t(r+1,r,void 0,l&&l[r])}else if(Oe(n))if(n[Symbol.iterator])a=Array.from(n,(r,c)=>t(r,c,void 0,l&&l[c]));else{const r=Object.keys(n);a=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];a[c]=t(n[p],p,c,l&&l[c])}}else a=[];return s&&(s[o]=a),a}function rt(n,t,s={},o,a){if(Ge.isCE||Ge.parent&&hs(Ge.parent)&&Ge.parent.isCE)return t!=="default"&&(s.name=t),N("slot",s,o&&o());let l=n[t];l&&l.length>1&&(R("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),b();const r=l&&Lc(l(s)),c=S(Se,{key:s.key||r&&r.key||`_${t}`},r||(o?o():[]),r&&n._===1?64:-2);return!a&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function Lc(n){return n.some(t=>Zt(t)?!(t.type===Ze||t.type===Se&&!Lc(t.children)):!0)?n:null}const Do=n=>n?Vc(n)?ro(n)||n.proxy:Do(n.parent):null,jt=Ke(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>ps(n.props),$attrs:n=>ps(n.attrs),$slots:n=>ps(n.slots),$refs:n=>ps(n.refs),$parent:n=>Do(n.parent),$root:n=>Do(n.root),$emit:n=>n.emit,$options:n=>Ma(n),$forceUpdate:n=>n.f||(n.f=()=>to(n.update)),$nextTick:n=>n.n||(n.n=An.bind(n.proxy)),$watch:n=>Nd.bind(n)}),La=n=>n==="_"||n==="$",go=(n,t)=>n!==Pe&&!n.__isScriptSetup&&we(n,t),Mc={get({_:n},t){const{ctx:s,setupState:o,data:a,props:l,accessCache:r,type:c,appContext:u}=n;if(t==="__isVue")return!0;let p;if(t[0]!=="$"){const _=r[t];if(_!==void 0)switch(_){case 1:return o[t];case 2:return a[t];case 4:return s[t];case 3:return l[t]}else{if(go(o,t))return r[t]=1,o[t];if(a!==Pe&&we(a,t))return r[t]=2,a[t];if((p=n.propsOptions[0])&&we(p,t))return r[t]=3,l[t];if(s!==Pe&&we(s,t))return r[t]=4,s[t];Uo&&(r[t]=0)}}const d=jt[t];let f,m;if(d)return t==="$attrs"&&(hn(n,"get",t),Ui()),d(n);if((f=c.__cssModules)&&(f=f[t]))return f;if(s!==Pe&&we(s,t))return r[t]=4,s[t];if(m=u.config.globalProperties,we(m,t))return m[t];Ge&&(!Ue(t)||t.indexOf("__v")!==0)&&(a!==Pe&&La(t[0])&&we(a,t)?R(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Ge&&R(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:n},t,s){const{data:o,setupState:a,ctx:l}=n;return go(a,t)?(a[t]=s,!0):a.__isScriptSetup&&we(a,t)?(R(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Pe&&we(o,t)?(o[t]=s,!0):we(n.props,t)?(R(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in n?(R(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in n.appContext.config.globalProperties?Object.defineProperty(l,t,{enumerable:!0,configurable:!0,value:s}):l[t]=s,!0)},has({_:{data:n,setupState:t,accessCache:s,ctx:o,appContext:a,propsOptions:l}},r){let c;return!!s[r]||n!==Pe&&we(n,r)||go(t,r)||(c=l[0])&&we(c,r)||we(o,r)||we(jt,r)||we(a.config.globalProperties,r)},defineProperty(n,t,s){return s.get!=null?n._.accessCache[t]=0:we(s,"value")&&this.set(n,t,s.value,null),Reflect.defineProperty(n,t,s)}};Mc.ownKeys=n=>(R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function Jd(n){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(jt).forEach(s=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,get:()=>jt[s](n),set:mn})}),t}function ef(n){const{ctx:t,propsOptions:[s]}=n;s&&Object.keys(s).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n.props[o],set:mn})})}function nf(n){const{ctx:t,setupState:s}=n;Object.keys(he(s)).forEach(o=>{if(!s.__isScriptSetup){if(La(o[0])){R(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:mn})}})}function tf(){const n=Object.create(null);return(t,s)=>{n[s]?R(`${t} property "${s}" is already defined in ${n[s]}.`):n[s]=t}}let Uo=!0;function sf(n){const t=Ma(n),s=n.proxy,o=n.ctx;Uo=!1,t.beforeCreate&&hl(t.beforeCreate,n,"bc");const{data:a,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:f,mounted:m,beforeUpdate:_,updated:g,activated:k,deactivated:y,beforeDestroy:z,beforeUnmount:E,destroyed:F,unmounted:O,render:q,renderTracked:G,renderTriggered:j,errorCaptured:H,serverPrefetch:se,expose:ae,inheritAttrs:fe,components:X,directives:Ie,filters:Ne}=t,ze=tf();{const[J]=n.propsOptions;if(J)for(const ue in J)ze("Props",ue)}if(p&&of(p,o,ze,n.appContext.config.unwrapInjectedRef),r)for(const J in r){const ue=r[J];me(ue)?(Object.defineProperty(o,J,{value:ue.bind(s),configurable:!0,enumerable:!0,writable:!0}),ze("Methods",J)):R(`Method "${J}" has type "${typeof ue}" in the component definition. Did you reference the function correctly?`)}if(a){me(a)||R("The data option must be a function. Plain object usage is no longer supported.");const J=a.call(s,s);if(fa(J)&&R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Oe(J))R("data() should return an object.");else{n.data=nn(J);for(const ue in J)ze("Data",ue),La(ue[0])||Object.defineProperty(o,ue,{configurable:!0,enumerable:!0,get:()=>J[ue],set:mn})}}if(Uo=!0,l)for(const J in l){const ue=l[J],ke=me(ue)?ue.bind(s,s):me(ue.get)?ue.get.bind(s,s):mn;ke===mn&&R(`Computed property "${J}" has no getter.`);const Te=!me(ue)&&me(ue.set)?ue.set.bind(s):()=>{R(`Write operation failed: computed property "${J}" is readonly.`)},_n=A({get:ke,set:Te});Object.defineProperty(o,J,{enumerable:!0,configurable:!0,get:()=>_n.value,set:tn=>_n.value=tn}),ze("Computed",J)}if(c)for(const J in c)Tc(c[J],o,s,J);if(u){const J=me(u)?u.call(s):u;Reflect.ownKeys(J).forEach(ue=>{kn(ue,J[ue])})}d&&hl(d,n,"c");function Re(J,ue){ce(ue)?ue.forEach(ke=>J(ke.bind(s))):ue&&J(ue.bind(s))}if(Re(jd,f),Re(pi,m),Re(Wd,_),Re(Fa,g),Re(Hd,k),Re(Bd,y),Re(Gd,H),Re(Qd,G),Re(qd,j),Re(Sa,E),Re(ao,O),Re(Vd,se),ce(ae))if(ae.length){const J=n.exposed||(n.exposed={});ae.forEach(ue=>{Object.defineProperty(J,ue,{get:()=>s[ue],set:ke=>s[ue]=ke})})}else n.exposed||(n.exposed={});q&&n.render===mn&&(n.render=q),fe!=null&&(n.inheritAttrs=fe),X&&(n.components=X),Ie&&(n.directives=Ie)}function of(n,t,s=mn,o=!1){ce(n)&&(n=Ho(n));for(const a in n){const l=n[a];let r;Oe(l)?"default"in l?r=C(l.from||a,l.default,!0):r=C(l.from||a):r=C(l),Ce(r)?o?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:c=>r.value=c}):(R(`injected property "${a}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[a]=r):t[a]=r,s("Inject",a)}}function hl(n,t,s){Cn(ce(n)?n.map(o=>o.bind(t.proxy)):n.bind(t.proxy),t,s)}function Tc(n,t,s,o){const a=o.includes(".")?$c(s,o):()=>s[o];if(Ue(n)){const l=t[n];me(l)?He(a,l):R(`Invalid watch handler specified by key "${n}"`,l)}else if(me(n))He(a,n.bind(s));else if(Oe(n))if(ce(n))n.forEach(l=>Tc(l,t,s,o));else{const l=me(n.handler)?n.handler.bind(s):t[n.handler];me(l)?He(a,l,n):R(`Invalid watch handler specified by key "${n.handler}"`,l)}else R(`Invalid watch option: "${o}"`,n)}function Ma(n){const t=n.type,{mixins:s,extends:o}=t,{mixins:a,optionsCache:l,config:{optionMergeStrategies:r}}=n.appContext,c=l.get(t);let u;return c?u=c:!a.length&&!s&&!o?u=t:(u={},a.length&&a.forEach(p=>Hi(u,p,r,!0)),Hi(u,t,r)),Oe(t)&&l.set(t,u),u}function Hi(n,t,s,o=!1){const{mixins:a,extends:l}=t;l&&Hi(n,l,s,!0),a&&a.forEach(r=>Hi(n,r,s,!0));for(const r in t)if(o&&r==="expose")R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=af[r]||s&&s[r];n[r]=c?c(n[r],t[r]):t[r]}return n}const af={data:_l,props:At,emits:At,methods:At,computed:At,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:At,directives:At,watch:rf,provide:_l,inject:lf};function _l(n,t){return t?n?function(){return Ke(me(n)?n.call(this,this):n,me(t)?t.call(this,this):t)}:t:n}function lf(n,t){return At(Ho(n),Ho(t))}function Ho(n){if(ce(n)){const t={};for(let s=0;s<n.length;s++)t[n[s]]=n[s];return t}return n}function ln(n,t){return n?[...new Set([].concat(n,t))]:t}function At(n,t){return n?Ke(Ke(Object.create(null),n),t):t}function rf(n,t){if(!n)return t;if(!t)return n;const s=Ke(Object.create(null),n);for(const o in t)s[o]=ln(n[o],t[o]);return s}function cf(n,t,s,o=!1){const a={},l={};Ti(l,lo,1),n.propsDefaults=Object.create(null),Ac(n,t,a,l);for(const r in n.propsOptions[0])r in a||(a[r]=void 0);Nc(t||{},a,n),s?n.props=o?a:ed(a):n.type.props?n.props=a:n.props=l,n.attrs=l}function uf(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function pf(n,t,s,o){const{props:a,attrs:l,vnode:{patchFlag:r}}=n,c=he(a),[u]=n.propsOptions;let p=!1;if(!uf(n)&&(o||r>0)&&!(r&16)){if(r&8){const d=n.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(so(n.emitsOptions,m))continue;const _=t[m];if(u)if(we(l,m))_!==l[m]&&(l[m]=_,p=!0);else{const g=qn(m);a[g]=Bo(u,c,g,_,n,!1)}else _!==l[m]&&(l[m]=_,p=!0)}}}else{Ac(n,t,a,l)&&(p=!0);let d;for(const f in c)(!t||!we(t,f)&&((d=at(f))===f||!we(t,d)))&&(u?s&&(s[f]!==void 0||s[d]!==void 0)&&(a[f]=Bo(u,c,f,void 0,n,!0)):delete a[f]);if(l!==c)for(const f in l)(!t||!we(t,f))&&(delete l[f],p=!0)}p&&lt(n,"set","$attrs"),Nc(t||{},a,n)}function Ac(n,t,s,o){const[a,l]=n.propsOptions;let r=!1,c;if(t)for(let u in t){if(Ei(u))continue;const p=t[u];let d;a&&we(a,d=qn(u))?!l||!l.includes(d)?s[d]=p:(c||(c={}))[d]=p:so(n.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,r=!0)}if(l){const u=he(s),p=c||Pe;for(let d=0;d<l.length;d++){const f=l[d];s[f]=Bo(a,u,f,p[f],n,!we(p,f))}}return r}function Bo(n,t,s,o,a,l){const r=n[s];if(r!=null){const c=we(r,"default");if(c&&o===void 0){const u=r.default;if(r.type!==Function&&me(u)){const{propsDefaults:p}=a;s in p?o=p[s]:(ks(a),o=p[s]=u.call(null,t),Wt())}else o=u}r[0]&&(l&&!c?o=!1:r[1]&&(o===""||o===at(s))&&(o=!0))}return o}function Pc(n,t,s=!1){const o=t.propsCache,a=o.get(n);if(a)return a;const l=n.props,r={},c=[];let u=!1;if(!me(n)){const d=f=>{u=!0;const[m,_]=Pc(f,t,!0);Ke(r,m),_&&c.push(..._)};!s&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!l&&!u)return Oe(n)&&o.set(n,fs),fs;if(ce(l))for(let d=0;d<l.length;d++){Ue(l[d])||R("props must be strings when using array syntax.",l[d]);const f=qn(l[d]);gl(f)&&(r[f]=Pe)}else if(l){Oe(l)||R("invalid props options",l);for(const d in l){const f=qn(d);if(gl(f)){const m=l[d],_=r[f]=ce(m)||me(m)?{type:m}:Object.assign({},m);if(_){const g=kl(Boolean,_.type),k=kl(String,_.type);_[0]=g>-1,_[1]=k<0||g<k,(g>-1||we(_,"default"))&&c.push(f)}}}}const p=[r,c];return Oe(n)&&o.set(n,p),p}function gl(n){return n[0]!=="$"?!0:(R(`Invalid prop name: "${n}" is a reserved property.`),!1)}function Ko(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function vl(n,t){return Ko(n)===Ko(t)}function kl(n,t){return ce(t)?t.findIndex(s=>vl(s,n)):me(t)&&vl(t,n)?0:-1}function Nc(n,t,s){const o=he(t),a=s.propsOptions[0];for(const l in a){let r=a[l];r!=null&&df(l,o[l],r,!we(n,l)&&!we(n,at(l)))}}function df(n,t,s,o){const{type:a,required:l,validator:r}=s;if(l&&o){R('Missing required prop: "'+n+'"');return}if(!(t==null&&!s.required)){if(a!=null&&a!==!0){let c=!1;const u=ce(a)?a:[a],p=[];for(let d=0;d<u.length&&!c;d++){const{valid:f,expectedType:m}=mf(t,u[d]);p.push(m||""),c=f}if(!c){R(hf(n,t,p));return}}r&&!r(t)&&R('Invalid prop: custom validator check failed for prop "'+n+'".')}}const ff=St("String,Number,Boolean,Function,Symbol,BigInt");function mf(n,t){let s;const o=Ko(t);if(ff(o)){const a=typeof n;s=a===o.toLowerCase(),!s&&a==="object"&&(s=n instanceof t)}else o==="Object"?s=Oe(n):o==="Array"?s=ce(n):o==="null"?s=n===null:s=n instanceof t;return{valid:s,expectedType:o}}function hf(n,t,s){let o=`Invalid prop: type check failed for prop "${n}". Expected ${s.map(Gt).join(" | ")}`;const a=s[0],l=ma(t),r=bl(t,a),c=bl(t,l);return s.length===1&&yl(a)&&!_f(a,l)&&(o+=` with value ${r}`),o+=`, got ${l} `,yl(l)&&(o+=`with value ${c}.`),o}function bl(n,t){return t==="String"?`"${n}"`:t==="Number"?`${Number(n)}`:`${n}`}function yl(n){return["string","number","boolean"].some(s=>n.toLowerCase()===s)}function _f(...n){return n.some(t=>t.toLowerCase()==="boolean")}const Rc=n=>n[0]==="_"||n==="$stable",Ta=n=>ce(n)?n.map(Ln):[Ln(n)],gf=(n,t,s)=>{if(t._n)return t;const o=I((...a)=>(je&&R(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ta(t(...a))),s);return o._c=!1,o},Dc=(n,t,s)=>{const o=n._ctx;for(const a in n){if(Rc(a))continue;const l=n[a];if(me(l))t[a]=gf(a,l,o);else if(l!=null){R(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);const r=Ta(l);t[a]=()=>r}}},Uc=(n,t)=>{ui(n.vnode)||R("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Ta(t);n.slots.default=()=>s},vf=(n,t)=>{if(n.vnode.shapeFlag&32){const s=t._;s?(n.slots=he(t),Ti(t,"_",s)):Dc(t,n.slots={})}else n.slots={},t&&Uc(n,t);Ti(n.slots,lo,1)},kf=(n,t,s)=>{const{vnode:o,slots:a}=n;let l=!0,r=Pe;if(o.shapeFlag&32){const c=t._;c?wt?Ke(a,t):s&&c===1?l=!1:(Ke(a,t),!s&&c===1&&delete a._):(l=!t.$stable,Dc(t,a)),r=t}else t&&(Uc(n,t),r={default:1});if(l)for(const c in a)!Rc(c)&&!(c in r)&&delete a[c]};function Hc(){return{app:null,config:{isNativeTag:Kr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bf=0;function yf(n,t){return function(o,a=null){me(o)||(o=Object.assign({},o)),a!=null&&!Oe(a)&&(R("root props passed to app.mount() must be an object."),a=null);const l=Hc(),r=new Set;let c=!1;const u=l.app={_uid:bf++,_component:o,_props:a,_container:null,_context:l,_instance:null,version:El,get config(){return l.config},set config(p){R("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return r.has(p)?R("Plugin has already been applied to target app."):p&&me(p.install)?(r.add(p),p.install(u,...d)):me(p)?(r.add(p),p(u,...d)):R('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return l.mixins.includes(p)?R("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):l.mixins.push(p),u},component(p,d){return Vo(p,l.config),d?(l.components[p]&&R(`Component "${p}" has already been registered in target app.`),l.components[p]=d,u):l.components[p]},directive(p,d){return Oc(p),d?(l.directives[p]&&R(`Directive "${p}" has already been registered in target app.`),l.directives[p]=d,u):l.directives[p]},mount(p,d,f){if(c)R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const m=N(o,a);return m.appContext=l,l.reload=()=>{n(Pn(m),p,f)},d&&t?t(m,p):n(m,p,f),c=!0,u._container=p,p.__vue_app__=u,u._instance=m.component,Id(u,El),ro(m.component)||m.component.proxy}},unmount(){c?(n(null,u._container),u._instance=null,xd(u),delete u._container.__vue_app__):R("Cannot unmount an app that is not mounted.")},provide(p,d){return p in l.provides&&R(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),l.provides[p]=d,u}};return u}}function jo(n,t,s,o,a=!1){if(ce(n)){n.forEach((m,_)=>jo(m,t&&(ce(t)?t[_]:t),s,o,a));return}if(hs(o)&&!a)return;const l=o.shapeFlag&4?ro(o.component)||o.component.proxy:o.el,r=a?null:l,{i:c,r:u}=n;if(!c){R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=t&&t.r,d=c.refs===Pe?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==u&&(Ue(p)?(d[p]=null,we(f,p)&&(f[p]=null)):Ce(p)&&(p.value=null)),me(u))ot(u,c,12,[r,d]);else{const m=Ue(u),_=Ce(u);if(m||_){const g=()=>{if(n.f){const k=m?we(f,u)?f[u]:d[u]:u.value;a?ce(k)&&pa(k,l):ce(k)?k.includes(l)||k.push(l):m?(d[u]=[l],we(f,u)&&(f[u]=d[u])):(u.value=[l],n.k&&(d[n.k]=u.value))}else m?(d[u]=r,we(f,u)&&(f[u]=r)):_?(u.value=r,n.k&&(d[n.k]=r)):R("Invalid template ref type:",u,`(${typeof u})`)};r?(g.id=-1,Je(g,s)):g()}else R("Invalid template ref type:",u,`(${typeof u})`)}}let $s,kt;function Xn(n,t){n.appContext.config.performance&&Bi()&&kt.mark(`vue-${t}-${n.uid}`),Cd(n,t,Bi()?kt.now():Date.now())}function Jn(n,t){if(n.appContext.config.performance&&Bi()){const s=`vue-${t}-${n.uid}`,o=s+":end";kt.mark(o),kt.measure(`<${co(n,n.type)}> ${t}`,s,o),kt.clearMarks(s),kt.clearMarks(o)}zd(n,t,Bi()?kt.now():Date.now())}function Bi(){return $s!==void 0||(typeof window<"u"&&window.performance?($s=!0,kt=window.performance):$s=!1),$s}function wf(){const n=[];if(n.length){const t=n.length>1;console.warn(`Feature flag${t?"s":""} ${n.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Je=Pd;function If(n){return xf(n)}function xf(n,t){wf();const s=qr();s.__VUE__=!0,bc(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:a,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:f,nextSibling:m,setScopeId:_=mn,insertStaticContent:g}=n,k=(h,v,x,P=null,T=null,B=null,Z=!1,U=null,V=wt?!1:!!v.dynamicChildren)=>{if(h===v)return;h&&!bt(h,v)&&(P=te(h),fn(h,T,B,!0),h=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:D,ref:oe,shapeFlag:ie}=v;switch(D){case fi:y(h,v,x,P);break;case Ze:z(h,v,x,P);break;case zi:h==null?E(v,x,P,Z):F(h,v,x,Z);break;case Se:Ie(h,v,x,P,T,B,Z,U,V);break;default:ie&1?G(h,v,x,P,T,B,Z,U,V):ie&6?Ne(h,v,x,P,T,B,Z,U,V):ie&64||ie&128?D.process(h,v,x,P,T,B,Z,U,V,Ee):R("Invalid VNode type:",D,`(${typeof D})`)}oe!=null&&T&&jo(oe,h&&h.ref,B,v||h,!v)},y=(h,v,x,P)=>{if(h==null)o(v.el=c(v.children),x,P);else{const T=v.el=h.el;v.children!==h.children&&p(T,v.children)}},z=(h,v,x,P)=>{h==null?o(v.el=u(v.children||""),x,P):v.el=h.el},E=(h,v,x,P)=>{[h.el,h.anchor]=g(h.children,v,x,P,h.el,h.anchor)},F=(h,v,x,P)=>{if(v.children!==h.children){const T=m(h.anchor);q(h),[v.el,v.anchor]=g(v.children,x,T,P)}else v.el=h.el,v.anchor=h.anchor},O=({el:h,anchor:v},x,P)=>{let T;for(;h&&h!==v;)T=m(h),o(h,x,P),h=T;o(v,x,P)},q=({el:h,anchor:v})=>{let x;for(;h&&h!==v;)x=m(h),a(h),h=x;a(v)},G=(h,v,x,P,T,B,Z,U,V)=>{Z=Z||v.type==="svg",h==null?j(v,x,P,T,B,Z,U,V):ae(h,v,T,B,Z,U,V)},j=(h,v,x,P,T,B,Z,U)=>{let V,D;const{type:oe,props:ie,shapeFlag:re,transition:ve,dirs:xe}=h;if(V=h.el=r(h.type,B,ie&&ie.is,ie),re&8?d(V,h.children):re&16&&se(h.children,V,null,P,T,B&&oe!=="foreignObject",Z,U),xe&&Ot(h,null,P,"created"),H(V,h,h.scopeId,Z,P),ie){for(const Ae in ie)Ae!=="value"&&!Ei(Ae)&&l(V,Ae,null,ie[Ae],B,h.children,P,T,Y);"value"in ie&&l(V,"value",null,ie.value),(D=ie.onVnodeBeforeMount)&&In(D,P,h)}Object.defineProperty(V,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(V,"__vueParentComponent",{value:P,enumerable:!1}),xe&&Ot(h,null,P,"beforeMount");const De=(!T||T&&!T.pendingBranch)&&ve&&!ve.persisted;De&&ve.beforeEnter(V),o(V,v,x),((D=ie&&ie.onVnodeMounted)||De||xe)&&Je(()=>{D&&In(D,P,h),De&&ve.enter(V),xe&&Ot(h,null,P,"mounted")},T)},H=(h,v,x,P,T)=>{if(x&&_(h,x),P)for(let B=0;B<P.length;B++)_(h,P[B]);if(T){let B=T.subTree;if(B.patchFlag>0&&B.patchFlag&2048&&(B=xc(B.children)||B),v===B){const Z=T.vnode;H(h,Z,Z.scopeId,Z.slotScopeIds,T.parent)}}},se=(h,v,x,P,T,B,Z,U,V=0)=>{for(let D=V;D<h.length;D++){const oe=h[D]=U?_t(h[D]):Ln(h[D]);k(null,oe,v,x,P,T,B,Z,U)}},ae=(h,v,x,P,T,B,Z)=>{const U=v.el=h.el;let{patchFlag:V,dynamicChildren:D,dirs:oe}=v;V|=h.patchFlag&16;const ie=h.props||Pe,re=v.props||Pe;let ve;x&&Lt(x,!1),(ve=re.onVnodeBeforeUpdate)&&In(ve,x,v,h),oe&&Ot(v,h,x,"beforeUpdate"),x&&Lt(x,!0),wt&&(V=0,Z=!1,D=null);const xe=T&&v.type!=="foreignObject";if(D?(fe(h.dynamicChildren,D,U,x,P,xe,B),x&&x.type.__hmrId&&Hs(h,v)):Z||ke(h,v,U,null,x,P,xe,B,!1),V>0){if(V&16)X(U,v,ie,re,x,P,T);else if(V&2&&ie.class!==re.class&&l(U,"class",null,re.class,T),V&4&&l(U,"style",ie.style,re.style,T),V&8){const De=v.dynamicProps;for(let Ae=0;Ae<De.length;Ae++){const Ve=De[Ae],Fn=ie[Ve],ss=re[Ve];(ss!==Fn||Ve==="value")&&l(U,Ve,Fn,ss,T,h.children,x,P,Y)}}V&1&&h.children!==v.children&&d(U,v.children)}else!Z&&D==null&&X(U,v,ie,re,x,P,T);((ve=re.onVnodeUpdated)||oe)&&Je(()=>{ve&&In(ve,x,v,h),oe&&Ot(v,h,x,"updated")},P)},fe=(h,v,x,P,T,B,Z)=>{for(let U=0;U<v.length;U++){const V=h[U],D=v[U],oe=V.el&&(V.type===Se||!bt(V,D)||V.shapeFlag&70)?f(V.el):x;k(V,D,oe,null,P,T,B,Z,!0)}},X=(h,v,x,P,T,B,Z)=>{if(x!==P){if(x!==Pe)for(const U in x)!Ei(U)&&!(U in P)&&l(h,U,x[U],null,Z,v.children,T,B,Y);for(const U in P){if(Ei(U))continue;const V=P[U],D=x[U];V!==D&&U!=="value"&&l(h,U,D,V,Z,v.children,T,B,Y)}"value"in P&&l(h,"value",x.value,P.value)}},Ie=(h,v,x,P,T,B,Z,U,V)=>{const D=v.el=h?h.el:c(""),oe=v.anchor=h?h.anchor:c("");let{patchFlag:ie,dynamicChildren:re,slotScopeIds:ve}=v;(wt||ie&2048)&&(ie=0,V=!1,re=null),ve&&(U=U?U.concat(ve):ve),h==null?(o(D,x,P),o(oe,x,P),se(v.children,x,oe,T,B,Z,U,V)):ie>0&&ie&64&&re&&h.dynamicChildren?(fe(h.dynamicChildren,re,x,T,B,Z,U),T&&T.type.__hmrId?Hs(h,v):(v.key!=null||T&&v===T.subTree)&&Hs(h,v,!0)):ke(h,v,x,oe,T,B,Z,U,V)},Ne=(h,v,x,P,T,B,Z,U,V)=>{v.slotScopeIds=U,h==null?v.shapeFlag&512?T.ctx.activate(v,x,P,Z,V):ze(v,x,P,T,B,Z,V):Re(h,v,V)},ze=(h,v,x,P,T,B,Z)=>{const U=h.component=Tf(h,P,T);if(U.type.__hmrId&&kd(U),$i(h),Xn(U,"mount"),ui(h)&&(U.ctx.renderer=Ee),Xn(U,"init"),Pf(U),Jn(U,"init"),U.asyncDep){if(T&&T.registerDep(U,J),!h.el){const V=U.subTree=N(Ze);z(null,V,v,x)}return}J(U,h,v,x,T,B,Z),Ci(),Jn(U,"mount")},Re=(h,v,x)=>{const P=v.component=h.component;if(Td(h,v,x))if(P.asyncDep&&!P.asyncResolved){$i(v),ue(P,v,x),Ci();return}else P.next=v,gd(P.update),P.update();else v.el=h.el,P.vnode=v},J=(h,v,x,P,T,B,Z)=>{const U=()=>{if(h.isMounted){let{next:oe,bu:ie,u:re,parent:ve,vnode:xe}=h,De=oe,Ae;$i(oe||h.vnode),Lt(h,!1),oe?(oe.el=xe.el,ue(h,oe,Z)):oe=xe,ie&&vt(ie),(Ae=oe.props&&oe.props.onVnodeBeforeUpdate)&&In(Ae,ve,oe,xe),Lt(h,!0),Xn(h,"render");const Ve=fo(h);Jn(h,"render");const Fn=h.subTree;h.subTree=Ve,Xn(h,"patch"),k(Fn,Ve,f(Fn.el),te(Fn),h,T,B),Jn(h,"patch"),oe.el=Ve.el,De===null&&Ad(h,Ve.el),re&&Je(re,T),(Ae=oe.props&&oe.props.onVnodeUpdated)&&Je(()=>In(Ae,ve,oe,xe),T),yc(h),Ci()}else{let oe;const{el:ie,props:re}=v,{bm:ve,m:xe,parent:De}=h,Ae=hs(v);if(Lt(h,!1),ve&&vt(ve),!Ae&&(oe=re&&re.onVnodeBeforeMount)&&In(oe,De,v),Lt(h,!0),ie&&de){const Ve=()=>{Xn(h,"render"),h.subTree=fo(h),Jn(h,"render"),Xn(h,"hydrate"),de(ie,h.subTree,h,T,null),Jn(h,"hydrate")};Ae?v.type.__asyncLoader().then(()=>!h.isUnmounted&&Ve()):Ve()}else{Xn(h,"render");const Ve=h.subTree=fo(h);Jn(h,"render"),Xn(h,"patch"),k(null,Ve,x,P,h,T,B),Jn(h,"patch"),v.el=Ve.el}if(xe&&Je(xe,T),!Ae&&(oe=re&&re.onVnodeMounted)){const Ve=v;Je(()=>In(oe,De,Ve),T)}(v.shapeFlag&256||De&&hs(De.vnode)&&De.vnode.shapeFlag&256)&&h.a&&Je(h.a,T),h.isMounted=!0,Po(h),v=x=P=null}},V=h.effect=new ga(U,()=>to(D),h.scope),D=h.update=()=>V.run();D.id=h.uid,Lt(h,!0),V.onTrack=h.rtc?oe=>vt(h.rtc,oe):void 0,V.onTrigger=h.rtg?oe=>vt(h.rtg,oe):void 0,D.ownerInstance=h,D()},ue=(h,v,x)=>{v.component=h;const P=h.vnode.props;h.vnode=v,h.next=null,pf(h,v.props,P,x),kf(h,v.children,x),Jt(),cl(),es()},ke=(h,v,x,P,T,B,Z,U,V=!1)=>{const D=h&&h.children,oe=h?h.shapeFlag:0,ie=v.children,{patchFlag:re,shapeFlag:ve}=v;if(re>0){if(re&128){_n(D,ie,x,P,T,B,Z,U,V);return}else if(re&256){Te(D,ie,x,P,T,B,Z,U,V);return}}ve&8?(oe&16&&Y(D,T,B),ie!==D&&d(x,ie)):oe&16?ve&16?_n(D,ie,x,P,T,B,Z,U,V):Y(D,T,B,!0):(oe&8&&d(x,""),ve&16&&se(ie,x,P,T,B,Z,U,V))},Te=(h,v,x,P,T,B,Z,U,V)=>{h=h||fs,v=v||fs;const D=h.length,oe=v.length,ie=Math.min(D,oe);let re;for(re=0;re<ie;re++){const ve=v[re]=V?_t(v[re]):Ln(v[re]);k(h[re],ve,x,null,T,B,Z,U,V)}D>oe?Y(h,T,B,!0,!1,ie):se(v,x,P,T,B,Z,U,V,ie)},_n=(h,v,x,P,T,B,Z,U,V)=>{let D=0;const oe=v.length;let ie=h.length-1,re=oe-1;for(;D<=ie&&D<=re;){const ve=h[D],xe=v[D]=V?_t(v[D]):Ln(v[D]);if(bt(ve,xe))k(ve,xe,x,null,T,B,Z,U,V);else break;D++}for(;D<=ie&&D<=re;){const ve=h[ie],xe=v[re]=V?_t(v[re]):Ln(v[re]);if(bt(ve,xe))k(ve,xe,x,null,T,B,Z,U,V);else break;ie--,re--}if(D>ie){if(D<=re){const ve=re+1,xe=ve<oe?v[ve].el:P;for(;D<=re;)k(null,v[D]=V?_t(v[D]):Ln(v[D]),x,xe,T,B,Z,U,V),D++}}else if(D>re)for(;D<=ie;)fn(h[D],T,B,!0),D++;else{const ve=D,xe=D,De=new Map;for(D=xe;D<=re;D++){const an=v[D]=V?_t(v[D]):Ln(v[D]);an.key!=null&&(De.has(an.key)&&R("Duplicate keys found during update:",JSON.stringify(an.key),"Make sure keys are unique."),De.set(an.key,D))}let Ae,Ve=0;const Fn=re-xe+1;let ss=!1,Xa=0;const Es=new Array(Fn);for(D=0;D<Fn;D++)Es[D]=0;for(D=ve;D<=ie;D++){const an=h[D];if(Ve>=Fn){fn(an,T,B,!0);continue}let Un;if(an.key!=null)Un=De.get(an.key);else for(Ae=xe;Ae<=re;Ae++)if(Es[Ae-xe]===0&&bt(an,v[Ae])){Un=Ae;break}Un===void 0?fn(an,T,B,!0):(Es[Un-xe]=D+1,Un>=Xa?Xa=Un:ss=!0,k(an,v[Un],x,null,T,B,Z,U,V),Ve++)}const Ja=ss?Ef(Es):fs;for(Ae=Ja.length-1,D=Fn-1;D>=0;D--){const an=xe+D,Un=v[an],el=an+1<oe?v[an+1].el:P;Es[D]===0?k(null,Un,x,el,T,B,Z,U,V):ss&&(Ae<0||D!==Ja[Ae]?tn(Un,x,el,2):Ae--)}}},tn=(h,v,x,P,T=null)=>{const{el:B,type:Z,transition:U,children:V,shapeFlag:D}=h;if(D&6){tn(h.component.subTree,v,x,P);return}if(D&128){h.suspense.move(v,x,P);return}if(D&64){Z.move(h,v,x,Ee);return}if(Z===Se){o(B,v,x);for(let ie=0;ie<V.length;ie++)tn(V[ie],v,x,P);o(h.anchor,v,x);return}if(Z===zi){O(h,v,x);return}if(P!==2&&D&1&&U)if(P===0)U.beforeEnter(B),o(B,v,x),Je(()=>U.enter(B),T);else{const{leave:ie,delayLeave:re,afterLeave:ve}=U,xe=()=>o(B,v,x),De=()=>{ie(B,()=>{xe(),ve&&ve()})};re?re(B,xe,De):De()}else o(B,v,x)},fn=(h,v,x,P=!1,T=!1)=>{const{type:B,props:Z,ref:U,children:V,dynamicChildren:D,shapeFlag:oe,patchFlag:ie,dirs:re}=h;if(U!=null&&jo(U,null,x,h,!0),oe&256){v.ctx.deactivate(h);return}const ve=oe&1&&re,xe=!hs(h);let De;if(xe&&(De=Z&&Z.onVnodeBeforeUnmount)&&In(De,v,h),oe&6)ee(h.component,x,P);else{if(oe&128){h.suspense.unmount(x,P);return}ve&&Ot(h,null,v,"beforeUnmount"),oe&64?h.type.remove(h,v,x,T,Ee,P):D&&(B!==Se||ie>0&&ie&64)?Y(D,v,x,!1,!0):(B===Se&&ie&384||!T&&oe&16)&&Y(V,v,x),P&&ut(h)}(xe&&(De=Z&&Z.onVnodeUnmounted)||ve)&&Je(()=>{De&&In(De,v,h),ve&&Ot(h,null,v,"unmounted")},x)},ut=h=>{const{type:v,el:x,anchor:P,transition:T}=h;if(v===Se){h.patchFlag>0&&h.patchFlag&2048&&T&&!T.persisted?h.children.forEach(Z=>{Z.type===Ze?a(Z.el):ut(Z)}):$(x,P);return}if(v===zi){q(h);return}const B=()=>{a(x),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(h.shapeFlag&1&&T&&!T.persisted){const{leave:Z,delayLeave:U}=T,V=()=>Z(x,B);U?U(h.el,B,V):V()}else B()},$=(h,v)=>{let x;for(;h!==v;)x=m(h),a(h),h=x;a(v)},ee=(h,v,x)=>{h.type.__hmrId&&bd(h);const{bum:P,scope:T,update:B,subTree:Z,um:U}=h;P&&vt(P),T.stop(),B&&(B.active=!1,fn(Z,h,v,x)),U&&Je(U,v),Je(()=>{h.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),$d(h)},Y=(h,v,x,P=!1,T=!1,B=0)=>{for(let Z=B;Z<h.length;Z++)fn(h[Z],v,x,P,T)},te=h=>h.shapeFlag&6?te(h.component.subTree):h.shapeFlag&128?h.suspense.next():m(h.anchor||h.el),ye=(h,v,x)=>{h==null?v._vnode&&fn(v._vnode,null,null,!0):k(v._vnode||null,h,v,null,null,null,x),cl(),gc(),v._vnode=h},Ee={p:k,um:fn,m:tn,r:ut,mt:ze,mc:se,pc:ke,pbc:fe,n:te,o:n};let ge,de;return t&&([ge,de]=t(Ee)),{render:ye,hydrate:ge,createApp:yf(ye,ge)}}function Lt({effect:n,update:t},s){n.allowRecurse=t.allowRecurse=s}function Hs(n,t,s=!1){const o=n.children,a=t.children;if(ce(o)&&ce(a))for(let l=0;l<o.length;l++){const r=o[l];let c=a[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=a[l]=_t(a[l]),c.el=r.el),s||Hs(r,c)),c.type===fi&&(c.el=r.el),c.type===Ze&&!c.el&&(c.el=r.el)}}function Ef(n){const t=n.slice(),s=[0];let o,a,l,r,c;const u=n.length;for(o=0;o<u;o++){const p=n[o];if(p!==0){if(a=s[s.length-1],n[a]<p){t[o]=a,s.push(o);continue}for(l=0,r=s.length-1;l<r;)c=l+r>>1,n[s[c]]<p?l=c+1:r=c;p<n[s[l]]&&(l>0&&(t[o]=s[l-1]),s[l]=o)}}for(l=s.length,r=s[l-1];l-- >0;)s[l]=r,r=t[r];return s}const $f=n=>n.__isTeleport,_s=n=>n&&(n.disabled||n.disabled===""),wl=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Wo=(n,t)=>{const s=n&&n.to;if(Ue(s))if(t){const o=t(s);return o||R(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return R("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!_s(n)&&R(`Invalid Teleport target: ${s}`),s},Cf={__isTeleport:!0,process(n,t,s,o,a,l,r,c,u,p){const{mc:d,pc:f,pbc:m,o:{insert:_,querySelector:g,createText:k,createComment:y}}=p,z=_s(t.props);let{shapeFlag:E,children:F,dynamicChildren:O}=t;if(wt&&(u=!1,O=null),n==null){const q=t.el=y("teleport start"),G=t.anchor=y("teleport end");_(q,s,o),_(G,s,o);const j=t.target=Wo(t.props,g),H=t.targetAnchor=k("");j?(_(H,j),r=r||wl(j)):z||R("Invalid Teleport target on mount:",j,`(${typeof j})`);const se=(ae,fe)=>{E&16&&d(F,ae,fe,a,l,r,c,u)};z?se(s,G):j&&se(j,H)}else{t.el=n.el;const q=t.anchor=n.anchor,G=t.target=n.target,j=t.targetAnchor=n.targetAnchor,H=_s(n.props),se=H?s:G,ae=H?q:j;if(r=r||wl(G),O?(m(n.dynamicChildren,O,se,a,l,r,c),Hs(n,t,!0)):u||f(n,t,se,ae,a,l,r,c,!1),z)H||wi(t,s,q,p,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const fe=t.target=Wo(t.props,g);fe?wi(t,fe,null,p,0):R("Invalid Teleport target on update:",G,`(${typeof G})`)}else H&&wi(t,G,j,p,1)}Bc(t)},remove(n,t,s,o,{um:a,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:f,props:m}=n;if(f&&l(d),(r||!_s(m))&&(l(p),c&16))for(let _=0;_<u.length;_++){const g=u[_];a(g,t,s,!0,!!g.dynamicChildren)}},move:wi,hydrate:zf};function wi(n,t,s,{o:{insert:o},m:a},l=2){l===0&&o(n.targetAnchor,t,s);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=n,f=l===2;if(f&&o(r,t,s),(!f||_s(d))&&u&16)for(let m=0;m<p.length;m++)a(p[m],t,s,2);f&&o(c,t,s)}function zf(n,t,s,o,a,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=t.target=Wo(t.props,u);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(_s(t.props))t.anchor=p(r(n),t,c(n),s,o,a,l),t.targetAnchor=f;else{t.anchor=r(n);let m=f;for(;m;)if(m=r(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}p(f,t,d,s,o,a,l)}Bc(t)}return t.anchor&&r(t.anchor)}const KC=Cf;function Bc(n){const t=n.ctx;if(t&&t.ut){let s=n.children[0].el;for(;s!==n.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}const Se=Symbol("Fragment"),fi=Symbol("Text"),Ze=Symbol("Comment"),zi=Symbol("Static"),Bs=[];let Tn=null;function b(n=!1){Bs.push(Tn=n?null:[])}function Ff(){Bs.pop(),Tn=Bs[Bs.length-1]||null}let Xs=1;function Il(n){Xs+=n}function Kc(n){return n.dynamicChildren=Xs>0?Tn||fs:null,Ff(),Xs>0&&Tn&&Tn.push(n),n}function ne(n,t,s,o,a,l){return Kc(e(n,t,s,o,a,l,!0))}function S(n,t,s,o,a){return Kc(N(n,t,s,o,a,!0))}function Zt(n){return n?n.__v_isVNode===!0:!1}function bt(n,t){return t.shapeFlag&6&&rs.has(t.type)?(n.shapeFlag&=-257,t.shapeFlag&=-513,!1):n.type===t.type&&n.key===t.key}const Sf=(...n)=>Of(...n),lo="__vInternal",jc=({key:n})=>n??null,Fi=({ref:n,ref_key:t,ref_for:s})=>n!=null?Ue(n)||Ce(n)||me(n)?{i:Ge,r:n,k:t,f:!!s}:n:null;function e(n,t=null,s=null,o=0,a=null,l=n===Se?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&jc(t),ref:t&&Fi(t),scopeId:io,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:o,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ge};return c?(Aa(u,s),l&128&&n.normalize(u)):s&&(u.shapeFlag|=Ue(s)?8:16),u.key!==u.key&&R("VNode created with invalid key (NaN). VNode type:",u.type),Xs>0&&!r&&Tn&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Tn.push(u),u}const N=Sf;function Of(n,t=null,s=null,o=0,a=null,l=!1){if((!n||n===Zd)&&(n||R(`Invalid vnode type when creating vnode: ${n}.`),n=Ze),Zt(n)){const c=Pn(n,t,!0);return s&&Aa(c,s),Xs>0&&!l&&Tn&&(c.shapeFlag&6?Tn[Tn.indexOf(n)]=c:Tn.push(c)),c.patchFlag|=-2,c}if(Gc(n)&&(n=n.__vccOpts),t){t=K(t);let{class:c,style:u}=t;c&&!Ue(c)&&(t.class=We(c)),Oe(u)&&(Ri(u)&&!ce(u)&&(u=Ke({},u)),t.style=en(u))}const r=Ue(n)?1:Ec(n)?128:$f(n)?64:Oe(n)?4:me(n)?2:0;return r&4&&Ri(n)&&(n=he(n),R("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,t,s,o,a,r,l,!0)}function K(n){return n?Ri(n)||lo in n?Ke({},n):n:null}function Pn(n,t,s=!1){const{props:o,ref:a,patchFlag:l,children:r}=n,c=t?pe(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&jc(c),ref:t&&t.ref?s&&a?ce(a)?a.concat(Fi(t)):[a,Fi(t)]:Fi(t):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l===-1&&ce(r)?r.map(Wc):r,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Se?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Pn(n.ssContent),ssFallback:n.ssFallback&&Pn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Wc(n){const t=Pn(n);return ce(n.children)&&(t.children=n.children.map(Wc)),t}function i(n=" ",t=0){return N(fi,null,n,t)}function be(n="",t=!1){return t?(b(),S(Ze,null,n)):N(Ze,null,n)}function Ln(n){return n==null||typeof n=="boolean"?N(Ze):ce(n)?N(Se,null,n.slice()):typeof n=="object"?_t(n):N(fi,null,String(n))}function _t(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Pn(n)}function Aa(n,t){let s=0;const{shapeFlag:o}=n;if(t==null)t=null;else if(ce(t))s=16;else if(typeof t=="object")if(o&65){const a=t.default;a&&(a._c&&(a._d=!1),Aa(n,a()),a._c&&(a._d=!0));return}else{s=32;const a=t._;!a&&!(lo in t)?t._ctx=Ge:a===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else me(t)?(t={default:t,_ctx:Ge},s=32):(t=String(t),o&64?(s=16,t=[i(t)]):s=8);n.children=t,n.shapeFlag|=s}function pe(...n){const t={};for(let s=0;s<n.length;s++){const o=n[s];for(const a in o)if(a==="class")t.class!==o.class&&(t.class=We([t.class,o.class]));else if(a==="style")t.style=en([t.style,o.style]);else if(li(a)){const l=t[a],r=o[a];r&&l!==r&&!(ce(l)&&l.includes(r))&&(t[a]=l?[].concat(l,r):r)}else a!==""&&(t[a]=o[a])}return t}function In(n,t,s,o=null){Cn(n,t,7,[s,o])}const Lf=Hc();let Mf=0;function Tf(n,t,s){const o=n.type,a=(t?t.appContext:n.appContext)||Lf,l={uid:Mf++,vnode:n,type:o,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pc(o,a),emitsOptions:Ic(o,a),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:o.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Jd(l),l.root=t?t.root:l,l.emit=Sd.bind(null,l),n.ce&&n.ce(l),l}let je=null;const Yn=()=>je||Ge,ks=n=>{je=n,n.scope.on()},Wt=()=>{je&&je.scope.off(),je=null},Af=St("slot,component");function Vo(n,t){const s=t.isNativeTag||Kr;(Af(n)||s(n))&&R("Do not use built-in or reserved HTML elements as component id: "+n)}function Vc(n){return n.vnode.shapeFlag&4}let Js=!1;function Pf(n,t=!1){Js=t;const{props:s,children:o}=n.vnode,a=Vc(n);cf(n,s,a,t),vf(n,o);const l=a?Nf(n,t):void 0;return Js=!1,l}function Nf(n,t){var s;const o=n.type;{if(o.name&&Vo(o.name,n.appContext.config),o.components){const l=Object.keys(o.components);for(let r=0;r<l.length;r++)Vo(l[r],n.appContext.config)}if(o.directives){const l=Object.keys(o.directives);for(let r=0;r<l.length;r++)Oc(l[r])}o.compilerOptions&&Rf()&&R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=ka(new Proxy(n.ctx,Mc)),ef(n);const{setup:a}=o;if(a){const l=n.setupContext=a.length>1?Qc(n):null;ks(n),Jt();const r=ot(a,n,0,[ps(n.props),l]);if(es(),Wt(),fa(r)){if(r.then(Wt,Wt),t)return r.then(c=>{xl(n,c,t)}).catch(c=>{no(c,n,0)});if(n.asyncDep=r,!n.suspense){const c=(s=o.name)!==null&&s!==void 0?s:"Anonymous";R(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else xl(n,r,t)}else qc(n,t)}function xl(n,t,s){me(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Oe(t)?(Zt(t)&&R("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=t,n.setupState=uc(t),nf(n)):t!==void 0&&R(`setup() should return an object. Received: ${t===null?"null":typeof t}`),qc(n,s)}let qo;const Rf=()=>!qo;function qc(n,t,s){const o=n.type;if(!n.render){if(!t&&qo&&!o.render){const a=o.template||Ma(n).template;if(a){Xn(n,"compile");const{isCustomElement:l,compilerOptions:r}=n.appContext.config,{delimiters:c,compilerOptions:u}=o,p=Ke(Ke({isCustomElement:l,delimiters:c},r),u);o.render=qo(a,p),Jn(n,"compile")}}n.render=o.render||mn}ks(n),Jt(),sf(n),es(),Wt(),!o.render&&n.render===mn&&!t&&(o.template?R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):R("Component is missing template or render function."))}function Df(n){return new Proxy(n.attrs,{get(t,s){return Ui(),hn(n,"get","$attrs"),t[s]},set(){return R("setupContext.attrs is readonly."),!1},deleteProperty(){return R("setupContext.attrs is readonly."),!1}})}function Qc(n){const t=o=>{if(n.exposed&&R("expose() should be called only once per setup()."),o!=null){let a=typeof o;a==="object"&&(ce(o)?a="array":Ce(o)&&(a="ref")),a!=="object"&&R(`expose() should be passed a plain object, received ${a}.`)}n.exposed=o||{}};let s;return Object.freeze({get attrs(){return s||(s=Df(n))},get slots(){return ps(n.slots)},get emit(){return(o,...a)=>n.emit(o,...a)},expose:t})}function ro(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(uc(ka(n.exposed)),{get(t,s){if(s in t)return t[s];if(s in jt)return jt[s](n)},has(t,s){return s in t||s in jt}}))}const Uf=/(?:^|[-_])(\w)/g,Hf=n=>n.replace(Uf,t=>t.toUpperCase()).replace(/[-_]/g,"");function ei(n,t=!0){return me(n)?n.displayName||n.name:n.name||t&&n.__name}function co(n,t,s=!1){let o=ei(t);if(!o&&t.__file){const a=t.__file.match(/([^/\\]+)\.\w+$/);a&&(o=a[1])}if(!o&&n&&n.parent){const a=l=>{for(const r in l)if(l[r]===t)return r};o=a(n.components||n.parent.type.components)||a(n.appContext.components)}return o?Hf(o):s?"App":"Anonymous"}function Gc(n){return me(n)&&"__vccOpts"in n}const A=(n,t)=>rd(n,t,Js);function jC(){return Bf().slots}function Bf(){const n=Yn();return n||R("useContext() called without active instance."),n.setupContext||(n.setupContext=Qc(n))}function mi(n,t,s){const o=arguments.length;return o===2?Oe(t)&&!ce(t)?Zt(t)?N(n,null,[t]):N(n,t):N(n,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&Zt(s)&&(s=[s]),N(n,t,s))}const Kf=Symbol("ssrContext"),jf=()=>{{const n=C(Kf);return n||R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function vo(n){return!!(n&&n.__v_isShallow)}function Wf(){if(typeof window>"u")return;const n={style:"color:#3ba776"},t={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},a={header(f){return Oe(f)?f.__isVue?["div",n,"VueInstance"]:Ce(f)?["div",{},["span",n,d(f)],"<",c(f.value),">"]:Bt(f)?["div",{},["span",n,vo(f)?"ShallowReactive":"Reactive"],"<",c(f),`>${zt(f)?" (readonly)":""}`]:zt(f)?["div",{},["span",n,vo(f)?"ShallowReadonly":"Readonly"],"<",c(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...l(f.$)]}};function l(f){const m=[];f.type.props&&f.props&&m.push(r("props",he(f.props))),f.setupState!==Pe&&m.push(r("setup",f.setupState)),f.data!==Pe&&m.push(r("data",he(f.data)));const _=u(f,"computed");_&&m.push(r("computed",_));const g=u(f,"inject");return g&&m.push(r("injected",g)),m.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),m}function r(f,m){return m=Ke({},m),Object.keys(m).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(m).map(_=>["div",{},["span",o,_+": "],c(m[_],!1)])]]:["span",{}]}function c(f,m=!0){return typeof f=="number"?["span",t,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:Oe(f)?["object",{object:m?he(f):f}]:["span",s,String(f)]}function u(f,m){const _=f.type;if(me(_))return;const g={};for(const k in f.ctx)p(_,k,m)&&(g[k]=f.ctx[k]);return g}function p(f,m,_){const g=f[_];if(ce(g)&&g.includes(m)||Oe(g)&&m in g||f.extends&&p(f.extends,m,_)||f.mixins&&f.mixins.some(k=>p(k,m,_)))return!0}function d(f){return vo(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(a):window.devtoolsFormatters=[a]}const El="3.2.47",Vf="http://www.w3.org/2000/svg",Pt=typeof document<"u"?document:null,$l=Pt&&Pt.createElement("template"),qf={insert:(n,t,s)=>{t.insertBefore(n,s||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,s,o)=>{const a=t?Pt.createElementNS(Vf,n):Pt.createElement(n,s?{is:s}:void 0);return n==="select"&&o&&o.multiple!=null&&a.setAttribute("multiple",o.multiple),a},createText:n=>Pt.createTextNode(n),createComment:n=>Pt.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Pt.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,s,o,a,l){const r=s?s.previousSibling:t.lastChild;if(a&&(a===l||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),s),!(a===l||!(a=a.nextSibling)););else{$l.innerHTML=o?`<svg>${n}</svg>`:n;const c=$l.content;if(o){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,s)}return[r?r.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function Qf(n,t,s){const o=n._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?n.removeAttribute("class"):s?n.setAttribute("class",t):n.className=t}function Gf(n,t,s){const o=n.style,a=Ue(s);if(s&&!a){if(t&&!Ue(t))for(const l in t)s[l]==null&&Qo(o,l,"");for(const l in s)Qo(o,l,s[l])}else{const l=o.display;a?t!==s&&(o.cssText=s):t&&n.removeAttribute("style"),"_vod"in n&&(o.display=l)}}const Yf=/[^\\];\s*$/,Cl=/\s*!important$/;function Qo(n,t,s){if(ce(s))s.forEach(o=>Qo(n,t,o));else if(s==null&&(s=""),Yf.test(s)&&R(`Unexpected semicolon at the end of '${t}' style value: '${s}'`),t.startsWith("--"))n.setProperty(t,s);else{const o=Zf(n,t);Cl.test(s)?n.setProperty(at(o),s.replace(Cl,""),"important"):n[o]=s}}const zl=["Webkit","Moz","ms"],ko={};function Zf(n,t){const s=ko[t];if(s)return s;let o=qn(t);if(o!=="filter"&&o in n)return ko[t]=o;o=Gt(o);for(let a=0;a<zl.length;a++){const l=zl[a]+o;if(l in n)return ko[t]=l}return t}const Fl="http://www.w3.org/1999/xlink";function Xf(n,t,s,o,a){if(o&&t.startsWith("xlink:"))s==null?n.removeAttributeNS(Fl,t.slice(6,t.length)):n.setAttributeNS(Fl,t,s);else{const l=_p(t);s==null||l&&!Hr(s)?n.removeAttribute(t):n.setAttribute(t,l?"":s)}}function Jf(n,t,s,o,a,l,r){if(t==="innerHTML"||t==="textContent"){o&&r(o,a,l),n[t]=s??"";return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=s;const u=s??"";(n.value!==u||n.tagName==="OPTION")&&(n.value=u),s==null&&n.removeAttribute(t);return}let c=!1;if(s===""||s==null){const u=typeof n[t];u==="boolean"?s=Hr(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{n[t]=s}catch(u){c||R(`Failed setting prop "${t}" on <${n.tagName.toLowerCase()}>: value ${s} is invalid.`,u)}c&&n.removeAttribute(t)}function cs(n,t,s,o){n.addEventListener(t,s,o)}function em(n,t,s,o){n.removeEventListener(t,s,o)}function nm(n,t,s,o,a=null){const l=n._vei||(n._vei={}),r=l[t];if(o&&r)r.value=o;else{const[c,u]=tm(t);if(o){const p=l[t]=om(o,a);cs(n,c,p,u)}else r&&(em(n,c,r,u),l[t]=void 0)}}const Sl=/(?:Once|Passive|Capture)$/;function tm(n){let t;if(Sl.test(n)){t={};let o;for(;o=n.match(Sl);)n=n.slice(0,n.length-o[0].length),t[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):at(n.slice(2)),t]}let bo=0;const sm=Promise.resolve(),im=()=>bo||(sm.then(()=>bo=0),bo=Date.now());function om(n,t){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Cn(am(o,s.value),t,5,[o])};return s.value=n,s.attached=im(),s}function am(n,t){if(ce(t)){const s=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0},t.map(o=>a=>!a._stopped&&o&&o(a))}else return t}const Ol=/^on[a-z]/,lm=(n,t,s,o,a=!1,l,r,c,u)=>{t==="class"?Qf(n,o,a):t==="style"?Gf(n,s,o):li(t)?Mi(t)||nm(n,t,s,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rm(n,t,o,a))?Jf(n,t,o,l,r,c,u):(t==="true-value"?n._trueValue=o:t==="false-value"&&(n._falseValue=o),Xf(n,t,o,a))};function rm(n,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in n&&Ol.test(t)&&me(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Ol.test(t)&&Ue(s)?!1:t in n}const dt="transition",Cs="animation",Yc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cm=Ke({},Dd.props,Yc),Mt=(n,t=[])=>{ce(n)?n.forEach(s=>s(...t)):n&&n(...t)},Ll=n=>n?ce(n)?n.some(t=>t.length>1):n.length>1:!1;function um(n){const t={};for(const X in n)X in Yc||(t[X]=n[X]);if(n.css===!1)return t;const{name:s="v",type:o,duration:a,enterFromClass:l=`${s}-enter-from`,enterActiveClass:r=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:u=l,appearActiveClass:p=r,appearToClass:d=c,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:m=`${s}-leave-active`,leaveToClass:_=`${s}-leave-to`}=n,g=pm(a),k=g&&g[0],y=g&&g[1],{onBeforeEnter:z,onEnter:E,onEnterCancelled:F,onLeave:O,onLeaveCancelled:q,onBeforeAppear:G=z,onAppear:j=E,onAppearCancelled:H=F}=t,se=(X,Ie,Ne)=>{mt(X,Ie?d:c),mt(X,Ie?p:r),Ne&&Ne()},ae=(X,Ie)=>{X._isLeaving=!1,mt(X,f),mt(X,_),mt(X,m),Ie&&Ie()},fe=X=>(Ie,Ne)=>{const ze=X?j:E,Re=()=>se(Ie,X,Ne);Mt(ze,[Ie,Re]),Ml(()=>{mt(Ie,X?u:l),et(Ie,X?d:c),Ll(ze)||Tl(Ie,o,k,Re)})};return Ke(t,{onBeforeEnter(X){Mt(z,[X]),et(X,l),et(X,r)},onBeforeAppear(X){Mt(G,[X]),et(X,u),et(X,p)},onEnter:fe(!1),onAppear:fe(!0),onLeave(X,Ie){X._isLeaving=!0;const Ne=()=>ae(X,Ie);et(X,f),Xc(),et(X,m),Ml(()=>{X._isLeaving&&(mt(X,f),et(X,_),Ll(O)||Tl(X,o,y,Ne))}),Mt(O,[X,Ne])},onEnterCancelled(X){se(X,!1),Mt(F,[X])},onAppearCancelled(X){se(X,!0),Mt(H,[X])},onLeaveCancelled(X){ae(X),Mt(q,[X])}})}function pm(n){if(n==null)return null;if(Oe(n))return[yo(n.enter),yo(n.leave)];{const t=yo(n);return[t,t]}}function yo(n){const t=Ip(n);return fd(t,"<transition> explicit duration"),t}function et(n,t){t.split(/\s+/).forEach(s=>s&&n.classList.add(s)),(n._vtc||(n._vtc=new Set)).add(t)}function mt(n,t){t.split(/\s+/).forEach(o=>o&&n.classList.remove(o));const{_vtc:s}=n;s&&(s.delete(t),s.size||(n._vtc=void 0))}function Ml(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let dm=0;function Tl(n,t,s,o){const a=n._endId=++dm,l=()=>{a===n._endId&&o()};if(s)return setTimeout(l,s);const{type:r,timeout:c,propCount:u}=Zc(n,t);if(!r)return o();const p=r+"end";let d=0;const f=()=>{n.removeEventListener(p,m),l()},m=_=>{_.target===n&&++d>=u&&f()};setTimeout(()=>{d<u&&f()},c+1),n.addEventListener(p,m)}function Zc(n,t){const s=window.getComputedStyle(n),o=g=>(s[g]||"").split(", "),a=o(`${dt}Delay`),l=o(`${dt}Duration`),r=Al(a,l),c=o(`${Cs}Delay`),u=o(`${Cs}Duration`),p=Al(c,u);let d=null,f=0,m=0;t===dt?r>0&&(d=dt,f=r,m=l.length):t===Cs?p>0&&(d=Cs,f=p,m=u.length):(f=Math.max(r,p),d=f>0?r>p?dt:Cs:null,m=d?d===dt?l.length:u.length:0);const _=d===dt&&/\b(transform|all)(,|$)/.test(o(`${dt}Property`).toString());return{type:d,timeout:f,propCount:m,hasTransform:_}}function Al(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((s,o)=>Pl(s)+Pl(n[o])))}function Pl(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Xc(){return document.body.offsetHeight}const Jc=new WeakMap,eu=new WeakMap,nu={name:"TransitionGroup",props:Ke({},cm,{tag:String,moveClass:String}),setup(n,{slots:t}){const s=Yn(),o=Cc();let a,l;return Fa(()=>{if(!a.length)return;const r=n.moveClass||`${n.name||"v"}-move`;if(!vm(a[0].el,s.vnode.el,r))return;a.forEach(hm),a.forEach(_m);const c=a.filter(gm);Xc(),c.forEach(u=>{const p=u.el,d=p.style;et(p,r),d.transform=d.webkitTransform=d.transitionDuration="";const f=p._moveCb=m=>{m&&m.target!==p||(!m||/transform$/.test(m.propertyName))&&(p.removeEventListener("transitionend",f),p._moveCb=null,mt(p,r))};p.addEventListener("transitionend",f)})}),()=>{const r=he(n),c=um(r);let u=r.tag||Se;a=l,l=t.default?za(t.default()):[];for(let p=0;p<l.length;p++){const d=l[p];d.key!=null?vs(d,Zs(d,c,o,s)):R("<TransitionGroup> children must be keyed.")}if(a)for(let p=0;p<a.length;p++){const d=a[p];vs(d,Zs(d,c,o,s)),Jc.set(d,d.el.getBoundingClientRect())}return N(u,null,l)}}},fm=n=>delete n.mode;nu.props;const mm=nu;function hm(n){const t=n.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function _m(n){eu.set(n,n.el.getBoundingClientRect())}function gm(n){const t=Jc.get(n),s=eu.get(n),o=t.left-s.left,a=t.top-s.top;if(o||a){const l=n.el.style;return l.transform=l.webkitTransform=`translate(${o}px,${a}px)`,l.transitionDuration="0s",n}}function vm(n,t,s){const o=n.cloneNode();n._vtc&&n._vtc.forEach(r=>{r.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),s.split(/\s+/).forEach(r=>r&&o.classList.add(r)),o.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(o);const{hasTransform:l}=Zc(o);return a.removeChild(o),l}const Nl=n=>{const t=n.props["onUpdate:modelValue"]||!1;return ce(t)?s=>vt(t,s):t};function km(n){n.target.composing=!0}function Rl(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const bm={created(n,{modifiers:{lazy:t,trim:s,number:o}},a){n._assign=Nl(a);const l=o||a.props&&a.props.type==="number";cs(n,t?"change":"input",r=>{if(r.target.composing)return;let c=n.value;s&&(c=c.trim()),l&&(c=So(c)),n._assign(c)}),s&&cs(n,"change",()=>{n.value=n.value.trim()}),t||(cs(n,"compositionstart",km),cs(n,"compositionend",Rl),cs(n,"change",Rl))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,modifiers:{lazy:s,trim:o,number:a}},l){if(n._assign=Nl(l),n.composing||document.activeElement===n&&n.type!=="range"&&(s||o&&n.value.trim()===t||(a||n.type==="number")&&So(n.value)===t))return;const r=t??"";n.value!==r&&(n.value=r)}},ym={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dl=(n,t)=>s=>{if(!("key"in s))return;const o=at(s.key);if(t.some(a=>a===o||ym[a]===o))return n(s)},tu={beforeMount(n,{value:t},{transition:s}){n._vod=n.style.display==="none"?"":n.style.display,s&&t?s.beforeEnter(n):zs(n,t)},mounted(n,{value:t},{transition:s}){s&&t&&s.enter(n)},updated(n,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(n),zs(n,!0),o.enter(n)):o.leave(n,()=>{zs(n,!1)}):zs(n,t))},beforeUnmount(n,{value:t}){zs(n,t)}};function zs(n,t){n.style.display=t?n._vod:"none"}const wm=Ke({patchProp:lm},qf);let Ul;function Im(){return Ul||(Ul=If(wm))}const WC=(...n)=>{const t=Im().createApp(...n);xm(t),Em(t);const{mount:s}=t;return t.mount=o=>{const a=$m(o);if(!a)return;const l=t._component;!me(l)&&!l.render&&!l.template&&(l.template=a.innerHTML),a.innerHTML="";const r=s(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),r},t};function xm(n){Object.defineProperty(n.config,"isNativeTag",{value:t=>fp(t)||mp(t),writable:!1})}function Em(n){{const t=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return t},set(){R("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=n.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(n.config,"compilerOptions",{get(){return R(o),s},set(){R(o)}})}}function $m(n){if(Ue(n)){const t=document.querySelector(n);return t||R(`Failed to mount app: mount target selector "${n}" returned null.`),t}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&R('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function Cm(){Wf()}Cm();const su=Symbol("v-click-clicks"),iu=Symbol("v-click-clicks-elements"),zm=Symbol("v-click-clicks-order-map"),ou=Symbol("v-click-clicks-disabled"),au=Symbol("slidev-slide-scale"),L=Symbol("slidev-slidev-context"),Fm=Symbol("slidev-route"),Sm=Symbol("slidev-slide-context"),Om="slidev-vclick-target",VC="slidev-vclick-hidden",qC="slidev-vclick-fade",QC="slidev-vclick-hidden-explicitly",GC="slidev-vclick-current",YC="slidev-vclick-prior",ZC=["localhost","127.0.0.1"];function Lm(n,t){if(!n)return!1;const s=n.indexOf(t);return s>=0?(n.splice(s,1),!0):!1}function Mm(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const a=[];let l=t;for(;l<s;)a.push(l),l+=o||1;return a}function Tm(n){return n!=null}function Am(n,t){return Object.fromEntries(Object.entries(n).map(([s,o])=>t(s,o)).filter(Tm))}const Rs={theme:"default",title:"I File",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",materia:"INFORMATICA",as:"2022/2023",version:"1.1.0"},Le=Rs,It=Le.aspectRatio??16/9,xt=Le.canvasWidth??980,Pa=Math.ceil(xt/It),Na=A(()=>Am(Le.themeConfig||{},(n,t)=>[`--slidev-theme-${n}`,t]));function zn(n,t,s){Object.defineProperty(n,t,{value:s,writable:!0,enumerable:!1})}const ns=nn({page:0,clicks:0});let Pm=[],Nm=[];zn(ns,"$syncUp",!0);zn(ns,"$syncDown",!0);zn(ns,"$paused",!1);zn(ns,"$onSet",n=>Pm.push(n));zn(ns,"$onPatch",n=>Nm.push(n));zn(ns,"$patch",async()=>!1);function lu(n,t,s=!1){const o=[];let a=!1,l=!1,r,c;const u=nn(t);function p(_){o.push(_)}function d(_,g){u[_]!==g&&(clearTimeout(r),a=!0,u[_]=g,r=setTimeout(()=>a=!1,0))}function f(_){a||(clearTimeout(c),l=!0,Object.entries(_).forEach(([g,k])=>{u[g]=k}),c=setTimeout(()=>l=!1,0))}function m(_){let g;s?s&&window.addEventListener("storage",y=>{y&&y.key===_&&y.newValue&&f(JSON.parse(y.newValue))}):(g=new BroadcastChannel(_),g.addEventListener("message",y=>f(y.data)));function k(){!s&&g&&!l?g.postMessage(he(u)):s&&!l&&window.localStorage.setItem(_,JSON.stringify(u)),a||o.forEach(y=>y(u))}if(He(u,k,{deep:!0}),s){const y=window.localStorage.getItem(_);y&&f(JSON.parse(y))}}return{init:m,onPatch:p,patch:d,state:u}}const{init:XC,onPatch:JC,patch:ez,state:wo}=lu(ns,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ts=nn({});let Rm=[],Dm=[];zn(ts,"$syncUp",!0);zn(ts,"$syncDown",!0);zn(ts,"$paused",!1);zn(ts,"$onSet",n=>Rm.push(n));zn(ts,"$onPatch",n=>Dm.push(n));zn(ts,"$patch",async()=>!1);const{init:nz,onPatch:Um,patch:ru,state:Ki}=lu(ts,{},!1),Hm="modulepreload",Bm=function(n){return"/INFORMATICA/3/files/"+n},Hl={},Et=function(t,s,o){if(!s||s.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=Bm(l),l in Hl)return;Hl[l]=!0;const r=l.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!o)for(let d=a.length-1;d>=0;d--){const f=a[d];if(f.href===l&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Hm,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};var Bl;const Nn=typeof window<"u",Km=n=>typeof n<"u",jm=Object.prototype.toString,ni=n=>typeof n=="function",tz=n=>typeof n=="number",cu=n=>typeof n=="string",sz=n=>jm.call(n)==="[object Object]",Go=()=>+Date.now(),Ks=()=>{};Nn&&((Bl=window==null?void 0:window.navigator)!=null&&Bl.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pn(n){return typeof n=="function"?n():w(n)}function Wm(n,t){function s(...o){return new Promise((a,l)=>{Promise.resolve(n(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(a).catch(l)})}return s}const uu=n=>n();function Vm(n=uu){const t=le(!0);function s(){t.value=!1}function o(){t.value=!0}const a=(...l)=>{t.value&&n(...l)};return{isActive:jn(t),pause:s,resume:o,eventFilter:a}}function qm(n){return n}function Qm(n,t){var s;if(typeof n=="number")return n+t;const o=((s=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",a=n.slice(o.length),l=parseFloat(o)+t;return Number.isNaN(l)?n:l+a}function Gm(n,t){let s,o,a;const l=le(!0),r=()=>{l.value=!0,a()};He(n,r,{flush:"sync"});const c=ni(t)?t:t.get,u=ni(t)?void 0:t.set,p=pc((d,f)=>(o=d,a=f,{get(){return l.value&&(s=c(),l.value=!1),o(),s},set(m){u==null||u(m)}}));return Object.isExtensible(p)&&(p.trigger=r),p}function Gn(n){return Gr()?(Ep(n),!0):!1}function Ym(n){if(!Ce(n))return nn(n);const t=new Proxy({},{get(s,o,a){return w(Reflect.get(n.value,o,a))},set(s,o,a){return Ce(n.value[o])&&!Ce(a)?n.value[o].value=a:n.value[o]=a,!0},deleteProperty(s,o){return Reflect.deleteProperty(n.value,o)},has(s,o){return Reflect.has(n.value,o)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return nn(t)}function pu(n){return typeof n=="function"?A(n):le(n)}var Zm=Object.defineProperty,Xm=Object.defineProperties,Jm=Object.getOwnPropertyDescriptors,Kl=Object.getOwnPropertySymbols,eh=Object.prototype.hasOwnProperty,nh=Object.prototype.propertyIsEnumerable,jl=(n,t,s)=>t in n?Zm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,th=(n,t)=>{for(var s in t||(t={}))eh.call(t,s)&&jl(n,s,t[s]);if(Kl)for(var s of Kl(t))nh.call(t,s)&&jl(n,s,t[s]);return n},sh=(n,t)=>Xm(n,Jm(t));function ih(n){if(!Ce(n))return id(n);const t=Array.isArray(n.value)?new Array(n.value.length):{};for(const s in n.value)t[s]=pc(()=>({get(){return n.value[s]},set(o){if(Array.isArray(n.value)){const a=[...n.value];a[s]=o,n.value=a}else{const a=sh(th({},n.value),{[s]:o});Object.setPrototypeOf(a,n.value),n.value=a}}}));return t}function Ra(n,t=!0){Yn()?pi(n):t?n():An(n)}function iz(n){Yn()&&ao(n)}function oh(n,t=1e3,s={}){const{immediate:o=!0,immediateCallback:a=!1}=s;let l=null;const r=le(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){const d=pn(t);d<=0||(r.value=!0,a&&n(),c(),l=setInterval(n,d))}if(o&&Nn&&p(),Ce(t)||ni(t)){const d=He(t,()=>{r.value&&Nn&&p()});Gn(d)}return Gn(u),{isActive:r,pause:u,resume:p}}function ah(n,t,s={}){const{immediate:o=!0}=s,a=le(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){a.value=!1,r()}function u(...p){r(),a.value=!0,l=setTimeout(()=>{a.value=!1,l=null,n(...p)},pn(t))}return o&&(a.value=!0,Nn&&u()),Gn(c),{isPending:jn(a),start:u,stop:c}}function du(n=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,a=Ce(n),l=le(n);function r(c){if(arguments.length)return l.value=c,l.value;{const u=pn(s);return l.value=l.value===u?pn(o):u,l.value}}return a?r:[l,r]}var Wl=Object.getOwnPropertySymbols,lh=Object.prototype.hasOwnProperty,rh=Object.prototype.propertyIsEnumerable,ch=(n,t)=>{var s={};for(var o in n)lh.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Wl)for(var o of Wl(n))t.indexOf(o)<0&&rh.call(n,o)&&(s[o]=n[o]);return s};function uh(n,t,s={}){const o=s,{eventFilter:a=uu}=o,l=ch(o,["eventFilter"]);return He(n,Wm(a,t),l)}var ph=Object.defineProperty,dh=Object.defineProperties,fh=Object.getOwnPropertyDescriptors,ji=Object.getOwnPropertySymbols,fu=Object.prototype.hasOwnProperty,mu=Object.prototype.propertyIsEnumerable,Vl=(n,t,s)=>t in n?ph(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,mh=(n,t)=>{for(var s in t||(t={}))fu.call(t,s)&&Vl(n,s,t[s]);if(ji)for(var s of ji(t))mu.call(t,s)&&Vl(n,s,t[s]);return n},hh=(n,t)=>dh(n,fh(t)),_h=(n,t)=>{var s={};for(var o in n)fu.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&ji)for(var o of ji(n))t.indexOf(o)<0&&mu.call(n,o)&&(s[o]=n[o]);return s};function gh(n,t,s={}){const o=s,{eventFilter:a}=o,l=_h(o,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=Vm(a);return{stop:uh(n,t,hh(mh({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function $n(n){var t;const s=pn(n);return(t=s==null?void 0:s.$el)!=null?t:s}const Xe=Nn?window:void 0,hu=Nn?window.document:void 0,vh=Nn?window.navigator:void 0;function Me(...n){let t,s,o,a;if(cu(n[0])||Array.isArray(n[0])?([s,o,a]=n,t=Xe):[t,s,o,a]=n,!t)return Ks;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const l=[],r=()=>{l.forEach(d=>d()),l.length=0},c=(d,f,m)=>(d.addEventListener(f,m,a),()=>d.removeEventListener(f,m,a)),u=He(()=>$n(t),d=>{r(),d&&l.push(...s.flatMap(f=>o.map(m=>c(d,f,m))))},{immediate:!0,flush:"post"}),p=()=>{u(),r()};return Gn(p),p}function kh(n,t,s={}){const{window:o=Xe,ignore:a=[],capture:l=!0,detectIframe:r=!1}=s;if(!o)return;let c=!0,u;const p=_=>a.some(g=>{if(typeof g=="string")return Array.from(o.document.querySelectorAll(g)).some(k=>k===_.target||_.composedPath().includes(k));{const k=$n(g);return k&&(_.target===k||_.composedPath().includes(k))}}),d=_=>{o.clearTimeout(u);const g=$n(n);if(!(!g||g===_.target||_.composedPath().includes(g))){if(_.detail===0&&(c=!p(_)),!c){c=!0;return}t(_)}},f=[Me(o,"click",d,{passive:!0,capture:l}),Me(o,"pointerdown",_=>{const g=$n(n);g&&(c=!_.composedPath().includes(g)&&!p(_))},{passive:!0}),Me(o,"pointerup",_=>{if(_.button===0){const g=_.composedPath();_.composedPath=()=>g,u=o.setTimeout(()=>d(_),50)}},{passive:!0}),r&&Me(o,"blur",_=>{var g;const k=$n(n);((g=o.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(k!=null&&k.contains(o.document.activeElement))&&t(_)})].filter(Boolean);return()=>f.forEach(_=>_())}const bh=n=>typeof n=="function"?n:typeof n=="string"?t=>t.key===n:Array.isArray(n)?t=>n.includes(t.key):()=>!0;function yh(...n){let t,s,o={};n.length===3?(t=n[0],s=n[1],o=n[2]):n.length===2?typeof n[1]=="object"?(t=!0,s=n[0],o=n[1]):(t=n[0],s=n[1]):(t=!0,s=n[0]);const{target:a=Xe,eventName:l="keydown",passive:r=!1}=o,c=bh(t);return Me(a,l,p=>{c(p)&&s(p)},r)}function wh(n={}){var t;const{window:s=Xe}=n,o=(t=n.document)!=null?t:s==null?void 0:s.document,a=Gm(()=>null,()=>o==null?void 0:o.activeElement);return s&&(Me(s,"blur",l=>{l.relatedTarget===null&&a.trigger()},!0),Me(s,"focus",a.trigger,!0)),a}function hi(n,t=!1){const s=le(),o=()=>s.value=Boolean(n());return o(),Ra(o,t),s}function us(n,t={}){const{window:s=Xe}=t,o=hi(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let a;const l=le(!1),r=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",c):a.removeListener(c))},c=()=>{o.value&&(r(),a=s.matchMedia(pu(n).value),l.value=a.matches,"addEventListener"in a?a.addEventListener("change",c):a.addListener(c))};return Is(c),Gn(()=>r()),l}const Ih={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var xh=Object.defineProperty,ql=Object.getOwnPropertySymbols,Eh=Object.prototype.hasOwnProperty,$h=Object.prototype.propertyIsEnumerable,Ql=(n,t,s)=>t in n?xh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Ch=(n,t)=>{for(var s in t||(t={}))Eh.call(t,s)&&Ql(n,s,t[s]);if(ql)for(var s of ql(t))$h.call(t,s)&&Ql(n,s,t[s]);return n};function zh(n,t={}){function s(c,u){let p=n[c];return u!=null&&(p=Qm(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=Xe}=t;function a(c){return o?o.matchMedia(c).matches:!1}const l=c=>us(`(min-width: ${s(c)})`,t),r=Object.keys(n).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Ch({greater(c){return us(`(min-width: ${s(c,.1)})`,t)},greaterOrEqual:l,smaller(c){return us(`(max-width: ${s(c,-.1)})`,t)},smallerOrEqual(c){return us(`(max-width: ${s(c)})`,t)},between(c,u){return us(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`,t)},isGreater(c){return a(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return a(`(min-width: ${s(c)})`)},isSmaller(c){return a(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return a(`(max-width: ${s(c)})`)},isInBetween(c,u){return a(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`)}},r)}function Fh(n={}){const{navigator:t=vh,read:s=!1,source:o,copiedDuring:a=1500,legacy:l=!1}=n,r=["copy","cut"],c=hi(()=>t&&"clipboard"in t),u=A(()=>c.value||l),p=le(""),d=le(!1),f=ah(()=>d.value=!1,a);function m(){c.value?t.clipboard.readText().then(y=>{p.value=y}):p.value=k()}if(u.value&&s)for(const y of r)Me(y,m);async function _(y=pn(o)){u.value&&y!=null&&(c.value?await t.clipboard.writeText(y):g(y),p.value=y,d.value=!0,f.start())}function g(y){const z=document.createElement("textarea");z.value=y??"",z.style.position="absolute",z.style.opacity="0",document.body.appendChild(z),z.select(),document.execCommand("copy"),z.remove()}function k(){var y,z,E;return(E=(z=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:z.toString())!=null?E:""}return{isSupported:u,text:p,copied:d,copy:_}}function Sh(n){return JSON.parse(JSON.stringify(n))}const Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zo="__vueuse_ssr_handlers__";Yo[Zo]=Yo[Zo]||{};const Oh=Yo[Zo];function Lh(n,t){return Oh[n]||t}function Mh(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var Th=Object.defineProperty,Gl=Object.getOwnPropertySymbols,Ah=Object.prototype.hasOwnProperty,Ph=Object.prototype.propertyIsEnumerable,Yl=(n,t,s)=>t in n?Th(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Zl=(n,t)=>{for(var s in t||(t={}))Ah.call(t,s)&&Yl(n,s,t[s]);if(Gl)for(var s of Gl(t))Ph.call(t,s)&&Yl(n,s,t[s]);return n};const Nh={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}};function Rh(n,t,s,o={}){var a;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:f=Xe,eventFilter:m,onError:_=j=>{console.error(j)}}=o,g=(d?Qn:le)(t);if(!s)try{s=Lh("getDefaultStorage",()=>{var j;return(j=Xe)==null?void 0:j.localStorage})()}catch(j){_(j)}if(!s)return g;const k=pn(t),y=Mh(k),z=(a=o.serializer)!=null?a:Nh[y],{pause:E,resume:F}=gh(g,()=>O(g.value),{flush:l,deep:r,eventFilter:m});return f&&c&&Me(f,"storage",G),G(),g;function O(j){try{if(j==null)s.removeItem(n);else{const H=z.write(j),se=s.getItem(n);se!==H&&(s.setItem(n,H),f&&(f==null||f.dispatchEvent(new StorageEvent("storage",{key:n,oldValue:se,newValue:H,storageArea:s}))))}}catch(H){_(H)}}function q(j){const H=j?j.newValue:s.getItem(n);if(H==null)return u&&k!==null&&s.setItem(n,z.write(k)),k;if(!j&&p){const se=z.read(H);return ni(p)?p(se,k):y==="object"&&!Array.isArray(se)?Zl(Zl({},k),se):se}else return typeof H!="string"?H:z.read(H)}function G(j){if(!(j&&j.storageArea!==s)){if(j&&j.key==null){g.value=k;return}if(!(j&&j.key!==n)){E();try{g.value=q(j)}catch(H){_(H)}finally{j?An(F):F()}}}}}function Dh(n){return us("(prefers-color-scheme: dark)",n)}var Uh=Object.defineProperty,Hh=Object.defineProperties,Bh=Object.getOwnPropertyDescriptors,Xl=Object.getOwnPropertySymbols,Kh=Object.prototype.hasOwnProperty,jh=Object.prototype.propertyIsEnumerable,Jl=(n,t,s)=>t in n?Uh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Wh=(n,t)=>{for(var s in t||(t={}))Kh.call(t,s)&&Jl(n,s,t[s]);if(Xl)for(var s of Xl(t))jh.call(t,s)&&Jl(n,s,t[s]);return n},Vh=(n,t)=>Hh(n,Bh(t));function oz(n,t={}){var s,o,a;const l=(s=t.draggingElement)!=null?s:Xe,r=(o=t.handle)!=null?o:n,c=le((a=pn(t.initialValue))!=null?a:{x:0,y:0}),u=le(),p=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,d=g=>{pn(t.preventDefault)&&g.preventDefault(),pn(t.stopPropagation)&&g.stopPropagation()},f=g=>{var k;if(!p(g)||pn(t.exact)&&g.target!==pn(n))return;const y=pn(n).getBoundingClientRect(),z={x:g.clientX-y.left,y:g.clientY-y.top};((k=t.onStart)==null?void 0:k.call(t,z,g))!==!1&&(u.value=z,d(g))},m=g=>{var k;p(g)&&u.value&&(c.value={x:g.clientX-u.value.x,y:g.clientY-u.value.y},(k=t.onMove)==null||k.call(t,c.value,g),d(g))},_=g=>{var k;p(g)&&u.value&&(u.value=void 0,(k=t.onEnd)==null||k.call(t,c.value,g),d(g))};return Nn&&(Me(r,"pointerdown",f,!0),Me(l,"pointermove",m,!0),Me(l,"pointerup",_,!0)),Vh(Wh({},ih(c)),{position:c,isDragging:A(()=>!!u.value),style:A(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var er=Object.getOwnPropertySymbols,qh=Object.prototype.hasOwnProperty,Qh=Object.prototype.propertyIsEnumerable,Gh=(n,t)=>{var s={};for(var o in n)qh.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&er)for(var o of er(n))t.indexOf(o)<0&&Qh.call(n,o)&&(s[o]=n[o]);return s};function Yh(n,t,s={}){const o=s,{window:a=Xe}=o,l=Gh(o,["window"]);let r;const c=hi(()=>a&&"ResizeObserver"in a),u=()=>{r&&(r.disconnect(),r=void 0)},p=He(()=>$n(n),f=>{u(),c.value&&a&&f&&(r=new ResizeObserver(t),r.observe(f,l))},{immediate:!0,flush:"post"}),d=()=>{u(),p()};return Gn(d),{isSupported:c,stop:d}}function Zh(n,t={}){const{immediate:s=!0,window:o=Xe}=t,a=le(!1);let l=0,r=null;function c(d){if(!a.value||!o)return;const f=d-l;n({delta:f,timestamp:d}),l=d,r=o.requestAnimationFrame(c)}function u(){!a.value&&o&&(a.value=!0,r=o.requestAnimationFrame(c))}function p(){a.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&u(),Gn(p),{isActive:jn(a),pause:p,resume:u}}function Xh(n,t={width:0,height:0},s={}){const{window:o=Xe,box:a="content-box"}=s,l=A(()=>{var u,p;return(p=(u=$n(n))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),r=le(t.width),c=le(t.height);return Yh(n,([u])=>{const p=a==="border-box"?u.borderBoxSize:a==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(o&&l.value){const d=$n(n);if(d){const f=o.getComputedStyle(d);r.value=parseFloat(f.width),c.value=parseFloat(f.height)}}else if(p){const d=Array.isArray(p)?p:[p];r.value=d.reduce((f,{inlineSize:m})=>f+m,0),c.value=d.reduce((f,{blockSize:m})=>f+m,0)}else r.value=u.contentRect.width,c.value=u.contentRect.height},s),He(()=>$n(n),u=>{r.value=u?t.width:0,c.value=u?t.height:0}),{width:r,height:c}}const nr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Jh(n,t={}){const{document:s=hu,autoExit:o=!1}=t,a=n||(s==null?void 0:s.querySelector("html")),l=le(!1);let r=nr[0];const c=hi(()=>{if(s){for(const k of nr)if(k[1]in s)return r=k,!0}else return!1;return!1}),[u,p,d,,f]=r;async function m(){c.value&&(s!=null&&s[d]&&await s[p](),l.value=!1)}async function _(){if(!c.value)return;await m();const k=$n(a);k&&(await k[u](),l.value=!0)}async function g(){l.value?await m():await _()}return s&&Me(s,f,()=>{l.value=!!(s!=null&&s[d])},!1),o&&Gn(m),{isSupported:c,isFullscreen:l,enter:_,exit:m,toggle:g}}function az(n,t,s={}){const{root:o,rootMargin:a="0px",threshold:l=.1,window:r=Xe}=s,c=hi(()=>r&&"IntersectionObserver"in r);let u=Ks;const p=c.value?He(()=>({el:$n(n),root:$n(o)}),({el:f,root:m})=>{if(u(),!f)return;const _=new IntersectionObserver(t,{root:m,rootMargin:a,threshold:l});_.observe(f),u=()=>{_.disconnect(),u=Ks}},{immediate:!0,flush:"post"}):Ks,d=()=>{u(),p()};return Gn(d),{isSupported:c,stop:d}}function Dn(n,t,s={}){const{window:o=Xe}=s;return Rh(n,t,o==null?void 0:o.localStorage,s)}const e_={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function n_(n={}){const{reactive:t=!1,target:s=Xe,aliasMap:o=e_,passive:a=!0,onEventFired:l=Ks}=n,r=nn(new Set),c={toJSON(){return{}},current:r},u=t?nn(c):c,p=new Set,d=new Set;function f(k,y){k in u&&(t?u[k]=y:u[k].value=y)}function m(){r.clear();for(const k of d)f(k,!1)}function _(k,y){var z,E;const F=(z=k.key)==null?void 0:z.toLowerCase(),q=[(E=k.code)==null?void 0:E.toLowerCase(),F].filter(Boolean);F&&(y?r.add(F):r.delete(F));for(const G of q)d.add(G),f(G,y);F==="meta"&&!y?(p.forEach(G=>{r.delete(G),f(G,!1)}),p.clear()):typeof k.getModifierState=="function"&&k.getModifierState("Meta")&&y&&[...r,...q].forEach(G=>p.add(G))}Me(s,"keydown",k=>(_(k,!0),l(k)),{passive:a}),Me(s,"keyup",k=>(_(k,!1),l(k)),{passive:a}),Me("blur",m,{passive:!0}),Me("focus",m,{passive:!0});const g=new Proxy(u,{get(k,y,z){if(typeof y!="string")return Reflect.get(k,y,z);if(y=y.toLowerCase(),y in o&&(y=o[y]),!(y in u))if(/[+_-]/.test(y)){const F=y.split(/[+_-]/g).map(O=>O.trim());u[y]=A(()=>F.every(O=>w(g[O])))}else u[y]=le(!1);const E=Reflect.get(k,y,z);return t?w(E):E}});return g}function lz(n={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:a={x:0,y:0},window:l=Xe,eventFilter:r}=n,c=le(a.x),u=le(a.y),p=le(null),d=k=>{t==="page"?(c.value=k.pageX,u.value=k.pageY):t==="client"?(c.value=k.clientX,u.value=k.clientY):t==="movement"&&(c.value=k.movementX,u.value=k.movementY),p.value="mouse"},f=()=>{c.value=a.x,u.value=a.y},m=k=>{if(k.touches.length>0){const y=k.touches[0];t==="page"?(c.value=y.pageX,u.value=y.pageY):t==="client"&&(c.value=y.clientX,u.value=y.clientY),p.value="touch"}},_=k=>r===void 0?d(k):r(()=>d(k),{}),g=k=>r===void 0?m(k):r(()=>m(k),{});return l&&(Me(l,"mousemove",_,{passive:!0}),Me(l,"dragover",_,{passive:!0}),s&&t!=="movement"&&(Me(l,"touchstart",g,{passive:!0}),Me(l,"touchmove",g,{passive:!0}),o&&Me(l,"touchend",f,{passive:!0}))),{x:c,y:u,sourceType:p}}var it;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(it||(it={}));function t_(n,t={}){const s=pu(n),{threshold:o=50,onSwipe:a,onSwipeEnd:l,onSwipeStart:r}=t,c=nn({x:0,y:0}),u=(G,j)=>{c.x=G,c.y=j},p=nn({x:0,y:0}),d=(G,j)=>{p.x=G,p.y=j},f=A(()=>c.x-p.x),m=A(()=>c.y-p.y),{max:_,abs:g}=Math,k=A(()=>_(g(f.value),g(m.value))>=o),y=le(!1),z=le(!1),E=A(()=>k.value?g(f.value)>g(m.value)?f.value>0?it.LEFT:it.RIGHT:m.value>0?it.UP:it.DOWN:it.NONE),F=G=>{var j,H,se;const ae=G.buttons===0,fe=G.buttons===1;return(se=(H=(j=t.pointerTypes)==null?void 0:j.includes(G.pointerType))!=null?H:ae||fe)!=null?se:!0},O=[Me(n,"pointerdown",G=>{var j,H;if(!F(G))return;z.value=!0,(H=(j=s.value)==null?void 0:j.style)==null||H.setProperty("touch-action","none");const se=G.target;se==null||se.setPointerCapture(G.pointerId);const{clientX:ae,clientY:fe}=G;u(ae,fe),d(ae,fe),r==null||r(G)}),Me(n,"pointermove",G=>{if(!F(G)||!z.value)return;const{clientX:j,clientY:H}=G;d(j,H),!y.value&&k.value&&(y.value=!0),y.value&&(a==null||a(G))}),Me(n,"pointerup",G=>{var j,H;F(G)&&(y.value&&(l==null||l(G,E.value)),z.value=!1,y.value=!1,(H=(j=s.value)==null?void 0:j.style)==null||H.setProperty("touch-action","initial"))})],q=()=>O.forEach(G=>G());return{isSwiping:jn(y),direction:jn(E),posStart:jn(c),posEnd:jn(p),distanceX:f,distanceY:m,stop:q}}let s_=0;function rz(n,t={}){const s=le(!1),{document:o=hu,immediate:a=!0,manual:l=!1,id:r=`vueuse_styletag_${++s_}`}=t,c=le(n);let u=()=>{};const p=()=>{if(!o)return;const f=o.getElementById(r)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=r,t.media&&(f.media=t.media),o.head.appendChild(f)),!s.value&&(u=He(c,m=>{f.textContent=m},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(u(),o.head.removeChild(o.getElementById(r)),s.value=!1)};return a&&!l&&Ra(p),l||Gn(d),{id:r,css:c,unload:d,load:p,isLoaded:jn(s)}}var i_=Object.defineProperty,tr=Object.getOwnPropertySymbols,o_=Object.prototype.hasOwnProperty,a_=Object.prototype.propertyIsEnumerable,sr=(n,t,s)=>t in n?i_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,l_=(n,t)=>{for(var s in t||(t={}))o_.call(t,s)&&sr(n,s,t[s]);if(tr)for(var s of tr(t))a_.call(t,s)&&sr(n,s,t[s]);return n};function cz(n={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:a="requestAnimationFrame",callback:l}=n,r=le(Go()+s),c=()=>r.value=Go()+s,u=l?()=>{c(),l(r.value)}:c,p=a==="requestAnimationFrame"?Zh(u,{immediate:o}):oh(u,a,{immediate:o});return t?l_({timestamp:r},p):r}var r_=Object.defineProperty,ir=Object.getOwnPropertySymbols,c_=Object.prototype.hasOwnProperty,u_=Object.prototype.propertyIsEnumerable,or=(n,t,s)=>t in n?r_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,p_=(n,t)=>{for(var s in t||(t={}))c_.call(t,s)&&or(n,s,t[s]);if(ir)for(var s of ir(t))u_.call(t,s)&&or(n,s,t[s]);return n};const d_={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};p_({linear:qm},d_);function Wn(n,t,s,o={}){var a,l,r;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:f}=o,m=Yn(),_=s||(m==null?void 0:m.emit)||((a=m==null?void 0:m.$emit)==null?void 0:a.bind(m))||((r=(l=m==null?void 0:m.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(m==null?void 0:m.proxy));let g=p;t||(t="modelValue"),g=p||g||`update:${t.toString()}`;const k=z=>c?ni(c)?c(z):Sh(z):z,y=()=>Km(n[t])?k(n[t]):f;if(u){const z=y(),E=le(z);return He(()=>n[t],F=>E.value=k(F)),He(E,F=>{(F!==n[t]||d)&&_(g,F)},{deep:d}),E}else return A({get(){return y()},set(z){_(g,z)}})}function uz({window:n=Xe}={}){if(!n)return le(!1);const t=le(n.document.hasFocus());return Me(n,"blur",()=>{t.value=!1}),Me(n,"focus",()=>{t.value=!0}),t}function f_(n={}){const{window:t=Xe,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:a=!0,includeScrollbar:l=!0}=n,r=le(s),c=le(o),u=()=>{t&&(l?(r.value=t.innerWidth,c.value=t.innerHeight):(r.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};return u(),Ra(u),Me("resize",u,{passive:!0}),a&&Me("orientationchange",u,{passive:!0}),{width:r,height:c}}function m_(){return _u().__VUE_DEVTOOLS_GLOBAL_HOOK__}function _u(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const h_=typeof Proxy=="function",__="devtools-plugin:setup",g_="plugin:settings:set";let is,Xo;function v_(){var n;return is!==void 0||(typeof window<"u"&&window.performance?(is=!0,Xo=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(is=!0,Xo=global.perf_hooks.performance):is=!1),is}function k_(){return v_()?Xo.now():Date.now()}class b_{constructor(t,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=s;const o={};if(t.settings)for(const r in t.settings){const c=t.settings[r];o[r]=c.defaultValue}const a=`__vue-devtools-plugin-settings__${t.id}`;let l=Object.assign({},o);try{const r=localStorage.getItem(a),c=JSON.parse(r);Object.assign(l,c)}catch{}this.fallbacks={getSettings(){return l},setSettings(r){try{localStorage.setItem(a,JSON.stringify(r))}catch{}l=r},now(){return k_()}},s&&s.on(g_,(r,c)=>{r===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(r,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(r,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(t){this.target=t;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function y_(n,t){const s=n,o=_u(),a=m_(),l=h_&&s.enableEarlyProxy;if(a&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))a.emit(__,n,t);else{const r=l?new b_(s,a):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const tt=typeof window<"u";function w_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Fe=Object.assign;function Io(n,t){const s={};for(const o in t){const a=t[o];s[o]=yn(a)?a.map(n):n(a)}return s}const js=()=>{},yn=Array.isArray;function $e(n){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(t))}const I_=/\/$/,x_=n=>n.replace(I_,"");function xo(n,t,s="/"){let o,a={},l="",r="";const c=t.indexOf("#");let u=t.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(o=t.slice(0,u),l=t.slice(u+1,c>-1?c:t.length),a=n(l)),c>-1&&(o=o||t.slice(0,c),r=t.slice(c,t.length)),o=C_(o??t,s),{fullPath:o+(l&&"?")+l+r,path:o,query:a,hash:r}}function E_(n,t){const s=t.query?n(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function ar(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function lr(n,t,s){const o=t.matched.length-1,a=s.matched.length-1;return o>-1&&o===a&&Ft(t.matched[o],s.matched[a])&&gu(t.params,s.params)&&n(t.query)===n(s.query)&&t.hash===s.hash}function Ft(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function gu(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const s in n)if(!$_(n[s],t[s]))return!1;return!0}function $_(n,t){return yn(n)?rr(n,t):yn(t)?rr(t,n):n===t}function rr(n,t){return yn(t)?n.length===t.length&&n.every((s,o)=>s===t[o]):n.length===1&&n[0]===t}function C_(n,t){if(n.startsWith("/"))return n;if(!t.startsWith("/"))return $e(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${t}". It should look like "/${t}".`),n;if(!n)return t;const s=t.split("/"),o=n.split("/");let a=s.length-1,l,r;for(l=0;l<o.length;l++)if(r=o[l],r!==".")if(r==="..")a>1&&a--;else break;return s.slice(0,a).join("/")+"/"+o.slice(l-(l===o.length?1:0)).join("/")}var ti;(function(n){n.pop="pop",n.push="push"})(ti||(ti={}));var Ws;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ws||(Ws={}));function z_(n){if(!n)if(tt){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),x_(n)}const F_=/^[^#]+#/;function S_(n,t){return n.replace(F_,"#")+t}function O_(n,t){const s=document.documentElement.getBoundingClientRect(),o=n.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const uo=()=>({left:window.pageXOffset,top:window.pageYOffset});function L_(n){let t;if("el"in n){const s=n.el,o=typeof s=="string"&&s.startsWith("#");if(typeof n.el=="string"&&(!o||!document.getElementById(n.el.slice(1))))try{const l=document.querySelector(n.el);if(o&&l){$e(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{$e(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a){$e(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}t=O_(a,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function cr(n,t){return(history.state?history.state.position-t:-1)+n}const Jo=new Map;function M_(n,t){Jo.set(n,t)}function T_(n){const t=Jo.get(n);return Jo.delete(n),t}let A_=()=>location.protocol+"//"+location.host;function vu(n,t){const{pathname:s,search:o,hash:a}=t,l=n.indexOf("#");if(l>-1){let c=a.includes(n.slice(l))?n.slice(l).length:1,u=a.slice(c);return u[0]!=="/"&&(u="/"+u),ar(u,"")}return ar(s,n)+o+a}function P_(n,t,s,o){let a=[],l=[],r=null;const c=({state:m})=>{const _=vu(n,location),g=s.value,k=t.value;let y=0;if(m){if(s.value=_,t.value=m,r&&r===g){r=null;return}y=k?m.position-k.position:0}else o(_);a.forEach(z=>{z(s.value,g,{delta:y,type:ti.pop,direction:y?y>0?Ws.forward:Ws.back:Ws.unknown})})};function u(){r=s.value}function p(m){a.push(m);const _=()=>{const g=a.indexOf(m);g>-1&&a.splice(g,1)};return l.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Fe({},m.state,{scroll:uo()}),"")}function f(){for(const m of l)m();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:p,destroy:f}}function ur(n,t,s,o=!1,a=!1){return{back:n,current:t,forward:s,replaced:o,position:window.history.length,scroll:a?uo():null}}function N_(n){const{history:t,location:s}=window,o={value:vu(n,s)},a={value:t.state};a.value||l(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const f=n.indexOf("#"),m=f>-1?(s.host&&document.querySelector("base")?n:n.slice(f))+u:A_()+n+u;try{t[d?"replaceState":"pushState"](p,"",m),a.value=p}catch(_){$e("Error with push/replace State",_),s[d?"replace":"assign"](m)}}function r(u,p){const d=Fe({},t.state,ur(a.value.back,u,a.value.forward,!0),p,{position:a.value.position});l(u,d,!0),o.value=u}function c(u,p){const d=Fe({},a.value,t.state,{forward:u,scroll:uo()});t.state||$e(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const f=Fe({},ur(o.value,u,null),{position:d.position+1},p);l(u,f,!1),o.value=u}return{location:o,state:a,push:c,replace:r}}function R_(n){n=z_(n);const t=N_(n),s=P_(n,t.state,t.location,t.replace);function o(l,r=!0){r||s.pauseListeners(),history.go(l)}const a=Fe({location:"",base:n,go:o,createHref:S_.bind(null,n)},t,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function D_(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),!n.endsWith("#/")&&!n.endsWith("#")&&$e(`A hash base must end with a "#":
"${n}" should be "${n.replace(/#.*$/,"#")}".`),R_(n)}function U_(n){return typeof n=="string"||n&&typeof n=="object"}function ku(n){return typeof n=="string"||typeof n=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bu=Symbol("navigation failure");var pr;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(pr||(pr={}));const H_={[1]({location:n,currentLocation:t}){return`No match for
 ${JSON.stringify(n)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:n,to:t}){return`Redirected from "${n.fullPath}" to "${K_(t)}" via a navigation guard.`},[4]({from:n,to:t}){return`Navigation aborted from "${n.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:n,to:t}){return`Navigation cancelled from "${n.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:n,to:t}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function bs(n,t){return Fe(new Error(H_[n](t)),{type:n,[bu]:!0},t)}function Zn(n,t){return n instanceof Error&&bu in n&&(t==null||!!(n.type&t))}const B_=["params","query","hash"];function K_(n){if(typeof n=="string")return n;if("path"in n)return n.path;const t={};for(const s of B_)s in n&&(t[s]=n[s]);return JSON.stringify(t,null,2)}const dr="[^/]+?",j_={sensitive:!1,strict:!1,start:!0,end:!0},W_=/[.+*?^${}()[\]/\\]/g;function V_(n,t){const s=Fe({},j_,t),o=[];let a=s.start?"^":"";const l=[];for(const p of n){const d=p.length?[]:[90];s.strict&&!p.length&&(a+="/");for(let f=0;f<p.length;f++){const m=p[f];let _=40+(s.sensitive?.25:0);if(m.type===0)f||(a+="/"),a+=m.value.replace(W_,"\\$&"),_+=40;else if(m.type===1){const{value:g,repeatable:k,optional:y,regexp:z}=m;l.push({name:g,repeatable:k,optional:y});const E=z||dr;if(E!==dr){_+=10;try{new RegExp(`(${E})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+O.message)}}let F=k?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(F=y&&p.length<2?`(?:/${F})`:"/"+F),y&&(F+="?"),a+=F,_+=20,y&&(_+=-8),k&&(_+=-20),E===".*"&&(_+=-50)}d.push(_)}o.push(d)}if(s.strict&&s.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}s.strict||(a+="/?"),s.end?a+="$":s.strict&&(a+="(?:/|$)");const r=new RegExp(a,s.sensitive?"":"i");function c(p){const d=p.match(r),f={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",g=l[m-1];f[g.name]=_&&g.repeatable?_.split("/"):_}return f}function u(p){let d="",f=!1;for(const m of n){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:g,repeatable:k,optional:y}=_,z=g in p?p[g]:"";if(yn(z)&&!k)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=yn(z)?z.join("/"):z;if(!E)if(y)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);d+=E}}return d||"/"}return{re:r,score:o,keys:l,parse:c,stringify:u}}function q_(n,t){let s=0;for(;s<n.length&&s<t.length;){const o=t[s]-n[s];if(o)return o;s++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Q_(n,t){let s=0;const o=n.score,a=t.score;for(;s<o.length&&s<a.length;){const l=q_(o[s],a[s]);if(l)return l;s++}if(Math.abs(a.length-o.length)===1){if(fr(o))return 1;if(fr(a))return-1}return a.length-o.length}function fr(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const G_={type:0,value:""},Y_=/[a-zA-Z0-9_]/;function Z_(n){if(!n)return[[]];if(n==="/")return[[G_]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function t(_){throw new Error(`ERR (${s})/"${p}": ${_}`)}let s=0,o=s;const a=[];let l;function r(){l&&a.push(l),l=[]}let c=0,u,p="",d="";function f(){p&&(s===0?l.push({type:0,value:p}):s===1||s===2||s===3?(l.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=u}for(;c<n.length;){if(u=n[c++],u==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:u==="/"?(p&&f(),r()):u===":"?(f(),s=1):m();break;case 4:m(),s=o;break;case 1:u==="("?s=2:Y_.test(u)?m():(f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:s=3:d+=u;break;case 3:f(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${p}"`),f(),r(),a}function X_(n,t,s){const o=V_(Z_(n.path),s);{const l=new Set;for(const r of o.keys)l.has(r.name)&&$e(`Found duplicated params with name "${r.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),l.add(r.name)}const a=Fe(o,{record:n,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function J_(n,t){const s=[],o=new Map;t=_r({strict:!1,end:!0,sensitive:!1},t);function a(d){return o.get(d)}function l(d,f,m){const _=!m,g=eg(d);ig(g,f),g.aliasOf=m&&m.record;const k=_r(t,d),y=[g];if("alias"in d){const F=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of F)y.push(Fe({},g,{components:m?m.record.components:g.components,path:O,aliasOf:m?m.record:g}))}let z,E;for(const F of y){const{path:O}=F;if(f&&O[0]!=="/"){const q=f.record.path,G=q[q.length-1]==="/"?"":"/";F.path=f.record.path+(O&&G+O)}if(F.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(z=X_(F,f,k),f&&O[0]==="/"&&og(z,f),m?(m.alias.push(z),sg(m,z)):(E=E||z,E!==z&&E.alias.push(z),_&&d.name&&!hr(z)&&r(d.name)),g.children){const q=g.children;for(let G=0;G<q.length;G++)l(q[G],z,m&&m.children[G])}m=m||z,(z.record.components&&Object.keys(z.record.components).length||z.record.name||z.record.redirect)&&u(z)}return E?()=>{r(E)}:js}function r(d){if(ku(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(r),f.alias.forEach(r))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return s}function u(d){let f=0;for(;f<s.length&&Q_(d,s[f])>=0&&(d.record.path!==s[f].record.path||!yu(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!hr(d)&&o.set(d.record.name,d)}function p(d,f){let m,_={},g,k;if("name"in d&&d.name){if(m=o.get(d.name),!m)throw bs(1,{location:d});{const E=Object.keys(d.params||{}).filter(F=>!m.keys.find(O=>O.name===F));E.length&&$e(`Discarded invalid param(s) "${E.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}k=m.record.name,_=Fe(mr(f.params,m.keys.filter(E=>!E.optional).map(E=>E.name)),d.params&&mr(d.params,m.keys.map(E=>E.name))),g=m.stringify(_)}else if("path"in d)g=d.path,g.startsWith("/")||$e(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),m=s.find(E=>E.re.test(g)),m&&(_=m.parse(g),k=m.record.name);else{if(m=f.name?o.get(f.name):s.find(E=>E.re.test(f.path)),!m)throw bs(1,{location:d,currentLocation:f});k=m.record.name,_=Fe({},f.params,d.params),g=m.stringify(_)}const y=[];let z=m;for(;z;)y.unshift(z.record),z=z.parent;return{name:k,path:g,params:_,matched:y,meta:tg(y)}}return n.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:a}}function mr(n,t){const s={};for(const o of t)o in n&&(s[o]=n[o]);return s}function eg(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:ng(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function ng(n){const t={},s=n.props||!1;if("component"in n)t.default=s;else for(const o in n.components)t[o]=typeof s=="boolean"?s:s[o];return t}function hr(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function tg(n){return n.reduce((t,s)=>Fe(t,s.meta),{})}function _r(n,t){const s={};for(const o in n)s[o]=o in t?t[o]:n[o];return s}function ea(n,t){return n.name===t.name&&n.optional===t.optional&&n.repeatable===t.repeatable}function sg(n,t){for(const s of n.keys)if(!s.optional&&!t.keys.find(ea.bind(null,s)))return $e(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${s.name}"`);for(const s of t.keys)if(!s.optional&&!n.keys.find(ea.bind(null,s)))return $e(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${s.name}"`)}function ig(n,t){t&&t.record.name&&!n.name&&!n.path&&$e(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function og(n,t){for(const s of t.keys)if(!n.keys.find(ea.bind(null,s)))return $e(`Absolute path "${n.record.path}" must have the exact same param named "${s.name}" as its parent "${t.record.path}".`)}function yu(n,t){return t.children.some(s=>s===n||yu(n,s))}const wu=/#/g,ag=/&/g,lg=/\//g,rg=/=/g,cg=/\?/g,Iu=/\+/g,ug=/%5B/g,pg=/%5D/g,xu=/%5E/g,dg=/%60/g,Eu=/%7B/g,fg=/%7C/g,$u=/%7D/g,mg=/%20/g;function Da(n){return encodeURI(""+n).replace(fg,"|").replace(ug,"[").replace(pg,"]")}function hg(n){return Da(n).replace(Eu,"{").replace($u,"}").replace(xu,"^")}function na(n){return Da(n).replace(Iu,"%2B").replace(mg,"+").replace(wu,"%23").replace(ag,"%26").replace(dg,"`").replace(Eu,"{").replace($u,"}").replace(xu,"^")}function _g(n){return na(n).replace(rg,"%3D")}function gg(n){return Da(n).replace(wu,"%23").replace(cg,"%3F")}function vg(n){return n==null?"":gg(n).replace(lg,"%2F")}function si(n){try{return decodeURIComponent(""+n)}catch{$e(`Error decoding "${n}". Using original value`)}return""+n}function kg(n){const t={};if(n===""||n==="?")return t;const o=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<o.length;++a){const l=o[a].replace(Iu," "),r=l.indexOf("="),c=si(r<0?l:l.slice(0,r)),u=r<0?null:si(l.slice(r+1));if(c in t){let p=t[c];yn(p)||(p=t[c]=[p]),p.push(u)}else t[c]=u}return t}function gr(n){let t="";for(let s in n){const o=n[s];if(s=_g(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(yn(o)?o.map(l=>l&&na(l)):[o&&na(o)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+s,l!=null&&(t+="="+l))})}return t}function bg(n){const t={};for(const s in n){const o=n[s];o!==void 0&&(t[s]=yn(o)?o.map(a=>a==null?null:""+a):o==null?o:""+o)}return t}const yg=Symbol("router view location matched"),vr=Symbol("router view depth"),Ua=Symbol("router"),Cu=Symbol("route location"),ta=Symbol("router view location");function Fs(){let n=[];function t(o){return n.push(o),()=>{const a=n.indexOf(o);a>-1&&n.splice(a,1)}}function s(){n=[]}return{add:t,list:()=>n,reset:s}}function gt(n,t,s,o,a){const l=o&&(o.enterCallbacks[a]=o.enterCallbacks[a]||[]);return()=>new Promise((r,c)=>{const u=f=>{f===!1?c(bs(4,{from:s,to:t})):f instanceof Error?c(f):U_(f)?c(bs(2,{from:t,to:f})):(l&&o.enterCallbacks[a]===l&&typeof f=="function"&&l.push(f),r())},p=n.call(o&&o.instances[a],t,s,wg(u,t,s));let d=Promise.resolve(p);if(n.length<3&&(d=d.then(u)),n.length>2){const f=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(m=>u._called?m:($e(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){$e(f),c(new Error("Invalid navigation guard"));return}}d.catch(f=>c(f))})}function wg(n,t,s){let o=0;return function(){o++===1&&$e(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,o===1&&n.apply(null,arguments)}}function Eo(n,t,s,o){const a=[];for(const l of n){!l.components&&!l.children.length&&$e(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const r in l.components){let c=l.components[r];{if(!c||typeof c!="object"&&typeof c!="function")throw $e(`Component "${r}" in record with path "${l.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){$e(`Component "${r}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,$e(`Component "${r}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!l.instances[r]))if(Ig(c)){const p=(c.__vccOpts||c)[t];p&&a.push(gt(p,s,o,l,r))}else{let u=c();"catch"in u||($e(`Component "${r}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),a.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=w_(p)?p.default:p;l.components[r]=d;const m=(d.__vccOpts||d)[t];return m&&gt(m,s,o,l,r)()}))}}}return a}function Ig(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function kr(n){const t=C(Ua),s=C(Cu),o=A(()=>t.resolve(w(n.to))),a=A(()=>{const{matched:u}=o.value,{length:p}=u,d=u[p-1],f=s.matched;if(!d||!f.length)return-1;const m=f.findIndex(Ft.bind(null,d));if(m>-1)return m;const _=br(u[p-2]);return p>1&&br(d)===_&&f[f.length-1].path!==_?f.findIndex(Ft.bind(null,u[p-2])):m}),l=A(()=>a.value>-1&&Cg(s.params,o.value.params)),r=A(()=>a.value>-1&&a.value===s.matched.length-1&&gu(s.params,o.value.params));function c(u={}){return $g(u)?t[w(n.replace)?"replace":"push"](w(n.to)).catch(js):Promise.resolve()}if(tt){const u=Yn();if(u){const p={route:o.value,isActive:l.value,isExactActive:r.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),Is(()=>{p.route=o.value,p.isActive=l.value,p.isExactActive=r.value},{flush:"post"})}}return{route:o,href:A(()=>o.value.href),isActive:l,isExactActive:r,navigate:c}}const xg=Be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kr,setup(n,{slots:t}){const s=nn(kr(n)),{options:o}=C(Ua),a=A(()=>({[yr(n.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[yr(n.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=t.default&&t.default(s);return n.custom?l:mi("a",{"aria-current":s.isExactActive?n.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},l)}}}),Eg=xg;function $g(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Cg(n,t){for(const s in t){const o=t[s],a=n[s];if(typeof o=="string"){if(o!==a)return!1}else if(!yn(a)||a.length!==o.length||o.some((l,r)=>l!==a[r]))return!1}return!0}function br(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const yr=(n,t,s)=>n??t??s,zg=Be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:s}){Sg();const o=C(ta),a=A(()=>n.route||o.value),l=C(vr,0),r=A(()=>{let p=w(l);const{matched:d}=a.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),c=A(()=>a.value.matched[r.value]);kn(vr,A(()=>r.value+1)),kn(yg,c),kn(ta,a);const u=le();return He(()=>[u.value,c.value,n.name],([p,d,f],[m,_,g])=>{d&&(d.instances[f]=p,_&&_!==d&&p&&p===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),p&&d&&(!_||!Ft(d,_)||!m)&&(d.enterCallbacks[f]||[]).forEach(k=>k(p))},{flush:"post"}),()=>{const p=a.value,d=n.name,f=c.value,m=f&&f.components[d];if(!m)return wr(s.default,{Component:m,route:p});const _=f.props[d],g=_?_===!0?p.params:typeof _=="function"?_(p):_:null,y=mi(m,Fe({},g,t,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(f.instances[d]=null)},ref:u}));if(tt&&y.ref){const z={depth:r.value,name:f.name,path:f.path,meta:f.meta};(yn(y.ref)?y.ref.map(F=>F.i):[y.ref.i]).forEach(F=>{F.__vrv_devtools=z})}return wr(s.default,{Component:y,route:p})||y}}});function wr(n,t){if(!n)return null;const s=n(t);return s.length===1?s[0]:s}const Fg=zg;function Sg(){const n=Yn(),t=n.parent&&n.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const s=t==="KeepAlive"?"keep-alive":"transition";$e(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Ss(n,t){const s=Fe({},n,{matched:n.matched.map(o=>Dg(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:t,value:s}}}function Ii(n){return{_custom:{display:n}}}let Og=0;function Lg(n,t,s){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=Og++;y_({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ss(t.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const m=f.__vrv_devtools;d.tags.push({label:(m.name?`${m.name.toString()}: `:"")+m.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:zu})}yn(f.__vrl_devtools)&&(f.__devtoolsApi=a,f.__vrl_devtools.forEach(m=>{let _=Ou,g="";m.isExactActive?(_=Su,g="This is exactly active"):m.isActive&&(_=Fu,g="This link is active"),d.tags.push({label:m.route.path,textColor:0,tooltip:g,backgroundColor:_})}))}),He(t.currentRoute,()=>{u(),a.notifyComponentUpdate(),a.sendInspectorTree(c),a.sendInspectorState(c)});const l="router:navigations:"+o;a.addTimelineLayer({id:l,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,f)=>{a.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:a.now(),data:{error:d},groupId:f.meta.__navigationId}})});let r=0;t.beforeEach((d,f)=>{const m={guard:Ii("beforeEach"),from:Ss(f,"Current Location during this navigation"),to:Ss(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:r++}),a.addTimelineEvent({layerId:l,event:{time:a.now(),title:"Start of navigation",subtitle:d.fullPath,data:m,groupId:d.meta.__navigationId}})}),t.afterEach((d,f,m)=>{const _={guard:Ii("afterEach")};m?(_.failure={_custom:{type:Error,readOnly:!0,display:m?m.message:"",tooltip:"Navigation Failure",value:m}},_.status=Ii("❌")):_.status=Ii("✅"),_.from=Ss(f,"Current Location during this navigation"),_.to=Ss(d,"Target location"),a.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:a.now(),data:_,logType:m?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+o;a.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let f=s.getRoutes().filter(m=>!m.parent);f.forEach(Tu),d.filter&&(f=f.filter(m=>sa(m,d.filter.toLowerCase()))),f.forEach(m=>Mu(m,t.currentRoute.value)),d.rootNodes=f.map(Lu)}let p;a.on.getInspectorTree(d=>{p=d,d.app===n&&d.inspectorId===c&&u()}),a.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===c){const m=s.getRoutes().find(_=>_.record.__vd_id===d.nodeId);m&&(d.state={options:Tg(m)})}}),a.sendInspectorTree(c),a.sendInspectorState(c)})}function Mg(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function Tg(n){const{record:t}=n,s=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&s.push({editable:!1,key:"name",value:t.name}),s.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(o=>`${o.name}${Mg(o)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),t.redirect!=null&&s.push({editable:!1,key:"redirect",value:t.redirect}),n.alias.length&&s.push({editable:!1,key:"aliases",value:n.alias.map(o=>o.record.path)}),Object.keys(n.record.meta).length&&s.push({editable:!1,key:"meta",value:n.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),s}const zu=15485081,Fu=2450411,Su=8702998,Ag=2282478,Ou=16486972,Pg=6710886;function Lu(n){const t=[],{record:s}=n;s.name!=null&&t.push({label:String(s.name),textColor:0,backgroundColor:Ag}),s.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Ou}),n.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:zu}),n.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Su}),n.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Fu}),s.redirect&&t.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:Pg});let o=s.__vd_id;return o==null&&(o=String(Ng++),s.__vd_id=o),{id:o,label:s.path,tags:t,children:n.children.map(Lu)}}let Ng=0;const Rg=/^\/(.*)\/([a-z]*)$/;function Mu(n,t){const s=t.matched.length&&Ft(t.matched[t.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=s,s||(n.__vd_active=t.matched.some(o=>Ft(o,n.record))),n.children.forEach(o=>Mu(o,t))}function Tu(n){n.__vd_match=!1,n.children.forEach(Tu)}function sa(n,t){const s=String(n.re).match(Rg);if(n.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(t))return n.children.forEach(r=>sa(r,t)),n.record.path!=="/"||t==="/"?(n.__vd_match=n.re.test(t),!0):!1;const a=n.record.path.toLowerCase(),l=si(a);return!t.startsWith("/")&&(l.includes(t)||a.includes(t))||l.startsWith(t)||a.startsWith(t)||n.record.name&&String(n.record.name).includes(t)?!0:n.children.some(r=>sa(r,t))}function Dg(n,t){const s={};for(const o in n)t.includes(o)||(s[o]=n[o]);return s}function Ug(n){const t=J_(n.routes,n),s=n.parseQuery||kg,o=n.stringifyQuery||gr,a=n.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Fs(),r=Fs(),c=Fs(),u=Qn(ft);let p=ft;tt&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Io.bind(null,$=>""+$),f=Io.bind(null,vg),m=Io.bind(null,si);function _($,ee){let Y,te;return ku($)?(Y=t.getRecordMatcher($),te=ee):te=$,t.addRoute(te,Y)}function g($){const ee=t.getRecordMatcher($);ee?t.removeRoute(ee):$e(`Cannot remove non-existent route "${String($)}"`)}function k(){return t.getRoutes().map($=>$.record)}function y($){return!!t.getRecordMatcher($)}function z($,ee){if(ee=Fe({},ee||u.value),typeof $=="string"){const de=xo(s,$,ee.path),h=t.resolve({path:de.path},ee),v=a.createHref(de.fullPath);return v.startsWith("//")?$e(`Location "${$}" resolved to "${v}". A resolved location cannot start with multiple slashes.`):h.matched.length||$e(`No match found for location with path "${$}"`),Fe(de,h,{params:m(h.params),hash:si(de.hash),redirectedFrom:void 0,href:v})}let Y;if("path"in $)"params"in $&&!("name"in $)&&Object.keys($.params).length&&$e(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Y=Fe({},$,{path:xo(s,$.path,ee.path).path});else{const de=Fe({},$.params);for(const h in de)de[h]==null&&delete de[h];Y=Fe({},$,{params:f($.params)}),ee.params=f(ee.params)}const te=t.resolve(Y,ee),ye=$.hash||"";ye&&!ye.startsWith("#")&&$e(`A \`hash\` should always start with the character "#". Replace "${ye}" with "#${ye}".`),te.params=d(m(te.params));const Ee=E_(o,Fe({},$,{hash:hg(ye),path:te.path})),ge=a.createHref(Ee);return ge.startsWith("//")?$e(`Location "${$}" resolved to "${ge}". A resolved location cannot start with multiple slashes.`):te.matched.length||$e(`No match found for location with path "${"path"in $?$.path:$}"`),Fe({fullPath:Ee,hash:ye,query:o===gr?bg($.query):$.query||{}},te,{redirectedFrom:void 0,href:ge})}function E($){return typeof $=="string"?xo(s,$,u.value.path):Fe({},$)}function F($,ee){if(p!==$)return bs(8,{from:ee,to:$})}function O($){return j($)}function q($){return O(Fe(E($),{replace:!0}))}function G($){const ee=$.matched[$.matched.length-1];if(ee&&ee.redirect){const{redirect:Y}=ee;let te=typeof Y=="function"?Y($):Y;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=E(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw $e(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Fe({query:$.query,hash:$.hash,params:"path"in te?{}:$.params},te)}}function j($,ee){const Y=p=z($),te=u.value,ye=$.state,Ee=$.force,ge=$.replace===!0,de=G(Y);if(de)return j(Fe(E(de),{state:typeof de=="object"?Fe({},ye,de.state):ye,force:Ee,replace:ge}),ee||Y);const h=Y;h.redirectedFrom=ee;let v;return!Ee&&lr(o,te,Y)&&(v=bs(16,{to:h,from:te}),Te(te,te,!0,!1)),(v?Promise.resolve(v):se(h,te)).catch(x=>Zn(x)?Zn(x,2)?x:ke(x):J(x,h,te)).then(x=>{if(x){if(Zn(x,2))return lr(o,z(x.to),h)&&ee&&(ee._count=ee._count?ee._count+1:1)>10?($e(`Detected an infinite redirection in a navigation guard when going from "${te.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):j(Fe({replace:ge},E(x.to),{state:typeof x.to=="object"?Fe({},ye,x.to.state):ye,force:Ee}),ee||h)}else x=fe(h,te,!0,ge,ye);return ae(h,te,x),x})}function H($,ee){const Y=F($,ee);return Y?Promise.reject(Y):Promise.resolve()}function se($,ee){let Y;const[te,ye,Ee]=Hg($,ee);Y=Eo(te.reverse(),"beforeRouteLeave",$,ee);for(const de of te)de.leaveGuards.forEach(h=>{Y.push(gt(h,$,ee))});const ge=H.bind(null,$,ee);return Y.push(ge),os(Y).then(()=>{Y=[];for(const de of l.list())Y.push(gt(de,$,ee));return Y.push(ge),os(Y)}).then(()=>{Y=Eo(ye,"beforeRouteUpdate",$,ee);for(const de of ye)de.updateGuards.forEach(h=>{Y.push(gt(h,$,ee))});return Y.push(ge),os(Y)}).then(()=>{Y=[];for(const de of $.matched)if(de.beforeEnter&&!ee.matched.includes(de))if(yn(de.beforeEnter))for(const h of de.beforeEnter)Y.push(gt(h,$,ee));else Y.push(gt(de.beforeEnter,$,ee));return Y.push(ge),os(Y)}).then(()=>($.matched.forEach(de=>de.enterCallbacks={}),Y=Eo(Ee,"beforeRouteEnter",$,ee),Y.push(ge),os(Y))).then(()=>{Y=[];for(const de of r.list())Y.push(gt(de,$,ee));return Y.push(ge),os(Y)}).catch(de=>Zn(de,8)?de:Promise.reject(de))}function ae($,ee,Y){for(const te of c.list())te($,ee,Y)}function fe($,ee,Y,te,ye){const Ee=F($,ee);if(Ee)return Ee;const ge=ee===ft,de=tt?history.state:{};Y&&(te||ge?a.replace($.fullPath,Fe({scroll:ge&&de&&de.scroll},ye)):a.push($.fullPath,ye)),u.value=$,Te($,ee,Y,ge),ke()}let X;function Ie(){X||(X=a.listen(($,ee,Y)=>{if(!ut.listening)return;const te=z($),ye=G(te);if(ye){j(Fe(ye,{replace:!0}),te).catch(js);return}p=te;const Ee=u.value;tt&&M_(cr(Ee.fullPath,Y.delta),uo()),se(te,Ee).catch(ge=>Zn(ge,12)?ge:Zn(ge,2)?(j(ge.to,te).then(de=>{Zn(de,20)&&!Y.delta&&Y.type===ti.pop&&a.go(-1,!1)}).catch(js),Promise.reject()):(Y.delta&&a.go(-Y.delta,!1),J(ge,te,Ee))).then(ge=>{ge=ge||fe(te,Ee,!1),ge&&(Y.delta&&!Zn(ge,8)?a.go(-Y.delta,!1):Y.type===ti.pop&&Zn(ge,20)&&a.go(-1,!1)),ae(te,Ee,ge)}).catch(js)}))}let Ne=Fs(),ze=Fs(),Re;function J($,ee,Y){ke($);const te=ze.list();return te.length?te.forEach(ye=>ye($,ee,Y)):($e("uncaught error during route navigation:"),console.error($)),Promise.reject($)}function ue(){return Re&&u.value!==ft?Promise.resolve():new Promise(($,ee)=>{Ne.add([$,ee])})}function ke($){return Re||(Re=!$,Ie(),Ne.list().forEach(([ee,Y])=>$?Y($):ee()),Ne.reset()),$}function Te($,ee,Y,te){const{scrollBehavior:ye}=n;if(!tt||!ye)return Promise.resolve();const Ee=!Y&&T_(cr($.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return An().then(()=>ye($,ee,Ee)).then(ge=>ge&&L_(ge)).catch(ge=>J(ge,$,ee))}const _n=$=>a.go($);let tn;const fn=new Set,ut={currentRoute:u,listening:!0,addRoute:_,removeRoute:g,hasRoute:y,getRoutes:k,resolve:z,options:n,push:O,replace:q,go:_n,back:()=>_n(-1),forward:()=>_n(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:ze.add,isReady:ue,install($){const ee=this;$.component("RouterLink",Eg),$.component("RouterView",Fg),$.config.globalProperties.$router=ee,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>w(u)}),tt&&!tn&&u.value===ft&&(tn=!0,O(a.location).catch(ye=>{$e("Unexpected error when starting the router:",ye)}));const Y={};for(const ye in ft)Y[ye]=A(()=>u.value[ye]);$.provide(Ua,ee),$.provide(Cu,nn(Y)),$.provide(ta,u);const te=$.unmount;fn.add($),$.unmount=function(){fn.delete($),fn.size<1&&(p=ft,X&&X(),X=null,u.value=ft,tn=!1,Re=!1),te()},tt&&Lg($,ee,t)}};return ut}function os(n){return n.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function Hg(n,t){const s=[],o=[],a=[],l=Math.max(t.matched.length,n.matched.length);for(let r=0;r<l;r++){const c=t.matched[r];c&&(n.matched.find(p=>Ft(p,c))?o.push(c):s.push(c));const u=n.matched[r];u&&(t.matched.find(p=>Ft(p,u))||a.push(u))}return[s,o,a]}const $o=le(!1),Vs=le(!1),ds=le(!1),Bg=le(!0),ia=zh({xs:460,...Ih}),Vt=f_(),Au=n_(),Kg=A(()=>Vt.height.value-Vt.width.value/It>180),Pu=Jh(Nn?document.body:null),gs=wh(),jg=A(()=>{var n,t;return["INPUT","TEXTAREA"].includes(((n=gs.value)==null?void 0:n.tagName)||"")||((t=gs.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Wg=A(()=>{var n;return["BUTTON","A"].includes(((n=gs.value)==null?void 0:n.tagName)||"")});Dn("slidev-camera","default");Dn("slidev-mic","default");const Si=Dn("slidev-scale",0),rn=Dn("slidev-show-overview",!1),Co=Dn("slidev-presenter-cursor",!0),Ir=Dn("slidev-show-editor",!1);Dn("slidev-editor-width",Nn?window.innerWidth*.4:100);const Nu=du(rn);function xr(n,t,s,o=a=>a){return n*o(.5-t*(.5-s))}function Vg(n){return[-n[0],-n[1]]}function On(n,t){return[n[0]+t[0],n[1]+t[1]]}function xn(n,t){return[n[0]-t[0],n[1]-t[1]]}function Sn(n,t){return[n[0]*t,n[1]*t]}function qg(n,t){return[n[0]/t,n[1]/t]}function Os(n){return[n[1],-n[0]]}function Er(n,t){return n[0]*t[0]+n[1]*t[1]}function Qg(n,t){return n[0]===t[0]&&n[1]===t[1]}function Gg(n){return Math.hypot(n[0],n[1])}function Yg(n){return n[0]*n[0]+n[1]*n[1]}function $r(n,t){return Yg(xn(n,t))}function Ru(n){return qg(n,Gg(n))}function Zg(n,t){return Math.hypot(n[1]-t[1],n[0]-t[0])}function Ls(n,t,s){let o=Math.sin(s),a=Math.cos(s),l=n[0]-t[0],r=n[1]-t[1],c=l*a-r*o,u=l*o+r*a;return[c+t[0],u+t[1]]}function oa(n,t,s){return On(n,Sn(xn(t,n),s))}function Cr(n,t,s){return On(n,Sn(t,s))}var{min:as,PI:Xg}=Math,zr=.275,Ms=Xg+1e-4;function Jg(n,t={}){let{size:s=16,smoothing:o=.5,thinning:a=.5,simulatePressure:l=!0,easing:r=J=>J,start:c={},end:u={},last:p=!1}=t,{cap:d=!0,easing:f=J=>J*(2-J)}=c,{cap:m=!0,easing:_=J=>--J*J*J+1}=u;if(n.length===0||s<=0)return[];let g=n[n.length-1].runningLength,k=c.taper===!1?0:c.taper===!0?Math.max(s,g):c.taper,y=u.taper===!1?0:u.taper===!0?Math.max(s,g):u.taper,z=Math.pow(s*o,2),E=[],F=[],O=n.slice(0,10).reduce((J,ue)=>{let ke=ue.pressure;if(l){let Te=as(1,ue.distance/s),_n=as(1,1-Te);ke=as(1,J+(_n-J)*(Te*zr))}return(J+ke)/2},n[0].pressure),q=xr(s,a,n[n.length-1].pressure,r),G,j=n[0].vector,H=n[0].point,se=H,ae=H,fe=se,X=!1;for(let J=0;J<n.length;J++){let{pressure:ue}=n[J],{point:ke,vector:Te,distance:_n,runningLength:tn}=n[J];if(J<n.length-1&&g-tn<3)continue;if(a){if(l){let Ee=as(1,_n/s),ge=as(1,1-Ee);ue=as(1,O+(ge-O)*(Ee*zr))}q=xr(s,a,ue,r)}else q=s/2;G===void 0&&(G=q);let fn=tn<k?f(tn/k):1,ut=g-tn<y?_((g-tn)/y):1;q=Math.max(.01,q*Math.min(fn,ut));let $=(J<n.length-1?n[J+1]:n[J]).vector,ee=J<n.length-1?Er(Te,$):1,Y=Er(Te,j)<0&&!X,te=ee!==null&&ee<0;if(Y||te){let Ee=Sn(Os(j),q);for(let ge=1/13,de=0;de<=1;de+=ge)ae=Ls(xn(ke,Ee),ke,Ms*de),E.push(ae),fe=Ls(On(ke,Ee),ke,Ms*-de),F.push(fe);H=ae,se=fe,te&&(X=!0);continue}if(X=!1,J===n.length-1){let Ee=Sn(Os(Te),q);E.push(xn(ke,Ee)),F.push(On(ke,Ee));continue}let ye=Sn(Os(oa($,Te,ee)),q);ae=xn(ke,ye),(J<=1||$r(H,ae)>z)&&(E.push(ae),H=ae),fe=On(ke,ye),(J<=1||$r(se,fe)>z)&&(F.push(fe),se=fe),O=ue,j=Te}let Ie=n[0].point.slice(0,2),Ne=n.length>1?n[n.length-1].point.slice(0,2):On(n[0].point,[1,1]),ze=[],Re=[];if(n.length===1){if(!(k||y)||p){let J=Cr(Ie,Ru(Os(xn(Ie,Ne))),-(G||q)),ue=[];for(let ke=1/13,Te=ke;Te<=1;Te+=ke)ue.push(Ls(J,Ie,Ms*2*Te));return ue}}else{if(!(k||y&&n.length===1))if(d)for(let ue=1/13,ke=ue;ke<=1;ke+=ue){let Te=Ls(F[0],Ie,Ms*ke);ze.push(Te)}else{let ue=xn(E[0],F[0]),ke=Sn(ue,.5),Te=Sn(ue,.51);ze.push(xn(Ie,ke),xn(Ie,Te),On(Ie,Te),On(Ie,ke))}let J=Os(Vg(n[n.length-1].vector));if(y||k&&n.length===1)Re.push(Ne);else if(m){let ue=Cr(Ne,J,q);for(let ke=1/29,Te=ke;Te<1;Te+=ke)Re.push(Ls(ue,Ne,Ms*3*Te))}else Re.push(On(Ne,Sn(J,q)),On(Ne,Sn(J,q*.99)),xn(Ne,Sn(J,q*.99)),xn(Ne,Sn(J,q)))}return E.concat(Re,F.reverse(),ze)}function e0(n,t={}){var s;let{streamline:o=.5,size:a=16,last:l=!1}=t;if(n.length===0)return[];let r=.15+(1-o)*.85,c=Array.isArray(n[0])?n:n.map(({x:_,y:g,pressure:k=.5})=>[_,g,k]);if(c.length===2){let _=c[1];c=c.slice(0,-1);for(let g=1;g<5;g++)c.push(oa(c[0],_,g/4))}c.length===1&&(c=[...c,[...On(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=u[0],m=c.length-1;for(let _=1;_<c.length;_++){let g=l&&_===m?c[_].slice(0,2):oa(f.point,c[_],r);if(Qg(f.point,g))continue;let k=Zg(g,f.point);if(d+=k,_<m&&!p){if(d<a)continue;p=!0}f={point:g,pressure:c[_][2]>=0?c[_][2]:.5,vector:Ru(xn(f.point,g)),distance:k,runningLength:d},u.push(f)}return u[0].vector=((s=u[1])==null?void 0:s.vector)||[0,0],u}function n0(n,t={}){return Jg(e0(n,t),t)}var t0=()=>({events:{},emit(n,...t){let s=this.events[n]||[];for(let o=0,a=s.length;o<a;o++)s[o](...t)},on(n,t){var s;return(s=this.events[n])!=null&&s.push(t)||(this.events[n]=[t]),()=>{var o;this.events[n]=(o=this.events[n])==null?void 0:o.filter(a=>t!==a)}}});function Wi(n,t){return n-t}function s0(n){return n<0?-1:1}function Vi(n){return[Math.abs(n),s0(n)]}function Du(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var i0=2,st=i0,xs=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var t;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-a.left)*o,y:(n.pageY-a.top)*o,pressure:n.pressure}}else{const a=this.drauu.svgPoint;a.x=n.clientX,a.y=n.clientY;const l=a.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*o,y:l.y*o,pressure:n.pressure}}}createElement(n,t){const s=document.createElementNS("http://www.w3.org/2000/svg",n),o=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(n,t){this.el.setAttribute(n,typeof t=="string"?t:t.toFixed(st))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},o0=class extends xs{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const t=n0(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((o,[a,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return o.push(a,l,(a+u)/2,(l+p)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},a0=class extends xs{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=Vi(n.x-this.start.x),[o,a]=Vi(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[l,r]=[this.start.x,this.start.x+t*s].sort(Wi),[c,u]=[this.start.y,this.start.y+o*a].sort(Wi);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function Uu(n,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",t),o.setAttribute("id",n),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(a),s.appendChild(o),s}var l0=class extends xs{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const t=Du(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Uu(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(n){if(!this.el)return!1;let{x:t,y:s}=n;if(this.shiftPressed){const o=n.x-this.start.x,a=n.y-this.start.y;if(a!==0){let l=o/a;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+a*l,s=this.start.y+a):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},r0=class extends xs{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=Vi(n.x-this.start.x),[o,a]=Vi(n.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,o);t=l,o=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[l,r]=[this.start.x,this.start.x+t*s].sort(Wi),[c,u]=[this.start.y,this.start.y+o*a].sort(Wi);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function c0(n,t){const s=n.x-t.x,o=n.y-t.y;return s*s+o*o}function u0(n,t,s){let o=t.x,a=t.y,l=s.x-o,r=s.y-a;if(l!==0||r!==0){const c=((n.x-o)*l+(n.y-a)*r)/(l*l+r*r);c>1?(o=s.x,a=s.y):c>0&&(o+=l*c,a+=r*c)}return l=n.x-o,r=n.y-a,l*l+r*r}function p0(n,t){let s=n[0];const o=[s];let a;for(let l=1,r=n.length;l<r;l++)a=n[l],c0(a,s)>t&&(o.push(a),s=a);return s!==a&&a&&o.push(a),o}function aa(n,t,s,o,a){let l=o,r=0;for(let c=t+1;c<s;c++){const u=u0(n[c],n[t],n[s]);u>l&&(r=c,l=u)}l>o&&(r-t>1&&aa(n,t,r,o,a),a.push(n[r]),s-r>1&&aa(n,r,s,o,a))}function d0(n,t){const s=n.length-1,o=[n[0]];return aa(n,0,s,t,o),o.push(n[s]),o}function Fr(n,t,s=!1){if(n.length<=2)return n;const o=t!==void 0?t*t:1;return n=s?n:p0(n,o),n=d0(n,o),n}var f0=class extends xs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=Du();const t=Uu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=Fr(this.points,1,!0),this.count=0),this.attr("d",Or(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Or(Fr(this.points,1,!0))),!n.getTotalLength()))}};function m0(n,t){const s=t.x-n.x,o=t.y-n.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Sr(n,t,s,o){const a=t||n,l=s||n,r=.2,c=m0(a,l),u=c.angle+(o?Math.PI:0),p=c.length*r,d=n.x+Math.cos(u)*p,f=n.y+Math.sin(u)*p;return{x:d,y:f}}function h0(n,t,s){const o=Sr(s[t-1],s[t-2],n),a=Sr(n,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(st)},${o.y.toFixed(st)} ${a.x.toFixed(st)},${a.y.toFixed(st)} ${n.x.toFixed(st)},${n.y.toFixed(st)}`}function Or(n){return n.reduce((t,s,o,a)=>o===0?`M ${s.x.toFixed(st)},${s.y.toFixed(st)}`:`${t} ${h0(s,o,a)}`,"")}var _0=class extends xs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const t=(s,o)=>{if(s&&s.length)for(let a=0;a<s.length;a++){const l=s[a];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:o||l})}}else l.children&&t(l.children,l)}};n&&t(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),n.push(t))}return n.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!n.includes(s))),n.length>0}lineLineIntersect(n,t){const s=n.x1,o=n.x2,a=t.x1,l=t.x2,r=n.y1,c=n.y2,u=t.y1,p=t.y2,d=(s-o)*(u-p)-(r-c)*(a-l),f=(s*c-r*o)*(a-l)-(s-o)*(a*p-u*l),m=(s*c-r*o)*(u-p)-(r-c)*(a*p-u*l),_=(g,k,y)=>g>=k&&g<=y?!0:g>=y&&g<=k;if(d===0)return!1;{const g={x:f/d,y:m/d};return _(g.x,s,o)&&_(g.y,r,c)&&_(g.x,a,l)&&_(g.y,u,p)}}};function g0(n){return{draw:new f0(n),stylus:new o0(n),line:new l0(n),rectangle:new r0(n),ellipse:new a0(n),eraseLine:new _0(n)}}var v0=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=t0(),this._models=g0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),a=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,t){return this._emitter.on(n,t)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const t=this.model._eventUp(n);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function k0(n){return new v0(n)}const la=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Vn=Dn("slidev-drawing-enabled",!1),pz=Dn("slidev-drawing-pinned",!1),b0=le(!1),y0=le(!1),w0=le(!1),ii=le(!1),Dt=Ym(Dn("slidev-drawing-brush",{color:la[0],size:4,mode:"stylus"})),Lr=le("stylus"),Hu=A(()=>Le.drawings.syncAll||Mn.value);let oi=!1;const Ts=A({get(){return Lr.value},set(n){Lr.value=n,n==="arrow"?(Dt.mode="line",Dt.arrowEnd=!0):(Dt.mode=n,Dt.arrowEnd=!1)}}),I0=nn({brush:Dt,acceptsInputTypes:A(()=>Vn.value&&(!Le.drawings.presenterOnly||Mn.value)?void 0:["pen"]),coordinateTransform:!1}),dn=ka(k0(I0));function x0(){dn.clear(),Hu.value&&ru(Ye.value,"")}function Ha(){var n;y0.value=dn.canRedo(),b0.value=dn.canUndo(),w0.value=!!((n=dn.el)!=null&&n.children.length)}function E0(n){oi=!0;const t=Ki[n||Ye.value];t!=null?dn.load(t):dn.clear(),Ha(),oi=!1}dn.on("changed",()=>{if(Ha(),!oi){const n=dn.dump(),t=Ye.value;(Ki[t]||"")!==n&&Hu.value&&ru(t,dn.dump())}});Um(n=>{oi=!0,n[Ye.value]!=null&&dn.load(n[Ye.value]||""),oi=!1,Ha()});An(()=>{He(Ye,()=>{dn.mounted&&E0()},{immediate:!0})});dn.on("start",()=>ii.value=!0);dn.on("end",()=>ii.value=!1);window.addEventListener("keydown",n=>{if(!Vn.value)return;const t=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let s=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?dn.redo():dn.undo():n.code==="Escape"?Vn.value=!1:n.code==="KeyL"&&t?Ts.value="line":n.code==="KeyA"&&t?Ts.value="arrow":n.code==="KeyS"&&t?Ts.value="stylus":n.code==="KeyR"&&t?Ts.value="rectangle":n.code==="KeyE"&&t?Ts.value="ellipse":n.code==="KeyC"&&t?x0():n.code.startsWith("Digit")&&t&&+n.code[5]<=la.length?Dt.color=la[+n.code[5]-1]:s=!1,s&&(n.preventDefault(),n.stopPropagation())},!1);function Qe(...n){return A(()=>n.every(t=>pn(t)))}function gn(n){return A(()=>!pn(n))}const Mr=Dh(),zo=Dn("slidev-color-schema","auto"),ra=A(()=>Le.colorSchema!=="auto"),Ba=A({get(){return ra.value?Le.colorSchema==="dark":zo.value==="auto"?Mr.value:zo.value==="dark"},set(n){ra.value||(zo.value=n===Mr.value?"auto":n?"dark":"light")}}),Bu=du(Ba);Nn&&He(Ba,n=>{const t=document.querySelector("html");t.classList.toggle("dark",n),t.classList.toggle("light",!n)},{immediate:!0});const Oi=le(1),Li=A(()=>qe.length-1),bn=le(0),Ka=le(0);function $0(){bn.value>Oi.value&&(bn.value-=1)}function C0(){bn.value<Li.value&&(bn.value+=1)}function z0(){if(bn.value>Oi.value){let n=bn.value-Ka.value;n<Oi.value&&(n=Oi.value),bn.value=n}}function F0(){if(bn.value<Li.value){let n=bn.value+Ka.value;n>Li.value&&(n=Li.value),bn.value=n}}function S0(){const{escape:n,space:t,shift:s,left:o,right:a,up:l,down:r,enter:c,d:u,g:p,o:d}=Au;let f=[{name:"next_space",key:Qe(t,gn(s)),fn:qt,autoRepeat:!0},{name:"prev_space",key:Qe(t,s),fn:Qt,autoRepeat:!0},{name:"next_right",key:Qe(a,gn(s),gn(rn)),fn:qt,autoRepeat:!0},{name:"prev_left",key:Qe(o,gn(s),gn(rn)),fn:Qt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:qt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Qt,autoRepeat:!0},{name:"next_down",key:Qe(r,gn(rn)),fn:Qi,autoRepeat:!0},{name:"prev_up",key:Qe(l,gn(rn)),fn:()=>Gi(!1),autoRepeat:!0},{name:"next_shift",key:Qe(a,s),fn:Qi,autoRepeat:!0},{name:"prev_shift",key:Qe(o,s),fn:()=>Gi(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(u,gn(Vn)),fn:Bu},{name:"toggle_overview",key:Qe(d,gn(Vn)),fn:Nu},{name:"hide_overview",key:Qe(n,gn(Vn)),fn:()=>rn.value=!1},{name:"goto",key:Qe(p,gn(Vn)),fn:()=>ds.value=!ds.value},{name:"next_overview",key:Qe(a,rn),fn:C0},{name:"prev_overview",key:Qe(o,rn),fn:$0},{name:"up_overview",key:Qe(l,rn),fn:z0},{name:"down_overview",key:Qe(r,rn),fn:F0},{name:"goto_from_overview",key:Qe(c,rn),fn:()=>{ws(bn.value),rn.value=!1}}];const m=new Set(f.map(g=>g.name));if(f.filter(g=>g.name&&m.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return f}const Ku=Qe(gn(jg),gn(Wg),Bg);function O0(n,t,s=!1){typeof n=="string"&&(n=Au[n]);const o=Qe(n,Ku);let a=0,l;const r=()=>{if(clearTimeout(l),!o.value){a=0;return}s&&(l=setTimeout(r,Math.max(1e3-a*250,150)),a++),t()};return He(o,r,{flush:"sync"})}function L0(n,t){return yh(n,s=>{Ku.value&&(s.repeat||t())})}function M0(){const n=S0();new Map(n.map(s=>[s.key,s])).forEach(s=>{s.fn&&O0(s.key,s.fn,s.autoRepeat)}),L0("f",()=>Pu.toggle())}const T0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A0=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),P0=[A0];function N0(n,t){return b(),ne("svg",T0,P0)}const R0={name:"carbon-close",render:N0};function ja(n,t=""){var a,l;const s=["slidev-page",t],o=(l=(a=n==null?void 0:n.meta)==null?void 0:a.slide)==null?void 0:l.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const D0=Be({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const t=n;C(L);const s=le(),o=Xh(s),a=A(()=>t.width?t.width:o.width.value),l=A(()=>t.width?t.width/It:o.height.value);t.width&&Is(()=>{s.value&&(s.value.style.width=`${a.value}px`,s.value.style.height=`${l.value}px`)});const r=A(()=>a.value/l.value),c=A(()=>t.scale&&!ys.value?t.scale:r.value<It?a.value/xt:l.value*It/xt),u=A(()=>({height:`${Pa}px`,width:`${xt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=A(()=>({"select-none":!Le.selectable,"slidev-code-line-numbers":Le.lineNumbers}));return kn(au,c),(d,f)=>(b(),ne("div",{id:"slide-container",ref_key:"root",ref:s,class:We(w(p))},[e("div",{id:"slide-content",style:en(w(u))},[rt(d.$slots,"default")],4),rt(d.$slots,"controls")],2))}});const M=(n,t)=>{const s=n.__vccOpts||n;for(const[o,a]of t)s[o]=a;return s},ju=M(D0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Wa=Be({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:t}){const s=Wn(n,"clicks",t),o=Wn(n,"clicksElements",t),a=Wn(n,"clicksDisabled",t),l=Wn(n,"clicksOrderMap",t);o.value.length=0,kn(Fm,n.route),kn(Sm,n.context),kn(su,s),kn(ou,a),kn(iu,o),kn(zm,l)},render(){var n,t;return this.$props.is?mi(this.$props.is):(t=(n=this.$slots)==null?void 0:n.default)==null?void 0:t.call(n)}}),U0=["innerHTML"],H0=Be({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return C(L),(t,s)=>w(Ki)[n.page]?(b(),ne("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Ki)[n.page]},null,8,U0)):be("v-if",!0)}}),Wu=M(H0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),B0=Object.freeze(Object.defineProperty({__proto__:null,default:Wu},Symbol.toStringTag,{value:"Module"})),K0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},j0=["onClick"],W0=Be({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:t}){const s=n;C(L);const o=Wn(s,"modelValue",t);function a(){o.value=!1}function l(_){ws(_),a()}function r(_){return _===bn.value}const c=ia.smaller("xs"),u=ia.smaller("sm"),p=4*16*2,d=2*16,f=A(()=>c.value?Vt.width.value-p:u.value?(Vt.width.value-p-d)/2:300),m=A(()=>Math.floor((Vt.width.value-p)/(f.value+d)));return Is(()=>{bn.value=Ye.value,Ka.value=m.value}),(_,g)=>{const k=R0;return b(),ne(Se,null,[Oa(e("div",K0,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:en(`grid-template-columns: repeat(auto-fit,minmax(${w(f)}px,1fr))`)},[(b(!0),ne(Se,null,di(w(qe).slice(0,-1),(y,z)=>(b(),ne("div",{key:y.path,class:"relative"},[e("div",{class:We(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(z+1),"border-gray-400":!r(z+1)}]),style:en(w(Na)),onClick:E=>l(+y.path)},[(b(),S(ju,{key:y.path,width:w(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:I(()=>[N(w(Wa),{is:y==null?void 0:y.component,"clicks-disabled":!0,class:We(w(ja)(y)),route:y,context:"overview"},null,8,["is","class","route"]),N(Wu,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],14,j0),e("div",{class:"absolute top-0 opacity-50",style:en(`left: ${w(f)+5}px`)},En(z+1),5)]))),128))],4)],512),[[tu,w(o)]]),w(o)?(b(),ne("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:a},[N(k)])):be("v-if",!0)],64)}}});const V0=M(W0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),q0="/INFORMATICA/3/files/assets/logo-b72bde5d.png",Q0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},G0=Be({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:t}){const s=n;C(L);const o=Wn(s,"modelValue",t);function a(){o.value=!1}return(l,r)=>(b(),S(Fc,null,[w(o)?(b(),ne("div",Q0,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>a())}),e("div",{class:We(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[rt(l.$slots,"default")],2)])):be("v-if",!0)],1024))}}),Y0=M(G0,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Z0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},X0=["innerHTML"],J0=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:q0,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),i("dev ")])])],-1),ev=Be({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:t}){const s=n;C(L);const o=Wn(s,"modelValue",t),a=A(()=>typeof Le.info=="string");return(l,r)=>(b(),S(Y0,{modelValue:w(o),"onUpdate:modelValue":r[0]||(r[0]=c=>Ce(o)?o.value=c:null),class:"px-6 py-4"},{default:I(()=>[e("div",Z0,[w(a)?(b(),ne("div",{key:0,class:"mb-4",innerHTML:w(Le).info},null,8,X0)):be("v-if",!0),J0])]),_:1},8,["modelValue"]))}});const nv=M(ev,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]),tv=["disabled","onKeydown"],sv=Be({__name:"Goto",setup(n){C(L);const t=le(),s=le(""),o=A(()=>{if(s.value.startsWith("/"))return!!qe.find(r=>r.path===s.value.substring(1));{const r=+s.value;return!isNaN(r)&&r>0&&r<=ap.value}});function a(){o.value&&(s.value.startsWith("/")?ws(s.value.substring(1)):ws(+s.value)),l()}function l(){ds.value=!1}return He(ds,async r=>{var c,u;r?(await An(),s.value="",(c=t.value)==null||c.focus()):(u=t.value)==null||u.blur()}),He(s,r=>{r.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(r,c)=>(b(),ne("div",{id:"slidev-goto-dialog",class:We(["fixed right-5 bg-main transform transition-all",w(ds)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Oa(e("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),type:"text",disabled:!w(ds),class:We(["outline-none bg-transparent",{"text-red-400":!w(o)&&s.value}]),placeholder:"Goto...",onKeydown:[Dl(a,["enter"]),Dl(l,["escape"])],onBlur:l},null,42,tv),[[bm,s.value]])],2))}}),iv=M(sv,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),ov=Be({__name:"Controls",setup(n){C(L);const t=Qn(),s=Qn();return(o,a)=>(b(),ne(Se,null,[N(V0,{modelValue:w(rn),"onUpdate:modelValue":a[0]||(a[0]=l=>Ce(rn)?rn.value=l:null)},null,8,["modelValue"]),N(iv),w(t)?(b(),S(w(t),{key:0})):be("v-if",!0),w(s)?(b(),S(w(s),{key:1,modelValue:w($o),"onUpdate:modelValue":a[1]||(a[1]=l=>Ce($o)?$o.value=l:null)},null,8,["modelValue"])):be("v-if",!0),w(Le).info?(b(),S(nv,{key:2,modelValue:w(Vs),"onUpdate:modelValue":a[2]||(a[2]=l=>Ce(Vs)?Vs.value=l:null)},null,8,["modelValue"])):be("v-if",!0)],64))}}),av=M(ov,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),lv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rv=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),cv=[rv];function uv(n,t){return b(),ne("svg",lv,cv)}const pv={name:"carbon-settings-adjust",render:uv},dv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fv=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),mv=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),hv=[fv,mv];function _v(n,t){return b(),ne("svg",dv,hv)}const gv={name:"carbon-information",render:_v},vv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kv=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),bv=[kv];function yv(n,t){return b(),ne("svg",vv,bv)}const wv={name:"carbon-download",render:yv},Iv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xv=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Ev=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),$v=[xv,Ev];function Cv(n,t){return b(),ne("svg",Iv,$v)}const zv={name:"carbon-user-speaker",render:Cv},Fv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sv=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Ov=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Lv=[Sv,Ov];function Mv(n,t){return b(),ne("svg",Fv,Lv)}const Tv={name:"carbon-presentation-file",render:Mv},Av={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pv=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Nv=[Pv];function Rv(n,t){return b(),ne("svg",Av,Nv)}const Dv={name:"carbon-pen",render:Rv},Uv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Hv=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Bv=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Kv=[Hv,Bv];function jv(n,t){return b(),ne("svg",Uv,Kv)}const Wv={name:"ph-cursor-duotone",render:jv},Vv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qv=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Qv=[qv];function Gv(n,t){return b(),ne("svg",Vv,Qv)}const Vu={name:"ph-cursor-fill",render:Gv},Yv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zv=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Xv=[Zv];function Jv(n,t){return b(),ne("svg",Yv,Xv)}const e1={name:"carbon-sun",render:Jv},n1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),s1=[t1];function i1(n,t){return b(),ne("svg",n1,s1)}const o1={name:"carbon-moon",render:i1},a1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l1=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),r1=[l1];function c1(n,t){return b(),ne("svg",a1,r1)}const u1={name:"carbon-apps",render:c1},p1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d1=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),f1=[d1];function m1(n,t){return b(),ne("svg",p1,f1)}const qu={name:"carbon-arrow-right",render:m1},h1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_1=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),g1=[_1];function v1(n,t){return b(),ne("svg",h1,g1)}const k1={name:"carbon-arrow-left",render:v1},b1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y1=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),w1=[y1];function I1(n,t){return b(),ne("svg",b1,w1)}const x1={name:"carbon-maximize",render:I1},E1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$1=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),C1=[$1];function z1(n,t){return b(),ne("svg",E1,C1)}const F1={name:"carbon-minimize",render:z1},S1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},O1=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),L1=[O1];function M1(n,t){return b(),ne("svg",S1,L1)}const T1={name:"carbon-checkmark",render:M1},A1={class:"select-list"},P1={class:"title"},N1={class:"items"},R1=["onClick"],D1=Be({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:t}){const s=n;C(L);const o=Wn(s,"modelValue",t,{passive:!0});return(a,l)=>{const r=T1;return b(),ne("div",A1,[e("div",P1,En(n.title),1),e("div",N1,[(b(!0),ne(Se,null,di(n.items,c=>(b(),ne("div",{key:c.value,class:We(["item",{active:w(o)===c.value}]),onClick:()=>{var u;o.value=c.value,(u=c.onClick)==null||u.call(c)}},[N(r,{class:We(["text-green-500",{"opacity-0":w(o)!==c.value}])},null,8,["class"]),i(" "+En(c.display||c.value),1)],10,R1))),128))])])}}});const U1=M(D1,[["__scopeId","data-v-3f89fa11"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),H1={class:"text-sm"},B1=Be({__name:"Settings",setup(n){C(L);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(b(),ne("div",H1,[N(U1,{modelValue:w(Si),"onUpdate:modelValue":o[0]||(o[0]=a=>Ce(Si)?Si.value=a:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),K1=M(B1,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),j1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},W1=Be({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:t}){const s=n;C(L);const o=Wn(s,"modelValue",t,{passive:!0}),a=le();return kh(a,()=>{o.value=!1}),(l,r)=>(b(),ne("div",{ref_key:"el",ref:a,class:"flex relative"},[e("button",{class:We({disabled:n.disabled}),onClick:r[0]||(r[0]=c=>o.value=!w(o))},[rt(l.$slots,"button",{class:We({disabled:n.disabled})})],2),(b(),S(Fc,null,[w(o)?(b(),ne("div",j1,[rt(l.$slots,"menu")])):be("v-if",!0)],1024))],512))}}),V1=M(W1,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),q1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Q1={__name:"VerticalDivider",setup(n){return C(L),(t,s)=>(b(),ne("div",q1))}},xi=M(Q1,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),G1={render(){return[]}},Y1={class:"slidev-icon-btn"},Z1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},X1={class:"my-auto"},J1={class:"opacity-50"},ek=Be({__name:"NavControls",props:{persist:{default:!1}},setup(n){const t=n;C(L);const s=ia.smaller("md"),{isFullscreen:o,toggle:a}=Pu,l=A(()=>ua.value?`?password=${ua.value}`:""),r=A(()=>`/presenter/${Ye.value}${l.value}`),c=A(()=>`/${Ye.value}${l.value}`),u=le(),p=()=>{u.value&&gs.value&&u.value.contains(gs.value)&&gs.value.blur()},d=A(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Qn(),m=Qn();return Et(()=>import("./DrawingControls-f10f2416.js"),[]).then(_=>m.value=_.default),(_,g)=>{const k=F1,y=x1,z=k1,E=qu,F=u1,O=o1,q=e1,G=Vu,j=Wv,H=Dv,se=Tv,ae=Yd("RouterLink"),fe=zv,X=wv,Ie=gv,Ne=pv;return b(),ne("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[e("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(d)]),onMouseleave:p},[w(nt)?be("v-if",!0):(b(),ne("button",{key:0,class:"slidev-icon-btn",onClick:g[0]||(g[0]=(...ze)=>w(a)&&w(a)(...ze))},[w(o)?(b(),S(k,{key:0})):(b(),S(y,{key:1}))])),e("button",{class:We(["slidev-icon-btn",{disabled:!w(LC)}]),onClick:g[1]||(g[1]=(...ze)=>w(Qt)&&w(Qt)(...ze))},[N(z)],2),e("button",{class:We(["slidev-icon-btn",{disabled:!w(OC)}]),title:"Next",onClick:g[2]||(g[2]=(...ze)=>w(qt)&&w(qt)(...ze))},[N(E)],2),w(nt)?be("v-if",!0):(b(),ne("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=ze=>w(Nu)())},[N(F)])),w(ra)?be("v-if",!0):(b(),ne("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=ze=>w(Bu)())},[w(Ba)?(b(),S(O,{key:0})):(b(),S(q,{key:1}))])),N(xi),w(nt)?be("v-if",!0):(b(),ne(Se,{key:3},[!w(Mn)&&!w(s)&&w(f)?(b(),ne(Se,{key:0},[N(w(f)),N(xi)],64)):be("v-if",!0),w(Mn)?(b(),ne("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=ze=>Co.value=!w(Co))},[w(Co)?(b(),S(G,{key:0})):(b(),S(j,{key:1,class:"opacity-50"}))])):be("v-if",!0)],64)),(!w(Le).drawings.presenterOnly||w(Mn))&&!w(nt)?(b(),ne(Se,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=ze=>Vn.value=!w(Vn))},[N(H),w(Vn)?(b(),ne("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:en({background:w(Dt).color})},null,4)):be("v-if",!0)]),N(xi)],64)):be("v-if",!0),w(nt)?be("v-if",!0):(b(),ne(Se,{key:5},[w(Mn)?(b(),S(ae,{key:0,to:w(c),class:"slidev-icon-btn",title:"Play Mode"},{default:I(()=>[N(se)]),_:1},8,["to"])):be("v-if",!0),w(CC)?(b(),S(ae,{key:1,to:w(r),class:"slidev-icon-btn",title:"Presenter Mode"},{default:I(()=>[N(fe)]),_:1},8,["to"])):be("v-if",!0),be("v-if",!0)],64)),(b(),ne(Se,{key:6},[w(Le).download?(b(),ne("button",{key:0,class:"slidev-icon-btn",onClick:g[8]||(g[8]=(...ze)=>w(Ur)&&w(Ur)(...ze))},[N(X)])):be("v-if",!0)],64)),!w(Mn)&&w(Le).info&&!w(nt)?(b(),ne("button",{key:7,class:"slidev-icon-btn",onClick:g[9]||(g[9]=ze=>Vs.value=!w(Vs))},[N(Ie)])):be("v-if",!0),!w(Mn)&&!w(nt)?(b(),S(V1,{key:8},{button:I(()=>[e("button",Y1,[N(Ne)])]),menu:I(()=>[N(K1)]),_:1})):be("v-if",!0),w(nt)?be("v-if",!0):(b(),S(xi,{key:9})),e("div",Z1,[e("div",X1,[i(En(w(Ye))+" ",1),e("span",J1,"/ "+En(w(ap)),1)])]),N(w(G1))],34)],512)}}}),nk=M(ek,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),tk={style:{"font-size":"0.55rem","line-height":"1rem"}},sk=e("div",{class:"absolute bottom-0 left-1"},[e("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),ik={class:"absolute bottom-1 left-89 text-gray-700"},ok={key:0,class:"absolute bottom-1 right-1 text-gray-700"},ak={__name:"global-top",setup(n){const t=C(L);return(s,o)=>(b(),ne("footer",tk,[sk,e("div",ik," ITT E.Agnelli - Informatica - "+En(w(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+En(w(t).configs.as)+" - v "+En(w(t).configs.version||0),1),w(t).nav.currentPage!==1&&w(t).nav.currentPage!=w(t).nav.total+1?(b(),ne("div",ok,En(w(t).nav.currentPage-1)+" / "+En(w(t).nav.total-1),1)):be("v-if",!0)]))}},lk=M(ak,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Qu={render(){return[mi(lk)]}},Gu={render(){return[]}},rk={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ck=Be({__name:"PresenterMouse",setup(n){return C(L),(t,s)=>{const o=Vu;return w(wo).cursor?(b(),ne("div",rk,[N(o,{class:"absolute",style:en({left:`${w(wo).cursor.x}%`,top:`${w(wo).cursor.y}%`})},null,8,["style"])])):be("v-if",!0)}}}),uk=M(ck,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),pk=Be({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){C(L),He(cn,()=>{var o,a;(o=cn.value)!=null&&o.meta&&cn.value.meta.preload!==!1&&(cn.value.meta.__preloaded=!0),(a=Fo.value)!=null&&a.meta&&Fo.value.meta.preload!==!1&&(Fo.value.meta.__preloaded=!0)},{immediate:!0});const t=Qn();Et(()=>import("./DrawingLayer-f064ab40.js"),[]).then(o=>t.value=o.default);const s=A(()=>qe.filter(o=>{var a;return((a=o.meta)==null?void 0:a.__preloaded)||o===cn.value}));return(o,a)=>(b(),ne(Se,null,[be(" Global Bottom "),N(w(Gu)),be(" Slides "),N(mm,W(K(w(AC))),{default:I(()=>[(b(!0),ne(Se,null,di(w(s),l=>{var r;return Oa((b(),S(w(Wa),{key:l.path,is:l==null?void 0:l.component,clicks:l===w(cn)?w(Xt):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:We(w(ja)(l)),route:l,context:n.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[tu,l===w(cn)]])}),128))]),_:1},16),be(" Global Top "),N(w(Qu)),w(t)?(b(),S(w(t),{key:0})):be("v-if",!0),w(Mn)?be("v-if",!0):(b(),S(uk,{key:1}))],64))}}),dk=M(pk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),fk=Be({__name:"PrintStyle",setup(n){C(L);function t(s,{slots:o}){if(o.default)return mi("style",o.default())}return(s,o)=>(b(),S(t,null,{default:I(()=>[i(" @page { size: "+En(w(xt))+"px "+En(w(Pa))+"px; margin: 0px; } ",1)]),_:1}))}}),Yu=M(fk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),mk=Be({__name:"Play",setup(n){C(L),M0();const t=le();function s(l){var r;Ir.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?qt():Qt())}PC(t);const o=A(()=>Kg.value||Ir.value);Qn();const a=Qn();return Et(()=>import("./DrawingControls-f10f2416.js"),[]).then(l=>a.value=l.default),(l,r)=>(b(),ne(Se,null,[w(ys)?(b(),S(Yu,{key:0})):be("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:en(w(Na))},[N(ju,{class:"w-full h-full",style:en({background:"var(--slidev-slide-container-background, black)"}),width:w(ys)?w(Vt).width.value:void 0,scale:w(Si),onPointerdown:s},{default:I(()=>[N(dk,{context:"slide"})]),controls:I(()=>[e("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(o)?"opacity-100 right-0":"opacity-0 p-2",w(ii)?"pointer-events-none":""]])},[N(nk,{class:"m-auto",persist:w(o)},null,8,["persist"])],2),!w(Le).drawings.presenterOnly&&!w(nt)&&w(a)?(b(),S(w(a),{key:0,class:"ml-0"})):be("v-if",!0)]),_:1},8,["style","width","scale"]),be("v-if",!0)],4),N(av)],64))}}),hk=M(mk,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Zu(n){return typeof n>"u"||n===null}function _k(n){return typeof n=="object"&&n!==null}function gk(n){return Array.isArray(n)?n:Zu(n)?[]:[n]}function vk(n,t){var s,o,a,l;if(t)for(l=Object.keys(t),s=0,o=l.length;s<o;s+=1)a=l[s],n[a]=t[a];return n}function kk(n,t){var s="",o;for(o=0;o<t;o+=1)s+=n;return s}function bk(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var yk=Zu,wk=_k,Ik=gk,xk=kk,Ek=bk,$k=vk,Va={isNothing:yk,isObject:wk,toArray:Ik,repeat:xk,isNegativeZero:Ek,extend:$k};function Xu(n,t){var s="",o=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(s+='in "'+n.mark.name+'" '),s+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!t&&n.mark.snippet&&(s+=`

`+n.mark.snippet),o+" "+s):o}function ai(n,t){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=t,this.message=Xu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ai.prototype=Object.create(Error.prototype);ai.prototype.constructor=ai;ai.prototype.toString=function(t){return this.name+": "+Xu(this,t)};var Nt=ai,Ck=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],zk=["scalar","sequence","mapping"];function Fk(n){var t={};return n!==null&&Object.keys(n).forEach(function(s){n[s].forEach(function(o){t[String(o)]=s})}),t}function Sk(n,t){if(t=t||{},Object.keys(t).forEach(function(s){if(Ck.indexOf(s)===-1)throw new Nt('Unknown option "'+s+'" is met in definition of "'+n+'" YAML type.')}),this.options=t,this.tag=n,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Fk(t.styleAliases||null),zk.indexOf(this.kind)===-1)throw new Nt('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var on=Sk;function Tr(n,t){var s=[];return n[t].forEach(function(o){var a=s.length;s.forEach(function(l,r){l.tag===o.tag&&l.kind===o.kind&&l.multi===o.multi&&(a=r)}),s[a]=o}),s}function Ok(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(a){a.multi?(n.multi[a.kind].push(a),n.multi.fallback.push(a)):n[a.kind][a.tag]=n.fallback[a.tag]=a}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return n}function ca(n){return this.extend(n)}ca.prototype.extend=function(t){var s=[],o=[];if(t instanceof on)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Nt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(l){if(!(l instanceof on))throw new Nt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Nt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Nt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(l){if(!(l instanceof on))throw new Nt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(ca.prototype);return a.implicit=(this.implicit||[]).concat(s),a.explicit=(this.explicit||[]).concat(o),a.compiledImplicit=Tr(a,"implicit"),a.compiledExplicit=Tr(a,"explicit"),a.compiledTypeMap=Ok(a.compiledImplicit,a.compiledExplicit),a};var Lk=ca,Mk=new on("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Tk=new on("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Ak=new on("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),Pk=new Lk({explicit:[Mk,Tk,Ak]});function Nk(n){if(n===null)return!0;var t=n.length;return t===1&&n==="~"||t===4&&(n==="null"||n==="Null"||n==="NULL")}function Rk(){return null}function Dk(n){return n===null}var Uk=new on("tag:yaml.org,2002:null",{kind:"scalar",resolve:Nk,construct:Rk,predicate:Dk,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Hk(n){if(n===null)return!1;var t=n.length;return t===4&&(n==="true"||n==="True"||n==="TRUE")||t===5&&(n==="false"||n==="False"||n==="FALSE")}function Bk(n){return n==="true"||n==="True"||n==="TRUE"}function Kk(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var jk=new on("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Hk,construct:Bk,predicate:Kk,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function Wk(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function Vk(n){return 48<=n&&n<=55}function qk(n){return 48<=n&&n<=57}function Qk(n){if(n===null)return!1;var t=n.length,s=0,o=!1,a;if(!t)return!1;if(a=n[s],(a==="-"||a==="+")&&(a=n[++s]),a==="0"){if(s+1===t)return!0;if(a=n[++s],a==="b"){for(s++;s<t;s++)if(a=n[s],a!=="_"){if(a!=="0"&&a!=="1")return!1;o=!0}return o&&a!=="_"}if(a==="x"){for(s++;s<t;s++)if(a=n[s],a!=="_"){if(!Wk(n.charCodeAt(s)))return!1;o=!0}return o&&a!=="_"}if(a==="o"){for(s++;s<t;s++)if(a=n[s],a!=="_"){if(!Vk(n.charCodeAt(s)))return!1;o=!0}return o&&a!=="_"}}if(a==="_")return!1;for(;s<t;s++)if(a=n[s],a!=="_"){if(!qk(n.charCodeAt(s)))return!1;o=!0}return!(!o||a==="_")}function Gk(n){var t=n,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function Yk(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Va.isNegativeZero(n)}var Zk=new on("tag:yaml.org,2002:int",{kind:"scalar",resolve:Qk,construct:Gk,predicate:Yk,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Xk=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Jk(n){return!(n===null||!Xk.test(n)||n[n.length-1]==="_")}function eb(n){var t,s;return t=n.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var nb=/^[-+]?[0-9]+e/;function tb(n,t){var s;if(isNaN(n))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Va.isNegativeZero(n))return"-0.0";return s=n.toString(10),nb.test(s)?s.replace("e",".e"):s}function sb(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Va.isNegativeZero(n))}var ib=new on("tag:yaml.org,2002:float",{kind:"scalar",resolve:Jk,construct:eb,predicate:sb,represent:tb,defaultStyle:"lowercase"}),ob=Pk.extend({implicit:[Uk,jk,Zk,ib]}),ab=ob,Ju=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ep=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function lb(n){return n===null?!1:Ju.exec(n)!==null||ep.exec(n)!==null}function rb(n){var t,s,o,a,l,r,c,u=0,p=null,d,f,m;if(t=Ju.exec(n),t===null&&(t=ep.exec(n)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(s,o,a));if(l=+t[4],r=+t[5],c=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(d=+t[10],f=+(t[11]||0),p=(d*60+f)*6e4,t[9]==="-"&&(p=-p)),m=new Date(Date.UTC(s,o,a,l,r,c,u)),p&&m.setTime(m.getTime()-p),m}function cb(n){return n.toISOString()}var ub=new on("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:lb,construct:rb,instanceOf:Date,represent:cb});function pb(n){return n==="<<"||n===null}var db=new on("tag:yaml.org,2002:merge",{kind:"scalar",resolve:pb}),qa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function fb(n){if(n===null)return!1;var t,s,o=0,a=n.length,l=qa;for(s=0;s<a;s++)if(t=l.indexOf(n.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function mb(n){var t,s,o=n.replace(/[\r\n=]/g,""),a=o.length,l=qa,r=0,c=[];for(t=0;t<a;t++)t%4===0&&t&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(o.charAt(t));return s=a%4*6,s===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):s===18?(c.push(r>>10&255),c.push(r>>2&255)):s===12&&c.push(r>>4&255),new Uint8Array(c)}function hb(n){var t="",s=0,o,a,l=n.length,r=qa;for(o=0;o<l;o++)o%3===0&&o&&(t+=r[s>>18&63],t+=r[s>>12&63],t+=r[s>>6&63],t+=r[s&63]),s=(s<<8)+n[o];return a=l%3,a===0?(t+=r[s>>18&63],t+=r[s>>12&63],t+=r[s>>6&63],t+=r[s&63]):a===2?(t+=r[s>>10&63],t+=r[s>>4&63],t+=r[s<<2&63],t+=r[64]):a===1&&(t+=r[s>>2&63],t+=r[s<<4&63],t+=r[64],t+=r[64]),t}function _b(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var gb=new on("tag:yaml.org,2002:binary",{kind:"scalar",resolve:fb,construct:mb,predicate:_b,represent:hb}),vb=Object.prototype.hasOwnProperty,kb=Object.prototype.toString;function bb(n){if(n===null)return!0;var t=[],s,o,a,l,r,c=n;for(s=0,o=c.length;s<o;s+=1){if(a=c[s],r=!1,kb.call(a)!=="[object Object]")return!1;for(l in a)if(vb.call(a,l))if(!r)r=!0;else return!1;if(!r)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function yb(n){return n!==null?n:[]}var wb=new on("tag:yaml.org,2002:omap",{kind:"sequence",resolve:bb,construct:yb}),Ib=Object.prototype.toString;function xb(n){if(n===null)return!0;var t,s,o,a,l,r=n;for(l=new Array(r.length),t=0,s=r.length;t<s;t+=1){if(o=r[t],Ib.call(o)!=="[object Object]"||(a=Object.keys(o),a.length!==1))return!1;l[t]=[a[0],o[a[0]]]}return!0}function Eb(n){if(n===null)return[];var t,s,o,a,l,r=n;for(l=new Array(r.length),t=0,s=r.length;t<s;t+=1)o=r[t],a=Object.keys(o),l[t]=[a[0],o[a[0]]];return l}var $b=new on("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:xb,construct:Eb}),Cb=Object.prototype.hasOwnProperty;function zb(n){if(n===null)return!0;var t,s=n;for(t in s)if(Cb.call(s,t)&&s[t]!==null)return!1;return!0}function Fb(n){return n!==null?n:{}}var Sb=new on("tag:yaml.org,2002:set",{kind:"mapping",resolve:zb,construct:Fb});ab.extend({implicit:[ub,db],explicit:[gb,wb,$b,Sb]});function Ar(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var Ob=new Array(256),Lb=new Array(256);for(var ls=0;ls<256;ls++)Ob[ls]=Ar(ls)?1:0,Lb[ls]=Ar(ls);function Mb(n){return Array.from(new Set(n))}function Pr(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const a=[];let l=t;for(;l<s;)a.push(l),l+=o||1;return a}function np(n,t){if(!t||t==="all"||t==="*")return Pr(1,n+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[a,l]=o.split("-",2);s.push(...Pr(+a,l?+l+1:n+1))}return Mb(s).filter(o=>o<=n).sort((o,a)=>o-a)}function Tb(n){const t=A(()=>n.value.path),s=A(()=>qe.length-1),o=A(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),a=A(()=>Qa(o.value)),l=A(()=>qe.find(m=>m.path===`${o.value}`)),r=A(()=>{var m,_,g;return(g=(_=(m=l.value)==null?void 0:m.meta)==null?void 0:_.slide)==null?void 0:g.id}),c=A(()=>{var m,_;return((_=(m=l.value)==null?void 0:m.meta)==null?void 0:_.layout)||(o.value===1?"cover":"default")}),u=A(()=>qe.find(m=>m.path===`${Math.min(qe.length,o.value+1)}`)),p=A(()=>qe.filter(m=>{var _,g;return(g=(_=m.meta)==null?void 0:_.slide)==null?void 0:g.title}).reduce((m,_)=>(Ga(m,_),m),[])),d=A(()=>Ya(p.value,l.value)),f=A(()=>Za(d.value));return{route:n,path:t,total:s,currentPage:o,currentPath:a,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:f}}function Ab(n,t,s){const o=le(0);An(()=>{$t.afterEach(async()=>{await An(),o.value+=1})});const a=A(()=>{var u,p;return o.value,((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=A(()=>{var u,p;return+(((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.clicks)??a.value.length)}),r=A(()=>s.value<qe.length-1||n.value<l.value),c=A(()=>s.value>1||n.value>0);return{clicks:n,clicksElements:a,clicksTotal:l,hasNext:r,hasPrev:c}}const Pb=["id"],Nb=Be({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:t}){const s=n,o=Wn(s,"clicksElements",t),a=A(()=>({height:`${Pa}px`,width:`${xt}px`})),l=Qn();Et(()=>Promise.resolve().then(()=>B0),void 0).then(p=>l.value=p.default);const r=A(()=>s.clicks),c=Ab(r,s.nav.currentRoute,s.nav.currentPage),u=A(()=>`${s.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return kn(L,nn({nav:{...s.nav,...c},configs:Le,themeConfigs:A(()=>Le.themeConfig)})),(p,d)=>{var f;return b(),ne("div",{id:w(u),class:"print-slide-container",style:en(w(a))},[N(w(Gu)),N(w(Wa),{is:(f=n.route)==null?void 0:f.component,"clicks-elements":w(o),"onUpdate:clicksElements":d[0]||(d[0]=m=>Ce(o)?o.value=m:null),clicks:w(r),"clicks-disabled":!1,class:We(w(ja)(n.route)),route:n.route},null,8,["is","clicks-elements","clicks","class","route"]),w(l)?(b(),S(w(l),{key:0,page:+n.route.path},null,8,["page"])):be("v-if",!0),N(w(Qu))],12,Pb)}}}),Nr=M(Nb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Rb=Be({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var l;const t=n;C(L);const s=nn(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),o=A(()=>t.route),a=Tb(o);return(r,c)=>(b(),ne(Se,null,[N(Nr,{"clicks-elements":s,"onUpdate:clicksElements":c[0]||(c[0]=u=>s=u),clicks:0,nav:w(a),route:w(o)},null,8,["clicks-elements","nav","route"]),w(op)?be("v-if",!0):(b(!0),ne(Se,{key:0},di(s.length,u=>(b(),S(Nr,{key:u,clicks:u,nav:w(a),route:w(o)},null,8,["clicks","nav","route"]))),128))],64))}}),Db=M(Rb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),Ub={id:"print-content"},Hb=Be({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const t=n;C(L);const s=A(()=>t.width),o=A(()=>t.width/It),a=A(()=>s.value/o.value),l=A(()=>a.value<It?s.value/xt:o.value*It/xt);let r=qe.slice(0,-1);Rn.value.query.range&&(r=np(r.length,Rn.value.query.range).map(p=>r[p-1]));const c=A(()=>({"select-none":!Le.selectable,"slidev-code-line-numbers":Le.lineNumbers}));return kn(au,l),(u,p)=>(b(),ne("div",{id:"print-container",class:We(w(c))},[e("div",Ub,[(b(!0),ne(Se,null,di(w(r),d=>(b(),S(Db,{key:d.path,route:d},null,8,["route"]))),128))]),rt(u.$slots,"controls")],2))}});const Bb=M(Hb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),Kb=Be({__name:"Print",setup(n){return C(L),Is(()=>{ys?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,s)=>(b(),ne(Se,null,[w(ys)?(b(),S(Yu,{key:0})):be("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:en(w(Na))},[N(Bb,{class:"w-full h-full",style:en({background:"var(--slidev-slide-container-background, black)"}),width:w(Vt).width.value},null,8,["style","width"])],4)],64))}});const jb=M(Kb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const Wb={class:"slidev-layout end"},Vb={__name:"end",setup(n){return C(L),(t,s)=>(b(),ne("div",Wb," END "))}},qb=M(Vb,[["__scopeId","data-v-e532b98d"],["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function Rr(n){return n.startsWith("/")?"/INFORMATICA/3/files/"+n.slice(1):n}function Qb(n,t=!1){const s=n&&["#","rgb","hsl"].some(a=>n.indexOf(a)===0),o={background:s?n:void 0,color:n&&!s?"white":void 0,backgroundImage:s?void 0:n?t?`linear-gradient(#0005, #0008), url(${Rr(n)})`:`url("${Rr(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const Gb={class:"my-auto w-full"},Yb=Be({__name:"cover",props:{background:{default:""}},setup(n){const t=n;C(L);const s=A(()=>Qb(t.background,!0));return(o,a)=>(b(),ne("div",{class:"slidev-layout cover",style:en(w(s))},[e("div",Gb,[rt(o.$slots,"default")])],4))}}),Zb=M(Yb,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),Xb=e("h1",null,"I File",-1),Jb=e("p",null,"I/O e gestione dei File",-1),ey={class:"pt-12"},ny={class:"px-2 py-1"},ty={__name:"1",setup(n){const t={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"INFORMATICA",as:"2022/2023",version:"1.1.0"};return C(L),(s,o)=>{const a=qu;return b(),S(Zb,W(K(t)),{default:I(()=>[be(` http://www.primeeng.it/downloads/materiale%202013/12%20Linguaggio%20C%20-%20Gestione%20di%20file.pdf
https://www.unife.it/scienze/informatica/insegnamenti/programmazione-e-laboratorio/materiale-didattico-anni-precedenti/materiale-didattico-a-a-2016-17/diapositive/120-file-di-testo
https://lia.disi.unibo.it/Courses/FondT-0910-ELT/materiale/10.file.pdf
https://www.freecodecamp.org/italian/news/gestione-dei-file-in-c-come-aprire-chiudere-e-scrivere-su-file/
http://www.diit.unict.it/users/mpalesi/COURSES/LDI_02-03/DISPENSE/files.pdf `),Xb,Jb,e("div",ey,[e("span",ny,[i(" Premi spazio o "),N(a,{class:"inline"}),i(" per la prossima slide ")])])]),_:1},16)}}},sy=M(ty,[["__file","/@slidev/slides/1.md"]]),iy={class:"slidev-layout default"},oy={__name:"default",setup(n){return C(L),(t,s)=>(b(),ne("div",iy,[rt(t.$slots,"default")]))}},Q=M(oy,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),ay=e("h1",null,"I File",-1),ly=e("p",null,"Introduzione",-1),ry=e("ul",null,[e("li",null,"Ogni programma in C che abbiamo scritto fino ad ora manipola dati e strutture dati presenti solamente nella memoria RAM"),e("li",null,[i("Ciò significa che i dati manipolati dal nostro programma non sono persistenti, cioò sono "),e("em",null,"volatili")]),e("li",null,"In altre parole ogni esecuzione di un programma in C NON ha acesso ai dati generati dall’esecuzioni precedenti"),e("li",null,"Quindi i dati generati e gestiti dal programma sono disponibili solo durante l’esecuzione a runtime dello stesso"),e("li",null,"Una volta che il programma termina tutto il contenuto della RAM del processo viene rilasciato e non più disponibile (in Linux le pagine allocate al processo sono cancellate)"),e("li",null,"Anche in caso in cui manchi l’alimentazione al computer tutti i dati del programma in esecuzione vengono irremediabilmente persi")],-1),cy={__name:"2",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[ay,ly,ry]),_:1},16))}},uy=M(cy,[["__file","/@slidev/slides/2.md"]]),py="/INFORMATICA/3/files/assets/files_01-44d473b6.png",dy=e("h1",null,"I File",-1),fy=e("p",null,"Introduzione",-1),my=e("ul",null,[e("li",null,[i("Per poter mantenere disponibili i dati tra le diverse esecuzioni di un programma è necessario rendere i dati stessi "),e("strong",null,"persistenti")]),e("li",null,[i("Il modo più facile per rendere i dati di un programma persistenti è l’archiviazione su memoria di massa "),e("ul",null,[e("li",null,"HDD"),e("li",null,"SSD"),e("li",null,"SD card"),e("li",null,"flashcard"),e("li",null,"…")])])],-1),hy=e("img",{src:py,width:"550",style:{position:"relative",top:"-8rem",left:"15rem"}},null,-1),_y={__name:"3",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[dy,fy,my,hy]),_:1},16))}},gy=M(_y,[["__file","/@slidev/slides/3.md"]]),vy="/INFORMATICA/3/files/assets/files_02-0e512623.png",ky="/INFORMATICA/3/files/assets/files_03-8cbafb48.png",by=e("h1",null,"I File",-1),yy=e("p",null,"Introduzione",-1),wy=e("img",{src:vy,width:"300",style:{position:"relative",top:"3rem",left:"35rem"}},null,-1),Iy=e("img",{src:ky,width:"500",style:{position:"relative",top:"-12rem",left:"0rem"}},null,-1),xy={__name:"4",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[by,yy,wy,Iy]),_:1},16))}},Ey=M(xy,[["__file","/@slidev/slides/4.md"]]),$y="/INFORMATICA/3/files/assets/files_04-c1fc8969.png",Cy=e("h1",null,"I File",-1),zy=e("p",null,"Introduzione",-1),Fy=e("div",{style:{width:"60%"}},[e("ul",null,[e("li",null,[i("Al fine di poter archiviare dei dati sulla memoria di massa, il sistema operativo mette a disposizione il concetto di "),e("strong",null,"file")]),e("li",null,"Un file è una astrazione fornita dal sistema operativo, il cui scopo è consentire la memorizzazione di informazioni su memoria di massa."),e("li",null,[i("Il file è "),e("strong",null,"l’unita logica di memorizzazione"),i(" dei dati su memoria di massa, che consente una memorizzazione persistente dei dati, non limitata dalle dimensioni della memoria centrale.")]),e("li",null,[i("Un file si può anche considerare come "),e("strong",null,"un insieme di record correlati tra loro"),i(" (ossia un insieme di informazioni strutturate e organizzate in un archivio)")])])],-1),Sy=e("img",{src:$y,width:"350",style:{position:"relative",top:"-15rem",left:"33rem"}},null,-1),Oy={__name:"5",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[Cy,zy,Fy,Sy]),_:1},16))}},Ly=M(Oy,[["__file","/@slidev/slides/5.md"]]),My="/INFORMATICA/3/files/assets/files_05-5f99b7f1.png",Ty="/INFORMATICA/3/files/assets/files_06-b6ade4ca.png",Ay=e("h1",null,"I File",-1),Py=e("p",null,"Introduzione",-1),Ny=e("ul",null,[e("li",null,[i("I file vengono distinti in due categorie: "),e("ul",null,[e("li",null,[e("p",null,[e("code",null,"file di testo"),i(": trattati come sequenze di caratteri e organizzati in linee (ciascuna terminata da '\\n')")])]),e("li",null,[e("p",null,[e("code",null,"file binari"),i(": visti come sequenze di byte")])])])])],-1),Ry=e("img",{src:My,width:"400",style:{position:"relative",top:"1rem",left:"-2rem"}},null,-1),Dy=e("img",{src:Ty,width:"500",style:{position:"relative",top:"-12rem",left:"25rem"}},null,-1),Uy={__name:"6",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[Ay,Py,Ny,Ry,Dy]),_:1},16))}},Hy=M(Uy,[["__file","/@slidev/slides/6.md"]]),By="/INFORMATICA/3/files/assets/files_07-8ea906e2.png",Ky=e("h1",null,"I File",-1),jy=e("p",null,"Introduzione",-1),Wy=e("ul",null,[e("li",null,[i("I "),e("strong",null,"file di testo"),i(" sono file di caratteri, organizzati in linee")]),e("li",null,"Ogni linea e` terminata da una marca di fine linea (newline, carattere '\\n')"),e("li",null,[e("code",null,"Il record logico può essere il singolo carattere, la parola, oppure la linea")])],-1),Vy=e("img",{src:By,width:"650",style:{position:"relative",top:"2rem",left:"7rem"}},null,-1),qy={__name:"7",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[Ky,jy,Wy,Vy]),_:1},16))}},Qy=M(qy,[["__file","/@slidev/slides/7.md"]]),Gy="/INFORMATICA/3/files/assets/files_08-704eeb82.png",Yy=e("h1",null,"I File",-1),Zy=e("p",null,"Introduzione",-1),Xy=e("ul",null,[e("li",null,[i("I "),e("strong",null,"file di binari"),i(" sono file di byte con un organizzazione puramente sequenziale")]),e("li",null,"Non c’è una suddivisione in linee e pertanto non c’è un terminatore di linea (\\n)"),e("li",null,[e("code",null,"Il record logico è il singolo byte")])],-1),Jy=e("img",{src:Gy,width:"600",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),ew={__name:"8",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[Yy,Zy,Xy,Jy]),_:1},16))}},nw=M(ew,[["__file","/@slidev/slides/8.md"]]),tw="/INFORMATICA/3/files/assets/files_10-3ef5f1ea.png",sw=e("h1",null,"I File",-1),iw=e("p",null,"Introduzione",-1),ow=e("ul",null,[e("li",null,[i("In genere i file hanno una struttura sequenziale, cioè: "),e("ul",null,[e("li",null,"i record logici sono organizzati in una sequenza rigidamente ordinata"),e("li",null,'per accedere ad un particolare record logico, è necessario "scorrere" tutti quelli che lo precedono')])])],-1),aw=e("img",{src:tw,width:"550",style:{position:"relative",top:"3rem",left:"10rem"}},null,-1),lw={__name:"9",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[sw,iw,ow,aw]),_:1},16))}},rw=M(lw,[["__file","/@slidev/slides/9.md"]]),cw="/INFORMATICA/3/files/assets/files_09-dfac64b4.png",uw=e("h1",null,"I File",-1),pw=e("p",null,"Introduzione",-1),dw=e("ul",null,[e("li",null,[i("Genralmente è possibile accedere ad un file in due modi diversi: "),e("ul",null,[e("li",null,[e("strong",null,"Accesso Sequenziale"),i(": si accede ai record del file partendo dal primo e scandendo in modo ordinato ogni record. In altre parole per accedere al record N, è ncessario aver prima letto tutti gli N-1 record precedenti")])])])],-1),fw=e("img",{src:cw,width:"650",style:{position:"relative",top:"1rem",left:"7rem"}},null,-1),mw={__name:"10",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[uw,pw,dw,fw]),_:1},16))}},hw=M(mw,[["__file","/@slidev/slides/10.md"]]),_w="/INFORMATICA/3/files/assets/files_09a-f41b1d1e.png",gw=e("h1",null,"I File",-1),vw=e("p",null,"Introduzione",-1),kw=e("ul",null,[e("li",null,[i("Genralmente è possibile accedere ad un file in due modi diversi: "),e("ul",null,[e("li",null,[e("strong",null,"Accesso Casuale o Diretto"),i(": nel caso di record aventi tutti la stessa lunghezza, è possibile leggere un record alla posizione N indipendentemente dal record letto precedentemente. In altre parole per accedere al record N "),e("strong",null,"NON"),i(" è necessario dover leggere tutti quelli precedenti")])])])],-1),bw=e("img",{src:_w,width:"650",style:{position:"relative",top:"1rem",left:"7rem"}},null,-1),yw={__name:"11",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[gw,vw,kw,bw]),_:1},16))}},ww=M(yw,[["__file","/@slidev/slides/11.md"]]),Iw=e("h1",null,"I File",-1),xw=e("p",null,"I file in C",-1),Ew=e("ul",null,[e("li",null,"Come abbiamo già visto, il linguaggio C non mette a disposizione nessuna istruzione di Input/Output"),e("li",null,"Le operazioni di I/O (printf e scanf) sono definite e fornite dalla libreria standard stdio.h"),e("li",null,"Questa libreria, in modo analogo alle funzioni di I/O per il terminale, mette a disposizione le funzioni per la lettura/scrittura dei file sul disco in modo indipendente dalle caratteristiche proprie dei dispositivi fisici"),e("li",null,"Infatti useremo le stesse funzioni di libreria sia per scrivere su un disco HDD che su uno SSD anche se profondamente diversi a livello fisico"),e("li",null,"Ciò è possibile poichè il sistema di I/O del C è caratterizzato da un’interfaccia indipendente dal dispositivo effettivo che si interpone tra il programmatore e il dispositivo stesso")],-1),$w={__name:"12",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[Iw,xw,Ew]),_:1},16))}},Cw=M($w,[["__file","/@slidev/slides/12.md"]]),zw=e("h1",null,"I File",-1),Fw=e("p",null,"I file in C",-1),Sw=e("ul",null,[e("li",null,[i("La libreria standard del C mette a disposizioni specifiche funzioni per effettuare le principali attività sui file: "),e("ul",null,[e("li",null,[e("strong",null,"Apertura di un file"),i(": Prima di poter accedere ad un file è necessario aprirlo, cioè è necessario creare un collegamento logico, che permette di accedere ai record del file presente su disco")]),e("li",null,[e("strong",null,"Chiusura di un file"),i(": rilascia le risorse allocate e chiude il collegamento logico precedentemente creato")]),e("li",null,[e("strong",null,"Lettura da file"),i(": permette di leggere i record presenti nel file e di trasferirli nella memoria centrale")]),e("li",null,[e("strong",null,"Scrittura su file"),i(": permette di scrivere i recorc su un file trasferendoli dalla memoria centrale a quella di massa")]),e("li",null,[e("strong",null,"Posizionamento in un file"),i(": permette di accedere in modo diretto ai record di un file")])])])],-1),Ow={__name:"13",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[zw,Fw,Sw]),_:1},16))}},Lw=M(Ow,[["__file","/@slidev/slides/13.md"]]),Mw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Tw=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),Aw=[Tw];function Pw(n,t){return b(),ne("svg",Mw,Aw)}const Nw={name:"ph-clipboard",render:Pw},Rw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Dw=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Uw=[Dw];function Hw(n,t){return b(),ne("svg",Rw,Uw)}const Bw={name:"ph-check-circle",render:Hw},Kw=["title"],jw=Be({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const t=n;C(L);const s=C(su),o=C(iu),a=C(ou);function l(f=5){const m=[],_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=_.length;for(let k=0;k<f;k++)m.push(_.charAt(Math.floor(Math.random()*g)));return m.join("")}const r=le(),c=Yn();pi(()=>{const f=t.at==null?o==null?void 0:o.value.length:t.at,m=A(()=>a!=null&&a.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),t.ranges.length-1)),_=A(()=>t.ranges[m.value]||"");if(t.ranges.length>=2&&!(a!=null&&a.value)){const g=l(),k=Mm(t.ranges.length-1).map(y=>g+y);o!=null&&o.value&&(o.value.push(...k),ao(()=>k.forEach(y=>Lm(o.value,y)),c))}Is(()=>{if(!r.value)return;const k=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const y of k){const z=Array.from(y.querySelectorAll(".line")),E=np(z.length,_.value);if(z.forEach((F,O)=>{const q=E.includes(O+1);F.classList.toggle(Om,!0),F.classList.toggle("highlighted",q),F.classList.toggle("dishonored",!q)}),t.maxHeight){const F=y.querySelector(".line.highlighted");F&&F.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=Fh();function d(){var m,_;const f=(_=(m=r.value)==null?void 0:m.querySelector(".slidev-code"))==null?void 0:_.textContent;f&&p(f)}return(f,m)=>{const _=Bw,g=Nw;return b(),ne("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:en({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[rt(f.$slots,"default"),w(Le).codeCopy?(b(),ne("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(u)?"Copied":"Copy",onClick:m[0]||(m[0]=k=>d())},[w(u)?(b(),S(_,{key:0,class:"p-2 w-8 h-8"})):(b(),S(g,{key:1,class:"p-2 w-8 h-8"}))],8,Kw)):be("v-if",!0)],4)}}}),_e=M(jw,[["__file","/home/antonio/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),Ww=e("h1",null,"I File",-1),Vw=e("p",null,"I file in C",-1),qw=e("ul",null,[e("li",null,[i("In C un file è identificato da un "),e("code",null,"puntatore a file"),i(" che punta ad una struttura datri contenente tutte le informazioni necessarie ad integragire ocn il file stesso")]),e("li",null,[i("In altre parole, il "),e("strong",null,"puntatore a file"),i(" è il collegamento logico che viene creato in fase di "),e("em",null,"apertura del file")])],-1),Qw=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token keyword"},"struct"),i(),e("span",{class:"token class-name"},"_IO_FILE"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token keyword"},"int"),i(" _flags"),e("span",{class:"token punctuation"},";"),i("           "),e("span",{class:"token comment"},"/* High-order word is _IO_MAGIC; rest is flags. */")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token keyword"},"char"),i(),e("span",{class:"token operator"},"*"),i("_IO_read_ptr"),e("span",{class:"token punctuation"},";"),i("   "),e("span",{class:"token comment"},"/* Current read pointer */")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token keyword"},"char"),i(),e("span",{class:"token operator"},"*"),i("_IO_read_end"),e("span",{class:"token punctuation"},";"),i("   "),e("span",{class:"token comment"},"/* End of get area. */")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token keyword"},"char"),i(),e("span",{class:"token operator"},"*"),i("_IO_read_base"),e("span",{class:"token punctuation"},";"),i("  "),e("span",{class:"token comment"},"/* Start of putback+get area. */")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token keyword"},"char"),i(),e("span",{class:"token operator"},"*"),i("_IO_write_base"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token comment"},"/* Start of put area. */")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token keyword"},"char"),i(),e("span",{class:"token operator"},"*"),i("_IO_write_ptr"),e("span",{class:"token punctuation"},";"),i("  "),e("span",{class:"token comment"},"/* Current put pointer. */")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token keyword"},"int"),i(" _fileno"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("  "),e("span",{class:"token keyword"},"int"),i(" _mode"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"typedef"),i(),e("span",{class:"token keyword"},"struct"),i(),e("span",{class:"token class-name"},"_IO_FILE"),i(" FILE"),e("span",{class:"token punctuation"},";")])])],-1),Gw={__name:"14",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[Ww,Vw,qw,N(a,pe({},{ranges:[""]}),{default:I(()=>[Qw]),_:1},16)]),_:1},16)}}},Yw=M(Gw,[["__file","/@slidev/slides/14.md"]]),Zw=e("h1",null,"I File",-1),Xw=e("p",null,"I file in C",-1),Jw=e("ul",null,[e("li",null,"Il puntatore a file è una variabile che viene utilizzata per indirizzare un file durante le operazioni di accesso (lettura e scrittura.)"),e("li",null,[i("Esso contiene, tra l’altro: "),e("ul",null,[e("li",null,"il file"),e("li",null,"l’elemento corrente all’interno della sequenza")])]),e("li",null,"Il puntatore viene dichiarato nel seguente modo")],-1),eI=e("br",null,null,-1),nI=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")])])],-1),tI=e("br",null,null,-1),sI=e("ul",null,[e("li",null,"Questo puntatore è utilizzato da tutte le funzione che leggomno e scrivono sul file"),e("li",null,"E’ importante, alla fine delle operazioni sul file, chiudere e quindi rilasciare il puntatore al file"),e("li",null,"Ciò è necessario per rilasciare, in modo corretto, le risorse allocate (memoria, …) durante l’apertura del file")],-1),iI={__name:"15",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[Zw,Xw,Jw,eI,N(a,pe({},{ranges:[""]}),{default:I(()=>[nI]),_:1},16),tI,sI]),_:1},16)}}},oI=M(iI,[["__file","/@slidev/slides/15.md"]]),aI=e("h1",null,"I File",-1),lI=e("p",null,"I file in C",-1),rI=e("p",null,"Le principali funzioni per gestire i file in C sono:",-1),cI=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[e("strong",null,"Funzione")]),e("th",null,[e("strong",null,"Descrizione")])])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"fopen")]),e("td",null,"apre un file dato il suo nome e restituisce un puntatore ad esso")]),e("tr",null,[e("td",null,[e("code",null,"flcose")]),e("td",null,"chiude un file, scrivendo su disco eventuali dati in cache e restituisce le risorse allocate")]),e("tr",null,[e("td",null,[e("code",null,"fprintf")]),e("td",null,"scrive un output su un file. Dal nome è chiaro che si comporta esattamente come printf, ma anzichè scrivere su terminale scrive su file")]),e("tr",null,[e("td",null,[e("code",null,"fscanf")]),e("td",null,"esattamente come scanf, permette di leggere un input formattato da file")]),e("tr",null,[e("td",null,[e("code",null,"fread")]),e("td",null,"legge uno o più record da un file")]),e("tr",null,[e("td",null,[e("code",null,"fwrite")]),e("td",null,"scrive uno o più record su file")]),e("tr",null,[e("td",null,[e("code",null,"fseek")]),e("td",null,"cambia la posizione attuale all’interno del file permettendo l’accesso casuale al file stesso")])])],-1),uI=e("ul",null,[e("li",null,[i("Il manuale di ogni funzione è disponibile digitando "),e("code",null,"man <nome funzione>")])],-1),pI={__name:"16",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[aI,lI,rI,cI,uI]),_:1},16))}},dI=M(pI,[["__file","/@slidev/slides/16.md"]]),fI=e("h1",null,"I File",-1),mI=e("p",null,"Apertura di un file con fopen",-1),hI=e("p",null,[e("code",null,"FILE *fopen(const char *pathname, const char *mode);")],-1),_I=e("ul",null,[e("li",null,[i("Apre un file di nome "),e("em",null,"pathname"),i(" in modalità "),e("em",null,"mode")])],-1),gI=e("p",null,"dove:",-1),vI=e("ul",null,[e("li",null,[e("strong",null,"pathname"),i(": percorco relativo o assoluto del file. Include il nome del file")]),e("li",null,[e("strong",null,"mode"),i(": modalità di apertura del file secondo la seguente tabella (vedi prossima slide)")])],-1),kI=e("p",null,"restituisce:",-1),bI=e("ul",null,[e("li",null,[e("strong",null,"NULL"),i(": in caso di errore di apertura del file (es: file non esistente)")]),e("li",null,[e("strong",null,"FILE *"),i(": puntatore al file appena aperto")])],-1),yI={__name:"17",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[fI,mI,hI,_I,gI,vI,kI,bI]),_:1},16))}},wI=M(yI,[["__file","/@slidev/slides/17.md"]]),II=e("h1",null,"I File",-1),xI=e("p",null,"Apertura di un file con fopen",-1),EI=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,[e("strong",null,"mode")]),e("th",null,[e("strong",null,"Descrizione")]),e("th",null,[e("strong",null,"Note")])])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"r")]),e("td",null,"apre il file in sola lettura"),e("td",null,"Il puntatore è posizionato all’inizio del file")]),e("tr",null,[e("td",null,[e("code",null,"r+")]),e("td",null,"apre il file in lettura e scrittura"),e("td",null,"Il puntatore è posizionato all’inizio del file")]),e("tr",null,[e("td",null,[e("code",null,"w")]),e("td",null,"crea o sovrascrive un file in scrittura"),e("td",null,"Il puntatore è posizionato all’inizio del file")]),e("tr",null,[e("td",null,[e("code",null,"w+")]),e("td",null,"crea o sovrascrive un file in scrittura e lettura"),e("td",null,"Il puntatore è posizionato all’inizio del file")]),e("tr",null,[e("td",null,[e("code",null,"a")]),e("td",null,"apre il file in scrittura se esiste o lo crera in caso contrario"),e("td",null,"Il puntatore è posizionato alla file del file")]),e("tr",null,[e("td",null,[e("code",null,"a+")]),e("td",null,"apre il file in scrittura e lettura se esiste o lo crera in caso contrario"),e("td",null,"Il puntatore è posizionato alla file del file")])])],-1),$I={__name:"18",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[II,xI,EI]),_:1},16))}},CI=M($I,[["__file","/@slidev/slides/18.md"]]),tp="/INFORMATICA/3/files/assets/files_11-4143c2a2.png",zI=e("h1",null,"I File",-1),FI=e("p",null,"I file in C",-1),SI=e("p",null,[i("mode: "),e("strong",null,"r"),i(" e "),e("strong",null,"r+")],-1),OI=e("ul",null,[e("li",null,"se il file è esistente"),e("li",null,"apre il file e posiziona il puntatore all’inizio del file (primo record)")],-1),LI=e("img",{src:tp,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),MI={__name:"19",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[zI,FI,SI,OI,LI]),_:1},16))}},TI=M(MI,[["__file","/@slidev/slides/19.md"]]),AI="/INFORMATICA/3/files/assets/files_12-7dd1b4b3.png",PI=e("h1",null,"I File",-1),NI=e("p",null,"I file in C",-1),RI=e("p",null,[i("mode: "),e("strong",null,"w"),i(" e "),e("strong",null,"w+")],-1),DI=e("ul",null,[e("li",null,"se il file è esistente"),e("li",null,"apre il file in scrittura e posiziona il puntatore all’inizio del file (primo record)"),e("li",null,"cancella il contenuto del file esistente e viene riscritto")],-1),UI=e("img",{src:AI,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),HI={__name:"20",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[PI,NI,RI,DI,UI]),_:1},16))}},BI=M(HI,[["__file","/@slidev/slides/20.md"]]),KI="/INFORMATICA/3/files/assets/files_13-937f55d6.png",jI=e("h1",null,"I File",-1),WI=e("p",null,"I file in C",-1),VI=e("p",null,[i("mode: "),e("strong",null,"a"),i(" e "),e("strong",null,"a+")],-1),qI=e("ul",null,[e("li",null,"apr eil file e posiziona il puntatore alla fine del file (ultimo record)"),e("li",null,[i("se il file è esistente il suo contenuto non viene perso e i nuovi dati sono aggiunti in coda ("),e("strong",null,"append"),i(")")])],-1),QI=e("img",{src:KI,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),GI={__name:"21",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[jI,WI,VI,qI,QI]),_:1},16))}},YI=M(GI,[["__file","/@slidev/slides/21.md"]]),ZI=e("h1",null,"I File",-1),XI=e("p",null,"Apertura di un file con fopen",-1),JI=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")]),i(`
`),e("span",{class:"line"},[i("FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token comment"},"//dichiara il puntatore a file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"/home/antonio/test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"r"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token comment"},"//apre il file in modalità sola lettura")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{"),i(),e("span",{class:"token comment"},"//se il puntatore è NULL non è stato possibile aprire il file")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},`"Errore nell'apertura del file\\n"`),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token comment"},"//stampa un messaggio di errore sulla console")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token comment"},"//esce dal programma")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")])])],-1),e2=e("p",null,"oppure in maniera più concisa",-1),n2=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[i("FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token comment"},"//dichiara il puntatore a file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"/home/antonio/test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"r"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{"),i(),e("span",{class:"token comment"},"//se il puntatore è NULL non è stato possibile aprire il file")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},`"Errore nell'apertura del file\\n"`),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token comment"},"//stampa un messaggio di errore sulla console")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token comment"},"//esce dal programma")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),t2={__name:"22",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[ZI,XI,N(a,pe({},{ranges:[""]}),{default:I(()=>[JI]),_:1},16),e2,N(a,pe({},{ranges:[""]}),{default:I(()=>[n2]),_:1},16)]),_:1},16)}}},s2=M(t2,[["__file","/@slidev/slides/22.md"]]),i2=e("h1",null,"I File",-1),o2=e("p",null,"I file in C",-1),a2=e("ul",null,[e("li",null,"eseguendo questo programma otteniamo")],-1),l2=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file            ")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Impossibile aprire il file")])])],-1),r2=e("br",null,null,-1),c2=e("ul",null,[e("li",null,"Questo messaggio ci dice che non è stato possibile aprire il file"),e("li",null,"Tuttavia non ci fornisce nessuna informazione sul motivo"),e("li",null,"La libreria C mette a disposizione un metodo molto facile per conoscere la motivazione del falliemento")],-1),u2={__name:"23",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[i2,o2,a2,N(a,pe({},{ranges:[""]}),{default:I(()=>[l2]),_:1},16),r2,c2]),_:1},16)}}},p2=M(u2,[["__file","/@slidev/slides/23.md"]]),d2=e("h1",null,"I File",-1),f2=e("p",null,"errno e gli errori in C",-1),m2=e("ul",null,[e("li",null,"Spesso, se non sempre, è utile sapere se una chiamata a funzione è andata a buon fine oppure no"),e("li",null,"Ma ancor più importante, in caso di fallimento, è sapere il motivo per cui la chiamata non è andata a buon fine"),e("li",null,[i("La maggioranza delle funzioni di libreria C, e tutte le system call, in caso di fallimento impostano una speciale variabile chiamata "),e("code",null,"errno"),i(" con un valore che indica il motivo del fallimento")]),e("li",null,"In caso che la chiamata vada a buon fine, il valore di errno non è da considerarsi valido"),e("li",null,[i("Pertanto esaminando il valore di "),e("strong",null,"errno"),i(" un programma può capire il motivo del fallimento dell’ultima chiamata")])],-1),h2={__name:"24",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[d2,f2,m2]),_:1},16))}},_2=M(h2,[["__file","/@slidev/slides/24.md"]]),g2=e("h1",null,"I File",-1),v2=e("p",null,"errno e gli errori in C",-1),k2=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<errno.h>")])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"r"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file: %d\\n"'),e("span",{class:"token punctuation"},","),i(" errno"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("# "),e("span",{class:"token punctuation"},"."),e("span",{class:"token operator"},"/"),i("file            ")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),i(),e("span",{class:"token expression"},[i("Impossibile aprire il file"),e("span",{class:"token operator"},":"),i(),e("span",{class:"token number"},"2")])])])])],-1),b2={__name:"25",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[g2,v2,N(a,pe({},{ranges:[""]}),{default:I(()=>[k2]),_:1},16)]),_:1},16)}}},y2=M(b2,[["__file","/@slidev/slides/25.md"]]),w2=e("h1",null,"I File",-1),I2=e("p",null,"errno e gli errori in C",-1),x2=e("ul",null,[e("li",null,"Quindi ora sappiamo che non è possibile aprire il file e il motivo è rappresentato dal codice 2"),e("li",null,"Ma cosa significa il codice 2?"),e("li",null,[i("Per rispondere questa domanda possiamo legger eil contenuto del file "),e("em",null,"errno.h")]),e("li",null,"Oppure più semplicemente invocare il comando errno in questo modo")],-1),E2=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# errno -l   ")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("EPERM "),e("span",{class:"token number"},"1"),i(" Operazione non permessa")]),i(`
`),e("span",{class:"line"},[i("ENOENT "),e("span",{class:"token number"},"2"),i(" File o directory non esistente")]),i(`
`),e("span",{class:"line"},[i("ESRCH "),e("span",{class:"token number"},"3"),i(" Nessun processo corrisponde")]),i(`
`),e("span",{class:"line"},[i("EINTR "),e("span",{class:"token number"},"4"),i(" Chiamata di sistema interrotta")]),i(`
`),e("span",{class:"line"},[i("EIO "),e("span",{class:"token number"},"5"),i(" Errore di input/output")]),i(`
`),e("span",{class:"line"},[i("ENXIO "),e("span",{class:"token number"},"6"),i(" Device o indirizzo non esistente")]),i(`
`),e("span",{class:"line"},[i("E2BIG "),e("span",{class:"token number"},"7"),i(" Elenco degli argomenti troppo lungo")])])],-1),$2=e("ul",null,[e("li",null,"Come si può notare il numero 2 significa che il file o la directory che stiamo provando ad aprire non è esistente")],-1),C2={__name:"26",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[w2,I2,x2,N(a,pe({},{ranges:[""]}),{default:I(()=>[E2]),_:1},16),$2]),_:1},16)}}},z2=M(C2,[["__file","/@slidev/slides/26.md"]]),F2=e("h1",null,"I File",-1),S2=e("p",null,"perror e gli errori in C",-1),O2=e("ul",null,[e("li",null,"Sarebbe utile accedere alla tabella di mapping tra codice e stringa di error all’interno del nostro codice C"),e("li",null,"La libreria C ci viene in aiuto mettendoci a disposizione la funzione")],-1),L2=e("p",null,[e("code",null,"void perror(const char *s);")],-1),M2=e("ul",null,[e("li",null,[i("Questa funzione genera un messaggio di errore, preceduto dal nostro messaggio "),e("strong",null,"s"),i(", che descrive il motivo del fallimento dell’ultima chiamata a funzione")]),e("li",null,"In questo modo possiamo dotare i nostri programmi in C di una miglior gestione degli errori e renderli maggiormente uiser friendly")],-1),T2={__name:"27",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[F2,S2,O2,L2,M2]),_:1},16))}},A2=M(T2,[["__file","/@slidev/slides/27.md"]]),P2=e("h1",null,"I File",-1),N2=e("p",null,"perror e gli errori in C",-1),R2=e("ul",null,[e("li",null,"Trasformiamo il programma precedente in modo che usi la funzione perror")],-1),D2=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"r"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("# "),e("span",{class:"token punctuation"},"."),e("span",{class:"token operator"},"/"),i("file")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),i(),e("span",{class:"token expression"},[i("Impossibile aprire il file"),e("span",{class:"token operator"},":"),i(" No such file or directory")])])])])],-1),U2=e("ul",null,[e("li",null,"Come si vede ora il messaggio di errore è accurato e fornisce informazioni dettagliate sul motivo del fallimento")],-1),H2={__name:"28",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[P2,N2,R2,N(a,pe({},{ranges:[""]}),{default:I(()=>[D2]),_:1},16),U2]),_:1},16)}}},B2=M(H2,[["__file","/@slidev/slides/28.md"]]),K2=e("h1",null,"I File",-1),j2=e("p",null,"Chiusura di un file con fclose",-1),W2=e("p",null,[e("code",null,"int fclose(FILE *stream)")],-1),V2=e("ul",null,[e("li",null,[i("Chiude un file puntato da "),e("em",null,"stream")])],-1),q2=e("p",null,"dove:",-1),Q2=e("ul",null,[e("li",null,[e("strong",null,"stream"),i(": il puntatore a file restituito da fopen")])],-1),G2=e("p",null,"restituisce:",-1),Y2=e("ul",null,[e("li",null,[e("strong",null,"0"),i(": in caso di esecuzione corretta (chiusura del file)")]),e("li",null,[e("strong",null,"EOF"),i(": in caso di fallimento. errno è settato con il codice di errore appropriato")])],-1),Z2={__name:"29",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[K2,j2,W2,V2,q2,Q2,G2,Y2]),_:1},16))}},X2=M(Z2,[["__file","/@slidev/slides/29.md"]]),J2=e("h1",null,"I File",-1),ex=e("p",null,"Chiusura di un file con fclose",-1),nx=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"r"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token comment"},"//codice che interagisce con il file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fclose"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token comment"},"// se != 0 c'è un errore")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile chiudere il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},"    "),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),tx={__name:"30",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[J2,ex,N(a,pe({},{ranges:[""]}),{default:I(()=>[nx]),_:1},16)]),_:1},16)}}},sx=M(tx,[["__file","/@slidev/slides/30.md"]]),ix=e("h1",null,"I File",-1),ox=e("p",null,"Output formattato su file con fprintf",-1),ax=e("p",null,[e("code",null,"int fprintf(FILE *stream, const char *format, ...);")],-1),lx=e("p",null,"dove:",-1),rx=e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"stream"),i(": puntatore a file restituito da fopen")])]),e("li",null,[e("p",null,"Questa funzione va utilizzata esattamente come printf, ma anzichè stampare un output formattato su schermo lo scrive su file")]),e("li",null,[e("p",null,"Ovviamente il file va aperto in scrittura")])],-1),cx={__name:"31",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[ix,ox,ax,lx,rx]),_:1},16))}},ux=M(cx,[["__file","/@slidev/slides/31.md"]]),px=e("h1",null,"I File",-1),dx=e("p",null,"Output formattato su file con fprintf",-1),fx=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"w"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fprintf"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"Linea di testo #1\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fprintf"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"Linea di testo #2\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fprintf"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"Linea di testo #...\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fprintf"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"Linea di testo #N\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},"    "),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fclose"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile chiudere il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"File test.txt generato correttamente\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),mx={__name:"32",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[px,dx,N(a,pe({},{ranges:[""]}),{default:I(()=>[fx]),_:1},16)]),_:1},16)}}},hx=M(mx,[["__file","/@slidev/slides/32.md"]]),_x=e("h1",null,"I File",-1),gx=e("p",null,"Output formattato su file con fprintf",-1),vx=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file            ")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# File test.txt generato correttamente")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# more test.txt")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("Linea di testo "),e("span",{class:"token comment"},"#1")]),i(`
`),e("span",{class:"line"},[i("Linea di testo "),e("span",{class:"token comment"},"#2")]),i(`
`),e("span",{class:"line"},[i("Linea di testo "),e("span",{class:"token comment"},"#...")]),i(`
`),e("span",{class:"line"},[i("Linea di testo "),e("span",{class:"token comment"},"#N")])])],-1),kx=e("ul",null,[e("li",null,"Come si può facilemnte notare, i 4 fprintf non hanno stampato nulla sullo schermo ma scritto 4 linee di testo nel file test.txt"),e("li",null,"Mentre l’ultimo printf ha stampato un messaggio su schermo ma non ha modificato il file"),e("li",null,[i("Il file test.txt non era esistente ed è stato creato siccome abbiamo aperto il file in modalità "),e("strong",null,"w")]),e("li",null,"Se il file test.txt era già esistente sarebbe stato completamente sovrascritto dall’esecuzione del programma")],-1),bx={__name:"33",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[_x,gx,N(a,pe({},{ranges:[""]}),{default:I(()=>[vx]),_:1},16),kx]),_:1},16)}}},yx=M(bx,[["__file","/@slidev/slides/33.md"]]),wx=e("h1",null,"I File",-1),Ix=e("p",null,"Output formattato su file con fprintf",-1),xx=e("ul",null,[e("li",null,"Proviamo ora a scrivere un output formattato su file")],-1),Ex=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"w"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fprintf"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"LE TABELLINE\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fprintf"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"------------\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"for"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),i(" i "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),i(" i "),e("span",{class:"token operator"},"<"),i(),e("span",{class:"token number"},"11"),e("span",{class:"token punctuation"},";"),i(" i"),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token keyword"},"for"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),i(" j "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),i(" j "),e("span",{class:"token operator"},"<"),i(),e("span",{class:"token number"},"11"),e("span",{class:"token punctuation"},";"),i(" j"),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("            "),e("span",{class:"token function"},"fprintf"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"%d x %d = %d\\n"'),e("span",{class:"token punctuation"},","),i(" i"),e("span",{class:"token punctuation"},","),i(" j"),e("span",{class:"token punctuation"},","),i(" i "),e("span",{class:"token operator"},"*"),i(" j"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fprintf"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"------------\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fclose"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile chiudere il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"File test.txt generato correttamente\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),$x={__name:"34",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[wx,Ix,xx,N(a,pe({},{ranges:[""]}),{default:I(()=>[Ex]),_:1},16)]),_:1},16)}}},Cx=M($x,[["__file","/@slidev/slides/34.md"]]),zx=e("h1",null,"I File",-1),Fx=e("p",null,"Output formattato su file con fprintf",-1),Sx=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file                                      ")]),i(`
`),e("span",{class:"line"},"File test.txt generato correttamente"),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# more test.txt  ")]),i(`
`),e("span",{class:"line"},"LE TABELLINE"),i(`
`),e("span",{class:"line"},"------------"),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1"),i(" x "),e("span",{class:"token number"},"1"),i(),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"1")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1"),i(" x "),e("span",{class:"token number"},"2"),i(),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"2")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),i(".")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"1"),i(" x "),e("span",{class:"token number"},"10"),i(),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"10")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2"),i(" x "),e("span",{class:"token number"},"1"),i(),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"2")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2"),i(" x "),e("span",{class:"token number"},"2"),i(),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"4")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),i(".")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"2"),i(" x "),e("span",{class:"token number"},"10"),i(),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"20")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),i(".")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4"),i(" x "),e("span",{class:"token number"},"5"),i(),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"20")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),i(".")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),i(".")])])],-1),Ox={__name:"35",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[zx,Fx,N(a,pe({},{ranges:[""]}),{default:I(()=>[Sx]),_:1},16)]),_:1},16)}}},Lx=M(Ox,[["__file","/@slidev/slides/35.md"]]),Mx=e("h1",null,"I File",-1),Tx=e("p",null,"Esercizio file_01",-1),Ax=e("ul",null,[e("li",null,"Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file"),e("li",null,"Per il nome del file usare un percorso assoluto"),e("li",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_01.c")])],-1),Px=e("p",null,"Output",-1),Nx=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./_file01 && more test.txt")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ./_file01 &&  more test.txt")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"22")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ./_file01 &&  more test.txt")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"53")])])],-1),Rx={__name:"36",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[Mx,Tx,Ax,Px,N(a,pe({},{ranges:[""]}),{default:I(()=>[Nx]),_:1},16)]),_:1},16)}}},Dx=M(Rx,[["__file","/@slidev/slides/36.md"]]),Ux=e("h1",null,"I File",-1),Hx=e("p",null,"Esercizio file_02",-1),Bx=e("ul",null,[e("li",null,"Scrivere un programma in C che ogni volta che viene eseguito, estrae un numero intero casuale tra 1 e 100 e lo scrive su un file in coda ai numeri precedenti"),e("li",null,"Per il nome del file usare un percorso relativo"),e("li",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_02.c")])],-1),Kx=e("p",null,"Output",-1),jx=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./_file02 &&  more test.txt")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ./_file02 &&  more test.txt")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"22")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ./_file02 &&  more test.txt")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"4")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"22")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token number"},"53")])])],-1),Wx={__name:"37",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[Ux,Hx,Bx,Kx,N(a,pe({},{ranges:[""]}),{default:I(()=>[jx]),_:1},16)]),_:1},16)}}},Vx=M(Wx,[["__file","/@slidev/slides/37.md"]]),qx=e("h1",null,"I File",-1),Qx=e("p",null,"Esercizio file_03",-1),Gx=e("ul",null,[e("li",null,"Scrivere un programma in C, che letto da linea di comando il nome, il cognome, età e il numero di telefono di un utente lo scrive su un file, in coda ai record precedenti, in formato CSV"),e("li",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_03.c")])],-1),Yx=e("p",null,"Output",-1),Zx=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./_file03 &&  more test.csv")]),i(`
`),e("span",{class:"line"},"Mario,Rossi,32,3786543213"),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ./_file03 &&  more test.csv")]),i(`
`),e("span",{class:"line"},"Mario,Rossi,32,3786543213"),i(`
`),e("span",{class:"line"},"Giuseppe,Verdi,45,3217864286"),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ./_file03 &&  more test.csv")]),i(`
`),e("span",{class:"line"},"Mario,Rossi,32,3786543213"),i(`
`),e("span",{class:"line"},"Giuseppe,Verdi,45,3217864286"),i(`
`),e("span",{class:"line"},"Mirko,Bianchi,63,3984368763")])],-1),Xx={__name:"38",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[qx,Qx,Gx,Yx,N(a,pe({},{ranges:[""]}),{default:I(()=>[Zx]),_:1},16)]),_:1},16)}}},Jx=M(Xx,[["__file","/@slidev/slides/38.md"]]),eE=e("h1",null,"I File",-1),nE=e("p",null,"Lettura formattata di un file con fscanf",-1),tE=e("p",null,[e("code",null,"int fscanf(FILE *stream, const char *format, ...);")],-1),sE=e("p",null,"dove:",-1),iE=e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"stream"),i(": è il file pointer restituito da fopen")])]),e("li",null,[e("p",null,"Questa funzione si comporta esattamente come scanf, ma anzichè leggere da tastiera, legge un input formattato da file")])],-1),oE={__name:"39",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[eE,nE,tE,sE,iE]),_:1},16))}},aE=M(oE,[["__file","/@slidev/slides/39.md"]]),lE=e("h1",null,"I File",-1),rE=e("p",null,"Lettura formattata di un file con fscanf",-1),cE=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<string.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"define"),i(),e("span",{class:"token macro-name"},"MAX_BUFF"),i(),e("span",{class:"token expression"},[e("span",{class:"token number"},"50")])])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"char"),i(" buff"),e("span",{class:"token punctuation"},"["),i("MAX_BUFF"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"r"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"bzero"),e("span",{class:"token punctuation"},"("),i("buff"),e("span",{class:"token punctuation"},","),i(" MAX_BUFF"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fscanf"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"%s"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token operator"},"&"),i("buff"),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Linea letta da file\\n%s\\n"'),e("span",{class:"token punctuation"},","),i(" buff"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fclose"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile chiudere il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),uE={__name:"40",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[lE,rE,N(a,pe({},{ranges:[""]}),{default:I(()=>[cE]),_:1},16)]),_:1},16)}}},pE=M(uE,[["__file","/@slidev/slides/40.md"]]),dE=e("h1",null,"I File",-1),fE=e("p",null,"Lettura formattata di un file con fscanf",-1),mE=e("ul",null,[e("li",null,"Eseguiamo il programma leggendo il seguente file di test")],-1),hE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"Linea1"),i(`
`),e("span",{class:"line"},"Linea2"),i(`
`),e("span",{class:"line"},"Linea3")])],-1),_E=e("br",null,null,-1),gE=e("ul",null,[e("li",null,"L’output che otterremo è il seguente")],-1),vE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file            ")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("Linea letta da "),e("span",{class:"token function"},"file")]),i(`
`),e("span",{class:"line"},"Linea1")])],-1),kE=e("ul",null,[e("li",null,"Come ci aspettavamo solo la prima linea è stata letta."),e("li",null,"Vediamo ora come leggere tutte le linee usando feof")],-1),bE={__name:"41",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[dE,fE,mE,N(a,pe({},{ranges:[""]}),{default:I(()=>[hE]),_:1},16),_E,gE,N(a,pe({},{ranges:[""]}),{default:I(()=>[vE]),_:1},16),kE]),_:1},16)}}},yE=M(bE,[["__file","/@slidev/slides/41.md"]]),wE=e("h1",null,"I File",-1),IE=e("p",null,"Verifica fine file con feof",-1),xE=e("p",null,[e("code",null,"int feof(FILE *stream);")],-1),EE=e("ul",null,[e("li",null,[i("Verifica se il file puntato da "),e("em",null,"stream"),i(" ha raggiunto la fine")]),e("li",null,"In altre parole verifica se è ancora possibile leggere fdati dal file oppure no")],-1),$E=e("p",null,"restituisce:",-1),CE=e("ul",null,[e("li",null,[e("strong",null,"0 (false)"),i(": se il puntatore non ha raggounto la fine del file quindi è ancora possibile leggere")]),e("li",null,[e("strong",null,"1 (true)"),i(": se il puntatore ha raggiunto la fine del file quindi non è più possibile leggere")])],-1),zE={__name:"42",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[wE,IE,xE,EE,$E,CE]),_:1},16))}},FE=M(zE,[["__file","/@slidev/slides/42.md"]]),SE=e("h1",null,"I File",-1),OE=e("p",null,"Verifica fine file con feof",-1),LE=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"r"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"EOF?: %d\\n"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token function"},"feof"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fclose"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile chiudere il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},"    "),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"EOF?: %d\\n"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token function"},"feof"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},"    "),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),ME={__name:"43",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[SE,OE,N(a,pe({},{ranges:[""]}),{default:I(()=>[LE]),_:1},16)]),_:1},16)}}},TE=M(ME,[["__file","/@slidev/slides/43.md"]]),AE=e("h1",null,"I File",-1),PE=e("p",null,"Verifica fine file con feof",-1),NE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file            ")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("EOF?: "),e("span",{class:"token number"},"0"),i(" //il "),e("span",{class:"token function"},"file"),i(" non ha raggiunto la fine")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("EOF?: "),e("span",{class:"token number"},"1"),i(" //il "),e("span",{class:"token function"},"file"),i(" ha raggiunto la fine")])])],-1),RE=e("img",{src:tp,width:"650",style:{position:"relative",top:"3rem",left:"7rem"}},null,-1),DE={__name:"44",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[AE,PE,N(a,pe({},{ranges:[""]}),{default:I(()=>[NE]),_:1},16),RE]),_:1},16)}}},UE=M(DE,[["__file","/@slidev/slides/44.md"]]),HE=e("h1",null,"I File",-1),BE=e("p",null,"Lettura formattata di un file con fscanf",-1),KE=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<string.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"define"),i(),e("span",{class:"token macro-name"},"MAX_BUFF"),i(),e("span",{class:"token expression"},[e("span",{class:"token number"},"50")])])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"char"),i(" buff"),e("span",{class:"token punctuation"},"["),i("MAX_BUFF"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},"    "),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token comment"},"//codice di apertura del file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Linee lette da file\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"while"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"!"),e("span",{class:"token function"},"feof"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"bzero"),e("span",{class:"token punctuation"},"("),i("buff"),e("span",{class:"token punctuation"},","),i(" MAX_BUFF"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"fscanf"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"%s"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token operator"},"&"),i("buff"),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"%s\\n"'),e("span",{class:"token punctuation"},","),i(" buff"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fclose"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile chiudere il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),jE={__name:"45",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[HE,BE,N(a,pe({},{ranges:[""]}),{default:I(()=>[KE]),_:1},16)]),_:1},16)}}},WE=M(jE,[["__file","/@slidev/slides/45.md"]]),VE=e("h1",null,"I File",-1),qE=e("p",null,"Lettura formattata di un file con fscanf",-1),QE=e("ul",null,[e("li",null,"Eseguiamo il programma leggendo il seguente file di test")],-1),GE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},"Linea1"),i(`
`),e("span",{class:"line"},"Linea2"),i(`
`),e("span",{class:"line"},"Linea3")])],-1),YE=e("br",null,null,-1),ZE=e("ul",null,[e("li",null,"L’output che otterremo è il seguente")],-1),XE=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file            ")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("Linee lette da "),e("span",{class:"token function"},"file")]),i(`
`),e("span",{class:"line"},"Linea1"),i(`
`),e("span",{class:"line"},"Linea2"),i(`
`),e("span",{class:"line"},"Linea3")])],-1),JE=e("ul",null,[e("li",null,"Quindi in questo caso tutte le linee del file sono state correttamente lette")],-1),e$={__name:"46",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[VE,qE,QE,N(a,pe({},{ranges:[""]}),{default:I(()=>[GE]),_:1},16),YE,ZE,N(a,pe({},{ranges:[""]}),{default:I(()=>[XE]),_:1},16),JE]),_:1},16)}}},n$=M(e$,[["__file","/@slidev/slides/46.md"]]),t$=e("h1",null,"I File",-1),s$=e("p",null,"Esercizio file_04",-1),i$=e("ul",null,[e("li",null,"Scrivere un programma in C, che legga un file con 4 colonne separate da uno spazio")],-1),o$=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[i("Mario Rossi "),e("span",{class:"token number"},"32"),i(),e("span",{class:"token number"},"3786543213")]),i(`
`),e("span",{class:"line"},[i("Giuseppe Verdi "),e("span",{class:"token number"},"45"),i(),e("span",{class:"token number"},"3217864286")]),i(`
`),e("span",{class:"line"},[i("Mirko Bianchi "),e("span",{class:"token number"},"63"),i(),e("span",{class:"token number"},"3984368763")])])],-1),a$={__name:"47",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[t$,s$,i$,N(a,pe({},{ranges:[""]}),{default:I(()=>[o$]),_:1},16)]),_:1},16)}}},l$=M(a$,[["__file","/@slidev/slides/47.md"]]),r$=e("h1",null,"I File",-1),c$=e("p",null,"Esercizio file_04",-1),u$=e("ul",null,[e("li",null,"Il programma deve generare il seguente output:")],-1),p$=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"### Utente 1 ###")]),i(`
`),e("span",{class:"line"},"Nome:     Mario"),i(`
`),e("span",{class:"line"},"Cognome:  Rossi"),i(`
`),e("span",{class:"line"},[i("Età:      "),e("span",{class:"token number"},"32")]),i(`
`),e("span",{class:"line"},[i("Telefono: "),e("span",{class:"token number"},"3786543213")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),i(".")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},".."),i(".")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"### Utente 3 ###")]),i(`
`),e("span",{class:"line"},"Nome:     Mirko"),i(`
`),e("span",{class:"line"},"Cognome:  Bianchi"),i(`
`),e("span",{class:"line"},[i("Età:      "),e("span",{class:"token number"},"63")]),i(`
`),e("span",{class:"line"},[i("Telefono: "),e("span",{class:"token number"},"3984368763")])])],-1),d$=e("ul",null,[e("li",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_04.c")])],-1),f$={__name:"48",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[r$,c$,u$,N(a,pe({},{ranges:[""]}),{default:I(()=>[p$]),_:1},16),d$]),_:1},16)}}},m$=M(f$,[["__file","/@slidev/slides/48.md"]]),h$=e("h1",null,"I File",-1),_$=e("p",null,"Esercizio file_05",-1),g$=e("ul",null,[e("li",null,[e("p",null,"Scrivere un programma in C, che legga un file con lo stesso formato dell’esercizio 04")]),e("li",null,[e("p",null,"Il programma deve memorizzare i dati letti di ogni utente in una struttura (array di strutture)")]),e("li",null,[e("p",null,"Il programma deve poi stampare l’ouput come l’esercizio 04, scandendo l’array di strutture")]),e("li",null,[e("p",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_05.c")])])],-1),v$={__name:"49",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[h$,_$,g$]),_:1},16))}},k$=M(v$,[["__file","/@slidev/slides/49.md"]]),b$=e("h1",null,"I File",-1),y$=e("p",null,"Scrittura di un file binario con fwrite",-1),w$=e("p",null,[e("code",null,"size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);")],-1),I$=e("p",null,[i("fwite scrive "),e("em",null,"nmemb"),i(" record, ciascuno di dimensione "),e("em",null,"size"),i(", sul file puntato da "),e("em",null,"stream")],-1),x$=e("p",null,[i("Il puntatore della posizione all’interno del file viene spostata in avanti di "),e("em",null,"nmemb x size"),i(" byte")],-1),E$=e("p",null,"dove:",-1),$$=e("ul",null,[e("li",null,[e("strong",null,"ptr"),i(": puntatore al buffer di memoria che vogliamo scrivere su file")]),e("li",null,[e("strong",null,"size"),i(": dimensione in byte del singolo record da scrivere")]),e("li",null,[e("strong",null,"nmemb"),i(": numero di record da scrivere sul file")]),e("li",null,[e("strong",null,"stream"),i(": file pointer da utilizzare")])],-1),C$=e("p",null,"restituisce:",-1),z$=e("ul",null,[e("li",null,[e("strong",null,"N"),i(": il numero di record effettivamente scritti su disco")]),e("li",null,[e("strong",null,"0"),i(": in caso di errore o di impossibilità di scrivere i record su file")])],-1),F$={__name:"50",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[b$,y$,w$,I$,x$,E$,$$,C$,z$]),_:1},16))}},S$=M(F$,[["__file","/@slidev/slides/50.md"]]),O$=e("h1",null,"I File",-1),L$=e("p",null,"Scrittura di un file binario con fwrite",-1),M$=e("ul",null,[e("li",null,"E’ importante notare che il buffer utilizzato da fwrite può anche essere un array di caratteri e quindi stringhe"),e("li",null,"Tuttavia fwrite viene prevalentemente utilizzato per scrivere file binari"),e("li",null,"Quindi vediamo un modo per rendere persistenti le strutture dati dei nostri programmi"),e("li",null,"In questo modo ad una successiva esecuzione, il nostro programma potrà leggere i dati da file e processarli"),e("li",null,"La possibilità di scrivere file binari ci permette di realizzare un semplice DB, o meccanismo di persistenza e quindi rendere i nostri programmi più sofisticati e funzionali")],-1),T$={__name:"51",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[O$,L$,M$]),_:1},16))}},A$=M(T$,[["__file","/@slidev/slides/51.md"]]),P$=e("h1",null,"I File",-1),N$=e("p",null,"Scrittura di un file binario con fwrite",-1),R$=e("ul",null,[e("li",null,"Data la seguente struttura vogliamo scrivere un programma che la salvi su disco in formato binario")],-1),D$=e("br",null,null,-1),U$=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[i("struct s_studente "),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    char nome"),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"30"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    char cognome"),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"30"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    int anni"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    float voto"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),H$={__name:"52",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[P$,N$,R$,D$,N(a,pe({},{ranges:[""]}),{default:I(()=>[U$]),_:1},16)]),_:1},16)}}},B$=M(H$,[["__file","/@slidev/slides/52.md"]]),K$=e("h1",null,"I File",-1),j$=e("p",null,"Scrittura di un file binario con fwrite",-1),W$=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<string.h>")])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"typedef"),i(),e("span",{class:"token keyword"},"struct"),i(),e("span",{class:"token class-name"},"s_studente"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"char"),i(" nome"),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"30"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"char"),i(" cognome"),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"30"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"int"),i(" anni"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"float"),i(" voto"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}"),i(" studente"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    studente alunnno "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token string"},'"Mario"'),e("span",{class:"token punctuation"},",")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token string"},'"Rossi"'),e("span",{class:"token punctuation"},",")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token number"},"18"),e("span",{class:"token punctuation"},",")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token number"},"8.5")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")])])],-1),V$={__name:"53",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[K$,j$,N(a,pe({},{ranges:[""]}),{default:I(()=>[W$]),_:1},16)]),_:1},16)}}},q$=M(V$,[["__file","/@slidev/slides/53.md"]]),Q$=e("h1",null,"I File",-1),G$=e("p",null,"Scrittura di un file binario con fwrite",-1),Y$=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"w"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fwrite"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("alunnno"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),i("studente"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"!="),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Errore nella scrittura su file\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"else")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Record salvato correttamente\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fclose"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile chiudere il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),Z$={__name:"54",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[Q$,G$,N(a,pe({},{ranges:[""]}),{default:I(()=>[Y$]),_:1},16)]),_:1},16)}}},X$=M(Z$,[["__file","/@slidev/slides/54.md"]]),J$=e("h1",null,"I File",-1),e3=e("p",null,"Scrittura di un file binario con fwrite",-1),n3=e("ul",null,[e("li",null,"Eseguiamo ora il programma e verifichiamo il file generato")],-1),t3=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file                                      ")]),i(`
`),e("span",{class:"line"},"Record salvato correttamente"),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#more test.txt ")]),i(`
`),e("span",{class:"line"},"MarioRossA")])],-1),s3=e("ul",null,[e("li",null,"Questo output è molto strano ed infatti è la stampa di un file binario e non di un file testuale")],-1),i3=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# hexdump -C test.txt")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("00000000  4d "),e("span",{class:"token number"},"61"),i(),e("span",{class:"token number"},"72"),i(),e("span",{class:"token number"},"69"),i(" 6f 00 00 00  00 00 00 00 00 00 00 00  "),e("span",{class:"token operator"},"|"),i("Mario"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),i("."),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},[i("00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 "),e("span",{class:"token number"},"52"),i(" 6f  "),e("span",{class:"token operator"},"|"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),i("Ro"),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},[i("00000020  "),e("span",{class:"token number"},"73"),i(),e("span",{class:"token number"},"73"),i(),e("span",{class:"token number"},"69"),i(" 00 00 00 00 00  00 00 00 00 00 00 00 00  "),e("span",{class:"token operator"},"|"),i("ssi"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),i("."),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},[i("00000030  00 00 00 00 00 00 00 00  00 00 00 00 "),e("span",{class:"token number"},"12"),i(" 00 00 00  "),e("span",{class:"token operator"},"|"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},[i("00000040  00 00 08 "),e("span",{class:"token number"},"41"),i("                                       "),e("span",{class:"token operator"},"|"),e("span",{class:"token punctuation"},".."),i(".A"),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},"00000044")])],-1),o3={__name:"55",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[J$,e3,n3,N(a,pe({},{ranges:[""]}),{default:I(()=>[t3]),_:1},16),s3,N(a,pe({},{ranges:[""]}),{default:I(()=>[i3]),_:1},16)]),_:1},16)}}},a3=M(o3,[["__file","/@slidev/slides/55.md"]]),l3=e("h1",null,"I File",-1),r3=e("p",null,"Esercizio file_06",-1),c3=e("ul",null,[e("li",null,"Scrivere un programma in C, che letto da linea di comando il nome di città, la temperatura minima e massima, stampi a video i dati inseriti e li salvi su file binario in coda ai dati gia eventualmente presenti"),e("li",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_06.c")])],-1),u3={__name:"56",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[l3,r3,c3]),_:1},16))}},p3=M(u3,[["__file","/@slidev/slides/56.md"]]),d3=e("h1",null,"I File",-1),f3=e("p",null,"Lettura di un file binario con fread",-1),m3=e("p",null,[e("code",null," size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);")],-1),h3=e("p",null,"dove:",-1),_3=e("ul",null,[e("li",null,[e("strong",null,"ptr"),i(": puntatore al buffer di memoria che vogliamo scrivere su file")]),e("li",null,[e("strong",null,"size"),i(": dimensione in byte del singolo record da leggere")]),e("li",null,[e("strong",null,"nmemb"),i(": numero di record da leggere da file")]),e("li",null,[e("strong",null,"stream"),i(": file pointer da utilizzare")])],-1),g3=e("p",null,"restituisce:",-1),v3=e("ul",null,[e("li",null,[e("strong",null,"N"),i(": il numero di record effettivamente letti dal disco")]),e("li",null,[e("strong",null,"0"),i(": in caso di errore o di impossibilità nel legegre i record dal file")])],-1),k3={__name:"57",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[d3,f3,m3,h3,_3,g3,v3]),_:1},16))}},b3=M(k3,[["__file","/@slidev/slides/57.md"]]),y3=e("h1",null,"I File",-1),w3=e("p",null,"Lettura di un file binario con fread",-1),I3=e("ul",null,[e("li",null,"Vediamo ora come leggere il file generato precedentemente con fwrite")],-1),x3=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<string.h>")])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"typedef"),i(),e("span",{class:"token keyword"},"struct"),i(),e("span",{class:"token class-name"},"s_studente"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"char"),i(" nome"),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"30"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"char"),i(" cognome"),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"30"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"int"),i(" anni"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"float"),i(" voto"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}"),i(" studente"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    studente alunno"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},"    "),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"r"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")])])],-1),E3={__name:"58",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[y3,w3,I3,N(a,pe({},{ranges:[""]}),{default:I(()=>[x3]),_:1},16)]),_:1},16)}}},$3=M(E3,[["__file","/@slidev/slides/58.md"]]),C3=e("h1",null,"I File",-1),z3=e("p",null,"Lettura di un file binario con fread",-1),F3=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("alunno"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),i("studente"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"!="),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Errore nella lettura da file\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"else"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Record letto correttamente\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Nome: %s\\n"'),e("span",{class:"token punctuation"},","),i(" alunno"),e("span",{class:"token punctuation"},"."),i("nome"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Cognome: %s\\n"'),e("span",{class:"token punctuation"},","),i(" alunno"),e("span",{class:"token punctuation"},"."),i("cognome"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Anni: %d\\n"'),e("span",{class:"token punctuation"},","),i(" alunno"),e("span",{class:"token punctuation"},"."),i("anni"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Voto: %.2f\\n"'),e("span",{class:"token punctuation"},","),i(" alunno"),e("span",{class:"token punctuation"},"."),i("voto"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fclose"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile chiudere il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),S3={__name:"59",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[C3,z3,N(a,pe({},{ranges:[""]}),{default:I(()=>[F3]),_:1},16)]),_:1},16)}}},O3=M(S3,[["__file","/@slidev/slides/59.md"]]),L3=e("h1",null,"I File",-1),M3=e("p",null,"Lettura di un file binario con fread",-1),T3=e("ul",null,[e("li",null,"Eseguiamo ora il programmma e vediamo l’output generato")],-1),A3=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# hexdump -C test.txt")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("00000000  4d "),e("span",{class:"token number"},"61"),i(),e("span",{class:"token number"},"72"),i(),e("span",{class:"token number"},"69"),i(" 6f 00 00 00  00 00 00 00 00 00 00 00  "),e("span",{class:"token operator"},"|"),i("Mario"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),i("."),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},[i("00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 "),e("span",{class:"token number"},"52"),i(" 6f  "),e("span",{class:"token operator"},"|"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),i("Ro"),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},[i("00000020  "),e("span",{class:"token number"},"73"),i(),e("span",{class:"token number"},"73"),i(),e("span",{class:"token number"},"69"),i(" 00 00 00 00 00  00 00 00 00 00 00 00 00  "),e("span",{class:"token operator"},"|"),i("ssi"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),i("."),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},[i("00000030  00 00 00 00 00 00 00 00  00 00 00 00 "),e("span",{class:"token number"},"12"),i(" 00 00 00  "),e("span",{class:"token operator"},"|"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},[i("00000040  00 00 08 "),e("span",{class:"token number"},"41"),i("                                       "),e("span",{class:"token operator"},"|"),e("span",{class:"token punctuation"},".."),i(".A"),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},"00000044"),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},"Record letto correttamente"),i(`
`),e("span",{class:"line"},"Nome: Mario"),i(`
`),e("span",{class:"line"},"Cognome: Rossi"),i(`
`),e("span",{class:"line"},[i("Anni: "),e("span",{class:"token number"},"18")]),i(`
`),e("span",{class:"line"},[i("Voto: "),e("span",{class:"token number"},"8.50")])])],-1),P3={__name:"60",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[L3,M3,T3,N(a,pe({},{ranges:[""]}),{default:I(()=>[A3]),_:1},16)]),_:1},16)}}},N3=M(P3,[["__file","/@slidev/slides/60.md"]]),R3=e("h1",null,"I File",-1),D3=e("p",null,"Esercizio file_07",-1),U3=e("ul",null,[e("li",null,"Scrivere un programma in C, che legga il file generato come output del programma 06, e stampi a video il record letto"),e("li",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_07.c")])],-1),H3={__name:"61",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[R3,D3,U3]),_:1},16))}},B3=M(H3,[["__file","/@slidev/slides/61.md"]]),K3=e("h1",null,"I File",-1),j3=e("p",null,"Persistenza di un array",-1),W3=e("ul",null,[e("li",null,"Vediamo ora come è possibile scrivere e leggere un array su un file"),e("li",null,"In generale è possibile persistere qualsiasi struttura dati (negli esempi precdenti abbiamo visto come salvare e leggere una struct)")],-1),V3=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<string.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"define"),i(),e("span",{class:"token macro-name"},"NUM"),i(),e("span",{class:"token expression"},[e("span",{class:"token number"},"10")])])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"int"),i(" numeri"),e("span",{class:"token punctuation"},"["),i("NUM"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"for"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),i(" i "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),i(" i "),e("span",{class:"token operator"},"<"),i(" NUM"),e("span",{class:"token punctuation"},";"),i(" i"),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        numeri"),e("span",{class:"token punctuation"},"["),i("i"),e("span",{class:"token punctuation"},"]"),i(),e("span",{class:"token operator"},"="),i(" i "),e("span",{class:"token operator"},"+"),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"w"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")])])],-1),q3={__name:"62",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[K3,j3,W3,N(a,pe({},{ranges:[""]}),{default:I(()=>[V3]),_:1},16)]),_:1},16)}}},Q3=M(q3,[["__file","/@slidev/slides/62.md"]]),G3=e("h1",null,"I File",-1),Y3=e("p",null,"Persistenza di un array",-1),Z3=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"for"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),i(" i "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),i(" i "),e("span",{class:"token operator"},"<"),i(" NUM"),e("span",{class:"token punctuation"},";"),i(" i"),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fwrite"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("numeri"),e("span",{class:"token punctuation"},"["),i("i"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"!="),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("            "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Errore nella scrittura del record!\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token keyword"},"else"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("            "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"numeri[%d] scritto du file\\n"'),e("span",{class:"token punctuation"},","),i(" i"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fclose"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile chiudere il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),X3=e("ul",null,[e("li",null,"Quindi abbiamo scritto 10 record (NUM elementi dell’array)")],-1),J3={__name:"63",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[G3,Y3,N(a,pe({},{ranges:[""]}),{default:I(()=>[Z3]),_:1},16),X3]),_:1},16)}}},e6=M(J3,[["__file","/@slidev/slides/63.md"]]),n6=e("h1",null,"I File",-1),t6=e("p",null,"Persistenza di un array",-1),s6=e("ul",null,[e("li",null,"Il file generato è il seguente")],-1),i6=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# hexdump -C test.txt")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("00000000  01 00 00 00 02 00 00 00  03 00 00 00 04 00 00 00  "),e("span",{class:"token operator"},"|"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},[i("00000010  05 00 00 00 06 00 00 00  07 00 00 00 08 00 00 00  "),e("span",{class:"token operator"},"|"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},[i("00000020  09 00 00 00 0a 00 00 00                           "),e("span",{class:"token operator"},"|"),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token punctuation"},".."),e("span",{class:"token operator"},"|")]),i(`
`),e("span",{class:"line"},"00000028")])],-1),o6=e("br",null,null,-1),a6=e("ul",null,[e("li",null,"Come mai quest’ordine nel salvare gli elementi dell’array su file? E’ giusto?")],-1),l6={__name:"64",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[n6,t6,s6,N(a,pe({},{ranges:[""]}),{default:I(()=>[i6]),_:1},16),o6,a6]),_:1},16)}}},r6=M(l6,[["__file","/@slidev/slides/64.md"]]),c6=e("h1",null,"I File",-1),u6=e("p",null,"Persistenza di un array",-1),p6=e("ul",null,[e("li",null,"Vediamo come modificare il programma per scrivere tutto l’array in una sola operazione")],-1),d6=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<string.h>")])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"define"),i(),e("span",{class:"token macro-name"},"NUM"),i(),e("span",{class:"token expression"},[e("span",{class:"token number"},"10")])])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},"    "),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"int"),i(" numeri"),e("span",{class:"token punctuation"},"["),i("NUM"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"for"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),i(" i "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),i(" i "),e("span",{class:"token operator"},"<"),i(" NUM"),e("span",{class:"token punctuation"},";"),i(" i"),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        numeri"),e("span",{class:"token punctuation"},"["),i("i"),e("span",{class:"token punctuation"},"]"),i(),e("span",{class:"token operator"},"="),i(" i "),e("span",{class:"token operator"},"+"),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),i(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),i("fp "),e("span",{class:"token operator"},"="),i(),e("span",{class:"token function"},"fopen"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"./test.txt"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token string"},'"w"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token constant"},"NULL"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile aprire il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"exit"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")])])],-1),f6={__name:"65",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[c6,u6,p6,N(a,pe({},{ranges:[""]}),{default:I(()=>[d6]),_:1},16)]),_:1},16)}}},m6=M(f6,[["__file","/@slidev/slides/65.md"]]),h6=e("h1",null,"I File",-1),_6=e("p",null,"Persistenza di un array",-1),g6=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fwrite"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("numeri"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"*"),i(" NUM"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"!="),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Errore nella scrittura del record!\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"else"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Array scritto su file\\n"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},"    "),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fclose"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"perror"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Impossibile chiudere il file"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),v6={__name:"66",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[h6,_6,N(a,pe({},{ranges:[""]}),{default:I(()=>[g6]),_:1},16)]),_:1},16)}}},k6=M(v6,[["__file","/@slidev/slides/66.md"]]),b6=e("h1",null,"I File",-1),y6=e("p",null,"Persistenza di un array",-1),w6=e("ul",null,[e("li",null,"Ma quindi che differenza c’è tra le due verisoni del programma?"),e("li",null,"Proviamo ad analizzare i tempi di esecuzione con NUM = 1.000.000")],-1),I6=e("p",null,"100 x 1.000.000 di record da 4 byte (int)",-1),x6=e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/a4767b804a1b266142b1acfcfcde7037",target:"_blank",rel:"noopener"},"src code")],-1),E6=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"#  time ./file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("Array scritto "),e("span",{class:"token function"},"su"),i(),e("span",{class:"token function"},"file")]),i(`
`),e("span",{class:"line"},[i("./file  "),e("span",{class:"token number"},"5"),i(",50s user "),e("span",{class:"token number"},"1"),i(",08s system "),e("span",{class:"token number"},"99"),i("% cpu "),e("span",{class:"token number"},"6,627"),i(" total")])])],-1),$6={__name:"67",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[b6,y6,w6,I6,x6,N(a,pe({},{ranges:[""]}),{default:I(()=>[E6]),_:1},16)]),_:1},16)}}},C6=M($6,[["__file","/@slidev/slides/67.md"]]),z6=e("h1",null,"I File",-1),F6=e("p",null,"Persistenza di un array",-1),S6=e("p",null,"100 x 1 record da 4 * 1.000.000 byte (int)",-1),O6=e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/e8b0e65523b3489d7efa9dea4108f9ea",target:"_blank",rel:"noopener"},"src code")],-1),L6=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# time ./file       ")]),i(`
`),e("span",{class:"line"},[i("Array scritto "),e("span",{class:"token function"},"su"),i(),e("span",{class:"token function"},"file")]),i(`
`),e("span",{class:"line"},[i("./file  "),e("span",{class:"token number"},"0"),i(",01s user "),e("span",{class:"token number"},"0"),i(",63s system "),e("span",{class:"token number"},"94"),i("% cpu "),e("span",{class:"token number"},"0,672"),i(" total")])])],-1),M6=e("ul",null,[e("li",null,"Quindi scrivere 100 record da 4MByte ciascuno è circa 10 volte più veloce che scrivere 100M di record da 4 byte ciascuno")],-1),T6={__name:"68",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[z6,F6,S6,O6,N(a,pe({},{ranges:[""]}),{default:I(()=>[L6]),_:1},16),M6]),_:1},16)}}},A6=M(T6,[["__file","/@slidev/slides/68.md"]]),P6=e("h1",null,"I File",-1),N6=e("p",null,"Muoversi all’interno di un file",-1),R6=e("p",null,[e("code",null,"int fseek(FILE *stream, long offset, int whence);")],-1),D6=e("p",null,[i("fseek imposta la posizione del fiel pointer per il file puntato da "),e("em",null,"stream")],-1),U6=e("ul",null,[e("li",null,[e("strong",null,"stream"),i(": file pointer da utilizzare")]),e("li",null,[e("strong",null,"offset"),i(": sposta il puntatore al file del numero specificato di byte")]),e("li",null,[e("strong",null,"whence"),i(": indica la posizione da cui partire nell’operazione di seek")])],-1),H6=e("p",null,[i("Nello specifico "),e("strong",null,"whence"),i(" può assumere i seguenti valori:")],-1),B6=e("ul",null,[e("li",null,[e("strong",null,"SEEK_SET"),i(": indica l’inizio del file")]),e("li",null,[e("strong",null,"SEEK_CUR"),i(": indica la posizione corrente")]),e("li",null,[e("strong",null,"SEEK_END"),i(": indica la fine del file")])],-1),K6=e("p",null,"restituisce:",-1),j6=e("ul",null,[e("li",null,[e("strong",null,"0"),i(": in caso di successo")]),e("li",null,[e("strong",null,"-1"),i(": in caso di errore")])],-1),W6={__name:"69",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[P6,N6,R6,D6,U6,H6,B6,K6,j6]),_:1},16))}},V6=M(W6,[["__file","/@slidev/slides/69.md"]]),q6=e("h1",null,"I File",-1),Q6=e("p",null,"Muoversi all’interno di un file",-1),G6=e("ul",null,[e("li",null,"Dato un file binario contenente un array con i numeri da 1 a 100"),e("li",null,"Vediamo come legegre uno specifico numero partendo dall’inizio del file")],-1),Y6=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<string.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"define"),i(),e("span",{class:"token macro-name"},"NUM"),i(),e("span",{class:"token expression"},[e("span",{class:"token number"},"100")])])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token keyword"},"int"),i(" num"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token comment"},"//apertura di un file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fseek"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"40"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token constant"},"SEEK_SET"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("num"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Il numero letto è: %d\\n"'),e("span",{class:"token punctuation"},","),i(" num"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token comment"},"//chiusura di un file")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),Z6={__name:"70",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[q6,Q6,G6,N(a,pe({},{ranges:[""]}),{default:I(()=>[Y6]),_:1},16)]),_:1},16)}}},X6=M(Z6,[["__file","/@slidev/slides/70.md"]]),J6=e("h1",null,"I File",-1),e4=e("p",null,"Muoversi all’interno di un file",-1),n4=e("ul",null,[e("li",null,"Eseguiamo e verifichiamo che il risultato sia quello atteso")],-1),t4=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("Il numero letto è: "),e("span",{class:"token number"},"11")])])],-1),s4=e("br",null,null,-1),i4=e("ul",null,[e("li",null,"Questo è corretto in quanto inizalmente abbiamo spostato (fseek) di 40 byte dall’inizio del file (SEEK_SET)"),e("li",null,"Pertanto abbiamo saltato i primo 10 numeri (un int è 4 byte)"),e("li",null,"Quindi ci siamo posizionati all’inizio dell’11mo numero che viene letto da fread")],-1),o4={__name:"71",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[J6,e4,n4,N(a,pe({},{ranges:[""]}),{default:I(()=>[t4]),_:1},16),s4,i4]),_:1},16)}}},a4=M(o4,[["__file","/@slidev/slides/71.md"]]),l4=e("h1",null,"I File",-1),r4=e("p",null,"Muoversi all’interno di un file",-1),c4=e("ul",null,[e("li",null,"In modo analogo vediamo come posizionarsi a partire dalla fine del file")],-1),u4=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<string.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"define"),i(),e("span",{class:"token macro-name"},"NUM"),i(),e("span",{class:"token expression"},[e("span",{class:"token number"},"100")])])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token keyword"},"int"),i(" num"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token comment"},"//apertura di un file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fseek"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token operator"},"-"),e("span",{class:"token number"},"40"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token constant"},"SEEK_END"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("num"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Il numero letto è: %d\\n"'),e("span",{class:"token punctuation"},","),i(" num"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token comment"},"//chiusura di un file")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"return"),i(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),p4={__name:"72",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[l4,r4,c4,N(a,pe({},{ranges:[""]}),{default:I(()=>[u4]),_:1},16)]),_:1},16)}}},d4=M(p4,[["__file","/@slidev/slides/72.md"]]),f4=e("h1",null,"I File",-1),m4=e("p",null,"Muoversi all’interno di un file",-1),h4=e("ul",null,[e("li",null,"Eseguiamo e verifichiamo che il risultato sia quello atteso")],-1),_4=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("Il numero letto è: "),e("span",{class:"token number"},"91")])])],-1),g4=e("br",null,null,-1),v4=e("ul",null,[e("li",null,"Questo è corretto in quanto inizalmente abbiamo spostato (fseek) di -40 byte dalla fine del file (SEEK_END)"),e("li",null,"Pertanto abbiamo posizionato il puntatore a partire dal 10mo numero prima della file")],-1),k4={__name:"73",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[f4,m4,h4,N(a,pe({},{ranges:[""]}),{default:I(()=>[_4]),_:1},16),g4,v4]),_:1},16)}}},b4=M(k4,[["__file","/@slidev/slides/73.md"]]),y4=e("h1",null,"I File",-1),w4=e("p",null,"Muoversi all’interno di un file",-1),I4=e("ul",null,[e("li",null,"Vediamo ancora come posizionarsi a partire dalla posizione corrente")],-1),x4=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdio.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<stdlib.h>")])]),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"include"),i(),e("span",{class:"token string"},"<string.h>")])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token macro property"},[e("span",{class:"token directive-hash"},"#"),e("span",{class:"token directive keyword"},"define"),i(),e("span",{class:"token macro-name"},"NUM"),i(),e("span",{class:"token expression"},[e("span",{class:"token number"},"100")])])]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{class:"token keyword"},"int"),i(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("    FILE "),e("span",{class:"token operator"},"*"),i("fp"),e("span",{class:"token punctuation"},";"),i(),e("span",{class:"token keyword"},"int"),i(" num"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token comment"},"//apertura file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("num"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("num"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("num"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fseek"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"8"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token constant"},"SEEK_CUR"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("num"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Il numero letto è: %d\\n"'),e("span",{class:"token punctuation"},","),i(" num"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")])])],-1),E4={__name:"74",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[y4,w4,I4,N(a,pe({},{ranges:[""]}),{default:I(()=>[x4]),_:1},16)]),_:1},16)}}},$4=M(E4,[["__file","/@slidev/slides/74.md"]]),C4=e("h1",null,"I File",-1),z4=e("p",null,"Muoversi all’interno di un file",-1),F4=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")]),i(`
`),e("span",{class:"line"},"    "),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fseek"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token operator"},"-"),e("span",{class:"token number"},"24"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token constant"},"SEEK_CUR"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token keyword"},"if"),e("span",{class:"token punctuation"},"("),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("num"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token operator"},"=="),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),i(),e("span",{class:"token punctuation"},"{")]),i(`
`),e("span",{class:"line"},[i("        "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Il numero letto è: %d\\n"'),e("span",{class:"token punctuation"},","),i(" num"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token punctuation"},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token comment"},"//chiusura file")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"}")])])],-1),S4={__name:"75",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[C4,z4,N(a,pe({},{ranges:[""]}),{default:I(()=>[F4]),_:1},16)]),_:1},16)}}},O4=M(S4,[["__file","/@slidev/slides/75.md"]]),L4=e("h1",null,"I File",-1),M4=e("p",null,"Muoversi all’interno di un file",-1),T4=e("ul",null,[e("li",null,"Eseguiamo e verifichiamo che il risultato sia quello atteso")],-1),A4=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"#/file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("Il numero letto è: "),e("span",{class:"token number"},"6")]),i(`
`),e("span",{class:"line"},[i("Il numero letto è: "),e("span",{class:"token number"},"1")])])],-1),P4=e("br",null,null,-1),N4=e("ul",null,[e("li",null,"Questo è corretto in quanto inizalmente con le 3 fread abbiamo spostato il puntatore di 12 dall’inizio del file"),e("li",null,"Poi con fseek ci spostiamo di 8 byte dalla posizione corrente (SEEK_CUR), di fatto posizionandoci all’inizio del numero 6"),e("li",null,"Dopo aver letto il numero 6, il puntatore ora è stato spostato al 24mo byte"),e("li",null,"Ora facendo un fseek di -24 byte dalla posizione corrente (SEEK_CUR) torniamo all’inizio del file"),e("li",null,"Pertanto la successiva lettura, legge il numero 1")],-1),R4={__name:"76",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[L4,M4,T4,N(a,pe({},{ranges:[""]}),{default:I(()=>[A4]),_:1},16),P4,N4]),_:1},16)}}},D4=M(R4,[["__file","/@slidev/slides/76.md"]]),U4=e("h1",null,"I File",-1),H4=e("p",null,"Esercizio file_08",-1),B4=e("ul",null,[e("li",null,"Scrivere un programma in C, che legga il file generato come output del programma 06"),e("li",null,"Il programma legge un parametro numerico da linea di comando (N)"),e("li",null,"Il programma stampa l’N record presente nel file (assumere che N sia <= al numero di città presenti nel file)"),e("li",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_08.c")])],-1),K4={__name:"77",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[U4,H4,B4]),_:1},16))}},j4=M(K4,[["__file","/@slidev/slides/77.md"]]),W4=e("h1",null,"I File",-1),V4=e("p",null,"Muoversi all’interno di un file",-1),q4=e("p",null,[e("code",null,"long ftell(FILE *stream);")],-1),Q4=e("p",null,[i("ftell restituisce la posizione corrente all’interno del file puntato da "),e("em",null,"stream")],-1),G4=e("pre",{class:"slidev-code language-c"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("num"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("num"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"fread"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"&"),i("num"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token keyword"},"sizeof"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"int"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),i(" fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("    "),e("span",{class:"token function"},"printf"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"Il file è in posizione: %ld\\n"'),e("span",{class:"token punctuation"},","),i(),e("span",{class:"token function"},"ftell"),e("span",{class:"token punctuation"},"("),i("fp"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")]),i(`
`),e("span",{class:"line"},[e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},"."),e("span",{class:"token punctuation"},".")])])],-1),Y4=e("br",null,null,-1),Z4=e("pre",{class:"slidev-code language-bash"},[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# ./file")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[i("Il "),e("span",{class:"token function"},"file"),i(" è "),e("span",{class:"token keyword"},"in"),i(" posizione: "),e("span",{class:"token number"},"12")])])],-1),X4={__name:"78",setup(n){const t={};return C(L),(s,o)=>{const a=_e;return b(),S(Q,W(K(t)),{default:I(()=>[W4,V4,q4,Q4,N(a,pe({},{ranges:[""]}),{default:I(()=>[G4]),_:1},16),Y4,N(a,pe({},{ranges:[""]}),{default:I(()=>[Z4]),_:1},16)]),_:1},16)}}},J4=M(X4,[["__file","/@slidev/slides/78.md"]]),eC=e("h1",null,"I File",-1),nC=e("p",null,"Esercizio file_09",-1),tC=e("ul",null,[e("li",null,"Scrivere un programma in C, che legga da linea di comando il nome comopleto (percorso e nome) di un file"),e("li",null,"Il programma stampa a video la lunghezza del file"),e("li",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_09.c")])],-1),sC={__name:"79",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[eC,nC,tC]),_:1},16))}},iC=M(sC,[["__file","/@slidev/slides/79.md"]]),oC=e("h1",null,"I File",-1),aC=e("p",null,"Esercizio file_10",-1),lC=e("ul",null,[e("li",null,"Scrivere un programma in C, che legga da linea di comando il nome comopleto (percorso e nome) di un file"),e("li",null,"Il programma stampa a video la lunghezza del file"),e("li",null,"Il programma non può leggere il file di cui si vuole calcolare la lunghezza"),e("li",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_10.c")])],-1),rC={__name:"80",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[oC,aC,lC]),_:1},16))}},cC=M(rC,[["__file","/@slidev/slides/80.md"]]),uC=e("h1",null,"I File",-1),pC=e("p",null,"Esercizio file_11",-1),dC=e("ul",null,[e("li",null,"Scrivere un programma in linguaggio C che, permetta la gestione di un magazzino ricambi."),e("li",null,[i("Il programma, tramite un’interfaccia utente testuale (TUI – Text User Interface), deve visualizzare un menu di scelta che permetta all’utente di: "),e("ol",null,[e("li",null,"inserire e memorizzare un ricambio con la relativa quantità"),e("li",null,"visualizzare la lista di tutti i ricambi come inserita dall’utente, visualizzando il nome del ricambio e la quantità disponibile a magazzino"),e("li",null,"visualizzare solo il ricambio N"),e("li",null,"modificare il ricambio numero N"),e("li",null,"uscire dal programma")])])],-1),fC={__name:"81",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[uC,pC,dC]),_:1},16))}},mC=M(fC,[["__file","/@slidev/slides/81.md"]]),hC=e("h1",null,"I File",-1),_C=e("p",null,"Esercizio file_11",-1),gC=e("ul",null,[e("li",null,"Date le dimensioni, il programma non può leggere TUTTO il magazzino da file in memoria"),e("li",null,"Il programma deve operare solo su file ed ovviamente avere un ricambio in memoria per le necessarie manipolazioni"),e("li",null,"Il programma terminata un’operazione, rimane in attesa della pressione di un tasto e successivamente ripropone il menu di scelta. Il programma termina solo su esplicita scelta dell’utente."),e("li",null,[i("Consegnare il file con nome: "),e("em",null,"|cognome|_file_11.c")])],-1),vC={__name:"82",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[hC,_C,gC]),_:1},16))}},kC=M(vC,[["__file","/@slidev/slides/82.md"]]),bC=e("h1",null,"I File",-1),yC=e("ul",null,[e("li",null,[e("p",null,"Qui i link ai gist contenente tutto il codice sorgente usato in queste slide")]),e("li",null,[e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/b925aa12bd9baaabe4f8eb5161cb73f2",target:"_blank",rel:"noopener"},"fopen:")])]),e("li",null,[e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/c75eff492742b57461ec796f9c29dc66",target:"_blank",rel:"noopener"},"fclose:")])]),e("li",null,[e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/0cf0c214ded614e4f39ec827457e074e",target:"_blank",rel:"noopener"},"fprintf:")])]),e("li",null,[e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/2d708a308d7e6ab8fd3273f63a8e60a1",target:"_blank",rel:"noopener"},"fscanf:")])]),e("li",null,[e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/06cb6ac48e97e11bb08773df6a4bcf5a",target:"_blank",rel:"noopener"},"fwrite:")])]),e("li",null,[e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/7179a3d913de2303b14b076f6eb87b6d",target:"_blank",rel:"noopener"},"fread:")])]),e("li",null,[e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/1efa0c3cde1e38fd8b0a9bfe05b4c669",target:"_blank",rel:"noopener"},"persist array:")])]),e("li",null,[e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/39f5fc4a9845a5762db38fb34b564787",target:"_blank",rel:"noopener"},"persist array2:")])]),e("li",null,[e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/eb0afc3c6cea43811477a52611ad060a",target:"_blank",rel:"noopener"},"fseek 01:")])]),e("li",null,[e("p",null,[e("a",{href:"https://gist.github.com/profmancusoa/fd1b256d6e82cdcbdb2c02e432c84fdb",target:"_blank",rel:"noopener"},"fseek 02:"),i(" e "),e("a",{href:"https://gist.github.com/profmancusoa/60a045625dd9249538b18c57980ac761",target:"_blank",rel:"noopener"},"fseek 03:")])])],-1),wC={__name:"83",setup(n){const t={};return C(L),(s,o)=>(b(),S(Q,W(K(t)),{default:I(()=>[bC,yC]),_:1},16))}},IC=M(wC,[["__file","/@slidev/slides/83.md"]]),xC=[{path:"1",name:"page-1",component:sy,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"INFORMATICA",as:"2022/2023",version:"1.1.0",title:"I File",slide:{raw:`---
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
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"INFORMATICA",as:"2022/2023",version:"1.1.0",title:"I File"},index:0,start:0,end:37,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:uy,meta:{slide:{raw:`
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
- Anche in caso in cui manchi l'alimentazione al computer tutti i dati del programma in esecuzione vengono irremediabilmente persi`,frontmatter:{},index:1,start:38,end:51,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:gy,meta:{slide:{raw:`
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

<img src="/media/files_01.png" width="550" style="position:relative;top: -8rem; left:15rem;"/>`,frontmatter:{},index:2,start:52,end:67,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Ey,meta:{slide:{raw:`
# I File

Introduzione


<img src="/media/files_02.png" width="300" style="position:relative;top: 3rem; left:35rem;"/>
<img src="/media/files_03.png" width="500" style="position:relative;top: -12rem; left:0rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione


<img src="/media/files_02.png" width="300" style="position:relative;top: 3rem; left:35rem;"/>
<img src="/media/files_03.png" width="500" style="position:relative;top: -12rem; left:0rem;"/>`,frontmatter:{},index:3,start:68,end:78,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Ly,meta:{slide:{raw:`
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

<img src="/media/files_04.png" width="350" style="position:relative;top: -15rem; left:33rem;"/>`,frontmatter:{},index:4,start:79,end:95,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Hy,meta:{slide:{raw:`
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
<img src="/media/files_06.png" width="500" style="position:relative;top: -12rem; left:25rem;"/>`,frontmatter:{},index:5,start:96,end:110,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Qy,meta:{slide:{raw:`
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


<img src="/media/files_07.png" width="650" style="position:relative;top: 2rem; left:7rem;"/>`,frontmatter:{},index:6,start:111,end:123,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:nw,meta:{slide:{raw:`
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
  
<img src="/media/files_08.png" width="600" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:7,start:124,end:136,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:rw,meta:{slide:{raw:`
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

<img src="/media/files_10.png" width="550" style="position:relative;top: 3rem; left:10rem;"/>`,frontmatter:{},index:8,start:137,end:148,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:hw,meta:{slide:{raw:`
# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Sequenziale**: si accede ai record del file partendo dal primo e scandendo in modo ordinato ogni record. In altre parole per accedere al record N, è ncessario aver prima letto tutti gli N-1 record precedenti

<img src="/media/files_09.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Sequenziale**: si accede ai record del file partendo dal primo e scandendo in modo ordinato ogni record. In altre parole per accedere al record N, è ncessario aver prima letto tutti gli N-1 record precedenti

<img src="/media/files_09.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>`,frontmatter:{},index:9,start:149,end:160,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:ww,meta:{slide:{raw:`
# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Casuale o Diretto**: nel caso di record aventi tutti la stessa lunghezza, è possibile leggere un record alla posizione N indipendentemente dal record letto precedentemente. In altre parole per accedere al record N **NON** è necessario dover leggere tutti quelli precedenti

<img src="/media/files_09a.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>

`,title:"I File",level:1,content:`# I File

Introduzione

- Genralmente è possibile accedere ad un file in due modi diversi:
    - **Accesso Casuale o Diretto**: nel caso di record aventi tutti la stessa lunghezza, è possibile leggere un record alla posizione N indipendentemente dal record letto precedentemente. In altre parole per accedere al record N **NON** è necessario dover leggere tutti quelli precedenti

<img src="/media/files_09a.png" width="650" style="position:relative;top: 1rem; left:7rem;"/>`,frontmatter:{},index:10,start:161,end:172,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Cw,meta:{slide:{raw:`
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
- Ciò è possibile poichè il sistema di I/O del C è caratterizzato da un’interfaccia indipendente dal dispositivo effettivo che si interpone tra il programmatore e il dispositivo stesso`,frontmatter:{},index:11,start:173,end:185,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Lw,meta:{slide:{raw:`
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
  - **Posizionamento in un file**: permette di accedere in modo diretto ai record di un file`,frontmatter:{},index:12,start:186,end:198,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Yw,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:13,start:199,end:225,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:oI,meta:{slide:{raw:`
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
- Ciò è necessario per rilasciare, in modo corretto, le risorse allocate (memoria, ...) durante l'apertura del file`,frontmatter:{},index:14,start:226,end:253,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:dI,meta:{slide:{raw:`
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
`,title:"I File",level:1,content:"# I File\n\nI file in C\n\nLe principali funzioni per gestire i file in C sono:\n\n| **Funzione** | **Descrizione**                                                                                                                         |\n| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |\n| `fopen`      | apre un file dato il suo nome e restituisce un puntatore ad esso                                                                        |\n| `flcose`     | chiude un file, scrivendo su disco eventuali dati in cache e restituisce le risorse allocate                                            |\n| `fprintf`    | scrive un output su un file. Dal nome è chiaro che si comporta esattamente come printf, ma anzichè scrivere su terminale scrive su file |\n| `fscanf`     | esattamente come scanf, permette di leggere un input formattato da file                                                                 |\n| `fread`      | legge uno o più record da un file                                                                                                       |\n| `fwrite`     | scrive uno o più record su file                                                                                                         |\n| `fseek`      | cambia la posizione attuale all'interno del file permettendo l'accesso casuale al file stesso                                           |\n\n- Il manuale di ogni funzione è disponibile digitando `man <nome funzione>`",frontmatter:{},index:15,start:254,end:273,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:wI,meta:{slide:{raw:`
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
  - **FILE \\***: puntatore al file appena aperto`,frontmatter:{},index:16,start:274,end:292,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:CI,meta:{slide:{raw:`
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

`,title:"I File",level:1,content:"# I File\n\nApertura di un file con fopen\n\n\n| **mode** | **Descrizione**                                                            | **Note**                                       |\n| -------- | -------------------------------------------------------------------------- | ---------------------------------------------- |\n| `r`      | apre il file in sola lettura                                               | Il puntatore è posizionato all'inizio del file |\n| `r+`     | apre il file in lettura e scrittura                                        | Il puntatore è posizionato all'inizio del file |\n| `w`      | crea o sovrascrive un file in scrittura                                    | Il puntatore è posizionato all'inizio del file |\n| `w+`     | crea o sovrascrive un file in scrittura e lettura                          | Il puntatore è posizionato all'inizio del file |\n| `a`      | apre il file in scrittura se esiste o lo crera in caso contrario           | Il puntatore è posizionato alla file del file  |\n| `a+`     | apre il file in scrittura e lettura se esiste o lo crera in caso contrario | Il puntatore è posizionato alla file del file  |",frontmatter:{},index:17,start:293,end:309,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:TI,meta:{slide:{raw:`
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

<img src="/media/files_11.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:18,start:310,end:323,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:BI,meta:{slide:{raw:`
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
  
<img src="/media/files_12.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:19,start:324,end:338,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:YI,meta:{slide:{raw:`
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
  
<img src="/media/files_13.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:20,start:339,end:352,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:s2,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:21,start:353,end:382,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:p2,meta:{slide:{raw:`
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
- La libreria C mette a disposizione un metodo molto facile per conoscere la motivazione del falliemento`,frontmatter:{},index:22,start:383,end:404,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:_2,meta:{slide:{raw:`
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
- Pertanto esaminando il valore di **errno** un programma può capire il motivo del fallimento dell'ultima chiamata`,frontmatter:{},index:23,start:405,end:417,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:y2,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:24,start:418,end:445,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:z2,meta:{slide:{raw:`
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

- Come si può notare il numero 2 significa che il file o la directory che stiamo provando ad aprire non è esistente`,frontmatter:{},index:25,start:446,end:471,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:A2,meta:{slide:{raw:`
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
- In questo modo possiamo dotare i nostri programmi in C di una miglior gestione degli errori e renderli maggiormente uiser friendly`,frontmatter:{},index:26,start:472,end:486,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:B2,meta:{slide:{raw:`
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

- Come si vede ora il messaggio di errore è accurato e fornisce informazioni dettagliate sul motivo del fallimento`,frontmatter:{},index:27,start:487,end:514,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:X2,meta:{slide:{raw:`
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
  - **EOF**: in caso di fallimento. errno è settato con il codice di errore appropriato`,frontmatter:{},index:28,start:515,end:532,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:sx,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:29,start:533,end:559,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:ux,meta:{slide:{raw:`
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
- Ovviamente il file va aperto in scrittura`,frontmatter:{},index:30,start:560,end:573,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:hx,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:31,start:574,end:603,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:yx,meta:{slide:{raw:`
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
- Se il file test.txt era già esistente sarebbe stato completamente sovrascritto dall'esecuzione del programma`,frontmatter:{},index:32,start:604,end:626,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Cx,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:33,start:627,end:657,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:Lx,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:34,start:658,end:683,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:Dx,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:35,start:684,end:706,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Vx,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:36,start:707,end:733,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:Jx,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:37,start:734,end:758,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:aE,meta:{slide:{raw:`
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

- Questa funzione si comporta esattamente come scanf, ma anzichè leggere da tastiera, legge un input formattato da file`,frontmatter:{},index:38,start:759,end:772,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:pE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:39,start:773,end:802,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:yE,meta:{slide:{raw:`
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
- Vediamo ora come leggere tutte le linee usando feof`,frontmatter:{},index:40,start:803,end:832,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:FE,meta:{slide:{raw:`
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
- **1 (true)**: se il puntatore ha raggiunto la fine del file quindi non è più possibile leggere`,frontmatter:{},index:41,start:833,end:847,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:TE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:42,start:848,end:876,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:UE,meta:{slide:{raw:`
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

<img src="/media/files_11.png" width="650" style="position:relative;top: 3rem; left:7rem;"/>`,frontmatter:{},index:43,start:877,end:894,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:WE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:44,start:895,end:924,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:n$,meta:{slide:{raw:`
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

- Quindi in questo caso tutte le linee del file sono state correttamente lette`,frontmatter:{},index:45,start:925,end:955,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:l$,meta:{slide:{raw:`
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

\`\`\``,frontmatter:{},index:46,start:956,end:971,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:m$,meta:{slide:{raw:`
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

- Consegnare il file con nome: *|cognome|_file_04.c*`,frontmatter:{},index:47,start:972,end:999,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:k$,meta:{slide:{raw:`
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


- Consegnare il file con nome: *|cognome|_file_05.c*`,frontmatter:{},index:48,start:1e3,end:1012,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:S$,meta:{slide:{raw:`
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
- **0**: in caso di errore o di impossibilità di scrivere i record su file`,frontmatter:{},index:49,start:1013,end:1036,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:A$,meta:{slide:{raw:`
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
- La possibilità di scrivere file binari ci permette di realizzare un semplice DB, o meccanismo di persistenza e quindi rendere i nostri programmi più sofisticati e funzionali`,frontmatter:{},index:50,start:1037,end:1049,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:B$,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:51,start:1050,end:1068,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:q$,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:52,start:1069,end:1098,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:X$,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:53,start:1099,end:1121,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:a3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:54,start:1122,end:1152,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:p3,meta:{slide:{raw:`
# I File

Esercizio file_06

- Scrivere un programma in C, che letto da linea di comando il nome di città, la temperatura minima e massima, stampi a video i dati inseriti e li salvi su file binario in coda ai dati gia eventualmente presenti
- Consegnare il file con nome: *|cognome|_file_06.c*

`,title:"I File",level:1,content:`# I File

Esercizio file_06

- Scrivere un programma in C, che letto da linea di comando il nome di città, la temperatura minima e massima, stampi a video i dati inseriti e li salvi su file binario in coda ai dati gia eventualmente presenti
- Consegnare il file con nome: *|cognome|_file_06.c*`,frontmatter:{},index:55,start:1153,end:1162,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:b3,meta:{slide:{raw:`
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
- **0**: in caso di errore o di impossibilità nel legegre i record dal file`,frontmatter:{},index:56,start:1163,end:1181,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:$3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:57,start:1182,end:1213,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:O3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:58,start:1214,end:1236,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:N3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:59,start:1237,end:1264,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:B3,meta:{slide:{raw:`
# I File

Esercizio file_07

- Scrivere un programma in C, che legga il file generato come output del programma 06, e stampi a video il record letto
- Consegnare il file con nome: *|cognome|_file_07.c*

`,title:"I File",level:1,content:`# I File

Esercizio file_07

- Scrivere un programma in C, che legga il file generato come output del programma 06, e stampi a video il record letto
- Consegnare il file con nome: *|cognome|_file_07.c*`,frontmatter:{},index:60,start:1265,end:1274,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:Q3,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:61,start:1275,end:1302,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:e6,meta:{slide:{raw:`
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

- Quindi abbiamo scritto 10 record (NUM elementi dell'array)`,frontmatter:{},index:62,start:1303,end:1325,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:r6,meta:{slide:{raw:`
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

- Come mai quest'ordine nel salvare gli elementi dell'array su file? E' giusto?`,frontmatter:{},index:63,start:1326,end:1347,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:m6,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:64,start:1348,end:1377,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:k6,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:65,start:1378,end:1396,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:C6,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:66,start:1397,end:1416,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:A6,meta:{slide:{raw:`
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

- Quindi scrivere 100 record da 4MByte ciascuno è circa 10 volte più veloce che scrivere 100M di record da 4 byte ciascuno`,frontmatter:{},index:67,start:1417,end:1435,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:V6,meta:{slide:{raw:`
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
- **-1**: in caso di errore`,frontmatter:{},index:68,start:1436,end:1458,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:X6,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:69,start:1459,end:1487,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:a4,meta:{slide:{raw:`
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
- Quindi ci siamo posizionati all'inizio dell'11mo numero che viene letto da fread`,frontmatter:{},index:70,start:1488,end:1507,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:d4,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:71,start:1508,end:1535,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:b4,meta:{slide:{raw:`
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
- Pertanto abbiamo posizionato il puntatore a partire dal 10mo numero prima della file`,frontmatter:{},index:72,start:1536,end:1554,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:$4,meta:{slide:{raw:`
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
    
\`\`\``,frontmatter:{},index:73,start:1555,end:1585,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:O4,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:74,start:1586,end:1603,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:D4,meta:{slide:{raw:`
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
- Pertanto la successiva lettura, legge il numero 1`,frontmatter:{},index:75,start:1604,end:1627,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:j4,meta:{slide:{raw:`
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
- Consegnare il file con nome: *|cognome|_file_08.c*`,frontmatter:{},index:76,start:1628,end:1638,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:J4,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:77,start:1639,end:1668,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:iC,meta:{slide:{raw:`
# I File

Esercizio file_09

- Scrivere un programma in C, che legga da linea di comando il nome comopleto (percorso e nome) di un file
- Il programma stampa a video la lunghezza del file 
- Consegnare il file con nome: *|cognome|_file_09.c*
`,title:"I File",level:1,content:`# I File

Esercizio file_09

- Scrivere un programma in C, che legga da linea di comando il nome comopleto (percorso e nome) di un file
- Il programma stampa a video la lunghezza del file 
- Consegnare il file con nome: *|cognome|_file_09.c*`,frontmatter:{},index:78,start:1669,end:1678,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:cC,meta:{slide:{raw:`
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
- Consegnare il file con nome: *|cognome|_file_10.c*`,frontmatter:{},index:79,start:1679,end:1689,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:mC,meta:{slide:{raw:`
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
    5. uscire dal programma`,frontmatter:{},index:80,start:1690,end:1703,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:kC,meta:{slide:{raw:`
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
- Consegnare il file con nome: *|cognome|_file_11.c*`,frontmatter:{},index:81,start:1704,end:1714,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:IC,meta:{slide:{raw:`
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
- [fseek 02:](https://gist.github.com/profmancusoa/fd1b256d6e82cdcbdb2c02e432c84fdb) e [fseek 03:](https://gist.github.com/profmancusoa/60a045625dd9249538b18c57980ac761)`,frontmatter:{},index:82,start:1715,end:1731,noteHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",component:qb,meta:{layout:"end"}}],qe=xC,Ds=[{name:"play",path:"/",component:hk,children:[...qe]},{name:"print",path:"/print",component:jb},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(t){if(!Rs.remote||Rs.remote===t.query.password)return!0;if(Rs.remote&&t.query.password===void 0){const s=prompt("Enter password");if(Rs.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};Ds.push({path:"/presenter/print",component:()=>Et(()=>import("./PresenterPrint-5231b376.js"),["assets/PresenterPrint-5231b376.js","assets/NoteDisplay-51e3e2f1.js","assets/index-80d5a1f9.js"])}),Ds.push({name:"notes",path:"/notes",component:()=>Et(()=>import("./NotesView-463ffeaa.js"),["assets/NotesView-463ffeaa.js","assets/NoteDisplay-51e3e2f1.js","assets/index-80d5a1f9.js"]),beforeEnter:n}),Ds.push({name:"presenter",path:"/presenter/:no",component:()=>Et(()=>import("./Presenter-82906869.js"),["assets/Presenter-82906869.js","assets/NoteDisplay-51e3e2f1.js","assets/DrawingControls-f10f2416.js","assets/index-80d5a1f9.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:n}),Ds.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const $t=Ug({history:D_("/INFORMATICA/3/files/"),routes:Ds});function EC(n,t,{mode:s="replace"}={}){return A({get(){const o=$t.currentRoute.value.query[n];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){An(()=>{$t[w(s)]({query:{...$t.currentRoute.value.query,[n]:o}})})}})}const sp=le(0);An(()=>{$t.afterEach(async()=>{await An(),sp.value+=1})});const ip=le(0),Rn=A(()=>$t.currentRoute.value),ys=A(()=>Rn.value.query.print!==void 0),$C=A(()=>Rn.value.query.print==="clicks"),nt=A(()=>Rn.value.query.embedded!==void 0),Mn=A(()=>Rn.value.path.startsWith("/presenter")),dz=A(()=>Rn.value.path.startsWith("/notes")),op=A(()=>ys.value&&!$C.value),ua=A(()=>Rn.value.query.password),CC=A(()=>!Mn.value&&(!Le.remote||ua.value===Le.remote)),Dr=EC("clicks","0"),ap=A(()=>qe.length-1),zC=A(()=>Rn.value.path),Ye=A(()=>parseInt(zC.value.split(/\//g).slice(-1)[0])||1);A(()=>Qa(Ye.value));const cn=A(()=>qe.find(n=>n.path===`${Ye.value}`));A(()=>{var n,t,s;return(s=(t=(n=cn.value)==null?void 0:n.meta)==null?void 0:t.slide)==null?void 0:s.id});A(()=>{var n,t;return((t=(n=cn.value)==null?void 0:n.meta)==null?void 0:t.layout)||(Ye.value===1?"cover":"default")});const Fo=A(()=>qe.find(n=>n.path===`${Math.min(qe.length,Ye.value+1)}`)),FC=A(()=>qe.find(n=>n.path===`${Math.max(1,Ye.value-1)}`)),SC=A(()=>{var n,t;return sp.value,((t=(n=cn.value)==null?void 0:n.meta)==null?void 0:t.__clicksElements)||[]}),Xt=A({get(){if(op.value)return 99999;let n=+(Dr.value||0);return isNaN(n)&&(n=0),n},set(n){Dr.value=n.toString()}}),qi=A(()=>{var n,t;return+(((t=(n=cn.value)==null?void 0:n.meta)==null?void 0:t.clicks)??SC.value.length)}),OC=A(()=>Ye.value<qe.length-1||Xt.value<qi.value),LC=A(()=>Ye.value>1||Xt.value>0),MC=A(()=>qe.filter(n=>{var t,s;return(s=(t=n.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((n,t)=>(Ga(n,t),n),[])),TC=A(()=>Ya(MC.value,cn.value));A(()=>Za(TC.value));const AC=A(()=>DC(ip.value,cn.value,FC.value));He(cn,(n,t)=>{ip.value=Number(n==null?void 0:n.path)-Number(t==null?void 0:t.path)});function qt(){qi.value<=Xt.value?Qi():Xt.value+=1}async function Qt(){Xt.value<=0?await Gi():Xt.value-=1}function Qa(n){return Mn.value?`/presenter/${n}`:`/${n}`}function Qi(){const n=Math.min(qe.length,Ye.value+1);return ws(n)}async function Gi(n=!0){const t=Math.max(1,Ye.value-1);await ws(t),n&&qi.value&&$t.replace({query:{...Rn.value.query,clicks:qi.value}})}function ws(n,t){return $t.push({path:Qa(n),query:{...Rn.value.query,clicks:t}})}function PC(n){const t=le(0),{direction:s,distanceX:o,distanceY:a}=t_(n,{onSwipeStart(l){l.pointerType==="touch"&&(ii.value||(t.value=Go()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||ii.value)return;const r=Math.abs(o.value),c=Math.abs(a.value);r/window.innerWidth>.3||r>100?s.value===it.LEFT?qt():Qt():(c/window.innerHeight>.4||c>200)&&(s.value===it.DOWN?Gi():Qi())}})}async function Ur(){const{saveAs:n}=await Et(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);n(cu(Le.download)?Le.download:Le.exportFilename?`${Le.exportFilename}.pdf`:"/INFORMATICA/3/files/slidev-exported.pdf",`${Le.title}.pdf`)}async function fz(n){var t,s;if(n==null){const o=(s=(t=cn.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;n=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function Ga(n,t,s=1){var a,l,r,c,u;const o=(l=(a=t.meta)==null?void 0:a.slide)==null?void 0:l.level;o&&o>s&&n.length>0?Ga(n[n.length-1].children,t,s+1):n.push({children:[],level:s,path:t.path,hideInToc:Boolean((r=t.meta)==null?void 0:r.hideInToc),title:(u=(c=t.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Ya(n,t,s=!1,o){return n.map(a=>{const l={...a,active:a.path===(t==null?void 0:t.path),hasActiveParent:s};return l.children.length>0&&(l.children=Ya(l.children,t,l.active||l.hasActiveParent,l)),o&&(l.active||l.activeParent)&&(o.activeParent=!0),l})}function Za(n,t=1){return n.filter(s=>!s.hideInToc).map(s=>({...s,children:Za(s.children,t+1)}))}const NC={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function RC(n,t=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let s=n.name.includes("|")?n.name:NC[n.name]||n.name;if(s.includes("|")){const[o,a]=s.split("|").map(l=>l.trim());s=t?a:o}if(s)return{...n,name:s}}function DC(n,t,s){var a,l;let o=n>0?(a=s==null?void 0:s.meta)==null?void 0:a.transition:(l=t==null?void 0:t.meta)==null?void 0:l.transition;return o||(o=Le.transition),RC(o,n<0)}export{su as $,fp as A,le as B,sz as C,tz as D,Me as E,Se as F,az as G,$n as H,iz as I,Gr as J,Ep as K,pi as L,An as M,Sa as N,pe as O,Zt as P,ka as Q,KC as R,Yn as S,ZC as T,UC as U,op as V,Om as W,Lm as X,ou as Y,iu as Z,M as _,nz as a,Dt as a$,zm as a0,QC as a1,GC as a2,YC as a3,VC as a4,qC as a5,Tb as a6,Ab as a7,Ur as a8,qt as a9,F1 as aA,x1 as aB,cz as aC,cn as aD,M0 as aE,PC as aF,lz as aG,uz as aH,I as aI,ju as aJ,rn as aK,V0 as aL,qi as aM,OC as aN,Fo as aO,ii as aP,Co as aQ,dk as aR,ja as aS,Wa as aT,HC as aU,BC as aV,nk as aW,iv as aX,oz as aY,rt as aZ,Ts as a_,Qi as aa,fz as ab,Qt as ac,Gi as ad,Rn as ae,WC as af,Is as ag,Bd as ah,Hd as ai,Ce as aj,rz as ak,rd as al,e as am,En as an,di as ao,en as ap,qe as aq,ap as ar,i as as,be as at,Na as au,We as av,Dn as aw,S as ax,wo as ay,Pu as az,Ye as b,Vn as b0,la as b1,b0 as b2,y0 as b3,w0 as b4,x0 as b5,Oa as b6,tu as b7,pz as b8,dn as b9,xi as ba,Dv as bb,au as bc,E0 as bd,Le as c,Xt as d,dz as e,Mn as f,Qa as g,Be as h,XC as i,C as j,L as k,Yd as l,ne as m,N as n,JC as o,ez as p,b as q,$t as r,nn as s,mi as t,jC as u,El as v,He as w,A as x,Fa as y,w as z};
