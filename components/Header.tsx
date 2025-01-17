import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { MenuIcon, PlayIcon, CodeIcon, LouisIcon } from "./Icon";

const TABS = [
  {
    label: "projects",
    href: "/projects",
    title: "Projects",
  },
  {
    label: "résumé",
    href: "/resume",
    title: "Résumé",
  },
  {
    label: "studio",
    href: "/studio",
    title: "Studio",
  },
];

export const PROJECTS = [
  {
    label: ".createbase()",
    href: "/projects/createbase",
    title: "CreateBase",
  },
  {
    label: ".thesis()",
    href: "/projects/thesis",
    title: "Thesis",
  },
  {
    label: ".iamsl_app()",
    href: "/projects/iamsl-app",
    title: "IAMSL app",
  },
  {
    label: ".kessler()",
    href: "/projects/kessler",
    title: "Kessler",
  },
];

interface Props {
  isRendered?: boolean;
  compile?: () => void;
}

export default function Header({ compile, isRendered = true }: Props) {
  const router = useRouter();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);
  const [clearBg, setClearBg] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setClearBg(false);
      } else {
        setClearBg(true);
      }
    });
  }, []);

  const toggleMenu = () => setMobileMenuIsOpen((state) => !state);

  return (
    <header
      className={classes.headerContainer}
      style={{ background: clearBg ? "transparent" : "white" }}
    >
      <div className={classes.headerWrapper}>
        <Link href="/">
          {isRendered ? (
            <p className={classes.homeIcon} title="Home">
              <LouisIcon />
            </p>
          ) : (
            <p className={classes.home} title="Home">
              louis.md
            </p>
          )}
        </Link>
        <div className={classes.mobileOnly}>
          {compile && (
            <button className={classes.play} onClick={compile}>
              {isRendered ? <CodeIcon /> : <PlayIcon />}
            </button>
          )}
          <div
            className={classes.mobileMenuWrapper}
            onBlur={() => setMobileMenuIsOpen(false)}
          >
            <button className={classes.menuBtn} onClick={toggleMenu}>
              <MenuIcon />
            </button>
            {mobileMenuIsOpen && (
              <div className={classes.menu}>
                {TABS.map((t) => (
                  <Fragment key={t.href}>
                    <a
                      onMouseDown={() => router.push(t.href)}
                      className={router.asPath === t.href ? classes.active : ""}
                    >
                      {t.label}
                    </a>
                    {t.href === "/projects" && (
                      <div className={classes.submenu}>
                        {PROJECTS.map((p) => (
                          <a
                            key={p.href}
                            onMouseDown={() => router.push(p.href)}
                            className={
                              router.asPath === p.href ? classes.active : ""
                            }
                          >
                            {p.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={classes.tabContainer}>
          {TABS.map((t) =>
            t.href === "/projects" ? (
              <div
                className={classes.projectsContainer}
                onMouseOver={() => setProjectsIsOpen(true)}
                onMouseLeave={() => setProjectsIsOpen(false)}
                key={t.href}
              >
                <Link
                  href={t.href}
                  className={`${classes.tab} ${
                    router.asPath.startsWith("/projects") ? classes.active : ""
                  } ${projectsIsOpen ? classes.hovered : ""}`}
                  title={t.title}
                >
                  {t.label}
                </Link>
                {projectsIsOpen && (
                  <div
                    className={classes.projectsWrapper}
                    onMouseOver={() => setProjectsIsOpen(true)}
                    onMouseLeave={() => setProjectsIsOpen(false)}
                  >
                    <div className={classes.projectsMenu}>
                      {PROJECTS.map((p) => (
                        <Link key={p.href} href={p.href} title={p.title}>
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={t.href}
                href={t.href}
                className={`${classes.tab} ${
                  router.asPath === t.href ? classes.active : ""
                }`}
                title={t.title}
              >
                {t.label}
              </Link>
            )
          )}
        </div>
      </div>
      {compile && (
        <button
          className={classes.compile}
          title={isRendered ? "To code" : "Compile"}
          onClick={compile}
        >
          {isRendered ? (
            <>
              <CodeIcon /> to code
            </>
          ) : (
            <>
              <PlayIcon /> compile
            </>
          )}
        </button>
      )}
    </header>
  );
}
