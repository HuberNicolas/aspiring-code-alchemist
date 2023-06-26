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
import {Grid, Typography} from "@mui/material";
import ProjectCard from "./ProjectCard.jsx";
import React from "react";

const projects = [
    {
        name: 'Aspiring Code Alchemist Portfolio',
        description: 'Personal Portfolio Website created with React and Material UI.',
        skills: [{ skill: 'React', icon: faReact }, { skill: 'JS', icon: faJs }, { skill: 'HTML', icon: faHtml5 }, { skill: 'CSS', icon: faCss3 }],
        repoLink: 'https://github.com/HuberNicolas/aspiring-code-alchemist'
    },
    {
        name: 'ComBaCal',
        description: 'Master Project @ UZH: Creating a Supplymanager (app) for Community Care Workers in Lesotho, that is orchestrated with an admin-panel.',
        skills: [
            { skill: 'PHP', icon: faPhp },
            { skill: 'Symfony', icon: faSymfony },
            { skill: 'React', icon: faReact },
            { skill: 'JS', icon: faJs },
            { skill: 'HTML', icon: faHtml5 },
            { skill: 'CSS', icon: faCss3 },
            { skill: 'Docker', icon: faDocker }
        ],
        repoLink: 'https://github.com/orgs/combacal/repositories'
    },
    {
        name: 'OKCupid - Visual Data Analysis',
        description: 'Semester project @ UZH: Data Analysis with real-world data from the OKCupid dating app. (Award: Impact on Research)',
        skills: [
            { skill: 'Python', icon: faPython },
            { skill: 'React', icon: faReact }
        ],
        repoLink: 'https://github.com/orgs/ivda-hs22-group-nvwd/repositories'
    },
    {
        name: 'MTD Stratety Selection Agent',
        description: 'Bachelor Thesis @ UZH: MTD Strategy Selection Agent for IoT devices.',
        skills: [
            { skill: 'Python', icon: faPython },
            { skill: 'Linux', icon: faLinux }
        ],
        repoLink: 'https://github.com/HuberNicolas/MTDStrategySelectionAgent'
    },
    {
        name: 'Heart Disease - Data Analysis',
        description: 'Semester project @ UZH: Data Analysis with real-world medical data to shed light on the cardiovascular diseases.',
        skills: [
            { skill: 'Python', icon: faPython }
        ],
        repoLink: 'https://github.com/HuberNicolas/heart-disease'
    },
    {
        name: 'Pokemon Tower Defense',
        description: 'Semester project @ UZH: Tower defense game with Pokémon sprites that has Front- and Backend.',
        skills: [
            { skill: 'Java', icon: faJava },
            { skill: 'React', icon: faReact },
            { skill: 'JS', icon: faJs },
            { skill: 'HTML', icon: faHtml5 },
            { skill: 'CSS', icon: faCss3 }
        ],
        repoLink: 'https://github.com/orgs/sopra-fs21-group-10/repositories'
    },
    {
        name: 'Numerical Methods - MATLAB implementations',
        description: 'Various implementations of numerical methods.',
        skills: [
            { skill: 'MATLAB', icon: "" }
        ],
        repoLink: 'https://github.com/HuberNicolas/numerical-methods'
    }
];

function Projects() {

    return (
        <>
            <Typography variant="p" component="h2" align="center" sx={{marginBottom: '10px'}}>
                Some of my projects that I've been working on:
            </Typography>
            <Grid container spacing={2}>
                {projects.map((project, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ProjectCard key={index} {...project} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Projects
