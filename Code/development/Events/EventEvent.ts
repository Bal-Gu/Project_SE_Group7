import {Player} from "../Player";
import Event from "../../Event.json";
import $ from "jquery";

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
        modal.show();
    }
}