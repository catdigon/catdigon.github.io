import HeaderArt from './ArtHeader/HeaderFinalArt';
import { StyledHeader } from './Header.styled';
import HeaderPresentation from './HeaderText/HeaderPresentation';
import { Col, Container, Row } from 'react-bootstrap';

export default function Header() {

    return (
        <>
            <StyledHeader>
                <Container>
                    <Row>
                        <Col><HeaderPresentation /></Col>
                        <Col><HeaderArt /></Col>
                    </Row>
                </Container>
            </StyledHeader>
        </>
    )
}