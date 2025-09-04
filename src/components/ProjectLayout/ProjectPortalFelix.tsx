import { Col, Row } from "react-bootstrap";
import GradientArea from "../GradientArea/GradientArea";
import Header from "../Header/Header";
import { StyledProgressStickyArea } from "./ProgressDisplay/ProgressDisplay.styled";
import ImageHeader from "./ImageHeader/ImageHeader";
import ProjectsBreackLine from "../BreakLine/ProjectsBreak";
import CardLayout from "../Card/CardLayout";
import ProjectIntroCard from "./Project/ProjectIntro/ProjectIntroCard";
import ProjectCard from "./Project/ProjectCard/ProjectCard";
import CardListSimple from "../List/ListSimple";
import ImageDisplaySimple from "../ImageDisplay/ImageComponent/ImageComponentDefault";
import ProjectSubCard from "./Project/ProjectCard/ProjectSubCard";
import ImageDisplayScroll from "../ImageDisplay/ImageComponent/ImageComponentScrool";
import { ProjectsCardsText } from "../../data/projectsDesign";
import CardCarousel from "../ImageDisplay/Carousel/CardCarousel";
import { useSectionProgress } from "./ProgressDisplay/ProgressDisplayLogic";

interface ProjectProps {
    projectID: string;
}
export default function ProjectPortalFelixLayout({ projectID }: ProjectProps) {

    const filteredProjects = ProjectsCardsText?.filter(
        (project) => project.id !== projectID
    ) || [];

    const sectionIds = [
        "Summary",
        "Heuristic Evaluation",
        "User Flow",
        "Wireframes & Prototype",
        "Conclusion",
    ]

    const { sectionRefs, progress, activeSection } = useSectionProgress(sectionIds);

    return (
        <>
            <Header
                title={"Portal Félix"}
                text={"From heuristic evaluation to high-fidelity prototypes, this project reimagines Portal Félix — the Cinemateca Portuguesa film database — with a user-centered approach to improve navigation, accessibility, and research workflows."}
            >
                <ImageHeader
                    image={"/projects/portal/portal.webp"}
                    alt={"Portal Felix Mockup"} />
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
                                        "Portal Félix is the official film database of Cinemateca Portuguesa, launched in 2024 as a centralized access point for Portuguese cinematographic heritage. Designed for both researchers and the general public, it offers a vast colletion of films, people, events and archival resources.",
                                        "Despites its potencial, the platform presented major usability and accessibility issues. Navigation was confusing, the structure complex, and users often struggled to find information efficiently.",
                                        "This project focused on evaluating the plataform through heuristic analysis and user testing, identifying key pain points, and proposing a user-centered redesign aimed at improving clarity, accessibility, and research workflows.",
                                    ]}
                                />

                                <ProjectCard
                                    title={"The Challenge"}
                                    description={[
                                        "Working with Portal Félix, I quickly realized how much potential the platform had, but also how hard it was to use. As a research tool for scholars, filmmakers, and cinema enthusiasts, it should have been clear and intuitive. Instead, the complex structure, confusing navigations, and lack of accessibility created confusion and frustration.",
                                        "My goal was to address these usability issues and reimagine how the platform could better serve its audience: making research seamless while preserving its depth of information and cultural identity."
                                    ]}
                                    children={undefined}
                                />

                            </section>

                            <section id={"Heuristic Evaluation"}
                                ref={el => { sectionRefs.current["Heuristic Evaluation"] = el }}>
                                <ProjectCard
                                    title={"Phase 1: Heuristic Evaluation & User Testing"}
                                    description={[
                                        "",
                                    ]}
                                >
                                    <ProjectSubCard
                                        subtitle={"Heuristic Evaluation"}
                                        description={[
                                            "To understand the plataform's current state, I started with a heurisct evaluation, applying Nielsen's principles to key sections such as the homepage, navigation menu, search, and results page.",
                                            "This analysis revealed major issues with navigation clarity, error prevention, and consistency. Each problem was mapped by severity and summarized into actionable recommendations."
                                        ]}
                                    >
                                        <ImageDisplayScroll
                                            imageSrc={"/projects/portal/find-list.webp"}
                                            imageAlt={"Findings' list (PT)"}
                                            isLink={true} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"User Testing"}
                                        description={[
                                            "Next, I conducted user testing to validate these findings and uncover real user frustrations. I design a test plan around three user profiles, with tasks such as searching for a film by director and locating archived documents.",
                                            "The sessions highlighted recurring issues: unclear flows, lack of feedback, and inefficient navigation paths."
                                        ]}
                                    >
                                        <ImageDisplaySimple
                                            imageSrc={"/projects/portal/users.webp"}
                                            imageAlt={"Users Testing Personas"}
                                            isLink={true} />

                                        <ImageDisplayScroll
                                            imageSrc={"/projects/portal/script-test.webp"}
                                            imageAlt={"Usability testing script with task scenarios (PT)"}
                                            isLink={true} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"Accessibility Assessment"}
                                        description={[
                                            "Finally, I assessed accessibility using tools like Windows Screen Reader, 250% zoom, and AccessMonitor validador. The results confirmed critical gaps, including missing alt text, poor focus management, and low color contrast, benchmarked against WCAG 2.1 guidelines.",
                                        ]}
                                    >
                                        <ImageDisplaySimple
                                            imageSrc={"/projects/portal/insights.webp"}
                                            imageAlt={"Final UX findings from evaluation and user testing"}
                                            isLink={false} />
                                    </ProjectSubCard>

                                </ProjectCard>
                            </section>

                            <section id={"User Flow"}
                                ref={el => { sectionRefs.current["User Flow"] = el }}>
                                <ProjectCard
                                    title={"Phase 2: Insights & User Flow Strategy"}
                                    description={[
                                        "Based on the evaluation, I decided to focus the redesign around film researchers as the core users. Their highly specific needs, like searching, selecting, and cataloguing film for academic work, made them a strong reference point.",
                                        "To guide decisions, I created a dedicated persona mapping their motivations, paing points, and context of use.",
                                    ]}
                                >
                                    <ImageDisplaySimple
                                        imageSrc={"/projects/portal/persona-final.webp"}
                                        imageAlt={"Persona Card: Motivations, Pain Points, and Context of Use"}
                                        isLink={false} />



                                    <ProjectSubCard
                                        subtitle={"Sitemap & User flow"}
                                        description={[
                                            "A critical discovery was that account creation simply didn't work — users could start the process, but no confirmation email was ever sent. This made the feature inaccessible and shifted the redesign focus to account creation, login, and personalization flows.",
                                            "To improve navigation and structural, I mapped a new sitemap and user flows using Octopus.do and Figma, establising a clearer and more efficient experience."
                                        ]}
                                    >
                                        <div style={{ display: "flex", }}>
                                            <ImageDisplaySimple
                                                imageSrc={"/projects/portal/octo-flow.webp"}
                                                imageAlt={"Sitemap (Octopus.do, PT)"}
                                                isLink={true} />
                                            <ImageDisplaySimple
                                                imageSrc={"/projects/portal/flow-design.webp"}
                                                imageAlt={"User flow (Figma)"}
                                                isLink={true} />
                                        </div>
                                    </ProjectSubCard>
                                </ProjectCard>
                            </section>

                            <section id={"Wireframes & Prototype"}
                                ref={el => { sectionRefs.current["Wireframes & Prototype"] = el }}>
                                <ProjectCard
                                    title={"Phase 3: Wireframes & Prototyping"}
                                    description={[
                                        "",
                                    ]}
                                >
                                    <ProjectSubCard
                                        subtitle={"Low-fidelity paper prototypes"}
                                        description={[
                                            "I began the phase by creating low-fidelity paper prototypes based on the defined user flow. I focus on designing the user account area and explored value-adding features like favorites lists and profile managements.",
                                            "These prototypes served as a way to experiment with the proposed solutions and understand how users might interact with them, before commiting to a final design.",
                                        ]} >
                                        <ImageDisplaySimple
                                            imageSrc={"/projects/portal/proto1.webp"}
                                            imageAlt={"Paper Prototypes (Before user testing)"}
                                            isLink={true} />

                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"Usability test with an user"}
                                        description={[
                                            "To validate the concept, I conducted usability testing with the prototypes. The participant was asked to complete core tasks like creating an account, saving a film to favorites list, and exploring film pages.",
                                            "The test revealed areas where the task flow and interface elements lacked clarity. These insights guided refinements to the navigation hierarchy, reduce unnecessary steps, and improved overall usability.",
                                        ]}
                                    >
                                        <CardCarousel images={[
                                            {
                                                imagesrc: "/projects/portal/proto2.webp",
                                                imageAlt: "Paper Prototypes (After feedback/ New pages & changes",
                                                isLink: true,
                                            },
                                            {
                                                imagesrc: "/projects/portal/proto3.webp",
                                                imageAlt: "Paper Prototypes (Final version / Refined flow)",
                                                isLink: true,
                                            },
                                        ]} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"Figma prototypes"}
                                        description={[
                                            "With the refined structure, I developed as interactive wireframes in Figma. I implemented a component-based system using variants to ensure consistency and efficient updates, and applied auto-layouts for flexibility, allowing the interface to adapt to different content lengths and screen sizes.",
                                            "Key interactions prototyped included:",
                                        ]}
                                    >
                                        <CardListSimple list={[
                                            "Refined search experience with autocomplete and a simpified input",
                                            "Account creation, login, and password recovery with clear sucess and error messages",
                                            "Profile management with editable and updatable personal information",
                                            "Favorites system to save, remove, and orginze films into personalized lists",
                                            "Adapative navigation menu responsive to the user's login state"
                                        ]} />
                                        <CardCarousel images={[
                                            {
                                                imagesrc: "/projects/portal/wireframes.webp",
                                                imageAlt: "Figma Wireframes overview (page frames)",
                                                isLink: true
                                            },
                                            {
                                                imagesrc: "/projects/portal/proto-figma.webp",
                                                imageAlt: "Figma wireframes with linked interactions",
                                                isLink: true
                                            },
                                            {
                                                imagesrc: "/projects/portal/components.webp",
                                                imageAlt: "Figma components library",
                                                isLink: true
                                            },
                                        ]} />
                                    </ProjectSubCard>
                                </ProjectCard>
                            </section>

                            <section id={"Conclusion"}
                                ref={el => { sectionRefs.current["Conclusion"] = el }}>
                                <ProjectCard
                                    title={"Outcome"}
                                    description={[
                                        "This project centered on redesigning a critical user flow of Portal Félix, guided by heuristic evaluation, user testing, and persona-driven insights.",
                                        "The result is a more intuitive and accessible experience that addresses usability issues while respecting the plataform's role as a research and cultural tool.",
                                        "The work was presented to postgraduated peers, who highlighted its clarity, strong iteration process, and strong alignment between research and design strategy.",
                                    ]}>

                                    <iframe
                                        title="Portal Félix Prototype in Figma"
                                        style={{ border: "1px solid rgba(0, 0, 0, 0.1);", borderRadius: "6px", width: "100%", height: "50vh" }}
                                        src="https://embed.figma.com/proto/4lgh3YQXc4Okn7HjnU8Frm/Portal-Felix?page-id=156%3A2331&node-id=156-2332&p=f&viewport=1953%2C1955%2C0.09&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=156%3A2332&embed-host=share"
                                        allowFullScreen></iframe>
                                </ProjectCard>

                                <ProjectCard
                                    title={"Reflection & Learnings"}
                                    description={[
                                        "This project was a turning point in my UX learning journey. Discovering that the account creation system didn't work revealed how fundamental usability failures can affect trust, cause frustration, disrupt user expectations and block access to value.",
                                        "I learned the importance of grounding design in evidence: user testing and persona creation helped me move beyond assumptions and focus on solving real problems.",
                                        "A key takeway is that great UX often goes unnoticed because it simply works. A plaform should support user seamlessly, even in complex workflows. This experience taught me that good design isn't just about aesthetics, but about making function meaninful and effortless.",
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

