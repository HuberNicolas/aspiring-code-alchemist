import './App.scss'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Jokes from "./components/Jokes.jsx";
import Resume from "./components/Resume.jsx";
import Timeline from "./components/Timeline.jsx";
import Projects from "./components/Projects.jsx";
import Typewriter from "./components/Typewriter.jsx";

function App() {

  return (
    <>
        <Navbar></Navbar>
        <Jokes></Jokes>
        <Hero></Hero>

        <Education></Education>
        <Timeline></Timeline>
        <Skills></Skills>
        <Contact></Contact>
        <Skills></Skills>
        <Resume></Resume>
        <Projects></Projects>
        <Typewriter></Typewriter>

    </>
  )
}

export default App
