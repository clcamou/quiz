// variables 
let start = document.getElementById("start");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let counter = document.getElementById("counter");
let timeGauge = document.getElementById("timeGauge");
let progress = document.getElementById("progress");
let scoreDiv = document.getElementById("scoreContainer");
let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let questionTime = 15; // 15s is the amount of time given for each question 
let gaugeWidth = 150; // 150px is the length given for the progress bar 
let gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render questions listed on the other script
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD; 
}
//start button that starts with a click
start.addEventListener("click",startQuiz);

// start quiz function 
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress bar 
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++; 
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        answerIsCorrect();
        questionTime = 15;
    }else{
        // answer is wrong
        answerIsWrong();
        questionTime = 10; // 10s instead of 15s for penalty
        gaugeWidth = 150; // 150px is the length given for the progress bar 
        gaugeUnit = gaugeWidth / questionTime
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    let scorePerCent = Math.round(100 * score/questions.length);
    
    // If the user gets above a 60% this message appears
    if(scorePerCent > 60){scoreDiv.textContent = "You are on the hot tamale train!";
    }//if the user scores less than 60 then this message appears
    else{
    scoreDiv.textContent = "Was it technically great? No. Did you give it your all? Also, no";}
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
//adding points with a gobal varible to increment the points by one if correct, or remove if wrong, reset to  seconds instead of 15. 