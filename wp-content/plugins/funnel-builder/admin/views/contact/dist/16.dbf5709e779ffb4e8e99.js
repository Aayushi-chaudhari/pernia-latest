(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{244:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),c=n(2),a=n(7),i=n.n(a),o=n(51),l=n(9),s=(n(270),n(26)),u=["label","className","selected","help","onChange","hideLabelFromVision","options","disabled"];function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function d(e){var t=e.label,n=e.className,a=e.selected,f=e.help,m=e.onChange,p=e.hideLabelFromVision,v=e.options,O=void 0===v?[]:v,j=e.disabled,y=void 0!==j&&j,h=(b(e,u),Object(o.useInstanceId)(d)),_="inspector-radio-control-".concat(h),w=function(e){return m(e.target.value)};return!Object(c.isEmpty)(O)&&Object(r.createElement)(l.BaseControl,{label:t,id:_,hideLabelFromVision:p,help:f,className:i()(n,"components-radio-control bwf-components-radio-control")},Object(r.createElement)("div",{className:"bwf-radio-control-inner"},O.map((function(e,t){return Object(r.createElement)("div",{key:"".concat(_,"-").concat(t),className:"components-radio-control__option"},Object(r.createElement)("input",{id:"".concat(_,"-").concat(t),className:"components-radio-control__input",type:"radio",name:_,value:e.value,onChange:w,checked:e.value===a,disabled:y||e.disabled||e.isPro,"aria-describedby":f?"".concat(_,"__help"):void 0}),e.isPro&&Object(r.createElement)(s.a,null),Object(r.createElement)("label",{htmlFor:"".concat(_,"-").concat(t)},e.label))}))))}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),c=n(2),a=n(7),i=n.n(a),o=n(51),l=n(9),s=(n(4),n(1)),u=n(61);n(277);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,c,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,c=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e){var t=e.label,n=void 0===t?"":t,a=e.id,d=void 0===a?"":a,f=e.value,m=e.onChange,p=void 0===m?c.noop:m,v=e.className,O=e.style,j=void 0===O?{}:O,y=e.isHover,h=e.hoverVal,_=void 0===h?"":h,w="inspector-color-".concat(Object(o.useInstanceId)(l.ColorPicker)),E=b(Object(r.useState)(!1),2),g=E[0],x=E[1],N=b(Object(r.useState)(),2),k=N[0],C=N[1],S=b(Object(r.useState)(0),2),A=S[0],P=S[1],I=y?Object(c.isArray)(f)?f:[f,_]:f,L=function(e){if(y){var t=I;return t[A]=e.hex,void p(t,{id:d})}p(e.hex,{id:d})},B=y?I[A]:I;return Object(r.createElement)("div",{className:i()("components-color-field",v),style:j},Object(r.createElement)("div",{className:"components-color-field-label-wrap"},n&&Object(r.createElement)("label",{className:"components-label components-color-field-label",htmlFor:w},n),y&&Object(r.createElement)(l.ButtonGroup,{className:"bwf-color-picker-modes"},Object(r.createElement)(l.Button,{className:i()("is-secondary-gray is-small",{"is-selected":0===A}),onClick:function(){return P(0)}},Object(s.__)("Default","funnel-builder")),Object(r.createElement)(l.Button,{className:i()("is-secondary-gray is-small",{"is-selected":1===A}),onClick:function(){return P(1)}},Object(s.__)("Hover","funnel-builder")))),Object(r.createElement)("div",{className:"component-color-field-inner"},Object(r.createElement)("span",{className:"component-color-indicator-wrap",onClick:function(){return x(!0)}},Object(r.createElement)(l.ColorIndicator,{colorValue:B,ref:C,className:i()({"is-empty":Object(c.isEmpty)(B)})}),Object(r.createElement)("span",{className:"indicator-text"},B||"Select")),g&&Object(r.createElement)(u.a,{position:"top right",onClose:function(){return x(!1)},anchor:k},Object(r.createElement)(l.ColorPicker,{color:B,onChangeComplete:L}),Object(r.createElement)(l.Button,{isLink:!0,className:"bwf-color-picker-reset-btn",onClick:function(){return L({hex:""})}},Object(s.__)("Reset","funnel-builder")))))}},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(0),c=n(9),a=n(51),i=n(2),o=n(7),l=n.n(o),s=(n(286),n(75)),u=n(26);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,c,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,c=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw c}}return a}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e){var t=e.label,n=e.className,o=e.value,m=e.help,p=e.options,O=void 0===p?[]:p,j=e.onBlur,y=(void 0===j&&i.noop,e.onChange),h=void 0===y?i.noop:y,_=e.onFocus,w=(void 0===_&&i.noop,e.disabled),E=e.showtooltip,g=void 0!==E&&E,x=e.tooltipmsg,N=void 0===x?"":x,k=f(Object(r.useState)(!0),2),C=k[0],S=k[1],A=Object(a.useInstanceId)(v);if(Object(i.isEmpty)(O))return null;var P="inspector-checklist-".concat(A);o=null!=o&&o?o:[];var I=l()("components-checklist",n),L=function(e){var t=d(o);!0===e.target.checked?o.includes(e.target.value)||t.push(e.target.value):t=o.filter((function(t){return t!==e.target.value})),h(t,{event:e}),S(!1)};return Object(r.createElement)(c.BaseControl,{label:t,id:P,help:m},Object(r.createElement)("div",{className:"component-checklist-option-wrap ".concat(I)},O.map((function(e,t){return Object(r.createElement)(s.a,{toolTipText:e.disable&&Object(r.createElement)("div",{className:"bwf-template-nav-item__tooltip-text"},N),visible:g&&e.disable||!1,size:280,iconSize:"auto",key:"".concat(P,"-").concat(t),position:"bottom right"},Object(r.createElement)("div",{key:"".concat(P,"-").concat(t),className:l()("bwf-checkbox-control")},Object(r.createElement)("span",{className:l()("bwf-checkbox-control-inner",{"bwf-checkbox-disabled":e.disable})},Object(r.createElement)("input",b({id:"".concat(P,"-").concat(t),type:"checkbox",value:e.value,onChange:e.disable?function(){}:L,checked:(n=o,c=e.value,!!Array.isArray(n)&&n.includes(c)),className:l()({"bwf-no-animation":C}),"aria-describedby":m?"".concat(P,"__help"):void 0},(w||e.isPro)&&{disabled:!0}))),e.isPro&&Object(r.createElement)(u.a,null),Object(r.createElement)("label",{htmlFor:"".concat(P,"-").concat(t)},e.label)));var n,c}))))}},270:function(e,t,n){},277:function(e,t,n){},286:function(e,t,n){},309:function(e,t,n){"use strict";var r=n(0),c=n(7),a=n.n(c),i=n(4),o=n(1),l=n(9),s=n(13),u=n.n(s),b=n(2),d=n(74),f=n(311),m=n(62),p=n(271),v=n(19),O=n(8),j=(n(345),n(50)),y=n(32);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=[Object(o.__)("New Features","funnel-builder"),Object(o.__)("New Add-ons & Integrations","funnel-builder"),Object(o.__)("World Class Support","funnel-builder"),Object(o.__)("Security Improvements","funnel-builder"),Object(o.__)("Wordpress Compatibility","funnel-builder"),Object(o.__)("Marketing & Payment Compatibility","funnel-builder")],g=function(e){var t=e.onclose,n=e.onAction,c=e.isLoading,a=void 0!==c&&c;return Object(r.createElement)(l.Modal,{className:"bwf-c-s-delete-model bwf-admin-modal bwf-admin-modal-small bwf-admin-modal-no-header bwf-alert-modal bwf-deactivate-modal",isDismissible:!1,onRequestClose:t},Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-custom-header bwf-flex bwf--space-between"},Object(r.createElement)("div",{className:"bwf-modal-title"},Object(o.__)("Deactivating License","funnel-builder")),Object(r.createElement)("div",{className:"bwf-modal-close bwf-cursor-pointer",title:Object(o.__)("Close"),onClick:function(){return t()}},Object(r.createElement)(O.a,{icon:"close",size:20}))),Object(r.createElement)("div",{className:"bwf-content bwf-mt-16"},Object(r.createElement)("span",null,Object(o.__)("You will lose access to the following active license benefits:","funnel-builder")),Object(r.createElement)("br",null),Object(r.createElement)("ul",null,E.map((function(e,t){return Object(r.createElement)("li",{key:"feature-".concat(t)},Object(r.createElement)(O.a,{icon:"cross-circle",color:y.DANGER_COLOR,size:"20"}),e)})))),Object(r.createElement)("div",{className:"wf_funnel_right_align bwf-mt-24"},Object(r.createElement)(l.Button,{className:"bwf-modal-cancel-btn bwf-strong ".concat(a?"bwf-is-active":""),onClick:function(){a||n()}},Object(r.createElement)("span",{style:_({},a&&{visibility:"hidden"})},Object(o.__)("Deactivate","funnel-builder")),a&&Object(r.createElement)(j.a,{color:"#0073aa",style:{position:"absolute"}})),Object(r.createElement)(l.Button,{isPrimary:!0,className:"bwf-btn-medium",onClick:function(){return t()},disabled:a},Object(o.__)("Cancel","funnel-builder")))))},x=n(12),N=n.n(x),k=n(28);function C(e,t,n,r,c,a,i){try{var o=e[a](i),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(r,c)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,c,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,c=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.id,n=e.label,c=e.license,s=void 0===c?"":c,j=e.setSettingFieldSchema,y=e.is_manually_deactivated,h=e.activated,_=e.expired,w=function(){return Object(b.isEmpty)(s)||h||_||y?Object(b.isEmpty)(s)||!_||y?!h||Object(b.isEmpty)(s)||y?y?"deactivated":"empty":"activated":"expired":"invalid"},E=function(e){var t=e||w();switch(t){case"activated":case"expired":case"invalid":return s.licence?"xxxxxxxxxxxxxxxxxxxxxxxxxx"+s.licence.substring(26):Object(b.isEmpty)(s.api_key)||"activated"!==t?"":s.api_key;default:return""}},x=Object(k.a)().setProData,A=Object(m.a)().setLiteBar,P=Object(f.a)().updateLicense,I=S(Object(r.useState)((function(){return E()})),2),L=I[0],B=I[1],D=S(Object(r.useState)({loading:!1,status:!1}),2),F=D[0],T=D[1],M=S(Object(r.useState)(""),2),z=M[0],R=M[1],Y=S(Object(r.useState)(!1),2),V=Y[0],G=Y[1],H=S(Object(r.useState)(!1),2),U=H[0],$=H[1],q=S(Object(r.useState)(!1),2),J=q[0],W=q[1],K=Object(p.a)().data;Object(r.useEffect)((function(){Object(b.size)(L)?(R(""),W(!0)):J&&!Object(b.size)(L)&&R(Object(o.__)("Please enter licence key","funnel-builder"))}),[L]);var Q=function(){var e,n=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return $(!0),e.prev=1,e.next=4,u()({path:Object(i.p)("/license/"),method:"POST",data:{name:t,action:"activated"!==w()?"activate":"deactivate",key:L}}).then((function(e){if(200===e.code){var t,n,c=e.name,a=e.license_data,i=void 0!==a&&a,l=e.license_exist,s=void 0===l?{}:l;e.pro_status,Object(b.isEmpty)(s)||(wffn_contacts_data.license_exist=s),x(e.lev),"activated"!==w()?(A(2),wffn_contacts_data.is_pro=1):(A(1),wffn_contacts_data.is_pro=0);var u=(null===(t=K.woofunnels_general_settings[0])||void 0===t||null===(n=t.tabs)||void 0===n?void 0:n.general).fields.map((function(e){return c===e.id&&(e.license=i,"activated"!==w()?(e.is_manually_deactivated=0,e.expired=0,e.activated=1,wffn_contacts_data.is_pro=1):(e.activated=0,e.is_manually_deactivated=1,wffn_contacts_data.is_pro=0)),e}));j(u),P(u),T({status:!0,loading:!1,content:Object(r.createElement)("div",{className:"bwf-t-center"},Object(r.createElement)("div",{className:"bwf-mt-8"},Object(r.createElement)(O.a,{icon:"check-circle",size:"72"})),Object(r.createElement)("div",{className:"bwf-licence-status"},"activated"!==w()?Object(o.__)("License Activated","funnel-builder"):Object(o.__)("Successfully Deactivated","funnel-builder")))}),$(!1),G(!1)}else 400===e.code&&($(!1),T({status:!0,error:e.error,hide:8e3}))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),$(!1),T({status:!0,error:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[1,6]])})),function(){var t=this,n=arguments;return new Promise((function(r,c){var a=e.apply(t,n);function i(e){C(a,r,c,i,o,"next",e)}function o(e){C(a,r,c,i,o,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}(),X=function(){switch(w()){case"activated":return!0;default:return!1}};Object(r.useEffect)((function(){"deactivated"===w()?B(E("deactivated")):"activated"===w()&&B(E("activated"))}),[w()]);var Z=E()===L&&Object(b.isEmpty)(z)&&Object(r.createElement)("p",{className:"hint"},Object(r.createElement)("span",{className:"bwfan-error"},e.activated?Object(o.__)("License expired on ","funnel-builder")+N()(null==s?void 0:s.expires).format(Object(i.O)()):Object(o.__)("You have consumed the limit of license usage","funnel-builder"),". "),Object(r.createElement)("span",{className:"is-reset-text"},Object(o.__)("Got New License? ","funnel-builder"),Object(r.createElement)("span",{className:"is-link",onClick:function(){return B("")}},Object(o.__)("Reset","funnel-builder"))));return Object(r.createElement)("div",{className:a()("bwf-components-licence")},n&&Object(r.createElement)("label",{className:"components-label"},n),Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-flex bwf--align-start bwf--g16"},Object(r.createElement)("div",{className:"bwf-flex bwf--align-start bwf-flex-column"},Object(r.createElement)(l.TextControl,{className:a()("bwf-license-text-input",{"bwf-error-border":Object(b.size)(z)||"expired"===w()&&E()===L}),placeholder:Object(o.__)("Enter license key here","funnel-builder"),disabled:X(),value:L,autoComplete:"off",onChange:function(e){return B(e)}}),Object(b.size)(z)?Object(r.createElement)("div",{className:"bwf-error-text"},z):null),Object(r.createElement)(v.a,{isSecondary:"empty"===w()||"deactivated"===w()||"expired"===w()||"invalid"===w(),isBusy:"activated"!==w()&&U,disabled:U,className:a()("bwf-ripple bwf-license-action-btn",{"is-inactive":"activated"===w()}),onClick:function(){return function(){if(Object(b.isEmpty)(L))return W(!0),void R(Object(o.__)("Please enter licence key","funnel-builder"));"activated"===w()?(W(!1),G(!0)):Q()}(s,y)}},function(){switch(w()){case"activated":return Object(o.__)("Deactivate","funnel-builder");default:return Object(o.__)("Activate","funnel-builder")}}())),function(){switch(w()){case"activated":return Object(r.createElement)("p",{className:"hint"},s.expires?Object(r.createElement)(r.Fragment,null,Object(o.__)("License Expires on ","funnel-builder"),N()(null==s?void 0:s.expires).format("MMMM D, YYYY")):Object(o.__)("Lifetime license","funnel-builder"));case"empty":case"deactivated":return Object(r.createElement)("div",{className:"hint bwf-content"},Object(o.__)("Already Purchased? Access your license key in your account. ","funnel-builder"),Object(r.createElement)("a",{href:"https://myaccount.funnelkit.com/",target:"_blank",rel:"noreferrer"},Object(o.__)("Login to your FunnelKit Account","funnel-builder")));case"expired":case"invalid":return Z}}()),Object(r.createElement)(d.a,{confirmText:F.confirmText,confirmButtonText:F.buttonConfirm,cancelButtonText:F.buttonCancel,onConfirm:F.onConfirm,isLoading:F.loading,successMessage:F.success,errorMessage:F.error,content:F.content,onRequestClose:function(){return T({status:!1})},isOpen:F.status,autoHide:F.hide,closeIcon:!0}),V&&Object(r.createElement)(g,{isLoading:U,onAction:function(){Q()},onclose:function(){return G(!1)}}))}},345:function(e,t,n){}}]);