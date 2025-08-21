import GradientArea from "../GradientArea/GradientArea";
import { StyledHeader } from "../Header/Header.styled";
import ProjectsBreackLine from "../HomePage/BreakLine/ProjectsBreak";
import HeaderTextOtherProject from "./OtherProjectsTextHeader";
import OtherProjectsCards from "./OtherProjectsCards/OtherProjectsGrid";


export default function OtherProjectsLayout() {

    return (

        <>
            <StyledHeader id="OtherProjects" />
            <GradientArea
                startChildren={<HeaderTextOtherProject />
                }>

                <ProjectsBreackLine />
                <OtherProjectsCards />
                
            </GradientArea>
        </>
    )
}