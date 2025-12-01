"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@otplib+preset-default@12.0.1";
exports.ids = ["vendor-chunks/@otplib+preset-default@12.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@otplib+preset-default@12.0.1/node_modules/@otplib/preset-default/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@otplib+preset-default@12.0.1/node_modules/@otplib/preset-default/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @otplib/preset-default\n *\n * @author Gerald Yeo <contact@fusedthought.com>\n * @version: 12.0.1\n * @license: MIT\n **/\n\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar pluginCrypto = __webpack_require__(/*! @otplib/plugin-crypto */ \"(ssr)/./node_modules/.pnpm/@otplib+plugin-crypto@12.0.1/node_modules/@otplib/plugin-crypto/index.js\");\nvar pluginThirtyTwo = __webpack_require__(/*! @otplib/plugin-thirty-two */ \"(ssr)/./node_modules/.pnpm/@otplib+plugin-thirty-two@12.0.1/node_modules/@otplib/plugin-thirty-two/index.js\");\nvar core = __webpack_require__(/*! @otplib/core */ \"(ssr)/./node_modules/.pnpm/@otplib+core@12.0.1/node_modules/@otplib/core/index.js\");\n\nconst hotp = new core.HOTP({\n  createDigest: pluginCrypto.createDigest\n});\nconst totp = new core.TOTP({\n  createDigest: pluginCrypto.createDigest\n});\nconst authenticator = new core.Authenticator({\n  createDigest: pluginCrypto.createDigest,\n  createRandomBytes: pluginCrypto.createRandomBytes,\n  keyDecoder: pluginThirtyTwo.keyDecoder,\n  keyEncoder: pluginThirtyTwo.keyEncoder\n});\n\nexports.authenticator = authenticator;\nexports.hotp = hotp;\nexports.totp = totp;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG90cGxpYitwcmVzZXQtZGVmYXVsdEAxMi4wLjEvbm9kZV9tb2R1bGVzL0BvdHBsaWIvcHJlc2V0LWRlZmF1bHQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELG1CQUFtQixtQkFBTyxDQUFDLGtJQUF1QjtBQUNsRCxzQkFBc0IsbUJBQU8sQ0FBQyw4SUFBMkI7QUFDekQsV0FBVyxtQkFBTyxDQUFDLHVHQUFjOztBQUVqQztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWixZQUFZIiwic291cmNlcyI6WyJEOlxcUHJvamVjdFxcbmV4dDJmYVxcbm9kZV9tb2R1bGVzXFwucG5wbVxcQG90cGxpYitwcmVzZXQtZGVmYXVsdEAxMi4wLjFcXG5vZGVfbW9kdWxlc1xcQG90cGxpYlxccHJlc2V0LWRlZmF1bHRcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG90cGxpYi9wcmVzZXQtZGVmYXVsdFxuICpcbiAqIEBhdXRob3IgR2VyYWxkIFllbyA8Y29udGFjdEBmdXNlZHRob3VnaHQuY29tPlxuICogQHZlcnNpb246IDEyLjAuMVxuICogQGxpY2Vuc2U6IE1JVFxuICoqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcGx1Z2luQ3J5cHRvID0gcmVxdWlyZSgnQG90cGxpYi9wbHVnaW4tY3J5cHRvJyk7XG52YXIgcGx1Z2luVGhpcnR5VHdvID0gcmVxdWlyZSgnQG90cGxpYi9wbHVnaW4tdGhpcnR5LXR3bycpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAb3RwbGliL2NvcmUnKTtcblxuY29uc3QgaG90cCA9IG5ldyBjb3JlLkhPVFAoe1xuICBjcmVhdGVEaWdlc3Q6IHBsdWdpbkNyeXB0by5jcmVhdGVEaWdlc3Rcbn0pO1xuY29uc3QgdG90cCA9IG5ldyBjb3JlLlRPVFAoe1xuICBjcmVhdGVEaWdlc3Q6IHBsdWdpbkNyeXB0by5jcmVhdGVEaWdlc3Rcbn0pO1xuY29uc3QgYXV0aGVudGljYXRvciA9IG5ldyBjb3JlLkF1dGhlbnRpY2F0b3Ioe1xuICBjcmVhdGVEaWdlc3Q6IHBsdWdpbkNyeXB0by5jcmVhdGVEaWdlc3QsXG4gIGNyZWF0ZVJhbmRvbUJ5dGVzOiBwbHVnaW5DcnlwdG8uY3JlYXRlUmFuZG9tQnl0ZXMsXG4gIGtleURlY29kZXI6IHBsdWdpblRoaXJ0eVR3by5rZXlEZWNvZGVyLFxuICBrZXlFbmNvZGVyOiBwbHVnaW5UaGlydHlUd28ua2V5RW5jb2RlclxufSk7XG5cbmV4cG9ydHMuYXV0aGVudGljYXRvciA9IGF1dGhlbnRpY2F0b3I7XG5leHBvcnRzLmhvdHAgPSBob3RwO1xuZXhwb3J0cy50b3RwID0gdG90cDtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@otplib+preset-default@12.0.1/node_modules/@otplib/preset-default/index.js\n");

/***/ })

};
;