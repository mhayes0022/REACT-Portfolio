import { useState } from 'react';
import { Form, Button, InputGroup, Col, Row } from 'react-bootstrap';

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="pb-3 pt-2">

      <h2 className="fst-italic fw-normal">
        Contact
      </h2>

      <Row>
        <Col xs={3} >
          <Form.Group className="" controlId="" >
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={3} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <InputGroup hasValidation>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Control.Feedback type="invalid">
                Please enter your email address.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={7} >
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
