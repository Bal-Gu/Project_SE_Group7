"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var globalVariable_json_1 = __importDefault(require("../globalVariable.json"));
var Player = /** @class */ (function () {
    function Player(isBot /*, pawn: Pawn, Array: Property*/) {
        this.isBot = isBot;
        this.Money = 1500;
        this.Bankrupt = false;
        this.hasErasmusDispense = false;
        this.currentposition = 0;
        this.isGameOver = false;
        this.TurnsInPrison = 0;
    }
    Player.prototype.canBuy = function (cost) {
        return (this.Money - cost) > 0;
    };
    Player.prototype.buying = function (field, amount) {
    };
    Player.prototype.gameOver = function () {
        this.isGameOver = true;
    };
    Player.prototype.exchange = function (field, player) {
        var _this = this;
        var _loop_1 = function (i) {
            if (this_1.fieldsOwned[i].name == field.name) {
                player.fieldsOwned.push(field);
                this_1.fieldsOwned = this_1.fieldsOwned.filter(function (ownedfield) { return _this.fieldsOwned[i].name != field.name; });
            }
        };
        var this_1 = this;
        //check if field is owned, if yes remove from array to add to other player that asked
        for (var i = 0; i < this.fieldsOwned.length; i++) {
            _loop_1(i);
        }
    };
    Player.prototype.receive = function (field) {
        this.fieldsOwned.push(field);
    };
    Player.prototype.recieveMoney = function (ammount) {
        this.Money += ammount;
    };
    Player.prototype.payAmmount = function (ammount) {
        this.Money -= ammount;
    };
    Player.prototype.move = function (moveAction) {
        if ((moveAction + this.currentposition) >= 40) {
            moveAction -= (40 - this.currentposition);
        }
        this.currentposition += moveAction;
    };
    Player.prototype.goToErasmus = function () {
        this.currentposition = globalVariable_json_1.default.Erasmus;
    };
    Player.prototype.startBonus = function () {
        this.Money += 200;
    };
    Player.prototype.isBankrupt = function () {
        return this.Bankrupt;
    };
    Player.prototype.forfeit = function () {
        this.isBot = true;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map