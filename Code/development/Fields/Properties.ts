import {Colors} from "./colors";
import {Player} from "../Player";
import {Field} from "./Field";
export class Properties implements Field{
    color:Colors;
    cost:number;
    owner:Player;
    doubleEmpty:boolean;
    //range of prices to pay depending on the ammount of renovations
    pricetopay:number[];
    //How many renovations there are on the property
    renovatiosAmmount:number;
    mortage:boolean;
    name: string;
    renovationscosts:number[];

    //TODO make a constructor
    constructor(color:Colors,cost:number) {
        //TODO finish constructor
    }

    setmortage():void{
        //TODO
    }
    repaymortage():void{
        //TODO
    }
    canrepaymortage():boolean{
        //TODO
        return false;
    }
    sellrenovation(times?:number){
        //TODO
    }
    buyrenovation(times?:number){
        //TODO
    }
    updateOwner(p:Player){
        //TODO
    }

    buy(p:Player,price?:number){
        //TODO
    }
    updateIndexOwned(p:Player){
        //TODO
    }

    CanBuy(player: Player): boolean {
        return true;
    }

    Event(player: Player): void {
        //TODO
    }
}