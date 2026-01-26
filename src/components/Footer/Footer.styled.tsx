import styled from "styled-components";

export const StyledFooter = styled.div`
    display: flex;
    padding: 100px 72px;

    @media (max-width: 768px) {
        padding: 18px;
    }
    
    background-color: white;
    flex-direction: column;
    gap: 32px;

    h2{
        font-size: 3rem;
        line-height: 3rem;
    }

    a{
        color: black;
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline
        }
    
    p{
    font-size: 14px
    }
    `

export const StyledEmailLink = styled.div`
    a{  
        padding-left: 4px;
        display: flex;
        font-size: 24px;
    }
`
