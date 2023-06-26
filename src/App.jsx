import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Resume from "./components/Resume.jsx";
import Projects from "./components/Projects.jsx";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import {useRef} from "react";
import {createTheme} from '@mui/material/styles';
import {ThemeProvider, Typography} from "@mui/material";
import About from "./components/About.jsx";


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
            <Parallax pages={5} ref={ref}>
                <ParallaxLayer>
                    <Hero></Hero>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            mr: 2,
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Resume
                    </Typography>
                    <Resume></Resume>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={0.5}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            mr: 2,
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Skills
                    </Typography>
                    <Skills></Skills>
                </ParallaxLayer>
                <ParallaxLayer offset={3.5} speed={0.75}>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            mr: 2,
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Projects
                    </Typography>
                    <Projects></Projects>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.8}>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            mr: 2,
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        About
                    </Typography>
                    <About></About>

                </ParallaxLayer>
            </Parallax>

        </ThemeProvider>
    </>
  )
}

export default App
