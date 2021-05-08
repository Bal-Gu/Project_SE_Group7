import $ from "jquery";
import {Player} from "../Player";
import {Restplace} from "../Fields/Restplace";
import globals from "../../globalVariable.json";
import quizlux from "../../QuizLUX.json";
import quizENG from "../../Quiz.json";
import quizFR from "../../QuizFR.json";
import quizPR from "../../QuizPR.json";
import quizDE from "../../QuizDE.json";


export class Quiz {
    goodanswer: number = 0
    questions: { Quiz: { Title: string, "1": string, "2": string, "3": string, "4": string }[] };
    goodanswerString: String = "";
    private pressed: Boolean = false;
    private indexes: number = 4;
    private p: Player;

    getIndexes(maxnum: number): number[] {
        var array: number[] = [];
        for (let i = 1; i <= maxnum; i++) {
            array.push(i);
        }
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    }

    async event(p: Player) {
        if(this.p == p){
            return;
        }
        let stringrequire = "../../Quiz" + p.language + ".json";
        this.p = p;
        switch (p.language) {
            case "LUX":
                this.questions = quizlux;
                break;
            case "FR":
                this.questions = quizFR;
                break;
            case "PR":
                this.questions = quizPR;
                break;
            case "":
                this.questions = quizENG;
                break;
            case "DE":
                this.questions = quizDE;
                break;
            default:
                this.questions = quizENG;

        }


        let finalQuizArray = this.questions["Quiz"][Math.floor(Math.random() * this.questions["Quiz"].length)];
        this.goodanswerString = finalQuizArray["1"];
        let modal = $("#QuestionModal");
        $("#qz .flip-card-inner").css("transform", "translate(0px, -280px) rotate(135deg) rotateX(180deg) scale(3)");
        $("#QuestionModal .modal-content .modal-header h2").html(finalQuizArray.Title);
        await this.sleep(2000);
        modal.show();


        this.indexes = 4;
        for (let i = 1; i < 4; i++) {
            let str: String = "#Answer" + (i + 1).toString();
            let button = $(str);

            if (finalQuizArray[(i + 1).toString()] == "") {
                button.hide();
                button.prop("disable", true);
                this.indexes -= 1;
            }


        }


        var indexarray = this.getIndexes(this.indexes);
        for (var i = 0; i < indexarray.length; i++) {
            if (indexarray[i] == 1) {
                this.goodanswer = i;
            }
            let str: String = "#Answer" + (i + 1).toString();
            let button = $(str);
            button.show();
            button.prop("disable", false);
            button.text(finalQuizArray[indexarray[i]]);
            this.clicks(button, i, modal, p);
        }
        await this.wait();

    }


    clicks(button: JQuery<String>, index: number, modal: JQuery, p: Player) {
        let self = this;
        button.click(async function () {
            console.log(self.pressed + "click");
            if (self.pressed) {
                return;
            }
            for (let i = 0; i < self.indexes; i++) {
                let str: String = "#Answer" + (i + 1).toString();
                let button = $(str);
                if (i != index) {
                    button.hide();
                }
                button.prop("disable", true);
            }
            button.css("background-color", "orange");
            await new Promise(r => setTimeout(r, 3000));
            button.css("background-color", "white");


            if (self.goodanswer == index) {
                let goodconsequence = self.questions["Consequences"][Math.floor(Math.random() * self.questions["Consequences"].length)];

                if (goodconsequence.Type == "Money") {
                    let reward = goodconsequence[Math.floor(Math.random() * 4).toString()]
                    p.recieveMoney(reward);

                    //TODO ADD LANGUAGE SUPPORT
                    switch (self.p.language) {
                        case "LUX":
                            await self.exit("Richteg, du krist " + reward + " B-Coins");
                            break;
                        case "FR":
                            await self.exit("You were right, you receive: " + reward + " B-Coins");
                            break;
                        case "PR":
                            await self.exit("You were right, you receive: " + reward + " B-Coins");
                            break;
                        case "":
                            await self.exit("You were right, you receive: " + reward + " B-Coins");
                            break;
                        case "DE":
                            await self.exit("You were right, you receive: " + reward + " B-Coins");
                            break;
                        default:
                            await self.exit("You were right, you receive: " + reward + " B-Coins");

                    }
                } else if (goodconsequence.Type == "Movement") {
                    let reward = goodconsequence[Math.floor(Math.random() * 4).toString()]
                    if (p.isBot) {
                        p.stillMovingBot = true;
                        p.nrOfMove = reward;
                    } else {
                        p.move(reward);
                    }

                    //TODO ADD LANGUAGE SUPPORT
                    switch (self.p.language) {
                        case "LUX":
                            await self.exit("Richteg gei " + reward + " cases no  fier");
                            break;
                        case "FR":
                            await self.exit("You were right, you can move: " + reward + " Cases");
                            break;
                        case "PR":
                            await self.exit("You were right, you can move: " + reward + " Cases");
                            break;
                        case "":
                            await self.exit("You were right, you can move: " + reward + " Cases");
                            break;
                        case "DE":
                            await self.exit("You were right, you can move: " + reward + " Cases");
                            break;
                        default:
                            await self.exit("You were right, you can move: " + reward + " Cases");

                    }

                }

                self.pressed = true;
                modal.hide();
                $("#qz .flip-card-inner").css("transform", "translate(0) rotate(0) rotateX(0) scale(1)");
            } else {
                let badconsequence = self.questions["Consequences"][Math.floor(Math.random() * self.questions["Consequences"].length)];
                console.log(badconsequence);
                if (badconsequence.Type == "Money") {
                    let penalty = badconsequence[Math.floor(Math.random() * 4).toString()]
                    p.payAmmount(penalty);
                    let restplace: Restplace = <Restplace>p.map[globals.ParkingNumber]
                    restplace.addToPot(penalty);

                    //TODO ADD LANGUAGE SUPPORT
                    switch (self.p.language) {
                        case "LUX":
                            await self.exit("Falsch du verleierst: " + penalty + " B-Coins");
                            break;
                        case "FR":
                            await self.exit("You were wrong you loose: " + penalty + " B-Coins");
                            break;
                        case "PR":
                            await self.exit("You were wrong you loose: " + penalty + " B-Coins");
                            break;
                        case "":
                            await self.exit("You were wrong you loose: " + penalty + " B-Coins");
                            break;
                        case "DE":
                            await self.exit("You were wrong you loose: " + penalty + " B-Coins");
                            break;
                        default:
                            await self.exit("You were wrong you loose: " + penalty + " B-Coins");

                    }

                } else if (badconsequence.Type == "Movement") {
                    //TODO ADD LANGUAGE SUPPORT
                    switch (self.p.language) {
                        case "LUX":
                            await self.exit("Glëck gehadt neischt ass geschitt.");
                            break;
                        case "FR":
                            await self.exit("Rien ne se passe");
                            break;
                        case "PR":
                            await self.exit("nada acontece");
                            break;
                        case "":
                            await self.exit("Nothing happends. You got lucky");
                            break;
                        case "DE":
                            await self.exit("Glück gehabt. Es geschieht nix.");
                            break;
                        default:
                            await self.exit("Nothing happends. You got lucky");

                    }
                }

                self.pressed = true;
                modal.hide();
                $("#qz .flip-card-inner").css("transform", "translate(0) rotate(0) rotateX(0) scale(1)");
            }
            self.pressed = true;
            //$(this).off("click");
        });
    }

    async exit(Consquence: String) {
        if (this.pressed) {
            return;
        }
        for (let i = 0; i < 4; i++) {
            let str: String = "#Answer" + (i + 1).toString();
            let button = $(str);
            button.text("");
            button.hide();
        }
        $("#TimerQuestion").hide();
        let self = this;
        let questionModalHeader = $("#QuestionModal .modal-content .modal-header h2");

        //TODO ADD LANGUAGE SUPPORT
        switch (this.p.language) {
            case "LUX":
                questionModalHeader.html("Äntweren war: " + self.goodanswerString + "<br/>" + Consquence);
                break;
            case "FR":
                questionModalHeader.html("Answer was: " + self.goodanswerString + "<br/>" + Consquence);
                break;
            case "PR":
                questionModalHeader.html("Answer was: " + self.goodanswerString + "<br/>" + Consquence);
                break;
            case "":
                questionModalHeader.html("Answer was: " + self.goodanswerString + "<br/>" + Consquence);
                break;
            case "DE":
                questionModalHeader.html("Answer was: " + self.goodanswerString + "<br/>" + Consquence);
                break;
            default:
                questionModalHeader.html("Answer was: " + self.goodanswerString + "<br/>" + Consquence);

        }

        await new Promise(r => setTimeout(r, 2000));
        self.pressed = true;
        return;
    }

    async wait() {
        let i = 60;
        while (!this.pressed && i >= 0) {
            await new Promise(r => setTimeout(r, 1000));
            $("#TimerQuestion").text("Time left: " + i);
            i--;
        }
        this.p =  new Player(false,"2",10,1);
        if (this.pressed) {
            $("#TimerQuestion").hide();
        }
        if (i <= 0) {
            //case such that the player gets punished.
            $("#QuestionModal").hide();
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}