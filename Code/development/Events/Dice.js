"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
const globalVariable_json_1 = __importDefault(require("../../globalVariable.json"));
class Dice {
    roll() {
        this.first = 1 + this.getRandomInt(globalVariable_json_1.default.DiceNumber);
        this.second = 1 + this.getRandomInt(globalVariable_json_1.default.DiceNumber);
    }
    total() {
        return this.first + this.second;
    }
    isdouble() {
        return this.first == this.second;
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}
exports.Dice = Dice;
//# sourceMappingURL=Dice.js.map