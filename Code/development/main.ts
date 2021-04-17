import {Player} from "./Player";
import {Auction} from "./Events/Auction";
import {PlayerSelection} from "./PlayerSelection";
import globals from "../globalVariable.json"
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
import $ from "jquery";
import {Quiz} from "./Events/quiz";
import {Renovation} from "./Events/Renovation";

declare var fallingCoins;
declare var showHideStars;

export class main {
    first:boolean = true;
    PlayerArray: Player[] = [];
    StaticPlayerArray: Player[] = [];
    dice: Dice = new Dice();
    WinCondition: number;
    RoundNumber: number;
    ReferencePlayer: Player;
    FieldArray: Field[];
    ConseqDoubles: number = 0;
    GameEnded: boolean = false;
    TurnEnded: boolean = false;


    async main() {
        this.buttonEvent();
        this.EndTurnButton();
        this.InitializeGameLength(1);
        this.InitializeFieldArray();
        await this.InitializePlayers();
        while (!this.GameEnded) {
            this.updateButtons(this.ReferencePlayer)
            this.BotAction();
            await this.EndOfATurn();
            this.PlayerArray.forEach(
                player => this.CheckWinCondition(player)
            )
            this.PlayerArray.forEach(
                player => this.CheckLooseCondition(player)
            )
            this.NextTurn();
            //check gameover for player and change value
            //checking makeplayerturn
            //puting surrender button and mechanics
            //check if the turn handling works fine
        }
    }

    async EndTurnButton() {
        let EndButton = $("#endTurnButton");
        let self = this;
        EndButton.click(function () {
            console.log("turn ended");
            self.TurnEnded = true;
        });
    }

    ShowPlayerMoney() {

        this.StaticPlayerArray = this.PlayerArray.slice();
        this.PlayerArray.forEach(player => player.PlayerArray = this.StaticPlayerArray);
        $("#player-1").text(this.StaticPlayerArray[0].name);
        $("#b-coins-1").text(this.StaticPlayerArray[0].Money);
        $("#player-1").css("background-color", this.StaticPlayerArray[0].Color);
        $("#player-2").text(this.StaticPlayerArray[1].name);
        $("#b-coins-2").text(this.StaticPlayerArray[1].Money);
        $("#player-2").css("background-color", this.StaticPlayerArray[1].Color);
        $("#player-3").text(this.StaticPlayerArray[2].name);
        $("#b-coins-3").text(this.StaticPlayerArray[2].Money);
        $("#player-3").css("background-color", this.StaticPlayerArray[2].Color);
        $("#player-4").text(this.StaticPlayerArray[3].name);
        $("#b-coins-4").text(this.StaticPlayerArray[3].Money);
        $("#player-4").css("background-color", this.StaticPlayerArray[3].Color);
    }

    //Will wait for a player to play its turn
    async EndOfATurn() {
        while (!this.TurnEnded) {
            await new Promise(r => setTimeout(r, 500));
            //console.log("waiting");
        }
    }

    InitializeQueue(): void {
        for (let i = 0; i < this.PlayerArray.length; i++) {
            this.dice.roll();
            this.PlayerArray[i].queue = this.dice.total();
        }
        let n = this.PlayerArray.length;
        //Bubble Sort, if the queue number between two players is the same, it won't change on purpose
        for (let i = 0; i < n - 1; i++) {
            for (let y = 0; y < n - i - 1; y++) {
                if (this.PlayerArray[y].queue > this.PlayerArray[y + 1].queue) {
                    let temp = this.PlayerArray[y];
                    this.PlayerArray[y] = this.PlayerArray[y + 1];
                    this.PlayerArray[y + 1] = temp;
                }
            }
        }
        this.ShowPlayerMoney();
        this.ReferencePlayer = this.PlayerArray[0];
        $("#current-player").text(this.ReferencePlayer.name);
    }

    NextTurn(): void {
        let temp = this.PlayerArray[0];
        for (let i = 0; i < this.PlayerArray.length - 1; i++) {
            this.PlayerArray[i] = this.PlayerArray[i + 1];
        }
        this.PlayerArray[3] = temp;
        this.ReferencePlayer = this.PlayerArray[0];
        $("#current-player").text(this.ReferencePlayer.name);
        this.TurnEnded = false;
    }
    async BotAction(){
        let self = this;
        let erasmus = new Erasmus()
        if (this.ReferencePlayer.isBot) {
            while($("#rollButton").is(":visible")){
                this.dice.roll();
                let double = this.dice.isdouble();
                this.ReferencePlayer.move(this.dice.total());
                await new Promise(r => setTimeout(r, this.dice.total() * 500 + 2000));
                if ($("#BuyingModal").is(":visible")) {
                    $("#Buy").click();
                }/*else if($("#QuestionModal").is(":visible")){
                    let randChoice = self.dice.getRandomInt(4);
                    (randChoice == 3) ? $("#Answer4").click() : (randChoice == 2) ? $("#Answer3").click() : (randChoice == 1) ? $("#Answer2").click() : $("#Answer1");
                }*/
                if (this.ReferencePlayer.TurnsInPrison > 0) {
                    await erasmus.Event(this.ReferencePlayer, this.StaticPlayerArray);
                    return;
                }
                if (double) {
                    if (this.ConseqDoubles >= 2) {
                        this.ReferencePlayer.goToErasmus()
                        this.ConseqDoubles = 0;
                    } else {
                        this.ConseqDoubles += 1;
                    }
                } else {
                    $("#rollButton").hide()
                    this.ConseqDoubles = 0;
                }
            }
            this.TurnEnded = true;
        }
    }

    InitializeGameLength(n: number): void {
        this.WinCondition = (n == 1) ? 3000 : (n == 2) ? 4000 : 5000;
    }

    async InitializePlayers() {
        let ps: PlayerSelection = new PlayerSelection();
        ps.event();
        while (!ps.StartTheGamePressed) {
            await new Promise(r => setTimeout(r, 500));
        }
        ps.initializePlayers();
        this.PlayerArray = ps.getPlayers();
        this.PlayerArray.forEach((player) => {
            player.setMap(this.FieldArray);
        });
        this.InitializeQueue();

    }

    InitializeFieldArray(): void {
        this.FieldArray = [];
        let propertiesFile = require('../properties.json');
        let a, b, c, d;
        a = b = c = 0;

        for (let i = 0; i < 40; i++) {
            if (i == 0 || i == 10) {
                let idle: Idle = new Idle();
                this.FieldArray.push(idle);
            } else if (i == 20) {
                let restplace: Restplace = new Restplace();
                this.FieldArray.push(restplace);
            } else if (i == 30) {
                let gotoerasmus: GoToErasmus = new GoToErasmus();
                this.FieldArray.push(gotoerasmus);
            } else if (i == 5 || i == 15 || i == 25 || i == 35) {
                let station = propertiesFile.stations[a];
                let b: Bus = new Bus(station.name);
                this.FieldArray.push(b);
                a++;
            } else if (i == 12 || i == 28) {
                let parking = propertiesFile.parkings[b];
                let pa: Parking = new Parking(parking.name);
                this.FieldArray.push(pa);
                b++;
            } else if (i == 4 || i == 38) {
                switch (i) {
                    case 4:
                        let luxtax: Tax = new Tax("Luxury Tax");
                        this.FieldArray.push(luxtax);
                        break;
                    case 38:
                        let inctax: Tax = new Tax("Income Tax");
                        this.FieldArray.push(inctax);
                        break;
                }
            } else if (i == 2 || i == 17 || i == 33) {
                let eventfield: EventField = new EventField();
                this.FieldArray.push(eventfield);
            } else if (i == 7 || i == 22 || i == 36) {
                let quizfield: QuizField = new QuizField();
                this.FieldArray.push(quizfield);
            } else {
                let prop = propertiesFile.properties[c];
                let p: Properties = new Properties(prop.color, prop.pricetopay, prop.renovationscosts, prop.name, prop.initialprice);
                this.FieldArray.push(p);
                c++;
            }
        }

    }

    SaveGameState(n: number, p: Player): void {

    }

    async MakePlayerTurn(): Promise<void> {
        let erasmus = new Erasmus()
        let double = this.dice.isdouble();

        if (this.ReferencePlayer.TurnsInPrison > 0) {
            await erasmus.Event(this.ReferencePlayer, this.StaticPlayerArray);
            return;
        }
        if (double) {
            if (this.ConseqDoubles >= 2) {
                this.ReferencePlayer.goToErasmus()
                this.ConseqDoubles = 0;
            } else {
                this.ConseqDoubles += 1;
            }
        } else {
            $("#rollButton").hide()
            this.ConseqDoubles = 0;
        }
        this.StaticPlayerArray.forEach(playerobject => console.log(playerobject.name));
        this.ReferencePlayer.move(this.dice.total());
    }

    CheckWinCondition(player: Player): void {
        if (player.Money >= this.WinCondition) {
            this.GameEnded = true;
        }
    }

    CheckLooseCondition(player: Player): void {
        if (player.isGameOver) {
            this.Surrender(player);
        }
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

        console.log("c");
    }

    async SetMortgageTest() {
        let p: Player = new Player(false, "f", 0);
        this.playerInit(p);
        let repay = new setMortgage();
        await repay.event(p);
    }


    async RepayMortgageTest() {
        let p: Player = new Player(false, "f", 0);
        this.playerInit(p);
        let repay = new RepayMortgage();
        await repay.event(p);
    }

    AuctionTest() {
        let aution: Auction = new Auction();
        let player1 = new Player(false, "YEEEEEEEEEEET", 0);
        let player2 = new Player(false, "Guillaume", 1);
        let player3 = new Player(false, "Tina", 2);
        let player4 = new Player(false, "Bob", 3);
        let playerlist: Player[];
        playerlist = [player1, player2, player3, player4];
        aution.AuctionEvent(player2, playerlist, new Restplace());
    }

    async MortageTest() {
        let p: Player = new Player(false, "f", 0);
        this.playerInit(p);
        for (let i = 0; i < 30; i++) {
            var rand = Math.floor(Math.random() * Object.keys(Colors).length);
            var randColorValue: Colors = Colors[Object.keys(Colors)[rand]];
            let prop2: Properties = new Properties(randColorValue, [1, 2, 3, 4], 20, "Not today", 200);
            prop2.renovatiosAmmount = 3;
            prop2.isMortgage = false;
            p.fieldsOwned.push(prop2);
        }

        await new Mortage().event(p);

        for (let i = 0; i < p.fieldsOwned.length; i++) {
            console.log(p.fieldsOwned[i].renovatiosAmmount);
        }

    }

    async TradeTest() {
        let p1: Player = new Player(false, "ad", 0);
        let p2: Player = new Player(false, "bc", 1);
        this.playerInit(p1);
        this.playerInit(p2);
        p1.fieldsOwned[0].name = "aaaa";
        p1.fieldsOwned[1].name = "bbbb";
        p2.fieldsOwned[0].name = "cccc";
        p2.fieldsOwned[1].name = "dddd";
        p2.hasErasmusDispense = true;
        await new Trade().event(p1, p2)
        console.log("P1");
        console.log("P1 has erasmus =>" + p1.fieldsOwned);
        console.log("P2");
        console.log("P2 has erasmus =>" + p2.fieldsOwned);
    }

    async BuyTest() {
        let p: Player = new Player(false, "f", 0);
        let p2: Player = new Player(false, "yieks", 1)
        p.Money = 1000;
        let prop: Properties = new Properties(Colors.Light_Blue, [1, 2, 3, 4], 10, "lel", 100);
        prop.renovatiosAmmount = 3;
        prop.isMortgage = false;
        let buyevent = new BuyEvent();
        await buyevent.event(p, 700, prop, [p, p2]);
    }

    playerInit(p: Player) {

        p.Money = 10000;
        let prop: Properties = new Properties(Colors.Light_Blue, [1, 2, 3, 4], 10, "lel1", 100);
        prop.renovatiosAmmount = 0;
        prop.isMortgage = false;
        prop.hasAll = true;
        p.fieldsOwned.push(prop);
        let prop2: Properties = new Properties(Colors.Light_Blue, [1, 2, 3, 4], 10, "lel2", 10000);
        prop2.renovatiosAmmount = 0;
        prop2.isMortgage = false;
        prop2.hasAll = true;
        p.fieldsOwned.push(prop2);
        let prop3: Properties = new Properties(Colors.Light_Blue, [1, 2, 3, 4], 10, "lel3", 10000);
        prop3.renovatiosAmmount = 0;
        prop3.isMortgage = false;
        prop3.hasAll = true;
        p.fieldsOwned.push(prop3);
        let prop4: Bus = new Bus("FUUUU");
        p.map = [];
        p.map.push(prop4);
        p.map.push(prop4);
        p.map.push(prop4);
        p.map.push(prop4);
        p.map.push(prop4);
        p.map.push(prop4);
        p.map.push(prop);
        p.map.push(prop4);
        p.map.push(prop2);
        p.map.push(prop3);
    }

    async buttonEvent() {
        let self = this;
        // show the start game modal
        $("#startGame").click(function () {
            $("#startGameModal").show();
        });
        // close any modal that has a close X
        $(".close").click(function () {
            $(".modal").hide();
        });
        // show the lobby
        $("#lobbyButton").click(function () {
            $("#lobbyModal").show();
        });
        // hide the start menu if the play button inside the
        $("#menuPlayButton").click(function () {
            $("#startMenu").hide();
            $("#lobbyModal").show();
            fallingCoins('body');
            //showHideStars(39,4,1);
            //showHideStars(FieldNumber, howManyStars0-5, PlayerReference0-3)
        });
        // show the start menu
        $("#startMenuButton").click(function () {
            $("#startMenu").show();
            fallingCoins('body');
        });
        // to roll the dices
        $("#rollButton").click(function () {
            //handle the doubles
            self.dice.roll();

            self.MakePlayerTurn();


        });
        // to test the renovation modal

        $("#quizButton").click(async () => {

            await this.RenovationTest();

        });

        $("#tradeButton").click(async () => {
            let trade = new Trade();
            await trade.decidePlayer(self.ReferencePlayer, self.PlayerArray);
            await trade.event(self.ReferencePlayer, trade.getTarger())
        });

        $("#RenovationsButton").click(async function () {
            await new Renovation().event(self.ReferencePlayer);
            self.updateButtons(self.ReferencePlayer);
        });
        $("#repayMortgageButton").click(async function () {
            await new RepayMortgage().event(self.ReferencePlayer);
            self.updateButtons(self.ReferencePlayer);
        });

        $("#RemoveMoneyButton").click(function () {
            self.ReferencePlayer.Money = 0;
            self.ReferencePlayer.recieveMoney(0);
        });
        $("#Add500Money").click(function () {
            self.ReferencePlayer.recieveMoney(500);
        });
        $("#Removefield").click(function () {
            self.ReferencePlayer.fieldsOwned.pop();
        });
        $("#Addfield").click(function () {
            self.ReferencePlayer.receive(self.FieldArray[31]);
        });
        $("#MoveToTax").click(function () {
            self.ReferencePlayer.move(4);
            setTimeout(function () {
                self.MakePlayerTurn();
            }, 2000);
        });

        let counter = 1;
        $("#menuLanguageButton").click(function (){
            if (counter === 1){
                $(this).html("Langue: <img src='./graphic/images/flags/france.png' style='height: 25px'>");
                counter++;
            }else if(counter === 2) {
                $(this).html("Sprache: <img src='./graphic/images/flags/germany.png' style='height: 25px'>");
                counter++;
            }else if(counter === 3){
                $(this).html("Língua: <img src='./graphic/images/flags/portugal.png' style='height: 25px'>");
                counter++;
            }else {
                $(this).html("Language: <img src='./graphic/images/flags/kingdom.png' style='height: 25px'>");
                counter = 1;
            }
        });
    }

    updateButtons(p: Player) {
        //SELL RENOVATIONS
        let renovationSell = $("#sellRenovationsButton");
        let cansell: boolean = false;
        for (let i = 0; i < p.fieldsOwned.length; i++) {

            if (p.fieldsOwned[i].isMortgage != undefined && p.fieldsOwned[i].renovatiosAmmount != undefined) {
                // @ts-ignore
                if (!p.fieldsOwned[i].isMortgage && p.fieldsOwned[i].renovatiosAmmount > 0) {
                    cansell = true;
                }
            }
        }
        if (cansell) {
            renovationSell.show();
        } else {
            renovationSell.hide();
        }
        //Set Mortgage properties
        let SellMortage = $("#RenovationsButton");
        cansell = false;
        for (let i = 0; i < p.fieldsOwned.length; i++) {

            if (p.fieldsOwned[i].isMortgage != undefined && p.fieldsOwned[i].renovatiosAmmount != undefined) {
                // @ts-ignore
                if (!p.fieldsOwned[i].isMortgage && p.fieldsOwned[i].hasAll) {
                    cansell = true;
                }

            }
        }
        if (cansell) {
            SellMortage.show();
        } else {
            SellMortage.hide();
        }
        //Buy renovations
        let Buyrenovation = $("#buyRenovationButton");
        cansell = false;

        for (let i = 0; i < p.fieldsOwned.length; i++) {
            if (p.fieldsOwned[i].isMortgage != undefined && p.fieldsOwned[i].renovatiosAmmount != undefined) {
                // @ts-ignore
                if (!p.fieldsOwned[i].isMortgage && p.fieldsOwned[i].renovatiosAmmount < globals.MaxRenovations && p.fieldsOwned[i].hasAll) {
                    cansell = true;
                }

            }

        }
        if (cansell) {
            Buyrenovation.show();
        } else {
            Buyrenovation.hide();
        }
        //End turn → skip that one because always on
        $("#endTurnButton").show();
        //Menu Button → skip that one because always on
        $("#startMenuButton").show();
        //Trade
        $("#tradeButton").show()
        //Repay mortgage
        let repaymortgage = $("#repayMortgageButton");
        let minimumPrice: number = 20000000000;
        for (let i = 0; i < p.fieldsOwned.length; i++) {
            if (p.fieldsOwned[i].isMortgage) {
                minimumPrice = minimumPrice < p.fieldsOwned[i].initialPrice ? minimumPrice : p.fieldsOwned[i].initialPrice;
            }
        }
        if (p.canBuy(minimumPrice)) {
            repaymortgage.show();
        } else {
            repaymortgage.hide();
        }
        //Roll dice
        $("#rollButton").show();
    }
    async  RenovationTest():Promise<void> {

        if(this.first) {
            let p1: Player = new Player(false, "test1", 0);
            this.playerInit(p1);
            this.ReferencePlayer = p1;
            p1.PlayerArray = [p1];
            this.first = false;
        }
        let renov: Renovation = new Renovation();
        await renov.event(this.ReferencePlayer);
    }


}







$("#startMenu").show(function () {
    fallingCoins('body');
});


new main().main();



