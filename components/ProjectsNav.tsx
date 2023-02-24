import Link from "next/link";
import { PROJECTS } from "./Header";
import classes from "./ProjectsNav.module.scss";

interface Props {
  active: string;
}

export default function ProjectsNav({ active }: Props) {
  return (
    <div className={classes.container}>
      {PROJECTS.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          className={`${classes.tab} ${
            `/projects/${active}` === p.href ? classes.active : ""
          }`}
          title={p.title}
        >
          {p.label}
        </Link>
      ))}
    </div>
  );
}
