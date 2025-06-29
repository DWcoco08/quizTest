import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import HomePage from "../Home/HomePage";

const NavBar_Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">IT-QuizTest</Navbar.Brand> */}
        <NavLink to="/" className="navbar-brand">
          IT-QuizTest
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/Users" className="nav-link">
              Users
            </NavLink>
            <NavLink to="/Admin" className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <nav>
            <button className="btn-login">Log in</button>
            <button className="btn-signup">Sign up</button>

            {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>User Info</NavDropdown.Item>
              <NavDropdown.Item>About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Log out</NavDropdown.Item>
            </NavDropdown> */}
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar_Header;
