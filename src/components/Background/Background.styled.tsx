import styled from "styled-components";

export const StyleBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    
    background: url('/background.webp');
    background-size: cover;
    
    @media (max-width: 767px){
        background: url('/background-mobile.webp');
    background-size: cover;
    }
`