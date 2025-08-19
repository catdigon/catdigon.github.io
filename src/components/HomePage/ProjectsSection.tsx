import GradientArea from "../GradientArea/GradientArea";
import ProjectsBreackLine from "./BreakLine/ProjectsBreak";
import OtherProjectsSection from "./OtherProjects/OtherProjectsSection";
import ProjectsArea from "./ProjectsDisplayCards/ProjectsDisplayCards";




export default function ProjectsSection() {

    return (
        <>
        <GradientArea id="Projects">
        <ProjectsArea />
        <ProjectsBreackLine />
        <OtherProjectsSection />
        </GradientArea>
        
        </>
    )
}
