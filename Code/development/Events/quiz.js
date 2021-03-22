"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const Quiz_json_1 = __importDefault(require("../../Quiz.json"));
const jquery_1 = __importDefault(require("jquery"));
class Quiz {
    constructor() {
        this.goodanswer = 0;
        this.goodanswerString = "";
    }
    getIndexes(maxnum) {
        var array = [];
        for (let i = 1; i <= maxnum; i++) {
            array.push(i);
        }
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    event() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pressed = false;
            let finalQuizArray = Quiz_json_1.default.Quiz[Math.floor(Math.random() * Quiz_json_1.default.Quiz.length)];
            this.goodanswerString = finalQuizArray["1"];
            let modal = jquery_1.default("#QuestionModal");
            jquery_1.default("#QuestionModal .modal-content .modal-header h2").html(finalQuizArray.Title);
            modal.show();
            let indexes = 4;
            for (let i = 1; i < 4; i++) {
                let str = "#Answer" + (i + 1).toString();
                let button = jquery_1.default(str);
                if (finalQuizArray[(i + 1).toString()] == "") {
                    button.hide();
                    button.prop("disable", true);
                    indexes -= 1;
                }
            }
            var indexarray = this.getIndexes(indexes);
            for (var i = 0; i < indexes; i++) {
                if (indexarray[i] == 1) {
                    this.goodanswer = i;
                }
                let str = "#Answer" + (i + 1).toString();
                let button = jquery_1.default(str);
                button.show();
                button.prop("disable", false);
                button.text(finalQuizArray[indexarray[i]]);
                this.clicks(button, i, modal);
            }
            yield this.wait();
        });
    }
    clicks(button, index, modal) {
        let self = this;
        button.click(function () {
            return __awaiter(this, void 0, void 0, function* () {
                if (self.goodanswer == index) {
                    console.log("You got it");
                    yield self.exit("Move tree cases back");
                    self.pressed = true;
                    modal.hide();
                }
                else {
                    console.log("Wrong");
                    yield self.exit("Move to the yeet prison");
                    self.pressed = true;
                    modal.hide();
                }
            });
        });
    }
    exit(Consquence) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < 4; i++) {
                let str = "#Answer" + (i + 1).toString();
                let button = jquery_1.default(str);
                button.hide();
            }
            jquery_1.default("#TimerQuestion").hide();
            let self = this;
            jquery_1.default("#QuestionModal .modal-content .modal-header h2").html("Answer was: " + self.goodanswerString + "<br/>" + Consquence);
            yield new Promise(r => setTimeout(r, 5000));
        });
    }
    wait() {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 60;
            while (!this.pressed && i >= 0) {
                yield new Promise(r => setTimeout(r, 1000));
                jquery_1.default("#TimerQuestion").text("Time left: " + i);
                i--;
            }
            if (this.pressed) {
                jquery_1.default("#TimerQuestion").hide();
            }
            if (i <= 0) {
                //case such that the player gets punished.
                jquery_1.default("#QuestionModal").hide();
            }
        });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.Quiz = Quiz;
//# sourceMappingURL=quiz.js.map