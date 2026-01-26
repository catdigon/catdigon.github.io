import HeroArt from "../../components/Hero/ArtHero/HeroFinalArt"
import SectionArea from "../../components/SectionsAreas/SectionArea"
import { ProjectsCardsText } from "../../data/projectsDesign"
import Hero from "../../components/Hero/Hero"
import CardItem from "../../components/Card/Card"
export default function HomePage() {

  return (
    <>
      <Hero
        id="Home"
        title={"Cátia Diogo"}
        text={[
          "UX/UI Designer with a background in research and performing arts."
        ]}>
        <HeroArt />
      </Hero>
      <div>


        <SectionArea id="Projects" boxShadow={false}  className="w-full flex place-content-evenly py-12 lg:py-8 gap-4 lg:px-32 2xl:px-60">
              <h2 className="text-center lg:text-left text-3xl font-bold">
                Projects
              </h2>
            
            <ul className="grid grid-cols-1 gap-4 transition-all duration-300">
              {ProjectsCardsText.map((project, idx) => (
                <li
                  key={idx}
                >
                  <CardItem
                    card={project}
                    showTask
                    showBadgeList
                  />
                </li>
              ))}

          </ul>
        </SectionArea>
      </div>
    </>

  )
}