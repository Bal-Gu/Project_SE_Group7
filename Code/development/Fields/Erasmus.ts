import {Field} from "./Field";

class Erasmus implements Field{
    name: string = "Erasmus";

    Event(player: Player): void {
        //TDOD Player is in prison
    }

    CanBuy(player:Player){
        return false;
    }

}