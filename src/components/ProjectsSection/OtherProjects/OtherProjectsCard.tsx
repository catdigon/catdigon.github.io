import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { OtherProjectsText } from './OtherProjectsCardText';
import { BsChevronRight } from 'react-icons/bs';


export default function OtherProjectsCard() {
  return (
    <Card style={{ width: '38rem' }}>
      <Card.Body className="text-end">
        <Card.Title>{OtherProjectsText.title}</Card.Title>
        <Card.Text>{OtherProjectsText.text}</Card.Text>
        <Button variant="dark" aria-label="Other Projects">{OtherProjectsText.button} <BsChevronRight style={{ marginLeft: "0.5rem" }} /> </Button>
      </Card.Body>
    </Card>
  );
}