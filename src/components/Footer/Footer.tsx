

import { Row, Col } from "react-bootstrap";
import { StyledFooter } from "./Footer.styled";
import BtnGridLinks from "./FooterIconLinks/FooterBtnLinks";
import FooterEmail from "./FooterEmail";


export default function Footer() {

    return (
        <StyledFooter id="Contacts">
            <footer role="contentinfo" className="py-4 mt-auto">

                <Row>
                    {/* Left column */}
                    <Col md={6} className="mb-3">
                        <span>Get in touch</span>
                        <FooterEmail />

                    </Col>

                    {/* Right column */}
                    <Col md={6} className="footeright">
                        <BtnGridLinks/>
                       
                        <div className="text-muted mt-2">©2025 | Website by Cátia Diogo</div>
                    </Col>
                </Row>

            </footer>
        </StyledFooter>
    );
}