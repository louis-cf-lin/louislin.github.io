import classes from "./Footer.module.scss";

const TABS = [
  {
    label: "email",
    href: "mailto:louiscflin@gmail.com",
  },
  {
    label: "linkedIn",
    href: "https://www.linkedin.com/in/louiscflin/",
  },
  {
    label: "gitHub",
    href: "https://github.com/louis-cf-lin",
  },
];

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        {TABS.map((t) => (
          <a key={t.href} href={t.href} target="_blank" rel="noreferrer">
            {t.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
