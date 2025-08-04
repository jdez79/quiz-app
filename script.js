// Array of quiz questions and answer options
const questions = [
    {
      question: "At what temperature does water boil?",
      answers: [
        { text: "155", correct: false },
        { text: "212", correct: true },
        { text: "185", correct: false },
        { text: "210", correct: false }
      ]
    },
    {
      question: "What is the main ingredient in guacamole?",
      answers: [
        { text: "Mango", correct: false },
        { text: "Onion", correct: false },
        { text: "Chicken", correct: false },
        { text: "Avocado", correct: true }
      ]
    },
    {
      question: "What makes up Mirepoix?",
      answers: [
        { text: "Onion, Celery, Green Bell Pepper", correct: false },
        { text: "Onion, Carrot, Celery", correct: true },
        { text: "Potato, Celery, Onion", correct: false },
        { text: "Butter, Jelly, Milk", correct: false }
      ]
    }
  ];
  
  // DOM elements
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  const scoreText = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  
  // Current state variables
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Initialize the quiz
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next"; // Reset button text
    scoreContainer.classList.add("hide"); // Hide score area
    document.getElementById("question-container").classList.remove("hide"); // Show questions
    showQuestion(); // Load first question
  }
  
  // Display a question and its answer choices
  function showQuestion() {
    resetState(); // Clear previous answers
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Create a button for each answer
    currentQuestion.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.textContent = answer.text;
      btn.classList.add("btn");
      // Add click event to each answer button
      btn.addEventListener("click", () => selectAnswer(btn, answer.correct));
      answerButtons.appendChild(btn);
    });
  }
  
  // Remove old answers and hide next button
  function resetState() {
    nextButton.classList.add("hide");
    answerButtons.innerHTML = ""; // Remove old buttons
  }
  
  // Handle answer selection
  function selectAnswer(selectedButton, isCorrect) {
    const buttons = answerButtons.children;
  
    // Show feedback and disable all options
    for (let btn of buttons) {
      btn.disabled = true;
      const correct = questions[currentQuestionIndex].answers.find(a => a.text === btn.textContent).correct;
      btn.classList.add(correct ? "correct" : "wrong");
    }
  
    // Increase score if correct
    if (isCorrect) {
      score++;
    }
  
    // Show next button
    nextButton.classList.remove("hide");
  }
  
  // Move to next question or show score
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(); // Next question
      // Update button text on last question
      if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Finish";
      }
    } else {
      showScore(); // End of quiz
    }
  });
  
  // Show the final score
  function showScore() {
    document.getElementById("question-container").classList.add("hide");
    scoreContainer.classList.remove("hide");
    scoreText.textContent = `${score} / ${questions.length}`;
  }
  
  // Restart the quiz
  restartButton.addEventListener("click", startQuiz);
  
  // Start the quiz on page load
  startQuiz();