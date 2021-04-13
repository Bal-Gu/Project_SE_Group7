import {Field} from "./Field";
import {Player} from "../Player";
import {Quiz} from "../Events/quiz";


export class QuizField implements Field{
    initialPrice: number;
    name: string;
    owner: Player | undefined;
    quiz:Quiz = new Quiz();

    CanBuy(player: Player): boolean {
        return false;
    }

    Event(player: Player, playerList: Player[]): void {
        this.quiz.event(player);
    }

}