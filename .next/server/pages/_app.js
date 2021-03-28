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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/acheung/work/roxbury-poetry-festival/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // Custom cursor https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3\n\nconst isMobile = () => {\n  const ua = navigator.userAgent;\n  return /Android|Mobi/i.test(ua);\n};\n\nconst Cursor = () => {\n  if (typeof navigator !== \"undefined\" && isMobile()) return null;\n  const {\n    0: position,\n    1: setPosition\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const {\n    0: hidden,\n    1: setHidden\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true);\n  const {\n    0: clicked,\n    1: setClicked\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const {\n    0: linkHovered,\n    1: setLinkHovered\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    addEventListeners();\n    handleLinkHoverEvents();\n    return () => removeEventListeners();\n  }, [router]);\n\n  const addEventListeners = () => {\n    document.body.addEventListener(\"mousemove\", onMouseMove);\n    document.body.addEventListener(\"mouseenter\", onMouseEnter);\n    document.body.addEventListener(\"mouseleave\", onMouseLeave);\n    document.body.addEventListener(\"mousedown\", onMouseDown);\n    document.body.addEventListener(\"mouseup\", onMouseUp);\n  };\n\n  const removeEventListeners = () => {\n    document.body.removeEventListener(\"mousemove\", onMouseMove);\n    document.body.removeEventListener(\"mouseenter\", onMouseEnter);\n    document.body.removeEventListener(\"mouseleave\", onMouseLeave);\n    document.body.removeEventListener(\"mousedown\", onMouseDown);\n    document.body.removeEventListener(\"mouseup\", onMouseUp);\n  };\n\n  const onMouseDown = () => {\n    setClicked(true);\n  };\n\n  const onMouseUp = () => {\n    setClicked(false);\n  };\n\n  const onMouseLeave = () => {\n    setHidden(true);\n  };\n\n  const onMouseEnter = () => {\n    setHidden(false);\n  };\n\n  const onMouseMove = e => {\n    setPosition({\n      x: e.clientX,\n      y: e.clientY\n    });\n  };\n\n  const handleLinkHoverEvents = () => {\n    document.querySelectorAll(\"a, button\").forEach(el => {\n      el.addEventListener(\"mouseover\", () => setLinkHovered(true));\n      el.addEventListener(\"mouseout\", () => setLinkHovered(false));\n    });\n  };\n\n  const cursorClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"cursor\", {\n    \"cursor--clicked\": clicked,\n    \"cursor--hidden\": hidden,\n    \"cursor--link-hovered\": linkHovered\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: cursorClasses,\n    style: {\n      left: `${position.x}px`,\n      top: `${position.y}px`\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, undefined);\n};\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiaXNNb2JpbGUiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRlc3QiLCJDdXJzb3IiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwidXNlU3RhdGUiLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImxpbmtIb3ZlcmVkIiwic2V0TGlua0hvdmVyZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVycyIsImhhbmRsZUxpbmtIb3ZlckV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiY3Vyc29yQ2xhc3NlcyIsImNsYXNzTmFtZXMiLCJsZWZ0IiwidG9wIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtDQUdBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU1DLEVBQUUsR0FBR0MsU0FBUyxDQUFDQyxTQUFyQjtBQUNBLFNBQU8sZ0JBQWdCQyxJQUFoQixDQUFxQkgsRUFBckIsQ0FBUDtBQUNELENBSEQ7O0FBS0EsTUFBTUksTUFBTSxHQUFHLE1BQU07QUFDbkIsTUFBSSxPQUFPSCxTQUFQLEtBQXFCLFdBQXJCLElBQW9DRixRQUFRLEVBQWhELEVBQW9ELE9BQU8sSUFBUDtBQUNwRCxRQUFNO0FBQUEsT0FBQ00sUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsc0RBQVEsQ0FBQyxJQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSixzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NOLHNEQUFRLENBQUMsS0FBRCxDQUE5QztBQUNBLFFBQU1PLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLHFCQUFpQjtBQUNqQkMseUJBQXFCO0FBQ3JCLFdBQU8sTUFBTUMsb0JBQW9CLEVBQWpDO0FBQ0QsR0FKUSxFQUlOLENBQUNMLE1BQUQsQ0FKTSxDQUFUOztBQU1BLFFBQU1HLGlCQUFpQixHQUFHLE1BQU07QUFDOUJHLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxnQkFBZCxDQUErQixXQUEvQixFQUE0Q0MsV0FBNUM7QUFDQUgsWUFBUSxDQUFDQyxJQUFULENBQWNDLGdCQUFkLENBQStCLFlBQS9CLEVBQTZDRSxZQUE3QztBQUNBSixZQUFRLENBQUNDLElBQVQsQ0FBY0MsZ0JBQWQsQ0FBK0IsWUFBL0IsRUFBNkNHLFlBQTdDO0FBQ0FMLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxnQkFBZCxDQUErQixXQUEvQixFQUE0Q0ksV0FBNUM7QUFDQU4sWUFBUSxDQUFDQyxJQUFULENBQWNDLGdCQUFkLENBQStCLFNBQS9CLEVBQTBDSyxTQUExQztBQUNELEdBTkQ7O0FBUUEsUUFBTVIsb0JBQW9CLEdBQUcsTUFBTTtBQUNqQ0MsWUFBUSxDQUFDQyxJQUFULENBQWNPLG1CQUFkLENBQWtDLFdBQWxDLEVBQStDTCxXQUEvQztBQUNBSCxZQUFRLENBQUNDLElBQVQsQ0FBY08sbUJBQWQsQ0FBa0MsWUFBbEMsRUFBZ0RKLFlBQWhEO0FBQ0FKLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjTyxtQkFBZCxDQUFrQyxZQUFsQyxFQUFnREgsWUFBaEQ7QUFDQUwsWUFBUSxDQUFDQyxJQUFULENBQWNPLG1CQUFkLENBQWtDLFdBQWxDLEVBQStDRixXQUEvQztBQUNBTixZQUFRLENBQUNDLElBQVQsQ0FBY08sbUJBQWQsQ0FBa0MsU0FBbEMsRUFBNkNELFNBQTdDO0FBQ0QsR0FORDs7QUFRQSxRQUFNRCxXQUFXLEdBQUcsTUFBTTtBQUN4QmYsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsUUFBTWdCLFNBQVMsR0FBRyxNQUFNO0FBQ3RCaEIsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsUUFBTWMsWUFBWSxHQUFHLE1BQU07QUFDekJoQixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsR0FGRDs7QUFJQSxRQUFNZSxZQUFZLEdBQUcsTUFBTTtBQUN6QmYsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsUUFBTWMsV0FBVyxHQUFJTSxDQUFELElBQU87QUFDekJ2QixlQUFXLENBQUM7QUFBRXdCLE9BQUMsRUFBRUQsQ0FBQyxDQUFDRSxPQUFQO0FBQWdCQyxPQUFDLEVBQUVILENBQUMsQ0FBQ0k7QUFBckIsS0FBRCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxRQUFNZixxQkFBcUIsR0FBRyxNQUFNO0FBQ2xDRSxZQUFRLENBQUNjLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDQyxPQUF2QyxDQUFnREMsRUFBRCxJQUFRO0FBQ3JEQSxRQUFFLENBQUNkLGdCQUFILENBQW9CLFdBQXBCLEVBQWlDLE1BQU1ULGNBQWMsQ0FBQyxJQUFELENBQXJEO0FBQ0F1QixRQUFFLENBQUNkLGdCQUFILENBQW9CLFVBQXBCLEVBQWdDLE1BQU1ULGNBQWMsQ0FBQyxLQUFELENBQXBEO0FBQ0QsS0FIRDtBQUlELEdBTEQ7O0FBT0EsUUFBTXdCLGFBQWEsR0FBR0MsaURBQVUsQ0FBQyxRQUFELEVBQVc7QUFDekMsdUJBQW1CNUIsT0FEc0I7QUFFekMsc0JBQWtCRixNQUZ1QjtBQUd6Qyw0QkFBd0JJO0FBSGlCLEdBQVgsQ0FBaEM7QUFNQSxzQkFDRTtBQUNFLGFBQVMsRUFBRXlCLGFBRGI7QUFFRSxTQUFLLEVBQUU7QUFDTEUsVUFBSSxFQUFHLEdBQUVsQyxRQUFRLENBQUN5QixDQUFFLElBRGY7QUFFTFUsU0FBRyxFQUFHLEdBQUVuQyxRQUFRLENBQUMyQixDQUFFO0FBRmQ7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFTRCxDQXhFRDs7QUEwRUEsU0FBU1MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLFFBQU03QixNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxTQUFELG9CQUFlNEIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQU1EOztBQUNjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gQ3VzdG9tIGN1cnNvciBodHRwczovL2Rldi50by9hbmRyZXdjaG1yL2F3ZXNvbWUtYW5pbWF0ZWQtY3Vyc29yLXdpdGgtcmVhY3QtaG9va3MtNWVjM1xuXG5jb25zdCBpc01vYmlsZSA9ICgpID0+IHtcbiAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gL0FuZHJvaWR8TW9iaS9pLnRlc3QodWEpO1xufTtcblxuY29uc3QgQ3Vyc29yID0gKCkgPT4ge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpc01vYmlsZSgpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGlua0hvdmVyZWQsIHNldExpbmtIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIGhhbmRsZUxpbmtIb3ZlckV2ZW50cygpO1xuICAgIHJldHVybiAoKSA9PiByZW1vdmVFdmVudExpc3RlbmVycygpO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIG9uTW91c2VFbnRlcik7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBvbk1vdXNlTGVhdmUpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvbk1vdXNlRG93bik7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBvbk1vdXNlRW50ZXIpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgb25Nb3VzZUxlYXZlKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgb25Nb3VzZURvd24pO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbiAgfTtcblxuICBjb25zdCBvbk1vdXNlRG93biA9ICgpID0+IHtcbiAgICBzZXRDbGlja2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uTW91c2VVcCA9ICgpID0+IHtcbiAgICBzZXRDbGlja2VkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvbk1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0SGlkZGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBzZXRIaWRkZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICBzZXRQb3NpdGlvbih7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxpbmtIb3ZlckV2ZW50cyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgYnV0dG9uXCIpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHNldExpbmtIb3ZlcmVkKHRydWUpKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiBzZXRMaW5rSG92ZXJlZChmYWxzZSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGN1cnNvckNsYXNzZXMgPSBjbGFzc05hbWVzKFwiY3Vyc29yXCIsIHtcbiAgICBcImN1cnNvci0tY2xpY2tlZFwiOiBjbGlja2VkLFxuICAgIFwiY3Vyc29yLS1oaWRkZW5cIjogaGlkZGVuLFxuICAgIFwiY3Vyc29yLS1saW5rLWhvdmVyZWRcIjogbGlua0hvdmVyZWQsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjdXJzb3JDbGFzc2VzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbGVmdDogYCR7cG9zaXRpb24ueH1weGAsXG4gICAgICAgIHRvcDogYCR7cG9zaXRpb24ueX1weGAsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj57LyogPEN1cnNvciAvPiAqL308L2Rpdj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });