import { StyledLogo, StyledNavbar, StyleNavbarMenu } from "./Navbar.styled";
import ButtonTransparent from "../Button/ButtonTransparent";
import ButtonCTA from "../Button/ButtonCTA";
import { Button } from "react-bootstrap";
import NavbarLogo from "./NavbarLogo";


export default function Navbar() {

    return (
        <StyledNavbar role="contentinfo">

            <StyledLogo>
            <Button variant="link"
            aria-label="Homepage" className="navbarlogo">
                <NavbarLogo />
            </Button>
            </StyledLogo>

            <StyleNavbarMenu>
                <li>
                    <ButtonTransparent aria-label="About me section">About</ButtonTransparent>
                </li>
                <li>
                    <ButtonTransparent aria-label="Projects section">Projects</ButtonTransparent>
                </li>
                <li>
                    <ButtonCTA aria-label="Contacts section">Get in touch</ButtonCTA>
                </li>
            </StyleNavbarMenu>

        </StyledNavbar>

    )
}