import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Jokes from "./components/Jokes.jsx";
import Resume from "./components/Resume.jsx";
import Projects from "./components/Projects.jsx";
import PersonalTimeline from "./components/PersonalTimeline.jsx";
import TypedProgrammingCode from "./components/TypedProgrammingCode.jsx";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import {useRef} from "react";
import {createTheme} from '@mui/material/styles';
import {Grid, ThemeProvider} from "@mui/material";
import ProjectCard from "./components/ProjectCard.jsx";
import {
    faCss3,
    faDocker,
    faHtml5,
    faJava,
    faJs,
    faLinux,
    faPhp,
    faPython,
    faReact,
    faSymfony
} from "@fortawesome/free-brands-svg-icons";
import CareerTimeline from "./components/CareerTimeline.jsx";
import Footer from "./components/Footer.jsx";
import SkillChart from "./components/SkillChart.jsx";
import About from "./components/About.jsx";
import PDFDownloadComponent from "./components/PDFDownloader.jsx";


const theme = createTheme({
    typography: {
        fontFamily: 'JetBrains Mono'
    },

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


const javaCode = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

const latexCode = `\\documentclass{article}
\\begin{document}
Hello, \\LaTeX!
\\end{document}`;


const pythonCode = `print("Hello, World!")`;

const sqlCode = `SELECT * FROM skills`; // Skills

const jsCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;

const programming = [
    {
        code: javaCode,
        language: 'Java'
    },
    {
        code: latexCode,
        language: 'LaTeX'
    },
    {
        code: pythonCode,
        language: 'Python'
    },
    {
        code: sqlCode,
        language: 'SQL'
    },
    {
        code: jsCode,
        language: 'Java Script'
    },
]

const projects = [
    {
        name: 'Aspiring Code Alchemist Portfolio',
        description: 'This is the first project',
        skills: [faReact, faJs, faHtml5, faCss3],
        repoLink: 'https://github.com/HuberNicolas/aspiring-code-alchemist'
    },
    {
        name: 'ComBaCal',
        description: 'This is the first project',
        skills: [faPhp, faSymfony, faReact, faJs, faHtml5, faCss3, faDocker],
        repoLink: 'https://github.com/orgs/combacal/repositories'
    },
    {
        name: 'OKCupid - Visual Data Analysis',
        description: 'This is the second project',
        skills: [faPython, faReact],
        repoLink: 'https://github.com/orgs/ivda-hs22-group-nvwd/repositories'
    },
    {
        name: 'MTD Stratety Selection Agent',
        description: 'This is the second project',
        skills: [faPython, faLinux],
        repoLink: 'https://github.com/HuberNicolas/MTDStrategySelectionAgent'
    },
    {
        name: 'Heart Disease - Data Analysis',
        description: 'This is the second project',
        skills: [faPython],
        repoLink: 'https://github.com/HuberNicolas/heart-disease'
    },
    {
        name: 'Pokemon Tower Defense',
        description: 'This is the second project',
        skills: [faJava, faReact, faJs, faHtml5, faCss3],
        repoLink: 'https://github.com/orgs/sopra-fs21-group-10/repositories'
    },
    {
        name: 'Numerical Methods - MATLAB implementations',
        description: 'This is the second project',
        skills: [],
        repoLink: 'https://github.com/HuberNicolas/numerical-methods'
    }
];
const skills = [
    {
        skill: 'PHP',
        percentage: 80
    },
    {
        skill: 'Python',
        percentage: 70
    },
    {
        skill: 'SQL',
        percentage: 60
    },
    {
        skill: 'HTML & CSS',
        percentage: 60
    },

];

function App() {

    const ref = useRef();

    const Page = ({ offset, content }) => (
        <>
            <ParallaxLayer offset={offset} speed={0.6}>
                {content}
            </ParallaxLayer>
        </>
    );

    return (
    <>
        <ThemeProvider theme={theme}>
            <Navbar></Navbar>
            <Parallax pages={6} ref={ref}>
                <ParallaxLayer>
                    <Hero></Hero>


                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    onClick={() => ref.current.scrollTo(3)}
                >
                    <Resume></Resume>
                    <PDFDownloadComponent />
                    <PersonalTimeline></PersonalTimeline>
                    <CareerTimeline></CareerTimeline>


                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    onClick={() => ref.current.scrollTo(1)}
                    speed={0.5}
                >
                    <h1>Skills</h1>
                    <Skills></Skills>
                    <Grid container spacing={2}>
                        {skills.map((skill, index) => (
                            <Grid item key={index} xs={6} sm={4} md={3}>
                                <SkillChart percentage={skill.percentage} label={skill.skill} />
                            </Grid>
                        ))}
                    </Grid>

                    <Grid container spacing={2}>
                        {programming.map((programming, index) => (
                            <Grid item key={index} xs={6} sm={4} md={3}>
                                <TypedProgrammingCode language={programming.language} code={programming.code} />
                            </Grid>
                        ))}
                    </Grid>

                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.75}>
                    <h1>Projects</h1>
                    <Projects></Projects>
                    <Grid container spacing={2}>
                        {projects.map((project, index) => (
                            <Grid item key={index} xs={6} sm={4} md={3}>
                                <ProjectCard key={index} {...project} />
                            </Grid>
                        ))}
                    </Grid>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.8}>
                    <h1>About</h1>
                    <About></About>
                </ParallaxLayer>
                <ParallaxLayer offset={5} speed={0.8}>
                    <h1>Contact</h1>
                    <Contact></Contact>
                    <Jokes></Jokes>

                </ParallaxLayer>
                <ParallaxLayer offset={5.8} speed={0.2}>
                    <Footer></Footer>
                </ParallaxLayer>
            </Parallax>

        </ThemeProvider>
    </>
  )
}

export default App
