import Project from '../components/Project'
import { Card, Row, Container, Button, Col } from 'react-bootstrap';

const projectData = [
  {
    title: 'Book Search Engine',
    description: 'A Google Books API search engine built using GraphQL and using the MERN stack.',
    imgSrc: '/assets/images/ReactBookSearch-login.jpg',
    altTag: 'Deployed React Book Search main page and login',
    githubLink: 'https://github.com/mhayes0022/Challenge21',
    deployedLink: 'https://challenge21.onrender.com/',
  },
  {
    title: 'PWA Text Editor',
    description: 'A text editor which runs in the browser and meets PWA criteria.',
    imgSrc: '/assets/images/PWAEditor.jpg',
    altTag: 'Deployed PWA Text Editor main page.',
    githubLink: 'https://github.com/mhayes0022/challenge19',
    deployedLink: 'https://pwa-texteditor-7qhf.onrender.com/',
  },
  {
    title: 'What is the Weather?',
    description: 'A weather forecasting application using server side API. ',
    imgSrc: '/assets/images/WhatstheWeather.jpg',
    altTag: 'Weather Dashboard with five day forecast and current weather.',
    githubLink: 'https://github.com/mhayes0022/challenge6',
    deployedLink: 'https://mhayes0022.github.io/challenge6/',
  },
  {
    title: 'Coding Quiz',
    description: 'Built using dynamically updated HTML and CSS, and powered by JavaScript.',
    imgSrc: 'src/assets/images/CodingQuizmain.jpg',
    altTag: 'Coding Quiz main page',
    githubLink: 'https://github.com/mhayes0022/challenge4',
    deployedLink: 'https://mhayes0022.github.io/challenge4/',
  },
  {
    title: 'Tell Me What Happened!',
    description: 'This application searches mulitple APIs to return what happened on a given day in history.',
    imgSrc: 'src/assets/images/TellMeWhatHappened2.jpg',
    altTag: 'Search results from the New York Times',
    githubLink: 'https://github.com/owenphineas/tell-me-what-happened',
    deployedLink: 'https://owenphineas.github.io/tell-me-what-happened/',
  },
  {
    title: 'Note Taker',
    description: 'A note application using Express.js that saves and retrieves notes from a JSON file.',
    imgSrc: 'src/assets/images/NoteTakerEx.jpg',
    altTag: 'A note taking application',
    githubLink: 'https://github.com/mhayes0022/challenge11',
    deployedLink: 'https://notetaker0022-b3a3ffc993f3.herokuapp.com/',
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
