import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../services/apiService";
import { doLogout } from "../../redux/actions/userAction";
import { toast } from "react-toastify";

const NavBar_Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    {
      navigate("/register");
    }
  };

  const handleLogout = async () => {
    let res = await logout(account.email, account.refreshToken);
    if (res && res.EC === 0) {
      // clear data redux
      dispatch(doLogout());
      navigate("/login");
    } else {
      toast.error(res.EM);
    }
  };

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
            <NavLink to="/users" className="nav-link">
              Users
            </NavLink>
            <NavLink to="/admins" className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <nav>
            {isAuthenticated === false ? (
              <>
                <button
                  className="btn-login"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Log in
                </button>
                <button
                  className="btn-signup"
                  onClick={() => {
                    handleRegister();
                  }}
                >
                  Sign up
                </button>
              </>
            ) : (
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item>Login</NavDropdown.Item>
                <NavDropdown.Item>User Info</NavDropdown.Item>
                <NavDropdown.Item>About</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => handleLogout()}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar_Header;
