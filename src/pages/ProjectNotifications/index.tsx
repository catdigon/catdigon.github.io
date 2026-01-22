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

export default function ProjectNotifications({ projectID }: ProjectProps) {

    const filteredProjects = ProjectsCardsText?.filter(
        (project) => project.id !== projectID
    ) || [];


    return (
        <>
            <Hero
                title={"Impact of Notifications"}
                text={"This academic study explored how desktop notifications disrupt attention and reading performance. The experiment combined eye-tracking and biometric sensors to evaluate subtle cognitive and physiological effects."}
            >
                <ImageHero
                    image={"/projects/notifications/not-pc.webp"}
                    alt={"Protocol with highlighted AIOs showing notifications"}
                    imageMobile={"/projects/notifications/not-pc-mobile.webp"} />
            </Hero>

            <div style={{ marginTop: -100 }}>
                <SectionArea>
                    <div style={{ margin: "6rem 0" }}>

                        <div >

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

                </SectionArea>
            </div>

        </>
    )
}

