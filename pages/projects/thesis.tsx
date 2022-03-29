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
        <h1 className={classes.h1}>
          Emergent Action Selection through Evolvable Chemical Networks
        </h1>
        <div className={classes.details}>
          <a
            className={classes.cta}
            href="mailto:louiscflin@gmail.com?subject=Masters thesis"
            title="Email louiscflin@gmail.com"
          >
            Request access
          </a>
          <div className={classes.meta}>
            <span className={classes.label}>March 2022</span>
            <span className={classes.label}>The University of Auckland</span>
          </div>
          <div className={classes.authorContainer}>
            <div className={classes.authorWrapper}>
              <span className={classes.label}>Author</span>
              <p className={classes.p}>Louis Lin</p>
            </div>
            <div className={classes.authorWrapper}>
              <span className={classes.label}>Supervisor</span>
              <p className={classes.p}>Dr Matthew Egbert</p>
            </div>
          </div>
        </div>

        <div className={classes.abstract}>
          <span className={classes.label}>Abstract</span>
          <p className={classes.p}>
            This investigation aims to arrive at a minimal working model of an
            agent whose central controller comprises an artificial chemical
            network. The agent possesses two wheels to navigate within a
            spatiotemporal environment containing finite resources that are
            necessary for the system to sustain itself. To this end, a genetic
            algorithm is employed and chemical networks are evolved successfully
            in simulation. The emergent behaviours are analysed and demonstrate
            learned associations for action selection.
          </p>
        </div>
      </main>
    </Page>
  );
};

export default Thesis;
