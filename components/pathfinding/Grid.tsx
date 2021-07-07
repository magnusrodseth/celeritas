import React from "react";
import classNames from "../../utils/classNames";
import Cell from "./Cell";

interface GridProps {
  columns: number;
  rows: number;
}

const Grid: React.FC<GridProps> = ({ columns, rows }) => {
  const rowArray = Array.from({ length: rows });
  const columnArray = Array.from({ length: columns });

  return (
    <div className="flex flex-col justify-center items-center w-screen my-4">
      {rowArray.map((row, index) => (
        <div
          key={index}
          className={classNames(
            "flex flex-row justify-center items-center m-0.5"
          )}
        >
          {columnArray.map((column, index) => (
            <Cell key={index} className={classNames("m-0.5 bg-gray-200")} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
