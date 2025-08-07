import { StyledLogo, StyledNavbar, StyleNavbarMenu } from "./Navbar.styled";
import Button from 'react-bootstrap/Button';
import ButtonTransparent from "../Button/ButtonTransparent";


export default function Navbar() {

    return (
        <StyledNavbar role="contentinfo">
            <ButtonTransparent aria-label="Homepage">
                <StyledLogo src="catdilogo.svg" />
            </ButtonTransparent>

            <StyleNavbarMenu>
                <li>
                    <ButtonTransparent aria-label="About me section">About</ButtonTransparent>
                </li>
                <li>
                    <ButtonTransparent aria-label="Projects section">Projects</ButtonTransparent>
                </li>
                <li>
                    <Button variant="dark" aria-label="Contacts section">Get in touch</Button>
                </li>
            </StyleNavbarMenu>

        </StyledNavbar>

    )
}