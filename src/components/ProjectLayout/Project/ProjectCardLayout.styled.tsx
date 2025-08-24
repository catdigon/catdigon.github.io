import styled from "styled-components";

export const StyledProjectCard = styled.div`

    .card{
        --bs-card-bg: transparent;
        --bs-card-border-color: transparent;    
    }

    .badge{
        margin-bottom: 10px;
    }

    button{
        margin-top: 0.5rem;
    }

    .card-title{
        margin-bottom: 6px;
    }

    .card-body{
        padding: 0;
         margin-top: 40px
    }


`

export const BadgeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px
`