import classes from "./IAMSLIcons.module.scss";

const COLORS = [
  { bg: "#f58d321a", shadow: "rgba(245, 140, 49, 0.1)" },
  { bg: "white", shadow: "rgba(0, 0, 0, 0.05)" },
  { bg: "#262626", shadow: "rgba(0, 0, 0, 0.05)" },
];

interface Props {
  flexDirection?: "row" | "column";
  size?: number;
}

const IAMSLIcons = ({
  flexDirection = "row",
  size = 96,
}: Props): JSX.Element => {
  return (
    <div className={classes.container} style={{ flexDirection: flexDirection }}>
      {COLORS.map((c) => (
        <div
          key={c.bg}
          className={classes.wrapper}
          style={{
            background: c.bg,
            height: size,
            width: size,
            color: c.shadow,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40%"
            height="40%"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M5 0V20C5 33.8071 16.1929 45 30 45H50M40 25H30C27.2386 25 25 22.7614 25 20V5H50"
              stroke="#F58C31"
              strokeWidth="10"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default IAMSLIcons;
