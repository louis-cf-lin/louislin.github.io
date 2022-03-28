interface Props {
  height?: number;
  width?: number;
  color?: string;
  strokeWidth?: number;
  [x: string]: any;
}

interface GenericProps extends Props {
  paths: string[];
}

const GenericI = ({
  paths,
  height = 24,
  width = 24,
  color = "black",
  strokeWidth = 1,
  fill = "none",
  ...props
}: GenericProps): JSX.Element => {
  return (
    <i
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      <svg
        style={{ display: "inline" }}
        fill="none"
        height={height}
        width={width}
        viewBox="0 0 24 24"
      >
        {paths.map((path, i) => (
          <path
            key={i}
            d={path}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill={fill}
            style={{ transition: "all 0.1s ease-out" }}
          />
        ))}
      </svg>
    </i>
  );
};

export const MenuI = (props: Props): JSX.Element => {
  return <GenericI {...props} paths={["M6 8H18", "M6 12H18", "M6 16H18"]} />;
};

export const PlayI = (props: Props): JSX.Element => {
  return (
    <GenericI
      {...props}
      paths={["M7.99902 17.002V6.99805L16.001 12L7.99902 17.002Z"]}
    />
  );
};

export const StopI = (props: Props): JSX.Element => {
  return (
    <GenericI
      {...props}
      paths={[
        "M7 16V8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16Z",
      ]}
    />
  );
};

export const CodeI = (props: Props): JSX.Element => {
  return (
    <GenericI
      {...props}
      paths={["M9.25 8.5L5.75 12L9.25 15.5M14.75 15.5L18.25 12L14.75 8.5"]}
    />
  );
};
