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
        handleAvatarClick={handleAvatarClick}
        handleLogout={handleLogout}
        avatarDisp={avatarDisp}
        dispSubs={false}
        handleProfile={handleProfile}
      />
      <h1>Hello {loggedUser.username}!</h1>
    </>
  );
}
