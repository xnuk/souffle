(()=>{var ge=Object.assign;var u,At,B,Ee,De,Oe,Z={},ve=[],Tt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function O(e,t){for(var n in t)e[n]=t[n];return e}function Ue(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n){var r,s,o,l=arguments,f={};for(o in t)o=="key"?r=t[o]:o=="ref"?s=t[o]:f[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(n!=null&&(f.children=n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)f[o]===void 0&&(f[o]=e.defaultProps[o]);return z(e,f,r,s,null)}function z(e,t,n,r,s){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++u.__v:s};return u.vnode!=null&&u.vnode(o),o}function g(e){return e.children}function Q(e,t){this.props=e,this.context=t}function V(e,t){if(t==null)return e.__?V(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?V(e):null}function Re(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Re(e)}}function ye(e){(!e.__d&&(e.__d=!0)&&B.push(e)&&!Y.__r++||De!==u.debounceRendering)&&((De=u.debounceRendering)||Ee)(Y)}function Y(){for(var e;Y.__r=B.length;)e=B.sort(function(t,n){return t.__v.__b-n.__v.__b}),B=[],e.some(function(t){var n,r,s,o,l,f;t.__d&&(l=(o=(n=t).__v).__e,(f=n.__P)&&(r=[],(s=O({},o)).__v=o.__v+1,Ce(f,o,s,n.__n,f.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l==null?V(o):l,o.__h),be(r,o),o.__e!=l&&Re(o)))})}function Ge(e,t,n,r,s,o,l,f,m,h){var i,y,p,a,C,d,c,P=r&&r.__k||ve,w=P.length;for(n.__k=[],i=0;i<t.length;i++)if((a=n.__k[i]=(a=t[i])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?z(null,a,null,null,a):Array.isArray(a)?z(g,{children:a},null,null,null):a.__b>0?z(a.type,a.props,a.key,null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(p=P[i])===null||p&&a.key==p.key&&a.type===p.type)P[i]=void 0;else for(y=0;y<w;y++){if((p=P[y])&&a.key==p.key&&a.type===p.type){P[y]=void 0;break}p=null}Ce(e,a,p=p||Z,s,o,l,f,m,h),C=a.__e,(y=a.ref)&&p.ref!=y&&(c||(c=[]),p.ref&&c.push(p.ref,null,a),c.push(y,a.__c||C,a)),C!=null?(d==null&&(d=C),typeof a.type=="function"&&a.__k!=null&&a.__k===p.__k?a.__d=m=Fe(a,m,e):m=Ie(e,a,p,P,C,m),h||n.type!=="option"?typeof n.type=="function"&&(n.__d=m):e.value=""):m&&p.__e==m&&m.parentNode!=e&&(m=V(p))}for(n.__e=d,i=w;i--;)P[i]!=null&&(typeof n.type=="function"&&P[i].__e!=null&&P[i].__e==n.__d&&(n.__d=V(r,i+1)),Ve(P[i],P[i]));if(c)for(i=0;i<c.length;i++)Be(c[i],c[++i],c[++i])}function Fe(e,t,n){var r,s;for(r=0;r<e.__k.length;r++)(s=e.__k[r])&&(s.__=e,t=typeof s.type=="function"?Fe(s,t,n):Ie(n,s,s,e.__k,s.__e,t));return t}function Ie(e,t,n,r,s,o){var l,f,m;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||s!=o||s.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(s),l=null;else{for(f=o,m=0;(f=f.nextSibling)&&m<r.length;m+=2)if(f==s)break e;e.insertBefore(s,o),l=o}return l!==void 0?l:s.nextSibling}function Nt(e,t,n,r,s){var o;for(o in n)o==="children"||o==="key"||o in t||X(e,o,null,n[o],r);for(o in t)s&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||X(e,o,t[o],n[o],r)}function $e(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Tt.test(t)?n:n+"px"}function X(e,t,n,r,s){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||$e(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||$e(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?We:Ke,o):e.removeEventListener(t,o?We:Ke,o);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch(l){}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ke(e){this.l[e.type+!1](u.event?u.event(e):e)}function We(e){this.l[e.type+!0](u.event?u.event(e):e)}function Ce(e,t,n,r,s,o,l,f,m){var h,i,y,p,a,C,d,c,P,w,U,x=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(m=n.__h,f=t.__e=n.__e,t.__h=null,o=[f]),(h=u.__b)&&h(t);try{e:if(typeof x=="function"){if(c=t.props,P=(h=x.contextType)&&r[h.__c],w=h?P?P.props.value:h.__:r,n.__c?d=(i=t.__c=n.__c).__=i.__E:("prototype"in x&&x.prototype.render?t.__c=i=new x(c,w):(t.__c=i=new Q(c,w),i.constructor=x,i.render=Dt),P&&P.sub(i),i.props=c,i.state||(i.state={}),i.context=w,i.__n=r,y=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),x.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=O({},i.__s)),O(i.__s,x.getDerivedStateFromProps(c,i.__s))),p=i.props,a=i.state,y)x.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(x.getDerivedStateFromProps==null&&c!==p&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(c,w),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(c,i.__s,w)===!1||t.__v===n.__v){i.props=c,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(R){R&&(R.__=t)}),i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(c,i.__s,w),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(p,a,C)})}i.context=w,i.props=c,i.state=i.__s,(h=u.__r)&&h(t),i.__d=!1,i.__v=t,i.__P=e,h=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(r=O(O({},r),i.getChildContext())),y||i.getSnapshotBeforeUpdate==null||(C=i.getSnapshotBeforeUpdate(p,a)),U=h!=null&&h.type===g&&h.key==null?h.props.children:h,Ge(e,Array.isArray(U)?U:[U],t,n,r,s,o,l,f,m),i.base=t.__e,t.__h=null,i.__h.length&&l.push(i),d&&(i.__E=i.__=null),i.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Et(n.__e,t,n,r,s,o,l,m);(h=u.diffed)&&h(t)}catch(R){t.__v=null,(m||o!=null)&&(t.__e=f,t.__h=!!m,o[o.indexOf(f)]=null),u.__e(R,t,n)}}function be(e,t){u.__c&&u.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){u.__e(r,n.__v)}})}function Et(e,t,n,r,s,o,l,f){var m,h,i,y,p=n.props,a=t.props,C=t.type,d=0;if(C==="svg"&&(s=!0),o!=null){for(;d<o.length;d++)if((m=o[d])&&(m===e||(C?m.localName==C:m.nodeType==3))){e=m,o[d]=null;break}}if(e==null){if(C===null)return document.createTextNode(a);e=s?document.createElementNS("http://www.w3.org/2000/svg",C):document.createElement(C,a.is&&a),o=null,f=!1}if(C===null)p===a||f&&e.data===a||(e.data=a);else{if(o=o&&ve.slice.call(e.childNodes),h=(p=n.props||Z).dangerouslySetInnerHTML,i=a.dangerouslySetInnerHTML,!f){if(o!=null)for(p={},y=0;y<e.attributes.length;y++)p[e.attributes[y].name]=e.attributes[y].value;(i||h)&&(i&&(h&&i.__html==h.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Nt(e,a,p,s,f),i)t.__k=[];else if(d=t.props.children,Ge(e,Array.isArray(d)?d:[d],t,n,r,s&&C!=="foreignObject",o,l,e.firstChild,f),o!=null)for(d=o.length;d--;)o[d]!=null&&Ue(o[d]);f||("value"in a&&(d=a.value)!==void 0&&(d!==e.value||C==="progress"&&!d)&&X(e,"value",d,p.value,!1),"checked"in a&&(d=a.checked)!==void 0&&d!==e.checked&&X(e,"checked",d,p.checked,!1))}return e}function Be(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){u.__e(r,n)}}function Ve(e,t,n){var r,s,o;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Be(r,null,t)),n||typeof e.type=="function"||(n=(s=e.__e)!=null),e.__e=e.__d=void 0,(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){u.__e(l,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Ve(r[o],t,n);s!=null&&Ue(s)}function Dt(e,t,n){return this.constructor(e,n)}function Ze(e,t,n){var r,s,o;u.__&&u.__(e,t),s=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Ce(t,e=(!r&&n||t).__k=_(g,null,[e]),s||Z,Z,t.ownerSVGElement!==void 0,!r&&n?[n]:s?null:t.firstChild?ve.slice.call(t.childNodes):null,o,!r&&n?n:s?s.__e:t.firstChild,r),be(o,e)}function N(e,t){var n={__c:t="__cC"+Oe++,__:e,Consumer:function(r,s){return r.children(s)},Provider:function(r){var s,o;return this.getChildContext||(s=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&s.some(ye)},this.sub=function(l){s.push(l);var f=l.componentWillUnmount;l.componentWillUnmount=function(){s.splice(s.indexOf(l),1),f&&f.call(l)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}u={__e:function(e,t){for(var n,r,s;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),s=n.__d),s)return n.__E=n}catch(o){e=o}throw e},__v:0},At=function(e){return e!=null&&e.constructor===void 0},Q.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=O({},this.state),typeof e=="function"&&(e=e(O({},n),this.props)),e&&O(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),ye(this))},Q.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ye(this))},Q.prototype.render=g,B=[],Ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y.__r=0,Oe=0;var q,L,ze,ke=0,Pe=[],Qe=u.__b,Ye=u.__r,Xe=u.diffed,qe=u.__c,je=u.unmount;function Se(e,t){u.__h&&u.__h(L,e,ke||t),ke=0;var n=L.__H||(L.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function M(e){return ke=1,Ot(Je,e)}function Ot(e,t,n){var r=Se(q++,2);return r.t=e,r.__c||(r.__=[n?n(t):Je(void 0,t),function(s){var o=r.t(r.__[0],s);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=L),r.__}function E(e,t){var n=Se(q++,3);!u.__s&&Ut(n.__H,t)&&(n.__=e,n.__H=t,L.__H.__h.push(n))}function A(e){var t=L.context[e.__c],n=Se(q++,9);return n.__c=e,t?(n.__==null&&(n.__=!0,t.sub(L)),t.props.value):e.__}function Rt(){Pe.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(j),e.__H.__h.forEach(xe),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}),Pe=[]}u.__b=function(e){L=null,Qe&&Qe(e)},u.__r=function(e){Ye&&Ye(e),q=0;var t=(L=e.__c).__H;t&&(t.__h.forEach(j),t.__h.forEach(xe),t.__h=[])},u.diffed=function(e){Xe&&Xe(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Pe.push(t)!==1&&ze===u.requestAnimationFrame||((ze=u.requestAnimationFrame)||function(n){var r,s=function(){clearTimeout(o),et&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(s,100);et&&(r=requestAnimationFrame(s))})(Rt)),L=void 0},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(j),n.__h=n.__h.filter(function(r){return!r.__||xe(r)})}catch(r){t.some(function(s){s.__h&&(s.__h=[])}),t=[],u.__e(r,n.__v)}}),qe&&qe(e,t)},u.unmount=function(e){je&&je(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(j)}catch(n){u.__e(n,t.__v)}};var et=typeof requestAnimationFrame=="function";function j(e){var t=L;typeof e.__c=="function"&&e.__c(),L=t}function xe(e){var t=L;e.__c=e.__(),L=t}function Ut(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Je(e,t){return typeof t=="function"?t(e):t}var G;(function(e){e[e.Session=0]="Session",e[e.Local=1]="Local"})(G||(G={}));var tt=0,nt=1,bt=(e,t)=>{let n=window[e===0?"sessionStorage":"localStorage"];return{get:()=>{let r=n.getItem(t);if(r==null)return null;try{return JSON.parse(r)}catch(s){return null}},set:r=>{n.setItem(t,JSON.stringify(r))}}},J=(e,t,n)=>{let[r,s]=M(n),[o,l]=M(null);return E(()=>{let f=bt(e,t);l(f);let m=f.get();return m==null?f.set(r):s(m),()=>l(null)},[e,t]),E(()=>{o!=null&&o.set(r)},[r]),[r,s]};var ee={version:1,tartoPopup:!1,debugMode:!1,hideWarrior:!1},rt=N([ee,e=>{}]),ot=({children:e})=>{let[t,n]=J(nt,"config",ee);return t.version!==ee.version&&n(ee),_(rt.Provider,{value:[t,n],children:e})},F=e=>{let[t,n]=A(rt);return[t[e],r=>n(ge(ge({},t),{[e]:r}))]};var it=N([[],e=>{}]),st=({children:e})=>_(it.Provider,{value:J(tt,"item-history",[]),children:e}),te=()=>A(it);var lt="souffle-popup",we=N({openPopup:e=>{}}),_t=({children:e})=>{let[t,n]=M(null);return _(we.Provider,{children:e,value:{openPopup:r=>{t!=null&&t.close();let s=window.open(r,lt,"width=700,height=700");s==null||s.focus(),n(s)}}})},at=({href:e,class:t,children:n})=>{let{openPopup:r}=A(we);return _("a",{class:t,href:e,target:lt,children:n,onClick:s=>{s.preventDefault(),r(e)}})},ct=()=>A(we).openPopup;var Le=e=>"https://ff14.tar.to/item/list/?redirect=true&quick-search-option=item&limit=2&keyword="+encodeURIComponent(e),Ft=({name:e})=>_(at,{class:"link-tarto",href:Le(e)},e),ut=({name:e})=>{let[t,n]=te();return _("li",{class:"item"},_(Ft,{name:e}),_("button",{class:"delete-item-btn",onClick:()=>{n(t.filter(r=>r!==e))}},"삭제"))};var It=(e=300)=>new Promise(t=>setTimeout(t,e)),Bt=async e=>{var t;for(;!((t=e.OverlayPluginApi)==null?void 0:t.ready);)await It(300);return e.OverlayPluginApi},ft=N(null),pt=N(null),mt=({children:e})=>{let[t,n]=M(null),[r,s]=M(null);return E(()=>{(async()=>{let o=await Bt(window);window.__OverlayCallback=l=>{l!=null&&(l.type==="LogLine"?n(l.line):l.type==="ChangePrimaryPlayer"&&s({id:l.charID.toString(16),name:l.charName}))},o.callHandler(JSON.stringify({call:"subscribe",events:["LogLine","ChangePrimaryPlayer"]}),()=>{})})()},[]),_(pt.Provider,{value:r},_(ft.Provider,{value:t},e))},ne=e=>{let t=A(pt),n=A(ft);return n==null?null:e(n,t)};var H;(function(e){e[e.None=0]="None",e[e.GLA=1]="GLA",e[e.PGL=2]="PGL",e[e.MRD=3]="MRD",e[e.LNC=4]="LNC",e[e.ARC=5]="ARC",e[e.CNJ=6]="CNJ",e[e.THM=7]="THM",e[e.CRP=8]="CRP",e[e.BSM=9]="BSM",e[e.ARM=10]="ARM",e[e.GSM=11]="GSM",e[e.LTW=12]="LTW",e[e.WVR=13]="WVR",e[e.ALC=14]="ALC",e[e.CUL=15]="CUL",e[e.MIN=16]="MIN",e[e.BTN=17]="BTN",e[e.FSH=18]="FSH",e[e.PLD=19]="PLD",e[e.MNK=20]="MNK",e[e.WAR=21]="WAR",e[e.DRG=22]="DRG",e[e.BRD=23]="BRD",e[e.WHM=24]="WHM",e[e.BLM=25]="BLM",e[e.ACN=26]="ACN",e[e.SMN=27]="SMN",e[e.SCH=28]="SCH",e[e.ROG=29]="ROG",e[e.NIN=30]="NIN",e[e.MCH=31]="MCH",e[e.DRK=32]="DRK",e[e.AST=33]="AST",e[e.SAM=34]="SAM",e[e.RDM=35]="RDM",e[e.BLU=36]="BLU",e[e.GNB=37]="GNB",e[e.DNC=38]="DNC"})(H||(H={}));var Vt=[18,16,17,8,9,10,11,12,13,14,15].sort((e,t)=>e-t),dt=e=>Vt.includes(e);var ht=(e,t)=>e.endsWith(t)?e.slice(0,-t.length):null,Gt=e=>{var r;let t=e[0]==="00"&&e[2]==="0039"&&e[3]===""&&e[4]||null;if(t==null)return null;let n=ht(t," 보유 상황을 확인합니다.")||ht(t,"의 이름을 클립보드에 복사했습니다.");return((r=n==null?void 0:n.match(/^\uE0BB([-\w\s\d':가-힣]+)\uE03C?$/))==null?void 0:r[1])||null},gt=()=>ne(Gt),$t=(e,t)=>t&&e[0]==="03"&&e[2]===t.id&&e[3]===t.name?dt(parseInt(e[4]||"0",16)):null,vt=(e=!0)=>{let[t,n]=M(e),r=ne($t);return r!=null&&n(r),t},Kt=(e,t)=>t&&e.includes(t.id)?e.join(" | "):null,yt=()=>ne(Kt);var Ct=()=>{let[e,t]=te(),n=ct(),r=gt(),s=F("tartoPopup")[0];return E(()=>{if(r==null)return;let o=e.filter(l=>l!==r);o.unshift(r),t(o),s&&n(Le(r))},[r]),_("ul",{class:"item-list"},e.map(o=>_(ut,{key:o,name:o})))};var Wt=(...e)=>({children:t})=>e.reduceRight((n,r)=>_(r,{children:n}),_(g,null,t)),kt=Wt(ot,mt,st,_t);var He=({name:e,children:t})=>{let[n,r]=F(e);return _("label",{class:"checkbox-item"},_("input",{type:"checkbox",checked:n,onChange:s=>r(s.currentTarget.checked)}),_("span",null,t))},Pt=()=>_("ul",{class:"setting"},_(He,{name:"tartoPopup"},"자동으로 타르토 열기"),_(He,{name:"hideWarrior"},"전투직 전환 시 숨기기"),_(He,{name:"debugMode"},"디버그 모드"));var Zt=()=>{let e=vt(),t=F("hideWarrior")[0],n=F("debugMode")[0],r=yt();return E(()=>{n&&r!=null&&console.log(r)},[n,r]),_("main",null,_(Pt,null),_("button",{onClick:()=>window.location.reload()},"새로고침~~~~"),t&&!e?null:_(Ct,null))},re=()=>_(kt,null,_(Zt,null));var zt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,Qt=/[&<>"]/g,Yt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},Xt=function(e){return Yt[e]||e};function St(e){return typeof e!="string"&&(e=String(e)),e.replace(Qt,Xt)}var xt=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"	"))},wt=function(e,t,n){return String(e).length>(t||40)||!n&&String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},Lt={};function qt(e){var t="";for(var n in e){var r=e[n];r!=null&&r!==""&&(t&&(t+=" "),t+=n[0]=="-"?n:Lt[n]||(Lt[n]=n.replace(/([A-Z])/g,"-$1").toLowerCase()),t+=": ",t+=r,typeof r=="number"&&zt.test(n)===!1&&(t+="px"),t+=";")}return t||void 0}function oe(e,t){for(var n in t)e[n]=t[n];return e}function Me(e,t){return Array.isArray(t)?t.reduce(Me,e):t!=null&&t!==!1&&e.push(t),e}var jt={shallow:!0},Ae=[],Jt=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,en=/[\s\n\\/='"\0<>]/,Ht=function(){};I.render=I;var tn=function(e,t){return I(e,t,jt)},nn=[];function I(e,t,n){var r=ie(e,t,n);return u.__c&&u.__c(e,nn),r}function ie(e,t,n,r,s,o){if(e==null||typeof e=="boolean")return"";Array.isArray(e)&&(e=_(g,null,e));var l=e.type,f=e.props,m=!1;t=t||{};var h,i=(n=n||{}).pretty,y=i&&typeof i=="string"?i:"	";if(typeof e!="object"&&!l)return St(e);if(typeof l=="function"){if(m=!0,!n.shallow||!r&&n.renderRootComponent!==!1){if(l===g){var p="",a=[];Me(a,e.props.children);for(var C=0;C<a.length;C++)p+=(C>0&&i?`
`:"")+ie(a[C],t,n,n.shallowHighOrder!==!1,s,o);return p}var d,c=e.__c={__v:e,context:t,props:e.props,setState:Ht,forceUpdate:Ht,__h:[]};if(u.__b&&u.__b(e),u.__r&&u.__r(e),l.prototype&&typeof l.prototype.render=="function"){var P=l.contextType,w=P&&t[P.__c],U=P!=null?w?w.props.value:P.__:t;(c=e.__c=new l(f,U)).__v=e,c._dirty=c.__d=!0,c.props=f,c.state==null&&(c.state={}),c._nextState==null&&c.__s==null&&(c._nextState=c.__s=c.state),c.context=U,l.getDerivedStateFromProps?c.state=oe(oe({},c.state),l.getDerivedStateFromProps(c.props,c.state)):c.componentWillMount&&(c.componentWillMount(),c.state=c._nextState!==c.state?c._nextState:c.__s!==c.state?c.__s:c.state),d=c.render(c.props,c.state,c.context)}else{var x=l.contextType,R=x&&t[x.__c];d=l.call(e.__c,f,x!=null?R?R.props.value:x.__:t)}return c.getChildContext&&(t=oe(oe({},t),c.getChildContext())),u.diffed&&u.diffed(e),ie(d,t,n,n.shallowHighOrder!==!1,s,o)}l=(h=l).displayName||h!==Function&&h.name||function(me){var de=(Function.prototype.toString.call(me).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!de){for(var W=-1,he=Ae.length;he--;)if(Ae[he]===me){W=he;break}W<0&&(W=Ae.push(me)-1),de="UnnamedComponent"+W}return de}(h)}var $,D,k="";if(f){var se=Object.keys(f);n&&n.sortAttributes===!0&&se.sort();for(var le=0;le<se.length;le++){var v=se[le],S=f[v];if(v!=="children"){if(!v.match(/[\s\n\\/='"\0<>]/)&&(n&&n.allAttributes||v!=="key"&&v!=="ref"&&v!=="__self"&&v!=="__source"&&v!=="defaultValue")){if(v==="className"){if(f.class)continue;v="class"}else s&&v.match(/^xlink:?./)&&(v=v.toLowerCase().replace(/^xlink:?/,"xlink:"));if(v==="htmlFor"){if(f.for)continue;v="for"}v==="style"&&S&&typeof S=="object"&&(S=qt(S)),v[0]==="a"&&v[1]==="r"&&typeof S=="boolean"&&(S=String(S));var _e=n.attributeHook&&n.attributeHook(v,S,t,n,m);if(_e||_e==="")k+=_e;else if(v==="dangerouslySetInnerHTML")D=S&&S.__html;else if(l==="textarea"&&v==="value")$=S;else if((S||S===0||S==="")&&typeof S!="function"){if(!(S!==!0&&S!==""||(S=v,n&&n.xml))){k+=" "+v;continue}if(v==="value"){if(l==="select"){o=S;continue}l==="option"&&o==S&&(k+=" selected")}k+=" "+v+'="'+St(S)+'"'}}}else $=S}}if(i){var ae=k.replace(/^\n\s*/," ");ae===k||~ae.indexOf(`
`)?i&&~k.indexOf(`
`)&&(k+=`
`):k=ae}if(k="<"+l+k+">",en.test(String(l)))throw new Error(l+" is not a valid HTML tag name in "+k);var K,Mt=Jt.test(String(l))||n.voidElements&&n.voidElements.test(String(l)),T=[];if(D)i&&wt(D)&&(D=`
`+y+xt(D,y)),k+=D;else if($!=null&&Me(K=[],$).length){for(var ce=i&&~k.indexOf(`
`),Te=!1,ue=0;ue<K.length;ue++){var fe=K[ue];if(fe!=null&&fe!==!1){var b=ie(fe,t,n,!0,l==="svg"||l!=="foreignObject"&&s,o);if(i&&!ce&&wt(b)&&(ce=!0),b)if(i){var Ne=b.length>0&&b[0]!="<";Te&&Ne?T[T.length-1]+=b:T.push(b),Te=Ne}else T.push(b)}}if(i&&ce)for(var pe=T.length;pe--;)T[pe]=`
`+y+xt(T[pe],y)}if(T.length||D)k+=T.join("");else if(n&&n.xml)return k.substring(0,k.length-1)+" />";return!Mt||K||D?(i&&~k.indexOf(`
`)&&(k+=`
`),k+="</"+l+">"):k=k.replace(/>$/," />"),k}I.shallowRender=tn;var mr="<!doctype html>"+I(_("html",{lang:"ko"},_("head",null,_("meta",{charSet:"utf-8"}),_("script",{defer:!0,src:"./index.js"}),_("link",{rel:"stylesheet",href:"index.css"}),_("title",null,"Dildo")),_("body",null,_(re,null))));Ze(_(re,null),document.body);})();
