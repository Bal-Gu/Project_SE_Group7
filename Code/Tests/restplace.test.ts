import { Player } from '../development/Player';
import { Restplace } from '../development/Fields/Restplace';


test('PlayerLandingOnRestfield', () => {
    let P1:Player = new Player(false,"Boby", 0,0);
    let R:Restplace = new Restplace();
    R.addToPot(500);
    expect(R.pot).toBe(500);
    R.Event(P1,[]);
    expect(P1.Money).toBe(2000);
    expect(R.pot).toBe(0);
});

test('Restplace with negatives', () => {
    let R2:Restplace = new Restplace();
    R2.addToPot(-2000);
    expect(R2.pot).toBe(0);
    R2.addToPot(2000);
    R2.addToPot(-2000);
    expect(R2.pot).toBe(2000);

});

test('Canbut', () => {
    let R2:Restplace = new Restplace();
    expect(R2.CanBuy(new Player(false,"", 0,0))).toBe(false);

});

test("PlayerLandingOnRestfield2",() =>{
    let P1:Player = new Player(false,"", 1,0);
    P1.Money = 0;
    let R:Restplace = new Restplace();
    R.addToPot(-500);
    expect(R.pot).toBe(0);
    R.Event(P1,[]);
    expect(P1.Money).toBe(0);
    expect(R.pot).toBe(0);
});