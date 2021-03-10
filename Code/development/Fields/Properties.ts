import {Colors} from "./colors";
import {Player} from "../Player";
import {Field} from "./Field";
import globals from "../../globalVariable.json"

export class Properties implements Field{
    color:Colors;
    owner:Player;
    ownAllPairs:boolean;
    //range of prices to pay depending on the ammount of renovations
    pricetopay:number[];
    //How many renovations there are on the property
    renovatiosAmmount:number;
    mortage:boolean;
    name: string;
    renovationscosts:number[];


    constructor(color:Colors,pricetopay:number[],renovationscosts:number[],name:string) {
        this.color = color;
        this.pricetopay = pricetopay;
        this.ownAllPairs = false;
        this.renovatiosAmmount = 0;
        this.mortage = false;
        this.name = name;
        this.renovationscosts = renovationscosts;
    }

    /**
     * The player decides to mortage this property
     */
    setmortage():void{
        if(this.renovatiosAmmount >= 1){
            return;
        }
        this.owner.recieveMoney(this.pricetopay[0]/2);
    }

    /**
     * The owner will pay for the mortage
     */
    repaymortage():void{
        if(this.canrepaymortage()){
            this.owner.payAmmount(this.pricetopay[0]);
        }
    }

    /**
     * Can the mortage be repayed by the owner
     */
    canrepaymortage():boolean{
        return this.owner.canBuy(this.pricetopay[0]) ;
    }

    /**
     * no options will remove 1 renovation. With option + option it will remove the ammount of renovation.
     * The player will get his money here on the action.
     */
    sellrenovation(times?:number){
        if(times == undefined){
            this.owner.recieveMoney(this.pricetopay[this.renovatiosAmmount]/2);
            this.renovatiosAmmount--;
        }
        else{
            for(let i = 0 ; i < (times>this.renovatiosAmmount ? this.renovatiosAmmount : times);i++ ){
                this.owner.recieveMoney(this.pricetopay[this.renovatiosAmmount]/2)
                this.renovatiosAmmount--;
            }
        }
    }
    /**
     * The player will pay for the renovations as long as he has money.
     * @param times [opitonal] if provided the ammount of renovation will be process. If abscent there will be 1 renovation
     */
    buyrenovation(times?:number){
        if(this.renovatiosAmmount >= globals.MaxRenovations){
            return;
        }

        if(times == undefined){
            if(this.owner.canBuy(this.renovationscosts[this.renovatiosAmmount+1]))
                this.renovatiosAmmount++;
                this.owner.payAmmount(this.pricetopay[this.renovatiosAmmount]);
        }
        else{
            let min = times < globals.MaxRenovations - this.renovatiosAmmount ? times : globals.MaxRenovations-1;
            for(let i = 0 ; i < min;i++ ){
                if(this.owner.canBuy(this.renovationscosts[this.renovatiosAmmount+1])){
                    this.renovatiosAmmount++;
                    this.owner.payAmmount(this.pricetopay[this.renovatiosAmmount]);
                }
            }
        }
    }

    /**
     * Updates the owner
     * @param p the player that will be the new owner
     */
    updateOwner(p:Player){
        this.owner = p;
    }

    /**
     *
     * @param p the new player that is buying the field
     * @param price [optional] if not mentioned the price will be the default one. Only use it in case of auctions or agreed transfer.
     */
    buy(p:Player,price?:number){
            if(p.canBuy(price==undefined?  this.pricetopay[0]:price)){
                this.owner = p;
                p.payAmmount( price==undefined?  this.pricetopay[0]:price);
            }
    }


    CanBuy(player: Player): boolean {
        return true;
    }

    Event(player: Player): void {
        //TODO
    }
}