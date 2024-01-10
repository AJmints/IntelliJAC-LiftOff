import React, { useState } from 'react';
import '../styles/QuizPage.css';
import { Link } from "react-router-dom"; 

const QuizPage = () => {

  // Added code here and on lines 125- to change background
        const [style, setStyle] = useState();

        const darkBackground = () => {
          setStyle("start-quiz-container-grey");
         }
        const lightBackground = () => {
          setStyle("start-quiz-container-light");
        }
        const blueBackground = () => {
          setStyle("start-quiz-container-blue");
        }
      

  // ***
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOperationType, setSelectedOperationType] = useState('');

  const calculateGrade = () => {
    const percentageCorrect = (correctAnswers / 10) * 100;
    return percentageCorrect;
  };

  const generateProblem = () => {
    if (currentQuestion <= 10) {
      const newOperand1 = Math.floor(Math.random() * 10) + 1;
      const newOperand2 = Math.floor(Math.random() * 10) + 1;
  
      switch (selectedOperationType) {
        case 'addition':
          setOperand1(newOperand1);
          setOperand2(newOperand2);
          break;
        case 'subtraction':
          setOperand1(newOperand1 + newOperand2);
          setOperand2(newOperand2);
          break;
        case 'multiplication':
          setOperand1(newOperand1);
          setOperand2(newOperand2);
          break;
        case 'division':
          setOperand1(Math.max(newOperand1, newOperand2));
          setOperand2(Math.min(newOperand1, newOperand2));
          break;
        default:
          setOperand1(newOperand1);
          setOperand2(newOperand2);
      }
  
      setUserAnswer('');
      setIsCorrect(null);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setCurrentQuestion(11); 
    }
  };

  const checkAnswer = () => {
    let correctAnswer;

    switch (selectedOperationType) {
      case 'addition':
        correctAnswer = operand1 + operand2;
        break;
      case 'subtraction':
        correctAnswer = operand1 - operand2;
        break;
      case 'multiplication':
        correctAnswer = operand1 * operand2;
        break;
      case 'division':
        correctAnswer = operand1 / operand2;
        break;
      default:
        correctAnswer = operand1 + operand2;
    }

    const userEnteredAnswer = parseFloat(userAnswer);

    if (!isNaN(userEnteredAnswer) && userEnteredAnswer === correctAnswer) {
      setIsCorrect(true);
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    } else {
      setIsCorrect(false);
    }

    generateProblem();
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setSelectedOperationType('');
  };

  return (
    <div className='quiz-page'>
      {currentQuestion === 0 ? (
        <div className={style}>
        <p style={{textAlign: "center", fontSize: "40px", color: "Green"}}> <u>Are You Ready??  Let's Begin!!</u></p>
          <label>Your Options: </label>
          <select
            value={selectedOperationType}
            onChange={(e) => setSelectedOperationType(e.target.value)}>
            <option value=''>Select Type</option>
            <option value='addition'>Addition</option>
            <option value='subtraction'>Subtraction</option>
            <option value='multiplication'>Multiplication</option>
            <option value='division'>Division</option>
          </select>
          <button onClick={() => setCurrentQuestion(1)}>Start Quiz</button>
          <br></br>
          <br></br>
          <br></br>
          <Link to={"/flashcards/addFlashcard"}>Flashcards</Link>
          <br></br>
          <Link to={"/resources"}>Resources</Link>
          <br></br>
          <Link to={"/rating"}>Rate our page</Link>
          <br></br>
          <br></br>
            <h6>
                Click button to change style
            </h6>
            <button onClick={lightBackground}>Light</button>
            <button onClick={darkBackground}>Grey</button>
            <button onClick={blueBackground}>Blue</button>
        </div>
      ) : (
        <>
          <h1>Math Quiz</h1>
          {currentQuestion <= 10 && (
            <>
              <p>
                Question {currentQuestion}:
                <br />
                {operand1}{' '}
                {selectedOperationType === 'division'
                  ? '÷'
                  : selectedOperationType === 'multiplication'
                  ? '×'
                  : selectedOperationType === 'subtraction'
                  ? '-'
                  : '+'}{' '}
                {operand2} =
              </p>
              <input
                type='text'
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder='Your Answer'
              />
              <button onClick={checkAnswer}>Submit Answer</button>
              <button onClick={generateProblem}>Next Problem</button>

              {isCorrect === true && <p style={{ color: 'green' }}>Correct! 🎉</p>}
              {isCorrect === false && <p style={{ color: 'red' }}>Incorrect. Try again! ❌</p>}
            </>
          )}

          {currentQuestion > 10 && (
            <div>
              <p>Quiz completed! You answered all 10 questions.</p>
              <p>Your grade: {calculateGrade()}%</p>
              <button onClick={restartQuiz}>Try Another Quiz</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizPage;