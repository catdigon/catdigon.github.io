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
                text={"This project reimagines the platform through a user-centered design process. From heuristic evaluation to high-fidelity prototypes, the goal was to improve navigation, accessibility, and research workflows."}
            >
                <ImageHeader
                    image={"/projects/portal/portal.webp"}
                    alt={"Portal Felix Mockup"} 
                    imageMobile={"/projects/portal/portal.webp"} />
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
                                        "Despites its potencial, the platform faced major usability and accessibility challengess. Navigation was confusing, the structure complex, and users often struggled to find information efficiently.",
                                        "This project focused on evaluating the plataform through heuristic analysis and user testing, identifying key pain points, and proposing a user-centered redesign to improving clarity, accessibility, and research workflows.",
                                    ]}
                                />

                                <ProjectCard
                                    title={"The Challenge"}
                                    description={[
                                        "While exploring the Portal Félix, I quickly recognized the platform's potential, but also its usability issues. As a research tool, it needed to clear and intuitive. Instead, its complex structure, confusing navigations, and limited accessibility often led to confusion and frustration.",
                                        "My goal was to address these usability problems and reimagine the platform to better serve its audience: making research seamless while preserving its depth of information and cultural identity."
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
                                            "To understand the plataform's current state, I began with a heurisct evaluation, applying Nielsen's principles to key sections such as the homepage, navigation menu, search, and results page.",
                                            "This analysis revealed major issues with navigation clarity, error prevention, and consistency. Each problem was mapped by severity and summarized into actionable recommendations."
                                        ]}
                                    >
                                        <ImageDisplayScroll
                                            imageSrc={"/projects/portal/find-list.webp"}
                                            imageAlt={"List of findings with severity and heuristic type"}
                                            isLink={true}
                                            imageMobile={"/projects/portal/find-list-mobile.webp"} 
                                            imageLink={"/projects/portal/find-list.webp"} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"User Testing"}
                                        description={[
                                            "Next, I conducted user testing to validate the heuristic findings and uncover real user frustrations. I designed a test plan around three user profiles, with tasks such as searching for a film by director and locating archived documents.",
                                            "The sessions highlighted recurring challenges, including unclear flows, lack of feedback, and inefficient navigation paths."
                                        ]}
                                    >
                                        <ImageDisplaySimple
                                            imageSrc={"/projects/portal/users.webp"}
                                            imageAlt={"Users Testing Personas"}
                                            isLink={true}
                                            imageMobile={"/projects/portal/users-mobile.webp"} 
                                            imageLink={"/projects/portal/users.webp"} />

                                        <ImageDisplayScroll
                                            imageSrc={"/projects/portal/script-test.webp"}
                                            imageAlt={"Usability testing script with task scenarios"}
                                            isLink={true}
                                            imageMobile={"/projects/portal/script-test-mobile.webp"} 
                                            imageLink={"/projects/portal/script-test.webp"} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"Accessibility Assessment"}
                                        description={[
                                            "Finally, I assessed accessibility using tools sucha as Windows Screen Reader, 250% zoom, and AccessMonitor validator. The evaluation revealed critical gaps, including missing alt text, poor focus management, and low color contrast, benchmarked against WCAG 2.1 guidelines.",
                                        ]}
                                    >
                                        <ImageDisplaySimple
                                            imageSrc={"/projects/portal/insights.webp"}
                                            imageAlt={"Final UX findings from evaluation and user testing"}
                                            isLink={false}
                                            imageMobile={"/projects/portal/insights-mobile.web"} 
                                            imageLink={"/projects/portal/insights.webp"} />
                                    </ProjectSubCard>

                                </ProjectCard>
                            </section>

                            <section id={"User Flow"}
                                ref={el => { sectionRefs.current["User Flow"] = el }}>
                                <ProjectCard
                                    title={"Phase 2: Insights & User Flow Strategy"}
                                    description={[
                                        "Based on the evaluation, I focused the redesign on film researchers as the core users. Their highly specific needs, such as searching, selecting, and cataloguing film for academic work, made them a strong reference point for design decisions.",
                                        "To guide decisions, I created a dedicated persona outlining their motivations, pain points, and context of use.",
                                    ]}
                                >
                                    <ImageDisplaySimple
                                        imageSrc={"/projects/portal/persona-final.webp"}
                                        imageAlt={"Persona card: Motivations, pain points, and context of use"}
                                        isLink={false}
                                        imageMobile={"/projects/portal/persona-finalmobile.webp"} 
                                        imageLink={"/projects/portal/persona-final.webp"} />

                                    <ProjectSubCard
                                        subtitle={"Sitemap & User flow"}
                                        description={[
                                            "A critical discovery was that account creation did not work — users could start the process, but no confirmation email was ever sent. This made the feature inaccessible and shifted the redesign focus to account creation, login, and personalization flows.",
                                            "To improve navigation and structure, I mapped a new sitemap and user flows using Octopus.do and Figma, establising a clearer and more efficient experience."
                                        ]}
                                    >
                                        <Row>
                                            <Col md={4}>
                                            <ImageDisplaySimple
                                                    imageSrc={"/projects/portal/octo-flow.webp"}
                                                    imageAlt={"Sitemap (Octopus.do, PT)"}
                                                    isLink={true}
                                                    imageMobile={"/projects/portal/octo-flow-mobile.webp"} 
                                                    imageLink={"/projects/portal/octo-flow.webp"} />
                                            </Col>
                                            <Col md={8}>
                                            <ImageDisplaySimple
                                                    imageSrc={"/projects/portal/flow-design.webp"}
                                                    imageAlt={"User flow (Figma)"}
                                                    isLink={true}
                                                    imageMobile={"/projects/portal/flow-design-mobile.webp"} 
                                                    imageLink={"/projects/portal/flow-design.webp"} />
                                                </Col>
                                        </Row>
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
                                            "I began this phase by creating low-fidelity paper prototypes based on the defined user flow. I focused on designing the user account area and explored value-adding features like favorites lists and profile management.",
                                            "These prototypes allowed me to experiment with the proposed solutions and understand how users might interact with them before committing to a final design.",
                                        ]} >
                                        <ImageDisplaySimple
                                            imageSrc={"/projects/portal/proto1.webp"}
                                            imageAlt={"Paper prototypes (Before user testing)"}
                                            isLink={true}
                                            imageMobile={"/projects/portal/proto1-mobile.webp"} 
                                            imageLink={"/projects/portal/proto1.webp"} />

                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"Usability test with an user"}
                                        description={[
                                            "To validate the concept, I conducted usability testing with the prototypes. The participant was asked to complete core tasks such as creating an account, saving a film to favorites list, and exploring film pages.",
                                            "The test revealed areas where the task flow and interface elements lacked clarity. These insights guided refinements to the navigation hierarchy, reduced unnecessary steps, and improved overall usability.",
                                        ]}
                                    >
                                        <CardCarousel images={[
                                            {
                                                imageSrc: "/projects/portal/proto2.webp",
                                                imageAlt: "Paper prototypes (After feedback/ New pages & changes",
                                                isLink: true,
                                                imageMobile: "/projects/portal/proto2-mobile.webp",
                                                imageLink: "/projects/portal/proto2.webp",
                                            },
                                            {
                                                imageSrc: "/projects/portal/proto3.webp",
                                                imageAlt: "Paper prototypes (Final version / Refined flow)",
                                                isLink: true,
                                                imageMobile: "/projects/portal/proto3-mobile.webp",
                                                imageLink: "/projects/portal/proto3.webp",
                                            },
                                        ]} />
                                    </ProjectSubCard>

                                    <ProjectSubCard
                                        subtitle={"Figma prototypes"}
                                        description={[
                                            "With the refined structure, I developed interactive wireframes in Figma. I implemented a component-based system using variants to ensure consistency and efficient updates, and applied auto-layouts for flexibility, allowing the interface to adapt to different content lengths and screen sizes.",
                                            "Key interactions prototyped included:",
                                        ]}
                                    >
                                        <CardListSimple list={[
                                            "Refined search experience with autocomplete and a simplified input",
                                            "Account creation, login, and password recovery with clear success and error messages",
                                            "Profile management with editable and updatable personal information",
                                            "Favorites system to save, remove, and organize films into personalized lists",
                                            "Adaptive navigation menu responsive to the user's login state"
                                        ]} />
                                        
                                        <iframe 
                                        title="Portal Félix Project in Figma"
                                        style={{border: "1px solid rgba(0, 0, 0, 0.1);", borderRadius: "6px", width: "100%", height: "50vh"}}
                                        src="https://embed.figma.com/design/4lgh3YQXc4Okn7HjnU8Frm/Portal-Felix?node-id=842-4525&embed-host=share" 
                                        allowFullScreen>
                                        </iframe>
                                    </ProjectSubCard>
                                </ProjectCard>
                            </section>

                            <section id={"Conclusion"}
                                ref={el => { sectionRefs.current["Conclusion"] = el }}>
                                <ProjectCard
                                    title={"Outcome"}
                                    description={[
                                        "This project focused on redesigning a critical user flow of Portal Félix, guided by heuristic evaluation, user testing, and persona-driven insights.",
                                        "The result is a more intuitive and accessible experience that resolves usability issues while respecting the platform's role as a research and cultural resource.",
                                        "The work was presented to postgraduate peers, who praised its clarity, iterative process, and strong alignment between research and design strategy.",
                                    ]}>

                                    <iframe
                                        title="Portal Félix Prototype in Figma"
                                        style={{ border: "1px solid rgba(0, 0, 0, 0.1);", borderRadius: "6px", width: "100%", height: "50vh" }}
                                        src="https://embed.figma.com/proto/4lgh3YQXc4Okn7HjnU8Frm/Portal-Felix?page-id=156%3A2331&node-id=156-2332&p=f&viewport=1953%2C1955%2C0.09&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=156%3A2332&embed-host=share"
                                        allowFullScreen>
                                        </iframe>
                                </ProjectCard>

                                <ProjectCard
                                    title={"Reflection & Learnings"}
                                    description={[
                                        "This project was a turning point in my UX learning journey. Discovering that the account creation system didn't work highlighted how fundamental usability failures can affect trust, cause frustration, disrupt user expectations, and block access to value.",
                                        "I learned the importance of grounding design in evidence: user testing and persona creation helped me move beyond assumptions and focus on solving real problems.",
                                        "A key takeaway is that great UX often goes unnoticed because it simply works. A platform should support user seamlessly, even in complex workflows. This experience taught me that good design isn't just about aesthetics, but it's about making functionality meaningful and effortless.",
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

