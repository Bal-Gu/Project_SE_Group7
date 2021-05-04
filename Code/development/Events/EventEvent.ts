import {Player} from "../Player";
import Event from "../../Event.json";
import $ from "jquery";
import globals from "../../globalVariable.json";
import {Restplace} from "../Fields/Restplace";

export class EventEvent {
    private pressed: boolean;



    async event(p: Player) {
        console.log(p.name+" entered Event");
        this.pressed = false;
        let finalQuizArray = Event.Events[Math.floor(Math.random() * Event.Events.length)];
        let modal = $("#EventModal");
        $("#EventText").html(finalQuizArray.Title);
        p.recieveMoney(finalQuizArray.Money);
        if(finalQuizArray.Money<0){
            let restplace:Restplace  = <Restplace>p.map[globals.ParkingNumber]
            restplace.addToPot(finalQuizArray.Money * -1);
        }
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
        $("#evnt .flip-card-inner").css("transform", "translate(0px, -280px) rotate(135deg) rotateX(180deg) scale(3)");
        modal.show();
        await this.sleep(5000);
        modal.hide();
        $("#evnt .flip-card-inner").css("transform", "translate(0) rotate(0) rotateX(0) scale(1)");
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}