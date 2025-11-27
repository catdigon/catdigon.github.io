import { NavbarMobile, StyledLogo, StyledNavbar, StyledNavbarContainer } from "./Navbar.styled";
import ButtonCTA from "../Button/ButtonCTA";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarLogo from "./NavbarLogo";
import { appRoutes } from "../../data/constants";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false)

    const navRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150);
            if (expanded) setExpanded(false);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (
                expanded &&
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setExpanded(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [expanded]);

    return (
        <StyledNavbarContainer $scrolled={scrolled}>
            <StyledNavbar role="navigation">
                <Navbar expand="md"
                    ref={navRef}
                    expanded={expanded}>
                    <Container>
                        <NavbarMobile>
                        <Navbar.Brand>
                            <StyledLogo>
                                <HashLink
                                    to={`${appRoutes.HOME}#Home`}
                                    onClick={() => setExpanded(false)}
                                    aria-label="Cátia Diogo's portfolio logo - button to return to homepage"
                                    className="navbarlogo"
                                    >
                                    <NavbarLogo />
                                    </HashLink>
                            </StyledLogo>
                        </Navbar.Brand>

                        <Navbar.Toggle
                            aria-controls="main-navbar"
                            id="btn-toggle"
                            onClick={() => setExpanded(expanded ? false : true)}>
                                {expanded ? <FiX size={28} /> : <FiMenu size={26} />}
                        </Navbar.Toggle>
                        </NavbarMobile>
                        
                        <Navbar.Collapse id="main-navbar">
                            <Nav className="ms-auto">
                                <Nav.Link as="div">
                                    <HashLink
                                        to={appRoutes.ABOUT_ME}
                                        onClick={() => setExpanded(false)}
                                        className="button-transparent-style">
                                        About
                                    </HashLink>
                                </Nav.Link>
                                <Nav.Link as="div">
                                    <HashLink
                                        to={`${appRoutes.HOME}#Projects`}
                                        onClick={() => setExpanded(false)}
                                        className="button-transparent-style">
                                            Projects
                                    </HashLink>
                                </Nav.Link>
                                <Nav.Link as="div">
                                    <ButtonCTA
                                        onClick={() =>
                                            document.getElementById("Contacts")?.scrollIntoView({ behavior: "smooth" })
                                            &&
                                            setExpanded(false)}>
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