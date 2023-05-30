//Starting Quiz
let startButton = document.querySelector(".start-button")
let timer = document.querySelector(".timer")
let secondsLeft = 75;
let startScreen = document.querySelector(".start-screen");

let questionsArray = [
    [{
        title: "How is code sequenced?",
        choices: ['top to bottom', 'bottom to top', 'all at once', 'not at all'],
        answer: '0',
    },
    {
        title: "What is a loop?",
        choices: ['a mini program', 'code being executed repeatedly', 'a fast way to write a program'],
        answer: '1',
    },
    {
        title: "What is a conditional statement for?",
        choices: ['used to change a variable', 'used to redirect the flow of the program', 'shortens the length of your statement'],
        answer: '1',
    },
    {
        title: "What is a while loop",
        choices: ['Tests for a condition before the loop starts', 'tests for a condition afer the loop starts', 'tests for a condition repeatedly until it is met'],
        answer: '0'
    },
    {
        title: "What is a do.. while loop",
        choices: ['Tests for a condition before the loop starts', 'tests for a condition afer the loop starts', 'tests for a condition repeatedly until it is met'],
        answer: '1'
    },
    {
        title: "What is a for loop?",
        choices: ['Tests for a condition before the loop starts', 'tests for a condition afer the loop starts', 'tests for a condition repeatedly until it is met'],
        answer: '2'
    },
    ]
]

//timer
function setTimer() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContern = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time is up");
            endGame();
        } else if (questionIndex === questionsArray.length) {
            clearInterval(timerInterval)
            endgame()
        }
    }, 1000);
};

//Hide start screen, shows questions, starts timer
function startQuiz() {
    startScreen.setAttribute('class', 'hide');

    setTimer()
    runQuestions()
}

//questions
function(runQuestions)

//answers
function(checkAnswers)

//endgame
function(endGame) 

//hide questions and show final score

