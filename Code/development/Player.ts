import { Field } from "./Fields/Field";
import {GlobalVariable} from "../globalVariable"

export class Player {
    isBot : boolean;
    Money : number;
    fieldsOwned:[Field];
    Bankrupt : boolean;
    TurnsInPrison:number;
    hasErasmusDispense:boolean;
    currentposition:number;

    

    constructor(isBot: boolean /*, pawn: Pawn, Array: Property*/) {
        this.isBot = isBot;
        this.Money = 1500;
        this.Bankrupt = false;
    }
    
    canBuy(cost:number):boolean{
        return (this.Money - cost) > 0;
    }

    buying(field : Field): void{

    }

    exchange(field: Field, player : Player): void{

    }

    receive(field: Field): void{

    }


    move(): void{

    }

    goToErasmus(): void{
        console.log(JSON.parse('{ "myString": "string", "myNumber": 4 }').);
        this.currentposition = GlobalVariable.getErasmus();
    }

    startBonus(): void{
        this.Money += 200;
    }

    isBankrupt(): boolean{
        return this.Bankrupt;
    }

    init(): void{

    }

    forfeit(): void{
        this.isBot = true;
    }

}

