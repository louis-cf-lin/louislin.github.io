import Link from "next/link";
import { PROJECTS } from "./Header";
import classes from "./ProjectsNav.module.scss";

interface Props {
  active: string;
}

const ProjectsNav = ({ active }: Props): JSX.Element => {
  return (
    <div className={classes.container}>
      {PROJECTS.map((p) => (
        <Link key={p.href} href={p.href}>
          <a
            className={`${classes.tab} ${
              `/projects/${active}` === p.href ? classes.active : ""
            }`}
            title={p.title}
          >
            {p.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsNav;
