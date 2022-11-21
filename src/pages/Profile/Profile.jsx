import React from "react";
import "./Profile.css";
import NavBar from "../../components/NavBar/NavBar";
import AlertBar from "../../components/AlertBar/AlertBar";

export default function Profile({
  loggedUser,
  handleLogout,
  handleAvatarClick,
  avatarDisp,
  handleProfile,
}) {
  return (
    <>
      <AlertBar />
      <NavBar
        loggedUser={loggedUser}
        handleLogout={handleLogout}
        dispSubs={false}
        handleAvatarClick={handleAvatarClick}
        avatarDisp={avatarDisp}
        handleProfile={handleProfile}
      />
      <div className="landing-page" id="test-buffer">
      <h1>Hello {loggedUser.username}!</h1>
      </div>
    </>
  );
}
