(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{1038:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/iamsl-app",function(){return t(9400)}])},3505:function(e,n,t){"use strict";t.d(n,{F:function(){return d}});var r=t(5893),a=t(1664),s=t(1163),i=t(7294),c=t(5512),l=t.n(c),o=t(5828),u=[{label:"r\xe9sum\xe9",href:"/resume",title:"R\xe9sum\xe9"},{label:"projects",href:"/projects",title:"Projects"},{label:"studio",href:"/studio",title:"Studio"}],d=[{label:".createbase()",href:"/projects/createbase",title:"CreateBase"},{label:".thesis()",href:"/projects/thesis",title:"Thesis"},{label:".iamsl_app()",href:"/projects/iamsl-app",title:"IAMSL app"},{label:".kessler()",href:"/projects/kessler",title:"Kessler"}];n.Z=function(e){var n=e.compile,t=e.isRendered,c=void 0===t||t,h=(0,s.useRouter)(),p=(0,i.useState)(!1),f=p[0],m=p[1],_=(0,i.useState)(!1),j=_[0],x=_[1],v=(0,i.useState)(!0),b=v[0],g=v[1];(0,i.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>10?g(!1):g(!0)}))}),[]);return(0,r.jsxs)("header",{className:l().headerContainer,style:{background:b?"transparent":"white"},children:[(0,r.jsxs)("div",{className:l().headerWrapper,children:[(0,r.jsx)(a.default,{href:"/",children:c?(0,r.jsx)("a",{className:l().homeIcon,title:"Home",children:(0,r.jsx)(o.Uv,{})}):(0,r.jsx)("a",{className:l().home,title:"Home",children:"louis.md"})}),(0,r.jsxs)("div",{className:l().mobileOnly,children:[n&&(0,r.jsx)("button",{className:l().play,onClick:n,children:c?(0,r.jsx)(o.om,{}):(0,r.jsx)(o.U_,{})}),(0,r.jsxs)("div",{className:l().mobileMenuWrapper,onBlur:function(){return m(!1)},children:[(0,r.jsx)("button",{className:l().menuBtn,onClick:function(){return m((function(e){return!e}))},children:(0,r.jsx)(o.XH,{})}),f&&(0,r.jsx)("div",{className:l().menu,children:u.map((function(e){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("a",{onMouseDown:function(){return h.push(e.href)},className:h.asPath===e.href?l().active:"",children:e.label}),"/projects"===e.href&&(0,r.jsx)("div",{className:l().submenu,children:d.map((function(e){return(0,r.jsx)("a",{onMouseDown:function(){return h.push(e.href)},className:h.asPath===e.href?l().active:"",children:e.label},e.href)}))})]},e.href)}))})]})]}),(0,r.jsx)("div",{className:l().tabContainer,children:u.map((function(e){return"/projects"===e.href?(0,r.jsxs)("div",{className:l().projectsContainer,onMouseOver:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:[(0,r.jsx)(a.default,{href:e.href,children:(0,r.jsx)("a",{className:"".concat(l().tab," ").concat(h.asPath.startsWith("/projects")?l().active:""," ").concat(j?l().hovered:""),title:e.title,children:e.label})}),j&&(0,r.jsx)("div",{className:l().projectsWrapper,onMouseOver:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:(0,r.jsx)("div",{className:l().projectsMenu,children:d.map((function(e){return(0,r.jsx)(a.default,{href:e.href,children:(0,r.jsx)("a",{title:e.title,children:e.label})},e.href)}))})})]},e.href):(0,r.jsx)(a.default,{href:e.href,children:(0,r.jsx)("a",{className:"".concat(l().tab," ").concat(h.asPath===e.href?l().active:""),title:e.title,children:e.label})},e.href)}))})]}),n&&(0,r.jsx)("button",{className:l().compile,title:c?"To code":"Compile",onClick:n,children:c?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.om,{})," to code"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.U_,{})," compile"]})})]})}},5828:function(e,n,t){"use strict";t.d(n,{XH:function(){return l},U_:function(){return o},om:function(){return u},oH:function(){return d},eF:function(){return h},rq:function(){return p},qW:function(){return f},Uv:function(){return m}});var r=t(5893);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=function(e){var n=e.paths,t=e.height,a=void 0===t?24:t,c=e.width,l=void 0===c?24:c,o=e.color,u=void 0===o?"black":o,d=e.strokeWidth,h=void 0===d?1:d,p=e.fill,f=void 0===p?"none":p,m=e.pathProps,_=void 0===m?{}:m,j=i(e,["paths","height","width","color","strokeWidth","fill","pathProps"]);return(0,r.jsx)("i",s({style:{display:"flex",alignItems:"center",justifyContent:"center"}},j,{children:(0,r.jsx)("svg",{style:{display:"inline"},fill:"none",height:a,width:l,viewBox:"0 0 24 24",children:n.map((function(e,n){return(0,r.jsx)("path",s({d:e,stroke:u,strokeWidth:h,strokeLinecap:"round",fill:f,style:{transition:"all 0.1s ease-out"}},_),n)}))})}))},l=function(e){return(0,r.jsx)(c,s({},e,{paths:["M6 8H18","M6 12H18","M6 16H18"]}))},o=function(e){return(0,r.jsx)(c,s({},e,{paths:["M7.5 16.1315V7.86852C7.5 7.06982 8.39015 6.59343 9.0547 7.03647L15.2519 11.1679C15.8457 11.5638 15.8457 12.4362 15.2519 12.8321L9.0547 16.9635C8.39015 17.4066 7.5 16.9302 7.5 16.1315Z"]}))},u=function(e){return(0,r.jsx)(c,s({},e,{paths:["M9.25 8.5L5.75 12L9.25 15.5M14.75 15.5L18.25 12L14.75 8.5"]}))},d=function(e){return(0,r.jsx)(c,s({},e,{paths:["M15.5 15.5L18 18M9.5 11.5H13.5M11.5 9.5V13.5M17 11.5V11.5C17 14.5376 14.5376 17 11.5 17V17C8.46243 17 6 14.5376 6 11.5V11.5C6 8.46243 8.46243 6 11.5 6V6C14.5376 6 17 8.46243 17 11.5Z"]}))},h=function(e){return(0,r.jsx)(c,s({},e,{paths:["M15.5 15.5L18 18M9.5 11.5H13.5M17 11.5V11.5C17 14.5376 14.5376 17 11.5 17V17C8.46243 17 6 14.5376 6 11.5V11.5C6 8.46243 8.46243 6 11.5 6V6C14.5376 6 17 8.46243 17 11.5Z"]}))},p=function(e){return(0,r.jsx)(c,s({},e,{paths:["M9.5 6.5L6.5 6.5L6.5 9.5M6.5 14.5L6.5 17.5H9.5M14.5 17.5H17.5V14.5M17.5 9.5V6.5L14.5 6.5M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"]}))},f=function(e){return(0,r.jsx)(c,s({},e,{paths:["M6.5 15.0001V16.4999C6.5 17.0522 6.94772 17.4999 7.5 17.4999H16.5C17.0523 17.4999 17.5 17.0522 17.5 16.4999V14.9995M12 6.50006V13.9975M12 13.9975L15.5 10.4995M12 13.9975L8.5 10.4995"]}))},m=function(e){return(0,r.jsx)(c,s({},e,{pathProps:{fillRule:"evenodd",clipRule:"evenodd",strokeWidth:0,fill:"black",stroke:"none"},paths:["M20 4H4V20H20V4ZM11 9H13V15H11V17H14H17V15H15V8V7H14H11V9ZM7.5 14.5H6.5V15.5V16V17H7.5H8H9V16V15.5V14.5H8H7.5Z"]}))}},5883:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5893),a=t(111),s=t.n(a),i=[{label:"email",href:"mailto:louiscflin@gmail.com"},{label:"linkedIn",href:"https://www.linkedin.com/in/louiscflin/"},{label:"gitHub",href:"https://github.com/louis-cf-lin"}],c=function(){return(0,r.jsx)("footer",{className:s().footer,children:(0,r.jsx)("div",{className:s().inner,children:i.map((function(e){return(0,r.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href)}))})})},l=t(8475),o=t.n(l),u=function(e){var n=e.children;return(0,r.jsx)("div",{className:o().page,children:(0,r.jsxs)("div",{className:o().wrapper,children:[n,(0,r.jsx)(c,{})]})})}},2812:function(e,n,t){"use strict";var r=t(5893),a=t(1664),s=t(3505),i=t(7069),c=t.n(i);n.Z=function(e){var n=e.active;return(0,r.jsx)("div",{className:c().container,children:s.F.map((function(e){return(0,r.jsx)(a.default,{href:e.href,children:(0,r.jsx)("a",{className:"".concat(c().tab," ").concat("/projects/".concat(n)===e.href?c().active:""),title:e.title,children:e.label})},e.href)}))})}},9400:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(5893),a=t(9008),s=t(5675),i=t(2141),c=t(3505),l=t(9160),o=t.n(l),u=[{bg:"#f58d321a",shadow:"rgba(245, 140, 49, 0.1)"},{bg:"white",shadow:"rgba(0, 0, 0, 0.05)"},{bg:"#262626",shadow:"rgba(0, 0, 0, 0.05)"}],d=function(e){var n=e.className,t=e.flexDirection,a=void 0===t?"row":t;return(0,r.jsx)("div",{className:o().container,style:{flexDirection:a},children:u.map((function(e,t){return(0,r.jsx)(i.VS,{translateX:[10*t-10+"px","0px"],children:(0,r.jsx)("div",{className:"".concat(o().wrapper," ").concat(n),style:{background:e.bg,color:e.shadow},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40%",height:"40%",viewBox:"0 0 50 50",fill:"none",children:(0,r.jsx)("path",{d:"M5 0V20C5 33.8071 16.1929 45 30 45H50M40 25H30C27.2386 25 25 22.7614 25 20V5H50",stroke:"#F58C31",strokeWidth:"10"})})})},e.bg)}))})},h=t(5883),p=t(2812),f=t(9718),m=t.n(f),_=function(){return(0,r.jsxs)(h.Z,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"IAMSL App - .l"}),(0,r.jsx)("meta",{name:"description",content:"Hi, I'm Louis and I write code."}),(0,r.jsx)("link",{rel:"icon",href:"/icon.ico"})]}),(0,r.jsx)(c.Z,{}),(0,r.jsxs)("main",{className:m().main,children:[(0,r.jsx)(p.Z,{active:"iamsl-app"}),(0,r.jsx)("div",{className:"".concat(m().img," ").concat(m().ipad),children:(0,r.jsx)(s.default,{src:"/iamsl-ipad.png",layout:"fill",alt:"IAMSL app render"})}),(0,r.jsx)(i.VS,{translateY:["20px","-100px"],children:(0,r.jsx)("h2",{className:"".concat(m().h2," ").concat(m().t1),children:"Commercial data capture app"})}),(0,r.jsx)(d,{className:"".concat(m().img," ").concat(m().icon)}),(0,r.jsx)(i.VS,{translateY:["-100px","20px"],children:(0,r.jsx)("h2",{className:"".concat(m().h2," ").concat(m().t2),children:"Built with React Native"})}),(0,r.jsx)(i.VS,{translateX:["0px","-20px"],translateY:["10px","-20px"],style:{zIndex:1},children:(0,r.jsx)("div",{className:"".concat(m().img," ").concat(m().corner),children:(0,r.jsx)(s.default,{src:"/iamsl-corner.png",layout:"fill",alt:"IAMSL app PDF"})})}),(0,r.jsx)(i.VS,{translateY:["-20px","20px"],children:(0,r.jsx)("h2",{className:"".concat(m().h2," ").concat(m().t3),children:"Generate PDF's with dynamic values"})}),(0,r.jsx)("div",{className:"".concat(m().img," ").concat(m().collage),children:(0,r.jsx)(i.VS,{scale:[1.25,.8],children:(0,r.jsx)("div",{className:"".concat(m().img," ").concat(m().collage," ").concat(m().collageInner),children:(0,r.jsx)(s.default,{src:"/iamsl-collage.png",layout:"fill",alt:"IAMSL app showcase"})})})}),(0,r.jsxs)("h2",{className:"".concat(m().h2," ").concat(m().t4),children:["Includes ",(0,r.jsx)("b",{children:"native filesystem"})," read-write"]})]})]})}},111:function(e){e.exports={footer:"Footer_footer__BcpJO",inner:"Footer_inner__3q9Lf"}},5512:function(e){e.exports={headerContainer:"Header_headerContainer__9Xbnv",headerWrapper:"Header_headerWrapper__p6qHq",home:"Header_home__VHzMc",homeIcon:"Header_homeIcon__k7e2i",mobileOnly:"Header_mobileOnly__dE1XQ",mobileMenuWrapper:"Header_mobileMenuWrapper__gPp5e",menuBtn:"Header_menuBtn__fCD7Y",menu:"Header_menu__VYiuS",active:"Header_active__Gp5CT",submenu:"Header_submenu__bT_u9",play:"Header_play__oFIz4",tabContainer:"Header_tabContainer__CGIL_",compile:"Header_compile__sA14v",tab:"Header_tab__g2IIK",projectsContainer:"Header_projectsContainer__XYFgd",hovered:"Header_hovered__cHAcP",projectsWrapper:"Header_projectsWrapper__XF3yf",projectsMenu:"Header_projectsMenu__fqpCI"}},9160:function(e){e.exports={container:"IAMSLIcons_container__YSvLg",wrapper:"IAMSLIcons_wrapper__aaJ_E"}},8475:function(e){e.exports={page:"Page_page__1sIzF",wrapper:"Page_wrapper__kjDsR"}},7069:function(e){e.exports={container:"ProjectsNav_container__Dx4Uw",tab:"ProjectsNav_tab__1M_0Z",active:"ProjectsNav_active__D9VjP"}},9718:function(e){e.exports={main:"iamsl_main__ONlrB",h2:"iamsl_h2__Uqw1s",img:"iamsl_img__hxgvr",ipad:"iamsl_ipad__FSLeD",t1:"iamsl_t1__vEug0",icon:"iamsl_icon__TifYi",t2:"iamsl_t2__xm6aw",corner:"iamsl_corner__RExhX",t3:"iamsl_t3__l92CH",collage:"iamsl_collage__NLz7t",collageInner:"iamsl_collageInner__2OVNP",t4:"iamsl_t4__k2ImF"}}},function(e){e.O(0,[675,774,888,179],(function(){return n=1038,e(e.s=n);var n}));var n=e.O();_N_E=n}]);