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

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CONFIG = {\n    colorsArray: [\n        'aqua',\n        'blue',\n        'gray',\n        'green',\n        'orange',\n        'pink',\n        'red',\n        'yellow',\n    ],\n    dotPerRow: 4,\n    tryNumber: 10,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);\n\n\n//# sourceURL=webpack://kulki4/./src/Config.ts?");

/***/ }),

/***/ "./src/components/Code.ts":
/*!********************************!*\
  !*** ./src/components/Code.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Code)\n/* harmony export */ });\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ \"./src/Config.ts\");\n\nclass Code {\n    constructor() {\n        /**\n         * Creates new random code\n         * @Code\n         * @void\n         */\n        this.newCode = () => {\n            this.codeArray = [];\n            for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotPerRow; i++) {\n                this.codeArray.push(_Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorsArray[Math.floor(Math.random() * 8)]);\n            }\n            console.log(this.codeArray);\n        };\n        /**\n         *\n         * @param codeToCheck Array of code that has to be checked\n         */\n        this.checkCode = (codeToCheck) => {\n            return {};\n        };\n        this.codeArray = [];\n    }\n}\n\n\n//# sourceURL=webpack://kulki4/./src/components/Code.ts?");

/***/ }),

/***/ "./src/components/Game.ts":
/*!********************************!*\
  !*** ./src/components/Game.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Code */ \"./src/components/Code.ts\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ \"./src/Config.ts\");\n\n\nclass Game extends _Code__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        //?new game\n        /**\n         * handle statr game button\n         * @example\n         * crates code like [\"orange\",\"yellow\",\"blue\",\"pink\"]\n         */\n        this.startGame = () => {\n            this.startButton.removeEventListener('click', this.startGame);\n            this.startButton.style.visibility = 'hidden';\n            this.hasStarted = true;\n            this.newCode();\n        };\n        //?helping functions\n        /**\n         *\n         * @param color color of dot\n         */\n        this.selectDot = (color) => {\n            if (this.hasStarted) {\n                let container = document.querySelector('#dots');\n                container.style.visibility = 'hidden';\n                this.slectedDotColor = color;\n                document.body.style.cursor = `url('../assets/img/${color}.png'), auto`;\n                container.style.visibility = 'visible';\n            }\n        };\n        this.hasStarted = false;\n        this.startButton = document.querySelector('#start');\n    }\n    /**\n     * Renders all availible dots\n     */\n    renderAvailibleDots() {\n        _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colorsArray.forEach((element, counter) => {\n            let cell = document.createElement('th');\n            let dot = document.createElement('img');\n            dot.src = `./assets/img/${element}.png`;\n            cell.appendChild(dot);\n            cell.addEventListener('click', () => {\n                this.selectDot(element);\n            });\n            document\n                .querySelector(`#dots tbody tr${counter < 4 ? ':first-child' : ':nth-child(2)'}`)\n                .appendChild(cell);\n        });\n    }\n}\n\n\n//# sourceURL=webpack://kulki4/./src/components/Game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ \"./src/Config.ts\");\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Game */ \"./src/components/Game.ts\");\n\n\nclass Main extends _components_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor() {\n        super();\n        //?htmlContainers\n        this.boardTable = document.querySelector('#gameTable');\n        this.boardsResultsContainer = document.querySelector('#anwsersTabe');\n        this.boardTableArray = [];\n        this.start();\n    }\n    start() {\n        this.ceateBoadrd();\n        this.createAnwsers();\n        this.renderAvailibleDots();\n        document.querySelector('#start').addEventListener('click', this.startGame);\n    }\n    //? Starting methods section\n    /**\n     * Creates game board and board array\n     * @version 1.0\n     * @copyright Jakub Bryndal\n     * @void\n     * @private\n     */\n    ceateBoadrd() {\n        for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tryNumber; i++) {\n            let singleRow = document.createElement('tr');\n            this.boardTableArray[i] = [];\n            for (let cell = 0; cell < _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotPerRow; cell++) {\n                let cell = document.createElement('th');\n                singleRow.appendChild(cell);\n                this.boardTableArray[i].push(cell);\n            }\n            this.boardTable.prepend(singleRow);\n        }\n    }\n    /**\n     * renders anwsers dots\n     * @private\n     *\n     */\n    createAnwsers() {\n        for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tryNumber; i++) {\n            let singleRow = document.createElement('tr');\n            this.boardTableArray[i] = [];\n            for (let cell = 0; cell < _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotPerRow; cell++) {\n                let cell = document.createElement('th');\n                singleRow.appendChild(cell);\n                this.boardTableArray[i].push(cell);\n            }\n            this.boardsResultsContainer.prepend(singleRow);\n        }\n    }\n}\nnew Main();\n\n\n//# sourceURL=webpack://kulki4/./src/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;