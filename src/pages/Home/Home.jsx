import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import AlertBar from "../../components/AlertBar/AlertBar";
import Carousel from "../../components/Carousel/Carousel";
import Bio from "../../components/Bio/Bio";
import LogoModal from "../../components/LogoModal/LogoModal";
import DesignComp from "../../components/DesignComp/DesignComp";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

function Home({ loggedUser, handleLogout, handleAvatarClick, avatarDisp, handleProfile }) {
  const headerIntro = "Find out your style TODAY!";
  const headerLinkDisp = "Click Here for your FREE Style Quiz!";
  const headerLinkSrc = "/quiz";

  return (
    <div id="landing-page">
      <AlertBar
        headerIntro={headerIntro}
        headerLinkDisp={headerLinkDisp}
        headerLinkSrc={headerLinkSrc}
      />
      <NavBar
        loggedUser={loggedUser}
        handleLogout={handleLogout}
        handleProfile={handleProfile}
        dispSubs={true}
        handleAvatarClick={handleAvatarClick}
        avatarDisp={avatarDisp}
      />
      <div id="header-buffer"></div>
      <Carousel />
      <div id="logo-details"></div>
      <LogoModal />
      <div id="design-details-buffer"></div>
      <div id="designs-details"></div>
      <DesignComp />
      <div id="story-containor-buffer"></div>
      <div id="story-containor">
        <div id="story">
          <Bio />
        </div>
      </div>
      <div id="reviews-containor">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div id="footer-buffer"></div>
      <Footer />
    </div>
  );
}

export default Home;
