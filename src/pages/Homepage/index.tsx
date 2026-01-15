import Hero from "../../components/Hero/Hero"
import HeroArt from "../../components/Hero/ArtHero/HeroFinalArt"
import SectionArea from "../../components/SectionsAreas/SectionArea"
import { ProjectsCardsText } from "../../data/projectsDesign"
import CardItem from "../../components/Card/Card"

export default function HomePage() {

  return (
    <>
      <Hero
        id="Home"
        title={"Cátia Diogo"}
        text={[
          <span className="text-rotate">
            <span>
              <span>UX/UI</span>
              <span>Web</span>
            </span>
          </span>,
          " Designer with a background in research and performing arts."
        ]}>
        <HeroArt />
      </Hero>
      <div>
        <SectionArea id="Projects" color="#F8C200" className="w-full flex place-content-evenly py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-0 place-content-evenly">
            <div className="grid place-content-center flex sticky top-0 lg:h-screen">
              <h2 className="text-center lg:text-left text-3xl font-bold">
                Projects
              </h2>
            </div>
            <div className='grid gap-8 w-[90vw] md:w-[44rem] lg:w-[80%] mx-auto'>
              {ProjectsCardsText.map((project, idx) => (
                <figure
                  key={idx}
                  className="grid place-content-center lg:sticky lg:top-0 lg:h-screen w-full"
                >
                  <CardItem
                    card={project}
                    showText
                    showLabel
                    showBadgeList
                    color="#F8C200"
                  />
                </figure>
              ))}
            </div>
          </div>
        </SectionArea>
      </div>
    </>

  )
}