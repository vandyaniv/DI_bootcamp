import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './App.css';

function Mynav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <br />
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
              {' '}
              profile
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shop">
              shop{' '}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <br />
    </>
  );
}

export default Mynav;
