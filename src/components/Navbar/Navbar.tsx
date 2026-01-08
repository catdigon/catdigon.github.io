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
        <StyledNavbarContainer $scrolled={scrolled} ref={navRef}>
            <div className="drawer">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-base-50 shadow-sm">
                        <div className="flex-none md:hidden">
                            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2">
                            <HashLink
                                to={`${appRoutes.HOME}#Home`}
                                onClick={() => setExpanded(false)}
                                aria-label="Cátia Diogo's portfolio logo - button to return to homepage"
                                className="btn btn-ghost text-xl"
                            >
                                <NavbarLogo />
                            </HashLink>
                        </div>
                        <div className="hidden flex-none md:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
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
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80" style={{padding: "1rem"}}>
                        {/* Sidebar content here */}
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
    )
}

