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
        let tradingModalTitle = $("#TradingModal .modal-content .modal-header h2");
        let clicks = $("#approveButtonTrading");
        switch (init.language) {
            case "LUX":
                tradingModalTitle.text("Handelsevent");
                clicks.text("OK");
                break;
            case "FR":
                tradingModalTitle.text("Événement de Commerce");
                clicks.text("Accepter");
                break;
            case "PR":
                tradingModalTitle.text("Evento de negociação");
                clicks.text("Aceitar");
                break;
            case "":
                tradingModalTitle.text("Trading event");
                clicks.text("Accept");
                break;
            case "DE":
                tradingModalTitle.text("Handelsereignis");
                clicks.text("Akzeptieren");
                break;
            default:
                tradingModalTitle.text("Trading event");
                clicks.text("Accept");
        }


        modal.show();

        $("#trader1").html(init.name);

        $("#trader2").html(target.name);
        //TODO only allow mortgage or unrenovated cards

        let tradingButtonCollum1 = $("#tradingButtonCollum1");
        tradingButtonCollum1.html("");
        $("#tradingButtonCollum2").html("");
        $("#tradingButtonCollum3").html("");
        let tradingButtonCollum4 = $("#tradingButtonCollum4");
        tradingButtonCollum4.html("");


        for (let i = 0; i < init.fieldsOwned.length; i++) {
            if (init.fieldsOwned[i].renovatiosAmmount != undefined) {
                // @ts-ignore
                if (init.fieldsOwned[i].renovatiosAmmount > 0) {
                    continue;
                }
            }
            this.traderingRow1.push(init.fieldsOwned[i]);
            if (init.fieldsOwned[i].isMortgage) {
                tradingButtonCollum1.append("<tr><td><button class='tradingButtons' id='1tradingButton" + i + "' style='color: white;background-color:" + init.fieldsOwned[i].color + "'>" + init.fieldsOwned[i].name + " 💸" + "</button></td></tr>");
            } else {
                tradingButtonCollum1.append("<tr><td><button class='tradingButtons' id='1tradingButton" + i + "' style='color: white;background-color:" + init.fieldsOwned[i].color + "'>" + init.fieldsOwned[i].name + "</button></td></tr>");
            }
        }
        for (let i = 0; i < target.fieldsOwned.length; i++) {
            if (target.fieldsOwned[i].renovatiosAmmount != undefined) {
                // @ts-ignore
                if (target.fieldsOwned[i].renovatiosAmmount > 0) {
                    continue;
                }
            }
            this.traderingRow4.push(target.fieldsOwned[i]);
            if (target.fieldsOwned[i].isMortgage) {
                tradingButtonCollum4.append("<tr><td><button class='tradingButtons' id='4tradingButton" + i + "' style='color: white;background-color:" + target.fieldsOwned[i].color + "'>" + target.fieldsOwned[i].name + " 💸" + "</button></td></tr>");
            } else {
                tradingButtonCollum4.append("<tr><td><button class='tradingButtons' id='4tradingButton" + i + "' style='color: white;background-color:" + target.fieldsOwned[i].color + "'>" + target.fieldsOwned[i].name + "</button></td></tr>");
            }
        }

        if (target.hasErasmusDispense) {
            tradingButtonCollum4.append("<tr><td><button class='tradingButtons' id='erasmusButton'><h2 style='-webkit-text-fill-color:white'>Erasmus Dispense</h2></button> </td></tr>")
        }
        if (init.hasErasmusDispense) {
            tradingButtonCollum1.append("<tr><td><button class='tradingButtons' id='erasmusButton'><h2 style='-webkit-text-fill-color:white'>Erasmus Dispense</h2></button> </td></tr>")
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
                if (htmlToBeMoved.textContent.indexOf("Erasmus Dispense") > -1) {
                    self.ErasmusDispenseGiven1 = true;
                }
                // @ts-ignore
                self.swap(htmlToBeMoved.textContent.replace("[^\x20-\x7E]", ''), 1, 2);
            } else { // @ts-ignore
                if (this.parentElement.parentElement.parentElement.id === "tradingButtonCollum2") {
                    // @ts-ignore
                    if (htmlToBeMoved.textContent.indexOf("Erasmus Dispense") > -1) {
                        self.ErasmusDispenseGiven1 = false;

                    }
                    // @ts-ignore
                    tradingButtonCollum1.append(htmlToBeMoved);
                    // @ts-ignore
                    self.swap(htmlToBeMoved.textContent.replace("[^\x20-\x7E]", ''), 2, 1);
                } else { // @ts-ignore
                    if (this.parentElement.parentElement.parentElement.id === "tradingButtonCollum3") {
                        // @ts-ignore
                        $("#tradingButtonCollum4").append(htmlToBeMoved);
                        // @ts-ignore
                        if (htmlToBeMoved.textContent.indexOf("Erasmus Dispense") > -1) {
                            self.ErasmusDispenseGiven2 = false;
                        }
                        // @ts-ignore
                        self.swap(htmlToBeMoved.textContent.replace("[^\x20-\x7E]", ''), 3, 4);

                    } else { // @ts-ignore
                        if (this.parentElement.parentElement.parentElement.id === "tradingButtonCollum4") {
                            // @ts-ignore
                            $("#tradingButtonCollum3").append(htmlToBeMoved);
                            // @ts-ignore
                            if (htmlToBeMoved.textContent.indexOf("Erasmus Dispense") > -1) {
                                self.ErasmusDispenseGiven2 = true;
                            }
                            // @ts-ignore
                            self.swap(htmlToBeMoved.textContent.replace("[^\x20-\x7E]", ''), 4, 3);
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
        
        clicks.click(() => {
            clicks.off("click");
            let valueForInit: number = Number(trader1.text());
            let valueForTransfer: number = Number(trader2.text());
            if (self.targetPlayer.isBot) {
                let total = 0;
                for (let i = 0; i < self.traderingRow2.length; i++) {
                    total += self.traderingRow2[i].initialPrice;
                }
                total += valueForInit;
                if (this.ErasmusDispenseGiven1) {
                    total += 500;
                }
                for (let i = 0; i < self.traderingRow3.length; i++) {
                    total -= self.traderingRow3[i].initialPrice;
                }
                total -= valueForTransfer;
                if (this.ErasmusDispenseGiven2) {
                    total -= 500;
                }
                if (total <= 0) {
                    $("#approveButtonTrading").html("Trade is not balanced");
                    return;
                }
                init.haspressed = false;
            }
            modal.hide();
            console.log(valueForInit + " " + valueForTransfer);
            init.recieveMoney(valueForTransfer);
            init.payAmmount(valueForInit);
            target.recieveMoney(valueForInit);
            target.payAmmount(valueForTransfer);
            //erasmus dispens
            if (this.ErasmusDispenseGiven1) {
                init.tradeDispense(target);
            }
            if (this.ErasmusDispenseGiven2) {
                target.tradeDispense(init);
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
        trader1.html("0");
        trader2.html("0");
        trader1input.off();
        trader2input.off();
    }

    swap(textContent: string | null, r1: number, r2: number) {
        console.log(textContent);
        let Row1: Field[];
        switch (r1) {
            case 1:
                Row1 = this.traderingRow1;
                break;
            case 2:
                Row1 = this.traderingRow2;
                break;
            case 3:
                Row1 = this.traderingRow3;
                break;
            default:
                Row1 = this.traderingRow4;
                break;
        }

        let Row2: Field[];
        switch (r2) {
            case 1:
                Row2 = this.traderingRow1;
                break;
            case 2:
                Row2 = this.traderingRow2;
                break;
            case 3:
                Row2 = this.traderingRow3;
                break;
            default:
                Row2 = this.traderingRow4;
                break;
        }


        if (textContent == undefined || textContent == "Erasmus Dispense") {
            return;
        }
        let textTrimmed: string = textContent.replace(" 💸", "");
        console.log(textTrimmed);
        console.log(Row1);
        let f: Field | undefined = Row1.find(element => textTrimmed.includes(element.name));
        if (f == undefined) {
            console.log("No f");
            return;
        }
        Row2.push(f);
        Row1.forEach((item, index) => {
            if (item === f) Row1.splice(index, 1);
        });
        console.log(this.traderingRow1);
        console.log(this.traderingRow2);
        console.log(this.traderingRow3);
        console.log(this.traderingRow4);
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
        console.log("called trade valid");
        let ammount = Number(trader1.val());
        trader1.val("");
        let lable = first ? $("#inputLable1") : $("#inputLable2");
        if (isNaN(ammount)) {
            console.log("isnan");
            return;
        } else {
            if (ammount > p.Money) {
                lable.html(p.Money + "");
                console.log("toomuch");
            } else if (ammount <= 0) {
                lable.html(0 + "");
                console.log("less or equal to 0");
            } else {
                lable.html(ammount + "");
                console.log("final step");
            }
        }
    }

    async decidePlayer(ReferencePlayer: Player, PlayerArray: Player[]) {
        let target = $("#TargetSelection");
        let targetRow = $("#TargetEntry");
        let targetTitle = $("#TargetSelection .modal-content .modal-header h2");
        let Titleh3 = $("#TargetSelection .modal-content h3");
        switch (ReferencePlayer.language) {
            case "LUX":
                targetTitle.html("Handelsevent");
                Titleh3.text("Mat wéiengem spiller wellt der handelen?");
                break;
            case "FR":
                targetTitle.html("Événement de Commerce")
                Titleh3.text("Avec quel joueur voulez vous commercer?");
                break;
            case "PR":
                targetTitle.html("Evento de negociação");
                Titleh3.text("Com que jogador queres começar?");
                break;
            case "":
                targetTitle.html("Trading event");
                Titleh3.text("With which player do you want to trade");

                break;
            case "DE":
                targetTitle.html("Handelsereignis");
                Titleh3.text("Mit welchem Spieler möchten sie verhandlen?");

                break;
            default:
                Titleh3.text("With which player do you want to trade");
                targetTitle.html("Trading event");
        }
        target.show();
        let out = "<tr>";
        for (let i = 0; i < PlayerArray.length; i++) {
            if (PlayerArray[i] == ReferencePlayer || PlayerArray[i].isGameOver) {

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

                    this.targetPlayer = PlayerArray[i];
                    this.pressed = true;
                });
            }
        }
        await this.wait();
        console.log(ReferencePlayer.name);
        console.log(this.targetPlayer.name);
        this.targetPlayer.fieldsOwned.forEach( field => {
            console.log(field.name);
        })
        ReferencePlayer.fieldsOwned.forEach( field => {
            console.log(field.name);
        })
        target.hide();
    }

    getTarger(): Player {
        this.pressed = false;
        return this.targetPlayer;
    }
}