"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parking {
    constructor(name) {
        this.initialPrice = 150;
        this.PriceToPayMultiplier = [4, 10];
        this.rentCostFinal = 0;
        this.isMortgage = false;
        this.name = name;
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
    setMortgage() {
        this.owner.recieveMoney(75);
        this.isMortgage = true;
    }
    repayMortgage() {
        if (this.canRepayMortgage()) {
            this.owner.payAmmount(75 * 1.10);
            this.isMortgage = false;
        }
    }
    canRepayMortgage() {
        return this.owner.canBuy(75 * 1.10);
    }
    CanBuy(player) {
        return player.Money > this.initialPrice;
    }
    UpdateRentCost(player, rentDice) {
        this.rentCostFinal = rentDice * this.PriceToPayMultiplier[this.owner.nrOfParking - 1];
    }
    CanPayRent(player, rentDice) {
        this.UpdateRentCost(player, rentDice);
        return player.Money > this.rentCostFinal;
    }
    PayRent(player, rentDice) {
        if (this.owner == null) {
            return;
        }
        else if (this.CanPayRent(player, rentDice) && this.isMortgage == false) {
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