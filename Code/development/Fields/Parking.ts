import {Field} from "./Field";
import {Player} from "../Player";


class Parking implements Field{
    name: string = "Parking";
    owner:Player;
    initialPrice:number = 20;
    PriceToPayMultiplier:number[] = [1,2.5];
    priceIndex:number = 0;
    isMortgage:boolean = false;
    Event(player: Player): void {
        //TODO Player pays the price to the player  that owns this field
    }

    buy(player:Player):void{

    }

    repayMortgage():void{
        if(this.owner == null){
            return;
        }
        //TODO add the payements of the player.
    }

    CanBuy(player: Player): boolean {
        //TODO ones player has been implemented.
        return false;
    }

}