import styled from "styled-components";

export const StyledNavbarContainer = styled.div<{$scrolled: boolean}>`
  position: fixed;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  background: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: ${({ $scrolled }) => ($scrolled ? 1 : 0)};
    transition: opacity 0.4s ease-in-out;
  }

`
export const StyledNavbar = styled.div`
    background: white;
    padding: 8px 32px;
    width: 100%;
    justify-self: anchor-center;

    .container{
      max-width: unset;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media (max-width: 768px){
        .container{
          padding: 0;
        }
    }

`
export const NavbarMobile = styled.div`
      display: flex;

      @media (max-width: 768px){
        flex-wrap: nowrap;
        width: 100%;
        justify-content: space-between;
        }
`