import $ from "jquery";
import { Player } from "./Player";
export class PlayerSelection{
    StartTheGamePressed: Boolean = false;
    PlayerArray: Player[] = [];
    PlayerIsBot: boolean[] = [false, false, false, false];
    getPlayers():Player[]{
        return this.PlayerArray;
    }
    initializePlayers(){
        for(let i = 0; i < this.PlayerIsBot.length; i++){
            let p:Player = new Player(this.PlayerIsBot[i],"");
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
                document.getElementById("PlayerStatus1").textContent = "isBot";
            }else{
                self.PlayerIsBot[0] = false;
                button1.css("background-color", "greenyellow");
                // @ts-ignore
                document.getElementById("PlayerStatus1").textContent = "isHuman";
            }
        });
        button2.click(function(){
            if(!self.PlayerIsBot[1]){
                self.PlayerIsBot[1] = true;
                button2.css("background-color", "rgb(206, 60, 60)");
                // @ts-ignore
                document.getElementById("PlayerStatus2").textContent = "isBot";
            }else{
                self.PlayerIsBot[1] = false;
                button2.css("background-color", "greenyellow");
                // @ts-ignore
                document.getElementById("PlayerStatus2").textContent = "isHuman";
            }
        });
        button3.click(function(){
            if(!self.PlayerIsBot[2]){
                self.PlayerIsBot[2] = true;
                button3.css("background-color", "rgb(206, 60, 60)");
                // @ts-ignore
                document.getElementById("PlayerStatus3").textContent = "isBot";
            }else{
                self.PlayerIsBot[2] = false;
                button3.css("background-color", "greenyellow");
                // @ts-ignore
                document.getElementById("PlayerStatus3").textContent = "isHuman";
            }
        });
        button4.click(function(){
            if(!self.PlayerIsBot[3]){
                self.PlayerIsBot[3] = true;
                button4.css("background-color", "rgb(206, 60, 60)");
                // @ts-ignore
                document.getElementById("PlayerStatus4").textContent = "isBot";
            }else{
                self.PlayerIsBot[3] = false;
                button4.css("background-color", "greenyellow");
                // @ts-ignore
                document.getElementById("PlayerStatus4").textContent = "isHuman";
            }
        });
        StartButton.click(function(){
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
