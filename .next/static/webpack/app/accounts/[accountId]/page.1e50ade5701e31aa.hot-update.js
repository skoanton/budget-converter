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

/***/ "(app-pages-browser)/./src/lib/transactions/getTransactionsByAccount.ts":
/*!**********************************************************!*\
  !*** ./src/lib/transactions/getTransactionsByAccount.ts ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTransactionsByAccount: function() { return /* binding */ getTransactionsByAccount; }\n/* harmony export */ });\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase */ \"(app-pages-browser)/./src/lib/firebase.ts\");\n/* harmony import */ var _constants_collectionsNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/collectionsNames */ \"(app-pages-browser)/./src/constants/collectionsNames.ts\");\n/* harmony import */ var _getAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getAccountById */ \"(app-pages-browser)/./src/lib/getAccountById.ts\");\n\n\n\n\nconst getTransactionsByAccount = async (accountId)=>{\n    console.log(\"Running get transactionbyid\");\n    try {\n        const accountRef = await (0,_getAccountById__WEBPACK_IMPORTED_MODULE_3__.getAccountById)(accountId);\n        if (!accountRef) {\n            console.error(\"No account found\");\n            return null;\n        }\n        const transactionsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, _constants_collectionsNames__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_NAMES.TRANSACTIONS);\n        const transactionsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(transactionsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)(\"account\", \"==\", accountRef));\n        const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(transactionsQuery);\n        console.log(querySnapshot);\n        const transactions = [];\n        querySnapshot.forEach((doc)=>{\n            const transcationData = doc.data();\n            transactions.push({\n                id: doc.id,\n                account: transcationData.account,\n                date: transcationData.date,\n                type: transcationData.type,\n                description: transcationData.description,\n                amount: transcationData.amount,\n                category: transcationData.category\n            });\n        });\n        console.log(\"transactions\", transactions);\n        return transactions;\n    } catch (error) {\n        console.error(\"Could not get transaction of account\", error);\n        return null;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvdHJhbnNhY3Rpb25zL2dldFRyYW5zYWN0aW9uc0J5QWNjb3VudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRTtBQUN0QztBQUMrQjtBQUNiO0FBRzNDLE1BQU1PLDJCQUEyQixPQUFPQztJQUMzQ0MsUUFBUUMsR0FBRyxDQUFDO0lBQ1osSUFBSTtRQUNBLE1BQU1DLGFBQWEsTUFBTUwsK0RBQWNBLENBQUNFO1FBQ3hDLElBQUcsQ0FBQ0csWUFBVztZQUNYRixRQUFRRyxLQUFLLENBQUM7WUFDZCxPQUFPO1FBQ1g7UUFDQSxNQUFNQyxrQkFBa0JiLDhEQUFVQSxDQUFDSSx5Q0FBRUEsRUFBQ0MseUVBQWdCQSxDQUFDUyxZQUFZO1FBRW5FLE1BQU1DLG9CQUFvQmIseURBQUtBLENBQUNXLGlCQUFpQlYseURBQUtBLENBQUUsV0FBVyxNQUFNUTtRQUN6RSxNQUFNSyxnQkFBZ0IsTUFBTWYsMkRBQU9BLENBQUNjO1FBQ3BDTixRQUFRQyxHQUFHLENBQUNNO1FBQ1osTUFBTUMsZUFBOEIsRUFBRTtRQUN0Q0QsY0FBY0UsT0FBTyxDQUFDLENBQUNDO1lBQ25CLE1BQU1DLGtCQUFrQkQsSUFBSUUsSUFBSTtZQUNoQ0osYUFBYUssSUFBSSxDQUFFO2dCQUNmQyxJQUFJSixJQUFJSSxFQUFFO2dCQUNWQyxTQUFTSixnQkFBZ0JJLE9BQU87Z0JBQ2hDQyxNQUFNTCxnQkFBZ0JLLElBQUk7Z0JBQzFCQyxNQUFNTixnQkFBZ0JNLElBQUk7Z0JBQzFCQyxhQUFhUCxnQkFBZ0JPLFdBQVc7Z0JBQ3hDQyxRQUFRUixnQkFBZ0JRLE1BQU07Z0JBQzlCQyxVQUFVVCxnQkFBZ0JTLFFBQVE7WUFFdEM7UUFDSjtRQUNBcEIsUUFBUUMsR0FBRyxDQUFDLGdCQUFlTztRQUMzQixPQUFPQTtJQUVYLEVBQUUsT0FBT0wsT0FBTztRQUNaSCxRQUFRRyxLQUFLLENBQUMsd0NBQXVDQTtRQUNyRCxPQUFPO0lBQ1g7QUFFSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvdHJhbnNhY3Rpb25zL2dldFRyYW5zYWN0aW9uc0J5QWNjb3VudC50cz9hM2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIHF1ZXJ5LCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIlxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIlxuaW1wb3J0IHsgQ09MTEVDVElPTl9OQU1FUyB9IGZyb20gXCJAL2NvbnN0YW50cy9jb2xsZWN0aW9uc05hbWVzXCJcbmltcG9ydCB7IGdldEFjY291bnRCeUlkIH0gZnJvbSBcIi4uL2dldEFjY291bnRCeUlkXCJcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSBcIkAvdHlwZXMvdHJhbnNhY3Rpb25zVHlwZVwiXG5cbmV4cG9ydCBjb25zdCBnZXRUcmFuc2FjdGlvbnNCeUFjY291bnQgPSBhc3luYyAoYWNjb3VudElkOnN0cmluZyk6IFByb21pc2U8VHJhbnNhY3Rpb25bXSB8IG51bGw+ID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgZ2V0IHRyYW5zYWN0aW9uYnlpZFwiKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhY2NvdW50UmVmID0gYXdhaXQgZ2V0QWNjb3VudEJ5SWQoYWNjb3VudElkKTtcbiAgICAgICAgaWYoIWFjY291bnRSZWYpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGFjY291bnQgZm91bmRcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnNSZWYgPSBjb2xsZWN0aW9uKGRiLENPTExFQ1RJT05fTkFNRVMuVFJBTlNBQ1RJT05TKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uc1F1ZXJ5ID0gcXVlcnkodHJhbnNhY3Rpb25zUmVmLCB3aGVyZSggXCJhY2NvdW50XCIsIFwiPT1cIiwgYWNjb3VudFJlZiApKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3ModHJhbnNhY3Rpb25zUXVlcnkpO1xuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeVNuYXBzaG90KTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdID0gW11cbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNjYXRpb25EYXRhID0gZG9jLmRhdGEoKTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9ucy5wdXNoKCB7XG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgICAgICBhY2NvdW50OiB0cmFuc2NhdGlvbkRhdGEuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBkYXRlOiB0cmFuc2NhdGlvbkRhdGEuZGF0ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiB0cmFuc2NhdGlvbkRhdGEudHlwZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdHJhbnNjYXRpb25EYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGFtb3VudDogdHJhbnNjYXRpb25EYXRhLmFtb3VudCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdHJhbnNjYXRpb25EYXRhLmNhdGVnb3J5LFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zYWN0aW9uc1wiLHRyYW5zYWN0aW9ucyk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbnMgXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGdldCB0cmFuc2FjdGlvbiBvZiBhY2NvdW50XCIsZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiY29sbGVjdGlvbiIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiZGIiLCJDT0xMRUNUSU9OX05BTUVTIiwiZ2V0QWNjb3VudEJ5SWQiLCJnZXRUcmFuc2FjdGlvbnNCeUFjY291bnQiLCJhY2NvdW50SWQiLCJjb25zb2xlIiwibG9nIiwiYWNjb3VudFJlZiIsImVycm9yIiwidHJhbnNhY3Rpb25zUmVmIiwiVFJBTlNBQ1RJT05TIiwidHJhbnNhY3Rpb25zUXVlcnkiLCJxdWVyeVNuYXBzaG90IiwidHJhbnNhY3Rpb25zIiwiZm9yRWFjaCIsImRvYyIsInRyYW5zY2F0aW9uRGF0YSIsImRhdGEiLCJwdXNoIiwiaWQiLCJhY2NvdW50IiwiZGF0ZSIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImFtb3VudCIsImNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/transactions/getTransactionsByAccount.ts\n"));

/***/ })

});