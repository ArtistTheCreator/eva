import{A as nn,r as u,C as en,ak as E,al as on,am as tn,an as rn,w as an,o as $,R as z,m as C,ag as cn,ao as H,a5 as ln,b as J,d as M,ap as sn,c as dn,e as P,_ as U}from"./index-3ff29123.js";const W=typeof CSSINJS_STATISTIC<"u";let R=!0;function L(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];if(!W)return Object.assign.apply(Object,[{}].concat(e));R=!1;const r={};return e.forEach(t=>{Object.keys(t).forEach(a=>{Object.defineProperty(r,a,{configurable:!0,enumerable:!0,get:()=>t[a]})})}),R=!0,r}const F={};function un(){}function fn(n){let e,o=n,r=un;return W&&(e=new Set,o=new Proxy(n,{get(t,c){return R&&e.add(c),t[c]}}),r=(t,c)=>{var a;F[t]={global:Array.from(e),component:Object.assign(Object.assign({},(a=F[t])===null||a===void 0?void 0:a.component),c)}}),{token:o,keys:e,flush:r}}function mn(n,e,o){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const t=Array.isArray(n)?n:[n,n],[c]=t,a=t.join("-");return l=>{const[y,d,f]=nn(),{getPrefixCls:s,iconPrefixCls:g,csp:m}=u.useContext(en),p=s(),b={theme:y,token:d,hashId:f,nonce:()=>m==null?void 0:m.nonce,clientOnly:r.clientOnly,order:r.order||-999};return E(Object.assign(Object.assign({},b),{clientOnly:!1,path:["Shared",p]}),()=>[{"&":tn(d)}]),on(g,m),[E(Object.assign(Object.assign({},b),{path:[a,l,g]}),()=>{const{token:v,flush:x}=fn(d),i=Object.assign({},d[c]);if(r.deprecatedTokens){const{deprecatedTokens:Z}=r;Z.forEach(D=>{let[A,O]=D;var j;(i!=null&&i[A]||i!=null&&i[O])&&((j=i[O])!==null&&j!==void 0||(i[O]=i==null?void 0:i[A]))})}const h=typeof o=="function"?o(L(v,i??{})):o,w=Object.assign(Object.assign({},h),i),I=`.${l}`,X=L(v,{componentCls:I,prefixCls:l,iconCls:`.${g}`,antCls:`.${p}`},w),Y=e(X,{hashId:f,prefixCls:l,rootPrefixCls:p,iconPrefixCls:g,overrideComponentToken:i});return x(c,w),[r.resetStyle===!1?null:rn(d,l),Y]}),f]}}const _n=(n,e,o,r)=>{const t=mn(n,e,o,Object.assign({resetStyle:!1,order:-998},r));return a=>{let{prefixCls:l}=a;return t(l),null}};function q(n){var e;return n==null||(e=n.getRootNode)===null||e===void 0?void 0:e.call(n)}function Cn(n){return q(n)instanceof ShadowRoot}function gn(n){return Cn(n)?q(n):null}function yn(n){return n.replace(/-(.)/g,function(e,o){return o.toUpperCase()})}function vn(n,e){an(n,"[@ant-design/icons] ".concat(e))}function B(n){return $(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&($(n.icon)==="object"||typeof n.icon=="function")}function K(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(e,o){var r=n[o];switch(o){case"class":e.className=r,delete e.class;break;default:delete e[o],e[yn(o)]=r}return e},{})}function _(n,e,o){return o?z.createElement(n.tag,C(C({key:e},K(n.attrs)),o),(n.children||[]).map(function(r,t){return _(r,"".concat(e,"-").concat(n.tag,"-").concat(t))})):z.createElement(n.tag,C({key:e},K(n.attrs)),(n.children||[]).map(function(r,t){return _(r,"".concat(e,"-").concat(n.tag,"-").concat(t))}))}function G(n){return cn(n)[0]}function Q(n){return n?Array.isArray(n)?n:[n]:[]}var pn=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Tn=function(e){var o=u.useContext(H),r=o.csp,t=o.prefixCls,c=pn;t&&(c=c.replace(/anticon/g,t)),u.useEffect(function(){var a=e.current,l=gn(a);ln(c,"@ant-design-icons",{prepend:!0,csp:r,attachTo:l})},[])},bn=["icon","className","onClick","style","primaryColor","secondaryColor"],T={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function hn(n){var e=n.primaryColor,o=n.secondaryColor;T.primaryColor=e,T.secondaryColor=o||G(e),T.calculated=!!o}function wn(){return C({},T)}var S=function(e){var o=e.icon,r=e.className,t=e.onClick,c=e.style,a=e.primaryColor,l=e.secondaryColor,y=J(e,bn),d=u.useRef(),f=T;if(a&&(f={primaryColor:a,secondaryColor:l||G(a)}),Tn(d),vn(B(o),"icon should be icon definiton, but got ".concat(o)),!B(o))return null;var s=o;return s&&typeof s.icon=="function"&&(s=C(C({},s),{},{icon:s.icon(f.primaryColor,f.secondaryColor)})),_(s.icon,"svg-".concat(s.name),C(C({className:r,onClick:t,style:c,"data-icon":s.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},y),{},{ref:d}))};S.displayName="IconReact";S.getTwoToneColors=wn;S.setTwoToneColors=hn;const N=S;function V(n){var e=Q(n),o=M(e,2),r=o[0],t=o[1];return N.setTwoToneColors({primaryColor:r,secondaryColor:t})}function Sn(){var n=N.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var kn=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];V(sn.primary);var k=u.forwardRef(function(n,e){var o,r=n.className,t=n.icon,c=n.spin,a=n.rotate,l=n.tabIndex,y=n.onClick,d=n.twoToneColor,f=J(n,kn),s=u.useContext(H),g=s.prefixCls,m=g===void 0?"anticon":g,p=s.rootClassName,b=dn(p,m,(o={},P(o,"".concat(m,"-").concat(t.name),!!t.name),P(o,"".concat(m,"-spin"),!!c||t.name==="loading"),o),r),v=l;v===void 0&&y&&(v=-1);var x=a?{msTransform:"rotate(".concat(a,"deg)"),transform:"rotate(".concat(a,"deg)")}:void 0,i=Q(d),h=M(i,2),w=h[0],I=h[1];return u.createElement("span",U({role:"img","aria-label":t.name},f,{ref:e,tabIndex:v,onClick:y,className:b}),u.createElement(N,{icon:t,primaryColor:w,secondaryColor:I,style:x}))});k.displayName="AntdIcon";k.getTwoToneColor=Sn;k.setTwoToneColor=V;const xn=k;var In={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};const On=In;var jn=function(e,o){return u.createElement(xn,U({},e,{ref:o,icon:On}))};const Nn=u.forwardRef(jn);export{xn as A,Nn as C,_n as a,gn as b,mn as g,L as m};
