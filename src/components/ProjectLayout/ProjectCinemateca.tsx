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
import CardListComplete from "../List/ListComplete";
import CardCarousel from "../ImageDisplay/Carousel/CardCarousel";
import ImageDisplayScroll from "../ImageDisplay/ImageComponent/ImageComponentScrool";
import ImageDisplaySimple from "../ImageDisplay/ImageComponent/ImageComponentDefault";
import { useEffect, useState } from "react";
import { MotionValue } from "motion";
import ProjectSection from "./ProjectSections/ProjectSection";
import LinkProgressBar from "../ProgressBar/LinkProgressBar";
import ButtonCTA from "../Button/ButtonCTA";
import { FaFigma, FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

interface ProjectProps {
    projectID: string;
}
export default function ProjectCinematecaLayout({ projectID }: ProjectProps) {

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
        "Discovery",
        "Design",
        "Implementation",
        "Conclusion",
    ]

    const [projectSectionSummaryProgress, setprojectSectionSummaryProgress] = useState<MotionValue<number> | undefined>();
    const [projectDiscoveryProgress, setprojectDiscoveryProgress] = useState<MotionValue<number> | undefined>();
    const [projectDesignProgress, setprojectDesignProgress] = useState<MotionValue<number> | undefined>();
    const [projectImplementationProgress, setprojectImplementationProgress] = useState<MotionValue<number> | undefined>();
    const [projectSectionConclusionProgress, setprojectSectionConclusionProgress] = useState<MotionValue<number> | undefined>();

    return (
        <>
            <Header
                title={"Cinemateca"}
                text={"A redesign of the website of the Cinemateca Portuguesa originally created in 2013. This project explored how to improve navigation, accessibility, and visual coherence, while respecting the institution and its mission with a modern visual."}
            >
                <ImageHeader image={"/projects/cinemateca/cinemateca-broswer.png"} alt={"Homepage Mockup"} />
            </Header>

            <div style={{ marginTop: -100 }}>
                <GradientArea>
                    <Row style={{ margin: "6rem 0" }}>
                        <Col md={3}>
                            <StyledProgressStickyArea>
                                <LinkProgressBar
                                    projectProgresses={[
                                        projectSectionSummaryProgress,
                                        projectDiscoveryProgress,
                                        projectDesignProgress,
                                        projectImplementationProgress,
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
                                        "This was the first project I developed from initial concept to final implementation. The brief was to design a website for a product-based brand, but I chose to reinterpret it by redesigning the Cinemateca Portuguesa website. My goal was to improve navigation, usability, and accessibility while respecting the institution's identity and giving it a fresh, contemporary look.",
                                        "This approach allowed me to explore branding, storytelling, and interface design from a more authentic perspective, balancing visual coherence with clear structure and user-focused interaction."
                                    ]}
                                />

                                <ProjectCard
                                    title={"The Challenge"}
                                    description={[
                                        "The original website was:"
                                    ]}
                                >
                                    <CardListSimple list={[
                                        "Overwhelming, with very long landing page",
                                        "Confusing to navigate, especially for new users",
                                        "Outdated in terms of hierarchy and accessibility"
                                    ]} />
                                    <ImageDisplayScroll
                                        imageSrc={"/projects/cinemateca/landingPage.jpg"}
                                        imageAlt={"Original Cinemateca homepage"}
                                        isLink={true} />
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Discovery"}
                                setProjectSectionProgress={setprojectDiscoveryProgress}
                            >
                                <ProjectCard
                                    title={"Define the Concept"}
                                    description={[
                                        "To start the project, I began by identifing the key user goals, tacking into consideration the website structure I needed to follow.",
                                    ]}
                                >
                                    <CardListSimple 
                                    title="Key user goals:"
                                    list={[
                                        "Learn about institution and its mission",
                                        "Find upcoming screenings and events",
                                        "Explore the film archive",
                                        "Read news and editorial content",
                                        "Access contact and  location information"
                                    ]} />
                                    <ImageDisplaySimple
                                        imageSrc={"/projects/cinemateca/structure.jpg"}
                                        imageAlt={"Site flowchart"}
                                        isLink={false} />

                                </ProjectCard>
                                <ProjectCard
                                    title={"Research"}
                                    description={[
                                        "To support the identity of Cinemateca Portuguesa, I wanted the website to reflect not only the institution's mission but also the richness of national film culture. For visual inspirations, I drew from Portuguese film posters, archival materials, and the Cinemateca's own collection.",
                                        "In parallel, I studied how other cinema-related institutions structured their websites. I analyzed content organization, navigation flows, and design components, with a focus on usability and accessibility."
                                    ]}
                                >
                                    <ImageDisplaySimple
                                        imageSrc={"/projects/cinemateca/reference.webp"}
                                        imageAlt={"Site references with notes and components & flow"}
                                        isLink={true} />

                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Design"}
                                setProjectSectionProgress={setprojectDesignProgress}
                            >
                                <ProjectCard
                                    title={"Design & Prototyping"}
                                    description={[
                                        "The design and prototyping phase was divided into two main stages, with feedback after each iteration. First, I worked on visual consistency, clear layouts, and better information architecture. Then, I refined components and added interactions for more dynamic, user-friendly experience.",
                                    ]}
                                >
                                    <CardListComplete
                                        title="Key steps in the process:"
                                        list={[
                                            {
                                                title: "Reducing and reorganizing the homepage",
                                                text: "The original homepage was extremely long and visually overwhelming. I streamlined the layout and prioritized the access to upcoming events, the film archive, and the lastest news."
                                            },
                                            {
                                                title: "Redesigning the navigation menu",
                                                text: "The original structure was confusing, making it difficult to find essential sections like the digital archive. I reorganized the menu for better clarity and added shortcuts on the homepage for quicker access."
                                            },

                                            {
                                                title: "Refining content cards",
                                                text: "I gave special attention to the design of event and news cards, which are highly interactive elements. The goal was to provide key information clearly while maintaining legibility and a balanced use of negative space."
                                            },
                                            {
                                                title: "Creating a new footer",
                                                text: "A consistent footer was added, mirroring the improved navigation structure, along with a “Back to top” interaction for better usability."
                                            },
                                            {
                                                title: "Adding interactions",
                                                text: "Key micro-interactions were implemented, including a sticky navigation bar that adapts on scroll, smooth scroll-to-top functionality, hover animations for cards (revealing additional details on event cards), and clear feedback messages for form submissions with both error and success states."
                                            },
                                        ]} />

                                    <CardCarousel
                                        images={[
                                            {
                                                imagesrc: "/projects/cinemateca/components.webp",
                                                imageAlt: "Design iterations for three components",
                                                isLink: true
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/components1.webp",
                                                imageAlt: "Homepage design iterations",
                                                isLink: true
                                            },
                                        ]} />
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Implementation"}
                                setProjectSectionProgress={setprojectImplementationProgress}
                            >
                                <ProjectCard
                                    title={"From Prototype to Code"}
                                    description={[
                                        "The prototype was developed into a fully functional website using HTML, CSS, JavaScript, and Bootstrap. I implemented JSON to dynamically populate news and film pages, which strengthned my understanding of data handling. Adapting the design to Bootstrap components required adjustments, but allowed for faster implementation while keeping visual consistency.",
                                        "Since the project was designed desktop-first, I had to rethink layouts and interactions to ensure a smooth mobile experience. Throughout development, I used GitHub for version control and documentation, following best practices to keep the code organized and maintainable.",
                                        ]}
                                >
                                    <ImageDisplaySimple
                                        imageSrc={"/projects/cinemateca/code.jpg"}
                                        imageAlt={"Vs Code: Folder organizations & index.html"}
                                        isLink={false} />
                                </ProjectCard>
                                <ProjectCard
                                    title={"Accessibility & Responsiveness"}
                                    description={[
                                        "To ensure accessibility and responsiveness, I followed the Web Content Accessibility Guidelines (WCAG) and tested the site with Lighthouse, improving performance, SEO, and usability across devices. I used ARIA attributes to reinforce semantic structure and assistive technology support. and added descriptive alt text to all images to make content accessible to screen readers.",
                                    ]}
                                >
                                    <CardCarousel
                                        images={[

                                            {
                                                imagesrc: "/projects/cinemateca/house1.jpg",
                                                imageAlt: "Landing page evaluation (Desktop) - Lighthouse results",
                                                isLink: false
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/house2.jpg",
                                                imageAlt: "Landing page evaluation (Mobile) - Lighthouse results",
                                                isLink: false
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/house3.jpg",
                                                imageAlt: "Products page evaluation (Desktop) - Lighthouse results",
                                                isLink: false
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/house4.jpg",
                                                imageAlt: "Product detail page evaluation (Desktop) - Lighthouse results",
                                                isLink: false
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/house5.jpg",
                                                imageAlt: "News article page evaluation (Mobile) - Lighthouse results",
                                                isLink: false
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/house6.jpg",
                                                imageAlt: "Contacts page evaluation (Mobile) - Lighthouse results",
                                                isLink: false
                                            },
                                        ]} />
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Conclusion"}
                                setProjectSectionProgress={setprojectSectionConclusionProgress}
                            >
                                <ProjectCard
                                    title={"Outcome"}
                                    description={[
                                        "The final design improved clarity, reduced cognitive load, and created a modern aesthetic aligned with Cinemateca's mission.",
                                    ]}
                                >
                                    
                                    <Card.Text>You can explore the full project and code through the links below.</Card.Text>

                                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1rem" }}>
                                        <a href="">
                                            <ButtonCTA
                                                aria-label="Go to Figma project">
                                                <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                                                    <FaFigma />
                                                    Check the project on Figma
                                                    <GoLinkExternal />
                                                </div>
                                            </ButtonCTA>
                                        </a>

                                        <a href="">
                                            <ButtonCTA
                                                aria-label="Go to GitHub repository">
                                                <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                                                    <FaGithub />
                                                    See the GitHub repository
                                                    <GoLinkExternal />
                                                </div>
                                            </ButtonCTA>
                                        </a>
                                    </div>

                                </ProjectCard>


                                <ProjectCard
                                    title={"Reflection & Learnings"}
                                    description={[
                                        "Since this was my first full UX/UI project, some decisions reflect the fact that I was still learning. From the beginning, I relied on my cinematic sensibility, since I didn't just want to redesign the website but to reimagine it as something clear, functional, and truly useful for real users.",
                                        "Balancing respect for the original with a fresh, cinematic feel was challenging, especially when defining the color palette and homepage layout. After exploring several directions,  I chose a yellow-gold tone: emotional, warm, and rooted in cinema's heritage.",
                                        "The design phase was intense, as I learned to think from the user's perspective, work with new tools, and create a visually engaging structure. The prototyping stage became a turning point, showing me how subtle interactions and motion can bring a design to life without overwhelming the user. ",
                                        "The code phase pushed me even further. Translating design into a responsive, functional website was a constant cycle of building, testing, breaking, and refining. Integrating my ideas within Bootstrap's framework was challenging but taught me how design systems can streamline development without losing creativity or usability.",
                                        "This project took me further than I expected. Even with areas I'd like to refine, I'm proud of how far I've grown. Above all, I learned that design is never finished. It evolves, just a film in production."
                                    ]}
                                    children={undefined} />

                            </ProjectSection>

                        </Col>
                    </Row>
                    <ProjectsBreackLine />
                    <div style={{ marginTop: 40 }}>
                        <h3 style={{ justifySelf: "center" }}>More case studies</h3>
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

