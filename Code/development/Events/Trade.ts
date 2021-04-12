import {Player} from "../Player";
import {Field} from "../Fields/Field";


export class Trade {
    private pressed: Boolean = false;
    private traderingRow1: Field[] = [];
    private traderingRow2: Field[] = [];
    private traderingRow3: Field[] = [];
    private traderingRow4: Field[] = [];

    private targetPlayer: Player;

    private ErasmusDispenseGiven1: boolean = false;
    private ErasmusDispenseGiven2: boolean = false;


    async event(init: Player, target: Player) {
        let modal = $("#TradingModal");
        modal.show();


        $("#trader1").html(init.name);
        $("#trader2").html(target.name);
        //TODO only allow mortgage or unrenovated cards

        for (let i = 0; i < init.fieldsOwned.length; i++) {
            if (init.fieldsOwned[i].renovatiosAmmount != undefined) {
                // @ts-ignore
                if (init.fieldsOwned[i].renovatiosAmmount > 0) {
                    continue;
                }
            }

            if (init.fieldsOwned[i].isMortgage) {
                $("#tradingButtonCollum1").append("<tr><td><button class='tradingButtons' style='color: white;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;background-color:" + init.fieldsOwned[i].color + "'>" + init.fieldsOwned[i].name + " 💸" + "</button></td></tr>");
            } else {
                $("#tradingButtonCollum1").append("<tr><td><button class='tradingButtons' style='color: white;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;background-color:" + init.fieldsOwned[i].color + "'>" + init.fieldsOwned[i].name + "</button></td></tr>");
            }
        }
        for (let i = 0; i < target.fieldsOwned.length; i++) {
            if (init.fieldsOwned[i].renovatiosAmmount != undefined) {
                // @ts-ignore
                if (target.fieldsOwned[i].renovatiosAmmount > 0) {
                    continue;
                }
            }
            this.traderingRow1.push(target.fieldsOwned[i]);
            if (target.fieldsOwned[i].isMortgage) {
                $("#tradingButtonCollum4").append("<tr><td><button class='tradingButtons' style='color: white;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;background-color:" + target.fieldsOwned[i].color + "'>" + target.fieldsOwned[i].name + " 💸" + "</button></td></tr>");
            } else {
                $("#tradingButtonCollum4").append("<tr><td><button class='tradingButtons' style='color: white;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;background-color:" + target.fieldsOwned[i].color + "'>" + target.fieldsOwned[i].name + "</button></td></tr>");
            }
        }

        if (target.hasErasmusDispense) {
            $("#tradingButtonCollum4").append("<tr><td><button class='tradingButtons' ><h2 style='-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;-webkit-text-fill-color:white'>Erasmus Dispense</h2></button> </td></tr>")
        }
        if (init.hasErasmusDispense) {
            $("#tradingButtonCollum1").append("<tr><td><button class='tradingButtons' ><h2 style='-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;-webkit-text-fill-color:white'>Erasmus Dispense</h2></button> </td></tr>")
        }


        let self = this;
        $(".tradingButtons").click(function () {
            // @ts-ignore
            const htmlToBeMoved = this.parentElement.parentElement;

            // @ts-ignore
            if (this.parentElement.parentElement.parentElement.id == "tradingButtonCollum1") {
                // @ts-ignore
                $("#tradingButtonCollum2").append(htmlToBeMoved);
                // @ts-ignore
                if (htmlToBeMoved.textContent == "Erasmus Dispense") {
                    self.ErasmusDispenseGiven1 = true;
                }
                // @ts-ignore
                self.swap(htmlToBeMoved.textContent, self.traderingRow1, self.traderingRow2);
            } else { // @ts-ignore
                if (this.parentElement.parentElement.parentElement.id == "tradingButtonCollum2") {
                    // @ts-ignore
                    if (htmlToBeMoved.textContent == "Erasmus Dispense") {
                        self.ErasmusDispenseGiven1 = false;
                    }
                    // @ts-ignore
                    $("#tradingButtonCollum1").append(htmlToBeMoved);
                    // @ts-ignore
                    self.swap(htmlToBeMoved.textContent, self.traderingRow2, self.traderingRow1);
                } else { // @ts-ignore
                    if (this.parentElement.parentElement.parentElement.id == "tradingButtonCollum3") {
                        // @ts-ignore
                        $("#tradingButtonCollum4").append(htmlToBeMoved);
                        // @ts-ignore
                        if (htmlToBeMoved.textContent == "Erasmus Dispense") {
                            self.ErasmusDispenseGiven2 = true;
                        }
                        // @ts-ignore
                        self.swap(htmlToBeMoved.textContent, self.traderingRow4, self.traderingRow3);

                    } else { // @ts-ignore
                        if (this.parentElement.parentElement.parentElement.id == "tradingButtonCollum4") {
                            // @ts-ignore
                            $("#tradingButtonCollum3").append(htmlToBeMoved);
                            // @ts-ignore
                            if (htmlToBeMoved.textContent == "Erasmus Dispense") {
                                self.ErasmusDispenseGiven2 = false;
                            }
                            // @ts-ignore
                            self.swap(htmlToBeMoved.textContent, self.traderingRow3, self.traderingRow4);
                        }
                    }
                }
            }
        });
        let trader1 = $("#inputLable1");
        let trader2 = $("#inputLable2");
        //Exit button
        $(".close").click(() => {
            this.pressed = true;
            modal.hide();


        });

        $("#approveButtonTrading").click(() => {

            console.log("row2");
            console.log("P1 has erasmus =>" + init.hasErasmusDispense);
            this.traderingRow2.forEach((value) => {
                console.log(value.name);
            });
            console.log("row3");
            console.log("P2 has erasmus =>" + target.hasErasmusDispense);
            this.traderingRow3.forEach((value) => {
                console.log(value.name);
            });


            modal.hide();
            let valueForInit: number = Number(trader1.text());
            let valueForTransfer: number = Number(trader2.text());
            console.log(valueForInit);
            console.log(valueForTransfer);
            init.recieveMoney(valueForTransfer);
            init.payAmmount(valueForInit);
            target.recieveMoney(valueForInit);
            target.payAmmount(valueForTransfer);
            console.log(init.Money);
            console.log(target.Money);
            //erasmus dispens
            if (this.ErasmusDispenseGiven1) {
                target.tradeDispense(init);
            }
            if (this.ErasmusDispenseGiven2) {
                init.tradeDispense(target);
            }
            //TODO iterate through such that people get their traded carts
            this.traderingRow2.forEach((value) => {
                init.exchange(value, target);
            });
            this.traderingRow3.forEach((value) => {
                target.exchange(value, init);
            });

            this.pressed = true;

        });
        let trader1input = $("#traderinput1");
        let trader2input = $("#traderinput2");
        //verifiy the 2 input fields no negativ and replace x by max if to much
        trader1input.change(() => {
            this.tradingValidation(trader1input, init, true);
        });
        trader2input.change(() => {
            this.tradingValidation(trader2input, target, false);
        });

        await this.wait();
    }

    swap(textContent: string | null, traderingRow1: Field[], traderingRow2: Field[]) {
        console.log(textContent);
        if (textContent == undefined || textContent == "Erasmus Dispense") {
            return;
        }
        let textTrimmed: string = textContent.split(" 💸")[0];
        let f: Field | undefined = traderingRow1.find(element => element.name == textTrimmed);
        if (f == undefined) {
            return;
        }
        traderingRow2.push(f);
        traderingRow1.forEach((item, index) => {
            if (item === f) traderingRow1.splice(index, 1);
        });


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

    tradingValidation(trader1: JQuery<HTMLElement>, p: Player, first: boolean) {
        let ammount = Number(trader1.val());
        trader1.val("");
        let lable = first ? $("#inputLable1") : $("#inputLable2");
        if (isNaN(ammount)) {
            return;
        } else {
            if (ammount > p.Money) {
                lable.html(p.Money + "");
            } else if (ammount <= 0) {
                lable.html(0 + "");
            } else {
                lable.html(ammount + "");
            }
        }
    }

    async decidePlayer(ReferencePlayer: Player, PlayerArray: Player[]) {
        let target = $("#TargetSelection");
        let targetRow = $("#TargetEntry");
        target.show();
        let out = "<tr>";
        for (let i = 0; i < PlayerArray.length; i++) {
            if (PlayerArray[i] == ReferencePlayer) {

            } else {
                out += "<th><button class='buttonListDesign' id='targetButton" + i + "'>" + PlayerArray[i].name + "</button></th>";
            }

        }
        out += "</tr>";
        targetRow.html(out);
        for (let i = 0; i < PlayerArray.length; i++) {
            if (PlayerArray[i] == ReferencePlayer) {

            } else {
                let targetButtonstring = "#targetButton" + i;

                let targetButton = $(targetButtonstring);
                targetButton.click(() => {
                    console.log("YEEEEEEEEEEEEEET");
                    this.targetPlayer = PlayerArray[i];
                    this.pressed = true;
                });
            }
        }
        await this.wait();
        target.hide();
    }

    getTarger(): Player {
        this.pressed = false;
        return this.targetPlayer;
    }
}