import { appRoutes } from "../../data/constants";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router";
import { GoLinkExternal } from "react-icons/go";
import { CardBlock, StyledImageCard, StyledOtherCard } from "./OtherProjectCard.styled";
import type { CardProject } from "../../data/models";
import { TransparentLink } from "./StyledOtherProjectCard";



interface Props {
    card: CardProject;
}


export default function OtherProjectCardDetails({ card }: Props) {

    const imgVersions = [
        card.imageMobile ? `${card.imageMobile} 768w` : null,
        card.imageDesktop ? `${card.imageDesktop} 1920w` : null,
    ].filter(Boolean).join(', ');

    const imgProjectsVersions = [
        card.imageProjectMobile ? `${card.imageProjectMobile} 768w` : null,
        card.imageProject ? `${card.imageProject} 1920w` : null,
    ].filter(Boolean).join(', ');

    return (
        <>
            <TransparentLink to={appRoutes.OTHER_PROJECTS}>
                <IoChevronBackOutline style={{ marginLeft: "0.5rem" }} />
                Return
            </TransparentLink>

            <StyledOtherCard>
                <div className="card">
                    <div>
                        <div className="w-full lg:w-7/12">
                            <div>

                                <div className="badge" >{card.label}</div>

                                <CardBlock>
                                    <h2>{card.title}</h2>
                                    {card.text?.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                {item}
                                            </div>
                                        )
                                    })}
                                </CardBlock>

                                <CardBlock>
                                    {card.abstract && card.abstract.length > 0 && (
                                        <div className="mb-2">Abstract</div>
                                    )}

                                    {card.abstract && card.abstract.map((text, index) => (
                                        <div key={index}>{text}</div>
                                    ))}
                                </CardBlock>

                                <CardBlock>
                                    <div className="mb-2">Year</div>
                                    <div>{card.year}</div>
                                </CardBlock>

                                {card.primaryOutButton && (
                                    <Link to={card.primaryOutButtonLink!}>
                                            {card.primaryOutButton}
                                            <GoLinkExternal style={{ marginLeft: "0.5rem" }} />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="w-full lg:w-5/12">
                            <StyledImageCard>
                                <img
                                    src={card.imageProject || card.imageDesktop}
                                    srcSet={imgProjectsVersions || imgVersions}
                                    sizes="(max-width: 768px) 100vw, 1920px"
                                    alt={card.altImageProject || card.alt} />
                            </StyledImageCard>
                        </div>
                    </div>
                </div>
            </StyledOtherCard>
        </>
    )
}