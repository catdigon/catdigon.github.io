import { StyleBackground } from "./components/Background/Background.styled"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import ProjectsArea from "./components/ProjectsArea/ProjectsArea"


function App() {

  return (
    <>
    <StyleBackground/>
    <Navbar/> 
    <Header/>
    <ProjectsArea />
    </>
    
  )
}

export default App
