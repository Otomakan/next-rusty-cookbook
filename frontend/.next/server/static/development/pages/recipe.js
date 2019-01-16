module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/macuser/Documents/TechDocs/projects/next-rusty-cookbook/frontend/components/Head.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2309566728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2309566728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "30 Days of Cooking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2309566728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2309566728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Comfortaa|Exo",
    rel: "stylesheet",
    className: "jsx-2309566728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2309566728",
    css: "body{margin:0;padding:0;top:0;font-family:'Exo',sans-serif;font-family:'Comfortaa',cursive;font-family:Arial;font-weight:light;}li{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWN1c2VyL0RvY3VtZW50cy9UZWNoRG9jcy9wcm9qZWN0cy9uZXh0LXJ1c3R5LWNvb2tib29rL2Zyb250ZW5kL2NvbXBvbmVudHMvSGVhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIsQUFHaUIsQUFTUSxTQVJQLE9BU1gsR0FSTyxNQUN3Qiw2QkFDRyxnQ0FDZCxrQkFDRCxrQkFDbkIiLCJmaWxlIjoiL1VzZXJzL21hY3VzZXIvRG9jdW1lbnRzL1RlY2hEb2NzL3Byb2plY3RzL25leHQtcnVzdHktY29va2Jvb2svZnJvbnRlbmQvY29tcG9uZW50cy9IZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+MzAgRGF5cyBvZiBDb29raW5nPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbWZvcnRhYXxFeG9cIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7IFxuICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdFeG8nLHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJyxjdXJzaXZlO1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmxpZ2h0O1xuICAgICAgfVxuICAgICAgbGl7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=/Users/macuser/Documents/TechDocs/projects/next-rusty-cookbook/frontend/components/Head.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head */ "./components/Head.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
var _jsxFileName = "/Users/macuser/Documents/TechDocs/projects/next-rusty-cookbook/frontend/components/Layout.js";



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), props.children);
});

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/macuser/Documents/TechDocs/projects/next-rusty-cookbook/frontend/components/Navbar.js";



var pages = [{
  name: "Home",
  link: "/"
}, {
  name: "About",
  link: "/about"
}, {
  name: "Recipe",
  link: "/recipe"
}];

var getPages = function getPages() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-2329728459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, pages.map(function (page) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "jsx-2329728459",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: page.link,
      key: page.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2329728459",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, page.name)));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2329728459",
    css: "li.jsx-2329728459{margin:50px 20px;cursor:pointer;}ul.jsx-2329728459{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWN1c2VyL0RvY3VtZW50cy9UZWNoRG9jcy9wcm9qZWN0cy9uZXh0LXJ1c3R5LWNvb2tib29rL2Zyb250ZW5kL2NvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHeUIsQUFJTixVQUNYLE9BSmUsZUFDaEIiLCJmaWxlIjoiL1VzZXJzL21hY3VzZXIvRG9jdW1lbnRzL1RlY2hEb2NzL3Byb2plY3RzL25leHQtcnVzdHktY29va2Jvb2svZnJvbnRlbmQvY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IHBhZ2VzID0gW1xuXHR7bmFtZTpcIkhvbWVcIiwgbGluazpcIi9cIn0sXG5cdHtuYW1lOlwiQWJvdXRcIiwgbGluazpcIi9hYm91dFwifSxcblx0e25hbWU6XCJSZWNpcGVcIiwgbGluazpcIi9yZWNpcGVcIn0sXG5dXG5jb25zdCBnZXRQYWdlcyA9ICgpID0+IChcbiAgPHVsPlxuICB7cGFnZXMubWFwKChwYWdlKT0+XG5cdFx0PGxpPlxuXHRcdFx0PExpbmsgaHJlZj17cGFnZS5saW5rfSBrZXk9e3BhZ2UubmFtZX0+XG5cdFx0XHQgPGRpdj57cGFnZS5uYW1lfTwvZGl2PlxuICAgICAgPC9MaW5rPlxuXHRcdDwvbGk+XG4gICAgKX1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaXtcbiAgICAgICAgbWFyZ2luOjUwcHggMjBweDtcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gIDwvdWw+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuPGRpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGFpbmVyXCI+XG5cbiAgICAgIHtnZXRQYWdlcyhwcm9wcy5wYWdlcyl9XG4gIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5uYXZiYXItY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgICAgIHRvcDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBwYWRkaW5nOjAgMjBweDtcbiAgICAgICAgd2lkdGg6YXV0bztcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIG1hcmdpbi10b3A6YXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTphdXRvO1xuICAgICAgfVxuXG4gICAgICBoMSwgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=/Users/macuser/Documents/TechDocs/projects/next-rusty-cookbook/frontend/components/Navbar.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3004506027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3004506027" + " " + "navbar-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, getPages(props.pages)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3004506027",
    css: ".navbar-container.jsx-3004506027{position:fixed;height:100vh;background-color:rgba(255,255,255,0.2);top:0;right:0;padding:0 20px;width:auto;margin:0;margin-top:auto;margin-bottom:auto;}h1.jsx-3004506027,a.jsx-3004506027{font-family:\"Arial\";}li.jsx-3004506027{list-style:none;margin:20px 30px;}a.jsx-3004506027{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-3004506027:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWN1c2VyL0RvY3VtZW50cy9UZWNoRG9jcy9wcm9qZWN0cy9uZXh0LXJ1c3R5LWNvb2tib29rL2Zyb250ZW5kL2NvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DZ0IsQUFHdUIsQUFhTSxBQUlKLEFBS0ssQUFLVCxZQUNkLEdBM0JjLENBaUJLLElBSm5CLFFBWnlDLEtBaUJ6QyxpQkFJYSxXQUNiLE1BckJPLE1BQ0UsUUFDTyxlQUNKLFdBQ0YsU0FDTyxnQkFDRyxtQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21hY3VzZXIvRG9jdW1lbnRzL1RlY2hEb2NzL3Byb2plY3RzL25leHQtcnVzdHktY29va2Jvb2svZnJvbnRlbmQvY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IHBhZ2VzID0gW1xuXHR7bmFtZTpcIkhvbWVcIiwgbGluazpcIi9cIn0sXG5cdHtuYW1lOlwiQWJvdXRcIiwgbGluazpcIi9hYm91dFwifSxcblx0e25hbWU6XCJSZWNpcGVcIiwgbGluazpcIi9yZWNpcGVcIn0sXG5dXG5jb25zdCBnZXRQYWdlcyA9ICgpID0+IChcbiAgPHVsPlxuICB7cGFnZXMubWFwKChwYWdlKT0+XG5cdFx0PGxpPlxuXHRcdFx0PExpbmsgaHJlZj17cGFnZS5saW5rfSBrZXk9e3BhZ2UubmFtZX0+XG5cdFx0XHQgPGRpdj57cGFnZS5uYW1lfTwvZGl2PlxuICAgICAgPC9MaW5rPlxuXHRcdDwvbGk+XG4gICAgKX1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaXtcbiAgICAgICAgbWFyZ2luOjUwcHggMjBweDtcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gIDwvdWw+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuPGRpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGFpbmVyXCI+XG5cbiAgICAgIHtnZXRQYWdlcyhwcm9wcy5wYWdlcyl9XG4gIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5uYXZiYXItY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgICAgIHRvcDowO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBwYWRkaW5nOjAgMjBweDtcbiAgICAgICAgd2lkdGg6YXV0bztcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIG1hcmdpbi10b3A6YXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTphdXRvO1xuICAgICAgfVxuXG4gICAgICBoMSwgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=/Users/macuser/Documents/TechDocs/projects/next-rusty-cookbook/frontend/components/Navbar.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./pages/recipe.js":
/*!*************************!*\
  !*** ./pages/recipe.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recipe; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/macuser/Documents/TechDocs/projects/next-rusty-cookbook/frontend/pages/recipe.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // const fetchRecipe = async () => {
// 	let recipes = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   	return recipes.json()
// }
// const getRecipeInfo = () => (
// 	<ul>
// 		{fetchRecipe().map((item)=>
// 			<div>{item.title}</div>
// 			)
// 		}
// 	</ul>
// )

var Recipe =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Recipe, _React$Component);

  function Recipe(props) {
    var _this;

    _classCallCheck(this, Recipe);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Recipe).call(this, props));
    _this.state = {
      title: "nothing"
    };
    return _this;
  }

  _createClass(Recipe, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var request, recipe;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://jsonplaceholder.typicode.com/todos/1');

              case 2:
                request = _context.sent;
                _context.next = 5;
                return request.json();

              case 5:
                recipe = _context.sent;
                this.setState({
                  title: recipe.title
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() // methods

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, this.state.title)));
    }
  }]);

  return Recipe;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);



/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/recipe.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/recipe.js */"./pages/recipe.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=recipe.js.map