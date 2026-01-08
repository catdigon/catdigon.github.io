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
        margin: 2rem 0;
        padding: 0.5rem;
    }

    .card-body{
        padding: 16px 8px;
    }

    .card-title{
        font-size: 22px;
    }


    a{
        text-decoration: none;
    }  

    .card:hover img {
        transform: scale(1.06);
        }
`