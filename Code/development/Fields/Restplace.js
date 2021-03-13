"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parking {
    constructor() {
        this.name = "Restplace";
        this.pot = 0;
    }
    Event(player) {
        //TODO Player gets the pot
    }
    addToPot(amount) {
        if (amount > 0) {
            this.pot += amount;
        }
    }
    CanBuy(player) {
        return false;
    }
}
//# sourceMappingURL=Restplace.js.map