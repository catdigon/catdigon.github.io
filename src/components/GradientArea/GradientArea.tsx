import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    id?: string;
}


export default function GradientArea( {children, id }: Props ) {

    return(

        <>
        <div id={id} />
                <BodyContainer>
                {children}
                </BodyContainer>
        </>

    )
}

export const BodyContainer = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-self: anchor-center;
`