import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowInstance,
  ConnectionMode,
  NodeTypes,
} from "reactflow";
import { EDGES, NODES } from "../constants/FLOW_CONFIG";
import LabelNode from "./LabelNode";

import TechNode from "./TechNode";

const nodeTypes: NodeTypes = { tech: TechNode, label: LabelNode };

const onInit = (reactFlowInstance: ReactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const StackFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(NODES);
  const [edges, setEdges, onEdgesChange] = useEdgesState(EDGES);

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onInit={onInit}
      connectionMode={ConnectionMode.Loose}
      nodesConnectable={false}
      elementsSelectable={false}
      // zoomOnScroll={false}
      // preventScrolling={false}
      fitView
      attributionPosition="bottom-right"
    >
      <Controls showInteractive={false} />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default StackFlow;
