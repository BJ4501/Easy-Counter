"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[227],{"5685":function(t,e,i){i.d(e,{"Ee":function(){return d},"II":function(){return m},"G7":function(){return p}});var n=i(7294);const helper_manipulatePropsFunction=(t,e={})=>{const{"dangerouslySetInnerHTML":i,"style":n}=t;return"string"!=typeof n&&(e.style=n),Object.assign(Object.assign({},e),{"dangerouslySetInnerHTML":i})};var o=i(7210),s=i(3612);i.e(831).then(i.t.bind(i,3831,23));const r=(0,o.GH)(class extends o.mv{"constructor"(){super(),this.__registerHost(),this.onLoad=(0,o.yM)(this,"load",7),this.onError=(0,o.yM)(this,"error",7),this.src=void 0,this.mode="scaleToFill",this.lazyLoad=!1,this.nativeProps={},this.aspectFillMode="width"}"componentDidLoad"(){if(!this.lazyLoad)return;const t=new IntersectionObserver((e=>{e[e.length-1].isIntersecting&&(t.unobserve(this.imgRef),this.imgRef.src=this.src)}),{"rootMargin":"300px 0px"});t.observe(this.imgRef)}"imageOnLoad"(){const{"width":t,"height":e,"naturalWidth":i,"naturalHeight":n}=this.imgRef;this.onLoad.emit({"width":t,"height":e}),this.aspectFillMode=i>n?"width":"height"}"imageOnError"(t){this.onError.emit(t)}"render"(){const{"src":t,"mode":e="scaleToFill","lazyLoad":i=!1,"aspectFillMode":n="width","imageOnLoad":r,"imageOnError":a,"nativeProps":c}=this,h=(0,s.c)({"taro-img__widthfix":"widthFix"===e}),l=(0,s.c)(`taro-img__mode-${e.toLowerCase().replace(/\s/g,"")}`,{[`taro-img__mode-aspectfill--${n}`]:"aspectFill"===e});return(0,o.h)(o.AA,{"class":h},i?(0,o.h)("img",Object.assign({"ref":t=>this.imgRef=t,"class":l,"onLoad":r.bind(this),"onError":a.bind(this)},c)):(0,o.h)("img",Object.assign({"ref":t=>this.imgRef=t,"class":l,"src":t,"onLoad":r.bind(this),"onError":a.bind(this)},c)))}static get"style"(){return'img[src=""]{opacity:0}taro-image-core{display:inline-block;overflow:hidden;position:relative;width:auto;height:auto;font-size:0}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-widthfix{width:100%}.taro-img__mode-heightfix{height:100%}.taro-img__mode-top{width:100%}.taro-img__mode-bottom{position:absolute;bottom:0;width:100%}.taro-img__mode-left{height:100%}.taro-img__mode-right{position:absolute;right:0;height:100%}.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;right:0;bottom:0}'}},[0,"taro-image-core",{"src":[1],"mode":[1],"lazyLoad":[4,"lazy-load"],"nativeProps":[16],"aspectFillMode":[32]}]);const a=function defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-image-core"].forEach((t=>{if("taro-image-core"===t)customElements.get(t)||customElements.define(t,r)}))};function getTrueType(t,e,i){if("search"===e&&(t="search"),i&&(t="password"),void 0===t)return"text";if(!t)throw new Error("unexpected type");return"digit"===t&&(t="number"),t}function fixControlledValue(t){return null!=t?t:""}const c=(0,o.GH)(class extends o.mv{"constructor"(){super(),this.__registerHost(),this.onInput=(0,o.yM)(this,"input",7),this.onPaste=(0,o.yM)(this,"paste",7),this.onFocus=(0,o.yM)(this,"focus",7),this.onBlur=(0,o.yM)(this,"blur",7),this.onConfirm=(0,o.yM)(this,"confirm",7),this.onChange=(0,o.yM)(this,"change",7),this.onKeyDown=(0,o.yM)(this,"keydown",7),this.isOnComposition=!1,this.isOnPaste=!1,this.onInputExcuted=!1,this.handleInput=t=>{t.stopPropagation();const{"type":e,"maxlength":i,"confirmType":n,"password":o}=this;if(!this.isOnComposition&&!this.onInputExcuted){let s=t.target.value;const r=getTrueType(e,n,o);this.onInputExcuted=!0,"number"===r&&s&&i>-1&&i<=s.length&&(s=s.substring(0,i),t.target.value=s),this.value=s,this.onInput.emit({"value":s,"cursor":s.length}),this.onInputExcuted=!1}},this.handlePaste=t=>{t.stopPropagation(),this.isOnPaste=!0,this.onPaste.emit({"value":t.target.value})},this.handleFocus=t=>{t.stopPropagation(),this.onInputExcuted=!1,this.onFocus.emit({"value":t.target.value})},this.handleBlur=t=>{t.stopPropagation(),this.onBlur.emit({"value":t.target.value})},this.handleChange=t=>{t.stopPropagation(),this.onChange.emit({"value":t.target.value}),this.isOnPaste&&(this.isOnPaste=!1,this.value=t.target.value,this.onInput.emit({"value":t.target.value,"cursor":t.target.value.length}))},this.handleKeyDown=t=>{t.stopPropagation();const{"value":e}=t.target,i=t.keyCode||t.code;this.onInputExcuted=!1,this.onKeyDown.emit({"value":e,"cursor":e.length,"keyCode":i}),13===i&&this.onConfirm.emit({"value":e})},this.handleComposition=t=>{t.stopPropagation(),t.target instanceof HTMLInputElement&&("compositionend"===t.type?(this.isOnComposition=!1,this.value=t.target.value,this.onInput.emit({"value":t.target.value,"cursor":t.target.value.length})):this.isOnComposition=!0)},this.handleBeforeInput=t=>{if(!t.data)return;const e=t.data&&/[0-9]/.test(t.data);"number"!==this.type||e||t.preventDefault(),"digit"!==this.type||e||("."!==t.data||"."===t.data&&t.target.value.indexOf(".")>-1)&&t.preventDefault()},this.value="",this.type=void 0,this.password=!1,this.placeholder=void 0,this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.confirmType="done",this.name=void 0,this.nativeProps={}}async"focus"(){this.inputRef.focus()}"watchAutoFocus"(t,e){var i;!e&&t&&(null===(i=this.inputRef)||void 0===i||i.focus())}"watchValue"(t){const e=fixControlledValue(t);this.inputRef.value!==e&&(this.inputRef.value=e)}"componentDidLoad"(){var t,e,i,n,o;"file"===this.type?(this.fileListener=()=>{this.onInput.emit()},null===(t=this.inputRef)||void 0===t||t.addEventListener("change",this.fileListener)):(null===(e=this.inputRef)||void 0===e||e.addEventListener("compositionstart",this.handleComposition),null===(i=this.inputRef)||void 0===i||i.addEventListener("compositionend",this.handleComposition),null===(n=this.inputRef)||void 0===n||n.addEventListener("beforeinput",this.handleBeforeInput),null===(o=this.inputRef)||void 0===o||o.addEventListener("textInput",this.handleBeforeInput))}"disconnectedCallback"(){var t,e,i,n,o;"file"===this.type?null===(t=this.inputRef)||void 0===t||t.removeEventListener("change",this.fileListener):(null===(e=this.inputRef)||void 0===e||e.removeEventListener("compositionstart",this.handleComposition),null===(i=this.inputRef)||void 0===i||i.removeEventListener("compositionend",this.handleComposition),null===(n=this.inputRef)||void 0===n||n.removeEventListener("beforeinput",this.handleBeforeInput),null===(o=this.inputRef)||void 0===o||o.removeEventListener("textInput",this.handleBeforeInput))}"render"(){const{"value":t,"type":e,"password":i,"placeholder":n,"autoFocus":s,"disabled":r,"maxlength":a,"confirmType":c,"name":h,"nativeProps":l}=this;return(0,o.h)("input",Object.assign({"ref":t=>{this.inputRef=t,s&&t&&t.focus()},"class":"weui-input","type":getTrueType(e,c,i),"placeholder":n,"autoFocus":s,"disabled":r,"maxlength":a,"name":h,"onInput":this.handleInput,"onFocus":this.handleFocus,"onBlur":this.handleBlur,"onChange":this.handleChange,"onKeyDown":this.handleKeyDown,"onPaste":this.handlePaste,"onCompositionStart":this.handleComposition,"onCompositionEnd":this.handleComposition},l,{"value":fixControlledValue(t)}))}get"el"(){return this}static get"watchers"(){return{"autoFocus":["watchAutoFocus"],"value":["watchValue"]}}static get"style"(){return"taro-input-core{display:block}input{display:block;overflow:hidden;height:1.4rem;text-overflow:clip;text-align:inherit;white-space:nowrap}"}},[0,"taro-input-core",{"value":[1025],"type":[1],"password":[4],"placeholder":[1],"disabled":[4],"maxlength":[2],"autoFocus":[4,"focus"],"confirmType":[1,"confirm-type"],"name":[1],"nativeProps":[16],"focus":[64]}]);const h=function taro_input_core_defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-input-core"].forEach((t=>{if("taro-input-core"===t)customElements.get(t)||customElements.define(t,c)}))},l=(0,o.GH)(class extends o.mv{"constructor"(){super(),this.__registerHost(),this.onLongPress=(0,o.yM)(this,"longpress",7),this.startTime=0,this.animation=void 0,this.hoverClass=void 0,this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1}"onTouchStart"(){this.hoverClass&&(this.touch=!0,setTimeout((()=>{this.touch&&(this.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((()=>{this.onLongPress.emit()}),350),this.startTime=Date.now()}"onTouchMove"(){clearTimeout(this.timeoutEvent)}"onTouchEnd"(){Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((()=>{this.touch||(this.hover=!1)}),this.hoverStayTime))}"componentDidRender"(){this.el.childNodes.forEach((t=>{t.nodeType===document.COMMENT_NODE&&t["s-cn"]&&(t["s-cn"]=!1),t.nodeType!==document.COMMENT_NODE&&t["s-sr"]&&(t["s-sr"]=!1)}))}"render"(){const t=(0,s.c)({[`${this.hoverClass}`]:this.hover});let e={};return this.animation&&(e.animation=this.animation,e["data-animation"]=this.animation),(0,o.h)(o.AA,Object.assign({"class":t},e),(0,o.h)("slot",null))}get"el"(){return this}static get"style"(){return"body,html{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}taro-view-core{display:block}"}},[4,"taro-view-core",{"animation":[1],"hoverClass":[1,"hover-class"],"hoverStartTime":[2,"hover-start-time"],"hoverStayTime":[2,"hover-stay-time"],"hover":[32],"touch":[32]},[[1,"touchstart","onTouchStart"],[1,"touchmove","onTouchMove"],[1,"touchend","onTouchEnd"]]]);const u=function taro_view_core_defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-view-core"].forEach((t=>{if("taro-view-core"===t)customElements.get(t)||customElements.define(t,l)}))};Object.create;Object.create;const mergeRefs=(...t)=>e=>{t.forEach((t=>{((t,e)=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})(t,e)}))},camelToDashCase=t=>t.replace(/([A-Z])/g,(t=>`-${t[0].toLowerCase()}`)),arrayToMap=t=>{const e=new Map;return t.forEach((t=>e.set(t,t))),e},syncEvent=(t,e,i)=>{const n=t.__events||(t.__events={}),o=n[e];o&&t.removeEventListener(e,o),t.addEventListener(e,n[e]=function handler(t){i&&i.call(this,t)})},attachProps=(t,e,i={})=>{t instanceof Element&&(t.className=((t,e,i)=>{const n=e.className||e.class,o=i.className||i.class,s=arrayToMap(t),r=arrayToMap(n?n.split(" "):[]),a=arrayToMap(o?o.split(" "):[]),c=[];return s.forEach((t=>{r.has(t)?(c.push(t),r.delete(t)):a.has(t)||c.push(t)})),r.forEach((t=>c.push(t))),c.join(" ")})(t.classList,e,i),Object.keys(e).forEach((i=>{if(!("style"===i&&"string"!=typeof e[i]||["children","ref","class","className","forwardedRef"].includes(i)))if(0===i.indexOf("on")&&i[2]===i[2].toUpperCase()){const n=i.substring(2).toLowerCase();syncEvent(t,n,e[i])}else{t[i]=e[i];"string"===typeof e[i]&&t.setAttribute(camelToDashCase(i),e[i])}})))},createComponent_createReactComponent=(t,e,i,o)=>{void 0!==o&&o();const s=t.toLowerCase().split("-").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join("");const r=class extends n.Component{"constructor"(t){super(t),this.setComponentElRef=t=>{this.componentEl=t}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(t){attachProps(this.componentEl,this.props,t)}"render"(){const e=this.props,{"children":o,"forwardedRef":s,"className":r,"ref":a,"style":c}=e,h=function __rest(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]])}return i}(e,["children","forwardedRef","className","ref","style"]);let l=Object.keys(h).reduce(((t,e)=>{const i=h[e];if(0===e.indexOf("on")&&e[2]===e[2].toUpperCase()){e.substring(2).toLowerCase();0}else{["string","boolean","number"].includes(typeof i)&&(t[camelToDashCase(e)]=i)}return t}),{});i&&(l=i(this.props,l));const u=Object.assign(Object.assign({},l),{"ref":mergeRefs(s,this.setComponentElRef)});return(0,n.createElement)(t,u,o)}static get"displayName"(){return s}};return e&&(r.contextType=e),((t,e)=>{const forwardRef=(e,i)=>n.createElement(t,Object.assign({},e,{"forwardedRef":i}));return forwardRef.displayName=e,n.forwardRef(forwardRef)})(r,s)},d=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction,a),m=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction,h),p=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction,u)},"1227":function(t,e,i){i.r(e),i.d(e,{"default":function(){return Index}});var n=i(3433),o=i(9439),s=i(7294),r=i(5685),a=i(6117);function parsePriceYuan(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===t)return"";var i=Number(t);return(e?"￥":"")+Number(i).toFixed(2)}var c=i(3148),h=i(9232),l=i(7009),u=i(5893);function Index(){var t=(0,s.useState)([]),e=(0,o.Z)(t,2),i=e[0],d=e[1],m=(0,s.useState)([]),p=(0,o.Z)(m,2),f=p[0],v=p[1];(0,s.useEffect)((function(){})),a.ZP.useReady((function(){h.N.registerEvent("onPaymentSuccess",{"emit":function emit(t){v([])}});var t=l.m.get("GOODS");t&&d(JSON.parse(t))}));var g=function deleteItem(t){var e=f.findIndex((function(e){return e.name===t.name}));-1!==e&&f.splice(e,1),v((0,n.Z)(f))},y=function changeItem(t,e){var i=f.findIndex((function(e){return e.name===t.name}));-1!==i&&(f[i].count=f[i].count+e,f[i].count<=0)?g(t):v((0,n.Z)(f))},x=function calTotal(t){var e=0;return f.map((function(t){var i=t.price*t.count;e+=i})),parsePriceYuan(e,t)};return(0,u.jsxs)(r.G7,{"className":"flex flex-col","children":[(0,u.jsx)("div",{"className":"grid grid-cols-3 gap-2 p-2","children":i.map((function(t,e){return(0,u.jsx)("div",{"className":"v-border-r4-gray relative","onClick":function onClick(){!function addOrIncrementItem(t){var e=f.findIndex((function(e){return e.name===t.name}));-1!==e?f[e].count+=1:f.push({"name":t.name,"price":t.price,"count":1}),v((0,n.Z)(f))}(t)},"children":(0,u.jsxs)("div",{"className":"flex flex-col p-3 items-center gap-2","children":[(0,u.jsx)("div",{"className":"v-text-16 v-font-700","children":t.name}),(0,u.jsx)("div",{"className":"v-text-14","children":parsePriceYuan(t.price,!1)})]})},e)}))}),(0,u.jsxs)("div",{"className":"flex flex-col v-border-r4-gray m-2","children":[(0,u.jsx)("div",{"className":"v-text-16 v-font-700 mx-2 mt-2","children":"已选列表"}),f.map((function(t,e){return(0,u.jsxs)("div",{"className":"flex justify-between p-2 v-split-b-1 items-center","children":[(0,u.jsx)("div",{"children":t.name}),(0,u.jsxs)("div",{"className":"flex gap-2 items-center","children":[(0,u.jsx)("div",{"className":"w-6 h-6 v-border-bg v-font-500 flex items-center justify-center v-text-14 text-center v-bg-blue v-color-white","onClick":function onClick(e){y(t,1)},"children":"+"}),t.count,(0,u.jsx)("div",{"className":"w-6 h-6 v-border-bg v-font-500 flex items-center justify-center v-text-14 text-center v-bg-red v-color-white","onClick":function onClick(e){y(t,-1)},"children":"-"}),(0,u.jsx)("div",{"className":"w-6 h-6 v-border-bg v-font-500 flex items-center justify-center v-text-14 text-center v-bg-red v-color-white","onClick":function onClick(e){g(t)},"children":"×"})]})]},e)})),(0,u.jsxs)("div",{"className":"m-2 v-text-14 v-font-700","children":["合计: ",x(!0)]})]}),(0,u.jsxs)("div",{"className":"flex mt-2 gap-2 px-3","children":[(0,u.jsx)("div",{"className":"w-1/2 p-2 v-border-bg v-font-500 justify-center v-text-14 text-center v-bg-red v-color-white","onClick":function onClick(t){v([])},"children":"清空"}),(0,u.jsx)("div",{"className":"w-1/2 p-2 v-border-bg v-font-500 justify-center v-text-14 text-center v-bg-blue v-color-white","onClick":function onClick(t){c.W.jumpToPayment(x(!1))},"children":"展示支付"})]}),(0,u.jsx)("div",{"className":"py-6"})]})}},"9232":function(t,e,i){var n,o,s;i.d(e,{"N":function(){return n}}),o=n||(n={}),s=new Map,o.registerEvent=function registerEvent(t,e){s.set(t,e)},o.unRegisterEvent=function unRegisterEvent(t){s.delete(t)},o.postEvent=function postEvent(t,e){var i=s.get(t);i&&i.emit(e)}}}]);