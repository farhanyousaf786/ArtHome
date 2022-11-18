import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import AlertBar from "../../components/AlertBar/AlertBar";
import { Image, Card, Row } from "react-bootstrap";

import "./Quiz.css";

let userStyle = "";
const userAnswers = [];
const questions = [
  {
    questionText: "Where would you most like to live?",
    answerOptions: [
      {
        answerText: "Nassau, Bahamas",
        isLetter: "A",
        imgSrc: "https://i.imgur.com/6WP0Ey7.jpg",
      },
      {
        answerText: "Stockholm, Sweden",
        isLetter: "B",
        imgSrc: "https://i.imgur.com/fDdrWBJ.jpg",
      },
      {
        answerText: "Provence, France",
        isLetter: "C",
        imgSrc: "https://i.imgur.com/5buW1YX.jpg",
      },
      {
        answerText: "Tuscany, Italy",
        isLetter: "D",
        imgSrc: "https://i.imgur.com/WyWGpDj.jpg",
      },
      {
        answerText: "Prague, Czech Republic",
        isLetter: "E",
        imgSrc: "https://i.imgur.com/qvfs3GL.jpg",
      },
      {
        answerText: "Great Lakes, Iowa",
        isLetter: "F",
        imgSrc: "https://i.imgur.com/oCiXcm6.jpg",
      },
      {
        answerText: "Bozeman, Montana",
        isLetter: "G",
        imgSrc: "https://i.imgur.com/CS7XQZM.jpg",
      },
    ],
  },
  {
    questionText: "Which of these patterns makes your heart sing?",
    answerOptions: [
      { answerText: "Nautical", isLetter: "A", imgSrc:'https://i.imgur.com/CyYcIig.png' },
      { answerText: "Black and White Stripes", isLetter: "B", imgSrc:'https://i.imgur.com/xabeF7r.jpg' },
      { answerText: "Pastoral Toile", isLetter: "C", imgSrc:'https://i.imgur.com/W8Cixd3.png' },
      { answerText: "Paisley", isLetter: "D", imgSrc:'https://i.imgur.com/l77hgvh.png' },
      { answerText: "I can't choose - I love all patterns!", isLetter: "E", imgSrc:'https://i.imgur.com/Ozi13CM.png' },
      { answerText: "Checkered", isLetter: "F", imgSrc:'https://i.imgur.com/QQh9Awq.jpg' },
      { answerText: "Plaid", isLetter: "G", imgSrc:'https://i.imgur.com/asVzWnH.jpg' },
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

export default function Quiz({ loggedUser, handleLogout }) {
  const headerIntro = "Already know what you want?";
  const headerLinkDisp = "Click Here to schedule a FREE phone consultation!";
  const headerLinkSrc = "/";

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isLetter) => {
    userAnswers.push(isLetter);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      handleGrade();
    }
  };

  const handleGrade = () => {
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;
    let E = 0;
    let F = 0;
    let G = 0;

    userAnswers.forEach((answer) => {
      answer === "A"
        ? A++
        : answer === "B"
        ? B++
        : answer === "C"
        ? C++
        : answer === "D"
        ? D++
        : answer === "E"
        ? E++
        : answer === "F"
        ? F++
        : G++;
    });

    const answersTallied = [
      { type: "A", value: A },
      { type: "B", value: B },
      { type: "C", value: C },
      { type: "D", value: D },
      { type: "E", value: E },
      { type: "F", value: F },
      { type: "G", value: G },
    ];

    answersTallied.sort(compare);
    console.log(answersTallied);

    if (answersTallied[0].type === "A") {
      userStyle = "Coastal Chic will make you feel right at home.";
    } else if (answersTallied[0].type === "B") {
      userStyle = "Scandinavian may just be the perfect style for you.";
    } else if (answersTallied[0].type === "C") {
      userStyle = "French Country is a great choice.";
    } else if (answersTallied[0].type === "D") {
      userStyle =
        "Tuscan furnishings should definitely be included in your home.";
    } else if (answersTallied[0].type === "E") {
      userStyle = "Bohemian is your preferred style.";
    } else if (answersTallied[0].type === "F") {
      userStyle = "Farmhouse is likely a good fit.";
    } else {
      userStyle = "Western will work well in your home.";
    }

    setShowScore(true);
  };

  const compare = (x, y) => {
    if (x.value < y.value) return 1;
    if (x.value > y.value) return -1;
    return 0;
  };

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
      <div id="quiz-container">
        <div className="quiz">
          {showScore ? (
            <div className="score-section">{userStyle}</div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
                <br />
              </div>
              <div className="answer-section">
                <Row xs={1} md={2} className="g-4 justify-content-md-center">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <Card
                        className="text-white"
                        id="quiz-btn"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isLetter)
                        }
                      >
                        <Card.Img
                          as={ Image }
                          fluid={true}
                          id="btn-img"
                          src={answerOption.imgSrc}
                          alt={answerOption.answerText}
                        />
                        <Card.ImgOverlay>
                          <Card.Title>{answerOption.answerText}</Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                    )
                  )}
                </Row>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
