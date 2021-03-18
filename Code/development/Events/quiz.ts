import questions from "../../Quiz.json"
import $ from "jquery";

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

    async event() {
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
            this.clicks(button, i, modal);
        }
        await this.wait();

    }


    clicks(button:JQuery<String>,index:number,modal:JQuery){
        let self = this;
        button.click(async function () {
            if(self.goodanswer == index){
                console.log("You got it");
                await self.exit("Move tree cases back");
                self.pressed = true;
                modal.hide();
            }
            else{

                console.log("Wrong");
                await self.exit("Move to the yeet prison")
                self.pressed = true;
                modal.hide();

            }
        });
    }

    async exit( Consquence: String) {
        for (let i = 0; i < 4; i++) {
            let str: String = "#Answer" + (i + 1).toString();
            let button = $(str);
            button.hide();
        }
        let self =this;
        $("#QuestionModal .modal-content .modal-header h2").html("Answer was: " + self.goodanswerString + "\n" + Consquence);

        await new Promise(r => setTimeout(r, 7000));

    }
    async wait() {

        while (!this.pressed) {
            await new Promise(r => setTimeout(r, 2000));
            console.log(this.pressed);
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}