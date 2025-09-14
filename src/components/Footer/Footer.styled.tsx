import styled from "styled-components";

export const StyledFooterContainer = styled.div`
display: flex;
justify-content: center;
`

export const StyledFooter = styled.footer`

    .row{
        position: relative;
        padding: 14px 22px;
    }

    background: white;
    border-radius: 14px;
    margin: -2px 48px 34px;
    box-shadow: 0 0.9px 4px 0 var(--Shadow-6, rgba(0, 0, 0, 0.08)), 0 2.6px 8px 0 var(--Shadow-4, rgba(0, 0, 0, 0.06)), 0 5.7px 12px 0 var(--Shadow-3, rgba(0, 0, 0, 0.05)), 0 15px 15px 0 var(--Shadow-2, rgba(0, 0, 0, 0.04));
    max-width: 1400px;
    width: 80%;
    justify-self: anchor-center;

    span{
        font-family: "Outfit", sans-serif !important;
        font-size: 3.5rem;
        font-weight: 600;
    }

    a{
        color: black;
        text-decoration: none;
    }

    .footeright{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
    }
    `

