import { Badge, Card } from "react-bootstrap";
import { BadgeContainer, StyledProjectDetails } from "./ProjectIntroDetails.styled";

interface Props {
    date: string;
    tools: string[];
}

export default function ProjectDetails({ date, tools }: Props) {

    return (
        <>
            <StyledProjectDetails>
                <Card.Subtitle className="mb-2">Timeline</Card.Subtitle>
                <Card.Text>{date}</Card.Text>

                <Card.Subtitle className="mb-2">Tools</Card.Subtitle>
                <BadgeContainer>
                    {tools.map((tool, index) => (
                        <Badge bg="light" text="dark">{tool}
                        </Badge>
                    ))}
                </BadgeContainer>
            </StyledProjectDetails>

        </>
    )
}