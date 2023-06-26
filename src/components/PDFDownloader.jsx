import { saveAs } from 'file-saver';
import huberCV from '../assets/huber-cv.pdf';
import {Button} from "@mui/material";

const PDFDownloadComponent = () => {
    const handleDownloadPDF = () => {
        saveAs(huberCV, 'huber-cv.pdf');
    };

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleDownloadPDF}>Download CV</Button>
        </div>
    );
};

export default PDFDownloadComponent;
