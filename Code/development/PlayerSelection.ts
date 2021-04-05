import $ from "jquery";
import { Player } from "./Player";
export class PlayerSelection{
    StartTheGamePressed: Boolean = false;
    PlayerArray: Player[] = [];
    PlayerIsBot: boolean[] = [true, true, true, true];
    PlayerName: string[] = ["","","",""];
    getPlayers():Player[]{
        return this.PlayerArray;
    }
    initializePlayers(){
        for(let i = 0; i < this.PlayerIsBot.length; i++){
            let p:Player = new Player(this.PlayerIsBot[i],this.PlayerName[i]);
            this.PlayerArray.push(p);
        }
    }
    async event(){
        let self = this;
        let button1 = $("#PlayerButton1");
        let button2 = $("#PlayerButton2");
        let button3 = $("#PlayerButton3");
        let button4 = $("#PlayerButton4");
        let StartButton = $("#StartButton");
        button1.click(function(){
            if(!self.PlayerIsBot[0]){
                self.PlayerIsBot[0] = true;
                button1.css("background-color", "rgb(206, 60, 60)");
                // @ts-ignore
                document.getElementById("PlayerStatus1").value="Bot Player 1";
                // @ts-ignore
                document.getElementById("PlayerStatus1").disabled=true;
            }else{
                self.PlayerIsBot[0] = false;
                button1.css("background-color", "greenyellow");
                // @ts-ignore
                document.getElementById("PlayerStatus1").value="";
                // @ts-ignore
                document.getElementById("PlayerStatus1").disabled=false;
            }
        });
        button2.click(function(){
            if(!self.PlayerIsBot[1]){
                self.PlayerIsBot[1] = true;
                button2.css("background-color", "rgb(206, 60, 60)");
                // @ts-ignore
                document.getElementById("PlayerStatus2").value="Bot Player 2";
                // @ts-ignore
                document.getElementById("PlayerStatus2").disabled=true;
            }else{
                self.PlayerIsBot[1] = false;
                button2.css("background-color", "greenyellow");
                // @ts-ignore
                document.getElementById("PlayerStatus2").value="";
                // @ts-ignore
                document.getElementById("PlayerStatus2").disabled=false;
            }
        });
        button3.click(function(){
            if(!self.PlayerIsBot[2]){
                self.PlayerIsBot[2] = true;
                button3.css("background-color", "rgb(206, 60, 60)");
                // @ts-ignore
                document.getElementById("PlayerStatus3").value="Bot Player 3";
                // @ts-ignore
                document.getElementById("PlayerStatus3").disabled=true;
            }else{
                self.PlayerIsBot[2] = false;
                button3.css("background-color", "greenyellow");
                // @ts-ignore
                document.getElementById("PlayerStatus3").value="";
                // @ts-ignore
                document.getElementById("PlayerStatus3").disabled=false;
            }
        });
        button4.click(function(){
            if(!self.PlayerIsBot[3]){
                self.PlayerIsBot[3] = true;
                button4.css("background-color", "rgb(206, 60, 60)");
                // @ts-ignore
                document.getElementById("PlayerStatus4").value="Bot Player 4";
                // @ts-ignore
                document.getElementById("PlayerStatus4").disabled=true;
            }else{
                self.PlayerIsBot[3] = false;
                button4.css("background-color", "greenyellow");
                // @ts-ignore
                document.getElementById("PlayerStatus4").value="";
                // @ts-ignore
                document.getElementById("PlayerStatus4").disabled=false;
            }
        });
        StartButton.click(function(){
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
    }
    async wait(){
        while(!this.StartTheGamePressed){
            await new Promise(r => setTimeout(r, 500));
        }
    }
}