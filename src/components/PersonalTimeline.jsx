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
                        <TimelineDot  color="secondary" variant="outlined">
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
                        <Typography variant="h5">University of Zurich</Typography>
                        <Typography variant="h7">(2022 - now)</Typography>
                        <Typography variant="h6">MSc Informatics</Typography>
                        <Typography variant="h6">Software Systems Major & Datascience Minor</Typography>

                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h5">University of Zurich</Typography>
                        <Typography variant="h7">(2019 - 2022)</Typography>
                        <Typography variant="h6">BSc Informatics</Typography>
                        <Typography variant="h6">Software Systems Major & Information Systems Minor</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default PersonalTimeline
