import {Player} from "../Player";
import $ from "jquery";

export class Auction {
    pressed: boolean = false;


    async AuctionEvent(p: Player, PlayerList: Player[], field) {
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

        //setting the values
        xPlaying.text(PlayerList[currentindex].getName() + " is playing");


        //init leavebutton
        let self = this;
        leavebutton.click(function () {if(isNaN(Number(textfield.val()!.toString())))
            console.log("leave");
            PlayerList[currentindex].canAuction = false;
            ammountOfPlayer--;
            self.pressed = true;
        });

        bidbutton.click(function (){
            currentprice += increment;
            xAmmount.text("Current price " + currentprice +  "B-coins");
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

        while (ammountOfPlayer != 1) {
            //skips players that are out
            if(!PlayerList[currentindex].canAuction){
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
                PlayerList[currentindex].canAuction = false;
                currentindex = (currentindex + 1) % maxplayers;
                ammountOfPlayer--;
                continue;
            }
            else{
                if(!PlayerList[currentindex].canBuy(currentprice+10)){
                    increment = Math.max((PlayerList[currentindex].Money - increment),10);
                    textfield.val(increment);
                    continue;
                }
            }
            //update the player who is playing
            xPlaying.text(PlayerList[currentindex].getName() + " is playing");

            //waits until a button has been pressed
            await this.wait();
            //resets the button waiter
            this.pressed = false;
            //next player will play
            currentindex = (currentindex + 1) % maxplayers;
        }
        //checks if a winner was selected
        if (!(winner == undefined)) {
            //winner gets the card
            console.log("winner has been chosen");
            winner!.buying(field,currentprice);

        }
        //closes the modal
        await this.sleep(4000);

        modal.hide();

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