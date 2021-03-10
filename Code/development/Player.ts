import { Field } from "./Fields/Field";
import {Config} from "../Config"

export class Player {
    isBot : boolean;
    Money : number;
    fieldsOwned:Field[];
    Bankrupt : boolean;
    TurnsInPrison:number;
    hasErasmusDispense:boolean;
    currentposition:number;

    

    constructor(isBot: boolean /*, pawn: Pawn, Array: Property*/) {
        this.isBot = isBot;
        this.Money = 1500;
        this.Bankrupt = false;
        this.hasErasmusDispense = false;
        this.currentposition = 0;
    }
    
    canBuy(cost:number):boolean{
        return (this.Money - cost) > 0;
    }

    buying(field: Field, amount:number): void{
        
        
    }

    exchange(field: Field, player : Player): void{
        //check if field is owned, if yes remove from array to add to other player that asked
        for(let i = 0; i < this.fieldsOwned.length; i++){
            if(this.fieldsOwned[i].name == field.name){
                player.fieldsOwned.push(field);
                this.fieldsOwned = this.fieldsOwned.filter(ownedfield => this.fieldsOwned[i].name != field.name)
            }
        }
    }

    receive(field: Field): void{
        this.fieldsOwned.push(field);
    }


    move(moveAction:number): void{
        this.currentposition += moveAction;
    }

    goToErasmus(): void{
        let obj:Config= JSON.parse("../globalVariable.json");
        this.currentposition = obj.Erasmus;
    }

    startBonus(): void{
        this.Money += 200;
    }

    isBankrupt(): boolean{
        return this.Bankrupt;
    }


    forfeit(): void{
        this.isBot = true;
    }

}

