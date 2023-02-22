import Head from "next/head";
import { ChangeEvent, FormEventHandler, useRef, useState } from "react";
import Header from "../../components/Header";
import { EnterIcon, LockIcon } from "../../components/Icon";
import Page from "../../components/Page";
import ProjectsNav from "../../components/ProjectsNav";

import classes from "../../styles/kessler.module.scss";

const Kessler = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!ref.current?.value) {
      setError("Password missing");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <Page>
      <Head>
        <title>Kessler - .l</title>
        <meta name="description" content="Hi, I'm Louis and I write code." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <ProjectsNav active="kessler" />
        <div className={classes.container}>
          <form className={classes.form} onSubmit={submitHandler}>
            <label>Classified space stuff.</label>
            <div
              className={`${classes.inputWrapper} ${
                error ? classes.error : ""
              }`}
            >
              <input type="password" ref={ref} onChange={() => setError("")} />
              <LockIcon height={26} width={26} className={classes.lock} />
              <button type="submit" className={classes.submit} title="Submit">
                <EnterIcon height={26} width={26} className={classes.enter} />
              </button>
            </div>
            <div className={classes.errorMessage}>{error}</div>
            <p>
              But I&apos;m down for a chat&mdash;
              <a href="mailto:louiscflin@gmail.com">get in touch</a>.
            </p>
            <span>
              Kessler is a student-run project from the Auckland Programme for
              Space Systems.
            </span>
          </form>
        </div>
      </main>
    </Page>
  );
};

export default Kessler;
