import ImageHero from "../../components/ProjectLayout/ImageHero/ImageHero";
import ProjectIntroCard from "../../components/ProjectLayout/Project/ProjectIntroCard";
import { ProjectsCardsText } from "../../data/projectsDesign";
import ProjectsBreackLine from "../../components/BreakLine/ProjectsBreak";
import HeroProject from "../../components/Hero/HeroProject";
import SectionArea from "../../components/SectionsAreas/SectionArea";
import ImageDisplay from "../../components/ImageDisplay/ImageDisplay";
import ProjectSection from "../../components/ProjectLayout/Project/ProjectSection";
import CardItem from "../../components/Card/Card";

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
                text={"Creating the institutional website from scratch as a clear, functional, and accessible digital experience."}
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
                    imageMobile={"/projects/cinemateca/mock-agenda-mobile.webp"}
                    alt="Laptop displaying a website landing page"
                    className="w-full max-w-200 h-auto mx-auto " />

                <ProjectSection projectId={projectID}
                    title={"Challenges & Expectations"}>

                    <ol className="list-decimal list-inside space-y-4 marker:font-bold">
                        <li >
                            <span className="font-bold">Clear Content Flows: </span>
                            Organize extensive content into logical flows for each section, helping users find information with minimal effort.
                        </li>
                        <li>
                            <span className="font-bold">Intuitive Navigation: </span>
                            Keep navigation visible and consistent to guide users, reduce scrolling, and make key information immediately accessible.
                        </li>
                        <li>
                            <span className="font-bold">Modern Visual Communication: </span>
                            Respect Cinemateca's identity while updating its visual presentation to contemporary standards.
                        </li>
                    </ol>
                </ProjectSection>

                <ImageDisplay
                    imageDesktop={"/projects/cinemateca/wireframes.png"}
                    imageMobile={"/projects/cinemateca/wireframes-mobile.webp"}
                    alt="Website pages displayed in a tiled layout, showcasing the site design"
                    className="w-full h-auto mx-auto rounded-sm" />

                <ProjectSection projectId={projectID}
                    title={"My Approach"}>

                    <div>
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Research & Inspiration</h4>
                        <ul className="list-disc list-inside">
                            <li>Reviewed international cinematecas, film festivals' websites, and archival materials</li>
                            <li>Defined content hierarchy, navigation patterns, and visual guidelines</li>
                        </ul>
                    </div>

                    <div className="pt-1">
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Design & Prototyping</h4>
                        <ul className="list-disc list-inside">
                            <li>Created wireframes and high-fidelity prototypes</li>
                            <li>Iterated on layouts, components, and interactions to improve usability, clarity, and user engagement</li>
                        </ul>
                    </div>

                    <div className="pt-1">
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Development & Implementation</h4>
                        <ul className="list-disc list-inside">
                            <li>Translated the final design into a responsive website using HTML, CSS, Bootstrap, and JavaScript</li>
                            <li>Implemented a Git-based workflow for version control</li>
                            <li>Ensured site performance and responsiveness, including loading speed and image scaling</li>
                        </ul>
                    </div>
                </ProjectSection>

                <ImageDisplay
                    imageDesktop={"/projects/cinemateca/mock-devices.png"}
                    imageMobile={"/projects/cinemateca/mock-devices-mobile.webp"}
                    alt="Tablet and two smartphones arranged together, each showing different sections of the website: archive access, contact form, and contacts page"
                    className="w-full max-w-200 h-auto mx-auto" />

                <ProjectSection projectId={projectID}
                    title={"Outcomes"}>
                    <div className="space-y-4 w-full">
                        <p>This original design delivers a modern and user-centered experience, allowing users to explore the film archive, read news, and discover upcoming screenings effortlessly.  By organizing complex content into clear flows and keeping navigation accessible at all times, users can find information quickly and confidently.</p>
                        <p>The visual language gives the Cinemateca a fresh and contemporary identity, creating an engaging experience that connects both new and existing audiences.</p>
                    </div>
                </ProjectSection>


                <ProjectsBreackLine />

                <h2>More projects</h2>

                <ul className="grid grid-cols-1 gap-4 transition-all duration-300">
                    {filteredProjects.map((project, idx) => (
                        <li
                            key={idx}
                        >
                            <CardItem
                                card={project}
                                showTask
                                showBadgeList
                            />
                        </li>
                    ))}
                </ul>

            </SectionArea>
        </>
    )
}