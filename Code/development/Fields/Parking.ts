import {Field} from "./Field";
import {Player} from "../Player";
import {BuyEvent} from "../Events/buying";


class Parking implements Field{
    name: string;
    owner:Player;
    initialPrice:number = 150;
    PriceToPayMultiplier:number[] = [4,10];
    rentCostFinal: number = 0;
    isMortgage:boolean = false;

    constructor(name: string){
        this.name = name;
    }

    async Event(player: Player): Promise<void> {

        if (player == this.owner) {
            return;
        } else if (this.owner == undefined) {
            let b: BuyEvent = new BuyEvent();
            await b.event(player,this.initialPrice,this);
        }
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

    setMortgage(): void{
        this.owner.recieveMoney(75);
        this.isMortgage = true;
    }

    repayMortgage():void{
        if(this.canRepayMortgage()){
            this.owner.payAmmount(75 * 1.10);
            this.isMortgage = false;
        }
        //TODO add the payements of the player.
    }

    canRepayMortgage(): boolean {
        return this.owner.canBuy(75 * 1.10);
    }


    CanBuy(player: Player): boolean {
        return player.Money > this.initialPrice;
    }

    UpdateRentCost(player: Player, rentDice: number): void{
        this.rentCostFinal = rentDice * this.PriceToPayMultiplier[this.owner.nrOfParking-1];
    }

    CanPayRent(player:Player, rentDice:number): boolean{
        this.UpdateRentCost(player, rentDice);
        return player.Money > this.rentCostFinal;
    }

    PayRent(player:Player, rentDice: number) : void{
        if(this.owner == null){
            return;
        }else if(this.CanPayRent(player, rentDice) && !this.isMortgage){
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