let content_intro = document.getElementById("content_intro");
let content_quiz = document.getElementById("content_quiz");
let content_highscore = document.getElementById("content_highscore");
let content_scoreboard = document.getElementById("content_scoreboard");

let button_quiz_start = document.getElementById("button_quiz_start");

button_quiz_start.addEventListener("click", function() {
    console.log("quiz started");

    document.getElementById("quiz_question").textContent = q_datatypes["question"];
    content_intro.style.display = "none";
    content_quiz.style.display = "flex";
});

let list_questions = [];

let q_datatypes = {
    "question":"Commonly used data types DO NOT include: ",
    "answers": [
        "alerts",
        "strings",
        "booleans",
        "numbers"
    ]
};