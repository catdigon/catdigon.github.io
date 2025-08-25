import { Badge, Card } from "react-bootstrap";
import { BadgeContainer } from "./ProjectIntroLayout.styled";
import ProjectCard from "../ProjectCard/ProjectCard";


export default function ProjectIntroLayout() {

    return (
        <>
            <Badge bg="light" text="dark">AQUI</Badge>

            <ProjectCard
                title={"Cinemateca Website"}
                description={"This was the first project I developed from inital concept to final implementation. The bried was to design a website for a product-based brand, but..."}
            >

                <Card.Subtitle className="mb-2">Timeline</Card.Subtitle>
                <Card.Text>October 2024 - April 2025</Card.Text>

                <Card.Subtitle className="mb-2">Tools</Card.Subtitle>
                <BadgeContainer>
                    <Badge bg="light" text="dark">Figma</Badge>
                    <Badge bg="light" text="dark">HTML</Badge>
                </BadgeContainer>
            </ProjectCard>

        </>
    )
}