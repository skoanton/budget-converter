"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/budget/page",{

/***/ "(app-pages-browser)/./src/components/BudgetView/Budget.tsx":
/*!**********************************************!*\
  !*** ./src/components/BudgetView/Budget.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Budget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _BudgetView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BudgetView */ \"(app-pages-browser)/./src/components/BudgetView/BudgetView.tsx\");\n/* harmony import */ var _constants_collectionsNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/collectionsNames */ \"(app-pages-browser)/./src/constants/collectionsNames.ts\");\n/* harmony import */ var _SortBudget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SortBudget */ \"(app-pages-browser)/./src/components/BudgetView/SortBudget.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Budget() {\n    _s();\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortBudget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/BudgetView/Budget.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BudgetView__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: \"Expense Budget\",\n                        collectionName: _constants_collectionsNames__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_NAMES.EXPENSES_CATEGORIES\n                    }, void 0, false, {\n                        fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/BudgetView/Budget.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/BudgetView/Budget.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BudgetView__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: \"Income Budget\",\n                        collectionName: _constants_collectionsNames__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_NAMES.INCOME_CATEGORIES\n                    }, void 0, false, {\n                        fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/BudgetView/Budget.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mrdavinski/repos/personal-projects/budget-converter-2/src/components/BudgetView/Budget.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Budget, \"oO0U4qkruM0Mj8TzIuranpI59J0=\");\n_c = Budget;\nvar _c;\n$RefreshReg$(_c, \"Budget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0J1ZGdldFZpZXcvQnVkZ2V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHc0M7QUFFMEI7QUFDMUI7QUFDTDtBQUVsQixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQTtJQUVoQyxxQkFDRTs7MEJBQ0UsOERBQUNELG1EQUFVQTs7Ozs7MEJBQ1gsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1IsbURBQVVBO3dCQUNUUyxPQUFPO3dCQUNQQyxnQkFBZ0JULHlFQUFnQkEsQ0FBQ1UsbUJBQW1COzs7Ozs7a0NBRXRELDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNaLG1EQUFVQTt3QkFDVFMsT0FBTzt3QkFDUEMsZ0JBQWdCVCx5RUFBZ0JBLENBQUNZLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUFRNUQ7R0F0QndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CdWRnZXRWaWV3L0J1ZGdldC50c3g/Yjc4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IGRlbGV0ZUFsbENhdGVnb3JpZXMgfSBmcm9tIFwiQC9saWIvY2F0ZWdvcmllcy9kZWxldGVBbGxDYXRlZ29yaWVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgQnVkZ2V0VmlldyBmcm9tIFwiLi9CdWRnZXRWaWV3XCI7XG5pbXBvcnQgeyBjcmVhdGVDYXRlZ29yeSB9IGZyb20gXCJAL2xpYi9jYXRlZ29yaWVzL2NyZWF0ZUNhdGVnb3J5XCI7XG5pbXBvcnQgeyBDT0xMRUNUSU9OX05BTUVTIH0gZnJvbSBcIkAvY29uc3RhbnRzL2NvbGxlY3Rpb25zTmFtZXNcIjtcbmltcG9ydCBTb3J0QnVkZ2V0IGZyb20gXCIuL1NvcnRCdWRnZXRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1ZGdldCgpIHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8RGF0ZT4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U29ydEJ1ZGdldCAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01XCI+XG4gICAgICAgIDxCdWRnZXRWaWV3XG4gICAgICAgICAgdGl0bGU9e1wiRXhwZW5zZSBCdWRnZXRcIn1cbiAgICAgICAgICBjb2xsZWN0aW9uTmFtZT17Q09MTEVDVElPTl9OQU1FUy5FWFBFTlNFU19DQVRFR09SSUVTfVxuICAgICAgICAvPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPEJ1ZGdldFZpZXdcbiAgICAgICAgICB0aXRsZT17XCJJbmNvbWUgQnVkZ2V0XCJ9XG4gICAgICAgICAgY29sbGVjdGlvbk5hbWU9e0NPTExFQ1RJT05fTkFNRVMuSU5DT01FX0NBVEVHT1JJRVN9XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIGdhcC0yXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtkZWxldGVBbGxDYXRlZ29yaWVzfT5EZWxldGUgYWxsIGNhdGVnb3JpZXM8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnVkZ2V0VmlldyIsIkNPTExFQ1RJT05fTkFNRVMiLCJTb3J0QnVkZ2V0IiwidXNlU3RhdGUiLCJCdWRnZXQiLCJkYXRlIiwic2V0RGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiY29sbGVjdGlvbk5hbWUiLCJFWFBFTlNFU19DQVRFR09SSUVTIiwiaHIiLCJJTkNPTUVfQ0FURUdPUklFUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BudgetView/Budget.tsx\n"));

/***/ })

});