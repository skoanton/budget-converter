"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/transactions/page",{

/***/ "(app-pages-browser)/./src/components/TransactionTable/TransactionTable.tsx":
/*!**************************************************************!*\
  !*** ./src/components/TransactionTable/TransactionTable.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _TransactionRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionRow */ \"(app-pages-browser)/./src/components/TransactionTable/TransactionRow.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_getTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/getTransactions */ \"(app-pages-browser)/./src/lib/getTransactions.ts\");\n/* harmony import */ var _lib_transactions_getTransactionsByAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/transactions/getTransactionsByAccount */ \"(app-pages-browser)/./src/lib/transactions/getTransactionsByAccount.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction TransactionTable(props) {\n    _s();\n    const [transactions, setTransations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchAllTransactions = async ()=>{\n            const fetchedTransaction = await (0,_lib_getTransactions__WEBPACK_IMPORTED_MODULE_3__.getTransactions)();\n            if (fetchedTransaction) {\n                setTransations(fetchedTransaction);\n            }\n        };\n        const fetchAccountTransactions = async (accountId)=>{\n            const fetchedTransaction = await (0,_lib_transactions_getTransactionsByAccount__WEBPACK_IMPORTED_MODULE_4__.getTransactionsByAccount)(accountId);\n            if (fetchedTransaction) {\n                setTransations(fetchedTransaction);\n            }\n        };\n        if (props.allTransactions) {\n            fetchAllTransactions();\n        } else {\n            fetchAccountTransactions(props.accountId);\n        }\n    }, [\n        props.allTransactions\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"border\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"border\",\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/TransactionTable/TransactionTable.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"border\",\n                                children: \"Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/TransactionTable/TransactionTable.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"border\",\n                                children: \"Category\"\n                            }, void 0, false, {\n                                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/TransactionTable/TransactionTable.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"border\",\n                                children: \"Date\"\n                            }, void 0, false, {\n                                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/TransactionTable/TransactionTable.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"border\",\n                                children: \"Amount\"\n                            }, void 0, false, {\n                                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/TransactionTable/TransactionTable.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/TransactionTable/TransactionTable.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/TransactionTable/TransactionTable.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: transactions && transactions.map((transaction)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TransactionRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            transaction: transaction\n                        }, transaction.id, false, {\n                            fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/TransactionTable/TransactionTable.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/TransactionTable/TransactionTable.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/TransactionTable/TransactionTable.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(TransactionTable, \"CZ+y5WcEFgvteA/kWndpIC9W/7c=\");\n_c = TransactionTable;\nvar _c;\n$RefreshReg$(_c, \"TransactionTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RyYW5zYWN0aW9uVGFibGUvVHJhbnNhY3Rpb25UYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSThDO0FBQ0Y7QUFDWTtBQUMrQjtBQWtCeEUsU0FBU0ssaUJBQWlCQyxLQUE0Qjs7SUFDbkUsTUFBTSxDQUFDQyxjQUFjQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFnQixFQUFFO0lBRWpFRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLHVCQUF1QjtZQUMzQixNQUFNQyxxQkFBcUIsTUFBTVAscUVBQWVBO1lBQ2hELElBQUlPLG9CQUFvQjtnQkFDdEJGLGVBQWVFO1lBQ2pCO1FBQ0Y7UUFFQSxNQUFNQywyQkFBMkIsT0FBT0M7WUFDdEMsTUFBTUYscUJBQXFCLE1BQU1OLG9HQUF3QkEsQ0FBQ1E7WUFDMUQsSUFBSUYsb0JBQW9CO2dCQUN0QkYsZUFBZUU7WUFDakI7UUFDRjtRQUVBLElBQUlKLE1BQU1PLGVBQWUsRUFBRTtZQUN6Qko7UUFDRixPQUFPO1lBQ0xFLHlCQUF5QkwsTUFBTU0sU0FBUztRQUMxQztJQUNGLEdBQUc7UUFBQ04sTUFBTU8sZUFBZTtLQUFDO0lBRTFCLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFNQyxXQUFVOzs4QkFDZiw4REFBQ0M7OEJBQ0MsNEVBQUNDO3dCQUFHRixXQUFVOzswQ0FDWiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQVM7Ozs7OzswQ0FDdkIsOERBQUNHO2dDQUFHSCxXQUFVOzBDQUFTOzs7Ozs7MENBQ3ZCLDhEQUFDRztnQ0FBR0gsV0FBVTswQ0FBUzs7Ozs7OzBDQUN2Qiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQVM7Ozs7OzswQ0FDdkIsOERBQUNHO2dDQUFHSCxXQUFVOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHM0IsOERBQUNJOzhCQUNFWixnQkFDQ0EsYUFBYWEsR0FBRyxDQUFDLENBQUNDO3dCQUNoQixxQkFDRSw4REFBQ3JCLHVEQUFjQTs0QkFFYnFCLGFBQWFBOzJCQURSQSxZQUFZQyxFQUFFOzs7OztvQkFJekI7Ozs7Ozs7Ozs7Ozs7QUFLWjtHQW5Ed0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UcmFuc2FjdGlvblRhYmxlL1RyYW5zYWN0aW9uVGFibGUudHN4P2JjZWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIkAvdHlwZXMvdHJhbnNhY3Rpb25zVHlwZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFRyYW5zYWN0aW9uUm93IGZyb20gXCIuL1RyYW5zYWN0aW9uUm93XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRUcmFuc2FjdGlvbnMgfSBmcm9tIFwiQC9saWIvZ2V0VHJhbnNhY3Rpb25zXCI7XG5pbXBvcnQgeyBnZXRUcmFuc2FjdGlvbnNCeUFjY291bnQgfSBmcm9tIFwiQC9saWIvdHJhbnNhY3Rpb25zL2dldFRyYW5zYWN0aW9uc0J5QWNjb3VudFwiO1xuXG50eXBlIEJhc2VUcmFuc2FjdGlvblRhYmxlUHJvcHMgPSB7XG4gIGFsbFRyYW5zYWN0aW9uczogYm9vbGVhbjtcbn07XG5cbnR5cGUgQWNjb3VudFRyYW5zYWN0aW9uVGFibGVQcm9wcyA9IHtcbiAgYWxsVHJhbnNhY3Rpb25zOiBmYWxzZTtcbiAgYWNjb3VudElkOiBzdHJpbmc7XG59O1xuXG50eXBlIEFsbFRyYW5zYWN0aW9uc1RhYmxlUHJvcHMgPSB7XG4gIGFsbFRyYW5zYWN0aW9uczogdHJ1ZTtcbn07XG5cbnR5cGUgVHJhbnNhY3Rpb25UYWJsZVByb3BzID0gQmFzZVRyYW5zYWN0aW9uVGFibGVQcm9wcyAmXG4gIChBY2NvdW50VHJhbnNhY3Rpb25UYWJsZVByb3BzIHwgQWxsVHJhbnNhY3Rpb25zVGFibGVQcm9wcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zYWN0aW9uVGFibGUocHJvcHM6IFRyYW5zYWN0aW9uVGFibGVQcm9wcykge1xuICBjb25zdCBbdHJhbnNhY3Rpb25zLCBzZXRUcmFuc2F0aW9uc10gPSB1c2VTdGF0ZTxUcmFuc2FjdGlvbltdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEFsbFRyYW5zYWN0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoZWRUcmFuc2FjdGlvbiA9IGF3YWl0IGdldFRyYW5zYWN0aW9ucygpO1xuICAgICAgaWYgKGZldGNoZWRUcmFuc2FjdGlvbikge1xuICAgICAgICBzZXRUcmFuc2F0aW9ucyhmZXRjaGVkVHJhbnNhY3Rpb24pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBmZXRjaEFjY291bnRUcmFuc2FjdGlvbnMgPSBhc3luYyAoYWNjb3VudElkOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoZWRUcmFuc2FjdGlvbiA9IGF3YWl0IGdldFRyYW5zYWN0aW9uc0J5QWNjb3VudChhY2NvdW50SWQpO1xuICAgICAgaWYgKGZldGNoZWRUcmFuc2FjdGlvbikge1xuICAgICAgICBzZXRUcmFuc2F0aW9ucyhmZXRjaGVkVHJhbnNhY3Rpb24pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAocHJvcHMuYWxsVHJhbnNhY3Rpb25zKSB7XG4gICAgICBmZXRjaEFsbFRyYW5zYWN0aW9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaEFjY291bnRUcmFuc2FjdGlvbnMocHJvcHMuYWNjb3VudElkKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5hbGxUcmFuc2FjdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyXCI+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPkFjY291bnQ8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlclwiPkNhdGVnb3J5PC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXJcIj5BbW91bnQ8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7dHJhbnNhY3Rpb25zICYmXG4gICAgICAgICAgICB0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvblJvd1xuICAgICAgICAgICAgICAgICAga2V5PXt0cmFuc2FjdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt0cmFuc2FjdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRyYW5zYWN0aW9uUm93IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRUcmFuc2FjdGlvbnMiLCJnZXRUcmFuc2FjdGlvbnNCeUFjY291bnQiLCJUcmFuc2FjdGlvblRhYmxlIiwicHJvcHMiLCJ0cmFuc2FjdGlvbnMiLCJzZXRUcmFuc2F0aW9ucyIsImZldGNoQWxsVHJhbnNhY3Rpb25zIiwiZmV0Y2hlZFRyYW5zYWN0aW9uIiwiZmV0Y2hBY2NvdW50VHJhbnNhY3Rpb25zIiwiYWNjb3VudElkIiwiYWxsVHJhbnNhY3Rpb25zIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInRyYW5zYWN0aW9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TransactionTable/TransactionTable.tsx\n"));

/***/ })

});