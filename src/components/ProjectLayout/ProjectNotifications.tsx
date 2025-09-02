import { Card, Col, Row } from "react-bootstrap";
import GradientArea from "../GradientArea/GradientArea";
import Header from "../Header/Header";
import { StyledProgressStickyArea } from "./ProgressDisplay/ProgressDisplay.styled";
import ImageHeader from "./ImageHeader/ImageHeader";
import ProjectsBreackLine from "../HomePage/BreakLine/ProjectsBreak";
import CardLayout from "../Card/CardLayout";
import { ProjectsCardsText } from "../../data/projectsDesign";
import ProjectIntroCard from "./Project/ProjectIntro/ProjectIntroCard";
import ProjectCard from "./Project/ProjectCard/ProjectCard";
import CardListSimple from "../List/ListSimple";
import ImageDisplaySimple from "../ImageDisplay/ImageComponent/ImageComponentDefault";
import { useEffect, useState } from "react";
import { MotionValue } from "motion";
import ProjectSection from "./ProjectSections/ProjectSection";
import LinkProgressBar from "../ProgressBar/LinkProgressBar";
import ProjectSubCard from "./Project/ProjectCard/ProjectSubCard";

interface ProjectProps{
    projectID: string;
}
export default function ProjectCinematecaLayout({projectID} : ProjectProps) {

       const filteredProjects = ProjectsCardsText?.filter(
        (project) => project.id !== projectID
    ) || [];

    //ScrollSpy
    const [activeID, setActiveID] = useState<string | null>(null);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveID(entry.target.id);
                    }
                });
            },
            { threshold: 0.2 }
        );
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const sectionIds = [
        "Summary",
        "Study Design",
        "Experiment",
        "Data Analysis",
        "Conclusion",
    ]

    const [projectSectionSummaryProgress, setprojectSectionSummaryProgress] = useState<MotionValue<number> | undefined>();
    const [projectStudyProgress, setprojectStudyProgress] = useState<MotionValue<number> | undefined>();
    const [projectExperimentProgress, setprojectExperimentProgress] = useState<MotionValue<number> | undefined>();
    const [projectAnalysisProgress, setprojectAnalysisProgress] = useState<MotionValue<number> | undefined>();
    const [projectSectionConclusionProgress, setprojectSectionConclusionProgress] = useState<MotionValue<number> | undefined>();

    return (
        <>
            <Header
                title={"Impact of Notifications"}
                text={"An academic study on how desktop notifications disrupt attention and reading performance, using an experimental design with eye-tracking and biometric sensor to evaluate attentional disruptions and effects."}
            >
                <ImageHeader 
                image={"/projects/notifications/not-pc.webp"} 
                alt={""} />
            </Header>

            <div style={{ marginTop: -100 }}>
                <GradientArea>
                    <Row style={{ margin: "6rem 0" }}>
                        <Col md={3}>
                            <StyledProgressStickyArea>
                                <LinkProgressBar
                                    projectProgresses={[
                                        projectSectionSummaryProgress,
                                        projectStudyProgress,
                                        projectExperimentProgress,
                                        projectAnalysisProgress,
                                        projectSectionConclusionProgress
                                    ]}
                                    ids={sectionIds}
                                    state={activeID || ""} />
                            </StyledProgressStickyArea>
                        </Col>
                        <Col md={8}>
                            <ProjectSection id={"Summary"}
                                setProjectSectionProgress={setprojectSectionSummaryProgress}
                            >
                                <ProjectIntroCard projectId={projectID}
                                    description={[
                                        "This group research project explored how desktop notifications affect attention during digital reading tasks. Together with four colleagues, we investigated the cognitive and physiological impact of visual and auditory interruptions on screen-based reading.",
                                        "Using Gazepoint eye-tracking and biometric sensors, we monitored 35 participants under three conditions: no notifications, visual-only, and combined visual-auditory notifications. Metrcis such as eye fixations, blinking rate, hear rate, galvanic skin response (GSR), and pupil dilation were traked and analysed to assess attentional disruption.",
                                        "The results revelead that notifications may not always cause an immediate shift in visual focus immediatly, they do trigger subtle cognitive and physiological responsed that interfere with sustained attention over time.",
                                    ]}
                                />

                                <ProjectCard
                                    title={"The Objective"}
                                    description={[
                                        "Our goal was simples: to find it notifications disrupt reading focus, and whether visual or auditory alerts are more distracting.",
                                    ]} children={undefined}  >
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Study Design"}
                                setProjectSectionProgress={setprojectStudyProgress}
                            >
                                <ProjectCard
                                    title={"Study Design"}
                                    description={[
                                        "The project began with a thorough literature review and the formulation of our central research question: How do visual and auditory desktop notifications affect reading focus? ",
                                        "From this foudation, we formulated hypotheses and selected key eye-tracking and biometric metrics to capture cognitive and physiological responses during reading:",
                                    ]}
                                >
                                    <CardListSimple list={[
                                        "Learn more about the institution and its mission",
                                        "Find upcoming screenings and events",
                                        "Explore the archive catalogue and discover available works",
                                        "Read news, articles, or featueed content produced by the Cinemateca",
                                        "Access contact and  location information"
                                    ]} />

                                    <Card.Text>
                                        To support precise data colletion, we also defined Areas of Interest (AOIs) on the screen, including text blocks, notification zones, and peripheral regions. This allowed us to track where users focused their attention and for how long, helping to uncover sublte sifts caused by the appearance of notifications.
                                    </Card.Text>
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Experiment"}
                                setProjectSectionProgress={setprojectExperimentProgress}
                            >
                                <ProjectCard
                                    title={"Protocols & Experiment"}
                                    description={[
                                        "A full experimental protocol was designed, incorporating three test conditions:"
                                    ]}
                                >
                                    <CardListSimple list={[
                                        "No notifications (control)",
                                        "Visual notification only",
                                        "Visual + auditory notifications",
                                    ]} />
                                    <ImageDisplaySimple
                                        imageSrc={"/projects/notifications/protocols.webp"}
                                        imageAlt={"Protocols design"}
                                        isLink={false} />

                                    <Card.Text>
                                        Each session  began with sensor calibation, followed by baseline measurements on a control screen. Participants were then instructed to read short text aloud while being explosed to the different conditions. This allowed fot the colletion of both cognitive (via eye tracking) and physiologival (via biometric sensors) data during active reading.
                                    </Card.Text>

                                    <Card.Text>
                                        At the end, participants completed a demographic and post-task questionnaire, which provided qualitative feedback on their experience and perceived cognitive effort.
                                    </Card.Text>

                                    <ProjectSubCard
                                        subtitle={"Team Roles & Data Collection"}
                                        description={[
                                            "The research process was collaborative, with each team member responsivle for key aspects of the study.",
                                            "My focus was on data acquisition and participant setup, ensuring the integrity of the experimental process. Specifically, I:",
                                        ]}
                                    >
                                        <CardListSimple list={[
                                            "Operated the Gazepoint eye-tracking system during each sessions",
                                            "Ensure accurate and consistent recording of biometric data",
                                            "Oversaw sensor placement and screen calibration to ensure reliabel readings",
                                            "Managed task execution and timing, making sure each test condition followed the protocol precisely",
                                        ]} />

                                        <ImageDisplaySimple
                                            imageSrc={"/projects/notifications/tests.webp"}
                                            imageAlt={"Performing Tests"}
                                            isLink={false} />
                                    </ProjectSubCard>
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Data Analysis"}
                                setProjectSectionProgress={setprojectAnalysisProgress}
                            >
                                <ProjectCard
                                    title={"Data Analysis"}
                                    description={[
                                        "I was also responsible for analysing of demographic data and fixation patterns within predefined Areas of Interest (AOIs). As part of this process, I:",
                                    ]}
                                >
                                    <CardListSimple list={[
                                        "Defined AOIs using Gazepoint software, focusing on text blocks, notifications zones, and peripheral areas",
                                        "Used custom JavaScript scripts to extract and calculate fixations count and duration across screens",
                                        "Compared data to understand which areas attracted drew the most attention, whether notifications were directly fixated, and how gaze shifted across the screen",
                                    ]} />
                                    <ImageDisplaySimple
                                        imageSrc={"/projects/notifications/gazepoint.webp"}
                                        imageAlt={"Defining AOI's on GazePoint software"}
                                        isLink={false} />

                                    <Card.Text>
                                        Throught the process, I noticed that notifications were rarely fixated immediately. Instead, their AOIs were often visited after a delay: suggesting a lingering attentional disruption. Interestingly, in several cases, participants never looked directly at the notifications itself, yet the post-notification areas received attention afterward. This can indicate a subtle cognitive reaction, even in the absence of direct visual engagement.
                                    </Card.Text>
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Conclusion"}
                                setProjectSectionProgress={setprojectSectionConclusionProgress}
                            >
                                <ProjectCard
                                    title={"Outcome"}
                                    description={[
                                        "The research concluded that digital notifications, particularly those combining audio and visual elements, can subtly disrupt reading focus. While most results did not reach statistical significance, the patterns observed revealed meaningfull trend worth further investigations. Variations across conditions suggest that even minimal interruptions may affect sustained attention, reinforcing the need for future studies with more refined protocols and broader participant samples.",
                                        "The dingings were compiled intro a structured academic report, collaborativeky written using Overleaf (LaTeX), ensuring clarity, consistency, and rigorous presentation of both data and critical analysis.",
                                    ]}
                                    children={undefined} />


                                <ProjectCard
                                    title={"Reflection & Learnings"}
                                    description={[
                                        "Coming from a background in cinema and qualitative research, this was my first time applying empirical, data-driven methods. Working with biometric and analytical frameworks expanded my understanding of how design can influence user attention and reduce cognitive overload.",
                                        "One key insight was realizing that digital stimuli don't always trigger immediate or visible reactions: yet they can leave subtle, lasting effects on users' cognitive states. Even minor notifications can  impact, revealing how delicate and easily fragmented digital attention can be.",
                                        "This project sparked an interest in exploring the intersection of design, attention, and emotion in digital environments. It also showed me how quantitative methods can strengthen creative intuiton and help build more thoughtful, user-centered interfaces.",
                                        ]}
                                    children={undefined} />
                            </ProjectSection>
                        </Col>
                    </Row>
                    <ProjectsBreackLine />
                    <div style={{ marginTop: 40 }}>
                        <h3 style={{justifySelf: "center"}}>More case studies</h3>
                        <CardLayout
                            data={filteredProjects}
                            showText={false}
                            showLabel={false} />
                    </div>

                </GradientArea>
            </div>

        </>
    )
}

