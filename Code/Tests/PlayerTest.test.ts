import { Player } from '../development/Player';


test('PlayerBeeingOnField10', () => {
    let P:Player = new Player(false);
    P.goToErasmus();
    expect(P.currentposition).toBe(10);
});