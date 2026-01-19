import { GoLinkExternal } from "react-icons/go";
import ButtonCTA from "../../components/Button/ButtonCTA";
import Hero from "../../components/Hero/Hero";
import CardCarousel from "../../components/ImageDisplay/Carousel/CardCarousel";
import ImageDisplaySimple from "../../components/ImageDisplay/ImageComponent/ImageComponentDefault";
import ImageDisplayScroll from "../../components/ImageDisplay/ImageComponent/ImageComponentScrool";
import CardListComplete from "../../components/List/ListComplete";
import CardListSimple from "../../components/List/ListSimple";
import ImageHero from "../../components/ProjectLayout/ImageHero/ImageHero";
import ProjectCard from "../../components/ProjectLayout/Project/ProjectCard/ProjectCard";
import ProjectIntroCard from "../../components/ProjectLayout/Project/ProjectIntro/ProjectIntroCard";
import SectionArea from "../../components/SectionsAreas/SectionArea";
import { ProjectsCardsText } from "../../data/projectsDesign";
import { FaGithub } from "react-icons/fa";
import ProjectsBreackLine from "../../components/BreakLine/ProjectsBreak";
import CardLayout from "../../components/Card/CardLayout";

interface ProjectProps {
    projectID: string;
}

export default function ProjectCinemateca({ projectID }: ProjectProps) {

    console.log(projectID);

    const filteredProjects = ProjectsCardsText?.filter(
        (project) => project.id !== projectID
    ) || [];

    return (
        <>
            <Hero
                id=""
                title={"Cinemateca"}
                text={"A redesign of the Cinemateca Portuguesa website, originally created in 2013. This project explored how to improve navigation, accessibility, and visual coherence, while respecting the institution and its mission with a more modern visual."}
            >
                <ImageHero
                    image={"/projects/cinemateca/cinemateca-broswer.webp"}
                    alt={"Homepage Mockup"}
                    imageMobile={"/projects/cinemateca/cinemateca-broswer-mobile.webp"} />
            </Hero>

            <SectionArea
                id="Summary"
                color="#F88B00">



                
                <div style={{ margin: "6rem 0" }}>
                                                <div>
                              
                                <ProjectIntroCard projectId={projectID}
                                description={[
                                    "This was the first project I developed from initial concept to final implementation. The brief asked for a website for a product-based brand, but I chose to reinterpret it by redesigning the Cinemateca Portuguesa website. My goal was to improve navigation, usability, and accessibility while respecting the institution's identity and giving it a fresh, contemporary look.",
                                    "This approach allowed me to explore branding, storytelling, and interface design from a more authentic perspective — balancing visual coherence with clear structure and user-focused interaction."
                                ]}
                            />

                            <ProjectCard
                                title={"The Challenge"}
                                description={[
                                    "The original website was:"
                                ]}
                            >
                                <CardListSimple list={[
                                    "Overwhelming, with an excessively long landing page",
                                    "Confusing to navigate, especially for new users",
                                    "Outdated in terms of hierarchy and accessibility"
                                ]} />
                                <ImageDisplayScroll
                                    imageSrc={"/projects/cinemateca/landingPage.webp"}
                                    imageAlt={"Original Cinemateca homepage"}
                                    isLink={true}
                                    imageMobile={"/projects/cinemateca/landingPage-mobile.webp"}
                                    imageLink={"/projects/cinemateca/landingPage.webp"} />
                            </ProjectCard>



                            <ProjectCard
                                title={"Define the Concept"}
                                description={[
                                    "To start the project, I began by identifying the key user goals, taking into consideration the website structure I needed to follow.",
                                ]}
                            >
                                <CardListSimple
                                    title="Key user goals:"
                                    list={[
                                        "Learn about the institution and its mission",
                                        "Find upcoming screenings and events",
                                        "Explore the film archive",
                                        "Read news and editorial content",
                                        "Access contact and location information"
                                    ]} />
                                <ImageDisplaySimple
                                    imageSrc={"/projects/cinemateca/structure.webp"}
                                    imageAlt={"Site flowchart"}
                                    isLink={false}
                                    imageMobile={"/projects/cinemateca/structure-mobile.webp"}
                                    imageLink={"/projects/cinemateca/structure.webp"} />

                            </ProjectCard>
                            <ProjectCard
                                title={"Research"}
                                description={[
                                    "To support the identity of Cinemateca Portuguesa, I wanted the website to reflect not only the institution's mission but also the richness of national film culture. For visual inspiration, I drew from Portuguese film posters, archival materials, and the Cinemateca's own divlection.",
                                    "In parallel, I studied how other cinema-related institutions structured their websites. I analyzed content organization, navigation flows, and design components, with a strong focus on usability and accessibility."
                                ]}
                            >
                                <ImageDisplaySimple
                                    imageSrc={"/projects/cinemateca/reference.webp"}
                                    imageAlt={"Site references with notes and components & flow"}
                                    isLink={true}
                                    imageMobile={"/projects/cinemateca/reference-mobile.webp"}
                                    imageLink={"/projects/cinemateca/references.webp"} />

                            </ProjectCard>




                            <ProjectCard
                                title={"Design & Prototyping"}
                                description={[
                                    "The design and prototyping phase was divided into two main stages, with feedback after each iteration. First, I worked on visual consistency, clear layouts, and improved information architecture. Then, I refined components and added interactions to create a more dynamic, user-friendly experience.",
                                ]}
                            >
                                <CardListComplete
                                    title="Key steps in the process:"
                                    list={[
                                        {
                                            title: "Reducing and reorganizing the homepage",
                                            text: "The original homepage was extremely long and visually overwhelming. I streamlined the layout and prioritized the access to upcoming events, the film archive, and the latest news."
                                        },
                                        {
                                            title: "Redesigning the navigation menu",
                                            text: "The original structure was confusing, making it difficult to find essential sections like the digital archive. I reorganized the menu for better clarity and added shortcuts for quicker access."
                                        },

                                        {
                                            title: "Refining content cards",
                                            text: "I gave special attention to the design of event and news cards, which are highly interactive elements. The goal was to ppresent key information clearly while maintaining legibility and a balanced use of negative space."
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
                                            imageSrc: "/projects/cinemateca/components.webp",
                                            imageAlt: "Design iterations for three components",
                                            isLink: true,
                                            imageMobile: "/projects/cinemateca/components-mobile.webp",
                                            imageLink: "/projects/cinemateca/components.webp"
                                        },
                                        {
                                            imageSrc: "/projects/cinemateca/components1.webp",
                                            imageAlt: "Homepage design iterations",
                                            isLink: true,
                                            imageMobile: "/projects/cinemateca/components1-mobile.webp",
                                            imageLink: "/projects/cinemateca/components1.webp",
                                        },
                                    ]} />
                            </ProjectCard>



                            <ProjectCard
                                title={"From Prototype to Code"}
                                description={[
                                    "The prototype was developed into a fully functional website using HTML, CSS, JavaScript, and Bootstrap. I implemented JSON to dynamically populate news and film pages, which strengthened my understanding of data handling. Adapting the design to Bootstrap components required some adjustments but allowed for faster implementation while maintaining visual consistency.",
                                    "Since the project was designed desktop-first, I had to rethink layouts and interactions to ensure a smooth mobile experience. Throughout development, I used GitHub for version control and documentation, following best practices to keep the code organized and maintainable.",
                                ]}
                            >
                                <ImageDisplaySimple
                                    imageSrc={"/projects/cinemateca/code.webp"}
                                    imageAlt={"Vsv Code: Folder organizations & index.html"}
                                    isLink={true}
                                    imageMobile={"/projects/cinemateca/code-mobile.webp"}
                                    imageLink={"/projects/cinemateca/code.webp"} />
                            </ProjectCard>
                            <ProjectCard
                                title={"Accessibility & Responsiveness"}
                                description={[
                                    "To ensure accessibility and responsiveness, I followed the Web Content Accessibility Guidelines (WCAG) and tested the site with Lighthouse, improving performance, SEO, and usability across devices. I used ARIA attributes to reinforce semantic structure and support assistive technologies, and added descriptive alt text to all images to make the content fully accessible to screen readers.",
                                ]}
                            >
                                <CardCarousel
                                    images={[
                                        {
                                            imageSrc: "/projects/cinemateca/house1.webp",
                                            imageAlt: "Landing page evaluation (Desktop) - Lighthouse results",
                                            isLink: false,
                                            imageMobile: "/projects/cinemateca/house1-mobile.webp",
                                            imageLink: "/projects/cinemateca/house1.webp",
                                        },
                                        {
                                            imageSrc: "/projects/cinemateca/house2.webp",
                                            imageAlt: "Landing page evaluation (Mobile) - Lighthouse results",
                                            isLink: false,
                                            imageMobile: "/projects/cinemateca/house2-mobile.webp",
                                            imageLink: "/projects/cinemateca/house2.webp",
                                        },
                                        {
                                            imageSrc: "/projects/cinemateca/house3.webp",
                                            imageAlt: "Products page evaluation (Desktop) - Lighthouse results",
                                            isLink: false,
                                            imageMobile: "/projects/cinemateca/house3-mobile.webp",
                                            imageLink: "/projects/cinemateca/house3.webp",
                                        },
                                        {
                                            imageSrc: "/projects/cinemateca/house4.webp",
                                            imageAlt: "Product detail page evaluation (Desktop) - Lighthouse results",
                                            isLink: false,
                                            imageMobile: "/projects/cinemateca/house4-mobile.webp",
                                            imageLink: "/projects/cinemateca/house4.webp",
                                        },
                                        {
                                            imageSrc: "/projects/cinemateca/house5.webp",
                                            imageAlt: "News article page evaluation (Mobile) - Lighthouse results",
                                            isLink: false,
                                            imageMobile: "/projects/cinemateca/house5-mobile.webp",
                                            imageLink: "/projects/cinemateca/house5.webp",
                                        },
                                        {
                                            imageSrc: "/projects/cinemateca/house6.webp",
                                            imageAlt: "Contacts page evaluation (Mobile) - Lighthouse results",
                                            isLink: false,
                                            imageMobile: "/projects/cinemateca/house6-mobile.webp",
                                            imageLink: "/projects/cinemateca/house6.webp",
                                        },
                                    ]} />
                            </ProjectCard>


                            <ProjectCard
                                title={"Outcome"}
                                description={[
                                    "The final design enhanced clarity, reduced cognitive load, and delivered a modern aesthetic aligned with Cinemateca's mission.",
                                ]}
                            >
                                <iframe
                                    title="Cinemateca Prototype in Figma"
                                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "6px", width: "100%", height: "50vh" }}
                                    src="https://embed.figma.com/proto/yzkj3eD8ZRNSNn8b7BOBle/Cinemateca-Final--Prototipo-?page-id=6%3A164&node-id=12-403&viewport=-50%2C359%2C0.31&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=12%3A403&embed-host=share"
                                    allowFullScreen>
                                </iframe>

                                <div style={{ display: "flex", marginBottom: "12px" }}>
                                    <a href="https://github.com/catdigon/cinemateca" target='_blank' rel='noopener'>
                                        <ButtonCTA>
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
                                    "This was my first full UX/UI project, and many decisions reflect my learning process. From the start, I relied on my cinematic sensibility — not just to redesign the website, but to reimagine it as something clear, functional, and meaningful for real users.",
                                    "Balancing respect for the original with a fresh, cinematic feel was challenging, especially when defining the divor palette and homepage layout. After testing different directions, I chose a yellow-gold tone: warm, emotional, and rooted in cinema's heritage.",
                                    "The design phase taught me to think from the user's perspective, explore new tools, and create engaging structures. Prototyping was a turning point, demonstrating how subtle interactions and motion can enhance a design without overwhelming it.",
                                    "Coding pushed me even further. Translating the design into a fully responsive site required constant cycles of building, testing, and refining. Adapting ideas into Bootstrap's framework was challenging, but it showed me how design systems can speed up development without losing creativity or usability.",
                                    "This project took me further than I expected. While there are areas I'd still like to refine, I'm proud of how much I've gdivn. Above all, I learned that design, like film, is never truly finished."
                                ]}
                                children={undefined} />



                        </div>
                    </div>
                    <ProjectsBreackLine />
                    <div style={{ marginTop: 40 }}>
                        <h3 style={{ justifySelf: "center", fontWeight: 600 }}>More projects</h3>
                        <CardLayout
                            data={filteredProjects}
                            showText={false}
                            showLabel={false} />
                    </div>


            </SectionArea>
        </>
    )
}