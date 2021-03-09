import {Field} from "./Field";
import {Player} from "../Player";

class Erasmus implements Field{
    name: string = "Erasmus";

    Event(player: Player): void {
        if(player.TurnsInPrison >= 1){
            //TODO Prison event
            player.TurnsInPrison++;
        }
        return;

    }

    CanBuy(player:Player){
        return false;
    }

}