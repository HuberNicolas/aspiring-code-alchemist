import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

const PersonalInfoCard = () => {
    return (
        <Card sx={{
            maxWidth: 600,
            backgroundColor: '#009688'
        }}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    Hobbies 🌟
                </Typography>
                <Typography sx={{ marginBottom: '2rem' }}>
                    Coding, Floorball and Bodyweight Fitness, Psychology, Data Adventurer on the Rise, IT Security
                </Typography>

                <Typography variant="h6" component="h2">
                    Strengths 🔥
                </Typography>
                <Typography sx={{ marginBottom: '2rem' }}>
                    Backend Development with Symfony, day-to-day organizing skills, data-savvy, strong Communicator
                </Typography>

                <Typography variant="h6" component="h2">
                    Character Traits 🗝️
                </Typography>
                <Typography sx={{ marginBottom: '2rem' }}>
                    Outgoing, organised and proactive, curiosity driven, sometimes lost in details
                </Typography>

                <Typography variant="h6" component="h2">
                    Favorites 🎯
                </Typography>
                <Typography sx={{ marginBottom: '2rem' }}>
                    Summer, Roof terraces, Hearts of Iron 4, Lasagne, Byron Bay and Campfires
                </Typography>

                <Typography variant="h6" component="h2">
                    Le me in a nutshell 🌰
                </Typography>
                <Typography sx={{ marginBottom: '2rem' }}>
                    Mastering informatics & data science at UZH while moonlighting at jkweb, I navigate the backend realm, ensure smooth app testing, and occasionally sprinkle knowledge on apprentice minds at BBC Bern.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PersonalInfoCard;
