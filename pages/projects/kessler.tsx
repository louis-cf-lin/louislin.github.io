import Head from "next/head";
import Header from "../../components/Header";
import Page from "../../components/Page";
import ProjectsNav from "../../components/ProjectsNav";

import classes from "../../styles/kessler.module.scss";

const Kessler = () => {
  return (
    <Page>
      <Head>
        <title>Kessler - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <ProjectsNav active="kessler" />
      </main>
    </Page>
  );
};

export default Kessler;
