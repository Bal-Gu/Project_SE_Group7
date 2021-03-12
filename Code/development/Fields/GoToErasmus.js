"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GoToErasmus = /** @class */ (function () {
    function GoToErasmus() {
        this.name = "Go To Erasmus";
    }
    GoToErasmus.prototype.CanBuy = function (player) {
        return false;
    };
    GoToErasmus.prototype.Event = function (player) {
        player.TurnsInPrison = 1;
        player.goToErasmus();
    };
    return GoToErasmus;
}());
//# sourceMappingURL=GoToErasmus.js.map