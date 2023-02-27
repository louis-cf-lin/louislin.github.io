import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { useCallback, useEffect, useState } from "react";
import YouTube from "react-youtube";
import Header from "../components/Header";
import Typed from "../components/Typed";
import classes from "../styles/index.module.scss";
import Link from "next/link";
import { PlayIcon } from "../components/Icon";
import Page from "../components/Page";

type HTMLData = {
  rendered: JSX.Element;
  rawString: string;
};

// Bounds specifies three parameters for typing speed
// All values are in milliseconds
// [min duration, max duration, delay after typing a line]
export type Bounds = [number, number, number];

type ContentId = "h1" | "h2PyTs" | "pExperience" | "h2Other" | "pHobbies";

type Content = Record<
  ContentId,
  (HTMLData | { data: HTMLData[] }) & { bounds: Bounds }
>;

const CONTENT = {
  h1: {
    rendered: <>Hi, I&apos;m Louis and I write code</>,
    rawString: "# Hi, I'm Louis and I write code",
    bounds: [125, 25, 1500],
  },
  h2PyTs: {
    rendered: <>Mostly in Python &amp; TypeScript</>,
    rawString: "## Mostly in Python & TypeScript",
    bounds: [50, 25, 1000],
  },
  pExperience: {
    data: [
      {
        rendered: (
          <>
            I have a{" "}
            <Link href="/projects/thesis" title="Thesis">
              Masters 🎓
            </Link>{" "}
            in Computer Science and a Bachelor of Engineering Honours.
          </>
        ),
        rawString:
          "I have a [Masters](/projects/thesis) in Computer Science and a Bachelor of Engineering Honours.",
      },
      {
        rendered: (
          <>
            While studying, I co-founded{" "}
            <Link href="/projects/createbase" title="CreateBase">
              CreateBase
            </Link>
            .
          </>
        ),
        rawString:
          "While studying, I co-founded [CreateBase](/projects/createbase).",
      },
      {
        rendered: (
          <>
            Other{" "}
            <Link href="/projects" title="Projects">
              projects
            </Link>{" "}
            I&apos;ve worked on:
          </>
        ),
        rawString: "Other [projects](/projects) I've worked on:",
      },
      {
        rendered: (
          <>
            <span className={classes.bulletPoint} />
            The{" "}
            <Link href="/projects/iamsl-app" title="IAMSL app">
              IAMSL app
            </Link>
          </>
        ),
        rawString: "- The [IAMSL app](/projects/iamsl-app)",
      },
      {
        rendered: (
          <>
            <span className={classes.bulletPoint} />
            <Link href="/projects/kessler" title="Kessler">
              Kessler 🛰️
            </Link>
          </>
        ),
        rawString: "- [Kessler](/projects/kessler)",
      },
    ],
    bounds: [40, 20, 250],
  },
  h2Other: {
    rendered: <>Other fun stuff I do</>,
    rawString: "## Other fun stuff I do",
    bounds: [75, 25, 1000],
  },
  pHobbies: {
    data: [
      {
        rendered: (
          <>
            I like going to the gym, chilling with friends, and starting side
            projects I know I won&apos;t finish.
          </>
        ),
        rawString:
          "I like going to the gym, chilling with friends, and starting side projects I know I won't finish.",
      },
      {
        rendered: (
          <>
            I also{" "}
            <Link href="/studio" title="Louii Studios">
              film and edit 🎞️
            </Link>{" "}
            videos for fun.
          </>
        ),
        rawString: "I also [film and edit](/studio) videos for fun.",
      },
      {
        rendered: (
          <>
            Here&apos;s my latest work&mdash;<i>Snow Motion</i>.
          </>
        ),
        rawString: "Here's my latest work---*Snow Motion*.",
      },
    ],
    bounds: [20, 40, 250],
  },
} satisfies Content;

const Home: NextPage = () => {
  const [animIsDone, setAnimIsDone] = useState({
    init: false,
    h1: false,
    h2PyTs: false,
    pExperience: 0,
    h2Other: false,
    pHobbies: 0,
    youtube: false,
  });
  const [showYoutubePreview, setShowYoutubePreview] = useState(true);
  const [isRendered, setIsRendered] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const { ref } = useParallax<HTMLDivElement>({
    speed: -100,
  });

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.code === "Enter") {
        console.log(e);
      }
    });
    setTimeout(() => setAnimIsDone((state) => ({ ...state, init: true })), 500);
  }, []);

  const compile = () => {
    setIsRendered((state) => !state);
  };

  const h1Callback = useCallback(
    () => setAnimIsDone((state) => ({ ...state, h1: true })),
    []
  );
  const h2PyTsCallback = useCallback(
    () => setAnimIsDone((state) => ({ ...state, h2PyTs: true })),
    []
  );
  const pExperienceCallback = useCallback(
    () =>
      setAnimIsDone((state) => ({
        ...state,
        pExperience: state.pExperience + 1,
      })),
    []
  );
  const h2OtherCallback = useCallback(
    () => setAnimIsDone((state) => ({ ...state, h2Other: true })),
    []
  );
  const pHobbiesCallback = useCallback(
    () =>
      setAnimIsDone((state) => ({
        ...state,
        pHobbies: state.pHobbies + 1,
      })),
    []
  );

  return (
    <Page>
      <Head>
        <title>Louis Lin</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <meta property="og:title" content="Louis Lin" />
        <meta property="og:url" content="https://louis-cf-lin.github.io/" />
        <meta property="og:type" content="Profile" />
        <meta
          property="og:description"
          content="Hi, I'm Louis and I write code."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/louis-cf-lin/louis-cf-lin.github.io/master/public/meta.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/louis-cf-lin/louis-cf-lin.github.io/master/public/meta.jpg"
        />
        <meta property="twitter:site" content="@louii_l" />
      </Head>
      <Header isRendered={isRendered} compile={compile} />
      <div ref={ref} className={classes.bg}>
        {isRendered && (
          <Image
            src="/home/bg.jpg"
            quality={100}
            alt="Background image"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <main className={classes.main}>
        <Typed
          isRendered={isRendered}
          lineNumber={1}
          ready={animIsDone.init}
          callback={h1Callback}
          tag="h1"
          {...CONTENT.h1}
        />
        <Typed
          isRendered={isRendered}
          lineNumber={2}
          ready={animIsDone.h1}
          callback={h2PyTsCallback}
          tag="h2"
          {...CONTENT.h2PyTs}
        />
        {CONTENT.pExperience.data.map((data, i) => (
          <Typed
            key={"paras_a" + i}
            ready={i === 0 ? animIsDone.h2PyTs : animIsDone.pExperience === i}
            lineNumber={3 + i}
            isRendered={isRendered}
            callback={pExperienceCallback}
            bounds={CONTENT.pExperience.bounds}
            tag="p"
            {...data}
          />
        ))}
        <Typed
          ready={animIsDone.pExperience === CONTENT.pExperience.data.length}
          isRendered={isRendered}
          lineNumber={3 + CONTENT.pExperience.data.length}
          callback={h2OtherCallback}
          tag="h2"
          {...CONTENT.h2Other}
        />
        <div
          className={`${classes.pExperience} ${
            isRendered ? classes.pExperienceRendered : ""
          }`}
        >
          <div className={classes.pExperienceText}>
            {CONTENT.pHobbies.data.map((data, i) => (
              <Typed
                key={"paras_b" + i}
                ready={i === 0 ? animIsDone.h2Other : animIsDone.pHobbies === i}
                isRendered={isRendered}
                lineNumber={4 + CONTENT.pExperience.data.length + i}
                callback={pHobbiesCallback}
                bounds={CONTENT.pHobbies.bounds}
                tag="p"
                {...data}
              />
            ))}
          </div>
          <div
            className={`${classes.youtubeContainer} ${
              animIsDone.pHobbies === CONTENT.pHobbies.data.length || isRendered
                ? classes.show
                : ""
            }`}
            style={{ marginLeft: isRendered ? 0 : "5vw" }}
          >
            {showYoutubePreview ? (
              <div
                className={classes.youtubePreview}
                onClick={() => setShowYoutubePreview(false)}
              >
                <Image
                  src="/home/youtube.jpg"
                  alt="Snow Motion | Queenstown NZ"
                  fill
                  style={{ objectFit: "cover" }}
                />
                {isRendered ? (
                  <button>
                    <PlayIcon height={36} width={36} color="white" />
                  </button>
                ) : (
                  <p>[Click to play]</p>
                )}
              </div>
            ) : (
              <>
                <YouTube
                  videoId="O-5r8IXsRns"
                  className={classes.youtubeWrapper}
                  iframeClassName={classes.youtube}
                  title="Snow Motion | Queenstown NZ"
                  opts={{ playerVars: { rel: 0, autoplay: 1 } }}
                  onEnd={() => setShowYoutubePreview(true)}
                  onReady={() => setPlayerReady(true)}
                />
                {!playerReady && (
                  <div
                    className={classes.youtubeLoadingBlocker}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: "100%",
                      backgroundColor: "white",
                    }}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </Page>
  );
};

export default Home;
