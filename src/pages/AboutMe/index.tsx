import styled from "styled-components"
import Hero from "../../components/Hero/Hero"
import SectionArea from "../../components/SectionsAreas/SectionArea"
import ImgDisplay from "../../components/ImageVersion/ImgVersion"
import { TfiDirectionAlt } from "react-icons/tfi"
import { BsAward, BsMarkerTip, BsSortUp } from "react-icons/bs"
import { educationTimeline } from "../../data/education"

export default function AboutMe() {

  return (
    <>
      <Hero title={"Hey all!"}
        text={"I once dreamed of directing films, but life eventually led me to design."
        }
        children={
          <div className="w-full lg:w-1/2">
            <ImgDisplay srcDesktop={"/about/me-smile.png"} srcMobile="/about/me-mobile.webp" alt="Photo of me smiling" />
          </div>
        }>
      </Hero>

      <SectionArea id="Projects" color="#FC83AE" zIndex={99} className="w-full">
          <StickyCards className="grid gap-8">
            <figure>
              <article className="">
                <CardStyle>
                  <div className="flex-1">
                    <h2>Hi, I'm Cátia Diogo.</h2>
                    <p>I'm currently UX/UI Designer Intern at <a href="https://crafton.eu/" className="font-semibold underline decoration-double hover:font-bold  transition-colors duration-300">Crafton</a>.</p>
                  </div>
                  <div className="flex-1">
                    <ImgDisplay
                      srcDesktop="/about/me.webp"
                      srcMobile="/about/me-mobile.webp"
                      alt="Photo of me smiling"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </CardStyle>
              </article>
            </figure>

            <figure>
              <article className="bg-[#FAF9F6] rotate-6">
                <CardStyle>
                  <div className="flex-1">
                    <h2> <TfiDirectionAlt /> From </h2>
                    <p className="card-text">
                      I grew up surrounded by the enchanted forest of <span className="badge bg-green-500/60 text-black border-none">Arganil</span>.</p>
                    <p className="card-text">
                      Along the way, I lived in <span className="badge bg-red-500/60 text-black border-none">Slovakia</span> and <span className="badge bg-blue-500/60 text-black border-none">Greece</span>.
                      Now I'm based in <span className="badge bg-yellow-500/70 text-black border-none">Figueira da Foz</span>, living by the sea!
                    </p>
                  </div>

                  <div className="flex-2">
                    <ImgDisplay
                      srcDesktop="/about/piodao.png"
                      alt="Photo of the Figueira' sea"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </CardStyle>
              </article>
            </figure>

            <figure>
              <article className="bg-[#6DC1E4] -rotate-2">
                <CardStyle>
                  <div className="flex-1 self-start">
                    <h2><BsAward /> Education </h2>
                    <ul className="relative timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                      <span className="absolute left-0 top-0 w-0.5 h-full bg-white"></span>
                      {educationTimeline.map((item, idx) => (
                        <li key={idx} className="relative mb-2">
                          <span className="absolute -left-1.5 top-3 w-3 h-3 rounded-full bg-yellow-400 border-2 border-white"></span>
                          <div className="timeline-start mb-1 md:text-start ml-2">
                            <time className="badge">{item.year}</time>
                            <div className="text-education">{item.degree}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-2">
                    <ImgDisplay
                      srcDesktop="/about/master.png"
                      srcMobile="/about/me-mobile.webp"
                      alt="Photo of me smiling"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </CardStyle>
              </article>
            </figure>

            <figure>
              <article className="bg-[#F2CF21] rotate-3">
                <CardStyle>
                  <div className="flex-1">
                    <h2><BsSortUp /> Experience</h2>
                    <p className="card-text">
                      I worked on a European volunteering project and taught kids and teens, developing key skills in:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="badge bg-[#FFB74D] text-black border-0">Visual storytelling</span>
                      <span className="badge bg-[#66BB6A] text-black border-0">Content creation</span>
                      <span className="badge bg-[#2196F3]/80 text-black border-0">Brand communication</span>
                      <span className="badge bg-[#FFA726] text-black border-0">Empathy</span>
                      <span className="badge bg-[#E57373] text-black border-0">Adaptability</span>
                      <span className="badge bg-[#26A69A] text-black border-0">Active listening</span>
                      <span className="badge bg-[#9C84EE] text-black border-0">Continuous learning</span>
                    </div>
                  </div>

                  <div className="flex-2">
                    <ImgDisplay
                      srcDesktop="/about/cinema1.png"
                      srcMobile="/about/me-mobile.webp"
                      alt="Photo of me smiling"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </CardStyle>
              </article>
            </figure>

            <figure>
              <article className="bg-[#E76F51]">
                <CardStyle>
                  <div className="flex-1">
                    <h2><BsMarkerTip /> My Vision </h2>
                    <p className="card-text">
                      Design is more than just making things look stunning.
                      It's about crafting experiences that are <span className="badge bg-[#FFD54F] text-black px-2 py-0.5 border-0">accessible</span>,
                      <span className="badge bg-green-500/70 text-black px-2 py-0.5 border-0">inclusive</span>, and <span className="badge bg-[#64B5F6] text-black px-2 py-0.5 border-0">meaningful</span> for everyone
                    </p>
                  </div>

                  <div className="flex-2">
                    <ImgDisplay
                      srcDesktop="/about/me-c.png"
                      srcMobile="/about/me-mobile.webp"
                      alt="Photo of me smiling"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </CardStyle>
              </article>
            </figure>

          </StickyCards>

      </SectionArea>
    </>
  )
}

const StickyCards = styled.div`
  padding-bottom: 2rem;
  
figure{
  display: grid;
  place-content: center;
  position: sticky;
  top: 0;
  height: 100vh;
}

article{
  display: grid;
  border-radius: 16px;
  place-content: center;
  gap: calc(var(--spacing) * 4);
  padding: 32px;
  width: 60vw;
  }
  
@media (max-width: 768px){
  display: flex;
  flex-direction: column;
  gap: 0;

    article{
    width: 80vw;
}
      figure {
    position: static;
    height: auto;
  }
    }
`


const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

li{
  display: flex;
  flex-direction: row;
}


p{
  font-size: 32px;
  margin-bottom: 0.5rem;
  }

.card-text{
  font-size: 28px;
  line-height: 2.4rem;
  }

span, .text-education{
font-size: 20px;
}

h2{
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 40px;
}  
`