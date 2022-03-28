import { ReactNode } from "react";
import Footer from "./Footer";
import classes from "./Page.module.scss";

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props): JSX.Element => {
  return (
    <div className={classes.page}>
      <div className={classes.wrapper}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Page;
