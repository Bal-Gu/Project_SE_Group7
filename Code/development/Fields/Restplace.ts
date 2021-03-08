import {Field} from "./Field";

class Parking implements Field{
    name: string = "Restplace";
    pot:number = 0;


    Event(player: Player): void {
        //TODO Player gets the pot
    }

    addToPot(amount:number):void{
        if(amount > 0){
           this.pot += amount;
        }
    }
    CanBuy(player: Player): boolean {
        return false;
    }

}