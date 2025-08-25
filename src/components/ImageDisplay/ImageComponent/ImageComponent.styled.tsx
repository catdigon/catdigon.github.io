import styled from "styled-components";

export const StyledImageArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;

    a{
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .img-caption{
        justify-self: anchor-center;
        padding-top: 4px;
    }
`

export const StyledCardImg = styled.div`
    max-height: 600px;
    overflow: auto;
    border-radius: 6px;

    @media (max-width: 768px) {
        height: 220px;
    }
`
