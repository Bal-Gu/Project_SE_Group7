import {Field} from "./Field";
import {Player} from "../Player";


class GoToErasmus  implements Field{
    name: string = "Go To Erasmus";
    owner:Player;
    initialPrice:number=0;

    CanBuy(player: Player): boolean {
        return false;
    }

    Event(player: Player): void {
        player.TurnsInPrison = 1;
        player.goToErasmus();
    }

}