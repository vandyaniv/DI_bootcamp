const express = require('express');
const router = express.Router();

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

router.get('/', (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    const currentQuestion = triviaQuestions[currentQuestionIndex].question;
    res.status(200).json({ question: currentQuestion });
  } else {
    res.status(200).json({ question: 'quiz finished' });
  }
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    res.status(200).json({ message: 'correctAnswer !' });
  } else {
    res.status(200).json({
      message: ` False, INCORECT answer, the answer is ${correctAnswer}`,
    });
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    const nexQuestion = triviaQuestions[currentQuestionIndex].question;
    res.status(200).json({ nexQuestion });
  }
});

router.get('/score', (req, res) => {
  res.status(200).json({ finalScore: score, total: triviaQuestions.length });
});
module.exports = router;
