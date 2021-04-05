import { Player } from "./Player";
import { Field } from "./Fields/Field"
import { Dice } from "./Events/Dice"
import { Erasmus } from "./Fields/Erasmus"
import { Properties } from "./Fields/Properties"
import { Bus } from "./Fields/Bus"
import { Parking } from "./Fields/Parking"

export class main {
    PlayerArray: Player[];
    FieldArray: Field[];
    WinCondition: number;
    RoundNumber: number;
    PlayerTurn: Player;
    ConseqDoubles: number;

    main() {
    }

    InitializeGameLength(n: number):void{
        this.WinCondition = (n == 1) ? 3000 : (n == 2) ? 4000 : 5000;
    }

    InitializePlayerArray(n: number):void{
        this.PlayerArray = [];
        for (let i = 0; i < n; i++) {
            let p = new Player(false);
            this.PlayerArray.push(p);
        }
    }

    InitializeFieldArray(): void{
        this.FieldArray = [];
        let propertiesFile = require('../properties.json');
        let a, b, c;
        a = b = c =0;

        for(let i = 0; i < 28; i++){
            if(i == 2 || i == 10 || i == 17 || i == 25){
                console.log(a)
                let station = propertiesFile.stations[a];
                let b:Bus = new Bus(station.name);
                this.FieldArray.push(b);
                a++;
            }
            else if(i == 7 || i == 20){
                let parking =  propertiesFile.parkings[b];
                let pa:Parking = new Parking(parking.name);
                this.FieldArray.push(pa);
                b++;
            }
            else {
                let prop = propertiesFile.properties[c];
                let p: Properties = new Properties(prop.color, prop.pricetopay, prop.renovationscosts, prop.name);
                this.FieldArray.push(p);
                c++;
            }
        }

    }

    SaveGameState(n: number, p: Player):void{

    }

    async MakePlayerTurn(p: Player): Promise<void>{
        let erasmus = new Erasmus()
        let d: Dice = new Dice();
        await d.roll()
        let double = d.isdouble();
        let n = d.total();


        if (p.TurnsInPrison > 0){
            await erasmus.Event(p);
        }
        else {
            await p.move(n);
        }
        await this.FieldArray[p.currentposition].Event;

        if(double){
            if(this.ConseqDoubles >= 2){
                p.TurnsInPrison = 3;
                this.ConseqDoubles = 0;
            }
            else{
                this.ConseqDoubles += 1;
                await this.MakePlayerTurn(p);
            }
        }else{
            this.ConseqDoubles = 0;
        }
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




