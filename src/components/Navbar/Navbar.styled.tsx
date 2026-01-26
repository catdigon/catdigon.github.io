import styled from "styled-components";

export const StyledNavbarContainer = styled.div`
  position: sticky;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  background: white;
  top: 0;

  .menu{
    gap: 1rem;
  }
  

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: opacity 0.4s ease-in-out;
  }

`