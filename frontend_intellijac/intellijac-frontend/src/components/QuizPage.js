import React, { useState } from 'react';
import '../styles/QuizPage.css';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const calculateGrade = () => {
    const percentageCorrect = (correctAnswers / 10) * 100; 
    return percentageCorrect; 
  };

  const generateProblem = () => {
    if (currentQuestion <= 10) {
      const newOperand1 = Math.floor(Math.random() * 10) + 1;
      const newOperand2 = Math.floor(Math.random() * 10) + 1;
      setOperand1(newOperand1);
      setOperand2(newOperand2);
      setUserAnswer('');
      setIsCorrect(null);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };
  const checkAnswer = () => {
    const correctAnswer = operand1 + operand2;
    const userEnteredAnswer = parseInt(userAnswer, 10);
  
    if (!isNaN(userEnteredAnswer) && userEnteredAnswer === correctAnswer) {
      setIsCorrect(true);
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    } else {
      setIsCorrect(false);
    }
  };
  

  return (
    <div className='quiz-page'>
      {currentQuestion <= 10 ? (
        <>
          <h1>Math Quiz</h1>
          <p>
            Question {currentQuestion}:
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
        </>
      ) : (
        <div>
          <p>Quiz completed! You answered all 10 questions.</p>
          <p>Your grade: {calculateGrade()}%</p>
        </div>
      )}
    </div>
  );
  
};

export default QuizPage;

