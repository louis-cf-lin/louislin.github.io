interface Props {
  height?: number;
  width?: number;
  color?: string;
  strokeWidth?: number;
  pathProps?: any;
  [x: string]: any;
}

interface GenericProps extends Props {
  paths: string[];
}

const GenericIcon = ({
  paths,
  height = 24,
  width = 24,
  color = "black",
  strokeWidth = 1,
  fill = "none",
  pathProps = {},
  ...props
}: GenericProps) => {
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
            {...pathProps}
          />
        ))}
      </svg>
    </i>
  );
};

export const MenuIcon = (props: Props) => {
  return <GenericIcon {...props} paths={["M6 8H18", "M6 12H18", "M6 16H18"]} />;
};

export const PlayIcon = (props: Props) => {
  return (
    <GenericIcon
      {...props}
      paths={[
        "M7.5 16.1315V7.86852C7.5 7.06982 8.39015 6.59343 9.0547 7.03647L15.2519 11.1679C15.8457 11.5638 15.8457 12.4362 15.2519 12.8321L9.0547 16.9635C8.39015 17.4066 7.5 16.9302 7.5 16.1315Z",
      ]}
    />
  );
};

export const StopIcon = (props: Props) => {
  return (
    <GenericIcon
      {...props}
      paths={[
        "M7 16V8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16Z",
      ]}
    />
  );
};

export const CodeIcon = (props: Props) => {
  return (
    <GenericIcon
      {...props}
      paths={["M9.25 8.5L5.75 12L9.25 15.5M14.75 15.5L18.25 12L14.75 8.5"]}
    />
  );
};

export const LockIcon = (props: Props) => {
  return (
    <GenericIcon
      {...props}
      paths={[
        "M8.5 10.5H7.5C6.94772 10.5 6.5 10.9477 6.5 11.5V17.5C6.5 18.0523 6.94772 18.5 7.5 18.5H16.5C17.0523 18.5 17.5 18.0523 17.5 17.5V11.5C17.5 10.9477 17.0523 10.5 16.5 10.5H15.5M8.5 10.5V9C8.5 7.067 10.067 5.5 12 5.5V5.5C13.933 5.5 15.5 7.067 15.5 9V10.5M8.5 10.5H15.5M12 15V15C11.7239 15 11.5 14.7761 11.5 14.5V14.5C11.5 14.2239 11.7239 14 12 14V14C12.2761 14 12.5 14.2239 12.5 14.5V14.5C12.5 14.7761 12.2761 15 12 15Z",
      ]}
    />
  );
};

export const EnterIcon = (props: Props) => {
  return (
    <GenericIcon
      {...props}
      pathProps={{
        strokeLinejoin: "round",
      }}
      paths={[
        "M17.5 8.75V12.25C17.5 12.8023 17.0523 13.25 16.5 13.25H6.5M6.5 13.25L9 11.25M6.5 13.25L9 15.25",
      ]}
    />
  );
};

export const LaunchIcon = (props: Props) => {
  return (
    <GenericIcon
      {...props}
      pathProps={{
        strokeLinejoin: "round",
      }}
      paths={["M7.75 16.25L16.25 7.75M16.25 7.75V12.25M16.25 7.75H11.75"]}
    />
  );
};

export const LouisIcon = (props: Props) => {
  return (
    <GenericIcon
      {...props}
      pathProps={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeWidth: 0,
        fill: "black",
        stroke: "none",
      }}
      paths={[
        "M20 4H4V20H20V4ZM11 9H13V15H11V17H14H17V15H15V8V7H14H11V9ZM7.5 14.5H6.5V15.5V16V17H7.5H8H9V16V15.5V14.5H8H7.5Z",
      ]}
    />
  );
};
