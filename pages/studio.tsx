import Head from "next/head";
import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";
import Header from "../components/Header";
import { LaunchIcon } from "../components/Icon";
import Page from "../components/Page";
import StudioPiece, { TPiece } from "../components/StudioPiece";

import classes from "../styles/studio.module.scss";

const VIDEOS: TPiece[] = [
  {
    id: "O-5r8IXsRns",
    title: "Snow Motion",
    date: "December 2021",
    img: "snow",
  },
  { id: "frJ9vcRYlkI", title: "A Gift.", date: "December 2019", img: "gift" },
  {
    id: "LskvzorGJNg",
    title: "Three Six Five",
    date: "July 2019",
    img: "taupo",
  },
  {
    id: "dm4FYWFYe3k",
    title: "Waiuku Forest",
    date: "July 2018",
    img: "waiuku",
  },
  { id: "kOsAMs5WKCY", title: "Whangamata", date: "April 2018", img: "whanga" },
  {
    id: "PTyK4q3b46Q",
    title: "Whatipu & Karamatura Falls",
    date: "February 2018",
    img: "waitakere",
  },
  {
    id: "z0NnSg2OZzc",
    title: "Te Henga",
    date: "December 2017",
    img: "bethells",
  },
];

const Studio = () => {
  return (
    <Page>
      <Head>
        <title>Studio - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
      </Head>
      <Header />
      <main className={classes.main}>
        <div className={classes.banner}>
          <a
            href="https://www.youtube.com/user/LouiiL"
            target="_blank"
            rel="noreferrer"
            title="Louii Studios"
          >
            <h1>Louii Studios</h1>
            <LaunchIcon />
          </a>
        </div>
        <div className={classes.gallery}>
          {VIDEOS.map((v) => (
            <StudioPiece key={v.id} piece={v} />
          ))}
        </div>
      </main>
    </Page>
  );
};

export default Studio;
