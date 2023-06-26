import Button from "@mui/material/Button";
import {Typography} from "@mui/material";

function Contact() {

    return (
        <>
            <Typography variant="p" component="h2">
                Feel free to write me an Email.
            </Typography>
            <Button variant="contained" color="primary" onClick={() => window.location = 'mailto:nicolas.huber2@uzh.ch?subject=%E2%9C%A8%20Awesome%20page%20Nicolas%2C%20I%20just%20wann%20drop%20you%20a%20message%20%E2%9C%A8&body=Hi%2C%0D%0AI\'d%20love%20to%20get%20to%20know%20you%20a%20little%20better%2C%20would%20you%20have%20time%20for%20a%20coffee%20or%20mate%20tea%20sometime%3F%0D%0A%0D%0ACheers%2C'}>Contact Me</Button>
        </>
    )
}

export default Contact
