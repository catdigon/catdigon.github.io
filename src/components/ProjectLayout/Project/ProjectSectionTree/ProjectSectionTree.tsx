import { Card } from "react-bootstrap";
import CardList from "../../../List/List";
import CardCarousel from "../../../ImageDisplay/Carousel/CardCarousel";
import ProjectCard from "../ProjectCard/ProjectCard";


export default function ProjectSectionTree() {
    return (
        <>
            <ProjectCard
                title={"Design & Prototyping"}
                description={"The design and prototyping phase was divide intro two main stages, with feedback collected after each iteration. The first state focused on designing the website for visual consistency, improved information architecture, and clearer layout organization. The second state emphasized refining components and integrating interactive behaviors across pages, creating a more dynamic and user-friendly experience."}
            >
                
                <Card.Subtitle>Key steps in the process:</Card.Subtitle>
                <Card.Text>
                    <CardList>
                        <ul>
                            <li style={{ fontWeight: "500" }}>
                                Reducing and reorganizing the homepage
                            </li>
                            <div style={{ marginTop: "-10px" }}>
                                The original homepage was extremely long and visually overwhelming.
                                I streamlined the layout and prioritized the access to upcomin events, the film archive,
                                and lastest news. </div>

                            <li style={{ fontWeight: "500" }}>
                                Redesigning the naviation menu
                            </li>
                            <div style={{ marginTop: "-10px" }}>
                                The original structure was confusing, making it difficult to find essential sections like the digital archive.
                                I reorganized the menu for better clarity and added shorcuts on the homepage for quicker access. </div>
                        </ul>
                    </CardList>
                </Card.Text>
                <CardCarousel imageSrc={"/cinemateca.jpg"} imageAlt={"Website"} isLink={true} />
            </ProjectCard>



        </>
    )
}