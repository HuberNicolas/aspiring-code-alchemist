import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Resume from "./components/Resume.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import React, {useRef} from "react";
import {createTheme} from '@mui/material/styles';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/House';
import TerminalIcon from '@mui/icons-material/Terminal';
import MergeIcon from '@mui/icons-material/Merge';
import SchoolIcon from "@mui/icons-material/School";

import avatarImage from './assets/profile.jpg';


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
            <AppBar position="static"
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Avatar alt="Nicolas Huber" src={avatarImage} sx={{
                            marginRight: 10
                        }}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Nicolas Huber
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key="Home"
                                onClick={() => ref.current.scrollTo(0)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <HomeIcon></HomeIcon>
                                    <Typography>Home</Typography>
                                </Box>
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key="Resume"
                                onClick={() => ref.current.scrollTo(1)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <SchoolIcon />
                                    <Typography>Resume</Typography>
                                </Box>
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key="Skills"
                                onClick={() => ref.current.scrollTo(2)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <TerminalIcon/>
                                    <Typography>Skills</Typography>
                                </Box>
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key="Projects"
                                onClick={() => ref.current.scrollTo(3)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <MergeIcon/>
                                    <Typography>Projects</Typography>
                                </Box>
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key="About"
                                onClick={() => ref.current.scrollTo(4)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PersonIcon></PersonIcon>
                                    <Typography>About</Typography>
                                </Box>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Parallax pages={5} ref={ref}>
                <ParallaxLayer>
                    <Hero></Hero>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0.3}
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
                <ParallaxLayer offset={3.5} speed={0.8}>
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
                <ParallaxLayer offset={4} speed={1}>
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
