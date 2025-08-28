import { Badge, Card } from "react-bootstrap";
import { BadgeContainer, StyledProjectDetails } from "./ProjectIntroDetails.styled";
import type { Tool } from "../../../../data/models";

interface Props {
    date: string;
    tools: Tool[];
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
                        <Badge 
                        key={index} 
                        bg="undefined" 
                        style={{
                            backgroundColor: tool.badgeColor, 
                            marginBottom: 0,
                            fontWeight: 500}}>
                            {tool.name}
                        </Badge>
                    ))}
                </BadgeContainer>
            </StyledProjectDetails>

        </>
    )
}