import { useEffect, useRef, useState } from "react";

import classes from "./Typed.module.scss";

interface Props {
  html: { rendered: JSX.Element; typed: string };
  ready: boolean;
  isRendered: boolean;
  callback?: () => void;
  bounds?: [number, number, number];
}

const Typed = ({
  html,
  ready,
  isRendered,
  bounds = [25, 50, 1000],
  callback,
}: Props): JSX.Element => {
  const elRef = useRef<HTMLSpanElement>(null);
  const charsRef = useRef(html.typed.split(""));
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [len, setLen] = useState(0);
  const [inView, setInView] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const detect = () => {
      if (
        (elRef.current?.getBoundingClientRect()?.top || 0) < window.innerHeight
      ) {
        window.removeEventListener("scroll", detect);
        setInView(true);
      }
    };
    window.addEventListener("scroll", detect);
    detect();
    return () => {
      window.removeEventListener("scroll", detect);
      clearTimeout(timeoutRef.current as NodeJS.Timeout);
    };
  }, []);

  useEffect(() => {
    if (ready && inView) {
      if (len < charsRef.current.length) {
        setShowCursor(true);
        timeoutRef.current = setTimeout(() => {
          setLen((l) => l + 1);
        }, Math.random() * (bounds[1] - bounds[0]) + bounds[0]);
      } else {
        setTimeout(() => {
          setShowCursor(false);
          callback?.();
        }, bounds[2]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [len, ready, inView]);

  if (isRendered)
    return (
      <span className={`${classes.span} ${classes.rendered}`}>
        {html.rendered}
      </span>
    );

  return (
    <span className={`${classes.span} ${classes.container}`}>
      {charsRef.current.map((c, i) => (
        <span
          key={i}
          ref={i === len ? elRef : undefined}
          className={`${classes.span} ${
            i < len ? classes.show : classes.hide
          } ${i === len - 1 && showCursor ? classes.last : ""}`}
        >
          {c}
        </span>
      ))}
      {showCursor && elRef.current && (
        <span
          className={classes.border}
          style={{
            top: elRef.current.offsetTop,
            height: elRef.current?.offsetHeight + 4,
          }}
        />
      )}
    </span>
  );
};

export default Typed;
