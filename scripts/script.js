import { quiz_contents } from "./quiz_questions.js";

let content_intro = document.getElementById("content_intro");
let content_quiz = document.getElementById("content_quiz");
let content_highscore = document.getElementById("content_highscore");
let content_scoreboard = document.getElementById("content_scoreboard");

let button_quiz_start = document.getElementById("button_quiz_start");
let button_next_q = document.getElementById("go_next");

let quiz_answers = document.getElementById("quiz_answers");

// variable to hold all available question objects in array
var list_questions_available = quiz_contents();
// var list_questions_available = [q_datatypes, q_ifelse, q_jsarrays, q_stringvals, q_debuggingtool];
var numQuestions = list_questions_available.length;
var questionsLeft = numQuestions;

// introductory button displayed at start of quiz
button_quiz_start.addEventListener("click", function() {

    display_quiz_questions();
    
    content_intro.style.display = "none";
    content_quiz.style.display = "flex";
});

// selecting correct answers displays the next question
function display_next_question() {
    if(questionsLeft == 0) {
        return
    } 
    display_quiz_questions();
}

// displays quiz question, and its possible answers as a list
function display_quiz_questions() {
    let randIndex = Math.floor(Math.random() * numQuestions);
    let randQuestionObject = list_questions_available[Math.floor(randIndex)];
    let randQuestion = randQuestionObject["question"];

    // calls function to randomize order of answers
    let randomizedAnswers = randomizeAnswersOrder(randQuestionObject["answers"]);
    let numAnswers = randomizedAnswers.length;

    // removes question from available question list once it is displayed
    list_questions_available.splice(randIndex, 1);
    numQuestions = list_questions_available.length;

    // removes list elements every time question is displayed
    $(quiz_answers).empty();

    if (questionsLeft > 0) {
        document.getElementById("quiz_question").textContent = randQuestion;

        // displays all possible answers
        $(quiz_answers).append("<ul></ul>");
        for(let x = 0; x < numAnswers; x++) {
            $("ul").append("<li id=" + Object.values(randomizedAnswers[x]) + "><button>" + Object.keys(randomizedAnswers[x]) + "</button></li>")
                .css("list-style-type", "none")
                .css("margin", "5px")
                .css("padding","5px");
        };

        // displays the next question if the selected answer is correct
        // otherwise display "incorrect answer" response
        $("li").click(function() {
            if($(this).attr("id") == 1) {
                display_next_question();
                return;
            } 
        });
        questionsLeft -= 1;
    } 
}

function display_highscore_submission() {
    // TODO
}

function display_scoreboard() {
    // TODO
}

// function to randomize order of answers from question object
function randomizeAnswersOrder(answersArray) {
    for (var x = answersArray.length - 1; x > 0; x--) {
        var randNum = Math.floor(Math.random() * (x + 1));
        var tempVar = answersArray[x];
        answersArray[x] = answersArray[randNum];
        answersArray[randNum] = tempVar;
    }
    return answersArray;
}


