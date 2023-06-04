//Starting Quiz
let startButton = document.querySelector(".startButton")
let timer = document.querySelector(".timer")
let secondsLeft = 75;
let startScreen = document.querySelector(".startScreen");

//Quiz Questions
let questionSection = document.querySelector(".questionSection");
let questionScreen = document.querySelector(".questionScreen");
let questions = document.querySelector(".question");
let choices = document.querySelector(".choices");
let answer = document.querySelector(".answers");
let questionIndex = 0;

//Final
let finalScoreScreen = document.querySelector(".finalScoreScreen");;
let finalScore = document.querySelector(".finalScore");
let initials = document.querySelector("input");
let submitBtn = document.querySelector(".submitBtn");

//High Score
let viewHighScoresBtn = document.querySelector(".viewHighScoresBtn");
let highScoreScreen = document.querySelector(".highScoreScreen");
let highScoreList = document.querySelector(".highScoreOl");
let highScoreArrray = [];
let backBtn = document.querySelector(".backBtn");
let clearScoresBtn = document.querySelector(".clearScoresBtn");

let questionsArray = [
    {
        title: "How is code sequenced?",
        choices: ['top to bottom', 'bottom to top', 'all at once', 'not at all'],
        answer: '1',
    },
    {
        title: "What is a loop?",
        choices: ['a mini program', 'code being executed repeatedly', 'a fast way to write a program'],
        answer: '2',
    },
    {
        title: "What is a conditional statement for?",
        choices: ['used to change a variable', 'used to redirect the flow of the program', 'shortens the length of your statement'],
        answer: '2',
    },
    {
        title: "What is a while loop",
        choices: ['Tests for a condition before the loop starts', 'tests for a condition afer the loop starts', 'tests for a condition repeatedly until it is met'],
        answer: '1'
    },
    {
        title: "What is a do.. while loop",
        choices: ['Tests for a condition before the loop starts', 'tests for a condition afer the loop starts', 'tests for a condition repeatedly until it is met'],
        answer: '2'
    },
    {
        title: "What is a for loop?",
        choices: ['Tests for a condition before the loop starts', 'tests for a condition afer the loop starts', 'tests for a condition repeatedly until it is met'],
        answer: '3'
    },
]
//timer
function setTimer() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time is up");
            endGame();
        } else if (questionIndex === questionsArray.length) {
            clearInterval(timerInterval)
            endGame()
        }
    }, 1000);
};

//Hide start screen, shows questions, starts timer
function startQuiz() {
    startScreen.setAttribute('class', 'hide');
    questionSection.removeAttribute('class', 'hide');
    highScoreScreen.setAttribute("class", "hide");
    finalScoreScreen.setAttribute("class", "hide");
    setTimer()
    runQuestions()
}

//questions
function runQuestions() {
    questions.textContent = questionsArray[questionIndex].title;
    answer.textContent = "";
    for (let i = 0; i < questionsArray[questionIndex].choices.length; i++) {
        let choiceBtn = document.createElement('button');
        choiceBtn.textContent = questionsArray[questionIndex].choices[i];
        choiceBtn.id = (i + 1).toString()
        choiceBtn.addEventListener("click", checkAnswers);
        answer.append(choiceBtn)
    }
}

//answers
function checkAnswers(event) {
    let userAnswer = event.target.id;
    if (userAnswer === questionsArray[questionIndex].answer) {
        answer.textContent = "Correct";
        secondsLeft += 10;
    } else {
        answer.textContent = "Incorrect";
        secondsLeft -= 10;
    }
    questionIndex++;

    if (questionIndex < questionsArray.length) {
        runQuestions();
    } else endGame();
}


//hide questions shows final screen
function endGame() {
    clearInterval(setTimer);
    questionSection.setAttribute('class', 'hide');
    finalScoreScreen.removeAttribute('class', 'hide');
    finalScore.textContent = "Your final score is " + secondsLeft + "! Enter your initials here:";
    finalScore.setAttribute('class', 'text is-family-code is-size-3')

}

//backBtn
backBtn.addEventListener("click", function () {
    startScreen.removeAttribute('class', 'hide')
    highScoreScreen.setAttribute('class', 'hide')
})

// Starts Quiz
startButton.addEventListener("click", startQuiz);
console.log("Quiz started");


// submit button text
submitBtn.addEventListener("click", function () {
    document.getElementById("submitText").innerHTML = "Nice job! Click 'View High Score' to see your progress";
});

//view highscores, adding them to local storage
function showingLocalStorage() {
    // Get user's input
    let initialsInput = document.querySelector(".initials").value;
    showingLocalStorage();

    // Create the highScore object
    let highScore = {
        initials: initialsInput,
        timerCount: secondsLeft,
    }

    // Retrieve existing high scores from local storage
    let storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Add the new high score to the array
    storedHighScores.push(highScore);

    // Store the updated high scores array in local storage
    localStorage.setItem("highScores", JSON.stringify(storedHighScores));

    // Clear the container to remove any previous content
    highScoreList.innerHTML = "";

    // Iterate over the high scores array and create HTML elements for each entry
    storedHighScores.forEach(function (highScore) {
        let highScoreElement = document.createElement("div");
        highScoreElement.textContent = highScore.initials + " " + highScore.timerCount;
        highScoreList.appendChild(highScoreElement);
    });
}
showingLocalStorage()


// clear high scores
clearScoresBtn.addEventListener("click", function () {
    localStorage.removeItem("highScores");
    highScoreList.innerHTML = "";
})

// show high scores
viewHighScoresBtn.addEventListener("click", function () {
    showingLocalStorage()
    highScoreScreen.removeAttribute('class', 'hide');
    startScreen.setAttribute('class', 'hide');
    finalScoreScreen.setAttribute('class', 'hide');

})