"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parking {
    constructor() {
        this.name = "Parking";
        this.initialPrice = 150;
        this.PriceToPayMultiplier = [4, 10];
        this.rentCostFinal = 0;
        this.priceIndex = 0;
        this.isMortgage = false;
    }
    Event(player) {
        //TODO Player pays the price to the player  that owns this field
    }
    buy(player) {
        if (player.canBuy(this.initialPrice)) {
            this.owner = player;
            player.nrOfParking++;
            player.receive(this);
            player.payAmmount(this.initialPrice);
        }
    }
    repayMortgage() {
        if (this.owner == null) {
            return;
        }
        //TODO add the payements of the player.
    }
    CanBuy(player) {
        return player.Money > this.initialPrice;
    }
    UpdateRentCost(player, rentDice) {
        this.rentCostFinal = rentDice * this.PriceToPayMultiplier[this.owner.nrOfParking--];
    }
    CanPayRent(player, rentDice) {
        this.UpdateRentCost(player, rentDice);
        return player.Money > this.rentCostFinal;
    }
    PayRent(player, rentDice) {
        if (this.CanPayRent(player, rentDice)) {
            player.payAmmount(this.rentCostFinal);
        }
    }
    sellParking(playerToSellTo, exchangePrice) {
        if (playerToSellTo.canBuy(exchangePrice)) {
            this.owner.exchange(this, playerToSellTo);
            this.owner.recieveMoney(exchangePrice);
            playerToSellTo.payAmmount(exchangePrice);
            this.owner = playerToSellTo;
        }
    }
}
//# sourceMappingURL=Parking.js.map