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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href, path, children } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst Navbar = (props)=>{\n    _s1();\n    const { path } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px\"\n        },\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            children: \"Works\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            children: \"Interests\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {}, void 0, false, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        ml: 2,\n                        display: {\n                            base: \"inline-block\",\n                            md: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {\n                                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton,\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.HamburgerIcon, {}, void 0, false, void 0, void 0),\n                                variant: \"outline\",\n                                \"aria-label\": \"Options\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                            lineNumber: 71,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n                    lineNumber: 69,\n                    columnNumber: 14\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/pythias/Documents/Coding Folder/luckydog-homepage/components/navbar.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ087QUFlUDtBQUN3QjtBQUVqRCxNQUFNZ0IsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7O0lBQ3RDLE1BQU1DLFNBQVNGLFNBQVNEO0lBQ3hCLE1BQU1JLGdCQUFnQlIsbUVBQWlCQSxDQUFFLFdBQVc7SUFDcEQscUJBQ0ksOERBQUNaLGtEQUFRQTtRQUFDZ0IsTUFBTUE7a0JBQ1osNEVBQUNiLGtEQUFJQTtZQUNMa0IsR0FBRztZQUNIQyxJQUFJSCxTQUFTLGNBQWNJO1lBQzNCQyxPQUFPTCxTQUFTLFlBQVlDO3NCQUV2QkY7Ozs7Ozs7Ozs7O0FBSWpCO0dBZE1IOztRQUVvQkgsK0RBQWlCQTs7O0tBRnJDRztBQWdCTixNQUFNVSxTQUFTQyxDQUFBQTs7SUFDWCxNQUFNLEVBQUVULElBQUksRUFBRSxHQUFHUztJQUVqQixxQkFDSSw4REFBQ3hCLGlEQUFHQTtRQUNKeUIsVUFBUztRQUNUQyxJQUFHO1FBQ0hDLEdBQUU7UUFDRlAsSUFBSVYsbUVBQWlCQSxDQUFDLGFBQWE7UUFDbkNrQixPQUFPO1lBQUNDLGdCQUFlO1FBQVc7UUFDbENDLFFBQVE7UUFDUCxHQUFHTixLQUFLO2tCQUVMLDRFQUFDekIsdURBQVNBO1lBQUNnQyxTQUFTO1lBQU9aLEdBQUc7WUFBR2EsTUFBSztZQUFlQyxNQUFLO1lBQU9DLE9BQU07WUFBU0MsU0FBUTs7OEJBRXBGLDhEQUFDL0Isa0RBQUlBO29CQUFDOEIsT0FBTTtvQkFBU0UsSUFBSTs4QkFDckIsNEVBQUNqQyxxREFBT0E7d0JBQUN1QixJQUFHO3dCQUFLVyxNQUFLO3dCQUFLQyxlQUFlO2tDQUN0Qyw0RUFBQ3pDLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OzhCQUdqQiw4REFBQ0ssbURBQUtBO29CQUNOcUMsV0FBVzt3QkFBRUMsTUFBTTt3QkFBVUMsSUFBSTtvQkFBTTtvQkFDdkNWLFNBQVc7d0JBQUVTLE1BQU07d0JBQVNDLElBQUk7b0JBQU87b0JBQ3ZDQyxPQUFTO3dCQUFFRixNQUFNO3dCQUFRQyxJQUFJO29CQUFPO29CQUNwQ0UsWUFBVztvQkFDWEMsVUFBVTtvQkFDVkMsSUFBSzt3QkFBRUwsTUFBTTt3QkFBR0MsSUFBSTtvQkFBQzs7c0NBRXJCLDhEQUFDeEMsa0RBQUlBO3NDQUFDOzs7Ozs7c0NBQ04sOERBQUNBLGtEQUFJQTtzQ0FBQzs7Ozs7O3NDQUNOLDhEQUFDQSxrREFBSUE7Ozs7Ozs7Ozs7OzhCQUdKLDhEQUFDRCxpREFBR0E7b0JBQUM4QyxNQUFNO29CQUFHWixPQUFNOzhCQUNqQiw0RUFBQ2xDLGlEQUFHQTt3QkFBQytDLElBQUk7d0JBQUdoQixTQUFTOzRCQUFDUyxNQUFNOzRCQUFnQkMsSUFBSTt3QkFBTTtrQ0FDdEQsNEVBQUNwQyxrREFBSUE7c0NBQ0QsNEVBQUNHLHdEQUFVQTtnQ0FBQ2tCLElBQUlqQix3REFBVUE7Z0NBQUV1QyxvQkFBTSw4REFBQ3BDLDJEQUFhQTtnQ0FBS3FDLFNBQVE7Z0NBQVVDLGNBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RHO0lBM0NNM0I7O1FBUU1iLCtEQUFpQkE7OztNQVJ2QmE7QUE2Q04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/NWI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgICBDb250YWluZXIsXG4gICAgQm94LFxuICAgIExpbmssXG4gICAgU3RhY2ssXG4gICAgSGVhZGluZyxcbiAgICBGbGV4LFxuICAgIE1lbnUsXG4gICAgTWVudUl0ZW0sXG4gICAgTWVudUxpc3QsXG4gICAgTWVudUJ1dHRvbixcbiAgICBJY29uQnV0dG9uLFxuICAgIHVzZUNvbG9yTW9kZVZhbHVlLFxuICAgIHVzZUNvbG9yTW9kZVxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiAgfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5jb25zdCBMaW5rSXRlbSA9ICh7IGhyZWYsIHBhdGgsIGNoaWxkcmVuLH0pID0+IHtcbiAgICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmXG4gICAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlICgnZ3JheTIwMCcsICd3aGl0ZUFscGhhLjkwMCcpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICBiZz17YWN0aXZlID8gJ2dsYXNzVGVhbCcgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBjb2xvcj17YWN0aXZlID8gJyMyMDIwMjMnIDogaW5hY3RpdmVDb2xvcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgKVxufVxuXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiIFxuICAgICAgICBhcz1cIm5hdlwiXG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmZmNDAnLCAnIzIwMjAyMzgwJyl9XG4gICAgICAgIHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6J2JsdXIoMTBweCd9fVxuICAgICAgICB6SW5kZXg9ezF9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPENvbnRhaW5lciBkaXNwbGF5ID1cImZsZXhcIiBwPXsyfSBtYXhXPVwiY29udGFpbmVyLm1kXCIgd3JhcD1cIndyYXBcIiBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1yPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogJ2NvbHVtbicsIG1kOiAncm93JyB9fVxuICAgICAgICAgICAgZGlzcGxheSA9IHt7IGJhc2U6ICdub25lJyAsIG1kOiAnZmxleCcgfX1cbiAgICAgICAgICAgIHdpZHRoID0ge3sgYmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nIH19XG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgICAgbXQ9IHt7IGJhc2U6IDQsIG1kOiAwfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rPldvcmtzPC9MaW5rPlxuICAgICAgICAgICAgPExpbms+SW50ZXJlc3RzPC9MaW5rPlxuICAgICAgICAgICAgPExpbms+PC9MaW5rPlxuXG4gICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICA8Qm94IGZsZXg9ezF9IGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8Qm94IG1sPXsyfSBkaXNwbGF5PXt7YmFzZTogJ2lubGluZS1ibG9jaycsIG1kOiAnbm9uZSd9fT5cbiAgICAgICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b24gYXM9e0ljb25CdXR0b259IGljb249ezxIYW1idXJnZXJJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZVwiIGFyaWEtbGFiZWw9XCJPcHRpb25zXCIgLz5cbiAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiTG9nbyIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VDb2xvck1vZGUiLCJIYW1idXJnZXJJY29uIiwiTGlua0l0ZW0iLCJocmVmIiwicGF0aCIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaW5hY3RpdmVDb2xvciIsInAiLCJiZyIsInVuZGVmaW5lZCIsImNvbG9yIiwiTmF2YmFyIiwicHJvcHMiLCJwb3NpdGlvbiIsImFzIiwidyIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJ6SW5kZXgiLCJkaXNwbGF5IiwibWF4VyIsIndyYXAiLCJhbGlnbiIsImp1c3RpZnkiLCJtciIsInNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZGlyZWN0aW9uIiwiYmFzZSIsIm1kIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtdCIsImZsZXgiLCJtbCIsImljb24iLCJ2YXJpYW50IiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});