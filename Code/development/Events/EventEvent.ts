import {Player} from "../Player";
import Event from "../../Event.json";
import $ from "jquery";
import globals from "../../globalVariable.json";

export class EventEvent {
    private pressed: boolean;

    async event(p: Player) {
        this.pressed = false;
        let finalQuizArray = Event.Events[Math.floor(Math.random() * Event.Events.length)];
        let modal = $("#EventModal");
        $("#EventText").html(finalQuizArray.Title);
        p.recieveMoney(finalQuizArray.Money);
        if(finalQuizArray.Move != 0){
            p.move(finalQuizArray.Move);
        }
        switch (finalQuizArray.CardRecieved) {
            case "Out of Erasmus":
                p.hasErasmusDispense = true;
                break;
            case "Rent Free":
                p.hasFreeRent = true;
                break;
            default:
                break;
        }
        switch (finalQuizArray.GoTo){
            case 0:
                p.move(globals.MaxNumberField - p.currentposition);
                break;
            case -1:
                break;
            case -2:
                p.moveToNextBus();
                break;
            case -3:
                p.goToErasmus()
                break;
            case -4:
                p.goToRockhal()
                break;
            default:
                break;


        }
        modal.show();
    }
}