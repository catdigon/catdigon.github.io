import Card from 'react-bootstrap/Card';
import CardPresentationGlass from './HeaderPresentation.styled';

interface Props {
    title: string;
    text: string;
}

export default function HeaderPresentation({title, text}: Props) {

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