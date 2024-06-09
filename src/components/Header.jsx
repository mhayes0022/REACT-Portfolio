//import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
//import Nav from './NavTabs';
import Navigation from './Navigation'
//import NavTabs from '/NavTabs'

function Header() {
    return (
        <Container fluid>
          <Row>
            <Navigation />
          </Row>
        </Container>
      );
}

export default Header;