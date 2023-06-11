import { quiz_contents } from "./quiz_questions.js";

let content_intro = document.getElementById("content_intro");
let content_quiz = document.getElementById("content_quiz");
let content_highscore = document.getElementById("content_highscore");
let content_scoreboard = document.getElementById("content_scoreboard");
let content_timer = document.getElementById("timer").querySelector("p");

let button_quiz_start = document.getElementById("button_quiz_start");
let button_next_q = document.getElementById("go_next");

let quiz_answers = document.getElementById("quiz_answers");

// variable to hold all available question objects in array
var list_questions_available = quiz_contents();
// var list_questions_available = [q_datatypes, q_ifelse, q_jsarrays, q_stringvals, q_debuggingtool];
var numQuestions = list_questions_available.length;
var questionsLeft = numQuestions;

var quiz_time = 60;
var quiz_score = 0;

// introductory button displayed at start of quiz
button_quiz_start.addEventListener("click", function() {

    display_quiz_questions();
    display_timer();
    
    content_intro.style.display = "none";
    content_quiz.style.display = "flex";
});

// selecting correct answers displays the next question
function display_next_question() {
    if(questionsLeft == 0) {
        display_highscore_submission();
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
                quiz_score += 1;
                document.getElementById("quiz_response").innerHTML = "Correct!";
                display_next_question();
                return;
            } else {
                document.getElementById("quiz_response").innerHTML = "Incorrect.";
                quiz_time -= 10;
                content_timer.textContent = "Timer: " + quiz_time;
             }
        });
        questionsLeft -= 1;
    } 
}

function display_timer() {
    content_timer.textContent += quiz_time;

    var display_time = setInterval(function() {
        quiz_time -= 1;
        content_timer.textContent = "Timer: " + quiz_time;
        if(quiz_time < 0) {
            content_timer.textContent = "Timer: Over";
            clearInterval(display_time);
            display_highscore_submission();
        }
    }, 1000);

}

function display_highscore_submission() {
    content_quiz.style.display = "none";
    content_highscore.style.display = "flex";

    content_highscore.querySelector("#highscore_prompt_title").innerHTML = "All Done!";
    content_highscore.querySelector("#highscore_finalscore").innerHTML = "Your final score is: " + quiz_score + "!";
    
    $(content_highscore).find("#highscore_prompt_userinput").append("<input type=\"text\" placeholder=\"What is your name?\"></input>");
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


