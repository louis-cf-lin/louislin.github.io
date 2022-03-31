import { memo } from "react";
import { ILabelNodeData } from "../constants/FLOW_CONFIG";

import classes from "./LabelNode.module.scss";

interface Props {
  data: ILabelNodeData;
}

const LabelNode = ({ data }: Props) => {
  return <div className={classes.node}>{data.label}</div>;
};

export default memo(LabelNode);
