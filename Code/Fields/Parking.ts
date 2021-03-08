import {Field} from "./Field";

class Parking implements Field{
    name: string = "Parking";
    owner:Player = null;
    initialPrice:number = 20;
    PriceToPayMultiplier:number[] = [1,2.5];
    priceIndex:number = 0;

    Event(player: Player): void {
        //TDOD Player pays the price to the player  that owns this field
    }

}