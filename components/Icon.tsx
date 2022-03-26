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
