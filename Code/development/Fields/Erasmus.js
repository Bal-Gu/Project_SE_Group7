"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prison_1 = require("../Events/Prison");
var Erasmus = /** @class */ (function () {
    function Erasmus() {
        this.name = "Erasmus";
    }
    Erasmus.prototype.Event = function (player) {
        if (player.TurnsInPrison >= 1) {
            var erasmus = new Prison_1.Prison();
            erasmus.prisonEvent(player);
            player.TurnsInPrison++;
        }
        return;
    };
    Erasmus.prototype.CanBuy = function (player) {
        return false;
    };
    return Erasmus;
}());
//# sourceMappingURL=Erasmus.js.map