(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,c){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(s.AmpStateContext))};var n,r=(n=c("q1tI"))&&n.__esModule?n:{default:n},s=c("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,c=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,s=e.hasQuery,i=void 0!==s&&s;return c||r&&i}},"8Kt/":function(e,t,c){"use strict";c("lSNA");t.__esModule=!0,t.defaultHead=h,t.default=void 0;var n,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var c={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var s=n?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(c,r,s):c[r]=e[r]}c.default=e,t&&t.set(e,c);return c}(c("q1tI")),s=(n=c("Xuae"))&&n.__esModule?n:{default:n},i=c("lwAK"),a=c("FYa8"),l=c("/0+H");function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var c=r.default.Children.toArray(t.props.children);return e.concat(c)}),[]).reduce(u,[]).reverse().concat(h(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,c=new Set,n={};return function(r){var s=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var a=r.key.slice(r.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(r.type){case"title":case"base":t.has(r.type)?s=!1:t.add(r.type);break;case"meta":for(var l=0,o=d.length;l<o;l++){var h=d[l];if(r.props.hasOwnProperty(h))if("charSet"===h)c.has(h)?s=!1:c.add(h);else{var u=r.props[h],f=n[h]||new Set;"name"===h&&i||!f.has(u)?(f.add(u),n[h]=f):s=!1}}}return s}}()).reverse().map((function(e,t){var c=e.key||t;return r.default.cloneElement(e,{key:c})}))}function j(e){var t=e.children,c=(0,r.useContext)(i.AmpStateContext),n=(0,r.useContext)(a.HeadManagerContext);return r.default.createElement(s.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,l.isInAmpMode)(c)},t)}j.rewind=function(){};var v=j;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,c){"use strict";c.d(t,"a",(function(){return M}));var n=c("nKUr");function r(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?s(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=c("rePB"),u=c("YFqc"),d=c.n(u),f=c("q1tI"),j=c.n(f),v=c("xI/i"),b=c.n(v);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,n=o(e);if(t){var r=o(this).constructor;c=Reflect.construct(n,arguments,r)}else c=n.apply(this,arguments);return l(this,c)}}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(o,e);var t,c,a,l=m(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t=l.call(this,e),Object(h.a)(s(t),"toggleHamburger",(function(){t.setState({hamburgerActive:!t.state.hamburgerActive},(function(){t.state.hamburgerActive?t.setState({navBarActiveClass:b.a.isActive}):t.setState({navBarActiveClass:""})}))})),t.state={hamburgerActive:!1,hamburgerActiveClass:"",headerShow:!1},t}return t=o,(c=[{key:"render",value:function(){var e=this;return Object(n.jsxs)("header",{className:"justify-center md:items-center mx-auto relative text-white z-50 w-full ".concat(this.state.navBarActiveClass),children:[Object(n.jsxs)("nav",{className:"flex flex-col flex-grow justify-center",children:[Object(n.jsxs)("button",{className:"absolute focus:outline-none mr-6 mt-6 right-0 top-0",onClick:function(){return e.toggleHamburger()},children:[Object(n.jsx)("div",{className:b.a.iconHamburger,children:Object(n.jsx)("svg",{className:"fill-current",height:"29",width:"40",children:Object(n.jsx)("use",{xlinkHref:"#icon-menu"})})}),Object(n.jsx)("div",{className:b.a.iconClose+" hidden",children:Object(n.jsx)("svg",{className:"fill-current",height:"29",width:"40",children:Object(n.jsx)("use",{xlinkHref:"#icon-close"})})})]}),Object(n.jsxs)("div",{className:b.a.mainNav+" flex font-bold font-sans hidden",children:[Object(n.jsx)(d.a,{href:"/about",children:Object(n.jsxs)("a",{className:b.a.scrollingItem,children:[Object(n.jsx)("div",{className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{className:b.a.scrollingText,children:"About RFP 2021"}),Object(n.jsx)("svg",{className:"fill-current mx-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{className:b.a.scrollingText,children:"About RFP 2021"}),Object(n.jsx)("svg",{className:"fill-current mx-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{className:b.a.scrollingText,children:"About RFP 2021"}),Object(n.jsx)("svg",{className:"fill-current mx-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"About RFP 2021"}),Object(n.jsx)("svg",{className:"fill-current mx-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{className:b.a.scrollingText,children:"About RFP 2021"}),Object(n.jsx)("svg",{className:"fill-current mx-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{className:b.a.scrollingText,children:"About RFP 2021"}),Object(n.jsx)("svg",{className:"fill-current mx-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})})]})}),Object(n.jsx)(d.a,{href:"/schedule",children:Object(n.jsxs)("a",{className:b.a.scrollingItem,children:[Object(n.jsx)("div",{className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"See Schedule"}),Object(n.jsx)("svg",{className:"fill-current ml-6 mr-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"See Schedule"}),Object(n.jsx)("svg",{className:"fill-current ml-6 mr-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"See Schedule"}),Object(n.jsx)("svg",{className:"fill-current ml-6 mr-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"See Schedule"}),Object(n.jsx)("svg",{className:"fill-current ml-6 mr-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"See Schedule"}),Object(n.jsx)("svg",{className:"fill-current ml-6 mr-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})})]})}),Object(n.jsxs)("a",{href:"#",className:b.a.scrollingItem,children:[Object(n.jsx)("div",{className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"Register Now"}),Object(n.jsx)("svg",{className:"fill-current ml-6 mr-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"Register Now"}),Object(n.jsx)("svg",{className:"fill-current ml-6 mr-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"Register Now"}),Object(n.jsx)("svg",{className:"fill-current ml-6 mr-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"Register Now"}),Object(n.jsx)("svg",{className:"fill-current ml-6 mr-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})}),Object(n.jsx)("div",{"aria-hidden":"true",className:b.a.scrolling,children:Object(n.jsxs)("div",{className:"flex items-center",href:"#",children:[Object(n.jsx)("p",{children:"Register Now"}),Object(n.jsx)("svg",{className:"fill-current ml-6 mr-4",height:"3",width:"80",children:Object(n.jsx)("use",{xlinkHref:"#icon-navline"})})]})})]})]})]}),Object(n.jsxs)("div",{className:b.a.socialMedia+" hidden flex md:justify-between md:max-w-6xl md:w-full items-end",children:[Object(n.jsxs)("div",{className:"flex mr-5",children:[Object(n.jsx)("a",{"aria-label":"RPF Instagram",className:"mr-6",href:"#",target:"_blank",children:Object(n.jsx)("svg",{className:"fill-current",height:"20",width:"20",children:Object(n.jsx)("use",{xlinkHref:"#icon-instagram"})})}),Object(n.jsx)("a",{"aria-label":"RFP Twitter",className:"mr-6",href:"#",target:"_blank",children:Object(n.jsx)("svg",{className:"fill-current",height:"20",width:"20",children:Object(n.jsx)("use",{xlinkHref:"#icon-twitter"})})}),Object(n.jsx)("a",{"aria-label":"RFP Facebook",href:"#",target:"_blank",children:Object(n.jsx)("svg",{className:"fill-current",height:"20",width:"20",children:Object(n.jsx)("use",{xlinkHref:"#icon-facebook"})})})]}),Object(n.jsx)("div",{className:"font-mono",children:"Free virtual poetry festival June 05, 2021"})]})]})}}])&&r(t.prototype,c),a&&r(t,a),o}(j.a.Component),p=c("gbQX"),O=c.n(p);function g(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("footer",{className:O.a.footer})})}function y(){return Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"hidden",children:[Object(n.jsxs)("symbol",{id:"icon-close",viewBox:"0 0 33 32",children:[Object(n.jsx)("path",{d:"M0.827 0.776l0.552-0.552 31.237 31.237-0.552 0.552-31.237-31.237z"}),Object(n.jsx)("path",{d:"M0.224 31.401l31.237-31.237 0.552 0.552-31.237 31.237-0.552-0.552z"})]}),Object(n.jsx)("symbol",{id:"icon-facebook",viewBox:"0 0 32 32",children:Object(n.jsx)("path",{d:"M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"})}),Object(n.jsxs)("symbol",{id:"icon-instagram",viewBox:"0 0 32 32",children:[Object(n.jsx)("path",{d:"M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"}),Object(n.jsx)("path",{d:"M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"}),Object(n.jsx)("path",{d:"M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"})]}),Object(n.jsx)("symbol",{id:"icon-twitter",viewBox:"0 0 32 32",children:Object(n.jsx)("path",{d:"M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"})}),Object(n.jsxs)("symbol",{id:"icon-logo",viewBox:"0 0 60 32",children:[Object(n.jsx)("path",{d:"M11.89 0.054c-1.794 0.316-3.218 1.632-3.66 3.389-0.261 1.046-0.144 2.118 0.361 3.119 0.46 0.937 1.109 1.577 2.037 2.037 0.712 0.352 1.208 0.469 2.001 0.478 0.343 0 0.703-0.018 0.847-0.054 1.424-0.306 2.542-1.145 3.182-2.38 0.937-1.803 0.568-4.011-0.91-5.408-0.559-0.532-1.253-0.919-1.992-1.109-0.523-0.135-1.352-0.162-1.866-0.072zM0.64 0.117c-0.009 0.036-0.009 2.046-0.009 4.471l0.009 4.417 3.579 0.009c2.055 0.009 3.579-0.009 3.57-0.027s-0.667-0.748-1.46-1.632c-0.784-0.865-1.442-1.604-1.451-1.632s0.027-0.045 0.090-0.045c0.162 0 0.667-0.189 0.928-0.334 1.037-0.622 1.586-1.92 1.289-3.092-0.135-0.559-0.343-0.91-0.748-1.325-0.279-0.288-0.424-0.388-0.703-0.523-0.64-0.316-0.586-0.306-2.957-0.325-1.722-0.018-2.118-0.009-2.136 0.036zM16.541 0.090c0 0.009 0.658 1.010 1.469 2.236 0.811 1.217 1.46 2.235 1.442 2.272-0.009 0.027-0.676 1.028-1.469 2.226-0.793 1.19-1.442 2.181-1.442 2.19s1.938 0.018 4.309 0.018c2.371 0 4.309-0.009 4.309-0.018s-0.658-1.010-1.46-2.226c-0.802-1.217-1.46-2.217-1.46-2.226s0.658-1.010 1.46-2.226c0.802-1.217 1.46-2.217 1.46-2.236 0-0.009-1.938-0.018-4.309-0.018-2.371-0.009-4.309 0-4.309 0.009zM26.213 0.117c-0.009 0.027-0.018 2.046-0.009 4.471l0.009 4.417 1.983 0.009c2.326 0.009 2.488 0 3.092-0.297 0.631-0.306 1.046-0.721 1.343-1.325 0.234-0.478 0.297-0.811 0.279-1.379-0.009-0.397-0.036-0.532-0.144-0.829-0.279-0.802-0.956-1.496-1.713-1.767-0.126-0.045-0.225-0.099-0.216-0.135 0-0.027 0.054-0.171 0.117-0.325 0.081-0.198 0.117-0.361 0.135-0.622 0.054-0.974-0.541-1.848-1.478-2.154-0.252-0.081-0.37-0.090-1.821-0.108-1.28-0.009-1.559 0-1.577 0.045zM33.956 0.126c-0.009 0.027-0.018 1.334-0.009 2.903 0.018 2.767 0.018 2.848 0.108 3.191 0.352 1.343 1.361 2.389 2.695 2.776 0.379 0.108 1.307 0.153 1.695 0.081 1.496-0.279 2.641-1.334 3.056-2.803 0.090-0.306 0.090-0.388 0.099-3.254l0.009-2.939h-3.813c-3.209-0.009-3.822 0-3.84 0.045zM42.673 0.099c-0.018 0.018-0.027 2.028-0.027 4.48v4.453h3.588c1.974 0 3.588-0.009 3.588-0.018s-0.658-0.748-1.46-1.632c-0.802-0.883-1.46-1.623-1.46-1.65 0-0.018 0.081-0.054 0.171-0.063 0.099-0.018 0.297-0.072 0.442-0.135 0.784-0.316 1.37-0.937 1.641-1.767 0.090-0.288 0.108-0.397 0.108-0.847s-0.018-0.559-0.108-0.847c-0.153-0.46-0.37-0.82-0.712-1.154-0.46-0.46-0.992-0.721-1.641-0.802-0.343-0.045-4.092-0.063-4.128-0.018zM49.433 0.090c-0.009 0.009 0.189 0.46 0.451 1.001s0.901 1.857 1.415 2.93l0.946 1.956v3.047l4.597-0.018 0.018-3.047 1.397-2.894c0.784-1.595 1.415-2.921 1.415-2.948 0-0.036-1.271-0.045-5.102-0.045-2.812 0-5.12 0.009-5.138 0.018z"}),Object(n.jsx)("path",{d:"M17.001 11.412c-1.794 0.316-3.209 1.632-3.66 3.407-0.261 1.046-0.144 2.127 0.361 3.128 0.46 0.937 1.109 1.586 2.037 2.046 0.712 0.352 1.208 0.469 2.001 0.478 0.343 0 0.703-0.018 0.847-0.054 1.415-0.306 2.542-1.154 3.182-2.389 0.937-1.812 0.559-4.020-0.91-5.417-0.559-0.541-1.253-0.919-1.992-1.118-0.523-0.144-1.352-0.171-1.866-0.081zM4.516 11.484c-0.009 0.027-0.009 2.037-0.009 4.471l0.009 4.426 3.822 0.018v-1.28l0.406-0.045c0.721-0.081 1.334-0.325 1.902-0.757 1.848-1.397 2.028-4.119 0.388-5.751-0.64-0.64-1.424-1.010-2.326-1.1-0.631-0.063-4.165-0.054-4.192 0.018zM23.301 15.919v4.489h7.878v-3.011h-2.47v-2.975h-2.434l-0.018-2.957-2.957-0.018v4.471zM31.324 11.457c-0.018 0.018-0.027 0.883-0.027 1.92v1.893h1.28l0.018 5.102 3.822 0.018v-5.138h1.28v-3.84h-3.173c-1.749 0.018-3.182 0.027-3.2 0.045zM38.724 15.919v4.489h7.175l-0.135-0.153c-0.072-0.081-0.739-0.82-1.478-1.641-0.739-0.811-1.343-1.496-1.352-1.514s0.108-0.054 0.243-0.081c0.712-0.135 1.496-0.757 1.839-1.46 0.225-0.46 0.306-0.793 0.306-1.28 0.009-1.226-0.775-2.308-1.956-2.704-0.37-0.126-0.874-0.153-2.767-0.153h-1.884v4.498zM45.476 11.448c-0.009 0.009 0.189 0.46 0.451 1.001s0.901 1.857 1.415 2.939l0.946 1.956v3.047l4.597-0.018 0.018-3.065 1.397-2.903c0.766-1.595 1.397-2.921 1.397-2.948 0-0.036-1.271-0.045-5.102-0.045-2.803 0.018-5.111 0.027-5.12 0.036z"}),Object(n.jsx)("path",{d:"M20.859 22.752c-0.388 0.054-0.974 0.252-1.325 0.46-0.739 0.433-1.397 1.352-1.632 2.254-0.108 0.424-0.108 1.118 0 1.541 0.162 0.622 0.559 1.271 1.127 1.812l0.325 0.316-1.478 1.568 0.090 0.099c0.361 0.397 1.082 0.829 1.695 1.019 0.343 0.108 0.424 0.117 1.073 0.117 0.64 0 0.73-0.009 1.064-0.108 0.721-0.225 1.307-0.595 1.749-1.118 1.019-1.19 1.199-2.749 0.46-4.002-0.162-0.279-0.712-0.883-1.001-1.1l-0.117-0.090 1.532-1.586-0.135-0.135c-0.189-0.198-0.748-0.559-1.082-0.703-0.748-0.334-1.55-0.442-2.344-0.343zM48.234 23.247c-0.135 0.279-1.091 2.29-2.127 4.462s-1.893 3.975-1.902 4.020c-0.018 0.072 0.207 0.072 4.291 0.072 3.434 0 4.309-0.009 4.291-0.054-0.054-0.126-4.282-8.978-4.3-8.996-0.009-0.009-0.117 0.216-0.252 0.496zM0.009 22.878c-0.009 0.027-0.009 2.046-0.009 4.471l0.009 4.417h2.957v-2.957h2.47v-2.975h2.47l-0.018-2.993-3.921-0.009c-3.128 0-3.939 0.009-3.957 0.045zM8.906 22.878c-0.009 0.027-0.018 2.037-0.009 4.471l0.009 4.417 7.896 0.018-0.018-2.993-2.452-0.018v-2.975h-2.47v-2.975h-1.46c-1.145 0.009-1.478 0.018-1.496 0.054zM25.519 22.86c-0.018 0.018-0.027 0.883-0.027 1.92v1.893h1.28v5.12h3.822v-5.12h1.28l-0.018-3.822-3.155-0.009c-1.74-0.009-3.164 0-3.182 0.018zM32.883 22.878c-0.009 0.027-0.018 2.037-0.009 4.471l0.009 4.417 3.804 0.018v-8.951h-1.893c-1.478 0-1.893 0.009-1.911 0.045zM37.724 22.851c0 0.009 0.928 1.965 2.064 4.345s2.109 4.435 2.172 4.561c0.063 0.126 0.117 0.234 0.126 0.234 0.027 0 4.363-9.086 4.363-9.14 0-0.018-1.965-0.027-4.363-0.027-2.398 0.009-4.363 0.018-4.363 0.027zM53.859 22.86c-0.018 0.018-0.027 2.037-0.027 4.48v4.453l6.364-0.018 0.018-4.435h-2.56l-0.018-4.489-1.875-0.009c-1.028-0.009-1.893 0-1.902 0.018z"})]}),Object(n.jsxs)("symbol",{id:"icon-logo-wide",viewBox:"0 0 656 32",children:[Object(n.jsx)("path",{d:"M39.68 0.213c-6.293 1.067-11.307 5.76-12.907 11.947-0.96 3.627-0.533 7.467 1.28 10.987 1.6 3.307 3.947 5.547 7.147 7.147 2.453 1.28 4.267 1.707 7.040 1.707 1.173 0 2.453-0.107 2.987-0.213 5.013-1.067 8.96-4.053 11.2-8.427 3.307-6.293 2.027-14.080-3.2-18.987-2.027-1.92-4.373-3.2-7.040-3.947-1.813-0.427-4.693-0.533-6.507-0.213zM0 0.427c0 0.107 0 7.147 0 15.68v15.467h12.587c7.253 0 12.587 0 12.587-0.107s-2.347-2.667-5.12-5.76c-2.773-3.093-5.12-5.653-5.12-5.76s0.107-0.107 0.32-0.107c0.533 0 2.347-0.64 3.307-1.173 3.627-2.24 5.547-6.72 4.587-10.88-0.533-1.92-1.173-3.2-2.667-4.693-0.96-0.96-1.493-1.387-2.453-1.813-2.24-1.067-2.133-1.067-10.453-1.173-6.080 0.107-7.467 0.107-7.573 0.32zM56 0.32c0 0 2.347 3.52 5.12 7.893 2.88 4.267 5.12 7.893 5.12 8s-2.347 3.627-5.12 7.787c-2.773 4.16-5.12 7.68-5.12 7.68s6.827 0.107 15.147 0.107c8.32 0 15.147 0 15.147-0.107 0 0-2.347-3.52-5.12-7.787-2.88-4.267-5.12-7.787-5.12-7.787s2.347-3.52 5.12-7.787c2.88-4.267 5.12-7.787 5.12-7.893s-6.827-0.107-15.147-0.107c-8.32-0.107-15.147 0-15.147 0zM90.133 0.427c0 0.107-0.107 7.147 0 15.68v15.467h6.933c8.213 0 8.747 0 10.88-1.067 2.24-1.067 3.733-2.56 4.693-4.693 0.853-1.707 1.067-2.88 0.96-4.907 0-1.387-0.107-1.92-0.533-2.88-0.96-2.773-3.413-5.227-5.973-6.187-0.427-0.213-0.747-0.32-0.747-0.427s0.213-0.64 0.427-1.173c0.32-0.64 0.427-1.28 0.427-2.133 0.213-3.413-1.92-6.507-5.227-7.573-0.853-0.32-1.28-0.32-6.4-0.32-4.373 0-5.44 0-5.44 0.213zM117.44 0.427c0 0.107 0 4.693 0 10.24 0 9.707 0.107 10.027 0.427 11.2 1.28 4.693 4.8 8.427 9.493 9.707 1.387 0.427 4.587 0.533 5.973 0.32 5.227-0.96 9.28-4.693 10.773-9.813 0.32-1.067 0.32-1.387 0.32-11.413v-10.347h-13.44c-11.413-0.107-13.547 0-13.547 0.107zM148.053 0.32c0 0-0.107 7.147-0.107 15.787v15.68h12.587c6.933 0 12.587 0 12.587-0.107 0 0-2.347-2.667-5.12-5.76s-5.12-5.76-5.12-5.76c0-0.107 0.32-0.213 0.64-0.213s1.067-0.32 1.6-0.427c2.773-1.067 4.8-3.307 5.76-6.187 0.32-0.96 0.427-1.387 0.427-2.987s0-1.92-0.427-2.987c-0.533-1.6-1.28-2.88-2.453-4.053-1.6-1.6-3.52-2.56-5.76-2.88-1.173-0.213-14.4-0.213-14.613-0.107zM171.947 0.32c0 0 0.64 1.6 1.6 3.52s3.2 6.507 5.013 10.347l3.307 6.827v10.667h16.213v-10.667l4.907-10.133c2.667-5.547 4.907-10.24 4.907-10.347s-4.48-0.213-18.027-0.213c-9.707-0.107-17.92 0-17.92 0z"}),Object(n.jsx)("path",{d:"M279.68 0.213c-6.293 1.067-11.307 5.76-12.907 11.947-0.96 3.627-0.533 7.467 1.28 10.987 1.6 3.307 3.947 5.547 7.147 7.147 2.453 1.28 4.267 1.707 7.040 1.707 1.173 0 2.453-0.107 2.987-0.213 5.013-1.067 8.96-4.053 11.2-8.427 3.307-6.4 2.027-14.080-3.2-19.093-2.027-1.92-4.373-3.2-7.040-3.947-1.707-0.32-4.693-0.427-6.507-0.107zM235.733 0.427c0 0.107 0 7.147 0 15.787v15.573h13.44v-4.48l1.387-0.213c2.56-0.32 4.693-1.173 6.72-2.667 6.507-4.907 7.147-14.507 1.387-20.267-2.24-2.24-5.013-3.52-8.213-3.84-2.133-0.107-14.613-0.107-14.72 0.107zM301.867 16v15.787h27.733v-10.667h-8.747v-10.453h-8.533v-10.453h-10.453v15.787zM330.133 0.32c0 0-0.107 3.093-0.107 6.72v6.613h4.48v17.92h13.44v-18.133h4.48v-13.227h-11.2c-5.973 0-10.987 0.107-11.093 0.107zM356.16 16v15.787h25.387l-0.427-0.533c-0.213-0.32-2.56-2.88-5.227-5.76-2.56-2.88-4.693-5.227-4.8-5.333 0-0.107 0.32-0.213 0.853-0.32 2.56-0.427 5.227-2.667 6.507-5.12 0.747-1.6 1.067-2.773 1.067-4.48 0-4.373-2.667-8.107-6.933-9.493-1.28-0.427-3.093-0.533-9.707-0.533h-6.613v15.787zM379.947 0.32c0 0 0.64 1.6 1.6 3.52s3.2 6.507 5.013 10.347l3.307 6.827v10.667h16.213v-10.667l4.907-10.24c2.667-5.653 4.907-10.24 4.907-10.347s-4.48-0.213-18.027-0.213c-9.707 0-17.813 0.107-17.92 0.107z"}),Object(n.jsx)("path",{d:"M517.227 0.107c-1.387 0.213-3.413 0.853-4.693 1.6-2.56 1.493-4.907 4.693-5.76 7.787-0.427 1.493-0.427 3.84 0 5.333 0.533 2.133 1.92 4.373 3.947 6.293l1.173 1.067-2.56 2.667-2.667 2.667 0.32 0.32c1.28 1.387 3.84 2.88 5.973 3.52 1.173 0.32 1.493 0.427 3.733 0.427s2.56 0 3.733-0.427c2.56-0.747 4.587-2.027 6.187-3.84 3.627-4.16 4.267-9.493 1.6-13.76-0.427-0.96-2.347-3.093-3.413-3.84l-0.427-0.32 5.333-5.547-0.427-0.427c-0.64-0.64-2.667-1.92-3.84-2.453-2.56-0.96-5.44-1.387-8.213-1.067zM613.76 1.813c-0.427 0.96-3.84 7.893-7.467 15.36s-6.72 13.76-6.72 13.867c-0.107 0.213 0.747 0.213 15.147 0.213 12.16 0 15.147 0 15.147-0.213-0.213-0.427-15.040-30.933-15.147-31.040-0.107 0.107-0.533 0.853-0.96 1.813zM443.733 0.533c0 0.107 0 7.040 0 15.467v15.253h10.453v-10.24h8.747v-10.24h8.747v-10.24h-13.867c-11.093-0.107-13.973-0.107-14.080 0zM475.093 0.533c0 0.107 0 7.040 0 15.467v15.253h27.733v-10.24h-8.64v-10.347h-8.747v-10.24h-5.12c-3.947 0-5.12 0-5.227 0.107zM533.653 0.533c-0.107 0-0.107 2.987-0.107 6.613v6.507h4.48v17.707h13.44v-17.707h4.48v-13.227h-11.093c-6.080 0-11.093 0-11.2 0.107zM559.68 0.533c0 0.107 0 7.040 0 15.467v15.253h13.44v-30.827h-6.72c-5.227 0-6.72 0-6.72 0.107zM576.747 0.427c0 0 3.307 6.827 7.253 15.040 4.053 8.213 7.467 15.253 7.68 15.68s0.427 0.853 0.427 0.853c0.107 0 15.36-31.36 15.36-31.467s-6.933-0.107-15.36-0.107c-8.427 0-15.36 0-15.36 0zM633.6 0.533c-0.107 0-0.107 7.040-0.107 15.467v15.36h22.4v-15.36h-8.96v-15.36h-6.613c-3.627-0.213-6.72-0.213-6.72-0.107z"})]}),Object(n.jsxs)("symbol",{id:"icon-menu",viewBox:"0 0 43 32",children:[Object(n.jsx)("path",{d:"M0 16h42.667v1.067h-42.667v-1.067z"}),Object(n.jsx)("path",{d:"M0 0h42.667v1.067h-42.667v-1.067z"}),Object(n.jsx)("path",{d:"M0 30.933h42.667v1.067h-42.667v-1.067z"})]}),Object(n.jsx)("symbol",{id:"icon-navline",viewBox:"0 0 3968 32",children:Object(n.jsx)("path",{d:"M0 0h3968v32h-3968v-32z"})}),Object(n.jsx)("symbol",{id:"icon-rightarrow",viewBox:"0 0 55 32",children:Object(n.jsx)("path",{d:"M37.943 30.857l-3.657-3.657 6.4-6.4 3.657-2.971v-0.229l-7.086 0.457h-36.114v-5.029h36.114l7.086 0.457v-0.229l-3.657-2.971-6.4-6.4 3.657-3.429 15.086 15.086-15.086 15.314z"})}),Object(n.jsx)("symbol",{id:"icon-uparrow",viewBox:"0 0 61 32",children:Object(n.jsx)("path",{d:"M59.055 31.127l-28.509-28.655-28.509 28.655-1.164-1.164 29.673-29.527 29.673 29.527z"})})]})}function M(e){var t=e.children;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(y,{}),Object(n.jsx)(x,{}),Object(n.jsx)("div",{className:"min-h-screen bg-gray-900 relative",children:Object(n.jsx)("main",{className:"relative z-30",children:t})}),Object(n.jsx)(g,{})]})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,c){var n=c("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,c){var n=c("Ijbi"),r=c("EbDI"),s=c("ZhPi"),i=c("Bnag");e.exports=function(e){return n(e)||r(e)||s(e)||i()}},Xuae:function(e,t,c){"use strict";var n=c("RIqP"),r=c("lwsE"),s=c("W8MJ"),i=(c("PJYZ"),c("7W2i")),a=c("a1gu"),l=c("Nsbk");function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,n=l(e);if(t){var r=l(this).constructor;c=Reflect.construct(n,arguments,r)}else c=n.apply(this,arguments);return a(this,c)}}t.__esModule=!0,t.default=void 0;var h=c("q1tI"),u=function(e){i(c,e);var t=o(c);function c(e){var s;return r(this,c),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(n(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(c,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),c}(h.Component);t.default=u},YFqc:function(e,t,c){e.exports=c("cTJO")},cTJO:function(e,t,c){"use strict";var n=c("J4zp"),r=c("284h");t.__esModule=!0,t.default=void 0;var s=r(c("q1tI")),i=c("elyg"),a=c("nOHt"),l=c("vNVm"),o={};function h(e,t,c,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,c,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[t+"%"+c+(r?"%"+r:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,c=(0,a.useRouter)(),r=c&&c.pathname||"/",u=s.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),c=n(t,2),s=c[0],a=c[1];return{href:s,as:e.as?(0,i.resolveHref)(r,e.as):a||s}}),[r,e.href,e.as]),d=u.href,f=u.as,j=e.children,v=e.replace,b=e.shallow,m=e.scroll,x=e.locale;"string"===typeof j&&(j=s.default.createElement("a",null,j));var p=s.Children.only(j),O=p&&"object"===typeof p&&p.ref,g=(0,l.useIntersection)({rootMargin:"200px"}),y=n(g,2),M=y[0],w=y[1],N=s.default.useCallback((function(e){M(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,M]);(0,s.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(d),n="undefined"!==typeof x?x:c&&c.locale,r=o[d+"%"+f+(n?"%"+n:"")];e&&!r&&h(c,d,f,{locale:n})}),[f,d,w,x,t,c]);var _={ref:N,onClick:function(e){p.props&&"function"===typeof p.props.onClick&&p.props.onClick(e),e.defaultPrevented||function(e,t,c,n,r,s,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(c))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),t[r?"replace":"push"](c,n,{shallow:s,locale:l,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,c,d,f,v,b,m,x)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(p.props&&"function"===typeof p.props.onMouseEnter&&p.props.onMouseEnter(e),h(c,d,f,{priority:!0}))}};if(e.passHref||"a"===p.type&&!("href"in p.props)){var z="undefined"!==typeof x?x:c&&c.locale,k=(0,i.getDomainLocale)(f,z,c&&c.locales,c&&c.domainLocales);_.href=k||(0,i.addBasePath)((0,i.addLocale)(f,z,c&&c.defaultLocale))}return s.default.cloneElement(p,_)};t.default=u},g4pe:function(e,t,c){e.exports=c("8Kt/")},gbQX:function(e,t,c){e.exports={footer:"Footer_footer__1_BW4",logo:"Footer_logo__3AMVg"}},lSNA:function(e,t){e.exports=function(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}},lwAK:function(e,t,c){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var r=((n=c("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=r},rePB:function(e,t,c){"use strict";function n(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return n}))},vNVm:function(e,t,c){"use strict";var n=c("J4zp"),r=c("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,c=e.disabled||!a,r=(0,s.useRef)(),o=(0,s.useState)(!1),h=n(o,2),u=h[0],d=h[1],f=(0,s.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),c||u||e&&e.tagName&&(r.current=function(e,t,c){var n=function(e){var t=e.rootMargin||"",c=l.get(t);if(c)return c;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),c=e.isIntersecting||e.intersectionRatio>0;t&&c&&t(c)}))}),e);return l.set(t,c={id:t,observer:r,elements:n}),c}(c),r=n.id,s=n.observer,i=n.elements;return i.set(e,t),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),l.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[c,t,u]);return(0,s.useEffect)((function(){a||u||(0,i.default)((function(){return d(!0)}))}),[u]),[f,u]};var s=c("q1tI"),i=r(c("0G5g")),a="undefined"!==typeof IntersectionObserver;var l=new Map},"xI/i":function(e,t,c){e.exports={isActive:"header_isActive__D_MV1",mainNav:"header_mainNav__3Jfmq",iconClose:"header_iconClose__1TbKG",iconHamburger:"header_iconHamburger__1NjCR",socialMedia:"header_socialMedia__3jlRB",scrollingItem:"header_scrollingItem__3Grp1",scrolling:"header_scrolling__2qDLC",marquee:"header_marquee__METu1",scrollingText:"header_scrollingText__Fs0gJ"}}}]);