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
import {Grid} from "@mui/material";
import ProjectCard from "./ProjectCard.jsx";

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
function Projects() {

    return (
        <>
            <Grid container spacing={2}>
                {projects.map((project, index) => (
                    <Grid item key={index} xs={6} sm={4} md={3}>
                        <ProjectCard key={index} {...project} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Projects
