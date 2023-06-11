import { quiz_contents } from "./quiz_questions.js";

let content_intro = document.getElementById("content_intro");
let content_quiz = document.getElementById("content_quiz");
let content_highscore = document.getElementById("content_highscore");
let content_scoreboard = document.getElementById("content_scoreboard");
let content_timer = document.getElementById("timer").querySelector("p");
let button_quiz_start = document.getElementById("button_quiz_start");
let quiz_answers = document.getElementById("quiz_answers");
let button_display_scoreboard = document.getElementById("button_submit_highscore");
let button_clear_highscores = document.getElementById("button_clear_highscores");
let button_go_back = document.getElementById("button_go_back");

// variable to hold all available question objects in array
var list_questions_available = quiz_contents();
// var list_questions_available = [q_datatypes, q_ifelse, q_jsarrays, q_stringvals, q_debuggingtool];
var numQuestions = list_questions_available.length;
var questionsLeft = numQuestions;

// quiz time in seconds
var quiz_time = 60;
var display_time;

// user's quiz score
var quiz_score = 0;

// quiz highscores stored in localStorage
var quiz_highscores = JSON.parse(localStorage.getItem("scores"));

// introductory button displayed at start of quiz
button_quiz_start.addEventListener("click", function() {

    display_quiz_questions();
    display_timer();
    
    content_intro.style.display = "none";
    content_quiz.style.display = "flex";
});


// selecting correct answers displays the next question
function display_next_question() {

    // when available questione expire, end timer then display highscore submission screen
    if(questionsLeft == 0) {
        clearInterval(display_time);
        content_timer.textContent = "Timer: Over";
        display_highscore_submission();
        return;
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
        $(quiz_answers).append("<ul id=\"list_answers\"></ul>");
        for(let x = 0; x < numAnswers; x++) {
            $("#list_answers").append("<li id=" + Object.values(randomizedAnswers[x]) + "><button>" + Object.keys(randomizedAnswers[x]) + "</button></li>")
                .css("list-style-type", "none")
                .css("margin", "5px")
                .css("padding","5px");
        };

        // displays the next question if the selected answer is correct
        // otherwise display "incorrect answer" response
        $("li").click(function() {
            if($(this).attr("id") == 1) {
                quiz_score += 1;
                document.getElementById("quiz_response").innerHTML = "Previous answer correct!";
                display_next_question();
                return;
            } else {
                document.getElementById("quiz_response").innerHTML = "Previous answer incorrect.";
                quiz_time -= 10;
                content_timer.textContent = "Timer: " + quiz_time;
                display_next_question();
             }
        });
        questionsLeft -= 1;
    } 
}

// displays the timer
function display_timer() {
    content_timer.textContent += quiz_time;

    // timer counts down every one second
    display_time = setInterval(function() {
        quiz_time -= 1;
        content_timer.textContent = "Timer: " + quiz_time;

        // when timer is below zero, display the high score submission
        // timer displays 0 for extra leniency before timing out
        if(quiz_time < 0) {
            content_timer.textContent = "Timer: Over";
            clearInterval(display_time);
            display_highscore_submission();
        }
    }, 1000);

}

// displays the submission page for high scores
function display_highscore_submission() {
    content_quiz.style.display = "none";
    content_highscore.style.display = "flex";

    content_highscore.querySelector("#highscore_finalscore").innerHTML = "Your final score is: " + quiz_score + "!";

    // adds username and score into highscores array
    button_display_scoreboard.addEventListener("click", function() {
        let user_name = document.getElementById("user_input").value;

        // when localStorage is empty, quiz_highscores is null
        // ensures the variable is an array before saving to localStorage
        if(quiz_highscores == null) {
            quiz_highscores = [];
        }

        // saves username and score into localStorage
        quiz_highscores.push({user_name, quiz_score});
        localStorage.setItem("scores", JSON.stringify(quiz_highscores));
        display_scoreboard();
    });
}

// displays the scoreboard
function display_scoreboard() {
    content_quiz.style.display = "none";
    content_highscore.style.display = "none";
    content_scoreboard.style.display = "flex";

    let list_highscores = quiz_highscores;

    if(quiz_highscores != null) {
        for(let x = 0; x < list_highscores.length; x++) {
            $("#list_highscores").append("<li id=\"item_highscore\">" + list_highscores[x]["user_name"] + ", " + list_highscores[x]["quiz_score"] + "</li>")
                .css("list-style-type", "none")
                .css("margin", "5px")
                .css("padding","5px");
        };
    };

    // clears highscore list
    button_clear_highscores.addEventListener("click", function() {
        localStorage.removeItem("scores");
        $("#list_highscores").remove("#item_highscore");
        document.getElementById("button_clear_highscores").innerHTML = "Highscores Cleared. Refresh the page.";
    });

    // displays intro page again by refreshing the page
    button_go_back.addEventListener("click", function() {
        location.reload();
    })
}

// function to randomize order of answers from question object
// code implemented from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function randomizeAnswersOrder(answersArray) {
    for (var x = answersArray.length - 1; x > 0; x--) {
        var randNum = Math.floor(Math.random() * (x + 1));
        var tempVar = answersArray[x];
        answersArray[x] = answersArray[randNum];
        answersArray[randNum] = tempVar;
    }
    return answersArray;
}


