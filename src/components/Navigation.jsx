import { Link, useLocation } from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Navbar, Badge, Row, Col } from 'react-bootstrap';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <>

      <Navbar bg="primary" data-bs-theme="dark" className="pb-0" >


        <Col xs={3} >
          <Navbar.Text>
            <h1 className='text-white' >
              Martha Hayes
            </h1>
          </Navbar.Text>
        </Col>

        <Col xs={9} >
          {/* Below line had the following: activeKey="/" */}
          <Container className="pb-0 mb-0" >
            <ul className="nav nav-tabs justify-content-end">
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


      </Navbar>
    </>
  );
}

export default Navigation;