import questions from "../../Quiz.json"
import $ from "jquery";
import {Player} from "../Player";

export class Quiz {
    goodanswer:number = 0
    goodanswerString:String = "";
    private pressed: Boolean;

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
        console.log(p.name+" entered Quiz");
        this.pressed = false;
        let finalQuizArray = questions.Quiz[Math.floor(Math.random() * questions.Quiz.length)];
        this.goodanswerString = finalQuizArray["1"];
        let modal = $("#QuestionModal");
        $("#QuestionModal .modal-content .modal-header h2").html(finalQuizArray.Title);
        modal.show();

        let indexes = 4;
        for (let i = 1; i < 4; i++) {
            let str: String = "#Answer" + (i + 1).toString();
            let button = $(str);

            if (finalQuizArray[(i + 1).toString()] == "") {
                button.hide();
                button.prop("disable", true);
                indexes -= 1;
            }

        }

        var indexarray = this.getIndexes(indexes);
        for (var i = 0; i < indexes; i++) {
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


    clicks(button:JQuery<String>,index:number,modal:JQuery, p: Player){
        console.log("This event is being called by: " + p.name);
        let self = this;
        button.click(async function () {
            button.css("background-color", "orange");
            await new Promise(r => setTimeout(r, 1000));
            button.css("background-color", "white");
            if(self.goodanswer == index){
                console.log("Hello this is player " + p.name)
                let goodconsequence = questions.Consequences[Math.floor(Math.random() * questions.Consequences.length)];

                if(goodconsequence.Type == "Money"){
                    let reward = goodconsequence[Math.floor(Math.random() * 4).toString()]
                    p.recieveMoney(reward);
                    await self.exit("You were right, you receive: " + reward + " B-Coins");
                }
                else if(goodconsequence.Type == "Movement"){
                    let reward = goodconsequence[Math.floor(Math.random() * 4).toString()]
                    if(p.isBot){
                        p.stillMovingBot = true;
                        p.nrOfMove = reward;
                    }else{
                        p.move(reward);
                    }
                    await self.exit("You were right, you can move: " + reward + " Cases");
                }

                self.pressed = true;
                modal.hide();
            }
            else{
                let badconsequence = questions.Consequences[Math.floor(Math.random() * questions.Consequences.length)];

                if(badconsequence.Type == "Money"){
                    let penalty = badconsequence[Math.floor(Math.random() * 4).toString()]
                    p.payAmmount(penalty);
                    await self.exit("You were wrong you loose: " + penalty + " B-Coins");
                }
                else if(badconsequence.Type == "Movement"){
                    await self.exit("You were wrong but moving backwards is not yet implemented so you're lucky this time");
                }

                self.pressed = true;
                modal.hide();
            }
            $(this).off("click");
        });
    }

    async exit( Consquence: String) {
        for (let i = 0; i < 4; i++) {
            let str: String = "#Answer" + (i + 1).toString();
            let button = $(str);
            button.text("");
            button.hide();
        }
        $("#TimerQuestion").hide();
        let self =this;
        $("#QuestionModal .modal-content .modal-header h2").html("Answer was: " + self.goodanswerString + "<br/>" + Consquence);

        await new Promise(r => setTimeout(r, 2000));

    }
    async wait() {
        let i = 60;
        while (!this.pressed && i >= 0) {
            await new Promise(r => setTimeout(r, 1000));
            $("#TimerQuestion").text("Time left: " + i);
            i--;
        }
        if(this.pressed){
            $("#TimerQuestion").hide();
        }
        if(i <= 0){
            //case such that the player gets punished.
            $("#QuestionModal").hide();
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}