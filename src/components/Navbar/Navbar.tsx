import { StyledNavbarContainer } from "./Navbar.styled";
import { appRoutes } from "../../data/constants";
import { HashLink } from 'react-router-hash-link';
import NavbarLogo from "./NavbarLogo";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { RiCloseLargeFill } from "react-icons/ri";


export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)


    const location = useLocation()

    useEffect(() => {
        setIsOpen(false)

        if (!location.hash) {
            window.scrollTo({ top: 0 })
        }
    }, [location])

    return (
        <StyledNavbarContainer >
            <div className="drawer">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-base-50 shadow-sm">
                        <div className="mx-2 flex-1 px-2">
                            <HashLink
                                to={appRoutes.HOME}
                                aria-label="Cátia Diogo's portfolio logo - button to return to homepage"
                                className="btn btn-ghost"
                            >
                                <NavbarLogo />
                            </HashLink>
                        </div>
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
                        <div className="hidden flex-none md:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu */}
                                <li>
                                    <HashLink
                                        to={appRoutes.ABOUT_ME}
                                        className="btn btn-ghost">
                                        About
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                        to={`${appRoutes.HOME}#Projects`}
                                        className="btn btn-ghost">
                                        Projects
                                    </HashLink>

                                </li>
                                <li>
                                    <HashLink
                                        to="#Contacts"
                                        className="btn btn-neutral hover:bg-yellow-400 hover:text-black transition-colors duration-200">
                                        Get in touch
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80" style={{ padding: "1rem" }}>
                        {/* Sidebar*/}
                        <li className="place-content-end">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar">
                                <RiCloseLargeFill />

                            </label>
                        </li>
                        <li>
                            <HashLink
                                to={appRoutes.HOME}
                                className="btn btn-ghost">
                                Home
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to={appRoutes.ABOUT_ME}
                                className="btn btn-ghost">
                                About
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to={`${appRoutes.HOME}#Projects`}
                                className="btn btn-ghost">
                                Projects
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to={`${appRoutes.HOME}#Contacts`}
                                className="btn btn-neutral hover:bg-yellow-400 hover:text-black transition-colors duration-200">
                                Get in touch
                            </HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNavbarContainer >
    )
}

