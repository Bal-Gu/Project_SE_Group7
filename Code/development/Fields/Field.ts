
import {Player} from "../Player";

//INTERFACE HERE
export interface Field{
  name:string;
  owner: Player | undefined;
  Event(player:Player):void;
  CanBuy(player:Player):boolean;
}
