import { Outlet } from "react-router";
import { StyleBackground } from "../Background/Background.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../ScroolToTop/ScrollToTop";

interface Props {
    children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {

    return (
        <>
        <ScrollToTop />
            <StyleBackground />
            <Navbar />
                <main>
                <Outlet />
                {children}
                </main>
            <Footer />
        </>
    )
}