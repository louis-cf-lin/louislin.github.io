import Image from "next/image";
import { memo } from "react";
import { Position } from "react-flow-renderer";
import { TechNodeData } from "../constants/FLOW_CONFIG";
import Handles from "./Handles";

import classes from "./TechNode.module.scss";

interface Props {
  data: TechNodeData;
}

const TechNode = ({ data }: Props) => {
  return (
    <>
      <Handles position={Position.Top} doubles={data.doubles?.top} />
      <Handles position={Position.Right} doubles={data.doubles?.right} />
      <Handles position={Position.Bottom} doubles={data.doubles?.bottom} />
      <Handles position={Position.Left} doubles={data.doubles?.left} />
      <div className={classes.node} draggable={false}>
        <div className={classes.imgContainer}>
          <Image src={`/${data.id}.svg`} alt={data.label} fill sizes="100vw" />
        </div>
      </div>
    </>
  );
};

export default memo(TechNode);
