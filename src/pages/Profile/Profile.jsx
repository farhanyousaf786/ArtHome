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
      <div className="landing-page" id="profile-buffer">
        <h1>Hello {loggedUser.username}!</h1>
        <h3>Welcome to your profile page.</h3>

        {loggedUser.quizGrade !== "null" ? (
          <h3>Your preferred style is {loggedUser.quizGrade}</h3>
        ) : (
          <h3>You haven't taken the style quiz yet.</h3>
        )}
        
      </div>
    </>
  );
}
