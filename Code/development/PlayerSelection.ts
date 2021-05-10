import $ from "jquery";
import {Player} from "./Player";

export class PlayerSelection {
    StartTheGamePressed: Boolean = false;
    PlayerArray: Player[] = [];
    PlayerIsBot: boolean[] = [true, true, true, true];
    PlayerName: string[] = ["", "", "", ""];
    botDifficultyButton: number;
    language: String = "";

    getPlayers(): Player[] {
        return this.PlayerArray;
    }

    initializePlayers(lang: String) {
        this.language = lang;
        for (let i = 0; i < this.PlayerIsBot.length; i++) {
            let p: Player = new Player(this.PlayerIsBot[i], this.PlayerName[i], i, this.botDifficultyButton);
            this.PlayerArray.push(p);
        }
        this.PlayerArray[0].Color = "orange";
        this.PlayerArray[1].Color = "rgb(22, 22, 22)";
        this.PlayerArray[2].Color = "#cccc4c";
        this.PlayerArray[3].Color = "red";

        let startbutton =  $("#StartButton");
        switch (this.language) {
            case "LUX":
                startbutton.text("Spill starten");
                break;
            case "FR":
                startbutton.text("Commencer");
                break;
            case "PR":
                //TODO translate
                startbutton.text("Começar o jogo");
                break;
            case "":
                startbutton.text("Start game");
                break;
            case "DE":
                startbutton.text("Spiel starten");
                break;
            default:
                startbutton.text("Start game");

        }

    }

    async event() {
        let self = this;
        let button1 = $("#PlayerButton1");
        let button2 = $("#PlayerButton2");
        let button3 = $("#PlayerButton3");
        let button4 = $("#PlayerButton4");
        let StartButton = $("#StartButton");
        let botDiff = $("#botDifficultyButton");
        this.botDifficultyButton = 0;
        button1.click(function () {
            if (!self.PlayerIsBot[0]) {
                self.PlayerIsBot[0] = true;
                button1.css("background-color", "rgb(206, 60, 60)");
                // @ts-ignore
                document.getElementById("PlayerStatus1").value = "Bot Player 1";
                // @ts-ignore
                document.getElementById("PlayerStatus1").disabled = true;
            } else {
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
            } else {
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
            } else {
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
            } else {
                self.PlayerIsBot[3] = false;
                button4.css("background-color", "greenyellow");
                // @ts-ignore
                document.getElementById("PlayerStatus4").value = "";
                // @ts-ignore
                document.getElementById("PlayerStatus4").disabled = false;
            }
        });
        botDiff.click(function () {
            if (self.botDifficultyButton) {
                //TODO translate
                switch (self.language) {
                    case "LUX":
                        $(this).html("Bot Standard");
                        break;
                    case "FR":
                        $(this).html("Bot standard");
                        break;
                    case "PR":
                        $(this).html("Bot padrão");
                        break;
                    case "":
                        $(this).html("Bot Standard");
                        break;
                    case "DE":
                        $(this).html("Bot Standard");
                        break;
                    default:
                        $(this).html("Bot Standard");

                }
                self.botDifficultyButton = 0;
            } else {
                switch (self.language) {
                    case "LUX":
                        $(this).html("Bot schweier");
                        break;
                    case "FR":
                        $(this).html("Bot Avancé");
                        break;
                    case "PR":
                        $(this).html("Bot avançado");
                        break;
                    case "":
                        $(this).html("Bot Standard");
                        break;
                    case "DE":
                        $(this).html("Bot fortgeschritten");
                        break;
                    default:
                        $(this).html("Bot Standard");

                }
                self.botDifficultyButton = 1;
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
            $("#lobbyModal").css("display", "none");
        });
        this.wait();
    }

    async wait() {
        while (!this.StartTheGamePressed) {
            await new Promise(r => setTimeout(r, 500));
        }
    }
}
