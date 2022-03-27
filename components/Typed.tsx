import { useEffect, useRef, useState } from "react";

import classes from "./Typed.module.scss";

interface Props {
  text: string;
  ready: boolean;
  callback?: () => void;
  bounds?: [number, number, number];
}

const Typed = ({
  text,
  ready,
  bounds = [25, 50, 1000],
  callback,
}: Props): JSX.Element => {
  const elRef = useRef<HTMLSpanElement>(null);
  const charsRef = useRef(text.split(""));
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
        setShowCursor(true);
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

  return (
    <span ref={elRef} className={`${classes.span}`}>
      {charsRef.current.map((c, i) => (
        <span
          key={i}
          className={`${classes.span} ${
            i < len ? classes.show : classes.hide
          } ${i === len - 1 && showCursor ? classes.last : ""}`}
        >
          {c}
        </span>
      ))}
    </span>
  );
};

export default Typed;
