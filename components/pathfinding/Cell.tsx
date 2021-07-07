import React from "react";
import classNames from "../../utils/classNames";

interface CellProps {
  className?: string;
}

const Cell: React.FC<CellProps> = ({ className }) => {
  const styles = className || "";
  return <div className={classNames("rounded-sm w-8 h-8", styles)} />;
};

export default Cell;
