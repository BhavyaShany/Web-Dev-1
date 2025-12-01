// 1. Quiz Questions Array
const quizQuestions = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 + 7?", answer: "12" },
  {question: "Which is the largest continent?", answer: "asia"},
  {question: "Which is the only letter not present in periodic table?", answer: "j"},
  {question: "Who made html?", answer: "tim berners-lee"}
];

// 2. Function to Run the Quiz
function runQuiz() {

  // 3. Score Initialization
  let score = 0;

  // 4. Loop Through Questions
  for (let i = 0; i < quizQuestions.length; i++) {

    // 5. Prompt for User Input
    let userInput = prompt(quizQuestions[i].question);

    // 6. Normalize Input
    userInput = userInput.toLowerCase().trim();

    // 7. Check the Answer
    if (userInput === quizQuestions[i].answer) {
      score++;
      // 8. Provide Immediate Feedback
      alert("Correct!");
    } else {
      alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // 9. Display Final Score
  alert("Your final score is " + score + " out of " + quizQuestions.length);
}

// 10. Run the Quiz
runQuiz();
