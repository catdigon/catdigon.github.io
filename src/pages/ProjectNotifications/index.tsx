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
                    className="w-full max-w-[600px] h-auto mx-auto " />


                <ProjectSection projectId={projectID}
                    title={"Objective"}>
                    <p>To investigate whether desktop notifications disrupt focus, and whether visual or auditory alerts have a greater impact on attention.</p>
                </ProjectSection>

                <ProjectSection projectId={projectID}
                    title={"Methodology"}>
                    <p>The study folowwed an experiemntal design combining eye-tracking and biometric data. Thirty-five participants completed reading tasks under three conditions. </p>
                    <p>Metrics such as eye fixation, blink rate, hear rate, galvanic skin response, and pupil dilation were analyzed to assess attentional and cognitive responses.</p>
                </ProjectSection>

                <ProjectSection projectId={projectID}
                    title={"My Role"}>
                    <p>I was responsible for participant setup, data acquisition, and analysis. This included operating the Gazepoint eye-tracking system, managing biometric sensors and calibration, and ensuring protocol consistency across sessions. I also analyzed fixations patterns using predefined Areas of Interest (AOIs) and processed gaze data using custom JavaScript scripts.</p>
                    <p>Metrics such as eye fixation, blink rate, hear rate, galvanic skin response, and pupil dilation were analyzed to assess attentional and cognitive responses.</p>
                    <ImageDisplay
                        imageDesktop={"/projects/notifications/tests.webp"}
                        className="w-full max-w-[700px] h-auto mx-auto " />
                </ProjectSection>

                <ProjectSection projectId={projectID}
                    title={"Results & Insights"}>
                        <p>Resulst suggest that notifications do not always cause immediate visual distraction, but often trigger delayed cognitive and physiological responses. In many cases, participantes did not fixate directly on notifications, yet their attentionm shifted afterward, indicating subtle but persistent disruptions of sustained attention. Combined visual and auditory notifications showed a stronger interference patterns.</p>
                        <p>However, these effects were not strong enough to classify both types of notifications as significantly disruptive for short reading tasks. Future studies could focus on longer blocks ans tasks requiring higher sustained attention to better capture potential disruption.</p>
                        <p>This project was valuble for understanding how suble desing elements can affect attention over time and reinforced the importance of using quantitative methods to inform design decisions, particularly in digital enviroments where attention is easily fragmented.</p>
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

