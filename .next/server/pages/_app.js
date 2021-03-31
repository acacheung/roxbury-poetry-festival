module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Transition/index.js":
/*!****************************************!*\
  !*** ./components/Transition/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/acheung/work/roxbury-poetry-festival/components/Transition/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst TIMEOUT = 200;\nconst getTransitionStyles = {\n  entering: {\n    opacity: 0\n  },\n  entered: {\n    transition: `opacity ${TIMEOUT}ms ease-in-out`,\n    opacity: 1\n  },\n  exiting: {\n    transition: `opacity ${TIMEOUT}ms ease-in-out`,\n    opacity: 0\n  }\n};\n\nconst Transition = ({\n  children,\n  location\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_1__[\"TransitionGroup\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_1__[\"Transition\"], {\n      timeout: {\n        enter: TIMEOUT,\n        exit: TIMEOUT\n      },\n      children: status => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: _objectSpread({}, getTransitionStyles[status]),\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, undefined)\n    }, location, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transition);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYW5zaXRpb24vaW5kZXguanM/MDIyMCJdLCJuYW1lcyI6WyJUSU1FT1VUIiwiZ2V0VHJhbnNpdGlvblN0eWxlcyIsImVudGVyaW5nIiwib3BhY2l0eSIsImVudGVyZWQiLCJ0cmFuc2l0aW9uIiwiZXhpdGluZyIsIlRyYW5zaXRpb24iLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwiZW50ZXIiLCJleGl0Iiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0EsTUFBTUEsT0FBTyxHQUFHLEdBQWhCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUc7QUFDMUJDLFVBQVEsRUFBRTtBQUNSQyxXQUFPLEVBQUU7QUFERCxHQURnQjtBQUkxQkMsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRyxXQUFVTCxPQUFRLGdCQUR4QjtBQUVQRyxXQUFPLEVBQUU7QUFGRixHQUppQjtBQVExQkcsU0FBTyxFQUFFO0FBQ1BELGNBQVUsRUFBRyxXQUFVTCxPQUFRLGdCQUR4QjtBQUVQRyxXQUFPLEVBQUU7QUFGRjtBQVJpQixDQUE1Qjs7QUFhQSxNQUFNSSxVQUFVLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0QjtBQUM3QyxzQkFDRSxxRUFBQyxzRUFBRDtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBRUUsYUFBTyxFQUFFO0FBQ1BDLGFBQUssRUFBRVYsT0FEQTtBQUVQVyxZQUFJLEVBQUVYO0FBRkMsT0FGWDtBQUFBLGdCQU9JWSxNQUFELGlCQUNDO0FBQ0UsYUFBSyxvQkFDQVgsbUJBQW1CLENBQUNXLE1BQUQsQ0FEbkIsQ0FEUDtBQUFBLGtCQUtHSjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSixPQUNPQyxRQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxQkQsQ0F0QkQ7O0FBdUJlRix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVHJhbnNpdGlvbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRyYW5zaXRpb25Hcm91cCxcbiAgVHJhbnNpdGlvbiBhcyBSZWFjdFRyYW5zaXRpb24sXG59IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5cbmNvbnN0IFRJTUVPVVQgPSAyMDA7XG5jb25zdCBnZXRUcmFuc2l0aW9uU3R5bGVzID0ge1xuICBlbnRlcmluZzoge1xuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG4gIGVudGVyZWQ6IHtcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke1RJTUVPVVR9bXMgZWFzZS1pbi1vdXRgLFxuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG4gIGV4aXRpbmc6IHtcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke1RJTUVPVVR9bXMgZWFzZS1pbi1vdXRgLFxuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG59O1xuY29uc3QgVHJhbnNpdGlvbiA9ICh7IGNoaWxkcmVuLCBsb2NhdGlvbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb25Hcm91cD5cbiAgICAgIDxSZWFjdFRyYW5zaXRpb25cbiAgICAgICAga2V5PXtsb2NhdGlvbn1cbiAgICAgICAgdGltZW91dD17e1xuICAgICAgICAgIGVudGVyOiBUSU1FT1VULFxuICAgICAgICAgIGV4aXQ6IFRJTUVPVVQsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsoc3RhdHVzKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uZ2V0VHJhbnNpdGlvblN0eWxlc1tzdGF0dXNdLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0VHJhbnNpdGlvbj5cbiAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Transition/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Transition */ \"./components/Transition/index.js\");\n\n\nvar _jsxFileName = \"/Users/acheung/work/roxbury-poetry-festival/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n // Custom cursor https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3\n\nconst isMobile = () => {\n  const ua = navigator.userAgent;\n  return /Android|Mobi/i.test(ua);\n};\n\nconst Cursor = () => {\n  if (typeof navigator !== \"undefined\" && isMobile()) return null;\n  const {\n    0: position,\n    1: setPosition\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const {\n    0: hidden,\n    1: setHidden\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true);\n  const {\n    0: clicked,\n    1: setClicked\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const {\n    0: linkHovered,\n    1: setLinkHovered\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    addEventListeners();\n    handleLinkHoverEvents();\n    return () => removeEventListeners();\n  }, [router]);\n\n  const addEventListeners = () => {\n    document.body.addEventListener(\"mousemove\", onMouseMove);\n    document.body.addEventListener(\"mouseenter\", onMouseEnter);\n    document.body.addEventListener(\"mouseleave\", onMouseLeave);\n    document.body.addEventListener(\"mousedown\", onMouseDown);\n    document.body.addEventListener(\"mouseup\", onMouseUp);\n  };\n\n  const removeEventListeners = () => {\n    document.body.removeEventListener(\"mousemove\", onMouseMove);\n    document.body.removeEventListener(\"mouseenter\", onMouseEnter);\n    document.body.removeEventListener(\"mouseleave\", onMouseLeave);\n    document.body.removeEventListener(\"mousedown\", onMouseDown);\n    document.body.removeEventListener(\"mouseup\", onMouseUp);\n  };\n\n  const onMouseDown = () => {\n    setClicked(true);\n  };\n\n  const onMouseUp = () => {\n    setClicked(false);\n  };\n\n  const onMouseLeave = () => {\n    setHidden(true);\n  };\n\n  const onMouseEnter = () => {\n    setHidden(false);\n  };\n\n  const onMouseMove = e => {\n    setPosition({\n      x: e.clientX,\n      y: e.clientY\n    });\n  };\n\n  const handleLinkHoverEvents = () => {\n    document.querySelectorAll(\"a, button\").forEach(el => {\n      el.addEventListener(\"mouseover\", () => setLinkHovered(true));\n      el.addEventListener(\"mouseout\", () => setLinkHovered(false));\n    });\n  };\n\n  const cursorClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"cursor\", {\n    \"cursor--clicked\": clicked,\n    \"cursor--hidden\": hidden,\n    \"cursor--link-hovered\": linkHovered\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: cursorClasses,\n    style: {\n      left: `${position.x}px`,\n      top: `${position.y}px`\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 5\n  }, undefined);\n};\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Cursor, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Transition__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      location: router.pathname,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiaXNNb2JpbGUiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRlc3QiLCJDdXJzb3IiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwidXNlU3RhdGUiLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImxpbmtIb3ZlcmVkIiwic2V0TGlua0hvdmVyZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVycyIsImhhbmRsZUxpbmtIb3ZlckV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiY3Vyc29yQ2xhc3NlcyIsImNsYXNzTmFtZXMiLCJsZWZ0IiwidG9wIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0NBR0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTUMsRUFBRSxHQUFHQyxTQUFTLENBQUNDLFNBQXJCO0FBQ0EsU0FBTyxnQkFBZ0JDLElBQWhCLENBQXFCSCxFQUFyQixDQUFQO0FBQ0QsQ0FIRDs7QUFLQSxNQUFNSSxNQUFNLEdBQUcsTUFBTTtBQUNuQixNQUFJLE9BQU9ILFNBQVAsS0FBcUIsV0FBckIsSUFBb0NGLFFBQVEsRUFBaEQsRUFBb0QsT0FBTyxJQUFQO0FBQ3BELFFBQU07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bUI1QixPQURzQjtBQUV6QyxzQkFBa0JGLE1BRnVCO0FBR3pDLDRCQUF3Qkk7QUFIaUIsR0FBWCxDQUFoQztBQU1BLHNCQUNFO0FBQ0UsYUFBUyxFQUFFeUIsYUFEYjtBQUVFLFNBQUssRUFBRTtBQUNMRSxVQUFJLEVBQUcsR0FBRWxDLFFBQVEsQ0FBQ3lCLENBQUUsSUFEZjtBQUVMVSxTQUFHLEVBQUcsR0FBRW5DLFFBQVEsQ0FBQzJCLENBQUU7QUFGZDtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBeEVEOztBQTBFQSxTQUFTUyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsUUFBTTdCLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsOERBQUQ7QUFBWSxjQUFRLEVBQUVELE1BQU0sQ0FBQzhCLFFBQTdCO0FBQUEsNkJBQ0UscUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFVRDs7QUFDY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHN0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9UcmFuc2l0aW9uXCI7XG5cbi8vIEN1c3RvbSBjdXJzb3IgaHR0cHM6Ly9kZXYudG8vYW5kcmV3Y2htci9hd2Vzb21lLWFuaW1hdGVkLWN1cnNvci13aXRoLXJlYWN0LWhvb2tzLTVlYzNcblxuY29uc3QgaXNNb2JpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuIC9BbmRyb2lkfE1vYmkvaS50ZXN0KHVhKTtcbn07XG5cbmNvbnN0IEN1cnNvciA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgaXNNb2JpbGUoKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xpbmtIb3ZlcmVkLCBzZXRMaW5rSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBoYW5kbGVMaW5rSG92ZXJFdmVudHMoKTtcbiAgICByZXR1cm4gKCkgPT4gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSwgW3JvdXRlcl0pO1xuXG4gIGNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBvbk1vdXNlRW50ZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgb25Nb3VzZUxlYXZlKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgb25Nb3VzZURvd24pO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgb25Nb3VzZUVudGVyKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTW91c2VMZWF2ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG9uTW91c2VEb3duKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG9uTW91c2VVcCk7XG4gIH07XG5cbiAgY29uc3Qgb25Nb3VzZURvd24gPSAoKSA9PiB7XG4gICAgc2V0Q2xpY2tlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbk1vdXNlVXAgPSAoKSA9PiB7XG4gICAgc2V0Q2xpY2tlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldEhpZGRlbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgc2V0SGlkZGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgc2V0UG9zaXRpb24oeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVMaW5rSG92ZXJFdmVudHMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImEsIGJ1dHRvblwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiBzZXRMaW5rSG92ZXJlZCh0cnVlKSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4gc2V0TGlua0hvdmVyZWQoZmFsc2UpKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjdXJzb3JDbGFzc2VzID0gY2xhc3NOYW1lcyhcImN1cnNvclwiLCB7XG4gICAgXCJjdXJzb3ItLWNsaWNrZWRcIjogY2xpY2tlZCxcbiAgICBcImN1cnNvci0taGlkZGVuXCI6IGhpZGRlbixcbiAgICBcImN1cnNvci0tbGluay1ob3ZlcmVkXCI6IGxpbmtIb3ZlcmVkLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y3Vyc29yQ2xhc3Nlc31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGxlZnQ6IGAke3Bvc2l0aW9uLnh9cHhgLFxuICAgICAgICB0b3A6IGAke3Bvc2l0aW9uLnl9cHhgLFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxDdXJzb3IgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFRyYW5zaXRpb24gbG9jYXRpb249e3JvdXRlci5wYXRobmFtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCI/YWFhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjbGFzc25hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///classnames\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI/ZGRlMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC10cmFuc2l0aW9uLWdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-transition-group\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });