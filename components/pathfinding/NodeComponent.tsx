import React from "react";
import classNames from "../../utils/classNames";
import Node from "../../utils/algorithms/pathfinding/node";
import {
  HomeIcon as StartIcon,
  LocationMarkerIcon as EndIcon,
  FireIcon as ObstacleIcon,
} from "@heroicons/react/outline";

interface NodeProps {
  className?: string;
  style?: any;
  node?: Node;
  onClick?: (event: any) => void;
}

const CellComponent: React.FC<NodeProps> = ({
  className,
  style,
  node,
  onClick,
}) => {
  const styles = className || "";

  return (
    <div
      style={style}
      className={classNames(
        "rounded-sm",
        styles,
        node && node.isWall ? "bg-gray-600 border border-gray-800" : ""
      )}
      onClick={onClick}
    >
      {node && node.isStart ? <StartIcon /> : null}
      {node && node.isEnd ? <EndIcon /> : null}
    </div>
  );
};

export default CellComponent;
