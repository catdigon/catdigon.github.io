import { StyledLogo, StyledNavbar, StyledNavbarContainer } from "./Navbar.styled";
import ButtonTransparent from "../Button/ButtonTransparent";
import ButtonCTA from "../Button/ButtonCTA";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import NavbarLogo from "./NavbarLogo";
import { appRoutes } from "../../data/constants";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 150)
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <StyledNavbarContainer $scrolled={scrolled}>
            <StyledNavbar role="navigation">
                <Navbar expand="md">
                    <Container>
                        <Navbar.Brand>
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
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="main-navbar" id="btn-toggle">
                            <FiMenu size={26} />
                        </Navbar.Toggle>

                        <Navbar.Collapse id="main-navbar">
                            <Nav className="ms-auto">
                                <Nav.Link>
                                    <HashLink to={appRoutes.ABOUT_ME}>
                                        <ButtonTransparent
                                            aria-label="Go to About me section">
                                            About
                                        </ButtonTransparent>
                                    </HashLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <HashLink to={`${appRoutes.HOME}#Projects`}>
                                        <ButtonTransparent
                                            aria-label="Go to Projects section">
                                            Projects
                                        </ButtonTransparent>
                                    </HashLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <ButtonCTA
                                        aria-label="Go to Contacts section"
                                        onClick={() =>
                                            document.getElementById("Contacts")?.scrollIntoView({ behavior: "smooth" })}>
                                        Get in touch
                                    </ButtonCTA>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>

            </StyledNavbar >
        </StyledNavbarContainer>
    )
}