

import { Row, Col } from "react-bootstrap";
import { StyledFooter } from "./Footer.styled";
import BtnGridLinks from "./FooterIconLinks/FooterBtnLinks";
import FooterEmail from "./FooterEmail";


export default function Footer() {

    return (
        <StyledFooter>
            <footer role="contentinfo" className="py-4 mt-auto">

                <Row>
                    {/* Left column */}
                    <Col md={6} className="mb-3">
                        <h5>Get in touch</h5>
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