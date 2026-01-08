import styled from "styled-components";

export const StyledCardImgContainer = styled.div`
    img{
        transition: transform 0.4s ease;
    }
`

export const StyledCard = styled.div`
    .card{
        margin: 1rem 0;
        padding: 0.5rem;
    }

    .card-body{
        padding: 16px 8px;
    }

    a{
        text-decoration: none;
    }  

    .card:hover img {
        transform: scale(1.06);
        }
`