"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prison_1 = require("../Events/Prison");
class Erasmus {
    constructor() {
        this.name = "Erasmus";
    }
    Event(player) {
        if (player.TurnsInPrison >= 1) {
            let erasmus = new Prison_1.Prison();
            erasmus.prisonEvent(player);
            player.TurnsInPrison++;
        }
        return;
    }
    CanBuy(player) {
        return false;
    }
}
//# sourceMappingURL=Erasmus.js.map