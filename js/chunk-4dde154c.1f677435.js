(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dde154c"],{"318e":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-account"},[e.showI18n?r("div",{staticClass:"page-account-header"},[r("i-header-i18n")],1):e._e(),r("div",{staticClass:"page-account-container"},[e._m(0),r("Login",{on:{"on-submit":e.handleSubmit}},[r("UserName",{attrs:{name:"username",value:"admin"}}),r("Password",{attrs:{name:"password",value:"WhWs37lhs2021","enter-to-submit":""}}),r("Submit",[e._v(e._s(e.$t("page.login.submit")))])],1),r("div",{staticClass:"page-account-other"},[r("router-link",{staticClass:"page-account-register",attrs:{to:{name:"register"}}},[e._v(e._s(e.$t("page.login.signup")))])],1)],1),r("i-copyright")],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-account-top"},[n("div",{staticClass:"page-account-top-logo"},[n("img",{attrs:{src:r("9d64"),alt:"logo"}})])])}],o=(r("8e6e"),r("ac6a"),r("456d"),r("a481"),r("ade3")),c=r("2f08"),s=r("2f62"),i=r("3dda");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={mixins:[i["a"]],components:{iCopyright:c["a"]},data:function(){return{autoLogin:!0}},methods:p(p({},Object(s["b"])("admin/account",["login"])),{},{handleSubmit:function(e,t){var r=this;if(e){var n=t.username,a=t.password;this.login({username:n,password:a}).then((function(){r.$router.replace(r.$route.query.redirect||"/")}))}}})},b=l,d=r("2877"),f=Object(d["a"])(b,n,a,!1,null,null,null);t["default"]=f.exports},"3dda":function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var n=r("ade3"),a=r("8af8"),o=r("2f62");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]={components:{iHeaderI18n:a["a"]},computed:s({},Object(o["e"])("admin/layout",["showI18n"]))}}}]);