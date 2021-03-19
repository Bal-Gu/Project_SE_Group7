import {Field} from "./Field";
import {Player} from "../Player";

class Tax implements Field{
    name: string;
    amountToPay: number[] = [100,200];

    constructor(name:string){
        this.name = name;
    }

    CanPayTax(player: Player): boolean{
        if(player.currentposition == 4){
            return player.Money > this.amountToPay[1];
        }else{
            return player.Money > this.amountToPay[0];
        }
    }

    PayTax(player: Player): void{
        if(this.CanPayTax(player)){
            if(player.currentposition == 4){
                player.payAmmount(this.amountToPay[1]);
            }else{
                player.payAmmount(this.amountToPay[0]);
            }
        }
    }

    CanBuy(player: Player): boolean {
        return false;
    }

    Event(player: Player): void {
    }

}