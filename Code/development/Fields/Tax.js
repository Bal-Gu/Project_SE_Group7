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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mortage_1 = require("../Events/mortage");
const globalVariable_json_1 = __importDefault(require("../../globalVariable.json"));
class Tax {
    constructor(name) {
        this.amountToPay = globalVariable_json_1.default.amountToPayBuyTax;
        this.initialPrice = 0;
        this.name = name;
    }
    CanPayTax(player) {
        if (player.currentposition == 4) {
            return player.Money > this.amountToPay[1];
        }
        else {
            return player.Money > this.amountToPay[0];
        }
    }
    PayTax(player) {
        if (this.CanPayTax(player)) {
            if (player.currentposition == 4) {
                player.payAmmount(this.amountToPay[1]);
            }
            else {
                player.payAmmount(this.amountToPay[0]);
            }
        }
    }
    CanBuy(player) {
        return false;
    }
    Event(player, playerList) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.CanPayTax(player)) {
                this.PayTax(player);
            }
            else {
                let mortage = new mortage_1.Mortage();
                player.payAmmount(player.currentposition == 4 ? this.amountToPay[1] : this.amountToPay[0]);
                yield mortage.event(player);
            }
        });
    }
}
//# sourceMappingURL=Tax.js.map