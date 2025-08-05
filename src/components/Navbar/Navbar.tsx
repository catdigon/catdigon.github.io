import { StyledLogo, StyledNavbar, StyleNavbarMenu } from "./Navbar.styled";
import Button from 'react-bootstrap/Button';
import ButtonTransparent from "../Button/ButtonTransparent";


export default function Navbar() {

    return (
        <StyledNavbar>
            <ButtonTransparent>
                <StyledLogo src="catdilogo.svg" />
            </ButtonTransparent>

            <StyleNavbarMenu>
                <li>
                    <ButtonTransparent>About</ButtonTransparent>
                </li>
                <li>
                    <ButtonTransparent>Projects</ButtonTransparent>
                </li>
                <li>
                    <Button variant="dark">Get in touch</Button>
                </li>
            </StyleNavbarMenu>

        </StyledNavbar>

    )
}