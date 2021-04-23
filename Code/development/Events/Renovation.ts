import {Player} from "../Player";
import globals from "../../globalVariable.json"
import {starshower} from "../../graphic/animation/starshower"
export class Renovation {


    i: number;
    private pressed: boolean;
    p: Player

    async event(p: Player) {
        this.pressed = false;
        this.p = p;

        let modal = $("#MorageModal");
        if (p.totalWorth() < 0) {
            p.gameOver();
            return;
        }
        $("#MorageModal .modal-content h1").html("Renovation");
        modal.css("display", "block");
        let output = "";
        let total = 0;

        for (this.i = 0; this.i < p.fieldsOwned.length; this.i++) {
            if(!p.fieldsOwned[this.i].hasAll){
                continue;
            }
            output += "<tr>";
            let color = p.fieldsOwned[this.i].color!;
            output += "<td style='-webkit-text-stroke: 1px black;color:ghostwhite;font-size: 40px;background-color:" + color + "'" + ">" + p.fieldsOwned[this.i].name + "</td>"
            output += "<td id='stars" + this.i + "'>";
            // random amount of stars
            const stars = p.fieldsOwned[this.i].renovatiosAmmount == undefined ? 0 : p.fieldsOwned[this.i].renovatiosAmmount;
            if (p.fieldsOwned[this.i].isMortgage) {

                output += "💸💸💸💸";
            }
            // @ts-ignore
            for (var j = 0; j < stars; j++) {
                output += "⭐";
            }
            output += "</td>";
            output += "<td><button style='background-color: white' id = 'Addbutton" + this.i + "'><span style='height: 25px;width: 25px;padding-top: 2px;background-color: green; border-radius: 50%; display: block'>▲</span></button></td>";
            output += "<td><button style='background-color: white' id = 'Removebutton" + this.i + "'><span style=' text-align:center; padding-top: 4px;  height: 25px;width: 25px;background-color: red; border-radius: 50%; display: block'>▼</span></button></td>";
            output += "<td id = 'Price" + this.i + "' style='color: #18892b'>0</td>";
            output += "</tr>";
        }
        if(p.Money < 0) {
            output += "<tr><td id='totalAmmountInModal' colspan='5' style='text-align: right'>" + p.Money + " <button id='ApproveButtonMortgage' style='color: red' disabled>Accept</button></td></tr>"
        }else{
            output += "<tr><td id='totalAmmountInModal' colspan='5' style='text-align: right'>" + p.Money + " <button id='ApproveButtonMortgage' style='color: green' >Accept</button></td></tr>"
        }

        $("#mortageTable").html(output);


        for (this.i = 0; this.i < p.fieldsOwned.length; this.i++) {
            let value = this.i;
            let addbuttonstring = "#Addbutton" + value;
            await $(addbuttonstring).click(() => this.startCaller(value, p));
        }
        for (this.i = 0; this.i < p.fieldsOwned.length; this.i++) {
            let value = this.i;
            let removebuttonstring = "#Removebutton" + value;
            await $(removebuttonstring).click(() => this.sellCaller(value, p));
        }


        modal.show();
        await this.wait();
    }

    startCaller(k: number, p: Player) {

        let starstrings = "#stars" + k;
        let star = $(starstrings);
        var starstring = "";

        //fields not beeing set here means that the field shouldn't be in there. Just a check to make sure the app doesn't crash
        if (p.fieldsOwned[k].isMortgage == undefined || p.fieldsOwned[k].renovatiosAmmount == undefined) {
            return;
        }
        //Already mortgage so it needs to get out.
        if (p.fieldsOwned[k].isMortgage && star.text() === "💸💸💸💸") {
            return;
        }
        if (star.text() == "💸💸💸💸💸") {
            p.fieldsOwned[k].isMortgage = false;
            star.text("");
            this.totalModifier(p.fieldsOwned[k].initialPrice * -1);
            this.RowValue(p.fieldsOwned[k].initialPrice, k, false);
            return;
        }


        if (globals.MaxRenovations == star.text().length) {
            return;
        }

        let max = star.text().length;
        let allsame = true;
        let hasmortgage = false;
        for (let i = 0; i < p.fieldsOwned.length; i++) {
            let starstrings = "#stars" + i;
            let stari = $(starstrings);
            if (stari.text().length >= max && p.fieldsOwned[i].color == p.fieldsOwned[k].color) {
                allsame = allsame && true;
                max = stari.text().length;
                if (p.fieldsOwned[i].isMortgage) {
                    hasmortgage = true;
                }
            } else if (stari.text().length < max && p.fieldsOwned[i].color == p.fieldsOwned[k].color) {
                allsame = false;
            }
        }

        if (hasmortgage) {
            return;
        }

        if (!allsame && star.text().length == max) {
            return
        }


        // @ts-ignore
        for (let j = 0; j < (star.text().length >= globals.MaxRenovations ? globals.MaxRenovations : star.text().length + 1); j++) {
            starstring += "⭐";
        }
        // @ts-ignore
        this.totalModifier(p.fieldsOwned[k].renovationscosts * -1);
        // @ts-ignore
        this.RowValue(p.fieldsOwned[k].renovationscosts, k, false);
        star.html(starstring);


        return undefined;
    }

    sellCaller(k: number, p: Player) {
        let starstrings = "#stars" + k;
        let star = $(starstrings);
        var starstring = "";
        if (p.fieldsOwned[k].isMortgage == undefined || p.fieldsOwned[k].renovatiosAmmount == undefined) {
            return;
        }

        if (p.fieldsOwned[k].isMortgage && star.text() == "💸💸💸💸") {
            return;
        }

        //Already mortgage so it needs to get out.
        if (p.fieldsOwned[k].isMortgage && star.text() === "💸💸💸💸💸") {
            return;
        }


        if (star.text().length == 0) {
            star.text("💸💸💸💸💸");
            p.fieldsOwned[k].isMortgage = true;
            this.totalModifier(p.fieldsOwned[k].initialPrice);
            this.RowValue(p.fieldsOwned[k].initialPrice, k, true);
            return;
        }
        let min = star.text().length;
        let allsame = true;
        for (let i = 0; i < p.fieldsOwned.length; i++) {
            let starstrings = "#stars" + i;
            let stari = $(starstrings);
            if (stari.text().length <= min && p.fieldsOwned[i].color == p.fieldsOwned[k].color) {
                if(stari.text().length < min){
                    min = stari.text().length;
                    allsame = false;
                }else{
                    allsame = allsame && true;
                }
            } else if (stari.text().length > min && p.fieldsOwned[i].color == p.fieldsOwned[k].color) {
                allsame = false;
            }
        }

        if (!allsame && star.text().length == min) {
            return;
        }


        // @ts-ignore
        for (let j = 0; j < (star.text().length - 1 >= 0 ? star.text().length - 1 : 0); j++) {
            starstring += "⭐";
        }
        // @ts-ignore
        this.totalModifier(p.fieldsOwned[k].renovationscosts)
        // @ts-ignore
        this.RowValue(p.fieldsOwned[k].renovationscosts, k, true);
        star.html(starstring);


    }

    RowValue(ammount: number, index: number, addition: boolean) {
        let rowstring = "#Price" + index;
        let row = $(rowstring);
        let value = parseInt(row.text());
        value += (addition ? ammount : ammount * -1);
        if (value >= 0) {
            row.text(value);
        } else {
            row.text(value);
        }

    }


    totalModifier(ammount: number) {
        let total = $("#totalAmmountInModal");
        let value = parseInt(total.text());
        value += ammount;

        if (value >= 0) {
            total.html(value + "" + " <button style='color: #18892b'  id='ApproveButtonMortgage'>Accept</button>");
            $("#ApproveButtonMortgage").click(() => {
                for (let m = 0; m < this.p.fieldsOwned.length; m++) {
                    let starstrings = "#stars" + m;
                    let starr = $(starstrings);
                    let s:starshower = new starshower();
                    if (starr.text() === "💸💸💸💸💸" || starr.text() === "💸💸💸💸") {
                        this.p.fieldsOwned[m].renovatiosAmmount = 0
                        s.showHideStars(this.p.map.indexOf(this.p.fieldsOwned[m]),0,this.p.ReferenceNumber);
                    } else {
                        this.p.fieldsOwned[m].renovatiosAmmount = starr.text().length;
                        s.showHideStars(this.p.map.indexOf(this.p.fieldsOwned[m]),starr.text().length,this.p.ReferenceNumber);
                    }

                }
                this.p.recieveMoney(value  -this.p.Money);
                this.pressed = true;
                $("#MorageModal").hide();
            });

        } else {
            total.html(value + "" + " <button style='color: #990F02' disabled  id='ApproveButtonMortgage'>Accept</button>");

        }
    }

    async wait() {

        while (!this.pressed) {
            await new Promise(r => setTimeout(r, 2000));

        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}


