import ProjectsSection from "../../components/HomePage/ProjectsSection"
import Hero from "../../components/Hero/Hero"
import HeroArt from "../../components/Hero/ArtHero/HeroFinalArt"


export default function HomePage() {

  return (
    <>
        <Hero
          id="Home"
          title={"Cátia Diogo"}
          text={"UX/UI Designer with a background in research and performing arts."}
          text2={'Find out more'}>
          <HeroArt />
        </Hero>
      <ProjectsSection />
    </>

  )
}