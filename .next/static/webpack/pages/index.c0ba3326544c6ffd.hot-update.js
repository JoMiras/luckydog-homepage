/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layouts/section.js":
/*!***************************************!*\
  !*** ./components/layouts/section.js ***!
  \***************************************/
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/section */ \"./components/layouts/section.js\");\n/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_layouts_section__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                borderRadius: \"lg\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"whiteAlpha.500, whiteAlpha.200\"),\n                p: 3,\n                mb: 6,\n                align: \"center\",\n                children: \"Hello, I'm a full-stack developer based in California!\"\n            }, void 0, false, {\n                fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                display: {\n                    md: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        flexGrow: 1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                as: \"h2\",\n                                variant: \"page-title\",\n                                children: \"Jonah Mirasol\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/index.js\",\n                                lineNumber: 11,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Software Developer ( Nature Connossieur / Imaginative / Problem Solver )\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/index.js\",\n                                lineNumber: 14,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        flexShrink: 0,\n                        mt: {\n                            base: 4,\n                            md: 0\n                        },\n                        ml: {\n                            md: 6\n                        },\n                        align: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                            borderColor: \"whiteAlpha.800\",\n                            borderWith: 2,\n                            borderStyle: \"solid\",\n                            maxWidth: \"100px\",\n                            display: \"inline-block\",\n                            borderRadius: \"full\",\n                            src: \"https://avatars.githubusercontent.com/u/132711477?v=4\",\n                            alt: \"Profile Image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxRjtBQUNsQztBQUNuRCxNQUFNTSxPQUFPOztJQUNULHFCQUNJLDhEQUFDTix1REFBU0E7OzBCQUNOLDhEQUFDQyxpREFBR0E7Z0JBQUNNLGNBQWE7Z0JBQUtDLElBQUlKLG1FQUFpQkEsQ0FBQztnQkFBbUNLLEdBQUc7Z0JBQUdDLElBQUk7Z0JBQUdDLE9BQU07MEJBQVU7Ozs7OzswQkFHN0csOERBQUNWLGlEQUFHQTtnQkFBQ1csU0FBUztvQkFBQ0MsSUFBSTtnQkFBTTs7a0NBQ3JCLDhEQUFDWixpREFBR0E7d0JBQUNhLFVBQVU7OzBDQUNYLDhEQUFDWixxREFBT0E7Z0NBQUNhLElBQUc7Z0NBQUtDLFNBQVE7MENBQWE7Ozs7OzswQ0FHdEMsOERBQUNQOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNSLGlEQUFHQTt3QkFBQ2dCLFlBQVk7d0JBQUdDLElBQUk7NEJBQUNDLE1BQU07NEJBQUdOLElBQUk7d0JBQUM7d0JBQUdPLElBQUk7NEJBQUNQLElBQUk7d0JBQUM7d0JBQUdGLE9BQU07a0NBRXpELDRFQUFDUixtREFBS0E7NEJBQUNrQixhQUFZOzRCQUFpQkMsWUFBWTs0QkFBR0MsYUFBWTs0QkFBUUMsVUFBUzs0QkFBUVosU0FBUTs0QkFBZUwsY0FBYTs0QkFBT2tCLEtBQUk7NEJBQXdEQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2TjtHQXBCTXBCOztRQUdpQ0YsK0RBQWlCQTs7O0tBSGxERTtBQXNCTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciAsIEJveCwgSGVhZGluZywgSW1hZ2UsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9zZWN0aW9uJ1xuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPEJveCBib3JkZXJSYWRpdXM9XCJsZ1wiIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGVBbHBoYS41MDAsIHdoaXRlQWxwaGEuMjAwJyl9IHA9ezN9IG1iPXs2fSBhbGlnbj1cImNlbnRlclwiID5cbiAgICAgICAgICAgIEhlbGxvLCBJJ20gYSBmdWxsLXN0YWNrIGRldmVsb3BlciBiYXNlZCBpbiBDYWxpZm9ybmlhIVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PXt7bWQ6ICdmbGV4J319PlxuICAgICAgICAgICAgICAgIDxCb3ggZmxleEdyb3c9ezF9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgdmFyaWFudD1cInBhZ2UtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEpvbmFoIE1pcmFzb2xcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8cD5Tb2Z0d2FyZSBEZXZlbG9wZXIgKCBOYXR1cmUgQ29ubm9zc2lldXIgLyBJbWFnaW5hdGl2ZSAvIFByb2JsZW0gU29sdmVyICk8L3A+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBmbGV4U2hyaW5rPXswfSBtdD17e2Jhc2U6IDQsIG1kOiAwfX0gbWw9e3ttZDogNn19IGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBib3JkZXJDb2xvcj1cIndoaXRlQWxwaGEuODAwXCIgYm9yZGVyV2l0aD17Mn0gYm9yZGVyU3R5bGU9XCJzb2xpZFwiIG1heFdpZHRoPVwiMTAwcHhcIiBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIgYm9yZGVyUmFkaXVzPVwiZnVsbFwiIHNyYz1cImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8xMzI3MTE0Nzc/dj00XCIgYWx0PVwiUHJvZmlsZSBJbWFnZVwiIC8+IFxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ29udGFpbmVyPiBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiQm94IiwiSGVhZGluZyIsIkltYWdlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTZWN0aW9uIiwiUGFnZSIsImJvcmRlclJhZGl1cyIsImJnIiwicCIsIm1iIiwiYWxpZ24iLCJkaXNwbGF5IiwibWQiLCJmbGV4R3JvdyIsImFzIiwidmFyaWFudCIsImZsZXhTaHJpbmsiLCJtdCIsImJhc2UiLCJtbCIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2l0aCIsImJvcmRlclN0eWxlIiwibWF4V2lkdGgiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});