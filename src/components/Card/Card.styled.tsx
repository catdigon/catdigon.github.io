import styled from "styled-components";

export const StyledCardImgContainer = styled.div`
    position: relative;
  overflow: hidden;
  border-radius: 16px;
  
  img {
    display: block;
    width: 100%;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }

  &:hover::after {
    content: "";
    position: absolute;
    inset: 0;
    transition: background-color 0.2s ease;
  }
`

export const StyledCard = styled.div`
    .card{
        margin: 1rem 0;
        border-radius: 16px;
        width: 100%;
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