import styled from "styled-components";

export const StyledCardImgContainer = styled.figure`

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease-in-out;
  }
`

export const StyledCard = styled.div`  
  .card-body {
  justify-content: space-between;
  }

  .card-content{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  }

  &:hover img {
    transform: scale(1.04);
  }

`