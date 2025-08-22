import GradientArea from "../GradientArea/GradientArea";
import { StyledHeader } from "../Header/Header.styled";
import ProjectsBreackLine from "../HomePage/BreakLine/ProjectsBreak";
import HeaderTextOtherProject from "./OtherProjectsHeader";

interface Props {
    children : React.ReactNode
}

export default function OtherProjectsLayout( {children}: Props) {

    return (

        <>
            <StyledHeader id="OtherProjects" />
            
            <GradientArea 
                startChildren={<HeaderTextOtherProject />
                }>
                    
                <ProjectsBreackLine />
                
                {children}
                
            </GradientArea>
        </>
    )
}