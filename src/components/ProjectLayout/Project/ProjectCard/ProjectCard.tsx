import { Card } from "react-bootstrap";
import { StyledProjectCard } from "./ProjectCard.styled";

interface Props {
    title: string;
    subtitle?: string;
    description: React.ReactNode[];
    children: React.ReactNode
}

export default function ProjectCard({ title, subtitle, description, children }: Props) {
    return (
        <>
            <StyledProjectCard>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
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