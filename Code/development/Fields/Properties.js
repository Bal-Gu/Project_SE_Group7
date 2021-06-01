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
exports.Properties = void 0;
const globalVariable_json_1 = __importDefault(require("../../globalVariable.json"));
const buying_1 = require("../Events/buying");
const PaymentEvent_1 = require("../Events/PaymentEvent");
class Properties {
    constructor(color, pricetopay, renovationscosts, name) {
        this.color = color;
        this.pricetopay = pricetopay;
        this.ownAllPairs = false;
        this.renovatiosAmmount = 0;
        this.mortage = false;
        this.name = name;
        this.renovationscosts = renovationscosts;
    }
    /**
     * The player decides to mortage this property
     */
    setmortage() {
        if (this.renovatiosAmmount >= 1) {
            return;
        }
        this.owner.recieveMoney(this.pricetopay[0] / 2);
    }
    /**
     * The owner will pay for the mortage
     */
    repaymortage() {
        if (this.canrepaymortage()) {
            this.owner.payAmmount((this.pricetopay[0] / 2) * 1.10);
        }
    }
    /**
     * Can the mortage be repayed by the owner
     */
    canrepaymortage() {
        return this.owner.canBuy((this.pricetopay[0] / 2) * 1.10);
    }
    /**
     * no options will remove 1 renovation. With option + option it will remove the ammount of renovation.
     * The player will get his money here on the action.
     */
    sellrenovation(times) {
        if (times == undefined) {
            this.owner.recieveMoney(this.pricetopay[this.renovatiosAmmount] / 2);
            this.renovatiosAmmount--;
        }
        else {
            for (let i = 0; i < (times > this.renovatiosAmmount ? this.renovatiosAmmount : times); i++) {
                this.owner.recieveMoney(this.pricetopay[this.renovatiosAmmount] / 2);
                this.renovatiosAmmount--;
            }
        }
    }
    /**
     * The player will pay for the renovations as long as he has money.
     * @param times [opitonal] if provided the ammount of renovation will be process. If abscent there will be 1 renovation
     */
    buyrenovation(times) {
        if (this.renovatiosAmmount >= globalVariable_json_1.default.MaxRenovations) {
            return;
        }
        if (times == undefined) {
            if (this.owner.canBuy(this.renovationscosts[this.renovatiosAmmount + 1]))
                this.renovatiosAmmount++;
            this.owner.payAmmount(this.pricetopay[this.renovatiosAmmount]);
        }
        else {
            let min = times < globalVariable_json_1.default.MaxRenovations - this.renovatiosAmmount ? times : globalVariable_json_1.default.MaxRenovations - 1;
            for (let i = 0; i < min; i++) {
                if (this.owner.canBuy(this.renovationscosts[this.renovatiosAmmount + 1])) {
                    this.renovatiosAmmount++;
                    this.owner.payAmmount(this.pricetopay[this.renovatiosAmmount]);
                }
            }
        }
    }
    /**
     * Updates the owner
     * @param p the player that will be the new owner
     */
    updateOwner(p) {
        this.owner = p;
    }
    /**
     *
     * @param p the new player that is buying the field
     * @param price [optional] if not mentioned the price will be the default one. Only use it in case of auctions or agreed transfer.
     */
    buy(p, price) {
        if (p.canBuy(price == undefined ? this.pricetopay[0] : price)) {
            this.owner = p;
            p.payAmmount(price == undefined ? this.pricetopay[0] : price);
        }
    }
    CanBuy(player) {
        return true;
    }
    Event(player) {
        return __awaiter(this, void 0, void 0, function* () {
            //checks for an owner
            if (this.owner == undefined) {
                let buyevent = new buying_1.BuyEvent;
                yield buyevent.event(player, this.pricetopay[0], this);
            }
            else {
                //mortage and own owner will be ignored
                if (player === this.owner || this.mortage) {
                    return;
                }
                else {
                    //The player has to pay fees to the owner
                    let payevent = new PaymentEvent_1.PaymentEvent();
                    yield payevent.event(this.owner, player, this.cost());
                }
            }
        });
    }
    CanPayRent(player) {
        return player.Money > this.pricetopay[this.renovatiosAmmount];
    }
    cost() {
        return this.pricetopay[this.renovatiosAmmount];
    }
}
exports.Properties = Properties;
//# sourceMappingURL=Properties.js.map