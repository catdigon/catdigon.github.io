import styled from "styled-components";
import EndGradientArea from "./EndGradientArea";
import { MiddleGradientArea } from "./MiddleGradientArea";
import StartGradientArea from "./StartGradientArea";


interface Props {
    startChildren?: React.ReactNode;
    children: React.ReactNode;
    id?: string;
}


export default function GradientArea( { startChildren, children, id }: Props ) {

    return(

        <>
        <div id={id} />
            <StartGradientArea>
                {startChildren}
            </StartGradientArea>
            <MiddleGradientArea>
                <BodyContainer>
                {children}
                </BodyContainer>
            </MiddleGradientArea>
            <EndGradientArea />
        </>

    )
}

export const BodyContainer = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-self: anchor-center;
`