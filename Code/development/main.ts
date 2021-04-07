import {Player} from "./Player";
import {Auction} from "./Events/Auction";
import { PlayerSelection} from "./PlayerSelection";

import {Restplace} from "./Fields/Restplace";
import {Mortage} from "./Events/mortage";
import {Properties} from "./Fields/Properties";
import {Colors} from "./Fields/colors";
import {BuyEvent} from "./Events/buying";
import {Dice} from "./Events/Dice";

class main {
    PlayerArray: Player[] = [];
    dice:Dice = new Dice();
    WinCondition: number;
    RoundNumber: number;
    PlayerTurn: Player;
    GameEnded: boolean = false;
    TurnEnded: boolean = false;

    async main() {
        this.dice.event();
        this.InitializePlayers();
        while (!this.GameEnded) {
            await this.wait();
            this.PlayerArray.forEach(function (item) {
                if (item.Money >= this.WinCondition) {
                    this.GameEnded = true;
                }
            })
        }
    }

    async EndTurnButton(){
        let EndButton = $("#endTurn");
        let self = this;
        EndButton.click(function(){
            self.TurnEnded = true;
        });
    }

    //Will wait for a player to play its turn
    async wait(){
        while (!this.TurnEnded) {
            await new Promise(r => setTimeout(r, 500));
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

    SaveGameState(n: number, p: Player): void {

    }

    CheckWinCondition(): boolean {
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
        await this.MortageTest();

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
        p.Money = -10;
        let prop:Properties = new Properties(Colors.Light_Blue, [1,2,3,4],10,"lel",100);
        prop.renovatiosAmmount = 3;
        prop.isMortgage = false;
        p.fieldsOwned.push(prop);

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

}

new main().main();


