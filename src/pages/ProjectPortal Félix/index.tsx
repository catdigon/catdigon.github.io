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

export default function ProjectPortalFelix({ projectID }: ProjectProps) {

    const filteredProjects = ProjectsCardsText?.filter(
        (project) => project.id !== projectID
    ) || [];

    return (
        <>
            <HeroProject
                id=""
                color="#F8C200"
                title={"Portal Félix"}
                text={"Redesigning a film database to support complex research workflows through UX-driven insights."}
                text2="User Research, UX Design, Interaction Design, Prototyping"
            >
                <ImageHero
                    image={"/projects/portal/portal.webp"}
                    alt={"Portal Felix Mockup"}
                    imageMobile={"/projects/portal/portal.webp"} />
            </HeroProject>

            <SectionArea marginTop="5rem" boxShadow={false} className="gap-8 lg:px-32 2xl:px-60">

                <ProjectIntroCard projectId={projectID}
                />

                <ImageDisplay
                    imageDesktop={"/projects/portal/mock-pc.png"}
                    imageMobile={"/projects/portal/mock-pc-mobile.webp"}
                    alt="Computer screen mockup displaying the platform's homepage"
                    className="w-full max-w-200 h-auto mx-auto " />

                <ProjectSection projectId={projectID}
                    title={"Challenges"}>

                    <ol className="my-4 list-decimal list-inside space-y-4 marker:font-bold">
                        <li >
                            <span className="font-bold">Complex Navigation: </span>
                            Users struggled to explore content efficiently and understand the platform's structure.
                        </li>
                        <li>
                            <span className="font-bold">Ineffective Search & Feedback: </span>
                            The rearch experience was complex and unintuitive, offering limited guidance for errors or empty results.
                        </li>
                        <li>
                            <span className="font-bold">Usability & Accessibility Gaps: </span>
                            Navigation, search, and interface elements lacked clarity and WCAG compliance, restricting access to key content.
                        </li>
                        <li>
                            <span className="font-bold">Research-Focused Needs: </span>
                            Account creation and personalized tools were non-functional, and workflows did not support researchers' needs, leading to repetitive and inefficient actions.
                        </li>
                        <li>
                            <span className="font-bold">Academic Context:</span>
                            As my first in-depth UX case study, the project required continuous learning and iterative problem-solving.
                        </li>
                    </ol>
                </ProjectSection>

                <ImageDisplay
                    imageDesktop={"/projects/portal/mocks-grid.png"}
                    imageMobile={"/projects/portal/mocks-grid-mobile.webp"}
                    alt="Multiple tablet mockups showing various pages, highlighting the responsive design of the wireframes"
                    className="w-full max-w-300 h-auto mx-auto " />


                <ProjectSection projectId={projectID}
                    title={"My Approach"}>

                    <div className="pt-4">
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }} className="pb-3">Research & Evaluation</h4>
                        <ul className="list-disc list-inside space-y-3">
                            <li><span className="font-bold">Heurist Evaluation:</span> Applied Nielsen's principles to indentify critical issues in clarity, search, and error prevention</li>
                            <li> <span className="font-bold">User Testing:</span> Observed three representative profiles performing key tasks, uncovering unclear flows, inefficient navigation, and lack of feedback</li>
                            <li> <span className="font-bold">Accessibility Assessment:</span> Tested with screen readers, zoom, and AccessMonitor, revealing gaps in alt text, focus management, and color (WCAG 2.1)</li>
                        </ul>

                        <ImageDisplay
                            imageDesktop={"/projects/portal/mock-displays.png"}
                            imageMobile={"/projects/portal/mock-displays-mobile.webp"}
                            alt="Desktop and laptop mockups displaying findings, with two zoom user testing sessions in view"
                            className="w-full max-w-200 h-auto mx-auto pt-7 pb-3" />
                    </div>


                    <div className="pt-1">
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }} className="pb-3">Insights & Strategy</h4>
                        <ul className="list-disc list-inside space-y-3">
                            <li><span className="font-bold">User-Centered Insights:</span>  Defined researchers as the primary users, with specific needs for searching, selecting, and cataloguing films, guiding all design decisions</li>
                            <li> <span className="font-bold">Prioritized Feautures:</span> Focused on enabling core workflows such as account creation, login, and personalized tools</li>
                            <li> <span className="font-bold">User Flows & Sitemap:</span> Mapped complete flows in Octopus and Figma, addressing navigation gaps and improving feedback</li>
                        </ul>

                        <ImageDisplay
                            imageDesktop={"/projects/portal/octo-flow.webp"}
                            imageMobile={"/projects/portal/octo-flow-mobile.webp"}
                            alt="Platform architecture in Octopus.io"
                            className="w-full max-w-150 h-auto mx-auto pt-7 pb-3" />
                    </div>

                    <div className="pt-1">
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }} className="pb-3">Prototyping & Design</h4>
                        <ul className="list-disc list-inside  space-y-3">
                            <li><span className="font-bold">Low-Fidelity Prototypes:</span> Built paper designs based on the new user flows, incorporating early modular thinking and reusable component for scalable design</li>
                            <li> <span className="font-bold">User Testing:</span> Validated paper prototypes with a user performing key tasks, collecting insights to refine flows and interface clarity</li>
                            <li> <span className="font-bold">Medium-Fidelity Figma Prototypes:</span> Developed interactive wireframes with component-based design, variants, and auto-layouts for flexibility across content and screen sizes</li>
                        </ul>

                        <ImageDisplay
                            imageDesktop={"/projects/portal/proto.png"}
                            imageMobile={"/projects/portal/proto-mobile.webp"}
                            alt="Figma prototype screenshot showing frames and the connections between them"
                            className="w-full max-w-200 h-auto mx-auto pt-6" />
                    </div>
                </ProjectSection>

                <ProjectSection projectId={projectID}
                    title={"Results"}>
                    <p>By discovering a critical usability failure with a non-functional account creation, this project highlighted how broken workflows impact trust and user efficiency. This insight directly impacted user trust and efficiency, becoming a turning point for the redesign and guiding all subsequent decisions.</p>
                    <p>The final outcome delivers a user-centered and research-focused solution that simplifies complex workflows and makes exploring the Portal Félix intuitive. Key improvements include a search tool with autocomplete, fully functional account creation and login, profile management, a favorites system, and adaptive navigation responsive to the user's state. </p>
                    <p>Overall, the redesign supports and respects users by addressing the platform's original pain points and enabling a more reliable and efficient experience.</p>
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
            
</SectionArea >
        </>
    )
}

