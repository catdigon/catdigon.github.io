

import { Badge } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectDetails from "./ProjectIntroDetails";
import type { Tool } from "../../../../data/models";

interface Props {
    label: string;
    title: string;
    text: string
    date: string;
    tools: Tool[];

}

export default function ProjectIntroCard({label, title, text, date, tools}: Props) {
    return (
        <>
            <Badge bg="light" text="dark">{label}</Badge>
            <ProjectCard
                title={title}
                description={text}
            >
                <ProjectDetails 
                date={date} 
                tools={tools}>
                    
                </ProjectDetails>
            </ProjectCard>
        </>
    )
}