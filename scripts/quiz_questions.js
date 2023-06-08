// all available questions as objects
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

// variable to hold all available question objects in array
var list_questions_available = [q_datatypes, q_ifelse, q_jsarrays, q_stringvals, q_debuggingtool];

export function quiz_contents() {
    return list_questions_available;
}
