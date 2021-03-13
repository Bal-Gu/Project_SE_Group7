"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parking {
    constructor() {
        this.name = "Parking";
        this.initialPrice = 20;
        this.PriceToPayMultiplier = [1, 2.5];
        this.priceIndex = 0;
        this.isMortgage = false;
    }
    Event(player) {
        //TODO Player pays the price to the player  that owns this field
    }
    buy(player) {
    }
    repayMortgage() {
        if (this.owner == null) {
            return;
        }
        //TODO add the payements of the player.
    }
    CanBuy(player) {
        //TODO ones player has been implemented.
        return false;
    }
}
//# sourceMappingURL=Parking.js.map