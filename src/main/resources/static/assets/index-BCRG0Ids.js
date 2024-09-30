var he=Object.defineProperty;var ge=(t,e,n)=>e in t?he(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var St=(t,e,n)=>ge(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function h(){}const Zt=t=>t;function U(t,e){for(const n in e)t[n]=e[n];return t}function be(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function te(t){return t()}function xt(){return Object.create(null)}function W(t){t.forEach(te)}function ut(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ye(t){return Object.keys(t).length===0}function ee(t,...e){if(t==null){for(const r of e)r(void 0);return h}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function F(t,e,n){t.$$.on_destroy.push(ee(e,n))}function bt(t,e,n,r){if(t){const o=ne(t,e,n,r);return t[0](o)}}function ne(t,e,n,r){return t[1]&&r?U(n.ctx.slice(),t[1](r(e))):n.ctx}function yt(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],i=Math.max(e.dirty.length,o.length);for(let u=0;u<i;u+=1)s[u]=e.dirty[u]|o[u];return s}return e.dirty|o}return e.dirty}function kt(t,e,n,r,o,s){if(o){const i=ne(e,n,r,s);t.p(i,o)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Ct(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Dt(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}const re=typeof window<"u";let oe=re?()=>window.performance.now():()=>Date.now(),Mt=re?t=>requestAnimationFrame(t):h;const V=new Set;function se(t){V.forEach(e=>{e.c(t)||(V.delete(e),e.f())}),V.size!==0&&Mt(se)}function ie(t){let e;return V.size===0&&Mt(se),{promise:new Promise(n=>{V.add(e={c:t,f:n})}),abort(){V.delete(e)}}}function Q(t,e){t.appendChild(e)}function ce(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ke(t){const e=I("style");return e.textContent="/* empty */",we(ce(t),e),e.sheet}function we(t,e){return Q(t.head||t,e),e.sheet}function w(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function I(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function x(){return H(" ")}function tt(){return H("")}function ve(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function st(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Se=["width","height"];function Ht(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&Se.indexOf(r)===-1?t[r]=e[r]:st(t,r,e[r])}function Pe(t){return Array.from(t.childNodes)}function le(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function zt(t,e){return new t(e)}const pt=new Map;let mt=0;function $e(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ee(t,e){const n={stylesheet:ke(e),rules:{}};return pt.set(t,n),n}function ue(t,e,n,r,o,s,i,u=0){const c=16.666/r;let l=`{
`;for(let y=0;y<=1;y+=c){const d=e+(n-e)*s(y);l+=y*100+`%{${i(d,1-d)}}
`}const f=l+`100% {${i(n,1-n)}}
}`,a=`__svelte_${$e(f)}_${u}`,m=ce(t),{stylesheet:g,rules:_}=pt.get(m)||Ee(m,t);_[a]||(_[a]=!0,g.insertRule(`@keyframes ${a} ${f}`,g.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${a} ${r}ms linear ${o}ms 1 both`,mt+=1,a}function At(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),mt-=o,mt||Oe())}function Oe(){Mt(()=>{mt||(pt.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&k(e)}),pt.clear())})}let ct;function D(t){ct=t}function et(){if(!ct)throw new Error("Function called outside component initialization");return ct}function Ne(t){et().$$.on_mount.push(t)}function Re(t){et().$$.on_destroy.push(t)}function Ce(){const t=et();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const s=le(e,n,{cancelable:r});return o.slice().forEach(i=>{i.call(t,s)}),!s.defaultPrevented}return!0}}function Pt(t,e){return et().$$.context.set(t,e),e}function J(t){return et().$$.context.get(t)}const G=[],Ut=[];let X=[];const Bt=[],Ae=Promise.resolve();let Lt=!1;function Le(){Lt||(Lt=!0,Ae.then(jt))}function Z(t){X.push(t)}const $t=new Set;let q=0;function jt(){if(q!==0)return;const t=ct;do{try{for(;q<G.length;){const e=G[q];q++,D(e),Te(e.$$)}}catch(e){throw G.length=0,q=0,e}for(D(null),G.length=0,q=0;Ut.length;)Ut.pop()();for(let e=0;e<X.length;e+=1){const n=X[e];$t.has(n)||($t.add(n),n())}X.length=0}while(G.length);for(;Bt.length;)Bt.pop()();Lt=!1,$t.clear(),D(t)}function Te(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function Ie(t){const e=[],n=[];X.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),X=e}let ot;function fe(){return ot||(ot=Promise.resolve(),ot.then(()=>{ot=null})),ot}function ht(t,e,n){t.dispatchEvent(le(`${e?"intro":"outro"}${n}`))}const _t=new Set;let z;function nt(){z={r:0,c:[],p:z}}function rt(){z.r||W(z.c),z=z.p}function v(t,e){t&&t.i&&(_t.delete(t),t.i(e))}function P(t,e,n,r){if(t&&t.o){if(_t.has(t))return;_t.add(t),z.c.push(()=>{_t.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const ae={duration:0};function Me(t,e,n){const r={direction:"in"};let o=e(t,n,r),s=!1,i,u,c=0;function l(){i&&At(t,i)}function f(){const{delay:m=0,duration:g=300,easing:_=Zt,tick:b=h,css:y}=o||ae;y&&(i=ue(t,0,1,g,m,_,y,c++)),b(0,1);const d=oe()+m,$=d+g;u&&u.abort(),s=!0,Z(()=>ht(t,!0,"start")),u=ie(E=>{if(s){if(E>=$)return b(1,0),ht(t,!0,"end"),l(),s=!1;if(E>=d){const O=_((E-d)/g);b(O,1-O)}}return s})}let a=!1;return{start(){a||(a=!0,At(t),ut(o)?(o=o(r),fe().then(f)):f())},invalidate(){a=!1},end(){s&&(l(),s=!1)}}}function je(t,e,n){const r={direction:"out"};let o=e(t,n,r),s=!0,i;const u=z;u.r+=1;let c;function l(){const{delay:f=0,duration:a=300,easing:m=Zt,tick:g=h,css:_}=o||ae;_&&(i=ue(t,1,0,a,f,m,_));const b=oe()+f,y=b+a;Z(()=>ht(t,!1,"start")),"inert"in t&&(c=t.inert,t.inert=!0),ie(d=>{if(s){if(d>=y)return g(0,1),ht(t,!1,"end"),--u.r||W(u.c),!1;if(d>=b){const $=m((d-b)/a);g(1-$,$)}}return s})}return ut(o)?fe().then(()=>{o=o(r),l()}):l(),{end(f){f&&"inert"in t&&(t.inert=c),f&&o.tick&&o.tick(1,0),s&&(i&&At(t,i),s=!1)}}}function Kt(t,e){const n=e.token={};function r(o,s,i,u){if(e.token!==n)return;e.resolved=u;let c=e.ctx;i!==void 0&&(c=c.slice(),c[i]=u);const l=o&&(e.current=o)(c);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,m)=>{m!==s&&a&&(nt(),P(a,1,1,()=>{e.blocks[m]===a&&(e.blocks[m]=null)}),rt())}):e.block.d(1),l.c(),v(l,1),l.m(e.mount(),e.anchor),f=!0),e.block=l,e.blocks&&(e.blocks[s]=l),f&&jt()}if(be(t)){const o=et();if(t.then(s=>{D(o),r(e.then,1,e.value,s),D(null)},s=>{if(D(o),r(e.catch,2,e.error,s),D(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function xe(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}function Tt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],u=e[s];if(u){for(const c in i)c in u||(r[c]=1);for(const c in u)o[c]||(n[c]=u[c],o[c]=1);t[s]=u}else for(const c in i)o[c]=1}for(const i in r)i in n||(n[i]=void 0);return n}function at(t){return typeof t=="object"&&t!==null?t:{}}function T(t){t&&t.c()}function A(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),Z(()=>{const s=t.$$.on_mount.map(te).filter(ut);t.$$.on_destroy?t.$$.on_destroy.push(...s):W(s),t.$$.on_mount=[]}),o.forEach(Z)}function L(t,e){const n=t.$$;n.fragment!==null&&(Ie(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function De(t,e){t.$$.dirty[0]===-1&&(G.push(t),Le(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,n,r,o,s,i=null,u=[-1]){const c=ct;D(t);const l=t.$$={fragment:null,ctx:[],props:s,update:h,not_equal:o,bound:xt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:xt(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};i&&i(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,m,...g)=>{const _=g.length?g[0]:m;return l.ctx&&o(l.ctx[a],l.ctx[a]=_)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](_),f&&De(t,a)),m}):[],l.update(),f=!0,W(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const a=Pe(e.target);l.fragment&&l.fragment.l(a),a.forEach(k)}else l.fragment&&l.fragment.c();e.intro&&v(t.$$.fragment),A(t,e.target,e.anchor),jt()}D(c)}class K{constructor(){St(this,"$$");St(this,"$$set")}$destroy(){L(this,1),this.$destroy=h}$on(e,n){if(!ut(n))return h;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const He="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(He);const It={},gt={},de={},_e=/^:(.+)/,Ft=4,ze=3,Ue=2,Be=1,Ke=1,lt=t=>t.replace(/(^\/+|\/+$)/g,"").split("/"),Et=t=>t.replace(/(^\/+|\/+$)/g,""),Fe=(t,e)=>{const n=t.default?0:lt(t.path).reduce((r,o)=>(r+=Ft,o===""?r+=Ke:_e.test(o)?r+=Ue:o[0]==="*"?r-=Ft+Be:r+=ze,r),0);return{route:t,score:n,index:e}},We=t=>t.map(Fe).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index),Wt=(t,e)=>{let n,r;const[o]=e.split("?"),s=lt(o),i=s[0]==="",u=We(t);for(let c=0,l=u.length;c<l;c++){const f=u[c].route;let a=!1;if(f.default){r={route:f,params:{},uri:e};continue}const m=lt(f.path),g={},_=Math.max(s.length,m.length);let b=0;for(;b<_;b++){const y=m[b],d=s[b];if(y&&y[0]==="*"){const E=y==="*"?"*":y.slice(1);g[E]=s.slice(b).map(decodeURIComponent).join("/");break}if(typeof d>"u"){a=!0;break}const $=_e.exec(y);if($&&!i){const E=decodeURIComponent(d);g[$[1]]=E}else if(y!==d){a=!0;break}}if(!a){n={route:f,params:g,uri:"/"+s.slice(0,b).join("/")};break}}return n||r||null},Ot=(t,e)=>t+(e?`?${e}`:""),qe=(t,e)=>{if(t.startsWith("/"))return t;const[n,r]=t.split("?"),[o]=e.split("?"),s=lt(n),i=lt(o);if(s[0]==="")return Ot(o,r);if(!s[0].startsWith(".")){const l=i.concat(s).join("/");return Ot((o==="/"?"":"/")+l,r)}const u=i.concat(s),c=[];return u.forEach(l=>{l===".."?c.pop():l!=="."&&c.push(l)}),Ot("/"+c.join("/"),r)},qt=(t,e)=>`${Et(e==="/"?t:`${Et(t)}/${Et(e)}`)}/`,Ye=t=>!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey),pe=()=>typeof window<"u"&&"document"in window&&"location"in window,Qe=t=>({active:t&4}),Yt=t=>({active:!!t[2]});function Ge(t){let e,n,r,o;const s=t[17].default,i=bt(s,t,t[16],Yt);let u=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],c={};for(let l=0;l<u.length;l+=1)c=U(c,u[l]);return{c(){e=I("a"),i&&i.c(),Ht(e,c)},m(l,f){w(l,e,f),i&&i.m(e,null),n=!0,r||(o=ve(e,"click",t[5]),r=!0)},p(l,[f]){i&&i.p&&(!n||f&65540)&&kt(i,s,l,l[16],n?yt(s,l[16],f,Qe):wt(l[16]),Yt),Ht(e,c=Tt(u,[(!n||f&1)&&{href:l[0]},(!n||f&4)&&{"aria-current":l[2]},f&2&&l[1],f&64&&l[6]]))},i(l){n||(v(i,l),n=!0)},o(l){P(i,l),n=!1},d(l){l&&k(e),i&&i.d(l),r=!1,o()}}}function Ve(t,e,n){let r;const o=["to","replace","state","getProps","preserveScroll"];let s=Dt(e,o),i,u,{$$slots:c={},$$scope:l}=e,{to:f="#"}=e,{replace:a=!1}=e,{state:m={}}=e,{getProps:g=()=>({})}=e,{preserveScroll:_=!1}=e;const b=J(It);F(t,b,S=>n(14,i=S));const{base:y}=J(gt);F(t,y,S=>n(15,u=S));const{navigate:d}=J(de),$=Ce();let E,O,j,ft;const vt=S=>{if($("click",S),Ye(S)){S.preventDefault();const p=i.pathname===E||a;d(E,{state:m,replace:p,preserveScroll:_})}};return t.$$set=S=>{e=U(U({},e),Ct(S)),n(6,s=Dt(e,o)),"to"in S&&n(7,f=S.to),"replace"in S&&n(8,a=S.replace),"state"in S&&n(9,m=S.state),"getProps"in S&&n(10,g=S.getProps),"preserveScroll"in S&&n(11,_=S.preserveScroll),"$$scope"in S&&n(16,l=S.$$scope)},t.$$.update=()=>{t.$$.dirty&32896&&n(0,E=qe(f,u.uri)),t.$$.dirty&16385&&n(12,O=i.pathname.startsWith(E)),t.$$.dirty&16385&&n(13,j=E===i.pathname),t.$$.dirty&8192&&n(2,r=j?"page":void 0),n(1,ft=g({location:i,href:E,isPartiallyCurrent:O,isCurrent:j,existingProps:s}))},[E,ft,r,b,y,vt,s,f,a,m,g,_,O,j,i,u,l,c]}class Nt extends K{constructor(e){super(),B(this,e,Ve,Ge,M,{to:7,replace:8,state:9,getProps:10,preserveScroll:11})}}const Je=t=>({params:t&4}),Qt=t=>({params:t[2]});function Gt(t){let e,n,r,o;const s=[Ze,Xe],i=[];function u(c,l){return c[0]?0:1}return e=u(t),n=i[e]=s[e](t),{c(){n.c(),r=tt()},m(c,l){i[e].m(c,l),w(c,r,l),o=!0},p(c,l){let f=e;e=u(c),e===f?i[e].p(c,l):(nt(),P(i[f],1,1,()=>{i[f]=null}),rt(),n=i[e],n?n.p(c,l):(n=i[e]=s[e](c),n.c()),v(n,1),n.m(r.parentNode,r))},i(c){o||(v(n),o=!0)},o(c){P(n),o=!1},d(c){c&&k(r),i[e].d(c)}}}function Xe(t){let e;const n=t[8].default,r=bt(n,t,t[7],Qt);return{c(){r&&r.c()},m(o,s){r&&r.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&132)&&kt(r,n,o,o[7],e?yt(n,o[7],s,Je):wt(o[7]),Qt)},i(o){e||(v(r,o),e=!0)},o(o){P(r,o),e=!1},d(o){r&&r.d(o)}}}function Ze(t){let e,n,r,o={ctx:t,current:null,token:null,hasCatch:!1,pending:nn,then:en,catch:tn,value:12,blocks:[,,,]};return Kt(n=t[0],o),{c(){e=tt(),o.block.c()},m(s,i){w(s,e,i),o.block.m(s,o.anchor=i),o.mount=()=>e.parentNode,o.anchor=e,r=!0},p(s,i){t=s,o.ctx=t,i&1&&n!==(n=t[0])&&Kt(n,o)||xe(o,t,i)},i(s){r||(v(o.block),r=!0)},o(s){for(let i=0;i<3;i+=1){const u=o.blocks[i];P(u)}r=!1},d(s){s&&k(e),o.block.d(s),o.token=null,o=null}}}function tn(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function en(t){var u;let e,n,r;const o=[t[2],t[3]];var s=((u=t[12])==null?void 0:u.default)||t[12];function i(c,l){let f={};for(let a=0;a<o.length;a+=1)f=U(f,o[a]);return l!==void 0&&l&12&&(f=U(f,Tt(o,[l&4&&at(c[2]),l&8&&at(c[3])]))),{props:f}}return s&&(e=zt(s,i(t))),{c(){e&&T(e.$$.fragment),n=tt()},m(c,l){e&&A(e,c,l),w(c,n,l),r=!0},p(c,l){var f;if(l&1&&s!==(s=((f=c[12])==null?void 0:f.default)||c[12])){if(e){nt();const a=e;P(a.$$.fragment,1,0,()=>{L(a,1)}),rt()}s?(e=zt(s,i(c,l)),T(e.$$.fragment),v(e.$$.fragment,1),A(e,n.parentNode,n)):e=null}else if(s){const a=l&12?Tt(o,[l&4&&at(c[2]),l&8&&at(c[3])]):{};e.$set(a)}},i(c){r||(e&&v(e.$$.fragment,c),r=!0)},o(c){e&&P(e.$$.fragment,c),r=!1},d(c){c&&k(n),e&&L(e,c)}}}function nn(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function rn(t){let e,n,r=t[1]&&t[1].route===t[5]&&Gt(t);return{c(){r&&r.c(),e=tt()},m(o,s){r&&r.m(o,s),w(o,e,s),n=!0},p(o,[s]){o[1]&&o[1].route===o[5]?r?(r.p(o,s),s&2&&v(r,1)):(r=Gt(o),r.c(),v(r,1),r.m(e.parentNode,e)):r&&(nt(),P(r,1,1,()=>{r=null}),rt())},i(o){n||(v(r),n=!0)},o(o){P(r),n=!1},d(o){o&&k(e),r&&r.d(o)}}}function on(t,e,n){let r,{$$slots:o={},$$scope:s}=e,{path:i=""}=e,{component:u=null}=e,c={},l={};const{registerRoute:f,unregisterRoute:a,activeRoute:m}=J(gt);F(t,m,_=>n(1,r=_));const g={path:i,default:i===""};return f(g),Re(()=>{a(g)}),t.$$set=_=>{n(11,e=U(U({},e),Ct(_))),"path"in _&&n(6,i=_.path),"component"in _&&n(0,u=_.component),"$$scope"in _&&n(7,s=_.$$scope)},t.$$.update=()=>{if(r&&r.route===g){n(2,c=r.params);const{component:_,path:b,...y}=e;n(3,l=y),_&&(_.toString().startsWith("class ")?n(0,u=_):n(0,u=_())),pe()&&!r.preserveScroll&&(window==null||window.scrollTo(0,0))}},e=Ct(e),[u,r,c,l,m,g,i,s,o]}class dt extends K{constructor(e){super(),B(this,e,on,rn,M,{path:6,component:0})}}const Y=[];function sn(t,e){return{subscribe:it(t,e).subscribe}}function it(t,e=h){let n;const r=new Set;function o(u){if(M(t,u)&&(t=u,n)){const c=!Y.length;for(const l of r)l[1](),Y.push(l,t);if(c){for(let l=0;l<Y.length;l+=2)Y[l][0](Y[l+1]);Y.length=0}}}function s(u){o(u(t))}function i(u,c=h){const l=[u,c];return r.add(l),r.size===1&&(n=e(o,s)||h),u(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:i}}function cn(t,e,n){const r=!Array.isArray(t),o=r?[t]:t;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return sn(n,(i,u)=>{let c=!1;const l=[];let f=0,a=h;const m=()=>{if(f)return;a();const _=e(r?l[0]:l,i,u);s?i(_):a=ut(_)?_:h},g=o.map((_,b)=>ee(_,y=>{l[b]=y,f&=~(1<<b),c&&m()},()=>{f|=1<<b}));return c=!0,m(),function(){W(g),a(),c=!1}})}const Rt=t=>({...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}),ln=t=>{const e=[];let n=Rt(t);return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Rt(t),r({location:n,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const s=e.indexOf(r);e.splice(s,1)}},navigate(r,{state:o,replace:s=!1,preserveScroll:i=!1,blurActiveElement:u=!0}={}){o={...o,key:Date.now()+""};try{s?t.history.replaceState(o,"",r):t.history.pushState(o,"",r)}catch{t.location[s?"replace":"assign"](r)}n=Rt(t),e.forEach(c=>c({location:n,action:"PUSH",preserveScroll:i})),u&&document.activeElement.blur()}}},un=(t="/")=>{let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(o,s){},removeEventListener(o,s){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(o,s,i){const[u,c=""]=i.split("?");e++,n.push({pathname:u,search:c}),r.push(o)},replaceState(o,s,i){const[u,c=""]=i.split("?");n[e]={pathname:u,search:c},r[e]=o}}}},fn=ln(pe()?window:un()),an=t=>({route:t&4,location:t&2}),Vt=t=>({route:t[2]&&t[2].uri,location:t[1]}),dn=t=>({route:t&4,location:t&2}),Jt=t=>({route:t[2]&&t[2].uri,location:t[1]});function _n(t){let e;const n=t[15].default,r=bt(n,t,t[14],Vt);return{c(){r&&r.c()},m(o,s){r&&r.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&16390)&&kt(r,n,o,o[14],e?yt(n,o[14],s,an):wt(o[14]),Vt)},i(o){e||(v(r,o),e=!0)},o(o){P(r,o),e=!1},d(o){r&&r.d(o)}}}function pn(t){let e=t[1].pathname,n,r,o=Xt(t);return{c(){o.c(),n=tt()},m(s,i){o.m(s,i),w(s,n,i),r=!0},p(s,i){i&2&&M(e,e=s[1].pathname)?(nt(),P(o,1,1,h),rt(),o=Xt(s),o.c(),v(o,1),o.m(n.parentNode,n)):o.p(s,i)},i(s){r||(v(o),r=!0)},o(s){P(o),r=!1},d(s){s&&k(n),o.d(s)}}}function Xt(t){let e,n,r,o;const s=t[15].default,i=bt(s,t,t[14],Jt);return{c(){e=I("div"),i&&i.c()},m(u,c){w(u,e,c),i&&i.m(e,null),o=!0},p(u,c){i&&i.p&&(!o||c&16390)&&kt(i,s,u,u[14],o?yt(s,u[14],c,dn):wt(u[14]),Jt)},i(u){o||(v(i,u),u&&Z(()=>{o&&(r&&r.end(1),n=Me(e,t[3],{}),n.start())}),o=!0)},o(u){P(i,u),n&&n.invalidate(),u&&(r=je(e,t[3],{})),o=!1},d(u){u&&k(e),i&&i.d(u),u&&r&&r.end()}}}function mn(t){let e,n,r,o;const s=[pn,_n],i=[];function u(c,l){return c[0]?0:1}return e=u(t),n=i[e]=s[e](t),{c(){n.c(),r=tt()},m(c,l){i[e].m(c,l),w(c,r,l),o=!0},p(c,[l]){let f=e;e=u(c),e===f?i[e].p(c,l):(nt(),P(i[f],1,1,()=>{i[f]=null}),rt(),n=i[e],n?n.p(c,l):(n=i[e]=s[e](c),n.c()),v(n,1),n.m(r.parentNode,r))},i(c){o||(v(n),o=!0)},o(c){P(n),o=!1},d(c){c&&k(r),i[e].d(c)}}}function hn(t,e,n){let r,o,s,i,{$$slots:u={},$$scope:c}=e,{basepath:l="/"}=e,{url:f=null}=e,{viewtransition:a=null}=e,{history:m=fn}=e;const g=(p,R,C)=>{const N=a(C);return typeof(N==null?void 0:N.fn)=="function"?N.fn(p,N):N};Pt(de,m);const _=J(It),b=J(gt),y=it([]);F(t,y,p=>n(12,o=p));const d=it(null);F(t,d,p=>n(2,i=p));let $=!1;const E=_||it(f?{pathname:f}:m.location);F(t,E,p=>n(1,r=p));const O=b?b.routerBase:it({path:l,uri:l});F(t,O,p=>n(13,s=p));const j=cn([O,d],([p,R])=>{if(!R)return p;const{path:C}=p,{route:N,uri:me}=R;return{path:N.default?C:N.path.replace(/\*.*$/,""),uri:me}}),ft=p=>{const{path:R}=s;let{path:C}=p;if(p._path=C,p.path=qt(R,C),typeof window>"u"){if($)return;const N=Wt([p],r.pathname);N&&(d.set(N),$=!0)}else y.update(N=>[...N,p])},vt=p=>{y.update(R=>R.filter(C=>C!==p))};let S=!1;return _||(Ne(()=>m.listen(R=>{n(11,S=R.preserveScroll||!1),E.set(R.location)})),Pt(It,E)),Pt(gt,{activeRoute:d,base:O,routerBase:j,registerRoute:ft,unregisterRoute:vt}),t.$$set=p=>{"basepath"in p&&n(8,l=p.basepath),"url"in p&&n(9,f=p.url),"viewtransition"in p&&n(0,a=p.viewtransition),"history"in p&&n(10,m=p.history),"$$scope"in p&&n(14,c=p.$$scope)},t.$$.update=()=>{if(t.$$.dirty&8192){const{path:p}=s;y.update(R=>R.map(C=>Object.assign(C,{path:qt(p,C._path)})))}if(t.$$.dirty&6146){const p=Wt(o,r.pathname);d.set(p&&{...p,preserveScroll:S})}},[a,r,i,g,y,d,E,O,l,f,m,S,o,s,c,u]}class gn extends K{constructor(e){super(),B(this,e,hn,mn,M,{basepath:8,url:9,viewtransition:0,history:10})}}function bn(t){let e,n;return{c(){e=I("p"),e.textContent="im err",n=H(`\r
wef`)},m(r,o){w(r,e,o),w(r,n,o)},p:h,i:h,o:h,d(r){r&&(k(e),k(n))}}}class yn extends K{constructor(e){super(),B(this,e,null,bn,M,{})}}function kn(t){let e,n,r,o,s,i,u,c;return{c(){e=H(`main\r
\r
\r
`),n=I("p"),n.textContent="Hello world!",r=x(),o=I("h1"),o.textContent="Hello world!",s=x(),i=I("button"),i.textContent="Link",u=x(),c=I("details"),c.innerHTML='<summary class="btn m-1">open or close</summary> <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"><li><a>Item 1</a></li> <li><a>Item 2</a></li></ul>',st(n,"class","text-blue-500"),st(o,"class","text-3xl color font-bold underline"),st(i,"class","btn btn-link"),st(c,"class","dropdown")},m(l,f){w(l,e,f),w(l,n,f),w(l,r,f),w(l,o,f),w(l,s,f),w(l,i,f),w(l,u,f),w(l,c,f)},p:h,i:h,o:h,d(l){l&&(k(e),k(n),k(r),k(o),k(s),k(i),k(u),k(c))}}}class wn extends K{constructor(e){super(),B(this,e,null,kn,M,{})}}function vn(t){let e;return{c(){e=H("mypage")},m(n,r){w(n,e,r)},p:h,i:h,o:h,d(n){n&&k(e)}}}class Sn extends K{constructor(e){super(),B(this,e,null,vn,M,{})}}function Pn(t){let e;return{c(){e=H("ticketing detail")},m(n,r){w(n,e,r)},p:h,i:h,o:h,d(n){n&&k(e)}}}class $n extends K{constructor(e){super(),B(this,e,null,Pn,M,{})}}function En(t){let e;return{c(){e=H("Home")},m(n,r){w(n,e,r)},d(n){n&&k(e)}}}function On(t){let e;return{c(){e=H("About")},m(n,r){w(n,e,r)},d(n){n&&k(e)}}}function Nn(t){let e;return{c(){e=H("ticketing/detail")},m(n,r){w(n,e,r)},d(n){n&&k(e)}}}function Rn(t){let e,n,r,o,s,i,u,c,l,f,a,m,g,_,b,y;return n=new Nt({props:{to:"/",$$slots:{default:[En]},$$scope:{ctx:t}}}),o=new Nt({props:{to:"/mypage",$$slots:{default:[On]},$$scope:{ctx:t}}}),i=new Nt({props:{to:"/ticketing/detail",$$slots:{default:[Nn]},$$scope:{ctx:t}}}),l=new dt({props:{path:"/",component:wn}}),a=new dt({props:{path:"/mypage",component:Sn}}),g=new dt({props:{path:"/ticketing/detail",component:$n}}),b=new dt({props:{path:"*",component:yn}}),{c(){e=I("nav"),T(n.$$.fragment),r=x(),T(o.$$.fragment),s=x(),T(i.$$.fragment),u=x(),c=I("div"),T(l.$$.fragment),f=x(),T(a.$$.fragment),m=x(),T(g.$$.fragment),_=x(),T(b.$$.fragment)},m(d,$){w(d,e,$),A(n,e,null),Q(e,r),A(o,e,null),Q(e,s),A(i,e,null),w(d,u,$),w(d,c,$),A(l,c,null),Q(c,f),A(a,c,null),Q(c,m),A(g,c,null),Q(c,_),A(b,c,null),y=!0},p(d,$){const E={};$&1&&(E.$$scope={dirty:$,ctx:d}),n.$set(E);const O={};$&1&&(O.$$scope={dirty:$,ctx:d}),o.$set(O);const j={};$&1&&(j.$$scope={dirty:$,ctx:d}),i.$set(j)},i(d){y||(v(n.$$.fragment,d),v(o.$$.fragment,d),v(i.$$.fragment,d),v(l.$$.fragment,d),v(a.$$.fragment,d),v(g.$$.fragment,d),v(b.$$.fragment,d),y=!0)},o(d){P(n.$$.fragment,d),P(o.$$.fragment,d),P(i.$$.fragment,d),P(l.$$.fragment,d),P(a.$$.fragment,d),P(g.$$.fragment,d),P(b.$$.fragment,d),y=!1},d(d){d&&(k(e),k(u),k(c)),L(n),L(o),L(i),L(l),L(a),L(g),L(b)}}}function Cn(t){let e,n;return e=new gn({props:{$$slots:{default:[Rn]},$$scope:{ctx:t}}}),{c(){T(e.$$.fragment)},m(r,o){A(e,r,o),n=!0},p(r,[o]){const s={};o&1&&(s.$$scope={dirty:o,ctx:r}),e.$set(s)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){L(e,r)}}}class An extends K{constructor(e){super(),B(this,e,null,Cn,M,{})}}new An({target:document.getElementById("app")});
