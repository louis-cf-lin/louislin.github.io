(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{4427:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/kessler",function(){return t(7815)}])},3505:function(e,r,t){"use strict";t.d(r,{F:function(){return f}});var n=t(5893),o=t(1664),a=t(1163),i=t(7294),c=t(5512),l=t.n(c),s=t(5828),u=[{label:"r\xe9sum\xe9",href:"/resume",title:"R\xe9sum\xe9"},{label:"projects",href:"/projects",title:"Projects"},{label:"studio",href:"/studio",title:"Studio"}],f=[{label:".createbase()",href:"/projects/createbase",title:"CreateBase"},{label:".thesis()",href:"/projects/thesis",title:"Thesis"},{label:".iamsl_app()",href:"/projects/iamsl-app",title:"IAMSL app"},{label:".kessler()",href:"/projects/kessler",title:"Kessler"}];r.Z=function(e){var r=e.compile,t=e.isRendered,c=void 0===t||t,d=(0,a.useRouter)(),p=(0,i.useState)(!1),h=p[0],m=p[1],v=(0,i.useState)(!1),j=v[0],_=v[1],b=(0,i.useState)(!0),y=b[0],x=b[1];(0,i.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>10?x(!1):x(!0)}))}),[]);return(0,n.jsxs)("header",{className:l().headerContainer,style:{background:y?"transparent":"white"},children:[(0,n.jsxs)("div",{className:l().headerWrapper,children:[(0,n.jsx)(o.default,{href:"/",children:c?(0,n.jsx)("a",{className:l().homeIcon,title:"Home",children:(0,n.jsx)(s.Uv,{})}):(0,n.jsx)("a",{className:l().home,title:"Home",children:"louis.md"})}),(0,n.jsxs)("div",{className:l().mobileOnly,children:[r&&(0,n.jsx)("button",{className:l().play,onClick:r,children:c?(0,n.jsx)(s.om,{}):(0,n.jsx)(s.U_,{})}),(0,n.jsxs)("div",{className:l().mobileMenuWrapper,onBlur:function(){return m(!1)},children:[(0,n.jsx)("button",{className:l().menuBtn,onClick:function(){return m((function(e){return!e}))},children:(0,n.jsx)(s.XH,{})}),h&&(0,n.jsx)("div",{className:l().menu,children:u.map((function(e){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("a",{onMouseDown:function(){return d.push(e.href)},className:d.asPath===e.href?l().active:"",children:e.label}),"/projects"===e.href&&(0,n.jsx)("div",{className:l().submenu,children:f.map((function(e){return(0,n.jsx)("a",{onMouseDown:function(){return d.push(e.href)},className:d.asPath===e.href?l().active:"",children:e.label},e.href)}))})]},e.href)}))})]})]}),(0,n.jsx)("div",{className:l().tabContainer,children:u.map((function(e){return"/projects"===e.href?(0,n.jsxs)("div",{className:l().projectsContainer,onMouseOver:function(){return _(!0)},onMouseLeave:function(){return _(!1)},children:[(0,n.jsx)(o.default,{href:e.href,children:(0,n.jsx)("a",{className:"".concat(l().tab," ").concat(d.asPath.startsWith("/projects")?l().active:""," ").concat(j?l().hovered:""),title:e.title,children:e.label})}),j&&(0,n.jsx)("div",{className:l().projectsWrapper,onMouseOver:function(){return _(!0)},onMouseLeave:function(){return _(!1)},children:(0,n.jsx)("div",{className:l().projectsMenu,children:f.map((function(e){return(0,n.jsx)(o.default,{href:e.href,children:(0,n.jsx)("a",{title:e.title,children:e.label})},e.href)}))})})]},e.href):(0,n.jsx)(o.default,{href:e.href,children:(0,n.jsx)("a",{className:"".concat(l().tab," ").concat(d.asPath===e.href?l().active:""),title:e.title,children:e.label})},e.href)}))})]}),r&&(0,n.jsx)("button",{className:l().compile,title:c?"To code":"Compile",onClick:r,children:c?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.om,{})," to code"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.U_,{})," compile"]})})]})}},5828:function(e,r,t){"use strict";t.d(r,{XH:function(){return l},U_:function(){return s},om:function(){return u},oH:function(){return f},eF:function(){return d},rq:function(){return p},qW:function(){return h},Uv:function(){return m}});var n=t(5893);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=function(e){var r=e.paths,t=e.height,o=void 0===t?24:t,c=e.width,l=void 0===c?24:c,s=e.color,u=void 0===s?"black":s,f=e.strokeWidth,d=void 0===f?1:f,p=e.fill,h=void 0===p?"none":p,m=e.pathProps,v=void 0===m?{}:m,j=i(e,["paths","height","width","color","strokeWidth","fill","pathProps"]);return(0,n.jsx)("i",a({style:{display:"flex",alignItems:"center",justifyContent:"center"}},j,{children:(0,n.jsx)("svg",{style:{display:"inline"},fill:"none",height:o,width:l,viewBox:"0 0 24 24",children:r.map((function(e,r){return(0,n.jsx)("path",a({d:e,stroke:u,strokeWidth:d,strokeLinecap:"round",fill:h,style:{transition:"all 0.1s ease-out"}},v),r)}))})}))},l=function(e){return(0,n.jsx)(c,a({},e,{paths:["M6 8H18","M6 12H18","M6 16H18"]}))},s=function(e){return(0,n.jsx)(c,a({},e,{paths:["M7.5 16.1315V7.86852C7.5 7.06982 8.39015 6.59343 9.0547 7.03647L15.2519 11.1679C15.8457 11.5638 15.8457 12.4362 15.2519 12.8321L9.0547 16.9635C8.39015 17.4066 7.5 16.9302 7.5 16.1315Z"]}))},u=function(e){return(0,n.jsx)(c,a({},e,{paths:["M9.25 8.5L5.75 12L9.25 15.5M14.75 15.5L18.25 12L14.75 8.5"]}))},f=function(e){return(0,n.jsx)(c,a({},e,{paths:["M15.5 15.5L18 18M9.5 11.5H13.5M11.5 9.5V13.5M17 11.5V11.5C17 14.5376 14.5376 17 11.5 17V17C8.46243 17 6 14.5376 6 11.5V11.5C6 8.46243 8.46243 6 11.5 6V6C14.5376 6 17 8.46243 17 11.5Z"]}))},d=function(e){return(0,n.jsx)(c,a({},e,{paths:["M15.5 15.5L18 18M9.5 11.5H13.5M17 11.5V11.5C17 14.5376 14.5376 17 11.5 17V17C8.46243 17 6 14.5376 6 11.5V11.5C6 8.46243 8.46243 6 11.5 6V6C14.5376 6 17 8.46243 17 11.5Z"]}))},p=function(e){return(0,n.jsx)(c,a({},e,{paths:["M9.5 6.5L6.5 6.5L6.5 9.5M6.5 14.5L6.5 17.5H9.5M14.5 17.5H17.5V14.5M17.5 9.5V6.5L14.5 6.5M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"]}))},h=function(e){return(0,n.jsx)(c,a({},e,{paths:["M6.5 15.0001V16.4999C6.5 17.0522 6.94772 17.4999 7.5 17.4999H16.5C17.0523 17.4999 17.5 17.0522 17.5 16.4999V14.9995M12 6.50006V13.9975M12 13.9975L15.5 10.4995M12 13.9975L8.5 10.4995"]}))},m=function(e){return(0,n.jsx)(c,a({},e,{pathProps:{fillRule:"evenodd",clipRule:"evenodd",strokeWidth:0,fill:"black",stroke:"none"},paths:["M20 4H4V20H20V4ZM11 9H13V15H11V17H14H17V15H15V8V7H14H11V9ZM7.5 14.5H6.5V15.5V16V17H7.5H8H9V16V15.5V14.5H8H7.5Z"]}))}},5883:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(5893),o=t(111),a=t.n(o),i=[{label:"email",href:"mailto:louiscflin@gmail.com"},{label:"linkedIn",href:"https://www.linkedin.com/in/louiscflin/"},{label:"gitHub",href:"https://github.com/louis-cf-lin"}],c=function(){return(0,n.jsx)("footer",{className:a().footer,children:(0,n.jsx)("div",{className:a().inner,children:i.map((function(e){return(0,n.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href)}))})})},l=t(8475),s=t.n(l),u=function(e){var r=e.children;return(0,n.jsx)("div",{className:s().page,children:(0,n.jsxs)("div",{className:s().wrapper,children:[r,(0,n.jsx)(c,{})]})})}},2812:function(e,r,t){"use strict";var n=t(5893),o=t(1664),a=t(3505),i=t(7069),c=t.n(i);r.Z=function(e){var r=e.active;return(0,n.jsx)("div",{className:c().container,children:a.F.map((function(e){return(0,n.jsx)(o.default,{href:e.href,children:(0,n.jsx)("a",{className:"".concat(c().tab," ").concat("/projects/".concat(r)===e.href?c().active:""),title:e.title,children:e.label})},e.href)}))})}},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},c=t(1003),l=t(880),s=t(9246);var u={};function f(e,r,t,n){if(e&&c.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var r=o(c.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?c.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,m=e.replace,v=e.shallow,j=e.scroll,_=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(r=i.default.Children.only(h))&&"object"===typeof r&&r.ref,y=o(s.useIntersection({rootMargin:"200px"}),2),x=y[0],g=y[1],H=i.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);i.default.useEffect((function(){var e=g&&t&&c.isLocalURL(d),r="undefined"!==typeof _?_:n&&n.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,g,_,t,n]);var M={ref:H,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:l,scroll:i}))}(e,n,d,p,m,v,j,_)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var C="undefined"!==typeof _?_:n&&n.locale,w=n&&n.isLocaleDomain&&c.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);M.href=w||c.addBasePath(c.addLocale(p,C,n&&n.defaultLocale))}return i.default.cloneElement(r,M)};r.default=d},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!c,u=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],h=o(a.useState(r?r.current:null),2),m=h[0],v=h[1],j=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=l.get(n):(r=l.get(t),s.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var r=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&s.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:t}))}),[n,m,t,d]);return a.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&v(r.current)}),[r]),[j,d]};var a=t(7294),i=t(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[]},7815:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(9008),a=t(3505),i=t(5883),c=t(2812),l=t(2281),s=t.n(l);r.default=function(){return(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Kessler - .l"}),(0,n.jsx)("meta",{name:"description",content:"Hi, I'm Louis and I write code."}),(0,n.jsx)("link",{rel:"icon",href:"/icon.ico"})]}),(0,n.jsx)(a.Z,{}),(0,n.jsx)("main",{className:s().main,children:(0,n.jsx)(c.Z,{active:"kessler"})})]})}},111:function(e){e.exports={footer:"Footer_footer__BcpJO",inner:"Footer_inner__3q9Lf"}},5512:function(e){e.exports={headerContainer:"Header_headerContainer__9Xbnv",headerWrapper:"Header_headerWrapper__p6qHq",home:"Header_home__VHzMc",homeIcon:"Header_homeIcon__k7e2i",mobileOnly:"Header_mobileOnly__dE1XQ",mobileMenuWrapper:"Header_mobileMenuWrapper__gPp5e",menuBtn:"Header_menuBtn__fCD7Y",menu:"Header_menu__VYiuS",active:"Header_active__Gp5CT",submenu:"Header_submenu__bT_u9",play:"Header_play__oFIz4",tabContainer:"Header_tabContainer__CGIL_",compile:"Header_compile__sA14v",tab:"Header_tab__g2IIK",projectsContainer:"Header_projectsContainer__XYFgd",hovered:"Header_hovered__cHAcP",projectsWrapper:"Header_projectsWrapper__XF3yf",projectsMenu:"Header_projectsMenu__fqpCI"}},8475:function(e){e.exports={page:"Page_page__1sIzF",wrapper:"Page_wrapper__kjDsR"}},7069:function(e){e.exports={container:"ProjectsNav_container__Dx4Uw",tab:"ProjectsNav_tab__1M_0Z",active:"ProjectsNav_active__D9VjP"}},2281:function(e){e.exports={main:"kessler_main__wtEy_"}},9008:function(e,r,t){e.exports=t(3121)},1664:function(e,r,t){e.exports=t(1551)},1163:function(e,r,t){e.exports=t(880)}},function(e){e.O(0,[774,888,179],(function(){return r=4427,e(e.s=r);var r}));var r=e.O();_N_E=r}]);