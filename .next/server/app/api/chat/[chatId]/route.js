"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/[chatId]/route";
exports.ids = ["app/api/chat/[chatId]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "@prisma/client/scripts/default-index.js":
/*!**********************************************************!*\
  !*** external "@prisma/client/scripts/default-index.js" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@prisma/client/scripts/default-index.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2F%5BchatId%5D%2Froute&page=%2Fapi%2Fchat%2F%5BchatId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2F%5BchatId%5D%2Froute.ts&appDir=C%3A%5CUsers%5Crages%5COneDrive%5CDesktop%5CNew%20folder%5Cai%5Cai-companion%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crages%5COneDrive%5CDesktop%5CNew%20folder%5Cai%5Cai-companion&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2F%5BchatId%5D%2Froute&page=%2Fapi%2Fchat%2F%5BchatId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2F%5BchatId%5D%2Froute.ts&appDir=C%3A%5CUsers%5Crages%5COneDrive%5CDesktop%5CNew%20folder%5Cai%5Cai-companion%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crages%5COneDrive%5CDesktop%5CNew%20folder%5Cai%5Cai-companion&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_rages_OneDrive_Desktop_New_folder_ai_ai_companion_app_api_chat_chatId_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/[chatId]/route.ts */ \"(rsc)/./app/api/chat/[chatId]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/[chatId]/route\",\n        pathname: \"/api/chat/[chatId]\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/[chatId]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\rages\\\\OneDrive\\\\Desktop\\\\New folder\\\\ai\\\\ai-companion\\\\app\\\\api\\\\chat\\\\[chatId]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_rages_OneDrive_Desktop_New_folder_ai_ai_companion_app_api_chat_chatId_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/chat/[chatId]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGJTVCY2hhdElkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGJTVCY2hhdElkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRiU1QmNoYXRJZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNyYWdlcyU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q05ldyUyMGZvbGRlciU1Q2FpJTVDYWktY29tcGFuaW9uJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNyYWdlcyU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q05ldyUyMGZvbGRlciU1Q2FpJTVDYWktY29tcGFuaW9uJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxRDtBQUNsSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWNvbXBhbmlvbi8/NGI2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYWdlc1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXE5ldyBmb2xkZXJcXFxcYWlcXFxcYWktY29tcGFuaW9uXFxcXGFwcFxcXFxhcGlcXFxcY2hhdFxcXFxbY2hhdElkXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2hhdC9bY2hhdElkXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NoYXQvW2NoYXRJZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NoYXQvW2NoYXRJZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxyYWdlc1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXE5ldyBmb2xkZXJcXFxcYWlcXFxcYWktY29tcGFuaW9uXFxcXGFwcFxcXFxhcGlcXFxcY2hhdFxcXFxbY2hhdElkXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY2hhdC9bY2hhdElkXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2F%5BchatId%5D%2Froute&page=%2Fapi%2Fchat%2F%5BchatId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2F%5BchatId%5D%2Froute.ts&appDir=C%3A%5CUsers%5Crages%5COneDrive%5CDesktop%5CNew%20folder%5Cai%5Cai-companion%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crages%5COneDrive%5CDesktop%5CNew%20folder%5Cai%5Cai-companion&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/chat/[chatId]/route.ts":
/*!****************************************!*\
  !*** ./app/api/chat/[chatId]/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ai */ \"(rsc)/./node_modules/ai/dist/index.mjs\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clerk/nextjs */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n/* harmony import */ var langchain_llms_replicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/llms/replicate */ \"(rsc)/./node_modules/langchain/llms/replicate.js\");\n/* harmony import */ var langchain_callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! langchain/callbacks */ \"(rsc)/./node_modules/langchain/callbacks.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_memory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/memory */ \"(rsc)/./lib/memory.ts\");\n/* harmony import */ var _lib_rate_limit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/rate-limit */ \"(rsc)/./lib/rate-limit.ts\");\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/prismadb */ \"(rsc)/./lib/prismadb.ts\");\n\n\n\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default().config({\n    path: `.env`\n});\nasync function POST(request, { params }) {\n    try {\n        const { prompt } = await request.json();\n        const user = await (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.currentUser)();\n        if (!user || !user.firstName || !user.id) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse(\"Unauthorized\", {\n                status: 401\n            });\n        }\n        const identifier = request.url + \"-\" + user.id;\n        const { success } = await (0,_lib_rate_limit__WEBPACK_IMPORTED_MODULE_5__.rateLimit)(identifier);\n        if (!success) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse(\"Rate limit exceeded\", {\n                status: 429\n            });\n        }\n        const companion = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].companion.update({\n            where: {\n                id: params.chatId\n            },\n            data: {\n                messages: {\n                    create: {\n                        content: prompt,\n                        role: \"user\",\n                        userId: user.id\n                    }\n                }\n            }\n        });\n        if (!companion) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse(\"Companion not found\", {\n                status: 404\n            });\n        }\n        const name = companion.id;\n        const companion_file_name = name + \".txt\";\n        const companionKey = {\n            companionName: name,\n            userId: user.id,\n            modelName: \"llama2-13b\"\n        };\n        const memoryManager = await _lib_memory__WEBPACK_IMPORTED_MODULE_4__.MemoryManager.getInstance();\n        const records = await memoryManager.readLatestHistory(companionKey);\n        if (records.length === 0) {\n            await memoryManager.seedChatHistory(companion.seed, \"\\n\\n\", companionKey);\n        }\n        await memoryManager.writeToHistory(\"User: \" + prompt + \"\\n\", companionKey);\n        // Query Pinecone\n        const recentChatHistory = await memoryManager.readLatestHistory(companionKey);\n        // Right now the preamble is included in the similarity search, but that\n        // shouldn't be an issue\n        const similarDocs = await memoryManager.vectorSearch(recentChatHistory, companion_file_name);\n        let relevantHistory = \"\";\n        if (!!similarDocs && similarDocs.length !== 0) {\n            relevantHistory = similarDocs.map((doc)=>doc.pageContent).join(\"\\n\");\n        }\n        const { handlers } = (0,ai__WEBPACK_IMPORTED_MODULE_8__.LangChainStream)();\n        // Call Replicate for inference\n        const model = new langchain_llms_replicate__WEBPACK_IMPORTED_MODULE_1__.Replicate({\n            model: \"a16z-infra/llama-2-13b-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5\",\n            input: {\n                max_length: 2048\n            },\n            apiKey: process.env.REPLICATE_API_TOKEN,\n            callbackManager: langchain_callbacks__WEBPACK_IMPORTED_MODULE_2__.CallbackManager.fromHandlers(handlers)\n        });\n        // Turn verbose on for debugging\n        model.verbose = true;\n        const resp = String(await model.call(`\r\n        ONLY generate plain sentences without prefix of who is speaking. DO NOT use ${companion.name}: prefix. \r\n\r\n        ${companion.instructions}\r\n\r\n        Below are relevant details about ${companion.name}'s past and the conversation you are in.\r\n        ${relevantHistory}\r\n\r\n\r\n        ${recentChatHistory}\\n${companion.name}:`).catch(console.error));\n        const cleaned = resp.replaceAll(\",\", \"\");\n        const chunks = cleaned.split(\"\\n\");\n        const response = chunks[0];\n        await memoryManager.writeToHistory(\"\" + response.trim(), companionKey);\n        var Readable = (__webpack_require__(/*! stream */ \"stream\").Readable);\n        let s = new Readable();\n        s.push(response);\n        s.push(null);\n        if (response !== undefined && response.length > 1) {\n            memoryManager.writeToHistory(\"\" + response.trim(), companionKey);\n            await _lib_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].companion.update({\n                where: {\n                    id: params.chatId\n                },\n                data: {\n                    messages: {\n                        create: {\n                            content: response.trim(),\n                            role: \"system\",\n                            userId: user.id\n                        }\n                    }\n                }\n            });\n        }\n        return new ai__WEBPACK_IMPORTED_MODULE_8__.StreamingTextResponse(s);\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse(\"Internal Error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO1FBQUk7SUFDMUQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWNvbXBhbmlvbi8uL2FwcC9hcGkvY2hhdC9bY2hhdElkXS9yb3V0ZS50cz9mMmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5pbXBvcnQgeyBTdHJlYW1pbmdUZXh0UmVzcG9uc2UsIExhbmdDaGFpblN0cmVhbSB9IGZyb20gXCJhaVwiO1xyXG5pbXBvcnQgeyBhdXRoLCBjdXJyZW50VXNlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XHJcbmltcG9ydCB7IFJlcGxpY2F0ZSB9IGZyb20gXCJsYW5nY2hhaW4vbGxtcy9yZXBsaWNhdGVcIjtcclxuaW1wb3J0IHsgQ2FsbGJhY2tNYW5hZ2VyIH0gZnJvbSBcImxhbmdjaGFpbi9jYWxsYmFja3NcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBNZW1vcnlNYW5hZ2VyIH0gZnJvbSBcIkAvbGliL21lbW9yeVwiO1xyXG5pbXBvcnQgeyByYXRlTGltaXQgfSBmcm9tIFwiQC9saWIvcmF0ZS1saW1pdFwiO1xyXG5pbXBvcnQgcHJpc21hZGIgZnJvbSBcIkAvbGliL3ByaXNtYWRiXCI7XHJcblxyXG5kb3RlbnYuY29uZmlnKHsgcGF0aDogYC5lbnZgIH0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoXHJcbiAgcmVxdWVzdDogUmVxdWVzdCxcclxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBjaGF0SWQ6IHN0cmluZyB9IH1cclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgcHJvbXB0IH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjdXJyZW50VXNlcigpO1xyXG5cclxuICAgIGlmICghdXNlciB8fCAhdXNlci5maXJzdE5hbWUgfHwgIXVzZXIuaWQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcmVxdWVzdC51cmwgKyBcIi1cIiArIHVzZXIuaWQ7XHJcbiAgICBjb25zdCB7IHN1Y2Nlc3MgfSA9IGF3YWl0IHJhdGVMaW1pdChpZGVudGlmaWVyKTtcclxuXHJcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJSYXRlIGxpbWl0IGV4Y2VlZGVkXCIsIHsgc3RhdHVzOiA0MjkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tcGFuaW9uID0gYXdhaXQgcHJpc21hZGIuY29tcGFuaW9uLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IHBhcmFtcy5jaGF0SWRcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgICAgY29udGVudDogcHJvbXB0LFxyXG4gICAgICAgICAgICByb2xlOiBcInVzZXJcIixcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWNvbXBhbmlvbikge1xyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkNvbXBhbmlvbiBub3QgZm91bmRcIiwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYW1lID0gY29tcGFuaW9uLmlkO1xyXG4gICAgY29uc3QgY29tcGFuaW9uX2ZpbGVfbmFtZSA9IG5hbWUgKyBcIi50eHRcIjtcclxuXHJcbiAgICBjb25zdCBjb21wYW5pb25LZXkgPSB7XHJcbiAgICAgIGNvbXBhbmlvbk5hbWU6IG5hbWUhLFxyXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgIG1vZGVsTmFtZTogXCJsbGFtYTItMTNiXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbWVtb3J5TWFuYWdlciA9IGF3YWl0IE1lbW9yeU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgbWVtb3J5TWFuYWdlci5yZWFkTGF0ZXN0SGlzdG9yeShjb21wYW5pb25LZXkpO1xyXG4gICAgaWYgKHJlY29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGF3YWl0IG1lbW9yeU1hbmFnZXIuc2VlZENoYXRIaXN0b3J5KGNvbXBhbmlvbi5zZWVkLCBcIlxcblxcblwiLCBjb21wYW5pb25LZXkpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgbWVtb3J5TWFuYWdlci53cml0ZVRvSGlzdG9yeShcIlVzZXI6IFwiICsgcHJvbXB0ICsgXCJcXG5cIiwgY29tcGFuaW9uS2V5KTtcclxuXHJcbiAgICAvLyBRdWVyeSBQaW5lY29uZVxyXG5cclxuICAgIGNvbnN0IHJlY2VudENoYXRIaXN0b3J5ID0gYXdhaXQgbWVtb3J5TWFuYWdlci5yZWFkTGF0ZXN0SGlzdG9yeShjb21wYW5pb25LZXkpO1xyXG5cclxuICAgIC8vIFJpZ2h0IG5vdyB0aGUgcHJlYW1ibGUgaXMgaW5jbHVkZWQgaW4gdGhlIHNpbWlsYXJpdHkgc2VhcmNoLCBidXQgdGhhdFxyXG4gICAgLy8gc2hvdWxkbid0IGJlIGFuIGlzc3VlXHJcblxyXG4gICAgY29uc3Qgc2ltaWxhckRvY3MgPSBhd2FpdCBtZW1vcnlNYW5hZ2VyLnZlY3RvclNlYXJjaChcclxuICAgICAgcmVjZW50Q2hhdEhpc3RvcnksXHJcbiAgICAgIGNvbXBhbmlvbl9maWxlX25hbWVcclxuICAgICk7XHJcblxyXG4gICAgbGV0IHJlbGV2YW50SGlzdG9yeSA9IFwiXCI7XHJcbiAgICBpZiAoISFzaW1pbGFyRG9jcyAmJiBzaW1pbGFyRG9jcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgcmVsZXZhbnRIaXN0b3J5ID0gc2ltaWxhckRvY3MubWFwKChkb2MpID0+IGRvYy5wYWdlQ29udGVudCkuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgaGFuZGxlcnMgfSA9IExhbmdDaGFpblN0cmVhbSgpO1xyXG4gICAgLy8gQ2FsbCBSZXBsaWNhdGUgZm9yIGluZmVyZW5jZVxyXG4gICAgY29uc3QgbW9kZWwgPSBuZXcgUmVwbGljYXRlKHtcclxuICAgICAgbW9kZWw6XHJcbiAgICAgICAgXCJhMTZ6LWluZnJhL2xsYW1hLTItMTNiLWNoYXQ6ZGY3NjkwZjE5OTRkOTRlOTZhZDlkNTY4ZWFjMTIxYWVjZjUwNjg0YTBiMDk2M2IyNWE0MWNjNDAwNjEyNjllNVwiLFxyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIG1heF9sZW5ndGg6IDIwNDgsXHJcbiAgICAgIH0sXHJcbiAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuUkVQTElDQVRFX0FQSV9UT0tFTixcclxuICAgICAgY2FsbGJhY2tNYW5hZ2VyOiBDYWxsYmFja01hbmFnZXIuZnJvbUhhbmRsZXJzKGhhbmRsZXJzKSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFR1cm4gdmVyYm9zZSBvbiBmb3IgZGVidWdnaW5nXHJcbiAgICBtb2RlbC52ZXJib3NlID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCByZXNwID0gU3RyaW5nKFxyXG4gICAgICBhd2FpdCBtb2RlbFxyXG4gICAgICAgIC5jYWxsKFxyXG4gICAgICAgICAgYFxyXG4gICAgICAgIE9OTFkgZ2VuZXJhdGUgcGxhaW4gc2VudGVuY2VzIHdpdGhvdXQgcHJlZml4IG9mIHdobyBpcyBzcGVha2luZy4gRE8gTk9UIHVzZSAke2NvbXBhbmlvbi5uYW1lfTogcHJlZml4LiBcclxuXHJcbiAgICAgICAgJHtjb21wYW5pb24uaW5zdHJ1Y3Rpb25zfVxyXG5cclxuICAgICAgICBCZWxvdyBhcmUgcmVsZXZhbnQgZGV0YWlscyBhYm91dCAke2NvbXBhbmlvbi5uYW1lfSdzIHBhc3QgYW5kIHRoZSBjb252ZXJzYXRpb24geW91IGFyZSBpbi5cclxuICAgICAgICAke3JlbGV2YW50SGlzdG9yeX1cclxuXHJcblxyXG4gICAgICAgICR7cmVjZW50Q2hhdEhpc3Rvcnl9XFxuJHtjb21wYW5pb24ubmFtZX06YFxyXG4gICAgICAgIClcclxuICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY2xlYW5lZCA9IHJlc3AucmVwbGFjZUFsbChcIixcIiwgXCJcIik7XHJcbiAgICBjb25zdCBjaHVua3MgPSBjbGVhbmVkLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBjaHVua3NbMF07XHJcblxyXG4gICAgYXdhaXQgbWVtb3J5TWFuYWdlci53cml0ZVRvSGlzdG9yeShcIlwiICsgcmVzcG9uc2UudHJpbSgpLCBjb21wYW5pb25LZXkpO1xyXG4gICAgdmFyIFJlYWRhYmxlID0gcmVxdWlyZShcInN0cmVhbVwiKS5SZWFkYWJsZTtcclxuXHJcbiAgICBsZXQgcyA9IG5ldyBSZWFkYWJsZSgpO1xyXG4gICAgcy5wdXNoKHJlc3BvbnNlKTtcclxuICAgIHMucHVzaChudWxsKTtcclxuICAgIGlmIChyZXNwb25zZSAhPT0gdW5kZWZpbmVkICYmIHJlc3BvbnNlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgbWVtb3J5TWFuYWdlci53cml0ZVRvSGlzdG9yeShcIlwiICsgcmVzcG9uc2UudHJpbSgpLCBjb21wYW5pb25LZXkpO1xyXG5cclxuICAgICAgYXdhaXQgcHJpc21hZGIuY29tcGFuaW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIGlkOiBwYXJhbXMuY2hhdElkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS50cmltKCksXHJcbiAgICAgICAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcclxuICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBTdHJlYW1pbmdUZXh0UmVzcG9uc2Uocyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiSW50ZXJuYWwgRXJyb3JcIiwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJkb3RlbnYiLCJTdHJlYW1pbmdUZXh0UmVzcG9uc2UiLCJMYW5nQ2hhaW5TdHJlYW0iLCJjdXJyZW50VXNlciIsIlJlcGxpY2F0ZSIsIkNhbGxiYWNrTWFuYWdlciIsIk5leHRSZXNwb25zZSIsIk1lbW9yeU1hbmFnZXIiLCJyYXRlTGltaXQiLCJwcmlzbWFkYiIsImNvbmZpZyIsInBhdGgiLCJQT1NUIiwicmVxdWVzdCIsInBhcmFtcyIsInByb21wdCIsImpzb24iLCJ1c2VyIiwiZmlyc3ROYW1lIiwiaWQiLCJzdGF0dXMiLCJpZGVudGlmaWVyIiwidXJsIiwic3VjY2VzcyIsImNvbXBhbmlvbiIsInVwZGF0ZSIsIndoZXJlIiwiY2hhdElkIiwiZGF0YSIsIm1lc3NhZ2VzIiwiY3JlYXRlIiwiY29udGVudCIsInJvbGUiLCJ1c2VySWQiLCJuYW1lIiwiY29tcGFuaW9uX2ZpbGVfbmFtZSIsImNvbXBhbmlvbktleSIsImNvbXBhbmlvbk5hbWUiLCJtb2RlbE5hbWUiLCJtZW1vcnlNYW5hZ2VyIiwiZ2V0SW5zdGFuY2UiLCJyZWNvcmRzIiwicmVhZExhdGVzdEhpc3RvcnkiLCJsZW5ndGgiLCJzZWVkQ2hhdEhpc3RvcnkiLCJzZWVkIiwid3JpdGVUb0hpc3RvcnkiLCJyZWNlbnRDaGF0SGlzdG9yeSIsInNpbWlsYXJEb2NzIiwidmVjdG9yU2VhcmNoIiwicmVsZXZhbnRIaXN0b3J5IiwibWFwIiwiZG9jIiwicGFnZUNvbnRlbnQiLCJqb2luIiwiaGFuZGxlcnMiLCJtb2RlbCIsImlucHV0IiwibWF4X2xlbmd0aCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJSRVBMSUNBVEVfQVBJX1RPS0VOIiwiY2FsbGJhY2tNYW5hZ2VyIiwiZnJvbUhhbmRsZXJzIiwidmVyYm9zZSIsInJlc3AiLCJTdHJpbmciLCJjYWxsIiwiaW5zdHJ1Y3Rpb25zIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJjbGVhbmVkIiwicmVwbGFjZUFsbCIsImNodW5rcyIsInNwbGl0IiwicmVzcG9uc2UiLCJ0cmltIiwiUmVhZGFibGUiLCJyZXF1aXJlIiwicyIsInB1c2giLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/[chatId]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/memory.ts":
/*!***********************!*\
  !*** ./lib/memory.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MemoryManager: () => (/* binding */ MemoryManager)\n/* harmony export */ });\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @upstash/redis */ \"(rsc)/./node_modules/@upstash/redis/nodejs.js\");\n/* harmony import */ var langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/embeddings/openai */ \"(rsc)/./node_modules/langchain/embeddings/openai.js\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"(rsc)/./node_modules/@pinecone-database/pinecone/dist/index.js\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! langchain/vectorstores/pinecone */ \"(rsc)/./node_modules/langchain/vectorstores/pinecone.js\");\n\n\n\n\nclass MemoryManager {\n    constructor(){\n        this.history = _upstash_redis__WEBPACK_IMPORTED_MODULE_0__.Redis.fromEnv();\n        this.vectorDBClient = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__.Pinecone();\n    }\n    async init() {}\n    async vectorSearch(recentChatHistory, companionFileName) {\n        const pineconeClient = this.vectorDBClient;\n        const pineconeIndex = pineconeClient.Index(process.env.PINECONE_INDEX || \"\");\n        const vectorStore = await langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_3__.PineconeStore.fromExistingIndex(new langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_1__.OpenAIEmbeddings({\n            openAIApiKey: process.env.OPENAI_API_KEY\n        }), {\n            pineconeIndex\n        });\n        const similarDocs = await vectorStore.similaritySearch(recentChatHistory, 3, {\n            fileName: companionFileName\n        }).catch((err)=>{\n            console.log(\"WARNING: failed to get vector search results.\", err);\n        });\n        return similarDocs;\n    }\n    static async getInstance() {\n        if (!MemoryManager.instance) {\n            MemoryManager.instance = new MemoryManager();\n            await MemoryManager.instance.init();\n        }\n        return MemoryManager.instance;\n    }\n    generateRedisCompanionKey(companionKey) {\n        return `${companionKey.companionName}-${companionKey.modelName}-${companionKey.userId}`;\n    }\n    async writeToHistory(text, companionKey) {\n        if (!companionKey || typeof companionKey.userId == \"undefined\") {\n            console.log(\"Companion key set incorrectly\");\n            return \"\";\n        }\n        const key = this.generateRedisCompanionKey(companionKey);\n        const result = await this.history.zadd(key, {\n            score: Date.now(),\n            member: text\n        });\n        return result;\n    }\n    async readLatestHistory(companionKey) {\n        if (!companionKey || typeof companionKey.userId == \"undefined\") {\n            console.log(\"Companion key set incorrectly\");\n            return \"\";\n        }\n        const key = this.generateRedisCompanionKey(companionKey);\n        let result = await this.history.zrange(key, 0, Date.now(), {\n            byScore: true\n        });\n        result = result.slice(-30).reverse();\n        const recentChats = result.reverse().join(\"\\n\");\n        return recentChats;\n    }\n    async seedChatHistory(seedContent, delimiter = \"\\n\", companionKey) {\n        const key = this.generateRedisCompanionKey(companionKey);\n        if (await this.history.exists(key)) {\n            console.log(\"User already has chat history\");\n            return;\n        }\n        const content = seedContent.split(delimiter);\n        let counter = 0;\n        for (const line of content){\n            await this.history.zadd(key, {\n                score: counter,\n                member: line\n            });\n            counter += 1;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNIO1FBQ2xDLElBQUlJLFVBQVU7UUFDZCxLQUFLLE1BQU1DLFFBQVFILFFBQVM7WUFDMUIsTUFBTSxJQUFJLENBQUNuRCxPQUFPLENBQUNtQyxJQUFJLENBQUNGLEtBQUs7Z0JBQUVHLE9BQU9pQjtnQkFBU2QsUUFBUWU7WUFBSztZQUM1REQsV0FBVztRQUNiO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWNvbXBhbmlvbi8uL2xpYi9tZW1vcnkudHM/MzhmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWRpcyB9IGZyb20gXCJAdXBzdGFzaC9yZWRpc1wiO1xuaW1wb3J0IHsgT3BlbkFJRW1iZWRkaW5ncyB9IGZyb20gXCJsYW5nY2hhaW4vZW1iZWRkaW5ncy9vcGVuYWlcIjtcbmltcG9ydCB7IFBpbmVjb25lIH0gZnJvbSBcIkBwaW5lY29uZS1kYXRhYmFzZS9waW5lY29uZVwiO1xuaW1wb3J0IHsgUGluZWNvbmVTdG9yZSB9IGZyb20gXCJsYW5nY2hhaW4vdmVjdG9yc3RvcmVzL3BpbmVjb25lXCI7XG5cbmV4cG9ydCB0eXBlIENvbXBhbmlvbktleSA9IHtcbiAgY29tcGFuaW9uTmFtZTogc3RyaW5nO1xuICBtb2RlbE5hbWU6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgTWVtb3J5TWFuYWdlciB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBNZW1vcnlNYW5hZ2VyO1xuICBwcml2YXRlIGhpc3Rvcnk6IFJlZGlzO1xuICBwcml2YXRlIHZlY3RvckRCQ2xpZW50OiBQaW5lY29uZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oaXN0b3J5ID0gUmVkaXMuZnJvbUVudigpO1xuICAgIHRoaXMudmVjdG9yREJDbGllbnQgPSBuZXcgUGluZWNvbmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBpbml0KCkge1xuXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdmVjdG9yU2VhcmNoKFxuICAgIHJlY2VudENoYXRIaXN0b3J5OiBzdHJpbmcsXG4gICAgY29tcGFuaW9uRmlsZU5hbWU6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBwaW5lY29uZUNsaWVudCA9IDxQaW5lY29uZT50aGlzLnZlY3RvckRCQ2xpZW50O1xuXG4gICAgY29uc3QgcGluZWNvbmVJbmRleCA9IHBpbmVjb25lQ2xpZW50LkluZGV4KFxuICAgICAgcHJvY2Vzcy5lbnYuUElORUNPTkVfSU5ERVghIHx8IFwiXCJcbiAgICApO1xuXG4gICAgY29uc3QgdmVjdG9yU3RvcmUgPSBhd2FpdCBQaW5lY29uZVN0b3JlLmZyb21FeGlzdGluZ0luZGV4KFxuICAgICAgbmV3IE9wZW5BSUVtYmVkZGluZ3MoeyBvcGVuQUlBcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZIH0pLFxuICAgICAgeyBwaW5lY29uZUluZGV4IH1cbiAgICApOyBcblxuICAgIGNvbnN0IHNpbWlsYXJEb2NzID0gYXdhaXQgdmVjdG9yU3RvcmVcbiAgICAgIC5zaW1pbGFyaXR5U2VhcmNoKHJlY2VudENoYXRIaXN0b3J5LCAzLCB7IGZpbGVOYW1lOiBjb21wYW5pb25GaWxlTmFtZSB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXQVJOSU5HOiBmYWlsZWQgdG8gZ2V0IHZlY3RvciBzZWFyY2ggcmVzdWx0cy5cIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBzaW1pbGFyRG9jcztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0SW5zdGFuY2UoKTogUHJvbWlzZTxNZW1vcnlNYW5hZ2VyPiB7XG4gICAgaWYgKCFNZW1vcnlNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICBNZW1vcnlNYW5hZ2VyLmluc3RhbmNlID0gbmV3IE1lbW9yeU1hbmFnZXIoKTtcbiAgICAgIGF3YWl0IE1lbW9yeU1hbmFnZXIuaW5zdGFuY2UuaW5pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gTWVtb3J5TWFuYWdlci5pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVSZWRpc0NvbXBhbmlvbktleShjb21wYW5pb25LZXk6IENvbXBhbmlvbktleSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2NvbXBhbmlvbktleS5jb21wYW5pb25OYW1lfS0ke2NvbXBhbmlvbktleS5tb2RlbE5hbWV9LSR7Y29tcGFuaW9uS2V5LnVzZXJJZH1gO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHdyaXRlVG9IaXN0b3J5KHRleHQ6IHN0cmluZywgY29tcGFuaW9uS2V5OiBDb21wYW5pb25LZXkpIHtcbiAgICBpZiAoIWNvbXBhbmlvbktleSB8fCB0eXBlb2YgY29tcGFuaW9uS2V5LnVzZXJJZCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBhbmlvbiBrZXkgc2V0IGluY29ycmVjdGx5XCIpO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZW5lcmF0ZVJlZGlzQ29tcGFuaW9uS2V5KGNvbXBhbmlvbktleSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5oaXN0b3J5LnphZGQoa2V5LCB7XG4gICAgICBzY29yZTogRGF0ZS5ub3coKSxcbiAgICAgIG1lbWJlcjogdGV4dCxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVhZExhdGVzdEhpc3RvcnkoY29tcGFuaW9uS2V5OiBDb21wYW5pb25LZXkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGlmICghY29tcGFuaW9uS2V5IHx8IHR5cGVvZiBjb21wYW5pb25LZXkudXNlcklkID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGFuaW9uIGtleSBzZXQgaW5jb3JyZWN0bHlcIik7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSB0aGlzLmdlbmVyYXRlUmVkaXNDb21wYW5pb25LZXkoY29tcGFuaW9uS2V5KTtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5oaXN0b3J5LnpyYW5nZShrZXksIDAsIERhdGUubm93KCksIHtcbiAgICAgIGJ5U2NvcmU6IHRydWUsXG4gICAgfSk7XG5cbiAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoLTMwKS5yZXZlcnNlKCk7XG4gICAgY29uc3QgcmVjZW50Q2hhdHMgPSByZXN1bHQucmV2ZXJzZSgpLmpvaW4oXCJcXG5cIik7XG4gICAgcmV0dXJuIHJlY2VudENoYXRzO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHNlZWRDaGF0SGlzdG9yeShcbiAgICBzZWVkQ29udGVudDogU3RyaW5nLFxuICAgIGRlbGltaXRlcjogc3RyaW5nID0gXCJcXG5cIixcbiAgICBjb21wYW5pb25LZXk6IENvbXBhbmlvbktleVxuICApIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdlbmVyYXRlUmVkaXNDb21wYW5pb25LZXkoY29tcGFuaW9uS2V5KTtcbiAgICBpZiAoYXdhaXQgdGhpcy5oaXN0b3J5LmV4aXN0cyhrZXkpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgYWxyZWFkeSBoYXMgY2hhdCBoaXN0b3J5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBzZWVkQ29udGVudC5zcGxpdChkZWxpbWl0ZXIpO1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgY29udGVudCkge1xuICAgICAgYXdhaXQgdGhpcy5oaXN0b3J5LnphZGQoa2V5LCB7IHNjb3JlOiBjb3VudGVyLCBtZW1iZXI6IGxpbmUgfSk7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIlJlZGlzIiwiT3BlbkFJRW1iZWRkaW5ncyIsIlBpbmVjb25lIiwiUGluZWNvbmVTdG9yZSIsIk1lbW9yeU1hbmFnZXIiLCJoaXN0b3J5IiwiZnJvbUVudiIsInZlY3RvckRCQ2xpZW50IiwiaW5pdCIsInZlY3RvclNlYXJjaCIsInJlY2VudENoYXRIaXN0b3J5IiwiY29tcGFuaW9uRmlsZU5hbWUiLCJwaW5lY29uZUNsaWVudCIsInBpbmVjb25lSW5kZXgiLCJJbmRleCIsInByb2Nlc3MiLCJlbnYiLCJQSU5FQ09ORV9JTkRFWCIsInZlY3RvclN0b3JlIiwiZnJvbUV4aXN0aW5nSW5kZXgiLCJvcGVuQUlBcGlLZXkiLCJPUEVOQUlfQVBJX0tFWSIsInNpbWlsYXJEb2NzIiwic2ltaWxhcml0eVNlYXJjaCIsImZpbGVOYW1lIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsImdlbmVyYXRlUmVkaXNDb21wYW5pb25LZXkiLCJjb21wYW5pb25LZXkiLCJjb21wYW5pb25OYW1lIiwibW9kZWxOYW1lIiwidXNlcklkIiwid3JpdGVUb0hpc3RvcnkiLCJ0ZXh0Iiwia2V5IiwicmVzdWx0IiwiemFkZCIsInNjb3JlIiwiRGF0ZSIsIm5vdyIsIm1lbWJlciIsInJlYWRMYXRlc3RIaXN0b3J5IiwienJhbmdlIiwiYnlTY29yZSIsInNsaWNlIiwicmV2ZXJzZSIsInJlY2VudENoYXRzIiwiam9pbiIsInNlZWRDaGF0SGlzdG9yeSIsInNlZWRDb250ZW50IiwiZGVsaW1pdGVyIiwiZXhpc3RzIiwiY29udGVudCIsInNwbGl0IiwiY291bnRlciIsImxpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/memory.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_extension_accelerate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/extension-accelerate */ \"(rsc)/./node_modules/@prisma/extension-accelerate/dist/esm/entry.node.js\");\n\n\nconst dynamicExtension = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient().$extends((0,_prisma_extension_accelerate__WEBPACK_IMPORTED_MODULE_1__.withAccelerate)());\nconst unknownPrismaClient = dynamicExtension;\nconst prismadb = globalThis.prisma || unknownPrismaClient;\nif (true) globalThis.prisma = prismadb;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prismadb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QztBQUNnQjtBQU05RCxNQUFNRSxtQkFBbUIsSUFBSUYsd0RBQVlBLEdBQUdHLFFBQVEsQ0FBQ0YsNEVBQWNBO0FBRW5FLE1BQU1HLHNCQUErQkY7QUFFckMsTUFBTUcsV0FBV0MsV0FBV0MsTUFBTSxJQUFLSDtBQUV2QyxJQUFJSSxJQUFxQyxFQUFFRixXQUFXQyxNQUFNLEdBQUdGO0FBRS9ELGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktY29tcGFuaW9uLy4vbGliL3ByaXNtYWRiLnRzPzBlM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB7IHdpdGhBY2NlbGVyYXRlIH0gZnJvbSAnQHByaXNtYS9leHRlbnNpb24tYWNjZWxlcmF0ZSc7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5jb25zdCBkeW5hbWljRXh0ZW5zaW9uID0gbmV3IFByaXNtYUNsaWVudCgpLiRleHRlbmRzKHdpdGhBY2NlbGVyYXRlKCkpO1xyXG5cclxuY29uc3QgdW5rbm93blByaXNtYUNsaWVudDogdW5rbm93biA9IGR5bmFtaWNFeHRlbnNpb247XHJcblxyXG5jb25zdCBwcmlzbWFkYiA9IGdsb2JhbFRoaXMucHJpc21hIHx8ICh1bmtub3duUHJpc21hQ2xpZW50IGFzIFByaXNtYUNsaWVudCk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxUaGlzLnByaXNtYSA9IHByaXNtYWRiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hZGI7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJ3aXRoQWNjZWxlcmF0ZSIsImR5bmFtaWNFeHRlbnNpb24iLCIkZXh0ZW5kcyIsInVua25vd25QcmlzbWFDbGllbnQiLCJwcmlzbWFkYiIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(rsc)/./lib/rate-limit.ts":
/*!***************************!*\
  !*** ./lib/rate-limit.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rateLimit: () => (/* binding */ rateLimit)\n/* harmony export */ });\n/* harmony import */ var _upstash_ratelimit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @upstash/ratelimit */ \"(rsc)/./node_modules/@upstash/ratelimit/dist/index.js\");\n/* harmony import */ var _upstash_ratelimit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_upstash_ratelimit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @upstash/redis */ \"(rsc)/./node_modules/@upstash/redis/nodejs.js\");\n\n\nasync function rateLimit(identifier) {\n    const ratelimit = new _upstash_ratelimit__WEBPACK_IMPORTED_MODULE_0__.Ratelimit({\n        redis: _upstash_redis__WEBPACK_IMPORTED_MODULE_1__.Redis.fromEnv(),\n        limiter: _upstash_ratelimit__WEBPACK_IMPORTED_MODULE_0__.Ratelimit.slidingWindow(10, \"10 s\"),\n        analytics: true,\n        prefix: \"@upstash/ratelimit\"\n    });\n    return await ratelimit.limit(identifier);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcmF0ZS1saW1pdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStDO0FBQ1I7QUFFaEMsZUFBZUUsVUFBVUMsVUFBa0I7SUFDaEQsTUFBTUMsWUFBWSxJQUFJSix5REFBU0EsQ0FBQztRQUM5QkssT0FBT0osaURBQUtBLENBQUNLLE9BQU87UUFDcEJDLFNBQVNQLHlEQUFTQSxDQUFDUSxhQUFhLENBQUMsSUFBSTtRQUNyQ0MsV0FBVztRQUNYQyxRQUFRO0lBQ1Y7SUFFQSxPQUFPLE1BQU1OLFVBQVVPLEtBQUssQ0FBQ1I7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1jb21wYW5pb24vLi9saWIvcmF0ZS1saW1pdC50cz8yMmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhdGVsaW1pdCB9IGZyb20gXCJAdXBzdGFzaC9yYXRlbGltaXRcIjtcbmltcG9ydCB7IFJlZGlzIH0gZnJvbSBcIkB1cHN0YXNoL3JlZGlzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByYXRlTGltaXQoaWRlbnRpZmllcjogc3RyaW5nKSB7XG4gIGNvbnN0IHJhdGVsaW1pdCA9IG5ldyBSYXRlbGltaXQoe1xuICAgIHJlZGlzOiBSZWRpcy5mcm9tRW52KCksXG4gICAgbGltaXRlcjogUmF0ZWxpbWl0LnNsaWRpbmdXaW5kb3coMTAsIFwiMTAgc1wiKSxcbiAgICBhbmFseXRpY3M6IHRydWUsXG4gICAgcHJlZml4OiBcIkB1cHN0YXNoL3JhdGVsaW1pdFwiLFxuICB9KTtcblxuICByZXR1cm4gYXdhaXQgcmF0ZWxpbWl0LmxpbWl0KGlkZW50aWZpZXIpO1xufTtcbiJdLCJuYW1lcyI6WyJSYXRlbGltaXQiLCJSZWRpcyIsInJhdGVMaW1pdCIsImlkZW50aWZpZXIiLCJyYXRlbGltaXQiLCJyZWRpcyIsImZyb21FbnYiLCJsaW1pdGVyIiwic2xpZGluZ1dpbmRvdyIsImFuYWx5dGljcyIsInByZWZpeCIsImxpbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/rate-limit.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/langchain","vendor-chunks/node-fetch-native","vendor-chunks/next","vendor-chunks/@clerk","vendor-chunks/@peculiar","vendor-chunks/asn1js","vendor-chunks/webcrypto-core","vendor-chunks/tslib","vendor-chunks/@prisma","vendor-chunks/path-to-regexp","vendor-chunks/pvtsutils","vendor-chunks/pvutils","vendor-chunks/cookie","vendor-chunks/deepmerge","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case","vendor-chunks/formdata-node","vendor-chunks/ai","vendor-chunks/ms","vendor-chunks/nanoid","vendor-chunks/@pinecone-database","vendor-chunks/ajv","vendor-chunks/ml-distance","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/langsmith","vendor-chunks/uuid","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/@upstash","vendor-chunks/retry","vendor-chunks/p-queue","vendor-chunks/ml-tree-similarity","vendor-chunks/crypto-js","vendor-chunks/js-tiktoken","vendor-chunks/tr46","vendor-chunks/dotenv","vendor-chunks/cross-fetch","vendor-chunks/node-fetch","vendor-chunks/eventsource-parser","vendor-chunks/webidl-conversions","vendor-chunks/web-streams-polyfill","vendor-chunks/uri-js","vendor-chunks/p-timeout","vendor-chunks/p-retry","vendor-chunks/p-finally","vendor-chunks/num-sort","vendor-chunks/ml-distance-euclidean","vendor-chunks/ml-array-sum","vendor-chunks/ml-array-mean","vendor-chunks/json-schema-traverse","vendor-chunks/is-any-array","vendor-chunks/humanize-ms","vendor-chunks/flat","vendor-chunks/fast-deep-equal","vendor-chunks/eventemitter3","vendor-chunks/event-target-shim","vendor-chunks/decamelize","vendor-chunks/binary-search","vendor-chunks/base64-js","vendor-chunks/abort-controller","vendor-chunks/@sinclair"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2F%5BchatId%5D%2Froute&page=%2Fapi%2Fchat%2F%5BchatId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2F%5BchatId%5D%2Froute.ts&appDir=C%3A%5CUsers%5Crages%5COneDrive%5CDesktop%5CNew%20folder%5Cai%5Cai-companion%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crages%5COneDrive%5CDesktop%5CNew%20folder%5Cai%5Cai-companion&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();