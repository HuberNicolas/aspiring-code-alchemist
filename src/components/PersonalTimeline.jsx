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
            <div>Timeline</div>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot  color="primary" variant="outlined">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Secondary</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Success</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success" />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            ETH Zürich
                        </Typography>
                        <Typography>Bsc Electrical Engineering</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

        </>
    )
}

export default PersonalTimeline
