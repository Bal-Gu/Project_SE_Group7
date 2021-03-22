"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restplace = void 0;
class Restplace {
    constructor() {
        this.name = "Restplace";
        this.pot = 0;
    }
    Event(player) {
        player.recieveMoney(this.pot);
        this.pot = 0;
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
exports.Restplace = Restplace;
//# sourceMappingURL=Restplace.js.map