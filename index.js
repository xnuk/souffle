(()=>{var z=Object.assign;var u,Ye,T,oe,ie,_e,W={},b=[],Ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function M(e,t){for(var n in t)e[n]=t[n];return e}function se(e){var t=e.parentNode;t&&t.removeChild(e)}function c(e,t,n){var r,_,o,l=arguments,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?_=t[o]:a[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(n!=null&&(a.children=n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return R(e,a,r,_,null)}function R(e,t,n,r,_){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:_==null?++u.__v:_};return u.vnode!=null&&u.vnode(o),o}function g(e){return e.children}function I(e,t){this.props=e,this.context=t}function N(e,t){if(t==null)return e.__?N(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?N(e):null}function le(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return le(e)}}function X(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!O.__r++||ie!==u.debounceRendering)&&((ie=u.debounceRendering)||oe)(O)}function O(){for(var e;O.__r=T.length;)e=T.sort(function(t,n){return t.__v.__b-n.__v.__b}),T=[],e.some(function(t){var n,r,_,o,l,a;t.__d&&(l=(o=(n=t).__v).__e,(a=n.__P)&&(r=[],(_=M({},o)).__v=o.__v+1,Y(a,o,_,n.__n,a.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l==null?N(o):l,o.__h),ce(r,o),o.__e!=l&&le(o)))})}function me(e,t,n,r,_,o,l,a,f,h){var i,v,p,s,y,m,d,C=r&&r.__k||b,S=C.length;for(n.__k=[],i=0;i<t.length;i++)if((s=n.__k[i]=(s=t[i])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?R(null,s,null,null,s):Array.isArray(s)?R(g,{children:s},null,null,null):s.__b>0?R(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(p=C[i])===null||p&&s.key==p.key&&s.type===p.type)C[i]=void 0;else for(v=0;v<S;v++){if((p=C[v])&&s.key==p.key&&s.type===p.type){C[v]=void 0;break}p=null}Y(e,s,p=p||W,_,o,l,a,f,h),y=s.__e,(v=s.ref)&&p.ref!=v&&(d||(d=[]),p.ref&&d.push(p.ref,null,s),d.push(v,s.__c||y,s)),y!=null?(m==null&&(m=y),typeof s.type=="function"&&s.__k!=null&&s.__k===p.__k?s.__d=f=ue(s,f,e):f=ae(e,s,p,C,y,f),h||n.type!=="option"?typeof n.type=="function"&&(n.__d=f):e.value=""):f&&p.__e==f&&f.parentNode!=e&&(f=N(p))}for(n.__e=m,i=S;i--;)C[i]!=null&&(typeof n.type=="function"&&C[i].__e!=null&&C[i].__e==n.__d&&(n.__d=N(r,i+1)),fe(C[i],C[i]));if(d)for(i=0;i<d.length;i++)pe(d[i],d[++i],d[++i])}function ue(e,t,n){var r,_;for(r=0;r<e.__k.length;r++)(_=e.__k[r])&&(_.__=e,t=typeof _.type=="function"?ue(_,t,n):ae(n,_,_,e.__k,_.__e,t));return t}function ae(e,t,n,r,_,o){var l,a,f;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||_!=o||_.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(_),l=null;else{for(a=o,f=0;(a=a.nextSibling)&&f<r.length;f+=2)if(a==_)break e;e.insertBefore(_,o),l=o}return l!==void 0?l:_.nextSibling}function je(e,t,n,r,_){var o;for(o in n)o==="children"||o==="key"||o in t||B(e,o,null,n[o],r);for(o in t)_&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||B(e,o,t[o],n[o],r)}function he(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ze.test(t)?n:n+"px"}function B(e,t,n,r,_){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||he(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||he(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?ge:de,o):e.removeEventListener(t,o?ge:de,o);else if(t!=="dangerouslySetInnerHTML"){if(_)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch(l){}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function de(e){this.l[e.type+!1](u.event?u.event(e):e)}function ge(e){this.l[e.type+!0](u.event?u.event(e):e)}function Y(e,t,n,r,_,o,l,a,f){var h,i,v,p,s,y,m,d,C,S,U,L=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,a=t.__e=n.__e,t.__h=null,o=[a]),(h=u.__b)&&h(t);try{e:if(typeof L=="function"){if(d=t.props,C=(h=L.contextType)&&r[h.__c],S=h?C?C.props.value:h.__:r,n.__c?m=(i=t.__c=n.__c).__=i.__E:("prototype"in L&&L.prototype.render?t.__c=i=new L(d,S):(t.__c=i=new I(d,S),i.constructor=L,i.render=et),C&&C.sub(i),i.props=d,i.state||(i.state={}),i.context=S,i.__n=r,v=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),L.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=M({},i.__s)),M(i.__s,L.getDerivedStateFromProps(d,i.__s))),p=i.props,s=i.state,v)L.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(L.getDerivedStateFromProps==null&&d!==p&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(d,S),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(d,i.__s,S)===!1||t.__v===n.__v){i.props=d,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(D){D&&(D.__=t)}),i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(d,i.__s,S),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(p,s,y)})}i.context=S,i.props=d,i.state=i.__s,(h=u.__r)&&h(t),i.__d=!1,i.__v=t,i.__P=e,h=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(r=M(M({},r),i.getChildContext())),v||i.getSnapshotBeforeUpdate==null||(y=i.getSnapshotBeforeUpdate(p,s)),U=h!=null&&h.type===g&&h.key==null?h.props.children:h,me(e,Array.isArray(U)?U:[U],t,n,r,_,o,l,a,f),i.base=t.__e,t.__h=null,i.__h.length&&l.push(i),m&&(i.__E=i.__=null),i.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Je(n.__e,t,n,r,_,o,l,f);(h=u.diffed)&&h(t)}catch(D){t.__v=null,(f||o!=null)&&(t.__e=a,t.__h=!!f,o[o.indexOf(a)]=null),u.__e(D,t,n)}}function ce(e,t){u.__c&&u.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){u.__e(r,n.__v)}})}function Je(e,t,n,r,_,o,l,a){var f,h,i,v,p=n.props,s=t.props,y=t.type,m=0;if(y==="svg"&&(_=!0),o!=null){for(;m<o.length;m++)if((f=o[m])&&(f===e||(y?f.localName==y:f.nodeType==3))){e=f,o[m]=null;break}}if(e==null){if(y===null)return document.createTextNode(s);e=_?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,s.is&&s),o=null,a=!1}if(y===null)p===s||a&&e.data===s||(e.data=s);else{if(o=o&&b.slice.call(e.childNodes),h=(p=n.props||W).dangerouslySetInnerHTML,i=s.dangerouslySetInnerHTML,!a){if(o!=null)for(p={},v=0;v<e.attributes.length;v++)p[e.attributes[v].name]=e.attributes[v].value;(i||h)&&(i&&(h&&i.__html==h.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(je(e,s,p,_,a),i)t.__k=[];else if(m=t.props.children,me(e,Array.isArray(m)?m:[m],t,n,r,_&&y!=="foreignObject",o,l,e.firstChild,a),o!=null)for(m=o.length;m--;)o[m]!=null&&se(o[m]);a||("value"in s&&(m=s.value)!==void 0&&(m!==e.value||y==="progress"&&!m)&&B(e,"value",m,p.value,!1),"checked"in s&&(m=s.checked)!==void 0&&m!==e.checked&&B(e,"checked",m,p.checked,!1))}return e}function pe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){u.__e(r,n)}}function fe(e,t,n){var r,_,o;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||pe(r,null,t)),n||typeof e.type=="function"||(n=(_=e.__e)!=null),e.__e=e.__d=void 0,(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){u.__e(l,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&fe(r[o],t,n);_!=null&&se(_)}function et(e,t,n){return this.constructor(e,n)}function ve(e,t,n){var r,_,o;u.__&&u.__(e,t),_=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Y(t,e=(!r&&n||t).__k=c(g,null,[e]),_||W,W,t.ownerSVGElement!==void 0,!r&&n?[n]:_?null:t.firstChild?b.slice.call(t.childNodes):null,o,!r&&n?n:_?_.__e:t.firstChild,r),ce(o,e)}function w(e,t){var n={__c:t="__cC"+_e++,__:e,Consumer:function(r,_){return r.children(_)},Provider:function(r){var _,o;return this.getChildContext||(_=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&_.some(X)},this.sub=function(l){_.push(l);var a=l.componentWillUnmount;l.componentWillUnmount=function(){_.splice(_.indexOf(l),1),a&&a.call(l)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}u={__e:function(e,t){for(var n,r,_;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),_=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),_=n.__d),_)return n.__E=n}catch(o){e=o}throw e},__v:0},Ye=function(e){return e!=null&&e.constructor===void 0},I.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=M({},this.state),typeof e=="function"&&(e=e(M({},n),this.props)),e&&M(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),X(this))},I.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),X(this))},I.prototype.render=g,T=[],oe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,O.__r=0,_e=0;var G,k,ye,Z=0,j=[],Ce=u.__b,ke=u.__r,Pe=u.diffed,Se=u.__c,Le=u.unmount;function J(e,t){u.__h&&u.__h(k,e,Z||t),Z=0;var n=k.__H||(k.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function x(e){return Z=1,tt(xe,e)}function tt(e,t,n){var r=J(G++,2);return r.t=e,r.__c||(r.__=[n?n(t):xe(void 0,t),function(_){var o=r.t(r.__[0],_);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=k),r.__}function H(e,t){var n=J(G++,3);!u.__s&&nt(n.__H,t)&&(n.__=e,n.__H=t,k.__H.__h.push(n))}function F(e){var t=k.context[e.__c],n=J(G++,9);return n.__c=e,t?(n.__==null&&(n.__=!0,t.sub(k)),t.props.value):e.__}function rt(){j.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(V),e.__H.__h.forEach(ee),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}),j=[]}u.__b=function(e){k=null,Ce&&Ce(e)},u.__r=function(e){ke&&ke(e),G=0;var t=(k=e.__c).__H;t&&(t.__h.forEach(V),t.__h.forEach(ee),t.__h=[])},u.diffed=function(e){Pe&&Pe(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(j.push(t)!==1&&ye===u.requestAnimationFrame||((ye=u.requestAnimationFrame)||function(n){var r,_=function(){clearTimeout(o),Fe&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(_,100);Fe&&(r=requestAnimationFrame(_))})(rt)),k=void 0},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(V),n.__h=n.__h.filter(function(r){return!r.__||ee(r)})}catch(r){t.some(function(_){_.__h&&(_.__h=[])}),t=[],u.__e(r,n.__v)}}),Se&&Se(e,t)},u.unmount=function(e){Le&&Le(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(V)}catch(n){u.__e(n,t.__v)}};var Fe=typeof requestAnimationFrame=="function";function V(e){var t=k;typeof e.__c=="function"&&e.__c(),k=t}function ee(e){var t=k;e.__c=e.__(),k=t}function nt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function xe(e,t){return typeof t=="function"?t(e):t}var E;(function(e){e[e.Session=0]="Session",e[e.Local=1]="Local"})(E||(E={}));var we=0,He=1,ot=(e,t)=>{let n=window[e===0?"sessionStorage":"localStorage"];return{get:()=>{let r=n.getItem(t);if(r==null)return null;try{return JSON.parse(r)}catch(_){return null}},set:r=>{n.setItem(t,JSON.stringify(r))}}},q=(e,t,n)=>{let[r,_]=x(n),[o,l]=x(null);return H(()=>{let a=ot(e,t);l(a);let f=a.get();return f==null?a.set(r):_(f),()=>l(null)},[e,t]),H(()=>{o!=null&&o.set(r)},[r]),[r,_]};var K={version:1,tartoPopup:!1,debugMode:!1,hideWarrior:!1},Me=w([K,e=>{}]),Ae=({children:e})=>{let[t,n]=q(He,"config",K);return t.version!==K.version&&n(K),c(Me.Provider,{value:[t,n],children:e})},A=e=>{let[t,n]=F(Me);return[t[e],r=>n(z(z({},t),{[e]:r}))]};var Te=w([[],e=>{}]),Ne=({children:e})=>c(Te.Provider,{value:q(we,"item-history",[]),children:e}),$=()=>F(Te);var Ee="souffle-popup",te=w({openPopup:e=>{}}),Ue=({children:e})=>{let[t,n]=x(null);return c(te.Provider,{children:e,value:{openPopup:r=>{t!=null&&t.close();let _=window.open(r,Ee,"width=700,height=700");_==null||_.focus(),n(_)}}})},De=({href:e,class:t,children:n})=>{let{openPopup:r}=F(te);return c("a",{class:t,href:e,target:Ee,children:n,onClick:_=>{_.preventDefault(),r(e)}})},We=()=>F(te).openPopup;var ne=e=>"https://ff14.tar.to/item/list/?redirect=true&quick-search-option=item&limit=2&keyword="+encodeURIComponent(e),it=({name:e})=>c(De,{class:"link-tarto",href:ne(e)},e),Re=({name:e})=>{let[t,n]=$();return c("li",{class:"item"},c(it,{name:e}),c("button",{class:"delete-item-btn",onClick:()=>{n(t.filter(r=>r!==e))}},"삭제"))};var _t=(e=300)=>new Promise(t=>setTimeout(t,e)),st=async e=>{var t;for(;!((t=e.OverlayPluginApi)==null?void 0:t.ready);)await _t(300);return e.OverlayPluginApi},Ie=w(null),Oe=w(null),Be=({children:e})=>{let[t,n]=x(null),[r,_]=x(null);return H(()=>{(async()=>{let o=await st(window);window.__OverlayCallback=l=>{l!=null&&(l.type==="LogLine"?n(l.line):l.type==="ChangePrimaryPlayer"&&_({id:l.charID.toString(16),name:l.charName}))},o.callHandler(JSON.stringify({call:"subscribe",events:["LogLine","ChangePrimaryPlayer"]}),()=>{})})()},[]),c(Oe.Provider,{value:r},c(Ie.Provider,{value:t},e))},Q=e=>{let t=F(Oe),n=F(Ie);return n==null?null:e(n,t)};var P;(function(e){e[e.None=0]="None",e[e.GLA=1]="GLA",e[e.PGL=2]="PGL",e[e.MRD=3]="MRD",e[e.LNC=4]="LNC",e[e.ARC=5]="ARC",e[e.CNJ=6]="CNJ",e[e.THM=7]="THM",e[e.CRP=8]="CRP",e[e.BSM=9]="BSM",e[e.ARM=10]="ARM",e[e.GSM=11]="GSM",e[e.LTW=12]="LTW",e[e.WVR=13]="WVR",e[e.ALC=14]="ALC",e[e.CUL=15]="CUL",e[e.MIN=16]="MIN",e[e.BTN=17]="BTN",e[e.FSH=18]="FSH",e[e.PLD=19]="PLD",e[e.MNK=20]="MNK",e[e.WAR=21]="WAR",e[e.DRG=22]="DRG",e[e.BRD=23]="BRD",e[e.WHM=24]="WHM",e[e.BLM=25]="BLM",e[e.ACN=26]="ACN",e[e.SMN=27]="SMN",e[e.SCH=28]="SCH",e[e.ROG=29]="ROG",e[e.NIN=30]="NIN",e[e.MCH=31]="MCH",e[e.DRK=32]="DRK",e[e.AST=33]="AST",e[e.SAM=34]="SAM",e[e.RDM=35]="RDM",e[e.BLU=36]="BLU",e[e.GNB=37]="GNB",e[e.DNC=38]="DNC"})(P||(P={}));var lt=[18,16,17,8,9,10,11,12,13,14,15].sort((e,t)=>e-t),Ge=e=>lt.includes(e);var Ve=(e,t)=>e.endsWith(t)?e.slice(0,-t.length):null,ct=e=>{var r;let t=e[0]==="00"&&e[2]==="0039"&&e[3]===""&&e[4]||null;if(t==null)return null;let n=Ve(t," 보유 상황을 확인합니다.")||Ve(t,"의 이름을 클립보드에 복사했습니다.");return((r=n==null?void 0:n.match(/^\uE0BB([-\w\s\d':가-힣]+)\uE03C?$/))==null?void 0:r[1])||null},qe=()=>Q(ct),ut=(e,t)=>t&&e[0]==="03"&&e[2]===t.id&&e[3]===t.name?Ge(parseInt(e[4]||"0",16)):null,Ke=(e=!0)=>{let[t,n]=x(e),r=Q(ut);return r!=null&&n(r),t},at=(e,t)=>t&&e.includes(t.id)?e.join(" | "):null,$e=()=>Q(at);var Qe=()=>{let[e,t]=$(),n=We(),r=qe(),_=A("tartoPopup")[0];return H(()=>{if(r==null)return;let o=e.filter(l=>l!==r);o.unshift(r),t(o),_&&n(ne(r))},[r]),c("ul",{class:"item-list"},e.map(o=>c(Re,{key:o,name:o})))};var pt=(...e)=>({children:t})=>e.reduceRight((n,r)=>c(r,{children:n}),c(g,null,t)),ze=pt(Ae,Be,Ne,Ue);var re=({name:e,children:t})=>{let[n,r]=A(e);return c("label",{class:"checkbox-item"},c("input",{type:"checkbox",checked:n,onChange:_=>r(_.currentTarget.checked)}),c("span",null,t))},be=()=>c("ul",{class:"setting"},c(re,{name:"tartoPopup"},"자동으로 타르토 열기"),c(re,{name:"hideWarrior"},"전투직 전환 시 숨기기"),c(re,{name:"debugMode"},"디버그 모드"));var ft=()=>{let e=Ke(),t=A("hideWarrior")[0],n=A("debugMode")[0],r=$e();return H(()=>{n&&r!=null&&console.log(r)},[n,r]),c("main",null,c(be,null),c("button",{onClick:()=>window.location.reload()},"새로고침~~~~"),t&&!e?null:c(Qe,null))},Xe=()=>c(ze,null,c(ft,null));ve(c(Xe,null),document.body);})();
