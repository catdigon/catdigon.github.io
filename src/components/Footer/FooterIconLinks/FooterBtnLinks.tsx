import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { StyledContainer, StyleFooterList } from "./FooterBtnLinks.styled";
import BtnOrcid from "./IconOrcid";
import BtnCienciaID from "./IconCienciaID";
import { FaSquareGithub } from "react-icons/fa6";
import IconCv from "./IconCv";


export default function BtnGridLinks() {

  return (
    <>
      <StyledContainer>

        <StyleFooterList>
          <div className="mt-3 d-flex gap-2" role="navigation" aria-label="Social links">
            <li>
              <Button
                variant="link"
                href="https://www.linkedin.com/in/catia-diogo"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://www.behance.net/catiadiogo"
                aria-label="Behance"
              >
                <FaBehanceSquare />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://orcid.org/0000-0002-9129-5021"
                aria-label="Orcid"
              >
                <BtnOrcid />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://www.cienciavitae.pt//pt/B11F-1F8E-B063"
                aria-label="Ciencia ID"
              >
                <BtnCienciaID />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://github.com/catdigon"
                aria-label="Github"
              >
                <FaSquareGithub />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://github.com/catdigon"
                aria-label="CV"
              >
                <IconCv />
              </Button>
            </li>
          </div>
          </StyleFooterList>
      </StyledContainer>
    </>
  )
}
