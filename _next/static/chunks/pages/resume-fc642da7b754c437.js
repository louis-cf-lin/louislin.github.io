(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{2567:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return s(4195)}])},3505:function(e,r,s){"use strict";s.d(r,{F:function(){return u}});var t=s(5893),n=s(1664),a=s.n(n),i=s(1163),l=s(7294),o=s(5512),c=s.n(o),h=s(5828);let d=[{label:"projects",href:"/projects",title:"Projects"},{label:"r\xe9sum\xe9",href:"/resume",title:"R\xe9sum\xe9"},{label:"studio",href:"/studio",title:"Studio"}],u=[{label:".createbase()",href:"/projects/createbase",title:"CreateBase"},{label:".thesis()",href:"/projects/thesis",title:"Thesis"},{label:".iamsl_app()",href:"/projects/iamsl-app",title:"IAMSL app"},{label:".kessler()",href:"/projects/kessler",title:"Kessler"}],p=e=>{let{compile:r,isRendered:s=!0}=e,n=(0,i.useRouter)(),[o,p]=(0,l.useState)(!1),[m,_]=(0,l.useState)(!1),[j,f]=(0,l.useState)(!0);(0,l.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>10?f(!1):f(!0)})},[]);let x=()=>p(e=>!e);return(0,t.jsxs)("header",{className:c().headerContainer,style:{background:j?"transparent":"white"},children:[(0,t.jsxs)("div",{className:c().headerWrapper,children:[(0,t.jsx)(a(),{href:"/",children:s?(0,t.jsx)("a",{className:c().homeIcon,title:"Home",children:(0,t.jsx)(h.VI,{})}):(0,t.jsx)("a",{className:c().home,title:"Home",children:"louis.md"})}),(0,t.jsxs)("div",{className:c().mobileOnly,children:[r&&(0,t.jsx)("button",{className:c().play,onClick:r,children:s?(0,t.jsx)(h.dN,{}):(0,t.jsx)(h.o1,{})}),(0,t.jsxs)("div",{className:c().mobileMenuWrapper,onBlur:()=>p(!1),children:[(0,t.jsx)("button",{className:c().menuBtn,onClick:x,children:(0,t.jsx)(h.Oq,{})}),o&&(0,t.jsx)("div",{className:c().menu,children:d.map(e=>(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)("a",{onMouseDown:()=>n.push(e.href),className:n.asPath===e.href?c().active:"",children:e.label}),"/projects"===e.href&&(0,t.jsx)("div",{className:c().submenu,children:u.map(e=>(0,t.jsx)("a",{onMouseDown:()=>n.push(e.href),className:n.asPath===e.href?c().active:"",children:e.label},e.href))})]},e.href))})]})]}),(0,t.jsx)("div",{className:c().tabContainer,children:d.map(e=>"/projects"===e.href?(0,t.jsxs)("div",{className:c().projectsContainer,onMouseOver:()=>_(!0),onMouseLeave:()=>_(!1),children:[(0,t.jsx)(a(),{href:e.href,children:(0,t.jsx)("a",{className:"".concat(c().tab," ").concat(n.asPath.startsWith("/projects")?c().active:""," ").concat(m?c().hovered:""),title:e.title,children:e.label})}),m&&(0,t.jsx)("div",{className:c().projectsWrapper,onMouseOver:()=>_(!0),onMouseLeave:()=>_(!1),children:(0,t.jsx)("div",{className:c().projectsMenu,children:u.map(e=>(0,t.jsx)(a(),{href:e.href,children:(0,t.jsx)("a",{title:e.title,children:e.label})},e.href))})})]},e.href):(0,t.jsx)(a(),{href:e.href,children:(0,t.jsx)("a",{className:"".concat(c().tab," ").concat(n.asPath===e.href?c().active:""),title:e.title,children:e.label})},e.href))})]}),r&&(0,t.jsx)("button",{className:c().compile,title:s?"To code":"Compile",onClick:r,children:s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.dN,{})," to code"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.o1,{})," compile"]})})]})};r.Z=p},5828:function(e,r,s){"use strict";s.d(r,{Oq:function(){return a},VI:function(){return d},bu:function(){return h},dN:function(){return l},m5:function(){return c},mB:function(){return o},o1:function(){return i}});var t=s(5893);let n=e=>{let{paths:r,height:s=24,width:n=24,color:a="black",strokeWidth:i=1,fill:l="none",pathProps:o={},...c}=e;return(0,t.jsx)("i",{style:{display:"flex",alignItems:"center",justifyContent:"center"},...c,children:(0,t.jsx)("svg",{style:{display:"inline"},fill:"none",height:s,width:n,viewBox:"0 0 24 24",children:r.map((e,r)=>(0,t.jsx)("path",{d:e,stroke:a,strokeWidth:i,strokeLinecap:"round",fill:l,style:{transition:"all 0.1s ease-out"},...o},r))})})},a=e=>(0,t.jsx)(n,{...e,paths:["M6 8H18","M6 12H18","M6 16H18"]}),i=e=>(0,t.jsx)(n,{...e,paths:["M7.5 16.1315V7.86852C7.5 7.06982 8.39015 6.59343 9.0547 7.03647L15.2519 11.1679C15.8457 11.5638 15.8457 12.4362 15.2519 12.8321L9.0547 16.9635C8.39015 17.4066 7.5 16.9302 7.5 16.1315Z"]}),l=e=>(0,t.jsx)(n,{...e,paths:["M9.25 8.5L5.75 12L9.25 15.5M14.75 15.5L18.25 12L14.75 8.5"]}),o=e=>(0,t.jsx)(n,{...e,paths:["M8.5 10.5H7.5C6.94772 10.5 6.5 10.9477 6.5 11.5V17.5C6.5 18.0523 6.94772 18.5 7.5 18.5H16.5C17.0523 18.5 17.5 18.0523 17.5 17.5V11.5C17.5 10.9477 17.0523 10.5 16.5 10.5H15.5M8.5 10.5V9C8.5 7.067 10.067 5.5 12 5.5V5.5C13.933 5.5 15.5 7.067 15.5 9V10.5M8.5 10.5H15.5M12 15V15C11.7239 15 11.5 14.7761 11.5 14.5V14.5C11.5 14.2239 11.7239 14 12 14V14C12.2761 14 12.5 14.2239 12.5 14.5V14.5C12.5 14.7761 12.2761 15 12 15Z"]}),c=e=>(0,t.jsx)(n,{...e,pathProps:{strokeLinejoin:"round"},paths:["M17.5 8.75V12.25C17.5 12.8023 17.0523 13.25 16.5 13.25H6.5M6.5 13.25L9 11.25M6.5 13.25L9 15.25"]}),h=e=>(0,t.jsx)(n,{...e,pathProps:{strokeLinejoin:"round"},paths:["M7.75 16.25L16.25 7.75M16.25 7.75V12.25M16.25 7.75H11.75"]}),d=e=>(0,t.jsx)(n,{...e,pathProps:{fillRule:"evenodd",clipRule:"evenodd",strokeWidth:0,fill:"black",stroke:"none"},paths:["M20 4H4V20H20V4ZM11 9H13V15H11V17H14H17V15H15V8V7H14H11V9ZM7.5 14.5H6.5V15.5V16V17H7.5H8H9V16V15.5V14.5H8H7.5Z"]})},5883:function(e,r,s){"use strict";s.d(r,{Z:function(){return d}});var t=s(5893),n=s(111),a=s.n(n);let i=[{label:"email",href:"mailto:louiscflin@gmail.com"},{label:"linkedIn",href:"https://www.linkedin.com/in/louiscflin/"},{label:"gitHub",href:"https://github.com/louis-cf-lin"}],l=()=>(0,t.jsx)("footer",{className:a().footer,children:(0,t.jsx)("div",{className:a().inner,children:i.map(e=>(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href))})});var o=s(8475),c=s.n(o);let h=e=>{let{children:r}=e;return(0,t.jsx)("div",{className:c().page,children:(0,t.jsxs)("div",{className:c().wrapper,children:[r,(0,t.jsx)(l,{})]})})};var d=h},4195:function(e,r,s){"use strict";s.r(r);var t=s(5893),n=s(3505),a=s(5883),i=s(4043),l=s.n(i),o=s(9008),c=s.n(o);let h=()=>(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(c(),{children:[(0,t.jsx)("title",{children:"R\xe9sum\xe9 - .l"}),(0,t.jsx)("meta",{name:"description",content:"Hi, I'm Louis and I write code."}),(0,t.jsx)("link",{rel:"icon",href:"/icon.ico"})]}),(0,t.jsx)(n.Z,{}),(0,t.jsx)("main",{className:l().main,children:"TODO"})]});r.default=h},111:function(e){e.exports={footer:"Footer_footer__BcpJO",inner:"Footer_inner__3q9Lf"}},5512:function(e){e.exports={headerContainer:"Header_headerContainer__9Xbnv",headerWrapper:"Header_headerWrapper__p6qHq",home:"Header_home__VHzMc",homeIcon:"Header_homeIcon__k7e2i",mobileOnly:"Header_mobileOnly__dE1XQ",mobileMenuWrapper:"Header_mobileMenuWrapper__gPp5e",menuBtn:"Header_menuBtn__fCD7Y",menu:"Header_menu__VYiuS",active:"Header_active__Gp5CT",submenu:"Header_submenu__bT_u9",play:"Header_play__oFIz4",tabContainer:"Header_tabContainer__CGIL_",compile:"Header_compile__sA14v",tab:"Header_tab__g2IIK",projectsContainer:"Header_projectsContainer__XYFgd",hovered:"Header_hovered__cHAcP",projectsWrapper:"Header_projectsWrapper__XF3yf",projectsMenu:"Header_projectsMenu__fqpCI"}},8475:function(e){e.exports={page:"Page_page__1sIzF",wrapper:"Page_wrapper__kjDsR"}},4043:function(e){e.exports={main:"resume_main__c38_a"}}},function(e){e.O(0,[814,774,888,179],function(){return e(e.s=2567)}),_N_E=e.O()}]);