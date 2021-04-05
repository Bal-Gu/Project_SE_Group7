import {Player} from "../Player";

export class setMortgage {
    pressed: boolean = false;

    hasOneNoneMortgage(p:Player):boolean{
        for(let i=0;i<p.fieldsOwned.length;i++){
            if(p.fieldsOwned[i].isMortgage != undefined && !p.fieldsOwned[i].isMortgage){
                return true;
            }
        }
        return false;
    }

    async event(p: Player):Promise<void> {
        this.pressed = false;
        //Will be done on the same as the MortageModal
        let modal = $("#MorageModal");

        //either no fields or all beeing set to mortgage
        if (!this.hasOneNoneMortgage(p)) {
            console.log("lol");
            return;
        }

        modal.show();

        this.paint(p);
        console.log("enter wait");
        await this.wait();
        return ;

    }

    paint(p: Player) {
        let output = "";
        for (let i = 0; i < p.fieldsOwned.length; i++) {
            if(p.fieldsOwned[i].isMortgage||p.fieldsOwned[i].isMortgage == undefined){
                continue;
            }
            output += "<tr>";
            let color = p.fieldsOwned[i].color;
            //Filled Color
            output += "<td style='-webkit-text-stroke: 1px black;color:ghostwhite;font-size: 40px;background-color:" + color + "'" + ">" + p.fieldsOwned[i].name + "</td>"
            //Button to pay
            //disabled if not enough money to pay
            output += "<td><button id='paybuttonSetMortgage"+i+"' style='height: 100px;border-radius: 12px;width: 100%;background-color: darkred;text-align: center'><h1 style='font: -apple-system-body;margin-bottom: 50px;color: white;font-size:50px'>-"+p.fieldsOwned[i].initialPrice+"</h1></button></td>";

            output += "</tr>";
        }
        output += "<tr><td id='PlayersMoney' colspan='2' style='text-align: right;color: darkgreen'>" + p.Money + " <button id='ApproveButtonMortgage' style='background-color:gray; color: white' >Accept</button></td></tr>"


        $("#mortageTable").html(output);

        // PayButton has been clicked.  Needs to recall paint. If all are mortgage after paying then autoclose else repaint
        //   mortage set to true.
        for(let i=0;i<p.fieldsOwned.length;i++){
            let string = "#paybuttonSetMortgage"+i;
            $(string).click(()=>{
                p.recieveMoney(p.fieldsOwned[i].initialPrice);
                p.fieldsOwned[i].isMortgage = true;
                if (!this.hasOneNoneMortgage(p)) {
                    $("#MorageModal").hide();
                    this.pressed = true;
                    return;
                }
                this.paint(p);
            });
        }
        //acts as a closing button
        $("#ApproveButtonMortgage").click(()=>{
            $("#MorageModal").hide();
            this.pressed = true
        });

    }
    async wait() {

        while (!this.pressed) {
            console.log(this.pressed);
            await new Promise(r => setTimeout(r, 2000));
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}