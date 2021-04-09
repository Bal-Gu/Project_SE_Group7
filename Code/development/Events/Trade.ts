import {Player} from "../Player";

export class Trade {
    private pressed: Boolean = false;

    async event(init: Player, target: Player) {

        let modal = $("#TradingModal");
        modal.show();
        $("#trader1").html(init.name);
        $("#trader2").html(target.name);
        //TODO only allow mortgage or unrenovated cards

        for (let i = 0; i < init.fieldsOwned.length; i++) {
            if(init.fieldsOwned[i].renovatiosAmmount != undefined){
                // @ts-ignore
                if(init.fieldsOwned[i].renovatiosAmmount > 0 ){
                          continue;
                }
            }
            $("#tradingButtonCollum1").append("<tr><td><button class='tradingButtons'>" + init.fieldsOwned[i].name + "</button></td></tr>");
        }
        for (let i = 0; i < target.fieldsOwned.length; i++) {
            $("#tradingButtonCollum4").append("<tr><td><button class='tradingButtons'>"+ init.fieldsOwned[i].name + "</button></td></tr>");
        }

        //TODO replace knapi by the actual value the owner wants to give
        //TODO color the buttons
        $(".tradingButtons").click(function () {
            // @ts-ignore
            const htmlToBeMoved = this.parentElement.parentElement;

            // @ts-ignore
            if (this.parentElement.parentElement.parentElement.id == "tradingButtonCollum1") {
                // @ts-ignore
                $("#tradingButtonCollum2").append(htmlToBeMoved);
            } else { // @ts-ignore
                if (this.parentElement.parentElement.parentElement.id == "tradingButtonCollum2") {
                    // @ts-ignore
                    $("#tradingButtonCollum1").append(htmlToBeMoved);
                } else { // @ts-ignore
                    if (this.parentElement.parentElement.parentElement.id == "tradingButtonCollum3") {
                        // @ts-ignore
                        $("#tradingButtonCollum4").append(htmlToBeMoved);
                    } else { // @ts-ignore
                        if (this.parentElement.parentElement.parentElement.id == "tradingButtonCollum4") {
                            // @ts-ignore
                            $("#tradingButtonCollum3").append(htmlToBeMoved);
                        }
                    }
                }
            }
        });
        //Exit button
        $(".close").click(()=>{
            this.pressed = true;
            modal.hide();
        });
        //TODO Approve button also remove boolean of ownable or set them. CHange owner and remove them
        //verifiy the 2 input fields no negativ and replace x by max if to much
        let trader1 = $("#traderinput1");
        trader1.change(()=>{
            Trade.tradingValidation(trader1,init,true);
        });
        let trader2 = $("#traderinput2");
        trader2.change(()=>{
            Trade.tradingValidation(trader2,target,false);
        });

        await this.wait();
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

    private static tradingValidation(trader1: JQuery<HTMLElement>, p:Player,first:boolean) {
        let ammount = Number(trader1.val());
        trader1.val("");
        let lable = first?$("#inputLable1"):$("#inputLable2");
        if(isNaN(ammount)){
            return;
        }
        else{
            if(ammount>p.Money){
                lable.html(p.Money+"");
            }
            else if(ammount<=0){
                lable.html(0+"");
            }
            else{
                let string = "<input class='tradingButtons'>"+ammount;
                lable.html(ammount+"");
            }
        }
    }
}