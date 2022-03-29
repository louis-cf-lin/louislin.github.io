import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import IAMSLIcons from "../../components/IAMSLIcons";
import Page from "../../components/Page";

import classes from "../../styles/iamsl.module.scss";

const IAMSL = () => {
  return (
    <Page>
      <Head>
        <title>IAMSL App - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={classes.main}>
        <Header />
        {/* <div className={classes.ipad}>
          <Image src="/ipad.png" layout="fill" alt="App render" />
        </div>
        <h2 className={classes.h2}>Commercially-contracted data capture app</h2> */}
        <IAMSLIcons />
      </main>
    </Page>
  );
};

export default IAMSL;
