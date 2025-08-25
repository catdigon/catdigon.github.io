import CardCarousel from "../../../ImageDisplay/Carousel/CardCarousel";
import ProjectCard from "../ProjectCard/ProjectCard";


export default function ProjectSectionTwo() {
    return (
        <>
            <ProjectCard title={"Visual & Contextual Research"} 
            description={"To support the identity of Cinemateca Portuguesa, I wanted the website to reflect not only the institution’s mission but also the richness of national film culture. I drew visual inspiration from Portuguese film posters, archival material, and the Cinemateca's own colletion."} 
            >
                <CardCarousel images={["/cinemateca.jpg"]} imageAlt={""} isLink={false} />
            </ProjectCard>
        </>
    )
}