import { Document, Page as PDFPage, pdfjs } from "react-pdf";
import Header from "../components/Header";
import Page from "../components/Page";
import classes from "../styles/resume.module.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <Page>
      <Header />
      <main className={classes.main}>
        <Document file="/louis-resume.pdf">
          <PDFPage pageNumber={1} />
        </Document>
      </main>
    </Page>
  );
};

export default Resume;
