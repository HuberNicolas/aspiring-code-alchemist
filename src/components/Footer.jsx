import React from 'react';
import {AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import AdbIcon from '@mui/icons-material/Adb';
import PersonIcon from '@mui/icons-material/Person';
import TerminalIcon from '@mui/icons-material/Terminal';
import MergeIcon from '@mui/icons-material/Merge';
import SendIcon from '@mui/icons-material/Send';

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
        <div style={{ position: 'sticky', bottom: 0 }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                }}
            >
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
                <Typography variant="h7" align="center">
                    React based & made with ❤️ (aka. Material UI).
                </Typography>
            </div>
        </div>
    );
}

export default Footer;

