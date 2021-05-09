import {Player} from "../Player";
import $ from "jquery";

export class Auction {
    pressed: boolean = false;


    async AuctionEvent(p: Player, PlayerList: Player[], field) {
        console.log(p.name+" entered Auction");
        let modal = $("#AuctionModal");
        modal.show();
        let textfield = $("#IncText");
        let bidbutton = $("#Bid");
        let leavebutton = $("#Leave");
        let xPlaying = $("#x_is_playing");
        let xAmmount = $("#Current_price");
        PlayerList.forEach(value => {
            value.canAuction = true;
        });
        let ammountOfPlayer = PlayerList.length;
        let maxplayers = ammountOfPlayer;
        let currentindex = PlayerList.indexOf(p);
        let winner: Player | undefined = undefined;
        let increment:number = 10;
        let currentprice:number = 0;

        let AuctionTitle = $("#AuctionModal .modal-content .modal-header h1");
        let BCoinIncrease = $("#B-coinsIncrease")


        //setting the values

        switch (p.language) {
            case "LUX":
                xAmmount.text("Aktuellen preis: 0 B-coins");
                AuctionTitle.text("Auktioun");
                BCoinIncrease.text("B-coins erheigerung");
                xPlaying.text(PlayerList[currentindex].getName() + " as drun");
                break;
            case "FR":
                xAmmount.text("Prix actuelle: 0 B-coins");
                AuctionTitle.text("Enchère");
                BCoinIncrease.text("B-coins augmentation:");
                xPlaying.text(PlayerList[currentindex].getName() + ": C'est à toi");
                break;
            case "PR":
                xAmmount.text("Preço atual: 0 B-coins");
                AuctionTitle.text("Leilão");
                BCoinIncrease.text("B-coins aumento");
                xPlaying.text(PlayerList[currentindex].getName() + " é a tua vez");
                break;
            case "":
                xPlaying.text(PlayerList[currentindex].getName() + " is playing");
                break;
            case "DE":
                xAmmount.text("Aktueller Preis: 0 B-coins");
                AuctionTitle.text("Versteigerung");
                BCoinIncrease.text("B-coins erhört");
                xPlaying.text(PlayerList[currentindex].getName() + " du bist dran");
                break;
            default:
                xPlaying.text(PlayerList[currentindex].getName() + " is playing");

        }

        //init leavebutton
        let self = this;
        leavebutton.off().on("click", () => {
            if(isNaN(Number(textfield.val()))){
                self.pressed = true;
                return;
            }

            PlayerList[currentindex].canAuction = false;
            ammountOfPlayer--;
            self.pressed = true;
        });

        bidbutton.off().on("click",  ()=>{
            currentprice += increment;

            switch (p.language) {
                case "LUX":
                    xAmmount.text("Preis as : " + currentprice +  "B-coins");
                    break;
                case "FR":
                    xAmmount.text("Prix actuelle: " + currentprice +  "B-coins");
                    break;
                case "PR":
                    xAmmount.text("Preço atual " + currentprice +  "B-coins");
                    break;
                case "":
                    xAmmount.text("Current price " + currentprice +  "B-coins");
                    break;
                case "DE":
                    xAmmount.text("Preis ist " + currentprice +  "B-coins");
                    break;
                default:
                    xAmmount.text("Current price " + currentprice +  "B-coins");

            }

            winner = PlayerList[currentindex];
            self.pressed = true;
        });

        //init and checks onchange of text
        textfield.change(function () {
            if((isNaN(Number(textfield.val()!.toString()))) || (Number(textfield.val()) < 10)) {
                textfield.val("10");
                increment = 10;
            }
            else{
                if(PlayerList[currentindex].canBuy(currentprice+ Number(textfield.val()))){
                    increment = Number(textfield.val());
                }
                else{
                    textfield.val("10");
                    increment = 10;
                }

            }
        });

        while (ammountOfPlayer > 1) {
            //skips players that are out
            if(!PlayerList[currentindex].canAuction){
                ammountOfPlayer = PlayerList.filter(x=>x.canAuction).length;
                currentindex = (currentindex + 1) % maxplayers;
                continue;
            }
            //not enough  money thus skipped
            if(!PlayerList[currentindex].canBuy(currentprice+increment) && !PlayerList[currentindex].canBuy(currentprice+10)  ){
                PlayerList[currentindex].canAuction = false;
                currentindex = (currentindex + 1) % maxplayers;
                ammountOfPlayer--;
                continue;
            }
            else if(increment < 10){
                increment = Math.max((PlayerList[currentindex].Money - increment),10);
                textfield.val(increment);
                continue;
            }
            else{
                if(!PlayerList[currentindex].canBuy(currentprice+10)){
                    PlayerList[currentindex].canAuction = false;
                    currentindex = (currentindex + 1) % maxplayers;
                    ammountOfPlayer--;
                    continue;
                }
            }
            //update the player who is playing
            switch (p.language) {
                case "LUX":
                    xPlaying.text(PlayerList[currentindex].getName() + " as drun");
                    break;
                case "FR": xPlaying.text(PlayerList[currentindex].getName() + ": C'est à toi");
                    break;
                case "PR":
                   xPlaying.text(PlayerList[currentindex].getName() + " é a tua vez");
                    break;
                case "":
                    xPlaying.text(PlayerList[currentindex].getName() + " is playing");
                    break;
                case "DE":
                    xPlaying.text(PlayerList[currentindex].getName() + " du bist dran");
                    break;
                default:
                    xPlaying.text(PlayerList[currentindex].getName() + " is playing");

            }

            //Bot handeling of Auction
            if(PlayerList[currentindex].isBot){
                if(((currentprice+10) < field.initialPrice) && ((currentprice*2) < PlayerList[currentindex].Money)){
                    bidbutton.click();
                }else{
                    leavebutton.click();
                }
                await new Promise(r => setTimeout(r, 2000));
            }

            //waits until a button has been pressed
            await this.wait();
            //resets the button waiter
            this.pressed = false;
            //next player will play
            currentindex = (currentindex + 1) % maxplayers;
        }
        let winnermodal = $("#WinnerModal");
        //checks if a winner was selected
        if (!(winner == undefined)) {
            //winner gets the card
            await winner!.buying(field,currentprice);
            winnermodal.show();
            let string = ""

            switch (p.language) {
                case "LUX":
                    string = winner!.name + " heut gewon";
                    break;
                case "FR":
                    string = winner!.name + " à gagne";
                    break;
                case "":
                    string = winner!.name + " has won";
                    break;
                case "PR":
                    string = winner!.name + " ganhou";
                    break;
                case "DE":
                    string = winner!.name + " hat gewonnen";
                    break;
                default:
                    string = winner!.name + " has won";

            }
            $("#WinnerModal .modal-content .modal-header h1").html(string);
        }
        //closes the modal
        modal.hide();
        await this.sleep(4000);
        PlayerList.forEach(player => player.canAuction = true);
        PlayerList.forEach(player => player.inAuctionBot = false);
        winnermodal.hide();




    }



    async wait() {

        while (!this.pressed) {
            await new Promise(r => setTimeout(r, 100));
            console.log(this.pressed);
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}