(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1117:function(e,t,n){},1118:function(e,t,n){},1136:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(17),c=(n(1117),n(2)),o=n(6),i=n.n(o),s=n(3),u=n(10),l=n.n(u),b=n(4),m=n(16),f=n(248),p=n(59),O=n(91),g=n(5),d=n(27),j=n(32),h=n.n(j),y=n(115),w=n.n(y),v=n(31),_=n.n(v),E=n(15),k=n(14),P=n.n(k);function S(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}var C=function(e){return e.name},D={name:"tags",className:"bwf-search-bwf-tags-result",options:function(e){return(t=regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h()(t)){e.next=2;break}return e.abrupt("return",[]);case 2:return n={search:t,limit:5,offset:0},e.next=5,l()({path:Object(g.m)("/tags?"+Object(a.stringify)(n)),method:"GET"});case 5:return r=e.sent,e.abrupt("return",_()(r,"result")?r.result:[]);case 7:case"end":return e.stop()}}),e)})),n=function(){var e=this,n=arguments;return new Promise((function(r,a){var c=t.apply(e,n);function o(e){S(c,r,a,o,i,"next",e)}function i(e){S(c,r,a,o,i,"throw",e)}o(void 0)}))},function(e){return n.apply(this,arguments)})(e);var t,n},isDebounced:!0,getOptionIdentifier:function(e){return e.ID},getOptionKeywords:function(e){return[e.name]},getFreeTextOptions:function(e,t){return[{key:"name",label:Object(r.createElement)("span",{key:"name",className:"bwf-search-result-name"},P()({mixedString:Object(c.__)("All tags with names that include {{query /}}","wp-marketing-automations"),components:{query:Object(r.createElement)("strong",{className:"components-form-token-field__suggestion-match"},e)}})),value:{id:e,name:e,tags:t.map((function(e){return _()(e,"value")?e.value:e})),searchTerm:e}}]},getOptionLabel:function(e,t){var n=Object(g.i)(C(e),t)||{};return Object(r.createElement)("span",{key:"name",className:"bwf-search-result-name","aria-label":C(e)},n.suggestionBeforeMatch,Object(r.createElement)("strong",{className:"components-form-token-field__suggestion-match"},n.suggestionMatch),n.suggestionAfterMatch)},getOptionCompletion:function(e){return e}};function x(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}var T=function(e){var t=e.query,n=t.hasOwnProperty("s")?t.s:"",a=h()(n)?[]:[{key:n,label:Object(c.__)("Search Tag: ","wp-marketing-automations")+n,bwfLabelSource:"bwfcrm_tags",isSearchTerm:!0}],o=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var r,a,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w()(n)){e.next=2;break}return e.abrupt("return");case 2:if(h()(n)||(r=n[n.length-1],(n=[])[0]=r),a=n.find((function(e){return _()(e,"searchTerm")})),!(Object(s.isUndefined)(a)&&n.length>0&&n[0].hasOwnProperty("name"))){e.next=7;break}return Object(E.k)({s:n[0].name},"/manage/tags",t),e.abrupt("return");case 7:if(c=Object(s.isUndefined)(a)?void 0:a.searchTerm,o=_()(t,"s")&&!h()(t.s)?t.s:"",c!==o){e.next=11;break}return e.abrupt("return");case 11:Object(E.k)({s:c},"/manage/tags",t);case 12:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){x(c,r,a,o,i,"next",e)}function i(e){x(c,r,a,o,i,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();return Object(r.createElement)(d.a,{autocompleter:Object(g.nb)()?D:"",multiple:!1,allowFreeTextSearch:!0,inlineTags:!0,selected:a,onChange:o,placeholder:Object(c.__)("Search by name","wp-marketing-automations"),showClearButton:!0,disabled:!1})},I=n(136);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B=function(){var e=Object(I.a)("taglist"),t=e.getStateProp;return R(R({},M(e,["getStateProp"])),{},{getTags:function(){return t("tags")},getPageNumber:function(){return parseInt(t("offset"))/parseInt(t("limit"))+1},getPerPageCount:function(){return parseInt(t("limit"))},getTotalCount:function(){return parseInt(t("total"))},getCountData:function(){return t("countData")},getContactCountData:function(){return t("contactCountData")}})},L=n(137);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var V=function(){var e=Object(L.a)("taglist"),t=e.fetch,n=e.setStateProp;return F(F({},K(e,["fetch","setStateProp"])),{},{fetch:function(e,n,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=e.s,o=(e.page,e.filter,e.path,K(e,["s","page","filter","path"])),i={offset:n,limit:r,search:c,filters:o,get_wc:Object(g.yb)(),grab_totals:a};t("GET",Object(g.m)("/tags"),i)},setStateTagValues:function(e){n("tags",e)},setStateTagValuesByKey:function(e,t){n(e,t)}})},G=(n(1118),n(254),n(256),n(44),n(8)),z=n(800),H=n(139),J=n(134),Q=n(204),Y=n(803),$=n(135);function W(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function X(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){W(c,r,a,o,i,"next",e)}function i(e){W(c,r,a,o,i,"throw",e)}o(void 0)}))}}var Z=function(e){var t=e.isOpen,n=e.tasks,a=e.onSuccess,o=e.onError,i=e.onRequestClose,s=e.actionType,u=n?n.length:0,b=Object(Y.a)(function(){var e=X(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()({path:Object(g.m)("/bulk-action/tag"),method:"DELETE",data:{ids:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){setTimeout((function(){return b.reset()}),2500),a&&a()},onError:function(){o&&o()}}),m=function(){var e=X(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.mutate(n.map((function(e){return e.ID})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f={delete:{title:Object(c._n)("Delete Tag","Delete Tags",u,"wp-marketing-automations"),description:Object(r.createElement)(r.Fragment,null,Object(c.__)("You are about to delete ","wp-marketing-automations"),Object(c._n)("tag","tags",u,"wp-marketing-automations"),Object(c.__)(". This action cannot be undone. Cancel to stop, Delete to proceed.","wp-marketing-automations")),confirmBtn:Object(c.__)("Delete","wp-marketing-automations"),cancelBtn:Object(c.__)("Cancel","wp-marketing-automations"),successMsg:Object(c.__)("Bulk action executed successfully","wp-marketing-automations"),errorMsg:Object(c.__)("Unable to delete tag","wp-marketing-automations"),confirmDescription:Object(c.__)("This action is irreversible","wp-marketing-automations")}};return Object(r.createElement)($.a,{modalTitle:f.hasOwnProperty(s)&&f[s].hasOwnProperty("title")?f[s].title:Object(c._n)("Perform Actions","Perform Actions",u,"wp-marketing-automations"),deleteDescriptionText:f.hasOwnProperty(s)&&f[s].hasOwnProperty("description")?f[s].description:"",confirmButtonText:f.hasOwnProperty(s)&&f[s].hasOwnProperty("confirmBtn")?f[s].confirmBtn:Object(c.__)("Confirm","wp-marketing-automations"),cancelButtonText:f.hasOwnProperty(s)&&f[s].hasOwnProperty("cancelBtn")?f[s].cancelBtn:Object(c.__)("Cancel","wp-marketing-automations"),onConfirm:m,isLoading:b.isLoading,successMessage:b.isSuccess&&(f.hasOwnProperty(s)&&f[s].hasOwnProperty("successMsg")?f[s].successMsg:Object(c.__)("Actions Done!","wp-marketing-automations")),errorMessage:b.isError&&(b.error&&b.error.message?b.error.message:f.hasOwnProperty(s)&&f[s].hasOwnProperty("errorMsg")?f[s].errorMsg:Object(c.__)("Unable to perform action","wp-marketing-automations")),onRequestClose:function(){return!!i&&i()},isOpen:t,confirmDescription:f.hasOwnProperty(s)&&f[s].hasOwnProperty("confirmDescription")?f[s].confirmDescription:"",isDelete:!0})};function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var re=function(e){var t=e.floatingBarProps,n=void 0===t?{}:t,a=e.resetSelection,o=e.onSuccess,i=e.screenType,s=e.screenTypeId,u=e.automationId,l=te(Object(r.useState)([]),2),b=l[0],m=l[1],f=te(Object(r.useState)(!1),2),p=f[0],O=f[1],g=te(Object(r.useState)(""),2),d=g[0],j=g[1],h=function(){a&&a(),m([])};Object(r.useEffect)((function(){h()}),[i]);var y=Object(r.useCallback)((function(e,t){m(t),j(e),O(!0)}),[]);return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(Q.a,ee({actions:[{id:"delete",icon:"trash",hint:Object(c.__)("Delete","wp-marketing-automations")}],onAction:y},n)),Object(r.createElement)(Z,{tasks:b,isOpen:p,onSuccess:function(){o&&o(d,b),h()},onError:h,onRequestClose:function(){return O(!1)},screenType:i,screenTypeId:s,actionType:d,automationId:u}))},ae=n(92),ce=n(9);function oe(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function ie(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){oe(c,r,a,o,i,"next",e)}function i(e){oe(c,r,a,o,i,"throw",e)}o(void 0)}))}}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||me(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){if(e){if("string"==typeof e)return fe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(e,t):void 0}}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var pe=[{ID:25,name:"Dummy Tag",type:"2",created_at:n.n(ce)()().format(),updated_at:null,data:null}],Oe=function(e){var t=e.query,n=B(),o=V(),u=be(Object(r.useState)(!1),2),d=u[0],j=u[1],h=be(Object(r.useState)(!1),2),y=h[0],w=h[1],v=be(Object(r.useState)({}),2),_=v[0],k=v[1],P=be(Object(r.useState)({}),2),S=P[0],C=P[1],D=o.fetch,x=o.setStateTagValues,I=o.setStateTagValuesByKey,N=be(Object(r.useState)(!1),2),R=N[0],A=N[1],M=n.getTags,L=n.getPageNumber,q=n.getPerPageCount,F=n.getLoading,U=n.getTotalCount,K=n.getCountData,Y=n.getContactCountData,$=Object(r.useContext)(g.d),W=L(),X=q(),Z=U(),ee=F(),te=K(),ne=Object(g.nb)()?M():pe,ce=Y(),oe=be(Object(r.useState)(!1),2),se=oe[0],le=oe[1],fe=be(Object(r.useState)({}),2),Oe=fe[0],ge=fe[1],de=Object(r.useRef)(new AbortController);Object(r.useEffect)((function(){ge(ce)}),[ce]);var je=Object(r.createElement)(b.Button,{isPrimary:!0,key:"add",className:"bwf-display-flex",onClick:function(){Object(g.nb)()?(k({}),w(!0),A(!1)):C(!0)}},!Object(g.nb)()&&Object(r.createElement)(G.a,{icon:"lock",size:"15"}),Object(c.__)("Add New Tag","wp-marketing-automations")),he=Object(H.a)().getPageCountData,ye=Object(J.a)().setPageCountData,we=he();Object(r.useEffect)((function(){ye(ue(ue({},we),te))}),[te]),Object(r.useEffect)((function(){return function(){I("countData",{}),de.current.abort()}}),[]),Object(z.a)("manage_tags","",Object(c.__)("ALL TAGS","wp-marketing-automations"),je),Object(r.useEffect)((function(){Object(g.nb)()?(D(t,0,25,!0),j(!1)):j(!0)}),[t.s]),Object(r.useEffect)((function(){if(!d&&!Object(s.isEmpty)(ne)&&!ee&&Object(g.nb)())try{var e={tag_ids:[]};ne.map((function(t){e.tag_ids.push(t.ID)})),l()({method:"GET",path:Object(g.m)("/tags/contacts?"+Object(a.stringify)(e)),signal:de.current.signal}).then((function(e){200==e.code&&(I("contactCountData",ue(ue({},e.result),ce)),j(!0))})).catch((function(e){console.log(e)}))}catch(e){console.log(e)}}),[ne]);var ve=i()("bwfcrm-contacts-tags",{"has-search":!0}),_e=Object(r.useMemo)((function(){var e={};if(Array.isArray(ne)){var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=me(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw c}}}}(ne);try{for(n.s();!(t=n.n()).done;){var r=t.value;e[r.ID]=r}}catch(e){n.e(e)}finally{n.f()}}return e}),[ne]),Ee=Object(Q.b)(_e),ke=Ee.singleSelectProps,Pe=Ee.selectAllProps,Se=Ee.floatingBarProps,Ce=Ee.resetSelection,De=[{key:"select_tag",label:Object(r.createElement)(b.CheckboxControl,Pe),isLeftAligned:!0,required:!0,cellClassName:"bwf-col-action bwf-w-45"},{key:"actions",label:"",isLeftAligned:!1,cellClassName:"bwf-col-action bwf-w-45"},{key:"tags",label:Object(c.__)("Name","wp-marketing-automations"),isLeftAligned:!0},{key:"createdon",label:Object(c.__)("Created On","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-w-300"},{key:"contacts",label:Object(c.__)("Contacts","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-w-210"}],xe=function(e){e!==X&&(D(t,0,e),j(!1))},Te=function(e){return Object(r.createElement)(p.a,{label:Object(c.__)("Quick Actions","wp-marketing-automations"),menuPosition:"bottom right",renderContent:function(t){var n=t.onToggle;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(O.a,{isClickable:!0,onInvoke:function(){Object(g.nb)()?Object(E.k)({filter:"advanced",path:"/contacts","tags_any[]":e.ID},"/",{}):C(!0),n()}},Object(r.createElement)(m.a,{justify:"flex-start"},Object(r.createElement)(m.c,null,Object(r.createElement)(G.a,{icon:"view"})),Object(r.createElement)(m.c,null,Object(c.__)("View Contacts","wp-marketing-automations")))),Object(r.createElement)(O.a,{isClickable:!0,onInvoke:function(){Object(g.nb)()?(k(e),w(!0),A(!1)):C(!0),n()}},Object(r.createElement)(m.a,{justify:"flex-start"},Object(r.createElement)(m.c,null,Object(r.createElement)(G.a,{icon:"edit"})),Object(r.createElement)(m.c,null,Object(c.__)("Edit","wp-marketing-automations")))),Object(r.createElement)(O.a,{isClickable:!0,onInvoke:function(){Object(g.nb)()?(k(ue(ue({},_),{},{loading:!0,delete:!0,deleteid:e.ID,entityName:e.name})),w(!0)):C(!0),n()}},Object(r.createElement)(m.a,{justify:"flex-start"},Object(r.createElement)(m.c,null,Object(r.createElement)(G.a,{icon:"trash"})),Object(r.createElement)(m.c,null,Object(c.__)("Delete","wp-marketing-automations")))))}})},Ie=ne.map((function(e){var t,n;return[{display:ke.hasOwnProperty(e.ID)?Object(r.createElement)(b.CheckboxControl,ke[e.ID]):Object(r.createElement)(r.Fragment,null),value:null},{display:Te(e),value:"action"},{display:e.name,value:e.ID},{display:(n=e.created_at,Object(r.createElement)("div",{className:"bwf-display-flex-column"},Object(r.createElement)("span",null,Object(g.O)(n)))),value:e.created_at},{display:(t=e,d?Oe.hasOwnProperty(parseInt(t.ID))&&Oe[parseInt(t.ID)].contact_count>0?Object(r.createElement)("div",{className:"bwf-display-flex-column"},Object(r.createElement)("a",{onClick:function(){Object(E.k)({filter:"advanced",path:"/contacts","tags_any[]":t.ID},"/",{})},className:"bwf-a-no-underline"},parseInt(Oe[parseInt(t.ID)].subscribers_count)+" of "+Oe[parseInt(t.ID)].contact_count),Object(r.createElement)("span",null,Object(c.__)("Subscribed","wp-marketing-automations"))):"-":Object(r.createElement)("span",{className:"bwf-placeholder-temp bwf-w-150",title:"Loading"},"Loading")),value:""}]})),Ne=function(){var e=ie(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.ID){e.next=13;break}return r=ne.map((function(e){return parseInt(e.ID)===parseInt(n.ID)?n:e})),e.prev=2,e.next=5,l()({path:Object(g.m)("/tags/".concat(n.ID,"/")),method:"POST",data:{tag_name:n.name},headers:{"Content-Type":"application/json"}}).then((function(e){if(200!=e.code)throw Error(Object(g.j)(null==e?void 0:e.message));w(!1),x(r),k({}),$(e.message),Object(g.gb)($,2e3)})).catch((function(e){throw Error(Object(g.j)(null==e?void 0:e.message))}));case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),k(ue(ue({},_),{},{loading:!1})),A(e.t0.message);case 11:e.next=22;break;case 13:return e.prev=13,e.next=16,l()({path:Object(g.m)("/tags/"),method:"POST",data:{tags:[n.name]},headers:{"Content-Type":"application/json"}}).then((function(e){if(200!=e.code)throw Error(Object(g.j)(null==e?void 0:e.message));w(!1),D(t,(W-1)*X,X),k({}),j(!1),$(e.message),Object(g.gb)($,2e3)})).catch((function(e){throw Error(Object(g.j)(null==e?void 0:e.message))}));case 16:e.next=22;break;case 18:e.prev=18,e.t1=e.catch(13),k(ue(ue({},_),{},{loading:!1})),A(e.t1.message);case 22:case"end":return e.stop()}}),e,null,[[2,7],[13,18]])})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=ie(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=12;break}return le(!0),e.prev=2,e.next=5,l()({path:Object(g.m)("/tags/".concat(n,"/")),method:"DELETE",data:{tag_id:parseInt(n)}}).then((function(e){if(200!=e.code)throw Error(Object(g.j)(null==e?void 0:e.message));$(e.message),w(!1),D(t,(W-1)*X,X),j(!1),k({}),le(!1)})).catch((function(e){throw Error(Object(g.j)(null==e?void 0:e.message))}));case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),le(!1),k(ue(ue({},_),{},{error:e.t0.message}));case 11:Object(g.gb)($,2e3);case 12:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.createElement)("div",{className:"bwf-c-tag-list-section bwf_w_full"},Object(r.createElement)(f.a,{className:ve,rows:Ie,headers:De,query:{paged:W},rowsPerPage:X,totalRows:Z?parseInt(Z):0,isLoading:ee,onPageChange:function(e,n){D(t,(e-1)*X,X),j(!1)},onQueryChange:function(e){return"per_page"!==e?function(){}:xe},showMenu:!1,actions:[Object(r.createElement)(T,{key:"search",query:t})],rowHeader:!0,emptyMessage:Object(c.__)("No tags found","wp-marketing-automations")}),Object(g.nb)()&&y&&Object(r.createElement)(b.Modal,{title:!_.delete&&(_.ID?Object(c.__)("Edit Tags","wp-marketing-automations"):Object(c.__)("Add Tag","wp-marketing-automations")),onRequestClose:function(){return w(!1)},className:"bwf-admin-modal bwf-h--core-header "+(_.loading?"bwf-admin-modal-no-header ":" ")+(_.delete?" bwf-admin-modal-squeezy ":"bwf-admin-modal-squeezy")},Object(r.createElement)("div",{className:"bwf-modal-header"},Object(r.createElement)("div",{className:"bwf-modal-heading"},!_.delete&&(_.ID?Object(c.__)("Edit Tag","wp-marketing-automations"):Object(c.__)("Add Tag","wp-marketing-automations")),_.delete&&Object(c.__)("Delete Tag")),Object(r.createElement)("span",{onClick:function(){return w(!1)},className:"bwf-modal-close"},Object(r.createElement)(G.a,{icon:"close",color:"#353030"}))),_.success||_.error||_.delete?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-form-buttons"},Object(r.createElement)("div",{className:"bwf-h4 bwf-h4-grey",style:{margin:0}},_.error?_.error:Object(r.createElement)(r.Fragment,null,Object(c.__)("You are about to delete ","wp-marketing-automations"),Object(r.createElement)("strong",null,_.entityName),Object(c.__)(". This action cannot be undone. Cancel to stop, Delete to proceed.","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf_clear_24"}),_.error?Object(r.createElement)("div",{className:"bwf_text_right"},Object(r.createElement)(b.Button,{isPrimary:!0,onClick:function(){k({}),w(!1)}},Object(c.__)("OK","wp-marketing-automations"))):Object(r.createElement)("div",{className:"bwf_text_right"},Object(r.createElement)(b.Button,{className:"bwf-cancel-btn",onClick:function(){k({}),w(!1)},disabled:se},Object(c.__)("Cancel","wp-marketing-automations")),Object(r.createElement)(b.Button,{isPrimary:!0,className:"bwf-delete-btn",onClick:function(){Re(_.deleteid)},isBusy:se},Object(c.__)("Delete","wp-marketing-automations"))))):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-form-fields",onKeyPress:function(e){"Enter"===e.key&&(Object(s.isEmpty)(_.name)||(k(ue(ue({},_),{},{loading:!0})),Ne(_)))}},R&&Object(r.createElement)(b.Notice,{status:"error",onRemove:function(){return A(!1)}},R),Object(r.createElement)(b.TextControl,{label:"Name",type:"text",value:_.name?_.name:"",autoFocus:!0,placeholder:Object(c.__)("Enter Tag Name","wp-marketing-automations"),onChange:function(e){k(ue(ue({},_),{},{name:e}))}}),Object(r.createElement)("div",{className:"bwf_clear_10"}),Object(r.createElement)("div",{className:"bwf_text_right"},Object(r.createElement)(b.Button,{className:"bwf-mr-5 bwf-cancel-btn",onClick:function(){return w(!1)}},Object(c.__)("Cancel","wp-marketing-automations")),Object(r.createElement)(b.Button,{isPrimary:!0,onClick:function(){Object(s.isEmpty)(_.name)?A(Object(c.__)("Name is required","wp-marketing-automations")):(k(ue(ue({},_),{},{loading:!0})),Ne(_))},isBusy:_.loading,disabled:_.loading,className:"bwf-ml-0"},_.ID?Object(c.__)("Save","wp-marketing-automations"):Object(c.__)("Add","wp-marketing-automations")))))),Object(g.nb)()&&Object(r.createElement)(re,{floatingBarProps:Se,resetSelection:Ce,onSuccess:function(){return D(t,0,25,!0)}}),!Object(g.nb)()&&Object(r.createElement)(ae.a,{isOpen:S,onRequestClose:function(){return C(!1)},closeOnClickOut:!1,modalContent:{demoLabel:Object(c.__)("Try Demo","wp-marketing-automations")}}))},ge=n(67);t.default=function(){var e=location&&location.search?Object(a.parse)(location.search.substring(1)):{};return Object(g.g)("Tags"),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(ge.a,null),Object(r.createElement)(Oe,{query:e}))}},800:function(e,t,n){"use strict";var r=n(134),a=n(0),c=n(2);t.a=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},s=Object(r.a)(),u=s.setActiveMultiple,l=s.resetHeaderMenu,b=s.setL2NavType,m=s.setL2Nav,f=s.setBackLink,p=s.setL2Title,O=s.setL2Content,g=s.setBackLinkLabel,d=s.setPageHeader;return Object(a.useEffect)((function(){l(),!t&&b("menu"),!t&&m(i.contacts_nav),u({leftNav:"contacts",rightNav:e}),t&&f(t),t&&g("All Contacts"),n&&p(n),n&&"Export"===n&&(o&&O(o),b("menu"),m({export:{name:Object(c.__)("All","wp-marketing-automations"),link:"admin.php?page=autonami&path=/export"}})),!t&&o&&O(o),d("Contacts")}),[e,n]),!0}},803:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(12),a=n(7),c=n.n(a),o=n(25),i=n(13),s=n(26),u=n(253),l=function(e){function t(t,n){var r;return(r=e.call(this)||this).client=t,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(s.a)(t,e);var n=t.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(e){this.options=this.client.defaultMutationOptions(e)},n.onUnsubscribe=function(){var e;this.listeners.length||(null==(e=this.currentMutation)||e.removeObserver(this))},n.onMutationUpdate=function(e){this.updateResult();var t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:void 0!==e?e:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var e=this.currentMutation?this.currentMutation.state:Object(u.b)();this.currentResult=Object(r.a)({},e,{isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset})},n.notify=function(e){var t=this;o.a.batch((function(){t.mutateOptions&&(e.onSuccess?(null==t.mutateOptions.onSuccess||t.mutateOptions.onSuccess(t.currentResult.data,t.currentResult.variables,t.currentResult.context),null==t.mutateOptions.onSettled||t.mutateOptions.onSettled(t.currentResult.data,null,t.currentResult.variables,t.currentResult.context)):e.onError&&(null==t.mutateOptions.onError||t.mutateOptions.onError(t.currentResult.error,t.currentResult.variables,t.currentResult.context),null==t.mutateOptions.onSettled||t.mutateOptions.onSettled(void 0,t.currentResult.error,t.currentResult.variables,t.currentResult.context))),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)}))}))},t}(n(52).a),b=n(251);function m(e,t,n){var a=c.a.useRef(!1),s=c.a.useState(0)[1],u=Object(i.k)(e,t,n),m=Object(b.b)(),f=c.a.useRef();f.current?f.current.setOptions(u):f.current=new l(m,u);var p=f.current.getCurrentResult();c.a.useEffect((function(){a.current=!0;var e=f.current.subscribe(o.a.batchCalls((function(){a.current&&s((function(e){return e+1}))})));return function(){a.current=!1,e()}}),[]);var O=c.a.useCallback((function(e,t){f.current.mutate(e,t).catch(i.i)}),[]);if(p.error&&f.current.options.useErrorBoundary)throw p.error;return Object(r.a)({},p,{mutate:O,mutateAsync:p.mutate})}}}]);