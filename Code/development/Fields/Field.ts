import "../Player";

//INTERFACE HERE
export interface Field{
  name:string;
  Event(player:Player):void;
  CanBuy(player:Player):boolean;
  
}
