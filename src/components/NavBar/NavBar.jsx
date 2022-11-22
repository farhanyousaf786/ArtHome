import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { CgProfile } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

import "./NavBar.css";

function NavBar({
  loggedUser,
  handleLogout,
  dispSubs,
  handleAvatarClick,
  avatarDisp,
  handleProfile,
}) {
  return (
    <>
      <Navbar fixed="top" id="nav-bar" expand="md">
        <Container>
          <Navbar.Brand href="/">
            <Image
              id="logo-nav"
              src="https://i.imgur.com/G4eja1w.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {dispSubs ? (
              <Nav className="me-auto">
                <Nav.Link href="#logo-details">Specialities</Nav.Link>
                <Nav.Link href="#design-details-buffer">Styles</Nav.Link>
                <Nav.Link href="#story-containor-buffer">Story</Nav.Link>
                <Nav.Link href="#reviews-containor">Testimonials</Nav.Link>
              </Nav>
            ) : null}
          </Navbar.Collapse>
          <Nav className="justify-content-end">
            {loggedUser ? (
              <Nav.Link onClick={handleAvatarClick}>
                <Image
                  src={loggedUser?.photoUrl}
                  alt="profile pic"
                  className="profile-pic"
                  roundedCircle
                />
              </Nav.Link>
            ) : (
              <Nav.Link href="/login">
                <CgProfile size={36} className="icons" />
              </Nav.Link>
            )}
          </Nav>
        </Container>
        <AnimatePresence>
        {avatarDisp ? (
          <div id="avatar-menu-container">
            
              <motion.div
                id="avatar-menu"
                animate={{ y: -25 }}
                transition={{ type: "tween", duration: 0.3 }}
                exit={{ y: 0, opacity: 0 }}
              >
                <button className="avatar-menu-btn" onClick={handleProfile}>
                  Profile
                </button>
                <br />
                <button className="avatar-menu-btn" onClick={handleLogout}>
                  Logout
                </button>
              </motion.div>
          </div>
        ) : null}
        </AnimatePresence>
      </Navbar>
    </>
  );
}

export default NavBar;
