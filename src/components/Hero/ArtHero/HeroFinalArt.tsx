import styled from "styled-components";
import HeroArtGraphics from "./HeroArtGraphics";

export default function HeroArt() {

    return (
        <>
            <HeroArtStyled>
                <HeroArtGraphics />
            </HeroArtStyled>
        </>

    )
}

const HeroArtStyled = styled.div`
svg {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
  }
`