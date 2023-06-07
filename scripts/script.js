let content_intro = document.getElementById("content_intro");
let content_quiz = document.getElementById("content_quiz");
let content_highscore = document.getElementById("content_highscore");
let content_scoreboard = document.getElementById("content_scoreboard");

let button_quiz_start = document.getElementById("button_quiz_start");
let button_next_q = document.getElementById("go_next");

let q_datatypes = {
    "question":"Commonly used data types DO NOT include: ",
    "answers": [
        "alerts",
        "strings",
        "booleans",
        "numbers"
    ],
    "isAsked": false
};

let q_ifelse = {
    "question":"The condition in an if/else statement is enclosed within _____.",
    "answers": [
        "parenthesis",
        "quotes",
        "curly braces",
        "square brackets"
    ],
    "isAsked": false
}

let q_jsarrays = {
    "question":"Arrays in JavaScript can be used to store _____.",
    "answers": [
        "all of the above",
        "numbers and strings",
        "other arrays",
        "booleans"
    ],
    "isAsked": false
}

let list_questions = [q_datatypes, q_ifelse, q_jsarrays];
let numQuestions = list_questions.length;
var questionsLeft = numQuestions;

button_quiz_start.addEventListener("click", function() {
    console.log("quiz started");

    let randQuestion = Math.floor(Math.random() * numQuestions);

    document.getElementById("quiz_question").textContent = list_questions[randQuestion]["question"];
    content_intro.style.display = "none";
    content_quiz.style.display = "flex";
});

go_next.addEventListener("click", function() {

    let randQuestion = Math.floor(Math.random() * numQuestions);

    if (questionsLeft > 0) {
        document.getElementById("quiz_question").textContent = list_questions[randQuestion]["question"];
        questionsLeft -= 1;
        console.log(questionsLeft)
    } else {
        return;
    }


})

