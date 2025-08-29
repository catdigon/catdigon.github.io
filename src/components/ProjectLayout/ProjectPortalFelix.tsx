
import { Card, Col, Row } from "react-bootstrap";
import GradientArea from "../GradientArea/GradientArea";
import Header from "../Header/Header";
import { StyledProgressStickyArea } from "./ProgressDisplay/ProgressDisplay.styled";
import ImageHeader from "./ImageHeader/ImageHeader";
import ProjectsBreackLine from "../HomePage/BreakLine/ProjectsBreak";
import CardLayout from "../Card/CardLayout";
import ProjectIntroCard from "./Project/ProjectIntro/ProjectIntroCard";
import ProjectCard from "./Project/ProjectCard/ProjectCard";
import CardListSimple from "../List/ListSimple";
import ImageDisplaySimple from "../ImageDisplay/ImageComponent/ImageComponentDefault";
import { useEffect, useState } from "react";
import { MotionValue } from "motion";
import ProjectSection from "./ProjectSections/ProjectSection";
import LinkProgressBar from "../ProgressBar/LinkProgressBar";
import ProjectSubCard from "./Project/ProjectCard/ProjectSubCard";
import ImageDisplayScroll from "../ImageDisplay/ImageComponent/ImageComponentScrool";
import { ProjectsCardsText } from "../../data/projectsDesign";

export default function ProjectPortalFelixLayout() {

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
        "Heuristic Evaluation",
        "User Flow",
        "Wireframes & Protitype",
        "Conclusion",
    ]

    const [projectSectionSummaryProgress, setprojectSectionSummaryProgress] = useState<MotionValue<number> | undefined>();
    const [projectHeuristicEvaluationProgress, setprojectHeuristicEvaluationProgress] = useState<MotionValue<number> | undefined>();
    const [projectUserFlowProgress, setprojectUserFlowProgress] = useState<MotionValue<number> | undefined>();
    const [projectWireframesProgress, setprojectWireframesProgress] = useState<MotionValue<number> | undefined>();
    const [projectSectionConclusionProgress, setprojectSectionConclusionProgress] = useState<MotionValue<number> | undefined>();

    return (
        <>
            <Header
                title={"Portal Félix"}
                text={"From heuristic evaluation to high-fidelity prototypes, this project reimagines Portal Félix — the Cinemateca Portuguesa film database — with a user-centered approach to improve navigation, accessibility, and research workflows."}
            >
                <ImageHeader />
            </Header>

            <div style={{ marginTop: -100 }}>
                <GradientArea>
                    <Row style={{ margin: "6rem 0" }}>
                        <Col md={3}>
                            <StyledProgressStickyArea>
                                <LinkProgressBar
                                    projectProgresses={[
                                        projectSectionSummaryProgress,
                                        projectHeuristicEvaluationProgress,
                                        projectUserFlowProgress,
                                        projectWireframesProgress,
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
                                <ProjectIntroCard projectId={"portal-felix"}
                                    description={[
                                        "Portal Félix is the official film database of Cinemateca Portuguesa, launched in 2024 as a centralized access point for Portuguese cinematographic heritage. UserFlowed for researchers and the general public, its offers a vast colletion of films, people, events and archival resources.",
                                        "Despites its potencial, the platform faced major usability and accessibility issues. Navigation was confusing, the structure was complex, and users struggled to find information efficiently. This project focused on evaluating the plataform through heuristic analysis and user testing, identifying key pain points, and proposing a user-centered reUserFlow aimed to improve clarity, accessibility, and research workflows.",
                                    ]}
                                />

                                <ProjectCard
                                    title={"The Challenge"}
                                    description={[
                                        "The original platform struggled with clarity and an intuitive user experience. As a tool intended for researchers, filmmakers, and cinema enthusiasts, it needed better structure, intuitive navigation, clear feedback, and accessibily compliance - however, users faces confusion and friction when trying to explore its resources.",
                                        "During my research, it became clear that many Portal Félix features did not meet user expactions, mainly due to structural and navigational issues. This gap between purpose and execution became the foundation of my challenge: transforming a static, complex platform into a functional, engaging, and user-centered experience.",
                                        "The goal was to improve clarity, streamline user flows, and make research feel seamless, while preserving the plataform's depth of information and cultural identity.",
                                    ]}
                                    children={undefined}
                                />

                            </ProjectSection>

                            <ProjectSection id={"Heuristic Evaluation"}
                                setProjectSectionProgress={setprojectHeuristicEvaluationProgress}
                            >
                                <ProjectCard
                                    title={"Phase 1: Heuristic Evaluation & User Testing"}
                                    description={[
                                        "This phase provided a clear picture of the main pain points, which became the foundation for the reUserFlow strategy in the next stages.",
                                    ]}
                                >
                                    <ProjectSubCard
                                        subtitle={"Heuristic Evaluation"}
                                        description={[
                                            "The first step was to understand the current state of the platform and identify the main usability issues. I started with a heurisct evaluation, applying Nielsen's principles to key sections such as the homepage, navigation menu, search functionality, and results page.",
                                            "This analysis revealed problemns with navigation clarity, error prevention, and consistency, which were mapped by severity and summarized in an actionable set of recommendations."
                                        ]}
                                    >
                                        <ImageDisplaySimple
                                            imageSrc={""}
                                            imageAlt={"Findings' list (in portuguese)"}
                                            isLink={true} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"User Testing"}
                                        description={[
                                            "Next, I conducted user testing to validate these findings and uncover real user frustrations. I UserFlowed a test plan and user scenarios based on three diferents profiles. Tasks included actions like “searching for a film by director” and “locating archived documents”. ",
                                            "Through these sessions, I observed recurring issues such as unclear user flows, lack of feedback, and inefficient navigation paths."
                                        ]}
                                    >
                                        <ImageDisplaySimple
                                            imageSrc={""}
                                            imageAlt={"Users Testing Personas"}
                                            isLink={true} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"Accessibility Assessment"}
                                        description={[
                                            "Finally, I assessed accessibility compliance using tools like Windows Screen Reader, 250% zoom, and AccessMonitor validador. The results confirmed critical gaps, including missing alt-test, poor focus management, and low color contrast, which were compared against WCAG 2.1 guidelines.",
                                        ]}
                                    >
                                        <ImageDisplaySimple
                                            imageSrc={""}
                                            imageAlt={"Final UX insights from evaluation and user testing"}
                                            isLink={true} />
                                    </ProjectSubCard>

                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"User Flow"}
                                setProjectSectionProgress={setprojectUserFlowProgress}
                            >
                                <ProjectCard
                                    title={"Phase 2: Insights & ReUserFlow Strategy"}
                                    description={[
                                        "The goal was to address the most critical pain points and create a more intuitive and effecient experience for the platform's core audience.",
                                        "One of the key insights was that researchers are the primary users of this platform, with highly specific needs such as searching, selecting, and cataloguing film titles for academic work. This led to idealize a focused persona representing a film researcher, which became the reference point for all UserFlow decisions moving forward.",
                                    ]}
                                >
                                    <ImageDisplaySimple
                                        imageSrc={""}
                                        imageAlt={"Persona Investigator"}
                                        isLink={true} />

                                    <Card.Text>A critical discovery was that user accont creation was non-functional. While the interface allowed users to start tje process, no confirmation email was ever sent, making it impossible to access personalized tools. This major issue shifted the reUserFlow strategy to prioritize user flows related to account creation, login, and personalized features.</Card.Text>

                                    <ProjectSubCard
                                        subtitle={"Sitemap & User flow"}
                                        description={[
                                            "To visualize the new approach, I mapped the complete user flow using Octopus and Figma, addressing gaps in navigation and feedback.",
                                        ]}
                                    >
                                        <div style={{ display: "flex", }}>
                                            <ImageDisplaySimple
                                                imageSrc={""}
                                                imageAlt={"Sitemap (Octopus)"}
                                                isLink={true} />
                                            <ImageDisplaySimple
                                                imageSrc={""}
                                                imageAlt={"User flow (Figma)"}
                                                isLink={true} />
                                        </div>
                                    </ProjectSubCard>
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Wireframes & Protitype"}
                                setProjectSectionProgress={setprojectWireframesProgress}
                            >
                                <ProjectCard
                                    title={"Phase 3: Wireframes & Prototyping"}
                                    description={[
                                        "",
                                    ]}
                                >
                                    <ProjectSubCard
                                        subtitle={"Low-fidelity paper prototypes"}
                                        description={[
                                            "This phase began with paper prototypes, built around the defined user flow. A key part of the process was UserFlowing a user account area (a feature not present on the official plataform) and imagining functionalities that could bring value to the user, such as creating favorite lists and managing personal information.",
                                            "",
                                        ]} >
                                        <ImageDisplayScroll
                                            imageSrc={""}
                                            imageAlt={"Paper prototypes"}
                                            isLink={true} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"Usability test with an user"}
                                        description={[
                                            "To validate the proposed structure, I conducted a usability test using the paper prototyoes. The participant was asked to complete core tasks like creating an account, saving a film to favorites list, and exploring film pages.",
                                            "The test revealed area where the task flow could be smoother and where interface elements lacked clarity. Based on these insights, the UserFlow was refined to improve navigation hierarchy, minimize unnecessary steps, and ensure a more intuitive experience.",
                                        ]}
                                    >
                                        <ImageDisplaySimple
                                            imageSrc={""}
                                            imageAlt={"Refined paper prototypes"}
                                            isLink={true} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"Figma prototypes"}
                                        description={[
                                            "The final version of the interface was developed as interactive wireframes in Figma, based on the improved paper prototypes.",
                                            "At this stage, I focused on creating a component-based system using variants, which helped maintain consistency and make updates more efficient. I also applied auto.layouts to ensure flexibility, allowing the interface to adapt to different content lengths and screen sizes.",
                                            "Several key interactions were prototyped, including:",
                                        ]}
                                    >
                                        <CardListSimple list={[
                                            "A refined search experience with autocomplete and a simpified input structure",
                                            "Account creation, login, and password recovery with clear sucess and error messages",
                                            "Profile management with editable and updatable personal nformation",
                                            "A favorites system that lets users save, remove, and orginze films intro personalized lists",
                                            "An adapative navigation menu that respondes dynamically to the user’s login state"
                                        ]} />

                                        <ImageDisplaySimple
                                            imageSrc={""}
                                            imageAlt={"Figma wirefram with linked interactions"}
                                            isLink={true} />

                                    </ProjectSubCard>
                                </ProjectCard>

                            </ProjectSection>

                            <ProjectSection id={"Conclusion"}
                                setProjectSectionProgress={setprojectSectionConclusionProgress}
                            >
                                <ProjectCard
                                    title={"Outcome"}
                                    description={[
                                        "This project focused on reUserFlowing a key user flow, grounded in heuristic evaluation and user testing. Each UserFlow decision was informed by real user feedback and shaped around the needs of clearly defined personas.",
                                        "The result is a more intuitive, accessible, and user-friendly experience that addresses the plataform's original pain points while respecting its role as both a research and cultural tool.",
                                        "Presented to postgraduated peers, the project was recognised for its clarity, thoughtful iteration, and strong alignment between research insights and UserFlow strategy.",
                                        ]}
                                    children={undefined} />


                                <ProjectCard
                                    title={"Reflection & Learnings"}
                                    description={[
                                        "This project marked a real turning point in my UX learning journey, What began as a broad heuristc evaluation quickly shifted toward a focused reUserFlow after uncovering a critical issue: the account creation system didn't work at all. That discovery helped me understand how usability failures affect trust, cause frustration, and break user expectations.",
                                        "It also reinforced the value of UserFlowing from evidence. User tests and persona creation based on real goals and frustrations helped me move beyond assumptions. I learned that its crucial to build solutions that responde directly to user's needs, tolls that guide, supoport, and respecte users.",
                                        "One key takeways was that great UX often goes unnoticed because it simply works. A plaform should't feel like an obstacle; it should feel natural, even in complex contexts workflows. I came to see that good UserFlow isn't just about looks; it's about making something meaningful and beautiful through function.",
                                        ]}
                                    children={undefined} />

                            </ProjectSection>

                        </Col>
                    </Row>
                    <ProjectsBreackLine />
                    <div style={{ marginTop: 40 }}>
                        <h3 style={{justifySelf: "center"}}>More case studies</h3>
                        <CardLayout
                            data={ProjectsCardsText}
                            showText={false}
                            showLabel={false} />
                    </div>

                </GradientArea>
            </div>

        </>
    )
}

