import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import Page from "../../components/Page";
import ProjectsNav from "../../components/ProjectsNav";

import classes from "../../styles/thesis.module.scss";

const Thesis: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Thesis - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <ProjectsNav active="thesis" />
      </main>
    </Page>
  );
};

export default Thesis;
