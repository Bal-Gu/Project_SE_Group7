import {Field} from "./Field";
import {Player} from "../Player";


class Parking implements Field{
    name: string = "Parking";
    owner:Player;
    initialPrice:number = 150;
    PriceToPayMultiplier:number[] = [4,10];
    rentCostFinal: number = 0;
    priceIndex:number = 0;
    isMortgage:boolean = false;
    Event(player: Player): void {
        //TODO Player pays the price to the player  that owns this field
    }

    buy(player:Player):void{
        if(player.canBuy(this.initialPrice)){
            this.owner = player;
            player.nrOfParking++;
            player.receive(this);
            player.payAmmount(this.initialPrice);
        }

    }

    repayMortgage():void{
        if(this.owner == null){
            return;
        }
        //TODO add the payements of the player.
    }

    CanBuy(player: Player): boolean {
        return player.Money > this.initialPrice;
    }

    UpdateRentCost(player: Player, rentDice: number): void{
        this.rentCostFinal = rentDice * this.PriceToPayMultiplier[this.owner.nrOfParking--];
    }

    CanPayRent(player:Player, rentDice:number): boolean{
        this.UpdateRentCost(player, rentDice);
        return player.Money > this.rentCostFinal;
    }

    PayRent(player:Player, rentDice: number) : void{
        if(this.CanPayRent(player, rentDice)){
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