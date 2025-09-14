import styled from "styled-components";

export const StyledCardImgContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--bs-card-border-radius);
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }
`

export const StyledCard = styled.div`
    .card{
        --bs-card-bg: transparent;
        --bs-card-border-color: transparent;
        margin: 2rem 0;
        padding: 0.5rem;
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

    a{
        text-decoration: none;
    }  

    .card-link:hover img {
        transform: scale(1.06);
        }
`

export const BadgeCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-bottom: 1rem;
`