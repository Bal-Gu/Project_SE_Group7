import {Player} from "../Player";

export class RepayMortgage {
    pressed: boolean = false;

    canRepay(p: Player) {
        let min = Infinity;
        //checks the minimum
        for (let i = 0; i < p.fieldsOwned.length; i++) {
            if (p.fieldsOwned[i].isMortgage != undefined && p.fieldsOwned[i].isMortgage) {
                if (min > p.fieldsOwned[i].initialPrice) {

                    min = p.fieldsOwned[i].initialPrice;

                }
            }

        }
        //if the owner has not enough money the
        return min <= p.Money;

    }

    async event(p: Player):Promise<void> {
        this.pressed = false;
        //Will be done on the same as the MortageModal
        let modal = $("#MorageModal");

        if (!this.canRepay(p)) {
            return;
        }

        modal.show();

        this.paint(p);
        await this.wait();
        return ;

    }

    paint(p: Player) {
        let output = "";
        for (let i = 0; i < p.fieldsOwned.length; i++) {
            if(!p.fieldsOwned[i].isMortgage||p.fieldsOwned[i].isMortgage == undefined){
                continue;
            }
            output += "<tr>";
            let color = p.fieldsOwned[i].color;
            //Filled Color
            output += "<td style='-webkit-text-stroke: 1px black;color:ghostwhite;font-size: 40px;background-color:" + color + "'" + ">" + p.fieldsOwned[i].name + "</td>"
            //shows Price to Pay
            output += "<td><h1 style='font: -apple-system-body'>"+p.fieldsOwned[i].initialPrice+"</h1></td>";
            //Button to pay
            //disabled if not enough money to pay
            if(p.fieldsOwned[i].initialPrice > p.Money) {
                output += "<td><button disabled style='height: 125px;width: 100%;color: red;text-align: center'>Not Enough</button></td>";
            }else{
                output += "<td><button id='paybuttonRepayMortgage"+i+"' style='height: 125px;width: 100%;color: darkgreen;text-align: center'>PAY</button></td>";
            }
            output += "</tr>";
        }
        output += "<tr><td id='PlayersMoney' colspan='3' style='text-align: right;color: darkgreen'>" + p.Money + " <button id='ApproveButtonMortgage' style='background-color:gray; color: white' >Accept</button></td></tr>"


        $("#mortageTable").html(output);

        // PayButton has been clicked.  Needs to recall paint. If canRepay after paying then autoclose else repaint
        //   mortage set to false.
        for(let i=0;i<p.fieldsOwned.length;i++){
            let string = "#paybuttonRepayMortgage"+i;
            $(string).click(()=>{
                p.payAmmount(p.fieldsOwned[i].initialPrice);
                p.fieldsOwned[i].isMortgage = false;
                if (!this.canRepay(p)) {
                    $("#MorageModal").hide();
                    this.pressed = true;
                    return;
                }
                this.paint(p);
            });
        }

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
