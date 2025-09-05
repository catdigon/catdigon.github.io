import { StyledHeader } from './Header.styled';
import HeaderPresentation from './HeaderText/HeaderPresentation';
import { Col, Container, Row } from 'react-bootstrap';


interface Props{
    id?: string;
    title: string;
    text: string;
    children: React.ReactNode;
}

export default function Header( {id, title, text, children}: Props) {

    return (
        <>
            <StyledHeader id={id}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <HeaderPresentation
                                title={title}
                                text={text} />
                                </Col>
                        <Col md={6}>
                        {children}
                        </Col>
                    </Row>
                </Container>
            </StyledHeader>
        </>
    )
}