import {Player} from "../Player";
import {Mortage} from "./mortage";

export class PaymentEvent {
    /**
     * PAYS THE OWNER OTHERWISE IT ENTERS THE MORTGAGE EVENT
     * NOTE THE CALLER CLASS HAS TO MAKE SURE THAT THE FIELD ISN'T IN MORTGAGE POSITION
     * @param owner the player who owns the field
     * @param payer the player that needs to pay the owner
     * @param price the price that payer has to pay.
     */
    async event(owner:Player,payer:Player,price:number){
        if(owner === payer){
            return;
        }
        if(price <= 0){
            return;
        }
        if(payer.hasFreeRent){
            payer.hasFreeRent = false;
            return;
        }
        if(payer.canBuy(price)){
            payer.payAmmount(price)
        }
        else{
            //otherwise pay but mortage has to get even otherwise it's game over for the player.
            let mortage = new Mortage();
            payer.payAmmount(price);
            await mortage.event(payer);
        }
    }
}