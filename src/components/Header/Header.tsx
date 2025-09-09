import type React from 'react';
import { StyledBtnContainer, StyledHeader, StyledHeaderContainer } from './Header.styled';
import HeaderPresentation from './HeaderText/HeaderPresentation';
import { Col, Container, Row } from 'react-bootstrap';
import ButtonCTA from '../Button/ButtonCTA';


interface Props {
    id?: string;
    title: string;
    text: string;
    isButton?: boolean;
    button?: React.ReactNode;
    link?: string;
    children: React.ReactNode;
}

export default function Header({ id, title, text, isButton, button, link, children }: Props) {

    return (
        <StyledHeaderContainer>
            <StyledHeader id={id}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <HeaderPresentation
                                title={title}
                                text={text} />

                            {isButton && (
                                <StyledBtnContainer>
                                    <ButtonCTA className='btn-presentation'
                                        href={link}
                                        target='_blank' rel='noopener'
                                        aria-label="CV">
                                        {button}
                                    </ButtonCTA>
                                </StyledBtnContainer>
                            )}
                        </Col>
                        <Col md={6}>
                            {children}
                        </Col>
                    </Row>
                </Container>
            </StyledHeader>
        </StyledHeaderContainer>
    )
}