import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { StyledContainer } from "./FooterBtnLinks.styled";
import BtnOrcid from "./IconOrcid";
import BtnCienciaID from "./IconCienciaID";
import { FaSquareGithub } from "react-icons/fa6";
import IconCv from "./IconCv";


export default function BtnGridLinks() {

  return (
    <>
      <StyledContainer>
        <div className="mt-3 d-flex gap-2" role="navigation" aria-label="Social links">
          <ul>
            <li>
              <Button
                variant="link"
                href="https://www.linkedin.com/in/catia-diogo"
                target='_blank' rel='noopener'
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://www.behance.net/catiadiogo"
                target='_blank' rel='noopener'
                aria-label="Behance"
              >
                <FaBehanceSquare />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://orcid.org/0000-0002-9129-5021"
                target='_blank' rel='noopener'
                aria-label="Orcid"
              >
                <BtnOrcid />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://www.cienciavitae.pt//pt/B11F-1F8E-B063"
                target='_blank' rel='noopener'
                aria-label="Ciencia ID"
              >
                <BtnCienciaID />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://github.com/catdigon"
                target='_blank' rel='noopener'
                aria-label="Github"
              >
                <FaSquareGithub />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://drive.google.com/file/d/1GFhfCTkgHvR6ikYs9KTQF3egx59h-fc1/view?usp=sharing"
                target='_blank' rel='noopener'
                aria-label="CV"
              >
                <IconCv />
              </Button>
            </li>
          </ul>
        </div>

      </StyledContainer>
    </>
  )
}
