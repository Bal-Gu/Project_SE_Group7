"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    getRandom(max) {
        if (max == 6) {
            return [90, 90];
        }
        else if (max == 5) {
            return [270, 180];
        }
        else if (max == 4) {
            return [0, 90];
        }
        else if (max == 3) {
            return [0, 270];
        }
        else if (max == 2) {
            return [0, 180];
        }
        else if (max == 1) {
            return [0, 0];
        }
        else {
            return [0, 0];
        }
    }
    event() {
        return __awaiter(this, void 0, void 0, function* () {
            let self = this;
            const cube = document.getElementById('cube');
            const cube2 = document.getElementById('cube2');
            let rollButton = $("#rollButton");
            rollButton.click(function () {
                self.roll();
                rollButton.prop("disabled", true);
                $("#dices").show();
                var xRand = self.getRandom(self.first)[0];
                var yRand = self.getRandom(self.first)[1];
                var xRand2 = self.getRandom(self.second)[0];
                var yRand2 = self.getRandom(self.second)[1];
                xRand = xRand + (Math.floor(Math.random() * 3) + 1) * 360;
                yRand = yRand + (Math.floor(Math.random() * 3) + 1) * 360;
                xRand2 = xRand2 + (Math.floor(Math.random() * 3) + 1) * 360;
                yRand2 = yRand2 + (Math.floor(Math.random() * 3) + 1) * 360;
                setTimeout(function () {
                    // @ts-ignore
                    cube.style = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
                    // @ts-ignore
                    cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
                    // @ts-ignore
                    cube2.style = 'rotateX(' + xRand2 + 'deg) rotateY(' + yRand2 + 'deg)';
                    // @ts-ignore
                    cube2.style.transform = 'rotateX(' + xRand2 + 'deg) rotateY(' + yRand2 + 'deg)';
                }, 2000);
                setTimeout(function () {
                    $("#dices").hide();
                    rollButton.prop("disabled", false);
                }, 10000);
                // console.log(xRand % 360 + " " + yRand % 360);
            });
        });
    }
}
exports.Dice = Dice;
//# sourceMappingURL=Dice.js.map