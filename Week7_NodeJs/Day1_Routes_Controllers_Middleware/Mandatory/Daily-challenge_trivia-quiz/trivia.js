const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// [ {1:a }, {1:b}]
const triviaQuestions = [
  { question: 'What is the capital of France?', answer: 'Paris' },

  { question: 'Which planet is known as the Red Planet?', answer: 'Mars' },
  {
    question: 'What is the largest mammal in the world?',
    answer: 'Blue whale',
  },
];

let currentQuestionIndex = 0;
let score = 0;

const quizRouter = require('./routes/quiz');
app.use('/quiz', quizRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
