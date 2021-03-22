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
exports.PaymentEvent = void 0;
const mortage_1 = require("./mortage");
class PaymentEvent {
    /**
     * PAYS THE OWNER OTHERWISE IT ENTERS THE MORTGAGE EVENT
     * NOTE THE CALLER CLASS HAS TO MAKE SURE THAT THE FIELD ISN'T IN MORTGAGE POSITION
     * @param owner the player who owns the field
     * @param payer the player that needs to pay the owner
     * @param price the price that payer has to pay.
     */
    event(owner, payer, price) {
        return __awaiter(this, void 0, void 0, function* () {
            if (owner === payer) {
                return;
            }
            if (price <= 0) {
                return;
            }
            if (payer.canBuy(price)) {
                payer.payAmmount(price);
            }
            else {
                //otherwise pay but mortage has to get even otherwise it's game over for the player.
                let mortage = new mortage_1.Mortage();
                payer.payAmmount(price);
                yield mortage.event();
            }
        });
    }
}
exports.PaymentEvent = PaymentEvent;
//# sourceMappingURL=PaymentEvent.js.map