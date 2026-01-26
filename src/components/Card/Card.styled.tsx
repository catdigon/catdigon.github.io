import styled from "styled-components";

export const StyledCardImgContainer = styled.figure`
    height: 100%;
    width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease-in-out;
  }

  @media (max-width: 767px) {
  padding-top: unset;
  position: relative;

  }
`

export const StyledCard = styled.div`  
  .card-body {
  position: absolute;
  justify-content: space-between;
  align-self: self-end;
  z-index: 1;
  color: white;
  background-image: linear-gradient(0deg, #000, #f1f1f100);
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  }


  .card-content{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  }

  .card-tools{
  padding: 1rem;
  display: flex;
  }

  &:hover img {
    transform: scale(1.04);
  }

 @media (max-width: 767px)  {
    .card-body{
    flex-direction: column;
    align-items: flex-start;
    }

    .card-content,
    .card-tools{
    padding: 0}
    }
`