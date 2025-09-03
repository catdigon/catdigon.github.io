import styled from "styled-components";

export const StyledNavbarContainer = styled.div<{$scrolled: boolean}>`
  position: fixed;
  width: 100%;
  height: 128px;
  z-index: 99;
  background: transparent;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(0deg, rgba(158, 215, 224, 0) 0%, rgba(158, 215, 224, 0.8) 30%, rgba(158, 215, 224, 1) 80%);
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
    border-radius: 14px;
    margin: 34px 48px;
    padding: 4px 22px;
    box-shadow: 0 0.9px 4px 0 var(--Shadow-6, rgba(0, 0, 0, 0.08)), 0 2.6px 8px 0 var(--Shadow-4, rgba(0, 0, 0, 0.06)), 0 5.7px 12px 0 var(--Shadow-3, rgba(0, 0, 0, 0.05)), 0 15px 15px 0 var(--Shadow-2, rgba(0, 0, 0, 0.04));
    width: 80%;
    justify-self: anchor-center;

    .container{
      max-width: unset;
    }
`
export const StyledLogo = styled.div`
   .btn-link{
    --bs-btn-color: black;
   }

    .btn:hover{
            color: #0080A3;}

`