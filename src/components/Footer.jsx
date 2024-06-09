import { Container, Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
        <Container>

        </Container>

                <Container>
                    <Navbar.Brand href="https://github.com/mhayes0022">
                        <img
                            src="src/assets/images/github.svg"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Github logo"
                        />
                    </Navbar.Brand>
                    
                    <Navbar.Brand href="#home">
                        <img
                            src="src/assets/images/linkedin.svg"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="LinkedIn logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Brand href="#home">
                        <img
                            src="src/assets/images/stack-overflow.svg"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Stack-overflow logo"
                        />
                    </Navbar.Brand>
                </Container>

                <Container>

                </Container>
            </Navbar>
        </>
    )
}

export default Footer;