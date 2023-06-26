import PersonalInfoCard from "./PersonalInfoCard.jsx";
import profileImage from "../assets/profile.jpg";
import {Avatar, Grid} from "@mui/material";
import Contact from "./Contact.jsx";
import Jokes from "./Jokes.jsx";
import Footer from "./Footer.jsx";

function About() {

    return (
        <>
            <Grid container spacing={2} sx={{ padding: '20px' }}>
                <Grid item xs={12} sm={6}>
                    <PersonalInfoCard />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Avatar
                        alt="Nicolas Huber"
                        src={profileImage}
                        sx={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            height: '90%',
                            width: '50%',
                            borderTopLeftRadius: '100%',
                            borderTopRightRadius: '100%',
                            borderBottomLeftRadius: '100%',
                            borderBottomRightRadius: '100%',
                            border: '4px solid #009688',
                            boxSizing: 'border-box',
                        }}
                    />
                    <Contact></Contact>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Jokes></Jokes>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Footer></Footer>
                </Grid>
            </Grid>
        </>
    )
}

export default About
