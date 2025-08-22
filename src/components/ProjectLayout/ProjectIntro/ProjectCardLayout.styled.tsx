import styled from "styled-components";

export const StyledProjectCard = styled.div`

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