import styled from "styled-components";

export const StyledCardImgContainer = styled.div`
  border-radius: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease-in-out;
  }
`

export const StyledCard = styled.div`
  .card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;

  a{
    text-decoration: none;
    }  

  .card-body{
      display: flex;
      flex-direction: row;
      z-index: 10;
      justify-content: space-between;
      align-items: flex-end;
      padding: 2rem;
      position: relative;
      border-radius: 16px;
    }

    .card-overlay {
    border-radius: 16px;
      position: absolute;
      inset: 0;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(255, 255, 255, 0) 100%
      );
      opacity: 0.5;
      transition: opacity 0.6s ease-in-out;
      z-index: 1;
  }

  .card-title{
    padding-top: 1rem;
  }


  &:hover img {
    transform: scale(1.04);
  }

  &:hover .card-overlay {
    opacity: 1;
  }

`