const questions = [
    {
        id: 1,
        questionText: 'The sloth is so slow moving that algae can grow in their fur',
        imgSrc: 'placeholder.png',
        options: [
          'True',
          'False',
        ],
        correctAnswer: 'True'
      },
      {
        id: 2,
        questionText: 'The horn of a rhino is actually made of hair',
        imgSrc: 'placeholder.png',
        options: [
          'True',
          'False',
        ],
        correctAnswer: 'True'
      },
      {
        id: 3,
        questionText: 'The beluga whale is often reffered to as the "canaries of the sea" due to their distinctive vocalizations',
        imgSrc: 'placeholder.png',
        options: [
          'Ture',
          'False',
        ],
        correctAnswer: 'True'
      },
      {
        id: 4,
        questionText: 'The American bald eagle is an iconic bird, but has since 1970 been considered an endangered species',
        imgSrc: 'placeholder.png',
        options: [
          'True',
          'False',
        ],
        correctAnswer: 'False'
      },
      {
        id: 5,
        questionText: 'A giraffe has the same number of cervical vertebraes as a human',
        imgSrc: 'placeholder.png',
        options: [
          'True',
          'False',
        ],
        correctAnswer: 'True'
      },
      {
        id: 6,
        questionText: 'A female house-fly can lay upp to 300 eggs in a lifetime',
        imgSrc: 'placeholder.png',
        options: [
          'True',
          'False',
        ],
        correctAnswer: 'False'
      },
      {
        id: 7,
        questionText: 'Aside from the elephant and the rhino, the hippopotamus is the biggest land mammal',
        imgSrc: 'placeholder.png',
        options: [
          'True',
          'False',
        ],
        correctAnswer: 'True'
      },
      {
        id: 8,
        questionText: 'A horse of either sex between the ages of 2 and 4 is called a "colt"',
        imgSrc: 'placeholder.png',
        options: [
          'True',
          'False',
        ],
        correctAnswer: 'False'
      },
      {
        id: 9,
        questionText: 'The male green anaconda is 2x the size of the female counterpart',
        imgSrc: 'placeholder.png',
        options: [
          'True',
          'False',
        ],
        correctAnswer: 'False'
      },
      {
        id: 10,
        questionText: 'The den of the otter is called a "sofa"',
        imgSrc: 'placeholder.png',
        options: [
          'True',
          'False',
        ],
        correctAnswer: 'False'
      }
]

const startBtn = document.querySelector(".start-btn");
const trueBtn = document.querySelector(".true-btn");
const falseBtn = document.querySelector(".false-btn");
const playAgain = document.querySelector(".play-again")
const question = document.querySelector(".question");

let score = 0;
let currentItem = 0;

// Event listeners for btns
startBtn.addEventListener("click", startButtonClick);
trueBtn.addEventListener("click", trueOptionClick);
falseBtn.addEventListener("click", falseOptionClick);


// Function that starts the game
function startButtonClick () {
  startBtn.classList.add("hide");
  trueBtn.classList.remove("hide");
  falseBtn.classList.remove("hide");
  displayFirstQuestion();
}

// Functions for game btns
function trueOptionClick () {
  checkAnswer(trueBtn.textContent);
}

function falseOptionClick () {
  checkAnswer(falseBtn.textContent);
}


// Function that displays the first question
function displayFirstQuestion () {
  question.textContent = questions[currentItem].questionText;
}

// Function that displays the next question
function displayNextQuestion () {
  currentItem ++;
  question.textContent = questions[currentItem].questionText;
}

// Function that checks the answer 
function checkAnswer (selectedBtn) {
  if (selectedBtn === questions[currentItem].correctAnswer) {
    score ++;
  }
  if (currentItem === questions.length - 1) {
    gameOver();
  } else {
    displayNextQuestion();
  }
}

// Function that displays the score 
function displayScore () {
  const playerscore = document.querySelector(".score");
  playerscore.innerHTML = `You scored ${score} out of 10!`;

  let addComment = "";
  if (score === 0) {
    addComment = " That's just bad luck!";
  } else if (score > 0 && score <= 5) {
    addComment = " You can do better than that!";
  } else if (score > 5 && score < 10) {
    addComment = " Well done!"
  } else {
    addComment = " Oh My! You sure know your animals!";
  }
  playerscore.innerHTML += addComment;
}


// Game over function 
function gameOver () {
  displayScore();
  changeQuizUi();
}

// Function that changes the Quiz UI after the quiz
function changeQuizUi () {
  const gameSections = document.querySelectorAll(".game-section");
  gameSections.forEach (function (gameSection) {
    gameSection.classList.toggle("hide");
  })
}

// Reset function
function resetQuizVariables() {
  score = 0;
  currentItem = 0;
}





// 

