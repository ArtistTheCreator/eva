import{V as U,v as x,R as k,p as l,ab as V,r as c,ah as S,P as W,f as I,h as z,ai as q,c as G,i as N,_ as E}from"./index-496900a1.js";function $(n){var e;return n==null||(e=n.getRootNode)===null||e===void 0?void 0:e.call(n)}function H(n){return $(n)instanceof ShadowRoot}function J(n){return H(n)?$(n):null}function K(n){return n.replace(/-(.)/g,function(e,o){return o.toUpperCase()})}function Q(n,e){U(n,"[@ant-design/icons] ".concat(e))}function _(n){return x(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(x(n.icon)==="object"||typeof n.icon=="function")}function R(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(e,o){var r=n[o];switch(o){case"class":e.className=r,delete e.class;break;default:delete e[o],e[K(o)]=r}return e},{})}function T(n,e,o){return o?k.createElement(n.tag,l(l({key:e},R(n.attrs)),o),(n.children||[]).map(function(r,a){return T(r,"".concat(e,"-").concat(n.tag,"-").concat(a))})):k.createElement(n.tag,l({key:e},R(n.attrs)),(n.children||[]).map(function(r,a){return T(r,"".concat(e,"-").concat(n.tag,"-").concat(a))}))}function A(n){return V(n)[0]}function j(n){return n?Array.isArray(n)?n:[n]:[]}var X=`
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
`,Y=function(e){var o=c.useContext(S),r=o.csp,a=o.prefixCls,s=X;a&&(s=s.replace(/anticon/g,a)),c.useEffect(function(){var i=e.current,d=J(i);W(s,"@ant-design-icons",{prepend:!0,csp:r,attachTo:d})},[])},Z=["icon","className","onClick","style","primaryColor","secondaryColor"],C={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function nn(n){var e=n.primaryColor,o=n.secondaryColor;C.primaryColor=e,C.secondaryColor=o||A(e),C.calculated=!!o}function en(){return l({},C)}var g=function(e){var o=e.icon,r=e.className,a=e.onClick,s=e.style,i=e.primaryColor,d=e.secondaryColor,f=I(e,Z),m=c.useRef(),u=C;if(i&&(u={primaryColor:i,secondaryColor:d||A(i)}),Y(m),Q(_(o),"icon should be icon definiton, but got ".concat(o)),!_(o))return null;var t=o;return t&&typeof t.icon=="function"&&(t=l(l({},t),{},{icon:t.icon(u.primaryColor,u.secondaryColor)})),T(t.icon,"svg-".concat(t.name),l(l({className:r,onClick:a,style:s,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f),{},{ref:m}))};g.displayName="IconReact";g.getTwoToneColors=en;g.setTwoToneColors=nn;const w=g;function F(n){var e=j(n),o=z(e,2),r=o[0],a=o[1];return w.setTwoToneColors({primaryColor:r,secondaryColor:a})}function on(){var n=w.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var an=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];F(q.primary);var y=c.forwardRef(function(n,e){var o,r=n.className,a=n.icon,s=n.spin,i=n.rotate,d=n.tabIndex,f=n.onClick,m=n.twoToneColor,u=I(n,an),t=c.useContext(S),b=t.prefixCls,v=b===void 0?"anticon":b,L=t.rootClassName,P=G(L,v,(o={},N(o,"".concat(v,"-").concat(a.name),!!a.name),N(o,"".concat(v,"-spin"),!!s||a.name==="loading"),o),r),p=d;p===void 0&&f&&(p=-1);var B=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,O=j(m),h=z(O,2),D=h[0],M=h[1];return c.createElement("span",E({role:"img","aria-label":a.name},u,{ref:e,tabIndex:p,onClick:f,className:P}),c.createElement(w,{icon:a,primaryColor:D,secondaryColor:M,style:B}))});y.displayName="AntdIcon";y.getTwoToneColor=on;y.setTwoToneColor=F;const rn=y;var tn={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};const cn=tn;var ln=function(e,o){return c.createElement(rn,E({},e,{ref:o,icon:cn}))};const dn=c.forwardRef(ln);export{rn as A,dn as C,J as g};
