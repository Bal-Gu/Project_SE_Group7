"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const globalVariable_json_1 = __importDefault(require("../globalVariable.json"));
class Player {
    constructor(isBot /*, pawn: Pawn, Array: Property*/) {
        this.isBot = isBot;
        this.Money = 1500;
        this.Bankrupt = false;
        this.hasErasmusDispense = false;
        this.currentposition = 0;
        this.isGameOver = false;
        this.TurnsInPrison = 0;
    }
    canBuy(cost) {
        return (this.Money - cost) > 0;
    }
    buying(field, amount) {
    }
    gameOver() {
        this.isGameOver = true;
    }
    exchange(field, player) {
        //check if field is owned, if yes remove from array to add to other player that asked
        for (let i = 0; i < this.fieldsOwned.length; i++) {
            if (this.fieldsOwned[i].name == field.name) {
                player.fieldsOwned.push(field);
                this.fieldsOwned = this.fieldsOwned.filter(ownedfield => this.fieldsOwned[i].name != field.name);
            }
        }
    }
    receive(field) {
        this.fieldsOwned.push(field);
    }
    recieveMoney(ammount) {
        this.Money += ammount;
    }
    payAmmount(ammount) {
        this.Money -= ammount;
    }
    move(moveAction) {
        if ((moveAction + this.currentposition) >= 40) {
            moveAction -= (40 - this.currentposition);
        }
        this.currentposition += moveAction;
    }
    goToErasmus() {
        this.currentposition = globalVariable_json_1.default.Erasmus;
    }
    startBonus() {
        this.Money += 200;
    }
    isBankrupt() {
        return this.Bankrupt;
    }
    forfeit() {
        this.isBot = true;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map