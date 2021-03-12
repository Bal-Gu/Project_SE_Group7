import {Field} from "./Field";
import {Player} from "../Player";


class GoToErasmus  implements Field{
    name: string = "Go To Erasmus";

    CanBuy(player: Player): boolean {
        return false;
    }

    Event(player: Player): void {
        player.TurnsInPrison = 1;
        player.goToErasmus();
    }

}