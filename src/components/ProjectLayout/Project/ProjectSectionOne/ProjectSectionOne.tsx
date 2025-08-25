import { Card } from "react-bootstrap";
import ImageProjectDisplay from "../../../ImageDisplay/ImageComponent/ImageComponent";
import CardList from "../../../List/List";
import ProjectCard from "../ProjectCard/ProjectCard";


export default function ProjectSectionOne() {
    return (
        <>
            <ProjectCard
                title={"Define the Concept"}
                description={"To start the project, the professor provided a basic structure that all students were expected to follow. This included a homepage, an about page, a list of products or items, a news section, and a contact page with a form."}
            >

                <ImageProjectDisplay imageSrc={"/cinemateca.jpg"} imageAlt={"Custom sized image capation"} isLink={false} />

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
        </>
    )
}