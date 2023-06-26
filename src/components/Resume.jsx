import PDFDownloadComponent from "./PDFDownloader.jsx";
import PersonalTimeline from "./PersonalTimeline.jsx";
import CareerTimeline from "./CareerTimeline.jsx";

function Resume() {

    return (
        <>
            <PDFDownloadComponent />
            <PersonalTimeline></PersonalTimeline>
            <CareerTimeline></CareerTimeline>
        </>
    )
}

export default Resume
