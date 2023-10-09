/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/aboutme",{

/***/ "./components/layouts/slidingImage.js":
/*!********************************************!*\
  !*** ./components/layouts/slidingImage.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/aboutme.js":
/*!**************************!*\
  !*** ./pages/aboutme.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/section */ \"./components/layouts/section.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var _components_grid_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/grid-items */ \"./components/grid-items.js\");\n/* harmony import */ var _components_layouts_slidingImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/slidingImage */ \"./components/layouts/slidingImage.js\");\n/* harmony import */ var _components_layouts_slidingImage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layouts_slidingImage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_Alamere_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/Alamere.jpeg */ \"./public/Alamere.jpeg\");\n/* harmony import */ var _public_Pinecrest_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/Pinecrest.jpeg */ \"./public/Pinecrest.jpeg\");\n\n\n\n\n\n\n\n\nconst AboutMe = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"About Me\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                    as: \"h4\",\n                    fontSize: 20,\n                    mb: 4,\n                    children: \"Places I've been to\"\n                }, void 0, false, {\n                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/aboutme.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    delay: 0.1,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.SimpleGrid, {\n                        columns: [\n                            1,\n                            2,\n                            2\n                        ],\n                        gap: 6,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_grid_items__WEBPACK_IMPORTED_MODULE_3__.GridItem, {\n                                title: \"Alamere Falls\",\n                                thumbnail: _public_Alamere_jpeg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                href: \"https://www.nps.gov/pore/planyourvisit/alamere_falls.htm\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/aboutme.js\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_grid_items__WEBPACK_IMPORTED_MODULE_3__.GridItem, {\n                                title: \"Pinecrest\",\n                                thumbnail: _public_Pinecrest_jpeg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                href: \"https://www.recreation.gov/camping/campgrounds/232254\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/aboutme.js\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/aboutme.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/aboutme.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_layouts_slidingImage__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    imageSrc: \"https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80\"\n                }, void 0, false, {\n                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/aboutme.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/aboutme.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/aboutme.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n_c = AboutMe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dG1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNkO0FBQ0Q7QUFDQztBQUNVO0FBRWpCO0FBQ0k7QUFFaEQsTUFBTVMsVUFBVSxrQkFDWiw4REFBQ0wsbUVBQU1BO1FBQUNNLE9BQU07a0JBQ1YsNEVBQUNWLHVEQUFTQTs7OEJBQ04sOERBQUNDLHFEQUFPQTtvQkFBQ1UsSUFBRztvQkFBS0MsVUFBVTtvQkFBSUMsSUFBSTs4QkFBRzs7Ozs7OzhCQUl0Qyw4REFBQ1YsbUVBQU9BO29CQUFDVyxPQUFPOzhCQUNaLDRFQUFDWix3REFBVUE7d0JBQUNhLFNBQVM7NEJBQUM7NEJBQUc7NEJBQUc7eUJBQUU7d0JBQUVDLEtBQUs7OzBDQUNqQyw4REFBQ1gsNERBQVFBO2dDQUNMSyxPQUFNO2dDQUNOTyxXQUFXViw0REFBT0E7Z0NBQ2xCVyxNQUFLOzs7Ozs7MENBRVQsOERBQUNiLDREQUFRQTtnQ0FDTEssT0FBTTtnQ0FDTk8sV0FBV1QsOERBQVNBO2dDQUNwQlUsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS2pCLDhEQUFDWix5RUFBWUE7b0JBQUNhLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdEI3QlY7QUE0Qk4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXRtZS5qcz8yNzE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgSGVhZGluZywgU2ltcGxlR3JpZCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnIFxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL3NlY3Rpb24nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlJ1xuaW1wb3J0IHsgR3JpZEl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL2dyaWQtaXRlbXMnXG5pbXBvcnQgU2xpZGluZ0ltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9zbGlkaW5nSW1hZ2UnXG5cbmltcG9ydCBBbGFtZXJlIGZyb20gJy4uL3B1YmxpYy9BbGFtZXJlLmpwZWcnXG5pbXBvcnQgUGluZWNyZXN0IGZyb20gJy4uL3B1YmxpYy9QaW5lY3Jlc3QuanBlZydcblxuY29uc3QgQWJvdXRNZSA9ICgpID0+IChcbiAgICA8TGF5b3V0IHRpdGxlPVwiQWJvdXQgTWVcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBmb250U2l6ZT17MjB9IG1iPXs0fT5cbiAgICAgICAgICAgIFBsYWNlcyBJJmFwb3M7dmUgYmVlbiB0b1xuICAgICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgICA8U2VjdGlvbiBkZWxheT17MC4xfT5cbiAgICAgICAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXtbMSwgMiwgMl19IGdhcD17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBbGFtZXJlIEZhbGxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbD17QWxhbWVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ucHMuZ292L3BvcmUvcGxhbnlvdXJ2aXNpdC9hbGFtZXJlX2ZhbGxzLmh0bVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGluZWNyZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbD17UGluZWNyZXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnJlY3JlYXRpb24uZ292L2NhbXBpbmcvY2FtcGdyb3VuZHMvMjMyMjU0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxTbGlkaW5nSW1hZ2UgaW1hZ2VTcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2NTEwMTE2Mjk0Ni00Mzc3ZTU3NzQ1YzM/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh6WldGeVkyaDhNbng4WjJGc1lYaDVKVEl3WW1GamEyZHliM1Z1Wkh4bGJud3dmSHd3Zkh4OE1BJTNEJTNEJnc9MTAwMCZxPTgwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dE1lIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkhlYWRpbmciLCJTaW1wbGVHcmlkIiwiU2VjdGlvbiIsIkxheW91dCIsIkdyaWRJdGVtIiwiU2xpZGluZ0ltYWdlIiwiQWxhbWVyZSIsIlBpbmVjcmVzdCIsIkFib3V0TWUiLCJ0aXRsZSIsImFzIiwiZm9udFNpemUiLCJtYiIsImRlbGF5IiwiY29sdW1ucyIsImdhcCIsInRodW1ibmFpbCIsImhyZWYiLCJpbWFnZVNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/aboutme.js\n"));

/***/ })

});