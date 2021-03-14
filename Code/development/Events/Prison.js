"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prison = void 0;
const globalVariable_json_1 = __importDefault(require("../../globalVariable.json"));
const Dice_1 = require("./Dice");
const jquery_1 = __importDefault(require("jquery"));
class Prison {
    prisonEvent(p) {
        var iscomplete = false;
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
        if (p.canBuy(globalVariable_json_1.default.PrisonCost)) {
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
        var modal = document.getElementById("myModal");
        window.onclick = function (event) {
            if (event.target == modal && modal != undefined) {
                modal.style.display = "none";
            }
        };
        jquery_1.default("#myBtn").click(function () {
            jquery_1.default("#myModal").css("display", "block");
        });
        jquery_1.default(".close").click(function () {
            jquery_1.default("#myModal").css("display", "none");
        });
        // the tree buttons inside the modal
        pay.click(function () {
            p.payAmmount(globalVariable_json_1.default.ErasmusFees);
            let d = new Dice_1.Dice();
            d.roll();
            p.move(d.total());
            p.TurnsInPrison = 0;
            console.log("Playing");
            jquery_1.default("#myModal").css("display", "none");
            iscomplete = true;
        });
        jquery_1.default("#roleDouble").click(function () {
            let d = new Dice_1.Dice();
            d.roll();
            if (d.isdouble()) {
                p.move(d.total());
                p.TurnsInPrison = 0;
                console.log("Out of erasmus");
                jquery_1.default("#myModal").css("display", "none");
                iscomplete = true;
            }
        });
        luckyButton.click(function () {
            let d = new Dice_1.Dice();
            d.roll();
            p.move(d.total());
            p.hasErasmusDispense = false;
            p.TurnsInPrison = 0;
            console.log("Out of prison");
            jquery_1.default("#myModal").css("display", "none");
            iscomplete = true;
        });
        while (!iscomplete) {
            setTimeout(() => {
            }, 5000);
        }
    }
    ;
}
exports.Prison = Prison;
//# sourceMappingURL=Prison.js.map