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

var counter = 0;
var time = 3;
var choices = [questionsArray[counter].choiceA, 
               questionsArray[counter].choiceB,
               questionsArray[counter].choiceC,
               questionsArray[counter].choiceD
              ];
var rightAnswers = 0; 
var wrongAnswers = 0; 
var notAnswered = 0;  

var gifs = ['<img src="https://media.giphy.com/media/ap6wcjRyi8HoA/giphy.gif">',
            '<img src="https://media.giphy.com/media/13xHqoOQOdFu5a/giphy.gif">',
            '<img src="https://media.giphy.com/media/1ZkMDj88mQ1rO/giphy.gif">'
            ];

$(document).ready(function() { 

$("#start-button").on("click", function() { 
  $("#start-button").remove(); 
  createElements();   
  nextQuestion();
});

function createElements() {
  var question = $("<p>");
        question.html(questionsArray[0].question);
    $("#question").append(question);
    // Creating 4 p of choices available
    for(var i = 0; i < 4; i++){
        var choice = $("<p>");
            choice.attr({
                "class":"choice btn rounded",
                "id":"choice" + i
            });
            choice.html(choices[i]);
        $("#buttons").append(choice); // adding them to the DOM   
        $("#timer").html("Time Remaining: " + time);
        $("#display").addClass("background");
    }};

    $(".choice").on('click', function () {
    var value = $(this).html(); // getters and setters
    
    var correct = questionsArray[i].correctAnswer;
    // Checking if the user got the corect answer or not
    if(value !== correct){
        console.log("Sorry, you lose");
        $("#gif").html("<h1>" + "Wrong!" + "</h1>" + gifs[1]);
        wrongAnswers++;
        
    } else{
        console.log("We win!!");
         $("#gif").html("<h1>" + "Correct!" + "</h1>" + gifs[0]);
        rightAnswers++;
    }
    counter++;
    console.log(value);
});

function nextQuestion() { 
   var timer = setInterval(function () {
       time--;
       
       if(time <= 0) {
          counter++;
        choices = [questionsArray[counter].choiceA, 
                   questionsArray[counter].choiceB,
                   questionsArray[counter].choiceC,
                   questionsArray[counter].choiceD
                  ];
        time = 3;
        if (counter >= 7) {
          clearInterval(timer);
          gameOver();
        }
       }
   }, 1000);
    // gameOver(); 
   };

function reset() {
  counter = 0;
  rightAnswers = 0; 
  wrongAnswers = 0; 
  notAnswered = 0;
  time = 3;
  $("#start-over").remove();
  $("#display").show();
  createElements();
}

$("#start-over").on("click", function() { 
  reset();  
  });
});

function gameOver() {  //ends the game once all questions have been run through

  // clearInterval(counter); // stops counter
    $("#display").remove();  // removes the timer, question, and answers
    $("#gif1").remove();
    $("#correct").html("Correct: " + rightAnswers); // correct answer
    $("#incorrect").html("Incorrect: " + wrongAnswers); // incorrect answers
    $("#unanswered").html("Unanswered: " + notAnswered);  // unanswered
    $("#gif").html(gifs[2])
    $("#results").addClass("background");
    $("#start-over").append("<button>" + "Try Again!" + "</button>") // Button to start game over
};



