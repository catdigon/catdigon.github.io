import { OtherProjectsCardsText } from "../../data/otherProjects";
import ProjectsArea from "../Card/CardGridLayout";
import GradientArea from "../GradientArea/GradientArea";
import { StyledHeader } from "../Header/Header.styled";
import ProjectsBreackLine from "../HomePage/BreakLine/ProjectsBreak";
import HeaderTextOtherProject from "./OtherProjectsTextHeader";

export default function OtherProjectsLayout() {

    return (

        <>
            <StyledHeader id="OtherProjects"/>
            <GradientArea
                startChildren={<HeaderTextOtherProject />}>
                <ProjectsBreackLine />
                <ProjectsArea
                    title={"2023"}
                    data={OtherProjectsCardsText}
                    showText={true} />
            </GradientArea>
        </>
    )
}