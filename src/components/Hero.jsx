import Typewriter from "./Typewriter.jsx";
import Button from "@mui/material/Button";
import ProgrammingCode from "./ProgrammingCode.jsx";
import Jokes from "./Jokes.jsx";
import heroImage from "../assets/hero-bg.png";
import {Avatar} from "@mui/material";
import './Hero.scss';

const about = ['Aspiring Code Alchemist','Intermediate Backend Maestro', 'Floorball Enthusiast', 'IT Security Practitioner'];
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
        echo "I am {$this->name}, a master's student
        in computer science.";
    }
}
`;
function Hero() {

    return (
        <>
            <Typewriter sentences={about}></Typewriter>
            <div id="hero-container">
                <Avatar alt="Nicolas Huber" src={heroImage} sx={{
                    marginRight: 10,
                    height: '10%',
                    width: '25%',
                    borderTopLeftRadius: '15%',
                    borderTopRightRadius: '50%',
                    borderBottomLeftRadius: '50%',
                    borderBottomRightRadius: '15%',
                }}/>
                <ProgrammingCode language="php" code={phpCode} />

            </div>
            <Jokes></Jokes>

            <Button variant="contained" color="primary">Secondary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
        </>
    )
}

export default Hero
