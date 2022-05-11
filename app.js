window.onload = function ()
{
	   alert("Good Luck :-)");
}

window.onload = function()
{
    let scoreFromBrowser = localStorage.getItem("highScore");
    if(scoreFromBrowser != undefined) highScore = scoreFromBrowser;
    document.getElementById("highScore").innerHTML = "High Score: " + highScore;
    
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn4").disabled = true;
	
}

let firstNum =0;
let secondNum =0;
let timeLeft =60;
let timerInterval;
let highScore = 0;
let score = 0;
let correctAnswer = 0;

function startGame(){
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
	
    document.getElementById("startBtn").disabled = true;
    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.hidden = false;
    timerInterval = setInterval(function(){
        timeLeft -=1;
        timeDisplay.innerHTML = "Time Left: " + timeLeft;
         if(timeLeft == 0){
            clearInterval(timerInterval);
             document.getElementById("btn1").disabled = true;
             document.getElementById("btn2").disabled = true;
             document.getElementById("btn3").disabled = true;
             document.getElementById("btn4").disabled = true;
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
    
    let answer = document.getElementById("btn" + buttonIndex).innerHTML;
    if(answer == correctAnswer) score +=1;
        document.getElementById("currentScore").innerHTML = "Current Score: " + score;
        if (score > highScore) highScore = score;
        localStorage.setItem("highScore", highScore);
        document.getElementById("highScore").innerHTML = "High Score: " + highScore;
        nextQuestion();
    
}







