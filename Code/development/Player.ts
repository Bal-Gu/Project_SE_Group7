import {Field} from "./Fields/Field";
import globals from "../globalVariable.json"
import $ from "jquery";
import {Bus} from "./Fields/Bus";
import {Parking} from "./Fields/Parking";
import {Properties} from "./Fields/Properties";
import {Colors} from "./Fields/colors";

declare var nextMoveLogic;

export class Player {
    isBot: boolean;
    isGameOver: boolean;
    Money: number;
    fieldsOwned: Field[] = [];
    TurnsInPrison: number;
    hasErasmusDispense: boolean;
    currentposition: number;
    nrOfParking: number;
    nrOfBus: number;
    lastAmmountOfMoves: number
    canAuction: boolean = true;
    name: string;
    queue: number;
    ReferenceNumber: number;
    PlayerArray: Player[];
    Color: string;
    //idea for number of move possible(maybe)
    hasFreeRent: boolean;
    map: Field[];
    stillMovingBot: boolean = false;
    nrOfMove: number = 0;
    inAuctionBot: boolean = false;

    constructor(isBot: boolean, name: string, ReferenceNumber: number/*, pawn: Pawn, Array: Property*/) {
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
        this.hasFreeRent = false;
    }

    getName(): string {
        return this.name;
    }

    ShowPlayerMoney() {
        $("#b-coins-1").text(this.PlayerArray[0].Money);
        if (this.PlayerArray.length >= 2) {
            $("#b-coins-2").text(this.PlayerArray[1].Money);
        }
        if (this.PlayerArray.length >= 3) {

            $("#b-coins-3").text(this.PlayerArray[2].Money);
        }
        if (this.PlayerArray.length >= 4) {

            $("#b-coins-4").text(this.PlayerArray[3].Money);
        }
    }


    updateFields() {
        this.nrOfBus = 0;
        this.nrOfParking = 0;
        let map = new Map<Colors, number>();
        for (let i = 0; i < Object.keys(Colors).length; i++) {
            map.set(<Colors>Object.keys(Colors)[i], 0);
        }
        for (let i = 0; i < this.fieldsOwned.length; i++) {
            if (this.fieldsOwned[i] instanceof Bus) {
                this.nrOfBus++;
            } else if (this.fieldsOwned[i] instanceof Parking) {
                this.nrOfParking++;
            } else if (this.fieldsOwned[i] instanceof Properties) {
                let color = this.fieldsOwned[i].color!;
                map.set(color, map.get(color)! + 1);
            }

        }
        for (let i = 0; i < this.fieldsOwned.length; i++) {
            let color: Colors = this.fieldsOwned[i].color!;

            let index: number = 0;
            for (let j = 0; j < Object.keys(Colors).length; j++) {
                if (<Colors>Object.keys(Colors)[j] == color) {
                    index = j;
                    break;
                }
            }
            this.updateOwnAll(globals.colors[index] == map.get(color), this.fieldsOwned[i]);
        }


    }

    updateOwnAll(owns: boolean, field: Field) {
        field.hasAll = owns;
    }

    canBuy(cost: number): boolean {
        return (this.Money - cost) > 0;
    }

    buying(field: Field, amount: number): void {
        this.fieldsOwned.push(field);
        this.payAmmount(amount);
        this.updateFields();
        this.ShowPlayerMoney();
    }

    gameOver() {
        this.isGameOver = true;
    }

    exchange(field: Field, player: Player): void {
        //check if field is owned, if yes remove from array to add to other player that asked
        for (let i = 0; i < this.fieldsOwned.length; i++) {
            if (this.fieldsOwned[i].name == field.name) {
                player.fieldsOwned.push(field);
                this.fieldsOwned = this.fieldsOwned.filter((fi) => !(fi.name == field.name));
                break;
            }
        }
        this.updateFields();
    }

    recieveDispense() {
        this.hasErasmusDispense = true;
    }

    tradeDispense(player: Player) {
        this.hasErasmusDispense = false;
        player.recieveDispense();
    }

    totalWorth(): number {
        let total = this.Money;
        for (let i = 0; i < this.fieldsOwned.length; i++) {
            if (this.fieldsOwned[i].isMortgage) {
                continue;
            }
            if (!this.fieldsOwned[i].renovatiosAmmount == undefined) {
                //suppressed the warning because undefined is checked just above

                // @ts-ignore
                for (let j = 1; this.fieldsOwned[i].renovatiosAmmount <= j; j++) {
                    // @ts-ignore
                    total += this.fieldsOwned[i].renovationscosts;
                }

            }
            //mortage price
            total += this.fieldsOwned[i].initialPrice;

        }
        return total;
    }

    receive(field: Field): void {
        this.fieldsOwned.push(field);
    }

    recieveMoney(ammount: number) {
        this.Money += ammount;
        if(isNaN(this.Money)){

            throw new Error().stack;
        }
        this.ShowPlayerMoney();
    }

    payAmmount(ammount: number) {

        this.Money -= ammount;
        if(isNaN(this.Money)){

            throw new Error().stack;
        }
        this.ShowPlayerMoney();
    }

    move(moveAction: number): void {
        if (this.currentposition + moveAction >= globals.MaxNumberField) {
            this.startBonus();
        }
        this.ReferenceNumber == 3 ? nextMoveLogic(this.currentposition, moveAction, "#position4") : this.ReferenceNumber == 2 ? nextMoveLogic(this.currentposition, moveAction, "#position3") : this.ReferenceNumber == 1 ? nextMoveLogic(this.currentposition, moveAction, "#position2") : nextMoveLogic(this.currentposition, moveAction, "#position1");
        this.currentposition = (this.currentposition + moveAction) % globals.MaxNumberField;
        this.lastAmmountOfMoves = moveAction;
        let self = this;
        setTimeout(function () {
            self.map[self.currentposition].Event(self, self.PlayerArray);
        }, moveAction * 500);

    }

    goToErasmus(): void {
        this.move(globals.MaxNumberField/2);
        this.TurnsInPrison = 1;
        this.currentposition = globals.Erasmus;
        this.Money -= globals.payDay;
    }

    startBonus(): void {
        this.Money += globals.payDay;
        this.ShowPlayerMoney();
    }

    setMap(fields: Field[]) {
        this.map = fields;
    }


    forfeit(): void {
        this.isBot = true;
    }

    //TODO while loop is buggy
    moveToNextBus() {
        let index = this.currentposition;
        while(this.currentposition-1 != index && !(this.map[index] instanceof Bus)) {
            index += index % globals.MaxNumberField;
        }
        if (this.currentposition > index) {
            this.move(globals.MaxNumberField - this.currentposition + index);
        } else {
            this.move(index - this.currentposition);
        }
    }

    goToRockhal() {
        let index = this.currentposition;
        while (!(this.map[index].name != "Rockhal")) {
            index += index % globals.MaxNumberField;
        }

    }
}

