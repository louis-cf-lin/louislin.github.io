(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8277)}])},3505:function(e,t,r){"use strict";r.d(t,{F:function(){return h}});var s=r(5893),n=r(1664),a=r.n(n),i=r(1163),l=r(7294),o=r(5512),c=r.n(o),d=r(5828);let u=[{label:"projects",href:"/projects",title:"Projects"},{label:"r\xe9sum\xe9",href:"/resume",title:"R\xe9sum\xe9"},{label:"studio",href:"/studio",title:"Studio"}],h=[{label:".createbase()",href:"/projects/createbase",title:"CreateBase"},{label:".thesis()",href:"/projects/thesis",title:"Thesis"},{label:".iamsl_app()",href:"/projects/iamsl-app",title:"IAMSL app"},{label:".kessler()",href:"/projects/kessler",title:"Kessler"}],p=e=>{let{compile:t,isRendered:r=!0}=e,n=(0,i.useRouter)(),[o,p]=(0,l.useState)(!1),[m,j]=(0,l.useState)(!1),[_,f]=(0,l.useState)(!0);(0,l.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>10?f(!1):f(!0)})},[]);let x=()=>p(e=>!e);return(0,s.jsxs)("header",{className:c().headerContainer,style:{background:_?"transparent":"white"},children:[(0,s.jsxs)("div",{className:c().headerWrapper,children:[(0,s.jsx)(a(),{href:"/",children:r?(0,s.jsx)("a",{className:c().homeIcon,title:"Home",children:(0,s.jsx)(d.VI,{})}):(0,s.jsx)("a",{className:c().home,title:"Home",children:"louis.md"})}),(0,s.jsxs)("div",{className:c().mobileOnly,children:[t&&(0,s.jsx)("button",{className:c().play,onClick:t,children:r?(0,s.jsx)(d.dN,{}):(0,s.jsx)(d.o1,{})}),(0,s.jsxs)("div",{className:c().mobileMenuWrapper,onBlur:()=>p(!1),children:[(0,s.jsx)("button",{className:c().menuBtn,onClick:x,children:(0,s.jsx)(d.Oq,{})}),o&&(0,s.jsx)("div",{className:c().menu,children:u.map(e=>(0,s.jsxs)(l.Fragment,{children:[(0,s.jsx)("a",{onMouseDown:()=>n.push(e.href),className:n.asPath===e.href?c().active:"",children:e.label}),"/projects"===e.href&&(0,s.jsx)("div",{className:c().submenu,children:h.map(e=>(0,s.jsx)("a",{onMouseDown:()=>n.push(e.href),className:n.asPath===e.href?c().active:"",children:e.label},e.href))})]},e.href))})]})]}),(0,s.jsx)("div",{className:c().tabContainer,children:u.map(e=>"/projects"===e.href?(0,s.jsxs)("div",{className:c().projectsContainer,onMouseOver:()=>j(!0),onMouseLeave:()=>j(!1),children:[(0,s.jsx)(a(),{href:e.href,children:(0,s.jsx)("a",{className:"".concat(c().tab," ").concat(n.asPath.startsWith("/projects")?c().active:""," ").concat(m?c().hovered:""),title:e.title,children:e.label})}),m&&(0,s.jsx)("div",{className:c().projectsWrapper,onMouseOver:()=>j(!0),onMouseLeave:()=>j(!1),children:(0,s.jsx)("div",{className:c().projectsMenu,children:h.map(e=>(0,s.jsx)(a(),{href:e.href,children:(0,s.jsx)("a",{title:e.title,children:e.label})},e.href))})})]},e.href):(0,s.jsx)(a(),{href:e.href,children:(0,s.jsx)("a",{className:"".concat(c().tab," ").concat(n.asPath===e.href?c().active:""),title:e.title,children:e.label})},e.href))})]}),t&&(0,s.jsx)("button",{className:c().compile,title:r?"To code":"Compile",onClick:t,children:r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.dN,{})," to code"]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.o1,{})," compile"]})})]})};t.Z=p},5828:function(e,t,r){"use strict";r.d(t,{Oq:function(){return a},VI:function(){return u},bu:function(){return d},dN:function(){return l},m5:function(){return c},mB:function(){return o},o1:function(){return i}});var s=r(5893);let n=e=>{let{paths:t,height:r=24,width:n=24,color:a="black",strokeWidth:i=1,fill:l="none",pathProps:o={},...c}=e;return(0,s.jsx)("i",{style:{display:"flex",alignItems:"center",justifyContent:"center"},...c,children:(0,s.jsx)("svg",{style:{display:"inline"},fill:"none",height:r,width:n,viewBox:"0 0 24 24",children:t.map((e,t)=>(0,s.jsx)("path",{d:e,stroke:a,strokeWidth:i,strokeLinecap:"round",fill:l,style:{transition:"all 0.1s ease-out"},...o},t))})})},a=e=>(0,s.jsx)(n,{...e,paths:["M6 8H18","M6 12H18","M6 16H18"]}),i=e=>(0,s.jsx)(n,{...e,paths:["M7.5 16.1315V7.86852C7.5 7.06982 8.39015 6.59343 9.0547 7.03647L15.2519 11.1679C15.8457 11.5638 15.8457 12.4362 15.2519 12.8321L9.0547 16.9635C8.39015 17.4066 7.5 16.9302 7.5 16.1315Z"]}),l=e=>(0,s.jsx)(n,{...e,paths:["M9.25 8.5L5.75 12L9.25 15.5M14.75 15.5L18.25 12L14.75 8.5"]}),o=e=>(0,s.jsx)(n,{...e,paths:["M8.5 10.5H7.5C6.94772 10.5 6.5 10.9477 6.5 11.5V17.5C6.5 18.0523 6.94772 18.5 7.5 18.5H16.5C17.0523 18.5 17.5 18.0523 17.5 17.5V11.5C17.5 10.9477 17.0523 10.5 16.5 10.5H15.5M8.5 10.5V9C8.5 7.067 10.067 5.5 12 5.5V5.5C13.933 5.5 15.5 7.067 15.5 9V10.5M8.5 10.5H15.5M12 15V15C11.7239 15 11.5 14.7761 11.5 14.5V14.5C11.5 14.2239 11.7239 14 12 14V14C12.2761 14 12.5 14.2239 12.5 14.5V14.5C12.5 14.7761 12.2761 15 12 15Z"]}),c=e=>(0,s.jsx)(n,{...e,pathProps:{strokeLinejoin:"round"},paths:["M17.5 8.75V12.25C17.5 12.8023 17.0523 13.25 16.5 13.25H6.5M6.5 13.25L9 11.25M6.5 13.25L9 15.25"]}),d=e=>(0,s.jsx)(n,{...e,pathProps:{strokeLinejoin:"round"},paths:["M7.75 16.25L16.25 7.75M16.25 7.75V12.25M16.25 7.75H11.75"]}),u=e=>(0,s.jsx)(n,{...e,pathProps:{fillRule:"evenodd",clipRule:"evenodd",strokeWidth:0,fill:"black",stroke:"none"},paths:["M20 4H4V20H20V4ZM11 9H13V15H11V17H14H17V15H15V8V7H14H11V9ZM7.5 14.5H6.5V15.5V16V17H7.5H8H9V16V15.5V14.5H8H7.5Z"]})},5883:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var s=r(5893),n=r(111),a=r.n(n);let i=[{label:"email",href:"mailto:louiscflin@gmail.com"},{label:"linkedIn",href:"https://www.linkedin.com/in/louiscflin/"},{label:"gitHub",href:"https://github.com/louis-cf-lin"}],l=()=>(0,s.jsx)("footer",{className:a().footer,children:(0,s.jsx)("div",{className:a().inner,children:i.map(e=>(0,s.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.label},e.href))})});var o=r(8475),c=r.n(o);let d=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:c().page,children:(0,s.jsxs)("div",{className:c().wrapper,children:[t,(0,s.jsx)(l,{})]})})};var u=d},8277:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var s=r(5893),n=r(9008),a=r.n(n),i=r(5675),l=r.n(i),o=r(2141),c=r(7294),d=r(3913),u=r(3505),h=r(3807),p=r.n(h);let m=e=>{var t;let{html:r,ready:n,isRendered:a,lineNumber:i,bounds:l=[25,50,1e3],callback:o}=e,d=(0,c.useRef)(null),u=(0,c.useRef)(r.typed.split("")),h=(0,c.useRef)(null),m=(0,c.useRef)(null),[j,_]=(0,c.useState)(0),[f,x]=(0,c.useState)(!1),[b,y]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{let e=()=>{var t,r;((null===(t=null===(r=d.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===t?void 0:t.top)||0)<window.innerHeight&&(window.removeEventListener("scroll",e),x(!0))};return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e),clearTimeout(h.current),clearTimeout(m.current)}},[]),(0,c.useEffect)(()=>{n&&f&&(j<=u.current.length?(y(!0),h.current=setTimeout(()=>{_(e=>e+1)},Math.random()*(l[1]-l[0])+l[0])):m.current=setTimeout(()=>{y(!1),null==o||o()},l[2]))},[j,n,f]),a)?(0,s.jsx)("span",{className:"".concat(p().span," ").concat(p().rendered),children:r.rendered}):(0,s.jsxs)("span",{className:"".concat(p().span," ").concat(p().container),children:[u.current.map((e,t)=>(0,s.jsx)("span",{ref:t===j-1?d:void 0,className:"".concat(p().span," ").concat(t<j?p().show:p().hide," ").concat((t===j-1||t===u.current.length-1)&&b?p().last:""),children:e},t)),b&&d.current&&(0,s.jsx)("span",{className:p().border,style:{top:d.current.offsetTop,height:(null===(t=d.current)||void 0===t?void 0:t.offsetHeight)+4}}),(0,s.jsx)("span",{className:p().lineNumber,children:i})]})};var j=r(7017),_=r.n(j),f=r(1664),x=r.n(f),b=r(5828),y=r(5883);let g=[{rendered:(0,s.jsxs)(s.Fragment,{children:["I have a"," ",(0,s.jsx)(x(),{href:"/projects/thesis",children:(0,s.jsx)("a",{title:"Thesis",children:"Masters"})})," ","in Computer Science and a Bachelor of Engineering Honours"]}),typed:"I have a [Masters](/projects/thesis) in Computer Science and a Bachelor of Engineering Honours"},{rendered:(0,s.jsxs)(s.Fragment,{children:["While studying, I co-founded"," ",(0,s.jsx)(x(),{href:"/projects/createbase",children:(0,s.jsx)("a",{title:"CreateBase",children:"CreateBase"})})]}),typed:"While studying, I co-founded [CreateBase](/projects/createbase)"},{rendered:(0,s.jsxs)(s.Fragment,{children:["Other"," ",(0,s.jsx)(x(),{href:"/projects",children:(0,s.jsx)("a",{title:"Projects",children:"projects"})})," ","I've worked on:"]}),typed:"Other [projects](/projects) I've worked on:"},{rendered:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:_().bulletPoint}),"The"," ",(0,s.jsx)(x(),{href:"/projects/iamsl-app",children:(0,s.jsx)("a",{title:"IAMSL app",children:"IAMSL app"})})]}),typed:"- The [IAMSL app](/projects/iamsl-app)"},{rendered:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:_().bulletPoint}),(0,s.jsx)(x(),{href:"/projects/kessler",children:(0,s.jsx)("a",{title:"Kessler",children:"Kessler"})})]}),typed:"- [Kessler](/projects/kessler)"}],v=[{rendered:(0,s.jsx)(s.Fragment,{children:"I like rowing and enjoy being around friends"}),typed:"I like rowing and enjoy being around friends"},{rendered:(0,s.jsxs)(s.Fragment,{children:["I also"," ",(0,s.jsx)(x(),{href:"/studio",children:(0,s.jsx)("a",{title:"Louii Studios",children:"film and edit"})})," ","videos for fun"]}),typed:"I also [film and edit](/studio) videos for fun"},{rendered:(0,s.jsxs)(s.Fragment,{children:["Here's my latest work—",(0,s.jsx)("i",{children:"Snow Motion"})]}),typed:"Here's my latest work---*Snow Motion*"}],w=()=>{let[e,t]=(0,c.useState)(!1),[r,n]=(0,c.useState)(!1),[i,h]=(0,c.useState)(!1),[p,j]=(0,c.useState)(g.map(e=>!1)),[f,x]=(0,c.useState)(v.map(e=>!1)),[w,N]=(0,c.useState)(!1),[H,C]=(0,c.useState)(!0),[M,k]=(0,c.useState)(!1),{ref:I}=(0,o.YT)({speed:-100});(0,c.useEffect)(()=>{document.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&"Enter"===e.code&&console.log(e)}),setTimeout(()=>t(!0),500)},[]);let L=()=>{k(e=>!e)};return(0,s.jsxs)(y.Z,{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"Louis Lin"}),(0,s.jsx)("meta",{name:"description",content:"Hi, I'm Louis and I write code."}),(0,s.jsx)("meta",{property:"og:title",content:"Louis Lin"}),(0,s.jsx)("meta",{property:"og:url",content:"https://louis-cf-lin.github.io/"}),(0,s.jsx)("meta",{property:"og:type",content:"Profile"}),(0,s.jsx)("meta",{property:"og:description",content:"Hi, I'm Louis and I write code."}),(0,s.jsx)("meta",{property:"og:image",content:"https://raw.githubusercontent.com/louis-cf-lin/louis-cf-lin.github.io/master/public/meta.jpg"}),(0,s.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:image",content:"https://raw.githubusercontent.com/louis-cf-lin/louis-cf-lin.github.io/master/public/meta.jpg"}),(0,s.jsx)("meta",{property:"twitter:site",content:"@louii_l"}),(0,s.jsx)("link",{rel:"icon",href:"/icon.ico"})]}),(0,s.jsx)(u.Z,{isRendered:M,compile:L}),(0,s.jsx)("div",{ref:I,className:_().bg,children:M&&(0,s.jsx)(l(),{src:"/home-bg.jpg",layout:"fill",objectFit:"cover",quality:100,alt:"Background image"})}),(0,s.jsxs)("main",{className:_().main,children:[(0,s.jsx)("h1",{className:_().h1,children:(0,s.jsx)(m,{html:{rendered:(0,s.jsx)(s.Fragment,{children:"Hi, I'm Louis and I write code"}),typed:"# Hi, I'm Louis and I write code"},isRendered:M,lineNumber:1,ready:e,callback:()=>n(!0),bounds:[125,25,1500]})}),(0,s.jsx)("h2",{className:_().h2,children:(0,s.jsx)(m,{html:{rendered:(0,s.jsx)(s.Fragment,{children:"Mostly in Python & TypeScript"}),typed:"## Mostly in Python & TypeScript"},isRendered:M,lineNumber:2,ready:r,callback:()=>j(e=>e.map((e,t)=>0===t)),bounds:[50,25,1e3]})}),g.map((e,t)=>(0,s.jsx)("p",{className:_().p,children:(0,s.jsx)(m,{html:e,ready:p[t],lineNumber:3+t,isRendered:M,callback:()=>t===g.length-1?h(!0):j(e=>e.map((e,r)=>r===t+1||e)),bounds:[40,20,250]})},"paras_a"+t)),(0,s.jsx)("h2",{className:_().h2,children:(0,s.jsx)(m,{html:{rendered:(0,s.jsx)(s.Fragment,{children:"Other fun stuff I do"}),typed:"## Other fun stuff I do"},ready:i,isRendered:M,lineNumber:3+g.length,callback:()=>x(e=>e.map((e,t)=>0===t)),bounds:[75,25,1e3]})}),(0,s.jsxs)("div",{className:"".concat(_().partB," ").concat(M?_().partBRendered:""),children:[(0,s.jsx)("div",{className:_().partBText,children:v.map((e,t)=>(0,s.jsx)("p",{className:_().p,children:(0,s.jsx)(m,{html:e,ready:f[t],isRendered:M,lineNumber:4+g.length+t,callback:()=>t===v.length-1?N(!0):x(e=>e.map((e,r)=>r===t+1||e)),bounds:[20,40,250]})},"paras_b"+t))}),(0,s.jsx)("div",{className:"".concat(_().youtubeContainer," ").concat(w||M?_().show:""),style:{marginLeft:M?0:"5vw"},children:H?(0,s.jsxs)("div",{className:_().youtubePreview,onClick:()=>C(!1),children:[(0,s.jsx)(l(),{src:"/home-youtube.jpg",layout:"fill",alt:"Snow Motion | Queenstown NZ"}),M?(0,s.jsx)("button",{children:(0,s.jsx)(b.o1,{height:36,width:36,color:"white"})}):(0,s.jsx)("p",{children:"[Click to play]"})]}):(0,s.jsx)(d.Z,{videoId:"O-5r8IXsRns",className:_().youtubeWrapper,iframeClassName:_().youtube,title:"Snow Motion | Queenstown NZ",opts:{playerVars:{rel:0,autoplay:1}},onEnd:()=>C(!0)})})]})]})]})};var N=w},111:function(e){e.exports={footer:"Footer_footer__BcpJO",inner:"Footer_inner__3q9Lf"}},5512:function(e){e.exports={headerContainer:"Header_headerContainer__9Xbnv",headerWrapper:"Header_headerWrapper__p6qHq",home:"Header_home__VHzMc",homeIcon:"Header_homeIcon__k7e2i",mobileOnly:"Header_mobileOnly__dE1XQ",mobileMenuWrapper:"Header_mobileMenuWrapper__gPp5e",menuBtn:"Header_menuBtn__fCD7Y",menu:"Header_menu__VYiuS",active:"Header_active__Gp5CT",submenu:"Header_submenu__bT_u9",play:"Header_play__oFIz4",tabContainer:"Header_tabContainer__CGIL_",compile:"Header_compile__sA14v",tab:"Header_tab__g2IIK",projectsContainer:"Header_projectsContainer__XYFgd",hovered:"Header_hovered__cHAcP",projectsWrapper:"Header_projectsWrapper__XF3yf",projectsMenu:"Header_projectsMenu__fqpCI"}},8475:function(e){e.exports={page:"Page_page__1sIzF",wrapper:"Page_wrapper__kjDsR"}},3807:function(e){e.exports={span:"Typed_span__poCxF",rendered:"Typed_rendered__kzZHW",hide:"Typed_hide__hfo__",show:"Typed_show__SbPae",last:"Typed_last__6PzYR",blink:"Typed_blink__jfbPm",container:"Typed_container__XcFtP",border:"Typed_border__Kcbs_",lineNumber:"Typed_lineNumber__3V09J"}},7017:function(e){e.exports={bg:"styles_bg__9sz8M",main:"styles_main__AYZNo",bulletPoint:"styles_bulletPoint__qaxJX",h1:"styles_h1__URnlO",h2:"styles_h2__IuFcv",p:"styles_p__eCnYo",partB:"styles_partB__BizCh",partBText:"styles_partBText__bQcSj",youtubeContainer:"styles_youtubeContainer__xGv78",show:"styles_show__J1qfe",youtubePreview:"styles_youtubePreview__qGmfX",youtubeWrapper:"styles_youtubeWrapper__0N6yq",youtube:"styles_youtube__CXfQf",partBRendered:"styles_partBRendered__3wAtq"}}},function(e){e.O(0,[814,675,913,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);