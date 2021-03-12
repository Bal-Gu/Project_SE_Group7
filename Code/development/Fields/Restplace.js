"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parking = /** @class */ (function () {
    function Parking() {
        this.name = "Restplace";
        this.pot = 0;
    }
    Parking.prototype.Event = function (player) {
        //TODO Player gets the pot
    };
    Parking.prototype.addToPot = function (amount) {
        if (amount > 0) {
            this.pot += amount;
        }
    };
    Parking.prototype.CanBuy = function (player) {
        return false;
    };
    return Parking;
}());
//# sourceMappingURL=Restplace.js.map