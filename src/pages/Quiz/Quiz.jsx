import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import AlertBar from "../../components/AlertBar/AlertBar";
import { Image, Card, Row } from "react-bootstrap";
//import Loading from "../../components/Loading/Loading";

import "./Quiz.css";

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
      {
        answerText: "Nautical",
        isLetter: "A",
        imgSrc: "https://i.imgur.com/CyYcIig.png",
      },
      {
        answerText: "Black and White Stripes",
        isLetter: "B",
        imgSrc: "https://i.imgur.com/xabeF7r.jpg",
      },
      {
        answerText: "Pastoral Toile",
        isLetter: "C",
        imgSrc: "https://i.imgur.com/W8Cixd3.png",
      },
      {
        answerText: "Paisley",
        isLetter: "D",
        imgSrc: "https://i.imgur.com/l77hgvh.png",
      },
      {
        answerText: "I can't choose - I love all patterns!",
        isLetter: "E",
        imgSrc: "https://i.imgur.com/Ozi13CM.png",
      },
      {
        answerText: "Checkered",
        isLetter: "F",
        imgSrc: "https://i.imgur.com/QQh9Awq.jpg",
      },
      {
        answerText: "Plaid",
        isLetter: "G",
        imgSrc: "https://i.imgur.com/asVzWnH.jpg",
      },
    ],
  },
  {
    questionText: "Which of these colors have staying power?",
    answerOptions: [
      {
        answerText: "Blue, White, Cream, & Beige",
        isLetter: "A",
        imgSrc: "https://i.imgur.com/W4khKnR.png",
      },
      {
        answerText: "White, Grey, Black, & Red",
        isLetter: "B",
        imgSrc: "https://i.imgur.com/WSZTvO5.png",
      },
      {
        answerText: "Blue, Red, Yellow, & Lavender",
        isLetter: "C",
        imgSrc: "https://i.imgur.com/vdu3MPB.png",
      },
      {
        answerText: "Terracotta, Burgundy, Burnt Orange, & Olive Green",
        isLetter: "D",
        imgSrc: "https://i.imgur.com/yVpQRD8.png",
      },
      {
        answerText: "Red, Purple, Pink, & Blue",
        isLetter: "E",
        imgSrc: "https://i.imgur.com/mAbRzwa.png",
      },
      {
        answerText: "White, Beige, Brown, & Yellow",
        isLetter: "F",
        imgSrc: "https://i.imgur.com/MQfmqW6.png",
      },
      {
        answerText: "Brown, Beige, Deep Red, & Turuoise",
        isLetter: "G",
        imgSrc: "https://i.imgur.com/jDR3X9U.png",
      },
    ],
  },
  {
    questionText: "Which of these items would you love to hang on your wall?",
    answerOptions: [
      {
        answerText: "A set of sea coral pictures",
        isLetter: "A",
        imgSrc: "https://i.imgur.com/KpolEdw.jpg",
      },
      {
        answerText: "Brightly colored prints",
        isLetter: "B",
        imgSrc: "https://i.imgur.com/j9y2RYA.png",
      },
      {
        answerText: "A collection of folk animal art",
        isLetter: "C",
        imgSrc: "https://i.imgur.com/7WuGlin.png",
      },
      {
        answerText: "A medieval tapestry",
        isLetter: "D",
        imgSrc: "https://i.imgur.com/BFVSqHB.png",
      },
      {
        answerText: "1970's rock band posters",
        isLetter: "E",
        imgSrc: "https://i.imgur.com/hycbPDP.png",
      },
      {
        answerText: "A painting of an old barn",
        isLetter: "F",
        imgSrc: "https://i.imgur.com/2bWUMtU.png",
      },
      {
        answerText: "A classic western painting",
        isLetter: "G",
        imgSrc: "https://i.imgur.com/OUGipQz.png",
      },
    ],
  },
  {
    questionText:
      "Which of these drinks are you likely to order at happy hour?",
    answerOptions: [
      {
        answerText: "Pina Colada",
        isLetter: "A",
        imgSrc: "https://i.imgur.com/TNEZKgT.jpg",
      },
      {
        answerText: "Vodka Soda",
        isLetter: "B",
        imgSrc: "https://i.imgur.com/UoGhQDD.jpg",
      },
      {
        answerText: "Bordeaux",
        isLetter: "C",
        imgSrc: "https://i.imgur.com/hYJWh2R.jpg",
      },
      {
        answerText: "Long Island Ice Tea",
        isLetter: "D",
        imgSrc: "https://i.imgur.com/5FI6nYD.jpg",
      },
      {
        answerText: "Beer",
        isLetter: "E",
        imgSrc: "https://i.imgur.com/gfYYmbz.jpg",
      },
      {
        answerText: "Whatever's on special",
        isLetter: "F",
        imgSrc: "https://i.imgur.com/Ya4xWzq.jpg",
      },
      {
        answerText: "Water",
        isLetter: "G",
        imgSrc: "https://i.imgur.com/Xl8DeIE.jpg",
      },
    ],
  },
  {
    questionText: "Which of these light fixtures do you like the best?",
    answerOptions: [
      {
        answerText: "Capiz shell chandelier",
        isLetter: "A",
        imgSrc: "https://i.imgur.com/pXe8Bdh.png",
      },
      {
        answerText: "Oversize brass pendants",
        isLetter: "B",
        imgSrc: "https://i.imgur.com/eZ1M1ac.png",
      },
      {
        answerText: "Wrought iron and crystal chandelier",
        isLetter: "C",
        imgSrc: "https://i.imgur.com/Q92nLha.png",
      },
      {
        answerText: "Wrought iron wall scones",
        isLetter: "D",
        imgSrc: "https://i.imgur.com/jPgMkcf.png",
      },
      {
        answerText: "Moroccan style lanterns",
        isLetter: "E",
        imgSrc: "https://i.imgur.com/FMxDH8q.png",
      },
      {
        answerText: "Mason jar pendants",
        isLetter: "F",
        imgSrc: "https://i.imgur.com/b4bcZot.png",
      },
      {
        answerText: "Antler chandelier",
        isLetter: "G",
        imgSrc: "https://i.imgur.com/aWdPHCD.png",
      },
    ],
  },
  {
    questionText: "Which of these accessories would you buy at a yard sale?",
    answerOptions: [
      {
        answerText: "A collection of sea shells",
        isLetter: "A",
        imgSrc: "https://i.imgur.com/QfzYWsk.png",
      },
      {
        answerText: "A vase of tulips",
        isLetter: "B",
        imgSrc: "https://i.imgur.com/OXCknj6.png",
      },
      {
        answerText: "An empty bird cage",
        isLetter: "C",
        imgSrc: "https://i.imgur.com/uC1jYc4.png",
      },
      {
        answerText: "A collection of wine glasses",
        isLetter: "D",
        imgSrc: "https://i.imgur.com/hyvJGEa.png",
      },
      {
        answerText: "A collection of colored glass",
        isLetter: "E",
        imgSrc: "https://i.imgur.com/iBBeP8I.png",
      },
      {
        answerText: "Wire baskets",
        isLetter: "F",
        imgSrc: "https://i.imgur.com/WVaFzrl.png",
      },
      {
        answerText: "Cow skull to hang on the wall",
        isLetter: "G",
        imgSrc: "https://i.imgur.com/0pSVyr5.png",
      },
    ],
  },
];

export default function Quiz({
  loggedUser,
  handleLogout,
  handleAvatarClick,
  avatarDisp,
  handleProfile,
}) {
  const headerIntro = "Already know what you want?";
  const headerLinkDisp = "Click Here to schedule a FREE phone consultation!";
  const headerLinkSrc = "/";
  //const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerOptionClick = (isLetter) => {
    userAnswers.push(isLetter);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      //setLoading(false);
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

    if (answersTallied[0].type === "A") {
      loggedUser.quizGrade = "Coastal Chic will make you feel right at home.";
    } else if (answersTallied[0].type === "B") {
      loggedUser.quizGrade = "Scandinavian may just be the perfect style for you.";
    } else if (answersTallied[0].type === "C") {
      loggedUser.quizGrade = "French Country is a great choice.";
    } else if (answersTallied[0].type === "D") {
      loggedUser.quizGrade =
        "Tuscan furnishings should definitely be included in your home.";
    } else if (answersTallied[0].type === "E") {
      loggedUser.quizGrade = "Bohemian is your preferred style.";
    } else if (answersTallied[0].type === "F") {
      loggedUser.quizGrade = "Farmhouse is likely a good fit.";
    } else {
      loggedUser.quizGrade = "Western will work well in your home.";
    }

    setShowScore(true);
  };

  const compare = (x, y) => {
    if (x.value < y.value) return 1;
    if (x.value > y.value) return -1;
    return 0;
  };

  return (
    <div className="landing-page">
      <AlertBar
        headerIntro={headerIntro}
        headerLinkDisp={headerLinkDisp}
        headerLinkSrc={headerLinkSrc}
      />
      <NavBar
        loggedUser={loggedUser}
        handleLogout={handleLogout}
        dispSubs={false}
        handleAvatarClick={handleAvatarClick}
        avatarDisp={avatarDisp}
        handleProfile={handleProfile}
      />
      <div id="quiz-container">
        <div className="quiz">
          {showScore ? (
            <div className="score-section">{loggedUser.quizGrade}</div>
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
                        id="quiz-btn"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isLetter)
                        }
                      >
                        <Card.Body>
                          <Card.Title>{answerOption.answerText}</Card.Title>
                        </Card.Body>
                        <Card.Img
                          as={Image}
                          fluid={true}
                          id="btn-img"
                          src={answerOption.imgSrc}
                          alt={answerOption.answerText}
                        />
                      </Card>
                    )
                  )}
                </Row>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
