import { memo } from "react";
import { TitleNodeData } from "../constants/FLOW_CONFIG";

import classes from "./TitleNode.module.scss";

interface Props {
  data: TitleNodeData;
}

const TitleNode = ({ data }: Props) => {
  return <div className={classes.node}>{data.title}</div>;
};

export default memo(TitleNode);
