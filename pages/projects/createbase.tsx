import { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import Page from "../../components/Page";
import ProjectsNav from "../../components/ProjectsNav";

import classes from "../../styles/createbase.module.scss";

const CreateBase: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>CreateBase | .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <ProjectsNav active="/projects/createbase" />
      </main>
    </Page>
  );
};

export default CreateBase;
