import { Button, Container, Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="title" as={Link} to="/home">MEDICURE</Navbar.Brand>
          <NavbarToggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="items" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className="items" as={Link} to="/services">Services</Nav.Link>
            <Nav.Link className="items" as={Link} to="/doctors">Doctors</Nav.Link>
            <Nav.Link className="items" as={Link} to="/about">About Us</Nav.Link>
            {user?.email ?
              <Button className="mx-3" onClick={logOut} variant="warning">Logout</Button> :
              <Nav.Link className="items" as={Link} to="/login">Login</Nav.Link>}
            <br />
            {user.email && <span className="fw-bold">Signed in as: {user?.displayName}</span>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;