(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1148:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(818),r=n(290),i=n(2),s=n(10),c=n.n(s),l=n(3),u=n(5),b=n(135),f=n(67);function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){o=!0,r=t}finally{try{a||null==s.return||s.return()}finally{if(o)throw r}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}e.default=function(){Object(o.a)("general",!1,""),Object(u.g)("Settings");var t=Object(a.useContext)(u.d),e=bwfanParams,n=e.bwfan_global_settings_schema,s=void 0===n?{}:n,m=e.bwfan_global_settings,g=void 0===m?{}:m,_=d(Object(a.useState)(s),2),w=_[0],v=_[1],h=d(Object(a.useState)(g),2),p=h[0],y=h[1],O=d(Object(a.useState)({}),2),j=O[0],S=O[1],A=[];w.forEach((function(t){Array.isArray(t.tabs)&&t.tabs.forEach((function(t){Object(l.isNull)(t)||Array.isArray(t.fields)&&t.fields.forEach((function(t){t.required&&A.push({id:t.id,label:t.label})}))}))}));var k=function e(n,a,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=g.bwfan_sandbox_mode,l=void 0!==s&&s,b=n.bwfan_sandbox_mode,f=void 0!==b&&b;if(f!==l&&!r)return a(!1),void S({title:f?Object(i.__)("Enable Sandbox Mode?","wp-marketing-automations"):Object(i.__)("Disable Sandbox mode?","wp-marketing-automations"),content:f?Object(i.__)("You are about to enable sandbox mode. All active automation and ongoing broadcasts will be halted.","wp-marketing-automations"):Object(i.__)("You are about to disable sandbox mode. All active automation and ongoing broadcasts will start running again.","wp-marketing-automations"),status:!0,onConfirm:function(){a(!0),e(n,a,o,!0),S({})},onCancel:function(){a(!1)}});try{c()({path:Object(u.m)("/settings"),method:"POST",data:{bwfan_global_settings:n}}).then((function(e){if(200===e.code){t(e.message);var n=e.result;n&&(window.bwfanParams.bwfan_global_settings=o,window.bwfanParams.bwfan_global_settings_schema=n.schema,y(n.values),v(n.schema))}else t(e.message)})).catch((function(e){console.log(e),t(e.message)})).finally((function(){a(!1),Object(u.gb)(t,5e3)}))}catch(e){console.log(e),t(e.message),Object(u.gb)(t,5e3),a(!1)}},E=function(t){var e={};return A.forEach((function(n){Object(l.isEmpty)(t[n.id])&&(e[n.id]=n.label+Object(i.__)(" field is required !","wp-marketing-automations"))})),e};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(f.a,null),w.map((function(t){return Object(a.createElement)(r.a,{key:"setting-tab--"+t.key,fields:t.tabs,values:p,onSubmit:k,validate:E,setSettingFieldSchema:v})})),Object(a.createElement)(b.a,{modalTitle:j.title,deleteDescriptionText:j.content,confirmButtonText:Object(i.__)("Yes, I confirm","wp-marketing-automations-crm"),onConfirm:j.onConfirm,onCancel:j.onCancel,isLoading:!1,onRequestClose:function(){return S({status:!1})},isOpen:j.status,isDelete:!0}))}},818:function(t,e,n){"use strict";var a=n(134),o=n(0);e.a=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},s=Object(a.a)(),c=s.setActiveMultiple,l=s.resetHeaderMenu,u=s.setL2NavType,b=s.setL2Nav,f=s.setBackLink,d=s.setL2Title,m=s.setPageHeader,g=s.setL2Content;return Object(o.useEffect)((function(){l(),!e&&u("menu"),!e&&b(i.settings_nav),c({leftNav:"settings",rightNav:t}),e&&f(e),n&&d(n),m("Settings"),g(r)}),[t,n]),!0}}}]);