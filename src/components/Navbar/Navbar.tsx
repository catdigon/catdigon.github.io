import { StyledLogo, StyledNavbar, StyledNavbarContainer, StyleNavbarMenu } from "./Navbar.styled";
import ButtonTransparent from "../Button/ButtonTransparent";
import ButtonCTA from "../Button/ButtonCTA";
import { Button } from "react-bootstrap";
import NavbarLogo from "./NavbarLogo";
import { appRoutes } from "../../data/constants";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from "react";


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 400)
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <StyledNavbarContainer $scrolled={scrolled}>
        <StyledNavbar role="navigation">

            <StyledLogo>
                <HashLink to={`${appRoutes.HOME}#Home`}>
                    <Button
                        variant="link"
                        aria-label="Go to Homepage"
                        className="navbarlogo">
                        <NavbarLogo />
                    </Button>
                </HashLink>
            </StyledLogo>

            <StyleNavbarMenu>
                <li>
                    <HashLink to={appRoutes.ABOUT_ME}>
                        <ButtonTransparent
                            aria-label="Go to About me section">
                            About
                        </ButtonTransparent>
                    </HashLink>
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
        </StyledNavbarContainer>
    )
}