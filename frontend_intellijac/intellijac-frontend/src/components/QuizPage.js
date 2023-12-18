import React, { Component, useState } from 'react';
import '../styles/QuizPage.css'

const QuizPage = () => {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const generateProblem = () => {
    const newOperand1 = Math.floor(Math.random() * 10) + 1;
    const newOperand2 = Math.floor(Math.random() * 10) + 1;
    setOperand1(newOperand1);
    setOperand2(newOperand2);
    setUserAnswer('');
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    const correctAnswer = operand1 + operand2;
    const userEnteredAnswer = parseInt(userAnswer, 10);

    if (!isNaN(userEnteredAnswer) && userEnteredAnswer === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className='quiz-page'>
      <h1>Math Quiz</h1>
      <p>
        Solve the following problem:
        <br />
        {operand1} + {operand2} =
      </p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Your Answer"
      />
      <button onClick={checkAnswer}>Submit Answer</button>
      <button onClick={generateProblem}>Next Problem</button>

      {isCorrect === true && <p style={{ color: 'green' }}>Correct! 🎉</p>}
      {isCorrect === false && <p style={{ color: 'red' }}>Incorrect. Try again! ❌</p>}
    </div>
  );
};

export default QuizPage;
