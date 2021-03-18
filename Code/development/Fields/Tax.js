"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tax {
    constructor(name) {
        this.amountToPay = [100, 200];
        this.name = name;
    }
    CanPayTax(player) {
        if (player.currentposition == 4) {
            return player.Money > this.amountToPay[1];
        }
        else {
            return player.Money > this.amountToPay[0];
        }
    }
    PayTax(player) {
        if (this.CanPayTax(player)) {
            if (player.currentposition == 4) {
                player.payAmmount(this.amountToPay[1]);
            }
            else {
                player.payAmmount(this.amountToPay[0]);
            }
        }
    }
    CanBuy(player) {
        return false;
    }
    Event(player) {
    }
}
//# sourceMappingURL=Tax.js.map