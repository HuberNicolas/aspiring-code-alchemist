import Button from '@mui/material/Button';
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import MergeIcon from '@mui/icons-material/Merge';
import SendIcon from '@mui/icons-material/Send';
function Navbar() {

    return (
        <>
            <div id="navbar-container">
                <Button>Hello</Button>
                <HouseIcon></HouseIcon>
                <PersonIcon></PersonIcon>
                <SchoolIcon></SchoolIcon>
                <TerminalIcon></TerminalIcon>
                <MergeIcon></MergeIcon>
                <SendIcon></SendIcon>
            </div>
        </>
    )
}

export default Navbar
