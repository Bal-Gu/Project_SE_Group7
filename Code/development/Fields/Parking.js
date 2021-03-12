"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parking = /** @class */ (function () {
    function Parking() {
        this.name = "Parking";
        this.initialPrice = 20;
        this.PriceToPayMultiplier = [1, 2.5];
        this.priceIndex = 0;
        this.isMortgage = false;
    }
    Parking.prototype.Event = function (player) {
        //TODO Player pays the price to the player  that owns this field
    };
    Parking.prototype.buy = function (player) {
    };
    Parking.prototype.repayMortgage = function () {
        if (this.owner == null) {
            return;
        }
        //TODO add the payements of the player.
    };
    Parking.prototype.CanBuy = function (player) {
        //TODO ones player has been implemented.
        return false;
    };
    return Parking;
}());
//# sourceMappingURL=Parking.js.map