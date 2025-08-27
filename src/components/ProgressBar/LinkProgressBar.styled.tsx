import styled from "styled-components";

export const StyledLinkProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4px;
    width: 70%;

    a{
        color: currentColor;
        text-decoration: none;
    }

    a:hover{
        color: #0080A3;
        text-decoration: dotted;
        font-weight: 500;
    }

    .section-name{
        cursor: pointer;
    }
`