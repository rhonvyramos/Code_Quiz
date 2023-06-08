let content_intro = document.getElementById("content_intro");
let content_quiz = document.getElementById("content_quiz");
let content_highscore = document.getElementById("content_highscore");
let content_scoreboard = document.getElementById("content_scoreboard");

let button_quiz_start = document.getElementById("button_quiz_start");
let button_next_q = document.getElementById("go_next");

let quiz_answers = document.getElementById("quiz_answers");

let q_datatypes = {
    "question":"(Q1) Commonly used data types DO NOT include: ",
    "answers": [
        "alerts",
        "strings",
        "booleans",
        "numbers"
    ]
};

let q_ifelse = {
    "question":"(Q2) The condition in an if/else statement is enclosed within _____.",
    "answers": [
        "parenthesis",
        "quotes",
        "curly braces",
        "square brackets"
    ]
}

let q_jsarrays = {
    "question":"(Q3) Arrays in JavaScript can be used to store _____.",
    "answers": [
        "all of the above",
        "numbers and strings",
        "other arrays",
        "booleans"
    ]
}

let q_stringvals = {
    "question":"(Q4) String values must be enclosed within _____ when assigned to variables",
    "answers": [
        "quotes",
        "curly brackets",
        "commas",
        "parenthesis"
    ]
}

let q_debuggingtool = {
    "question":"(Q5) A very useful tool used for development and debugging for printing content to the debugger is:",
    "answers": [
        "console.log",
        "terminal/bash",
        "for loops",
        "JavaScript"
    ]
}

var list_questions_available = [q_datatypes, q_ifelse, q_jsarrays, q_stringvals, q_debuggingtool];
var numQuestions = list_questions_available.length;
var questionsLeft = numQuestions;

button_quiz_start.addEventListener("click", function() {
    console.log("quiz started");

    display_quiz_questions();
    
    content_intro.style.display = "none";
    content_quiz.style.display = "flex";
});

go_next.addEventListener("click", function() {

    display_quiz_questions();

    if(questionsLeft == 0) {
        button_next_q.style.display = "none";
        return;
    }
})

function display_quiz_questions() {
    let randIndex = Math.floor(Math.random() * numQuestions);
    let randQuestionObject = list_questions_available[Math.floor(randIndex)];
    let randQuestion = randQuestionObject["question"];

    list_questions_available.splice(randIndex, 1);

    numQuestions = list_questions_available.length;

    if (questionsLeft > 0) {
        document.getElementById("quiz_question").textContent = randQuestion;

        $(quiz_answers).append("<ul></ul>");
        $("ul").append("<li></li>");
        $("li").append(randQuestionObject["answers"][0]);

        questionsLeft -= 1;
    } 
}

