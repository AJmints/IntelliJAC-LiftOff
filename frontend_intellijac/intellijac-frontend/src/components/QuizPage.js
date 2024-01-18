import React, { useState } from "react";
import "../styles/QuizPage.css";
import { Link } from "react-router-dom";

const QuizPage = () => {
  // Added code here and on lines 125- to change background
  const [style, setStyle] = useState("start-quiz-container-normal");

  const normalBackground = () => {
    setStyle("start-quiz-container-normal");
  };
  const bigBackground = () => {
    setStyle("start-quiz-container-big");
  };
  const funBackground = () => {
    setStyle("start-quiz-container-fun");
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOperationType, setSelectedOperationType] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const calculateGrade = () => {
    const percentageCorrect = (correctAnswers / 10) * 100;
    return percentageCorrect;
  };

  const generateProblem = () => {
    if (currentQuestion <= 10) {
      const newOperand1 = Math.floor(Math.random() * 10) + 1;
      const newOperand2 = Math.floor(Math.random() * 10) + 1;
      const divisionProblems = [
        { operand1: 10, operand2: 2 },
        { operand1: 15, operand2: 3 },
        { operand1: 20, operand2: 4 },
        { operand1: 25, operand2: 5 },
        { operand1: 40, operand2: 8 },
        { operand1: 45, operand2: 5 },
        { operand1: 50, operand2: 10 },
        { operand1: 27, operand2: 3 },
        { operand1: 35, operand2: 7 },
        { operand1: 42, operand2: 6 },
        { operand1: 21, operand2: 3 },
        { operand1: 63, operand2: 9 },
        { operand1: 54, operand2: 6 },
        { operand1: 18, operand2: 3 },
        { operand1: 24, operand2: 6 },
        { operand1: 16, operand2: 2 },
        { operand1: 30, operand2: 3 },
        { operand1: 36, operand2: 6 },
      ];

      switch (selectedOperationType) {
        case "addition":
          setOperand1(newOperand1);
          setOperand2(newOperand2);
          break;
        case "subtraction":
          setOperand1(newOperand1 + newOperand2);
          setOperand2(newOperand2);
          break;
        case "multiplication":
          setOperand1(newOperand1);
          setOperand2(newOperand2);
          break;
        case "division":
          const randomDivisionProblemIndex = Math.floor(
            Math.random() * divisionProblems.length
          );
          const randomDivisionProblem =
            divisionProblems[randomDivisionProblemIndex];
          setOperand1(randomDivisionProblem.operand1);
          setOperand2(randomDivisionProblem.operand2);
          break;
        default:
          setOperand1(newOperand1);
          setOperand2(newOperand2);
      }

      setUserAnswer("");
      setIsCorrect(null);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setCurrentQuestion(11);
    }
  };

  const generateDetailedFeedback = (
    operand1,
    operand2,
    operationType,
    correctAnswer
  ) => {
    switch (operationType) {
      case "addition":
        return `${operand1} + ${operand2} = ${correctAnswer}`;
      case "subtraction":
        return `${operand1} - ${operand2} = ${correctAnswer}`;
      case "multiplication":
        return `${operand1} multiplied by itself ${operand2} time[s] = ${correctAnswer}`;
      case "division":
        return `${operand2} x ${correctAnswer} = ${operand1}`;
      default:
        return "";
    }
  };
  const checkAnswer = () => {
    let correctAnswer;

    switch (selectedOperationType) {
      case "addition":
        correctAnswer = operand1 + operand2;
        break;
      case "subtraction":
        correctAnswer = operand1 - operand2;
        break;
      case "multiplication":
        correctAnswer = operand1 * operand2;
        break;
      case "division":
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
      const feedback = generateDetailedFeedback(
        operand1,
        operand2,
        selectedOperationType,
        correctAnswer
      );
      setFeedbackMessage(feedback);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setSelectedOperationType("");
  };

  return (
    <div className={style}>
      {currentQuestion === 0 ? (
        <div className={style}>
          <p style={{ textAlign: "center", fontSize: "40px", color: "Green" }}>
            {" "}
            <u>Are You Ready?? Let's Begin!!</u>
          </p>
          <label>Your Options: </label>
          <select
            value={selectedOperationType}
            onChange={(e) => setSelectedOperationType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="addition">Addition</option>
            <option value="subtraction">Subtraction</option>
            <option value="multiplication">Multiplication</option>
            <option value="division">Division</option>
          </select>
          <button
            onClick={() => setCurrentQuestion(1)}
            style={{ color: "red" }}
          >
            Start Quiz
          </button>
          <br />

          <br></br>
          <h6>Click button to change style</h6>
          <button onClick={normalBackground}>Normal</button>
          <button onClick={bigBackground}>Big</button>
          <button onClick={funBackground}>Fun</button>
        </div>
      ) : (
        <>
          <h1 style={{ color: "black", fontSize: "50px" }}>
            <u>Math Quiz</u>
          </h1>
          <br />
          <br />
          {currentQuestion <= 10 && (
            <>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  color: "navyblue",
                }}
              >
                Question {currentQuestion}:
                <br />
                {operand1}{" "}
                {selectedOperationType === "division"
                  ? "÷"
                  : selectedOperationType === "multiplication"
                  ? "×"
                  : selectedOperationType === "subtraction"
                  ? "-"
                  : "+"}{" "}
                {operand2} =
              </p>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Your Answer"
                style={{ marginLeft: "30px", textAlign: "center" }}
              />
              <br />
              <br />
              <button onClick={checkAnswer} style={{ marginLeft: "30px" }}>
                Submit Answer
              </button>
              <br />
              <br />
              <button onClick={generateProblem} style={{ marginLeft: "35px" }}>
                Next Problem
              </button>
              <br />
              <br />

              {isCorrect === true && (
                <p
                  className="correct-answer"
                  style={{ marginLeft: "50px", fontSize: "30px" }}
                >
                  Hurray, You got it right!! 🎉
                </p>
              )}
              {isCorrect === false && (
                <>
                  <p
                    className="incorrect-answer"
                    style={{ marginLeft: "50px", fontSize: "30px" }}
                  >
                    Oh noo!! Try again! ❌
                  </p>
                  {/* Insert the feedbackMessage below the "Try again!" message */}
                  <p style={{ marginLeft: "50px", fontSize: "20px" }}>
                    {feedbackMessage}
                  </p>
                </>
              )}
            </>
          )}
          {currentQuestion > 10 && (
            <div className="quiz-completed-container">
              <p>Quiz completed! You answered all 10 questions.</p>
              <p>Your grade: {calculateGrade()}%</p>
              <button onClick={restartQuiz} style={{ color: "red" }}>
                Try Another Quiz
              </button>
            </div>
          )}
        </>
      )}
      <br />
      <br />
      <Link to={"/flashcards/addFlashcard"} style={{ color: "skyblue" }}>
        Go to Flashcards
      </Link>
      <br />

      <Link to={"/resources"} style={{ color: "skyblue" }}>
        Go to Resources
      </Link>
      <br />
      <Link to="/" style={{ color: "skyblue" }}>
        Go to HomePage
      </Link>
      <br />
    </div>
  );
};

export default QuizPage;
