import {Player} from "../Player";
import globals from "../../globalVariable.json";
import {Dice} from "./Dice";


export class Prison {

    prisonEvent(p: Player) {
        $(document).ready(function () {
            //hides or show the buttons
            let luckyButton = $("#luckyCard");
            if (p.hasErasmusDispense) {
                luckyButton.show();
                luckyButton.prop("disable", true);
            } else {
                luckyButton.css("display", "none");
                luckyButton.prop("disable", false);
            }
            let pay = $("#playGame");
            if (p.canBuy(globals.PrisonCost)) {
                pay.show();
                pay.prop("disable", true);
            } else {
                pay.css("display", "none");
                pay.prop("disable", false);
                if (p.TurnsInPrison == globals.MaxTurnInErasmus) {
                    p.gameOver();
                    return;
                }
            }


            var modal = document.getElementById("myModal");

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            $("#myBtn").click(function () {
                $("#myModal").css("display", "block");
            });

            $(".close").click(function () {
                $("#myModal").css("display", "none");
            });


            // the tree buttons inside the modal
            pay.click(function () {
                p.payAmmount(globals.ErasmusFees);
                let d: Dice = new Dice();
                d.roll();
                p.move(d.total());
                p.TurnsInPrison = 0;
                console.log("Playing");
                $("#myModal").css("display", "none");
                return;
            });

            $("#roleDouble").click(function () {
                let d: Dice = new Dice();
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
                let d: Dice = new Dice();
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

    }
}