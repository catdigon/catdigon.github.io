import ProjectsBreackLine from "./BreakLine/ProjectsBreak";
import OtherProjectsSection from "./OtherProjects/OtherProjectsSection";
import ProjectsArea from "./ProjectsDisplayCards/ProjectsDisplayCards";
import ProjectsAreaGradientEnd from "./ProjectsGradient/ProjectsAreaEndGradient";
import ProjectsAreaGradientStart from "./ProjectsGradient/ProjectsAreaStartGradient";



export default function ProjectsSection() {

    return (
        <>
        <ProjectsAreaGradientStart/>
        <ProjectsArea />
        <ProjectsBreackLine />
        <OtherProjectsSection />
        <ProjectsAreaGradientEnd />
        
        </>
    )
}
