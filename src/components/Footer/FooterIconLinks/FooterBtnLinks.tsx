import { PiBehanceLogoLight, PiLinkedinLogoLight, PiGithubLogoLight, PiDribbbleLogoLight, PiReadCvLogoLight} from "react-icons/pi";
import BtnCienciaID from "./IconCienciaID";

export default function SocialLinks() {

  return (
    <>
        <div className="grid grid-flow-col gap-2" role="navigation" aria-label="Social links">
              <a
                href="https://www.linkedin.com/in/catia-diogo"
                target='_blank' rel='noreferrer'
                aria-label="LinkedIn"
              >
                <PiLinkedinLogoLight className="icon btn btn-square btn-ghost"/>
              </a>
              <a
                href="https://www.behance.net/catiadiogo"
                target='_blank' rel='noreferrer'
                aria-label="Behance"
              >
                <PiBehanceLogoLight className="icon btn btn-square btn-ghost"/>
              </a>
              <a
                href="https://dribbble.com/catdigon-all"
                target='_blank' rel='noreferrer'
                aria-label="Dribble"
              >
                <PiDribbbleLogoLight className="icon btn btn-square btn-ghost"/>
              </a>
              <a
                href="https://www.cienciavitae.pt/portal/en/B11F-1F8E-B063"
                target='_blank' rel='noreferrer'
                aria-label="Ciencia ID"
              >
                <BtnCienciaID className="icon btn btn-square btn-ghost"/>
              </a>
              <a
                href="https://github.com/catdigon"
                target='_blank' rel='noreferrer'
                aria-label="Github"
              >
                <PiGithubLogoLight className="icon btn btn-square btn-ghost"/>
              </a>
              <a
                href="/doc/CatDiGon-CV.pdf"
                target='_blank' rel='noreferrer'
                aria-label="CV"
              >
                <PiReadCvLogoLight className="icon btn btn-square btn-ghost"/>
              </a>
        </div>
    </>
  )
}
