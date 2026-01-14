import styled from "styled-components"
import MeImg from "../../components/AboutMePage/ImagesArea/Images/MeImg"
import Hero from "../../components/Hero/Hero"
import SectionArea from "../../components/SectionsAreas/SectionArea"

export default function AboutMe() {

  return (
    <>

      <Hero title={"Hey all!"}
        text={"I once dreamed of directing films, but eventually life led me to design."
        }
        children={
          <div className="w-full lg:w-1/2">
            <MeImg />
          </div>
        }>
      </Hero>

      <SectionArea id="Projects" color="#F8C200" zIndex={99} className="w-full flex place-content-evenly py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-0 place-content-evenly">
          <div className="grid place-content-center flex sticky top-0 lg:h-screen">

          </div>
          <div className='grid gap-8 w-[90vw] md:w-[44rem] lg:w-[80%] mx-auto'>

            <figure className="grid place-content-center lg:sticky lg:top-0 lg:h-screen w-full">

              <CardStyle className="mx-auto" id="Aboutme">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-full lg:w-1/2 presentation-text">
                    <h1>Hey all!</h1>
                    <p>I'm Cátia, and I grew up in Portugal but I have lived in Bratislava, Slovakia, and Crete, Greece.</p>
                    <p>These experiences allowed me to engage with different cultures and learn how to work in truly multicultural environments.</p>
                    <p>My path into design grew from a background in research, documentary cinema, theatre, and education.</p>
                    <p>I once dreamed of directing films, but editing captured me instead through structure, rhythm, and problem-solving behind every story.
                      That same attention to intention and form eventually led me to design.</p>
                    <p>I believe design, like art, should listen before it speaks.
                      The world isn't made for a few — it's shaped by all of us, together.</p>
                  </div>
                  <div className="w-full lg:w-1/2 img-container">
                    <MeImg />
                  </div>
                </div>
              </CardStyle>
            </figure>
          </div>
        </div>
      </SectionArea>


    </>
  )
}

const CardStyle = styled.div`

margin: 4rem 0;

.presentation-text{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 4rem;
}

.img-container{
  padding: 0 4rem;
}

h1{
    padding-bottom: 1rem;
}  
`