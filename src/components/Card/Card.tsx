import { StyledCard, StyledCardImgContainer } from "./Card.styled";
import type { CardProject } from "../../data/models";

interface Props {
  card: CardProject;
  showText?: boolean;
  showLabel?: boolean;
  showBadgeList?: boolean;
}

export default function CardItem({ card, showText, showLabel, showBadgeList }: Props) {

  const imgVersions = [
    card.imageMobile ? `${card.imageMobile} 768w` : null,
    card.imageDesktop ? `${card.imageDesktop} 1920w` : null,
  ].filter(Boolean).join(', ');

  return (
    <>
      <StyledCard>
        <a href={card.buttonLink}>
          <div className="card w-90">
            <figure>
              <StyledCardImgContainer>
                <figure style={{borderRadius: "16px"}}>
                  <img
                    src={card.imageDesktop}
                    srcSet={imgVersions}
                    sizes="(max-width: 768px) 100vw, 1920px"
                    alt={card.alt} />
                </figure>
              </StyledCardImgContainer>
            </figure>
            <div className="card-body">
              {showLabel && card.label && (
              <div className="badge">
                {card.label}
              </div>
              
            )}
              <h3 className="card-title">
                {card.subtitle}
              </h3>

              {showText && card.text && (
                <p>{card.text}</p>
              )}

              {showBadgeList && card.badge && (
                <div className="card-actions justify-end">
                  {card.badge?.map((tool, index) => (
                    <div
                      key={index}
                      className="badge"
                      style={{
                        backgroundColor: tool.badgeColor,
                        marginBottom: 0,
                        fontWeight: 500,
                        border: "none"
                      }}>
                      {tool.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </a>
      </StyledCard>
    </>
  );
}