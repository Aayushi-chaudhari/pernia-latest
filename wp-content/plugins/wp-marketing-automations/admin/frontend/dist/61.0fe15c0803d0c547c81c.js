(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(830),c=a(10),s=a.n(c),i=a(5),o=a(2),l=a(4),m=a(248),u=a(6),b=a.n(u),f=a(59),d=a(91),p=a(16),O=a(135),w=(a(958),a(3)),g=a(8),j=a(38),_=a(51),y=a(795),v=a(852),h=a(250);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var N={1:"Active",2:"Failed",3:"Paused",4:"Waiting",5:"Terminated",6:"Reattempt"},P={1:"bwf-tags bwf-tag-green",2:"bwf-tags bwf-tag-red",3:"bwf-tags bwf-tag-red",4:"bwf-tags bwf-tag-orange",5:"bwf-tags bwf-tag-red",6:"bwf-tags bwf-tag-blue"},A=function(e){var t,a=e.tasks,r=e.isLoading,c=k(Object(n.useState)(""),2),s=c[0],u=c[1],f=k(Object(n.useState)({}),2),d=f[0],O=f[1],E=[{key:"contact",label:Object(o.__)("Contact","wp-marketing-automations"),required:!0,cellClassName:"bwf-crm-col-contact bwf-w-240"},{key:"details",label:Object(o.__)("Automation","wp-marketing-automations"),cellClassName:"bwf-crm-col-contact-details",isLeftAligned:!0},{key:"startedon ",label:Object(o.__)("Started On","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m",isLeftAligned:!0},{key:"last_run",label:Object(o.__)("Last Run","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m",isLeftAligned:!0},{key:"next_last_run",label:Object(o.__)("Next Run Time","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m",isLeftAligned:!0},{key:"status",label:Object(o.__)("Status","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-col-center",isLeftAligned:!0},{key:"journey",label:Object(o.__)("","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m",isLeftAligned:!0}],A=function(e){return Object(n.createElement)(j.a,{href:"admin.php?page=autonami&path=/automation/"+e.aid,type:"bwf-crm",className:"bwf-crm-campaign-contactData-contact-link bwf-a-no-underline",key:e.aid},e.hasOwnProperty("automation_title")?e.automation_title:"-")},C=function(e){var t=e.trail,a=void 0===t?"":t;return Object(w.isEmpty)(a)?"-":Object(n.createElement)("a",{className:"bwf-cursor-pointe bwf-a-no-underline",onClick:function(){u(a),O(e)}},"View Journey")},S=function(e){var t=e.data,a=void 0===t?{}:t;return!(!a.hasOwnProperty("type")||3!==parseInt(a.type))},x=function(e){return Object(n.createElement)(n.Fragment,null,Object(i.nb)()?Object(n.createElement)(j.a,{href:"admin.php?page=autonami&path=/contact/"+e.cid,type:"bwf-crm",className:"bwf-crm-campaign-contactData-contact-link bwf-a-no-underline",key:e.cid},Object(n.createElement)(h.a,{contact:e,date:e.date,dateText:Object(o.__)("Joined on","wp-marketing-automations")})):Object(n.createElement)(h.a,{contact:e,date:e.date,dateText:Object(o.__)("Joined on","wp-marketing-automations")}))},L=Object(w.isEmpty)(a)?[]:a.map((function(e){return[{display:x(e),value:e.hasOwnProperty("contact_name")?e.contact_name:"-"},{display:A(e),value:""},{display:e.hasOwnProperty("s_date")?Object(i.O)(e.s_date):e.hasOwnProperty("c_date")?Object(i.O)(e.c_date):"-",value:e.hasOwnProperty("c_date")?e.c_date:"-"},{display:(t=e,a=t.last_time,r=void 0===a?"":a,c=t.last,s=void 0===c?0:c,Object(n.createElement)("div",{className:"bwf-c-contact-details-cell"},""===r||0===parseInt(s)&&!t.hasOwnProperty("s_date")?"-":Object(n.createElement)(p.a,{justify:"justify",align:"top"},Object(n.createElement)(p.c,null,Object(i.O)(r))))),value:""},{display:e.hasOwnProperty("e_time")&&!S(e)?Object(i.O)(e.e_time):"-",value:"-"},{display:e.hasOwnProperty("status")&&N.hasOwnProperty(parseInt(e.status))?Object(n.createElement)("span",{className:P[e.status]},N[e.status]):Object(n.createElement)("span",{className:"bwf-tags bwf-tag-green"},"Completed"),value:"-"},{display:C(e),value:"-"}];var t,a,r,c,s}));return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(m.a,{className:b()("bwfcrm-forms-list-table"),rows:L,headers:E,query:{paged:1},rowsPerPage:L.length>0?L.length:10,totalRows:L.length>0?L.length:10,isLoading:r,rowHeader:!0,showMenu:!1,hideHeader:"yes",emptyMessage:Object(o.__)("No Automations found","wp-marketing-automations")}),!Object(w.isEmpty)(s)&&Object(n.createElement)(l.Modal,{title:"",onRequestClose:function(){u(""),O({})},className:"bwf-admin-modal bwf-admin-modal-no-header bwf-admin-modal-fullscreen"},Object(n.createElement)("div",{className:"bwf-stretch-header-customer-journey"},Object(n.createElement)("div",{className:"bwf-wrapper"},Object(n.createElement)("div",{className:"bwf-left-section"},Object(n.createElement)("div",{className:"bwf-back-button bwf-display-flex bwf-cursor-pointer",onClick:function(){u(""),O({})}},Object(n.createElement)(g.a,{icon:"arrow-left",size:20})),Object(n.createElement)("div",{className:"bwf-title bwf-h3"},d.hasOwnProperty("automation_title")?d.automation_title:"")),Object(n.createElement)("div",{className:"bwf-right-section"},Object(n.createElement)("div",{className:"bwf-display-flex bwf-flex-start"},Object(n.createElement)(g.a,{icon:"split-path",width:16,height:18}),Object(n.createElement)("span",null,Object(o.__)("Contact Journey"))),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)(_.a,{id:d.cid,label:(t="-",Object(w.isEmpty)(d)||(t=Object(w.isEmpty)(d.f_name)&&Object(w.isEmpty)(d.l_name)?d.email:d.f_name+" "+d.l_name),t)})))),Object(n.createElement)(y.e,null,Object(n.createElement)(v.a,{customerData:{trail:s},isConatctTab:!0,automatonID:d.aid}))))},C=a(67);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){L(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function T(e,t,a,n,r,c,s){try{var i=e[c](s),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(n,r)}function D(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function s(e){T(c,n,r,s,i,"next",e)}function i(e){T(c,n,r,s,i,"throw",e)}s(void 0)}))}}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(e){var t=Object(n.useContext)(i.d),a=e.match.params.cartType,c=e.match.params.id;Object(r.a)(a,"","Automations","admin.php?page=autonami&path=/carts/".concat(a),"left",!1);var u=I(Object(n.useState)(25),2),j=u[0],_=u[1],y=I(Object(n.useState)(0),2),v=y[0],h=y[1],k=I(Object(n.useState)(0),2),E=k[0],N=k[1],P=I(Object(n.useState)({}),2),S=P[0],L=P[1],T=I(Object(n.useState)(!1),2),M=T[0],R=T[1],F=I(Object(n.useState)({}),2),H=F[0],q=F[1],B=I(Object(n.useState)(!1),2),J=B[0],z=B[1],U=I(Object(n.useState)(),2),Q=U[0],$=U[1],G=I(Object(n.useState)({status:!1,loading:!1}),2),V=G[0],W=G[1],K=S.v1,X=void 0===K?[]:K,Y=S.v2,Z=void 0===Y?[]:Y,ee=function(){var e=D(regeneratorRuntime.mark((function e(){var t,n,r,l,m,u,b,f=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.length>0&&void 0!==f[0]?f[0]:{},z(!0),e.prev=2,n="",t&&t.search&&(n="search=".concat(t.search)),e.next=7,s()({method:"GET",path:Object(i.m)("/carts/".concat(c,"/tasks/?offset=").concat(v,"&limit=").concat(j,"&").concat(n,"&type=").concat(a))});case 7:if((r=e.sent)&&r.result){e.next=11;break}return $(Object(o.__)("Blank response returned","wp-marketing-automations")),e.abrupt("return");case 11:l=r.total_count,m=r.result,u=r.limit,b=r.offset,l&&N(parseInt(l)),u&&_(parseInt(u)),b&&h(parseInt(b)),m&&L(m),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),$(e.t0&&e.t0.message?e.t0.message:Object(o.__)("Unknown Error Occurred","wp-marketing-automations"));case 21:z(!1);case 22:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(i.g)("Cart Task #"+c),ee()}),[]);var te=[{key:"action",label:"",isLeftAligned:!0,required:!0,cellClassName:"bwf-col-action bwf-w-45"},{key:"task",label:Object(o.__)("Task","wp-marketing-automations"),isLeftAligned:!0},{key:"automation",label:Object(o.__)("Automation","wp-marketing-automations"),isLeftAligned:!0},{key:"actions",label:Object(o.__)("Action","wp-marketing-automations"),isLeftAligned:!0},{key:"data",label:Object(o.__)("Data","wp-marketing-automations"),isLeftAligned:!0},{key:"date",label:Object(o.__)("Date","wp-marketing-automations"),isLeftAligned:!0},{key:"show",label:"",isLeftAligned:!0},{key:"status",label:Object(o.__)("Status","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-col-center"}],ae=function(e){return Object(n.createElement)("a",{href:"admin.php?page=autonami-automations&edit="+e.automation_id,className:"bwf-crm-campaign-contactData-contact-link bwf-a-no-underline",key:e.id},e.hasOwnProperty("automation_name")?e.automation_name:"-")},ne=function(e){e!==j&&(_(j),ee())},re=function(){var e=D(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W({status:!0,loading:!0}),Object(w.isEmpty)(a)){e.next=13;break}return e.prev=2,e.next=5,s()({path:Object(i.m)("/automations/run-tasks"),method:"POST",data:{task_ids:a}}).then((function(e){200===e.code?(W({status:!0,success:e.message}),t(e.message),ee()):W({status:!0,error:e.message})}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),W({status:!0,error:e.t0.message});case 10:Object(i.gb)(t,2e3),e.next=14;break;case 13:W({status:!0,error:Object(o.__)("No Task Selected","wp-marketing-automations")});case 14:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(e){return Object(n.createElement)(f.a,{label:Object(o.__)("Quick Actions","wp-marketing-automations"),menuPosition:"bottom right",renderContent:function(t){var a=t.onToggle;return Object(n.createElement)(n.Fragment,null,"t_0"==e.status&&Object(n.createElement)(d.a,{isClickable:!0,onInvoke:function(){re([e.id]),a()}},Object(n.createElement)(p.a,{justify:"flex-start"},Object(n.createElement)(p.c,null,Object(n.createElement)(g.a,{icon:"play"})),Object(n.createElement)(p.c,null,Object(o.__)("Run Now","wp-marketing-automations")))),Object(n.createElement)(d.a,{isClickable:!0,onInvoke:function(){W({deleteEntityName:e.automation_name,status:!0,taskId:e.id}),a()}},Object(n.createElement)(p.a,{justify:"flex-start"},Object(n.createElement)(p.c,null,Object(n.createElement)(g.a,{icon:"trash"})),Object(n.createElement)(p.c,null,Object(o.__)("Delete","wp-marketing-automations")))))}})},se={l_0:Object(o.__)("Failed","wp-marketing-automations"),l_1:Object(o.__)("Completed","wp-marketing-automations"),t_0:Object(o.__)("Scheduled","wp-marketing-automations"),t_1:Object(o.__)("Paused","wp-marketing-automations")},ie={l_0:"bwf-tags bwf-tag-red",l_1:"bwf-tags bwf-tag-green",t_0:"bwf-tags bwf-tag-blue",t_1:"bwf-tags bwf-tag-red"},oe=Array.isArray(X)?X.map((function(e){return[{display:ce(e),value:""},{display:"#".concat(e.id),value:""},{display:ae(e),value:""},{display:e.task_integration+(e.task_integration_action?" : ".concat(e.task_integration_action):""),value:""},{display:Object(n.createElement)("ul",{dangerouslySetInnerHTML:{__html:e.task_details}}),value:""},{display:Object(n.createElement)("span",{dangerouslySetInnerHTML:{__html:e.task_date}}),value:""},{display:Object(n.createElement)(l.Button,{icon:Object(n.createElement)(g.a,{icon:"view",size:30}),onClick:function(){q(e),R(!0)}}),value:""},{display:se[e.status]?Object(n.createElement)("span",{className:ie[e.status]},se[e.status]):"-",value:e.status}]})):[],le=function(){var e=D(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W(x(x({},V),{},{loading:!0})),!V.hasOwnProperty("taskId")){e.next=11;break}return e.prev=2,e.next=5,s()({path:Object(i.m)("/automations/tasks/"),method:"DELETE",data:{task_ids:[V.taskId]}}).then((function(e){200==e.code&&(W(x(x({},V),{},{success:e.message})),t(e.message),ee())}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),W(x(x({},V),{},{error:e.t0.message}));case 10:Object(i.gb)(t,1e3);case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}();return Q?Object(n.createElement)(l.Notice,{status:"error"},Q):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(C.a,null),!Object(w.isEmpty)(Z)&&!J&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-flex"},Object(n.createElement)("div",{className:"bwf_main_heading_inline bwf-mr-15"},Object(o.__)("Automations","wp-marketing-automations"))),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)(A,{tasks:Z,isLoading:J}),Object(n.createElement)("div",{className:"bwf_clear_30"})),(!Object(w.isEmpty)(X)||J)&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-flex"},Object(n.createElement)("div",{className:"bwf_main_heading_inline bwf-mr-15"},J?Object(n.createElement)("div",{className:"bwf-h-30 bwf-w-210 bwf-placeholder-temp"}):Object(n.createElement)(n.Fragment,null,Object(o.__)("Automation Tasks","wp-marketing-automations")))),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)(m.a,{className:b()("bwfcrm-forms-list-table",{"has-search":!0}),rows:oe,headers:te,query:{paged:v/j+1},rowsPerPage:J?5:j,totalRows:E,isLoading:J,onPageChange:function(e,t){h((e-1)*j),ee()},onQueryChange:function(e){return"per_page"!==e?function(){}:ne},rowHeader:!0,showMenu:!1,hideHeader:"yes",emptyMessage:Object(o.__)("No tasks found","wp-marketing-automations")})),Object(w.isEmpty)(Z)&&Object(w.isEmpty)(X)&&!J&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-flex"},Object(n.createElement)("div",{className:"bwf_main_heading_inline bwf-mr-15"},Object(o.__)("Automation Tasks","wp-marketing-automations"))),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)(m.a,{className:b()("bwfcrm-forms-list-table",{"has-search":!0}),rows:[],headers:te,query:{paged:1},rowsPerPage:10,totalRows:10,isLoading:!1,rowHeader:!0,showMenu:!1,hideHeader:"yes",emptyMessage:Object(o.__)("No tasks found","wp-marketing-automations")})),Object(n.createElement)(O.a,{modalTitle:Object(o.__)("Delete Task"),confirmText:Object(o.__)("Are you sure you want to delete this task ?","wp-marketing-automations"),deleteEntityName:V.deleteEntityName,confirmButtonText:Object(o.__)("Delete","wp-marketing-automations"),cancelButtonText:Object(o.__)("Cancel","wp-marketing-automations"),onConfirm:le,isLoading:V.loading,successMessage:V.success,errorMessage:V.error,onRequestClose:function(){return W({status:!1})},isOpen:V.status,isDelete:!0}),M&&Object(n.createElement)(l.Modal,{title:"Details",onRequestClose:function(){return R(!1)},className:"bwf-message-preview-modal bwf-admin-modal bwf-admin-modal-squeezy bwf-task-model"},Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(n.createElement)("div",{className:"bwf-w-150 bwf_bold bwf_align_center"},Object(o.__)("Automation","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf_align_center"},H.automation_name)),Object(n.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(n.createElement)("div",{className:"bwf-w-150 bwf_bold bwf_align_center"},Object(o.__)("Event","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf_align_center"},H.automation_source+" : "+H.automation_event)),Object(n.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(n.createElement)("div",{className:"bwf-w-150 bwf_bold bwf_align_center"},Object(o.__)("Action","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf_align_center"},H.task_integration+(H.task_integration_action?" : ".concat(H.task_integration_action):""))),Object(n.createElement)("div",{className:"bwf-p-15 bwf-bb-grey bwf-task-details"},Object(n.createElement)("ul",{className:"bwf_align_center",dangerouslySetInnerHTML:{__html:H.task_details}})),!Object(w.isEmpty)(H.task_message)&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-h3 bwf-pt-15"},Object(o.__)("Notes","wp-marketing-automations")),Object.entries(H.task_message).map((function(e){var t=I(e,2),a=t[0],r=t[1];return Object(n.createElement)("div",{className:"bwf-p-15"},Object(n.createElement)("div",{className:"bwfcrm-task_notes_card"},r),Object(n.createElement)("div",{className:"bwfcrm-task_notes_time"},Object(n.createElement)("i",null,a)))}))))))}},830:function(e,t,a){"use strict";var n=a(134),r=a(0),c=a(2),s=a(5),i=a(139);function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",m=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"left",u=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],b=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},f=b.carts_nav,d=Object(n.a)(),p=d.setActiveMultiple,O=d.resetHeaderMenu,w=d.setL2NavType,g=d.setL2Nav,j=d.setBackLink,_=d.setBackLinkLabel,y=d.setL2Title,v=d.setL2NavAlign,h=d.setPageHeader,k=d.setPageCountData,E=Object(i.a)(),N=E.getPageCountData,P=N();return Object(r.useEffect)((function(){O(),Object(s.jb)()&&w("menu"),Object(s.jb)()&&u&&g(f),p({leftNav:"carts",rightNav:e}),o&&j(o),a&&y(a),_(Object(c.__)("All Carts","wp-marketing-automations")),v(m),!Object(s.jb)()&&y(Object(c.__)("Cart Tracking","wp-marketing-automations")),h("Carts"),k(l(l({},P),t))}),[e,t]),!0}},958:function(e,t,a){}}]);