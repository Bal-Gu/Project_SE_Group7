"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
const Auction_1 = require("./Events/Auction");
const PlayerSelection_1 = require("./PlayerSelection");
const Restplace_1 = require("./Fields/Restplace");
const mortage_1 = require("./Events/mortage");
const Properties_1 = require("./Fields/Properties");
const colors_1 = require("./Fields/colors");
const buying_1 = require("./Events/buying");
class main {
    constructor() {
        this.PlayerArray = [];
    }
    main() {
        this.InitializePlayers().then(r => console.log("finished"));
    }
    InitializeGameLength(n) {
        this.WinCondition = (n == 1) ? 3000 : (n == 2) ? 4000 : 5000;
    }
    InitializePlayers() {
        return __awaiter(this, void 0, void 0, function* () {
            let ps = new PlayerSelection_1.PlayerSelection();
            ps.event();
            while (!ps.StartTheGamePressed) {
                yield new Promise(r => setTimeout(r, 500));
            }
            ps.initializePlayers();
            this.PlayerArray = ps.getPlayers();
        });
    }
    SaveGameState(n, p) {
    }
    CheckWinCondition() {
        return false;
    }
    Surrender(p) {
        let index = this.PlayerArray.indexOf(p);
        this.PlayerArray.splice(index, 1);
        for (let i = 0; i < p.fieldsOwned.length; i++) {
            p.fieldsOwned[i].owner = undefined;
        }
    }
    //USED TO TEST STUFF
    launch() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.MortageTest();
        });
    }
    AuctionTest() {
        let aution = new Auction_1.Auction();
        let player1 = new Player_1.Player(false, "YEEEEEEEEEEET");
        let player2 = new Player_1.Player(false, "Guillaume");
        let player3 = new Player_1.Player(false, "Tina");
        let player4 = new Player_1.Player(false, "Bob");
        let playerlist;
        playerlist = [player1, player2, player3, player4];
        aution.AuctionEvent(player2, playerlist, new Restplace_1.Restplace());
    }
    MortageTest() {
        return __awaiter(this, void 0, void 0, function* () {
            let p = new Player_1.Player(false, "f");
            p.Money = -10;
            let prop = new Properties_1.Properties(colors_1.Colors.Light_Blue, [1, 2, 3, 4], 10, "lel", 100);
            prop.renovatiosAmmount = 3;
            prop.isMortgage = false;
            p.fieldsOwned.push(prop);
            for (let i = 0; i < 30; i++) {
                var rand = Math.floor(Math.random() * Object.keys(colors_1.Colors).length);
                var randColorValue = colors_1.Colors[Object.keys(colors_1.Colors)[rand]];
                let prop2 = new Properties_1.Properties(randColorValue, [1, 2, 3, 4], 20, "Not today", 200);
                prop2.renovatiosAmmount = 3;
                prop2.isMortgage = false;
                p.fieldsOwned.push(prop2);
            }
            yield new mortage_1.Mortage().event(p);
            for (let i = 0; i < p.fieldsOwned.length; i++) {
                console.log(p.fieldsOwned[i].renovatiosAmmount);
            }
        });
    }
    BuyTest() {
        return __awaiter(this, void 0, void 0, function* () {
            let p = new Player_1.Player(false, "f");
            let p2 = new Player_1.Player(false, "yieks");
            p.Money = 1000;
            let prop = new Properties_1.Properties(colors_1.Colors.Light_Blue, [1, 2, 3, 4], 10, "lel", 100);
            prop.renovatiosAmmount = 3;
            prop.isMortgage = false;
            let buyevent = new buying_1.BuyEvent();
            yield buyevent.event(p, 700, prop, [p, p2]);
        });
    }
}
new main().main();
//# sourceMappingURL=main.js.map