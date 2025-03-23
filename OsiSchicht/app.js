import { config } from 'config';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedAnswer = null;
    let shuffledQuestions = [];
    let currentUser = null;
    let userStats = null;
    const QUESTIONS_PER_ROUND = 30;

    // Get DOM elements
    const mainMenu = document.getElementById('main-menu');
    const quizScreen = document.getElementById('quiz-screen');
    const wrongQuestionsScreen = document.getElementById('wrong-questions-screen');
    const scoreboardScreen = document.getElementById('scoreboard-screen');
    const usernameInput = document.getElementById('username-input');
    const startButton = document.getElementById('start-button');
    const showWrongButton = document.getElementById('show-wrong-button');
    const showScoreboardButton = document.getElementById('show-scoreboard-button');
    const questionElement = document.getElementById('question');
    const answersContainer = document.getElementById('answers-container');
    const checkButton = document.getElementById('check-button');
    const backToMenuFromQuiz = document.getElementById('back-to-menu-from-quiz');
    const scoreElement = document.getElementById('score');
    const progressElement = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    const resultModal = document.getElementById('result-modal');
    const resultMessage = document.getElementById('result-message');
    const correctAnswerElement = document.getElementById('correct-answer');
    const continueButton = document.getElementById('continue-button');
    const wrongQuestionsList = document.getElementById('wrong-questions-list');
    const backToMenuFromWrong = document.getElementById('back-to-menu-from-wrong');
    const scoreboardList = document.getElementById('scoreboard-list');
    const backToMenuFromScoreboard = document.getElementById('back-to-menu-from-scoreboard');

    // Start the quiz
    startButton.addEventListener('click', () => {
        currentUser = usernameInput.value.trim() || "default";
        userStats = JSON.parse(localStorage.getItem(`userStats_${currentUser}`)) || {
            correct: 0,
            incorrect: 0,
            wrongQuestions: [],
            highScore: 0
        };
        mainMenu.style.display = 'none';
        quizScreen.style.display = 'block';
        initQuiz('full');
    });

    // Show wrong questions
    showWrongButton.addEventListener('click', () => {
        currentUser = usernameInput.value.trim() || "default";
        userStats = JSON.parse(localStorage.getItem(`userStats_${currentUser}`)) || {
            correct: 0,
            incorrect: 0,
            wrongQuestions: [],
            highScore: 0
        };
        showWrongQuestions();
    });

    // Show scoreboard
    showScoreboardButton.addEventListener('click', showScoreboard);

    // Shuffle and select questions
    function shuffleAndSelectQuestions(questions, count) {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, questions.length));
    }

    // Initialize the quiz
    function initQuiz(mode = 'full') {
        currentQuestionIndex = 0;
        score = 0;
        if (mode === 'full') {
            shuffledQuestions = shuffleAndSelectQuestions(config.questions, QUESTIONS_PER_ROUND);
        } else if (mode === 'wrong') {
            shuffledQuestions = shuffleAndSelectQuestions(userStats.wrongQuestions, QUESTIONS_PER_ROUND);
            if (shuffledQuestions.length === 0) {
                questionElement.textContent = "Keine falschen Fragen zum Üben!";
                answersContainer.innerHTML = '';
                checkButton.style.display = "none";
                backToMenuFromQuiz.style.display = "block";
                return;
            }
        }
        updateScore();
        loadQuestion();
    }

    // Load a question
    function loadQuestion() {
        if (currentQuestionIndex >= shuffledQuestions.length) {
            finishQuiz();
            return;
        }

        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        updateProgress();
        questionElement.textContent = currentQuestion.question;

        answersContainer.innerHTML = '';
        selectedAnswer = null;

        currentQuestion.options.forEach(option => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer-option');
            answerElement.textContent = option;

            answerElement.addEventListener('click', () => {
                document.querySelectorAll('.answer-option').forEach(el => el.classList.remove('selected'));
                answerElement.classList.add('selected');
                selectedAnswer = option;
                checkButton.disabled = false;
            });

            answersContainer.appendChild(answerElement);
        });

        checkButton.disabled = true;
    }

    // Update score display
    function updateScore() {
        scoreElement.textContent = score;
    }

    // Update progress
    function updateProgress() {
        const progressPercentage = (currentQuestionIndex / shuffledQuestions.length) * 100;
        progressElement.style.width = `${progressPercentage}%`;
        progressText.textContent = `Frage ${currentQuestionIndex + 1} von ${shuffledQuestions.length}`;
    }

    // Check the selected answer
    function checkAnswer() {
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

        document.querySelectorAll('.answer-option').forEach(el => {
            if (el.textContent === selectedAnswer) {
                el.classList.add(isCorrect ? 'correct' : 'incorrect');
            } else if (el.textContent === currentQuestion.correctAnswer && !isCorrect) {
                el.classList.add('correct');
            }
        });

        if (isCorrect) {
            score += config.correctPoints;
            userStats.correct += 1;
        } else {
            score = Math.max(0, score - config.incorrectPoints);
            userStats.incorrect += 1;
            if (!userStats.wrongQuestions.some(q => q.question === currentQuestion.question)) {
                userStats.wrongQuestions.push(currentQuestion);
            }
        }
        updateScore();
        saveStats();
        showResult(isCorrect, currentQuestion.correctAnswer);
    }

    // Save stats to localStorage
    function saveStats() {
        if (score > userStats.highScore) {
            userStats.highScore = score;
        }
        localStorage.setItem(`userStats_${currentUser}`, JSON.stringify(userStats));
    }

    // Delete user stats
    function deleteStats() {
        if (confirm("Möchtest du deine Statistiken wirklich löschen?")) {
            localStorage.removeItem(`userStats_${currentUser}`);
            userStats = { correct: 0, incorrect: 0, wrongQuestions: [], highScore: 0 };
            saveStats();
            alert("Deine Daten wurden gelöscht!");
            showMainMenu();
        }
    }

    // Show result modal
    function showResult(isCorrect, correctAnswer) {
        resultMessage.textContent = isCorrect ? "Richtig!" : "Falsch!";
        resultMessage.className = isCorrect ? "correct" : "incorrect";
        correctAnswerElement.textContent = !isCorrect ? `Die richtige Antwort ist: ${correctAnswer}` : "";
        resultModal.style.display = "flex";
        checkButton.disabled = true;
    }

    // Move to next question
    function nextQuestion() {
        currentQuestionIndex++;
        loadQuestion();
        resultModal.style.display = "none";
    }

    // Finish the quiz
    function finishQuiz() {
        questionElement.textContent = `Quiz abgeschlossen, ${currentUser}!`;
        const totalQuestions = shuffledQuestions.length;
        const percentage = Math.round((score / (totalQuestions * config.correctPoints)) * 100);
        answersContainer.innerHTML = `
            <div style="text-align: center; margin: 20px 0;">
                <h3>Dein Endergebnis: ${score} Punkte</h3>
                <p>Richtige Antworten: ${userStats.correct} | Falsche Antworten: ${userStats.incorrect}</p>
                <p>Höchstpunktzahl: ${userStats.highScore}</p>
                <p>Ergebnis dieser Runde: ${percentage}%</p>
                <p>Danke fürs Spielen!</p>
                <button id="restart-button" class="check-button" style="margin-top: 20px;">Quiz neu starten</button>
                <button id="practice-wrong-button" class="check-button" style="margin-top: 20px;">Falsche Fragen üben</button>
                <button id="delete-stats-button" class="check-button delete" style="margin-top: 20px;">Daten löschen</button>
                <button id="back-to-menu-from-end" class="check-button" style="margin-top: 20px;">⌂</button>
            </div>
        `;
        checkButton.style.display = "none";
        backToMenuFromQuiz.style.display = "none";

        document.getElementById('restart-button').addEventListener('click', () => initQuiz('full'));
        document.getElementById('practice-wrong-button').addEventListener('click', () => initQuiz('wrong'));
        document.getElementById('delete-stats-button').addEventListener('click', deleteStats);
        document.getElementById('back-to-menu-from-end').addEventListener('click', showMainMenu);
    }

    // Show main menu
    function showMainMenu() {
        quizScreen.style.display = 'none';
        wrongQuestionsScreen.style.display = 'none';
        scoreboardScreen.style.display = 'none';
        mainMenu.style.display = 'block';
        usernameInput.value = currentUser || '';
        checkButton.style.display = "block";
        backToMenuFromQuiz.style.display = "block";
        progressElement.style.width = '0%';
        progressText.textContent = 'Frage 0 von 0';
        scoreElement.textContent = '0';
    }

    // Show wrong questions
    function showWrongQuestions() {
        mainMenu.style.display = 'none';
        wrongQuestionsScreen.style.display = 'block';
        wrongQuestionsList.innerHTML = '';

        if (userStats.wrongQuestions.length === 0) {
            wrongQuestionsList.innerHTML = '<p>Keine falschen Fragen vorhanden!</p>';
        } else {
            userStats.wrongQuestions.forEach(q => {
                const item = document.createElement('div');
                item.classList.add('wrong-question-item');
                item.innerHTML = `<strong>${q.question}</strong><br>Richtige Antwort: ${q.correctAnswer}`;
                wrongQuestionsList.appendChild(item);
            });
        }
    }

    // Show scoreboard
    function showScoreboard() {
        mainMenu.style.display = 'none';
        scoreboardScreen.style.display = 'block';
        scoreboardList.innerHTML = '';

        const allUsers = Object.keys(localStorage).filter(key => key.startsWith('userStats_'));
        if (allUsers.length === 0) {
            scoreboardList.innerHTML = '<p>Keine Benutzerdaten vorhanden!</p>';
        } else {
            const scores = allUsers.map(key => {
                const stats = JSON.parse(localStorage.getItem(key));
                return { user: key.replace('userStats_', ''), highScore: stats.highScore || 0 };
            }).sort((a, b) => b.highScore - a.highScore);

            scores.forEach(({ user, highScore }) => {
                const item = document.createElement('div');
                item.classList.add('scoreboard-item');
                item.textContent = `${user}: ${highScore} Punkte`;
                scoreboardList.appendChild(item);
            });
        }
    }

    // Event listeners
    checkButton.addEventListener('click', checkAnswer);
    continueButton.addEventListener('click', nextQuestion);
    backToMenuFromQuiz.addEventListener('click', showMainMenu);
    backToMenuFromWrong.addEventListener('click', showMainMenu);
    backToMenuFromScoreboard.addEventListener('click', showMainMenu);
});