import { Player } from "./Player";
import {Quiz} from "./Events/quiz";
import {Auction} from "./Events/Auction";

import {Restplace} from "./Fields/Restplace";

class main {
    PlayerArray: Player[];
    WinCondition: number;
    RoundNumber: number;
    PlayerTurn: Player;

    main() {

    }

    InitializeGameLength(n: number): void {
        this.WinCondition = (n == 1) ? 3000 : (n == 2) ? 4000 : 5000;
    }

    InitializePlayerArray(n: number): void {
        for (let i = 0; i < n; i++) {
            let p = new Player(false, "");
            this.PlayerArray.push(p);
        }
    }

    SaveGameState(n: number, p: Player): void {

    }

    CheckWinCondition(): boolean {
        return false
    }

    Surrender(p: Player): void {
        let index = this.PlayerArray.indexOf(p);
        this.PlayerArray.splice(index, 1);

        for (let i = 0; i < p.fieldsOwned.length; i++) {
            p.fieldsOwned[i].owner = undefined;
        }
    }


    //USED TO TEST STUFF
    async launch() {
        let aution: Auction = new Auction();
        let player1 = new Player(false, "YEEEEEEEEEEET");
        let player2 = new Player(false, "Guillaume");
        let player3 = new Player(false, "Tina");
        let player4 = new Player(false, "Bob");
        let playerlist: Player[];
        playerlist = [player1, player2, player3, player4];
        aution.AuctionEvent(player2, playerlist, new Restplace());
    }

}

new main().launch();

