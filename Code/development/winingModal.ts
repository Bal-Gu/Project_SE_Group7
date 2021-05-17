import $ from "jquery";
import {Player} from "./Player";


export class ModalWinning {
    winingModal(p: String,lang: String) {
        $("#winingModal").show()

        let name = $("#winnerName");
        switch(lang){
            case "FR":
                name.html(p +" a gagné la partie.");
                break;
            case "DE":
                name.html(p +" hat das Spiel gewonnen.");
                break;
            case "PT":
                name.html(p +" venceu o jogo.");
                break;
            case "ENG":
                name.html(p +" has won the game.");
                break;
            case "":
                name.html(p +" has won the game.");
                break;
            case "LUX":
                name.html(p +" heut Spill gewonnen.");
                break;
        }
    }

}