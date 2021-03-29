import {Player} from "../Player";

export class Mortage {
    async event(p:Player,toPay:number){
        let modal = $("#MortageModal");
        if(p.totalWorth() < toPay){
            p.gameOver();
            return;
        }

        modal.show();
    }
}