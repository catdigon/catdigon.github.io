import { Col, Row } from "react-bootstrap";
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
                <Row style={{ flexWrap: 'wrap', width: '100%' }}>
                    {projectYears.map(({year, projects}) => 
                        projects.map((project, index) => (
                            <Col key={`${year}-${index}`} xs={12} md={4}>
                            <h4 style={{ height: 0 }}>
                                {index === 0 ? "2024" : ""}
                            </h4>
                            <CardItem card={project} showText={false} />
                        </Col>
                        ))
                    )}
                </Row>
            </StyledOtherProjectsGrid>
        </>
    )
}