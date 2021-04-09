import {Player} from "./Player";
import {Auction} from "./Events/Auction";
import { PlayerSelection} from "./PlayerSelection";

import {Restplace} from "./Fields/Restplace";
import {Mortage} from "./Events/mortage";
import {Properties} from "./Fields/Properties";
import {Colors} from "./Fields/colors";
import {BuyEvent} from "./Events/buying";
import {Bus} from "./Fields/Bus";
import {Parking} from "./Fields/Parking"
import {Field} from "./Fields/Field";
import {Dice} from "./Events/Dice";
import {Erasmus} from "./Fields/Erasmus";
import {Tax} from "./Fields/Tax"
import {EventField} from "./Fields/EventField";
import {QuizField} from "./Fields/QuizField";
import {Idle} from "./Fields/Idle";
import {GoToErasmus} from "./Fields/GoToErasmus";
import {RepayMortgage} from "./Events/RepayMortgage";
import {setMortgage} from "./Events/SetMortgage";
import {Trade} from "./Events/Trade";

export class main {
    PlayerArray: Player[] = [];
    dice:Dice = new Dice();
    WinCondition: number;
    RoundNumber: number;
    ReferencePlayer: Player;
    FieldArray: Field[];
    ConseqDoubles: number = 0;
    GameEnded: boolean = false;
    TurnEnded: boolean = false;

    async main() {
        this.dice.event();
        this.EndTurnButton();
        this.InitializePlayers();
        this.InitializeQueue();
        while (!this.GameEnded) {
            await this.EndOfATurn();
            this.NextTurn();
            /*this.PlayerArray.forEach(function (item) {
                if (item.Money >= this.WinCondition) {
                    this.GameEnded = true;
                }
            })*/
        }
    }

    async EndTurnButton(){
        let EndButton = $("#endTurn");
        let self = this;
        EndButton.click(function(){
            console.log("turn ended");
            self.TurnEnded = true;
        });
    }

    //Will wait for a player to play its turn
    async EndOfATurn(){
        while (!this.TurnEnded) {
            await new Promise(r => setTimeout(r, 500));
            console.log("waiting");
        }
    }

    InitializeQueue(): void{
        for(let i = 0; i < this.PlayerArray.length; i++){
            this.dice.roll();
            this.PlayerArray[i].queue = this.dice.total();
        }
        let n = this.PlayerArray.length;
        //Bubble Sort, if the queue number between two players is the same, it won't change on purpose
        for(let i = 0; i < n-1; i++){
            for(let y = 0; y < n-i-1; y++){
                if(this.PlayerArray[y].queue > this.PlayerArray[y+1].queue){
                    let temp = this.PlayerArray[y];
                    this.PlayerArray[y] = this.PlayerArray[y+1];
                    this.PlayerArray[y+1] = temp;
                }
            }
        }
    }

    NextTurn(): void{
        let temp = this.PlayerArray[0];
        for(let i = 0; i < this.PlayerArray.length-1; i++){
            this.PlayerArray[i] = this.PlayerArray[i+1];
        }
        this.PlayerArray[3] = temp;
        this.ReferencePlayer = this.PlayerArray[0];
        this.TurnEnded = false;
    }

    InitializeGameLength(n: number): void {
        this.WinCondition = (n == 1) ? 3000 : (n == 2) ? 4000 : 5000;
    }

    async InitializePlayers(){
        let ps: PlayerSelection = new PlayerSelection();
        ps.event();
        while(!ps.StartTheGamePressed){
            await new Promise(r => setTimeout(r, 500));
        }
        ps.initializePlayers();
        this.PlayerArray = ps.getPlayers();
    }

    InitializeFieldArray(): void{
        this.FieldArray = [];
        let propertiesFile = require('../properties.json');
        let a, b, c, d;
        a = b = c = 0;

        for(let i = 0; i < 40; i++){
            if(i == 0 || i == 10){
                let idle:Idle = new Idle();
                this.FieldArray.push(idle);
            }
            else if(i == 20){
                let restplace:Restplace = new Restplace();
                this.FieldArray.push(restplace);
            }
            else if(i == 30){
                let gotoerasmus:GoToErasmus = new GoToErasmus();
                this.FieldArray.push(gotoerasmus);
            }
            else if(i == 5 || i == 15 || i == 25 || i == 35){
                let station = propertiesFile.stations[a];
                let b:Bus = new Bus(station.name);
                this.FieldArray.push(b);
                a++;
            }
            else if(i == 12 || i == 28){
                let parking =  propertiesFile.parkings[b];
                let pa:Parking = new Parking(parking.name);
                this.FieldArray.push(pa);
                b++;
            }
            else if(i == 4 || i == 38) {
                switch(i){
                    case 4:
                        let luxtax: Tax = new Tax("Luxury Tax");
                        this.FieldArray.push(luxtax);
                        break;
                    case 38:
                        let inctax: Tax = new Tax("Income Tax");
                        this.FieldArray.push(inctax);
                        break;
                }
            }
            else if(i == 2 || i == 17 || i == 33){
                let eventfield:EventField = new EventField();
                this.FieldArray.push(eventfield);
            }
            else if(i == 7 || i == 22 || i == 36){
                let quizfield:QuizField = new QuizField();
                this.FieldArray.push(quizfield);
            }
            else {
                let prop = propertiesFile.properties[c];
                let p: Properties = new Properties(prop.color, prop.pricetopay, prop.renovationscosts, prop.name, prop.initialPrice);
                this.FieldArray.push(p);
                c++;
            }
        }

    }

    SaveGameState(n: number, p: Player):void{

    }

    async MakePlayerTurn(p: Player): Promise<void>{
        let erasmus = new Erasmus()
        let d: Dice = new Dice();
        await d.roll()
        let double = d.isdouble();
        let n = d.total();


        if (p.TurnsInPrison > 0){
            await erasmus.Event(p, this.PlayerArray);
        }
        else {
            await p.move(n);
        }
        await this.FieldArray[p.currentposition].Event;

        if(double){
            if(this.ConseqDoubles >= 2){
                p.TurnsInPrison = 3;
                this.ConseqDoubles = 0;
            }
            else{
                this.ConseqDoubles += 1;
                await this.MakePlayerTurn(p);
            }
        }else{
            this.ConseqDoubles = 0;
        }
    }

    CheckWinCondition():boolean{
        return false
    }

    Surrender(p: Player): void {
        let index = this.PlayerArray.indexOf(p);
        this.PlayerArray.splice(index, 1);

        for (let i = 0; i < p.fieldsOwned.length; i++) {
            p.fieldsOwned[i].owner = undefined;
        }
    }


    //USED TO TEST STUFF
    async launch() {
        console.log("a");
        await this.TradeTest();
        console.log("c");
    }

    async SetMortgageTest(){
        let p: Player = new Player(false, "f");
        this.playerInit(p);
        let repay = new setMortgage();
       await repay.event(p);
    }


    async RepayMortgageTest(){
        let p: Player = new Player(false, "f");
        this.playerInit(p);
        let repay = new RepayMortgage();
        await repay.event(p);
    }

    AuctionTest() {
        let aution: Auction = new Auction();
        let player1 = new Player(false, "YEEEEEEEEEEET");
        let player2 = new Player(false, "Guillaume");
        let player3 = new Player(false, "Tina");
        let player4 = new Player(false, "Bob");
        let playerlist: Player[];
        playerlist = [player1, player2, player3, player4];
        aution.AuctionEvent(player2, playerlist, new Restplace());
    }

    async MortageTest() {
        let p: Player = new Player(false, "f");
        this.playerInit(p);
        for(let i=0;i<30;i++){
            var rand = Math.floor(Math.random() * Object.keys(Colors).length);
            var randColorValue:Colors = Colors[Object.keys(Colors)[rand]];
        let prop2:Properties = new Properties(randColorValue, [1,2,3,4],20,"Not today",200);
        prop2.renovatiosAmmount = 3;
        prop2.isMortgage = false;
        p.fieldsOwned.push(prop2);
        }

        await new Mortage().event(p);

        for(let i=0;i<p.fieldsOwned.length;i++){
            console.log(p.fieldsOwned[i].renovatiosAmmount);
        }

    }

    async TradeTest(){
        let p1:Player = new Player(false,"ad");
        let p2:Player = new Player(false,"bc");
        this.playerInit(p1);
        this.playerInit(p2);
        await new Trade().event(p1,p2);
    }

    async BuyTest(){
        let p: Player = new Player(false, "f");
        let p2: Player = new Player(false,"yieks")
        p.Money = 1000;
        let prop:Properties = new Properties(Colors.Light_Blue, [1,2,3,4],10,"lel",100);
        prop.renovatiosAmmount = 3;
        prop.isMortgage = false;
        let buyevent = new BuyEvent();
        await buyevent.event(p,700,prop,[p,p2]);
    }

    playerInit(p:Player){

        p.Money = 1000;
        let prop:Properties = new Properties(Colors.Light_Blue, [1,2,3,4],10,"lel",100);
        prop.renovatiosAmmount = 3;
        prop.isMortgage = false;
        p.fieldsOwned.push(prop);
        let prop2:Properties = new Properties(Colors.Light_Blue, [1,2,3,4],10,"lel",10000);
        prop2.renovatiosAmmount = 3;
        prop2.isMortgage = false;
        p.fieldsOwned.push(prop2);
    }

}
new main().main();
//new main().launch();


