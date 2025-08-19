import { Badge, Card, Col, Row } from "react-bootstrap";
import { OtherProjectsCardsText } from "./OtherProjectsCardsText";
import ButtonCTA from "../../Button/ButtonCTA";
import { BsChevronRight } from "react-icons/bs";


export default function OtherProjectsCard() {
  return (
    <Row className="g-4">
      {OtherProjectsCardsText.map((projects, idx) => (
        <Col key={idx} xs={12} md={4}>
          <Card>
            <Card.Img variant="top" src={projects.image} alt={projects.alt}/>
            <Card.Body>
              <Badge bg="light" text="dark">{projects.label}</Badge>
              <Card.Title>{projects.subtitle}</Card.Title>
              <Card.Text>{projects.info}</Card.Text>
              <ButtonCTA aria-label="Project">{projects.button} <BsChevronRight style={{ marginLeft: "0.5rem" }} /></ButtonCTA>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
