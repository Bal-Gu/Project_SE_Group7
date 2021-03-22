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

    async Event(player: Player): Promise<void> {
        //TODO Player pays the price to the player  that owns this field
        //TODO if there is no owner pay buy event
        //TODO if player can't pay enter mortage event
        if (player == this.owner) {
            return;
        } else if (this.owner == undefined) {
            let b: BuyEvent = new BuyEvent();
            await b.event(player,this.initialPrice,this);
            player.nrOfBus += 1;
            this.UpdateRentCost(player);
        } else {
            let payment: PaymentEvent = new PaymentEvent();
            await payment.event(this.owner, player, this.rentCostFinal);
        }

    }

    buy(player:Player):void{
        if(player.canBuy(this.initialPrice)){
            this.owner = player;
            player.nrOfBus++;
            player.receive(this);
            player.payAmmount(this.initialPrice);
        }

    }

    setMortgage(): void{
        this.owner.recieveMoney(100);
        this.isMortgage = true;
    }

    repayMortgage():void{
        if(this.canRepayMortgage()){
            this.owner.payAmmount(100 * 1.10);
            this.isMortgage = false;
        }
    }

    canRepayMortgage(): boolean {
        return this.owner.canBuy(100 * 1.10);
    }


    CanBuy(player: Player): boolean {
        return player.Money > this.initialPrice;
    }

    UpdateRentCost(player: Player): void{
        this.rentCostFinal = this.PriceToPay[this.owner.nrOfBus-1];
    }

    CanPayRent(player:Player): boolean{
        this.UpdateRentCost(player);
        return player.Money > this.rentCostFinal;
    }

    PayRent(player:Player) : void{
        if(this.owner == null){
            return;
        }else if(this.CanPayRent(player) && this.isMortgage == false){
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