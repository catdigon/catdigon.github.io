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
                        <Container className="AboutmeContainer" >
                            <Row>
                                <Col 
                                xs={12} 
                                lg={6} 
                                className="order-2 order-lg-1 StyledImgContainer" >
                                    <ImagesArea />
                                </Col>
                                <Col 
                                xs={12} 
                                lg={6} 
                                className="order-1 order-lg-2 StyledImgContainer">
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
