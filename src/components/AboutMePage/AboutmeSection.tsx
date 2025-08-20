import { Col, Container, Row } from "react-bootstrap";
import GradientArea from "../GradientArea/GradientArea";
import { StyledAboutme, StyledGradientArea } from "./AboutmeSection.styled";
import ProjectsBreackLine from "../HomePage/BreakLine/ProjectsBreak";
import ImagesArea from "./ImagesArea/ImagesArea";
import AboutMeText from "./AboutmeText";

export default function AboutMeSection() {

    return (

        <>
            <StyledGradientArea id="Aboutme">
                <GradientArea>

                    <ProjectsBreackLine />

                    <StyledAboutme>
                        <Container className="AboutmeContainer">
                            <Row>
                                <Col className="StyledImgContainer">
                                    <ImagesArea />
                                </Col>

                                <Col>
                                    <AboutMeText />
                                </Col>
                            </Row>
                        </Container>
                    </StyledAboutme>
                </GradientArea>
            </StyledGradientArea>
        </>
    )

}
