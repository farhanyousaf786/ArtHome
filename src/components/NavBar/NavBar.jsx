import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "./NavBar.css";

function NavBar({ loggedUser, handleLogout}) {
  return (
    <Navbar fixed="top" id="nav-bar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            id="logo-nav"
            src="https://i.imgur.com/G4eja1w.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#logo-details">Specialities</Nav.Link>
            <Nav.Link href="#design-details-buffer">Styles</Nav.Link>
            <Nav.Link href="#story-containor-buffer">Story</Nav.Link>
            <Nav.Link href="#reviews-containor">Testimonials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
