// all available questions as objects
let q_datatypes = {
    "question":"(Q1) Commonly used data types DO NOT include: ",
    "answers": [
        {"alerts":1},
        {"strings":0},
        {"booleans":0},
        {"numbers":0}
    ]
};

let q_ifelse = {
    "question":"(Q2) The condition in an if/else statement is enclosed within _____.",
    "answers": [
        {"parenthesis":1},
        {"quotes":0},
        {"curly braces":0},
        {"square brackets":0}
    ]
};

let q_jsarrays = {
    "question":"(Q3) Arrays in JavaScript can be used to store _____.",
    "answers": [
        {"all of the above":1},
        {"numbers and strings":0},
        {"other arrays":0},
        {"booleans":0}
    ]
};

let q_stringvals = {
    "question":"(Q4) String values must be enclosed within _____ when assigned to variables",
    "answers": [
        {"quotes":1},
        {"curly brackets":0},
        {"commas":0},
        {"parenthesis":0}
    ]
};

let q_debuggingtool = {
    "question":"(Q5) A very useful tool used for development and debugging for printing content to the debugger is:",
    "answers": [
        {"console.log":1},
        {"terminal/bash":0},
        {"for loops":0},
        {"JavaScript":0}
    ]
};

// variable to hold all available question objects in array
var list_questions_available = [
    q_datatypes, 
    q_ifelse, 
    q_jsarrays, 
    q_stringvals, 
    q_debuggingtool
];

export function quiz_contents() {
    return list_questions_available;
}
