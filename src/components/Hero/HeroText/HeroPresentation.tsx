import Card from 'react-bootstrap/Card';
import CardPresentationGlass from './HeroPresentation.styled';

interface Props {
    title: string;
    text: string;
}

export default function HeroPresentation({title, text}: Props) {

    return (
        <CardPresentationGlass>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </CardPresentationGlass>
    )
}