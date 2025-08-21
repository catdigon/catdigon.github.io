import styled from "styled-components";

export const StyledOtherCard = styled.div`

    .card{
        --bs-card-bg: transparent;
        --bs-card-border-color: transparent;    
    }

    p{
        margin-bottom: 2rem;
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

export const StyledImageCard = styled.div`
    justify-items: center;
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
`