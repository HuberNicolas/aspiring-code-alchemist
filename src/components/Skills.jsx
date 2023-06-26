import {Grid} from "@mui/material";
import SkillChart from "./SkillChart.jsx";
import TypedProgrammingCode from "./TypedProgrammingCode.jsx";

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

const jsxCode = `
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
        code: jsxCode,
        language: 'jsx'
    },
    {
        code: latexCode,
        language: 'latex'
    },
]

const skills = [
    {
        skill: 'Backend',
        percentage: 80
    },
    {
        skill: 'Data Engineering',
        percentage: 70
    },
    {
        skill: 'Frontend',
        percentage: 40
    },
    {
        skill: 'Cyber Security',
        percentage: 60
    },
];


function Skills() {

    return (
        <>
            <Grid container spacing={2}>
                {skills.map((skill, index) => (
                    <Grid item key={index} xs={12} sm={6}>
                        <SkillChart percentage={skill.percentage} label={skill.skill} />
                        <TypedProgrammingCode
                            language={programming[index].language}
                            code={programming[index].code}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Skills
