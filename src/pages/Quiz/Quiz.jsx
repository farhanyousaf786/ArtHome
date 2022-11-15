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
      questionText: "Which of these drinks are you likely to order at happy hour?",
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
          { answerText: "Pina Colada", isLetter: "A" },
          { answerText: "Vodka Soda", isLetter: "B" },
          { answerText: "Bordeaux", isLetter: "C" },
          { answerText: "Long Island Ice Tea", isLetter: "D" },
          { answerText: "Beer", isLetter: "E" },
          { answerText: "Whatever's on special", isLetter: "F" },
          { answerText: "Water", isLetter: "G" },
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
