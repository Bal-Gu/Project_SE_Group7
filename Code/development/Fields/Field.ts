
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
  isMortgage?:Boolean;
  Event(player:Player):void;
  CanBuy(player:Player):boolean;
}
