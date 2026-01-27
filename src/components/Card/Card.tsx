import type { CardProject } from "../../data/models";
import { StyledCard, StyledCardImgContainer } from "./Card.styled";

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
        card.imageDesktop ? `${card.imageDesktop} 1920w` : null,
    ].filter(Boolean).join(', ');

    return (
        <>
            <StyledCard>
                <a href={card.buttonLink}>

                    <div className="card relative overflow-hidden rounde-lg flex md:flex-row h-125 md:h-150" style={{ backgroundColor: color }}>

                        <StyledCardImgContainer>
                            <img
                                src={"card.imageDesktop"}
                                srcSet={imgVersions}
                                sizes="(max-width: 768px) 100vw, 1920px"
                                alt={card.alt} />
                        </StyledCardImgContainer>

                        <div className="card-body ">
                            <div className="card-content">
                                {showLabel && card.label && (
                                    <div className="badge">
                                        {card.label}
                                    </div>
                                )}

                                <h3 className="card-title">{card.subtitle}</h3>

                                {showTask && card.task && (
                                    <div className="font-bold text-[20px]">
                                        {card.task}
                                    </div>
                                )}

                                {showText && card.text && (
                                    <p>{card.text}</p>
                                )}
                                </div>

                                <div className="card-tools">
                                {showBadgeList && card.tools && (
                                    <div className="flex flex-wrap gap-1 md:justify-end">
                                        {card.tools?.map((tool, index) => (
                                            <div
                                                key={index}
                                                className="badge badge-sm bg-white/60 text-gray-800 border border-none">
                                                {tool}
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