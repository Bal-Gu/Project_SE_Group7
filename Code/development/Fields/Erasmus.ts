import {Field} from "./Field";
import {Player} from "../Player";
import {Prison} from "../Events/Prison"

class Erasmus implements Field{
    name: string = "Erasmus";
    owner:Player;
    initialPrice: number = 0;

    Event(player: Player): void {
        if(player.TurnsInPrison >= 1){
            let erasmus:Prison =  new Prison();
            erasmus.prisonEvent(player);
            player.TurnsInPrison++;
        }
        return;

    }

    CanBuy(player:Player){
        return false;
    }



}