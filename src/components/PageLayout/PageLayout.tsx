import { Outlet } from "react-router";
import { StyleBackground } from "../Background/Background.styled";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import ScrollToTop from "../ScroolToTop/ScrollToTop";
import usePageTracking from "../../hooks/usePageTracking";

interface Props {
    children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
    usePageTracking();

    return (
        <>
        <ScrollToTop />

            {/*Skip link for accessibility*/}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <StyleBackground />
            <NavBar />
                <main id="main-content">
                <Outlet />
                {children}
                </main>
            <Footer />
        </>
    )
}