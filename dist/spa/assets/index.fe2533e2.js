const Qy=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Bu={},Yy="/",Mn=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Yy}${r}`,r in Bu)return;Bu[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Qy,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function nl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function rl(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Me(r)?ev(r):rl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Me(t))return t;if(Ae(t))return t}}const Xy=/;(?![^(]*\))/g,Jy=/:([^]+)/,Zy=/\/\*.*?\*\//gs;function ev(t){const e={};return t.replace(Zy,"").split(Xy).forEach(n=>{if(n){const r=n.split(Jy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sl(t){let e="";if(Me(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=sl(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nv=nl(tv);function dd(t){return!!t||t===""}const zR=t=>Me(t)?t:t==null?"":Z(t)||Ae(t)&&(t.toString===yd||!oe(t.toString))?JSON.stringify(t,pd,2):String(t),pd=(t,e)=>e&&e.__v_isRef?pd(t,e.value):Sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:gd(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!Z(e)&&!vd(e)?String(e):e,ke={},Ir=[],Ot=()=>{},rv=()=>!1,sv=/^on[^a-z]/,Do=t=>sv.test(t),il=t=>t.startsWith("onUpdate:"),qe=Object.assign,ol=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iv=Object.prototype.hasOwnProperty,pe=(t,e)=>iv.call(t,e),Z=Array.isArray,Sr=t=>No(t)==="[object Map]",gd=t=>No(t)==="[object Set]",oe=t=>typeof t=="function",Me=t=>typeof t=="string",al=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",md=t=>Ae(t)&&oe(t.then)&&oe(t.catch),yd=Object.prototype.toString,No=t=>yd.call(t),ov=t=>No(t).slice(8,-1),vd=t=>No(t)==="[object Object]",cl=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vi=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},av=/-(\w)/g,qt=Po(t=>t.replace(av,(e,n)=>n?n.toUpperCase():"")),cv=/\B([A-Z])/g,Kr=Po(t=>t.replace(cv,"-$1").toLowerCase()),Lo=Po(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ia=Po(t=>t?`on${Lo(t)}`:""),Cs=(t,e)=>!Object.is(t,e),Sa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},to=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ll=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vu;const lv=()=>Vu||(Vu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Lt;class wd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function uv(t){return new wd(t)}function hv(t,e=Lt){e&&e.active&&e.effects.push(t)}const ul=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_d=t=>(t.w&Sn)>0,bd=t=>(t.n&Sn)>0,fv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Sn},dv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];_d(s)&&!bd(s)?s.delete(t):e[n++]=s,s.w&=~Sn,s.n&=~Sn}e.length=n}},ic=new WeakMap;let cs=0,Sn=1;const oc=30;let kt;const Wn=Symbol(""),ac=Symbol("");class hl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hv(this,r)}run(){if(!this.active)return this.fn();let e=kt,n=wn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,wn=!0,Sn=1<<++cs,cs<=oc?fv(this):ju(this),this.fn()}finally{cs<=oc&&dv(this),Sn=1<<--cs,kt=this.parent,wn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(ju(this),this.onStop&&this.onStop(),this.active=!1)}}function ju(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let wn=!0;const Ed=[];function Wr(){Ed.push(wn),wn=!1}function Gr(){const t=Ed.pop();wn=t===void 0?!0:t}function ht(t,e,n){if(wn&&kt){let r=ic.get(t);r||ic.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ul()),Td(s)}}function Td(t,e){let n=!1;cs<=oc?bd(t)||(t.n|=Sn,n=!_d(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function Zt(t,e,n,r,s,i){const o=ic.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=ll(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?cl(n)&&a.push(o.get("length")):(a.push(o.get(Wn)),Sr(t)&&a.push(o.get(ac)));break;case"delete":Z(t)||(a.push(o.get(Wn)),Sr(t)&&a.push(o.get(ac)));break;case"set":Sr(t)&&a.push(o.get(Wn));break}if(a.length===1)a[0]&&cc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);cc(ul(c))}}function cc(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&qu(r);for(const r of n)r.computed||qu(r)}function qu(t,e){(t!==kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const pv=nl("__proto__,__v_isRef,__isVue"),Id=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(al)),gv=fl(),mv=fl(!1,!0),yv=fl(!0),Hu=vv();function vv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ge(this);for(let i=0,o=this.length;i<o;i++)ht(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ge)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Wr();const r=ge(this)[e].apply(this,n);return Gr(),r}}),t}function fl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Pv:Rd:e?Ad:kd).get(r))return r;const o=Z(r);if(!t&&o&&pe(Hu,s))return Reflect.get(Hu,s,i);const a=Reflect.get(r,s,i);return(al(s)?Id.has(s):pv(s))||(t||ht(r,"get",s),e)?a:Ze(a)?o&&cl(s)?a:a.value:Ae(a)?t?Od(a):ar(a):a}}const wv=Sd(),_v=Sd(!0);function Sd(t=!1){return function(n,r,s,i){let o=n[r];if(Dr(o)&&Ze(o)&&!Ze(s))return!1;if(!t&&(!no(s)&&!Dr(s)&&(o=ge(o),s=ge(s)),!Z(n)&&Ze(o)&&!Ze(s)))return o.value=s,!0;const a=Z(n)&&cl(r)?Number(r)<n.length:pe(n,r),c=Reflect.set(n,r,s,i);return n===ge(i)&&(a?Cs(s,o)&&Zt(n,"set",r,s):Zt(n,"add",r,s)),c}}function bv(t,e){const n=pe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Zt(t,"delete",e,void 0),r}function Ev(t,e){const n=Reflect.has(t,e);return(!al(e)||!Id.has(e))&&ht(t,"has",e),n}function Tv(t){return ht(t,"iterate",Z(t)?"length":Wn),Reflect.ownKeys(t)}const Cd={get:gv,set:wv,deleteProperty:bv,has:Ev,ownKeys:Tv},Iv={get:yv,set(t,e){return!0},deleteProperty(t,e){return!0}},Sv=qe({},Cd,{get:mv,set:_v}),dl=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function ki(t,e,n=!1,r=!1){t=t.__v_raw;const s=ge(t),i=ge(e);n||(e!==i&&ht(s,"get",e),ht(s,"get",i));const{has:o}=Mo(s),a=r?dl:n?ml:ks;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ai(t,e=!1){const n=this.__v_raw,r=ge(n),s=ge(t);return e||(t!==s&&ht(r,"has",t),ht(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ri(t,e=!1){return t=t.__v_raw,!e&&ht(ge(t),"iterate",Wn),Reflect.get(t,"size",t)}function zu(t){t=ge(t);const e=ge(this);return Mo(e).has.call(e,t)||(e.add(t),Zt(e,"add",t,t)),this}function Ku(t,e){e=ge(e);const n=ge(this),{has:r,get:s}=Mo(n);let i=r.call(n,t);i||(t=ge(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Cs(e,o)&&Zt(n,"set",t,e):Zt(n,"add",t,e),this}function Wu(t){const e=ge(this),{has:n,get:r}=Mo(e);let s=n.call(e,t);s||(t=ge(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Zt(e,"delete",t,void 0),i}function Gu(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&Zt(t,"clear",void 0,void 0),n}function Oi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ge(o),c=e?dl:t?ml:ks;return!t&&ht(a,"iterate",Wn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function xi(t,e,n){return function(...r){const s=this.__v_raw,i=ge(s),o=Sr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?dl:e?ml:ks;return!e&&ht(i,"iterate",c?ac:Wn),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function cn(t){return function(...e){return t==="delete"?!1:this}}function Cv(){const t={get(i){return ki(this,i)},get size(){return Ri(this)},has:Ai,add:zu,set:Ku,delete:Wu,clear:Gu,forEach:Oi(!1,!1)},e={get(i){return ki(this,i,!1,!0)},get size(){return Ri(this)},has:Ai,add:zu,set:Ku,delete:Wu,clear:Gu,forEach:Oi(!1,!0)},n={get(i){return ki(this,i,!0)},get size(){return Ri(this,!0)},has(i){return Ai.call(this,i,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:Oi(!0,!1)},r={get(i){return ki(this,i,!0,!0)},get size(){return Ri(this,!0)},has(i){return Ai.call(this,i,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:Oi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xi(i,!1,!1),n[i]=xi(i,!0,!1),e[i]=xi(i,!1,!0),r[i]=xi(i,!0,!0)}),[t,n,e,r]}const[kv,Av,Rv,Ov]=Cv();function pl(t,e){const n=e?t?Ov:Rv:t?Av:kv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(pe(n,s)&&s in r?n:r,s,i)}const xv={get:pl(!1,!1)},Dv={get:pl(!1,!0)},Nv={get:pl(!0,!1)},kd=new WeakMap,Ad=new WeakMap,Rd=new WeakMap,Pv=new WeakMap;function Lv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mv(t){return t.__v_skip||!Object.isExtensible(t)?0:Lv(ov(t))}function ar(t){return Dr(t)?t:gl(t,!1,Cd,xv,kd)}function Fv(t){return gl(t,!1,Sv,Dv,Ad)}function Od(t){return gl(t,!0,Iv,Nv,Rd)}function gl(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Mv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Cr(t){return Dr(t)?Cr(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function no(t){return!!(t&&t.__v_isShallow)}function xd(t){return Cr(t)||Dr(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function cr(t){return to(t,"__v_skip",!0),t}const ks=t=>Ae(t)?ar(t):t,ml=t=>Ae(t)?Od(t):t;function Dd(t){wn&&kt&&(t=ge(t),Td(t.dep||(t.dep=ul())))}function Nd(t,e){t=ge(t),t.dep&&cc(t.dep)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function Nr(t){return Pd(t,!1)}function Uv(t){return Pd(t,!0)}function Pd(t,e){return Ze(t)?t:new $v(t,e)}class $v{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:ks(e)}get value(){return Dd(this),this._value}set value(e){const n=this.__v_isShallow||no(e)||Dr(e);e=n?e:ge(e),Cs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ks(e),Nd(this))}}function Gn(t){return Ze(t)?t.value:t}const Bv={get:(t,e,n)=>Gn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ze(s)&&!Ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ld(t){return Cr(t)?t:new Proxy(t,Bv)}var Md;class Vv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Md]=!1,this._dirty=!0,this.effect=new hl(e,()=>{this._dirty||(this._dirty=!0,Nd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ge(this);return Dd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Md="__v_isReadonly";function jv(t,e,n=!1){let r,s;const i=oe(t);return i?(r=t,s=Ot):(r=t.get,s=t.set),new Vv(r,s,i||!s,n)}function _n(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Fo(i,e,n)}return s}function yt(t,e,n,r){if(oe(t)){const i=_n(t,e,n,r);return i&&md(i)&&i.catch(o=>{Fo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(yt(t[i],e,n,r));return s}function Fo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){_n(c,null,10,[t,o,a]);return}}qv(t,n,s,r)}function qv(t,e,n,r=!0){console.error(t)}let As=!1,lc=!1;const Xe=[];let Ft=0;const kr=[];let Gt=null,$n=0;const Fd=Promise.resolve();let yl=null;function Ud(t){const e=yl||Fd;return t?e.then(this?t.bind(this):t):e}function Hv(t){let e=Ft+1,n=Xe.length;for(;e<n;){const r=e+n>>>1;Rs(Xe[r])<t?e=r+1:n=r}return e}function vl(t){(!Xe.length||!Xe.includes(t,As&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?Xe.push(t):Xe.splice(Hv(t.id),0,t),$d())}function $d(){!As&&!lc&&(lc=!0,yl=Fd.then(Vd))}function zv(t){const e=Xe.indexOf(t);e>Ft&&Xe.splice(e,1)}function Kv(t){Z(t)?kr.push(...t):(!Gt||!Gt.includes(t,t.allowRecurse?$n+1:$n))&&kr.push(t),$d()}function Qu(t,e=As?Ft+1:0){for(;e<Xe.length;e++){const n=Xe[e];n&&n.pre&&(Xe.splice(e,1),e--,n())}}function Bd(t){if(kr.length){const e=[...new Set(kr)];if(kr.length=0,Gt){Gt.push(...e);return}for(Gt=e,Gt.sort((n,r)=>Rs(n)-Rs(r)),$n=0;$n<Gt.length;$n++)Gt[$n]();Gt=null,$n=0}}const Rs=t=>t.id==null?1/0:t.id,Wv=(t,e)=>{const n=Rs(t)-Rs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Vd(t){lc=!1,As=!0,Xe.sort(Wv);const e=Ot;try{for(Ft=0;Ft<Xe.length;Ft++){const n=Xe[Ft];n&&n.active!==!1&&_n(n,null,14)}}finally{Ft=0,Xe.length=0,Bd(),As=!1,yl=null,(Xe.length||kr.length)&&Vd()}}function Gv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||ke;h&&(s=n.map(p=>Me(p)?p.trim():p)),f&&(s=n.map(ll))}let a,c=r[a=Ia(e)]||r[a=Ia(qt(e))];!c&&i&&(c=r[a=Ia(Kr(e))]),c&&yt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yt(l,t,6,s)}}function jd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!oe(t)){const c=l=>{const u=jd(l,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(Z(i)?i.forEach(c=>o[c]=null):qe(o,i),Ae(t)&&r.set(t,o),o)}function Uo(t,e){return!t||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,Kr(e))||pe(t,e))}let ut=null,$o=null;function ro(t){const e=ut;return ut=t,$o=t&&t.type.__scopeId||null,e}function KR(t){$o=t}function WR(){$o=null}function Qv(t,e=ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&oh(-1);const i=ro(e);let o;try{o=t(...s)}finally{ro(i),r._d&&oh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ca(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:p,ctx:m,inheritAttrs:v}=t;let _,T;const R=ro(t);try{if(n.shapeFlag&4){const V=s||r;_=Mt(u.call(V,V,f,i,p,h,m)),T=c}else{const V=e;_=Mt(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),T=e.props?c:Yv(c)}}catch(V){ys.length=0,Fo(V,t,1),_=ct(xt)}let x=_;if(T&&v!==!1){const V=Object.keys(T),{shapeFlag:F}=x;V.length&&F&7&&(o&&V.some(il)&&(T=Xv(T,o)),x=Cn(x,T))}return n.dirs&&(x=Cn(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),_=x,ro(R),_}const Yv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Do(n))&&((e||(e={}))[n]=t[n]);return e},Xv=(t,e)=>{const n={};for(const r in t)(!il(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Jv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yu(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Uo(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Yu(r,o,l):!0:!!o;return!1}function Yu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Uo(n,i))return!0}return!1}function Zv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ew=t=>t.__isSuspense;function tw(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):Kv(t)}function ji(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=je||ut;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r.proxy):e}}const Di={};function qi(t,e,n){return qd(t,e,n)}function qd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ke){const a=je;let c,l=!1,u=!1;if(Ze(t)?(c=()=>t.value,l=no(t)):Cr(t)?(c=()=>t,r=!0):Z(t)?(u=!0,l=t.some(x=>Cr(x)||no(x)),c=()=>t.map(x=>{if(Ze(x))return x.value;if(Cr(x))return jn(x);if(oe(x))return _n(x,a,2)})):oe(t)?e?c=()=>_n(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),yt(t,a,3,[h])}:c=Ot,e&&r){const x=c;c=()=>jn(x())}let f,h=x=>{f=T.onStop=()=>{_n(x,a,4)}},p;if(Ns)if(h=Ot,e?n&&yt(e,a,3,[c(),u?[]:void 0,h]):c(),s==="sync"){const x=Yw();p=x.__watcherHandles||(x.__watcherHandles=[])}else return Ot;let m=u?new Array(t.length).fill(Di):Di;const v=()=>{if(!!T.active)if(e){const x=T.run();(r||l||(u?x.some((V,F)=>Cs(V,m[F])):Cs(x,m)))&&(f&&f(),yt(e,a,3,[x,m===Di?void 0:u&&m[0]===Di?[]:m,h]),m=x)}else T.run()};v.allowRecurse=!!e;let _;s==="sync"?_=v:s==="post"?_=()=>at(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),_=()=>vl(v));const T=new hl(c,_);e?n?v():m=T.run():s==="post"?at(T.run.bind(T),a&&a.suspense):T.run();const R=()=>{T.stop(),a&&a.scope&&ol(a.scope.effects,T)};return p&&p.push(R),R}function nw(t,e,n){const r=this.proxy,s=Me(t)?t.includes(".")?Hd(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const o=je;Pr(this);const a=qd(s,i.bind(r),n);return o?Pr(o):Qn(),a}function Hd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function jn(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))jn(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)jn(t[n],e);else if(gd(t)||Sr(t))t.forEach(n=>{jn(n,e)});else if(vd(t))for(const n in t)jn(t[n],e);return t}function zd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qd(()=>{t.isMounted=!0}),bl(()=>{t.isUnmounting=!0}),t}const dt=[Function,Array],rw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},setup(t,{slots:e}){const n=ei(),r=zd();let s;return()=>{const i=e.default&&wl(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==xt){o=v;break}}const a=ge(t),{mode:c}=a;if(r.isLeaving)return ka(o);const l=Xu(o);if(!l)return ka(o);const u=Os(l,a,r,n);xs(l,u);const f=n.subTree,h=f&&Xu(f);let p=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();s===void 0?s=v:v!==s&&(s=v,p=!0)}if(h&&h.type!==xt&&(!Bn(l,h)||p)){const v=Os(h,a,r,n);if(xs(h,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ka(o);c==="in-out"&&l.type!==xt&&(v.delayLeave=(_,T,R)=>{const x=Wd(r,h);x[String(h.key)]=h,_._leaveCb=()=>{T(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=R})}return o}}},Kd=rw;function Wd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Os(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:v,onAppear:_,onAfterAppear:T,onAppearCancelled:R}=e,x=String(t.key),V=Wd(n,t),F=(U,te)=>{U&&yt(U,r,9,te)},ee=(U,te)=>{const ae=te[1];F(U,te),Z(U)?U.every(he=>he.length<=1)&&ae():U.length<=1&&ae()},se={mode:i,persisted:o,beforeEnter(U){let te=a;if(!n.isMounted)if(s)te=v||a;else return;U._leaveCb&&U._leaveCb(!0);const ae=V[x];ae&&Bn(t,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),F(te,[U])},enter(U){let te=c,ae=l,he=u;if(!n.isMounted)if(s)te=_||c,ae=T||l,he=R||u;else return;let L=!1;const me=U._enterCb=M=>{L||(L=!0,M?F(he,[U]):F(ae,[U]),se.delayedLeave&&se.delayedLeave(),U._enterCb=void 0)};te?ee(te,[U,me]):me()},leave(U,te){const ae=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return te();F(f,[U]);let he=!1;const L=U._leaveCb=me=>{he||(he=!0,te(),me?F(m,[U]):F(p,[U]),U._leaveCb=void 0,V[ae]===t&&delete V[ae])};V[ae]=t,h?ee(h,[U,L]):L()},clone(U){return Os(U,e,n,r)}};return se}function ka(t){if(Bo(t))return t=Cn(t),t.children=null,t}function Xu(t){return Bo(t)?t.children?t.children[0]:void 0:t}function xs(t,e){t.shapeFlag&6&&t.component?xs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wl(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ct?(o.patchFlag&128&&s++,r=r.concat(wl(o.children,e,a))):(e||o.type!==xt)&&r.push(a!=null?Cn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function _l(t){return oe(t)?{setup:t,name:t.name}:t}const Hi=t=>!!t.type.__asyncLoader,Bo=t=>t.type.__isKeepAlive;function sw(t,e){Gd(t,"a",e)}function iw(t,e){Gd(t,"da",e)}function Gd(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bo(s.parent.vnode)&&ow(r,e,n,s),s=s.parent}}function ow(t,e,n,r){const s=Vo(e,t,r,!0);Xd(()=>{ol(r[e],s)},n)}function Vo(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Wr(),Pr(n);const a=yt(e,n,t,o);return Qn(),Gr(),a});return r?s.unshift(i):s.push(i),i}}const on=t=>(e,n=je)=>(!Ns||t==="sp")&&Vo(t,(...r)=>e(...r),n),aw=on("bm"),Qd=on("m"),cw=on("bu"),Yd=on("u"),bl=on("bum"),Xd=on("um"),lw=on("sp"),uw=on("rtg"),hw=on("rtc");function fw(t,e=je){Vo("ec",t,e)}function Jd(t,e){const n=ut;if(n===null)return t;const r=Ho(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ke]=e[i];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&jn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Nn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Wr(),yt(c,n,8,[t.el,a,t,e]),Gr())}}const Zd="components";function dw(t,e){return gw(Zd,t,!0,e)||t}const pw=Symbol();function gw(t,e,n=!0,r=!1){const s=ut||je;if(s){const i=s.type;if(t===Zd){const a=Ww(i,!1);if(a&&(a===e||a===qt(e)||a===Lo(qt(e))))return i}const o=Ju(s[t]||i[t],e)||Ju(s.appContext[t],e);return!o&&r?i:o}}function Ju(t,e){return t&&(t[e]||t[qt(e)]||t[Lo(qt(e))])}function GR(t,e,n,r){let s;const i=n&&n[r];if(Z(t)||Me(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const uc=t=>t?dp(t)?Ho(t)||t.proxy:uc(t.parent):null,gs=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uc(t.parent),$root:t=>uc(t.root),$emit:t=>t.emit,$options:t=>El(t),$forceUpdate:t=>t.f||(t.f=()=>vl(t.update)),$nextTick:t=>t.n||(t.n=Ud.bind(t.proxy)),$watch:t=>nw.bind(t)}),Aa=(t,e)=>t!==ke&&!t.__isScriptSetup&&pe(t,e),mw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Aa(r,e))return o[e]=1,r[e];if(s!==ke&&pe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&pe(l,e))return o[e]=3,i[e];if(n!==ke&&pe(n,e))return o[e]=4,n[e];hc&&(o[e]=0)}}const u=gs[e];let f,h;if(u)return e==="$attrs"&&ht(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ke&&pe(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,pe(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Aa(s,e)?(s[e]=n,!0):r!==ke&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ke&&pe(t,o)||Aa(e,o)||(a=i[0])&&pe(a,o)||pe(r,o)||pe(gs,o)||pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let hc=!0;function yw(t){const e=El(t),n=t.proxy,r=t.ctx;hc=!1,e.beforeCreate&&Zu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:m,activated:v,deactivated:_,beforeDestroy:T,beforeUnmount:R,destroyed:x,unmounted:V,render:F,renderTracked:ee,renderTriggered:se,errorCaptured:U,serverPrefetch:te,expose:ae,inheritAttrs:he,components:L,directives:me,filters:M}=e;if(l&&vw(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ie in o){const Ee=o[Ie];oe(Ee)&&(r[Ie]=Ee.bind(n))}if(s){const Ie=s.call(n,n);Ae(Ie)&&(t.data=ar(Ie))}if(hc=!0,i)for(const Ie in i){const Ee=i[Ie],bt=oe(Ee)?Ee.bind(n,n):oe(Ee.get)?Ee.get.bind(n,n):Ot,Dn=!oe(Ee)&&oe(Ee.set)?Ee.set.bind(n):Ot,Et=Y({get:bt,set:Dn});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Et.value,set:ot=>Et.value=ot})}if(a)for(const Ie in a)ep(a[Ie],r,n,Ie);if(c){const Ie=oe(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(Ee=>{ji(Ee,Ie[Ee])})}u&&Zu(u,t,"c");function be(Ie,Ee){Z(Ee)?Ee.forEach(bt=>Ie(bt.bind(n))):Ee&&Ie(Ee.bind(n))}if(be(aw,f),be(Qd,h),be(cw,p),be(Yd,m),be(sw,v),be(iw,_),be(fw,U),be(hw,ee),be(uw,se),be(bl,R),be(Xd,V),be(lw,te),Z(ae))if(ae.length){const Ie=t.exposed||(t.exposed={});ae.forEach(Ee=>{Object.defineProperty(Ie,Ee,{get:()=>n[Ee],set:bt=>n[Ee]=bt})})}else t.exposed||(t.exposed={});F&&t.render===Ot&&(t.render=F),he!=null&&(t.inheritAttrs=he),L&&(t.components=L),me&&(t.directives=me)}function vw(t,e,n=Ot,r=!1){Z(t)&&(t=fc(t));for(const s in t){const i=t[s];let o;Ae(i)?"default"in i?o=$t(i.from||s,i.default,!0):o=$t(i.from||s):o=$t(i),Ze(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Zu(t,e,n){yt(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ep(t,e,n,r){const s=r.includes(".")?Hd(n,r):()=>n[r];if(Me(t)){const i=e[t];oe(i)&&qi(s,i)}else if(oe(t))qi(s,t.bind(n));else if(Ae(t))if(Z(t))t.forEach(i=>ep(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&qi(s,i,t)}}function El(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>so(c,l,o,!0)),so(c,e,o)),Ae(e)&&i.set(e,c),c}function so(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&so(t,i,n,!0),s&&s.forEach(o=>so(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ww[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ww={data:eh,props:Fn,emits:Fn,methods:Fn,computed:Fn,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Fn,directives:Fn,watch:bw,provide:eh,inject:_w};function eh(t,e){return e?t?function(){return qe(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function _w(t,e){return Fn(fc(t),fc(e))}function fc(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?qe(qe(Object.create(null),t),e):e}function bw(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const r in e)n[r]=st(t[r],e[r]);return n}function Ew(t,e,n,r=!1){const s={},i={};to(i,qo,1),t.propsDefaults=Object.create(null),tp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Tw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ge(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Uo(t.emitsOptions,h))continue;const p=e[h];if(c)if(pe(i,h))p!==i[h]&&(i[h]=p,l=!0);else{const m=qt(h);s[m]=dc(c,a,m,p,t,!1)}else p!==i[h]&&(i[h]=p,l=!0)}}}else{tp(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!pe(e,f)&&((u=Kr(f))===f||!pe(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=dc(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!pe(e,f)&&!0)&&(delete i[f],l=!0)}l&&Zt(t,"set","$attrs")}function tp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vi(c))continue;const l=e[c];let u;s&&pe(s,u=qt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Uo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ge(n),l=a||ke;for(let u=0;u<i.length;u++){const f=i[u];n[f]=dc(s,c,f,l[f],t,!pe(l,f))}}return o}function dc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&oe(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Pr(s),r=l[n]=c.call(null,e),Qn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}function np(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!oe(t)){const u=f=>{c=!0;const[h,p]=np(f,e,!0);qe(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ae(t)&&r.set(t,Ir),Ir;if(Z(i))for(let u=0;u<i.length;u++){const f=qt(i[u]);th(f)&&(o[f]=ke)}else if(i)for(const u in i){const f=qt(u);if(th(f)){const h=i[u],p=o[f]=Z(h)||oe(h)?{type:h}:Object.assign({},h);if(p){const m=sh(Boolean,p.type),v=sh(String,p.type);p[0]=m>-1,p[1]=v<0||m<v,(m>-1||pe(p,"default"))&&a.push(f)}}}const l=[o,a];return Ae(t)&&r.set(t,l),l}function th(t){return t[0]!=="$"}function nh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function rh(t,e){return nh(t)===nh(e)}function sh(t,e){return Z(e)?e.findIndex(n=>rh(n,t)):oe(e)&&rh(e,t)?0:-1}const rp=t=>t[0]==="_"||t==="$stable",Tl=t=>Z(t)?t.map(Mt):[Mt(t)],Iw=(t,e,n)=>{if(e._n)return e;const r=Qv((...s)=>Tl(e(...s)),n);return r._c=!1,r},sp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(rp(s))continue;const i=t[s];if(oe(i))e[s]=Iw(s,i,r);else if(i!=null){const o=Tl(i);e[s]=()=>o}}},ip=(t,e)=>{const n=Tl(e);t.slots.default=()=>n},Sw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),to(e,"_",n)):sp(e,t.slots={})}else t.slots={},e&&ip(t,e);to(t.slots,qo,1)},Cw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,sp(e,s)),o=e}else e&&(ip(t,e),o={default:1});if(i)for(const a in s)!rp(a)&&!(a in o)&&delete s[a]};function op(){return{app:null,config:{isNativeTag:rv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kw=0;function Aw(t,e){return function(r,s=null){oe(r)||(r=Object.assign({},r)),s!=null&&!Ae(s)&&(s=null);const i=op(),o=new Set;let a=!1;const c=i.app={_uid:kw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&oe(l.install)?(o.add(l),l.install(c,...u)):oe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const h=ct(r,s);return h.appContext=i,u&&e?e(h,l):t(h,l,f),a=!0,c._container=l,l.__vue_app__=c,Ho(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function pc(t,e,n,r,s=!1){if(Z(t)){t.forEach((h,p)=>pc(h,e&&(Z(e)?e[p]:e),n,r,s));return}if(Hi(r)&&!s)return;const i=r.shapeFlag&4?Ho(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Me(l)?(u[l]=null,pe(f,l)&&(f[l]=null)):Ze(l)&&(l.value=null)),oe(c))_n(c,a,12,[o,u]);else{const h=Me(c),p=Ze(c);if(h||p){const m=()=>{if(t.f){const v=h?pe(f,c)?f[c]:u[c]:c.value;s?Z(v)&&ol(v,i):Z(v)?v.includes(i)||v.push(i):h?(u[c]=[i],pe(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,pe(f,c)&&(f[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,at(m,n)):m()}}}const at=tw;function Rw(t){return Ow(t)}function Ow(t,e){const n=lv();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Ot,insertStaticContent:m}=t,v=(d,g,y,w=null,E=null,A=null,N=!1,k=null,O=!!g.dynamicChildren)=>{if(d===g)return;d&&!Bn(d,g)&&(w=D(d),ot(d,E,A,!0),d=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:I,ref:H,shapeFlag:$}=g;switch(I){case jo:_(d,g,y,w);break;case xt:T(d,g,y,w);break;case Ra:d==null&&R(g,y,w,N);break;case Ct:L(d,g,y,w,E,A,N,k,O);break;default:$&1?F(d,g,y,w,E,A,N,k,O):$&6?me(d,g,y,w,E,A,N,k,O):($&64||$&128)&&I.process(d,g,y,w,E,A,N,k,O,de)}H!=null&&E&&pc(H,d&&d.ref,A,g||d,!g)},_=(d,g,y,w)=>{if(d==null)r(g.el=a(g.children),y,w);else{const E=g.el=d.el;g.children!==d.children&&l(E,g.children)}},T=(d,g,y,w)=>{d==null?r(g.el=c(g.children||""),y,w):g.el=d.el},R=(d,g,y,w)=>{[d.el,d.anchor]=m(d.children,g,y,w,d.el,d.anchor)},x=({el:d,anchor:g},y,w)=>{let E;for(;d&&d!==g;)E=h(d),r(d,y,w),d=E;r(g,y,w)},V=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=h(d),s(d),d=y;s(g)},F=(d,g,y,w,E,A,N,k,O)=>{N=N||g.type==="svg",d==null?ee(g,y,w,E,A,N,k,O):te(d,g,E,A,N,k,O)},ee=(d,g,y,w,E,A,N,k)=>{let O,I;const{type:H,props:$,shapeFlag:z,transition:ne,dirs:le}=d;if(O=d.el=o(d.type,A,$&&$.is,$),z&8?u(O,d.children):z&16&&U(d.children,O,null,w,E,A&&H!=="foreignObject",N,k),le&&Nn(d,null,w,"created"),$){for(const Te in $)Te!=="value"&&!Vi(Te)&&i(O,Te,null,$[Te],A,d.children,w,E,P);"value"in $&&i(O,"value",null,$.value),(I=$.onVnodeBeforeMount)&&Pt(I,w,d)}se(O,d,d.scopeId,N,w),le&&Nn(d,null,w,"beforeMount");const Se=(!E||E&&!E.pendingBranch)&&ne&&!ne.persisted;Se&&ne.beforeEnter(O),r(O,g,y),((I=$&&$.onVnodeMounted)||Se||le)&&at(()=>{I&&Pt(I,w,d),Se&&ne.enter(O),le&&Nn(d,null,w,"mounted")},E)},se=(d,g,y,w,E)=>{if(y&&p(d,y),w)for(let A=0;A<w.length;A++)p(d,w[A]);if(E){let A=E.subTree;if(g===A){const N=E.vnode;se(d,N,N.scopeId,N.slotScopeIds,E.parent)}}},U=(d,g,y,w,E,A,N,k,O=0)=>{for(let I=O;I<d.length;I++){const H=d[I]=k?dn(d[I]):Mt(d[I]);v(null,H,g,y,w,E,A,N,k)}},te=(d,g,y,w,E,A,N)=>{const k=g.el=d.el;let{patchFlag:O,dynamicChildren:I,dirs:H}=g;O|=d.patchFlag&16;const $=d.props||ke,z=g.props||ke;let ne;y&&Pn(y,!1),(ne=z.onVnodeBeforeUpdate)&&Pt(ne,y,g,d),H&&Nn(g,d,y,"beforeUpdate"),y&&Pn(y,!0);const le=E&&g.type!=="foreignObject";if(I?ae(d.dynamicChildren,I,k,y,w,le,A):N||Ee(d,g,k,null,y,w,le,A,!1),O>0){if(O&16)he(k,g,$,z,y,w,E);else if(O&2&&$.class!==z.class&&i(k,"class",null,z.class,E),O&4&&i(k,"style",$.style,z.style,E),O&8){const Se=g.dynamicProps;for(let Te=0;Te<Se.length;Te++){const Ne=Se[Te],Tt=$[Ne],dr=z[Ne];(dr!==Tt||Ne==="value")&&i(k,Ne,Tt,dr,E,d.children,y,w,P)}}O&1&&d.children!==g.children&&u(k,g.children)}else!N&&I==null&&he(k,g,$,z,y,w,E);((ne=z.onVnodeUpdated)||H)&&at(()=>{ne&&Pt(ne,y,g,d),H&&Nn(g,d,y,"updated")},w)},ae=(d,g,y,w,E,A,N)=>{for(let k=0;k<g.length;k++){const O=d[k],I=g[k],H=O.el&&(O.type===Ct||!Bn(O,I)||O.shapeFlag&70)?f(O.el):y;v(O,I,H,null,w,E,A,N,!0)}},he=(d,g,y,w,E,A,N)=>{if(y!==w){if(y!==ke)for(const k in y)!Vi(k)&&!(k in w)&&i(d,k,y[k],null,N,g.children,E,A,P);for(const k in w){if(Vi(k))continue;const O=w[k],I=y[k];O!==I&&k!=="value"&&i(d,k,I,O,N,g.children,E,A,P)}"value"in w&&i(d,"value",y.value,w.value)}},L=(d,g,y,w,E,A,N,k,O)=>{const I=g.el=d?d.el:a(""),H=g.anchor=d?d.anchor:a("");let{patchFlag:$,dynamicChildren:z,slotScopeIds:ne}=g;ne&&(k=k?k.concat(ne):ne),d==null?(r(I,y,w),r(H,y,w),U(g.children,y,H,E,A,N,k,O)):$>0&&$&64&&z&&d.dynamicChildren?(ae(d.dynamicChildren,z,y,E,A,N,k),(g.key!=null||E&&g===E.subTree)&&Il(d,g,!0)):Ee(d,g,y,H,E,A,N,k,O)},me=(d,g,y,w,E,A,N,k,O)=>{g.slotScopeIds=k,d==null?g.shapeFlag&512?E.ctx.activate(g,y,w,N,O):M(g,y,w,E,A,N,O):we(d,g,O)},M=(d,g,y,w,E,A,N)=>{const k=d.component=jw(d,w,E);if(Bo(d)&&(k.ctx.renderer=de),qw(k),k.asyncDep){if(E&&E.registerDep(k,be),!d.el){const O=k.subTree=ct(xt);T(null,O,g,y)}return}be(k,d,g,y,E,A,N)},we=(d,g,y)=>{const w=g.component=d.component;if(Jv(d,g,y))if(w.asyncDep&&!w.asyncResolved){Ie(w,g,y);return}else w.next=g,zv(w.update),w.update();else g.el=d.el,w.vnode=g},be=(d,g,y,w,E,A,N)=>{const k=()=>{if(d.isMounted){let{next:H,bu:$,u:z,parent:ne,vnode:le}=d,Se=H,Te;Pn(d,!1),H?(H.el=le.el,Ie(d,H,N)):H=le,$&&Sa($),(Te=H.props&&H.props.onVnodeBeforeUpdate)&&Pt(Te,ne,H,le),Pn(d,!0);const Ne=Ca(d),Tt=d.subTree;d.subTree=Ne,v(Tt,Ne,f(Tt.el),D(Tt),d,E,A),H.el=Ne.el,Se===null&&Zv(d,Ne.el),z&&at(z,E),(Te=H.props&&H.props.onVnodeUpdated)&&at(()=>Pt(Te,ne,H,le),E)}else{let H;const{el:$,props:z}=g,{bm:ne,m:le,parent:Se}=d,Te=Hi(g);if(Pn(d,!1),ne&&Sa(ne),!Te&&(H=z&&z.onVnodeBeforeMount)&&Pt(H,Se,g),Pn(d,!0),$&&ce){const Ne=()=>{d.subTree=Ca(d),ce($,d.subTree,d,E,null)};Te?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Ne()):Ne()}else{const Ne=d.subTree=Ca(d);v(null,Ne,y,w,d,E,A),g.el=Ne.el}if(le&&at(le,E),!Te&&(H=z&&z.onVnodeMounted)){const Ne=g;at(()=>Pt(H,Se,Ne),E)}(g.shapeFlag&256||Se&&Hi(Se.vnode)&&Se.vnode.shapeFlag&256)&&d.a&&at(d.a,E),d.isMounted=!0,g=y=w=null}},O=d.effect=new hl(k,()=>vl(I),d.scope),I=d.update=()=>O.run();I.id=d.uid,Pn(d,!0),I()},Ie=(d,g,y)=>{g.component=d;const w=d.vnode.props;d.vnode=g,d.next=null,Tw(d,g.props,w,y),Cw(d,g.children,y),Wr(),Qu(),Gr()},Ee=(d,g,y,w,E,A,N,k,O=!1)=>{const I=d&&d.children,H=d?d.shapeFlag:0,$=g.children,{patchFlag:z,shapeFlag:ne}=g;if(z>0){if(z&128){Dn(I,$,y,w,E,A,N,k,O);return}else if(z&256){bt(I,$,y,w,E,A,N,k,O);return}}ne&8?(H&16&&P(I,E,A),$!==I&&u(y,$)):H&16?ne&16?Dn(I,$,y,w,E,A,N,k,O):P(I,E,A,!0):(H&8&&u(y,""),ne&16&&U($,y,w,E,A,N,k,O))},bt=(d,g,y,w,E,A,N,k,O)=>{d=d||Ir,g=g||Ir;const I=d.length,H=g.length,$=Math.min(I,H);let z;for(z=0;z<$;z++){const ne=g[z]=O?dn(g[z]):Mt(g[z]);v(d[z],ne,y,null,E,A,N,k,O)}I>H?P(d,E,A,!0,!1,$):U(g,y,w,E,A,N,k,O,$)},Dn=(d,g,y,w,E,A,N,k,O)=>{let I=0;const H=g.length;let $=d.length-1,z=H-1;for(;I<=$&&I<=z;){const ne=d[I],le=g[I]=O?dn(g[I]):Mt(g[I]);if(Bn(ne,le))v(ne,le,y,null,E,A,N,k,O);else break;I++}for(;I<=$&&I<=z;){const ne=d[$],le=g[z]=O?dn(g[z]):Mt(g[z]);if(Bn(ne,le))v(ne,le,y,null,E,A,N,k,O);else break;$--,z--}if(I>$){if(I<=z){const ne=z+1,le=ne<H?g[ne].el:w;for(;I<=z;)v(null,g[I]=O?dn(g[I]):Mt(g[I]),y,le,E,A,N,k,O),I++}}else if(I>z)for(;I<=$;)ot(d[I],E,A,!0),I++;else{const ne=I,le=I,Se=new Map;for(I=le;I<=z;I++){const lt=g[I]=O?dn(g[I]):Mt(g[I]);lt.key!=null&&Se.set(lt.key,I)}let Te,Ne=0;const Tt=z-le+1;let dr=!1,Fu=0;const rs=new Array(Tt);for(I=0;I<Tt;I++)rs[I]=0;for(I=ne;I<=$;I++){const lt=d[I];if(Ne>=Tt){ot(lt,E,A,!0);continue}let Nt;if(lt.key!=null)Nt=Se.get(lt.key);else for(Te=le;Te<=z;Te++)if(rs[Te-le]===0&&Bn(lt,g[Te])){Nt=Te;break}Nt===void 0?ot(lt,E,A,!0):(rs[Nt-le]=I+1,Nt>=Fu?Fu=Nt:dr=!0,v(lt,g[Nt],y,null,E,A,N,k,O),Ne++)}const Uu=dr?xw(rs):Ir;for(Te=Uu.length-1,I=Tt-1;I>=0;I--){const lt=le+I,Nt=g[lt],$u=lt+1<H?g[lt+1].el:w;rs[I]===0?v(null,Nt,y,$u,E,A,N,k,O):dr&&(Te<0||I!==Uu[Te]?Et(Nt,y,$u,2):Te--)}}},Et=(d,g,y,w,E=null)=>{const{el:A,type:N,transition:k,children:O,shapeFlag:I}=d;if(I&6){Et(d.component.subTree,g,y,w);return}if(I&128){d.suspense.move(g,y,w);return}if(I&64){N.move(d,g,y,de);return}if(N===Ct){r(A,g,y);for(let $=0;$<O.length;$++)Et(O[$],g,y,w);r(d.anchor,g,y);return}if(N===Ra){x(d,g,y);return}if(w!==2&&I&1&&k)if(w===0)k.beforeEnter(A),r(A,g,y),at(()=>k.enter(A),E);else{const{leave:$,delayLeave:z,afterLeave:ne}=k,le=()=>r(A,g,y),Se=()=>{$(A,()=>{le(),ne&&ne()})};z?z(A,le,Se):Se()}else r(A,g,y)},ot=(d,g,y,w=!1,E=!1)=>{const{type:A,props:N,ref:k,children:O,dynamicChildren:I,shapeFlag:H,patchFlag:$,dirs:z}=d;if(k!=null&&pc(k,null,y,d,!0),H&256){g.ctx.deactivate(d);return}const ne=H&1&&z,le=!Hi(d);let Se;if(le&&(Se=N&&N.onVnodeBeforeUnmount)&&Pt(Se,g,d),H&6)b(d.component,y,w);else{if(H&128){d.suspense.unmount(y,w);return}ne&&Nn(d,null,g,"beforeUnmount"),H&64?d.type.remove(d,g,y,E,de,w):I&&(A!==Ct||$>0&&$&64)?P(I,g,y,!1,!0):(A===Ct&&$&384||!E&&H&16)&&P(O,g,y),w&&fr(d)}(le&&(Se=N&&N.onVnodeUnmounted)||ne)&&at(()=>{Se&&Pt(Se,g,d),ne&&Nn(d,null,g,"unmounted")},y)},fr=d=>{const{type:g,el:y,anchor:w,transition:E}=d;if(g===Ct){Ci(y,w);return}if(g===Ra){V(d);return}const A=()=>{s(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:N,delayLeave:k}=E,O=()=>N(y,A);k?k(d.el,A,O):O()}else A()},Ci=(d,g)=>{let y;for(;d!==g;)y=h(d),s(d),d=y;s(g)},b=(d,g,y)=>{const{bum:w,scope:E,update:A,subTree:N,um:k}=d;w&&Sa(w),E.stop(),A&&(A.active=!1,ot(N,d,g,y)),k&&at(k,g),at(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},P=(d,g,y,w=!1,E=!1,A=0)=>{for(let N=A;N<d.length;N++)ot(d[N],g,y,w,E)},D=d=>d.shapeFlag&6?D(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),q=(d,g,y)=>{d==null?g._vnode&&ot(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,y),Qu(),Bd(),g._vnode=d},de={p:v,um:ot,m:Et,r:fr,mt:M,mc:U,pc:Ee,pbc:ae,n:D,o:t};let Oe,ce;return e&&([Oe,ce]=e(de)),{render:q,hydrate:Oe,createApp:Aw(q,Oe)}}function Pn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Il(t,e,n=!1){const r=t.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=dn(s[i]),a.el=o.el),n||Il(o,a)),a.type===jo&&(a.el=o.el)}}function xw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Dw=t=>t.__isTeleport,ms=t=>t&&(t.disabled||t.disabled===""),ih=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,gc=(t,e)=>{const n=t&&t.to;return Me(n)?e?e(n):null:n},Nw={__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:h,o:{insert:p,querySelector:m,createText:v,createComment:_}}=l,T=ms(e.props);let{shapeFlag:R,children:x,dynamicChildren:V}=e;if(t==null){const F=e.el=v(""),ee=e.anchor=v("");p(F,n,r),p(ee,n,r);const se=e.target=gc(e.props,m),U=e.targetAnchor=v("");se&&(p(U,se),o=o||ih(se));const te=(ae,he)=>{R&16&&u(x,ae,he,s,i,o,a,c)};T?te(n,ee):se&&te(se,U)}else{e.el=t.el;const F=e.anchor=t.anchor,ee=e.target=t.target,se=e.targetAnchor=t.targetAnchor,U=ms(t.props),te=U?n:ee,ae=U?F:se;if(o=o||ih(ee),V?(h(t.dynamicChildren,V,te,s,i,o,a),Il(t,e,!0)):c||f(t,e,te,ae,s,i,o,a,!1),T)U||Ni(e,n,F,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const he=e.target=gc(e.props,m);he&&Ni(e,he,null,l,0)}else U&&Ni(e,ee,se,l,1)}ap(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:h}=t;if(f&&i(u),(o||!ms(h))&&(i(l),a&16))for(let p=0;p<c.length;p++){const m=c[p];s(m,e,n,!0,!!m.dynamicChildren)}},move:Ni,hydrate:Pw};function Ni(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,f=i===2;if(f&&r(o,e,n),(!f||ms(u))&&c&16)for(let h=0;h<l.length;h++)s(l[h],e,n,2);f&&r(a,e,n)}function Pw(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=gc(e.props,c);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(ms(e.props))e.anchor=l(o(t),e,a(t),n,r,s,i),e.targetAnchor=f;else{e.anchor=o(t);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(f,e,u,n,r,s,i)}ap(e)}return e.anchor&&o(e.anchor)}const QR=Nw;function ap(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ct=Symbol(void 0),jo=Symbol(void 0),xt=Symbol(void 0),Ra=Symbol(void 0),ys=[];let At=null;function cp(t=!1){ys.push(At=t?null:[])}function Lw(){ys.pop(),At=ys[ys.length-1]||null}let Ds=1;function oh(t){Ds+=t}function lp(t){return t.dynamicChildren=Ds>0?At||Ir:null,Lw(),Ds>0&&At&&At.push(t),t}function YR(t,e,n,r,s,i){return lp(fp(t,e,n,r,s,i,!0))}function up(t,e,n,r,s){return lp(ct(t,e,n,r,s,!0))}function mc(t){return t?t.__v_isVNode===!0:!1}function Bn(t,e){return t.type===e.type&&t.key===e.key}const qo="__vInternal",hp=({key:t})=>t!=null?t:null,zi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Me(t)||Ze(t)||oe(t)?{i:ut,r:t,k:e,f:!!n}:t:null;function fp(t,e=null,n=null,r=0,s=null,i=t===Ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hp(e),ref:e&&zi(e),scopeId:$o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ut};return a?(Sl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Me(n)?8:16),Ds>0&&!o&&At&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&At.push(c),c}const ct=Mw;function Mw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===pw)&&(t=xt),mc(t)){const a=Cn(t,e,!0);return n&&Sl(a,n),Ds>0&&!i&&At&&(a.shapeFlag&6?At[At.indexOf(t)]=a:At.push(a)),a.patchFlag|=-2,a}if(Gw(t)&&(t=t.__vccOpts),e){e=Fw(e);let{class:a,style:c}=e;a&&!Me(a)&&(e.class=sl(a)),Ae(c)&&(xd(c)&&!Z(c)&&(c=qe({},c)),e.style=rl(c))}const o=Me(t)?1:ew(t)?128:Dw(t)?64:Ae(t)?4:oe(t)?2:0;return fp(t,e,n,r,s,o,i,!0)}function Fw(t){return t?xd(t)||qo in t?qe({},t):t:null}function Cn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?$w(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hp(a),ref:e&&e.ref?n&&s?Z(s)?s.concat(zi(e)):[s,zi(e)]:zi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Uw(t=" ",e=0){return ct(jo,null,t,e)}function XR(t="",e=!1){return e?(cp(),up(xt,null,t)):ct(xt,null,t)}function Mt(t){return t==null||typeof t=="boolean"?ct(xt):Z(t)?ct(Ct,null,t.slice()):typeof t=="object"?dn(t):ct(jo,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cn(t)}function Sl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(qo in e)?e._ctx=ut:s===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),r&64?(n=16,e=[Uw(e)]):n=8);t.children=e,t.shapeFlag|=n}function $w(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sl([e.class,r.class]));else if(s==="style")e.style=rl([e.style,r.style]);else if(Do(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pt(t,e,n,r=null){yt(t,e,7,[n,r])}const Bw=op();let Vw=0;function jw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Bw,i={uid:Vw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(r,s),emitsOptions:jd(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gv.bind(null,i),t.ce&&t.ce(i),i}let je=null;const ei=()=>je||ut,Pr=t=>{je=t,t.scope.on()},Qn=()=>{je&&je.scope.off(),je=null};function dp(t){return t.vnode.shapeFlag&4}let Ns=!1;function qw(t,e=!1){Ns=e;const{props:n,children:r}=t.vnode,s=dp(t);Ew(t,n,s,e),Sw(t,r);const i=s?Hw(t,e):void 0;return Ns=!1,i}function Hw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cr(new Proxy(t.ctx,mw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Kw(t):null;Pr(t),Wr();const i=_n(r,t,0,[t.props,s]);if(Gr(),Qn(),md(i)){if(i.then(Qn,Qn),e)return i.then(o=>{ah(t,o,e)}).catch(o=>{Fo(o,t,0)});t.asyncDep=i}else ah(t,i,e)}else pp(t,e)}function ah(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=Ld(e)),pp(t,n)}let ch;function pp(t,e,n){const r=t.type;if(!t.render){if(!e&&ch&&!r.render){const s=r.template||El(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=qe(qe({isCustomElement:i,delimiters:a},o),c);r.render=ch(s,l)}}t.render=r.render||Ot}Pr(t),Wr(),yw(t),Gr(),Qn()}function zw(t){return new Proxy(t.attrs,{get(e,n){return ht(t,"get","$attrs"),e[n]}})}function Kw(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=zw(t))},slots:t.slots,emit:t.emit,expose:e}}function Ho(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ld(cr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}}))}function Ww(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function Gw(t){return oe(t)&&"__vccOpts"in t}const Y=(t,e)=>jv(t,e,Ns);function Q(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!Z(e)?mc(e)?ct(t,null,[e]):ct(t,e):ct(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mc(n)&&(n=[n]),ct(t,e,n))}const Qw=Symbol(""),Yw=()=>$t(Qw),Xw="3.2.45",Jw="http://www.w3.org/2000/svg",Vn=typeof document!="undefined"?document:null,lh=Vn&&Vn.createElement("template"),Zw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Vn.createElementNS(Jw,t):Vn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Vn.createTextNode(t),createComment:t=>Vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{lh.innerHTML=r?`<svg>${t}</svg>`:t;const a=lh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function e_(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function t_(t,e,n){const r=t.style,s=Me(n);if(n&&!s){for(const i in n)yc(r,i,n[i]);if(e&&!Me(e))for(const i in e)n[i]==null&&yc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const uh=/\s*!important$/;function yc(t,e,n){if(Z(n))n.forEach(r=>yc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=n_(t,e);uh.test(n)?t.setProperty(Kr(r),n.replace(uh,""),"important"):t[r]=n}}const hh=["Webkit","Moz","ms"],Oa={};function n_(t,e){const n=Oa[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return Oa[e]=r;r=Lo(r);for(let s=0;s<hh.length;s++){const i=hh[s]+r;if(i in t)return Oa[e]=i}return e}const fh="http://www.w3.org/1999/xlink";function r_(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fh,e.slice(6,e.length)):t.setAttributeNS(fh,e,n);else{const i=nv(e);n==null||i&&!dd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function s_(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=dd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function i_(t,e,n,r){t.addEventListener(e,n,r)}function o_(t,e,n,r){t.removeEventListener(e,n,r)}function a_(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=c_(e);if(r){const l=i[e]=h_(r,s);i_(t,a,l,c)}else o&&(o_(t,a,o,c),i[e]=void 0)}}const dh=/(?:Once|Passive|Capture)$/;function c_(t){let e;if(dh.test(t)){e={};let r;for(;r=t.match(dh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let xa=0;const l_=Promise.resolve(),u_=()=>xa||(l_.then(()=>xa=0),xa=Date.now());function h_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;yt(f_(r,n.value),e,5,[r])};return n.value=t,n.attached=u_(),n}function f_(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ph=/^on[a-z]/,d_=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?e_(t,r,s):e==="style"?t_(t,n,r):Do(e)?il(e)||a_(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):p_(t,e,r,s))?s_(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),r_(t,e,r,s))};function p_(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ph.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ph.test(e)&&Me(n)?!1:e in t}const ln="transition",ss="animation",Cl=(t,{slots:e})=>Q(Kd,mp(t),e);Cl.displayName="Transition";const gp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g_=Cl.props=qe({},Kd.props,gp),Ln=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},gh=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function mp(t){const e={};for(const L in t)L in gp||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=m_(s),v=m&&m[0],_=m&&m[1],{onBeforeEnter:T,onEnter:R,onEnterCancelled:x,onLeave:V,onLeaveCancelled:F,onBeforeAppear:ee=T,onAppear:se=R,onAppearCancelled:U=x}=e,te=(L,me,M)=>{fn(L,me?u:a),fn(L,me?l:o),M&&M()},ae=(L,me)=>{L._isLeaving=!1,fn(L,f),fn(L,p),fn(L,h),me&&me()},he=L=>(me,M)=>{const we=L?se:R,be=()=>te(me,L,M);Ln(we,[me,be]),mh(()=>{fn(me,L?c:i),Wt(me,L?u:a),gh(we)||yh(me,r,v,be)})};return qe(e,{onBeforeEnter(L){Ln(T,[L]),Wt(L,i),Wt(L,o)},onBeforeAppear(L){Ln(ee,[L]),Wt(L,c),Wt(L,l)},onEnter:he(!1),onAppear:he(!0),onLeave(L,me){L._isLeaving=!0;const M=()=>ae(L,me);Wt(L,f),vp(),Wt(L,h),mh(()=>{!L._isLeaving||(fn(L,f),Wt(L,p),gh(V)||yh(L,r,_,M))}),Ln(V,[L,M])},onEnterCancelled(L){te(L,!1),Ln(x,[L])},onAppearCancelled(L){te(L,!0),Ln(U,[L])},onLeaveCancelled(L){ae(L),Ln(F,[L])}})}function m_(t){if(t==null)return null;if(Ae(t))return[Da(t.enter),Da(t.leave)];{const e=Da(t);return[e,e]}}function Da(t){return ll(t)}function Wt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function fn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function mh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let y_=0;function yh(t,e,n,r){const s=t._endId=++y_,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=yp(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),i()},h=p=>{p.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function yp(t,e){const n=window.getComputedStyle(t),r=m=>(n[m]||"").split(", "),s=r(`${ln}Delay`),i=r(`${ln}Duration`),o=vh(s,i),a=r(`${ss}Delay`),c=r(`${ss}Duration`),l=vh(a,c);let u=null,f=0,h=0;e===ln?o>0&&(u=ln,f=o,h=i.length):e===ss?l>0&&(u=ss,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?ln:ss:null,h=u?u===ln?i.length:c.length:0);const p=u===ln&&/\b(transform|all)(,|$)/.test(r(`${ln}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function vh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>wh(n)+wh(t[r])))}function wh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function vp(){return document.body.offsetHeight}const wp=new WeakMap,_p=new WeakMap,v_={name:"TransitionGroup",props:qe({},g_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ei(),r=zd();let s,i;return Yd(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!T_(s[0].el,n.vnode.el,o))return;s.forEach(__),s.forEach(b_);const a=s.filter(E_);vp(),a.forEach(c=>{const l=c.el,u=l.style;Wt(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",f),l._moveCb=null,fn(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=ge(t),a=mp(o);let c=o.tag||Ct;s=i,i=e.default?wl(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&xs(u,Os(u,a,r,n))}if(s)for(let l=0;l<s.length;l++){const u=s[l];xs(u,Os(u,a,r,n)),wp.set(u,u.el.getBoundingClientRect())}return ct(c,null,i)}}},w_=v_;function __(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function b_(t){_p.set(t,t.el.getBoundingClientRect())}function E_(t){const e=wp.get(t),n=_p.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function T_(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=yp(r);return s.removeChild(r),i}const I_=["ctrl","shift","alt","meta"],S_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>I_.some(n=>t[`${n}Key`]&&!e.includes(n))},JR=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=S_[e[s]];if(i&&i(n,e))return}return t(n,...r)},C_=qe({patchProp:d_},Zw);let _h;function k_(){return _h||(_h=Rw(C_))}const bp=(...t)=>{const e=k_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=A_(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function A_(t){return Me(t)?document.querySelector(t):t}function kl(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const Zn=Nr(!1);let zo;function R_(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function O_(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const Ep="ontouchstart"in window||window.navigator.maxTouchPoints>0;function x_(t){zo={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function D_(t){const e=t.toLowerCase(),n=O_(e),r=R_(e,n),s={};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];return i===!0||e.indexOf("mobile")>-1?(s.mobile=!0,s.edga||s.edgios?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox")):s.desktop=!0,(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.edg&&(r.browser="edgechromium",s.edgeChromium=!0),(s.safari&&s.blackberry||s.bb)&&(r.browser="blackberry",s.blackberry=!0),s.safari&&s.playbook&&(r.browser="playbook",s.playbook=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&s.android&&(r.browser="android",s.android=!0),s.safari&&s.kindle&&(r.browser="kindle",s.kindle=!0),s.safari&&s.silk&&(r.browser="silk",s.silk=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),s.name=r.browser,s.platform=r.platform,e.indexOf("electron")>-1?s.electron=!0:document.location.href.indexOf("-extension://")>-1?s.bex=!0:(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),Ep===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)&&x_(s)),s}const bh=navigator.userAgent||navigator.vendor||window.opera,N_={has:{touch:!1,webStorage:!1},within:{iframe:!1}},mt={userAgent:bh,is:D_(bh),has:{touch:Ep},within:{iframe:window.self!==window.top}},vc={install(t){const{$q:e}=t;Zn.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,mt),Zn.value=!1,zo=void 0}),e.platform=ar(this)):e.platform=this}};{let t;kl(mt.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),mt.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),Zn.value===!0?Object.assign(vc,mt,zo,N_):Object.assign(vc,mt)}var Ko=(t,e)=>{const n=ar(t);for(const r in t)kl(e,r,()=>n[r],s=>{n[r]=s});return e};const er={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(er,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function Ps(){}function ZR(t){return t.button===0}function P_(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function eO(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function Tp(t){t.stopPropagation()}function wc(t){t.cancelable!==!1&&t.preventDefault()}function pr(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function tO(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",wc,er.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",wc,er.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function L_(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],t[s[2]],er[s[3]])})}function M_(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],er[r[3]])}),t[n]=void 0)}function F_(t,e=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,n!==!0&&t.apply(this,i)};r!==null?clearTimeout(r):n===!0&&t.apply(this,i),r=setTimeout(o,e)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const Na=["sm","md","lg","xl"],{passive:Eh}=er;var U_=Ko({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Ps,setDebounce:Ps,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||mt.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=f=>{const[h,p]=i();if(p!==this.height&&(this.height=p),h!==this.width)this.width=h;else if(f!==!0)return;let m=this.sizes;this.gt.xs=h>=m.sm,this.gt.sm=h>=m.md,this.gt.md=h>=m.lg,this.gt.lg=h>=m.xl,this.lt.sm=h<m.sm,this.lt.md=h<m.md,this.lt.lg=h<m.lg,this.lt.xl=h<m.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,m=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",m!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${m}`)),this.name=m)};let a,c={},l=16;this.setSizes=f=>{Na.forEach(h=>{f[h]!==void 0&&(c[h]=f[h])})},this.setDebounce=f=>{l=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&Na.forEach(h=>{this.sizes[h]=parseInt(f.getPropertyValue(`--q-size-${h}`),10)}),this.setSizes=h=>{Na.forEach(p=>{h[p]&&(this.sizes[p]=h[p])}),this.__update(!0)},this.setDebounce=h=>{a!==void 0&&r.removeEventListener("resize",a,Eh),a=h>0?F_(this.__update,h):this.__update,r.addEventListener("resize",a,Eh)},this.setDebounce(l),Object.keys(c).length>0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Zn.value===!0?e.push(u):u()}});const Ge=Ko({isActive:!1,mode:!1},{__media:void 0,set(t){Ge.mode=t,t==="auto"?(Ge.__media===void 0&&(Ge.__media=window.matchMedia("(prefers-color-scheme: dark)"),Ge.__updateMedia=()=>{Ge.set("auto")},Ge.__media.addListener(Ge.__updateMedia)),t=Ge.__media.matches):Ge.__media!==void 0&&(Ge.__media.removeListener(Ge.__updateMedia),Ge.__media=void 0),Ge.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){Ge.set(Ge.isActive===!1)},install({$q:t,onSSRHydrated:e,ssrContext:n}){const{dark:r}=t.config;if(t.dark=this,this.__installed===!0&&r===void 0)return;this.isActive=r===!0;const s=r!==void 0?r:!1;if(Zn.value===!0){const i=a=>{this.__fromSSR=a},o=this.set;this.set=i,i(s),e.push(()=>{this.set=o,this.set(this.__fromSSR)})}else this.set(s)}}),Ip=()=>!0;function $_(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function B_(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function V_(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return Ip;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter($_).map(B_)),()=>e.includes(window.location.hash)}var j_={__history:[],add:Ps,remove:Ps,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=mt.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Ip),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const s=V_(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},_c={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Th(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const It=Ko({__langPack:{}},{getLocale:Th,set(t=_c,e){const n={...t,rtl:t.rtl===!0,getLocale:Th};{if(n.set=It.set,It.__langConfig===void 0||It.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(It.__langPack,n),It.props=n,It.isoName=n.isoName,It.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=It.__langPack,It.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||_c)}});function q_(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let Sp=!1;function H_(t){Sp=t.isComposing===!0}function z_(t){return Sp===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function bc(t,e){return z_(t)===!0?!1:[].concat(e).includes(t.keyCode)}function Cp(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function K_({is:t,has:e,within:n},r){const s=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const i=Cp(t);i!==void 0&&s.push("platform-"+i)}if(t.nativeMobile===!0){const i=t.nativeMobileWrapper;s.push(i),s.push("native-mobile"),t.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else t.electron===!0?s.push("electron"):t.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function W_(){const{is:t}=mt,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(zo!==void 0)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile");const s=Cp(t);s!==void 0?(n.add(`platform-${s}`),n.delete(`platform-${s==="ios"?"android":"ios"}`)):(n.delete("platform-ios"),n.delete("platform-android"))}}mt.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),mt.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function G_(t){for(const e in t)q_(e,t[e])}var Q_={install(t){if(this.__installed!==!0){if(Zn.value===!0)W_();else{const{$q:e}=t;e.config.brand!==void 0&&G_(e.config.brand);const n=K_(mt,e.config);document.body.classList.add.apply(document.body.classList,n)}mt.is.ios===!0&&document.body.addEventListener("touchstart",Ps),window.addEventListener("keydown",H_,!0)}}},Y_={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const io=Ko({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=io.set,Object.assign(io.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,kl(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||Y_)}}),X_="_q_",nO="_q_l_",rO="_q_pc_",sO="_q_fo_",iO="_q_tabs_",oO=()=>{},oo={};let kp=!1;function J_(){kp=!0}function Pa(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(Pa(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let i=t.entries();for(r=i.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=i.next()}for(i=t.entries(),r=i.next();r.done!==!0;){if(Pa(r.value[1],e.get(r.value[0]))!==!0)return!1;r=i.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const i=t.entries();for(r=i.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=i.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const s=Object.keys(t).filter(i=>t[i]!==void 0);if(n=s.length,n!==Object.keys(e).filter(i=>e[i]!==void 0).length)return!1;for(r=n;r--!==0;){const i=s[r];if(Pa(t[i],e[i])!==!0)return!1}return!0}return t!==t&&e!==e}function Ls(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}const Ih=[vc,Q_,Ge,U_,j_,It,io];function Z_(t,e){const n=bp(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...s}=e._context;return Object.assign(n._context,s),n}function Sh(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function eb(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(X_,n.$q),Sh(n,Ih),e.components!==void 0&&Object.values(e.components).forEach(r=>{Ls(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{Ls(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&Sh(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&Ih.includes(r)===!1)),Zn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var tb=function(t,e={}){const n={version:"2.11.5"};kp===!1?(e.config!==void 0&&Object.assign(oo,e.config),n.config={...oo},J_()):n.config=e.config||{},eb(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},nb={version:"2.11.5",install:tb,lang:It,iconSet:io},rb=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const sb={};function ib(t,e){const n=dw("router-view");return cp(),up(n)}var ob=rb(sb,[["render",ib]]);function aO(t){return t}var ab=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const cb=Symbol();var Ch;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ch||(Ch={}));function lb(){const t=uv(!0),e=t.run(()=>Nr({}));let n=[],r=[];const s=cr({install(i){s._a=i,i.provide(cb,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!ab?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}var La=()=>lb();/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const wr=typeof window!="undefined";function ub(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function Ma(t,e){const n={};for(const r in e){const s=e[r];n[r]=Dt(s)?s.map(t):t(s)}return n}const vs=()=>{},Dt=Array.isArray,hb=/\/$/,fb=t=>t.replace(hb,"");function Fa(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=mb(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function db(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Lr(e.matched[r],n.matched[s])&&Ap(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Lr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ap(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gb(t[n],e[n]))return!1;return!0}function gb(t,e){return Dt(t)?Ah(t,e):Dt(e)?Ah(e,t):t===e}function Ah(t,e){return Dt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ms;(function(t){t.pop="pop",t.push="push"})(Ms||(Ms={}));var ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ws||(ws={}));function yb(t){if(!t)if(wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fb(t)}const vb=/^[^#]+#/;function wb(t,e){return t.replace(vb,"#")+e}function _b(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Wo=()=>({left:window.pageXOffset,top:window.pageYOffset});function bb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=_b(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Rh(t,e){return(history.state?history.state.position-e:-1)+t}const Ec=new Map;function Eb(t,e){Ec.set(t,e)}function Tb(t){const e=Ec.get(t);return Ec.delete(t),e}let Ib=()=>location.protocol+"//"+location.host;function Rp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),kh(c,"")}return kh(n,t)+r+s}function Sb(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const p=Rp(t,location),m=n.value,v=e.value;let _=0;if(h){if(n.value=p,e.value=h,o&&o===m){o=null;return}_=v?h.position-v.position:0}else r(p);s.forEach(T=>{T(n.value,m,{delta:_,type:Ms.pop,direction:_?_>0?ws.forward:ws.back:ws.unknown})})};function c(){o=n.value}function l(h){s.push(h);const p=()=>{const m=s.indexOf(h);m>-1&&s.splice(m,1)};return i.push(p),p}function u(){const{history:h}=window;!h.state||h.replaceState(_e({},h.state,{scroll:Wo()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function Oh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Wo():null}}function Cb(t){const{history:e,location:n}=window,r={value:Rp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Ib()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(c,l){const u=_e({},e.state,Oh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=_e({},s.value,e.state,{forward:c,scroll:Wo()});i(u.current,u,!0);const f=_e({},Oh(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function kb(t){t=yb(t);const e=Cb(t),n=Sb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:wb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ab(t){return typeof t=="string"||t&&typeof t=="object"}function Op(t){return typeof t=="string"||typeof t=="symbol"}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xp=Symbol("");var xh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xh||(xh={}));function Mr(t,e){return _e(new Error,{type:t,[xp]:!0},e)}function Kt(t,e){return t instanceof Error&&xp in t&&(e==null||!!(t.type&e))}const Dh="[^/]+?",Rb={sensitive:!1,strict:!1,start:!0,end:!0},Ob=/[.+*?^${}()[\]/\\]/g;function xb(t,e){const n=_e({},Rb,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Ob,"\\$&"),p+=40;else if(h.type===1){const{value:m,repeatable:v,optional:_,regexp:T}=h;i.push({name:m,repeatable:v,optional:_});const R=T||Dh;if(R!==Dh){p+=10;try{new RegExp(`(${R})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${m}" (${R}): `+V.message)}}let x=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(x=_&&l.length<2?`(?:/${x})`:"/"+x),_&&(x+="?"),s+=x,p+=20,_&&(p+=-8),v&&(p+=-20),R===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",m=i[h-1];f[m.name]=p&&m.repeatable?p.split("/"):p}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:v,optional:_}=p,T=m in l?l[m]:"";if(Dt(T)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const R=Dt(T)?T.join("/"):T;if(!R)if(_)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Db(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Nb(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Db(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Nh(r))return 1;if(Nh(s))return-1}return s.length-r.length}function Nh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pb={type:0,value:""},Lb=/[a-zA-Z0-9_]/;function Mb(t){if(!t)return[[]];if(t==="/")return[[Pb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Lb.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Fb(t,e,n){const r=xb(Mb(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ub(t,e){const n=[],r=new Map;e=Mh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,h){const p=!h,m=$b(u);m.aliasOf=h&&h.record;const v=Mh(e,u),_=[m];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of x)_.push(_e({},m,{components:h?h.record.components:m.components,path:V,aliasOf:h?h.record:m}))}let T,R;for(const x of _){const{path:V}=x;if(f&&V[0]!=="/"){const F=f.record.path,ee=F[F.length-1]==="/"?"":"/";x.path=f.record.path+(V&&ee+V)}if(T=Fb(x,f,v),h?h.alias.push(T):(R=R||T,R!==T&&R.alias.push(T),p&&u.name&&!Lh(T)&&o(u.name)),m.children){const F=m.children;for(let ee=0;ee<F.length;ee++)i(F[ee],T,h&&h.children[ee])}h=h||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return R?()=>{o(R)}:vs}function o(u){if(Op(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&Nb(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Dp(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Lh(u)&&r.set(u.record.name,u)}function l(u,f){let h,p={},m,v;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Mr(1,{location:u});v=h.record.name,p=_e(Ph(f.params,h.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&Ph(u.params,h.keys.map(R=>R.name))),m=h.stringify(p)}else if("path"in u)m=u.path,h=n.find(R=>R.re.test(m)),h&&(p=h.parse(m),v=h.record.name);else{if(h=f.name?r.get(f.name):n.find(R=>R.re.test(f.path)),!h)throw Mr(1,{location:u,currentLocation:f});v=h.record.name,p=_e({},f.params,u.params),m=h.stringify(p)}const _=[];let T=h;for(;T;)_.unshift(T.record),T=T.parent;return{name:v,path:m,params:p,matched:_,meta:Vb(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ph(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function $b(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Bb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Bb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Lh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vb(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function Mh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Dp(t,e){return e.children.some(n=>n===t||Dp(t,n))}const Np=/#/g,jb=/&/g,qb=/\//g,Hb=/=/g,zb=/\?/g,Pp=/\+/g,Kb=/%5B/g,Wb=/%5D/g,Lp=/%5E/g,Gb=/%60/g,Mp=/%7B/g,Qb=/%7C/g,Fp=/%7D/g,Yb=/%20/g;function Al(t){return encodeURI(""+t).replace(Qb,"|").replace(Kb,"[").replace(Wb,"]")}function Xb(t){return Al(t).replace(Mp,"{").replace(Fp,"}").replace(Lp,"^")}function Tc(t){return Al(t).replace(Pp,"%2B").replace(Yb,"+").replace(Np,"%23").replace(jb,"%26").replace(Gb,"`").replace(Mp,"{").replace(Fp,"}").replace(Lp,"^")}function Jb(t){return Tc(t).replace(Hb,"%3D")}function Zb(t){return Al(t).replace(Np,"%23").replace(zb,"%3F")}function eE(t){return t==null?"":Zb(t).replace(qb,"%2F")}function ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function tE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Pp," "),o=i.indexOf("="),a=ao(o<0?i:i.slice(0,o)),c=o<0?null:ao(i.slice(o+1));if(a in e){let l=e[a];Dt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Fh(t){let e="";for(let n in t){const r=t[n];if(n=Jb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dt(r)?r.map(i=>i&&Tc(i)):[r&&Tc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Dt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rE=Symbol(""),Uh=Symbol(""),Go=Symbol(""),Up=Symbol(""),Ic=Symbol("");function is(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function pn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Mr(4,{from:n,to:e})):f instanceof Error?a(f):Ab(f)?a(Mr(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Ua(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(sE(a)){const l=(a.__vccOpts||a)[e];l&&s.push(pn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ub(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&pn(h,n,r,i,o)()}))}}return s}function sE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $h(t){const e=$t(Go),n=$t(Up),r=Y(()=>e.resolve(Gn(t.to))),s=Y(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Lr.bind(null,u));if(h>-1)return h;const p=Bh(c[l-2]);return l>1&&Bh(u)===p&&f[f.length-1].path!==p?f.findIndex(Lr.bind(null,c[l-2])):h}),i=Y(()=>s.value>-1&&cE(n.params,r.value.params)),o=Y(()=>s.value>-1&&s.value===n.matched.length-1&&Ap(n.params,r.value.params));function a(c={}){return aE(c)?e[Gn(t.replace)?"replace":"push"](Gn(t.to)).catch(vs):Promise.resolve()}return{route:r,href:Y(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const iE=_l({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$h,setup(t,{slots:e}){const n=ar($h(t)),{options:r}=$t(Go),s=Y(()=>({[Vh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Q("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),oE=iE;function aE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Dt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vh=(t,e,n)=>t!=null?t:e!=null?e:n,lE=_l({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$t(Ic),s=Y(()=>t.route||r.value),i=$t(Uh,0),o=Y(()=>{let l=Gn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Y(()=>s.value.matched[o.value]);ji(Uh,Y(()=>o.value+1)),ji(rE,a),ji(Ic,s);const c=Nr();return qi(()=>[c.value,a.value,t.name],([l,u,f],[h,p,m])=>{u&&(u.instances[f]=l,p&&p!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Lr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return jh(n.default,{Component:h,route:l});const p=f.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,_=Q(h,_e({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return jh(n.default,{Component:_,route:l})||_}}});function jh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uE=lE;function hE(t){const e=Ub(t.routes,t),n=t.parseQuery||tE,r=t.stringifyQuery||Fh,s=t.history,i=is(),o=is(),a=is(),c=Uv(un);let l=un;wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ma.bind(null,b=>""+b),f=Ma.bind(null,eE),h=Ma.bind(null,ao);function p(b,P){let D,q;return Op(b)?(D=e.getRecordMatcher(b),q=P):q=b,e.addRoute(q,D)}function m(b){const P=e.getRecordMatcher(b);P&&e.removeRoute(P)}function v(){return e.getRoutes().map(b=>b.record)}function _(b){return!!e.getRecordMatcher(b)}function T(b,P){if(P=_e({},P||c.value),typeof b=="string"){const d=Fa(n,b,P.path),g=e.resolve({path:d.path},P),y=s.createHref(d.fullPath);return _e(d,g,{params:h(g.params),hash:ao(d.hash),redirectedFrom:void 0,href:y})}let D;if("path"in b)D=_e({},b,{path:Fa(n,b.path,P.path).path});else{const d=_e({},b.params);for(const g in d)d[g]==null&&delete d[g];D=_e({},b,{params:f(b.params)}),P.params=f(P.params)}const q=e.resolve(D,P),de=b.hash||"";q.params=u(h(q.params));const Oe=db(r,_e({},b,{hash:Xb(de),path:q.path})),ce=s.createHref(Oe);return _e({fullPath:Oe,hash:de,query:r===Fh?nE(b.query):b.query||{}},q,{redirectedFrom:void 0,href:ce})}function R(b){return typeof b=="string"?Fa(n,b,c.value.path):_e({},b)}function x(b,P){if(l!==b)return Mr(8,{from:P,to:b})}function V(b){return se(b)}function F(b){return V(_e(R(b),{replace:!0}))}function ee(b){const P=b.matched[b.matched.length-1];if(P&&P.redirect){const{redirect:D}=P;let q=typeof D=="function"?D(b):D;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=R(q):{path:q},q.params={}),_e({query:b.query,hash:b.hash,params:"path"in q?{}:b.params},q)}}function se(b,P){const D=l=T(b),q=c.value,de=b.state,Oe=b.force,ce=b.replace===!0,d=ee(D);if(d)return se(_e(R(d),{state:typeof d=="object"?_e({},de,d.state):de,force:Oe,replace:ce}),P||D);const g=D;g.redirectedFrom=P;let y;return!Oe&&pb(r,q,D)&&(y=Mr(16,{to:g,from:q}),Dn(q,q,!0,!1)),(y?Promise.resolve(y):te(g,q)).catch(w=>Kt(w)?Kt(w,2)?w:bt(w):Ie(w,g,q)).then(w=>{if(w){if(Kt(w,2))return se(_e({replace:ce},R(w.to),{state:typeof w.to=="object"?_e({},de,w.to.state):de,force:Oe}),P||g)}else w=he(g,q,!0,ce,de);return ae(g,q,w),w})}function U(b,P){const D=x(b,P);return D?Promise.reject(D):Promise.resolve()}function te(b,P){let D;const[q,de,Oe]=fE(b,P);D=Ua(q.reverse(),"beforeRouteLeave",b,P);for(const d of q)d.leaveGuards.forEach(g=>{D.push(pn(g,b,P))});const ce=U.bind(null,b,P);return D.push(ce),gr(D).then(()=>{D=[];for(const d of i.list())D.push(pn(d,b,P));return D.push(ce),gr(D)}).then(()=>{D=Ua(de,"beforeRouteUpdate",b,P);for(const d of de)d.updateGuards.forEach(g=>{D.push(pn(g,b,P))});return D.push(ce),gr(D)}).then(()=>{D=[];for(const d of b.matched)if(d.beforeEnter&&!P.matched.includes(d))if(Dt(d.beforeEnter))for(const g of d.beforeEnter)D.push(pn(g,b,P));else D.push(pn(d.beforeEnter,b,P));return D.push(ce),gr(D)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),D=Ua(Oe,"beforeRouteEnter",b,P),D.push(ce),gr(D))).then(()=>{D=[];for(const d of o.list())D.push(pn(d,b,P));return D.push(ce),gr(D)}).catch(d=>Kt(d,8)?d:Promise.reject(d))}function ae(b,P,D){for(const q of a.list())q(b,P,D)}function he(b,P,D,q,de){const Oe=x(b,P);if(Oe)return Oe;const ce=P===un,d=wr?history.state:{};D&&(q||ce?s.replace(b.fullPath,_e({scroll:ce&&d&&d.scroll},de)):s.push(b.fullPath,de)),c.value=b,Dn(b,P,D,ce),bt()}let L;function me(){L||(L=s.listen((b,P,D)=>{if(!Ci.listening)return;const q=T(b),de=ee(q);if(de){se(_e(de,{replace:!0}),q).catch(vs);return}l=q;const Oe=c.value;wr&&Eb(Rh(Oe.fullPath,D.delta),Wo()),te(q,Oe).catch(ce=>Kt(ce,12)?ce:Kt(ce,2)?(se(ce.to,q).then(d=>{Kt(d,20)&&!D.delta&&D.type===Ms.pop&&s.go(-1,!1)}).catch(vs),Promise.reject()):(D.delta&&s.go(-D.delta,!1),Ie(ce,q,Oe))).then(ce=>{ce=ce||he(q,Oe,!1),ce&&(D.delta&&!Kt(ce,8)?s.go(-D.delta,!1):D.type===Ms.pop&&Kt(ce,20)&&s.go(-1,!1)),ae(q,Oe,ce)}).catch(vs)}))}let M=is(),we=is(),be;function Ie(b,P,D){bt(b);const q=we.list();return q.length?q.forEach(de=>de(b,P,D)):console.error(b),Promise.reject(b)}function Ee(){return be&&c.value!==un?Promise.resolve():new Promise((b,P)=>{M.add([b,P])})}function bt(b){return be||(be=!b,me(),M.list().forEach(([P,D])=>b?D(b):P()),M.reset()),b}function Dn(b,P,D,q){const{scrollBehavior:de}=t;if(!wr||!de)return Promise.resolve();const Oe=!D&&Tb(Rh(b.fullPath,0))||(q||!D)&&history.state&&history.state.scroll||null;return Ud().then(()=>de(b,P,Oe)).then(ce=>ce&&bb(ce)).catch(ce=>Ie(ce,b,P))}const Et=b=>s.go(b);let ot;const fr=new Set,Ci={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:_,getRoutes:v,resolve:T,options:t,push:V,replace:F,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:Ee,install(b){const P=this;b.component("RouterLink",oE),b.component("RouterView",uE),b.config.globalProperties.$router=P,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Gn(c)}),wr&&!ot&&c.value===un&&(ot=!0,V(s.location).catch(de=>{}));const D={};for(const de in un)D[de]=Y(()=>c.value[de]);b.provide(Go,P),b.provide(Up,ar(D)),b.provide(Ic,c);const q=b.unmount;fr.add(b),b.unmount=function(){fr.delete(b),fr.size<1&&(l=un,L&&L(),L=null,c.value=un,ot=!1,be=!1),q()}}};return Ci}function gr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function fE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Lr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Lr(l,c))||s.push(c))}return[n,r,s]}function cO(){return $t(Go)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),r.push(n[u],n[f],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($p(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const p=a<<4&240|l>>2;if(r.push(p),f!==64){const m=l<<6&192|f;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},pE=function(t){const e=$p(t);return Bp.encodeByteArray(e,!0)},co=function(t){return pE(t).replace(/\./g,"")},Vp=function(t){try{return Bp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=()=>gE().__FIREBASE_DEFAULTS__,yE=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vE=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vp(t[1]);return e&&JSON.parse(e)},Qo=()=>{try{return mE()||yE()||vE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jp=t=>{var e,n;return(n=(e=Qo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wE=t=>{const e=jp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_E=()=>{var t;return(t=Qo())===null||t===void 0?void 0:t.config},qp=t=>{var e;return(e=Qo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[co(JSON.stringify(n)),co(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TE(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function lO(){var t;const e=(t=Qo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CE(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kE(){try{return typeof indexedDB=="object"}catch{return!1}}function AE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RE,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?OE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new an(s,a,r)}}function OE(t,e){return t.replace(xE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xE=/\{\$([^}]+)}/g;function DE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qh(i)&&qh(o)){if(!lo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NE(t,e){const n=new PE(t,e);return n.subscribe.bind(n)}class PE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$a),s.error===void 0&&(s.error=$a),s.complete===void 0&&(s.complete=$a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UE(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FE(t){return t===Un?void 0:t}function UE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ME(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const BE={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},VE=ye.INFO,jE={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},qE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rl{constructor(e){this.name=e,this._logLevel=VE,this._logHandler=qE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const HE=(t,e)=>e.some(n=>t instanceof n);let Hh,zh;function zE(){return Hh||(Hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KE(){return zh||(zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hp=new WeakMap,Sc=new WeakMap,zp=new WeakMap,Ba=new WeakMap,Ol=new WeakMap;function WE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hp.set(n,t)}).catch(()=>{}),Ol.set(e,t),e}function GE(t){if(Sc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sc.set(t,e)}let Cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QE(t){Cc=t(Cc)}function YE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Va(this),e,...n);return zp.set(r,e.sort?e.sort():[e]),bn(r)}:KE().includes(t)?function(...e){return t.apply(Va(this),e),bn(Hp.get(this))}:function(...e){return bn(t.apply(Va(this),e))}}function XE(t){return typeof t=="function"?YE(t):(t instanceof IDBTransaction&&GE(t),HE(t,zE())?new Proxy(t,Cc):t)}function bn(t){if(t instanceof IDBRequest)return WE(t);if(Ba.has(t))return Ba.get(t);const e=XE(t);return e!==t&&(Ba.set(t,e),Ol.set(e,t)),e}const Va=t=>Ol.get(t);function JE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=bn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(bn(o.result),c.oldVersion,c.newVersion,bn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ZE=["get","getKey","getAll","getAllKeys","count"],e0=["put","add","delete","clear"],ja=new Map;function Kh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=e0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ZE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ja.set(e,i),i}QE(t=>({...t,get:(e,n,r)=>Kh(e,n)||t.get(e,n,r),has:(e,n)=>!!Kh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function n0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",Wh="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Rl("@firebase/app"),r0="@firebase/app-compat",s0="@firebase/analytics-compat",i0="@firebase/analytics",o0="@firebase/app-check-compat",a0="@firebase/app-check",c0="@firebase/auth",l0="@firebase/auth-compat",u0="@firebase/database",h0="@firebase/database-compat",f0="@firebase/functions",d0="@firebase/functions-compat",p0="@firebase/installations",g0="@firebase/installations-compat",m0="@firebase/messaging",y0="@firebase/messaging-compat",v0="@firebase/performance",w0="@firebase/performance-compat",_0="@firebase/remote-config",b0="@firebase/remote-config-compat",E0="@firebase/storage",T0="@firebase/storage-compat",I0="@firebase/firestore",S0="@firebase/firestore-compat",C0="firebase",k0="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",A0={[kc]:"fire-core",[r0]:"fire-core-compat",[i0]:"fire-analytics",[s0]:"fire-analytics-compat",[a0]:"fire-app-check",[o0]:"fire-app-check-compat",[c0]:"fire-auth",[l0]:"fire-auth-compat",[u0]:"fire-rtdb",[h0]:"fire-rtdb-compat",[f0]:"fire-fn",[d0]:"fire-fn-compat",[p0]:"fire-iid",[g0]:"fire-iid-compat",[m0]:"fire-fcm",[y0]:"fire-fcm-compat",[v0]:"fire-perf",[w0]:"fire-perf-compat",[_0]:"fire-rc",[b0]:"fire-rc-compat",[E0]:"fire-gcs",[T0]:"fire-gcs-compat",[I0]:"fire-fst",[S0]:"fire-fst-compat","fire-js":"fire-js",[C0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map,Rc=new Map;function R0(t,e){try{t.container.addComponent(e)}catch(n){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(Rc.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of uo.values())R0(n,t);return!0}function xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},En=new ti("app","Firebase",O0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=k0;function Kp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ac,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw En.create("bad-app-name",{appName:String(s)});if(n||(n=_E()),!n)throw En.create("no-options");const i=uo.get(s);if(i){if(lo(n,i.options)&&lo(r,i.config))return i;throw En.create("duplicate-app",{appName:s})}const o=new $E(s);for(const c of Rc.values())o.addComponent(c);const a=new x0(n,r,o);return uo.set(s,a),a}function Wp(t=Ac){const e=uo.get(t);if(!e&&t===Ac)return Kp();if(!e)throw En.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let s=(r=A0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(a.join(" "));return}Fr(new tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="firebase-heartbeat-database",N0=1,Fs="firebase-heartbeat-store";let qa=null;function Gp(){return qa||(qa=JE(D0,N0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fs)}}}).catch(t=>{throw En.create("idb-open",{originalErrorMessage:t.message})})),qa}async function P0(t){try{return(await Gp()).transaction(Fs).objectStore(Fs).get(Qp(t))}catch(e){if(e instanceof an)nr.warn(e.message);else{const n=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nr.warn(n.message)}}}async function Gh(t,e){try{const r=(await Gp()).transaction(Fs,"readwrite");return await r.objectStore(Fs).put(e,Qp(t)),r.done}catch(n){if(n instanceof an)nr.warn(n.message);else{const r=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nr.warn(r.message)}}}function Qp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=1024,M0=30*24*60*60*1e3;class F0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=M0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qh(),{heartbeatsToSend:n,unsentEntries:r}=U0(this._heartbeatsCache.heartbeats),s=co(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Qh(){return new Date().toISOString().substring(0,10)}function U0(t,e=L0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kE()?AE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await P0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yh(t){return co(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){Fr(new tr("platform-logger",e=>new t0(e),"PRIVATE")),Fr(new tr("heartbeat",e=>new F0(e),"PRIVATE")),Tn(kc,Wh,t),Tn(kc,Wh,"esm2017"),Tn("fire-js","")}B0("");var V0="firebase",j0="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(V0,j0,"app");function Dl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Yp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q0=Yp,Xp=new ti("auth","Firebase",Yp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new Rl("@firebase/auth");function Ki(t,...e){Xh.logLevel<=ye.ERROR&&Xh.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,...e){throw Nl(t,...e)}function Bt(t,...e){return Nl(t,...e)}function Jp(t,e,n){const r=Object.assign(Object.assign({},q0()),{[e]:n});return new ti("auth","Firebase",r).create(e,{appName:t.name})}function H0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&_t(t,"argument-error"),Jp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xp.create(t,...e)}function W(t,e,...n){if(!t)throw Nl(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ki(e),new Error(e)}function en(t,e){t||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map;function Yt(t){en(t instanceof Function,"Expected a class definition");let e=Jh.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t,e){const n=xl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(lo(i,e!=null?e:{}))return s;_t(s,"already-initialized")}return n.initialize({options:e})}function K0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function W0(){return Zh()==="http:"||Zh()==="https:"}function Zh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(W0()||IE()||"connection"in navigator)?navigator.onLine:!0}function Q0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=TE()||SE()}get(){return G0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new si(3e4,6e4);function ii(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oi(t,e,n,r,s={}){return eg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ni(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Zp.fetch()(tg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function eg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Y0),e);try{const s=new J0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Jp(t,u,l);_t(t,u)}}catch(s){if(s instanceof an)throw s;_t(t,"network-request-failed")}}async function ai(t,e,n,r,s={}){const i=await oi(t,e,n,r,s);return"mfaPendingCredential"in i&&_t(t,"multi-factor-auth-required",{_serverResponse:i}),i}function tg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Pl(t.config,s):`${t.config.apiScheme}://${s}`}class J0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),X0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Bt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(t,e){return oi(t,"POST","/v1/accounts:delete",e)}async function eT(t,e){return oi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tT(t,e=!1){const n=wt(t),r=await n.getIdToken(e),s=Ll(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_s(Ha(s.auth_time)),issuedAtTime:_s(Ha(s.iat)),expirationTime:_s(Ha(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ha(t){return Number(t)*1e3}function Ll(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ki("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vp(n);return s?JSON.parse(s):(Ki("Failed to decode base64 JWT payload"),null)}catch(s){return Ki("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nT(t){const e=Ll(t);return W(e,"internal-error"),W(typeof e.exp!="undefined","internal-error"),W(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&rT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Us(t,eT(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?aT(i.providerUserInfo):[],a=oT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ng(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function iT(t){const e=wt(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function aT(t){return t.map(e=>{var{providerId:n}=e,r=Dl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(t,e){const n=await eg(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=tg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken!="undefined","internal-error"),W(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):nT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $s;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){W(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Dl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ng(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tT(this,e)}reload(){return iT(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Us(this,Z0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:V,isAnonymous:F,providerData:ee,stsTokenManager:se}=n;W(x&&se,e,"internal-error");const U=$s.fromJSON(this.name,se);W(typeof x=="string",e,"internal-error"),hn(f,e.name),hn(h,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof F=="boolean",e,"internal-error"),hn(p,e.name),hn(m,e.name),hn(v,e.name),hn(_,e.name),hn(T,e.name),hn(R,e.name);const te=new Yn({uid:x,auth:e,email:h,emailVerified:V,displayName:f,isAnonymous:F,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:U,createdAt:T,lastLoginAt:R});return ee&&Array.isArray(ee)&&(te.providerData=ee.map(ae=>Object.assign({},ae))),_&&(te._redirectEventId=_),te}static async _fromIdTokenResponse(e,n,r=!1){const s=new $s;s.updateFromServerResponse(n);const i=new Yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ho(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rg.type="NONE";const ef=rg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ar{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ar(Yt(ef),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Yt(ef);const o=Wi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Yn._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ar(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ar(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(og(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cg(e))return"Blackberry";if(lg(e))return"Webos";if(Ml(e))return"Safari";if((e.includes("chrome/")||ig(e))&&!e.includes("edge/"))return"Chrome";if(ag(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sg(t=nt()){return/firefox\//i.test(t)}function Ml(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ig(t=nt()){return/crios\//i.test(t)}function og(t=nt()){return/iemobile/i.test(t)}function ag(t=nt()){return/android/i.test(t)}function cg(t=nt()){return/blackberry/i.test(t)}function lg(t=nt()){return/webos/i.test(t)}function Yo(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lT(t=nt()){var e;return Yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uT(){return CE()&&document.documentMode===10}function ug(t=nt()){return Yo(t)||ag(t)||lg(t)||cg(t)||/windows phone/i.test(t)||og(t)}function hT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e=[]){let n;switch(t){case"Browser":n=tf(nt());break;case"Worker":n=`${tf(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nf(this),this.idTokenSubscription=new nf(this),this.beforeStateQueue=new fT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Q0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?wt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Qr(t){return wt(t)}class nf{constructor(e){this.auth=e,this.observer=null,this.addObserver=NE(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function pT(t,e,n){const r=Qr(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=fg(e),{host:o,port:a}=gT(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||mT()}function fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gT(t){const e=fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:rf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:rf(o)}}}function rf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function yT(t,e){return oi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(t,e){return ai(t,"POST","/v1/accounts:signInWithPassword",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(t,e){return ai(t,"POST","/v1/accounts:signInWithEmailLink",ii(t,e))}async function _T(t,e){return ai(t,"POST","/v1/accounts:signInWithEmailLink",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Fl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return vT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wT(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return yT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _T(e,{idToken:n,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(t,e){return ai(t,"POST","/v1/accounts:signInWithIdp",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="http://localhost";class rr extends Fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Dl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rr(e,n)}buildRequest(){const e={requestUri:bT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TT(t){const e=ls(us(t)).link,n=e?ls(us(e)).deep_link_id:null,r=ls(us(t)).deep_link_id;return(r?ls(us(r)).link:null)||r||n||e||t}class Ul{constructor(e){var n,r,s,i,o,a;const c=ls(us(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=ET((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TT(e);try{return new Ul(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.providerId=Yr.PROVIDER_ID}static credential(e,n){return Bs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ul.parseLink(n);return W(r,"argument-error"),Bs._fromEmailAndCode(e,r.code,r.tenantId)}}Yr.PROVIDER_ID="password";Yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends $l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ci{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends ci{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends ci{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(t,e){return ai(t,"POST","/v1/accounts:signUp",ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yn._fromIdTokenResponse(e,r,s),o=sf(r);return new sr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=sf(r);return new sr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function sf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends an{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new fo(e,n,r,s)}}function dg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(t,i,e,r):i})}async function ST(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Us(t,dg(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Ll(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),sr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e,n=!1){const r="signIn",s=await dg(t,r,e),i=await sr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function kT(t,e){return pg(Qr(t),e)}async function uO(t,e,n){const r=Qr(t),s=await IT(r,{returnSecureToken:!0,email:e,password:n}),i=await sr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function hO(t,e,n){return kT(wt(t),Yr.credential(e,n))}function AT(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function RT(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function fO(t){return wt(t).signOut()}const po="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(){const t=nt();return Ml(t)||Yo(t)}const xT=1e3,DT=10;class mg extends gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OT()&&hT(),this.fallbackToPolling=ug(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mg.type="LOCAL";const NT=mg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg extends gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yg.type="SESSION";const vg=yg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await PT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Bl("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function MT(t){Vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(){return typeof Vt().WorkerGlobalScope!="undefined"&&typeof Vt().importScripts=="function"}async function FT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $T(){return wg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="firebaseLocalStorageDb",BT=1,go="firebaseLocalStorage",bg="fbase_key";class li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(t,e){return t.transaction([go],e?"readwrite":"readonly").objectStore(go)}function VT(){const t=indexedDB.deleteDatabase(_g);return new li(t).toPromise()}function xc(){const t=indexedDB.open(_g,BT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(go,{keyPath:bg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(go)?e(r):(r.close(),await VT(),e(await xc()))})})}async function of(t,e,n){const r=Jo(t,!0).put({[bg]:e,value:n});return new li(r).toPromise()}async function jT(t,e){const n=Jo(t,!1).get(e),r=await new li(n).toPromise();return r===void 0?null:r.value}function af(t,e){const n=Jo(t,!0).delete(e);return new li(n).toPromise()}const qT=800,HT=3;class Eg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance($T()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FT(),!this.activeServiceWorker)return;this.sender=new LT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await of(e,po,"1"),await af(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>of(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jo(s,!1).getAll();return new li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Eg.type="LOCAL";const zT=Eg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function WT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Bt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",KT().appendChild(r)})}function GT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new si(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){return e?Yt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Fl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QT(t){return pg(t.auth,new Vl(t),t.bypassAuthState)}function YT(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),CT(n,new Vl(t),t.bypassAuthState)}async function XT(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),ST(n,new Vl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QT;case"linkViaPopup":case"linkViaRedirect":return XT;case"reauthViaPopup":case"reauthViaRedirect":return YT;default:_t(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=new si(2e3,1e4);async function dO(t,e,n){const r=Qr(t);H0(t,e,$l);const s=Tg(r,n);return new qn(r,"signInViaPopup",e,s).executeNotNull()}class qn extends Ig{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=Bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,JT.get())};e()}}qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="pendingRedirect",Gi=new Map;class eI extends Ig{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const r=await tI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tI(t,e){const n=sI(e),r=rI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nI(t,e){Gi.set(t._key(),e)}function rI(t){return Yt(t._redirectPersistence)}function sI(t){return Wi(ZT,t.config.apiKey,t.name)}async function iI(t,e,n=!1){const r=Qr(t),s=Tg(r,e),o=await new eI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=10*60*1e3;class aI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oI&&this.cachedEventUids.clear(),this.cachedEventUids.has(cf(e))}saveEventToCache(e){this.cachedEventUids.add(cf(e)),this.lastProcessedEventTime=Date.now()}}function cf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e={}){return oi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hI=/^https?/;async function fI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lI(t);for(const n of e)try{if(dI(n))return}catch{}_t(t,"unauthorized-domain")}function dI(t){const e=Oc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hI.test(n))return!1;if(uI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new si(3e4,6e4);function lf(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gI(t){return new Promise((e,n)=>{var r,s,i;function o(){lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lf(),n(Bt(t,"network-request-failed"))},timeout:pI.get()})}if(!((s=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Vt().gapi)===null||i===void 0)&&i.load)o();else{const a=GT("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},WT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function mI(t){return Qi=Qi||gI(t),Qi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new si(5e3,15e3),vI="__/auth/iframe",wI="emulator/auth/iframe",_I={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EI(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pl(e,wI):`https://${t.config.authDomain}/${vI}`,r={apiKey:e.apiKey,appName:t.name,v:ri},s=bI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ni(r).slice(1)}`}async function TI(t){const e=await mI(t),n=Vt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:EI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_I,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=Vt().setTimeout(()=>{i(o)},yI.get());function c(){Vt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SI=500,CI=600,kI="_blank",AI="http://localhost";class uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RI(t,e,n,r=SI,s=CI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},II),{width:r.toString(),height:s.toString(),top:i,left:o}),l=nt().toLowerCase();n&&(a=ig(l)?kI:n),sg(l)&&(e=e||AI,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(lT(l)&&a!=="_self")return OI(e||"",a),new uf(null);const f=window.open(e||"",a,u);W(f,t,"popup-blocked");try{f.focus()}catch{}return new uf(f)}function OI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="__/auth/handler",DI="emulator/auth/handler";function hf(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:s};if(e instanceof $l){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ci){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${NI(t)}?${ni(a).slice(1)}`}function NI({config:t}){return t.emulator?Pl(t,DI):`https://${t.authDomain}/${xI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="webStorageSupport";class PI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vg,this._completeRedirectFn=iI,this._overrideRedirectResult=nI}async _openPopup(e,n,r,s){var i;en((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=hf(e,n,r,Oc(),s);return RI(e,o,Bl())}async _openRedirect(e,n,r,s){return await this._originValidation(e),MT(hf(e,n,r,Oc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(en(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TI(e),r=new aI(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(za,{type:za},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[za];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ug()||Ml()||Yo()}}const LI=PI;var ff="@firebase/auth",df="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UI(t){Fr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{W(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hg(t)},u=new dT(a,c,l);return K0(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new tr("auth-internal",e=>{const n=Qr(e.getProvider("auth").getImmediate());return(r=>new MI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(ff,df,FI(t)),Tn(ff,df,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=5*60,BI=qp("authIdTokenMaxAge")||$I;let pf=null;const VI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BI)return;const s=n==null?void 0:n.token;pf!==s&&(pf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jI(t=Wp()){const e=xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=z0(t,{popupRedirectResolver:LI,persistence:[zT,NT,vg]}),r=qp("authTokenSyncURL");if(r){const i=VI(r);RT(n,i,()=>i(n.currentUser)),AT(n,o=>i(o))}const s=jp("auth");return s&&pT(n,`http://${s}`),n}UI("Browser");var qI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},B,jl=jl||{},X=qI||self;function mo(){}function Zo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ui(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function HI(t){return Object.prototype.hasOwnProperty.call(t,Ka)&&t[Ka]||(t[Ka]=++zI)}var Ka="closure_uid_"+(1e9*Math.random()>>>0),zI=0;function KI(t,e,n){return t.call.apply(t.bind,arguments)}function WI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=KI:et=WI,et.apply(null,arguments)}function Li(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function We(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function On(){this.s=this.s,this.o=this.o}var GI=0;On.prototype.s=!1;On.prototype.na=function(){!this.s&&(this.s=!0,this.M(),GI!=0)&&HI(this)};On.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ql(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function gf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zo(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var QI=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",mo,e),X.removeEventListener("test",mo,e)}catch{}return t}();function yo(t){return/^[\s\xa0]*$/.test(t)}var mf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Wa(t,e){return t<e?-1:t>e?1:0}function ea(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return ea().indexOf(t)!=-1}function Hl(t){return Hl[" "](t),t}Hl[" "]=mo;function YI(t){var e=ZI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var XI=Ut("Opera"),Ur=Ut("Trident")||Ut("MSIE"),kg=Ut("Edge"),Dc=kg||Ur,Ag=Ut("Gecko")&&!(ea().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),JI=ea().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function Rg(){var t=X.document;return t?t.documentMode:void 0}var vo;e:{var Ga="",Qa=function(){var t=ea();if(Ag)return/rv:([^\);]+)(\)|;)/.exec(t);if(kg)return/Edge\/([\d\.]+)/.exec(t);if(Ur)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JI)return/WebKit\/(\S+)/.exec(t);if(XI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qa&&(Ga=Qa?Qa[1]:""),Ur){var Ya=Rg();if(Ya!=null&&Ya>parseFloat(Ga)){vo=String(Ya);break e}}vo=Ga}var ZI={};function eS(){return YI(function(){let t=0;const e=mf(String(vo)).split("."),n=mf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Wa(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Wa(s[2].length==0,i[2].length==0)||Wa(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Nc;if(X.document&&Ur){var yf=Rg();Nc=yf||parseInt(vo,10)||void 0}else Nc=void 0;var tS=Nc;function Vs(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ag){e:{try{Hl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vs.X.h.call(this)}}We(Vs,tt);var nS={2:"touch",3:"pen",4:"mouse"};Vs.prototype.h=function(){Vs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hi="closure_listenable_"+(1e6*Math.random()|0),rS=0;function sS(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++rS,this.ba=this.ea=!1}function ta(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function zl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Og(t){const e={};for(const n in t)e[n]=t[n];return e}const vf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<vf.length;i++)n=vf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function na(t){this.src=t,this.g={},this.h=0}na.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Lc(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new sS(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function Pc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Cg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ta(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var Kl="closure_lm_"+(1e6*Math.random()|0),Xa={};function Dg(t,e,n,r,s){if(r&&r.once)return Pg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Dg(t,e[i],n,r,s);return null}return n=Ql(n),t&&t[hi]?t.N(e,n,ui(r)?!!r.capture:!!r,s):Ng(t,e,n,!1,r,s)}function Ng(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ui(s)?!!s.capture:!!s,a=Gl(t);if(a||(t[Kl]=a=new na(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=iS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)QI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Mg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function iS(){function t(n){return e.call(t.src,t.listener,n)}const e=oS;return t}function Pg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Pg(t,e[i],n,r,s);return null}return n=Ql(n),t&&t[hi]?t.O(e,n,ui(r)?!!r.capture:!!r,s):Ng(t,e,n,!0,r,s)}function Lg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Lg(t,e[i],n,r,s);else r=ui(r)?!!r.capture:!!r,n=Ql(n),t&&t[hi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Lc(i,n,r,s),-1<n&&(ta(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lc(e,n,r,s)),(n=-1<t?e[t]:null)&&Wl(n))}function Wl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[hi])Pc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Mg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gl(e))?(Pc(n,t),n.h==0&&(n.src=null,e[Kl]=null)):ta(t)}}}function Mg(t){return t in Xa?Xa[t]:Xa[t]="on"+t}function oS(t,e){if(t.ba)t=!0;else{e=new Vs(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Wl(t),t=n.call(r,e)}return t}function Gl(t){return t=t[Kl],t instanceof na?t:null}var Ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ql(t){return typeof t=="function"?t:(t[Ja]||(t[Ja]=function(e){return t.handleEvent(e)}),t[Ja])}function He(){On.call(this),this.i=new na(this),this.P=this,this.I=null}We(He,On);He.prototype[hi]=!0;He.prototype.removeEventListener=function(t,e,n,r){Lg(this,t,e,n,r)};function Ke(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var s=e;e=new tt(r,t),xg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Mi(o,r,!0,e)&&s}if(o=e.g=t,s=Mi(o,r,!0,e)&&s,s=Mi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Mi(o,r,!1,e)&&s}He.prototype.M=function(){if(He.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ta(n[r]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Mi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Pc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Yl=X.JSON.stringify;function aS(){var t=$g;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class cS{constructor(){this.h=this.g=null}add(e,n){const r=Fg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Fg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new lS,t=>t.reset());class lS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uS(t){X.setTimeout(()=>{throw t},0)}function Ug(t,e){Mc||hS(),Fc||(Mc(),Fc=!0),$g.add(t,e)}var Mc;function hS(){var t=X.Promise.resolve(void 0);Mc=function(){t.then(fS)}}var Fc=!1,$g=new cS;function fS(){for(var t;t=aS();){try{t.h.call(t.g)}catch(n){uS(n)}var e=Fg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fc=!1}function ra(t,e){He.call(this),this.h=t||1,this.g=e||X,this.j=et(this.lb,this),this.l=Date.now()}We(ra,He);B=ra.prototype;B.ca=!1;B.R=null;B.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ke(this,"tick"),this.ca&&(Xl(this),this.start()))}};B.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}B.M=function(){ra.X.M.call(this),Xl(this),delete this.g};function Jl(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Bg(t){t.g=Jl(()=>{t.g=null,t.i&&(t.i=!1,Bg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dS extends On{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bg(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(t){On.call(this),this.h=t,this.g={}}We(js,On);var wf=[];function Vg(t,e,n,r){Array.isArray(n)||(n&&(wf[0]=n.toString()),n=wf);for(var s=0;s<n.length;s++){var i=Dg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function jg(t){zl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wl(e)},t),t.g={}}js.prototype.M=function(){js.X.M.call(this),jg(this)};js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sa(){this.g=!0}sa.prototype.Aa=function(){this.g=!1};function pS(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function gS(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Tr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+yS(t,n)+(r?" "+r:"")})}function mS(t,e){t.info(function(){return"TIMEOUT: "+e})}sa.prototype.info=function(){};function yS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Yl(n)}catch{return e}}var lr={},_f=null;function ia(){return _f=_f||new He}lr.Pa="serverreachability";function qg(t){tt.call(this,lr.Pa,t)}We(qg,tt);function qs(t){const e=ia();Ke(e,new qg(e))}lr.STAT_EVENT="statevent";function Hg(t,e){tt.call(this,lr.STAT_EVENT,t),this.stat=e}We(Hg,tt);function it(t){const e=ia();Ke(e,new Hg(e,t))}lr.Qa="timingevent";function zg(t,e){tt.call(this,lr.Qa,t),this.size=e}We(zg,tt);function fi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var oa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Kg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Zl(){}Zl.prototype.h=null;function bf(t){return t.h||(t.h=t.i())}function Wg(){}var di={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function eu(){tt.call(this,"d")}We(eu,tt);function tu(){tt.call(this,"c")}We(tu,tt);var Uc;function aa(){}We(aa,Zl);aa.prototype.g=function(){return new XMLHttpRequest};aa.prototype.i=function(){return{}};Uc=new aa;function pi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new js(this),this.O=vS,t=Dc?125:void 0,this.T=new ra(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Gg}function Gg(){this.i=null,this.g="",this.h=!1}var vS=45e3,$c={},wo={};B=pi.prototype;B.setTimeout=function(t){this.O=t};function Bc(t,e,n){t.K=1,t.v=la(tn(e)),t.s=n,t.P=!0,Qg(t,null)}function Qg(t,e){t.F=Date.now(),gi(t),t.A=tn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),rm(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Gg,t.g=Im(t.l,n?e:null,!t.s),0<t.N&&(t.L=new dS(et(t.La,t,t.g),t.N)),Vg(t.S,t.g,"readystatechange",t.ib),e=t.H?Og(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),qs(),pS(t.j,t.u,t.A,t.m,t.U,t.s)}B.ib=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.La(t)};B.La=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||Dc||this.g&&(this.h.h||this.g.fa()||Sf(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?qs(3):qs(2)),ca(this);var n=this.g.aa();this.Y=n;t:if(Yg(this)){var r=Sf(this.g);t="";var s=r.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Hn(this),bs(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,gS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yo(a)){var l=a;break t}}l=null}if(n=l)Tr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vc(this,n);else{this.i=!1,this.o=3,it(12),Hn(this),bs(this);break e}}this.P?(Xg(this,u,o),Dc&&this.i&&u==3&&(Vg(this.S,this.T,"tick",this.hb),this.T.start())):(Tr(this.j,this.m,o,null),Vc(this,o)),u==4&&Hn(this),this.i&&!this.I&&(u==4?_m(this.l,this):(this.i=!1,gi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Hn(this),bs(this)}}}catch{}finally{}};function Yg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Xg(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=wS(t,n),s==wo){e==4&&(t.o=4,it(14),r=!1),Tr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==$c){t.o=4,it(15),Tr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Tr(t.j,t.m,s,null),Vc(t,s);Yg(t)&&s!=wo&&s!=$c&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),cu(e),e.K=!0,it(11))):(Tr(t.j,t.m,n,"[Invalid Chunked Response]"),Hn(t),bs(t))}B.hb=function(){if(this.g){var t=Xt(this.g),e=this.g.fa();this.C<e.length&&(ca(this),Xg(this,t,e),this.i&&t!=4&&gi(this))}};function wS(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?wo:(n=Number(e.substring(n,r)),isNaN(n)?$c:(r+=1,r+n>e.length?wo:(e=e.substr(r,n),t.C=r+n,e)))}B.cancel=function(){this.I=!0,Hn(this)};function gi(t){t.V=Date.now()+t.O,Jg(t,t.O)}function Jg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=fi(et(t.gb,t),e)}function ca(t){t.B&&(X.clearTimeout(t.B),t.B=null)}B.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(mS(this.j,this.A),this.K!=2&&(qs(),it(17)),Hn(this),this.o=2,bs(this)):Jg(this,this.V-t)};function bs(t){t.l.G==0||t.I||_m(t.l,t)}function Hn(t){ca(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xl(t.T),jg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Vc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||jc(n.h,t))){if(!t.J&&jc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Eo(n),fa(n);else break e;au(n),it(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=fi(et(n.cb,n),6e3));if(1>=om(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else zn(n,11)}else if((t.J||n.g==t)&&Eo(n),!yo(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(nu(i,i.h),i.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Re(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Tm(r,r.H?r.ka:null,r.V),o.J){am(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(ca(a),gi(a)),r.g=o}else vm(r);0<n.i.length&&da(n)}else l[0]!="stop"&&l[0]!="close"||zn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?zn(n,7):ou(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}qs(4)}catch{}}function _S(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function bS(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Zo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Zg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bS(t),r=_S(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ES(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Xn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xn){this.h=e!==void 0?e:t.h,_o(this,t.j),this.s=t.s,this.g=t.g,bo(this,t.m),this.l=t.l,e=t.i;var n=new Hs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ef(this,n),this.o=t.o}else t&&(n=String(t).match(em))?(this.h=!!e,_o(this,n[1]||"",!0),this.s=hs(n[2]||""),this.g=hs(n[3]||"",!0),bo(this,n[4]),this.l=hs(n[5]||"",!0),Ef(this,n[6]||"",!0),this.o=hs(n[7]||"")):(this.h=!!e,this.i=new Hs(null,this.h))}Xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fs(e,Tf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fs(e,Tf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fs(n,n.charAt(0)=="/"?SS:IS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fs(n,kS)),t.join("")};function tn(t){return new Xn(t)}function _o(t,e,n){t.j=n?hs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ef(t,e,n){e instanceof Hs?(t.i=e,AS(t.i,t.h)):(n||(e=fs(e,CS)),t.i=new Hs(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function la(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Tf=/[#\/\?@]/g,IS=/[#\?:]/g,SS=/[#\?]/g,CS=/[#\?@]/g,kS=/#/g;function Hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xn(t){t.g||(t.g=new Map,t.h=0,t.i&&ES(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=Hs.prototype;B.add=function(t,e){xn(this),this.i=null,t=Xr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function tm(t,e){xn(t),e=Xr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nm(t,e){return xn(t),e=Xr(t,e),t.g.has(e)}B.forEach=function(t,e){xn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};B.oa=function(){xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};B.W=function(t){xn(this);let e=[];if(typeof t=="string")nm(this,t)&&(e=e.concat(this.g.get(Xr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return xn(this),this.i=null,t=Xr(this,t),nm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function rm(t,e,n){tm(t,e),0<n.length&&(t.i=null,t.g.set(Xr(t,e),ql(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Xr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function AS(t,e){e&&!t.j&&(xn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(tm(this,r),rm(this,s,n))},t)),t.j=e}var RS=class{constructor(t,e){this.h=t,this.g=e}};function sm(t){this.l=t||OS,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var OS=10;function im(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function om(t){return t.h?1:t.g?t.g.size:0}function jc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nu(t,e){t.g?t.g.add(e):t.h=e}function am(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sm.prototype.cancel=function(){if(this.i=cm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ql(t.i)}function ru(){}ru.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};ru.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function xS(){this.g=new ru}function DS(t,e,n){const r=n||"";try{Zg(t,function(s,i){let o=s;ui(s)&&(o=Yl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function NS(t,e){const n=new sa;if(X.Image){const r=new Image;r.onload=Li(Fi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Li(Fi,n,r,"TestLoadImage: error",!1,e),r.onabort=Li(Fi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Li(Fi,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Fi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function mi(t){this.l=t.ac||null,this.j=t.jb||!1}We(mi,Zl);mi.prototype.g=function(){return new ua(this.l,this.j)};mi.prototype.i=function(t){return function(){return t}}({});function ua(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=su,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(ua,He);var su=0;B=ua.prototype;B.open=function(t,e){if(this.readyState!=su)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zs(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=su};B.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lm(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function lm(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}B.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yi(this):zs(this),this.readyState==3&&lm(this)}};B.Va=function(t){this.g&&(this.response=this.responseText=t,yi(this))};B.Ua=function(t){this.g&&(this.response=t,yi(this))};B.ga=function(){this.g&&yi(this)};function yi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zs(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PS=X.JSON.parse;function De(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=um,this.K=this.L=!1}We(De,He);var um="",LS=/^https?$/i,MS=["POST","PUT"];B=De.prototype;B.Ka=function(t){this.L=t};B.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Uc.g(),this.C=this.u?bf(this.u):bf(Uc),this.g.onreadystatechange=et(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){If(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=X.FormData&&t instanceof X.FormData,!(0<=Cg(MS,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dm(this),0<this.B&&((this.K=FS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.qa,this)):this.A=Jl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){If(this,i)}};function FS(t){return Ur&&eS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.qa=function(){typeof jl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function If(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hm(t),ha(t)}function hm(t){t.D||(t.D=!0,Ke(t,"complete"),Ke(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),ha(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ha(this,!0)),De.X.M.call(this)};B.Ha=function(){this.s||(this.F||this.v||this.l?fm(this):this.fb())};B.fb=function(){fm(this)};function fm(t){if(t.h&&typeof jl!="undefined"&&(!t.C[1]||Xt(t)!=4||t.aa()!=2)){if(t.v&&Xt(t)==4)Jl(t.Ha,0,t);else if(Ke(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(em)[1]||null;if(!s&&X.self&&X.self.location){var i=X.self.location.protocol;s=i.substr(0,i.length-1)}r=!LS.test(s?s.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var o=2<Xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",hm(t)}}finally{ha(t)}}}}function ha(t,e){if(t.g){dm(t);const n=t.g,r=t.C[0]?mo:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function dm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}B.aa=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};B.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PS(e)}};function Sf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case um:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Ea=function(){return this.m};B.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pm(t){let e="";return zl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function iu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gm(t){this.Ca=0,this.i=[],this.j=new sa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=os("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=os("baseRetryDelayMs",5e3,t),this.bb=os("retryDelaySeedMs",1e4,t),this.$a=os("forwardChannelMaxRetries",2,t),this.ta=os("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new sm(t&&t.concurrentRequestLimit),this.Fa=new xS,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}B=gm.prototype;B.ma=8;B.G=1;function ou(t){if(mm(t),t.G==3){var e=t.U++,n=tn(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),vi(t,n),e=new pi(t,t.j,e,void 0),e.K=2,e.v=la(tn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=Im(e.l,null),e.g.da(e.v)),e.F=Date.now(),gi(e)}Em(t)}function fa(t){t.g&&(cu(t),t.g.cancel(),t.g=null)}function mm(t){fa(t),t.u&&(X.clearTimeout(t.u),t.u=null),Eo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function da(t){im(t.h)||t.m||(t.m=!0,Ug(t.Ja,t),t.C=0)}function US(t,e){return om(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=fi(et(t.Ja,t,e),bm(t,t.C)),t.C++,!0)}B.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new pi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Og(i),xg(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ym(this,s,e),n=tn(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),vi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(pm(i)))+"&"+e:this.o&&iu(n,this.o,i)),nu(this.h,s),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),s.Z=!0,Bc(s,n,null)):Bc(s,n,e),this.G=2}}else this.G==3&&(t?Cf(this,t):this.i.length==0||im(this.h)||Cf(this))};function Cf(t,e){var n;e?n=e.m:n=t.U++;const r=tn(t.F);Re(r,"SID",t.I),Re(r,"RID",n),Re(r,"AID",t.T),vi(t,r),t.o&&t.s&&iu(r,t.o,t.s),n=new pi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ym(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),nu(t.h,n),Bc(n,r,e)}function vi(t,e){t.ia&&zl(t.ia,function(n,r){Re(e,r,n)}),t.l&&Zg({},function(n,r){Re(e,r,n)})}function ym(t,e,n){n=Math.min(t.i.length,n);var r=t.l?et(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{DS(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function vm(t){t.g||t.u||(t.Z=1,Ug(t.Ia,t),t.A=0)}function au(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=fi(et(t.Ia,t),bm(t,t.A)),t.A++,!0)}B.Ia=function(){if(this.u=null,wm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=fi(et(this.eb,this),t)}};B.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,it(10),fa(this),wm(this))};function cu(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function wm(t){t.g=new pi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=tn(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),vi(t,e),t.o&&t.s&&iu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=la(tn(e)),n.s=null,n.P=!0,Qg(n,t)}B.cb=function(){this.v!=null&&(this.v=null,fa(this),au(this),it(19))};function Eo(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function _m(t,e){var n=null;if(t.g==e){Eo(t),cu(t),t.g=null;var r=2}else if(jc(t.h,e))n=e.D,am(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ia(),Ke(r,new zg(r,n)),da(t)}else vm(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&US(t,e)||r==2&&au(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:zn(t,5);break;case 4:zn(t,10);break;case 3:zn(t,6);break;default:zn(t,2)}}}function bm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function zn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=et(t.kb,t);n||(n=new Xn("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||_o(n,"https"),la(n)),NS(n.toString(),r)}else it(2);t.G=0,t.l&&t.l.va(e),Em(t),mm(t)}B.kb=function(t){t?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Em(t){if(t.G=0,t.la=[],t.l){const e=cm(t.h);(e.length!=0||t.i.length!=0)&&(gf(t.la,e),gf(t.la,t.i),t.h.i.length=0,ql(t.i),t.i.length=0),t.l.ua()}}function Tm(t,e,n){var r=n instanceof Xn?tn(n):new Xn(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),bo(r,r.m);else{var s=X.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Xn(null,void 0);r&&_o(i,r),e&&(i.g=e),s&&bo(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Re(r,n,e),Re(r,"VER",t.ma),vi(t,r),r}function Im(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new De(new mi({jb:!0})):new De(t.ra),e.Ka(t.H),e}function Sm(){}B=Sm.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Ra=function(){};function To(){if(Ur&&!(10<=Number(tS)))throw Error("Environmental error: no available transport.")}To.prototype.g=function(t,e){return new ft(t,e)};function ft(t,e){He.call(this),this.g=new gm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!yo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Jr(this)}We(ft,He);ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Tm(t,null,t.V),da(t)};ft.prototype.close=function(){ou(this.g)};ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yl(t),t=n);e.i.push(new RS(e.ab++,t)),e.G==3&&da(e)};ft.prototype.M=function(){this.g.l=null,delete this.j,ou(this.g),delete this.g,ft.X.M.call(this)};function Cm(t){eu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(Cm,eu);function km(){tu.call(this),this.status=1}We(km,tu);function Jr(t){this.g=t}We(Jr,Sm);Jr.prototype.xa=function(){Ke(this.g,"a")};Jr.prototype.wa=function(t){Ke(this.g,new Cm(t))};Jr.prototype.va=function(t){Ke(this.g,new km)};Jr.prototype.ua=function(){Ke(this.g,"b")};To.prototype.createWebChannel=To.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;oa.NO_ERROR=0;oa.TIMEOUT=8;oa.HTTP_ERROR=6;Kg.COMPLETE="complete";Wg.EventType=di;di.OPEN="a";di.CLOSE="b";di.ERROR="c";di.MESSAGE="d";He.prototype.listen=He.prototype.N;De.prototype.listenOnce=De.prototype.O;De.prototype.getLastError=De.prototype.Oa;De.prototype.getLastErrorCode=De.prototype.Ea;De.prototype.getStatus=De.prototype.aa;De.prototype.getResponseJson=De.prototype.Sa;De.prototype.getResponseText=De.prototype.fa;De.prototype.send=De.prototype.da;De.prototype.setWithCredentials=De.prototype.Ka;var $S=function(){return new To},BS=function(){return ia()},Za=oa,VS=Kg,jS=lr,kf={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},qS=mi,Ui=Wg,HS=De;const Af="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Rl("@firebase/firestore");function Rf(){return ir.logLevel}function j(t,...e){if(ir.logLevel<=ye.DEBUG){const n=e.map(lu);ir.debug(`Firestore (${Zr}): ${t}`,...n)}}function nn(t,...e){if(ir.logLevel<=ye.ERROR){const n=e.map(lu);ir.error(`Firestore (${Zr}): ${t}`,...n)}}function qc(t,...e){if(ir.logLevel<=ye.WARN){const n=e.map(lu);ir.warn(`Firestore (${Zr}): ${t}`,...n)}}function lu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+t;throw nn(e),new Error(e)}function Ce(t,e){t||J()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class KS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WS{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new Am(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new Qe(e)}}class GS{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ce(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class QS{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new GS(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XS{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.A=n.token,new YS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=JS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function $r(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Ue(0,0))}static max(){return new re(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ks.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ks?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends Ks{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const ZS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Ks{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return ZS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new G(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new G(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(xe.fromString(e))}static fromName(e){return new K(xe.fromString(e).popFirst(5))}static empty(){return new K(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new xe(e.slice()))}}function eC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new kn(s,K.empty(),e)}function tC(t){return new kn(t.readTime,t.key,-1)}class kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kn(re.min(),K.empty(),-1)}static max(){return new kn(re.max(),K.empty(),-1)}}function nC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==rC)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function _i(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}uu.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ws{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ws("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ws&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Om(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){return t==null}function Io(t){return t===0&&1/t==-1/0}function oC(t){return typeof t=="number"&&Number.isInteger(t)&&!Io(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new rt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const aC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=aC.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Br(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dm(t){const e=t.mapValue.fields.__previous_value__;return xm(e)?Dm(e):e}function Gs(t){const e=An(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xm(t)?4:cC(t)?9007199254740991:10:J()}function Ht(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gs(t).isEqual(Gs(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=An(r.timestampValue),o=An(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Br(r.bytesValue).isEqual(Br(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Le(r.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Le(r.integerValue)===Le(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Le(r.doubleValue),o=Le(s.doubleValue);return i===o?Io(i)===Io(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return $r(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Of(i)!==Of(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ht(i[a],o[a])))return!1;return!0}(t,e);default:return J()}}function Qs(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function Vr(t,e){if(t===e)return 0;const n=or(t),r=or(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Le(s.integerValue||s.doubleValue),a=Le(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return xf(t.timestampValue,e.timestampValue);case 4:return xf(Gs(t),Gs(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Br(s),a=Br(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ve(o[c],a[c]);if(l!==0)return l}return ve(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ve(Le(s.latitude),Le(i.latitude));return o!==0?o:ve(Le(s.longitude),Le(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Vr(o[c],a[c]);if(l)return l}return ve(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===$i.mapValue&&i===$i.mapValue)return 0;if(s===$i.mapValue)return 1;if(i===$i.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=ve(a[u],l[u]);if(f!==0)return f;const h=Vr(o[a[u]],c[l[u]]);if(h!==0)return h}return ve(a.length,l.length)}(t.mapValue,e.mapValue);default:throw J()}}function xf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=An(t),r=An(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function jr(t){return Hc(t)}function Hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=An(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Br(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Hc(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Hc(r.fields[a])}`;return i+"}"}(t.mapValue):J();var e,n}function zc(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function Df(t){return!!t&&"nullValue"in t}function Nf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yi(t){return!!t&&"mapValue"in t}function Es(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Es(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Es(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.position=e,this.inclusive=n}}function Pf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Vr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{}class Fe extends Nm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uC(e,n,r):n==="array-contains"?new dC(e,r):n==="in"?new pC(e,r):n==="not-in"?new gC(e,r):n==="array-contains-any"?new mC(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hC(e,r):new fC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vr(n,this.value)):n!==null&&or(this.value)===or(n)&&this.matchesComparison(Vr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class zt extends Nm{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new zt(e,n)}matches(e){return Pm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Pm(t){return t.op==="and"}function Lm(t){return lC(t)&&Pm(t)}function lC(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function Kc(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+jr(t.value);if(Lm(t))return t.filters.map(e=>Kc(e)).join(",");{const e=t.filters.map(n=>Kc(n)).join(",");return`${t.op}(${e})`}}function Mm(t,e){return t instanceof Fe?function(n,r){return r instanceof Fe&&n.op===r.op&&n.field.isEqual(r.field)&&Ht(n.value,r.value)}(t,e):t instanceof zt?function(n,r){return r instanceof zt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&Mm(i,r.filters[o]),!0):!1}(t,e):void J()}function Fm(t){return t instanceof Fe?function(e){return`${e.field.canonicalString()} ${e.op} ${jr(e.value)}`}(t):t instanceof zt?function(e){return e.op.toString()+" {"+e.getFilters().map(Fm).join(" ,")+"}"}(t):"Filter"}class uC extends Fe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class hC extends Fe{constructor(e,n){super(e,"in",n),this.keys=Um("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fC extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=Um("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Um(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class dC extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&Qs(n.arrayValue,this.value)}}class pC extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qs(this.value.arrayValue,n)}}class gC extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qs(this.value.arrayValue,n)}}class mC extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n="asc"){this.field=e,this.dir=n}}function yC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bi(this.root,e,this.comparator,!0)}}class Bi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:ze.RED,this.left=s!=null?s:ze.EMPTY,this.right=i!=null?i:ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,r,s){return this}insert(t,e,n){return new ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mf(this.data.getIterator())}getIteratorFrom(e){return new Mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new $e(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $r(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Es(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new gt(Es(this.value))}}function $m(t){const e=[];return es(t.fields,(n,r)=>{const s=new Je([n]);if(Yi(r)){const i=$m(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ye(e,0,re.min(),re.min(),re.min(),gt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ye(e,1,n,re.min(),r,s,0)}static newNoDocument(e,n){return new Ye(e,2,n,re.min(),re.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,re.min(),re.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Ff(t,e=null,n=[],r=[],s=null,i=null,o=null){return new vC(t,e,n,r,s,i,o)}function fu(t){const e=ie(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),pa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>jr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>jr(r)).join(",")),e.ft=n}return e.ft}function du(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lf(t.startAt,e.startAt)&&Lf(t.endAt,e.endAt)}function Wc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function wC(t,e,n,r,s,i,o,a){return new ga(t,e,n,r,s,i,o,a)}function pu(t){return new ga(t)}function Uf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _C(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bC(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function EC(t){return t.collectionGroup!==null}function Or(t){const e=ie(t);if(e.dt===null){e.dt=[];const n=bC(e),r=_C(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ts(n)),e.dt.push(new Ts(Je.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ts(Je.keyField(),i))}}}return e.dt}function rn(t){const e=ie(t);if(!e._t)if(e.limitType==="F")e._t=Ff(e.path,e.collectionGroup,Or(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Or(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ts(i.field,o))}const r=e.endAt?new So(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new So(e.startAt.position,e.startAt.inclusive):null;e._t=Ff(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function Gc(t,e,n){return new ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return du(rn(t),rn(e))&&t.limitType===e.limitType}function Bm(t){return`${fu(rn(t))}|lt:${t.limitType}`}function Qc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Fm(r)).join(", ")}]`),pa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>jr(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>jr(r)).join(",")),`Target(${n})`}(rn(t))}; limitType=${t.limitType})`}function ya(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):K.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Or(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Pf(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Or(n),r)||n.endAt&&!function(s,i,o){const a=Pf(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Or(n),r))}(t,e)}function TC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vm(t){return(e,n)=>{let r=!1;for(const s of Or(t)){const i=IC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function IC(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Vr(a,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Io(e)?"-0":e}}function qm(t){return{integerValue:""+t}}function SC(t,e){return oC(e)?qm(e):jm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this._=void 0}}function CC(t,e,n){return t instanceof Co?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ys?zm(t,e):t instanceof Xs?Km(t,e):function(r,s){const i=Hm(r,s),o=$f(i)+$f(r.gt);return zc(i)&&zc(r.gt)?qm(o):jm(r.yt,o)}(t,e)}function kC(t,e,n){return t instanceof Ys?zm(t,e):t instanceof Xs?Km(t,e):n}function Hm(t,e){return t instanceof ko?zc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Co extends va{}class Ys extends va{constructor(e){super(),this.elements=e}}function zm(t,e){const n=Wm(e);for(const r of t.elements)n.some(s=>Ht(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xs extends va{constructor(e){super(),this.elements=e}}function Km(t,e){let n=Wm(e);for(const r of t.elements)n=n.filter(s=>!Ht(s,r));return{arrayValue:{values:n}}}class ko extends va{constructor(e,n){super(),this.yt=e,this.gt=n}}function $f(t){return Le(t.integerValue||t.doubleValue)}function Wm(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ys&&r instanceof Ys||n instanceof Xs&&r instanceof Xs?$r(n.elements,r.elements,Ht):n instanceof ko&&r instanceof ko?Ht(n.gt,r.gt):n instanceof Co&&r instanceof Co}(t.transform,e.transform)}class RC{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wa{}function Gm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ym(t.key,Jt.none()):new bi(t.key,t.data,Jt.none());{const n=t.data,r=gt.empty();let s=new $e(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ur(t.key,r,new Rt(s.toArray()),Jt.none())}}function OC(t,e,n){t instanceof bi?function(r,s,i){const o=r.value.clone(),a=Vf(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(r,s,i){if(!Xi(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Vf(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Qm(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Is(t,e,n,r){return t instanceof bi?function(s,i,o,a){if(!Xi(s.precondition,i))return o;const c=s.value.clone(),l=jf(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(s,i,o,a){if(!Xi(s.precondition,i))return o;const c=jf(s.fieldTransforms,a,i),l=i.data;return l.setAll(Qm(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Xi(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function xC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Hm(r.transform,s||null);i!=null&&(n===null&&(n=gt.empty()),n.set(r.field,i))}return n||null}function Bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&$r(n,r,(s,i)=>AC(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bi extends wa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ur extends wa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vf(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,kC(o,a,n[s]))}return r}function jf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,CC(i,o,e))}return r}class Ym extends wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DC extends wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,fe;function PC(t){switch(t){default:return J();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Xm(t){if(t===void 0)return nn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Pe.OK:return C.OK;case Pe.CANCELLED:return C.CANCELLED;case Pe.UNKNOWN:return C.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return C.INTERNAL;case Pe.UNAVAILABLE:return C.UNAVAILABLE;case Pe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Pe.NOT_FOUND:return C.NOT_FOUND;case Pe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Pe.ABORTED:return C.ABORTED;case Pe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Pe.DATA_LOSS:return C.DATA_LOSS;default:return J()}}(fe=Pe||(Pe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Om(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=new Be(K.comparator);function sn(){return LC}const Jm=new Be(K.comparator);function ds(...t){let e=Jm;for(const n of t)e=e.insert(n.key,n);return e}function Zm(t){let e=Jm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kn(){return Ss()}function ey(){return Ss()}function Ss(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const MC=new Be(K.comparator),FC=new $e(K.comparator);function ue(...t){let e=FC;for(const n of t)e=e.add(n);return e}const UC=new $e(ve);function ty(){return UC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ei.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _a(re.min(),s,ty(),sn(),ue())}}class Ei{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ei(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,r,s){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=s}}class ny{constructor(e,n){this.targetId=e,this.Et=n}}class ry{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class qf{constructor(){this.At=0,this.Rt=zf(),this.bt=rt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ue(),n=ue(),r=ue();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new Ei(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=zf()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class $C{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=sn(),this.qt=Hf(),this.Ut=new $e(ve)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,s)=>{this.zt(s)&&n(s)})}Jt(e){const n=e.targetId,r=e.Et.count,s=this.Yt(n);if(s){const i=s.target;if(Wc(i))if(r===0){const o=new K(i.path);this.Qt(n,o,Ye.newNoDocument(o,re.min()))}else Ce(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Wc(a.target)){const c=new K(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ye.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let r=ue();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new _a(e,n,this.Ut,this.Lt,r);return this.Lt=sn(),this.qt=Hf(),this.Ut=new $e(ve),s}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const s=this.Wt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new qf,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new $e(ve),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new qf),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Hf(){return new Be(K.comparator)}function zf(){return new Be(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),VC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jC=(()=>({and:"AND",or:"OR"}))();class qC{constructor(e,n){this.databaseId=e,this.wt=n}}function Ao(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sy(t,e){return t.wt?e.toBase64():e.toUint8Array()}function HC(t,e){return Ao(t,e.toTimestamp())}function jt(t){return Ce(!!t),re.fromTimestamp(function(e){const n=An(e);return new Ue(n.seconds,n.nanos)}(t))}function gu(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function iy(t){const e=xe.fromString(t);return Ce(ly(e)),e}function Yc(t,e){return gu(t.databaseId,e.path)}function ec(t,e){const n=iy(e);if(n.get(1)!==t.databaseId.projectId)throw new G(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(oy(n))}function Xc(t,e){return gu(t.databaseId,e)}function zC(t){const e=iy(t);return e.length===4?xe.emptyPath():oy(e)}function Jc(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oy(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kf(t,e,n){return{name:Yc(t,e),fields:n.value.mapValue.fields}}function KC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(Ce(l===void 0||typeof l=="string"),rt.fromBase64String(l||"")):(Ce(l===void 0||l instanceof Uint8Array),rt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?C.UNKNOWN:Xm(c.code);return new G(l,c.message||"")}(o);n=new ry(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ec(t,r.document.name),i=jt(r.document.updateTime),o=r.document.createTime?jt(r.document.createTime):re.min(),a=new gt({mapValue:{fields:r.document.fields}}),c=Ye.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ji(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ec(t,r.document),i=r.readTime?jt(r.readTime):re.min(),o=Ye.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ji([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ec(t,r.document),i=r.removedTargetIds||[];n=new Ji([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new NC(s),o=r.targetId;n=new ny(o,i)}}return n}function WC(t,e){let n;if(e instanceof bi)n={update:Kf(t,e.key,e.value)};else if(e instanceof Ym)n={delete:Yc(t,e.key)};else if(e instanceof ur)n={update:Kf(t,e.key,e.data),updateMask:nk(e.fieldMask)};else{if(!(e instanceof DC))return J();n={verify:Yc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Co)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ys)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ko)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:HC(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function GC(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?jt(r.updateTime):jt(s);return i.isEqual(re.min())&&(i=jt(s)),new RC(i,r.transformResults||[])}(n,e))):[]}function QC(t,e){return{documents:[Xc(t,e.path)]}}function YC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Xc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return cy(zt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:_r(u.field),direction:ZC(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||pa(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function XC(t){let e=zC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=ay(u);return f instanceof zt&&Lm(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Ts(br(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,pa(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,h=u.values||[];return new So(h,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,h=u.values||[];return new So(h,f)}(n.endAt)),wC(e,s,o,i,a,"F",c,l)}function JC(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ay(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=br(e.unaryFilter.field);return Fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=br(e.unaryFilter.field);return Fe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=br(e.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=br(e.unaryFilter.field);return Fe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(e){return Fe.create(br(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return zt.create(e.compositeFilter.filters.map(n=>ay(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(t):J()}function ZC(t){return BC[t]}function ek(t){return VC[t]}function tk(t){return jC[t]}function _r(t){return{fieldPath:t.canonicalString()}}function br(t){return Je.fromServerFormat(t.fieldPath)}function cy(t){return t instanceof Fe?function(e){if(e.op==="=="){if(Nf(e.value))return{unaryFilter:{field:_r(e.field),op:"IS_NAN"}};if(Df(e.value))return{unaryFilter:{field:_r(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Nf(e.value))return{unaryFilter:{field:_r(e.field),op:"IS_NOT_NAN"}};if(Df(e.value))return{unaryFilter:{field:_r(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(e.field),op:ek(e.op),value:e.value}}}(t):t instanceof zt?function(e){const n=e.getFilters().map(r=>cy(r));return n.length===1?n[0]:{compositeFilter:{op:tk(e.op),filters:n}}}(t):J()}function nk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ly(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Is(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Is(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ey();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Gm(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&$r(this.mutations,e.mutations,(n,r)=>Bf(n,r))&&$r(this.baseMutations,e.baseMutations,(n,r)=>Bf(n,r))}}class mu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=MC;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r,s,i=re.min(),o=re.min(),a=rt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.ie=e}}function ok(t){const e=XC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.Je=new ck}addToCollectionParentIndex(e,n){return this.Je.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(kn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(kn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class ck{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new qr(0)}static vn(){return new qr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Is(r.mutation,s,Rt.empty(),Ue.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=Kn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ds();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=sn();const o=Ss(),a=Ss();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof ur)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Is(u.mutation,l,u.mutation.getFieldMask(),Ue.now())):o.set(l.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new uk(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ss();let s=new Be((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Rt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const f=(s.get(a.batchId)||ue()).add(c);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=ey();u.forEach(h=>{if(!i.has(h)){const p=Gm(n.get(h),r.get(h));p!==null&&f.set(h,p),i=i.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return K.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):EC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(Kn());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{c=c.insert(u,h)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:Zm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=ds();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const c=function(l,u){return new ga(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ye.newInvalidDocument(l)))});let o=ds();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Is(l.mutation,c,Rt.empty(),Ue.now()),ya(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:jt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:ok(r.bundledQuery),readTime:jt(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.overlays=new Be(K.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kn();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.oe(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=Kn(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Kn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Kn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}oe(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sk(n,r));let i=this.es.get(n);i===void 0&&(i=ue(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.ns=new $e(Ve.ss),this.rs=new $e(Ve.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ve(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new K(new xe([])),r=new Ve(n,e),s=new Ve(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new K(new xe([])),r=new Ve(n,e),s=new Ve(n,e+1);let i=ue();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ve(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return K.comparator(e.key,n.key)||ve(e._s,n._s)}static os(e,n){return ve(e._s,n._s)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new $e(Ve.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rk(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),s=new Ve(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(ve);return n.forEach(s=>{const i=new Ve(s,0),o=new Ve(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new K(i),0);let a=new $e(ve);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,s=>{const i=new Ve(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ve(n,0),s=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.Es=e,this.docs=new Be(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=sn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||nC(tC(u),r)<=0||(s.has(u.key)||ya(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mk(this)}getSize(e){return S.resolve(this.size)}}class mk extends lk{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.persistence=e,this.Rs=new ts(n=>fu(n),du),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.bs=0,this.Ps=new yu,this.targetCount=0,this.vs=qr.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new qr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new uu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new yk(this),this.indexManager=new ak,this.remoteDocumentCache=function(r){return new gk(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new ik(n),this.Ns=new fk(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new pk(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new wk(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class wk extends sC{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.Fs=new yu,this.$s=null}static Bs(e){return new vu(e)}get Ls(){if(this.$s)return this.$s;throw J()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const s=K.fromPath(r);return this.qs(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Uf(n))return S.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Gc(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Gc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,r,s){return Uf(n)||s.isEqual(re.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(Rf()<=ye.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qc(n)),this.Bi(e,o,n,eC(s,-1)))})}Fi(e,n){let r=new $e(Vm(e));return n.forEach((s,i)=>{ya(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return Rf()<=ye.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Qc(n)),this.Ni.getDocumentsMatchingQuery(e,n,kn.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.yt=s,this.qi=new Be(ve),this.Ui=new ts(i=>fu(i),du),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hk(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Ek(t,e,n,r){return new bk(t,e,n,r)}async function uy(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ue();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Tk(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let h=S.resolve();return f.forEach(p=>{h=h.next(()=>l.getEntry(a,p)).next(m=>{const v=c.docVersions.get(p);Ce(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ue();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function hy(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Ik(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const a=[];e.targetChanges.forEach((u,f)=>{const h=s.get(f);if(!h)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,f)));let p=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?p=p.withResumeToken(rt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(f,p),function(m,v,_){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=sn(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Sk(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!r.isEqual(re.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(f=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=s,i))}function Sk(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=sn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function Ck(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kk(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new Jn(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.qi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function Zc(t,e,n){const r=ie(t),s=r.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_i(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(s.target)}function Wf(t,e,n){const r=ie(t);let s=re.min(),i=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ie(a),f=u.Ui.get(l);return f!==void 0?S.resolve(u.qi.get(f)):u.Cs.getTargetData(c,l)}(r,o,rn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:re.min(),n?i:ue())).next(a=>(Ak(r,TC(e),a),{documents:a,Hi:i})))}function Ak(t,e,n){let r=t.Ki.get(e)||re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}class Gf{constructor(){this.activeTargetIds=ty()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rk{constructor(){this.Lr=new Gf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Gf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);j("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(j("RestConnection","Received: ",c),c),c=>{throw qc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=xk[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new HS;a.setWithCredentials(!0),a.listenOnce(VS.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Za.NO_ERROR:const l=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Za.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new G(C.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const h=f==null?void 0:f.error;if(h&&h.status&&h.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(v)>=0?v:C.UNKNOWN}(h.status);o(new G(p,h.message))}else o(new G(C.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new G(C.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=$S(),o=BS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new qS({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");j("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,f=!1;const h=new Dk({Hr:m=>{f?j("Connection","Not sending because WebChannel is closed:",m):(u||(j("Connection","Opening WebChannel transport."),l.open(),u=!0),j("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),p=(m,v,_)=>{m.listen(v,T=>{try{_(T)}catch(R){setTimeout(()=>{throw R},0)}})};return p(l,Ui.EventType.OPEN,()=>{f||j("Connection","WebChannel transport opened.")}),p(l,Ui.EventType.CLOSE,()=>{f||(f=!0,j("Connection","WebChannel transport closed"),h.io())}),p(l,Ui.EventType.ERROR,m=>{f||(f=!0,qc("Connection","WebChannel transport errored:",m),h.io(new G(C.UNAVAILABLE,"The operation could not be completed")))}),p(l,Ui.EventType.MESSAGE,m=>{var v;if(!f){const _=m.data[0];Ce(!!_);const T=_,R=T.error||((v=T[0])===null||v===void 0?void 0:v.error);if(R){j("Connection","WebChannel received error:",R);const x=R.status;let V=function(ee){const se=Pe[ee];if(se!==void 0)return Xm(se)}(x),F=R.message;V===void 0&&(V=C.INTERNAL,F="Unknown error status: "+x+" with message "+R.message),f=!0,h.io(new G(V,F)),l.close()}else j("Connection","WebChannel received:",_),h.ro(_)}}),p(o,jS.STAT_EVENT,m=>{m.stat===kf.PROXY?j("Connection","Detected buffering proxy"):m.stat===kf.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}function tc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){return new qC(t,!0)}class fy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new fy(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(nn(n.toString()),nn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new G(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pk extends dy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=KC(this.yt,e),r=function(s){if(!("targetChange"in s))return re.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?jt(i.readTime):re.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Jc(this.yt),n.addTarget=function(s,i){let o;const a=i.target;return o=Wc(a)?{documents:QC(s,a)}:{query:YC(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=sy(s,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=Ao(s,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=JC(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Jc(this.yt),n.removeTarget=e,this.Bo(n)}}class Lk extends dy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=GC(e.writeResults,e.commitTime),r=jt(e.commitTime);return this.listener.Zo(r,n)}return Ce(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Jc(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>WC(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=s,this.nu=!1}su(){if(this.nu)throw new G(C.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(C.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(C.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Fk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(nn(n),this.ou=!1):j("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{hr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ie(a);c._u.add(4),await Ti(c),c.gu.set("Unknown"),c._u.delete(4),await Ea(c)}(this))})}),this.gu=new Fk(r,s)}}async function Ea(t){if(hr(t))for(const e of t.wu)await e(!0)}async function Ti(t){for(const e of t.wu)await e(!1)}function py(t,e){const n=ie(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Eu(n)?bu(n):ns(n).ko()&&_u(n,e))}function gy(t,e){const n=ie(t),r=ns(n);n.du.delete(e),r.ko()&&my(n,e),n.du.size===0&&(r.ko()?r.Fo():hr(n)&&n.gu.set("Unknown"))}function _u(t,e){t.yu.Ot(e.targetId),ns(t).zo(e)}function my(t,e){t.yu.Ot(e),ns(t).Ho(e)}function bu(t){t.yu=new $C({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ns(t).start(),t.gu.uu()}function Eu(t){return hr(t)&&!ns(t).No()&&t.du.size>0}function hr(t){return ie(t)._u.size===0}function yy(t){t.yu=void 0}async function $k(t){t.du.forEach((e,n)=>{_u(t,e)})}async function Bk(t,e){yy(t),Eu(t)?(t.gu.hu(e),bu(t)):t.gu.set("Unknown")}async function Vk(t,e,n){if(t.gu.set("Online"),e instanceof ry&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ro(t,r)}else if(e instanceof Ji?t.yu.Kt(e):e instanceof ny?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(re.min()))try{const r=await hy(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.du.get(c);l&&s.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(rt.EMPTY_BYTE_STRING,c.snapshotVersion)),my(s,a);const l=new Jn(c.target,a,1,c.sequenceNumber);_u(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Ro(t,r)}}async function Ro(t,e,n){if(!_i(e))throw e;t._u.add(1),await Ti(t),t.gu.set("Offline"),n||(n=()=>hy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ea(t)})}function vy(t,e){return e().catch(n=>Ro(t,n,e))}async function Ta(t){const e=ie(t),n=Rn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;jk(e);)try{const s=await Ck(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,qk(e,s)}catch(s){await Ro(e,s)}wy(e)&&_y(e)}function jk(t){return hr(t)&&t.fu.length<10}function qk(t,e){t.fu.push(e);const n=Rn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function wy(t){return hr(t)&&!Rn(t).No()&&t.fu.length>0}function _y(t){Rn(t).start()}async function Hk(t){Rn(t).eu()}async function zk(t){const e=Rn(t);for(const n of t.fu)e.Xo(n.mutations)}async function Kk(t,e,n){const r=t.fu.shift(),s=mu.from(r,e,n);await vy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ta(t)}async function Wk(t,e){e&&Rn(t).Yo&&await async function(n,r){if(s=r.code,PC(s)&&s!==C.ABORTED){const i=n.fu.shift();Rn(n).Mo(),await vy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ta(n)}var s}(t,e),wy(t)&&_y(t)}async function Yf(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=hr(n);n._u.add(3),await Ti(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ea(n)}async function Gk(t,e){const n=ie(t);e?(n._u.delete(2),await Ea(n)):e||(n._u.add(2),await Ti(n),n.gu.set("Unknown"))}function ns(t){return t.pu||(t.pu=function(e,n,r){const s=ie(e);return s.su(),new Pk(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(t.datastore,t.asyncQueue,{Yr:$k.bind(null,t),Zr:Bk.bind(null,t),Wo:Vk.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Eu(t)?bu(t):t.gu.set("Unknown")):(await t.pu.stop(),yy(t))})),t.pu}function Rn(t){return t.Iu||(t.Iu=function(e,n,r){const s=ie(e);return s.su(),new Lk(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(t.datastore,t.asyncQueue,{Yr:Hk.bind(null,t),Zr:Wk.bind(null,t),tu:zk.bind(null,t),Zo:Kk.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ta(t)):(await t.Iu.stop(),t.fu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Tu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iu(t,e){if(nn("AsyncQueue",`${e}: ${t}`),_i(t))return new G(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=ds(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.Tu=new Be(K.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):J():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hr(e,n,xr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.Au=void 0,this.listeners=[]}}class Yk{constructor(){this.queries=new ts(e=>Bm(e),ma),this.onlineState="Unknown",this.Ru=new Set}}async function Xk(t,e){const n=ie(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Qk),s)try{i.Au=await n.onListen(r)}catch(o){const a=Iu(o,`Initialization of query '${Qc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Su(n)}async function Jk(t,e){const n=ie(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Zk(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&Su(n)}function eA(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Su(t){t.Ru.forEach(e=>{e.next()})}class tA{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Hr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Hr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.key=e}}class Ey{constructor(e){this.key=e}}class nA{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ue(),this.mutatedKeys=ue(),this.Gu=Vm(e),this.Qu=new xr(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new Xf,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,f)=>{const h=s.get(u),p=ya(this.query,f)?f:null,m=!!h&&this.mutatedKeys.has(h.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;h&&p?h.data.isEqual(p.data)?m!==v&&(r.track({type:3,doc:p}),_=!0):this.Hu(h,p)||(r.track({type:2,doc:p}),_=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),_=!0):h&&!p&&(r.track({type:1,doc:h}),_=!0,(c||l)&&(a=!0)),_&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(f,h){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return p(f)-p(h)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Hr(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Xf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ue(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Ey(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new by(r))}),n}tc(e){this.qu=e.Hi,this.Ku=ue();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Hr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class rA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sA{constructor(e){this.key=e,this.nc=!1}}class iA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ts(a=>Bm(a),ma),this.rc=new Map,this.oc=new Set,this.uc=new Be(K.comparator),this.cc=new Map,this.ac=new yu,this.hc={},this.lc=new Map,this.fc=qr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function oA(t,e){const n=mA(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await kk(n.localStore,rn(e));n.isPrimaryClient&&py(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await aA(n,e,r,a==="current",o.resumeToken)}return s}async function aA(t,e,n,r,s){t._c=(f,h,p)=>async function(m,v,_,T){let R=v.view.Wu(_);R.$i&&(R=await Wf(m.localStore,v.query,!1).then(({documents:F})=>v.view.Wu(F,R)));const x=T&&T.targetChanges.get(v.targetId),V=v.view.applyChanges(R,m.isPrimaryClient,x);return Zf(m,v.targetId,V.Xu),V.snapshot}(t,f,h,p);const i=await Wf(t.localStore,e,!0),o=new nA(e,i.Hi),a=o.Wu(i.documents),c=Ei.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Zf(t,n,l.Xu);const u=new rA(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function cA(t,e){const n=ie(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!ma(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),gy(n.remoteStore,r.targetId),el(n,r.targetId)}).catch(wi)):(el(n,r.targetId),await Zc(n.localStore,r.targetId,!0))}async function lA(t,e,n){const r=yA(t);try{const s=await function(i,o){const a=ie(i),c=Ue.now(),l=o.reduce((h,p)=>h.add(p.key),ue());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let p=sn(),m=ue();return a.Gi.getEntries(h,l).next(v=>{p=v,p.forEach((_,T)=>{T.isValidDocument()||(m=m.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,p)).next(v=>{u=v;const _=[];for(const T of o){const R=xC(T,u.get(T.key).overlayedDocument);R!=null&&_.push(new ur(T.key,R,$m(R.value.mapValue),Jt.exists(!0)))}return a.mutationQueue.addMutationBatch(h,c,_,o)}).next(v=>{f=v;const _=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(h,v.batchId,_)})}).then(()=>({batchId:f.batchId,changes:Zm(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Be(ve)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Ii(r,s.changes),await Ta(r.remoteStore)}catch(s){const i=Iu(s,"Failed to persist write");n.reject(i)}}async function Ty(t,e){const n=ie(t);try{const r=await Ik(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?Ce(o.nc):s.removedDocuments.size>0&&(Ce(o.nc),o.nc=!1))}),await Ii(n,r,e)}catch(r){await wi(r)}}function Jf(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ie(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.bu(o)&&(c=!0)}),c&&Su(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uA(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new Be(K.comparator);o=o.insert(i,Ye.newNoDocument(i,re.min()));const a=ue().add(i),c=new _a(re.min(),new Map,new $e(ve),o,a);await Ty(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),Cu(r)}else await Zc(r.localStore,e,!1).then(()=>el(r,e,n)).catch(wi)}async function hA(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await Tk(n.localStore,e);Sy(n,r,null),Iy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ii(n,s)}catch(s){await wi(s)}}async function fA(t,e,n){const r=ie(t);try{const s=await function(i,o){const a=ie(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ce(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);Sy(r,e,n),Iy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ii(r,s)}catch(s){await wi(s)}}function Iy(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Sy(t,e,n){const r=ie(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function el(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Cy(t,r)})}function Cy(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(gy(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Cu(t))}function Zf(t,e,n){for(const r of n)r instanceof by?(t.ac.addReference(r.key,e),dA(t,r)):r instanceof Ey?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Cy(t,r.key)):J()}function dA(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.oc.add(r),Cu(t))}function Cu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new K(xe.fromString(e)),r=t.fc.next();t.cc.set(r,new sA(n)),t.uc=t.uc.insert(n,r),py(t.remoteStore,new Jn(rn(pu(n.path)),r,2,uu.at))}}async function Ii(t,e,n){const r=ie(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=wu.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const l=ie(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,f=>S.forEach(f.Si,h=>l.persistence.referenceDelegate.addReference(u,f.targetId,h)).next(()=>S.forEach(f.Di,h=>l.persistence.referenceDelegate.removeReference(u,f.targetId,h)))))}catch(u){if(!_i(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const h=l.qi.get(f),p=h.snapshotVersion,m=h.withLastLimboFreeSnapshotVersion(p);l.qi=l.qi.insert(f,m)}}}(r.localStore,i))}async function pA(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await uy(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new G(C.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ii(n,r.ji)}}function gA(t,e){const n=ie(t),r=n.cc.get(e);if(r&&r.nc)return ue().add(r.key);{let s=ue();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function mA(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ty.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uA.bind(null,e),e.sc.Wo=Zk.bind(null,e.eventManager),e.sc.wc=eA.bind(null,e.eventManager),e}function yA(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fA.bind(null,e),e}class vA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ba(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Ek(this.persistence,new _k,e.initialUser,this.yt)}yc(e){return new vk(vu.Bs,this.yt)}gc(e){return new Rk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pA.bind(null,this.syncEngine),await Gk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Yk}createDatastore(e){const n=ba(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Nk(s));var s;return function(i,o,a,c){return new Mk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Jf(this.syncEngine,a,0),o=Qf.C()?new Qf:new Ok,new Uk(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new iA(r,s,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ie(e);j("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ti(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t,e,n){if(!n)throw new G(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bA(t,e,n,r){if(e===!0&&r===!0)throw new G(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ed(t){if(!K.isDocumentKey(t))throw new G(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ku(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Js(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ku(t);throw new G(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map;class nd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new G(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zS;switch(n.type){case"gapi":const r=n.client;return new QS(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new G(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=td.get(e);n&&(j("ComponentProvider","Removing Datastore"),td.delete(e),n.terminate())}(this),Promise.resolve()}}function EA(t,e,n,r={}){var s;const i=(t=Js(t,Au))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&qc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Qe.MOCK_USER;else{o=EE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Qe(c)}t._authCredentials=new KS(new Am(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Ru{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ru(this.firestore,e,this._query)}}class Zs extends Ru{constructor(e,n,r){super(e,n,pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new K(e))}withConverter(e){return new Zs(this.firestore,e,this._path)}}function pO(t,e,...n){if(t=wt(t),arguments.length===1&&(e=Rm.R()),_A("doc","path",e),t instanceof Au){const r=xe.fromString(e,...n);return ed(r),new vt(t,null,new K(r))}{if(!(t instanceof vt||t instanceof Zs))throw new G(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return ed(r),new vt(t.firestore,t instanceof Zs?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):nn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=Rm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Iu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function SA(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await uy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function CA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kA(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Yf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Yf(e.remoteStore,i)),t.onlineComponents=e}async function kA(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await SA(t,new vA)),t.offlineComponents}async function ky(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await CA(t,new wA)),t.onlineComponents}function AA(t){return ky(t).then(e=>e.syncEngine)}async function RA(t){const e=await ky(t),n=e.eventManager;return n.onListen=oA.bind(null,e.syncEngine),n.onUnlisten=cA.bind(null,e.syncEngine),n}function OA(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new TA({next:f=>{i.enqueueAndForget(()=>Jk(s,u));const h=f.docs.has(o);!h&&f.fromCache?c.reject(new G(C.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&f.fromCache&&a&&a.source==="server"?c.reject(new G(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),u=new tA(pu(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Xk(s,u)}(await RA(t),t.asyncQueue,e,n,r)),r.promise}class xA{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new fy(this,"async_queue_retry"),this.Wc=()=>{const n=tc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=tc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new In;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!_i(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=Tu.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.Uc.push(s),s}zc(){this.Kc&&J()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Ou extends Au{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new xA,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ry(this),this._firestoreClient.terminate()}}function DA(t,e){const n=typeof t=="object"?t:Wp(),r=typeof t=="string"?t:e||"(default)",s=xl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wE("firestore");i&&EA(s,...i)}return s}function Ay(t){return t._firestoreClient||Ry(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ry(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new iC(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new IA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zr(rt.fromBase64String(e))}catch(n){throw new G(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zr(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=/^__.*__$/;class PA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new bi(e,this.data,n,this.fieldTransforms)}}function xy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Nu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Oo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(xy(this.sa)&&NA.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class LA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||ba(e)}da(e,n,r,s=!1){return new Nu({sa:e,methodName:n,fa:r,path:Je.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function MA(t){const e=t._freezeSettings(),n=ba(t._databaseId);return new LA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FA(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);Ly("Data must be an object, but it was:",o,r);const a=Ny(r,o);let c,l;if(i.merge)c=new Rt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const h=UA(e,f,n);if(!o.contains(h))throw new G(C.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);BA(u,h)||u.push(h)}c=new Rt(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new PA(new gt(a),c,l)}function Dy(t,e){if(Py(t=wt(t)))return Ly("Unsupported field value:",e,t),Ny(t,e);if(t instanceof Oy)return function(n,r){if(!xy(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Dy(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=wt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return SC(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ue.fromDate(n);return{timestampValue:Ao(r.yt,s)}}if(n instanceof Ue){const s=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ao(r.yt,s)}}if(n instanceof Du)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zr)return{bytesValue:sy(r.yt,n._byteString)};if(n instanceof vt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gu(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${ku(n)}`)}(t,e)}function Ny(t,e){const n={};return Om(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,s)=>{const i=Dy(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Py(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Du||t instanceof zr||t instanceof vt||t instanceof Oy)}function Ly(t,e,n){if(!Py(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ku(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function UA(t,e,n){if((e=wt(e))instanceof xu)return e._internalPath;if(typeof e=="string")return My(t,e);throw Oo("Field path arguments must be of type string or ",t,!1,void 0,n)}const $A=new RegExp("[~\\*/\\[\\]]");function My(t,e,n){if(e.search($A)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xu(...e.split("."))._internalPath}catch{throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new G(C.INVALID_ARGUMENT,a+t+c)}function BA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VA extends Fy{data(){return super.data()}}function Uy(t,e){return typeof e=="string"?My(t,e):e instanceof xu?e._internalPath:e._delegate._internalPath}class jA{convertValue(e,n="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const r={};return es(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Du(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gs(e));default:return null}}convertTimestamp(e){const n=An(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Ce(ly(r));const s=new Ws(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $y extends Fy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zA extends $y{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t){t=Js(t,vt);const e=Js(t.firestore,Ou);return OA(Ay(e),t._key).then(n=>GA(e,t,n))}class KA extends jA{constructor(e){super(),this.firestore=e}convertBytes(e){return new zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function mO(t,e,n){t=Js(t,vt);const r=Js(t.firestore,Ou),s=qA(t.converter,e,n);return WA(r,[FA(MA(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Jt.none())])}function WA(t,e){return function(n,r){const s=new In;return n.asyncQueue.enqueueAndForget(async()=>lA(await AA(n),r,s)),s.promise}(Ay(t),e)}function GA(t,e,n){const r=n.docs.get(e._key),s=new KA(t);return new $y(t,s,e._key,r,new HA(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Zr=n})(ri),Fr(new tr("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Ou(new WS(n.getProvider("auth-internal")),new XS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new G(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ws(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Tn(Af,"3.8.3",t),Tn(Af,"3.8.3","esm2017")})();const QA={apiKey:{}.VITE_apiKey,authDomain:{}.VITE_authDomain,projectId:{}.VITE_projectId,storageBucket:{}.VITE_storageBucket,messagingSenderId:{}.VITE_messagingSenderId,appId:{}.VITE_appId,measurementId:{}.VITE_measurementId},By=Kp(QA),YA=jI(By),yO=DA(By);async function XA(){return new Promise((t,e)=>{const n=YA.onAuthStateChanged(r=>{n(),t(r)},r=>{n(),e(r)})})}async function nc(t,e,n){await XA()?t.path==="/login"||t.path==="/registrarse"?n({path:"/dashboard"}):n():t.path==="/login"||t.path==="/registrarse"?n():n({path:"/login"})}const JA=[{path:"/",component:()=>Mn(()=>import("./MainLayout.e295d604.js"),["assets/MainLayout.e295d604.js","assets/MainLayout.0c24d928.css","assets/use-prevent-scroll.85b3fece.js","assets/uid.42677368.js","assets/QItem.c1d497db.js","assets/use-dark.4dae1409.js","assets/QList.b253c7b4.js"]),children:[{path:"/",name:"inicio",component:()=>Mn(()=>import("./IndexPage.7e0ae41d.js"),["assets/IndexPage.7e0ae41d.js","assets/IndexPage.2e22fbae.css","assets/QPage.a64b1180.js","assets/QItemLabel.7632a361.js","assets/QItem.c1d497db.js","assets/use-dark.4dae1409.js","assets/QSeparator.f5285a54.js","assets/QList.b253c7b4.js"])},{path:"/login",beforeEnter:nc,component:()=>Mn(()=>import("./login.ec84e7ee.js"),["assets/login.ec84e7ee.js","assets/login.eb46db46.css","assets/QSeparator.f5285a54.js","assets/use-dark.4dae1409.js","assets/QCard.c6b15f76.js","assets/uid.42677368.js","assets/rules.aa36618f.js","assets/QPage.a64b1180.js"])},{path:"/registrarse",beforeEnter:nc,component:()=>Mn(()=>import("./registrarse.5fc693b1.js"),["assets/registrarse.5fc693b1.js","assets/registrarse.5248c246.css","assets/QSeparator.f5285a54.js","assets/use-dark.4dae1409.js","assets/QCard.c6b15f76.js","assets/uid.42677368.js","assets/rules.aa36618f.js","assets/QPage.a64b1180.js"])},{path:"/dashboard",beforeEnter:nc,component:()=>Mn(()=>import("./dashboard.c830b904.js"),["assets/dashboard.c830b904.js","assets/dashboard.8bcc0794.css","assets/QCard.c6b15f76.js","assets/use-dark.4dae1409.js","assets/uid.42677368.js","assets/QPage.a64b1180.js","assets/use-prevent-scroll.85b3fece.js","assets/QItem.c1d497db.js","assets/QItemLabel.7632a361.js"])}]},{path:"/:catchAll(.*)*",component:()=>Mn(()=>import("./ErrorNotFound.d6cee031.js"),[])}];var rc=function(){return hE({scrollBehavior:()=>({left:0,top:0}),routes:JA,history:kb("/")})};async function ZA(t,e){const n=t(ob);n.use(nb,e);const r=typeof La=="function"?await La({}):La;n.use(r);const s=cr(typeof rc=="function"?await rc({store:r}):rc);return r.use(({store:i})=>{i.router=s}),{app:n,store:r,router:s}}const tl={xs:18,sm:24,md:32,lg:38,xl:46},Pu={size:String};function Lu(t,e=tl){return Y(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const Si=t=>cr(_l(t)),eR=t=>cr(t);function tR(t,e){return t!==void 0&&t()||e}function vO(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function ps(t,e){return t!==void 0?e.concat(t()):e}function nR(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function wO(t,e,n,r,s,i){e.key=r+s;const o=Q(t,e,n);return s===!0?Jd(o,i()):o}const rd="0 0 24 24",sd=t=>t,sc=t=>`ionicons ${t}`,Vy={"mdi-":t=>`mdi ${t}`,"icon-":sd,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":sc,"ion-ios":sc,"ion-logo":sc,"iconfont ":sd,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},jy={o_:"-outlined",r_:"-round",s_:"-sharp"},qy={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},rR=new RegExp("^("+Object.keys(Vy).join("|")+")"),sR=new RegExp("^("+Object.keys(jy).join("|")+")"),id=new RegExp("^("+Object.keys(qy).join("|")+")"),iR=/^[Mm]\s?[-+]?\.?\d/,oR=/^img:/,aR=/^svguse:/,cR=/^ion-/,lR=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var xo=Si({name:"QIcon",props:{...Pu,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=ei(),r=Lu(t),s=Y(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),i=Y(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(iR.test(a)===!0){const[u,f=rd]=a.split("|");return{svg:!0,viewBox:f,nodes:u.split("&&").map(h=>{const[p,m,v]=h.split("@@");return Q("path",{style:m,d:p,transform:v})})}}if(oR.test(a)===!0)return{img:!0,src:a.substring(4)};if(aR.test(a)===!0){const[u,f=rd]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:f}}let c=" ";const l=a.match(rR);if(l!==null)o=Vy[l[1]](a);else if(lR.test(a)===!0)o=a;else if(cR.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(id.test(a)===!0){o="notranslate material-symbols";const u=a.match(id);u!==null&&(a=a.substring(6),o+=qy[u[1]]),c=a}else{o="notranslate material-icons";const u=a.match(sR);u!==null&&(a=a.substring(2),o+=jy[u[1]]),c=a}return{cls:o,content:c}});return()=>{const o={class:s.value,style:r.value,"aria-hidden":"true",role:"presentation"};return i.value.none===!0?Q(t.tag,o,tR(e.default)):i.value.img===!0?Q("span",o,ps(e.default,[Q("img",{src:i.value.src})])):i.value.svg===!0?Q("span",o,ps(e.default,[Q("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?Q("span",o,ps(e.default,[Q("svg",{viewBox:i.value.viewBox},[Q("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(o.class+=" "+i.value.cls),Q(t.tag,o,ps(e.default,[i.value.content])))}}}),uR=Si({name:"QAvatar",props:{...Pu,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=Lu(t),r=Y(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),s=Y(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const i=t.icon!==void 0?[Q(xo,{name:t.icon})]:void 0;return Q("div",{class:r.value,style:n.value},[Q("div",{class:"q-avatar__content row flex-center overflow-hidden",style:s.value},nR(e.default,i))])}}});const hR={size:{type:[Number,String],default:"1em"},color:String};function fR(t){return{cSize:Y(()=>t.size in tl?`${tl[t.size]}px`:t.size),classes:Y(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var Hy=Si({name:"QSpinner",props:{...hR,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=fR(t);return()=>Q("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[Q("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function dR(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function _O(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=Gn(t);if(e)return e.$el||e}function bO(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function pR(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function od(t,e,n,r){n.modifiers.stop===!0&&Tp(t);const s=n.modifiers.color;let i=n.modifiers.center;i=i===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),c=P_(t),{left:l,top:u,width:f,height:h}=e.getBoundingClientRect(),p=Math.sqrt(f*f+h*h),m=p/2,v=`${(f-p)/2}px`,_=i?v:`${c.left-l-m}px`,T=`${(h-p)/2}px`,R=i?T:`${c.top-u-m}px`;a.className="q-ripple__inner",dR(a,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${_},${R},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${s?" text-"+s:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const x=()=>{o.remove(),clearTimeout(V)};n.abort.push(x);let V=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${v},${T},0) scale3d(1,1,1)`,a.style.opacity=.2,V=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,V=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(x),1)},275)},250)},50)}function ad(t,{modifiers:e,value:n,arg:r}){const s=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||r,keyCodes:[].concat(s.keyCodes||13)}}var gR=eR({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(s){r.enabled===!0&&s.qSkipRipple!==!0&&s.type===(r.modifiers.early===!0?"pointerdown":"click")&&od(s,t,r,s.qKeyEvent===!0)},keystart:pR(s=>{r.enabled===!0&&s.qSkipRipple!==!0&&bc(s,r.modifiers.keyCodes)===!0&&s.type===`key${r.modifiers.early===!0?"down":"up"}`&&od(s,t,r,!0)},300)};ad(r,e),t.__qripple=r,L_(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&ad(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),M_(e,"main"),delete t._qripple)}});const zy={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},mR=Object.keys(zy),yR={align:{type:String,validator:t=>mR.includes(t)}};function vR(t){return Y(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${zy[e]}`})}function EO(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function wR(t){return t.appContext.config.globalProperties.$router!==void 0}function TO(t){return t.isUnmounted===!0||t.isDeactivated===!0}function cd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function ld(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _R(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(Array.isArray(s)===!1||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ud(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function bR(t,e){return Array.isArray(t)===!0?ud(t,e):Array.isArray(e)===!0?ud(e,t):t===e}function ER(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(bR(t[n],e[n])===!1)return!1;return!0}const TR={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function IR({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=ei(),{props:r,proxy:s,emit:i}=n,o=wR(n),a=Y(()=>r.disable!==!0&&r.href!==void 0),c=Y(e===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),l=Y(()=>c.value===!0?R(r.to):null),u=Y(()=>l.value!==null),f=Y(()=>a.value===!0||u.value===!0),h=Y(()=>r.type==="a"||f.value===!0?"a":r.tag||t||"div"),p=Y(()=>a.value===!0?{href:r.href,target:r.target}:u.value===!0?{href:l.value.href,target:r.target}:{}),m=Y(()=>{if(u.value===!1)return-1;const{matched:F}=l.value,{length:ee}=F,se=F[ee-1];if(se===void 0)return-1;const U=s.$route.matched;if(U.length===0)return-1;const te=U.findIndex(ld.bind(null,se));if(te>-1)return te;const ae=cd(F[ee-2]);return ee>1&&cd(se)===ae&&U[U.length-1].path!==ae?U.findIndex(ld.bind(null,F[ee-2])):te}),v=Y(()=>u.value===!0&&m.value!==-1&&_R(s.$route.params,l.value.params)),_=Y(()=>v.value===!0&&m.value===s.$route.matched.length-1&&ER(s.$route.params,l.value.params)),T=Y(()=>u.value===!0?_.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":v.value===!0?` ${r.activeClass}`:"":"");function R(F){try{return s.$router.resolve(F)}catch{}return null}function x(F,{returnRouterError:ee,to:se=r.to,replace:U=r.replace}={}){if(r.disable===!0)return F.preventDefault(),Promise.resolve(!1);if(F.metaKey||F.altKey||F.ctrlKey||F.shiftKey||F.button!==void 0&&F.button!==0||r.target==="_blank")return Promise.resolve(!1);F.preventDefault();const te=s.$router[U===!0?"replace":"push"](se);return ee===!0?te:te.then(()=>{}).catch(()=>{})}function V(F){if(u.value===!0){const ee=se=>x(F,se);i("click",F,ee),F.defaultPrevented!==!0&&ee()}else i("click",F)}return{hasRouterLink:u,hasHrefLink:a,hasLink:f,linkTag:h,resolvedLink:l,linkIsActive:v,linkIsExactActive:_,linkClass:T,linkAttrs:p,getLink:R,navigateToRouterLink:x,navigateOnClick:V}}const hd={none:0,xs:4,sm:8,md:16,lg:24,xl:32},SR={xs:8,sm:10,md:14,lg:20,xl:24},CR=["button","submit","reset"],kR=/[^\s]\/[^\s]/,AR=["flat","outline","push","unelevated"],RR=(t,e)=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e,OR={...Pu,...TR,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...AR.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...yR.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function xR(t){const e=Lu(t,SR),n=vR(t),{hasRouterLink:r,hasLink:s,linkTag:i,linkAttrs:o,navigateOnClick:a}=IR({fallbackTag:"button"}),c=Y(()=>{const _=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},_,{padding:t.padding.split(/\s+/).map(T=>T in hd?hd[T]+"px":T).join(" "),minWidth:"0",minHeight:"0"}):_}),l=Y(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=Y(()=>t.disable!==!0&&t.loading!==!0),f=Y(()=>u.value===!0?t.tabindex||0:-1),h=Y(()=>RR(t,"standard")),p=Y(()=>{const _={tabindex:f.value};return s.value===!0?Object.assign(_,o.value):CR.includes(t.type)===!0&&(_.type=t.type),i.value==="a"?(t.disable===!0?_["aria-disabled"]="true":_.href===void 0&&(_.role="button"),r.value!==!0&&kR.test(t.type)===!0&&(_.type=t.type)):t.disable===!0&&(_.disabled="",_["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(_,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),_}),m=Y(()=>{let _;t.color!==void 0?t.flat===!0||t.outline===!0?_=`text-${t.textColor||t.color}`:_=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(_=`text-${t.textColor}`);const T=t.round===!0?"round":`rectangle${l.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${h.value} q-btn--${T}`+(_!==void 0?" "+_:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),v=Y(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:m,style:c,innerClasses:v,attributes:p,hasLink:s,linkTag:i,navigateOnClick:a,isActionable:u}}const{passiveCapture:pt}=er;let mr=null,yr=null,vr=null;var DR=Si({name:"QBtn",props:{...OR,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=ei(),{classes:s,style:i,innerClasses:o,attributes:a,hasLink:c,linkTag:l,navigateOnClick:u,isActionable:f}=xR(t),h=Nr(null),p=Nr(null);let m=null,v,_=null;const T=Y(()=>t.label!==void 0&&t.label!==null&&t.label!==""),R=Y(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),x=Y(()=>({center:t.round})),V=Y(()=>{const M=Math.max(0,Math.min(100,t.percentage));return M>0?{transition:"transform 0.6s",transform:`translateX(${M-100}%)`}:{}}),F=Y(()=>{if(t.loading===!0)return{onMousedown:me,onTouchstart:me,onClick:me,onKeydown:me,onKeyup:me};if(f.value===!0){const M={onClick:se,onKeydown:U,onMousedown:ae};if(r.$q.platform.has.touch===!0){const we=t.onTouchstart!==void 0?"":"Passive";M[`onTouchstart${we}`]=te}return M}return{onClick:pr}}),ee=Y(()=>({ref:h,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:i.value,...a.value,...F.value}));function se(M){if(h.value!==null){if(M!==void 0){if(M.defaultPrevented===!0)return;const we=document.activeElement;if(t.type==="submit"&&we!==document.body&&h.value.contains(we)===!1&&we.contains(h.value)===!1){h.value.focus();const be=()=>{document.removeEventListener("keydown",pr,!0),document.removeEventListener("keyup",be,pt),h.value!==null&&h.value.removeEventListener("blur",be,pt)};document.addEventListener("keydown",pr,!0),document.addEventListener("keyup",be,pt),h.value.addEventListener("blur",be,pt)}}u(M)}}function U(M){h.value!==null&&(n("keydown",M),bc(M,[13,32])===!0&&yr!==h.value&&(yr!==null&&L(),M.defaultPrevented!==!0&&(h.value.focus(),yr=h.value,h.value.classList.add("q-btn--active"),document.addEventListener("keyup",he,!0),h.value.addEventListener("blur",he,pt)),pr(M)))}function te(M){h.value!==null&&(n("touchstart",M),M.defaultPrevented!==!0&&(mr!==h.value&&(mr!==null&&L(),mr=h.value,m=M.target,m.addEventListener("touchcancel",he,pt),m.addEventListener("touchend",he,pt)),v=!0,_!==null&&clearTimeout(_),_=setTimeout(()=>{_=null,v=!1},200)))}function ae(M){h.value!==null&&(M.qSkipRipple=v===!0,n("mousedown",M),M.defaultPrevented!==!0&&vr!==h.value&&(vr!==null&&L(),vr=h.value,h.value.classList.add("q-btn--active"),document.addEventListener("mouseup",he,pt)))}function he(M){if(h.value!==null&&!(M!==void 0&&M.type==="blur"&&document.activeElement===h.value)){if(M!==void 0&&M.type==="keyup"){if(yr===h.value&&bc(M,[13,32])===!0){const we=new MouseEvent("click",M);we.qKeyEvent=!0,M.defaultPrevented===!0&&wc(we),M.cancelBubble===!0&&Tp(we),h.value.dispatchEvent(we),pr(M),M.qKeyEvent=!0}n("keyup",M)}L()}}function L(M){const we=p.value;M!==!0&&(mr===h.value||vr===h.value)&&we!==null&&we!==document.activeElement&&(we.setAttribute("tabindex",-1),we.focus()),mr===h.value&&(m!==null&&(m.removeEventListener("touchcancel",he,pt),m.removeEventListener("touchend",he,pt)),mr=m=null),vr===h.value&&(document.removeEventListener("mouseup",he,pt),vr=null),yr===h.value&&(document.removeEventListener("keyup",he,!0),h.value!==null&&h.value.removeEventListener("blur",he,pt),yr=null),h.value!==null&&h.value.classList.remove("q-btn--active")}function me(M){pr(M),M.qSkipRipple=!0}return bl(()=>{L(!0)}),Object.assign(r,{click:se}),()=>{let M=[];t.icon!==void 0&&M.push(Q(xo,{name:t.icon,left:t.stack===!1&&T.value===!0,role:"img","aria-hidden":"true"})),T.value===!0&&M.push(Q("span",{class:"block"},[t.label])),M=ps(e.default,M),t.iconRight!==void 0&&t.round===!1&&M.push(Q(xo,{name:t.iconRight,right:t.stack===!1&&T.value===!0,role:"img","aria-hidden":"true"}));const we=[Q("span",{class:"q-focus-helper",ref:p})];return t.loading===!0&&t.percentage!==void 0&&we.push(Q("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[Q("span",{class:"q-btn__progress-indicator fit block",style:V.value})])),we.push(Q("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},M)),t.loading!==null&&we.push(Q(Cl,{name:"q-transition--fade"},()=>t.loading===!0?[Q("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[Q(Hy)])]:null)),Jd(Q(l.value,ee.value,we),[[gR,R.value,void 0,x.value]])}}});let NR=1,PR=document.body;function LR(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${NR++}`:t,oo.globalNodes!==void 0){const r=oo.globalNodes.class;r!==void 0&&(n.className=r)}return PR.appendChild(n),n}function IO(t){t.remove()}let MR=0;const Zi={},eo={},St={},Ky={},FR=/^\s*$/,Wy=[],Mu=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],UR=["top-left","top-right","bottom-left","bottom-right"],Er={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function Gy(t,e,n){if(!t)return as("parameter required");let r;const s={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(s,Zi),Ls(t)===!1&&(s.type&&Object.assign(s,Er[s.type]),t={message:t}),Object.assign(s,Er[t.type||s.type],t),typeof s.icon=="function"&&(s.icon=s.icon(e)),s.spinner?(s.spinner===!0&&(s.spinner=Hy),s.spinner=cr(s.spinner)):s.spinner=!1,s.meta={hasMedia:Boolean(s.spinner!==!1||s.icon||s.avatar),hasText:fd(s.message)||fd(s.caption)},s.position){if(Mu.includes(s.position)===!1)return as("wrong position",t)}else s.position="bottom";if(s.timeout===void 0)s.timeout=5e3;else{const c=parseInt(s.timeout,10);if(isNaN(c)||c<0)return as("wrong timeout",t);s.timeout=c}s.timeout===0?s.progress=!1:s.progress===!0&&(s.meta.progressClass="q-notification__progress"+(s.progressClass?` ${s.progressClass}`:""),s.meta.progressStyle={animationDuration:`${s.timeout+1e3}ms`});const i=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(Zi.actions)===!0?Zi.actions:[]).concat(Er[t.type]!==void 0&&Array.isArray(Er[t.type].actions)===!0?Er[t.type].actions:[]),{closeBtn:o}=s;if(o&&i.push({label:typeof o=="string"?o:e.lang.label.close}),s.actions=i.map(({handler:c,noDismiss:l,...u})=>({flat:!0,...u,onClick:typeof c=="function"?()=>{c(),l!==!0&&a()}:()=>{a()}})),s.multiLine===void 0&&(s.multiLine=s.actions.length>1),Object.assign(s.meta,{class:`q-notification row items-stretch q-notification--${s.multiLine===!0?"multi-line":"standard"}`+(s.color!==void 0?` bg-${s.color}`:"")+(s.textColor!==void 0?` text-${s.textColor}`:"")+(s.classes!==void 0?` ${s.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(s.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(s.multiLine===!0?"":" col"),leftClass:s.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...s.attrs}}),s.group===!1?(s.group=void 0,s.meta.group=void 0):((s.group===void 0||s.group===!0)&&(s.group=[s.message,s.caption,s.multiline].concat(s.actions.map(c=>`${c.label}*${c.icon}`)).join("|")),s.meta.group=s.group+"|"+s.position),s.actions.length===0?s.actions=void 0:s.meta.actionsClass="q-notification__actions row items-center "+(s.multiLine===!0?"justify-end":"col-auto")+(s.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),s.meta.uid=n.notif.meta.uid;const c=St[s.position].value.indexOf(n.notif);St[s.position].value[c]=s}else{const c=eo[s.meta.group];if(c===void 0){if(s.meta.uid=MR++,s.meta.badge=1,["left","right","center"].indexOf(s.position)!==-1)St[s.position].value.splice(Math.floor(St[s.position].value.length/2),0,s);else{const l=s.position.indexOf("top")>-1?"unshift":"push";St[s.position].value[l](s)}s.group!==void 0&&(eo[s.meta.group]=s)}else{if(c.meta.timer&&(clearTimeout(c.meta.timer),c.meta.timer=void 0),s.badgePosition!==void 0){if(UR.includes(s.badgePosition)===!1)return as("wrong badgePosition",t)}else s.badgePosition=`top-${s.position.indexOf("left")>-1?"right":"left"}`;s.meta.uid=c.meta.uid,s.meta.badge=c.meta.badge+1,s.meta.badgeClass=`q-notification__badge q-notification__badge--${s.badgePosition}`+(s.badgeColor!==void 0?` bg-${s.badgeColor}`:"")+(s.badgeTextColor!==void 0?` text-${s.badgeTextColor}`:"")+(s.badgeClass?` ${s.badgeClass}`:"");const l=St[s.position].value.indexOf(c);St[s.position].value[l]=eo[s.meta.group]=s}}const a=()=>{$R(s),r=void 0};if(s.timeout>0&&(s.meta.timer=setTimeout(()=>{s.meta.timer=void 0,a()},s.timeout+1e3)),s.group!==void 0)return c=>{c!==void 0?as("trying to update a grouped one which is forbidden",t):a()};if(r={dismiss:a,config:t,notif:s},n!==void 0){Object.assign(n,r);return}return c=>{if(r!==void 0)if(c===void 0)r.dismiss();else{const l=Object.assign({},r.config,c,{group:!1,position:s.position});Gy(l,e,r)}}}function $R(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=St[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete eo[t.meta.group];const n=Wy[""+t.meta.uid];if(n){const{width:r,height:s}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=s}St[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function fd(t){return t!=null&&FR.test(t)!==!0}function as(t,e){return console.error(`Notify: ${t}`,e),!1}function BR(){return Si({name:"QNotifications",devtools:{hide:!0},setup(){return()=>Q("div",{class:"q-notifications"},Mu.map(t=>Q(w_,{key:t,class:Ky[t],tag:"div",name:`q-notification--${t}`},()=>St[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(Q(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(Q(xo,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(Q(uR,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>Q("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let i;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];i=e.caption?[Q("div",a),Q("div",{class:"q-notification__caption"},[e.caption])]:a}r.push(Q("div",o,i))}const s=[Q("div",{class:n.contentClass},r)];return e.progress===!0&&s.push(Q("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&s.push(Q("div",{class:n.actionsClass},e.actions.map(i=>Q(DR,i)))),n.badge>1&&s.push(Q("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),Q("div",{ref:i=>{Wy[""+n.uid]=i},key:n.uid,class:n.class,...n.attrs},[Q("div",{class:n.wrapperClass},s)])}))))}})}var VR={setDefaults(t){Ls(t)===!0&&Object.assign(Zi,t)},registerType(t,e){Ls(e)===!0&&(Er[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>Gy(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){Mu.forEach(r=>{St[r]=Nr([]);const s=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")>-1?"top":"bottom",i=r.indexOf("left")>-1?"start":r.indexOf("right")>-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${i}`;Ky[r]=`q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`});const n=LR("q-notify");Z_(BR(),e).mount(n)}}},jR={config:{notify:{}},lang:_c,plugins:{Notify:VR}};const qR="/";async function HR({app:t,router:e,store:n},r){let s=!1;const i=c=>{try{return e.resolve(c).href}catch{}return Object(c)===c?null:c},o=c=>{if(s=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const l=i(c);l!==null&&(window.location.href=l)},a=window.location.href.replace(window.location.origin,"");for(let c=0;s===!1&&c<r.length;c++)try{await r[c]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:qR})}catch(l){if(l&&l.url){o(l.url);return}console.error("[Quasar] boot error:",l);return}s!==!0&&(t.use(e),t.mount("#q-app"))}ZA(bp,jR).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[e]([Mn(()=>import("./axios.65b60c7e.js"),[])]).then(r=>{const s=n(r).filter(i=>typeof i=="function");HR(t,s)})});export{YR as $,F_ as A,iw as B,sw as C,ps as D,Jd as E,Ud as F,wO as G,ji as H,rO as I,Zn as J,ar as K,Xd as L,_l as M,YA as N,dw as O,cp as P,up as Q,Qv as R,cO as S,ct as T,DR as U,sl as V,XR as W,uR as X,fp as Y,Uw as Z,rb as _,Y as a,GR as a0,Ct as a1,xo as a2,zR as a3,gR as a4,iO as a5,bc as a6,z_ as a7,Pa as a8,TO as a9,mn as aA,Gn as aB,JR as aC,dO as aD,pO as aE,yO as aF,gO as aG,fO as aH,hO as aI,sO as aJ,kl as aK,cw as aL,yR as aM,vR as aN,mO as aO,uO as aP,EO as aQ,QR as aR,LR as aS,IO as aT,bO as aU,Pu as aV,Lu as aW,nR as aX,aw as aY,Yd as aZ,_O as aa,dR as ab,vc as ac,j_ as ad,wR as ae,eO as af,TR as ag,IR as ah,Cl as ai,Hy as aj,rl as ak,KR as al,WR as am,VR as an,X_ as ao,wt as ap,xl as aq,wE as ar,Wp as as,Fr as at,tr as au,Tn as av,EE as aw,ri as ax,an as ay,lO as az,aO as b,Si as c,tR as d,oO as e,vO as f,ei as g,Q as h,$t as i,Qd as j,er as k,nO as l,eR as m,Ps as n,bl as o,mt as p,ZR as q,Nr as r,L_ as s,tO as t,wc as u,Tp as v,qi as w,P_ as x,M_ as y,pr as z};
