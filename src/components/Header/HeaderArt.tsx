import styled from "styled-components";
import HeaderArtGraphics from "./HeaderArtGraphics";

export default function HeaderArt() {

    return (
        <>
            <HeaderArtStyled>
                <HeaderArtGraphics />
                </HeaderArtStyled>
        </>

    )
}

const HeaderArtStyled = styled.div`
margin-top: 2rem;
`