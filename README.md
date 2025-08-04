🚀 Features
Multiple-choice quiz with dynamic question rendering

Visual feedback on correct/incorrect answers

Score tracking and display on quiz completion

Restart functionality to replay the quiz

Responsive layout for desktop and mobile screens

Accessible design using semantic HTML

📁 Project Structure
bash
Copy
Edit
├── index.html       # Main HTML layout
├── style.css        # Custom styling
├── script.js        # Game logic and interactivity
└── README.md        # Project documentation
🛠️ Tech Stack
HTML5 – Structure and layout

CSS3 – Styling and layout responsiveness

JavaScript (ES6) – DOM manipulation, logic, interactivity

🧠 How It Works
Question Display
On load, the app initializes with the first question using startQuiz().

Answer Selection
Users select an answer; buttons are disabled to prevent multiple choices. Correct and incorrect answers are color-coded using the correct and wrong CSS classes.

Score Tracking
Each correct answer increments the score variable. The final score is displayed at the end.

Navigation
The Next button dynamically moves to the next question or ends the quiz on the final one.

Restart Option
Users can replay the quiz via the Restart Quiz button, which resets the state and restarts from the beginning.
