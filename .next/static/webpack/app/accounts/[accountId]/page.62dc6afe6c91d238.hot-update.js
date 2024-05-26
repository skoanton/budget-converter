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

/***/ "(app-pages-browser)/./src/hooks/useGetTransactionsByAccount.ts":
/*!**************************************************!*\
  !*** ./src/hooks/useGetTransactionsByAccount.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGetTransactionsByAccount: function() { return /* binding */ useGetTransactionsByAccount; }\n/* harmony export */ });\n/* harmony import */ var _lib_transactions_getTransactionsByAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/transactions/getTransactionsByAccount */ \"(app-pages-browser)/./src/lib/transactions/getTransactionsByAccount.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useGetTransactionsByAccount = (accountId)=>{\n    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    console.log(\"inne i useGetTransactionsByAccount\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTransactions = async ()=>{\n            try {\n                const fetchedTransactions = await (0,_lib_transactions_getTransactionsByAccount__WEBPACK_IMPORTED_MODULE_0__.getTransactionsByAccount)(accountId);\n                console.log(\"Transactions\", fetchedTransactions);\n                if (fetchedTransactions) {\n                    setTransactions(fetchedTransactions);\n                }\n            } catch (error) {\n                console.error(\"Could not fetch transacitons by\", accountId);\n            }\n        };\n        fetchTransactions;\n    }, [\n        accountId\n    ]);\n    return transactions;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VHZXRUcmFuc2FjdGlvbnNCeUFjY291bnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RjtBQUUzQztBQUVyQyxNQUFNRyw4QkFBK0IsQ0FBQ0M7SUFFekMsTUFBTSxDQUFDQyxjQUFhQyxnQkFBZ0IsR0FBR0osK0NBQVFBLENBQWdCLEVBQUU7SUFDakVLLFFBQVFDLEdBQUcsQ0FBQztJQUNaUCxnREFBU0EsQ0FBQztRQUVOLE1BQU1RLG9CQUFtQjtZQUVyQixJQUFJO2dCQUNBLE1BQU1DLHNCQUFzQixNQUFNVixvR0FBd0JBLENBQUNJO2dCQUMvREcsUUFBUUMsR0FBRyxDQUFDLGdCQUFlRTtnQkFDM0IsSUFBR0EscUJBQW9CO29CQUNuQkosZ0JBQWdCSTtnQkFDcEI7WUFDQSxFQUFFLE9BQU9DLE9BQU87Z0JBQ1hKLFFBQVFJLEtBQUssQ0FBQyxtQ0FBa0NQO1lBQ3JEO1FBR0o7UUFFQUs7SUFFSixHQUFFO1FBQUNMO0tBQVU7SUFDYixPQUFPQztBQUVYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUdldFRyYW5zYWN0aW9uc0J5QWNjb3VudC50cz9mZmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFRyYW5zYWN0aW9uc0J5QWNjb3VudCB9IGZyb20gXCJAL2xpYi90cmFuc2FjdGlvbnMvZ2V0VHJhbnNhY3Rpb25zQnlBY2NvdW50XCI7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gXCJAL3R5cGVzL3RyYW5zYWN0aW9uc1R5cGVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUdldFRyYW5zYWN0aW9uc0J5QWNjb3VudCA9ICAoYWNjb3VudElkOnN0cmluZyk6VHJhbnNhY3Rpb25bXSA9PiB7XG5cbiAgICBjb25zdCBbdHJhbnNhY3Rpb25zLHNldFRyYW5zYWN0aW9uc10gPSB1c2VTdGF0ZTxUcmFuc2FjdGlvbltdPihbXSk7XG4gICAgY29uc29sZS5sb2coXCJpbm5lIGkgdXNlR2V0VHJhbnNhY3Rpb25zQnlBY2NvdW50XCIpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmZXRjaFRyYW5zYWN0aW9ucz0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmV0Y2hlZFRyYW5zYWN0aW9ucyA9IGF3YWl0IGdldFRyYW5zYWN0aW9uc0J5QWNjb3VudChhY2NvdW50SWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbnNcIixmZXRjaGVkVHJhbnNhY3Rpb25zKTtcbiAgICAgICAgICAgIGlmKGZldGNoZWRUcmFuc2FjdGlvbnMpe1xuICAgICAgICAgICAgICAgIHNldFRyYW5zYWN0aW9ucyhmZXRjaGVkVHJhbnNhY3Rpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZmV0Y2ggdHJhbnNhY2l0b25zIGJ5XCIsYWNjb3VudElkKTsgICBcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgfSAgIFxuXG4gICAgICAgIGZldGNoVHJhbnNhY3Rpb25zXG5cbiAgICB9LFthY2NvdW50SWRdKVxuICAgIHJldHVybiB0cmFuc2FjdGlvbnM7XG5cbn0iXSwibmFtZXMiOlsiZ2V0VHJhbnNhY3Rpb25zQnlBY2NvdW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VHZXRUcmFuc2FjdGlvbnNCeUFjY291bnQiLCJhY2NvdW50SWQiLCJ0cmFuc2FjdGlvbnMiLCJzZXRUcmFuc2FjdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hUcmFuc2FjdGlvbnMiLCJmZXRjaGVkVHJhbnNhY3Rpb25zIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useGetTransactionsByAccount.ts\n"));

/***/ })

});