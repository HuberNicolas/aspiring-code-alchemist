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
import { createMuiTheme } from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";
import Button from '@mui/material/Button';
import ProjectCard from "./components/ProjectCard.jsx";


const theme = createMuiTheme({

    // background: $navy: #0a192f;
    palette: {
        // Dark Blue: main: '#0d1528'
        // Midnight Blue: main: '#030a18'
        // Navy Blue: main: '#041227'
        primary: {
            main: '#041227',
        },


        // Light Blue: main: '#90caf9'
        // Teal: main: '#26a69a'
        // Aqua: main: '#00bcd4'
        secondary: {
            main: '#009688',
        },
    },
});

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
        <ThemeProvider theme={theme}>
            <Navbar></Navbar>
            <Parallax pages={4} ref={ref}>
                <ParallaxLayer>
                    <h1>Home</h1>
                    <Jokes></Jokes>
                    <Hero></Hero>
                    <Typewriter sentences={about}></Typewriter>
                    <Button variant="contained" color="primary">Secondary</Button>
                    <Button variant="contained" color="secondary">Secondary</Button>
                    <ProjectCard></ProjectCard>

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
        </ThemeProvider>
    </>
  )
}

export default App
