import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";
import Header from "../../components/Header";
import { LaunchIcon } from "../../components/Icon";
import Page from "../../components/Page";
import ProjectsNav from "../../components/ProjectsNav";

import classes from "../../styles/createbase.module.scss";

const LINKS = [
  {
    href: "https://app.createbase.co.nz/",
    label: "App",
  },
  {
    href: "https://createbase.co.nz/",
    label: "Website",
  },
  {
    href: "https://www.youtube.com/channel/UClLBwFvHpGrRpxyRg1IOB0g/featured",
    label: "Projects",
  },
];

const StackFlow = dynamic(() => import("../../components/StackFlow"), {
  ssr: false,
});

const CreateBase: NextPage = () => {
  const [isFlowDemo, setIsFlowDemo] = useState(true);

  return (
    <Page>
      <Head>
        <title>CreateBase - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
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
              src="/createbase/createbase-full-logo.svg"
              width={264}
              height={48}
              alt="CreateBase"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className={classes.gridDisplay}>
          <div className={classes.team}>
            <Image
              src="/createbase/team.jpg"
              alt="The CreateBase Team"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className={classes.intro}>
            <div className={classes.links}>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  title={l.label}
                >
                  {l.label.toLowerCase()}
                  <LaunchIcon color="white" />
                </a>
              ))}
            </div>
            <p className={classes.p}>
              CreateBase was founded by a group of uni friends in the summer of
              2019. We wanted to making tech education more engaging and
              accessible for everyone.
            </p>
          </div>
          <div className={classes.collage}>
            <Image
              src="/createbase/collage.jpg"
              alt="CreateBase products"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
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
              src="/createbase/flow-demo.mp4"
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ opacity: +!isFlowDemo }}
              src="/createbase/text-demo.mp4"
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
        <div className={classes.flow}>
          <StackFlow />
        </div>
        <div className={classes.rbb}>
          <h2 className={classes.h2}>Winners of Red Bull Basement NZ 2020</h2>
          <div className={classes.rbbContent}>
            <YouTube
              videoId="qd_qGnKcs8A"
              className={classes.rbbVidContainer}
              iframeClassName={classes.rbbVid}
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
