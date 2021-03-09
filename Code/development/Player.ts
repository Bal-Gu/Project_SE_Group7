import { Field } from "./Fields/Field";

class Player {
    isBot : boolean;
    Money : number;
    //Array[Property]
    Bankrupt : boolean;

    

    constructor(isBot: boolean /*, pawn: Pawn, Array: Property*/) {
        this.isBot = isBot;
        this.Money = 1500;
        this.Bankrupt = false;
    }
    
    canBuy(cost:number):boolean{
        if ((this.Money-cost) > 0){
            return true;
        }
        return false;
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

    }

    startBonus(): void{

    }

    isBankrupt(): boolean{
        return this.Bankrupt;
    }

    init(): void{

    }

    forfeit(): void{
        
    }

}

