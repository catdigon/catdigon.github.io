import { Col, Container, Row } from "react-bootstrap";
import { StyledAboutme, StyledGradientArea } from "./AboutmeSection.styled";
import ProjectsBreackLine from "../BreakLine/ProjectsBreak";
import ImagesArea from "./ImagesArea/ImagesArea";
import AboutMeText from "./AboutmeText";

export default function AboutMeSection() {

    return (

        <>
            <StyledGradientArea id="Aboutme">
                    <ProjectsBreackLine />
                    <StyledAboutme>
                        <Container className="AboutmeContainer" >
                            <Row>
                                <Col 
                                xs={12} 
                                lg={5} 
                                className="order-2 order-lg-1 StyledImgContainer" >
                                    <ImagesArea />
                                </Col>
                                <Col 
                                xs={12} 
                                lg={7} 
                                className="order-1 order-lg-2 StyledImgContainer">
                                    <AboutMeText />
                                </Col>
                            </Row>
                        </Container>
                    </StyledAboutme>
            </StyledGradientArea>
        </>
    )
}
