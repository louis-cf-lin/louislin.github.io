import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Page from "../components/Page";
import classes from "../styles/resume.module.scss";
import Head from "next/head";
import { NextPage } from "next";

const Resume: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Résumé - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>TODO</main>
    </Page>
  );
};

export default Resume;
