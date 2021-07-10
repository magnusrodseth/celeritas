import React from "react";
import classNames from "../../utils/classNames";
import Cell from "../../utils/algorithms/pathfinding/cell";

interface CellProps {
  className?: string;
  style?: any;
  cell?: Cell;
}

const CellComponent: React.FC<CellProps> = ({ className, style, cell }) => {
  const styles = className || "";

  return <div style={style} className={classNames("rounded-sm", styles)} />;
};

export default CellComponent;