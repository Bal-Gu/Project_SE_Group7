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
exports.Prison = void 0;
const globalVariable_json_1 = __importDefault(require("../../globalVariable.json"));
const Dice_1 = require("./Dice");
const jquery_1 = __importDefault(require("jquery"));
class Prison {
    constructor() {
        this.pressed = false;
    }
    prisonEvent(p) {
        return __awaiter(this, void 0, void 0, function* () {
            //hides or show the buttons
            jquery_1.default("#myModal").css("display", "block");
            let luckyButton = jquery_1.default("#luckyCard");
            if (p.hasErasmusDispense) {
                luckyButton.show();
                luckyButton.prop("disable", false);
            }
            else {
                luckyButton.css("display", "none");
                luckyButton.prop("disable", true);
            }
            let pay = jquery_1.default("#playGame");
            if (p.canBuy(globalVariable_json_1.default.ErasmusFees)) {
                pay.show();
                pay.prop("disable", false);
            }
            else {
                pay.css("display", "none");
                pay.prop("disable", true);
                if (p.TurnsInPrison == globalVariable_json_1.default.MaxTurnInErasmus) {
                    p.gameOver();
                    return;
                }
            }
            let modal = document.getElementById("myModal");
            window.onclick = function (event) {
                if (event.target == modal && modal != undefined) {
                    modal.style.display = "none";
                }
            };
            jquery_1.default("#myBtn").click(function () {
                jquery_1.default("#myModal").css("display", "block");
            });
            jquery_1.default(".close").click(function () {
                //Choses one action automaticaly
                //If he can't roll then check if he can get out of erasmus
                if (p.TurnsInPrison == globalVariable_json_1.default.MaxTurnInErasmus) {
                    if (p.canBuy(globalVariable_json_1.default.ErasmusFees)) {
                        p.payAmmount(globalVariable_json_1.default.ErasmusFees);
                        self.outOfPrison(p);
                    }
                    else {
                        self.pressed = false;
                        jquery_1.default("#myModal").css("display", "none");
                        p.gameOver();
                    }
                }
                else {
                    self.outRollDouble(p);
                }
            });
            // the tree buttons inside the modal
            let self = this;
            pay.click(function () {
                p.payAmmount(globalVariable_json_1.default.ErasmusFees);
                self.outOfPrison(p);
            });
            jquery_1.default("#roleDouble").click(function () {
                self.outRollDouble(p);
            });
            luckyButton.click(function () {
                self.outOfPrison(p);
            });
            yield this.wait();
        });
    }
    ;
    wait() {
        return __awaiter(this, void 0, void 0, function* () {
            while (!this.pressed) {
                yield new Promise(r => setTimeout(r, 2000));
                console.log(this.pressed);
            }
        });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    outOfPrison(p) {
        let d = new Dice_1.Dice();
        d.roll();
        p.move(d.total());
        p.TurnsInPrison = 0;
        console.log("Paying");
        jquery_1.default("#myModal").css("display", "none");
        this.pressed = true;
    }
    outRollDouble(p) {
        let d = new Dice_1.Dice();
        d.roll();
        if (d.isdouble()) {
            p.move(d.total());
            p.TurnsInPrison = 0;
            console.log("Out of erasmus");
            jquery_1.default("#myModal").css("display", "none");
            this.pressed = true;
        }
    }
}
exports.Prison = Prison;
//# sourceMappingURL=Prison.js.map