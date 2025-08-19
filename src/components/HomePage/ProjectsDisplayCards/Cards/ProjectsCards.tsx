import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsChevronRight } from 'react-icons/bs';
import { ProjectsCardsText } from './ProjectCardsText';
import ButtonCTA from '../../../Button/ButtonCTA';

export default function ProjectsCards() {
  return (
    <Row className="g-4">
      {ProjectsCardsText.map((projects, idx) => (
        <Col key={idx} xs={12} md={4}>
          <Card>
            <Card.Img variant="top" src={projects.image} alt={projects.alt}/>
            <Card.Body>
              <Card.Title>{projects.title}</Card.Title>
              <Card.Text>{projects.text}</Card.Text>
              <ButtonCTA aria-label="Project">{projects.button} <BsChevronRight style={{ marginLeft: "0.5rem" }} /></ButtonCTA>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

