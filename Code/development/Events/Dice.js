"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
var globalVariable_json_1 = __importDefault(require("../../globalVariable.json"));
var Dice = /** @class */ (function () {
    function Dice() {
    }
    Dice.prototype.roll = function () {
        this.first = 1 + this.getRandomInt(globalVariable_json_1.default.DiceNumber);
        this.second = 1 + this.getRandomInt(globalVariable_json_1.default.DiceNumber);
    };
    Dice.prototype.total = function () {
        return this.first + this.second;
    };
    Dice.prototype.isdouble = function () {
        return this.first == this.second;
    };
    Dice.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    return Dice;
}());
exports.Dice = Dice;
//# sourceMappingURL=Dice.js.map