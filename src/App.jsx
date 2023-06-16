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
import ProgrammingCode from "./components/ProgrammingCode.jsx";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useRef} from "react";

function App() {
    const ref = useRef();

    const about = ['Aspiring Code Alchemist','Intermediate Backend Maestro', 'Floorball Enthusiast', 'IT Security Practitioner'];
    const javaCode = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

    const latexCode = `\\documentclass{article}
\\begin{document}
Hello, \\LaTeX!
\\end{document}`;

    const phpCode = `<?php
echo "Hello, World!";
?>`;

    const pythonCode = `print("Hello, World!")`;

    const sqlCode = `SELECT * FROM users`;
    const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;

    return (
    <>
        <Navbar></Navbar>
        <Parallax pages={4} ref={ref}>
            <ParallaxLayer>
                <h1>Home</h1>
                <Jokes></Jokes>
                <Hero></Hero>
                <Typewriter sentences={about}></Typewriter>

            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                onClick={() => ref.current.scrollTo(3)}
            >
                <h1>Education</h1>
                <Education></Education>
                <PersonalTimeline></PersonalTimeline>
                <Resume></Resume>

            </ParallaxLayer>
            <ParallaxLayer
                offset={2}
                onClick={() => ref.current.scrollTo(1)}
                speed={0.5}
            >
                <h1>Skills</h1>
                <Skills></Skills>
                <ProgrammingCode language="javascript" code={JSCode} />
                <ProgrammingCode language="java" code={javaCode} />
                <ProgrammingCode language="latex" code={latexCode} />
                <ProgrammingCode language="php" code={phpCode} />
                <ProgrammingCode language="python" code={pythonCode} />
                <ProgrammingCode language="sql" code={sqlCode} />


            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.75}>
                <h1>Projects</h1>
                <Projects></Projects>

            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={0.3}>
                <h1>Contact</h1>
                <Contact></Contact>

            </ParallaxLayer>




        </Parallax>
    </>
  )
}

export default App
