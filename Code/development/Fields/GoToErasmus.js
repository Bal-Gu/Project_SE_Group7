"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GoToErasmus {
    constructor() {
        this.name = "Go To Erasmus";
    }
    CanBuy(player) {
        return false;
    }
    Event(player) {
        player.TurnsInPrison = 1;
        player.goToErasmus();
    }
}
//# sourceMappingURL=GoToErasmus.js.map