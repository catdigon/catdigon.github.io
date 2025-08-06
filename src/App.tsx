import { StyleBackground } from "./components/Background/Background.styled"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./components/ProjectsSection/ProjectsSection"



function App() {

  return (
    <>
    <StyleBackground/>
    <Navbar/> 
    <Header/>
    <ProjectsSection />
    <Footer />
    </>
    
  )
}

export default App
