import { StyledNavbarContainer } from "./Navbar.styled";
import { appRoutes } from "../../data/constants";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState, useRef } from "react";
import NavbarLogo from "./NavbarLogo";


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

        <>
            <StyledNavbarContainer $scrolled={scrolled}>
                <div className="navbar bg-base-50 shadow-sm">
                    <div className="flex-1">
                        <HashLink
                            to={`${appRoutes.HOME}#Home`}
                            onClick={() => setExpanded(false)}
                            aria-label="Cátia Diogo's portfolio logo - button to return to homepage"
                            className="btn btn-ghost text-xl"
                        >
                            <NavbarLogo />
                        </HashLink>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>

                                <HashLink
                                    to={appRoutes.ABOUT_ME}
                                    onClick={() => setExpanded(false)}
                                    className="btn btn-ghost">
                                    About
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    to={`${appRoutes.HOME}#Projects`}
                                    onClick={() => setExpanded(false)}
                                    className="btn btn-ghost">
                                    Projects
                                </HashLink>

                            </li>
                            <li>
                                <HashLink
                                    to={`${appRoutes.HOME}#Contacts`}
                                    onClick={() => setExpanded(false)}
                                    className="btn btn-neutral">
                                    Get in touch
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </StyledNavbarContainer >
        </>
    )
}

