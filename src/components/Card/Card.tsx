import { StyledCard, StyledCardImgContainer } from "./Card.styled";
import type { CardProject } from "../../data/models";

interface Props {
  card: CardProject;
  showText?: boolean;
  showLabel?: boolean;
  showBadgeList?: boolean;
  color?: string;
  showTask?: boolean;
}

export default function CardItem({ card, showText, showLabel, showBadgeList, showTask, color }: Props) {

  const imgVersions = [
    card.imageMobile ? `${card.imageMobile} 768w` : null,
    card.imageDesktopCard ? `${card.imageDesktopCard} 1920w` : null,
  ].filter(Boolean).join(', ');

  return (
    <>
      <StyledCard>
        <a href={card.buttonLink}>

          <div className="card relative overflow-hidden rounde-lg h-full w-full"  style={{ backgroundColor: color }}>
            <StyledCardImgContainer>
              <img
                src={"card.imageDesktopCard"}
                srcSet={imgVersions}
                sizes="(max-width: 768px) 100vw, 1920px"
                alt={card.alt} 
                className="absolute top-0"/>
            </StyledCardImgContainer>

            <div className="card-body top-0 left-0 w-1/2 h-full">

              {showTask && card.task && (
                <div className="font-bold text-[20px] p-4">
                  {card.task}
                </div>
              )}

              <div className="p-4 card-content">
                {showLabel && card.label && (
                  <div className="badge">
                    {card.label}
                  </div>
                )}

                <h3 className="card-title">{card.subtitle}</h3>

                {showText && card.text && (
                  <p>{card.text}</p>
                )}

                {showBadgeList && card.badge && (
                  <div className="flex flex-wrap gap-1 ">
                    {card.badge?.map((tool, index) => (
                      <div
                        key={index}
                        className="badge badge-sm"
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
          </div>

        </a>
      </StyledCard>
    </>
  );
}