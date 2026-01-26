import HeroArt from "../../components/Hero/ArtHero/HeroFinalArt"
import SectionArea from "../../components/SectionsAreas/SectionArea"
import { ProjectsCardsText } from "../../data/projectsDesign"
import CardItem from "../../components/Card/Card"
import HeroProject from "../../components/Hero/HeroProject"
export default function HomePage() {

  return (
    <>
      <HeroProject
        id="Home"
        title={"Cátia Diogo"}
        text={[
          <span key="role" className="text-rotate">
            <span>
              <span>UX/UI</span>
              <span>Web</span>
            </span>
          </span>,
          " Designer with a background in research and performing arts."
        ]}>
        <HeroArt />
      </HeroProject>
      <div>


        <SectionArea id="Projects" boxShadow={false} className="w-full flex place-content-evenly py-12 lg:py-8 gap-4 lg:px-32 2xl:px-60">
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
                    color="#F8C200"
                  />
                </li>
              ))}

          </ul>
        </SectionArea>
      </div>
    </>

  )
}