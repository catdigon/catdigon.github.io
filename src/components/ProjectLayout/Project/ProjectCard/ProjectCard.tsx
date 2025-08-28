import { Card } from "react-bootstrap";
import { StyledProjectCard } from "./ProjectCard.styled";

interface Props {
    title: string;
    description: string[];
    children: React.ReactNode
}

export default function ProjectCard({ title, description, children }: Props) {
    return (
        <>
            <StyledProjectCard>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {description?.map((line, idx) => (
                        <Card.Text key={idx}>{line}</Card.Text>
                    ))}


                    {children}

                </Card.Body>
            </StyledProjectCard>
        </>
    )
}