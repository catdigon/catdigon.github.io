
import { StyledEmailLink, StyledFooter } from "./Footer.styled";
import SectionArea from "../SectionsAreas/SectionArea";
import { BsEnvelope, BsEnvelopePaperHeart } from "react-icons/bs";
import { useState } from "react";
import SocialLinks from "./FooterIconLinks/FooterBtnLinks";


export default function Footer() {

    const [hovered, setHovered] = useState(false);

    return (
        <SectionArea id="Contacts" color="#ffffffff" zIndex={90}>
            <StyledFooter>
                <footer className="footer p-8">
                    <h2>Get in touch</h2>

                    <StyledEmailLink>
                        <a
                            href="mailto:catdigon.all@gmail.com"
                            aria-label="Send email to catdigon.all@gmail.com"
                            className="d-inline-flex align-items-center gap-2"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            {hovered ? <BsEnvelopePaperHeart aria-hidden="true" /> : <BsEnvelope aria-hidden="true" />}

                            catdigon.all@gmail.com
                        </a>
                    </StyledEmailLink>
                    <SocialLinks />
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Cátia Diogo</p>
                </footer>
            </StyledFooter>
        </SectionArea>
    );
}