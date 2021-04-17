import {Field} from "./Field";
import {Player} from "../Player";
import {Mortage} from "../Events/mortage"
import globals from "../../globalVariable.json";

export class Tax implements Field{
    owner:Player;
    name: string;
    amountToPay = globals.amountToPayBuyTax;
    initialPrice: number = 0;

    constructor(name:string){
        this.name = name;
    }

    CanPayTax(player: Player): boolean{
        if(player.currentposition == 4){
            return player.Money >= this.amountToPay[1];
        }else{
            return player.Money >= this.amountToPay[0];
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

    async Event(player: Player,playerList:Player[]): Promise<void> {
        if (this.CanPayTax(player)) {
            this.PayTax(player);
        } else {
            let mortage = new Mortage();
            player.payAmmount(player.currentposition == 4?this.amountToPay[1]:this.amountToPay[0]);
            await mortage.event(player);
        }
    }


}