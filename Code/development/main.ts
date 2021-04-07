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
import {RepayMortgage} from "./Events/RepayMortgage";
import {setMortgage} from "./Events/SetMortgage";

export class main {
    PlayerArray: Player[] = [];
    WinCondition: number;
    RoundNumber: number;
    PlayerTurn: Player;
    GameEnded: boolean;
    FieldArray: Field[];
    ConseqDoubles: number = 0;

    main() {
        this.InitializePlayers().then(r => console.log("finished"));
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
        let a, b, c;
        a = b = c =0;

        for(let i = 0; i < 28; i++){
            if(i == 2 || i == 10 || i == 17 || i == 25){
                let station = propertiesFile.stations[a];
                let b:Bus = new Bus(station.name);
                this.FieldArray.push(b);
                a++;
            }
            else if(i == 7 || i == 20){
                let parking =  propertiesFile.parkings[b];
                let pa:Parking = new Parking(parking.name);
                this.FieldArray.push(pa);
                b++;
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
        //await this.SetMortgageTest();
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

new main().launch();


