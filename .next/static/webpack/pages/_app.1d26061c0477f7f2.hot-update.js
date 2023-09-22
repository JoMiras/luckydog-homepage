"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href, path, children } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst Navbar = (props)=>{\n    _s1();\n    const { path } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px\"\n        },\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            children: \"Works\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            children: \"Interests\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            children: \"Source\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        ml: 2,\n                        display: {\n                            base: \"inline-block\",\n                            md: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {\n                                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton,\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.HamburgerIcon, {}, void 0, false, void 0, void 0),\n                                    variant: \"outline\",\n                                    \"aria-label\": \"Options\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuList, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                            children: \"Works\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                            children: \"Interests\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                            children: \"About Me\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                            as: \"a\",\n                                            href: \"https://github.com/JoMiras/luckydog-homepage\",\n                                            children: \"Source Info\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                            lineNumber: 71,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                    lineNumber: 69,\n                    columnNumber: 14\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ087QUFlUDtBQUN3QjtBQUVqRCxNQUFNZ0IsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7O0lBQ3RDLE1BQU1DLFNBQVNGLFNBQVNEO0lBQ3hCLE1BQU1JLGdCQUFnQlIsbUVBQWlCQSxDQUFFLFdBQVc7SUFDcEQscUJBQ0ksOERBQUNaLGtEQUFRQTtRQUFDZ0IsTUFBTUE7a0JBQ1osNEVBQUNiLGtEQUFJQTtZQUNMa0IsR0FBRztZQUNIQyxJQUFJSCxTQUFTLGNBQWNJO1lBQzNCQyxPQUFPTCxTQUFTLFlBQVlDO3NCQUV2QkY7Ozs7Ozs7Ozs7O0FBSWpCO0dBZE1IOztRQUVvQkgsK0RBQWlCQTs7O0tBRnJDRztBQWdCTixNQUFNVSxTQUFTQyxDQUFBQTs7SUFDWCxNQUFNLEVBQUVULElBQUksRUFBRSxHQUFHUztJQUVqQixxQkFDSSw4REFBQ3hCLGlEQUFHQTtRQUNKeUIsVUFBUztRQUNUQyxJQUFHO1FBQ0hDLEdBQUU7UUFDRlAsSUFBSVYsbUVBQWlCQSxDQUFDLGFBQWE7UUFDbkNrQixPQUFPO1lBQUNDLGdCQUFlO1FBQVc7UUFDbENDLFFBQVE7UUFDUCxHQUFHTixLQUFLO2tCQUVMLDRFQUFDekIsdURBQVNBO1lBQUNnQyxTQUFTO1lBQU9aLEdBQUc7WUFBR2EsTUFBSztZQUFlQyxNQUFLO1lBQU9DLE9BQU07WUFBU0MsU0FBUTs7OEJBRXBGLDhEQUFDL0Isa0RBQUlBO29CQUFDOEIsT0FBTTtvQkFBU0UsSUFBSTs4QkFDckIsNEVBQUNqQyxxREFBT0E7d0JBQUN1QixJQUFHO3dCQUFLVyxNQUFLO3dCQUFLQyxlQUFlO2tDQUN0Qyw0RUFBQ3pDLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OzhCQUdqQiw4REFBQ0ssbURBQUtBO29CQUNOcUMsV0FBVzt3QkFBRUMsTUFBTTt3QkFBVUMsSUFBSTtvQkFBTTtvQkFDdkNWLFNBQVc7d0JBQUVTLE1BQU07d0JBQVNDLElBQUk7b0JBQU87b0JBQ3ZDQyxPQUFTO3dCQUFFRixNQUFNO3dCQUFRQyxJQUFJO29CQUFPO29CQUNwQ0UsWUFBVztvQkFDWEMsVUFBVTtvQkFDVkMsSUFBSzt3QkFBRUwsTUFBTTt3QkFBR0MsSUFBSTtvQkFBQzs7c0NBRXJCLDhEQUFDeEMsa0RBQUlBO3NDQUFDOzs7Ozs7c0NBQ04sOERBQUNBLGtEQUFJQTtzQ0FBQzs7Ozs7O3NDQUNOLDhEQUFDQSxrREFBSUE7c0NBQUM7Ozs7Ozs7Ozs7Ozs4QkFHTCw4REFBQ0QsaURBQUdBO29CQUFDOEMsTUFBTTtvQkFBR1osT0FBTTs4QkFDakIsNEVBQUNsQyxpREFBR0E7d0JBQUMrQyxJQUFJO3dCQUFHaEIsU0FBUzs0QkFBQ1MsTUFBTTs0QkFBZ0JDLElBQUk7d0JBQU07a0NBQ3RELDRFQUFDcEMsa0RBQUlBOzs4Q0FDRCw4REFBQ0csd0RBQVVBO29DQUFDa0IsSUFBSWpCLHdEQUFVQTtvQ0FBRXVDLG9CQUFNLDhEQUFDcEMsMkRBQWFBO29DQUFLcUMsU0FBUTtvQ0FBVUMsY0FBVzs7Ozs7OzhDQUVsRiw4REFBQzNDLHNEQUFRQTs7c0RBQ0wsOERBQUNELHNEQUFRQTtzREFBQzs7Ozs7O3NEQUNWLDhEQUFDQSxzREFBUUE7c0RBQUM7Ozs7OztzREFDViw4REFBQ0Esc0RBQVFBO3NEQUFDOzs7Ozs7c0RBQ1YsOERBQUNBLHNEQUFRQTs0Q0FBQ29CLElBQUc7NENBQUlaLE1BQUs7c0RBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0Y7SUFuRE1TOztRQVFNYiwrREFBaUJBOzs7TUFSdkJhO0FBcUROLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gICAgQ29udGFpbmVyLFxuICAgIEJveCxcbiAgICBMaW5rLFxuICAgIFN0YWNrLFxuICAgIEhlYWRpbmcsXG4gICAgRmxleCxcbiAgICBNZW51LFxuICAgIE1lbnVJdGVtLFxuICAgIE1lbnVMaXN0LFxuICAgIE1lbnVCdXR0b24sXG4gICAgSWNvbkJ1dHRvbixcbiAgICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgICB1c2VDb2xvck1vZGVcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuY29uc3QgTGlua0l0ZW0gPSAoeyBocmVmLCBwYXRoLCBjaGlsZHJlbix9KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxuICAgIGNvbnN0IGluYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSAoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgYmc9e2FjdGl2ZSA/ICdnbGFzc1RlYWwnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgY29sb3I9e2FjdGl2ZSA/ICcjMjAyMDIzJyA6IGluYWN0aXZlQ29sb3J9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgIClcbn1cblxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggXG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIiBcbiAgICAgICAgYXM9XCJuYXZcIlxuICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnI2ZmZmZmZjQwJywgJyMyMDIwMjM4MCcpfVxuICAgICAgICBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOidibHVyKDEwcHgnfX1cbiAgICAgICAgekluZGV4PXsxfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxDb250YWluZXIgZGlzcGxheSA9XCJmbGV4XCIgcD17Mn0gbWF4Vz1cImNvbnRhaW5lci5tZFwiIHdyYXA9XCJ3cmFwXCIgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwibGdcIiBsZXR0ZXJTcGFjaW5nPXsndGlnaHRlcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBtZDogJ3JvdycgfX1cbiAgICAgICAgICAgIGRpc3BsYXkgPSB7eyBiYXNlOiAnbm9uZScgLCBtZDogJ2ZsZXgnIH19XG4gICAgICAgICAgICB3aWR0aCA9IHt7IGJhc2U6ICdmdWxsJywgbWQ6ICdhdXRvJyB9fVxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICAgIG10PSB7eyBiYXNlOiA0LCBtZDogMH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluaz5Xb3JrczwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rPkludGVyZXN0czwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rPlNvdXJjZTwvTGluaz5cblxuICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgPEJveCBmbGV4PXsxfSBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPEJveCBtbD17Mn0gZGlzcGxheT17e2Jhc2U6ICdpbmxpbmUtYmxvY2snLCBtZDogJ25vbmUnfX0+XG4gICAgICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uIGFzPXtJY29uQnV0dG9ufSBpY29uPXs8SGFtYnVyZ2VySWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVcIiBhcmlhLWxhYmVsPVwiT3B0aW9uc1wiIFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+V29ya3M8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPkludGVyZXN0czwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+QWJvdXQgTWU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPSdhJyBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vSm9NaXJhcy9sdWNreWRvZy1ob21lcGFnZSc+U291cmNlIEluZm88L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIkxvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkxpbmsiLCJTdGFjayIsIkhlYWRpbmciLCJGbGV4IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpc3QiLCJNZW51QnV0dG9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlQ29sb3JNb2RlIiwiSGFtYnVyZ2VySWNvbiIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJwIiwiYmciLCJ1bmRlZmluZWQiLCJjb2xvciIsIk5hdmJhciIsInByb3BzIiwicG9zaXRpb24iLCJhcyIsInciLCJzdHlsZSIsImJhY2tkcm9wRmlsdGVyIiwiekluZGV4IiwiZGlzcGxheSIsIm1heFciLCJ3cmFwIiwiYWxpZ24iLCJqdXN0aWZ5IiwibXIiLCJzaXplIiwibGV0dGVyU3BhY2luZyIsImRpcmVjdGlvbiIsImJhc2UiLCJtZCIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibXQiLCJmbGV4IiwibWwiLCJpY29uIiwidmFyaWFudCIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});