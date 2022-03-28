import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Header from "../components/Header";
import Typed from "../components/Typed";
import classes from "../styles/index.module.scss";
import Link from "next/link";
import { PlayI } from "../components/Icon";
import Page from "../components/Page";

const PARAS_A = [
  {
    rendered: (
      <>
        I have a Masters in Computer Science and a Bachelor of Engineering
        Honours
      </>
    ),
    typed:
      "I have a [Masters](/academia) in Computer Science and a Bachelor of Engineering Honours",
  },
  {
    rendered: (
      <>
        While studying, I co-founded{" "}
        <Link href="/projects/createbase">
          <a title="CreateBase">CreateBase</a>
        </Link>
      </>
    ),
    typed: "While studying, I co-founded [CreateBase](/projects/createbase)",
  },
  {
    rendered: (
      <>
        Other{" "}
        <Link href="/projects">
          <a title="Projects">projects</a>
        </Link>{" "}
        I&apos;ve worked on:
      </>
    ),
    typed: "Other [projects](/projects) I've worked on:",
  },
  {
    rendered: (
      <>
        <span className={classes.bulletPoint} />
        <Link href="/projects/iamsl-app">
          <a title="IAMSL app">IAMSL app</a>
        </Link>
      </>
    ),
    typed: "- [IAMSL app](/projects/iamsl)",
  },
  {
    rendered: (
      <>
        <span className={classes.bulletPoint} />
        <Link href="/projects/kessler">
          <a title="Kessler">Kessler</a>
        </Link>
      </>
    ),
    typed: "- [Kessler](/projects/kessler)",
  },
];

const PARAS_B = [
  {
    rendered: <>I like rowing and enjoy being around friends</>,
    typed: "I like rowing and enjoy being around friends",
  },
  {
    rendered: (
      <>
        I also{" "}
        <Link href="/studio">
          <a title="Louii Studios">film and edit</a>
        </Link>{" "}
        videos for fun
      </>
    ),
    typed: "I also [film and edit](/studio) videos for fun",
  },
  {
    rendered: (
      <>
        Here&apos;s my latest work&mdash;<i>Snow Motion</i>
      </>
    ),
    typed: "Here's my latest work---*Snow Motion*",
  },
];

const Home: NextPage = () => {
  const [h1Ready, setH1Ready] = useState(false);
  const [h2AReady, setH2AReady] = useState(false);
  const [h2BReady, setH2BReady] = useState(false);
  const [pAReady, setPAReady] = useState(PARAS_A.map((_) => false));
  const [pBReady, setPBReady] = useState(PARAS_B.map((_) => false));
  const [youtubeReady, setYoutubeReady] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [isRendered, setIsRendered] = useState(false);
  const { ref } = useParallax<HTMLDivElement>({
    speed: -100,
  });

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.code === "Enter") {
        console.log(e);
      }
    });
    setTimeout(() => setH1Ready(true), 500);
  }, []);

  const compile = () => {
    setIsRendered((state) => !state);
  };

  return (
    <Page>
      <Head>
        <title>Louis - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header isRendered={isRendered} compile={compile} />
      <div ref={ref} className={classes.bg}>
        {isRendered && (
          <Image
            src="/home-bg.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Background image"
          />
        )}
      </div>
      <main className={classes.main}>
        <h1 className={classes.h1}>
          <Typed
            html={{
              rendered: <>Hi, I&apos;m Louis and I write code</>,
              typed: "# Hi, I'm Louis and I write code",
            }}
            isRendered={isRendered}
            lineNumber={1}
            ready={h1Ready}
            callback={() => setH2AReady(true)}
            bounds={[125, 25, 1500]}
          />
        </h1>
        <h2 className={classes.h2}>
          <Typed
            html={{
              rendered: <>Mostly in Python &amp; TypeScript</>,
              typed: "## Mostly in Python & TypeScript",
            }}
            isRendered={isRendered}
            lineNumber={2}
            ready={h2AReady}
            callback={() => setPAReady((state) => state.map((_, i) => i === 0))}
            bounds={[50, 25, 1000]}
          />
        </h2>
        {PARAS_A.map((p, i) => (
          <p key={"paras_a" + i} className={classes.p}>
            <Typed
              html={p}
              ready={pAReady[i]}
              lineNumber={3 + i}
              isRendered={isRendered}
              callback={() =>
                i === PARAS_A.length - 1
                  ? setH2BReady(true)
                  : setPAReady((state) =>
                      state.map((_s, _i) => (_i === i + 1 ? true : _s))
                    )
              }
              bounds={[40, 20, 250]}
            />
          </p>
        ))}
        <h2 className={classes.h2}>
          <Typed
            html={{
              rendered: <>Other fun stuff I do</>,
              typed: "## Other fun stuff I do",
            }}
            ready={h2BReady}
            isRendered={isRendered}
            lineNumber={3 + PARAS_A.length}
            callback={() => setPBReady((state) => state.map((_, i) => i === 0))}
            bounds={[75, 25, 1000]}
          />
        </h2>
        <div
          className={`${classes.partB} ${
            isRendered ? classes.partBRendered : ""
          }`}
        >
          <div className={classes.partBText}>
            {PARAS_B.map((p, i) => (
              <p key={"paras_b" + i} className={classes.p}>
                <Typed
                  html={p}
                  ready={pBReady[i]}
                  isRendered={isRendered}
                  lineNumber={4 + PARAS_A.length + i}
                  callback={() =>
                    i === PARAS_B.length - 1
                      ? setYoutubeReady(true)
                      : setPBReady((state) =>
                          state.map((_s, _i) => (_i === i + 1 ? true : _s))
                        )
                  }
                  bounds={[20, 40, 250]}
                />
              </p>
            ))}
          </div>
          <div
            className={`${classes.youtubeContainer} ${
              youtubeReady ? classes.show : ""
            }`}
            style={{ marginLeft: isRendered ? 0 : "5vw" }}
          >
            {showPreview ? (
              <div
                className={classes.youtubePreview}
                onClick={() => setShowPreview(false)}
              >
                <Image
                  src="/home-youtube.jpg"
                  layout="fill"
                  alt="Snow Motion | Queenstown NZ"
                />
                {isRendered ? (
                  <button>
                    <PlayI height={36} width={36} color="white" />
                  </button>
                ) : (
                  <p>[Click to play]</p>
                )}
              </div>
            ) : (
              <YouTube
                videoId="O-5r8IXsRns"
                className={classes.youtube}
                containerClassName={classes.youtubeWrapper}
                title="Snow Motion | Queenstown NZ"
                opts={{ playerVars: { rel: 0, autoplay: 1 } }}
                onEnd={() => setShowPreview(true)}
              />
            )}
          </div>
        </div>
      </main>
    </Page>
  );
};

export default Home;
