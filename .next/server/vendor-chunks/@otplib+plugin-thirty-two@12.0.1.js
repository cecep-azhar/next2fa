"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@otplib+plugin-thirty-two@12.0.1";
exports.ids = ["vendor-chunks/@otplib+plugin-thirty-two@12.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@otplib+plugin-thirty-two@12.0.1/node_modules/@otplib/plugin-thirty-two/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@otplib+plugin-thirty-two@12.0.1/node_modules/@otplib/plugin-thirty-two/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @otplib/plugin-thirty-two\n *\n * @author Gerald Yeo <contact@fusedthought.com>\n * @version: 12.0.1\n * @license: MIT\n **/\n\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nfunction _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }\n\nvar thirtyTwo = _interopDefault(__webpack_require__(/*! thirty-two */ \"(ssr)/./node_modules/.pnpm/thirty-two@1.0.2/node_modules/thirty-two/lib/thirty-two/index.js\"));\n\nconst keyDecoder = (encodedSecret, encoding) => {\n  return thirtyTwo.decode(encodedSecret).toString(encoding);\n};\nconst keyEncoder = (secret, encoding) => {\n  return thirtyTwo.encode(Buffer.from(secret, encoding).toString('ascii')).toString().replace(/=/g, '');\n};\n\nexports.keyDecoder = keyDecoder;\nexports.keyEncoder = keyEncoder;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG90cGxpYitwbHVnaW4tdGhpcnR5LXR3b0AxMi4wLjEvbm9kZV9tb2R1bGVzL0BvdHBsaWIvcGx1Z2luLXRoaXJ0eS10d28vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELGdDQUFnQzs7QUFFaEMsZ0NBQWdDLG1CQUFPLENBQUMsK0dBQVk7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEIsa0JBQWtCIiwic291cmNlcyI6WyJEOlxcUHJvamVjdFxcbmV4dDJmYVxcbm9kZV9tb2R1bGVzXFwucG5wbVxcQG90cGxpYitwbHVnaW4tdGhpcnR5LXR3b0AxMi4wLjFcXG5vZGVfbW9kdWxlc1xcQG90cGxpYlxccGx1Z2luLXRoaXJ0eS10d29cXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG90cGxpYi9wbHVnaW4tdGhpcnR5LXR3b1xuICpcbiAqIEBhdXRob3IgR2VyYWxkIFllbyA8Y29udGFjdEBmdXNlZHRob3VnaHQuY29tPlxuICogQHZlcnNpb246IDEyLjAuMVxuICogQGxpY2Vuc2U6IE1JVFxuICoqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIHRoaXJ0eVR3byA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCd0aGlydHktdHdvJykpO1xuXG5jb25zdCBrZXlEZWNvZGVyID0gKGVuY29kZWRTZWNyZXQsIGVuY29kaW5nKSA9PiB7XG4gIHJldHVybiB0aGlydHlUd28uZGVjb2RlKGVuY29kZWRTZWNyZXQpLnRvU3RyaW5nKGVuY29kaW5nKTtcbn07XG5jb25zdCBrZXlFbmNvZGVyID0gKHNlY3JldCwgZW5jb2RpbmcpID0+IHtcbiAgcmV0dXJuIHRoaXJ0eVR3by5lbmNvZGUoQnVmZmVyLmZyb20oc2VjcmV0LCBlbmNvZGluZykudG9TdHJpbmcoJ2FzY2lpJykpLnRvU3RyaW5nKCkucmVwbGFjZSgvPS9nLCAnJyk7XG59O1xuXG5leHBvcnRzLmtleURlY29kZXIgPSBrZXlEZWNvZGVyO1xuZXhwb3J0cy5rZXlFbmNvZGVyID0ga2V5RW5jb2RlcjtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@otplib+plugin-thirty-two@12.0.1/node_modules/@otplib/plugin-thirty-two/index.js\n");

/***/ })

};
;