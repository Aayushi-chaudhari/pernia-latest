(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(4),c=a(2),i=a(808),l=a(881),o=a(809),s=a(67),u=a(44),m=a(5);t.default=function(e){var t=e.feedId,a=Object(i.a)(),b=a.setStep,d=a.fetchMappingData,f=a.updateStepTwo,p=a.resetUpdateStepTwoStatus,O=Object(o.a)(),j=O.getFormFields,g=O.getFormHeaders,w=O.getFeed,v=O.getLoading,_=O.getError,E=O.getEditMapMode,k=O.getUpdateStepTwoStatus,y={fields:j(),headers:g()},h=v(),N=_(),S=w(),x=S&&S.status?parseInt(S.status):1,C=S&&S.data?S.data:{},T=E(),B=k();Object(n.useEffect)((function(){d(parseInt(t))}),[]);var F=Object(n.useContext)(m.d);Object(n.useEffect)((function(){3===B&&F("Unable to save mapping data"),2===B&&(F("Mapping data saved successfully"),b("double_optin")),B&&1!==B&&(p(),setTimeout((function(){return F("")}),3e3))}),[B]);var I=Object(c.__)("Next","wp-marketing-automations");return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(s.a,null),Object(n.createElement)("div",{className:"bwf-crm-stepper-wrap"},Object(n.createElement)("div",{className:"bwf-crm-importer-wrap"},N&&Object(n.createElement)(r.Notice,{status:"error"},N.message?N.message:Object(c.__)("Unknown error occurred","wp-marketing-automations")),h?Object(n.createElement)(u.a,null):Object(n.createElement)(l.a,{headersData:y,onRequestImport:function(e){f(t,e,x)},submitButtonText:I,submitButtonIcon:"arrow-right-alt",savedData:C,buttonAlignClass:"bwf_text_right bwf-m-20-imp",secondaryClass:"bwf-m-20-imp",backButtonText:!T&&Object(c.__)("Back","wp-marketing-automations"),backButtonClick:!T&&function(){return b("selection")},sourceHeaderText:Object(c.__)("Forms Fields","wp-marketing-automations"),contactHeaderText:Object(c.__)("Contact Fields","wp-marketing-automations"),extra:{disableMarketingStatusCheck:!0},isSubmitButtonBusy:1===B}))))}},814:function(e,t,a){"use strict";var n=a(0),r=a(27),c=a(2),i=a(140);t.a=function(e){var t=e.selected,a=e.onTagsChange;return Object(n.createElement)("div",{className:"bwf-c-field-mapper-terms"},Object(n.createElement)("div",{className:"bwf-input-label"},Object(c.__)("Add Tags","wp-marketing-automations")),Object(n.createElement)(r.a,{autocompleter:i.b,multiple:!1,allowFreeTextSearch:!0,inlineTags:!1,selected:t,onChange:function(e){a(e)},onRemoveTag:function(e,n){var r=t.filter((function(t){return!(t.key==e&&t.label==n)}));a(r)},placeholder:Object(c.__)("Search by tag name","wp-marketing-automations"),showClearButton:!0,disabled:!1}))}},823:function(e,t,a){"use strict";var n=a(0),r=a(27),c=a(2),i=a(140);t.a=function(e){var t=e.selected,a=e.onListsChange;return Object(n.createElement)("div",{className:"bwf-c-field-mapper-terms"},Object(n.createElement)("div",{className:"bwf-input-label"},Object(c.__)("Add to Lists","wp-marketing-automations")),Object(n.createElement)(r.a,{autocompleter:i.a,multiple:!1,allowFreeTextSearch:!0,selected:t,onChange:function(e){a(e)},onRemoveTag:function(e){var n=t.filter((function(t){return t.key!=e}));a(n)},placeholder:Object(c.__)("Search by list name","wp-marketing-automations"),showClearButton:!0,disabled:!1}))}},881:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),r=a(4),c=a(2),i=a(3),l=a(814),o=a(823),s=a(16),u=a(67),m=a(8);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var j=function(e){var t=e.headersData,a=e.onRequestImport,b=e.submitButtonText,O=e.secondaryButtonText,j=e.onSecondaryButtonClick,g=e.savedData,w=e.buttonAlignClass,v=e.backButtonText,_=e.backButtonClick,E=e.extra,k=e.isSubmitButtonBusy,y=e.sourceHeaderText,h=void 0===y?Object(c.__)("Columns To Import","wp-marketing-automations"):y,N=e.contactHeaderText,S=void 0===N?Object(c.__)("Map Into Field","wp-marketing-automations"):N,x=e.updateExistingText,C=void 0===x?Object(c.__)("Update Existing Contacts","wp-marketing-automations"):x,T=e.secondaryClass,B=void 0===T?"":T,F=t.headers,I=t.fields,A=p(Object(n.useState)(g&&g.mapped_fields?function(e,t){if(!e)return{};var a={},n=function(n){t.find((function(e){return e.index.toString()===n}))&&(a[n]=e[n])};for(var r in e)n(r);return a}(g.mapped_fields,F):{}),2),P=A[0],D=A[1],M=p(Object(n.useState)(0),2),U=M[0],R=M[1],H=g&&g.tags?g.tags.map((function(e){return{key:e.id,label:e.value}})):[],L=g&&g.lists?g.lists.map((function(e){return{key:e.id,label:e.value}})):[],q=p(Object(n.useState)(H),2),J=q[0],z=q[1],V=p(Object(n.useState)(L),2),$=V[0],G=V[1],K=p(Object(n.useState)(!(!g||!("update_existing"in g))&&g.update_existing),2),Q=K[0],W=K[1],X=p(Object(n.useState)(!g||!("update_blank"in g)||g.update_blank),2),Y=X[0],Z=X[1],ee=p(Object(n.useState)(!g||!("marketing_status"in g)||g.marketing_status),2),te=ee[0],ae=(ee[1],p(Object(n.useState)(!(!g||!("trigger_events"in g))&&g.trigger_events),2)),ne=ae[0],re=ae[1],ce=p(Object(n.useState)(null),2),ie=ce[0],le=ce[1],oe=(E||{}).disableMarketingStatusCheck,se=void 0!==oe&&oe,ue=function(){return le(null),0===Object(i.size)(P)?(setTimeout((function(){return le(Object(c.__)("Select the contact fields.","wp-marketing-automations"))}),500),!1):!!Object.values(P).includes("email")||(setTimeout((function(){return le(Object(c.__)("Map contact email with a form field.","wp-marketing-automations"))}),500),!1)},me=function(){if(ue()){var e={};F.map((function(t){t.index in P&&(e[t.index]=P[t.index])}));var t={map:e,tags:J.map((function(e){return{id:e.key,value:e.label}})),lists:$.map((function(e){return{id:e.key,value:e.label}})),update_existing:Q,trigger_events:ne,imported_contact_status:U,dont_update_blank:Y};!se&&(t.marketing_status=te),a(t)}},be=function(){if(ue()){var e={};F.map((function(t){t.index in P&&(e[t.index]=P[t.index])}));var t={map:e,tags:J.map((function(e){return{id:e.key,value:e.label}})),lists:$.map((function(e){return{id:e.key,value:e.label}})),update_existing:Q,trigger_events:ne};!se&&(t.marketing_status=te),j(t)}};if(!Object(i.isArray)(I)||!I.length>0)return Object(n.createElement)(r.Notice,{status:"error"},Object(c.__)("No contact fields found","wp-marketing-automations"));if(!Object(i.isArray)(F)||!F.length>0)return Object(n.createElement)(r.Notice,{status:"error"},Object(c.__)("No mapping fields found"));var de={0:Object(c.__)("Unverified","wp-marketing-automations"),1:Object(c.__)("Subscribed","wp-marketing-automations"),2:Object(c.__)("Bounced","wp-marketing-automations"),3:Object(c.__)("Unsubscribed","wp-marketing-automations")};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-c-import-mapper-fields bwf-card-wrap bwf-form-fields bwf-crm-importer-csv-wrap"},Object(n.createElement)("div",{className:"bwf-card-header"},Object(n.createElement)("span",{className:"bwf-form-title"},Object(c.__)("Mapping","wp-marketing-automations"))),ie&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)(u.a,null),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)(r.Notice,{status:"error",onRemove:function(){return le(null)}},ie)),Object(n.createElement)("div",{className:"bwf-crm-import-section"},Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)("div",{className:"bwf-c-import-field",key:"mapper-sel-wrap"},Object(n.createElement)("strong",null,h),Object(n.createElement)("span",null),Object(n.createElement)("strong",null,S)),F.map((function(e,t){return Object(n.createElement)("div",{key:t,className:"bwf-c-import-field"},Object(n.createElement)(r.TextControl,{disabled:!0,value:e.header}),Object(n.createElement)("span",{className:"bwf-display-flex"},Object(n.createElement)(m.a,{icon:"mapper"})),Object(n.createElement)("select",{value:e.index in P?P[e.index]:"",onChange:function(t){return function(e,t){var a=t.target.value,n="index"in e?e.index:"";""===a&&n in P?D(Object(i.omit)(P,n)):""!==a&&""!==n&&D(d(d({},P),{},f({},n,a)))}(e,t)},key:"bwf-select-field"},Object(n.createElement)("option",{value:"",key:"default-key"+t},Object(c.__)("Do Not Import This Field","wp-marketing-automations")),I.map((function(e,a){return"fields"in e&&e.fields.length>0&&Object(n.createElement)("optgroup",{key:e.id+"-"+a+"-"+t,label:e.name},e.fields.map((function(e){return Object(n.createElement)("option",{key:e.id,value:e.id},e.name)})))}))))}))),Object(n.createElement)("div",{className:"bwf-crm-import-section",style:{border:0}},Object(n.createElement)("div",{className:"bwf-h4"},Object(c.__)("Contact Profile","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-c-import-field",key:"select-tag-list"},Object(n.createElement)(l.a,{onTagsChange:z,selected:J}),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)(o.a,{onListsChange:G,selected:$})),Object(n.createElement)("div",{className:"bwf_clear_10"}),!se&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-p"},Object(c.__)("Status","wp-marketing-automations")),Object(n.createElement)("select",{className:"bwf-import-csv-status-select",onChange:function(e){R(e.target.value)},key:"bwf-select-status",value:U},Object.keys(de).map((function(e){return Object(n.createElement)("option",{key:e,value:e},de[e])})))),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)("div",null,Object(n.createElement)(r.ToggleControl,{label:C,checked:Q,className:"bwf-tooglecontrol-advance",onChange:W})),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)("div",null,Object(n.createElement)(r.ToggleControl,{label:Object(c.__)("Don't Update Blank Values","wp-marketing-automations"),checked:Y,className:"bwf-tooglecontrol-advance",onChange:Z})),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)("div",null,Object(n.createElement)(r.ToggleControl,{label:Object(c.__)("Trigger Automations (For Tag & List Related Events)","wp-marketing-automations"),checked:ne,className:"bwf-tooglecontrol-advance",onChange:re}))),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)("div",{className:"bwf-pt-0"},w?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(s.a,null,!!v&&Object(n.createElement)(s.b,null,Object(n.createElement)(r.Button,{isSecondary:!0,onClick:_,className:B},v)),Object(n.createElement)(s.b,{className:w},Object(n.createElement)(r.Button,{onClick:me,isBusy:!!k,disabled:!!k,isPrimary:!0},Object(n.createElement)("span",null,b||Object(c.__)("Import","wp-marketing-automations"))),O&&Object(n.createElement)(r.Button,{onClick:be,className:"bwf-ml-10",isSecondary:!0},O)))):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(r.Button,{onClick:me,isPrimary:!0,isBusy:!!k,disabled:!!k,className:"bwf-display-flex"},Object(n.createElement)("span",null,b||Object(c.__)("Import","wp-marketing-automations"))),O&&Object(n.createElement)(r.Button,{onClick:be,className:"bwf-ml-10",isSecondary:!0},O)))))}}}]);