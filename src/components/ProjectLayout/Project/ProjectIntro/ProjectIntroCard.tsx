

import { Badge } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectSummary from "./ProjectSummary";
import ProjectDetails from "./ProjectIntroDetails";

interface Props {
    label: string;
    title: string;
    text: string
    date: string;
    tools: string[];

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
                    tools={tools} />
            </ProjectCard>
            <ProjectSummary />
        </>
    )
}