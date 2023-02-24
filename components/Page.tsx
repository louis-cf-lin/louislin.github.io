import { ReactNode } from "react";
import Favicon from "./Favicon";
import Footer from "./Footer";
import classes from "./Page.module.scss";

interface Props {
  children: ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <div className={classes.page}>
      <Favicon />
      <div className={classes.wrapper}>
        {children}
        <Footer />
      </div>
    </div>
  );
}
