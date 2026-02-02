import ProjectsBreackLine from "../../components/BreakLine/ProjectsBreak";
import CardItem from "../../components/Card/Card";
import HeroProject from "../../components/Hero/HeroProject";
import ImageDisplay from "../../components/ImageDisplay/ImageDisplay";
import ImageHero from "../../components/ProjectLayout/ImageHero/ImageHero";
import ProjectIntroCard from "../../components/ProjectLayout/Project/ProjectIntroCard";
import ProjectSection from "../../components/ProjectLayout/Project/ProjectSection";
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
            <HeroProject
                id=""
                color="#F8C200"
                title={"Impact of Notifications"}
                text={"This academic study explored how desktop notifications disrupt attention and reading performance. The experiment combined eye-tracking and biometric sensors to evaluate subtle cognitive and physiological effects."}
                text2="UX Research, Experimental Design, Data Analysis"
            >
                <ImageHero
                    image={"/projects/notifications/not-pc.webp"}
                    alt={"Protocol with highlighted AIOs showing notifications"}
                    imageMobile={"/projects/notifications/not-pc-mobile.webp"} />
            </HeroProject>

            <SectionArea marginTop="5rem" boxShadow={false} className="gap-8 lg:px-32 2xl:px-60">

                <ProjectIntroCard projectId={projectID}
                />

                <ImageDisplay
                    imageDesktop={"/projects/notifications/mock.png"}
                    imageMobile={"/projects/notifications/mock-mobile.webp"}
                    alt="Gazepoint program interface showing the definition of Areas of Interest (AIOs)"
                    className="w-full max-w-150 h-auto mx-auto " />


                <ProjectSection projectId={projectID}
                    title={"Objective"}>
                    <p>Investigate how desktop notifications affect focus and determine whether visual or auditory alerts have a greater impact on attention.</p>
                </ProjectSection>

                <ProjectSection projectId={projectID}
                    title={"Methodology"}>
                    <p>Conducted an experimental study with 35 participants, combining eye-tracking and biometric data to measure attentional and cognitive responses under three conditions. </p>
                    <p>Metrics such as eye fixation, blink rate, heart rate, galvanic skin response, and pupil dilation were analyzed to assess the suble effects of notifications on focus.</p>
                </ProjectSection>

                <ProjectSection projectId={projectID}
                    title={"My Role"}>
                    <p>I was responsible for participant setup, data acquisition, and analysis. I operate the GazePoint eye-tracking system, managed biometric sensors and calibration, and ensured protocol consistency across sessions. I also analyzed fixation patterns using predefined Areas of Interest (AOIs) and processed gaze data using custom JavaScript scripts.</p>

                    <ImageDisplay
                        imageDesktop={"/projects/notifications/tests.webp"}
                        imageMobile={"/projects/notifications/tests-mobile.webp"}
                        alt="Me conducting a user test, operating the GazePoint eye-tracking and biometric devices"
                        className="w-full max-w-175 h-auto mx-auto " />
                </ProjectSection>

                <ProjectSection projectId={projectID}
                    title={"Results & Insights"}>
                        <p>Results suggest that desktop notifications do not always cause immediate visual distraction, but they can trigger delayed cognitive and physiological responses. Participants rarely fixated directly on notifications, yet their attention often shifted afterward, indicating subtle but persistent disruptions of sustained attention. Combined visual and auditory notifications caused the strongest interference patterns.</p>
                        <p>Although these effects were not strong enough to classify notifications as significantly disruptive for short reading tasks, they reveal nuanced ways in which user focus can be affected. Future studies could investigate longer sessions and tasks that require higher sustained attention to better capture potential disruption.</p>
                        <p>This project was valuable for understanding how subtle design elements can influence attention over time. Insights from this research informed UX design decisions aimed to minimize distraction in digital interfaces. The work also demonstrates the importance of quantitative, evidence-based approaches in delivering user-centered design.</p>
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

