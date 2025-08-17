import { StyledLogo, StyledNavbar, StyleNavbarMenu } from "./Navbar.styled";
import ButtonTransparent from "../Button/ButtonTransparent";
import ButtonCTA from "../Button/ButtonCTA";
import { Button } from "react-bootstrap";
import NavbarLogo from "./NavbarLogo";
import { Link } from "react-router";
import { appRoutes } from "../../data/constants";
import { HashLink } from 'react-router-hash-link';


export default function Navbar() {

    return (
        <StyledNavbar role="contentinfo">

            <StyledLogo>
                <Link to={appRoutes.HOME}>
                    <Button variant="link"
                        aria-label="Homepage" className="navbarlogo">
                        <NavbarLogo />
                    </Button>
                </Link>

            </StyledLogo>

            <StyleNavbarMenu>
                <li>

                    <Link to={appRoutes.ABOUT_ME}>
                        <ButtonTransparent aria-label="About me section">

                            About

                        </ButtonTransparent>
                    </Link>
                </li>
                <li>
                    <HashLink to={`${appRoutes.HOME}#Projects`}>
                    <ButtonTransparent aria-label="Projects section">Projects</ButtonTransparent>
                    </HashLink>
                </li>
                <li>

                    <a href='#Contacts'>
                        <ButtonCTA aria-label="Contacts section">Get in touch</ButtonCTA>
                    </a>

                </li>
            </StyleNavbarMenu>

        </StyledNavbar>

    )
}