import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Bounds } from "../pages";

import classes from "./Typed.module.scss";

interface Props {
  rendered: JSX.Element;
  rawString: string;
  bounds: Bounds;
  ready: boolean;
  isRendered: boolean;
  lineNumber: number;
  tag: "h1" | "h2" | "p";
  callback?: () => void;
}

export default function Typed({
  rendered,
  rawString,
  bounds,
  ready,
  isRendered,
  lineNumber,
  tag,
  callback,
}: Props) {
  const currentCharEl = useRef<HTMLSpanElement>(null);
  const charTypingTimer = useRef<NodeJS.Timeout | null>(null);
  const finishedTypingPauseTimer = useRef<NodeJS.Timeout | null>(null);
  const [typedLen, setTypedLen] = useState(0);
  const [inView, setInView] = useState(false);
  const [typingState, setTypingState] = useState<
    "awaiting" | "inProgress" | "complete"
  >("awaiting");
  const [borderHeight, setBorderHeight] = useState(0);

  useEffect(() => {
    const detect = () => {
      if (
        currentCharEl.current &&
        currentCharEl.current.getBoundingClientRect().top < window.innerHeight
      ) {
        window.removeEventListener("scroll", detect);
        setInView(true);
      }
    };
    window.addEventListener("scroll", detect);
    detect();
    return () => {
      window.removeEventListener("scroll", detect);
      clearTimeout(charTypingTimer.current as NodeJS.Timeout);
      clearTimeout(finishedTypingPauseTimer.current as NodeJS.Timeout);
    };
  }, []);

  useEffect(() => {
    if (ready && inView) setTypingState("inProgress");
  }, [ready, inView]);

  useEffect(() => {
    if (typingState === "inProgress") {
      setBorderHeight(currentCharEl.current?.offsetHeight || 0);
    }
  }, [typingState]);

  useEffect(() => {
    if (typingState === "inProgress" && typedLen < rawString.length) {
      charTypingTimer.current = setTimeout(
        () =>
          setTypedLen((l) => {
            if (l === rawString.length - 1) {
              finishedTypingPauseTimer.current = setTimeout(
                () => setTypingState("complete"),
                bounds[2]
              );
            }
            return l + 1;
          }),
        Math.random() * (bounds[1] - bounds[0]) + bounds[0]
      );
    }
  }, [typingState, rawString, bounds, typedLen]);

  useEffect(() => {
    if (typingState === "complete") {
      callback?.();
    }
  }, [typingState, callback]);

  const content = (
    <>
      {isRendered ? (
        <span className={`${classes.span} ${classes.rendered}`}>
          {rendered}
        </span>
      ) : (
        <span className={`${classes.span} ${classes.typed}`}>
          {rawString.split("").map((char, i) => {
            return (
              <span
                key={i}
                ref={i === 0 ? currentCharEl : undefined}
                className={`${classes.span} ${i >= typedLen && classes.hide} ${
                  (i === typedLen - 1 || i === rawString.length - 1) &&
                  typingState === "inProgress"
                    ? classes.last
                    : ""
                }`}
              >
                {char}
              </span>
            );
          })}
          <span className={classes.lineNumber}>{lineNumber}</span>
          {typingState === "inProgress" && currentCharEl.current && (
            <span
              className={classes.border}
              style={{
                bottom: 0,
                height: borderHeight,
              }}
            />
          )}
        </span>
      )}
    </>
  );

  const awaitingClass =
    !isRendered && typingState === "awaiting" && classes.awaiting;

  if (tag === "h1") {
    return <h1 className={`${classes.h1} ${awaitingClass}`}>{content}</h1>;
  }

  if (tag === "h2") {
    return <h2 className={`${classes.h2} ${awaitingClass}`}>{content}</h2>;
  }

  return <p className={`${classes.p} ${awaitingClass}`}>{content}</p>;
}
