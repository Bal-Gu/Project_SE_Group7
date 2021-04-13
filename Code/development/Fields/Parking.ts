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

    UpdateFields(){

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