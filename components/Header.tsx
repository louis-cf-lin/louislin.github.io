import Link from "next/link";
import { useState } from "react";
import classes from "./Header.module.scss";
import { MenuI } from "./Icon";

const TABS = [
  {
    label: "résumé",
    href: "/resume",
  },
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "videos",
    href: "/videos",
  },
];

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen((state) => !state);

  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.home}>louis.md</a>
      </Link>
      <div className={classes.menuWrapper}>
        <button className={classes.menuBtn} onClick={toggleMenu}>
          <MenuI />
        </button>
        {menuIsOpen && (
          <div className={classes.menu}>
            {TABS.map((t) => (
              <Link key={t.href} href={t.href}>
                <a>{t.label}</a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
