"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/shallow-equal";
exports.ids = ["vendor-chunks/shallow-equal"];
exports.modules = {

/***/ "(ssr)/./node_modules/shallow-equal/dist/index.modern.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.modern.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual),\n/* harmony export */   shallowEqualArrays: () => (/* binding */ shallowEqualArrays),\n/* harmony export */   shallowEqualObjects: () => (/* binding */ shallowEqualObjects)\n/* harmony export */ });\nfunction shallowEqualArrays(arrA, arrB) {\n  if (arrA === arrB) {\n    return true;\n  }\n  if (!arrA || !arrB) {\n    return false;\n  }\n  const len = arrA.length;\n  if (arrB.length !== len) {\n    return false;\n  }\n  for (let i = 0; i < len; i++) {\n    if (arrA[i] !== arrB[i]) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction shallowEqualObjects(objA, objB) {\n  if (objA === objB) {\n    return true;\n  }\n  if (!objA || !objB) {\n    return false;\n  }\n  const aKeys = Object.keys(objA);\n  const bKeys = Object.keys(objB);\n  const len = aKeys.length;\n  if (bKeys.length !== len) {\n    return false;\n  }\n  for (let i = 0; i < len; i++) {\n    const key = aKeys[i];\n    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction shallowEqual(a, b) {\n  const aIsArr = Array.isArray(a);\n  const bIsArr = Array.isArray(b);\n  if (aIsArr !== bIsArr) {\n    return false;\n  }\n  if (aIsArr && bIsArr) {\n    return shallowEqualArrays(a, b);\n  }\n  return shallowEqualObjects(a, b);\n}\n\n\n//# sourceMappingURL=index.modern.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2hhbGxvdy1lcXVhbC9kaXN0L2luZGV4Lm1vZGVybi5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlFO0FBQ2pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHBnYy1vcGVyYXRvci13d3cvLi9ub2RlX21vZHVsZXMvc2hhbGxvdy1lcXVhbC9kaXN0L2luZGV4Lm1vZGVybi5tanM/NzhjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzaGFsbG93RXF1YWxBcnJheXMoYXJyQSwgYXJyQikge1xuICBpZiAoYXJyQSA9PT0gYXJyQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICghYXJyQSB8fCAhYXJyQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsZW4gPSBhcnJBLmxlbmd0aDtcbiAgaWYgKGFyckIubGVuZ3RoICE9PSBsZW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJBW2ldICE9PSBhcnJCW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWxPYmplY3RzKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoIW9iakEgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgY29uc3QgYktleXMgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgY29uc3QgbGVuID0gYUtleXMubGVuZ3RoO1xuICBpZiAoYktleXMubGVuZ3RoICE9PSBsZW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGFLZXlzW2ldO1xuICAgIGlmIChvYmpBW2tleV0gIT09IG9iakJba2V5XSB8fCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChhLCBiKSB7XG4gIGNvbnN0IGFJc0FyciA9IEFycmF5LmlzQXJyYXkoYSk7XG4gIGNvbnN0IGJJc0FyciA9IEFycmF5LmlzQXJyYXkoYik7XG4gIGlmIChhSXNBcnIgIT09IGJJc0Fycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoYUlzQXJyICYmIGJJc0Fycikge1xuICAgIHJldHVybiBzaGFsbG93RXF1YWxBcnJheXMoYSwgYik7XG4gIH1cbiAgcmV0dXJuIHNoYWxsb3dFcXVhbE9iamVjdHMoYSwgYik7XG59XG5cbmV4cG9ydCB7IHNoYWxsb3dFcXVhbCwgc2hhbGxvd0VxdWFsQXJyYXlzLCBzaGFsbG93RXF1YWxPYmplY3RzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tb2Rlcm4ubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/shallow-equal/dist/index.modern.mjs\n");

/***/ })

};
;