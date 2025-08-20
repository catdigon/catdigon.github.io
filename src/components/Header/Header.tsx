import HeaderArt from './ArtHeader/HeaderFinalArt';
import { StyledHeader } from './Header.styled';
import HeaderPresentation from './HeaderText/HeaderPresentation';
import { Col, Container, Row } from 'react-bootstrap';


export default function Header() {

    return (
        <>
            <StyledHeader id='Home'>
                <Container>
                    <Row>
                        <Col>
                            <HeaderPresentation
                                title={'Hi, My name is Cátia.'}
                                text={"I'm a UX/Product Designer-in-progress with a background in research and storytelling, learning how to design more human and accessible experiences."} /></Col>
                        <Col>
                            <HeaderArt />
                        </Col>
                    </Row>
                </Container>
            </StyledHeader>
        </>
    )
}