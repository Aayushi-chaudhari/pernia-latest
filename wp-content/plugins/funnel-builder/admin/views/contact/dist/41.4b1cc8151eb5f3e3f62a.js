(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1129:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(119),o=n(1),c=n(2),i=n(7),l=n.n(i),u=n(13),s=n.n(u),f=n(4),b=n(122),d=n(281),p=n(244),y=n(137),m=n(21),O=n(19),g=["override_tracking_ids"];function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=function(e){var t=Object(m.a)().isProFeatureLocked,n=w(Object(r.useState)(!1),2),a=n[0],i=n[1],u=e.funnelID,h=void 0===u?0:u,E=e.validationNotice,S=e.settings,k=e.isLoading,_=Object(m.b)().showSnackbar,P=wffn.settings_texts.override_tracking_ids,I=void 0===P?[]:P,A=Object(y.a)().setFunnelSettingsValues;I=I.map((function(e){return e.id||(e.id=e.key),!e.label&&e.text&&""!=e.text&&(e.label=e.text),e.type||(e.type="text"),e}));return Object(r.createElement)(r.Fragment,null,k?Object(r.createElement)("div",null,Object(r.createElement)("br",null),Object(r.createElement)("span",{className:"wffn-is-placeholder"}),Object(r.createElement)("br",null),Object(r.createElement)("span",{className:"wffn-is-placeholder small-strip"})):Object(r.createElement)(b.a,{onSubmitCallback:function(e){t?Object(c.noop)():function(e){i(!0),E("");try{s()({path:Object(f.p)("/funnels/".concat(h,"/settings")),method:"POST",data:{settings:JSON.stringify(e)}}).then((function(t){t.success?(A("settings",e),_(Object(o.__)("Setting Saved","funnel-builder"))):_(t.msg),i(!1)}))}catch(e){console.log(e),_(Object(o.__)("There are some technical difficulties while updating settings. Contact Support","funnel-builder")),i(!1)}}(e)},initialValues:S,validate:function(e){var t={};if(e.override_tracking_ids){e.override_tracking_ids;var n=v(e,g);Object.values(n).every((function(e){return""===e}))&&(t.fields=Object(o.__)("Error: Please add at least one Tracking ID to override Global Settings.","funnel-builder"))}return t}},(function(e){var n=e.getInputProps,c=e.values,i=e.errors,u=e.handleSubmit;return Object(r.createElement)("div",{className:l()("wtfb-tab-form squeezy--wrapper",{"funnel-lite-form":t})},c.override_tracking_ids="true"===c.override_tracking_ids||"false"!==c.override_tracking_ids&&c.override_tracking_ids,Object(r.createElement)("div",{className:"form-group"},Object(r.createElement)(p.a,j({label:Object(o.__)("Override Tracking IDs","funnel-builder"),options:[{label:Object(o.__)("Yes","funnel-builder"),value:!0},{label:Object(o.__)("No","funnel-builder"),value:!1}]},n("override_tracking_ids"),{disabled:t}))),c.override_tracking_ids&&!t&&I.map((function(e){return Object(r.createElement)(r.Fragment,{key:e.id},!e.toggler||function(e,t){try{var n,r=!1;if(!e[t.key])return r;if(n=e[t.key],Array.isArray(t.value)&&Array.isArray(n)){for(var a=0;a<n.length;a++)if(t.value.indexOf(n[a])>-1){r=!0;break}}else n==t.value&&(r=!0)}catch(e){console.log(e),r=!1}return r}(c,e.toggler)?Object(r.createElement)(d.a,{input:e,formProps:n(e.id),values:c}):null)})),Object(r.createElement)("div",{className:"bwf-settings-action-wrap"},Object(r.createElement)(O.a,{isPrimary:!0,onClick:Object.keys(i).length?function(){E(i)}:u,disabled:a||t,isBusy:a,className:t?"bwf-no-ripple":""},Object(o.__)("Save","funnel-builder"))))})))},S=(n(412),n(259)),k=n(24),_=["getStateProp"];function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D=function(){var e=Object(k.a)("funnelsettings"),t=e.getStateProp;return I(I({},N(e,_)),{},{getFunnelSettings:function(){return t("settings")},getFunnelData:function(){return t("funnelData")},getLoading:function(){return t("isLoading")},getFunnelId:function(){return t("fID")},getError:function(){return t("error")}})},C=n(29),x=n(26),F=n(261),T=n(18);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=Object(a.useParams)().id,n=e.funnelId,i=void 0===n?t:n,l=D(),u=l.getFunnelSettings,s=l.getLoading,b=l.getFunnelData,d=l.getFunnelId,p=Object(y.a)(),O=p.fetch,g=p.setFunnelSettingsValues,j=Object(C.a)(),v=j.setFunnelData,w=j.setFunnelStatus,h=j.setFunnelLoading,k=U(Object(r.useState)(""),2),_=k[0],P=k[1],I=Object(m.a)().isProFeatureLocked,A=Object(f.K)(),N=Object(c.get)(A,"0.modal",{}),M=N.primary_action,V=N.primary_action_link,J=d(),Q=s(),$=u(),K=b();Object(r.useEffect)((function(){(parseInt(J)!==parseInt(i)||Object(c.isEmpty)($))&&(g("isLoading",!0),O(i)),Object(c.isEmpty)(K)||(v("funnelTitle",K.title),K.hasOwnProperty("status")&&w("status",K.status),h(!1))}),[i,K]);return Object(r.createElement)(r.Fragment,null,_&&Object(r.createElement)(F.a,{status:"error",className:"bwf_components_notice",isDismissible:!1},Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:_}})),Object(r.createElement)("div",{className:"bwf-tabs-accordian-wrap"},Object(r.createElement)(S.a,{items:[{key:"general",label:Object(r.createElement)("div",{className:"bwf-flex bwf--g12"},Object(o.__)("Tracking IDs","funnel-builder"),I&&Object(r.createElement)(x.a,null)),hint:Object(r.createElement)("div",{className:"hint"},Object(o.__)("Use this setting to override the global tracking IDs for this funnel","funnel-builder"),I&&(V?Object(r.createElement)(T.a,{className:"bwf-link bwf-line bwf-upgrade-pro-text",href:V},M):Object(r.createElement)("a",{href:Object(f.J)(["Tracking","Id","Setting","Upgrade","Link"]),target:"_blank",className:"bwf-upgrade-pro-text",rel:"noreferrer"},M))),display:Object(r.createElement)(E,{funnelID:i,validationNotice:function(e){if(e){var t="";"object"===L(e)&&Object.values(e).forEach((function(e){t+="<p>"+e+"</p>"})),P(t),jQuery("#wpbody").length&&jQuery("#wpbody")[0].scrollIntoView()}else P("")},isLoading:Q,settings:$})}],className:"bwf-accordion"})))}},256:function(e,t,n){},259:function(e,t,n){"use strict";var r=n(0),a=n(3),o=n.n(a),c=(n(256),n(266)),i=(n(9),n(8)),l=n(1),u=n(2);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=function(e){var t=e.groupID,n=e.items,a=e.className,s=void 0===a?"":a,b=e.sortable,y=e.groupData,m=e.handleClick,O=e.actions,g=e.handleIcons,j=e.openedTabs,v=(void 0===j&&u.noop,e.openedKeys),w=e.setOpenedKeys,h=e.returnProps,E=void 0!==h&&h,S=p(Object(r.useState)(v||[0]),2),k=S[0],_=S[1],P={};n.forEach((function(e){P[e.key]=Object(r.createRef)()})),Object(r.useEffect)((function(){void 0!==v&&_(v)}),[v]),Object(r.useEffect)((function(){void 0!==w&&w(k)}),[k]),Object(r.useEffect)((function(){var e=Object.keys(P)[0],t=function(t){jQuery(P[t].current).on("click",(function(n){var r=Object(u.isString)(n.target.className)&&n.target.className.split(" ");if(r&&!r.includes("components-form-toggle__input")&&!r.includes("components-toggle-control__label")){var a=jQuery(this).parents(".bwf-c-s-collapsible");t!==e||a.hasClass("bwf-accordion-closed")?t===e&&a.hasClass("bwf-accordion-closed")?(a.find(".bwf-c-s-full").stop().slideDown(400),a.removeClass("bwf-accordion-closed")):a.hasClass("bwf-accordion-closed")?(a.find(".bwf-c-s-full").stop().slideUp(400),a.removeClass("bwf-accordion-closed")):(a.find(".bwf-c-s-full").stop().slideDown(400),a.addClass("bwf-accordion-closed")):(a.find(".bwf-c-s-full").stop().slideUp(400),a.addClass("bwf-accordion-closed"))}}))};for(var n in P)t(n)}),[]);var I=Object(c.e)((function(){return Object(r.createElement)(i.a,{icon:"menu"})}));return Object(r.createElement)("div",{className:"bwf-accordian-list"},n&&n.map((function(e,n){return e.hasOwnProperty("key")?Object(r.createElement)("div",{key:e.key,"data-accordion":n,className:s+" bwf-c-s-collapsible"},Object(r.createElement)("div",{className:"bwf-c-s-heading",ref:P[e.key],onClick:function(e){-1===k.indexOf(n)?_((function(e){return[].concat(d(e),[n])})):setTimeout((function(){_((function(e){return e.filter((function(e){return e!==n}))}))}),400)}},b&&Object(r.createElement)(I,null),Object(r.createElement)("div",{className:"bwf-accordion-label-elm"},e.label),O&&O.map((function(e){return e.hasOwnProperty("key")?Object(r.createElement)("a",{onClick:function(n){n.preventDefault(),m(e.key,t,"group",0,y)},href:"",key:e.key,className:"bwf-accordion-"+e.class},Object(l.__)(null==e?void 0:e.label,"funnel-builder")):null})),Object(r.createElement)("div",{className:"bwf-c-s-icon"},"plus-minus"===g?Object(r.createElement)(i.a,{icon:k.includes(n)?"minus":"plus-3"}):Object(r.createElement)(i.a,{icon:k.includes(n)?"angle-up":"angle-down",width:"16",height:"18"}))),Object(r.createElement)("div",{className:"bwf-c-s-full bwf-c-s-allow-edit bwf-accordion bwf-hide",style:f({},k.includes(n)&&{display:"block"})},e.hint,o.a.isValidElement(e.display)?o.a.cloneElement(e.display,E?{isOpened:k.includes(n)}:{}):e.display)):null})))};O.defaultProps={items:[{key:"",label:"",display:Object(r.createElement)("p",null)}]},t.a=O},261:function(e,t,n){"use strict";var r=n(0),a=(n(273),n(8));function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.children,n=e.status,c=void 0===n?"error":n,i=(e.onRemove,e.isDismissible,e.className),l=void 0===i?"":i,u=o(Object(r.useState)(!1),2),s=u[0];u[1];return!s&&Object(r.createElement)("section",{className:"bwf-custom-notice ".concat(c," ").concat(l)},Object(r.createElement)("div",{className:"bwf-flex bwf--g12 bwf--align-start"},Object(r.createElement)(a.a,{icon:"info",color:"success"===c?"#09B29C":"warning"===c?"#FFC65C":"info"===c?"#353030":"#E15334"}),Object(r.createElement)("div",{className:"bwf--align-center"},t)))}},273:function(e,t,n){},412:function(e,t,n){}}]);