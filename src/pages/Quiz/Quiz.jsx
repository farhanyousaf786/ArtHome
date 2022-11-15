import React from "react";
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
  ];

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
      <h1 id="test">STYLE QUIZ</h1>
    </div>
  );
}
