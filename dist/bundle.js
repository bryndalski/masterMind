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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Code)\n/* harmony export */ });\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ \"./src/Config.ts\");\n\nclass Code {\n    constructor() {\n        /**\n         * Creates new random code\n         * @Code\n         * @void\n         */\n        this.newCode = () => {\n            this.codeArray = [];\n            for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotPerRow; i++) {\n                this.codeArray.push(_Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colorsArray[Math.floor(Math.random() * 8)]);\n            }\n            console.log(this.codeArray);\n        };\n        /**\n         *\n         * @param codeToCheck Array of code that has to be checked\n         */\n        this.checkCode = (codeToCheck) => {\n            let toReturn = [];\n            let includedColors = [];\n            codeToCheck.forEach((e, c) => {\n                if (this.codeArray[c] == e) {\n                    toReturn.push('black');\n                }\n                else {\n                    if (this.codeArray.includes(e) && !includedColors.includes(e)) {\n                        includedColors.push(e);\n                        toReturn.push('white');\n                    }\n                }\n            });\n            return toReturn.sort();\n        };\n        this.codeArray = [];\n    }\n}\n\n\n//# sourceURL=webpack://kulki4/./src/components/Code.ts?");

/***/ }),

/***/ "./src/components/Game.ts":
/*!********************************!*\
  !*** ./src/components/Game.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Code */ \"./src/components/Code.ts\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ \"./src/Config.ts\");\n\n\nclass Game extends _Code__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        //?new game\n        /**\n         * handle statr game button\n         * @example\n         * crates code like [\"orange\",\"yellow\",\"blue\",\"pink\"]\n         */\n        this.startGame = () => {\n            this.startButton.removeEventListener('click', this.startGame);\n            this.startButton.style.visibility = 'hidden';\n            this.hasStarted = true;\n            this.newCode();\n        };\n        //?helping functions\n        /**\n         *   Handle cursor change for a dot\n         * @param color color of dot\n         */\n        this.selectDot = (color) => {\n            if (this.hasStarted) {\n                this.slectedDotColor = color;\n                document.body.style.cursor = `url('../assets/img/${color}.png'), auto`;\n            }\n        };\n        /**\n         * Enables selecting color\n         * @param cell Cell element\n         * @param dotNumber Number of rendered dot\n         */\n        this.putDot = (cell, dotNumber) => {\n            if (this.hasStarted && this.slectedDotColor != null) {\n                cell.style.background = `url('./assets/img/${this.slectedDotColor}.png')`;\n                document.body.style.cursor = `url('../assets/img/kursor.png'), auto`;\n                this.dotColorsArray[dotNumber] = this.slectedDotColor;\n                this.slectedDotColor = null;\n            }\n        };\n        /**\n         * check if array contains empty string\n         */\n        this.isArrayFull = () => {\n            return !this.dotColorsArray.includes('');\n        };\n        this.giveUp = () => {\n            if (this.hasStarted) {\n                this.hasStarted = !this.hasStarted;\n                alert('nie fajnie się poddawać ale masz kod patrz co sraciłeś ' +\n                    this.codeArray.join(' '));\n                setTimeout(() => {\n                    window.location.reload();\n                }, 3000);\n            }\n        };\n        this.hasStarted = false;\n        this.startButton = document.querySelector('#start');\n        this.dotColorsArray = ['', '', '', ''];\n        this.nextDotsContainer = [];\n    }\n    /**\n     * Renders all availible dots\n     */\n    renderAvailibleDots() {\n        _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colorsArray.forEach((element, counter) => {\n            let cell = document.createElement('th');\n            let dot = document.createElement('img');\n            dot.src = `./assets/img/${element}.png`;\n            cell.appendChild(dot);\n            cell.addEventListener('click', () => {\n                this.selectDot(element);\n            });\n            document\n                .querySelector(`#dots tbody tr${counter < 4 ? ':first-child' : ':nth-child(2)'}`)\n                .appendChild(cell);\n        });\n    }\n    /**\n     * Render dots of code\n     */\n    renderNextDots() {\n        let container = document.querySelector('#nextGuess tbody tr');\n        for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dotPerRow; i++) {\n            let cell = document.createElement('th');\n            //*handle cell click\n            cell.addEventListener('click', () => {\n                this.putDot(cell, i);\n            });\n            this.nextDotsContainer.push(cell);\n            container.appendChild(cell);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://kulki4/./src/components/Game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ \"./src/Config.ts\");\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Game */ \"./src/components/Game.ts\");\n\n\nclass Main extends _components_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor() {\n        super();\n        /**\n         * check anwsers\n         */\n        this.checkAnwsers = () => {\n            if (this.hasStarted && this.isArrayFull()) {\n                this.boardTableArray[this.currentRow].forEach((e, c) => {\n                    e.style.background = `url('./assets/img/${this.dotColorsArray[c]}.png')`;\n                });\n                this.nextDotsContainer.forEach((e) => (e.style.background = ''));\n                //?check for win\n                let dots = this.checkCode(this.dotColorsArray);\n                if ([...new Set(dots)].length == 1 &&\n                    [...new Set(dots)].includes('black')) {\n                    return alert('gratulacje wygranej!!!!!! zgadłeś kod');\n                }\n                else\n                    dots.map((e, c) => {\n                        this.anwsersTableArray[this.currentRow][c].style.background = `url('./assets/img/${e}.png')`;\n                    });\n                this.dotColorsArray = ['', '', '', ''];\n                //?end game\n                if (this.currentRow == _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tryNumber - 1) {\n                    alert('Koniec gry : poprawny kod to ' + this.codeArray.join(' '));\n                }\n                else {\n                    this.currentRow++;\n                }\n            }\n        };\n        //?htmlContainers\n        this.boardTable = document.querySelector('#gameTable');\n        this.boardsResultsContainer = document.querySelector('#anwsersTabe');\n        this.boardTableArray = [];\n        this.currentRow = 0;\n        this.anwsersTableArray = [];\n        this.start();\n    }\n    start() {\n        this.ceateBoadrd();\n        this.createAnwsers();\n        this.renderAvailibleDots();\n        this.renderNextDots();\n        document.querySelector('#start').addEventListener('click', this.startGame);\n        document.querySelector('#try').addEventListener('click', this.checkAnwsers);\n        document.querySelector('#giveUp').addEventListener('click', this.giveUp);\n    }\n    //? Starting methods section\n    /**\n     * Creates game board and board array\n     * @version 1.0\n     * @copyright Jakub Bryndal\n     * @void\n     * @private\n     */\n    ceateBoadrd() {\n        for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tryNumber; i++) {\n            let singleRow = document.createElement('tr');\n            this.boardTableArray[i] = [];\n            for (let cell = 0; cell < _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotPerRow; cell++) {\n                let cell = document.createElement('th');\n                singleRow.appendChild(cell);\n                this.boardTableArray[i].push(cell);\n            }\n            this.boardTable.prepend(singleRow);\n        }\n    }\n    /**\n     * renders anwsers dots\n     * @private\n     *\n     */\n    createAnwsers() {\n        for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tryNumber; i++) {\n            let singleRow = document.createElement('tr');\n            this.anwsersTableArray[i] = [];\n            for (let cell = 0; cell < _Config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dotPerRow; cell++) {\n                let cell = document.createElement('th');\n                singleRow.appendChild(cell);\n                this.anwsersTableArray[i].push(cell);\n            }\n            this.boardsResultsContainer.prepend(singleRow);\n        }\n    }\n}\nnew Main();\n\n\n//# sourceURL=webpack://kulki4/./src/index.ts?");

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