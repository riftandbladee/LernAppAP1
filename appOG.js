import { config } from 'config';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedAnswer = null;
    
    // Get DOM elements
    const questionElement = document.getElementById('question');
    const answersContainer = document.getElementById('answers-container');
    const checkButton = document.getElementById('check-button');
    const scoreElement = document.getElementById('score');
    const progressElement = document.getElementById('progress');
    const resultModal = document.getElementById('result-modal');
    const resultMessage = document.getElementById('result-message');
    const correctAnswerElement = document.getElementById('correct-answer');
    const continueButton = document.getElementById('continue-button');
    
    // Initialize the quiz
    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        updateScore();
        loadQuestion();
    }
    
    // Load a question
    function loadQuestion() {
        // Check if there are more questions
        if (currentQuestionIndex >= config.questions.length) {
            finishQuiz();
            return;
        }
        
        // Get the current question
        const currentQuestion = config.questions[currentQuestionIndex];
        
        // Update progress bar
        updateProgress();
        
        // Display the question
        questionElement.textContent = currentQuestion.question;
        
        // Clear previous answers and selected answer
        answersContainer.innerHTML = '';
        selectedAnswer = null;
        
        // Create answer options
        currentQuestion.options.forEach(option => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer-option');
            answerElement.textContent = option;
            
            answerElement.addEventListener('click', () => {
                // Remove selected class from all options
                document.querySelectorAll('.answer-option').forEach(el => {
                    el.classList.remove('selected');
                });
                
                // Add selected class to clicked option
                answerElement.classList.add('selected');
                selectedAnswer = option;
                
                // Enable check button
                checkButton.disabled = false;
            });
            
            answersContainer.appendChild(answerElement);
        });
        
        // Disable check button initially
        checkButton.disabled = true;
    }
    
    // Update the score display
    function updateScore() {
        scoreElement.textContent = score;
    }
    
    // Update progress bar
    function updateProgress() {
        const progressPercentage = (currentQuestionIndex / config.questions.length) * 100;
        progressElement.style.width = `${progressPercentage}%`;
    }
    
    // Check the selected answer
    function checkAnswer() {
        const currentQuestion = config.questions[currentQuestionIndex];
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        
        // Update score
        if (isCorrect) {
            score += config.correctPoints;
        } else {
            score = Math.max(0, score - config.incorrectPoints);
        }
        updateScore();
        
        // Show the result modal
        showResult(isCorrect, currentQuestion.correctAnswer);
    }
    
    // Show result modal
    function showResult(isCorrect, correctAnswer) {
        resultMessage.textContent = isCorrect ? "Correct!" : "Incorrect!";
        resultMessage.className = isCorrect ? "correct" : "incorrect";
        
        if (!isCorrect) {
            correctAnswerElement.textContent = `The correct answer is: ${correctAnswer}`;
        } else {
            correctAnswerElement.textContent = "";
        }
        
        resultModal.style.display = "flex";
    }
    
    // Move to the next question
    function nextQuestion() {
        currentQuestionIndex++;
        loadQuestion();
        resultModal.style.display = "none";
    }
    
    // Finish the quiz
    function finishQuiz() {
        questionElement.textContent = "Quiz Completed!";
        answersContainer.innerHTML = `
            <div style="text-align: center; margin: 20px 0;">
                <h3>Your final score: ${score}</h3>
                <p>Thank you for playing!</p>
                <button id="restart-button" class="check-button" style="margin-top: 20px;">Restart Quiz</button>
            </div>
        `;
        checkButton.style.display = "none";
        
        document.getElementById('restart-button').addEventListener('click', () => {
            checkButton.style.display = "block";
            initQuiz();
        });
    }
    
    // Event listeners
    checkButton.addEventListener('click', checkAnswer);
    continueButton.addEventListener('click', nextQuestion);
    
    // Start the quiz
    initQuiz();
});

