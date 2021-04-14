import {Colors} from "./colors";
import {Player} from "../Player";
import {Field} from "./Field";
import globals from "../../globalVariable.json"
import {BuyEvent} from "../Events/buying";
import {PaymentEvent} from "../Events/PaymentEvent";

export class Properties implements Field{
    color:Colors;
    owner:Player;
    ownAllPairs:boolean;
    initialPrice:number;
    //range of prices to pay depending on the ammount of renovations
    pricetopay:number[];
    //How many renovations there are on the property
    renovatiosAmmount:number;
    isMortgage:boolean;
    name: string;
    renovationscosts:number;
    hasAll:boolean;



    constructor(color:Colors,pricetopay:number[],renovationscosts:number,name:string,initialprice:number) {
        this.initialPrice = initialprice;
        this.color = <Colors> Object.values(Colors)[Object.keys(Colors).indexOf(color)];
        this.pricetopay = pricetopay;
        this.ownAllPairs = false;
        this.renovatiosAmmount = 0;
        this.isMortgage = false;
        this.name = name;
        this.renovationscosts = renovationscosts;
        this.hasAll = false;
        let buyevent = new BuyEvent();
    }


    /**
     *
     * Can Buy this propertie
     * Returns true since the player can buy this field
     */
    CanBuy(): boolean {
        return true;
    }

    /**
     *
     * @param player The player landing on the Event field
     * @param playerList The list of players that are in the game
     * @constructor returns a promise to assure the synchronisity and still using JQuerrys that are asynchronus by default
     */
    async Event(player: Player,playerList:Player[]): Promise<void> {
        //checks for an owner
        if (this.owner == undefined) {
            let buyevent = new BuyEvent;
            //create a new buy event
            await buyevent.event(player, this.initialPrice, this,playerList);
        } else {
            //mortage and own owner will be ignored
            if (player === this.owner || this.isMortgage) {
                return;
            } else {
                //The player has to pay fees to the owner
                let payevent = new PaymentEvent();
                await payevent.event(this.owner, player,this.cost());
            }
        }
    }

    /**
     * Calculates the ammount a player has to pay when landing on this field.
     */
    cost():number {
        if(this.ownAllPairs && this.renovatiosAmmount == 0){
            return this.pricetopay[0] *2;
        }
        return this.pricetopay[this.renovatiosAmmount];
    }
}