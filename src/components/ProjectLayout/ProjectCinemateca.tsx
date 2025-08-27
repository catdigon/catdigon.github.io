
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
import { badgeColor } from "../../data/badgeColor";


export default function ProjectLayoutDisplay() {

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
        "ProjectSummary",
        "Section1",
        "Section2",
        "Section3",
        "ProjectConclusion",
    ]

    const [projectSectionSummaryProgress, setprojectSectionSummaryProgress] = useState<MotionValue<number> | undefined>();
    const [projectSection1Progress, setprojectSection1Progress] = useState<MotionValue<number> | undefined>();
    const [projectSection2Progress, setprojectSection2Progress] = useState<MotionValue<number> | undefined>();
    const [projectSection3Progress, setprojectSection3Progress] = useState<MotionValue<number> | undefined>();
    const [projectSectionConclusionProgress, setprojectSectionConclusionProgress] = useState<MotionValue<number> | undefined>();

    return (
        <>
            <Header
                title={"Cinemateca"}
                text={"A redesign of the website of the Cinemateca Portuguesa originally created in 2013. This project explored how to improve navigation, accessibility, and visual coherence, while respecting the institution and its mission with a modern visual."}
            >
                <ImageHeader />
            </Header>

            <div style={{ marginTop: -100 }}>
                <GradientArea>
                    <Row>
                        <Col md={3}>
                            <StyledProgressStickyArea>
                                <LinkProgressBar
                                    projectProgresses={[
                                        projectSectionSummaryProgress,
                                        projectSection1Progress,
                                        projectSection2Progress,
                                        projectSection3Progress,
                                        projectSectionConclusionProgress
                                    ]}
                                    ids={sectionIds}
                                    state={activeID || ""} />
                            </StyledProgressStickyArea>
                        </Col>
                        <Col md={8}>
                            <ProjectSection id={"ProjectSummary"}
                                setProjectSectionProgress={setprojectSectionSummaryProgress}
                            >
                                <ProjectIntroCard
                                    label={"Academic"}
                                    title={"Cinemateca Website"}
                                    text={"This was the first project I developed from inital concept to final implementation. The bried was to design a website for a product-based brand, but I chose to reinterpret it by redesigning the Cinemateca Portuguesa website. My goal was to improve navigation, usability, and accessibility while respecting the institution's identity and giving it a fresh, contemporary look."}
                                    date={"October 2024 - April 2025"}
                                    tools={[
                                        {
                                            name: "Figma",
                                            badgeColor: badgeColor.BLUE
                                        },
                                        {
                                            name: "HTML",
                                            badgeColor: badgeColor.RED
                                        }
                                    ]} />
                                <ProjectCard
                                    title={"The Challenge"}
                                    description={"The original website presents a dense, overwhelming landing page, a cluttered menu, and an outdated visual hierarchy. For new users, it's easy to get lost. "}
                                >
                                    <ImageDisplayScroll
                                        imageSrc={"/projects/cinemateca/landingPage.jpg"}
                                        imageAlt={"Cinemateca Homepage"}
                                        isLink={true} />
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Section1"}
                                setProjectSectionProgress={setprojectSection1Progress}
                            >
                                <ProjectCard
                                    title={"Define the Concept"}
                                    description={"To start the project, the professor provided a basic structure that all students were expected to follow. This included a homepage, an about page, a list of products or items, a news section, and a contact page with a form."}
                                >
                                    <ImageDisplaySimple
                                        imageSrc={"/projects/cinemateca/cinemateca-broswer.png"}
                                        imageAlt={"Cinemateca Homepage"}
                                        isLink={false} />

                                    <Card.Text>When I decided to focus my project on Cinemateca Portuguesa, I realized that the website needed to be designed to serve at least two types of users: frequent visitiors and first-time guests.</Card.Text>
                                    <Card.Text>I defined these two main user profiles and mapped our their common goals when visiting a national cultural institution's website. These included:</Card.Text>
                                    <CardListSimple list={[
                                        "Learn more about the institution and its mission",
                                        "Find upcoming screenings and events",
                                        "Explore the archive catalogue and discover available works",
                                        "Read news, articles, or featueed content produced by the Cinemateca",
                                        "Access contact and  location information"
                                    ]} />
                                </ProjectCard>
                                <ProjectCard
                                    title={"Visual & Contextual Research"}
                                    description={"To support the identity of Cinemateca Portuguesa, I wanted the website to reflect not only the institutio's mission but also the richness of national film culture. I drew visual inspiration from Portuguese film posters, archival material, and the Cinemateca's own colletion."}
                                >
                                    <Card.Text>In parallel, I explored how other cinema - related institutions, including film archives, prodution houses, and film festivals, organize their websitrs. I focused on how content is structured, how nabigation flows, and how components are designed to support usability, accessibility, and institutions needs. This research helped me gather both visual and functional references to guide the design process.</Card.Text>

                                    <ImageDisplaySimple
                                        imageSrc={"/projects/cinemateca/reference-v2.jpg"}
                                        imageAlt={"References board with visuals and notes"}
                                        isLink={true} />

                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Section2"}
                                setProjectSectionProgress={setprojectSection2Progress}
                            >
                                <ProjectCard
                                    title={"Design & Prototyping"}
                                    description={"The design and prototyping phase was divide intro two main stages, with feedback collected after each iteration. The first state focused on designing the website for visual consistency, improved information architecture, and clearer layout organization. The second state emphasized refining components and integrating interactive behaviors across pages, creating a more dynamic and user-friendly experience."}
                                >
                                    <CardListComplete
                                        title="Key steps in the process:"
                                        list={[
                                            {
                                                title: "Reducing and reorganizing the homepage",
                                                text: "The original homepage was extremely long and visually overwhelming. I streamlined the layout and prioritized the access to upcomin events, the film archive, and lastest news."
                                            },
                                            {
                                                title: "Redesigning the naviation menu",
                                                text: "The original structure was confusing, making it difficult to find essential sections like the digital archive. I reorganized the menu for better clarity and added shorcuts on the homepage for quicker access."
                                            },

                                            {
                                                title: "Refining content cards",
                                                text: "I gave special attention to the design of event and news cards, which are highly interactive elements. The goal was to provide key information clearly while maintaining legibility and a balanced use of negative space."
                                            },
                                            {
                                                title: "Creating a new footer",
                                                text: "A consistent footer was added, mirroring the improved nagigation strucute, along with a “Back to top” interaction for better usability."
                                            },
                                            {
                                                title: "Adding interactions",
                                                text: "Key micro-interactions were implemented, including a sticky navigation bar that adaptas on scroll, smoth scroll-to-top functionality, hover animations for cards (revealing additional detials on event cards), and clear feedback messages for form submissions with both error and sucess states."
                                            },
                                        ]} />

                                    <CardCarousel
                                        images={[
                                            {
                                                imagesrc: "/projects/cinemateca/design-componets.jpg",
                                                imageAlt: "",
                                                isLink: true
                                            },
                                        ]} />
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"Section3"}
                                setProjectSectionProgress={setprojectSection3Progress}
                            >
                                <ProjectCard
                                    title={"From Prototype to Code"}
                                    description={"The prototype was developed into a fully functional website using HTML, CSS, JavaScript, and Bootstrap. To dynamically populate the news and film details pages, I implemented JSON as a personal challenge, which helped deepen my understanding of dynamic data handling."}
                                >
                                    <Card.Text>Integrating Bootstrap required adapting the original desing to fit the available components. This  taught me how to work with style systems and how to accelarate implementation without compromising visual consistency.</Card.Text>
                                    <Card.Text>Since the design was desktop-first, adapting it for mobile without prior planning meant rethinking layouts, components, and interactions on the fly!</Card.Text>
                                    <Card.Text>Additionally, I used a GitHub repository to organized and document the code, applying best practices in version control throughtou the development process.</Card.Text>
                                    <ImageDisplaySimple
                                        imageSrc={"/projects/cinemateca/code.jpg"}
                                        imageAlt={"Overview of folders and index.html"}
                                        isLink={false} />
                                </ProjectCard>
                                <ProjectCard
                                    title={"Accessibility & Responsiveness"}
                                    description={"To ensure accessibility and responsivenesse, I followed the Web Content Accessibility Guidelines (WCAG) and used Lighthouse to evalute and improve the website. I focused on enhancing the code to achieve solid results across key areas - including mobile responsiveness, accessibility, SEO, performance, and best practices - for both desktop and movile vestions."}
                                >
                                    <Card.Text>Specific improvements included the use of ARIA attributes to enhance semantic structure and assistive techonology suport, as well as adding descriptive alt text to all images to ensure meaningful content for screen readers.</Card.Text>
                                    <CardCarousel
                                        images={[

                                            {
                                                imagesrc: "/projects/cinemateca/house1.jpg",
                                                imageAlt: "Overview of Lighthouse Landingpage results for Desktop",
                                                isLink: true
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/house2.jpg",
                                                imageAlt: "",
                                                isLink: false
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/house3.jpg",
                                                imageAlt: "",
                                                isLink: false
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/house4.jpg",
                                                imageAlt: "",
                                                isLink: false
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/house5.jpg",
                                                imageAlt: "",
                                                isLink: false
                                            },
                                            {
                                                imagesrc: "/projects/cinemateca/house6.jpg",
                                                imageAlt: "",
                                                isLink: false
                                            },
                                        ]} />
                                </ProjectCard>
                            </ProjectSection>

                            <ProjectSection id={"ProjectConclusion"}
                                setProjectSectionProgress={setprojectSectionConclusionProgress}
                            >
                                <ProjectCard
                                    title={"Outcome"}
                                    description={"I took a fresh approach by restructuring and redesigning the website to create a more intuitive and enjoyable experience. The focus was on improving content hierarchy, reducing cognitive load, and making navigation clearer and more accessible."}
                                >
                                    <Card.Text>The final design brings clarity, visual harmony, and a modern asthetic while staying true to the institution's mission. You can explore the full project and code throught the links below.</Card.Text>
                                </ProjectCard>
                                <ProjectCard
                                    title={"Reflection & Learnings"}
                                    description={"Since this was my first full UX/UI project, some decisions reflect the fact that I was still learning. From the beginning, I relied on my cinematic sensibility, since I didn't just want to redesign the website, but to reimagine it as something clear, functional, and truly useful for real users."}
                                >
                                    <Card.Text>Balancing respect for the original with a fresh, cinematic fell was challenging, especially when defining the colour palette and homepage layout. After exploring several direection,  I chose a yellow-gold tone: emotional, warm, and rooted in cinema's heritage.</Card.Text>
                                    <Card.Text>The design phase was intense, as I learned to think from the user's perspective, work with new tools, and create a visual engaging structure. The prototyping stage became a turning point, showing me undestand how subtle interactions and motion can bring a design to life without overwhelming the user. </Card.Text>
                                    <Card.Text>The code phase pushed me even further. Translating design into a responsive, functional website was constant cycle of building, testing, breaking, and refining. Integrating my ideas within Bootstrap's framework was challenging but taught me how design systems can streamline development without losing creativity or usability.</Card.Text>
                                    <Card.Text>This project took me me further than I expected. Even with areas I'd like to refine, I'm pround of how far I've grown. Above all, I learned that design is never finised. It evolves, just a film in production.</Card.Text>
                                </ProjectCard>
                            </ProjectSection>

                        </Col>
                    </Row>
                    <ProjectsBreackLine />
                    <div style={{ marginTop: 20 }}>
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

