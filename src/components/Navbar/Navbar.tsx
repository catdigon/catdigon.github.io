import { StyledNavbarContainer } from "./Navbar.styled";
import { appRoutes } from "../../data/constants";
import { HashLink } from 'react-router-hash-link';
import NavbarLogo from "./NavbarLogo";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { RiCloseLargeFill, RiMenuFill } from "react-icons/ri";

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
            <nav className="shadow-sm relative w-full h-16 px-2 md:px-12">
                <div className="flex flex-row h-full place-items-center">
                    {/* Navbar */}
                    <div className=" flex-1">
                        <HashLink
                            to={appRoutes.HOME}
                            aria-label="Cátia Diogo's portfolio logo - button to return to homepage"
                            className="btn btn-ghost"
                        >
                            <NavbarLogo />
                        </HashLink>
                    </div>

                    {/* Menu Desktop */}
                    <ul className="hidden md:flex space-x-2">
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

                    {/* Mobile*/}
                    <button
                        aria-label={isOpen ? "close menu" : "open menu"}
                        className="md:hidden btn btn-ghost relative"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <RiCloseLargeFill
                            className={`absolute transition-all duration-200 transform ${isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-90"
                                }`}
                        />
                        <RiMenuFill
                            className={`absolute transition-all duration-200 transform ${isOpen ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"
                                }`}
                        />
                    </button>

                </div>

                {/* Menu Mobile*/}
                {isOpen && (
                    <ul className="flex flex-col md:hidden shadow-sm bg-white pb-4 px-4 space-y-3 absolute w-full top-full left-0 z-50">
                        <li>
                            <HashLink
                                to={appRoutes.HOME}
                                className="btn btn-ghost w-full"
                                onClick={() => setIsOpen(false)}>
                                Home
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to={appRoutes.ABOUT_ME}
                                className="btn btn-ghost w-full"
                                onClick={() => setIsOpen(false)}>
                                About
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to={`${appRoutes.HOME}#Projects`}
                                className="btn btn-ghost w-full"
                                onClick={() => setIsOpen(false)}>
                                Projects
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to={`${appRoutes.HOME}#Contacts`}
                                className="btn btn-neutral hover:bg-yellow-400 hover:text-black transition-colors duration-200 w-full"
                                onClick={() => setIsOpen(false)}>
                                Get in touch
                            </HashLink>
                        </li>
                    </ul>
                )}

            </nav>
        </StyledNavbarContainer >
    )
}

