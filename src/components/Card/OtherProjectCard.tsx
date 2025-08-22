import { Badge, Card, Col, Figure, Row } from "react-bootstrap";
import ButtonTransparent from "../Button/ButtonTransparent";
import { appRoutes } from "../../data/constants";
import { HashLink } from "react-router-hash-link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router";
import ButtonCTA from "../Button/ButtonCTA";
import { GoLinkExternal } from "react-icons/go";
import { StyledImageCard, StyledOtherCard } from "./OtherProjectCard.styled";
import type { CardProject } from "../../data/models";


interface Props {
    card: CardProject ;
}


export default function OtherProjectCardDetails({ card }: Props){

    return (
        <>
            
                <HashLink to={appRoutes.OTHER_PROJECTS}>
                    <ButtonTransparent
                        aria-label="Go back">
                        <IoChevronBackOutline
                            style={{ marginLeft: "0.5rem" }} />
                        Return
                    </ButtonTransparent>
                </HashLink>

                <StyledOtherCard>
                    <Card>
                        <Row>
                             <Col sm={12} lg={7}>
                        <Card.Body>

                            <Badge bg="light" text="dark">{card.label}</Badge>

                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.text}</Card.Text>

                            {card.abstract && (
                            <Card.Subtitle className="mb-2">Abstract</Card.Subtitle>
                            )}

                            {card.abstract && (
                            <Card.Text>{card.abstract}</Card.Text> 
                            )}

                            <Card.Subtitle className="mb-2">Year</Card.Subtitle>
                            <Card.Text>{card.year}</Card.Text>

                            {card.primaryOutButton && (
                            <Link to={card.primaryOutButtonLink!}>
                                <ButtonCTA aria-label="Project">
                                    {card.primaryOutButton}
                                    <GoLinkExternal style={{ marginLeft: "0.5rem" }} />
                                </ButtonCTA>
                            </Link>
                            )}
                        </Card.Body>
                        </Col>

                        <Col sm={12} lg={5}>
                        <StyledImageCard>
                            <Card.Img
                                variant="top"
                                src={card.imageProject || card.image}
                                alt={card.altImageProject || card.alt} />
                            <Figure.Caption>{card.altImageProject || card.alt}</Figure.Caption>
                        </StyledImageCard>
                        </Col>
                        </Row>
                    </Card>
                </StyledOtherCard>
        </>
    )
}