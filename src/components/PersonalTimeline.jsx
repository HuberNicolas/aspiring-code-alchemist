import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import {Typography} from "@mui/material";


function PersonalTimeline() {

    return (
        <>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot  color="primary" variant="outlined">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Education</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6">
                            University of Zurich
                        </Typography>
                        <Typography>Msc Informatics</Typography>
                        <Typography>Softwaresystems Major & Datascience Minor</Typography>
                        <Typography variant="h7">(2022 - now)</Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6">
                            University of Zurich
                        </Typography>
                        <Typography>Bsc Informatics (magna cum laude)</Typography>
                        <Typography>Softwaresystems Major & Business Informatics Minor</Typography>
                        <Typography variant="h7">(2019 - 2022)</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default PersonalTimeline
