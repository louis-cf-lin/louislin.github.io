import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Typed from "../components/Typed";
import classes from "../styles/index.module.scss";

const PARAS_A = [
  "I have a [Masters](/academia) in Computer Science and a Bachelor of Engineering Honours ",
  "While studying, I co-founded [CreateBase](/projects/createbase)",
  "Other [projects](/projects) I've worked on:",
  "- [IAMSL app](/projects/iamsl)",
  "- [Kessler](/projects/kessler)",
];

const PARAS_B = [
  "I like rowing and automating random stuff",
  "I also film and edit videos for fun: [Louii Studios](youtube.com/user/LouiiL)",
  "Here's my latest work---*Snow Motion*",
];

const Home: NextPage = () => {
  const [h1Ready, setH1Ready] = useState(false);
  const [h2AReady, setH2AReady] = useState(false);
  const [h2BReady, setH2BReady] = useState(false);
  const [pAReady, setPAReady] = useState(PARAS_A.map((_) => false));
  const [pBReady, setPBReady] = useState(PARAS_B.map((_) => false));
  const { ref } = useParallax<HTMLDivElement>({
    speed: -100,
  });

  useEffect(() => {
    setTimeout(() => setH1Ready(true), 500);
  }, []);

  return (
    <div className={classes.page}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={classes.wrapper}>
        <div ref={ref} className={classes.bg}>
          <Image
            src="/home-bg.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Background image"
          />
        </div>
        <main className={classes.main}>
          <h1 className={classes.h1}>
            <Typed
              text="# Hi, I'm Louis and I write code"
              ready={h1Ready}
              callback={() => setH2AReady(true)}
              bounds={[125, 25, 1500]}
            />
          </h1>
          <h2 className={classes.h2}>
            <Typed
              text="## Mostly in Python &amp; TypeScript"
              ready={h2AReady}
              callback={() =>
                setPAReady((state) => state.map((_, i) => i === 0))
              }
              bounds={[50, 25, 1000]}
            />
          </h2>
          {PARAS_A.map((p, i) => (
            <p key={"paras_a" + i} className={classes.p}>
              <Typed
                text={p}
                ready={pAReady[i]}
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
              text="## Other fun stuff I do"
              ready={h2BReady}
              callback={() =>
                setPBReady((state) => state.map((_, i) => i === 0))
              }
              bounds={[75, 25, 1000]}
            />
          </h2>
          {PARAS_B.map((p, i) => (
            <p key={"paras_b" + i} className={classes.p}>
              <Typed
                text={p}
                ready={pBReady[i]}
                callback={() =>
                  setPBReady((state) =>
                    state.map((_s, _i) => (_i === i + 1 ? true : _s))
                  )
                }
                bounds={[40, 20, 250]}
              />
            </p>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
