import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";

function NavBar({ loggedUser, handleLogout, dispSubs }) {
  return (
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
        {dispSubs ? (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#logo-details">Specialities</Nav.Link>
              <Nav.Link href="#design-details-buffer">Styles</Nav.Link>
              <Nav.Link href="#story-containor-buffer">Story</Nav.Link>
              <Nav.Link href="#reviews-containor">Testimonials</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        ) : null}
        <Nav className="justify-content-end">
          {loggedUser ? (
            <Nav.Link onClick={handleLogout}>
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
    </Navbar>
  );
}

export default NavBar;
