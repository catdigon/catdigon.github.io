import styled from "styled-components"
import HeaderArt from "../../components/Header/ArtHeader/HeaderFinalArt"
import Header from "../../components/Header/Header"
import ProjectsSection from "../../components/HomePage/ProjectsSection"
import { BsFiletypePdf } from "react-icons/bs"


export default function HomePage() {

  return (
    <>
      <Overide>
        <Header
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
          <HeaderArt />
        </Header>
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

