import { Col, Row } from "react-bootstrap";
import { OtherProjectsCardsText2018, OtherProjectsCardsText2019, OtherProjectsCardsText2020, OtherProjectsCardsText2022, OtherProjectsCardsText2023, OtherProjectsCardsText2024 } from "../../../data/otherProjects";
import CardItem from "../../Card/Card";
import { StyledOtherProjectsGrid } from "./OtherProjectsGrid.styled";

export default function OtherProjectsCards() {

    return (
        <>
            <StyledOtherProjectsGrid>
                <Row style={{ flexWrap: 'wrap', width: '100%' }}>
                    {OtherProjectsCardsText2024.map((project, index) => (
                        <Col xs={12} md={4}>
                            <h4 style={{ height: 0 }}>
                                {index === 0 ? "2024" : ""}
                            </h4>
                            <CardItem card={project} showText={false} />
                        </Col>
                    ))
                    }

                    {OtherProjectsCardsText2023.map((project, index) => (
                        <Col xs={12} md={4}>
                            <h4 style={{ height: 0 }}>
                                {index === 0 ? "2023" : ""}
                            </h4>
                            <CardItem card={project} showText={false} />
                        </Col>
                    ))
                    }

                    {OtherProjectsCardsText2022.map((project, index) => (
                        <Col xs={12} md={4}>
                            <h4 style={{ height: 0 }}>
                                {index === 0 ? "2022" : ""}
                            </h4>
                            <CardItem card={project} showText={false} />
                        </Col>
                    ))
                    }

                    {OtherProjectsCardsText2020.map((project, index) => (
                        <Col xs={12} md={4}>
                            <h4 style={{ height: 0 }}>
                                {index === 0 ? "2020" : ""}
                            </h4>
                            <CardItem card={project} showText={false} />
                        </Col>
                    ))
                    }

                    {OtherProjectsCardsText2019.map((project, index) => (
                        <Col xs={12} md={4}>
                            <h4 style={{ height: 0 }}>
                                {index === 0 ? "2019" : ""}
                            </h4>
                            <CardItem card={project} showText={false} />
                        </Col>
                    ))
                    }

                    {OtherProjectsCardsText2018.map((project, index) => (
                        <Col xs={12} md={4}>
                            <h4 style={{ height: 0 }}>
                                {index === 0 ? "2018" : ""}
                            </h4>
                            <CardItem card={project} showText={false} />
                        </Col>
                    ))
                    }
                </Row>
            </StyledOtherProjectsGrid>
        </>
    )
}