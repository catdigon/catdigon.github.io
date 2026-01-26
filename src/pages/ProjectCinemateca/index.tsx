import ImageHero from "../../components/ProjectLayout/ImageHero/ImageHero";
import ProjectIntroCard from "../../components/ProjectLayout/Project/ProjectIntroCard";
import { ProjectsCardsText } from "../../data/projectsDesign";
import ProjectsBreackLine from "../../components/BreakLine/ProjectsBreak";
import CardLayout from "../../components/Card/CardLayout";
import HeroProject from "../../components/Hero/HeroProject";
import SectionArea from "../../components/SectionsAreas/SectionArea";
import ImageDisplay from "../../components/ImageDisplay/ImageDisplay";
import ProjectSection from "../../components/ProjectLayout/Project/ProjectSection";

interface ProjectProps {
    projectID: string;
}

export default function ProjectCinemateca({ projectID }: ProjectProps) {

    const filteredProjects = ProjectsCardsText?.filter(
        (project) => project.id !== projectID
    ) || [];

    return (
        <>
            <HeroProject
                id=""
                color="#F8C200"
                title={"Cinemateca"}
                text={"Creating the institutional website from scratch into a clear, functional, and accessible digital experience."}
                text2="UI Design, Prototyping, Front-end"
            >
                <ImageHero
                    image={"/projects/cinemateca/cinemateca-broswer.webp"}
                    alt={"Homepage Mockup"}
                    imageMobile={"/projects/cinemateca/cinemateca-broswer-mobile.webp"} />

            </HeroProject>

            <SectionArea marginTop="5rem" boxShadow={false} className="gap-8 lg:px-32 2xl:px-60">

                <ProjectIntroCard projectId={projectID}
                />

                <ImageDisplay
                    imageDesktop={"/projects/cinemateca/mock-agenda.png"}
                    className="w-full max-w-[800px] h-auto mx-auto " />

                <ProjectSection projectId={projectID}
                    title={"Challenges & Expectations"}>

                    <ol className="my-4 list-decimal list-inside space-y-4 marker:font-bold">
                        <li >
                            <span className="font-bold">Clear Content Flows: </span>
                            Organize extensive content into logical flows for each section, helping users find information with minimal effort.
                        </li>
                        <li>
                            <span className="font-bold">Intuituive Navigation: </span>
                            Keep navigation visible and consistent to guide users, reduce scrolling, and make key information immediately accessible.
                        </li>
                        <li>
                            <span className="font-bold">Modern Visual Comunication: </span>
                            Respect Cinemateca's identity while updating its visual presentation to contemporary standard.
                        </li>
                    </ol>
                </ProjectSection>

                <ImageDisplay
                    imageDesktop={"/projects/cinemateca/wireframes.png"}
                    className="w-full h-auto mx-auto rounded-sm"/>

                <ProjectSection projectId={projectID}
                    title={"My Approach"}>

                    <div className="pt-4">
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Research & Inspiration</h4>
                        <ul className="list-disc list-inside">
                            <li>Reviewed international cinematecas, film festivals websites, and archival materials</li>
                            <li>Defined content hierarchy, navigation patterns, and visual guidelines</li>
                        </ul>
                    </div>

                    <div className="pt-1">
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Design & Prototyping</h4>
                        <ul className="list-disc list-inside">
                            <li>Created wireframes and high-fidelity prototypes</li>
                            <li>Iterated on layouts, components, and interactions to improve usability, clarity, an user engagement</li>
                        </ul>
                    </div>

                    <div className="pt-1">
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Development & Implementation</h4>
                        <ul className="list-disc list-inside">
                            <li>Translated the final design into a responsive website using HTML, CSS, Bootstrap, and JavaScript</li>
                            <li>Implemented a Git-based workflow for version control</li>
                            <li>Ensure site perfomance and responsiveness, including loading speed and image scaling</li>
                        </ul>
                    </div>
                </ProjectSection>

                <ImageDisplay
                    imageDesktop={"/projects/cinemateca/mock-devices.png"}
                    className="w-full max-w-[800px] h-auto mx-auto" />

                <ProjectSection projectId={projectID}
                    title={"Results"}>
                    <div className="space-y-4 w-full">
                        <p>The final result delivers a modern, and user-centered experience, built to be a coherent digital product. By organizing complex content into clear flows and keepping navigation accessible all times, users can quickly explore and access to film archive, read news and discover screenings.</p>
                        <p>More than respecting the Cinemateca's identity, it gives it a fresh and contemporary visual language.</p>
                    </div>

                    <iframe
                        title="Cinemateca Prototype in Figma"
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "16px"}}
                        className="w-full max-w-[800px] h-[60vh] mx-auto"
                        src="https://embed.figma.com/proto/yzkj3eD8ZRNSNn8b7BOBle/Cinemateca-Final--Prototipo-?page-id=6%3A164&node-id=12-403&viewport=-50%2C359%2C0.31&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=12%3A403&embed-host=share"
                        allowFullScreen>
                    </iframe>

                </ProjectSection>
            </SectionArea>

            <ProjectsBreackLine />
            <div style={{ marginTop: 40 }}>
                <h3 style={{ justifySelf: "center", fontWeight: 600 }}>More projects</h3>
                <CardLayout
                    data={filteredProjects}
                    showText={false}
                    showLabel={false} />
            </div>

        </>
    )
}