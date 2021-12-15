"use strict";
exports.__esModule = true;
var Config_1 = require("../Config");
var Code = /** @class */ (function () {
    function Code() {
        var _this = this;
        /**
         * Creates new random code
         * @Code
         * @void
         */
        this.newCode = function () {
            _this.codeArray = [];
            for (var i = 0; i < Config_1["default"].dotPerRow; i++) {
                _this.codeArray.push(Config_1["default"].colorsArray[Math.floor(Math.random() * 8)]);
            }
            console.log(_this.codeArray);
        };
        /**
         *
         * @param codeToCheck Array of code that has to be checked
         */
        this.checkCode = function (codeToCheck) {
            var toReturn = [];
            var includedColors = [];
            codeToCheck.forEach(function (e, c) {
                if (_this.codeArray[c] == e) {
                    toReturn.push('black');
                }
                else {
                    if (_this.codeArray.includes(e) && !includedColors.includes(e)) {
                        includedColors.push(e);
                        toReturn.push('white');
                    }
                }
            });
            return toReturn.sort();
        };
        this.codeArray = [];
    }
    return Code;
}());
exports["default"] = Code;
