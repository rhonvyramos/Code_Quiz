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

let q_jsarrays = {
    "question":"Arrays in JavaScript can be used to store _____.",
    "answers": [
        "all of the above",
        "numbers and strings",
        "other arrays",
        "booleans"
    ]
}

var list_questions_available = [q_datatypes, q_ifelse, q_jsarrays];
var numQuestions = list_questions_available.length;
var questionsLeft = numQuestions;

button_quiz_start.addEventListener("click", function() {
    console.log("quiz started");

    display_quiz_questions();
    
    content_intro.style.display = "none";
    content_quiz.style.display = "flex";
});

go_next.addEventListener("click", function() {

    if(questionsLeft == 1) {
        button_next_q.style.display = "none";
        return;
    }

    display_quiz_questions();
})

function display_quiz_questions() {
    let randIndex = Math.floor(Math.random() * numQuestions);
    let randQuestionObject = list_questions_available[Math.floor(randIndex)];
    let randQuestion = randQuestionObject["question"];

    list_questions_available.splice(randIndex, 1);
    console.log(list_questions_available);

    numQuestions = list_questions_available.length;

    document.getElementById("quiz_question").textContent = randQuestion;

    if (questionsLeft > 0) {
        document.getElementById("quiz_question").textContent = randQuestion;
        questionsLeft -= 1;
    } 
}

