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
        Formerly Home 
        This section will include a short bio. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
}