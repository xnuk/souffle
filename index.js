(()=>{var lt=Object.defineProperty,at=Object.defineProperties;var ut=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var pt=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable;var ae=(e,t,n)=>t in e?lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ue=(e,t)=>{for(var n in t||(t={}))pt.call(t,n)&&ae(e,n,t[n]);if(le)for(var n of le(t))ft.call(t,n)&&ae(e,n,t[n]);return e},pe=(e,t)=>at(e,ut(t));var U,u,fe,mt,E,me,de,he,I={},ge=[],dt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function L(e,t){for(var n in t)e[n]=t[n];return e}function ye(e){var t=e.parentNode;t&&t.removeChild(e)}function c(e,t,n){var o,i,r,l={};for(r in t)r=="key"?o=t[r]:r=="ref"?i=t[r]:l[r]=t[r];if(arguments.length>2&&(l.children=arguments.length>3?U.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return O(e,l,o,i,null)}function O(e,t,n,o,i){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++fe:i};return u.vnode!=null&&u.vnode(r),r}function h(e){return e.children}function R(e,t){this.props=e,this.context=t}function N(e,t){if(t==null)return e.__?N(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?N(e):null}function ve(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ve(e)}}function Y(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!B.__r++||de!==u.debounceRendering)&&((de=u.debounceRendering)||me)(B)}function B(){for(var e;B.__r=E.length;)e=E.sort(function(t,n){return t.__v.__b-n.__v.__b}),E=[],e.some(function(t){var n,o,i,r,l,a;t.__d&&(l=(r=(n=t).__v).__e,(a=n.__P)&&(o=[],(i=L({},r)).__v=r.__v+1,j(a,r,i,n.__n,a.ownerSVGElement!==void 0,r.__h!=null?[l]:null,o,l==null?N(r):l,r.__h),we(o,r),r.__e!=l&&ve(r)))})}function Ce(e,t,n,o,i,r,l,a,m,d){var s,y,p,_,f,H,g,v=o&&o.__k||ge,k=v.length;for(n.__k=[],s=0;s<t.length;s++)if((_=n.__k[s]=(_=t[s])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?O(null,_,null,null,_):Array.isArray(_)?O(h,{children:_},null,null,null):_.__b>0?O(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(p=v[s])===null||p&&_.key==p.key&&_.type===p.type)v[s]=void 0;else for(y=0;y<k;y++){if((p=v[y])&&_.key==p.key&&_.type===p.type){v[y]=void 0;break}p=null}j(e,_,p=p||I,i,r,l,a,m,d),f=_.__e,(y=_.ref)&&p.ref!=y&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(y,_.__c||f,_)),f!=null?(H==null&&(H=f),typeof _.type=="function"&&_.__k!=null&&_.__k===p.__k?_.__d=m=ke(_,m,e):m=xe(e,_,p,v,f,m),d||n.type!=="option"?typeof n.type=="function"&&(n.__d=m):e.value=""):m&&p.__e==m&&m.parentNode!=e&&(m=N(p))}for(n.__e=H,s=k;s--;)v[s]!=null&&(typeof n.type=="function"&&v[s].__e!=null&&v[s].__e==n.__d&&(n.__d=N(o,s+1)),Te(v[s],v[s]));if(g)for(s=0;s<g.length;s++)Le(g[s],g[++s],g[++s])}function ke(e,t,n){var o,i;for(o=0;o<e.__k.length;o++)(i=e.__k[o])&&(i.__=e,t=typeof i.type=="function"?ke(i,t,n):xe(n,i,i,e.__k,i.__e,t));return t}function xe(e,t,n,o,i,r){var l,a,m;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),l=null;else{for(a=r,m=0;(a=a.nextSibling)&&m<o.length;m+=2)if(a==i)break e;e.insertBefore(i,r),l=r}return l!==void 0?l:i.nextSibling}function ht(e,t,n,o,i){var r;for(r in n)r==="children"||r==="key"||r in t||q(e,r,null,n[r],o);for(r in t)i&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||q(e,r,t[r],n[r],o)}function be(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||dt.test(t)?n:n+"px"}function q(e,t,n,o,i){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||be(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||be(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?Se:Pe,r):e.removeEventListener(t,r?Se:Pe,r);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch(l){}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Pe(e){this.l[e.type+!1](u.event?u.event(e):e)}function Se(e){this.l[e.type+!0](u.event?u.event(e):e)}function j(e,t,n,o,i,r,l,a,m){var d,s,y,p,_,f,H,g,v,k,W,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(m=n.__h,a=t.__e=n.__e,t.__h=null,r=[a]),(d=u.__b)&&d(t);try{e:if(typeof b=="function"){if(g=t.props,v=(d=b.contextType)&&o[d.__c],k=d?v?v.props.value:d.__:o,n.__c?H=(s=t.__c=n.__c).__=s.__E:("prototype"in b&&b.prototype.render?t.__c=s=new b(g,k):(t.__c=s=new R(g,k),s.constructor=b,s.render=yt),v&&v.sub(s),s.props=g,s.state||(s.state={}),s.context=k,s.__n=o,y=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),b.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=L({},s.__s)),L(s.__s,b.getDerivedStateFromProps(g,s.__s))),p=s.props,_=s.state,y)b.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(b.getDerivedStateFromProps==null&&g!==p&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,k),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,k)===!1||t.__v===n.__v){s.props=g,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(D){D&&(D.__=t)}),s.__h.length&&l.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,k),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(p,_,f)})}s.context=k,s.props=g,s.state=s.__s,(d=u.__r)&&d(t),s.__d=!1,s.__v=t,s.__P=e,d=s.render(s.props,s.state,s.context),s.state=s.__s,s.getChildContext!=null&&(o=L(L({},o),s.getChildContext())),y||s.getSnapshotBeforeUpdate==null||(f=s.getSnapshotBeforeUpdate(p,_)),W=d!=null&&d.type===h&&d.key==null?d.props.children:d,Ce(e,Array.isArray(W)?W:[W],t,n,o,i,r,l,a,m),s.base=t.__e,t.__h=null,s.__h.length&&l.push(s),H&&(s.__E=s.__=null),s.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=gt(n.__e,t,n,o,i,r,l,m);(d=u.diffed)&&d(t)}catch(D){t.__v=null,(m||r!=null)&&(t.__e=a,t.__h=!!m,r[r.indexOf(a)]=null),u.__e(D,t,n)}}function we(e,t){u.__c&&u.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){u.__e(o,n.__v)}})}function gt(e,t,n,o,i,r,l,a){var m,d,s,y=n.props,p=t.props,_=t.type,f=0;if(_==="svg"&&(i=!0),r!=null){for(;f<r.length;f++)if((m=r[f])&&(m===e||(_?m.localName==_:m.nodeType==3))){e=m,r[f]=null;break}}if(e==null){if(_===null)return document.createTextNode(p);e=i?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,p.is&&p),r=null,a=!1}if(_===null)y===p||a&&e.data===p||(e.data=p);else{if(r=r&&U.call(e.childNodes),d=(y=n.props||I).dangerouslySetInnerHTML,s=p.dangerouslySetInnerHTML,!a){if(r!=null)for(y={},f=0;f<e.attributes.length;f++)y[e.attributes[f].name]=e.attributes[f].value;(s||d)&&(s&&(d&&s.__html==d.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(ht(e,p,y,i,a),s)t.__k=[];else if(f=t.props.children,Ce(e,Array.isArray(f)?f:[f],t,n,o,i&&_!=="foreignObject",r,l,r?r[0]:n.__k&&N(n,0),a),r!=null)for(f=r.length;f--;)r[f]!=null&&ye(r[f]);a||("value"in p&&(f=p.value)!==void 0&&(f!==e.value||_==="progress"&&!f)&&q(e,"value",f,y.value,!1),"checked"in p&&(f=p.checked)!==void 0&&f!==e.checked&&q(e,"checked",f,y.checked,!1))}return e}function Le(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){u.__e(o,n)}}function Te(e,t,n){var o,i;if(u.unmount&&u.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Le(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){u.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&Te(o[i],t,typeof e.type!="function");n||e.__e==null||ye(e.__e),e.__e=e.__d=void 0}function yt(e,t,n){return this.constructor(e,n)}function Fe(e,t,n){var o,i,r;u.__&&u.__(e,t),i=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],j(t,e=(!o&&n||t).__k=c(h,null,[e]),i||I,I,t.ownerSVGElement!==void 0,!o&&n?[n]:i?null:t.firstChild?U.call(t.childNodes):null,r,!o&&n?n:i?i.__e:t.firstChild,o),we(r,e)}function w(e,t){var n={__c:t="__cC"+he++,__:e,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(Y)},this.sub=function(l){i.push(l);var a=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),a&&a.call(l)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}U=ge.slice,u={__e:function(e,t){for(var n,o,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(r){e=r}throw e}},fe=0,mt=function(e){return e!=null&&e.constructor===void 0},R.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},n),this.props)),e&&L(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Y(this))},R.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Y(this))},R.prototype.render=h,E=[],me=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B.__r=0,he=0;var G,C,Me,ee=0,te=[],He=u.__b,Ne=u.__r,Ee=u.diffed,Ae=u.__c,We=u.unmount;function ne(e,t){u.__h&&u.__h(C,e,ee||t),ee=0;var n=C.__H||(C.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function P(e){return ee=1,vt(Ue,e)}function vt(e,t,n){var o=ne(G++,2);return o.t=e,o.__c||(o.__=[n?n(t):Ue(void 0,t),function(i){var r=o.t(o.__[0],i);o.__[0]!==r&&(o.__=[r,o.__[1]],o.__c.setState({}))}],o.__c=C),o.__}function x(e,t){var n=ne(G++,3);!u.__s&&kt(n.__H,t)&&(n.__=e,n.__H=t,C.__H.__h.push(n))}function S(e){var t=C.context[e.__c],n=ne(G++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(C)),t.props.value):e.__}function Ct(){te.forEach(function(e){if(e.__P)try{e.__H.__h.forEach($),e.__H.__h.forEach(oe),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}),te=[]}u.__b=function(e){C=null,He&&He(e)},u.__r=function(e){Ne&&Ne(e),G=0;var t=(C=e.__c).__H;t&&(t.__h.forEach($),t.__h.forEach(oe),t.__h=[])},u.diffed=function(e){Ee&&Ee(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(te.push(t)!==1&&Me===u.requestAnimationFrame||((Me=u.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(r),De&&cancelAnimationFrame(o),setTimeout(n)},r=setTimeout(i,100);De&&(o=requestAnimationFrame(i))})(Ct)),C=void 0},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach($),n.__h=n.__h.filter(function(o){return!o.__||oe(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],u.__e(o,n.__v)}}),Ae&&Ae(e,t)},u.unmount=function(e){We&&We(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach($)}catch(n){u.__e(n,t.__v)}};var De=typeof requestAnimationFrame=="function";function $(e){var t=C;typeof e.__c=="function"&&e.__c(),C=t}function oe(e){var t=C;e.__c=e.__(),C=t}function kt(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Ue(e,t){return typeof t=="function"?t(e):t}var A;(function(n){n[n.Session=0]="Session",n[n.Local=1]="Local"})(A||(A={}));var Ie=0,Oe=1,xt=(e,t)=>{let n=window[e===0?"sessionStorage":"localStorage"];return{get:()=>{let o=n.getItem(t);if(o==null)return null;try{return JSON.parse(o)}catch(i){return null}},set:o=>{n.setItem(t,JSON.stringify(o))}}},V=(e,t,n)=>{let[o,i]=P(n),[r,l]=P(null);return x(()=>{let a=xt(e,t);l(a);let m=a.get();return m==null?a.set(o):i(m),()=>l(null)},[e,t]),x(()=>{r!=null&&r.set(o)},[o]),[o,i]};var K={version:1,tartoPopup:!1,debugMode:!1,hideWarrior:!1},Re=w([K,e=>{}]),Be=({children:e})=>{let[t,n]=V(Oe,"config",K);return t.version!==K.version&&n(K),c(Re.Provider,{value:[t,n],children:e})},M=e=>{let[t,n]=S(Re);return[t[e],o=>n(pe(ue({},t),{[e]:o}))]};var qe=w([[],e=>{}]),Ge=({children:e})=>c(qe.Provider,{value:V(Ie,"item-history",[]),children:e}),J=()=>S(qe);var $e="souffle-popup",re=w({openPopup:e=>{}}),Ve=({children:e})=>{let[t,n]=P(null);return c(re.Provider,{children:e,value:{openPopup:o=>{t!=null&&t.close();let i=window.open(o,$e,"width=700,height=700");i==null||i.focus(),n(i)}}})},Ke=({href:e,class:t,children:n})=>{let{openPopup:o}=S(re);return c("a",{class:t,href:e,target:$e,children:n,onClick:i=>{i.preventDefault(),o(e)}})},Je=()=>S(re).openPopup;var bt="_link-tarto_b0cqv_3",Pt="_item_b0cqv_8",St="_delete-item-btn_b0cqv_23",Q={linkTarto:bt,item:Pt,deleteItemBtn:St};var se=e=>"https://ff14.tar.to/item/list/?redirect=true&quick-search-option=item&limit=2&keyword="+encodeURIComponent(e),wt=({name:e})=>c(Ke,{class:Q.linkTarto,href:se(e)},e),ze=({name:e})=>{let[t,n]=J();return c("li",{class:Q.item},c(wt,{name:e}),c("button",{class:Q.deleteItemBtn,onClick:()=>{n(t.filter(o=>o!==e))}},"✘"))};var Z=(e=300)=>new Promise(t=>setTimeout(t,e));var Qe=e=>Object.fromEntries(e.replace(/\+/g,"%20").split("&").map(t=>{let n=t.indexOf("=");return n<0?[decodeURIComponent(t),""]:[decodeURIComponent(t.slice(0,n)),decodeURIComponent(t.slice(n+1))]}));var Lt=e=>e.onerror=()=>e.close(),Tt=e=>new Promise(t=>{Lt(e),e.onclose=async()=>{await Z(1e3),t()}}),Ze=(e,t)=>{let n,o=!1,i=()=>{o||(n=new WebSocket(e),n.onmessage=({data:r})=>{r==="."&&n.send(".");let l;try{l=JSON.parse(r)}catch(a){return}t(l)},Tt(n).then(i))};return i(),()=>{o=!0,n.close()}};var Ft=e=>{let n=Qe(window.location.search.replace(/^\?/,"")).HOST_PORT||"";if(!!/^wss?:\/\//.test(n))return Ze(`${n.replace(/\/+$/g,"")}/BeforeLogLineRead`,e)},Mt=async(e,t)=>{let n=await Ht(window);return window.__OverlayCallback=o=>{o!=null&&t(o)},n.callHandler(JSON.stringify({call:"subscribe",events:e}),()=>{}),()=>n.callHandler(JSON.stringify({call:"unsubscribe",events:e}),()=>{})},Ht=async e=>{var t;for(;!((t=e.OverlayPluginApi)==null?void 0:t.ready);)await Z(300);return e.OverlayPluginApi},Xe=w(null),Ye=w(null),je=({children:e})=>{let[t,n]=P(null),[o,i]=P(null);return x(()=>{let r=Ft(a=>{if(a.msgtype==="SendCharName"){let{charID:m,charName:d}=a.msg;return i({id:m.toString(16).toUpperCase(),name:d})}if(a.msgtype==="Chat")return n(a.msg.split("|"))});if(r)return r;let l=()=>{};return Mt(["LogLine","ChangePrimaryPlayer"],a=>{if(a.type==="LogLine")return n(a.line);if(a.type==="ChangePrimaryPlayer")return i({id:a.charID.toString(16).toLowerCase(),name:a.charName})}).then(a=>{l=a}),()=>l()},[]),c(Ye.Provider,{value:o},c(Xe.Provider,{value:t},e))},X=e=>{let t=S(Ye),n=S(Xe);return n==null?null:e(n,t)};var Nt=8,Et=9,At=10,Wt=11,Dt=12,Ut=13,It=14,Ot=15,Rt=16,Bt=17,qt=18;var Gt=[qt,Rt,Bt,Nt,Et,At,Wt,Dt,Ut,It,Ot].sort((e,t)=>e-t),et=e=>Gt.includes(e);var tt=(e,t)=>e.endsWith(t)?e.slice(0,-t.length):null,$t=e=>{var o;let t=e[0]==="00"&&e[2]==="0039"&&e[3]===""&&e[4]||null;if(t==null)return null;let n=tt(t," 보유 상황을 확인합니다.")||tt(t,"의 이름을 클립보드에 복사했습니다.");return((o=n==null?void 0:n.match(/^\uE0BB([-\w\s\d':가-힣]+)\uE03C?$/))==null?void 0:o[1])||null},nt=()=>X($t),Vt=(e,t)=>e.toLowerCase()===t.toLowerCase(),Kt=(e,t)=>t&&e[0]==="03"&&Vt(e[2],t.id)&&e[3]===t.name?et(parseInt(e[4]||"0",16)):null,ot=(e=!0)=>{let[t,n]=P(e),o=X(Kt);return x(()=>{o!=null&&t!==o&&n(o)},[o]),t},Jt=(e,t)=>t&&e.includes(t.id)?e.join(" | "):null,rt=()=>X(Jt);var st=()=>{let[e,t]=J(),n=Je(),o=nt(),i=M("tartoPopup")[0];return x(()=>{if(o==null)return;let r=e.filter(l=>l!==o);r.unshift(o),t(r),i&&n(se(o))},[o]),c("ul",{class:"item-list"},e.map(r=>c(ze,{key:r,name:r})))};var zt=(...e)=>({children:t})=>e.reduceRight((n,o)=>c(o,{children:n}),c(h,null,t)),it=zt(Be,je,Ge,Ve);var Qt="_section_1gw6w_3",Zt="_checkbox-item_1gw6w_7",Xt="_checkbox-text_1gw6w_26",Yt="_setting-inner_1gw6w_31",jt="_toggle-btn_1gw6w_34",en="_toggle-text_1gw6w_64",tn="_setting_1gw6w_31",F={section:Qt,checkboxItem:Zt,checkboxText:Xt,settingInner:Yt,toggleBtn:jt,toggleText:en,setting:tn};var ie=({name:e,children:t})=>{let[n,o]=M(e);return c("label",{class:F.checkboxItem},c("input",{type:"checkbox",checked:n,onChange:i=>o(i.currentTarget.checked)}),c("span",{class:F.checkboxText},t))},nn=()=>c("ul",{class:F.section},c(ie,{name:"tartoPopup"},"자동으로 타르토 열기"),c(ie,{name:"hideWarrior"},"전투직 전환 시 숨기기"),c(ie,{name:"debugMode"},"디버그 모드")),on=({children:e})=>c("details",{class:F.setting},c("summary",{class:F.toggleBtn,onClick:t=>t.currentTarget.blur()},c("span",{class:F.toggleText},"설정")),c("div",{class:F.settingInner},e,c("button",{onClick:()=>window.location.reload()},"새로고침~~~~"))),ct=()=>c(on,null,c(nn,null));var rn="_app_nohzk_3",sn="_dark_nohzk_17",_e={app:rn,dark:sn};var cn=()=>{let e=ot(),t=M("hideWarrior")[0],n=M("debugMode")[0],o=rt();return x(()=>{n&&o!=null&&console.log(o)},[n,o]),c("main",{class:`${_e.app} ${_e.dark}`},c(ct,null),t&&!e?null:c(st,null))},_t=()=>c(it,null,c(cn,null));Fe(c(_t,null),document.body);})();
