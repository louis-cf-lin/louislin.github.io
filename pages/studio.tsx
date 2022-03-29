import Head from "next/head";
import Header from "../components/Header";
import Page from "../components/Page";

import classes from "../styles/studio.module.scss";

const Studio = () => {
  return (
    <Page>
      <Head>
        <title>Studio - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <h1>Louii Studios</h1>
      </main>
    </Page>
  );
};

export default Studio;
