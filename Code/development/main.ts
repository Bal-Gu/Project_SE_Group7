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

    }

    SaveRoundAndPlayerTurn(n: number, p: Player):void{

    }

    CheckWinCondition():boolean{
        return false
    }

    Surrender():void{

    }
}




