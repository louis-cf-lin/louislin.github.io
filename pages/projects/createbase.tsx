import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";
import Header from "../../components/Header";
import Page from "../../components/Page";
import ProjectsNav from "../../components/ProjectsNav";

import classes from "../../styles/createbase.module.scss";

const LINKS = [
  {
    href: "https://www.youtube.com/channel/UClLBwFvHpGrRpxyRg1IOB0g/featured",
    label: "Projects",
  },
];

const CreateBase: NextPage = () => {
  const [isFlowDemo, setIsFlowDemo] = useState(true);

  return (
    <Page>
      <Head>
        <title>CreateBase - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <ProjectsNav active="createbase" />
        <div className={classes.banner}>
          <h1 className={classes.h1}>
            An EdTech startup that leverages 3D simulations with programming
            tools
          </h1>
          <div className={classes.cbLogo}>
            <Image
              src="/cb-logo.svg"
              layout="intrinsic"
              width={264}
              height={48}
              alt="CreateBase"
            />
          </div>
        </div>
        <div className={classes.gridDisplay}>
          <div className={classes.team}>
            <Image
              src="/cb-team.jpg"
              layout="fill"
              objectFit="cover"
              alt="The CreateBase Team"
            />
          </div>
          <div className={classes.intro}>
            {/* <div className={classes.links}>
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                title={l.label}
              >
                {l.label.toLowerCase()}
              </a>
            ))}
          </div> */}
            <p className={classes.p}>
              CreateBase was founded by a group of uni friends in the summer of
              2019. We wanted to making tech education more engaging and
              accessible for everyone.
            </p>
          </div>
          <div className={classes.collage}>
            <Image
              src="/cb-collage.jpg"
              layout="fill"
              objectFit="cover"
              alt="CreateBase products"
            />
          </div>
          <div className={classes.content}>
            <p className={classes.p}>
              We offer a library of projects that cover common engineering
              concepts, each following the 5-Step Creation Process&mdash;a
              systems approach created by our team in collaboration with
              teachers across New Zealand.
            </p>
            <p className={classes.p}>
              Our lesson plans and resources provide teachers with the right
              knowledge and confidence to deliver each project. These are
              complemented with learning journals&mdash;personalised documents
              for students to note ideas, thought processes and answers.
            </p>
          </div>
        </div>
        <div className={classes.demo}>
          <div className={classes.videoContainer}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ opacity: +isFlowDemo }}
              src="/flow-demo.mp4"
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ opacity: +!isFlowDemo }}
              src="/text-demo.mp4"
            />
          </div>
          <div className={classes.demoToggle}>
            <button
              className={isFlowDemo ? classes.active : ""}
              onClick={() => setIsFlowDemo(true)}
              title="Toggle Flow"
            >
              Flow code
            </button>
            <button
              className={!isFlowDemo ? classes.active : ""}
              onClick={() => setIsFlowDemo(false)}
              title="Toggle text"
            >
              Text code
            </button>
          </div>
        </div>
        <div className={classes.rbb}>
          <h2 className={classes.h2}>Winners of Red Bull Basement NZ 2020</h2>
          <div className={classes.rbbContent}>
            <YouTube
              videoId="qd_qGnKcs8A"
              containerClassName={classes.rbbVidContainer}
              className={classes.rbbVid}
              title="Red Bull Basement 2020 NZ Winnder | CreateBase Aftemovie"
              opts={{ playerVars: { rel: 0 } }}
            />
            <p className={classes.p}>
              Watch how we became the university startup champion of NZ
            </p>
          </div>
        </div>
      </main>
    </Page>
  );
};

export default CreateBase;
