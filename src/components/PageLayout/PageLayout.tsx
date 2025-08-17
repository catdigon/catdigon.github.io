import { StyleBackground } from "../Background/Background.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface Props {
    children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {

    return (
        <>
            <StyleBackground />
            <Navbar />
                {children}
            <Footer />
        </>
    )
}