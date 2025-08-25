
import { Col, Row } from "react-bootstrap";
import GradientArea from "../GradientArea/GradientArea";
import Header from "../Header/Header";
import ProgressDisplay from "./ProgressDisplay/ProgressDisplay";
import { StyledProgressStickyArea } from "./ProgressDisplay/ProgressDisplay.styled";
import ImageHeader from "./ImageHeader/ImageHeader";
import ProjectDisplay from "./Project/ProjectDisplay";
import ProjectsBreackLine from "../HomePage/BreakLine/ProjectsBreak";
import CardLayout from "../Card/CardLayout";
import { ProjectsCardsText } from "../../data/projectsDesign";

export default function ProjectLayoutDisplay() {

    return (
        <>
            <Header
                title={"Cinemateca"}
                text={"A redesign of the website of the Cinemateca Portuguesa originally created in 2013. This project explored how to improve navigation, accessibility, and visual coherence, while respecting the institution and its mission with a modern visual."}
            >
                <ImageHeader />
            </Header>

            <div style={{ marginTop: -100 }}>
                <GradientArea>
                    <Row>
                        <Col md={3}>
                            <StyledProgressStickyArea>
                                <ProgressDisplay />
                            </StyledProgressStickyArea>
                        </Col>
                        <Col md={9}>
                            <ProjectDisplay />
                        </Col>
                    </Row>

                    <ProjectsBreackLine />
                    <div style={{ marginTop: 20}}>
                        <CardLayout
                        data={ProjectsCardsText}
                        showText={false}
                        showLabel={false} />
                    </div>
                    
                </GradientArea>
            </div>

        </>
    )
}

