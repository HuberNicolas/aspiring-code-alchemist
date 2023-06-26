import React from 'react';
import {Typography} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import TerminalIcon from '@mui/icons-material/Terminal';
import MergeIcon from '@mui/icons-material/Merge';
import SendIcon from '@mui/icons-material/Send';
import reactLogo from '../assets/react.svg'
import materialLogo from '../assets/material.svg'

import './Footer.scss';
import {Dna} from "react-loader-spinner";

const pages = [
    { title: 'Home', icon: <PersonIcon /> },
    { title: 'Education', icon: <SchoolIcon /> },
    { title: 'Skills', icon: <TerminalIcon/> },
    { title: 'Projects', icon: <MergeIcon/> },
    { title: 'Contact', icon: <SendIcon/> }
];

function Footer() {

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                }}
            >
                <Typography variant="h7" align="center">
                    React based & made with ❤️ (aka. Material UI).
                </Typography>
                <div>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                    <Dna
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                    <a href="https://mui.com/" target="_blank">
                        <img src={materialLogo} className="logo material" alt="Material logo" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;

