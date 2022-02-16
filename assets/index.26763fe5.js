var R=Object.defineProperty,P=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var p=(n,e,o)=>e in n?R(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,d=(n,e)=>{for(var o in e||(e={}))k.call(e,o)&&p(n,o,e[o]);if(g)for(var o of g(e))I.call(e,o)&&p(n,o,e[o]);return n},h=(n,e)=>P(n,T(e));import{d as E,c as a,a as f,u as V,F as L,r as A,o as m,b as O,N as D,e as N,f as C,g as B,h as u,t as v,i as c,j as z,k as q,Q as M,V as x}from"./vendor.6afcc2f0.js";const $=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))_(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&_(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function _(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};$();const F=E({setup(n){return(e,o)=>{const _=A("router-view");return m(),a(L,null,[f(_),f(V(O.exports.VueQueryDevTools))],64)}}}),G={plugins:{Notify:D}},Q="modulepreload",y={},U="/",t=function(e,o){return!o||o.length===0?e():Promise.all(o.map(_=>{if(_=`${U}${_}`,_ in y)return;y[_]=!0;const r=_.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Q,r||(s.as="script",s.crossOrigin=""),s.href=_,document.head.appendChild(s),r)return new Promise((S,b)=>{s.addEventListener("load",S),s.addEventListener("error",b)})})).then(()=>e())},W=[{name:"SignIn",path:"/sign-in",component:()=>t(()=>import("./view.bd819600.js"),["assets/view.bd819600.js","assets/view.ff836de5.css","assets/vendor.6afcc2f0.js","assets/QSeparator.16660505.js","assets/useI18n.cd288b87.js","assets/axiosClient.264e3cda.js","assets/QForm.cdc811d8.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/flag-VN.e6530ea7.js"])}],H=[{name:"Profile",path:"/profile",component:()=>t(()=>import("./view.ff508d39.js"),["assets/view.ff508d39.js","assets/view.e3d41df1.css","assets/QSkeleton.e2532b07.js","assets/useI18n.cd288b87.js","assets/vendor.6afcc2f0.js","assets/axiosClient.264e3cda.js","assets/QSelect.4297c779.js","assets/QMenu.23017405.js","assets/use-prevent-scroll.3abd3655.js","assets/queryKeys.553e4145.js","assets/QForm.cdc811d8.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],j=[{name:"Settings-RoomSettings",path:"/settings/room-settings",component:()=>t(()=>import("./view.c6205888.js"),["assets/view.c6205888.js","assets/QMenu.23017405.js","assets/useI18n.cd288b87.js","assets/vendor.6afcc2f0.js","assets/use-prevent-scroll.3abd3655.js","assets/QList.e585812b.js","assets/axiosClient.264e3cda.js","assets/TouchPan.879d8082.js","assets/useNotify.ae0ad5bc.js","assets/useRoomTypeFloorInfoQuery.eae95df3.js","assets/queryKeys.553e4145.js","assets/useRoomTypeListQuery.f3301e23.js","assets/QSeparator.16660505.js","assets/QTable.db4622a1.js","assets/QSelect.4297c779.js","assets/ClosePopup.49e1b2a3.js"]),children:[{path:"room-types/:roomTypeSn",component:()=>t(()=>import("./room-types.9ca2a865.js"),["assets/room-types.9ca2a865.js","assets/room-types.e878b700.css","assets/QCardSection.c854a72b.js","assets/vendor.6afcc2f0.js","assets/QCard.819f10fc.js","assets/useI18n.cd288b87.js","assets/queryKeys.553e4145.js","assets/use-prevent-scroll.3abd3655.js","assets/QSkeleton.e2532b07.js","assets/axiosClient.264e3cda.js","assets/QForm.cdc811d8.js","assets/ClosePopup.49e1b2a3.js","assets/useNotify.ae0ad5bc.js","assets/useRoomTypeListQuery.f3301e23.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"rooms/:roomSn",component:()=>t(()=>import("./rooms.acdd66d9.js"),["assets/rooms.acdd66d9.js","assets/rooms.3ad45ad8.css","assets/QCardSection.c854a72b.js","assets/vendor.6afcc2f0.js","assets/QCard.819f10fc.js","assets/useI18n.cd288b87.js","assets/queryKeys.553e4145.js","assets/use-prevent-scroll.3abd3655.js","assets/QSkeleton.e2532b07.js","assets/axiosClient.264e3cda.js","assets/QSelect.4297c779.js","assets/QMenu.23017405.js","assets/QForm.cdc811d8.js","assets/ClosePopup.49e1b2a3.js","assets/useNotify.ae0ad5bc.js","assets/useRoomTypeFloorInfoQuery.eae95df3.js","assets/useRoomTypeListQuery.f3301e23.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]}],K=[{name:"Settings-Staff",path:"/settings/staff",component:()=>t(()=>import("./view.3ed78249.js"),["assets/view.3ed78249.js","assets/view.fb0f6775.css","assets/vendor.6afcc2f0.js","assets/useI18n.cd288b87.js","assets/use-prevent-scroll.3abd3655.js","assets/QPagination.4358c922.js","assets/axiosClient.264e3cda.js","assets/QTable.db4622a1.js","assets/QSeparator.16660505.js","assets/QList.e585812b.js","assets/QSelect.4297c779.js","assets/QMenu.23017405.js","assets/queryKeys.553e4145.js","assets/QCardSection.c854a72b.js","assets/QCard.819f10fc.js","assets/ClosePopup.49e1b2a3.js","assets/useNotify.ae0ad5bc.js","assets/plugin-vue_export-helper.21dcd24c.js"])}],Y=[...W,{path:"/",name:"DefaultLayout",component:()=>t(()=>import("./default.ca1bb57f.js"),["assets/default.ca1bb57f.js","assets/default.505020cc.css","assets/vendor.6afcc2f0.js","assets/QToolbar.40a47be3.js","assets/QSeparator.16660505.js","assets/useI18n.cd288b87.js","assets/QMenu.23017405.js","assets/use-prevent-scroll.3abd3655.js","assets/QList.e585812b.js","assets/TouchPan.879d8082.js","assets/ClosePopup.49e1b2a3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/flag-VN.e6530ea7.js"]),children:[...H,...j,{path:"/",name:"Home",component:()=>t(()=>import("./index.7d5ebba0.js"),["assets/index.7d5ebba0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.6afcc2f0.js"])},{path:"/bookings",name:"Bookings",component:()=>t(()=>import("./bookings.af1e86ef.js"),["assets/bookings.af1e86ef.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.6afcc2f0.js"])},{path:"/guests/:page?/:id?",name:"Guests",component:()=>t(()=>import("./view.2c86b4ad.js"),["assets/view.2c86b4ad.js","assets/view.0fdb8ce6.css","assets/vendor.6afcc2f0.js","assets/axiosClient.264e3cda.js","assets/useI18n.cd288b87.js","assets/QSelect.4297c779.js","assets/QMenu.23017405.js","assets/use-prevent-scroll.3abd3655.js","assets/queryKeys.553e4145.js","assets/QList.e585812b.js","assets/QPagination.4358c922.js","assets/QTable.db4622a1.js","assets/QSeparator.16660505.js","assets/QToolbar.40a47be3.js","assets/QCard.819f10fc.js","assets/ClosePopup.49e1b2a3.js","assets/QSkeleton.e2532b07.js","assets/QForm.cdc811d8.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/room-view",name:"RoomView",component:()=>t(()=>import("./view.c6205888.js"),["assets/view.c6205888.js","assets/QMenu.23017405.js","assets/useI18n.cd288b87.js","assets/vendor.6afcc2f0.js","assets/use-prevent-scroll.3abd3655.js","assets/QList.e585812b.js","assets/axiosClient.264e3cda.js","assets/TouchPan.879d8082.js","assets/useNotify.ae0ad5bc.js","assets/useRoomTypeFloorInfoQuery.eae95df3.js","assets/queryKeys.553e4145.js","assets/useRoomTypeListQuery.f3301e23.js","assets/QSeparator.16660505.js","assets/QTable.db4622a1.js","assets/QSelect.4297c779.js","assets/ClosePopup.49e1b2a3.js"])},{path:"/services",name:"Services",component:()=>t(()=>import("./services.408683c3.js"),["assets/services.408683c3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.6afcc2f0.js"])},{path:"/reports/bookings",name:"Report-Bookings",component:()=>t(()=>import("./bookings.a53613e0.js"),["assets/bookings.a53613e0.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.6afcc2f0.js"])},{path:"/reports/transactions",name:"Report-Transactions",component:()=>t(()=>import("./transactions.62c56dcb.js"),["assets/transactions.62c56dcb.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.6afcc2f0.js"])},{path:"/settings/booking-sources",name:"Settings-BookingSources",component:()=>t(()=>import("./booking-sources.e0f58694.js"),["assets/booking-sources.e0f58694.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.6afcc2f0.js"])},{path:"/settings/information",name:"Settings-Information",component:()=>t(()=>import("./information.22b118db.js"),["assets/information.22b118db.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.6afcc2f0.js"])},{path:"/settings/policies",name:"Settings-Policies",component:()=>t(()=>import("./policies.d100aef6.js"),["assets/policies.d100aef6.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.6afcc2f0.js"])},{path:"/settings/rate-structures",name:"Settings-RateStructure",component:()=>t(()=>import("./rate-structures.5afc8ed1.js"),["assets/rate-structures.5afc8ed1.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.6afcc2f0.js"])},...K]}],l=N({history:C(),routes:Y});l.beforeEach((n,e,o)=>{if(localStorage.getItem("access_token")){if(n.path==="/sign-in"){l.replace("/");return}return o()}else{if(n.path!=="/sign-in"){l.replace("/sign-in");return}return o()}});var J={add_new_room:n=>{const{normalize:e}=n;return e(["Add New Room"])},all:n=>{const{normalize:e}=n;return e(["All"])},basic_info:n=>{const{normalize:e}=n;return e(["Basic Info"])},booking:n=>{const{normalize:e,plural:o}=n;return o([e(["Booking"]),e(["Bookings"])])},booking_source:n=>{const{normalize:e}=n;return e(["Booking Source"])},cancel:n=>{const{normalize:e}=n;return e(["Cancel"])},change_password:n=>{const{normalize:e}=n;return e(["Change Password"])},create_new_booking:n=>{const{normalize:e}=n;return e(["Create New Booking"])},current_password:n=>{const{normalize:e}=n;return e(["Current Password"])},delete_floor:n=>{const{normalize:e}=n;return e(["Delete Floor"])},edit_room:n=>{const{normalize:e}=n;return e(["Edit Room"])},edit_room_type:n=>{const{normalize:e}=n;return e(["Edit Room Type"])},email:n=>{const{normalize:e}=n;return e(["Email"])},failed_to_save:n=>{const{normalize:e}=n;return e(["Failed to save"])},floor:n=>{const{normalize:e}=n;return e(["Floor"])},gender:n=>{const{normalize:e}=n;return e(["Gender"])},guest:n=>{const{normalize:e,plural:o}=n;return o([e(["Guest"]),e(["Guests"])])},home:n=>{const{normalize:e}=n;return e(["Home"])},if_you_want_to_register_gopms_please_fill_out_the_registration_form_on_here:n=>{const{normalize:e}=n;return e(["If you want to register GoPMS, please fill out the registration form on here."])},information:n=>{const{normalize:e}=n;return e(["Information"])},input_floor_name:n=>{const{normalize:e}=n;return e(["Input floor name"])},mobile:n=>{const{normalize:e}=n;return e(["Mobile"])},my_account:n=>{const{normalize:e}=n;return e(["My Account"])},name:n=>{const{normalize:e}=n;return e(["Name"])},new_floor:n=>{const{normalize:e}=n;return e(["New Floor"])},new_password:n=>{const{normalize:e}=n;return e(["New Password"])},new_room:n=>{const{normalize:e}=n;return e(["New Room"])},new_room_type:n=>{const{normalize:e}=n;return e(["New Room Type"])},number_of_adults:n=>{const{normalize:e}=n;return e(["Number of Adults"])},number_of_beds:n=>{const{normalize:e}=n;return e(["Number of Beds"])},number_of_children:n=>{const{normalize:e}=n;return e(["Number of Children"])},password:n=>{const{normalize:e}=n;return e(["Password"])},policy:n=>{const{normalize:e}=n;return e(["Policy"])},rate_structure:n=>{const{normalize:e}=n;return e(["Rate Structure"])},"re-enter_password":n=>{const{normalize:e}=n;return e(["Re-enter Password"])},report:n=>{const{normalize:e,plural:o}=n;return o([e(["Report"]),e(["Reports"])])},role:n=>{const{normalize:e}=n;return e(["Role"])},room_name:n=>{const{normalize:e}=n;return e(["Room Name"])},room_setting:n=>{const{normalize:e}=n;return e(["Room Setting"])},room_type:n=>{const{normalize:e}=n;return e(["Room Type"])},room_type_code:n=>{const{normalize:e}=n;return e(["Room Type Code"])},room_type_name:n=>{const{normalize:e}=n;return e(["Room Type Name"])},room_view:n=>{const{normalize:e}=n;return e(["Room View"])},save:n=>{const{normalize:e}=n;return e(["Save"])},saved:n=>{const{normalize:e}=n;return e(["Saved"])},service:n=>{const{normalize:e}=n;return e(["Service"])},setting:n=>{const{normalize:e,plural:o}=n;return o([e(["Setting"]),e(["Settings"])])},sign_in:n=>{const{normalize:e}=n;return e(["Sign in"])},sign_out:n=>{const{normalize:e}=n;return e(["Sign out"])},something_went_wrong:n=>{const{normalize:e}=n;return e(["Something went wrong..."])},staff:n=>{const{normalize:e}=n;return e(["Staff"])},support:n=>{const{normalize:e}=n;return e(["Support"])},this_field_is_required:n=>{const{normalize:e}=n;return e(["This field is required"])},this_is_invalid_value:n=>{const{normalize:e}=n;return e(["This is invalid value"])},this_value_is_too_big:n=>{const{normalize:e}=n;return e(["This value is too big"])},this_value_is_too_long:n=>{const{normalize:e}=n;return e(["This value is too long"])},this_value_is_too_short:n=>{const{normalize:e}=n;return e(["This value is too short"])},this_value_is_too_small:n=>{const{normalize:e}=n;return e(["This value is too small"])},transaction:n=>{const{normalize:e,plural:o}=n;return o([e(["Transaction"]),e(["Transactions"])])},welcome_to_gopms:n=>{const{normalize:e}=n;return e(["Welcome to GoPMS!"])},wrong_credentials:n=>{const{normalize:e}=n;return e(["Wrong Credentials"])},"you_can_manage_all_properties_easily with_the_most_convenient_system":n=>{const{normalize:e}=n;return e(["You can manage all properties easily with the most convenient system."])},staff_list:n=>{const{normalize:e}=n;return e(["Staff list"])},staff_name:n=>{const{normalize:e}=n;return e(["Staff name"])},phone_number:n=>{const{normalize:e}=n;return e(["Phone number"])},status:n=>{const{normalize:e}=n;return e(["Status"])},are_you_sure_you_want_to_deactivate_this_account:n=>{const{normalize:e}=n;return e(["Are you sure you want to deactivate this account?"])},are_you_sure_you_want_to_activate_this_account:n=>{const{normalize:e}=n;return e(["Are you sure you want to activate this account?"])},the_length_is_from_8_to_12_characters:n=>{const{normalize:e}=n;return e(["The length is from 8 to 12 characters"])},the_length_is_from_1_to_50_characters:n=>{const{normalize:e}=n;return e(["The length is from 1 to 50 characters"])},the_length_is_from_1_to_100_characters:n=>{const{normalize:e}=n;return e(["The length is from 1 to 100 characters"])},submit:n=>{const{normalize:e}=n;return e(["Submit"])}},X={add_new_room:n=>{const{normalize:e}=n;return e(["__missing__"])},all:n=>{const{normalize:e}=n;return e(["__missing__"])},basic_info:n=>{const{normalize:e}=n;return e(["__missing__"])},booking:n=>{const{normalize:e}=n;return e(["__missing__"])},booking_source:n=>{const{normalize:e}=n;return e(["__missing__"])},cancel:n=>{const{normalize:e}=n;return e(["__missing__"])},change_password:n=>{const{normalize:e}=n;return e(["__missing__"])},create_new_booking:n=>{const{normalize:e}=n;return e(["__missing__"])},current_password:n=>{const{normalize:e}=n;return e(["__missing__"])},delete_floor:n=>{const{normalize:e}=n;return e(["__missing__"])},edit_room:n=>{const{normalize:e}=n;return e(["__missing__"])},edit_room_type:n=>{const{normalize:e}=n;return e(["__missing__"])},email:n=>{const{normalize:e}=n;return e(["__missing__"])},failed_to_save:n=>{const{normalize:e}=n;return e(["__missing__"])},floor:n=>{const{normalize:e}=n;return e(["__missing__"])},gender:n=>{const{normalize:e}=n;return e(["__missing__"])},guest:n=>{const{normalize:e}=n;return e(["__missing__"])},home:n=>{const{normalize:e}=n;return e(["__missing__"])},if_you_want_to_register_gopms_please_fill_out_the_registration_form_on_here:n=>{const{normalize:e}=n;return e(["__missing__"])},information:n=>{const{normalize:e}=n;return e(["__missing__"])},input_floor_name:n=>{const{normalize:e}=n;return e(["__missing__"])},mobile:n=>{const{normalize:e}=n;return e(["__missing__"])},my_account:n=>{const{normalize:e}=n;return e(["__missing__"])},name:n=>{const{normalize:e}=n;return e(["__missing__"])},new_floor:n=>{const{normalize:e}=n;return e(["__missing__"])},new_password:n=>{const{normalize:e}=n;return e(["__missing__"])},new_room:n=>{const{normalize:e}=n;return e(["__missing__"])},new_room_type:n=>{const{normalize:e}=n;return e(["__missing__"])},number_of_adults:n=>{const{normalize:e}=n;return e(["__missing__"])},number_of_beds:n=>{const{normalize:e}=n;return e(["__missing__"])},number_of_children:n=>{const{normalize:e}=n;return e(["__missing__"])},password:n=>{const{normalize:e}=n;return e(["__missing__"])},policy:n=>{const{normalize:e}=n;return e(["__missing__"])},rate_structure:n=>{const{normalize:e}=n;return e(["__missing__"])},"re-enter_password":n=>{const{normalize:e}=n;return e(["__missing__"])},report:n=>{const{normalize:e}=n;return e(["__missing__"])},role:n=>{const{normalize:e}=n;return e(["__missing__"])},room_name:n=>{const{normalize:e}=n;return e(["__missing__"])},room_setting:n=>{const{normalize:e}=n;return e(["__missing__"])},room_type:n=>{const{normalize:e}=n;return e(["__missing__"])},room_type_code:n=>{const{normalize:e}=n;return e(["__missing__"])},room_type_name:n=>{const{normalize:e}=n;return e(["__missing__"])},room_view:n=>{const{normalize:e}=n;return e(["__missing__"])},save:n=>{const{normalize:e}=n;return e(["__missing__"])},saved:n=>{const{normalize:e}=n;return e(["__missing__"])},service:n=>{const{normalize:e}=n;return e(["__missing__"])},setting:n=>{const{normalize:e}=n;return e(["__missing__"])},sign_in:n=>{const{normalize:e}=n;return e(["__missing__"])},sign_out:n=>{const{normalize:e}=n;return e(["__missing__"])},something_went_wrong:n=>{const{normalize:e}=n;return e(["__missing__"])},staff:n=>{const{normalize:e}=n;return e(["__missing__"])},support:n=>{const{normalize:e}=n;return e(["__missing__"])},this_field_is_required:n=>{const{normalize:e}=n;return e(["__missing__"])},this_is_invalid_value:n=>{const{normalize:e}=n;return e(["__missing__"])},this_value_is_too_big:n=>{const{normalize:e}=n;return e(["__missing__"])},this_value_is_too_long:n=>{const{normalize:e}=n;return e(["__missing__"])},this_value_is_too_short:n=>{const{normalize:e}=n;return e(["__missing__"])},this_value_is_too_small:n=>{const{normalize:e}=n;return e(["__missing__"])},transaction:n=>{const{normalize:e}=n;return e(["__missing__"])},welcome_to_gopms:n=>{const{normalize:e}=n;return e(["__missing__"])},wrong_credentials:n=>{const{normalize:e}=n;return e(["__missing__"])},"you_can_manage_all_properties_easily with_the_most_convenient_system":n=>{const{normalize:e}=n;return e(["__missing__"])},staff_list:n=>{const{normalize:e}=n;return e(["__missing__"])},staff_name:n=>{const{normalize:e}=n;return e(["__missing__"])},phone_number:n=>{const{normalize:e}=n;return e(["__missing__"])},status:n=>{const{normalize:e}=n;return e(["__missing__"])},are_you_sure_you_want_to_deactivate_this_account:n=>{const{normalize:e}=n;return e(["__missing__"])},are_you_sure_you_want_to_activate_this_account:n=>{const{normalize:e}=n;return e(["__missing__"])},confirm:n=>{const{normalize:e}=n;return e(["__missing__"])},the_length_is_from_8_to_12_characters:n=>{const{normalize:e}=n;return e(["__missing__"])},the_length_is_from_1_to_50_characters:n=>{const{normalize:e}=n;return e(["__missing__"])},the_length_is_from_1_to_100_characters:n=>{const{normalize:e}=n;return e(["__missing__"])},submit:n=>{const{normalize:e}=n;return e(["__missing__"])}},w;const Z=B({legacy:!1,locale:(w=localStorage.getItem("locale"))!=null?w:"en-US",fallbackLocale:"en-US",messages:{"en-US":J,"vi-VN":X}}),ee={class:"bg-white q-py-md q-px-lg"},ne={key:0},oe=["textContent"],re=["textContent"],te={name:"PmsSections"},_e=E(h(d({},te),{props:{title:null,description:null},setup(n){const e=n;return(o,_)=>(m(),a("section",ee,[u("header",null,[e.title||e.description?(m(),a("div",ne,[e.title?(m(),a("h1",{key:0,class:"text-h5 text-bold q-ma-none q-mb-md",textContent:v(n.title)},null,8,oe)):c("",!0),e.description?(m(),a("p",{key:1,class:"q-mb-md",textContent:v(n.description)},null,8,re)):c("",!0)])):c("",!0),z(o.$slots,"header")]),u("main",null,[z(o.$slots,"default")]),u("footer",null,[z(o.$slots,"footer")])]))}})),ie=[_e],se=n=>{ie.forEach(e=>{n.component(e.name,e)})};var ae={install:se};q(F).use(l).use(M,G).use(Z).use(x).use(ae).mount("#app");export{l as r};
