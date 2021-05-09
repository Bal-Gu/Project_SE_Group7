import {Field} from "./Field";
import {Player} from "../Player";
import $ from "jquery";


export class GoToErasmus  implements Field{
    name: string = "Go To Erasmus";
    owner:Player;
    initialPrice:number=0;

    CanBuy(player: Player): boolean {
        return false;
    }

    Event(player: Player,playerList:Player[]): void {
        $("#rollButton").hide();
        player.TurnsInPrison = 1;
        player.goToErasmus();
    }

}