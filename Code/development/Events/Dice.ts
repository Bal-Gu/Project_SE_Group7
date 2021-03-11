import globals from "../../globalVariable.json";

export class Dice {
    first:number;
    second:number;
    roll(){
        this.first = 1+this.getRandomInt(globals.DiceNumber);
        this.second = 1+this.getRandomInt(globals.DiceNumber);
    }
    total():number{
        return this.first + this.second;
    }
    isdouble():boolean{
        return this.first == this.second;
    }
    getRandomInt(max:number):number {
        return Math.floor(Math.random() * Math.floor(max));
    }
}