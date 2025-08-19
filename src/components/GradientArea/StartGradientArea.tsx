import styled from "styled-components"

interface Props{
    children?: React.ReactNode;
}

export default function StratGradientArea( {children}: Props) {

    return (
        <>
         <Gradient>
            {children}
         </Gradient>
        </>
    )
}

const Gradient = styled.div`
background: #9ED7E0;
background: linear-gradient(180deg,rgba(158, 215, 224, 0) 0%, rgba(158, 215, 224, 0.6) 50%, rgba(158, 215, 224, 1) 100%);
height: 10rem;
width: 100%;
`