import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import AlertBar from "../../components/AlertBar/AlertBar";
import "./Quiz.css";

export default function Quiz({ loggedUser, handleLogout }) {
  const headerIntro = "Already know what you want?";
  const headerLinkDisp = "Click Here to schedule a FREE phone consultation!";
  const headerLinkSrc = "/";

  const questions = [
    {
      questionText: "Where would you most like to live?",
      answerOptions: [
        { answerText: "Nassau, Bahamas", isLetter: "A" },
        { answerText: "Stockholm, Sweden", isLetter: "B" },
        { answerText: "Provence, France", isLetter: "C" },
        { answerText: "Tuscany, Italy", isLetter: "D" },
        { answerText: "Prague, Czech Republic", isLetter: "E" },
        { answerText: "Great Lakes, Iowa", isLetter: "F" },
        { answerText: "Bozeman, Montana", isLetter: "G" },
      ],
    },
    {
      questionText: "Which of these patterns makes your heart sing?",
      answerOptions: [
        { answerText: "Nautical", isLetter: "A" },
        { answerText: "Black and White Stripes", isLetter: "B" },
        { answerText: "Pastoral Toile", isLetter: "C" },
        { answerText: "Paisley", isLetter: "D" },
        { answerText: "I can't choose - I love all patterns!", isLetter: "E" },
        { answerText: "Checkered", isLetter: "F" },
        { answerText: "Plaid", isLetter: "G" },
      ],
    },
    {
      questionText: "Which of these colors have staying power?",
      answerOptions: [
        { answerText: "Blue, White, Cream, & Beige", isLetter: "A" },
        { answerText: "White, Grey, Black, & Red", isLetter: "B" },
        { answerText: "Blue, Red, Yellow, & Lavender", isLetter: "C" },
        {
          answerText: "Terracotta, Burgundy, Burnt Orange, & Olive Green",
          isLetter: "D",
        },
        { answerText: "Red, Purple, Pink, & Blue", isLetter: "E" },
        { answerText: "White, Beige, Brown, & Yellow", isLetter: "F" },
        { answerText: "Brown, Beige, Deep Red, & Turuoise", isLetter: "G" },
      ],
    },
    {
      questionText: "Which of these items would you love to hang on your wall?",
      answerOptions: [
        { answerText: "A set of sea coral pictures", isLetter: "A" },
        { answerText: "Brightly colored prints", isLetter: "B" },
        { answerText: "A collection of folk animal art", isLetter: "C" },
        { answerText: "A medieval tapestry", isLetter: "D" },
        { answerText: "1970's rock band posters", isLetter: "E" },
        { answerText: "A painting of an old barn", isLetter: "F" },
        { answerText: "A classic western painting", isLetter: "G" },
      ],
    },
    {
      questionText:
        "Which of these drinks are you likely to order at happy hour?",
      answerOptions: [
        { answerText: "Pina Colada", isLetter: "A" },
        { answerText: "Vodka Soda", isLetter: "B" },
        { answerText: "Bordeaux", isLetter: "C" },
        { answerText: "Long Island Ice Tea", isLetter: "D" },
        { answerText: "Beer", isLetter: "E" },
        { answerText: "Whatever's on special", isLetter: "F" },
        { answerText: "Water", isLetter: "G" },
      ],
    },
    {
      questionText: "Which of these light fixtures do you like the best?",
      answerOptions: [
        { answerText: "Capiz shell chandelier", isLetter: "A" },
        { answerText: "Oversize brass pendants", isLetter: "B" },
        { answerText: "Wrought iron and crystal chandelier", isLetter: "C" },
        { answerText: "Wrought iron wall scones", isLetter: "D" },
        { answerText: "Moroccan style lanterns", isLetter: "E" },
        { answerText: "Mason jar pendants", isLetter: "F" },
        { answerText: "Antler chandelier", isLetter: "G" },
      ],
    },
    {
      questionText: "Which of these accessories would you buy at a yard sale?",
      answerOptions: [
        { answerText: "A collection of sea shells", isLetter: "A" },
        { answerText: "A vase of tulips", isLetter: "B" },
        { answerText: "An empty bird cage", isLetter: "C" },
        { answerText: "A collection of wine glasses", isLetter: "D" },
        { answerText: "A collection of colored glass", isLetter: "E" },
        { answerText: "Wire baskets", isLetter: "F" },
        { answerText: "Cow skull to hang on the wall", isLetter: "G" },
      ],
    },
  ];
  const userAnswers = [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  


  const handleAnswerOptionClick = (isLetter) => {
    userAnswers.push(isLetter);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      handleGrade();
    }
  };

  const handleGrade = () => {


  }
  

  return (
    <div id="quiz-landing-page">
      <AlertBar
        headerIntro={headerIntro}
        headerLinkDisp={headerLinkDisp}
        headerLinkSrc={headerLinkSrc}
      />
      <NavBar
        loggedUser={loggedUser}
        handleLogout={handleLogout}
        dispSubs={false}
      />
      <div id="quiz-buffer"></div>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You Finished!
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isLetter)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
