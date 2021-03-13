"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dice_1 = require("../development/Events/Dice");
test('DiceLimitTestingOfRandomGenerator', () => {
    let dice = new Dice_1.Dice();
    for (let i = 0; i < 300; i++) {
        dice.roll();
        expect(0).not.toBe(dice.second);
        expect(7).not.toBe(dice.first);
        expect(0).not.toBe(dice.first);
        expect(7).not.toBe(dice.second);
    }
});
test('DiceTotaltest', () => {
    let dice = new Dice_1.Dice();
    for (let i = 0; i < 300; i++) {
        dice.second = (i * 2 % 6);
        dice.first = i;
        expect((i * 2 % 6) + i).toBe(dice.total());
    }
});
test('DiceTotaltestTrue', () => {
    let dice = new Dice_1.Dice();
    dice.second = 1;
    dice.first = 1;
    expect(true).toBe(dice.isdouble());
});
test('DiceTotaltestFalse', () => {
    let dice = new Dice_1.Dice();
    dice.second = 1;
    dice.first = 1;
    expect(true).toBe(dice.isdouble());
});
//# sourceMappingURL=Dice.test.js.map