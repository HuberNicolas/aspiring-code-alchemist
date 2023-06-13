import './App.scss'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Jokes from "./components/Jokes.jsx";
import Resume from "./components/Resume.jsx";
import Projects from "./components/Projects.jsx";
import Typewriter from "./components/Typewriter.jsx";
import PersonalTimeline from "./components/PersonalTimeline.jsx";

function App() {
    const about = ['Aspiring Code Alchemist','Intermediate Backend Maestro', 'Floorball Enthusiast', 'IT Security Practitioner'];
  return (
    <>
        <Navbar></Navbar>
        <Jokes></Jokes>
        <Hero></Hero>

        <Education></Education>
        <PersonalTimeline></PersonalTimeline>
        <Skills></Skills>
        <Contact></Contact>
        <Skills></Skills>
        <Resume></Resume>
        <Projects></Projects>
        <Typewriter sentences={about}></Typewriter>

    </>
  )
}

export default App
