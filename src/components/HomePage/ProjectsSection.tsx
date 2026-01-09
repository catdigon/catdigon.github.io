import { ProjectsCardsText } from "../../data/projectsDesign";
import CardLayout from "../Card/CardLayout";
import ProjectsBreackLine from "../BreakLine/ProjectsBreak";
import OtherProjectsSection from "./OtherProjects/OtherProjectsSection";
import SectionArea from "../SectionsAreas/SectionArea";


export default function ProjectsSection() {

    return (
        <>
            <SectionArea id="Projects" color="#F8C200" zIndex={10}>
                    <span>
                    <h2>Projects</h2>
                    </span>
                    <CardLayout
                        data={ProjectsCardsText}
                        showText={true}
                        showLabel={false}
                        showBadgeList={true}/>
                </SectionArea>

            <SectionArea id="OtherProjects" color="#FF98BD" zIndex={20}>
                <ProjectsBreackLine />
                <OtherProjectsSection />
            </SectionArea>
        </>
    )
}
