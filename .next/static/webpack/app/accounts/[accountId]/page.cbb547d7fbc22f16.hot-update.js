"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/accounts/[accountId]/page",{

/***/ "(app-pages-browser)/./src/app/accounts/[accountId]/page.tsx":
/*!***********************************************!*\
  !*** ./src/app/accounts/[accountId]/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountInformationPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/accordion */ \"(app-pages-browser)/./src/components/ui/accordion.tsx\");\n/* harmony import */ var _components_TransactionTable_TransactionRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TransactionTable/TransactionRow */ \"(app-pages-browser)/./src/components/TransactionTable/TransactionRow.tsx\");\n/* harmony import */ var _hooks_useGetTransactionsByAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useGetTransactionsByAccount */ \"(app-pages-browser)/./src/hooks/useGetTransactionsByAccount.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AccountInformationPage(param) {\n    let { params } = param;\n    _s();\n    const transactions = (0,_hooks_useGetTransactionsByAccount__WEBPACK_IMPORTED_MODULE_3__.useGetTransactionsByAccount)(params.accountId);\n    console.log(\"Trasactions:\", transactions);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: params.accountId\n            }, void 0, false, {\n                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.Accordion, {\n                type: \"single\",\n                collapsible: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionItem, {\n                    value: \"item-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionTrigger, {\n                            children: \"Transactions\"\n                        }, void 0, false, {\n                            fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionContent, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            className: \"border\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"border\",\n                                                    children: \"Description\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                                                    lineNumber: 28,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"border\",\n                                                    children: \"Account\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                                                    lineNumber: 29,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"border\",\n                                                    children: \"Category\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"border\",\n                                                    children: \"Date\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"border\",\n                                                    children: \"Amount\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                        children: transactions && transactions.map((transaction)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionTable_TransactionRow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                transaction: transaction\n                                            }, transaction.id, false, {\n                                                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 23\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/app/accounts/[accountId]/page.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AccountInformationPage, \"/NEFBIZZnN1folz41shVZXuKU78=\", false, function() {\n    return [\n        _hooks_useGetTransactionsByAccount__WEBPACK_IMPORTED_MODULE_3__.useGetTransactionsByAccount\n    ];\n});\n_c = AccountInformationPage;\nvar _c;\n$RefreshReg$(_c, \"AccountInformationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWNjb3VudHMvW2FjY291bnRJZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1tQztBQUN1QztBQUNRO0FBRW5FLFNBQVNNLHVCQUF1QixLQUk5QztRQUo4QyxFQUM3Q0MsTUFBTSxFQUdQLEdBSjhDOztJQUs3QyxNQUFNQyxlQUFlSCwrRkFBMkJBLENBQUNFLE9BQU9FLFNBQVM7SUFDakVDLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JIO0lBQzVCLHFCQUNFOzswQkFDRSw4REFBQ0k7MEJBQUtMLE9BQU9FLFNBQVM7Ozs7OzswQkFDdEIsOERBQUNULCtEQUFTQTtnQkFBQ2EsTUFBSztnQkFBU0MsV0FBVzswQkFDbEMsNEVBQUNaLG1FQUFhQTtvQkFBQ2EsT0FBTTs7c0NBQ25CLDhEQUFDWixzRUFBZ0JBO3NDQUFDOzs7Ozs7c0NBQ2xCLDhEQUFDRixzRUFBZ0JBO3NDQUNmLDRFQUFDZTtnQ0FBTUMsV0FBVTs7a0RBQ2YsOERBQUNDO2tEQUNDLDRFQUFDQzs0Q0FBR0YsV0FBVTs7OERBQ1osOERBQUNHO29EQUFHSCxXQUFVOzhEQUFTOzs7Ozs7OERBQ3ZCLDhEQUFDRztvREFBR0gsV0FBVTs4REFBUzs7Ozs7OzhEQUN2Qiw4REFBQ0c7b0RBQUdILFdBQVU7OERBQVM7Ozs7Ozs4REFDdkIsOERBQUNHO29EQUFHSCxXQUFVOzhEQUFTOzs7Ozs7OERBQ3ZCLDhEQUFDRztvREFBR0gsV0FBVTs4REFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRzNCLDhEQUFDSTtrREFDRWIsZ0JBQ0NBLGFBQWFjLEdBQUcsQ0FBQyxDQUFDQzs0Q0FDaEIscUJBQ0UsOERBQUNuQixtRkFBY0E7Z0RBRWJtQixhQUFhQTsrQ0FEUkEsWUFBWUMsRUFBRTs7Ozs7d0NBSXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEI7R0F6Q3dCbEI7O1FBS0RELDJGQUEyQkE7OztLQUwxQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hY2NvdW50cy9bYWNjb3VudElkXS9wYWdlLnRzeD80M2QyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHtcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25Db250ZW50LFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25UcmlnZ2VyLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FjY29yZGlvblwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uUm93IGZyb20gXCJAL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25UYWJsZS9UcmFuc2FjdGlvblJvd1wiO1xuaW1wb3J0IHsgdXNlR2V0VHJhbnNhY3Rpb25zQnlBY2NvdW50IH0gZnJvbSBcIkAvaG9va3MvdXNlR2V0VHJhbnNhY3Rpb25zQnlBY2NvdW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnRJbmZvcm1hdGlvblBhZ2Uoe1xuICBwYXJhbXMsXG59OiB7XG4gIHBhcmFtczogeyBhY2NvdW50SWQ6IHN0cmluZyB9O1xufSkge1xuICBjb25zdCB0cmFuc2FjdGlvbnMgPSB1c2VHZXRUcmFuc2FjdGlvbnNCeUFjY291bnQocGFyYW1zLmFjY291bnRJZCk7XG4gIGNvbnNvbGUubG9nKFwiVHJhc2FjdGlvbnM6XCIsIHRyYW5zYWN0aW9ucyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+e3BhcmFtcy5hY2NvdW50SWR9PC9kaXY+XG4gICAgICA8QWNjb3JkaW9uIHR5cGU9XCJzaW5nbGVcIiBjb2xsYXBzaWJsZT5cbiAgICAgICAgPEFjY29yZGlvbkl0ZW0gdmFsdWU9XCJpdGVtLTFcIj5cbiAgICAgICAgICA8QWNjb3JkaW9uVHJpZ2dlcj5UcmFuc2FjdGlvbnM8L0FjY29yZGlvblRyaWdnZXI+XG4gICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnQ+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPkFjY291bnQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPkNhdGVnb3J5PC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5BbW91bnQ8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25zICYmXG4gICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvblJvd1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0cmFuc2FjdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt0cmFuc2FjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudD5cbiAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgPC9BY2NvcmRpb24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiQWNjb3JkaW9uQ29udGVudCIsIkFjY29yZGlvbkl0ZW0iLCJBY2NvcmRpb25UcmlnZ2VyIiwiVHJhbnNhY3Rpb25Sb3ciLCJ1c2VHZXRUcmFuc2FjdGlvbnNCeUFjY291bnQiLCJBY2NvdW50SW5mb3JtYXRpb25QYWdlIiwicGFyYW1zIiwidHJhbnNhY3Rpb25zIiwiYWNjb3VudElkIiwiY29uc29sZSIsImxvZyIsImRpdiIsInR5cGUiLCJjb2xsYXBzaWJsZSIsInZhbHVlIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInRyYW5zYWN0aW9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/accounts/[accountId]/page.tsx\n"));

/***/ })

});