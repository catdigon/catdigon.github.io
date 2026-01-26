import { OtherProjectsCardsText2018, OtherProjectsCardsText2019, OtherProjectsCardsText2020, OtherProjectsCardsText2022, OtherProjectsCardsText2023, OtherProjectsCardsText2024 } from "../../../data/otherProjects";
import CardItem from "../../Card/Card";
import { StyledOtherProjectsGrid } from "./OtherProjectsGrid.styled";

export default function OtherProjectsCards() {

    const projectYears = [
        { year: 2024, projects: OtherProjectsCardsText2024 },
        { year: 2023, projects: OtherProjectsCardsText2023 },
        { year: 2022, projects: OtherProjectsCardsText2022 },
        { year: 2020, projects: OtherProjectsCardsText2020 },
        { year: 2019, projects: OtherProjectsCardsText2019 },
        { year: 2018, projects: OtherProjectsCardsText2018 },
    ]

    return (
        <>
            <StyledOtherProjectsGrid>
                <div className="flex flex-wrap w-full">
                    {projectYears.map(({year, projects}) => 
                        projects.map((project, index) => (
                            <div key={`${year}-${index}`} className="w-full md:w-1/2 xl:w-1/3">
                            {index === 0 ? ( 
                            <h4 style={{ height: 0 }}>
                                {year}
                            </h4>
                            ) : (
                                <div style={{height: "0.5rem"}} />
                            )}
                            <CardItem card={project} showText={false} />
                        </div>
                        ))
                    )}
                </div>
            </StyledOtherProjectsGrid>
        </>
    )
}