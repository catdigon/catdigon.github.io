import styled from "styled-components";

export const StyledOtherCard = styled.div`

    .card{
        --bs-card-bg: transparent;
        --bs-card-border-color: transparent;    
    }

    p{
        margin: 0 !important;
        padding-bottom: 8px;
    }
    
    .badge{
        margin-bottom: 10px;
    }

    button{
        margin-top: 0.5rem;
    }

    .card-img-top{
        border-radius: var(--bs-card-border-radius);
    }

    .figure{
        align-self: anchor-center;
    }
`

export const CardBlock = styled.div`
    margin-bottom: 1.5rem;

    .card-title{
        font-size: 22px;
    }
`

export const StyledImageCard = styled.div`
    justify-items: center;
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
`