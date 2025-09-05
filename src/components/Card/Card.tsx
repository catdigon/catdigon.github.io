import { Badge, Card } from "react-bootstrap";
import ButtonCTA from "../Button/ButtonCTA";
import { BsChevronRight } from "react-icons/bs";
import { BadgeCardContainer, StyledCard, StyledCardImgContainer } from "./Card.styled";
import { HashLink } from "react-router-hash-link";
import type { CardProject } from "../../data/models";

interface Props {
  card: CardProject;
  showText?: boolean;
  showLabel?: boolean;
  showBadgeList?: boolean;
}

export default function CardItem({ card, showText, showLabel, showBadgeList }: Props) {
  
      const imgVersions = [
        card.imageMobile ? `${card.imageMobile} 767w` : null,
        card.imageDesktop ? `${card.imageDesktop} 1920w` : null,
        ].filter(Boolean).join(', ');

  return (
    <>
      <StyledCard>
        <Card>
          <StyledCardImgContainer>
            <Card.Img
              variant="top"
              src={card.imageDesktop}
              srcSet={imgVersions}
              sizes="(max-width: 767px) 100vw, 1920px"
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

            {showBadgeList && card.badge && (
              <BadgeCardContainer>
                {card.badge?.map((tool, index) => (
                  <Badge
                    key={index}
                    bg="undefined"
                    style={{
                      backgroundColor: tool.badgeColor,
                      marginBottom: 0,
                      fontWeight: 500
                    }}>
                    {tool.name}
                  </Badge>
                ))}
              </BadgeCardContainer>
            )}

            <HashLink to={card.buttonLink}>
              <ButtonCTA aria-label="Project">
                {card.buttonLabel}
                <BsChevronRight style={{ marginLeft: "0.5rem" }} />
              </ButtonCTA>
            </HashLink>

          </Card.Body>
        </Card>
      </StyledCard >
    </>
  );
}