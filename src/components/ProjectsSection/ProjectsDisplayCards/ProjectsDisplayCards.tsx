
import ProjectsGridCards from "./Cards/ProjectsCardsGrid"
import { StyledGridProjects, StyledProjectsArea } from "./ProjectsDisplayCards.styled"


export default function ProjectsArea() {

    return (
        <>
            <StyledProjectsArea>
                <StyledGridProjects>
                    <h1>Projects</h1>
                    <ProjectsGridCards />
                </StyledGridProjects>
            </StyledProjectsArea>
        </>
    )
}
