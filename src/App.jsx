import './App.scss'
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

function App() {
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
        <Navbar></Navbar>
        <Jokes></Jokes>
        <Hero></Hero>

        <Education></Education>
        <PersonalTimeline></PersonalTimeline>
        <Skills></Skills>
        <Contact></Contact>
        <Skills></Skills>
        <Resume></Resume>
        <Projects></Projects>
        <ProgrammingCode language="javascript" code={JSCode} />
        <ProgrammingCode language="java" code={javaCode} />
        <ProgrammingCode language="latex" code={latexCode} />
        <ProgrammingCode language="php" code={phpCode} />
        <ProgrammingCode language="python" code={pythonCode} />
        <ProgrammingCode language="sql" code={sqlCode} />
        <Typewriter sentences={about}></Typewriter>

    </>
  )
}

export default App
