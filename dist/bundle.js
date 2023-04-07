/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml,\\nbody {\\n  box-sizing: inherit;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-size: 16px;\\n  position: relative;\\n  background-color: #1a1d21;\\n  color: #cbcbcd;\\n}\\n\\n.no-scroll {\\n  overflow: hidden;\\n}\\n\\n::-webkit-calendar-picker-indicator {\\n  filter: invert(1);\\n}\\n\\n.add-task-form-bg {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  z-index: 8;\\n  display: none;\\n}\\n.add-task-form-bg.show {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.add-task-form-bg .add-task-form-modal {\\n  background-color: #212428;\\n  min-width: 500px;\\n}\\n.add-task-form-bg .add-task-form-modal .form-header {\\n  border: 1px solid #3c4044;\\n  background-color: #1a1d21;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 20px;\\n}\\n.add-task-form-bg .add-task-form-modal .form-header .form-title {\\n  font-size: 1.3rem;\\n  padding-left: 20px;\\n}\\n.add-task-form-bg .add-task-form-modal .form-header .close-icon {\\n  background-color: #df1e59;\\n  color: #fdfdfd;\\n  padding: 15px 20px;\\n}\\n.add-task-form-bg .add-task-form-modal .form-header .close-icon:hover {\\n  background-color: #c91b50;\\n}\\n.add-task-form-bg .add-task-form-modal .form-row {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 0 30px;\\n  margin-bottom: 10px;\\n}\\n.add-task-form-bg .add-task-form-modal .form-row label {\\n  width: fit-content;\\n  margin-bottom: 5px;\\n  font-size: 1.1rem;\\n}\\n.add-task-form-bg .add-task-form-modal .form-row input[type=text], .add-task-form-bg .add-task-form-modal .form-row input[type=date], .add-task-form-bg .add-task-form-modal .form-row select, .add-task-form-bg .add-task-form-modal .form-row textarea {\\n  font-size: 1.1rem;\\n  background-color: #1a1d21;\\n  color: #cbcbcd;\\n  border: 1px solid #3c4044;\\n  padding: 8px;\\n}\\n.add-task-form-bg .add-task-form-modal .form-row input[type=text]:focus, .add-task-form-bg .add-task-form-modal .form-row input[type=date]:focus, .add-task-form-bg .add-task-form-modal .form-row select:focus, .add-task-form-bg .add-task-form-modal .form-row textarea:focus {\\n  outline: none;\\n  border: 1px solid #60666c;\\n}\\n.add-task-form-bg .add-task-form-modal .form-row textarea {\\n  max-height: 300px;\\n  min-height: 100px;\\n  resize: vertical;\\n}\\n.add-task-form-bg .add-task-form-modal .add-task-btn {\\n  background-color: #2db67c;\\n  color: #fdfdfd;\\n  border: none;\\n  margin: 10px 0 30px 25px;\\n  padding: 15px 30px;\\n  font-size: 1rem;\\n}\\n.add-task-form-bg .add-task-form-modal .add-task-btn:hover {\\n  background-color: #28a26e;\\n}\\n\\nheader {\\n  position: sticky;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: #0b0a0d;\\n  border-bottom: 1px solid #303336;\\n}\\nheader .menu-icon-bg {\\n  height: 60px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 0 30px;\\n}\\nheader .menu-icon-bg:hover {\\n  background-color: #343338;\\n}\\nheader .logo {\\n  font-size: 1.5rem;\\n  font-weight: 500;\\n  padding-right: 25px;\\n}\\n\\nmain {\\n  display: flex;\\n  position: fixed;\\n  top: 61px;\\n  height: 100%;\\n  width: 100%;\\n}\\nmain #sidebar {\\n  background-color: #19171d;\\n  border-right: 1px solid #303336;\\n  height: 100%;\\n  width: 0;\\n  overflow: hidden;\\n}\\nmain #sidebar.open {\\n  min-width: 350px;\\n  max-width: 350px;\\n  padding-left: 10px;\\n}\\nmain #sidebar .add-list-form {\\n  display: grid;\\n  grid-template-columns: 1fr auto;\\n  grid-template-rows: 60px;\\n  border-bottom: 1px solid #303336;\\n  position: sticky;\\n  top: 0;\\n  z-index: 3;\\n  width: 100%;\\n  margin-bottom: 20px;\\n  background-color: #19171d;\\n}\\nmain #sidebar .add-list-form:has(> #new-list:focus) {\\n  border-bottom: 1px solid #cbcbcd;\\n}\\nmain #sidebar .add-list-form #new-list {\\n  border: none;\\n  background-color: transparent;\\n  padding: 15px;\\n  color: #cbcbcd;\\n  font-size: 1rem;\\n  position: relative;\\n}\\nmain #sidebar .add-list-form #new-list:focus {\\n  outline: none;\\n}\\nmain #sidebar .add-list-form .add-list-btn {\\n  background-color: #cbcbcd;\\n  border: none;\\n  padding: 5px 25px;\\n}\\nmain #sidebar .add-list-form .add-list-btn:hover {\\n  background-color: #fdfdfd;\\n}\\nmain #sidebar .all-tasks {\\n  padding-bottom: 10px;\\n  border-bottom: 1px solid #303336;\\n  margin-bottom: 20px;\\n}\\nmain #sidebar .all-tasks .default-task {\\n  height: 50px;\\n}\\nmain #sidebar .list-container {\\n  margin-right: 10px;\\n}\\nmain #sidebar .list-container .list-item {\\n  padding-left: 10px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\nmain #sidebar .list-container .list-item .delete-icon {\\n  height: 50px;\\n  padding: 0 15px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  opacity: 0;\\n  color: #fdfdfd;\\n  font-size: 1.1rem;\\n}\\nmain #sidebar .list-container .list-item:hover {\\n  cursor: default;\\n}\\nmain #sidebar .list-container .list-item:hover .delete-icon {\\n  opacity: 0.6;\\n}\\nmain #sidebar .list-container .list-item:hover .delete-icon:hover {\\n  opacity: 1;\\n}\\nmain #sidebar .list-container .list-item:not(.active):hover {\\n  background-color: #343338;\\n}\\nmain #sidebar .list-container .list-item.active {\\n  background-color: #0576b9;\\n  color: #fdfdfd;\\n}\\nmain #content {\\n  flex: 1;\\n}\\nmain #content .add-task-container {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: #0b0a0d;\\n  border-bottom: 1px solid #303336;\\n  background-color: #1a1d21;\\n}\\nmain #content .add-task-container .task-list-title {\\n  padding-left: 25px;\\n}\\nmain #content .add-task-container .add-task-button {\\n  padding: 0 40px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 60px;\\n}\\nmain #content .add-task-container .add-task-button:hover {\\n  background-color: #343338;\\n  cursor: default;\\n}\\nmain #content .add-task-container .add-task-button i {\\n  margin-right: 10px;\\n}\\nmain #content .task-list {\\n  padding: 25px;\\n}\\nmain #content .task-list .task {\\n  border: 1px solid #3c4044;\\n  margin-bottom: 30px;\\n}\\nmain #content .task-list .task .task-top {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid #3c4044;\\n  background-color: #212428;\\n  padding: 10px 20px;\\n}\\nmain #content .task-list .task .task-top .task-info {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\nmain #content .task-list .task .task-top .task-info .task-title {\\n  margin-right: 20px;\\n  font-size: 1.1rem;\\n}\\nmain #content .task-list .task .task-top .task-info .task-priority {\\n  color: #fdfdfd;\\n  font-size: 0.8rem;\\n  padding: 2px 10px;\\n  border-radius: 10px;\\n  margin-right: 20px;\\n}\\nmain #content .task-list .task .task-top .task-info .task-priority.low {\\n  background-color: #2db67c;\\n  border: 1px solid #196444;\\n}\\nmain #content .task-list .task .task-top .task-info .task-priority.medium {\\n  background-color: #ecb22e;\\n  border: 1px solid #a5770f;\\n}\\nmain #content .task-list .task .task-top .task-info .task-priority.high {\\n  background-color: #df1e59;\\n  border: 1px solid #851235;\\n}\\nmain #content .task-list .task .task-top .task-info .task-circle {\\n  height: 15px;\\n  width: 15px;\\n  border-radius: 100%;\\n  border: 1px solid #cbcbcd;\\n  margin-right: 20px;\\n}\\nmain #content .task-list .task .task-top .task-info .task-circle.fill {\\n  background-color: #0576b9;\\n}\\nmain #content .task-list .task .task-top .task-info .task-due-date {\\n  font-size: 0.9rem;\\n  opacity: 0.7;\\n}\\nmain #content .task-list .task .task-top .task-icons {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\nmain #content .task-list .task .task-top .task-icons i {\\n  opacity: 0;\\n  margin-left: 15px;\\n  font-size: 1.1rem;\\n  padding: 10px;\\n}\\nmain #content .task-list .task:hover {\\n  cursor: default;\\n}\\nmain #content .task-list .task:hover .task-icons > i {\\n  opacity: 0.7;\\n}\\nmain #content .task-list .task:hover .task-icons > i:hover {\\n  opacity: 1;\\n}\\nmain #content .task-list .task .task-descript {\\n  padding: 20px;\\n  font-size: 0.9rem;\\n  line-height: 1.5;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://task-manager/./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://task-manager/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://task-manager/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://task-manager/./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addListUtils.js":
/*!*****************************!*\
  !*** ./src/addListUtils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearElement\": () => (/* binding */ clearElement),\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"saveAndRender\": () => (/* binding */ saveAndRender)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nconst saveAndRender = () => {\n  save();\n  (0,___WEBPACK_IMPORTED_MODULE_0__.render)();\n};\n\nconst save = () => {\n  localStorage.setItem(___WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_LIST_KEY, JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.lists));\n  localStorage.setItem(___WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_LIST_ID_KEY, ___WEBPACK_IMPORTED_MODULE_0__.selectedListId);\n};\n\nconst clearElement = (element) => {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n};\n\nconst createList = (name) => {\n  return {\n    id: Date.now().toString(),\n    name: name,\n    tasks: [],\n  };\n};\n\n\n//# sourceURL=webpack://task-manager/./src/addListUtils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOCAL_STORAGE_LIST_ID_KEY\": () => (/* binding */ LOCAL_STORAGE_LIST_ID_KEY),\n/* harmony export */   \"LOCAL_STORAGE_LIST_KEY\": () => (/* binding */ LOCAL_STORAGE_LIST_KEY),\n/* harmony export */   \"lists\": () => (/* binding */ lists),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"selectedListId\": () => (/* binding */ selectedListId)\n/* harmony export */ });\n/* harmony import */ var _addListUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addListUtils */ \"./src/addListUtils.js\");\n/* harmony import */ var _toggleAddTaskModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleAddTaskModal */ \"./src/toggleAddTaskModal.js\");\n/* harmony import */ var _toggleSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleSidebar */ \"./src/toggleSidebar.js\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n\n\n\n\n\nconst listsContainer = document.querySelector(\"[data-lists\");\nconst allTasksContainer = document.querySelector(\"[data-all-tasks]\");\nconst allTasksList = document.querySelector(\"[data-default-list]\");\nconst newListForm = document.querySelector(\"[data-new-list-form]\");\nconst newListInput = document.querySelector(\"[data-new-list-input]\");\nconst listDisplayContainer = document.querySelector(\n  \"[data-list-display-container]\"\n);\nconst listTitleElement = document.querySelector(\"[data-list-title]\");\nconst tasksContainer = document.querySelector(\"[data-tasks]\");\n\nconst LOCAL_STORAGE_LIST_KEY = \"taskapp.lists\";\nconst LOCAL_STORAGE_LIST_ID_KEY = \"taskapp.selectedListId\";\nlet lists =\n  JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\nlet selectedListId =\n  localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY) || \"0\";\n\nconst setActiveSidebarItem = (e) => {\n  if (e.target.tagName.toLowerCase() === \"li\") {\n    selectedListId = e.target.dataset.listId;\n    (0,_addListUtils__WEBPACK_IMPORTED_MODULE_0__.saveAndRender)();\n  }\n};\n\nlistsContainer.addEventListener(\"click\", setActiveSidebarItem);\nallTasksContainer.addEventListener(\"click\", setActiveSidebarItem);\n\nnewListForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const listName = newListInput.value;\n  if (listName == null || listName === \"\") return;\n  const list = (0,_addListUtils__WEBPACK_IMPORTED_MODULE_0__.createList)(listName);\n  newListInput.value = null;\n  newListInput.blur();\n  lists.push(list);\n  (0,_addListUtils__WEBPACK_IMPORTED_MODULE_0__.saveAndRender)();\n});\n\nconst render = () => {\n  (0,_addListUtils__WEBPACK_IMPORTED_MODULE_0__.clearElement)(listsContainer);\n  renderLists();\n  const selectedList = lists.find((list) => list.id === selectedListId);\n  if (selectedListId == 0) {\n    listTitleElement.textContent = allTasksList.textContent;\n  } else {\n    listTitleElement.textContent = selectedList.name;\n  }\n  (0,_addListUtils__WEBPACK_IMPORTED_MODULE_0__.clearElement)(tasksContainer);\n  renderTasks(selectedList)\n};\n\nconst renderLists = () => {\n  if (selectedListId == \"0\") {\n    allTasksList.classList.add(\"active\");\n  } else {\n    allTasksList.classList.remove(\"active\");\n  }\n  lists.forEach((list) => {\n    const listElement = document.createElement(\"li\");\n    listElement.classList.add(\"list-item\");\n    if (list.id === selectedListId) {\n      listElement.classList.add(\"active\");\n    }\n    listElement.dataset.listId = list.id;\n    listElement.textContent = list.name;\n\n    const deleteListItem = document.createElement(\"span\");\n    deleteListItem.classList.add(\"delete-icon\");\n    const deleteListIcon = document.createElement(\"i\");\n    deleteListIcon.classList.add(\"fa-solid\", \"fa-xmark\");\n    deleteListItem.addEventListener(\"click\", deleteList);\n\n    deleteListItem.appendChild(deleteListIcon);\n    listElement.appendChild(deleteListItem);\n    listsContainer.appendChild(listElement);\n  });\n};\n\nconst deleteList = (e) => {\n  const listParent = e.target.closest(\".list-item\");\n  const listParentId = listParent.dataset.listId;\n  lists = lists.filter((list) => list.id !== listParentId);\n  const previousList = listParent.previousSibling;\n  const nextList = listParent.nextSibling;\n  if (previousList != null) {\n    const previousListId = previousList.dataset.listId;\n    selectedListId = previousListId;\n  } else if (nextList != null) {\n    const nextListId = nextList.dataset.listId;\n    selectedListId = nextListId;\n  } else {\n    selectedListId = 0;\n  }\n  (0,_addListUtils__WEBPACK_IMPORTED_MODULE_0__.saveAndRender)();\n};\n\nrender();\n(0,_toggleAddTaskModal__WEBPACK_IMPORTED_MODULE_1__.toggleAddTaskForm)();\n(0,_toggleSidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://task-manager/./src/index.js?");

/***/ }),

/***/ "./src/toggleAddTaskModal.js":
/*!***********************************!*\
  !*** ./src/toggleAddTaskModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleAddTaskForm\": () => (/* binding */ toggleAddTaskForm)\n/* harmony export */ });\nconst addTaskForm = document.querySelector(\"[data-add-task-form-bg]\");\nconst addTaskButton = document.querySelector(\"[data-add-task-btn]\");\nconst closeAddTaskForm = document.querySelector(\"[data-close-add-task]\");\n\nconst toggleAddTaskForm = () => {\n  const closeForm = () => {\n    if (addTaskForm.classList.contains(\"show\")) {\n      addTaskForm.classList.remove(\"show\");\n      document.body.classList.remove(\"no-scroll\");\n    }\n  };\n\n  const closeFormOutsideClick = (e) => {\n    if (\n      e.target.classList.contains(\"add-task-form-bg\") &&\n      addTaskForm.classList.contains(\"show\")\n    ) {\n      addTaskForm.classList.remove(\"show\");\n    }\n  };\n\n  const displayForm = () => {\n    if (!addTaskForm.classList.contains(\"show\")) {\n      addTaskForm.classList.add(\"show\");\n      document.body.classList.add(\"no-scroll\");\n    }\n  };\n\n  addTaskButton.addEventListener(\"click\", displayForm);\n\n  closeAddTaskForm.addEventListener(\"click\", closeForm);\n\n  addTaskForm.addEventListener(\"click\", closeFormOutsideClick);\n};\n\n\n//# sourceURL=webpack://task-manager/./src/toggleAddTaskModal.js?");

/***/ }),

/***/ "./src/toggleSidebar.js":
/*!******************************!*\
  !*** ./src/toggleSidebar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerBtn = document.querySelector(\"[data-header-btn]\");\nconst sidebar = document.querySelector(\"[data-sidebar]\");\n\nconst toggleSidebar = () => {\n  headerBtn.addEventListener(\"click\", () => {\n    if (sidebar.classList.contains(\"open\")) {\n      sidebar.classList.remove(\"open\");\n    } else {\n      sidebar.classList.add(\"open\");\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleSidebar);\n\n\n//# sourceURL=webpack://task-manager/./src/toggleSidebar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;