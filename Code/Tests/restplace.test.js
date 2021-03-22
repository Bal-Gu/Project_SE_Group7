"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../development/Player");
const Restplace_1 = require("../development/Fields/Restplace");
test('PlayerLandingOnRestfield', () => {
    let P1 = new Player_1.Player(false);
    let R = new Restplace_1.Restplace();
    R.addToPot(500);
    expect(R.pot).toBe(500);
    R.Event(P1);
    expect(P1.Money).toBe(2000);
    expect(R.pot).toBe(0);
});
test('Restplace with negatives', () => {
    let R2 = new Restplace_1.Restplace();
    R2.addToPot(-2000);
    expect(R2.pot).toBe(0);
    R2.addToPot(2000);
    R2.addToPot(-2000);
    expect(R2.pot).toBe(2000);
});
test('Canbut', () => {
    let R2 = new Restplace_1.Restplace();
    expect(R2.CanBuy(new Player_1.Player(false))).toBe(false);
});
test("PlayerLandingOnRestfield2", () => {
    let P1 = new Player_1.Player(false);
    P1.Money = 0;
    let R = new Restplace_1.Restplace();
    R.addToPot(-500);
    expect(R.pot).toBe(0);
    R.Event(P1);
    expect(P1.Money).toBe(0);
    expect(R.pot).toBe(0);
});
//# sourceMappingURL=restplace.test.js.map