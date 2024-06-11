import { Card, Navbar, Container, Button, Collapse } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Project(props) {
    return (
        <>
        {[
            'Dark',
          ].map((variant) => (
        <Card bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}
        className="mb-2" >

        {/* <Card.Img variant="top" src="src/assets/images/profile1.jpg" alt="Picture of a project" /> */}
        <Card.Img variant="top" src={props.src} alt={props.altTag} />

            {/* <Container>
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Text here about an individual project.
                    </Card.Text>
                </Card.ImgOverlay>
            </Container> */}

        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
               {props.description}
            </Card.Text>
        </Card.Body>

        <Card.Footer >

            <Card.Link href={props.githubLink}>Github</Card.Link>
            <Card.Link href={props.deployedLink}>Deployed</Card.Link>

            {/* <Navbar.Brand href="https://github.com/mhayes0022">
                <img
                    src="src/assets/images/github.svg"
                    width="20"
                    height="20"
                    className="d-inline-block align-top"
                    alt="Github logo"
                />
            </Navbar.Brand> */}
        </Card.Footer>

        </Card>
          ))}
          </>
    );
}

export default Project;