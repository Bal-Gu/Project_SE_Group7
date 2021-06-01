import {Field} from "./Field";
import {Player} from "../Player";
import {BuyEvent} from "../Events/buying";
import {PaymentEvent} from "../Events/PaymentEvent";


export class Parking implements Field{
    name: string;
    owner:Player;
    initialPrice:number = 150;
    PriceToPayMultiplier:number[] = [4,10];
    rentCostFinal: number = 0;
    isMortgage:boolean = false;
    hasAll:boolean;

    constructor(name: string){
        this.name = name;
        this.hasAll = false;
    }

    async Event(player: Player,playerList:Player[]): Promise<void> {

        //checks for an owner
        if (this.owner == undefined) {
            let buyevent = new BuyEvent;
            await buyevent.event(player, this.initialPrice, this,playerList);
        } else {
            //mortage and own owner will be ignored
            if (player === this.owner || this.isMortgage) {
                return;
            } else {
                //The player has to pay fees to the owner
                let payevent = new PaymentEvent();
                await payevent.event(this.owner, player,player.lastAmmountOfMoves*this.PriceToPayMultiplier[this.owner.nrOfParking]);
            }
        }
    }

    buy(player:Player):void{
        if(player.canBuy(this.initialPrice)){
            this.owner = player;
            player.nrOfParking++;
            player.receive(this);
            player.payAmmount(this.initialPrice);
        }

    }



    CanBuy(player: Player): boolean {
        return player.Money > this.initialPrice;
    }


}