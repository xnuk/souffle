(()=>{var _5=Object.defineProperty,c5=Object.defineProperties;var u5=Object.getOwnPropertyDescriptors;var _1=Object.getOwnPropertySymbols;var a5=Object.prototype.hasOwnProperty,m5=Object.prototype.propertyIsEnumerable;var c1=(q,l,e)=>l in q?_5(q,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):q[l]=e,u1=(q,l)=>{for(var e in l||(l={}))a5.call(l,e)&&c1(q,e,l[e]);if(_1)for(var e of _1(l))m5.call(l,e)&&c1(q,e,l[e]);return q},a1=(q,l)=>c5(q,u5(l));var W,u,m1,p5,H,p1,f1,d1,A={},h1=[],f5=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function w(q,l){for(var e in l)q[e]=l[e];return q}function g1(q){var l=q.parentNode;l&&l.removeChild(q)}function i(q,l,e){var t,r,n,_={};for(n in l)n=="key"?t=l[n]:n=="ref"?r=l[n]:_[n]=l[n];if(arguments.length>2&&(_.children=arguments.length>3?W.call(arguments,2):e),typeof q=="function"&&q.defaultProps!=null)for(n in q.defaultProps)_[n]===void 0&&(_[n]=q.defaultProps[n]);return D(q,_,t,r,null)}function D(q,l,e,t,r){var n={type:q,props:l,key:e,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r==null?++m1:r};return u.vnode!=null&&u.vnode(n),n}function d(q){return q.children}function O(q,l){this.props=q,this.context=l}function E(q,l){if(l==null)return q.__?E(q.__,q.__.__k.indexOf(q)+1):null;for(var e;l<q.__k.length;l++)if((e=q.__k[l])!=null&&e.__e!=null)return e.__e;return typeof q.type=="function"?E(q):null}function y1(q){var l,e;if((q=q.__)!=null&&q.__c!=null){for(q.__e=q.__c.base=null,l=0;l<q.__k.length;l++)if((e=q.__k[l])!=null&&e.__e!=null){q.__e=q.__c.base=e.__e;break}return y1(q)}}function Y(q){(!q.__d&&(q.__d=!0)&&H.push(q)&&!R.__r++||f1!==u.debounceRendering)&&((f1=u.debounceRendering)||p1)(R)}function R(){for(var q;R.__r=H.length;)q=H.sort(function(l,e){return l.__v.__b-e.__v.__b}),H=[],q.some(function(l){var e,t,r,n,_,c;l.__d&&(_=(n=(e=l).__v).__e,(c=e.__P)&&(t=[],(r=w({},n)).__v=n.__v+1,j(c,n,r,e.__n,c.ownerSVGElement!==void 0,n.__h!=null?[_]:null,t,_==null?E(n):_,n.__h),M1(t,n),n.__e!=_&&y1(n)))})}function v1(q,l,e,t,r,n,_,c,p,f){var o,g,a,s,m,F,h,y=t&&t.__k||h1,C=y.length;for(e.__k=[],o=0;o<l.length;o++)if((s=e.__k[o]=(s=l[o])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?D(null,s,null,null,s):Array.isArray(s)?D(d,{children:s},null,null,null):s.__b>0?D(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=e,s.__b=e.__b+1,(a=y[o])===null||a&&s.key==a.key&&s.type===a.type)y[o]=void 0;else for(g=0;g<C;g++){if((a=y[g])&&s.key==a.key&&s.type===a.type){y[g]=void 0;break}a=null}j(q,s,a=a||A,r,n,_,c,p,f),m=s.__e,(g=s.ref)&&a.ref!=g&&(h||(h=[]),a.ref&&h.push(a.ref,null,s),h.push(g,s.__c||m,s)),m!=null?(F==null&&(F=m),typeof s.type=="function"&&s.__k!=null&&s.__k===a.__k?s.__d=p=C1(s,p,q):p=k1(q,s,a,y,m,p),f||e.type!=="option"?typeof e.type=="function"&&(e.__d=p):q.value=""):p&&a.__e==p&&p.parentNode!=q&&(p=E(a))}for(e.__e=F,o=C;o--;)y[o]!=null&&(typeof e.type=="function"&&y[o].__e!=null&&y[o].__e==e.__d&&(e.__d=E(t,o+1)),S1(y[o],y[o]));if(h)for(o=0;o<h.length;o++)w1(h[o],h[++o],h[++o])}function C1(q,l,e){var t,r;for(t=0;t<q.__k.length;t++)(r=q.__k[t])&&(r.__=q,l=typeof r.type=="function"?C1(r,l,e):k1(e,r,r,q.__k,r.__e,l));return l}function k1(q,l,e,t,r,n){var _,c,p;if(l.__d!==void 0)_=l.__d,l.__d=void 0;else if(e==null||r!=n||r.parentNode==null)q:if(n==null||n.parentNode!==q)q.appendChild(r),_=null;else{for(c=n,p=0;(c=c.nextSibling)&&p<t.length;p+=2)if(c==r)break q;q.insertBefore(r,n),_=n}return _!==void 0?_:r.nextSibling}function d5(q,l,e,t,r){var n;for(n in e)n==="children"||n==="key"||n in l||B(q,n,null,e[n],t);for(n in l)r&&typeof l[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||e[n]===l[n]||B(q,n,l[n],e[n],t)}function b1(q,l,e){l[0]==="-"?q.setProperty(l,e):q[l]=e==null?"":typeof e!="number"||f5.test(l)?e:e+"px"}function B(q,l,e,t,r){var n;q:if(l==="style")if(typeof e=="string")q.style.cssText=e;else{if(typeof t=="string"&&(q.style.cssText=t=""),t)for(l in t)e&&l in e||b1(q.style,l,"");if(e)for(l in e)t&&e[l]===t[l]||b1(q.style,l,e[l])}else if(l[0]==="o"&&l[1]==="n")n=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in q?l.toLowerCase().slice(2):l.slice(2),q.l||(q.l={}),q.l[l+n]=e,e?t||q.addEventListener(l,n?x1:P1,n):q.removeEventListener(l,n?x1:P1,n);else if(l!=="dangerouslySetInnerHTML"){if(r)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(l!=="href"&&l!=="list"&&l!=="form"&&l!=="tabIndex"&&l!=="download"&&l in q)try{q[l]=e==null?"":e;break q}catch(_){}typeof e=="function"||(e!=null&&(e!==!1||l[0]==="a"&&l[1]==="r")?q.setAttribute(l,e):q.removeAttribute(l))}}function P1(q){this.l[q.type+!1](u.event?u.event(q):q)}function x1(q){this.l[q.type+!0](u.event?u.event(q):q)}function j(q,l,e,t,r,n,_,c,p){var f,o,g,a,s,m,F,h,y,C,U,b=l.type;if(l.constructor!==void 0)return null;e.__h!=null&&(p=e.__h,c=l.__e=e.__e,l.__h=null,n=[c]),(f=u.__b)&&f(l);try{q:if(typeof b=="function"){if(h=l.props,y=(f=b.contextType)&&t[f.__c],C=f?y?y.props.value:f.__:t,e.__c?F=(o=l.__c=e.__c).__=o.__E:("prototype"in b&&b.prototype.render?l.__c=o=new b(h,C):(l.__c=o=new O(h,C),o.constructor=b,o.render=g5),y&&y.sub(o),o.props=h,o.state||(o.state={}),o.context=C,o.__n=t,g=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=w({},o.__s)),w(o.__s,b.getDerivedStateFromProps(h,o.__s))),a=o.props,s=o.state,g)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&h!==a&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(h,C),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(h,o.__s,C)===!1||l.__v===e.__v){o.props=h,o.state=o.__s,l.__v!==e.__v&&(o.__d=!1),o.__v=l,l.__e=e.__e,l.__k=e.__k,l.__k.forEach(function(I){I&&(I.__=l)}),o.__h.length&&_.push(o);break q}o.componentWillUpdate!=null&&o.componentWillUpdate(h,o.__s,C),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(a,s,m)})}o.context=C,o.props=h,o.state=o.__s,(f=u.__r)&&f(l),o.__d=!1,o.__v=l,o.__P=q,f=o.render(o.props,o.state,o.context),o.state=o.__s,o.getChildContext!=null&&(t=w(w({},t),o.getChildContext())),g||o.getSnapshotBeforeUpdate==null||(m=o.getSnapshotBeforeUpdate(a,s)),U=f!=null&&f.type===d&&f.key==null?f.props.children:f,v1(q,Array.isArray(U)?U:[U],l,e,t,r,n,_,c,p),o.base=l.__e,l.__h=null,o.__h.length&&_.push(o),F&&(o.__E=o.__=null),o.__e=!1}else n==null&&l.__v===e.__v?(l.__k=e.__k,l.__e=e.__e):l.__e=h5(e.__e,l,e,t,r,n,_,p);(f=u.diffed)&&f(l)}catch(I){l.__v=null,(p||n!=null)&&(l.__e=c,l.__h=!!p,n[n.indexOf(c)]=null),u.__e(I,l,e)}}function M1(q,l){u.__c&&u.__c(l,q),q.some(function(e){try{q=e.__h,e.__h=[],q.some(function(t){t.call(e)})}catch(t){u.__e(t,e.__v)}})}function h5(q,l,e,t,r,n,_,c){var p,f,o,g=e.props,a=l.props,s=l.type,m=0;if(s==="svg"&&(r=!0),n!=null){for(;m<n.length;m++)if((p=n[m])&&(p===q||(s?p.localName==s:p.nodeType==3))){q=p,n[m]=null;break}}if(q==null){if(s===null)return document.createTextNode(a);q=r?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,a.is&&a),n=null,c=!1}if(s===null)g===a||c&&q.data===a||(q.data=a);else{if(n=n&&W.call(q.childNodes),f=(g=e.props||A).dangerouslySetInnerHTML,o=a.dangerouslySetInnerHTML,!c){if(n!=null)for(g={},m=0;m<q.attributes.length;m++)g[q.attributes[m].name]=q.attributes[m].value;(o||f)&&(o&&(f&&o.__html==f.__html||o.__html===q.innerHTML)||(q.innerHTML=o&&o.__html||""))}if(d5(q,a,g,r,c),o)l.__k=[];else if(m=l.props.children,v1(q,Array.isArray(m)?m:[m],l,e,t,r&&s!=="foreignObject",n,_,n?n[0]:e.__k&&E(e,0),c),n!=null)for(m=n.length;m--;)n[m]!=null&&g1(n[m]);c||("value"in a&&(m=a.value)!==void 0&&(m!==q.value||s==="progress"&&!m)&&B(q,"value",m,g.value,!1),"checked"in a&&(m=a.checked)!==void 0&&m!==q.checked&&B(q,"checked",m,g.checked,!1))}return q}function w1(q,l,e){try{typeof q=="function"?q(l):q.current=l}catch(t){u.__e(t,e)}}function S1(q,l,e){var t,r;if(u.unmount&&u.unmount(q),(t=q.ref)&&(t.current&&t.current!==q.__e||w1(t,null,l)),(t=q.__c)!=null){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){u.__e(n,l)}t.base=t.__P=null}if(t=q.__k)for(r=0;r<t.length;r++)t[r]&&S1(t[r],l,typeof q.type!="function");e||q.__e==null||g1(q.__e),q.__e=q.__d=void 0}function g5(q,l,e){return this.constructor(q,e)}function T1(q,l,e){var t,r,n;u.__&&u.__(q,l),r=(t=typeof e=="function")?null:e&&e.__k||l.__k,n=[],j(l,q=(!t&&e||l).__k=i(d,null,[q]),r||A,A,l.ownerSVGElement!==void 0,!t&&e?[e]:r?null:l.firstChild?W.call(l.childNodes):null,n,!t&&e?e:r?r.__e:l.firstChild,t),M1(n,q)}function x(q,l){var e={__c:l="__cC"+d1++,__:q,Consumer:function(t,r){return t.children(r)},Provider:function(t){var r,n;return this.getChildContext||(r=[],(n={})[l]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(_){this.props.value!==_.value&&r.some(Y)},this.sub=function(_){r.push(_);var c=_.componentWillUnmount;_.componentWillUnmount=function(){r.splice(r.indexOf(_),1),c&&c.call(_)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}W=h1.slice,u={__e:function(q,l){for(var e,t,r;l=l.__;)if((e=l.__c)&&!e.__)try{if((t=e.constructor)&&t.getDerivedStateFromError!=null&&(e.setState(t.getDerivedStateFromError(q)),r=e.__d),e.componentDidCatch!=null&&(e.componentDidCatch(q),r=e.__d),r)return e.__E=e}catch(n){q=n}throw q}},m1=0,p5=function(q){return q!=null&&q.constructor===void 0},O.prototype.setState=function(q,l){var e;e=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof q=="function"&&(q=q(w({},e),this.props)),q&&w(e,q),q!=null&&this.__v&&(l&&this.__h.push(l),Y(this))},O.prototype.forceUpdate=function(q){this.__v&&(this.__e=!0,q&&this.__h.push(q),Y(this))},O.prototype.render=d,H=[],p1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,R.__r=0,d1=0;var $,v,L1,q1=0,l1=[],F1=u.__b,E1=u.__r,H1=u.diffed,N1=u.__c,U1=u.unmount;function e1(q,l){u.__h&&u.__h(v,q,q1||l),q1=0;var e=v.__H||(v.__H={__:[],__h:[]});return q>=e.__.length&&e.__.push({}),e.__[q]}function k(q){return q1=1,y5(W1,q)}function y5(q,l,e){var t=e1($++,2);return t.t=q,t.__c||(t.__=[e?e(l):W1(void 0,l),function(r){var n=t.t(t.__[0],r);t.__[0]!==n&&(t.__=[n,t.__[1]],t.__c.setState({}))}],t.__c=v),t.__}function M(q,l){var e=e1($++,3);!u.__s&&C5(e.__H,l)&&(e.__=q,e.__H=l,v.__H.__h.push(e))}function P(q){var l=v.context[q.__c],e=e1($++,9);return e.c=q,l?(e.__==null&&(e.__=!0,l.sub(v)),l.props.value):q.__}function v5(){l1.forEach(function(q){if(q.__P)try{q.__H.__h.forEach(V),q.__H.__h.forEach(t1),q.__H.__h=[]}catch(l){q.__H.__h=[],u.__e(l,q.__v)}}),l1=[]}u.__b=function(q){v=null,F1&&F1(q)},u.__r=function(q){E1&&E1(q),$=0;var l=(v=q.__c).__H;l&&(l.__h.forEach(V),l.__h.forEach(t1),l.__h=[])},u.diffed=function(q){H1&&H1(q);var l=q.__c;l&&l.__H&&l.__H.__h.length&&(l1.push(l)!==1&&L1===u.requestAnimationFrame||((L1=u.requestAnimationFrame)||function(e){var t,r=function(){clearTimeout(n),I1&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);I1&&(t=requestAnimationFrame(r))})(v5)),v=void 0},u.__c=function(q,l){l.some(function(e){try{e.__h.forEach(V),e.__h=e.__h.filter(function(t){return!t.__||t1(t)})}catch(t){l.some(function(r){r.__h&&(r.__h=[])}),l=[],u.__e(t,e.__v)}}),N1&&N1(q,l)},u.unmount=function(q){U1&&U1(q);var l=q.__c;if(l&&l.__H)try{l.__H.__.forEach(V)}catch(e){u.__e(e,l.__v)}};var I1=typeof requestAnimationFrame=="function";function V(q){var l=v;typeof q.__c=="function"&&q.__c(),v=l}function t1(q){var l=v;q.__c=q.__(),v=l}function C5(q,l){return!q||q.length!==l.length||l.some(function(e,t){return e!==q[t]})}function W1(q,l){return typeof l=="function"?l(q):l}var N;(function(e){e[e.Session=0]="Session",e[e.Local=1]="Local"})(N||(N={}));var A1=0,D1=1,k5=(q,l)=>{let e=window[q===0?"sessionStorage":"localStorage"];return{get:()=>{let t=e.getItem(l);if(t==null)return null;try{return JSON.parse(t)}catch(r){return null}},set:t=>{e.setItem(l,JSON.stringify(t))}}},J=(q,l,e)=>{let[t,r]=k(e),[n,_]=k(null);return M(()=>{let c=k5(q,l);_(c);let p=c.get();return p==null?c.set(t):r(p),()=>_(null)},[q,l]),M(()=>{n!=null&&n.set(t)},[t]),[t,r]};var z={version:1,tartoPopup:!1,debugMode:!1,hideWarrior:!1},O1=x([z,q=>{}]),R1=({children:q})=>{let[l,e]=J(D1,"config",z);return l.version!==z.version&&e(z),i(O1.Provider,{value:[l,e],children:q})},L=q=>{let[l,e]=P(O1);return[l[q],t=>e(a1(u1({},l),{[q]:t}))]};var B1=x([[],q=>{}]),$1=({children:q})=>i(B1.Provider,{value:J(A1,"item-history",[]),children:q}),G=()=>P(B1);var V1="souffle-popup",n1=x({openPopup:q=>{}}),J1=({children:q})=>{let[l,e]=k(null);return i(n1.Provider,{children:q,value:{openPopup:t=>{l!=null&&l.close();let r=window.open(t,V1,"width=700,height=700");r==null||r.focus(),e(r)}}})},z1=({href:q,class:l,children:e})=>{let{openPopup:t}=P(n1);return i("a",{class:l,href:q,target:V1,children:e,onClick:r=>{r.preventDefault(),t(q)}})},G1=()=>P(n1).openPopup;var b5="_link-tarto_b0cqv_3",P5="_item_b0cqv_8",x5="_delete-item-btn_b0cqv_23",Q={linkTarto:b5,item:P5,deleteItemBtn:x5};var o1=q=>"https://ff14.tar.to/item/list/?redirect=true&quick-search-option=item&limit=2&keyword="+encodeURIComponent(q),M5=({name:q})=>i(z1,{class:Q.linkTarto,href:o1(q)},q),K1=({name:q})=>{let[l,e]=G();return i("li",{class:Q.item},i(M5,{name:q}),i("button",{class:Q.deleteItemBtn,onClick:()=>{e(l.filter(t=>t!==q))}},"✘"))};var Z=(q=300)=>new Promise(l=>setTimeout(l,q));var Q1=q=>Object.fromEntries(q.replace(/\+/g,"%20").split("&").map(l=>{let e=l.indexOf("=");return e<0?[decodeURIComponent(l),""]:[decodeURIComponent(l.slice(0,e)),decodeURIComponent(l.slice(e+1))]}));var w5=q=>q.onerror=()=>q.close(),S5=q=>new Promise(l=>{w5(q),q.onclose=async()=>{await Z(1e3),l()}}),Z1=(q,l)=>{let e,t=!1,r=()=>{t||(e=new WebSocket(q),e.onmessage=({data:n})=>{n==="."&&e.send(".");let _;try{_=JSON.parse(n)}catch(c){return}l(_)},S5(e).then(r))};return r(),()=>{t=!0,e.close()}};var T5=q=>{let e=Q1(window.location.search.replace(/^\?/,"")).HOST_PORT||"";if(!!/^wss?:\/\//.test(e))return Z1(`${e.replace(/\/+$/g,"")}/BeforeLogLineRead`,q)},L5=async(q,l)=>{let e=await F5(window);return window.__OverlayCallback=t=>{t!=null&&l(t)},e.callHandler(JSON.stringify({call:"subscribe",events:q}),()=>{}),()=>e.callHandler(JSON.stringify({call:"unsubscribe",events:q}),()=>{})},F5=async q=>{var l;for(;!((l=q.OverlayPluginApi)==null?void 0:l.ready);)await Z(300);return q.OverlayPluginApi},X1=x(null),Y1=x(null),j1=({children:q})=>{let[l,e]=k(null),[t,r]=k(null);return M(()=>{let n=T5(c=>{if(c.msgtype==="SendCharName"){let{charID:p,charName:f}=c.msg;return r({id:p.toString(16).toUpperCase(),name:f})}if(c.msgtype==="Chat")return e(c.msg.split("|"))});if(n)return n;let _=()=>{};return L5(["LogLine","ChangePrimaryPlayer"],c=>{if(c.type==="LogLine")return e(c.line);if(c.type==="ChangePrimaryPlayer")return r({id:c.charID.toString(16).toLowerCase(),name:c.charName})}).then(c=>{_=c}),()=>_()},[]),i(Y1.Provider,{value:t},i(X1.Provider,{value:l},q))},X=q=>{let l=P(Y1),e=P(X1);return e==null?null:q(e,l)};var q5=q=>8<=q&&q<=18;var l5=(q,l)=>q.endsWith(l)?q.slice(0,-l.length):null,E5=q=>{var t;let l=q[0]==="00"&&q[2]==="0039"&&q[3]===""&&q[4]||null;if(l==null)return null;let e=l5(l," 보유 상황을 확인합니다.")||l5(l,"의 이름을 클립보드에 복사했습니다.");return((t=e==null?void 0:e.match(/^\uE0BB([-\w\s\d':가-힣]+)\uE03C?$/))==null?void 0:t[1])||null},e5=()=>X(E5),H5=(q,l)=>q.toLowerCase()===l.toLowerCase(),N5=(q,l)=>l!=null&&q[0]==="03"&&H5(q[2],l.id)&&q[3]===l.name?parseInt(q[4]||"0",16):null,U5=q=>{let[l,e]=k(q),t=X(N5);return t!=null&&l!==t?(e(t),t):l},t5=(q=!0)=>{let l=U5(null),[e,t]=k(q),r=l==null?null:q5(l);return r!=null&&e!==r?(t(r),r):e},I5=(q,l)=>l&&q.includes(l.id)?q.join(" | "):null,n5=()=>X(I5);var o5=()=>{let[q,l]=G(),e=G1(),t=e5(),r=L("tartoPopup")[0];return M(()=>{if(t==null)return;let n=q.filter(_=>_!==t);n.unshift(t),l(n),r&&e(o1(t))},[t]),i("ul",{class:"item-list"},q.map(n=>i(K1,{key:n,name:n})))};var W5=(...q)=>({children:l})=>q.reduceRight((e,t)=>i(t,{children:e}),i(d,null,l)),r5=W5(R1,j1,$1,J1);var A5="_section_1gw6w_3",D5="_checkbox-item_1gw6w_7",O5="_checkbox-text_1gw6w_26",R5="_setting-inner_1gw6w_31",B5="_toggle-btn_1gw6w_34",$5="_toggle-text_1gw6w_64",V5="_setting_1gw6w_31",T={section:A5,checkboxItem:D5,checkboxText:O5,settingInner:R5,toggleBtn:B5,toggleText:$5,setting:V5};var r1=({name:q,children:l})=>{let[e,t]=L(q);return i("label",{class:T.checkboxItem},i("input",{type:"checkbox",checked:e,onChange:r=>t(r.currentTarget.checked)}),i("span",{class:T.checkboxText},l))},J5=()=>i("ul",{class:T.section},i(r1,{name:"tartoPopup"},"자동으로 타르토 열기"),i(r1,{name:"hideWarrior"},"전투직 전환 시 숨기기"),i(r1,{name:"debugMode"},"디버그 모드")),z5=({children:q})=>i("details",{class:T.setting},i("summary",{class:T.toggleBtn,onClick:l=>l.currentTarget.blur()},i("span",{class:T.toggleText},"설정")),i("div",{class:T.settingInner},q,i("button",{onClick:()=>window.location.reload()},"새로고침~~~~"))),i5=()=>i(z5,null,i(J5,null));var G5="_app_nohzk_3",K5="_dark_nohzk_17",s1={app:G5,dark:K5};var Q5=()=>{let q=t5(),l=L("hideWarrior")[0],e=L("debugMode")[0],t=n5();return M(()=>{e&&t!=null&&console.log(t)},[e,t]),i("main",{class:`${s1.app} ${s1.dark}`},i(i5,null),l&&!q?null:i(o5,null))},s5=()=>i(r5,null,i(Q5,null));T1(i(s5,null),document.body);})();
