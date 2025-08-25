import ProjectSectionOne from "./ProjectSectionOne/ProjectSectionOne";
import ProjectIntroCard from "./ProjectIntro/ProjectIntroCard";
import ProjectConclusion from "./ProjectConclusion/ProjectConclusion";

export default function ProjectDisplay() {

    return (
        <>
            <ProjectIntroCard 
            label={"Academic"} 
            title={"Cinemateca Website"} 
            text={"This was the first project I developed from inital concept to final implementation. The bried was to design a website for a product-based brand, but I chose to reinterpret it by redesigning the Cinemateca Portuguesa website. My goal was to improve navigation, usability, and accessibility while respecting the institution's identity and giving it a fresh, contemporary look."} 
            date={"October 2024 - April 2025"} 
            tools={["Figma", "HTML"]} />
            <ProjectSectionOne />

            <ProjectConclusion />
        </>
    )

}