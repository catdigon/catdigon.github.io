import GradientArea from "../GradientArea/GradientArea";
import { StyledHeader } from "../Header/Header.styled";
import ProjectsBreackLine from "../HomePage/BreakLine/ProjectsBreak";
import DisplayOtherProjectsGrid from "./OtherProjectsCards/OtherProjectsGridDisplay";
import HeaderTextOtherProject from "./OtherProjectsTextHeader";

export default function OtherProjectsLayout() {

    return (

        <>
            <StyledHeader />
            

            <GradientArea
            startChildren={<HeaderTextOtherProject />}>
                <ProjectsBreackLine />

                <DisplayOtherProjectsGrid />

            </GradientArea>
        </>
    )
}