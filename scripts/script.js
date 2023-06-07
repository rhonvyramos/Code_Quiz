let content_intro = document.getElementById("content_intro");
let content_quiz = document.getElementById("content_quiz");
let content_highscore = document.getElementById("content_highscore");
let content_scoreboard = document.getElementById("content_scoreboard");

let button_quiz_start = document.getElementById("button_quiz_start");

let q_datatypes = {
    "question":"Commonly used data types DO NOT include: ",
    "answers": [
        "alerts",
        "strings",
        "booleans",
        "numbers"
    ]
};

let q_ifelse = {
    "question":"The condition in an if/else statement is enclosed within _____.",
    "answers": [
        "parenthesis",
        "quotes",
        "curly braces",
        "square brackets"
    ]
}

let list_questions = [q_datatypes, q_ifelse];

button_quiz_start.addEventListener("click", function() {
    console.log("quiz started");

    let randQuestion = Math.floor(Math.random() * list_questions.length);

    document.getElementById("quiz_question").textContent = list_questions[randQuestion]["question"];
    content_intro.style.display = "none";
    content_quiz.style.display = "flex";
});

