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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/macuser/Documents/TechDocs/projects/next-rusty-cookbook/frontend/pages/index.js";





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3913761381" + " " + "homepage-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3913761381" + " " + "title-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3913761381",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "60 days of cooking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3913761381",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, " A journey of cooking and web-designing in Japan"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3913761381",
    css: ".homepage-wrapper.jsx-3913761381{margin:0;top:0;height:100vh;width:100vw;-webkit-transition:2s;transition:2s;background-image:url(\"/static/smudginess.png\");background-color:white;}.smudge-image.jsx-3913761381{height:100vh;}.title-wrapper.jsx-3913761381{margin:0;padding:100px;text-transform:uppercase;}@-webkit-keyframes show-line-jsx-3913761381{from{width:0;}to{width:500px;}}@keyframes show-line-jsx-3913761381{from{width:0;}to{width:500px;}}h1.jsx-3913761381{position:relative;}h1.jsx-3913761381:after{content:\"\";width:100%;-webkit-animation:show-line-jsx-3913761381 2s forwards;animation:show-line-jsx-3913761381 2s forwards;border-top:solid 2px black;position:absolute;bottom:-20px;left:0;}h2.jsx-3913761381{position:relative;margin-top:40px;}h2.jsx-3913761381:after{content:\"\";width:100%;border-top:solid 2px black;position:absolute;bottom:-20px;-webkit-animation:show-line-jsx-3913761381 2s forwards;animation:show-line-jsx-3913761381 2s forwards;left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWN1c2VyL0RvY3VtZW50cy9UZWNoRG9jcy9wcm9qZWN0cy9uZXh0LXJ1c3R5LWNvb2tib29rL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlhLEFBR1ksQUFVSSxBQUdKLEFBS0csQUFDRSxBQUdJLEFBR1AsQUFTTyxBQUlQLFFBcEJFLENBakJQLEFBYVEsRUFZSCxBQWFBLENBcEJJLENBUmYsRUFUYSxHQXFCYixBQVlnQixJQVJpQixBQWFOLENBekJGLEtBWmIsTUFpQ1osTUFoQ2MsUUFZZCxDQXlCa0Isa0JBQ0wsU0FyQ21DLElBc0NmLDJDQXJDVixDQXNCSSxzQkFwQjNCLEtBcUJrQixrQkFDTCxhQUNOLEFBYUEsT0FaUCxBQWFBIiwiZmlsZSI6Ii9Vc2Vycy9tYWN1c2VyL0RvY3VtZW50cy9UZWNoRG9jcy9wcm9qZWN0cy9uZXh0LXJ1c3R5LWNvb2tib29rL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuXG5jb25zdCBJbmRleCA9ICgpPT4oXG5cdDxMYXlvdXQ+XG5cdDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2Utd3JhcHBlclwiPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtd3JhcHBlclwiPlxuXHRcdDxoMT42MCBkYXlzIG9mIGNvb2tpbmc8L2gxPlxuXHRcdDxoMj4gQSBqb3VybmV5IG9mIGNvb2tpbmcgYW5kIHdlYi1kZXNpZ25pbmcgaW4gSmFwYW48L2gyPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblx0PHN0eWxlIGpzeD57YFxuXHRcdC5ob21lcGFnZS13cmFwcGVye1xuXHRcdFx0bWFyZ2luOjA7XG5cdFx0XHR0b3A6MDtcblx0XHRcdGhlaWdodDoxMDB2aDtcblx0XHRcdHdpZHRoOjEwMHZ3O1xuXHRcdFx0dHJhbnNpdGlvbjoycztcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvc211ZGdpbmVzcy5wbmdcIik7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuXHRcdFx0Ly8gYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBleGNsdXNpb25cblx0XHR9XG5cdFx0LnNtdWRnZS1pbWFnZXtcblx0XHRcdGhlaWdodDoxMDB2aDtcblx0XHR9XG5cdFx0LnRpdGxlLXdyYXBwZXJ7XG5cdFx0XHRtYXJnaW46MDtcblx0XHRcdHBhZGRpbmc6MTAwcHg7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG5cdFx0fVxuXHRcdEBrZXlmcmFtZXMgc2hvdy1saW5le1xuXHRcdFx0ZnJvbXt3aWR0aDowO31cblx0XHRcdHRve3dpZHRoOjUwMHB4O31cblx0XHR9XG5cdFx0aDF7XG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHR9XG5cdFx0aDE6YWZ0ZXJ7XG5cdFx0XHRjb250ZW50OlwiXCI7XG5cdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0YW5pbWF0aW9uOiBzaG93LWxpbmUgMnMgZm9yd2FyZHM7XG5cdFx0XHRib3JkZXItdG9wOnNvbGlkIDJweCBibGFjaztcblx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xuXHRcdFx0Ym90dG9tOi0yMHB4O1xuXHRcdFx0bGVmdDowO1xuXHRcdH1cblx0XHRoMntcblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHRcdFx0bWFyZ2luLXRvcDo0MHB4O1xuXHRcdH1cblx0XHRoMjphZnRlcntcblx0XHRcdGNvbnRlbnQ6XCJcIjtcblx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRib3JkZXItdG9wOnNvbGlkIDJweCBibGFjaztcblx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xuXHRcdFx0Ym90dG9tOi0yMHB4O1xuXHRcdFx0YW5pbWF0aW9uOiBzaG93LWxpbmUgMnMgZm9yd2FyZHM7XG5cdFx0XHRsZWZ0OjA7ZVxuXHRcdH1cblx0YH1cblx0PC9zdHlsZT5cblx0PC9MYXlvdXQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IChJbmRleCkiXX0= */\n/*@ sourceURL=/Users/macuser/Documents/TechDocs/projects/next-rusty-cookbook/frontend/pages/index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map