
import { Quiz } from "./Events/quiz";

async function launch() {
    let quiz: Quiz = new Quiz();
    quiz.event();
}


$("#quizButton").click(function () {
    launch();
});

$("#mortageModal").click(function () {
    $("#MorageModal").css("display", "block");
    var output;
    for (var i = 0; i < 4; i++){
        output += "<tr>";
        output += "<td style='background-color: #ADD8E6'>LLC</td>"
        output += "<td>";
        // random amount of stars
        var stars = Math.floor(Math.random() * 6);
        for (var j = 0; j < stars; j++) {
            output += "&#9734;"
        }
        output += "</td>";
        output += "<td><button><span style='height: 25px;width: 25px;background-color: green; border-radius: 50%; display: inline-block'></span></button</td>";
        output += "<td><button><span style='height: 25px;width: 25px;background-color: red; border-radius: 50%; display: inline-block'></span></button></td>";
        output += "<td>400</td>";
        output += "</tr>";
    }

    output += "<tr><td colspan='5' style='text-align: right'>-400 <button>Accept</button></td></tr>"

    $("#mortageTable").html(output);

});