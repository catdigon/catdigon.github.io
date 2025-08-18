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
                    <Button
                        variant="link"
                        aria-label="Go to Homepage"
                        className="navbarlogo">
                        <NavbarLogo />
                    </Button>
                </Link>

            </StyledLogo>

            <StyleNavbarMenu>
                <li>

                    <Link to={appRoutes.ABOUT_ME}>
                        <ButtonTransparent
                            aria-label="Go to About me section">
                            About
                        </ButtonTransparent>
                    </Link>
                </li>
                <li>
                    <HashLink to={`${appRoutes.HOME}#Projects`}>
                        <ButtonTransparent
                            aria-label="Go to Projects section">
                            Projects
                        </ButtonTransparent>
                    </HashLink>
                </li>
                <li>


                    <ButtonCTA
                        aria-label="Go to Contacts section"
                        onClick={() =>
                            document.getElementById("Contacts")?.scrollIntoView({ behavior: "smooth" })}>
                            Get in touch
                    </ButtonCTA>
                </li>
            </StyleNavbarMenu>

        </StyledNavbar >

    )
}