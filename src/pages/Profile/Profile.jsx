import React from "react";
import "./Profile.css";
import NavBar from "../../components/NavBar/NavBar";
import AlertBar from "../../components/AlertBar/AlertBar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion/dist/framer-motion";


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
        
        <motion.div
            animate={{ x: 150, opacity: 1 }}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
        >
          <h1>Hello {loggedUser.username}!</h1>
          </motion.div>
          <motion.div
            animate={{ x: 150, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            initial={{ opacity: 0 }}
        >
          <h3>Welcome to your profile page.</h3>
          </motion.div>
          <motion.div
            animate={{ x: 150, opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            initial={{ opacity: 0 }}
        >
          {loggedUser.quizGrade !== "null" ? (
            <h3>{loggedUser.quizGrade}</h3>
          ) : (
            <h3>You haven't taken the style quiz yet.</h3>
          )}
          </motion.div>
        

        <br />
        <div id="profile-widgets">
          <div id="profile-upload-photo">
            <h3>Upload photos of your potential project</h3>
          </div>
          <div id="profile-view-photo">
            <h3>Here's what's already uploaded</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
