"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bus {
    constructor(name) {
        this.initialPrice = 200;
        this.PriceToPay = [25, 50, 100, 200];
        this.rentCostFinal = 0;
        this.isMortgage = false;
        this.name = name;
    }
    Event(player) {
        //TODO Player pays the price to the player  that owns this field
        //TODO if there is no owner pay buy event
        //TODO if player can't pay enter mortage event
    }
    buy(player) {
        if (player.canBuy(this.initialPrice)) {
            this.owner = player;
            player.nrOfBus++;
            player.receive(this);
            player.payAmmount(this.initialPrice);
        }
    }
    setMortgage() {
        this.owner.recieveMoney(100);
        this.isMortgage = true;
    }
    repayMortgage() {
        if (this.canRepayMortgage()) {
            this.owner.payAmmount(100 * 1.10);
            this.isMortgage = false;
        }
    }
    canRepayMortgage() {
        return this.owner.canBuy(100 * 1.10);
    }
    CanBuy(player) {
        return player.Money > this.initialPrice;
    }
    UpdateRentCost(player) {
        this.rentCostFinal = this.PriceToPay[this.owner.nrOfBus - 1];
    }
    CanPayRent(player) {
        this.UpdateRentCost(player);
        return player.Money > this.rentCostFinal;
    }
    PayRent(player) {
        if (this.owner == null) {
            return;
        }
        else if (this.CanPayRent(player) && this.isMortgage == false) {
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
//# sourceMappingURL=Bus.js.map