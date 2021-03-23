
import {Quiz} from "./Events/quiz";

async function launch() {
    let quiz:Quiz = new Quiz();
    quiz.event();
}


$("#quizButton").click(function (){
    launch();
});