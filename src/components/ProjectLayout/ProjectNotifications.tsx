import { Col, Row } from "react-bootstrap";
import GradientArea from "../GradientArea/GradientArea";
import Header from "../Header/Header";
import { StyledProgressStickyArea } from "./ProgressDisplay/ProgressDisplay.styled";
import ImageHeader from "./ImageHeader/ImageHeader";
import ProjectsBreackLine from "../BreakLine/ProjectsBreak";
import CardLayout from "../Card/CardLayout";
import { ProjectsCardsText } from "../../data/projectsDesign";
import ProjectIntroCard from "./Project/ProjectIntro/ProjectIntroCard";
import ProjectCard from "./Project/ProjectCard/ProjectCard";
import CardListSimple from "../List/ListSimple";
import ImageDisplaySimple from "../ImageDisplay/ImageComponent/ImageComponentDefault";
import ProjectSubCard from "./Project/ProjectCard/ProjectSubCard";
import { useSectionProgress } from "./ProgressDisplay/ProgressDisplayLogic";

interface ProjectProps {
    projectID: string;
}
export default function ProjectCinematecaLayout({ projectID }: ProjectProps) {

    const filteredProjects = ProjectsCardsText?.filter(
        (project) => project.id !== projectID
    ) || [];

    const sectionIds = [
        "Summary",
        "Study & Experiment",
        "Data Analysis",
        "Conclusion",
    ]

    const { sectionRefs, progress, activeSection } = useSectionProgress(sectionIds);

    return (
        <>
            <Header
                title={"Impact of Notifications"}
                text={"An academic study exploring how desktop notifications disrupt attention and reading performance. The experiment combined eye-tracking and biometric sensor to evaluate subtle cognitive and physiological effects"}
            >
                <ImageHeader
                    image={"/projects/notifications/not-pc.webp"}
                    alt={"Protocol with highlighted AIOs showing notifications"} 
                    imageMobile={"/projects/notifications/not-pc-mobile.webp"} />
            </Header>

            <div style={{ marginTop: -100 }}>
                <GradientArea>
                    <Row style={{ margin: "6rem 0" }}>
                        <Col md={3} className="d-none d-md-block">
                            <StyledProgressStickyArea>
                                {sectionIds.map((id) => {
                                    const pct = Math.round((progress[id] || 0) * 100);
                                    const isActive = activeSection === id;
                                    return (
                                        <div key={id} style={{ marginBottom: "0.6rem" }}>
                                            <a
                                                key={id}
                                                href={`#${id}`}
                                                style={{
                                                    fontWeight: isActive ? 600 : 400,
                                                }}
                                            >
                                                {id}
                                                <div className="progress-bar"
                                                    style={{
                                                        height: isActive ? "8px" : "4px",
                                                        width: `${pct}%`,
                                                    }}>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })}
                            </StyledProgressStickyArea>
                        </Col>
                        <Col md={8}>
                            <section id={"Summary"}
                                ref={el => { sectionRefs.current["Summary"] = el }}>
                                <ProjectIntroCard projectId={projectID}
                                    description={[
                                        "This project explored how desktop notifications influence attention during digital reading tasks. Together with four colleagues, we monitored 35 participants using eye-tracking and biometrics sensors across three conditions: no notifications, visual-only, and visual + auditory alerts.",
                                        "Findings showed that notifications don't always grab immediate attention, but they can subtly interfere with sustained focus over time, highlighting how even small design elements influence impact user attention and experience.",
                                    ]}
                                />

                                <ProjectCard
                                    title={"The Objective"}
                                    description={[
                                        "Investigate whether visual and auditory desktop notifications disrupt reading focus and how they affect sustained attention.",
                                    ]} children={undefined}  >
                                </ProjectCard>
                            </section>

                            <section id={"Study & Experiment"}
                                ref={el => { sectionRefs.current["Study & Experiment"] = el }}>
                                <ProjectCard
                                    title={"Study Design"}
                                    description={[
                                        <>
                                            We started by reviweing literature on attention and digital interruptions to define the research question: <em> How do visual and auditory desktop notifications affect reading focus? </em>
                                        </>,
                                        "From this, we formulated hypotheses and selected key metrics (eye fixations, blinking rate, heart rate, GSR, pupil dilation) to capture cognitive and physiological responses.",
                                    ]} children={undefined} >
                                </ProjectCard>

                                <ProjectCard
                                    title={"Protocols & Experiment"}
                                    description={[
                                        ""
                                    ]}
                                >
                                    <ProjectSubCard
                                        subtitle={"Conditions"}
                                        description={[
                                            "We design a full experimental protocol with three test conditions:"
                                        ]} >
                                        <CardListSimple list={[
                                            "No notifications (control)",
                                            "Visual notification only",
                                            "Visual + auditory notifications",
                                        ]} />
                                        <ImageDisplaySimple
                                            imageSrc={"/projects/notifications/protocols.webp"}
                                            imageAlt={"Protocols design"}
                                            isLink={false}
                                            imageMobile={"/projects/notifications/protocols-mobile.webp"} 
                                            imageLink={"/projects/notifications/protocols.webp"} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"Procedure"}
                                        description={[
                                            "Each session followed the same sequence to ensure consistent data collection:"
                                        ]} >
                                        <CardListSimple list={[
                                            "Sensor calibration and baseline measurements",
                                            "Participants read short texts aloud under each condition",
                                            "Collection of cognitive (eye-tracking) and physiological (biometric sensor) data were recorded",
                                            "Participants completed a post-task questionnaire for qualitative feedback and demographic data",
                                        ]} />
                                    </ProjectSubCard>


                                    <ProjectSubCard
                                        subtitle={"Team Roles"}
                                        description={[
                                            "The study was collaborative, with each team member responsivle for key aspects of the experiment. My role focused on data acquisition and participant setup, ensurign reliable and consistent execution:",
                                        ]}
                                    >
                                        <CardListSimple list={[
                                            "Operated the Gazepoint eye-tracking system during all sessions",
                                            "Ensured accurate recording of biometric data",
                                            "Managed sensor placement and screen calibration",
                                            "Controlled task timing and transitions between test conditions",
                                        ]} />
                                        <ImageDisplaySimple
                                            imageSrc={"/projects/notifications/tests.webp"}
                                            imageAlt={"Running the eye-tracking and biometric test sension"}
                                            isLink={false}
                                            imageMobile={"/projects/notifications/tests-mobile.webp"} 
                                            imageLink={"/projects/notifications/tests.webp"} />
                                    </ProjectSubCard>

                                </ProjectCard>
                            </section>

                            <section id={"Data Analysis"}
                                ref={el => { sectionRefs.current["Data Analysis"] = el }}>
                                <ProjectCard
                                    title={"Data Analysis"}
                                    description={[
                                        "I also analysing of demographic data and eye-fixation patterns within predefined Areas of Interest (AOIs), focusing on text blocks, notification zones, and pheripheral areas. This allowed us to understand how notifications influenced attention and reading behavior. My work included:",
                                    ]}
                                >
                                    <CardListSimple
                                        list={[
                                            "Defining AOIs and extracted data using Gazepoint software",
                                            "Using custom JavaScript scripts to calculate fixations count and durations",
                                            "Comparing data across conditions to detect attention shifts and disruptions",
                                        ]} />
                                    <ImageDisplaySimple
                                        imageSrc={"/projects/notifications/gazepoint.webp"}
                                        imageAlt={"Defining AOI's on GazePoint software"}
                                        isLink={false}
                                        imageMobile={"/projects/notifications/gazepoint-mobile.webp"} 
                                        imageLink={"/projects/notifications/gazepoint.webp"} />

                                    <ProjectSubCard
                                        subtitle={"Key insights"}
                                        description={[]} >
                                        <CardListSimple list={[
                                            "Notifications were rarely fixated immediately",
                                            "Attention shifts often occured after notifications, even without direct visual engagement",
                                            "Conbined visual + auditory alerts caused subtle, lingering disruptions",
                                            "Even minor interruptions can affect sustained attention over time"
                                        ]} />
                                    </ProjectSubCard>
                                </ProjectCard>
                            </section>

                            <section id={"Conclusion"}
                                ref={el => { sectionRefs.current["Conclusion"] = el }}>
                                <ProjectCard
                                    title={"Outcome"}
                                    description={[
                                        "The study revealed that digital notifications, particularly combined audio-visual alerts, can subtly disrupt reading focus, influencing sustained attention even when users are not directly looking at them.",
                                        "The project demonstrated my ability to design and execute experiments, handle eye-tracking and biometric data, and extract meaningful insights. Results were complied into a structured academic report using Overleaf (LaTex), ensuring clarity, rigor, and a professional presention of both data and analysis.",
                                    ]}
                                    children={undefined} />


                                <ProjectCard
                                    title={"Reflection & Learnings"}
                                    description={[
                                        "Coming from a background in cinema and qualitative research, this project was my first opportunity to apply empirical, data-driven methods. Working with eye-tracking and biometric data taught me how design decisions can sublty influence attention and cognitive load.",
                                        "I learned that digital stimuli don't always trigger immediate reactions, yet they can have lasting effects on user focus and engagement, highlighting the importance of designing with attention and cognitive load in mind.",
                                        "This experience strengthened my ability to combine analytical methods with creative intuition, turning quantitative insights into actionable design improvements. It also sparked my ongoing interest in exploring how design, attention, attention, and emotion intersect in digital environments.",
                                    ]}
                                    children={undefined} />
                            </section>
                        </Col>
                    </Row>
                    <ProjectsBreackLine />
                    <div style={{ marginTop: 40 }}>
                        <h3 style={{ justifySelf: "center", fontWeight: 600 }}>More projects</h3>
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

