import Hero from "../../components/Hero/Hero"
import HeroArt from "../../components/Hero/ArtHero/HeroFinalArt"
import SectionArea from "../../components/SectionsAreas/SectionArea"
import CardLayout from "../../components/Card/CardLayout"
import ProjectsBreackLine from "../../components/BreakLine/ProjectsBreak"
import OtherProjectsSection from "../../components/HomePage/OtherProjects/OtherProjectsSection"
import { ProjectsCardsText } from "../../data/projectsDesign"


export default function HomePage() {

  return (
    <>
      <Hero
        id="Home"
        title={"Cátia Diogo"}
        text={[
          <span className="text-rotate">
            <span>
              <span>Ux/Ui</span>
              <span>Web</span>
            </span>
          </span>,
          " Designer with a background in research and performing arts."
        ]
        }
        text2={'Find out more'}>
        <HeroArt />
      </Hero>
      <div>
        <SectionArea id="Projects" color="#F8C200" zIndex={10}>
          <span>
            <h2>Projects</h2>
          </span>
          <CardLayout
            data={ProjectsCardsText}
            showText={true}
            showLabel={false}
            showBadgeList={true} />
        </SectionArea>

        <SectionArea id="OtherProjects" color="#FF98BD" zIndex={20}>
          <ProjectsBreackLine />
          <OtherProjectsSection />
        </SectionArea>
      </div>
    </>

  )
}