"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prison = void 0;
var globalVariable_json_1 = __importDefault(require("../../globalVariable.json"));
var Dice_1 = require("./Dice");
var Prison = /** @class */ (function () {
    function Prison() {
    }
    Prison.prototype.prisonEvent = function (p) {
        $(document).ready(function () {
            //hides or show the buttons
            $("#myModal").css("display", "block");
            var luckyButton = $("#luckyCard");
            if (p.hasErasmusDispense) {
                luckyButton.show();
                luckyButton.prop("disable", false);
            }
            else {
                luckyButton.css("display", "none");
                luckyButton.prop("disable", true);
            }
            var pay = $("#playGame");
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
            $("#myBtn").click(function () {
                $("#myModal").css("display", "block");
            });
            $(".close").click(function () {
                $("#myModal").css("display", "none");
            });
            // the tree buttons inside the modal
            pay.click(function () {
                p.payAmmount(globalVariable_json_1.default.ErasmusFees);
                var d = new Dice_1.Dice();
                d.roll();
                p.move(d.total());
                p.TurnsInPrison = 0;
                console.log("Playing");
                $("#myModal").css("display", "none");
                return;
            });
            $("#roleDouble").click(function () {
                var d = new Dice_1.Dice();
                d.roll();
                if (d.isdouble()) {
                    p.move(d.total());
                    p.TurnsInPrison = 0;
                    console.log("Out of erasmus");
                    $("#myModal").css("display", "none");
                    return;
                }
            });
            luckyButton.click(function () {
                var d = new Dice_1.Dice();
                d.roll();
                p.move(d.total());
                p.hasErasmusDispense = false;
                p.TurnsInPrison = 0;
                console.log("Out of prison");
                console.log("Click luckyCard");
                $("#myModal").css("display", "none");
                return;
            });
        });
    };
    return Prison;
}());
exports.Prison = Prison;
//# sourceMappingURL=Prison.js.map