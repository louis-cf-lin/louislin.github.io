(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3431:function(t){var e="function"==typeof Float32Array;function i(t,e,i){return(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t}function n(t,e,i){return 3*(1-3*i+3*e)*t*t+2*(3*i-6*e)*t+3*e}function s(t){return t}t.exports=function(t,r,a,o){if(!(0<=t&&t<=1&&0<=a&&a<=1))throw Error("bezier x values must be in [0, 1] range");if(t===r&&a===o)return s;for(var l=e?new Float32Array(11):Array(11),h=0;h<11;++h)l[h]=i(.1*h,t,a);return function(e){return 0===e?0:1===e?1:i(function(e){for(var s=0,r=1;10!==r&&l[r]<=e;++r)s+=.1;var o=s+(e-l[--r])/(l[r+1]-l[r])*.1,h=n(o,t,a);return h>=.001?function(t,e,s,r){for(var a=0;a<4;++a){var o=n(e,s,r);if(0===o)break;var l=i(e,s,r)-t;e-=l/o}return e}(e,o,t,a):0===h?o:function(t,e,n,s,r){var a,o,l=0;do(a=i(o=e+(n-e)/2,s,r)-t)>0?n=o:e=o;while(Math.abs(a)>1e-7&&++l<10);return o}(e,s,s+.1,t,a)}(e),r,o)}}},6840:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(3847)}])},3847:function(t,e,i){"use strict";i.r(e);var n=i(5893);i(8339);var s=i(2141);e.default=function(t){let{Component:e,pageProps:i}=t;return(0,n.jsx)(s.Xu,{children:(0,n.jsx)(e,{...i})})}},8339:function(){},2141:function(t,e,i){"use strict";i.d(e,{VS:function(){return F},UG:function(){return tt},Xu:function(){return te},YT:function(){return D}});var n,s,r,a,o,l,h,u,c,d,p,f=i(3431),v=i.n(f),g=function(t){this.startX=t.startX,this.startY=t.startY,this.endX=t.endX,this.endY=t.endY,this.totalX=this.endX-this.startX,this.totalY=this.endY-this.startY,this.startMultiplierX=t.startMultiplierX||1,this.endMultiplierX=t.endMultiplierX||1,this.startMultiplierY=t.startMultiplierY||1,this.endMultiplierY=t.endMultiplierY||1};function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}(n=l||(l={})).speed="speed",n.translateX="translateX",n.translateY="translateY",n.rotate="rotate",n.rotateX="rotateX",n.rotateY="rotateY",n.rotateZ="rotateZ",n.scale="scale",n.scaleX="scaleX",n.scaleY="scaleY",n.scaleZ="scaleZ",n.opacity="opacity",(s=h||(h={})).px="px",s["%"]="%",s.vh="vh",s.vw="vw",(r=u||(u={})).deg="deg",r.turn="turn",r.rad="rad",(c||(c={}))[""]="",(a=d||(d={})).vertical="vertical",a.horizontal="horizontal",(o=p||(p={})).ease="ease",o.easeIn="easeIn",o.easeOut="easeOut",o.easeInOut="easeInOut",o.easeInQuad="easeInQuad",o.easeInCubic="easeInCubic",o.easeInQuart="easeInQuart",o.easeInQuint="easeInQuint",o.easeInSine="easeInSine",o.easeInExpo="easeInExpo",o.easeInCirc="easeInCirc",o.easeOutQuad="easeOutQuad",o.easeOutCubic="easeOutCubic",o.easeOutQuart="easeOutQuart",o.easeOutQuint="easeOutQuint",o.easeOutSine="easeOutSine",o.easeOutExpo="easeOutExpo",o.easeOutCirc="easeOutCirc",o.easeInOutQuad="easeInOutQuad",o.easeInOutCubic="easeInOutCubic",o.easeInOutQuart="easeInOutQuart",o.easeInOutQuint="easeInOutQuint",o.easeInOutSine="easeInOutSine",o.easeInOutExpo="easeInOutExpo",o.easeInOutCirc="easeInOutCirc",o.easeInBack="easeInBack",o.easeOutBack="easeOutBack",o.easeInOutBack="easeInOutBack";var w=0,E=function(){function t(t){var e=t.el.getBoundingClientRect();if(t.view.scrollContainer){var i=t.view.scrollContainer.getBoundingClientRect();e=m({},e,{top:e.top-i.top,right:e.right-i.left,bottom:e.bottom-i.top,left:e.left-i.left})}this.height=t.el.offsetHeight,this.width=t.el.offsetWidth,this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,t.rootMargin&&this._setRectWithRootMargin(t.rootMargin)}return t.prototype._setRectWithRootMargin=function(t){var e=t.top+t.bottom,i=t.left+t.right;this.top-=t.top,this.right+=t.right,this.bottom+=t.bottom,this.left-=t.left,this.height+=e,this.width+=i},t}(),y=[c[""],h.px,h["%"],h.vh,h.vw,u.deg,u.turn,u.rad];function _(t,e){void 0===e&&(e=h["%"]);var i={value:0,unit:e};if(void 0===t)return i;if(!("number"==typeof t||"string"==typeof t))throw Error("Invalid value provided. Must provide a value as a string or number");if(t=String(t),i.value=parseFloat(t),i.unit=t.match(/[\d.\-+]*\s*(.*)/)[1]||e,!y.includes(i.unit))throw Error("Invalid unit provided.");return i}var b={ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function C(t){if(Array.isArray(t))return v()(t[0],t[1],t[2],t[3]);if("string"==typeof t&&void 0!==b[t]){var e=b[t];return v()(e[0],e[1],e[2],e[3])}}var O=Object.values(l),x={speed:"px",translateX:"%",translateY:"%",rotate:"deg",rotateX:"deg",rotateY:"deg",rotateZ:"deg",scale:"",scaleX:"",scaleY:"",scaleZ:"",opacity:""};function I(t,e){var i={};return O.forEach(function(n){var s=x[n];if("number"==typeof(null==t?void 0:t[n])){var r=null==t?void 0:t[n],a=_(10*(r||0)+"px"),o=_(-10*(r||0)+"px"),l={start:a.value,end:o.value,unit:a.unit};e===d.vertical&&(i.translateY=l),e===d.horizontal&&(i.translateX=l)}if(Array.isArray(null==t?void 0:t[n])){var h=null==t?void 0:t[n];if(void 0!==h[0]&&void 0!==h[1]){var u=_(null==h?void 0:h[0],s),c=_(null==h?void 0:h[1],s),p=C(null==h?void 0:h[2]);if(i[n]={start:u.value,end:c.value,unit:u.unit,easing:p},u.unit!==c.unit)throw Error("Must provide matching units for the min and max offset values of each axis.")}}}),i}function S(t,e,i,n){var s=(i-t)/e;return n&&(s=n(s)),s}function Y(t,e){var i,n;return{value:(i="function"==typeof t.easing?t.easing(e):e,n=(null==t?void 0:t.start)||0,(((null==t?void 0:t.end)||0)-n)*(i-0)/1+n),unit:null==t?void 0:t.unit}}var X=Object.values(l).filter(function(t){return"opacity"!==t});function P(t){var e=t.el;e&&(e.style.transform="",e.style.opacity="")}function M(t,e,i){return Math.max(i/(i+(Math.abs(t)+Math.abs(e))*(e>t?-1:1)),1)}function A(t,e){var i=t.start,n=t.end,s=t.unit;if("%"===s){var r=e/100;i*=r,n*=r}if("vw"===s){var a=i/100,o=n/100;i=window.innerWidth*a,n=window.innerWidth*o}if("vh"===s){var l=i/100,h=n/100;i=window.innerHeight*l,n=window.innerHeight*h}return{start:i,end:n}}var k={start:0,end:0,unit:""},H=function(t,e,i){return Math.min(Math.max(t,e),i)},Q=function(){function t(t){var e,i;this.el=t.el,this.props=t.props,this.scrollAxis=t.scrollAxis,this.id=++w,this.effects=I(this.props,this.scrollAxis),this.isInView=null,this.progress=0,this._setElementEasing(t.props.easing),e=t.el,i=Object.keys(this.effects).includes("opacity"),e.style.willChange="transform"+(i?",opacity":"")}var e=t.prototype;return e.updateProps=function(t){return this.props=m({},this.props,t),this.effects=I(t,this.scrollAxis),this._setElementEasing(t.easing),this},e.setCachedAttributes=function(t,e){P(this),this.rect=new E({el:this.props.targetElement||this.el,rootMargin:this.props.rootMargin,view:t});var i,n,s,r,a,o,l,h,u,c,p,f,v=(i=this.props,n=this.effects,s=this.scrollAxis,!i.rootMargin&&!i.targetElement&&!i.shouldDisableScalingTranslations&&(!!n.translateX&&s===d.horizontal||!!n.translateY&&s===d.vertical));return"number"==typeof this.props.startScroll&&"number"==typeof this.props.endScroll?(this.limits=new g({startX:this.props.startScroll,startY:this.props.startScroll,endX:this.props.endScroll,endY:this.props.endScroll}),this._setElementStyles(),this):(v?(this.limits=function(t,e,i,n,s,r){var a=i.translateX||k,o=i.translateY||k,l=A(a,t.width),h=l.start,u=l.end,c=A(o,t.height),p=c.start,f=c.end,v=t.top-e.height,m=t.left-e.width,w=t.bottom,E=t.right,y=1,_=1;s===d.vertical&&(_=y=M(p,f,e.height+t.height));var b=1,C=1;if(s===d.horizontal&&(C=b=M(h,u,e.width+t.width)),p<0&&(v+=p*y),f>0&&(w+=f*_),h<0&&(m+=h*b),u>0&&(E+=u*C),m+=n.x,E+=n.x,v+=n.y,w+=n.y,r){var O=n.y+t.top<e.height,x=n.x+t.left<e.width,I=n.y+t.bottom>e.scrollHeight-e.height,S=n.x+t.right>e.scrollWidth-e.height;O&&I&&(y=1,_=1,v=0,w=e.scrollHeight-e.height),x&&S&&(b=1,C=1,m=0,E=e.scrollWidth-e.width),!O&&I&&(v=t.top-e.height+n.y,y=M(p,f,(w=e.scrollHeight-e.height)-v),_=1,p<0&&(v+=p*y)),!x&&S&&(m=t.left-e.width+n.x,b=M(h,u,(E=e.scrollWidth-e.width)-m),C=1,h<0&&(m+=h*b)),O&&!I&&(v=0,y=1,_=M(p,f,(w=t.bottom+n.y)-v),f>0&&(w+=f*_)),x&&!S&&(m=0,b=1,C=M(h,u,(E=t.right+n.x)-m),u>0&&(E+=u*C))}return new g({startX:m,startY:v,endX:E,endY:w,startMultiplierX:b,endMultiplierX:C,startMultiplierY:y,endMultiplierY:_})}(this.rect,t,this.effects,e,this.scrollAxis,this.props.shouldAlwaysCompleteAnimation),this.scaledEffects=(r=this.effects,a=this.limits,(o=m({},r)).translateX&&(o.translateX=m({},r.translateX,{start:o.translateX.start*a.startMultiplierX,end:o.translateX.end*a.endMultiplierX})),o.translateY&&(o.translateY=m({},r.translateY,{start:o.translateY.start*a.startMultiplierY,end:o.translateY.end*a.endMultiplierY})),o)):this.limits=(l=this.rect,h=this.props.shouldAlwaysCompleteAnimation,u=l.top-t.height,c=l.left-t.width,p=l.bottom,f=l.right,c+=e.x,f+=e.x,u+=e.y,p+=e.y,h&&(e.y+l.top<t.height&&(u=0),e.x+l.left<t.width&&(c=0),p>t.scrollHeight-t.height&&(p=t.scrollHeight-t.height),f>t.scrollWidth-t.width&&(f=t.scrollWidth-t.width)),new g({startX:c,startY:u,endX:f,endY:p})),this._setElementStyles(),this)},e._updateElementIsInView=function(t){var e=null===this.isInView;t!==this.isInView&&(t?this.props.onEnter&&this.props.onEnter(this):!e&&(this._setFinalProgress(),this._setElementStyles(),this.props.onExit&&this.props.onExit(this))),this.isInView=t},e._setFinalProgress=function(){var t=H(Math.round(this.progress),0,1);this._updateElementProgress(t)},e._setElementStyles=function(){this.props.disabled||function(t,e,i){if(i){var n,s=X.reduce(function(i,n){var s=t[n]&&Y(t[n],e);return void 0===s||void 0===s.value||void 0===s.unit?i:i+(n+"("+s.value)+s.unit+")"},""),r=void 0===(n=t.opacity&&Y(t.opacity,e))||void 0===n.value||void 0===n.unit?"":""+n.value;i.style.transform=s,i.style.opacity=r}}(this.scaledEffects||this.effects,this.progress,this.el)},e._updateElementProgress=function(t){this.progress=t,this.props.onProgressChange&&this.props.onProgressChange(this.progress),this.props.onChange&&this.props.onChange(this)},e._setElementEasing=function(t){this.easing=C(t)},e.updatePosition=function(t){if(!this.limits)return this;var e=this.scrollAxis===d.vertical,i=null===this.isInView,n=e?this.limits.startY:this.limits.startX,s=e?this.limits.endY:this.limits.endX,r=e?this.limits.totalY:this.limits.totalX,a=e?t.y:t.x,o=a>=n&&a<=s;if(this._updateElementIsInView(o),o){var l=S(n,r,a,this.easing);this._updateElementProgress(l),this._setElementStyles()}else i&&(this.progress=H(Math.round(S(n,r,a,this.easing)),0,1),this._setElementStyles());return this},t}(),z=function(){function t(t){this.scrollContainer=t.scrollContainer,this.width=t.width,this.height=t.height,this.scrollHeight=t.scrollHeight,this.scrollWidth=t.scrollWidth}var e=t.prototype;return e.hasChanged=function(t){return t.width!==this.width||t.height!==this.height||t.scrollWidth!==this.scrollWidth||t.scrollHeight!==this.scrollHeight},e.setSize=function(t){return this.width=t.width,this.height=t.height,this.scrollHeight=t.scrollHeight,this.scrollWidth=t.scrollWidth,this},t}(),W=function(){function t(t,e){this.x=t,this.y=e,this.dx=0,this.dy=0}return t.prototype.setScroll=function(t,e){return this.dx=t-this.x,this.dy=e-this.y,this.x=t,this.y=e,this},t}(),L=function(){function t(t){var e=t.scrollAxis,i=void 0===e?d.vertical:e,n=t.scrollContainer;this.scrollAxis=i,this.elements=[],this._hasScrollContainer=!!n,this.viewEl=null!=n?n:window;var s=this._getScrollPosition(),r=s[0],a=s[1];this.scroll=new W(r,a),this.view=new z({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:this._hasScrollContainer?n:void 0}),this._ticking=!1,this._supportsPassive=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){return t=!0,!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}(),this._bindAllMethods(),this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize()}t.init=function(e){if(!("undefined"!=typeof window))throw Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");return new t(e)};var e=t.prototype;return e._bindAllMethods=function(){var t=this;["_addListeners","_removeListeners","_getScrollPosition","_handleScroll","_handleUpdateCache","_updateAllElements","_updateElementPosition","_setViewSize","_addResizeObserver","_checkIfViewHasChanged","_getViewParams","getElements","createElement","removeElementById","resetElementStyles","updateElementPropsById","update","updateScrollContainer","destroy"].forEach(function(e){t[e]=t[e].bind(t)})},e._addListeners=function(t){t.addEventListener("scroll",this._handleScroll,!!this._supportsPassive&&{passive:!0}),window.addEventListener("resize",this._handleUpdateCache,!1),window.addEventListener("blur",this._handleUpdateCache,!1),window.addEventListener("focus",this._handleUpdateCache,!1),window.addEventListener("load",this._handleUpdateCache,!1)},e._removeListeners=function(t){var e;t.removeEventListener("scroll",this._handleScroll,!1),window.removeEventListener("resize",this._handleUpdateCache,!1),window.removeEventListener("blur",this._handleUpdateCache,!1),window.removeEventListener("focus",this._handleUpdateCache,!1),window.removeEventListener("load",this._handleUpdateCache,!1),null==(e=this._resizeObserver)||e.disconnect()},e._addResizeObserver=function(){var t=this;try{var e=this._hasScrollContainer?this.viewEl:document.documentElement;this._resizeObserver=new ResizeObserver(function(){return t.update()}),this._resizeObserver.observe(e)}catch(t){console.warn("Failed to create the resize observer in the ParallaxContoller")}},e._getScrollPosition=function(){return[this._hasScrollContainer?this.viewEl.scrollLeft:window.pageXOffset,this._hasScrollContainer?this.viewEl.scrollTop:window.pageYOffset]},e._handleScroll=function(){var t=this._getScrollPosition(),e=t[0],i=t[1];this.scroll.setScroll(e,i),!this._ticking&&this.elements.length>0&&(this._ticking=!0,window.requestAnimationFrame(this._updateAllElements))},e._handleUpdateCache=function(){this._setViewSize(),this._updateAllElements({updateCache:!0})},e._updateAllElements=function(t){var e=this,i=(void 0===t?{}:t).updateCache;this.elements&&this.elements.forEach(function(t){i&&t.setCachedAttributes(e.view,e.scroll),e._updateElementPosition(t)}),this._ticking=!1},e._updateElementPosition=function(t){t.props.disabled||t.updatePosition(this.scroll)},e._getViewParams=function(){if(this._hasScrollContainer){var t=this.viewEl.offsetWidth,e=this.viewEl.offsetHeight,i=this.viewEl.scrollHeight,n=this.viewEl.scrollWidth;return this.view.setSize({width:t,height:e,scrollHeight:i,scrollWidth:n})}var s=document.documentElement;return{width:window.innerWidth||s.clientWidth,height:window.innerHeight||s.clientHeight,scrollHeight:s.scrollHeight,scrollWidth:s.scrollWidth}},e._setViewSize=function(){return this.view.setSize(this._getViewParams())},e._checkIfViewHasChanged=function(){return this.view.hasChanged(this._getViewParams())},e.getElements=function(){return this.elements},e.createElement=function(t){var e=new Q(m({},t,{scrollAxis:this.scrollAxis}));return e.setCachedAttributes(this.view,this.scroll),this.elements=this.elements?[].concat(this.elements,[e]):[e],this._updateElementPosition(e),this._checkIfViewHasChanged()&&this.update(),e},e.removeElementById=function(t){this.elements&&(this.elements=this.elements.filter(function(e){return e.id!==t}))},e.updateElementPropsById=function(t,e){this.elements&&(this.elements=this.elements.map(function(i){return i.id===t?i.updateProps(e):i})),this.update()},e.resetElementStyles=function(t){P(t)},e.update=function(){var t=this._getScrollPosition(),e=t[0],i=t[1];this.scroll.setScroll(e,i),this._setViewSize(),this._updateAllElements({updateCache:!0})},e.updateScrollContainer=function(t){this._removeListeners(this.viewEl),this.viewEl=t,this._hasScrollContainer=!!t,this.view=new z({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:t}),this._setViewSize(),this._addListeners(this.viewEl),this._updateAllElements({updateCache:!0})},e.destroy=function(){this._removeListeners(this.viewEl),this.elements&&this.elements.forEach(function(t){return P(t)}),this.elements=void 0},t}(),V=i(7294);function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Z(t,e){if(null==t)return{};var i,n,s={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(s[i]=t[i]);return s}var R=["disabled","easing","endScroll","onChange","onEnter","onExit","onProgressChange","opacity","rootMargin","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","shouldAlwaysCompleteAnimation","shouldDisableScalingTranslations","speed","startScroll","targetElement","translateX","translateY"];function T(t){var e,i=t.disabled,n=t.easing,s=t.endScroll,r=t.onChange,a=t.onEnter,o=t.onExit,l=t.onProgressChange,h=t.opacity,u=t.rootMargin,c=t.rotate,d=t.rotateX,p=t.rotateY,f=t.rotateZ,v=t.scale,g=t.scaleX,m=t.scaleY,w=t.scaleZ,E=t.shouldAlwaysCompleteAnimation,y=t.shouldDisableScalingTranslations,_=t.speed,b=t.startScroll,C=t.targetElement,O=t.translateX,x=t.translateY,I=Z(t,R);return{parallaxProps:(Object.keys(e={disabled:i,easing:n,endScroll:s,onChange:r,onEnter:a,onExit:o,onProgressChange:l,opacity:h,rootMargin:u,rotate:c,rotateX:d,rotateY:p,rotateZ:f,scale:v,scaleX:g,scaleY:m,scaleZ:w,shouldAlwaysCompleteAnimation:E,shouldDisableScalingTranslations:y,speed:_,startScroll:b,targetElement:C,translateX:O,translateY:x}).forEach(function(t){return void 0===e[t]?delete e[t]:{}}),e),rest:I}}var U=V.createContext(null);function D(t){var e=function(){var t=(0,V.useContext)(U);if("undefined"==typeof window)return null;if(!t)throw Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");return t}(),i=(0,V.useRef)(null),n=T(t).parallaxProps;(0,V.useEffect)(function(){if("undefined"!=typeof window&&!e&&!(e instanceof L))throw Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.")},[e]);var s=(0,V.useState)(),r=s[0],a=s[1];return(0,V.useEffect)(function(){var t;if(i.current instanceof HTMLElement){var s={el:i.current,props:n};a(t=null==e?void 0:e.createElement(s))}else throw Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");return function(){t&&(null==e||e.removeElementById(t.id))}},[]),(0,V.useEffect)(function(){r&&(t.disabled&&(null==e||e.resetElementStyles(r)),null==e||e.updateElementPropsById(r.id,n))},[t.disabled,t.easing,t.endScroll,t.onChange,t.onEnter,t.onExit,t.onProgressChange,t.opacity,t.rootMargin,t.rotate,t.rotateX,t.rotateY,t.rotateZ,t.scale,t.scaleX,t.scaleY,t.scaleZ,t.shouldAlwaysCompleteAnimation,t.shouldDisableScalingTranslations,t.speed,t.startScroll,t.targetElement,t.translateX,t.translateY]),{ref:i,controller:e,element:r}}function F(t){var e=T(t),i=e.parallaxProps,n=e.rest,s=D(i).ref;return V.createElement("div",Object.assign({ref:s},n),t.children)}var N={height:0},q=["children","disabled","style","expanded","image","testId"],G={position:"absolute",top:0,left:0,right:0,bottom:0},J=function(t){var e=T(t),i=e.parallaxProps,n=e.rest,s=n.style,r=n.expanded,a=n.testId,o=Z(n,q),l=t.image?{backgroundImage:"url("+t.image+")",backgroundPosition:"center",backgroundSize:"cover"}:{},h=void 0===r||r?function(t){if(Array.isArray(t.translateY)){var e=_(t.translateY[0]),i=_(t.translateY[1]);if("px"===e.unit&&"px"===i.unit)return{top:-1*Math.abs(i.value)+"px",bottom:-1*Math.abs(e.value)+"px"};if("%"===e.unit&&"%"===i.unit){var n,s=(null==(n=t.targetElement)?void 0:n.getBoundingClientRect())||N;return{top:-1*Math.abs(.01*s.height*i.value)+"px",bottom:-1*Math.abs(.01*s.height*e.value)+"px"}}}if(t.speed){var r=t.speed||0;return{top:-10*Math.abs(r)+"px",bottom:-10*Math.abs(r)+"px"}}return{}}(t):{},u=D(j({targetElement:t.targetElement,shouldDisableScalingTranslations:!0},i));return V.createElement("div",Object.assign({"data-testid":a,ref:u.ref,style:j({},l,G,h,s)},o),n.children)},K=["disabled","style","layers"],$={position:"relative",overflow:"hidden",width:"100%"},tt=function(t){var e=(0,V.useState)(null),i=e[0],n=e[1],s=(0,V.useRef)(null);(0,V.useEffect)(function(){n(s.current)},[]);var r=t.style,a=t.layers,o=void 0===a?[]:a,l=Z(t,K);return V.createElement("div",Object.assign({ref:s,style:j({},$,r)},l),i&&o&&o.length>0?o.map(function(t,e){return V.createElement(J,Object.assign({},t,{targetElement:i,key:"layer-"+e,testId:"layer-"+e}))}):null,i?V.Children.map(t.children,function(t){return(null==t?void 0:t.type)===J?V.cloneElement(t,{targetElement:i}):t}):null)},te=function(t){function e(e){var i,n;return(i=t.call(this,e)||this).controller=(n={scrollAxis:e.scrollAxis,scrollContainer:e.scrollContainer},"undefined"!=typeof window?L.init(n):null),i}(i=e).prototype=Object.create(t.prototype),i.prototype.constructor=i,B(i,t);var i,n=e.prototype;return n.componentDidUpdate=function(t){t.scrollContainer!==this.props.scrollContainer&&this.controller.updateScrollContainer(this.props.scrollContainer)},n.componentWillUnmount=function(){this.controller=this.controller.destroy()},n.render=function(){var t=this.props.children;return V.createElement(U.Provider,{value:this.controller},t)},e}(V.Component);te.defaultProps={scrollAxis:d.vertical}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(6840),e(880)}),_N_E=t.O()}]);