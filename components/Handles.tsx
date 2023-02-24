import { Handle, Position } from "react-flow-renderer";

interface Props {
  position: Position;
  doubles: boolean | undefined;
}

export default function Handles({ position, doubles }: Props) {
  return doubles ? (
    <>
      {["a", "b"].map((dp, i) => (
        <Handle
          key={dp}
          id={`${position}-${dp}`}
          type="source"
          position={position}
          style={{
            opacity: 0,
            top:
              position === Position.Left || position === Position.Right
                ? 40 + 16 * i
                : undefined,
            left:
              position === Position.Top || position === Position.Bottom
                ? 40 + 16 * i
                : undefined,
          }}
          isConnectable={false}
        />
      ))}
    </>
  ) : (
    <Handle
      id={position}
      type="source"
      position={position}
      style={{ opacity: 0 }}
      isConnectable={false}
    />
  );
}
