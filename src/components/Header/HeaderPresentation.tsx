import Card from 'react-bootstrap/Card';
import CardPresentationGlass from './HeaderPresentation.styled';

export default function HeaderPresentation() {

    return (
        <CardPresentationGlass>
            <Card.Body>
                <Card.Title>Hi, My name is Cátia</Card.Title>
                <Card.Text>
                    I'm a UX/Product Designer-in-progress with a background in research and storytelling, learning how to design more human and accessible experiences.
                </Card.Text>
            </Card.Body>
        </CardPresentationGlass>

    )
}