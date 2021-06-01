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
exports.BuyEvent = void 0;
const jquery_1 = __importDefault(require("jquery"));
const Auction_1 = require("./Auction");
class BuyEvent {
    constructor() {
        this.pressed = false;
    }
    event(p, price, field) {
        return __awaiter(this, void 0, void 0, function* () {
            let modal = document.getElementById("BuyingModal");
            let buybutton = jquery_1.default("#Buy");
            let Autionbutton = jquery_1.default("#Auction");
            let self = this;
            //hiddes the buttons that can't be used
            jquery_1.default("#BuyingModal").css("display", "block");
            if (!p.canBuy(price)) {
                buybutton.hide();
                buybutton.prop("disable", true);
            }
            else {
                buybutton.hide();
                buybutton.prop("disable", true);
            }
            window.onclick = function (event) {
                if (event.target == modal && modal != undefined) {
                    modal.style.display = "none";
                }
            };
            jquery_1.default(".close").click(function () {
                jquery_1.default("#BuyingModal").css("display", "none");
                self.pressed = true;
            });
            // the tree buttons inside the modal
            buybutton.click(function () {
                p.buying(field, price);
                jquery_1.default("#BuyingModal").css("display", "none");
                self.pressed = true;
            });
            Autionbutton.click(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    let auction = new Auction_1.Auction();
                    yield auction.AuctionEvent();
                    jquery_1.default("#BuyingModal").css("display", "none");
                    self.pressed = true;
                });
            });
            //waits for buttons
            this.wait();
        });
    }
    wait() {
        return __awaiter(this, void 0, void 0, function* () {
            while (!this.pressed) {
                yield new Promise(r => setTimeout(r, 2000));
                console.log(this.pressed);
            }
        });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.BuyEvent = BuyEvent;
//# sourceMappingURL=buying.js.map