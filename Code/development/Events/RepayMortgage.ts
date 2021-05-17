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
        let mortageh1 = $("#MorageModal .modal-content h1");

        if (!this.canRepay(p)) {
            return;
        }
        switch (p.language) {
            case "LUX":
                mortageh1.html("Prêt");
                break;
            case "FR":
                mortageh1.html("Hypothèque");
                break;
            case "PR":
                mortageh1.html("Hipoteca");
                break;
            case "":
                mortageh1.html("Mortage");
                break;
            case "DE":
                mortageh1.html("Hypothek");
                break;
            default:
                mortageh1.html("Mortage");

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
                switch (p.language) {
                    case "LUX":
                        output += "<td><button disabled style='height: 125px;width: 100%;color: red;text-align: center'>Not Enough</button></td>";
                        break;
                    case "FR":
                        output += "<td><button disabled style='height: 125px;width: 100%;color: red;text-align: center'>Pas assez</button></td>";
                        break;
                    case "PR":
                        output += "<td><button disabled style='height: 125px;width: 100%;color: red;text-align: center'>Insuficiente</button></td>";
                        break;
                    case "":
                        output += "<td><button disabled style='height: 125px;width: 100%;color: red;text-align: center'>Not Enough</button></td>";
                        break;
                    case "DE":
                        output += "<td><button disabled style='height: 125px;width: 100%;color: red;text-align: center'>Nicht genug</button></td>";
                        break;
                    default:
                        output += "<td><button disabled style='height: 125px;width: 100%;color: red;text-align: center'>Not Enough</button></td>";

                }

            }else{
                switch (p.language) {
                    case "LUX":
                        output += "<td><button id='paybuttonRepayMortgage"+i+"' style='height: 125px;width: 100%;color: darkgreen;text-align: center'>Bezuelen</button></td>";
                        break;
                    case "FR":
                        output += "<td><button id='paybuttonRepayMortgage"+i+"' style='height: 125px;width: 100%;color: darkgreen;text-align: center'>Payer</button></td>";
                        break;
                    case "PR":
                        output += "<td><button id='paybuttonRepayMortgage"+i+"' style='height: 125px;width: 100%;color: darkgreen;text-align: center'>Pagar</button></td>";
                        break;
                    case "":
                        output += "<td><button id='paybuttonRepayMortgage"+i+"' style='height: 125px;width: 100%;color: darkgreen;text-align: center'>PAY</button></td>";
                        break;
                    case "DE":
                        output += "<td><button id='paybuttonRepayMortgage"+i+"' style='height: 125px;width: 100%;color: darkgreen;text-align: center'>Zahlen</button></td>";
                        break;
                    default:
                        output += "<td><button id='paybuttonRepayMortgage"+i+"' style='height: 125px;width: 100%;color: darkgreen;text-align: center'>PAY</button></td>";
                }
            }
            output += "</tr>";
        }
        switch (p.language) {
            case "LUX":
                output += "<tr><td id='PlayersMoney' colspan='3' style='text-align: right;color: darkgreen'>" + p.Money + " <button id='ApproveButtonMortgage' style='background-color:gray; color: white' >OK</button></td></tr>"
                break;
            case "FR":
                output += "<tr><td id='PlayersMoney' colspan='3' style='text-align: right;color: darkgreen'>" + p.Money + " <button id='ApproveButtonMortgage' style='background-color:gray; color: white' >Accepter</button></td></tr>"
                break;
            case "PR":
                output += "<tr><td id='PlayersMoney' colspan='3' style='text-align: right;color: darkgreen'>" + p.Money + " <button id='ApproveButtonMortgage' style='background-color:gray; color: white' >Aceitar</button></td></tr>"
                break;
            case "":
                output += "<tr><td id='PlayersMoney' colspan='3' style='text-align: right;color: darkgreen'>" + p.Money + " <button id='ApproveButtonMortgage' style='background-color:gray; color: white' >Accept</button></td></tr>"
                break;
            case "DE":
                output += "<tr><td id='PlayersMoney' colspan='3' style='text-align: right;color: darkgreen'>" + p.Money + " <button id='ApproveButtonMortgage' style='background-color:gray; color: white' >Akzeptieren</button></td></tr>"
                break;
            default:
                output += "<tr><td id='PlayersMoney' colspan='3' style='text-align: right;color: darkgreen'>" + p.Money + " <button id='ApproveButtonMortgage' style='background-color:gray; color: white' >Accept</button></td></tr>"

        }

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
