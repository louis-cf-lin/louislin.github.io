(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{1016:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/thesis",function(){return a(6660)}])},3505:function(e,s,a){"use strict";a.d(s,{F:function(){return m}});var t=a(5893),r=a(1664),n=a.n(r),i=a(1163),l=a(7294),c=a(5512),o=a.n(c),h=a(5828);let d=[{label:"projects",href:"/projects",title:"Projects"},{label:"r\xe9sum\xe9",href:"/resume",title:"R\xe9sum\xe9"},{label:"studio",href:"/studio",title:"Studio"}],m=[{label:".createbase()",href:"/projects/createbase",title:"CreateBase"},{label:".thesis()",href:"/projects/thesis",title:"Thesis"},{label:".iamsl_app()",href:"/projects/iamsl-app",title:"IAMSL app"},{label:".kessler()",href:"/projects/kessler",title:"Kessler"}],p=e=>{let{compile:s,isRendered:a=!0}=e,r=(0,i.useRouter)(),[c,p]=(0,l.useState)(!1),[u,_]=(0,l.useState)(!1),[j,f]=(0,l.useState)(!0);(0,l.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>10?f(!1):f(!0)})},[]);let x=()=>p(e=>!e);return(0,t.jsxs)("header",{className:o().headerContainer,style:{background:j?"transparent":"white"},children:[(0,t.jsxs)("div",{className:o().headerWrapper,children:[(0,t.jsx)(n(),{href:"/",children:a?(0,t.jsx)("p",{className:o().homeIcon,title:"Home",children:(0,t.jsx)(h.VI,{})}):(0,t.jsx)("p",{className:o().home,title:"Home",children:"louis.md"})}),(0,t.jsxs)("div",{className:o().mobileOnly,children:[s&&(0,t.jsx)("button",{className:o().play,onClick:s,children:a?(0,t.jsx)(h.dN,{}):(0,t.jsx)(h.o1,{})}),(0,t.jsxs)("div",{className:o().mobileMenuWrapper,onBlur:()=>p(!1),children:[(0,t.jsx)("button",{className:o().menuBtn,onClick:x,children:(0,t.jsx)(h.Oq,{})}),c&&(0,t.jsx)("div",{className:o().menu,children:d.map(e=>(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)("a",{onMouseDown:()=>r.push(e.href),className:r.asPath===e.href?o().active:"",children:e.label}),"/projects"===e.href&&(0,t.jsx)("div",{className:o().submenu,children:m.map(e=>(0,t.jsx)("a",{onMouseDown:()=>r.push(e.href),className:r.asPath===e.href?o().active:"",children:e.label},e.href))})]},e.href))})]})]}),(0,t.jsx)("div",{className:o().tabContainer,children:d.map(e=>"/projects"===e.href?(0,t.jsxs)("div",{className:o().projectsContainer,onMouseOver:()=>_(!0),onMouseLeave:()=>_(!1),children:[(0,t.jsx)(n(),{href:e.href,className:"".concat(o().tab," ").concat(r.asPath.startsWith("/projects")?o().active:""," ").concat(u?o().hovered:""),title:e.title,children:e.label}),u&&(0,t.jsx)("div",{className:o().projectsWrapper,onMouseOver:()=>_(!0),onMouseLeave:()=>_(!1),children:(0,t.jsx)("div",{className:o().projectsMenu,children:m.map(e=>(0,t.jsx)(n(),{href:e.href,title:e.title,children:e.label},e.href))})})]},e.href):(0,t.jsx)(n(),{href:e.href,className:"".concat(o().tab," ").concat(r.asPath===e.href?o().active:""),title:e.title,children:e.label},e.href))})]}),s&&(0,t.jsx)("button",{className:o().compile,title:a?"To code":"Compile",onClick:s,children:a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.dN,{})," to code"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.o1,{})," compile"]})})]})};s.Z=p},5828:function(e,s,a){"use strict";a.d(s,{Oq:function(){return n},VI:function(){return d},bu:function(){return h},dN:function(){return l},m5:function(){return o},mB:function(){return c},o1:function(){return i}});var t=a(5893);let r=e=>{let{paths:s,height:a=24,width:r=24,color:n="black",strokeWidth:i=1,fill:l="none",pathProps:c={},...o}=e;return(0,t.jsx)("i",{style:{display:"flex",alignItems:"center",justifyContent:"center"},...o,children:(0,t.jsx)("svg",{style:{display:"inline"},fill:"none",height:a,width:r,viewBox:"0 0 24 24",children:s.map((e,s)=>(0,t.jsx)("path",{d:e,stroke:n,strokeWidth:i,strokeLinecap:"round",fill:l,style:{transition:"all 0.1s ease-out"},...c},s))})})},n=e=>(0,t.jsx)(r,{...e,paths:["M6 8H18","M6 12H18","M6 16H18"]}),i=e=>(0,t.jsx)(r,{...e,paths:["M7.5 16.1315V7.86852C7.5 7.06982 8.39015 6.59343 9.0547 7.03647L15.2519 11.1679C15.8457 11.5638 15.8457 12.4362 15.2519 12.8321L9.0547 16.9635C8.39015 17.4066 7.5 16.9302 7.5 16.1315Z"]}),l=e=>(0,t.jsx)(r,{...e,paths:["M9.25 8.5L5.75 12L9.25 15.5M14.75 15.5L18.25 12L14.75 8.5"]}),c=e=>(0,t.jsx)(r,{...e,paths:["M8.5 10.5H7.5C6.94772 10.5 6.5 10.9477 6.5 11.5V17.5C6.5 18.0523 6.94772 18.5 7.5 18.5H16.5C17.0523 18.5 17.5 18.0523 17.5 17.5V11.5C17.5 10.9477 17.0523 10.5 16.5 10.5H15.5M8.5 10.5V9C8.5 7.067 10.067 5.5 12 5.5V5.5C13.933 5.5 15.5 7.067 15.5 9V10.5M8.5 10.5H15.5M12 15V15C11.7239 15 11.5 14.7761 11.5 14.5V14.5C11.5 14.2239 11.7239 14 12 14V14C12.2761 14 12.5 14.2239 12.5 14.5V14.5C12.5 14.7761 12.2761 15 12 15Z"]}),o=e=>(0,t.jsx)(r,{...e,pathProps:{strokeLinejoin:"round"},paths:["M17.5 8.75V12.25C17.5 12.8023 17.0523 13.25 16.5 13.25H6.5M6.5 13.25L9 11.25M6.5 13.25L9 15.25"]}),h=e=>(0,t.jsx)(r,{...e,pathProps:{strokeLinejoin:"round"},paths:["M7.75 16.25L16.25 7.75M16.25 7.75V12.25M16.25 7.75H11.75"]}),d=e=>(0,t.jsx)(r,{...e,pathProps:{fillRule:"evenodd",clipRule:"evenodd",strokeWidth:0,fill:"black",stroke:"none"},paths:["M20 4H4V20H20V4ZM11 9H13V15H11V17H14H17V15H15V8V7H14H11V9ZM7.5 14.5H6.5V15.5V16V17H7.5H8H9V16V15.5V14.5H8H7.5Z"]})},9454:function(e,s,a){"use strict";a.d(s,{Z:function(){return _}});var t=a(5893),r=a(9008),n=a.n(r);let i=["dark","light"];function l(){return(0,t.jsx)(n(),{children:i.map(e=>(0,t.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/favicon-".concat(e,".ico"),media:"(prefers-color-scheme: ".concat(e,")")},e))})}var c=a(111),o=a.n(c);let h=[{label:"email",href:"mailto:louiscflin@gmail.com"},{label:"linkedIn",href:"https://www.linkedin.com/in/louiscflin/"},{label:"gitHub",href:"https://github.com/louis-cf-lin"}],d=()=>(0,t.jsx)("footer",{className:o().footer,children:(0,t.jsx)("div",{className:o().inner,children:h.map(e=>(0,t.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href))})});var m=a(8475),p=a.n(m);let u=e=>{let{children:s}=e;return(0,t.jsxs)("div",{className:p().page,children:[(0,t.jsx)(l,{}),(0,t.jsxs)("div",{className:p().wrapper,children:[s,(0,t.jsx)(d,{})]})]})};var _=u},2812:function(e,s,a){"use strict";var t=a(5893),r=a(1664),n=a.n(r),i=a(3505),l=a(7069),c=a.n(l);let o=e=>{let{active:s}=e;return(0,t.jsx)("div",{className:c().container,children:i.F.map(e=>(0,t.jsx)(n(),{href:e.href,className:"".concat(c().tab," ").concat("/projects/".concat(s)===e.href?c().active:""),title:e.title,children:e.label},e.href))})};s.Z=o},6660:function(e,s,a){"use strict";a.r(s);var t=a(5893),r=a(9008),n=a.n(r),i=a(3505),l=a(5828),c=a(9454),o=a(2812),h=a(8408),d=a.n(h);let m=()=>(0,t.jsxs)(c.Z,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:"Thesis - .l"}),(0,t.jsx)("meta",{name:"description",content:"Hi, I'm Louis and I write code."})]}),(0,t.jsx)(i.Z,{}),(0,t.jsxs)("main",{className:d().main,children:[(0,t.jsx)(o.Z,{active:"thesis"}),(0,t.jsx)("h1",{className:d().h1,children:"Emergent Action Selection through Evolvable Chemical Networks"}),(0,t.jsxs)("div",{className:d().details,children:[(0,t.jsx)("a",{className:d().cta,href:"mailto:louiscflin@gmail.com?subject=Masters thesis",title:"Email louiscflin@gmail.com",children:"Request access"}),(0,t.jsxs)("div",{className:d().meta,children:[(0,t.jsx)("span",{className:d().label,children:"March 2022"}),(0,t.jsx)("span",{className:d().label,children:"The University of Auckland"}),(0,t.jsx)("span",{className:d().label,children:"MSc in Computer Science"})]}),(0,t.jsxs)("div",{className:d().authorContainer,children:[(0,t.jsxs)("div",{className:d().authorWrapper,children:[(0,t.jsx)("span",{className:d().label,children:"Author"}),(0,t.jsx)("p",{className:d().p,children:"Louis Lin"})]}),(0,t.jsxs)("a",{href:"http://www.matthewegbert.com/",className:d().authorWrapper,title:"matthewegbert.com",target:"_blank",rel:"noreferrer",children:[(0,t.jsx)("span",{className:d().label,children:"Supervisor"}),(0,t.jsxs)("p",{className:d().p,children:["Dr Matthew Egbert"," ",(0,t.jsx)(l.bu,{className:d().matthew,width:20,height:20})]})]})]})]}),(0,t.jsxs)("div",{className:d().abstract,children:[(0,t.jsx)("span",{className:d().label,children:"Abstract"}),(0,t.jsx)("p",{className:d().p,children:"This investigation aims to arrive at a minimal working model of an agent whose central controller comprises an artificial chemical network. The agent possesses two wheels to navigate within a spatiotemporal environment containing finite resources that are necessary for the system to sustain itself. To this end, a genetic algorithm is employed and chemical networks are evolved successfully in simulation. The emergent behaviours are analysed and demonstrate learned associations for action selection."})]})]})]});s.default=m},111:function(e){e.exports={footer:"Footer_footer__BcpJO",inner:"Footer_inner__3q9Lf"}},5512:function(e){e.exports={headerContainer:"Header_headerContainer__9Xbnv",headerWrapper:"Header_headerWrapper__p6qHq",home:"Header_home__VHzMc",homeIcon:"Header_homeIcon__k7e2i",mobileOnly:"Header_mobileOnly__dE1XQ",mobileMenuWrapper:"Header_mobileMenuWrapper__gPp5e",menuBtn:"Header_menuBtn__fCD7Y",menu:"Header_menu__VYiuS",active:"Header_active__Gp5CT",submenu:"Header_submenu__bT_u9",play:"Header_play__oFIz4",tabContainer:"Header_tabContainer__CGIL_",compile:"Header_compile__sA14v",tab:"Header_tab__g2IIK",projectsContainer:"Header_projectsContainer__XYFgd",hovered:"Header_hovered__cHAcP",projectsWrapper:"Header_projectsWrapper__XF3yf",projectsMenu:"Header_projectsMenu__fqpCI"}},8475:function(e){e.exports={page:"Page_page__1sIzF",wrapper:"Page_wrapper__kjDsR"}},7069:function(e){e.exports={container:"ProjectsNav_container__Dx4Uw",tab:"ProjectsNav_tab__1M_0Z",active:"ProjectsNav_active__D9VjP"}},8408:function(e){e.exports={main:"thesis_main__b_Lmp",p:"thesis_p__WDx_x",label:"thesis_label__vqvYH",h1:"thesis_h1__6pI8V",details:"thesis_details__Biio2",cta:"thesis_cta__AecHP",meta:"thesis_meta__kWarX",authorContainer:"thesis_authorContainer__kqHmW",authorWrapper:"thesis_authorWrapper__6VWDP",matthew:"thesis_matthew__gGNf6",abstract:"thesis_abstract__JzAEb"}}},function(e){e.O(0,[814,774,888,179],function(){return e(e.s=1016)}),_N_E=e.O()}]);