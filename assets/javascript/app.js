// I need to stop the timer after submit has been clicked
// I need to reset timer with the try again button
// I need to reset the radio buttons with the try again button
// my score currently waits until time has expired to calculate

$(document).ready(function() { 

  var correct = 0;
  var incorrect = 0;

//for hiding the questions before clicking start
  function hideQuestions() { 
    $("#display").hide();
  }
  hideQuestions();
//for showing the questions after clicking "start"
  function showQuestions() { 
    $("#display").show();
  }
  //for hiding the start button after it's clicked
  function hideStart() { 
    $("#start-screen").hide();
  }
// for hiding results div
  function hideResults() {
    $("#results").hide();
  }
  hideResults();
// show the results div
  function showResults() {
    $("#results").show();
    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
  }

    //start button:
    $("#StartButton").on("click", function() {
      countdown('countdown', 1, 30);
      showQuestions(); 
      hideStart(); 
      });

// submit button
    $("#submit").on("click", function() {
      hideQuestions();
      showResults(); 
      hideStart(); 
      getScore();
      });

    // try again
    $("#startOver").on("click", function() {
      deselect();
      resetButtons();
    });

    function resetButtons() {
      correct = 0;
      incorrect = 0;
      $("#display").show();
      $("#results").hide();
    }

// reset radio buttons... not working
function deselect() {
  $('input[name="q1"]').attr('checked', false);
  $('input[name="q2"]').attr('checked', false);
  $('input[name="q3"]').attr('checked', false);
  $('input[name="q4"]').attr('checked', false);
  $('input[name="q5"]').attr('checked', false);
  $('input[name="q6"]').attr('checked', false);
  $('input[name="q7"]').attr('checked', false);
  $('input[name="q8"]').attr('checked', false);
}

// countdown timer
function countdown(element, minutes, seconds) {
    var time = minutes*60 + seconds;
    var interval = setInterval(function() {
        var el = document.getElementById(element);
        if(time == 0) {
            el.innerHTML = "Time's Up!";    
            clearInterval(interval);
            getScore();
            hideQuestions();
            showResults();
            return;
        }
        var minutes = Math.floor( time / 60 );
        var seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds; 
        var text = minutes + ':' + seconds;
        el.innerHTML = text;
        time--;
    }, 1000);
}

// determine score for each question
    function getScore() {
  $("input[type='button']").click(function(){
            var radioValue = $("input[name='q1']:checked").val();
            if(radioValue == 1){
                correct++;
            }
            else if(radioValue == 0){
                incorrect++;
            }
        });
   $("input[type='button']").click(function(){
            var radioValue2 = $("input[name='q2']:checked").val();
            if(radioValue2 == 1){
                correct++;
            }
            else if(radioValue2 == 0){
                incorrect++;
            }
        });
    $("input[type='button']").click(function(){
            var radioValue3 = $("input[name='q3']:checked").val();
            if(radioValue3 == 1){
                correct++;
            }
            else if(radioValue3 == 0){
                incorrect++;
            }
        });
     $("input[type='button']").click(function(){
            var radioValue4 = $("input[name='q4']:checked").val();
            if(radioValue4 == 1){
                correct++;
            }
            else if(radioValue4 == 0){
                incorrect++;
            }
        });
      $("input[type='button']").click(function(){
            var radioValue5 = $("input[name='q5']:checked").val();
            if(radioValue5 == 1){
                correct++;
            }
            else if(radioValue5 == 0){
                incorrect++;
            }
        });
       $("input[type='button']").click(function(){
            var radioValue6 = $("input[name='q6']:checked").val();
            if(radioValue6 == 1){
                correct++;
            }
            else if(radioValue6 == 0){
                incorrect++;
            }
        });
        $("input[type='button']").click(function(){
            var radioValue7 = $("input[name='q7']:checked").val();
            if(radioValue7 == 1){
                correct++;
            }
            else if(radioValue7 == 0){
                incorrect++;
            }
        });
         $("input[type='button']").click(function(){
            var radioValue8 = $("input[name='q8']:checked").val();
            if(radioValue8 == 1){
                correct++;
            }
            else if(radioValue8 == 0){
                incorrect++;
            }
        });
}
});

// function checkGuess(value, currentQuestion) {
//   for (var i = 0; i < question.length; i += 1) {
//     if (question[i][currentQuestion].answer === value) {
//       return value;
//     }
//   }
// };