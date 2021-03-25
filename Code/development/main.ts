import { Player } from "./Player";

class main {
    PlayerArray: Player[];
    WinCondition: number;
    RoundNumber: number;
    PlayerTurn: Player;

    main() {

    }

    InitializeGameLength(n: number):void{
        this.WinCondition = (n == 1) ? 3000 : (n == 2) ? 4000 : 5000;
    }

    InitializePlayerArray(n: number):void{
        for (let i = 0; i < n; i++) {
            let p = new Player(false);
            this.PlayerArray.push(p);
        }
    }

    SaveGameState(n: number, p: Player):void{

    }

    CheckWinCondition():boolean{
        return false
    }

    Surrender(p: Player):void{
        let index = this.PlayerArray.indexOf(p);
        this.PlayerArray.splice(index, 1);

        for(let i = 0; i < p.fieldsOwned.length; i++){
            p.fieldsOwned[i].owner = undefined;
        }
    }
}




