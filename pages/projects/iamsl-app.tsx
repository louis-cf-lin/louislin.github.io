import Head from "next/head";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Header from "../../components/Header";
import IAMSLIcons from "../../components/IAMSLIcons";
import Page from "../../components/Page";
import ProjectsNav from "../../components/ProjectsNav";

import classes from "../../styles/iamsl.module.scss";

const IAMSL = () => {
  return (
    <Page>
      <Head>
        <title>IAMSL App - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <ProjectsNav active="iamsl-app" />
        <div className={`${classes.img} ${classes.ipad}`}>
          <Image src="/iamsl-ipad.jpg" layout="fill" alt="IAMSL app render" />
        </div>
        <Parallax translateY={["20px", "-100px"]}>
          <h2 className={`${classes.h2} ${classes.t1}`}>
            Commercial data capture app
          </h2>
        </Parallax>
        <IAMSLIcons className={`${classes.img} ${classes.icon}`} />
        <Parallax translateY={["-100px", "20px"]}>
          <h2 className={`${classes.h2} ${classes.t2}`}>
            Built with React Native
          </h2>
        </Parallax>
        <Parallax
          translateX={["0px", "-20px"]}
          translateY={["10px", "-20px"]}
          style={{ zIndex: 1 }}
        >
          <div className={`${classes.img} ${classes.corner}`}>
            <Image src="/iamsl-corner.png" layout="fill" alt="IAMSL app PDF" />
          </div>
        </Parallax>
        <Parallax translateY={["-20px", "20px"]}>
          <h2 className={`${classes.h2} ${classes.t3}`}>
            Generate PDF&apos;s with dynamic values
          </h2>
        </Parallax>
        <div className={`${classes.img} ${classes.collage}`}>
          <Parallax scale={[1.25, 0.8]}>
            <div
              className={`${classes.img} ${classes.collage} ${classes.collageInner}`}
            >
              <Image
                src="/iamsl-collage.png"
                layout="fill"
                alt="IAMSL app showcase"
              />
            </div>
          </Parallax>
        </div>
        <h2 className={`${classes.h2} ${classes.t4}`}>
          Includes <b>native filesystem</b> read-write
        </h2>
      </main>
    </Page>
  );
};

export default IAMSL;
