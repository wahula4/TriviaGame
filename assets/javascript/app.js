//clock timer is starting 1 second too soon
// start over button not working

$(document).ready(function() { 

  var questionsArray = [
  {
    question: "1. What MLB team did George Costanza work for?",
    choiceA: "A: New York Mets", 
    choiceB: "B: New York Yankees",
    choiceC: "C: Cleveland Indians",
    choiceD: "D: L.A. Dodgers",
    correctAnswer: "B: New York Yankees"
  },
  {
    question: "2. What candy bar did George have stolen by the mechanic at Puddy's car dealership?",
    choiceA: "A: Clark Bar",  
    choiceB: "B: Snickers",
    choiceC: "C: Hershey's Bar",
    choiceD: "D: Twix",
    correctAnswer: "D: Twix"
  }, 
  {
    question: "3. Which famous Broady star did Kramer injure in a softball game?",   
    choiceA: "A: Liza Minnelli", 
    choiceB: "B: Bette Midler",
    choiceC: "C: Barbara Streisand",
    choiceD: "D: Ethel Merman",
    correctAnswer: "B: Bette Midler"  
  },
  {
    question: "4. In the 'Marine Biologist' episode, what type of golf ball did Kramer hit into the whale?",   
    choiceA: "A: Callaway",  
    choiceC: "C: Titleist",
    choiceD: "D: Srixon",
    correctAnswer: "C: Titleist"
  },
  {
    question: "5. What does Elaine do to embarrass herself at the company holiday party?",   
    choiceA: "A: Dance", 
    choiceB: "B: Sing",
    choiceC: "C: Get wasted",
    choiceD: "D: Break up with Puddy",
    correctAnswer: "A: Dance"
  },
  {
    question: "6. What career did George always want to pretend to do?",   
    choiceA: "A: Baseball player",  
    choiceB: "B: Importer, exporter",
    choiceC: "C: Latex salesman",
    choiceD: "D: Architect",
    correctAnswer: "D: Architect"
  },
    {
    question: "7. What type of pasta does Kramer use to make a figurine of Jerry?",  
    choiceA: "A: Tortellini",  
    choiceC: "C: Fusilli",
    choiceD: "D: Linguine",
    correctAnswer: "C: Fusilli"
  },
    {
    question: "8. What is Kramer's first name?",  
    choiceA: "A: Cosmo",  
    choiceB: "B: Kenny",
    choiceC: "C: Carl",
    choiceD: "D: Maestro",
    correctAnswer: "A: Cosmo"
  },
];

var clock;  
var counter; 
 
var rightAnswers = 0; 
var wrongAnswers = 0; 
var notAnswered = 0;  

var timerRunning = false;

var chosenAnswer; 

var gifs = ['<img src="https://media.giphy.com/media/ap6wcjRyi8HoA/giphy.gif">',
            '<img src="https://media.giphy.com/media/13xHqoOQOdFu5a/giphy.gif">',
            '<img src="https://media.giphy.com/media/1ZkMDj88mQ1rO/giphy.gif">'
            ];

$("#start-button").append("<button>" + "Start" + "</button>");  // Displays the start button

function nextQuestion() { 
   
    for (i = 0; i < questionsArray.length; i++) {
    
  clock = 30; 
      $("#question").html(questionsArray[i].question); 
      $("#choiceA").html(questionsArray[i].choiceA); 
      $("#choiceB").html(questionsArray[i].choiceB);
      $("#choiceC").html(questionsArray[i].choiceC);
      $("#choiceD").html(questionsArray[i].choiceD);  
  

      if (i === questionsArray.length)  {  
    gameOver(); 
   }
  }
};

function timer() {  
  clock--; 
  $("#timer").html("Time Remaining: " + clock); //displays timer

  if (!timerRunning) {  
    counter = setInterval(timer, 1000); 
    timerRunning = true;
  }

  if (clock === 0) { 
    notAnswered++; 
    alert("Sorry! too slow");
    nextQuestion(); 
  }
};

function answerChecker() { 
  var correctAnswers = questionsArray[i].correctAnswer;
  
  if (chosenAnswer === correctAnswers) { 
    $("#gif").html("<h1>" + "Correct!" + "</h1>" + gifs[0]);
    rightAnswers++;
  
  } else if (chosenAnswer !== correctAnswers) { 
    $("#gif").html("<h1>" + "Wrong!" + "</h1>" + gifs[1]);
    wrongAnswers++; 
  }
};

function gameOver() {  //ends the game once all questions have been run through

  clearInterval(counter); // stops counter
    $("#display").remove();  // removes the timer, question, and answers
    $("#gif1").remove();
    $("#correct").html("Correct: " + rightAnswers); // correct answer
    $("#incorrect").html("Incorrect " + wrongAnswers); // incorrect answers
    $("#unanswered").html("Unanswered " + notAnswered);  // unanswered
    $("#gif").html(gifs[2])
    $("#start-over").append("<button>" + "Try Again!" + "</button>") // Button to start game over
};

$("#start-over").on("click", function() { 
  nextQuestion(); 
  timer();  
});

$("#start-button").on("click", function() { 
  $("#start-button").remove(); 
  nextQuestion(); 
  timer();  
});

$("#choiceA").on("click", function() {  
  chosenAnswer = questionsArray[i].choiceA;  
  answerChecker();  
  nextQuestion();   
  timer();  

});

$("#choiceB").on("click", function() {
  chosenAnswer = questionsArray[i].choiceB;
  answerChecker();
  nextQuestion(); 
  timer();
});

$("#choiceC").on("click", function() {
  chosenAnswer = questionsArray[i].choiceC;
  answerChecker();
  nextQuestion(); 
  timer();  
});

$("#choiceD").on("click", function() {
  chosenAnswer = questionsArray[i].choiceD;
  answerChecker();
  nextQuestion(); 
  timer();
});

});



// var i = -1; 

// if (i < (questionArray.length - 1)) { 
//   i++;  