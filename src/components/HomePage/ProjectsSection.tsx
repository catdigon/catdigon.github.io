import { ProjectsCardsText } from "../../data/projectsDesign";
import ProjectsArea from "../Card/CardGridLayout";
import GradientArea from "../GradientArea/GradientArea";
import ProjectsBreackLine from "./BreakLine/ProjectsBreak";
import OtherProjectsSection from "./OtherProjects/OtherProjectsSection";




export default function ProjectsSection() {

    return (
        <>
            <GradientArea id="Projects">
                <ProjectsArea
                    title={"Projects"}
                    data={ProjectsCardsText} showText={true}
                />
                <ProjectsBreackLine />
                <OtherProjectsSection />
            </GradientArea>

        </>
    )
}
