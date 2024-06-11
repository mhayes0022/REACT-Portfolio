import { Image, Col, Container, Row } from 'react-bootstrap';

export default function AboutMe() {
  return (
    <div>
      <h2 className="fst-italic fw-normal">
        About Me
      </h2>

      <Container>
      <Row>
        <Col xs={6} md={4} className="my-1 mb-5" >
          <Image src="src/assets/images/profile1.jpg" roundedCircle />
        </Col>
      </Row>
    </Container >
      <p className="ms-5"> 
        This section will include a short bio. 
        For now, this is placeholder text. Please note, 
        I have no recent photos of myself, but am in the process 
        of having profesional headshots taken.
      </p>
    </div>
  );
}