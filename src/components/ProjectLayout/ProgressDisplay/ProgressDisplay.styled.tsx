import styled from "styled-components";

export const StyledProgressStickyArea = styled.div`
    position: sticky;
    top: 20vh;

    a{
        width: 80%;
        display: flex;
        padding: 0.4rem 0rem;
        color: currentColor;
        text-decoration: none;
        position: relative;
    };

    .progress-bar{
        position: absolute;
        bottom: 0;
        left: 0;
        background: #0080a380;
        border-radius: 10px;
        transition: width 0.1s,
    }
`