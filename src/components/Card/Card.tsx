import { Badge, Card } from "react-bootstrap";
import ButtonCTA from "../Button/ButtonCTA";
import { BsChevronRight } from "react-icons/bs";
import { StyledCard, StyledCardImgContainer } from "./Card.styled";

interface Props {
  card: Card;
  showText?: boolean;
  showLabel?: boolean;
}

export interface Card {
  year?: string;
  title?: string,
  subtitle: string,
  text?: string,
  image: string,
  alt: string,
  label?: string,
  buttonLabel: string,
  buttonLink: string,
  abstract?: string,
}


export default function CardItem({ card, showText = true, showLabel = true }: Props) {
  return (
    <>
               <StyledCard>  
              <Card>
                <StyledCardImgContainer>
                  <Card.Img
                    variant="top"
                    src={card.image}
                    alt={card.alt}
                  />
                </StyledCardImgContainer>

                <Card.Body>
                  {showLabel && card.label && (
                    <Badge bg="light" text="dark">
                    {card.label}
                  </Badge>
                  )}

                  <Card.Title>
                    {card.subtitle}
                  </Card.Title>

                  {showText && card.text && (
                    <Card.Text>
                      {card.text}
                    </Card.Text>
                  )}

                  <ButtonCTA aria-label="Project">
                    {card.buttonLabel}
                    <BsChevronRight style={{ marginLeft: "0.5rem" }} />
                  </ButtonCTA>

                </Card.Body>
              </Card>
                  </StyledCard> 
    </>
  );
}