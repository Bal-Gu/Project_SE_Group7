import {Player} from "../Player";
import Event from "../../Event.json";
import EventDE from "../../EventDE.json";
import EventFR from "../../EventFR.json";
import EventPR from "../../EventPR.json";
import EventLUX from "../../EventLUX.json";

import $ from "jquery";
import globals from "../../globalVariable.json";
import {Restplace} from "../Fields/Restplace";
import {Mortage} from "./mortage";

export class EventEvent {
    private pressed: boolean;
    private Event:{Events: {Title: string, Money: number, Move: number, CardRecieved: string, GoTo: number}[]};
    private MaxNumberField: number;
    private Erasmus: number;

    async event(p: Player, MaxNumberField:number, Erasmus: number) {
        this.MaxNumberField = MaxNumberField;
        this.Erasmus = Erasmus;

        switch (p.language) {
            case "LUX":
                this.Event = EventLUX;
                break;
            case "FR":
                this.Event = EventFR;
                break;
            case "PR":
                this.Event = EventPR;
                break;
            case "":
                this.Event = Event;
                break;
            case "DE":
                this.Event = EventDE;
                break;
            default:
                this.Event = Event;

        }
        this.pressed = false;
        let finalQuizArray = this.Event.Events[Math.floor(Math.random() * this.Event.Events.length)];
        let modal = $("#EventModal");
        $("#EventText").html(finalQuizArray.Title);
        p.recieveMoney(finalQuizArray.Money);
        if(p.Money < 0){
            await new Mortage().event(p);
        }
        if(finalQuizArray.Money<0){
            let restplace:Restplace  = <Restplace>p.map[globals.ParkingNumber]
            restplace.addToPot(finalQuizArray.Money * -1);
        }
        if(finalQuizArray.Move != 0){
            if(p.isBot){
                p.stillMovingBot = true;
                p.nrOfMove = finalQuizArray.Move;
            }else if(!p.isBot){
                p.move(finalQuizArray.Move);
            }
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
                if(p.isBot){
                    p.stillMovingBot = true;
                    p.nrOfMove = this.MaxNumberField - p.currentposition;
                }else{
                    p.move(this.MaxNumberField - p.currentposition);
                }
                break;
            case -1:
                break;
            case -2:
                p.moveToNextBus();
                break;
            case -3:
                $("#rollButton").hide();
                p.TurnsInPrison = 1;
                if (p.currentposition > this.MaxNumberField/4) {
                    if(p.isBot){
                        p.stillMovingBot = true;
                        p.nrOfMove = this.MaxNumberField - p.currentposition + (this.MaxNumberField/4);
                    }else{
                        p.move(this.MaxNumberField - p.currentposition + (this.MaxNumberField/4));
                    }
                } else {
                    if(p.isBot){
                        p.stillMovingBot = true;
                        p.nrOfMove = (this.MaxNumberField/4) - p.currentposition;
                    }else{
                        p.move((this.MaxNumberField/4) - p.currentposition);
                    }
                }
                p.currentposition = this.Erasmus;
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