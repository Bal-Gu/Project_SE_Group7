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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerSelection = void 0;
const jquery_1 = __importDefault(require("jquery"));
const Player_1 = require("./Player");
class PlayerSelection {
    constructor() {
        this.StartTheGamePressed = false;
        this.PlayerArray = [];
        this.PlayerIsBot = [true, true, true, true];
        this.PlayerName = ["", "", "", ""];
    }
    getPlayers() {
        return this.PlayerArray;
    }
    initializePlayers() {
        for (let i = 0; i < this.PlayerIsBot.length; i++) {
            let p = new Player_1.Player(this.PlayerIsBot[i], this.PlayerName[i]);
            this.PlayerArray.push(p);
        }
    }
    event() {
        return __awaiter(this, void 0, void 0, function* () {
            let self = this;
            let button1 = jquery_1.default("#PlayerButton1");
            let button2 = jquery_1.default("#PlayerButton2");
            let button3 = jquery_1.default("#PlayerButton3");
            let button4 = jquery_1.default("#PlayerButton4");
            let StartButton = jquery_1.default("#StartButton");
            button1.click(function () {
                if (!self.PlayerIsBot[0]) {
                    self.PlayerIsBot[0] = true;
                    button1.css("background-color", "rgb(206, 60, 60)");
                    // @ts-ignore
                    document.getElementById("PlayerStatus1").value = "Bot Player 1";
                    // @ts-ignore
                    document.getElementById("PlayerStatus1").disabled = true;
                }
                else {
                    self.PlayerIsBot[0] = false;
                    button1.css("background-color", "greenyellow");
                    // @ts-ignore
                    document.getElementById("PlayerStatus1").value = "";
                    // @ts-ignore
                    document.getElementById("PlayerStatus1").disabled = false;
                }
            });
            button2.click(function () {
                if (!self.PlayerIsBot[1]) {
                    self.PlayerIsBot[1] = true;
                    button2.css("background-color", "rgb(206, 60, 60)");
                    // @ts-ignore
                    document.getElementById("PlayerStatus2").value = "Bot Player 2";
                    // @ts-ignore
                    document.getElementById("PlayerStatus2").disabled = true;
                }
                else {
                    self.PlayerIsBot[1] = false;
                    button2.css("background-color", "greenyellow");
                    // @ts-ignore
                    document.getElementById("PlayerStatus2").value = "";
                    // @ts-ignore
                    document.getElementById("PlayerStatus2").disabled = false;
                }
            });
            button3.click(function () {
                if (!self.PlayerIsBot[2]) {
                    self.PlayerIsBot[2] = true;
                    button3.css("background-color", "rgb(206, 60, 60)");
                    // @ts-ignore
                    document.getElementById("PlayerStatus3").value = "Bot Player 3";
                    // @ts-ignore
                    document.getElementById("PlayerStatus3").disabled = true;
                }
                else {
                    self.PlayerIsBot[2] = false;
                    button3.css("background-color", "greenyellow");
                    // @ts-ignore
                    document.getElementById("PlayerStatus3").value = "";
                    // @ts-ignore
                    document.getElementById("PlayerStatus3").disabled = false;
                }
            });
            button4.click(function () {
                if (!self.PlayerIsBot[3]) {
                    self.PlayerIsBot[3] = true;
                    button4.css("background-color", "rgb(206, 60, 60)");
                    // @ts-ignore
                    document.getElementById("PlayerStatus4").value = "Bot Player 4";
                    // @ts-ignore
                    document.getElementById("PlayerStatus4").disabled = true;
                }
                else {
                    self.PlayerIsBot[3] = false;
                    button4.css("background-color", "greenyellow");
                    // @ts-ignore
                    document.getElementById("PlayerStatus4").value = "";
                    // @ts-ignore
                    document.getElementById("PlayerStatus4").disabled = false;
                }
            });
            StartButton.click(function () {
                // @ts-ignore
                self.PlayerName[0] = document.getElementById("PlayerStatus1").value;
                // @ts-ignore
                self.PlayerName[1] = document.getElementById("PlayerStatus2").value;
                // @ts-ignore
                self.PlayerName[2] = document.getElementById("PlayerStatus3").value;
                // @ts-ignore
                self.PlayerName[3] = document.getElementById("PlayerStatus4").value;
                self.StartTheGamePressed = true;
            });
            this.wait();
        });
    }
    wait() {
        return __awaiter(this, void 0, void 0, function* () {
            while (!this.StartTheGamePressed) {
                yield new Promise(r => setTimeout(r, 500));
            }
        });
    }
}
exports.PlayerSelection = PlayerSelection;
//# sourceMappingURL=PlayerSelection.js.map