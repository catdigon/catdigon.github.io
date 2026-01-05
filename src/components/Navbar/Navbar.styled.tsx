import styled from "styled-components";

export const StyledNavbarContainer = styled.div<{$scrolled: boolean}>`
  position: fixed;
  width: 100%;
  z-index: 99;
  background: transparent;
  display: flex;
  justify-content: center;

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

  #btn-toggle{
    border: none;
  }

  #btn-toggle:hover{
        color: #0080A3;
        filter: drop-shadow(0 0 10px rgb(0, 128, 163))
          drop-shadow(0 0 30px rgb(0, 128, 163)) !important;
  }

  .navbar-toggler:focus{
    box-shadow: none;
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

    .button-transparent-style {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0.5rem 1rem;
    color: #212529;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .button-transparent-style:hover {
    color: #0080A3;
    text-decoration: none;
    filter: drop-shadow(0 0 10px rgba(0,128,163,0.4))
            drop-shadow(0 0 20px rgba(0,128,163,0.2));
  }
`
export const StyledLogo = styled.div`
   .navbarlogo {
    color: currentColor; 
    text-decoration: none; 
  }

  .navbarlogo:hover {
    color: #0080A3;
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