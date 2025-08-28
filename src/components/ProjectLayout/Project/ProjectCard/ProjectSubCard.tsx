import { Card } from "react-bootstrap";
import { StyledProjectCard } from "./ProjectCard.styled";

interface Props {
    subtitle: string;
    description: string[];
    children: React.ReactNode
}

export default function ProjectSubCard({subtitle, description, children }: Props) {
    return (
        <>
            <StyledProjectCard>
                <Card.Body className="sub-card">
                    <Card.Subtitle>{subtitle}</Card.Subtitle>
                    {description?.map((line, idx) => (
                        <Card.Text key={idx}>{line}</Card.Text>
                    ))}


                    {children}

                </Card.Body>
            </StyledProjectCard>
        </>
    )
}