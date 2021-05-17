import $ from "jquery";
import {Player} from "./Player";


export function winingModal(p:String){
    $("#winingModal").show()
    // TODO do translation
    // TODO add player name
    $("#winnerName").html(" has won the game." );
}