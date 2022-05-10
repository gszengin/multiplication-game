window.onload = function ()
{
	   alert("Good Luck :-)");
}


let firstNum =0;
let secondNum =0;
let timeLeft =10;
let timerInterval;
let highScore = 0;
let currentScore = 0;


function startGame(){
    document.getElementById("startBtn").disabled = true;
    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.hidden = false;
    timerInterval = setInterval(function(){
        timeLeft -=1;
        timeDisplay.innerHTML = "Time Left: " + timeLeft;
         if(timeLeft == 0){
            clearInterval(timerInterval);
         }
    }, 1000)
    
    nextQuestion();
    
}

function nextQuestion(){
    
   firstNum = Math.ceil(Math.random()* 12);
   secondNum = Math.ceil(Math.random()*12);
   
   let operationDiv = document.getElementById("operation");
   correctAnswer = firstNum * secondNum;
   operationDiv.innerHTML = firstNum + "*" + secondNum;
   
   let wrongAnswer1 = Math.ceil(Math.random()* 12) * Math.ceil(Math.random()* 12);
   let wrongAnswer2 = Math.ceil(Math.random()* 12) * Math.ceil(Math.random()* 12);
   let wrongAnswer3 = Math.ceil(Math.random()* 12) * Math.ceil(Math.random()* 12);
   let wrongAnswer4 = Math.ceil(Math.random()* 12) * Math.ceil(Math.random()* 12);

   document.getElementById("btn1").innerHTML = wrongAnswer1;
   document.getElementById("btn2").innerHTML = wrongAnswer2;
   document.getElementById("btn3").innerHTML = wrongAnswer3;
   document.getElementById("btn4").innerHTML = wrongAnswer4;
   
   let correctAnswerIndex = Math.floor(Math.random()*4)+1; // 1 2 3 4
   let correctAnswerID = "btn" + correctAnswerIndex;
   document.getElementById(correctAnswerID).innerHTML = correctAnswer;
   
}

function checkAnswer (buttonIndex) {
    
    let answer = document.getElementById("btn" + buttonIndex);
    if(answer == correctAnswer){
        currentScore +=1
        document.getElementById("currentScore").innerHTML = "Current Score: " + currentScore;
        nextQuestion();
    }
}







