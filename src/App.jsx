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


const javaCode = `
@RestController
@RequestMapping("/backend")
public class BackendDevelopmentController {

    @GetMapping("/skills")
    public String getBackendDevelopmentSkills() {
        StringBuilder skills = new StringBuilder();
        skills.append("Backend Development with PHP and Symfony\\n\\n");
        skills.append("I leverage the power of Symfony to build robust web applications.\\n");
        skills.append("My expertise includes:\\n");
        skills.append("- Developing RESTful APIs using API Platform\\n");
        skills.append("- Implementing JWT authentication\\n");
        skills.append("- Utilizing Symfony's ORM and database abstraction layer\\n");
        return skills.toString();
    }
    @GetMapping("/php")
    public List<String> getPhpSkills() {
        List<String> phpstack = new ArrayList<>();
        phpstack.add("PHP");
        phpstack.add("Symfony");
        phpstack.add("API Platform");
        phpstack.add("Doctrine ORM");
        phpstack.add("Clean and maintainable PHP code");
        return phpstack;
    }
}
`;

const latexCode = `\\documentclass{article}
\\begin{document}
\\section{Summary}

My bachelor's thesis on Moving Target Defense (MTD) provided \\ 
valuable insights into the field of cybersecurity and the application of MTD techniques.
This academic work enhanced my understanding of cyber \\
threats and the importance of employing proactive defense strategies.
\\section{Skills}

\\subsection{Technical Skills}
\\begin{itemize}
    \\item Python (Data Analysis, Backend Development)
    \\item IoT Technologies and Sensors
    \\item MTD Strategies and Defense (Counter)Mechanisms
    \\item LaTeX (Document Formatting, Academic Writing)
\\end{itemize}

\\subsection{Academic Skills}
\\begin{itemize}
    \\item Rigorous Literature Review and Research Methodology
    \\item Experimental Design and Data Analysis
    \\item Scientific Writing and Documentation
    \\item Presentation of Research Findings
    \\item Academic Paper Formatting using LaTeX
\\end{itemize}

\\end{document}`;


const pythonCode = `"""
Data Engineering and Python Projects
"""

# Data Analysis
data_analysis = {
    'description': 'Utilized Python for data analysis projects.',
    'libraries': ['NumPy', 'Matplotlib', 'Pandas', 'scikit-learn'],
}

# Backend Server for Data Analysis
backend_server = {
    'description': 'Developed a backend server using Flask to power data analysis applications.',
    'libraries': ['Flask'],
}

# SQL for Data Analysis
sql_skills = {
    'description': 'Utilized SQL within Python code for efficient data querying.',
    'databases': ['MySQL', 'SQLite'],
}

# Antivirus Software for Raspberry Pi
antivirus_software = {
    'description': 'Antivirus software for Raspberry Pi implementing Moving Target Defense.',
}
`;

const sqlCode = `SELECT * FROM skills`; // Skills

const jsCode = `
import React from 'react';
const FrontendDevelopment = () => {
      return (
        &lt;div&gt;
          &lt;h2&gt;Frontend Development&lt;/h2&gt;
          &lt;p&gt;
            In my frontend development journey, I have primarily focused on using the
            Twig template language for my Symfony projects.
            Combined with Webpack, HTML, CSS, and JavaScript,
            I have created engaging and interactive web applications.
          &lt;/p&gt;
          &lt;p&gt;
            Additionally, I recently learned to create this portfolio webpage,
            leveraging React to build a modern and responsive user interface.
          &lt;/p&gt;
          &lt;p&gt;
            One of my notable projects is the Tower Defense game, which I developed mainly using JavaScript.
          &lt;/p&gt;
        &lt;/div&gt;
      );
    };
    export default FrontendDevelopment;
  \`;

  return (
    <div>
      <h2>Sample React Code</h2>
      <HighlightedCode code={frontendCode} language="jsx" />
    </div>
  );
};

export default FrontendDevelopment;

`;


const programming = [
    {
        code: javaCode,
        language: 'java'
    },
    {
        code: pythonCode,
        language: 'python'
    },
    {
        code: jsCode,
        language: 'jsx'
    },
    {
        code: latexCode,
        language: 'latex'
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
        skill: 'Backend',
        percentage: 80
    },
    {
        skill: 'Frontend',
        percentage: 40
    },
    {
        skill: 'Data Engineering',
        percentage: 70
    },
    {
        skill: 'Cyber Security',
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
                            <Grid item key={index} xs={12} sm={6}>
                                <SkillChart percentage={skill.percentage} label={skill.skill} />
                            </Grid>
                        ))}
                    </Grid>

                    <Grid container spacing={2}>
                        {programming.map((programming, index) => (
                            <Grid item key={index} xs={12} sm={6}>
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
