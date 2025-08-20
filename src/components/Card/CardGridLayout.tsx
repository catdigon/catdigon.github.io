import CardLayout from "./Card";
import { StyledContainerArea, StyledGridCards } from "./CardGrid.Layout.styled";

interface Props{
    title?: string;
    data: any;
    showText?: boolean;
}

export default function ProjectsArea( {title, data, showText}: Props ) {

    return(
        <>
        <StyledContainerArea>
            <StyledGridCards>
                <h1>{title}</h1>
                <CardLayout data={data} showText={showText}></CardLayout>
            </StyledGridCards>
        </StyledContainerArea>
        </>
    )
}