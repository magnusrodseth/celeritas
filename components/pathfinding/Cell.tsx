import React from "react";
import classNames from "../../utils/classNames";

interface CellProps {
  className?: string;
  style?: any;
}

const Cell: React.FC<CellProps> = ({ className, style }) => {
  const styles = className || "";

  return (
    <div style={style} className={classNames("rounded-sm", styles)} />
  );
};

export default Cell;
