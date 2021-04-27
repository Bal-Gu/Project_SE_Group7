import {Player} from "../Player";
import globals from "../../globalVariable.json";
import {Dice} from "./Dice";
import $ from 'jquery';

export class Prison {
    pressed: boolean = false;

    async prisonEvent(p: Player) {
        console.log(p.name+" entered Prison");


        //hides or show the buttons
        let modal = $("#startGameModal");
        modal.css("display", "block");
        $("#startGameModal .modal-content .modal-header h2").html(p.name + "has "+(3-p.TurnsInPrison) + " in prison left");
        let luckyButton = $("#luckyCard");
        if (p.hasErasmusDispense) {
            luckyButton.show();
            luckyButton.prop("disable", false);
        } else {
            luckyButton.css("display", "none");
            luckyButton.prop("disable", true);
        }
        let pay = $("#playGame");
        if (p.canBuy(globals.ErasmusFees)) {
            pay.show();
            pay.prop("disable", false);
        } else {
            pay.css("display", "none");
            pay.prop("disable", true);
            if (p.TurnsInPrison == globals.MaxTurnInErasmus) {
                p.gameOver();
                return;
            }
        }




        $(".close").click(function () {
            //Choses one action automaticaly
            //If he can't roll then check if he can get out of erasmus
            if (p.TurnsInPrison == globals.MaxTurnInErasmus) {
                if (p.canBuy(globals.ErasmusFees)) {
                    p.payAmmount(globals.ErasmusFees);
                    self.outOfPrison(p);
                }else{
                    self.pressed = false;
                    $("#myModal").css("display", "none");
                    p.gameOver();
                }
            }else{
                self.outRollDouble(p);
            }
        });


        // the tree buttons inside the modal
        let self = this;
        pay.click(function () {
            p.payAmmount(globals.ErasmusFees);
            self.outOfPrison(p);
        });


        $("#roleDouble").click(function () {
            self.outRollDouble(p)
            self.pressed =  true;
        });

        luckyButton.click(function () {
            self.outOfPrison(p);
            self.pressed =  true;
        });
        await this.wait();
        modal.hide();
    };

    async wait() {

        while (!this.pressed) {
            await new Promise(r => setTimeout(r, 2000));
            console.log(this.pressed);
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    outOfPrison(p: Player) {
        let d: Dice = new Dice();
        d.roll(p.ReferenceNumber, p.name);
        p.move(d.total());
        p.TurnsInPrison = 0;
        console.log("Paying");
        $("#myModal").css("display", "none");
        this.pressed = true;
    }
    outRollDouble(p:Player){
        let d: Dice = new Dice();
        d.roll(p.ReferenceNumber, p.name);
        p.TurnsInPrison++;

        if (d.isdouble()) {
            p.move(d.total());
            p.TurnsInPrison = 0;
            console.log("Out of erasmus");
            $("#myModal").css("display", "none");
            this.pressed = true;


        }
    }

}