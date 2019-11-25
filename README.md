# quiz
Index HTML File
1. Created a container to hold the questions, answer selections, and timer. 
2. Created a timer composed of 3 parts. 
    1. The counter to show the numbers asa they countdown. 
    2. The time gauge bar to show how much time is left. 
    3. The green bar that fills in the above bar as the second pass. 
3. Created a progression bar with 5 dots to show which question the user is on. 
4. Created a score container that will appear at the end of the test to show the percentage scored by the user. 
Script 1
1. Variables needed:
    1. start, quiz, question, choiceA, choiceB, choiceC, choiceD, counter, timeGauge, progress, score, last question, running question, count, question time, gauge width, gauge unit, and timer.  
2. Functions needed: 
    1. Render question to pull up questions
    2. Start for the start button in the html 
    3. Start Quiz to pull the quiz within a block to have the progress bar and counter count down as the questions are shown.
    4. Timer with the interval set to 1000 ms 
    5. Render progress bar to show the question the user is on
    6. Render counter to show the count down numbers 
    7. Check Answer 
        1. If the user has the correct answer, add points to the user's score and reset the timer to 15 seconds 
        2. Else the user is wrong, change the time to 10 seconds for the next question
        3. If the running question is less than the last question then it goes to the next question
        4. Otherwise it ends the quiz and shows the score 
        5. Answer is correct changes the dot green
        6. Answer is wrong changes the dot red 
    8. Render score pulls up a block 
        1. the score is determined using a percent
            1. 100 times score divided by the length of the questions (5). 
            2. If the percent is 60% or less the message "Was it technically great? No. Did you give it your all? Also, no""Was it technically great? No. Did you give it your all? Also, no" displays 
            3. If the percent is higher than 60% the message "You are on the hot tamale train!" 

Script 2
1. Created a function with an array of all the questions and answers that will be used on the test. 
    1. The variable let sets the scope to only pick from the 5 questions and answers listed within the object questions. 
    2. Each piece of the object is composed of a question, choiceA, choiceB, choiceC, ChoiceD, and a correct answer. 

