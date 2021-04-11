import {Field} from "./Fields/Field";
import globals from "../globalVariable.json"
declare var nextMoveLogic;
export class Player {
    isBot : boolean;
    isGameOver:boolean;
    Money : number;
    fieldsOwned:Field[] = [];
    TurnsInPrison:number;
    hasErasmusDispense:boolean;
    currentposition:number;
    nrOfParking : number;
    nrOfBus : number;
    lastAmmountOfMoves: number
    canAuction:boolean = true;
    name:string;
    queue: number;
    ReferenceNumber: number;
    //idea for number of move possible(maybe)

    constructor(isBot: boolean ,name:string, ReferenceNumber:number/*, pawn: Pawn, Array: Property*/) {
        this.isBot = isBot;
        this.Money = 1500;
        this.hasErasmusDispense = false;
        this.currentposition = 0;
        this.isGameOver = false;
        this.TurnsInPrison = 0;
        this.nrOfBus = 0;
        this.nrOfParking = 0;
        this.name = name;
        this.ReferenceNumber = ReferenceNumber;
    }

   getName():string{
        return this.name;
   }

    canBuy(cost: number): boolean {
        return (this.Money - cost) > 0;
    }

    buying(field: Field, amount:number): void{
        this.fieldsOwned.push(field);
        this.payAmmount(amount);
        
    }

    gameOver(){
        this.isGameOver = true;
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

    totalWorth():number{
        let total = this.Money;
        for(let i = 0; i < this.fieldsOwned.length; i++){
            if(this.fieldsOwned[i].isMortgage){
                continue;
            }
            if(!this.fieldsOwned[i].renovatiosAmmount == undefined){
                //suppressed the warning because undefined is checked just above

                // @ts-ignore
                for(let j=1;this.fieldsOwned[i].renovatiosAmmount<=j;j++){
                    // @ts-ignore
                    total += this.fieldsOwned[i].renovationscosts;
                }

            }
            //mortage price
            total += this.fieldsOwned[i].initialPrice;

        }
        return total;
    }

    receive(field: Field): void{
        this.fieldsOwned.push(field);
    }

    recieveMoney(ammount: number) {
        this.Money += ammount;
    }

    payAmmount(ammount: number) {
        this.Money -= ammount;
    }
    move(moveAction:number): void{
        if(this.currentposition + moveAction >= globals.MaxNumberField){
            this.startBonus();
        }
        this.ReferenceNumber == 3 ? nextMoveLogic(this.currentposition, moveAction, "#position4"):this.ReferenceNumber == 2 ?  nextMoveLogic(this.currentposition, moveAction, "#position3") : this.ReferenceNumber == 1 ? nextMoveLogic(this.currentposition, moveAction, "#position2") : nextMoveLogic(this.currentposition, moveAction, "#position1");
        this.currentposition = (this.currentposition + moveAction) % globals.MaxNumberField;
    }

    goToErasmus(): void {
        this.currentposition = globals.Erasmus;
    }

    startBonus(): void {
        this.Money += globals.payDay;
    }



    forfeit(): void {
        this.isBot = true;
    }


}

