import { useEffect, useRef, useState } from "react";
import { Document, Page as PDFPage, pdfjs } from "react-pdf";
import Header from "../components/Header";
import Page from "../components/Page";
import classes from "../styles/resume.module.scss";
import Head from "next/head";
import { CenterI, ZoomInI, ZoomOutI } from "../components/Icon";
import { NextPage } from "next";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume: NextPage = () => {
  const ref = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setHeight(ref.current?.offsetHeight || 0);
  }, []);

  const centerHandler = () => {
    setHeight(ref.current?.offsetHeight || 0);
    setScale(1);
  };

  return (
    <Page>
      <Head>
        <title>Résumé | .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main ref={ref} className={classes.main}>
        <div className={classes.controls}>
          <button
            onClick={() => setScale((state) => state + 0.25)}
            title="Zoom in"
          >
            <ZoomInI height={32} width={32} />
          </button>
          <button
            onClick={() => setScale((state) => state - 0.25)}
            title="Zoom out"
          >
            <ZoomOutI height={32} width={32} />
          </button>
          <button onClick={centerHandler} title="Center">
            <CenterI height={32} width={32} />
          </button>
        </div>
        <Document file="/louis-resume.pdf" className={classes.container}>
          <PDFPage
            pageNumber={1}
            className={classes.page}
            height={height}
            scale={scale}
          />
        </Document>
      </main>
    </Page>
  );
};

export default Resume;
