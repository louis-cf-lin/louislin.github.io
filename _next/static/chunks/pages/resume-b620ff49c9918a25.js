(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{6438:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return r(4195)}])},3505:function(e,n,r){"use strict";r.d(n,{F:function(){return f}});var t=r(5893),i=r(1664),o=r(1163),s=r(7294),a=r(5512),c=r.n(a),l=r(5828),u=[{label:"r\xe9sum\xe9",href:"/resume",title:"R\xe9sum\xe9"},{label:"projects",href:"/projects",title:"Projects"},{label:"studio",href:"/studio",title:"Studio"}],f=[{label:".createbase()",href:"/projects/createbase",title:"CreateBase"},{label:".thesis()",href:"/projects/thesis",title:"Thesis"},{label:".iamsl_app()",href:"/projects/iamsl-app",title:"IAMSL app"},{label:".kessler()",href:"/projects/kessler",title:"Kessler"}];n.Z=function(e){var n=e.compile,r=e.isRendered,a=void 0===r||r,h=(0,o.useRouter)(),d=(0,s.useState)(!1),p=d[0],j=d[1],m=(0,s.useState)(!1),_=m[0],x=m[1],b=(0,s.useState)(!0),v=b[0],H=b[1];(0,s.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>10?H(!1):H(!0)}))}),[]);return(0,t.jsxs)("header",{className:c().headerContainer,style:{background:v?"transparent":"white"},children:[(0,t.jsxs)("div",{className:c().headerWrapper,children:[(0,t.jsx)(i.default,{href:"/",children:a?(0,t.jsx)("a",{className:c().homeIcon,title:"Home",children:(0,t.jsx)(l.Uv,{})}):(0,t.jsx)("a",{className:c().home,title:"Home",children:"louis.md"})}),(0,t.jsxs)("div",{className:c().mobileOnly,children:[n&&(0,t.jsx)("button",{className:c().play,onClick:n,children:a?(0,t.jsx)(l.om,{}):(0,t.jsx)(l.U_,{})}),(0,t.jsxs)("div",{className:c().mobileMenuWrapper,onBlur:function(){return j(!1)},children:[(0,t.jsx)("button",{className:c().menuBtn,onClick:function(){return j((function(e){return!e}))},children:(0,t.jsx)(l.XH,{})}),p&&(0,t.jsx)("div",{className:c().menu,children:u.map((function(e){return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsx)("a",{onMouseDown:function(){return h.push(e.href)},className:h.asPath===e.href?c().active:"",children:e.label}),"/projects"===e.href&&(0,t.jsx)("div",{className:c().submenu,children:f.map((function(e){return(0,t.jsx)("a",{onMouseDown:function(){return h.push(e.href)},className:h.asPath===e.href?c().active:"",children:e.label},e.href)}))})]},e.href)}))})]})]}),(0,t.jsx)("div",{className:c().tabContainer,children:u.map((function(e){return"/projects"===e.href?(0,t.jsxs)("div",{className:c().projectsContainer,onMouseOver:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:[(0,t.jsx)(i.default,{href:e.href,children:(0,t.jsx)("a",{className:"".concat(c().tab," ").concat(h.asPath.startsWith("/projects")?c().active:""," ").concat(_?c().hovered:""),title:e.title,children:e.label})}),_&&(0,t.jsx)("div",{className:c().projectsWrapper,onMouseOver:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:(0,t.jsx)("div",{className:c().projectsMenu,children:f.map((function(e){return(0,t.jsx)(i.default,{href:e.href,children:(0,t.jsx)("a",{title:e.title,children:e.label})},e.href)}))})})]},e.href):(0,t.jsx)(i.default,{href:e.href,children:(0,t.jsx)("a",{className:"".concat(c().tab," ").concat(h.asPath===e.href?c().active:""),title:e.title,children:e.label})},e.href)}))})]}),n&&(0,t.jsx)("button",{className:c().compile,title:a?"To code":"Compile",onClick:n,children:a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.om,{})," to code"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.U_,{})," compile"]})})]})}},5828:function(e,n,r){"use strict";r.d(n,{XH:function(){return c},U_:function(){return l},om:function(){return u},oH:function(){return f},eF:function(){return h},rq:function(){return d},qW:function(){return p},EQ:function(){return j},rS:function(){return m},Uv:function(){return _}});var t=r(5893);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){i(e,n,r[n])}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=function(e){var n=e.paths,r=e.height,i=void 0===r?24:r,a=e.width,c=void 0===a?24:a,l=e.color,u=void 0===l?"black":l,f=e.strokeWidth,h=void 0===f?1:f,d=e.fill,p=void 0===d?"none":d,j=e.pathProps,m=void 0===j?{}:j,_=s(e,["paths","height","width","color","strokeWidth","fill","pathProps"]);return(0,t.jsx)("i",o({style:{display:"flex",alignItems:"center",justifyContent:"center"}},_,{children:(0,t.jsx)("svg",{style:{display:"inline"},fill:"none",height:i,width:c,viewBox:"0 0 24 24",children:n.map((function(e,n){return(0,t.jsx)("path",o({d:e,stroke:u,strokeWidth:h,strokeLinecap:"round",fill:p,style:{transition:"all 0.1s ease-out"}},m),n)}))})}))},c=function(e){return(0,t.jsx)(a,o({},e,{paths:["M6 8H18","M6 12H18","M6 16H18"]}))},l=function(e){return(0,t.jsx)(a,o({},e,{paths:["M7.5 16.1315V7.86852C7.5 7.06982 8.39015 6.59343 9.0547 7.03647L15.2519 11.1679C15.8457 11.5638 15.8457 12.4362 15.2519 12.8321L9.0547 16.9635C8.39015 17.4066 7.5 16.9302 7.5 16.1315Z"]}))},u=function(e){return(0,t.jsx)(a,o({},e,{paths:["M9.25 8.5L5.75 12L9.25 15.5M14.75 15.5L18.25 12L14.75 8.5"]}))},f=function(e){return(0,t.jsx)(a,o({},e,{paths:["M15.5 15.5L18 18M9.5 11.5H13.5M11.5 9.5V13.5M17 11.5V11.5C17 14.5376 14.5376 17 11.5 17V17C8.46243 17 6 14.5376 6 11.5V11.5C6 8.46243 8.46243 6 11.5 6V6C14.5376 6 17 8.46243 17 11.5Z"]}))},h=function(e){return(0,t.jsx)(a,o({},e,{paths:["M15.5 15.5L18 18M9.5 11.5H13.5M17 11.5V11.5C17 14.5376 14.5376 17 11.5 17V17C8.46243 17 6 14.5376 6 11.5V11.5C6 8.46243 8.46243 6 11.5 6V6C14.5376 6 17 8.46243 17 11.5Z"]}))},d=function(e){return(0,t.jsx)(a,o({},e,{paths:["M9.5 6.5L6.5 6.5L6.5 9.5M6.5 14.5L6.5 17.5H9.5M14.5 17.5H17.5V14.5M17.5 9.5V6.5L14.5 6.5M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"]}))},p=function(e){return(0,t.jsx)(a,o({},e,{paths:["M6.5 15.0001V16.4999C6.5 17.0522 6.94772 17.4999 7.5 17.4999H16.5C17.0523 17.4999 17.5 17.0522 17.5 16.4999V14.9995M12 6.50006V13.9975M12 13.9975L15.5 10.4995M12 13.9975L8.5 10.4995"]}))},j=function(e){return(0,t.jsx)(a,o({},e,{paths:["M8.5 10.5H7.5C6.94772 10.5 6.5 10.9477 6.5 11.5V17.5C6.5 18.0523 6.94772 18.5 7.5 18.5H16.5C17.0523 18.5 17.5 18.0523 17.5 17.5V11.5C17.5 10.9477 17.0523 10.5 16.5 10.5H15.5M8.5 10.5V9C8.5 7.067 10.067 5.5 12 5.5V5.5C13.933 5.5 15.5 7.067 15.5 9V10.5M8.5 10.5H15.5M12 15V15C11.7239 15 11.5 14.7761 11.5 14.5V14.5C11.5 14.2239 11.7239 14 12 14V14C12.2761 14 12.5 14.2239 12.5 14.5V14.5C12.5 14.7761 12.2761 15 12 15Z"]}))},m=function(e){return(0,t.jsx)(a,o({},e,{pathProps:{strokeLinejoin:"round"},paths:["M17.5 8.75V12.25C17.5 12.8023 17.0523 13.25 16.5 13.25H6.5M6.5 13.25L9 11.25M6.5 13.25L9 15.25"]}))},_=function(e){return(0,t.jsx)(a,o({},e,{pathProps:{fillRule:"evenodd",clipRule:"evenodd",strokeWidth:0,fill:"black",stroke:"none"},paths:["M20 4H4V20H20V4ZM11 9H13V15H11V17H14H17V15H15V8V7H14H11V9ZM7.5 14.5H6.5V15.5V16V17H7.5H8H9V16V15.5V14.5H8H7.5Z"]}))}},5883:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var t=r(5893),i=r(111),o=r.n(i),s=[{label:"email",href:"mailto:louiscflin@gmail.com"},{label:"linkedIn",href:"https://www.linkedin.com/in/louiscflin/"},{label:"gitHub",href:"https://github.com/louis-cf-lin"}],a=function(){return(0,t.jsx)("footer",{className:o().footer,children:(0,t.jsx)("div",{className:o().inner,children:s.map((function(e){return(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href)}))})})},c=r(8475),l=r.n(c),u=function(e){var n=e.children;return(0,t.jsx)("div",{className:l().page,children:(0,t.jsxs)("div",{className:l().wrapper,children:[n,(0,t.jsx)(a,{})]})})}},4195:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=r(7294),o=r(296),s=r(3505),a=r(5883),c=r(4043),l=r.n(c),u=r(9008),f=r(5828);o.v0.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(o.v0.version,"/pdf.worker.js");var h="/louis-resume-portfolio.pdf";n.default=function(){var e=(0,i.useRef)(null),n=(0,i.useState)(0),r=n[0],c=n[1],d=(0,i.useState)(1),p=d[0],j=d[1];(0,i.useEffect)((function(){var n;c((null===(n=e.current)||void 0===n?void 0:n.offsetHeight)||0)}),[]);return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(u.default,{children:[(0,t.jsx)("title",{children:"R\xe9sum\xe9 - .l"}),(0,t.jsx)("meta",{name:"description",content:"Hi, I'm Louis and I write code."}),(0,t.jsx)("link",{rel:"icon",href:"/icon.ico"})]}),(0,t.jsx)(s.Z,{}),(0,t.jsxs)("main",{ref:e,className:l().main,children:[(0,t.jsxs)("div",{className:l().controls,children:[(0,t.jsx)("button",{onClick:function(){return j((function(e){return e>=5?e:e+.25}))},title:"Zoom in",children:(0,t.jsx)(f.oH,{height:32,width:32})}),(0,t.jsx)("button",{onClick:function(){return j((function(e){return e<=.25?e:e-.25}))},title:"Zoom out",children:(0,t.jsx)(f.eF,{height:32,width:32})}),(0,t.jsx)("button",{onClick:function(){var n;c((null===(n=e.current)||void 0===n?void 0:n.offsetHeight)||0),j(1)},title:"Center",children:(0,t.jsx)(f.rq,{height:32,width:32})}),(0,t.jsx)("a",{href:h,download:!0,children:(0,t.jsx)("button",{title:"Download",children:(0,t.jsx)(f.qW,{height:32,width:32})})})]}),(0,t.jsx)(o.BB,{file:h,className:l().container,children:(0,t.jsx)(o.T3,{pageNumber:1,className:l().page,height:r,scale:p})})]})]})}},111:function(e){e.exports={footer:"Footer_footer__BcpJO",inner:"Footer_inner__3q9Lf"}},5512:function(e){e.exports={headerContainer:"Header_headerContainer__9Xbnv",headerWrapper:"Header_headerWrapper__p6qHq",home:"Header_home__VHzMc",homeIcon:"Header_homeIcon__k7e2i",mobileOnly:"Header_mobileOnly__dE1XQ",mobileMenuWrapper:"Header_mobileMenuWrapper__gPp5e",menuBtn:"Header_menuBtn__fCD7Y",menu:"Header_menu__VYiuS",active:"Header_active__Gp5CT",submenu:"Header_submenu__bT_u9",play:"Header_play__oFIz4",tabContainer:"Header_tabContainer__CGIL_",compile:"Header_compile__sA14v",tab:"Header_tab__g2IIK",projectsContainer:"Header_projectsContainer__XYFgd",hovered:"Header_hovered__cHAcP",projectsWrapper:"Header_projectsWrapper__XF3yf",projectsMenu:"Header_projectsMenu__fqpCI"}},8475:function(e){e.exports={page:"Page_page__1sIzF",wrapper:"Page_wrapper__kjDsR"}},4043:function(e){e.exports={main:"resume_main__c38_a",controls:"resume_controls__8Q2Qz",container:"resume_container__ysS29",page:"resume_page__iD2HC"}},4601:function(){},2767:function(){},8251:function(){},7677:function(){},7324:function(){}},function(e){e.O(0,[824,912,774,888,179],(function(){return n=6438,e(e.s=n);var n}));var n=e.O();_N_E=n}]);