import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkHistory from '@mui/icons-material/WorkHistory';
import {Typography} from "@mui/material";


function PersonalTimeline() {

    return (
        <>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot  color="warning" variant="outlined">
                            <WorkHistory />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Career</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="warning" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h5">IVDA Research Lab - University of Zurich</Typography>
                        <Typography variant="h7">(October 2023 - now)</Typography>
                        <Typography variant="h6">Student Assistant - Full Stack Developer</Typography>
                        <Typography variant="h6">part-time (40%)</Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="warning" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h5">novu AG - Zurich</Typography>
                        <Typography variant="h7">(September 2021 - September 2023)</Typography>
                        <Typography variant="h6">Junior Backend Developer</Typography>
                        <Typography variant="h6">part-time (20%)</Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="warning" />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h5">novu AG - Zurich</Typography>
                        <Typography variant="h7">(June - September 2021)</Typography>
                        <Typography variant="h6">Backend Developer (Internship)</Typography>
                        <Typography variant="h6">full-time</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default PersonalTimeline
