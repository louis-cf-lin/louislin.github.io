import { useEffect, useRef, useState } from "react";
import { Document, Page as PDFPage, pdfjs } from "react-pdf";
import Header from "../components/Header";
import Page from "../components/Page";
import classes from "../styles/resume.module.scss";
import Head from "next/head";
import { CenterI, DownloadI, ZoomInI, ZoomOutI } from "../components/Icon";
import { NextPage } from "next";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const RESUME = "/louis-resume-portfolio.pdf";

const Resume: NextPage = () => {
  const ref = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);
  const [scale, setScale] = useState(1);
  const [renderedScale, setRenderedScale] = useState<number | null>(null);

  useEffect(() => {
    setHeight(ref.current?.offsetHeight || 0);
  }, []);

  const centerHandler = () => {
    setHeight(ref.current?.offsetHeight || 0);
    setScale(1);
  };

  const zoomInHandler = () =>
    setScale((state) => (state >= 5 ? state : state + 0.25));

  const zoomOutHandler = () =>
    setScale((state) => (state <= 0.25 ? state : state - 0.25));

  const isLoading = renderedScale !== scale;

  return (
    <Page>
      <Head>
        <title>Résumé - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main ref={ref} className={classes.main}>
        <Document file={RESUME} className={classes.container} loading="">
          <PDFPage
            key={scale}
            pageNumber={1}
            className={classes.page}
            height={height}
            scale={scale}
            loading=""
            onRenderSuccess={() => setRenderedScale(scale)}
          />
          {isLoading && renderedScale ? (
            <PDFPage
              key={renderedScale}
              pageNumber={1}
              className={`${classes.page} ${classes.rendered}`}
              height={height}
              scale={renderedScale}
              loading=""
            />
          ) : null}
        </Document>
        {isLoading && <div className={classes.loading}>Loading...</div>}
        <div className={classes.controls}>
          <button onClick={zoomInHandler} title="Zoom in">
            <ZoomInI height={32} width={32} />
          </button>
          <button onClick={zoomOutHandler} title="Zoom out">
            <ZoomOutI height={32} width={32} />
          </button>
          <button onClick={centerHandler} title="Center">
            <CenterI height={32} width={32} />
          </button>
          <a href={RESUME} download>
            <button title="Download">
              <DownloadI height={32} width={32} />
            </button>
          </a>
        </div>
      </main>
    </Page>
  );
};

export default Resume;
