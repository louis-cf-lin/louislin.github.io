(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[645],{4201:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/createbase",function(){return r(8679)}])},3505:function(e,t,r){"use strict";r.d(t,{F:function(){return u}});var n=r(5893),a=r(1664),s=r(1163),i=r(7294),o=r(5512),c=r.n(o),l=r(5828),d=[{label:"r\xe9sum\xe9",href:"/resume",title:"R\xe9sum\xe9"},{label:"projects",href:"/projects",title:"Projects"},{label:"studio",href:"/studio",title:"Studio"}],u=[{label:".createbase()",href:"/projects/createbase",title:"CreateBase"},{label:".thesis()",href:"/projects/thesis",title:"Thesis"},{label:".iamsl_app()",href:"/projects/iamsl-app",title:"IAMSL app"},{label:".kessler()",href:"/projects/kessler",title:"Kessler"}];t.Z=function(e){var t=e.compile,r=e.isRendered,o=void 0===r||r,h=(0,s.useRouter)(),f=(0,i.useState)(!1),p=f[0],_=f[1],m=(0,i.useState)(!1),b=m[0],j=m[1],x=(0,i.useState)(!0),v=x[0],g=x[1];(0,i.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>10?g(!1):g(!0)}))}),[]);return(0,n.jsxs)("header",{className:c().headerContainer,style:{background:v?"transparent":"white"},children:[(0,n.jsxs)("div",{className:c().headerWrapper,children:[(0,n.jsx)(a.default,{href:"/",children:o?(0,n.jsx)("a",{className:c().homeIcon,title:"Home",children:(0,n.jsx)(l.Uv,{})}):(0,n.jsx)("a",{className:c().home,title:"Home",children:"louis.md"})}),(0,n.jsxs)("div",{className:c().mobileOnly,children:[t&&(0,n.jsx)("button",{className:c().play,onClick:t,children:o?(0,n.jsx)(l.om,{}):(0,n.jsx)(l.U_,{})}),(0,n.jsxs)("div",{className:c().mobileMenuWrapper,onBlur:function(){return _(!1)},children:[(0,n.jsx)("button",{className:c().menuBtn,onClick:function(){return _((function(e){return!e}))},children:(0,n.jsx)(l.XH,{})}),p&&(0,n.jsx)("div",{className:c().menu,children:d.map((function(e){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("a",{onMouseDown:function(){return h.push(e.href)},className:h.asPath===e.href?c().active:"",children:e.label}),"/projects"===e.href&&(0,n.jsx)("div",{className:c().submenu,children:u.map((function(e){return(0,n.jsx)("a",{onMouseDown:function(){return h.push(e.href)},className:h.asPath===e.href?c().active:"",children:e.label},e.href)}))})]},e.href)}))})]})]}),(0,n.jsx)("div",{className:c().tabContainer,children:d.map((function(e){return"/projects"===e.href?(0,n.jsxs)("div",{className:c().projectsContainer,onMouseOver:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:[(0,n.jsx)(a.default,{href:e.href,children:(0,n.jsx)("a",{className:"".concat(c().tab," ").concat(h.asPath.startsWith("/projects")?c().active:""," ").concat(b?c().hovered:""),title:e.title,children:e.label})}),b&&(0,n.jsx)("div",{className:c().projectsWrapper,onMouseOver:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:(0,n.jsx)("div",{className:c().projectsMenu,children:u.map((function(e){return(0,n.jsx)(a.default,{href:e.href,children:(0,n.jsx)("a",{title:e.title,children:e.label})},e.href)}))})})]},e.href):(0,n.jsx)(a.default,{href:e.href,children:(0,n.jsx)("a",{className:"".concat(c().tab," ").concat(h.asPath===e.href?c().active:""),title:e.title,children:e.label})},e.href)}))})]}),t&&(0,n.jsx)("button",{className:c().compile,title:o?"To code":"Compile",onClick:t,children:o?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.om,{})," to code"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.U_,{})," compile"]})})]})}},5828:function(e,t,r){"use strict";r.d(t,{XH:function(){return c},U_:function(){return l},om:function(){return d},oH:function(){return u},eF:function(){return h},rq:function(){return f},qW:function(){return p},Uv:function(){return _}});var n=r(5893);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=function(e){var t=e.paths,r=e.height,a=void 0===r?24:r,o=e.width,c=void 0===o?24:o,l=e.color,d=void 0===l?"black":l,u=e.strokeWidth,h=void 0===u?1:u,f=e.fill,p=void 0===f?"none":f,_=e.pathProps,m=void 0===_?{}:_,b=i(e,["paths","height","width","color","strokeWidth","fill","pathProps"]);return(0,n.jsx)("i",s({style:{display:"flex",alignItems:"center",justifyContent:"center"}},b,{children:(0,n.jsx)("svg",{style:{display:"inline"},fill:"none",height:a,width:c,viewBox:"0 0 24 24",children:t.map((function(e,t){return(0,n.jsx)("path",s({d:e,stroke:d,strokeWidth:h,strokeLinecap:"round",fill:p,style:{transition:"all 0.1s ease-out"}},m),t)}))})}))},c=function(e){return(0,n.jsx)(o,s({},e,{paths:["M6 8H18","M6 12H18","M6 16H18"]}))},l=function(e){return(0,n.jsx)(o,s({},e,{paths:["M7.5 16.1315V7.86852C7.5 7.06982 8.39015 6.59343 9.0547 7.03647L15.2519 11.1679C15.8457 11.5638 15.8457 12.4362 15.2519 12.8321L9.0547 16.9635C8.39015 17.4066 7.5 16.9302 7.5 16.1315Z"]}))},d=function(e){return(0,n.jsx)(o,s({},e,{paths:["M9.25 8.5L5.75 12L9.25 15.5M14.75 15.5L18.25 12L14.75 8.5"]}))},u=function(e){return(0,n.jsx)(o,s({},e,{paths:["M15.5 15.5L18 18M9.5 11.5H13.5M11.5 9.5V13.5M17 11.5V11.5C17 14.5376 14.5376 17 11.5 17V17C8.46243 17 6 14.5376 6 11.5V11.5C6 8.46243 8.46243 6 11.5 6V6C14.5376 6 17 8.46243 17 11.5Z"]}))},h=function(e){return(0,n.jsx)(o,s({},e,{paths:["M15.5 15.5L18 18M9.5 11.5H13.5M17 11.5V11.5C17 14.5376 14.5376 17 11.5 17V17C8.46243 17 6 14.5376 6 11.5V11.5C6 8.46243 8.46243 6 11.5 6V6C14.5376 6 17 8.46243 17 11.5Z"]}))},f=function(e){return(0,n.jsx)(o,s({},e,{paths:["M9.5 6.5L6.5 6.5L6.5 9.5M6.5 14.5L6.5 17.5H9.5M14.5 17.5H17.5V14.5M17.5 9.5V6.5L14.5 6.5M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"]}))},p=function(e){return(0,n.jsx)(o,s({},e,{paths:["M6.5 15.0001V16.4999C6.5 17.0522 6.94772 17.4999 7.5 17.4999H16.5C17.0523 17.4999 17.5 17.0522 17.5 16.4999V14.9995M12 6.50006V13.9975M12 13.9975L15.5 10.4995M12 13.9975L8.5 10.4995"]}))},_=function(e){return(0,n.jsx)(o,s({},e,{pathProps:{fillRule:"evenodd",clipRule:"evenodd",strokeWidth:0,fill:"black",stroke:"none"},paths:["M20 4H4V20H20V4ZM11 9H13V15H11V17H14H17V15H15V8V7H14H11V9ZM7.5 14.5H6.5V15.5V16V17H7.5H8H9V16V15.5V14.5H8H7.5Z"]}))}},5883:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),a=r(111),s=r.n(a),i=[{label:"email",href:"mailto:louiscflin@gmail.com"},{label:"linkedIn",href:"https://www.linkedin.com/in/louiscflin/"},{label:"gitHub",href:"https://github.com/louis-cf-lin"}],o=function(){return(0,n.jsx)("footer",{className:s().footer,children:(0,n.jsx)("div",{className:s().inner,children:i.map((function(e){return(0,n.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href)}))})})},c=r(8475),l=r.n(c),d=function(e){var t=e.children;return(0,n.jsx)("div",{className:l().page,children:(0,n.jsxs)("div",{className:l().wrapper,children:[t,(0,n.jsx)(o,{})]})})}},2812:function(e,t,r){"use strict";var n=r(5893),a=r(1664),s=r(3505),i=r(7069),o=r.n(i);t.Z=function(e){var t=e.active;return(0,n.jsx)("div",{className:o().container,children:s.F.map((function(e){return(0,n.jsx)(a.default,{href:e.href,children:(0,n.jsx)("a",{className:"".concat(o().tab," ").concat("/projects/".concat(t)===e.href?o().active:""),title:e.title,children:e.label})},e.href)}))})}},8679:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(9008),s=r(5675),i=r(7294),o=r(5406),c=r(3505),l=r(5883),d=r(2812),u=r(4120),h=r.n(u);t.default=function(){var e=(0,i.useState)(!0),t=e[0],r=e[1];return(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"CreateBase - .l"}),(0,n.jsx)("meta",{name:"description",content:"Hi, I'm Louis and I write code."}),(0,n.jsx)("link",{rel:"icon",href:"/icon.ico"})]}),(0,n.jsx)(c.Z,{}),(0,n.jsxs)("main",{className:h().main,children:[(0,n.jsx)(d.Z,{active:"createbase"}),(0,n.jsxs)("div",{className:h().banner,children:[(0,n.jsx)("h1",{className:h().h1,children:"An EdTech startup that leverages 3D simulations with programming tools"}),(0,n.jsx)("div",{className:h().cbLogo,children:(0,n.jsx)(s.default,{src:"/cb-logo.svg",layout:"intrinsic",width:264,height:48,alt:"CreateBase"})})]}),(0,n.jsxs)("div",{className:h().gridDisplay,children:[(0,n.jsx)("div",{className:h().team,children:(0,n.jsx)(s.default,{src:"/cb-team.jpg",layout:"fill",objectFit:"cover",alt:"The CreateBase Team"})}),(0,n.jsx)("div",{className:h().intro,children:(0,n.jsx)("p",{className:h().p,children:"CreateBase was founded by a group of uni friends in the summer of 2019. We wanted to making tech education more engaging and accessible for everyone."})}),(0,n.jsx)("div",{className:h().collage,children:(0,n.jsx)(s.default,{src:"/cb-collage.jpg",layout:"fill",objectFit:"cover",alt:"CreateBase products"})}),(0,n.jsxs)("div",{className:h().content,children:[(0,n.jsx)("p",{className:h().p,children:"We offer a library of projects that cover common engineering concepts, each following the 5-Step Creation Process\u2014a systems approach created by our team in collaboration with teachers across New Zealand."}),(0,n.jsx)("p",{className:h().p,children:"Our lesson plans and resources provide teachers with the right knowledge and confidence to deliver each project. These are complemented with learning journals\u2014personalised documents for students to note ideas, thought processes and answers."})]})]}),(0,n.jsxs)("div",{className:h().demo,children:[(0,n.jsxs)("div",{className:h().videoContainer,children:[(0,n.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,style:{opacity:+t},src:"/flow-demo.mp4"}),(0,n.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,style:{opacity:+!t},src:"/text-demo.mp4"})]}),(0,n.jsxs)("div",{className:h().demoToggle,children:[(0,n.jsx)("button",{className:t?h().active:"",onClick:function(){return r(!0)},title:"Toggle Flow",children:"Flow code"}),(0,n.jsx)("button",{className:t?"":h().active,onClick:function(){return r(!1)},title:"Toggle text",children:"Text code"})]})]}),(0,n.jsxs)("div",{className:h().rbb,children:[(0,n.jsx)("h2",{className:h().h2,children:"Winners of Red Bull Basement NZ 2020"}),(0,n.jsxs)("div",{className:h().rbbContent,children:[(0,n.jsx)(o.Z,{videoId:"qd_qGnKcs8A",containerClassName:h().rbbVidContainer,className:h().rbbVid,title:"Red Bull Basement 2020 NZ Winnder | CreateBase Aftemovie",opts:{playerVars:{rel:0}}}),(0,n.jsx)("p",{className:h().p,children:"Watch how we became the university startup champion of NZ"})]})]})]})]})}},111:function(e){e.exports={footer:"Footer_footer__BcpJO",inner:"Footer_inner__3q9Lf"}},5512:function(e){e.exports={headerContainer:"Header_headerContainer__9Xbnv",headerWrapper:"Header_headerWrapper__p6qHq",home:"Header_home__VHzMc",homeIcon:"Header_homeIcon__k7e2i",mobileOnly:"Header_mobileOnly__dE1XQ",mobileMenuWrapper:"Header_mobileMenuWrapper__gPp5e",menuBtn:"Header_menuBtn__fCD7Y",menu:"Header_menu__VYiuS",active:"Header_active__Gp5CT",submenu:"Header_submenu__bT_u9",play:"Header_play__oFIz4",tabContainer:"Header_tabContainer__CGIL_",compile:"Header_compile__sA14v",tab:"Header_tab__g2IIK",projectsContainer:"Header_projectsContainer__XYFgd",hovered:"Header_hovered__cHAcP",projectsWrapper:"Header_projectsWrapper__XF3yf",projectsMenu:"Header_projectsMenu__fqpCI"}},8475:function(e){e.exports={page:"Page_page__1sIzF",wrapper:"Page_wrapper__kjDsR"}},7069:function(e){e.exports={container:"ProjectsNav_container__Dx4Uw",tab:"ProjectsNav_tab__1M_0Z",active:"ProjectsNav_active__D9VjP"}},4120:function(e){e.exports={main:"createbase_main___AwV7",h1:"createbase_h1__jXVVC",h2:"createbase_h2__hByxA",banner:"createbase_banner__5Puk_",cbLogo:"createbase_cbLogo___WMJJ",gridDisplay:"createbase_gridDisplay__L8TH6",team:"createbase_team__OVz89",collage:"createbase_collage__WQ0_E",intro:"createbase_intro__DC73b",links:"createbase_links__U_O1i",content:"createbase_content__5xApZ",p:"createbase_p__B5UXx",demo:"createbase_demo__RyumW",videoContainer:"createbase_videoContainer__Pdf1y",demoToggle:"createbase_demoToggle__afaWu",active:"createbase_active__f2LqH",rbb:"createbase_rbb__Ff_bN",rbbContent:"createbase_rbbContent__Q_8Lg",rbbVidContainer:"createbase_rbbVidContainer__QdqLB",rbbVid:"createbase_rbbVid__aLGXD"}}},function(e){e.O(0,[675,406,774,888,179],(function(){return t=4201,e(e.s=t);var t}));var t=e.O();_N_E=t}]);