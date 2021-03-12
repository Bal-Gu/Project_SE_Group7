"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Properties = void 0;
var globalVariable_json_1 = __importDefault(require("../../globalVariable.json"));
var Properties = /** @class */ (function () {
    function Properties(color, pricetopay, renovationscosts, name) {
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
    Properties.prototype.setmortage = function () {
        if (this.renovatiosAmmount >= 1) {
            return;
        }
        this.owner.recieveMoney(this.pricetopay[0] / 2);
    };
    /**
     * The owner will pay for the mortage
     */
    Properties.prototype.repaymortage = function () {
        if (this.canrepaymortage()) {
            this.owner.payAmmount(this.pricetopay[0]);
        }
    };
    /**
     * Can the mortage be repayed by the owner
     */
    Properties.prototype.canrepaymortage = function () {
        return this.owner.canBuy(this.pricetopay[0]);
    };
    /**
     * no options will remove 1 renovation. With option + option it will remove the ammount of renovation.
     * The player will get his money here on the action.
     */
    Properties.prototype.sellrenovation = function (times) {
        if (times == undefined) {
            this.owner.recieveMoney(this.pricetopay[this.renovatiosAmmount] / 2);
            this.renovatiosAmmount--;
        }
        else {
            for (var i = 0; i < (times > this.renovatiosAmmount ? this.renovatiosAmmount : times); i++) {
                this.owner.recieveMoney(this.pricetopay[this.renovatiosAmmount] / 2);
                this.renovatiosAmmount--;
            }
        }
    };
    /**
     * The player will pay for the renovations as long as he has money.
     * @param times [opitonal] if provided the ammount of renovation will be process. If abscent there will be 1 renovation
     */
    Properties.prototype.buyrenovation = function (times) {
        if (this.renovatiosAmmount >= globalVariable_json_1.default.MaxRenovations) {
            return;
        }
        if (times == undefined) {
            if (this.owner.canBuy(this.renovationscosts[this.renovatiosAmmount + 1]))
                this.renovatiosAmmount++;
            this.owner.payAmmount(this.pricetopay[this.renovatiosAmmount]);
        }
        else {
            var min = times < globalVariable_json_1.default.MaxRenovations - this.renovatiosAmmount ? times : globalVariable_json_1.default.MaxRenovations - 1;
            for (var i = 0; i < min; i++) {
                if (this.owner.canBuy(this.renovationscosts[this.renovatiosAmmount + 1])) {
                    this.renovatiosAmmount++;
                    this.owner.payAmmount(this.pricetopay[this.renovatiosAmmount]);
                }
            }
        }
    };
    /**
     * Updates the owner
     * @param p the player that will be the new owner
     */
    Properties.prototype.updateOwner = function (p) {
        this.owner = p;
    };
    /**
     *
     * @param p the new player that is buying the field
     * @param price [optional] if not mentioned the price will be the default one. Only use it in case of auctions or agreed transfer.
     */
    Properties.prototype.buy = function (p, price) {
        if (p.canBuy(price == undefined ? this.pricetopay[0] : price)) {
            this.owner = p;
            p.payAmmount(price == undefined ? this.pricetopay[0] : price);
        }
    };
    Properties.prototype.CanBuy = function (player) {
        return true;
    };
    Properties.prototype.Event = function (player) {
        //TODO
    };
    return Properties;
}());
exports.Properties = Properties;
//# sourceMappingURL=Properties.js.map