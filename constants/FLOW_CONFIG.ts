import { Node, Position, XYPosition } from "react-flow-renderer";

export interface TechNodeData {
  id: string;
  label: string;
  doubles?: {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
  };
}

export interface TitleNodeData {
  title: string;
}

export const NODES: Node<TechNodeData | TitleNodeData>[] = [
  {
    id: "figma",
    type: "tech",
    data: { id: "figma", label: "Figma" },
    position: { x: 0, y: 0 },
  },
  {
    id: "blender",
    type: "tech",
    data: { id: "blender", label: "Blender" },
    position: { x: 150, y: -150 },
  },
  {
    id: "unity",
    type: "tech",
    data: { id: "unity", label: "Unity" },
    position: { x: 300, y: -150 },
  },
  {
    id: "photoshop",
    type: "tech",
    data: {
      id: "photoshop",
      label: "Adobe Photoshop",
      doubles: { right: true },
    },
    position: { x: 300, y: -300 },
  },
  {
    id: "illustrator",
    type: "tech",
    data: {
      id: "illustrator",
      label: "Adobe Illustrator",
      doubles: { left: true, right: true },
    },
    position: { x: 450, y: -300 },
  },
  {
    id: "premiere",
    type: "tech",
    data: {
      id: "premiere",
      label: "Adobe Premiere Pro",
      doubles: { left: true },
    },
    position: { x: 600, y: -300 },
  },
  {
    id: "react",
    type: "tech",
    data: { id: "react", label: "React", doubles: { right: true } },
    position: { x: 600, y: 0 },
  },
  {
    id: "redux",
    type: "tech",
    data: { id: "redux", label: "Redux", doubles: { left: true, right: true } },
    position: { x: 750, y: 0 },
  },
  {
    id: "next",
    type: "tech",
    data: {
      id: "next",
      label: "Next.js",
      doubles: { left: true, bottom: true },
    },
    position: { x: 900, y: 0 },
  },
  {
    id: "aws",
    type: "tech",
    data: { id: "aws", label: "Amazon Web Services" },
    position: { x: 1050, y: 0 },
  },
  {
    id: "mp",
    type: "tech",
    data: { id: "mp", label: "Mixpanel" },
    position: { x: 750, y: 150 },
  },
  {
    id: "mongodb",
    type: "tech",
    data: { id: "mongodb", label: "MongoDB", doubles: { top: true } },
    position: { x: 900, y: 150 },
  },
  {
    id: "createbase",
    type: "tech",
    data: { id: "createbase", label: "CreateBase" },
    position: { x: 1200, y: 0 },
  },
  {
    id: "h1",
    type: "label",
    data: { title: "Our tech stack" },
    position: { x: 800, y: -200 },
    draggable: false,
  },
];

const edge = (
  source: string,
  target: string,
  sourceHandle: string,
  targetHandle: string
) => ({
  id: `${source}-${target}`,
  source: source,
  sourceHandle: sourceHandle,
  target: target,
  targetHandle: targetHandle,
  animated: true,
});

export const EDGES = [
  edge("figma", "react", Position.Right, Position.Left),
  edge("figma", "blender", Position.Top, Position.Left),
  edge("blender", "unity", Position.Right, Position.Left),
  edge("blender", "photoshop", Position.Top, Position.Left),
  edge("unity", "photoshop", Position.Top, Position.Bottom),
  edge("photoshop", "illustrator", `${Position.Right}-a`, `${Position.Left}-a`),
  edge("illustrator", "photoshop", `${Position.Left}-b`, `${Position.Right}-b`),
  edge("illustrator", "premiere", `${Position.Right}-a`, `${Position.Left}-a`),
  edge("premiere", "illustrator", `${Position.Left}-b`, `${Position.Right}-b`),
  edge("unity", "react", Position.Right, Position.Top),
  edge("premiere", "react", Position.Bottom, Position.Top),
  edge("react", "redux", `${Position.Right}-a`, `${Position.Left}-a`),
  edge("redux", "react", `${Position.Left}-b`, `${Position.Right}-b`),
  edge("redux", "next", `${Position.Right}-a`, `${Position.Left}-a`),
  edge("next", "redux", `${Position.Left}-b`, `${Position.Right}-b`),
  edge("react", "mp", Position.Bottom, Position.Left),
  edge("mp", "mongodb", Position.Right, Position.Left),
  edge("mongodb", "next", `${Position.Top}-a`, `${Position.Bottom}-a`),
  edge("next", "mongodb", `${Position.Bottom}-b`, `${Position.Top}-b`),
  edge("next", "aws", Position.Right, Position.Left),
  edge("aws", "createbase", Position.Right, Position.Left),
];
