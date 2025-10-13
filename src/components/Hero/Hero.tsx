import type React from 'react';
import { StyledBtnContainer, StyledHero, StyledHeroContainer } from './Hero.styled';
import { Col, Container, Row } from 'react-bootstrap';
import ButtonCTA from '../Button/ButtonCTA';
import HeroPresentation from './HeroText/HeroPresentation';


interface Props {
    id?: string;
    title: string;
    text: string;
    isButton?: boolean;
    button?: React.ReactNode;
    link?: string;
    children: React.ReactNode;
}

export default function Hero({ id, title, text, isButton, button, link, children }: Props) {

    return (
        <StyledHeroContainer>
            <StyledHero id={id}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <HeroPresentation
                                title={title}
                                text={text} />

                            {isButton && (
                                <StyledBtnContainer>
                                    <ButtonCTA className='btn-presentation'
                                        href={link}
                                        target='_blank' rel='noopener'>
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
            </StyledHero>
        </StyledHeroContainer>
    )
}