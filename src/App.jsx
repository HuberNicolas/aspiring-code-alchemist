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
import TypedProgrammingCode from "./components/TypedProgrammingCode.jsx";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useRef} from "react";
import { createTheme } from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";
import Button from '@mui/material/Button';
import ProjectCard from "./components/ProjectCard.jsx";
import {faGithub, faPython} from "@fortawesome/free-brands-svg-icons";
import ProgrammingCode from "./components/ProgrammingCode.jsx";


const theme = createTheme({

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

const projects = [
    {
        name: 'Project 1',
        description: 'This is the first project',
        skills: [faPython, faGithub],
        repoLink: 'https://github.com/project1'
    },
    {
        name: 'Project 2',
        description: 'This is the second project',
        skills: [faPython],
        repoLink: 'https://github.com/project2'
    }
];

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

class Me {
    private $name;
    private $job;
    private $university;

    public function __construct() {
        $this->name = "Nicolas Huber";
        $this->job = "Backend Developer";
        $this->university = "University of Zurich";
    }

    public function introduce() {
        echo "I am {$this->name}, a master's student in computer science specializing in.";
    }
}
`;

    const pythonCode = `print("Hello, World!")`;

    const sqlCode = `SELECT * FROM skills`; // Skills

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
                    <ProgrammingCode language="php" code={phpCode} />


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
                    <TypedProgrammingCode language="javascript" code={JSCode} />
                    <TypedProgrammingCode language="java" code={javaCode} />
                    <TypedProgrammingCode language="latex" code={latexCode} />
                    <TypedProgrammingCode language="python" code={pythonCode} />
                    <TypedProgrammingCode language="sql" code={sqlCode} />


                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.75}>
                    <h1>Projects</h1>
                    <Projects></Projects>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}

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
