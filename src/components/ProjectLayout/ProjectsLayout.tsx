
import { Col, Row } from "react-bootstrap";
import GradientArea from "../GradientArea/GradientArea";
import Header from "../Header/Header";
import ProjectIntroLayout from "./ProjectIntro/ProjectIntroLayout";
import ProgressDisplay from "./ProgressDisplay/ProgressDisplay";

export default function ProjectLayoutDisplay() {

    return (

        
        <>
            <Header
                title={"Cinemateca"}
                text={"A redesign of the website of the Cinemateca Portuguesa originally created in 2013. This project explored how to improve navigation, accessibility, and visual coherence, while respecting the institution and its mission with a modern visual."}
            >
                <div>AQUI image</div>
            </Header>
            <GradientArea>
                <Row>
                    <Col md={3}>
                        <ProgressDisplay />                    
                    </Col>
                    <Col md={9}>
                        <ProjectIntroLayout />
                    </Col>

                </Row>
            </GradientArea>

        </>
    )
}