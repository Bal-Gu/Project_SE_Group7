import {Field} from "./Field";
import {Player} from "../Player";
import {EventEvent} from "../Events/EventEvent";


export class EventField implements Field{
    initialPrice: number;
    name: string;
    owner: Player | undefined;
    MaxNumberField: number;
    Erasmus: number;

    constructor(MaxNumberField: number, Erasmus: number){
        this.MaxNumberField = MaxNumberField
        this.Erasmus = Erasmus;
    }

    CanBuy(player: Player): boolean {
        return false;
    }

    async Event(player: Player, playerList: Player[]): Promise<void> {
        await new EventEvent().event(player, this.MaxNumberField, this.Erasmus);

    }

}