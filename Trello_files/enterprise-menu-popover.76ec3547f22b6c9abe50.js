(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"./app/gamma/src/components/popover/popover-menu.less":function(e,n,t){var r=t("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popover/popover-menu.less");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./app/gamma/src/components/popover/popover-menu.tsx":function(e,n,t){"use strict";t.d(n,"c",(function(){return R})),t.d(n,"b",(function(){return g})),t.d(n,"a",(function(){return _}));var r=t("./node_modules/classnames/index.js"),o=t.n(r),a=t("./app/common/lib/util/forward-ref-component.ts"),s=t("./app/common/components/singlespa/router-link.tsx"),c=t("./node_modules/react/index.js"),i=t.n(c),l=t("./app/gamma/src/components/popover/popover-menu.less"),p=t.n(l),d=t("./packages/a11y/index.ts");function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var v=function(e){var n=e.children,t=e.description,r=e.rawDescription,a=e.title,s=e.icon;return i.a.createElement(i.a.Fragment,null,s&&i.a.cloneElement(s,{size:"small"}),i.a.createElement("span",{className:o()(p.a.title,t&&p.a.withoutMargins)},a||n),(t||r)&&i.a.createElement("p",{className:p.a.description},t||r))},h=function(e){var n=e.appendSeparator,t=e.children;return i.a.createElement("li",{className:o()(p.a.item,n&&p.a.withSeparator)},t)},R=function(e){var n=e.appendSeparator,t=e.testId,r=e.href,a=e.className,c=e.onClick,l=b(e,["appendSeparator","testId","href","className","onClick"]),f=m(Object(d.a)(),2),R=f[0],g=f[1];return i.a.createElement(h,{appendSeparator:n},i.a.createElement(s.a,u({className:o()(p.a.link,a,R&&p.a.linkFocusRing),href:r,testId:t,onClick:c},g),i.a.createElement(v,l)))},g=Object(a.a)("PopoverMenuButton",(function(e,n){var t=e.appendSeparator,r=e.onClick,a=e.className,s=e.disabled,c=e.testId,l=b(e,["appendSeparator","onClick","className","disabled","testId"]),f=m(Object(d.a)(),2),R=f[0],g=f[1];return i.a.createElement(h,{appendSeparator:t},i.a.createElement("button",u({className:o()(p.a.link,R&&p.a.linkFocusRing,a),disabled:s,onClick:r,"data-test-id":c,ref:n},g),i.a.createElement(v,l)))})),_=function(e){var n=e.className,t=e.children,r=e.testId;return i.a.createElement("nav",{className:n},i.a.createElement("ul",{"data-test-id":r},t))}},"./app/gamma/src/components/popovers/enterprise-menu/enterprise-menu.less":function(e,n,t){var r=t("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popovers/enterprise-menu/enterprise-menu.less");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./app/gamma/src/components/popovers/enterprise-menu/index.tsx":function(e,n,t){"use strict";t.r(n);var r=t("./app/gamma/src/modules/state/models/enterprises.ts"),o=t("./node_modules/react-redux/es/index.js"),a=t("./app/gamma/src/selectors/enterprises.ts"),s=t("./app/common/lib/util/i18n/index.ts"),c=t("./node_modules/react/index.js"),i=t.n(c),l=t("./app/gamma/src/components/popovers/enterprise-menu/enterprise-menu.less"),p=t.n(l),d=t("./app/gamma/src/components/popover/popover-menu.tsx");function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=Object(s.forTemplate)("header_enterprise_admin_dashboard_menu"),g=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(s,e);var n,t,r,o,a=(n=s,function(){var e,t=h(n);if(v()){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function s(){return u(this,s),a.apply(this,arguments)}return t=s,(r=[{key:"componentDidMount",value:function(){this.props.fetchEnterprises()}},{key:"render",value:function(){var e=this,n=this.props,t=n.isLoading,r=n.enterprises;return t?i.a.createElement("div",null,R("loading")):0===r.length?i.a.createElement("div",null,R("no-enterprises")):i.a.createElement(d.a,{className:p.a.popoverMenu},r.map((function(n){return i.a.createElement(d.c,{key:"enterprise-".concat(n.id),href:"/e/".concat(n.name,"/admin"),onClick:function(){return e.props.onEnterpriseSelected(n.name)}},n.displayName)})))}}])&&m(t.prototype,r),o&&m(t,o),s}(i.a.Component);n.default=Object(o.c)((function(e){return{isLoading:Object(a.g)(e),enterprises:Object(a.a)(e)}}),(function(e){return{fetchEnterprises(){e(Object(r.b)())}}}))(g)},"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popover/popover-menu.less":function(e,n,t){(n=e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,'._2jR0BZMM5cBReR{background-color:transparent;border:none;background:#fff;border-radius:0;box-shadow:none;color:#172b4d;display:block;height:100%;padding:6px 12px;text-align:left;text-decoration:none;width:100%;transition:none;margin:0;outline:0}._2jR0BZMM5cBReR:hover{background-color:transparent;border:none;box-shadow:none;color:#172b4d;background:rgba(9,30,66,.04)}._2jR0BZMM5cBReR:active{background-color:transparent;border:none;box-shadow:none;color:#172b4d;background:#e4f0f6}._2jR0BZMM5cBReR._1zydsQvvGuxRTQ:focus{outline:1px dotted #000}@media screen and (-webkit-min-device-pixel-ratio:0){._2jR0BZMM5cBReR._1zydsQvvGuxRTQ:focus{outline:5px auto -webkit-focus-ring-color}}._2jR0BZMM5cBReR[disabled]:active,._2jR0BZMM5cBReR[disabled]:focus,._2jR0BZMM5cBReR[disabled]:hover{background:transparent;color:#a5adba!important}._2jR0BZMM5cBReR[disabled]:active ._225g9OeRSRtf4N svg,._2jR0BZMM5cBReR[disabled]:focus ._225g9OeRSRtf4N svg,._2jR0BZMM5cBReR[disabled]:hover ._225g9OeRSRtf4N svg{color:#a5adba!important}._2jR0BZMM5cBReR[disabled]:active span[name=check],._2jR0BZMM5cBReR[disabled]:focus span[name=check],._2jR0BZMM5cBReR[disabled]:hover span[name=check]{color:#6b778c!important}._2jR0BZMM5cBReR[disabled]:active ._2DBw9GxD3tha0R,._2jR0BZMM5cBReR[disabled]:focus ._2DBw9GxD3tha0R,._2jR0BZMM5cBReR[disabled]:hover ._2DBw9GxD3tha0R{color:#a5adba!important}._1uK2vQ_aMRS2NU{font-size:14px;font-weight:400;line-height:20px}._1uK2vQ_aMRS2NU.l5dERcflZdjE0x{margin:0}._2DBw9GxD3tha0R{color:#5e6c84;font-size:12px;font-weight:400;line-height:16px;margin:4px 0 0;padding:0}._1pCh-d8Vg1eITK:after{background-color:rgba(9,30,66,.13);content:" ";display:block;height:1px;margin:8px auto;width:calc(100% - 20px)}',""]),n.locals={link:"_2jR0BZMM5cBReR",linkFocusRing:"_1zydsQvvGuxRTQ",icon:"_225g9OeRSRtf4N",description:"_2DBw9GxD3tha0R",title:"_1uK2vQ_aMRS2NU",withoutMargins:"l5dERcflZdjE0x",withSeparator:"_1pCh-d8Vg1eITK"}},"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popovers/enterprise-menu/enterprise-menu.less":function(e,n,t){(n=e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".-lGl2yEhqfdGTe{margin:0 -12px}",""]),n.locals={popoverMenu:"-lGl2yEhqfdGTe"}}}]);
//# sourceMappingURL=enterprise-menu-popover.76ec3547f22b6c9abe50.js.map