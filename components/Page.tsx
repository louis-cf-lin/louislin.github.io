import { ReactNode } from "react";
import Favicon from "./Favicon";
import Footer from "./Footer";
import classes from "./Page.module.scss";

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props): JSX.Element => {
  return (
    <div className={classes.page}>
      <Favicon />
      <div className={classes.wrapper}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Page;
