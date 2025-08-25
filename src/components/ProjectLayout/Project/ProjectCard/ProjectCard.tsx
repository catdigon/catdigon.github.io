import { Card } from "react-bootstrap";
import { StyledProjectCard } from "./ProjectCard.styled";


interface Props{
    title: string;
    description: string;
    children: React.ReactNode
}


export default function ProjectCard( {title, description, children}: Props){
    return(
        <>
        <StyledProjectCard>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>

                    {children}

                </Card.Body>
            </StyledProjectCard>
        </>
    )
}