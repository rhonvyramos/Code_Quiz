let button_quiz_start = document.getElementById("button_quiz_start");

let content_intro = document.getElementById("content_intro");
let content_quiz = document.getElementById("content_quiz");

button_quiz_start.addEventListener("click", function() {
    console.log("quiz started");


    content_intro.style.display = "none";
    content_quiz.style.display = "flex";
});