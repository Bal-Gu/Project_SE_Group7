import globals from "../../globalVariable.json";

export class Dice {
    first:number;
    second:number;

    roll(){
        this.first = 1+this.getRandomInt(globals.DiceNumber);
        this.second = 1+this.getRandomInt(globals.DiceNumber);
    }
    total():number{
        return this.first + this.second;
    }
    isdouble():boolean{
        return this.first == this.second;
    }
    getRandomInt(max:number):number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    getRandom(max) {
        if (max == 6) {
            return [90, 90];
        } else if (max == 5) {
            return [270, 180];
        } else if (max == 4) {
            return [0, 90];
        } else if (max == 3) {
            return [0, 270]
        } else if (max == 2) {
            return [0, 180]
        } else if (max == 1) {
            return [0, 0]
        } else {
            return [0, 0]
        }
    }

    async event(){
        let self = this;
        const cube = document.getElementById('cube');
        const cube2 = document.getElementById('cube2');
        let rollButton = $("#rollButton");
        rollButton.click(function () {
            self.roll();
            rollButton.prop("disabled", true);
            $("#dices").show();
            var xRand = self.getRandom(self.first)[0];
            var yRand = self.getRandom(self.first)[1];
            var xRand2 = self.getRandom(self.second)[0];
            var yRand2 = self.getRandom(self.second)[1];

            xRand = xRand + (Math.floor(Math.random() * 3) + 1) * 360;
            yRand = yRand + (Math.floor(Math.random() * 3) + 1) * 360;
            xRand2 = xRand2 + (Math.floor(Math.random() * 3) + 1) * 360;
            yRand2 = yRand2 + (Math.floor(Math.random() * 3) + 1) * 360;

            setTimeout(function () {
                // @ts-ignore
                cube.style = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
                // @ts-ignore
                cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
                // @ts-ignore
                cube2.style = 'rotateX(' + xRand2 + 'deg) rotateY(' + yRand2 + 'deg)';
                // @ts-ignore
                cube2.style.transform = 'rotateX(' + xRand2 + 'deg) rotateY(' + yRand2 + 'deg)';
            }, 2000);

            setTimeout(function () {
                $("#dices").hide();
                rollButton.prop("disabled", false);
            }, 10000);
            // console.log(xRand % 360 + " " + yRand % 360);

        });
    }
}