import ImageProjectDisplay from "../../../ImageDisplay/ImageComponent/ImageComponentDefault";
import ProjectCard from "../ProjectCard/ProjectCard";



export default function ProjectSummary() {

    return (
        <>
        <ProjectCard 
        title={"The Challenge"} 
        description={"The original website presents a dense, overwhelming landing page, a cluttered menu, and an outdated visual hierarchy. For new users, it's easy to get lost."} 
        >
         <ImageProjectDisplay imageSrc={"/cinemateca.jpg"} imageAlt={"Cinemateca Website"} isLink={false} />   
        </ProjectCard>
        </>
    )
}