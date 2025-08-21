import { ProjectsCardsText } from "../../data/projectsDesign";
import ProjectsArea from "../Card/CardGridLayout";
import CardLayout from "../Card/CardLayout";
import GradientArea from "../GradientArea/GradientArea";
import ProjectsBreackLine from "./BreakLine/ProjectsBreak";
import OtherProjectsSection from "./OtherProjects/OtherProjectsSection";




export default function ProjectsSection() {

    return (
        <>
            <GradientArea id="Projects">
                <ProjectsArea>
                    <h1>Projects</h1>
                    <CardLayout
                        data={ProjectsCardsText}
                        showText={true}
                        showLabel={false}
                    />
                </ProjectsArea>
                <ProjectsBreackLine />
                <OtherProjectsSection />
            </GradientArea>

        </>
    )
}
