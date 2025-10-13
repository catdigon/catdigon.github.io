import styled from "styled-components"
import ProjectsSection from "../../components/HomePage/ProjectsSection"
import { BsFiletypePdf } from "react-icons/bs"
import Hero from "../../components/Hero/Hero"
import HeroArt from "../../components/Hero/ArtHero/HeroFinalArt"


export default function HomePage() {

  return (
    <>
      <Overide>
        <Hero
          id="Home"
          title={"Hi, I'm Cátia!"}
          text={"I'm learning and growing as a UX/Product Designer, blending research and storytelling to create more human-centered and accessible experiences."}
          isButton={true}
          button={
            <>
            <BsFiletypePdf />
              View resume
            </>
          }
          link="/doc/CatDiGon-CV.pdf">
          <HeroArt />
        </Hero>
      </Overide>
      <ProjectsSection />
    </>

  )
}

const Overide = styled.div`
  #Home p{
    font-size: 17px;
  }
`

