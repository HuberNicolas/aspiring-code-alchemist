import React from 'react';
import {AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import AdbIcon from '@mui/icons-material/Adb';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/House';
import TerminalIcon from '@mui/icons-material/Terminal';
import MergeIcon from '@mui/icons-material/Merge';
import SendIcon from '@mui/icons-material/Send';

import avatarImage from '../assets/profile.jpg';

const pages = [
    { title: 'Home', icon: <HomeIcon /> },
    { title: 'Resume', icon: <SchoolIcon /> },
    { title: 'Skills', icon: <TerminalIcon/> },
    { title: 'Projects', icon: <MergeIcon/> },
    { title: 'About', icon: <PersonIcon/>},
    { title: 'Contact', icon: <SendIcon/> },
];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
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
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            {page.icon}
                                            <Typography textAlign="center">{page.title}</Typography>
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Logo
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        {page.icon}
                                        <Typography>{page.title}</Typography>
                                    </Box>
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default Navbar;

