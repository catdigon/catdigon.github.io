import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { StyledContainer } from "./FooterBtnLinks.styled";
import BtnCienciaID from "./IconCienciaID";
import { FaSquareDribbble, FaSquareGithub } from "react-icons/fa6";
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
                href="https://dribbble.com/catdigon-all"
                target='_blank' rel='noopener'
                aria-label="Dribble"
              >
                <FaSquareDribbble />
              </Button>
            </li>

            <li>
              <Button
                variant="link"
                href="https://www.cienciavitae.pt/portal/en/B11F-1F8E-B063"
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
                href="/doc/CatDiGon-CV.pdf"
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
