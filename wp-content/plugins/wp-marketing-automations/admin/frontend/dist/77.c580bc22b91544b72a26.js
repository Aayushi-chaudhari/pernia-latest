(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1134:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(248),o=n(10),i=n.n(o),c=n(5),l=n(2),s=n(4),u=n(265),p=n(68),b=n(796),f=n(3);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=e.campaignId,n=b.a.getCampaignData(),o=n&&n.type?parseInt(n.type):1,m=v(Object(r.useState)(!1),2),d=m[0],O=m[1],w=v(Object(r.useState)([]),2),j=w[0],I=w[1],A=v(Object(r.useState)(!1),2),S=A[0],_=A[1],k=v(Object(r.useState)(!1),2),E=k[0],P=(k[1],v(Object(r.useState)(!1),2)),L=P[0],C=P[1],F=v(Object(r.useState)({}),2),R=F[0],x=F[1],D=Object(r.useRef)(new AbortController),T=R.body,M=R.subject,N=R.type,U=void 0===N?"rich":N,H=R.utm,q=void 0===H?{}:H,J=R.preheader,B=(n||{}).data,G=(B=void 0===B?{}:B).content,Y=function(){var e,n=(e=regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,i()({method:"GET",path:Object(c.m)("/broadcast/".concat(t,"?ab_mode=1")),signal:D.current.signal});case 4:"result"in(n=e.sent)&&I(n.result),O(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),"AbortError"===e.t0.name?console.log(e.t0.message):(I([]),O(!1));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){g(o,r,a,i,c,"next",e)}function c(e){g(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();Object(r.useEffect)((function(){return Y(),function(){D.current.abort()}}),[]);var $=[1===o?{key:"subject",label:"Subject",isLeftAligned:!0}:{},{key:"sent",label:"Sent",isLeftAligned:!1,cellClassName:"bwf-col-center"},1===o?{key:"open",label:"Open Rate",isLeftAligned:!1,cellClassName:"bwf-col-center"}:{},{key:"click",label:"Click Rate",isLeftAligned:!1,cellClassName:"bwf-col-center"},Object(c.yb)()?{key:"conversion",label:"Conversions",isLeftAligned:!1,cellClassName:"bwf-col-center"}:{},{key:"show-template",label:"",isLeftAligned:!0,cellClassName:"bwf-col-center"}],z=function(e){if(!(Array.isArray(G)&&G.length>0))return!1;var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}(G);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r&&r.template_id&&parseInt(r.template_id)===parseInt(e))return r}}catch(e){n.e(e)}finally{n.f()}return!1},K=function(e){if(!e)return"-";var t=z(parseInt(e));return 1===o&&t.subject?t.subject:"-"},Q=function(e,t){!function(e){var t=z(parseInt(e));if(t){var n="",a=!0;3==o&&t.hasOwnProperty("whatsAppImage")&&t.whatsAppImage&&t.hasOwnProperty("whatsAppImageSetting")&&t.whatsAppImageSetting.hasOwnProperty("position")&&!Object(f.isEmpty)(t.whatsAppImageSetting.position)&&t.whatsAppImageSetting.hasOwnProperty("imageURL")&&!Object(f.isEmpty)(t.whatsAppImageSetting.imageURL)&&(n="before"===t.whatsAppImageSetting.position?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("img",{src:t.whatsAppImageSetting.imageURL,width:50,height:50}),Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:t.body}})):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:t.body}}),Object(r.createElement)("img",{src:t.whatsAppImageSetting.imageURL,width:50,height:50})),a=!1),a&&(n=Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:"editor"===t.type?t.editor.body:t.body}})),x(y(y({},t),{},{body:n}))}else C(Object(l.__)("Content attached to this template not found","wp-marketing-automations"));_(!0)}(t),e.preventDefault()},V=Object(p.a)(Object(c.Y)()).formatAmount,W=function(e){return parseFloat(e.revenue)>0?Object(r.createElement)(r.Fragment,null,parseInt(e.conversions)>0?parseInt(e.conversions)+" ( "+V(parseFloat(e.revenue))+" )":V(parseFloat(e.revenue))):" - "},X=function(e){var t=parseFloat(e.open_rate)?parseFloat(e.open_rate).toFixed(2):"0.00";return(parseInt(e.open_count)?parseInt(e.open_count):0)>0?"".concat(t,"%"):"-"},Z=function(e){var t=parseFloat(e.click_rate)?parseFloat(e.click_rate).toFixed(2):"0.00";return(parseInt(e.click_count)?parseInt(e.click_count):0)>0?"".concat(t,"%"):"-"},ee=Array.isArray(j)&&j.length>0?j.map((function(e){return[1===o?{display:K(e.tid),value:K(e.tid)}:{},{display:e.sent?e.sent:"-",value:e.sent},1===o?{display:X(e),value:e.open_rate}:{},{display:Z(e),value:e.click_rate},Object(c.yb)()?{display:parseInt(e.conversions)>0?W(e):"-",value:[e.conversions,e.revenue]}:{},{display:Object(r.createElement)(s.Button,{icon:"visibility",onClick:function(t){return Q(t,parseInt(e.tid))}}),value:e.tid}]})):[];return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.a,{isLoading:d,title:Object(l.__)("Details","wp-marketing-automations"),rows:ee,headers:$,query:{page:1},rowsPerPage:3,totalRows:3,showMenu:!1,emptyMessage:Object(l.__)("No stats available","wp-marketing-automations")}),Object(r.createElement)(u.a,{isOpen:S,isLoading:E,onRequestClose:function(){return _(!1)},error:L,subject:M,body:T,type:U,sourceType:2,mode:o,utm:q,preHeader:J}))}}}]);