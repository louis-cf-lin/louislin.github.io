import Head from "next/head";
import Header from "../components/Header";
import Page from "../components/Page";

const Projects = () => {
  return (
    <Page>
      <Head>
        <title>Résumé | .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
    </Page>
  );
};

export default Projects;
