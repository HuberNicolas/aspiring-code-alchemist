import PDFDownloadComponent from "./PDFDownloader.jsx";
import PersonalTimeline from "./PersonalTimeline.jsx";
import CareerTimeline from "./CareerTimeline.jsx";
import {Grid} from "@mui/material";

function Resume() {

    return (
        <>
            <PersonalTimeline></PersonalTimeline>
            <CareerTimeline></CareerTimeline>
            <Grid display='flex' justifyContent='center'>
                <PDFDownloadComponent/>
            </Grid>

        </>
    )
}

export default Resume
