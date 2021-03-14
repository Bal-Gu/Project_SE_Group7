import {Player} from "./Player"
import {Prison} from "./Events/Prison";
import {yeeeeeeeeet} from "./Events/TestofPrison2";

async function launch() {
    yeeeeeeeeet();
    let p: Player = new Player(false);
    let prisoneven: Prison = new Prison();
    await prisoneven.prisonEvent(p);


    yeeeeeeeeet();
}

launch();