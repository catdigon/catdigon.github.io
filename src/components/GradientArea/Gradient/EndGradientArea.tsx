import styled from "styled-components"

export default function EndGradientArea() {

    return (
        <>
         <Gradient />
        </>
    )
}

const Gradient = styled.div`
background: linear-gradient(0deg,rgba(158, 215, 224, 0) 0%, rgba(158, 215, 224, 0.6) 50%, rgba(158, 215, 224, 1) 100%);
height: 10rem;
width: 100%;
`