(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1181:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(4),o=n(5),c=n(8),i=n(2),u=n(92),s=n(252),l=n(10),f=n.n(l),b=n(815),m=n(3),p=n(15);function O(t,e,n,r,a,o,c){try{var i=t[o](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,a)}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var j=function(t){var e=t.onCloseModal,n=(Object(p.i)(),Object(r.useContext)(o.d)),c=g(Object(r.useState)(!1),2),u=c[0],s=c[1],l=g(Object(r.useState)(""),2),d=l[0],j=l[1],y=g(Object(r.useState)(""),2),h=y[0],v=y[1],w=Object(b.a)().setSingleBulkActionValue;Object(r.useEffect)((function(){s(!1),v(""),j("")}),[]);var k=function(){var t,e=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),j(""),t.prev=2,t.next=5,f()({path:Object(o.m)("/bulk-action/"),method:"POST",data:{title:h,only_title:!0}}).then((function(t){200==t.code&&(Object(o.F)()||(bwfcrm_contacts_data.first_bulk_action_id=1),n("Bulk Action created"),w("listData",{title:h,status:0}),Object(p.k)({path:"/bulk-action/"+t.result.id},"/",{}))})).catch((function(t){throw Error(Object(o.j)(null==t?void 0:t.message))}));case 5:t.next=11;break;case 7:t.prev=7,t.t0=t.catch(2),j(t.t0.message),s(!1);case 11:Object(o.gb)(n,1e3);case 12:case"end":return t.stop()}}),t,null,[[2,7]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(t){O(o,r,a,c,i,"next",t)}function i(t){O(o,r,a,c,i,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),E=function(){Object(m.isEmpty)(h)?j(Object(i.__)("Name is required.","wp-marketing-automations-crm")):(j(""),k())};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.Modal,{title:Object(i.__)("Add Bulk Action","wp-marketing-automations-crm"),className:"bwf-admin-modal bwf-admin-modal-squeezy",onRequestClose:function(){return e()}},Object(r.createElement)("div",{className:"bwf-form-fields",onKeyPress:function(t){"Enter"==t.key&&E()}},d&&Object(r.createElement)(a.Notice,{status:"error",onRemove:function(){return j("")}},d),Object(r.createElement)(a.TextControl,{placeholder:Object(i.__)("Enter bulk action name","wp-marketing-automations-crm"),autoFocus:!0,label:Object(i.__)("Name","wp-marketing-automations-crm"),value:h,onChange:function(t){return v(t)},disabled:u}),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)("div",{className:"bwf_text_right bwf-form-buttons"},Object(r.createElement)(a.Button,{onClick:function(){return e()},className:"bwf-cancel-btn",disabled:u},Object(i.__)("Cancel","wp-marketing-automations-crm")),Object(r.createElement)(a.Button,{isPrimary:!0,onClick:function(){E()},isBusy:u},Object(i.__)("Add","wp-marketing-automations-crm"))))))},y=n(248),h=n(135),v=n(59),w=n(91),k=n(16),E=n(27),_=n(32),S=n.n(_),P=n(115),C=n.n(P),A=n(31),x=n.n(A),I=n(14),D=n.n(I),N=n(17);function R(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return B(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function L(t,e,n,r,a,o,c){try{var i=t[o](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,a)}var T={name:"bulk-action",className:"bwf-search-bwf-tags-result",options:function(t){return(e=regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={search:e,limit:10,offset:0},t.next=3,f()({path:Object(o.m)("/bulk-actions?"+Object(N.stringify)(n)),method:"GET"});case 3:return r=t.sent,a=x()(r,"result")?r.result:[],S()(a)||(a=a.map((function(t){return{key:String(t.ID),name:t.title,label:t.title}}))),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})),n=function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(t){L(o,r,a,c,i,"next",t)}function i(t){L(o,r,a,c,i,"throw",t)}c(void 0)}))},function(t){return n.apply(this,arguments)})(t);var e,n},isDebounced:!0,getOptionIdentifier:function(t){return t.key},getOptionKeywords:function(t){return[t.label]},getFreeTextOptions:function(t,e){var n,a=R(e);try{for(a.s();!(n=a.n()).done;){if(n.value.value.label.toLowerCase()===t.toLowerCase())return[]}}catch(t){a.e(t)}finally{a.f()}return[{key:"name",label:Object(r.createElement)("span",{key:"name",className:"bwf-search-result-name"},D()({mixedString:Object(i.__)("Search all bulk actions with name {{query /}}","wp-marketing-automations-crm"),components:{query:Object(r.createElement)("strong",{className:"components-form-token-field__suggestion-match"},t)}})),value:{key:"0",label:t}}]},getOptionLabel:function(t,e){var n=Object(o.i)(t.label,e)||{};return Object(r.createElement)("span",{key:"name",className:"bwf-search-result-name","aria-label":t.label},Object.keys(n).length>0?Object(r.createElement)(r.Fragment,null,n.suggestionBeforeMatch,Object(r.createElement)("strong",{className:"components-form-token-field__suggestion-match"},n.suggestionMatch),n.suggestionAfterMatch):t.label)},getOptionCompletion:function(t){return t}};function M(t,e,n,r,a,o,c){try{var i=t[o](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,a)}var q=function(t){var e=t.query,n=e.hasOwnProperty("s")?e.s:"",a=S()(n)?[]:[{key:n,label:Object(i.__)("Search Bulk Action: ","wp-marketing-automations-crm")+n,bwfLabelSource:"bwfcrm_lists",isSearchTerm:!0}],o=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){var r,a,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(C()(n)){t.next=2;break}return t.abrupt("return");case 2:if(S()(n)||(r=n[n.length-1],(n=[])[0]=r),a=n.find((function(t){return x()(t,"key")})),!(!Object(m.isUndefined)(a)&&n.length>0&&n[0].hasOwnProperty("key")&&parseInt(n[0].key)>0)){t.next=7;break}return Object(p.k)({path:"/bulk-action/"+n[0].key},"/",e),t.abrupt("return");case 7:if(o=Object(m.isUndefined)(a)?void 0:a.label,c=x()(e,"s")&&!S()(e.s)?e.s:"",o!==c){t.next=11;break}return t.abrupt("return");case 11:Object(p.k)({s:o},"/",e);case 12:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(t){M(o,r,a,c,i,"next",t)}function i(t){M(o,r,a,c,i,"throw",t)}c(void 0)}))});return function(t){return n.apply(this,arguments)}}();return Object(r.createElement)(E.a,{autocompleter:T,multiple:!1,allowFreeTextSearch:!0,inlineTags:!0,selected:a,onChange:o,placeholder:Object(i.__)("Search by name","wp-marketing-automations-crm"),showClearButton:!0,disabled:!1})},U=n(134),F=n(820),G=n(204),V=n(803);function $(t,e,n,r,a,o,c){try{var i=t[o](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,a)}var z=function(t){var e=t.isOpen,n=t.links,a=t.onSuccess,c=t.onError,u=t.onRequestClose,s=Object(V.a)(function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()({path:Object(o.m)("/bulk-actions/delete"),method:"DELETE",data:{ids:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(t){$(o,r,a,c,i,"next",t)}function i(t){$(o,r,a,c,i,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){setTimeout((function(){return s.reset()}),2500),a&&a()},onError:function(){c&&c()}});return Object(r.createElement)(h.a,{modalTitle:"Delete Bulk Action",deleteEntityName:1===n.length?n[0].title:"".concat(n.length," bulk actions"),confirmText:Object(i.__)("Are you sure you want to delete the bulk actions?","wp-marketing-automations-crm"),confirmButtonText:Object(i.__)("Delete","wp-marketing-automations-crm"),cancelButtonText:Object(i.__)("Cancel","wp-marketing-automations-crm"),onConfirm:function(){return s.mutate(n.map((function(t){return t.ID})))},isLoading:s.isLoading,successMessage:s.isSuccess&&Object(i.__)("Bulk Actions Deleted!","wp-marketing-automations-crm"),errorMessage:s.isError&&(s.error&&s.error.message?s.error.message:Object(i.__)("Unable to delete bulk actions","wp-marketing-automations-crm")),onRequestClose:function(){return!!u&&u()},isOpen:e,isDelete:!0})};function H(){return(H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function J(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Q=[{id:"delete",icon:"trash",hint:Object(i.__)("Delete Links","wp-marketing-automations-crm")}],W=function(t){var e=t.floatingBarProps,n=void 0===e?{}:e,a=t.resetSelection,o=t.onSuccess,c=J(Object(r.useState)([]),2),i=c[0],u=c[1],s=J(Object(r.useState)(!1),2),l=s[0],f=s[1],b=function(){a&&a(),u([])},m=Object(r.useCallback)((function(t,e){switch(t){case"delete":u(e),f(!0)}}),[]);return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(G.a,H({actions:Q,onAction:m},n)),Object(r.createElement)(z,{links:i,isOpen:l,onSuccess:function(){o&&o("delete",i),b()},onError:b,onRequestClose:function(){return f(!1)}}))},X=n(93),Y=n(139);function Z(t,e,n,r,a,o,c){try{var i=t[o](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,a)}function tt(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(t){Z(o,r,a,c,i,"next",t)}function i(t){Z(o,r,a,c,i,"throw",t)}c(void 0)}))}}function et(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(t,e)||ot(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach((function(e){at(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ot(t,e){if(t){if("string"==typeof t)return ct(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ct(t,e):void 0}}function ct(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var it=function(t){var e=t.selected,n=Object(p.i)(),u=Object(r.useContext)(o.d),s=Object(U.a)().setActiveMultiple,l={all:"",ongoing:1,completed:2,paused:3},O={0:"Draft",1:"Ongoing",2:"Completed",3:"Paused"},g={0:"bwf-tags bwf-tag-gray",1:"bwf-tags bwf-tag-orange",2:"bwf-tags bwf-tag-green",3:"bwf-tags bwf-tag-red"};Object(r.useEffect)((function(){Object(o.g)(Object(i.__)("Bulk Actions","wp-marketing-automations-crm"))}),[]);var d=Object(Y.a)().getPageCountData,j=Object(U.a)().setPageCountData,E=d();Object(r.useEffect)((function(){s({leftNav:"bulk-actions",rightNav:e})}),[e]);var _=Object(b.a)(),S=_.fetchAll,P=_.setBulkActionListValues,C=_.setSingleBulkActionValue,A=Object(F.a)(),x=A.getLoading,I=A.getAllLists,D=A.getTotalCount,N=A.getPageOffset,R=A.getPerPageCount,B=A.getPageNumber,L=A.getActions,T=A.getCountData,M=A.getStatusCount,V=I(),$=N(),z=R(),H=x(),J=D(),K=B(),Q=L(),Z=T(),nt=M(),at=nt.all,ct=void 0===at?0:at,it=nt.ongoing,ut=void 0===it?0:it,st=nt.completed,lt=void 0===st?0:st,ft=nt.paused,bt=void 0===ft?0:ft,mt=Object(r.useMemo)((function(){var t={};if(Array.isArray(V)){var e,n=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=ot(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}(V);try{for(n.s();!(e=n.n()).done;){var r=e.value;t[r.ID]=r}}catch(t){n.e(t)}finally{n.f()}}return t}),[V]);Object(r.useEffect)((function(){j(rt(rt({},E),Z))}),[J,H]);var pt=Object(G.b)(mt),Ot=pt.singleSelectProps,gt=pt.selectAllProps,dt=pt.floatingBarProps,jt=pt.resetSelection;Object(r.useEffect)((function(){S(n,$,z,l.hasOwnProperty(e)?l[e]:"")}),[$,z,n.s,e]);var yt=et(Object(r.useState)({loading:!1,status:!1}),2),ht=yt[0],vt=yt[1],wt=function(){var t=tt(regeneratorRuntime.mark((function t(r,a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return vt(rt(rt({},a),{},{status:!0})),t.prev=1,t.next=4,f()({path:Object(o.m)("/bulk-actions/delete"),method:"DELETE",data:{ids:[r]}}).then((function(t){if(200!==t.code)throw Error(Object(o.j)(null==t?void 0:t.message));vt({status:!1}),vt({}),u(t.message),S(n,$,z,l.hasOwnProperty(e)?l[e]:"")})).catch((function(t){throw Error(Object(o.j)(null==t?void 0:t.message))}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),vt({status:!0,error:t.t0.message?t.t0.message:Object(i.__)("Error in deleting bulk action","wp-marketing-automations-crm")});case 9:Object(o.gb)(u,2e3);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e,n){return t.apply(this,arguments)}}(),kt=function(){var t=tt(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(Object(i.__)("Cloning…","wp-marketing-automations")),t.prev=1,t.next=4,f()({path:Object(o.m)("/bulk-action/".concat(r,"/clone")),method:"GET"}).then((function(t){200==t.code?(u(t.message),setTimeout((function(){S(n,0,z,l.hasOwnProperty(e)?l[e]:"")}),1e3)):u(t.message)}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),u(t.t0.message);case 9:Object(o.gb)(u,2e3);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),Et=function(){var t=tt(regeneratorRuntime.mark((function t(r,a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(Object(i.__)("Updating Status…","wp-marketing-automations")),t.prev=1,t.next=4,f()({path:Object(o.m)("/bulk-action/".concat(r,"/update-status")),method:"POST",data:{status:a}}).then((function(t){200==t.code?(u("Status Updated"),setTimeout((function(){S(n,0,z,l.hasOwnProperty(e)?l[e]:"")}),1e3)):u(t.message)}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),u(t.t0.message);case 9:Object(o.gb)(u,2e3);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e,n){return t.apply(this,arguments)}}(),_t=function(t){return Object(r.createElement)(v.a,{label:Object(i.__)("Quick Actions","wp-marketing-automations-crm"),menuPosition:"bottom right",renderContent:function(e){var n=e.onToggle;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(w.a,{isClickable:!0,onInvoke:function(){C("listData",t),Object(p.k)({path:"/bulk-action/"+parseInt(t.ID)},"/",{}),n()}},Object(r.createElement)(k.a,{justify:"flex-start"},Object(r.createElement)(k.c,null,Object(r.createElement)(c.a,{icon:"edit"})),Object(r.createElement)(k.c,null,Object(i.__)("Edit","wp-marketing-automations-crm")))),3===parseInt(t.status)&&Object(r.createElement)(w.a,{isClickable:!0,onInvoke:function(){Et(t.ID,1),n()}},Object(r.createElement)(k.a,{justify:"flex-start"},Object(r.createElement)(k.c,null,Object(r.createElement)(c.a,{icon:"play"})),Object(r.createElement)(k.c,null,Object(i.__)("Unpause","wp-marketing-automations")))),1===parseInt(t.status)&&Object(r.createElement)(w.a,{isClickable:!0,onInvoke:function(){Et(t.ID,3),n()}},Object(r.createElement)(k.a,{justify:"flex-start"},Object(r.createElement)(k.c,null,Object(r.createElement)(c.a,{icon:"pause"})),Object(r.createElement)(k.c,null,Object(i.__)("Pause","wp-marketing-automations")))),Object(r.createElement)(w.a,{isClickable:!0,onInvoke:function(){kt(parseInt(t.ID)),n()}},Object(r.createElement)(k.a,{justify:"flex-start"},Object(r.createElement)(k.c,null,Object(r.createElement)(c.a,{icon:"duplicate"})),Object(r.createElement)(k.c,null,Object(i.__)("Clone","wp-marketing-automations-crm")))),Object(r.createElement)(w.a,{isClickable:!0,onInvoke:function(){var e={status:!0,deleteEntityName:t.title,buttonConfirm:Object(i.__)("Confirm","wp-marketing-automations"),buttonCancel:Object(i.__)("Cancel","wp-marketing-automations"),isDelete:!0};vt(rt(rt({},e),{},{onConfirm:function(){return wt(t.ID,e)}})),n()}},Object(r.createElement)(k.a,{justify:"flex-start"},Object(r.createElement)(k.c,null,Object(r.createElement)(c.a,{icon:"trash"})),Object(r.createElement)(k.c,null,Object(i.__)("Delete","wp-marketing-automations-crm")))))}})},St=[{key:"select_link",label:Object(r.createElement)(a.CheckboxControl,gt),isLeftAligned:!1,required:!0,cellClassName:"bwf-col-action bwf-w-45"},{key:"actions",label:"",isLeftAligned:!1,cellClassName:"bwf-col-action bwf-w-45"},{key:"name",label:Object(i.__)("Name","wp-marketing-automations-crm"),isLeftAligned:!0,cellClassName:"bwf-w-210"},{key:"created_on",label:Object(i.__)("Created On","wp-marketing-automations-crm"),isLeftAligned:!0},{key:"contacts",label:Object(i.__)("Contacts","wp-marketing-automations-crm"),isLeftAligned:!0,cellClassName:"bwf-w-210"},{key:"action",label:Object(i.__)("Actions","wp-marketing-automations-crm"),isLeftAligned:!0,cellClassName:"bwf-w-300"},{key:"status",label:Object(i.__)("Status","wp-marketing-automations-crm"),isLeftAligned:!0,cellClassName:"bwf-w-150 bwf-col-center"}],Pt=function(t){return Object(r.createElement)("a",{href:"admin.php?page=autonami&path=/bulk-action/"+t.ID,type:"bwf-crm",className:"bwf-a-no-underline",onClick:function(e){e.preventDefault(),C("listData",t),Object(p.k)({path:"/bulk-action/"+parseInt(t.ID)},"/",n)}},Object(r.createElement)("b",null,t.title.charAt(0).toUpperCase()+t.title.slice(1)+" "))},Ct=function(t){if(t.hasOwnProperty("actions")&&!Object(m.isEmpty)(t.actions)){var e=t.actions,n="",a=[];return Object.keys(e).map((function(t){Q.hasOwnProperty(t)&&(Object(m.isEmpty)(n)&&(n=Q[t]),a.push(Object(r.createElement)("span",{key:t},Q[t])))})),Object(m.isEmpty)(n)&&Object(m.isEmpty)(a)?"-":Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-table-v-center"},Object(r.createElement)("span",null,n),!Object(m.isEmpty)(a)&&a.length>1&&Object(r.createElement)(X.a,{items:a})))}return"-"},At=V.map((function(t){return[{display:Ot.hasOwnProperty(t.ID)?Object(r.createElement)(a.CheckboxControl,Ot[t.ID]):Object(r.createElement)(r.Fragment,null),value:""},{display:_t(t),value:"action"},{display:t.hasOwnProperty("title")?Pt(t):"-",value:""},{display:t.hasOwnProperty("created_at")?Object(o.O)(t.created_at):"-",value:""},{display:t.hasOwnProperty("count")?t.count:"-",value:""},{display:Ct(t),value:""},{display:t.hasOwnProperty("status")&&O.hasOwnProperty(t.status)?Object(r.createElement)("span",{className:g[t.status]},O[t.status]):"-",value:""}]})),xt=function(t){t!==z&&P("limit",t)};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.ButtonGroup,{className:"bwf-btn-group-tabs"},Object(r.createElement)(a.Button,{isPrimary:e&&"all"===e,isSecondary:e&&"all"!==e,onClick:function(){return Object(p.k)({path:"/bulk-actions/"},"/",n)}},Object(i.__)("All","wp-marketing-automations"),parseInt(ct)>0?Object(r.createElement)("span",{className:"bwf-crm-btn-group-count"},parseInt(ct)):""),Object(r.createElement)(a.Button,{isPrimary:e&&"ongoing"===e,isSecondary:e&&"ongoing"!==e,onClick:function(){return Object(p.k)({path:"/bulk-actions/ongoing"},"/",n)}},Object(i.__)("Ongoing","wp-marketing-automations"),parseInt(ut)>0?Object(r.createElement)("span",{className:"bwf-crm-btn-group-count"},parseInt(ut)):""),Object(r.createElement)(a.Button,{isPrimary:e&&"completed"===e,isSecondary:e&&"completed"!==e,onClick:function(){return Object(p.k)({path:"/bulk-actions/completed"},"/",n)}},Object(i.__)("Completed","wp-marketing-automations"),parseInt(lt)>0?Object(r.createElement)("span",{className:"bwf-crm-btn-group-count"},parseInt(lt)):""),Object(r.createElement)(a.Button,{isPrimary:e&&"paused"===e,isSecondary:e&&"paused"!==e,onClick:function(){return Object(p.k)({path:"/bulk-actions/paused"},"/",n)}},Object(i.__)("Paused","wp-marketing-automations"),parseInt(bt)>0?Object(r.createElement)("span",{className:"bwf-crm-btn-group-count"},parseInt(bt)):"")),Object(r.createElement)("div",{className:"bwf_clear_20"}),Object(r.createElement)(y.a,{className:"bwf-link-table has-search",title:"",rows:At,headers:St,query:{paged:K},rowsPerPage:z,totalRows:J,isLoading:H,onPageChange:function(t,e){P("offset",(t-1)*z)},onQueryChange:function(t){return"per_page"!==t?function(){}:xt},showMenu:!1,rowHeader:!0,actions:[Object(r.createElement)(q,{key:"search",query:n})],emptyMessage:Object(i.__)("No bulk action found.","wp-marketing-automations-crm")}),Object(r.createElement)(h.a,{modalTitle:Object(i.__)("Delete Bulk Action","wp-marketing-automations"),content:ht.content,deleteEntityName:ht.deleteEntityName,confirmText:ht.confirmText,confirmButtonText:ht.buttonConfirm,cancelButtonText:ht.buttonCancel,onConfirm:ht.onConfirm,isLoading:ht.loading,successMessage:ht.success,errorMessage:ht.error,onRequestClose:function(){return vt({status:!1})},isOpen:ht.status,isDelete:!ht.hasOwnProperty("isDelete")||ht.isDelete}),Object(r.createElement)(W,{floatingBarProps:dt,resetSelection:jt,onSuccess:function(){return S(n,0,z,l.hasOwnProperty(e)?l[e]:"")}}))},ut=n(67),st=n(800);function lt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return ft(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ft(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ft(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.default=function(t){var e=t.selected,n=lt(Object(r.useState)(!1),2),l=n[0],f=n[1],b=lt(Object(r.useState)(!1),2),m=b[0],p=b[1],O=Object(r.createElement)(a.Button,{isPrimary:!0,className:"bwf-display-flex",onClick:function(){Object(o.nb)()?p(!0):f(!0)}},!Object(o.nb)()&&Object(r.createElement)(c.a,{icon:"lock",size:"15"}),Object(r.createElement)("span",null,Object(i.__)("Add New Bulk Action","wp-marketing-automations-crm")));Object(st.a)("bulk_actions","","",O);var g=[{type:"icon",data:{class:"bwf-pb-gap",content:Object(r.createElement)(c.a,{icon:"zero-link-trigger",width:"90",height:"90"})}},{type:"content",data:{class:"bwf-h2 bwf-pb-10",content:Object(i.__)("No Bulk Actions Created","wp-marketing-automations-crm")}},{type:"content",data:{class:"bwf-h4-1 bwf-pb-gap",content:Object(i.__)("Bulk Action allows you to perform selected actions on filtered contacts.","wp-marketing-automations-crm")}},{type:"buttons",data:{buttons:[{text:Object(i.__)("Create Bulk Action","wp-marketing-automations-crm"),proCheck:!0,onClick:function(){Object(o.nb)()?p(!0):f(!0)}}]}}];return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(ut.a,null),Object(o.F)()&&Object(o.nb)()?Object(r.createElement)(it,{selected:e}):Object(r.createElement)(s.a,{data:g}),Object(r.createElement)(u.a,{isOpen:l,onRequestClose:function(){return f(!1)}}),m&&Object(r.createElement)(j,{onCloseModal:function(){return p(!1)}}))}},800:function(t,e,n){"use strict";var r=n(134),a=n(0),o=n(2);e.a=function(t,e,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},u=Object(r.a)(),s=u.setActiveMultiple,l=u.resetHeaderMenu,f=u.setL2NavType,b=u.setL2Nav,m=u.setBackLink,p=u.setL2Title,O=u.setL2Content,g=u.setBackLinkLabel,d=u.setPageHeader;return Object(a.useEffect)((function(){l(),!e&&f("menu"),!e&&b(i.contacts_nav),s({leftNav:"contacts",rightNav:t}),e&&m(e),e&&g("All Contacts"),n&&p(n),n&&"Export"===n&&(c&&O(c),f("menu"),b({export:{name:Object(o.__)("All","wp-marketing-automations"),link:"admin.php?page=autonami&path=/export"}})),!e&&c&&O(c),d("Contacts")}),[t,n]),!0}},803:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(12),a=n(7),o=n.n(a),c=n(25),i=n(13),u=n(26),s=n(253),l=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(u.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},n.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},n.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:void 0!==t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:Object(s.b)();this.currentResult=Object(r.a)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},n.notify=function(t){var e=this;c.a.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(n(52).a),f=n(251);function b(t,e,n){var a=o.a.useRef(!1),u=o.a.useState(0)[1],s=Object(i.k)(t,e,n),b=Object(f.b)(),m=o.a.useRef();m.current?m.current.setOptions(s):m.current=new l(b,s);var p=m.current.getCurrentResult();o.a.useEffect((function(){a.current=!0;var t=m.current.subscribe(c.a.batchCalls((function(){a.current&&u((function(t){return t+1}))})));return function(){a.current=!1,t()}}),[]);var O=o.a.useCallback((function(t,e){m.current.mutate(t,e).catch(i.i)}),[]);if(p.error&&m.current.options.useErrorBoundary)throw p.error;return Object(r.a)({},p,{mutate:O,mutateAsync:p.mutate})}},815:function(t,e,n){"use strict";var r=n(137),a=n(5);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}e.a=function(){var t=Object(r.a)("bulkActionsListData"),e=t.fetch,n=t.setStateProp,o=u(t,["fetch","setStateProp"]),i=Object(r.a)("singleBulkActionData"),s=i.fetch,l=i.setStateProp;return c(c({},o),{},{fetchAll:function(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=t.s,i={offset:n,limit:r,search:c,status:o};e("GET",Object(a.m)("/bulk-actions"),i)},setBulkActionListValues:function(t,e){n(t,e)},fetchSingleBulkAction:function(t){l("data",{}),s("GET",Object(a.m)("/bulk-action/".concat(t)))},setSingleBulkActionValue:function(t,e){l(t,e)}})}},820:function(t,e,n){"use strict";var r=n(136);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}e.a=function(){var t=Object(r.a)("bulkActionsListData"),e=t.getStateProp,n=i(t,["getStateProp"]),a=Object(r.a)("singleBulkActionData"),c=a.getStateProp,u=a.getLoading;return o(o({},n),{},{getAllLists:function(){return e("data")},getPageNumber:function(){return parseInt(e("offset"))/parseInt(e("limit"))+1},getPerPageCount:function(){return parseInt(e("limit"))},getPageOffset:function(){return parseInt(e("offset"))},getTotalCount:function(){return parseInt(e("total_count"))},getCountData:function(){return e("count_data")},getActions:function(){return e("actions")},getStatusCount:function(){return e("statusCount")},getSingleBulkActionLoad:function(){return u()},getSingleBulkActionData:function(){return c("data")},getActionList:function(){return c("actionList")},getActionSchemaList:function(){return c("actionSchema")},getActionGroup:function(){return c("groupData")},getlistData:function(){return c("listData")}})}}}]);