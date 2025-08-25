import { Card } from "react-bootstrap";
import ImageProjectDisplay from "../../../ImageDisplay/ImageComponent/ImageComponent";
import CardList from "../../../List/List";
import CardCarousel from "../../../ImageDisplay/Carousel/CardCarousel";
import ProjectCard from "../ProjectCard/ProjectCard";


export default function ProjectSectionTwo() {
    return (
        <>
            <ProjectCard
                title={"Define the Concept"}
                description={"To start the project, the professor provided a basic structure that all students were expected to follow. This included a homepage, an about page, a list of products or items, a news section, and a contact page with a form."}
            >
                <ImageProjectDisplay imageSrc={"/cinemateca.jpg"} imageAlt={"Custom sized image capation"} isLink={true} />

                <Card.Text>When I decided to focus my project on Cinemateca Portuguesa, I realized that the website needed to be designed to serve at least two types of users: frequent visitiors and first-time guests.</Card.Text>
                <Card.Text>
                    <CardList>
                        <ul>
                            <li>Learn more about the institution and its mission</li>
                            <li>Find upcoming screenings and events</li>
                            <li>Explore the archive catalogue and discover available works</li>
                        </ul>
                    </CardList>
                </Card.Text>
            </ProjectCard>

            <ProjectCard title={"Visual & Contextual Research"} 
            description={"To support the identity of Cinemateca Portuguesa, I wanted the website to reflect not only the institution’s mission but also the richness of national film culture. I drew visual inspiration from Portuguese film posters, archival material, and the Cinemateca's own colletion."} 
            >
                <CardCarousel imageSrc={"/cinemateca.jpg"} imageAlt={"Website"} isLink={false} />
            </ProjectCard>
        </>
    )
}