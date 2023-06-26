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

function App() {

    const ref = useRef();

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
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    onClick={() => ref.current.scrollTo(1)}
                    speed={0.5}
                >
                    <Skills></Skills>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.75}>
                    <h1>Projects</h1>
                    <Projects></Projects>
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
