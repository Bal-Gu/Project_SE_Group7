
import {Player} from "../Player";
import {Colors} from "./colors";

//INTERFACE HERE
export interface Field{
  name:string;
  owner: Player | undefined;
  initialPrice:number;
  renovatiosAmmount?:number;
  renovationscosts?:number;
  color?:Colors;
  isMortgage?:boolean;
  hasAll?:boolean;
  Event(player:Player,playerList:Player[]):void;
  CanBuy(player:Player):boolean;
}
