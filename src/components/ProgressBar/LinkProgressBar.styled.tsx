import styled from "styled-components";

export const StyledLinkProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    width: 70%;
    padding-bottom: 34px;

    a{
        color: currentColor;
        text-decoration: none;
    }

    a:hover{
        font-weight: 500;
    }

    .section-name{
        cursor: pointer;
    }
`