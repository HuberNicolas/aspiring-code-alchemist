import Typewriter from "./Typewriter.jsx";
import ProgrammingCode from "./ProgrammingCode.jsx";
import heroImage from "../assets/hero-bg.png";
import {Avatar} from "@mui/material";
import './Typewriter.scss';
import './Hero.scss';

const about = ['Aspiring Code Alchemist', 'Floorball Enthusiast', 'IT Security Practitioner'];
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

    public function welcome() {
        echo "Hi there. My name is {$this->name},
        and I'm a Intermediate Backend Maestro
        who has a great passion about coding."
    }
    
    public function introduce(ManagerRegistry $doctrine) {
        $entityManager = $doctrine->getManager();
        $academicHistory = $entityManager->getRepository(Degree::class)->findBy([], ['$gradDate' => 'DES']);
        $careerPath = $entityManager->getRepository(Career::class)->findBy([], ['$startDate' => 'DES']);
        $skills = $entityManager->getRepository(Skills::class)->findAllGroupedByArea();
        $interests = $entityManager->getRepository(Interests::class)->findAll();
    }
}
`;
function Hero() {

    return (
        <>
            <div className="typewriter-text" >
                <p>Nicolas Huber</p>
                <Typewriter sentences={about}></Typewriter>
            </div>
            <div id="hero-container">
                <Avatar alt="Nicolas Huber" src={heroImage} sx={{
                    marginLeft: '10px',
                    marginRight: '10px',
                    height: '10%',
                    width: '25%',
                    borderTopLeftRadius: '15%',
                    borderTopRightRadius: '50%',
                    borderBottomLeftRadius: '50%',
                    borderBottomRightRadius: '15%',
                }}/>
                <ProgrammingCode language="php" code={phpCode} />
            </div>
        </>
    )
}

export default Hero
