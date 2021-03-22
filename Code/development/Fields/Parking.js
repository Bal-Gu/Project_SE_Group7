"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const buying_1 = require("../Events/buying");
class Parking {
    constructor(name) {
        this.initialPrice = 150;
        this.PriceToPayMultiplier = [4, 10];
        this.rentCostFinal = 0;
        this.isMortgage = false;
        this.name = name;
    }
    Event(player) {
        return __awaiter(this, void 0, void 0, function* () {
            if (player == this.owner) {
                return;
            }
            else if (this.owner == undefined) {
                let b = new buying_1.BuyEvent();
                yield b.event(player, this.initialPrice, this);
            }
            //TODO Player pays the price to the player  that owns this field
        });
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
        //TODO add the payements of the player.
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
        else if (this.CanPayRent(player, rentDice) && !this.isMortgage) {
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