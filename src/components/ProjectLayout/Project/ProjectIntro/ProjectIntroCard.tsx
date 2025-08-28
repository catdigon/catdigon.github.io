

import { Badge } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectDetails from "./ProjectIntroCardDetails";
import { ProjectsCardsText } from "../../../../data/projectsDesign";

interface Props {
    projectId: string;
    description: string[];
}

export default function ProjectIntroCard({ projectId, description }: Props) {

    const project = ProjectsCardsText.find((p) => p.id === projectId);

    if (!project) {
        return <p>Project not found!</p>
    }

    return (
        <>
            <Badge bg="light" text="dark">{project.label}</Badge>
            <ProjectCard
                title={project.title || ""}
                description={description}>

                <ProjectDetails
                    date={project.year || ""}
                    tools={project.badge || []}>

                </ProjectDetails>
            </ProjectCard>
        </>
    )
}