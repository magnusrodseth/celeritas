import React from "react";
import classNames from "../../utils/classNames";
import Cell from "../../utils/algorithms/pathfinding/cell";
import {
  HomeIcon as StartIcon,
  LocationMarkerIcon as EndIcon,
  FireIcon as ObstacleIcon,
} from "@heroicons/react/outline";

interface CellProps {
  className?: string;
  style?: any;
  cell?: Cell;
  onClick?: (event: any) => void;
}

const CellComponent: React.FC<CellProps> = ({
  className,
  style,
  cell,
  onClick,
}) => {
  const styles = className || "";

  return (
    <div
      style={style}
      className={classNames(
        "rounded-sm",
        styles,
        cell && cell.isWall ? "bg-gray-600 border border-gray-800" : ""
      )}
      onClick={onClick}
    >
      {cell && cell.isStart ? <StartIcon /> : null}
    </div>
  );
};

export default CellComponent;
