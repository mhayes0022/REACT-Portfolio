import { Link, useLocation } from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Navbar, Badge, Row, Col } from 'react-bootstrap';

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
      <>

        <Navbar bg="primary" data-bs-theme="dark">
            <Row>

                <Col xs={5}>
            <Navbar.Text>
                <h1> 
                    Martha Hayes
                </h1>
            </Navbar.Text>
                </Col>

        <Col xs={7}>
          <Container className="justify-content-end" activeKey="/">
          <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
          </Container>
        </Col>

          </Row>
        </Navbar>
      </>
    );
  }

  export default Navigation;

  //Note: when I take out 'Row' and 'Col' my name won't apear on one line,
  //it thinks it doesn't have enough room. But, then the nav bar appears on the right