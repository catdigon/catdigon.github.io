
import HeaderArt from "../../components/Header/ArtHeader/HeaderFinalArt"
import Header from "../../components/Header/Header"
import ProjectsSection from "../../components/HomePage/ProjectsSection"


export default function HomePage() {

  return (
    <>
        <Header
          id="Home"
          title={"Hi, My name is Cátia."}
          text={"I'm a UX/Product Designer-in-progress with a background in research and storytelling."}>
            <HeaderArt />
            </Header> 
        <ProjectsSection />
    </>

  )
}


