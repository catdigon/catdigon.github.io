import styled from "styled-components";

export const StyledCardImgContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const StyledCard = styled.div`
    .card{
        --bs-card-bg: transparent;
        --bs-card-border-color: transparent;
        padding: 2.5rem 0;
    
    }

    .card-body{
        padding: 8px 0;
    }

    .card-title{
        font-size: 22px;
    }

    .badge{
        margin-bottom: 10px;
    }

    .card-img-top{
        border-radius: var(--bs-card-border-radius);
    }
`

export const BadgeCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-bottom: 1rem;
`