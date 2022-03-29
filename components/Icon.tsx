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

const GenericI = ({
  paths,
  height = 24,
  width = 24,
  color = "black",
  strokeWidth = 1,
  fill = "none",
  pathProps = {},
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
            {...pathProps}
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
      paths={["M7.5 16.1315V7.86852C7.5 7.06982 8.39015 6.59343 9.0547 7.03647L15.2519 11.1679C15.8457 11.5638 15.8457 12.4362 15.2519 12.8321L9.0547 16.9635C8.39015 17.4066 7.5 16.9302 7.5 16.1315Z"]}
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

export const ZoomInI = (props: Props): JSX.Element => {
  return (
    <GenericI
      {...props}
      paths={[
        "M15.5 15.5L18 18M9.5 11.5H13.5M11.5 9.5V13.5M17 11.5V11.5C17 14.5376 14.5376 17 11.5 17V17C8.46243 17 6 14.5376 6 11.5V11.5C6 8.46243 8.46243 6 11.5 6V6C14.5376 6 17 8.46243 17 11.5Z",
      ]}
    />
  );
};

export const ZoomOutI = (props: Props): JSX.Element => {
  return (
    <GenericI
      {...props}
      paths={[
        "M15.5 15.5L18 18M9.5 11.5H13.5M17 11.5V11.5C17 14.5376 14.5376 17 11.5 17V17C8.46243 17 6 14.5376 6 11.5V11.5C6 8.46243 8.46243 6 11.5 6V6C14.5376 6 17 8.46243 17 11.5Z",
      ]}
    />
  );
};

export const CenterI = (props: Props): JSX.Element => {
  return (
    <GenericI
      {...props}
      paths={[
        "M9.5 6.5L6.5 6.5L6.5 9.5M6.5 14.5L6.5 17.5H9.5M14.5 17.5H17.5V14.5M17.5 9.5V6.5L14.5 6.5M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z",
      ]}
    />
  );
};

export const DownloadI = (props: Props): JSX.Element => {
  return (
    <GenericI
      {...props}
      paths={[
        "M6.5 15.0001V16.4999C6.5 17.0522 6.94772 17.4999 7.5 17.4999H16.5C17.0523 17.4999 17.5 17.0522 17.5 16.4999V14.9995M12 6.50006V13.9975M12 13.9975L15.5 10.4995M12 13.9975L8.5 10.4995",
      ]}
    />
  );
};

export const LouisI = (props: Props): JSX.Element => {
  return (
    <GenericI
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
