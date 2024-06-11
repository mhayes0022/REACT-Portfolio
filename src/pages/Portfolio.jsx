import Project from '../components/Project'
import { Card, Row, Container, Button, Col } from 'react-bootstrap';

const projectData = [
  {
    title: 'Challenge21',
    description: 'MERN Book Search Engine',
    imgSrc: 'src/assets/images/ReactBookSearch-login.jpg',
    altTag: 'Deployed React Book Search main page and login',
    githubLink: 'https://github.com/mhayes0022/Challenge21',
    deployedLink: 'https://challenge21.onrender.com/',
  },
  {
    title: 'Challenge19',
    description: 'PWA Text Editor',
    imgSrc: 'src/assets/images/PWATextEditor.jpg',
    altTag: 'Deployed PWA Text Editor main page.',
    githubLink: 'https://github.com/mhayes0022/challenge19',
    deployedLink: 'https://pwa-texteditor-7qhf.onrender.com/',
  },
  {
    title: 'Challenge6',
    description: 'Weather Forecast using server side API ',
    imgSrc: 'src/assets/images/WhatstheWeather.jpg',
    altTag: 'Weather Dashboard with five day forecast and current weather.',
    githubLink: 'https://github.com/mhayes0022/challenge6',
    deployedLink: 'https://mhayes0022.github.io/challenge6/',
  },
  {
    title: 'Project 4',
    description: 'This is the description for Project 3',
    imgSrc: 'src/assets/images/project3.jpg',
    altTag: 'This is an image of the project.',
    githubLink: 'https://github.com/project3',
    deployedLink: 'https://project3.com',
  },
  {
    title: 'Project 5',
    description: 'This is the description for Project 3',
    imgSrc: 'src/assets/images/project3.jpg',
    altTag: 'This is an image of the project.',
    githubLink: 'https://github.com/project3',
    deployedLink: 'https://project3.com',
  },
  {
    title: 'Project 6',
    description: 'This is the description for Project 3',
    imgSrc: 'src/assets/images/project3.jpg',
    altTag: 'This is an image of the project.',
    githubLink: 'https://github.com/project3',
    deployedLink: 'https://project3.com',
  },
];


export default function Portfolio() {
  return (
    <div>
      <h2 className="fst-italic fw-normal">
        Portfolio Page
      </h2>

      <Row>
     
      {projectData.map((project, index) => (
          <Col xs={4} key={index}>
            <Project
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          </Col>
        ))}

      </Row>

    </div>
  );
}
