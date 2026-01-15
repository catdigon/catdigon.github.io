import styled from "styled-components"
import Hero from "../../components/Hero/Hero"
import SectionArea from "../../components/SectionsAreas/SectionArea"
import ImgDisplay from "../../components/ImageVersion/ImgVersion"

export default function AboutMe() {

  return (
    <>

      <Hero title={"Hey all!"}
        text={"I once dreamed of directing films, but eventually life led me to design."
        }
        children={
          <div className="w-full lg:w-1/2">
            <ImgDisplay srcDesktop={"/about/me-smile.png"} srcMobile="/about/me-mobile.webp" alt="Photo of me smiling" />
          </div>
        }>
      </Hero>

      <SectionArea id="Projects" color="#FC83AE" zIndex={99} className="w-full">
        <div className="flex justify-center px-4">

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
              <article className="bg-white rotate-6">
                <CardStyle>
                  <div className="flex-1">
                    <h2>From</h2>
                    <p>
                      I grew up in the montains site of Portugal. I lived in Slovakia and Greece. Now, I moved to Figueira da Foz, and live by the sea!
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
              <article className="bg-[#F08447] -rotate-2">
                <CardStyle>
                  <div className="flex-1">
                    <h2>Education </h2>
                    <p>2016 - Graduated from ESEC's Bachelor of Theather and Education</p>
                    <p>2019 - Graduated from ESTA's Bachelor of Film Studies</p>
                    <p>2023 - Graduated from UBI's Master of Cinema</p>
                    <p>2025 - Graduated from ESEC's PostGradution of Web Desing</p>
                    <p>On going - UC's PhD of Fine Arts</p>
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
              <article className="bg-[#F1CE50] rotate-3">
                <CardStyle>
                  <div className="flex-1">
                    <h2>Experience</h2>
                    <p>I taught kids and teens, which taught me the importance of listening carefully, adpating to diffente needs, and learning continuously</p>
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
              <article className="bg-[#F08447]">
                <CardStyle>
                  <div className="flex-1">
                    <h2>I believe </h2>
                    <p>design is more than creating stunning things, it's building experiences that are acessible to everyone.</p>
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

        </div>
      </SectionArea>
    </>
  )
}

const StickyCards = styled.div`
figure{
  position: sticky;
  top: 0;
  height: 100vh;
  display: grid;
  place-content: center;
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
    article
    width: 90vw;
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

p{
  font-size: 24px;
  margin-bottom: 0.5rem;
  }



h2{
    margin-bottom: 1rem;
}  
`