import {Field} from "./Field";
import {Player} from "../Player";


export class GoToErasmus  implements Field{
    name: string = "Go To Erasmus";
    owner:Player;
    initialPrice:number=0;

    CanBuy(player: Player): boolean {
        return false;
    }

    Event(player: Player,playerList:Player[]): void {
        player.TurnsInPrison = 1;
        player.goToErasmus();
    }

}