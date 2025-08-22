import { StyledContainerArea } from "./CardGridLayout.styled";

interface Props{
    children: React.ReactNode
}

export default function ProjectsArea( {children}: Props ) {

    return(
        <>
        <StyledContainerArea>
                {children}
        </StyledContainerArea>
        </>
    )
}