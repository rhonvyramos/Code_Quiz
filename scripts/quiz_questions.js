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

let q_ultag = {
    "question":"(Q6) The <ul> tag designates what type of HTML element?",
    "answers":[
        {"unordered list":1},
        {"unripe lemons":0},
        {"undiagnosed ligma":0},
        {"un list":0}
    ]
};

let q_varscope = {
    "question":"(Q7) A \"global variable\" is a variable that can be used...",
    "answers":[
        {"... across all function scopes.":1},
        {"... across the globe.":0},
        {"... in one function only.":0},
        {"... only where it is.":0}
    ]
};

let q_jqueryselector = {
    "question":"(Q8) What is the correct syntax for a jQuery selector that selects an element with a specific id?",
    "answers":[
        {"$(\"#name\")":1},
        {"$(name)":0},
        {"#(name)":0},
        {"$(\"name\")#":0}
    ]
};

let q_cssstyling = {
    "question":"(Q9) What is the correct syntax for a .css style that targets p element under a h1 tag?",
    "answers":[
        {"h1 p {}":1},
        {"h1 #p {}":0},
        {"#p {}":0},
        {"h1 {p}":0}
    ]
};

let q_objects = {
    "question":"(Q10) How many attributes can an object have?",
    "answers":[
        {"As many as needed.":1},
        {"Four dabloons.":0},
        {"Eight.":0},
        {"One.":0}
    ]
};

let q_increments = {
    "question":"(Q11) To correctly apply a value increment, what is the operator used?",
    "answers":[
        {"x += value":1},
        {"x plus value":0},
        {"x +++ value":0},
        {"x value":0}
    ]
};

let q_filenames = {
    "question":"(Q12) What is the file extension that designates an HTML file?",
    "answers":[
        {".html":1},
        {".HL":0},
        {".js":0},
        {".hypertext":0}
    ]
};

let q_innerHTML = {
    "question":"(Q12) We use _____ to directly place text into an HTML element through Javascript.",
    "answers":[
        {".innerHTML":1},
        {".inner":0},
        {".htmlTEXT":0},
        {".textHere":0}
    ]
};

// variable to hold all available question objects in array
var list_questions_available = [
    q_datatypes, 
    q_ifelse, 
    q_jsarrays, 
    q_stringvals, 
    q_debuggingtool,
    q_ultag,
    q_varscope,
    q_jqueryselector,
    q_cssstyling,
    q_objects,
    q_increments,
    q_filenames,
    q_innerHTML
];

// exports questions array 
export function quiz_contents() {
    return list_questions_available;
}
