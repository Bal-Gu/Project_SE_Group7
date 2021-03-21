import { Restplace } from '../development/Fields/Restplace';
import { Player } from '../development/Player';


test('PlayerLandingOnRestfield', () => {
    let P1:Player = new Player(false);
    let R:Restplace = new Restplace();
    R.addToPot(500);
    expect(R.pot).toBe(500);
    R.Event(P1);
    expect(P1.Money).toBe(2000);
    expect(R.pot).toBe(0);
});