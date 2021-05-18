import {Field} from "./Field";
import {Player} from "../Player";
import {BuyEvent} from "../Events/buying";
import {PaymentEvent} from "../Events/PaymentEvent";

export class Bus implements Field{
    name: string;
    owner:Player;
    initialPrice:number = 200;
    PriceToPay:number[] = [25,50,100,200];
    rentCostFinal: number = 0;
    isMortgage:boolean = false;

    constructor(name: string){
        this.name = name;
    }

    async Event(player: Player,playerList:Player[]): Promise<void> {

        if (player == this.owner) {
            return;
        } else if (this.owner == undefined) {
            let b: BuyEvent = new BuyEvent();
            await b.event(player,this.initialPrice,this,playerList);
        } else {
            let payment: PaymentEvent = new PaymentEvent();
            await payment.event(this.owner, player, this.rentCostFinal);
        }
        this.UpdateRentCost();
    }



    CanBuy(player: Player): boolean {
        return player.Money > this.initialPrice;
    }

    UpdateRentCost(): void{
        if(this.owner == undefined){
            this.rentCostFinal = 0;
            return;
        }
        this.rentCostFinal = this.PriceToPay[this.owner.nrOfBus-1];
    }

    CanPayRent(player:Player): boolean{
        this.UpdateRentCost();
        return player.Money > this.rentCostFinal;
    }

    PayRent(player:Player) : void{
        if(this.owner == null){
            return;
        }else if(this.CanPayRent(player) && !this.isMortgage){
            player.payAmmount(this.rentCostFinal);
        }
    }

    sellParking(playerToSellTo:Player, exchangePrice: number) : void{
        if(playerToSellTo.canBuy(exchangePrice)){
            this.owner.exchange(this, playerToSellTo);
            this.owner.recieveMoney(exchangePrice);
            playerToSellTo.payAmmount(exchangePrice);
            this.owner = playerToSellTo;
        }
    }

}