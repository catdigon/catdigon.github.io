import ProjectsBreackLine from "../../components/BreakLine/ProjectsBreak";
import CardLayout from "../../components/Card/CardLayout";
import Hero from "../../components/Hero/Hero";
import ImageHero from "../../components/ProjectLayout/ImageHero/ImageHero";
import ProjectIntroCard from "../../components/ProjectLayout/Project/ProjectIntroCard";
import SectionArea from "../../components/SectionsAreas/SectionArea";
import { ProjectsCardsText } from "../../data/projectsDesign";

interface ProjectProps {
    projectID: string;
}

export default function ProjectPortalFelix({ projectID }: ProjectProps) {

    const filteredProjects = ProjectsCardsText?.filter(
        (project) => project.id !== projectID
    ) || [];

    return (
        <>
            <Hero
                title={"Portal Félix"}
                text={"This project reimagines the platform through a user-centered design process. From heuristic evaluation to high-fidelity prototypes, the goal was to improve navigation, accessibility, and research workflows."}
            >
                <ImageHero
                    image={"/projects/portal/portal.webp"}
                    alt={"Portal Felix Mockup"}
                    imageMobile={"/projects/portal/portal.webp"} />
            </Hero>

            <div style={{ marginTop: -100 }}>
                <SectionArea>
                    <div style={{ margin: "6rem 0" }}>

                        <div>

                            <ProjectIntroCard projectId={projectID}
                                
                            />



      </div>

                    
            </div>
            <ProjectsBreackLine />
            <div style={{ marginTop: 40 }}>
                <h3 style={{ justifySelf: "center", fontWeight: 600 }}>More projects</h3>
                <CardLayout
                    data={filteredProjects}
                    showText={false}
                    showLabel={false} />
            </div>

        </SectionArea >
            </div >

        </>
    )
}

