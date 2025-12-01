"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@otplib+plugin-crypto@12.0.1";
exports.ids = ["vendor-chunks/@otplib+plugin-crypto@12.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@otplib+plugin-crypto@12.0.1/node_modules/@otplib/plugin-crypto/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@otplib+plugin-crypto@12.0.1/node_modules/@otplib/plugin-crypto/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @otplib/plugin-crypto\n *\n * @author Gerald Yeo <contact@fusedthought.com>\n * @version: 12.0.1\n * @license: MIT\n **/\n\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nfunction _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }\n\nvar crypto = _interopDefault(__webpack_require__(/*! crypto */ \"crypto\"));\n\nconst createDigest = (algorithm, hmacKey, counter) => {\n  const hmac = crypto.createHmac(algorithm, Buffer.from(hmacKey, 'hex'));\n  const digest = hmac.update(Buffer.from(counter, 'hex')).digest();\n  return digest.toString('hex');\n};\nconst createRandomBytes = (size, encoding) => {\n  return crypto.randomBytes(size).toString(encoding);\n};\n\nexports.createDigest = createDigest;\nexports.createRandomBytes = createRandomBytes;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG90cGxpYitwbHVnaW4tY3J5cHRvQDEyLjAuMS9ub2RlX21vZHVsZXMvQG90cGxpYi9wbHVnaW4tY3J5cHRvL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxnQ0FBZ0M7O0FBRWhDLDZCQUE2QixtQkFBTyxDQUFDLHNCQUFROztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQix5QkFBeUIiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0MmZhXFxub2RlX21vZHVsZXNcXC5wbnBtXFxAb3RwbGliK3BsdWdpbi1jcnlwdG9AMTIuMC4xXFxub2RlX21vZHVsZXNcXEBvdHBsaWJcXHBsdWdpbi1jcnlwdG9cXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG90cGxpYi9wbHVnaW4tY3J5cHRvXG4gKlxuICogQGF1dGhvciBHZXJhbGQgWWVvIDxjb250YWN0QGZ1c2VkdGhvdWdodC5jb20+XG4gKiBAdmVyc2lvbjogMTIuMC4xXG4gKiBAbGljZW5zZTogTUlUXG4gKiovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgY3J5cHRvID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ2NyeXB0bycpKTtcblxuY29uc3QgY3JlYXRlRGlnZXN0ID0gKGFsZ29yaXRobSwgaG1hY0tleSwgY291bnRlcikgPT4ge1xuICBjb25zdCBobWFjID0gY3J5cHRvLmNyZWF0ZUhtYWMoYWxnb3JpdGhtLCBCdWZmZXIuZnJvbShobWFjS2V5LCAnaGV4JykpO1xuICBjb25zdCBkaWdlc3QgPSBobWFjLnVwZGF0ZShCdWZmZXIuZnJvbShjb3VudGVyLCAnaGV4JykpLmRpZ2VzdCgpO1xuICByZXR1cm4gZGlnZXN0LnRvU3RyaW5nKCdoZXgnKTtcbn07XG5jb25zdCBjcmVhdGVSYW5kb21CeXRlcyA9IChzaXplLCBlbmNvZGluZykgPT4ge1xuICByZXR1cm4gY3J5cHRvLnJhbmRvbUJ5dGVzKHNpemUpLnRvU3RyaW5nKGVuY29kaW5nKTtcbn07XG5cbmV4cG9ydHMuY3JlYXRlRGlnZXN0ID0gY3JlYXRlRGlnZXN0O1xuZXhwb3J0cy5jcmVhdGVSYW5kb21CeXRlcyA9IGNyZWF0ZVJhbmRvbUJ5dGVzO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@otplib+plugin-crypto@12.0.1/node_modules/@otplib/plugin-crypto/index.js\n");

/***/ })

};
;