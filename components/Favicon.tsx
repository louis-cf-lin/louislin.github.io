import Head from "next/head";

// Put light-mode last as the fall-back
const THEMES = ["dark", "light"];

/**
 * Dynamic imports into next/head don't seem to work, so this component directly uses <Head/>
 * Do not use this component in another <Head/> - it will not work!
 */
export default function Favicon() {
  return (
    <Head>
      {THEMES.map((theme) => (
        <link
          key={theme}
          rel="icon"
          type="image/x-icon"
          href={`/favicon-${theme}.ico`}
          media={`(prefers-color-scheme: ${theme})`}
        />
      ))}
    </Head>
  );
}
