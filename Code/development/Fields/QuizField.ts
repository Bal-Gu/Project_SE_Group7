import {Field} from "./Field";
import {Player} from "../Player";
import {Quiz} from "../Events/quiz";


export class QuizField implements Field{
    initialPrice: number;
    name: string;
    owner: Player | undefined;

    CanBuy(player: Player): boolean {
        return false;
    }

    async Event(player: Player, playerList: Player[]): Promise<void> {
        let quiz:Quiz = new Quiz();
        await quiz.event(player);
    }

}