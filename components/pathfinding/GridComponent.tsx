import React, { useRef } from "react";
import useColumns from "../../hooks/useColumns";
import useResize from "../../hooks/useResize";
import Grid from "../../utils/algorithms/pathfinding/grid";
import classNames from "../../utils/classNames";
import CellComponent from "./CellComponent";

interface GridProps {
  rows: number;
}

const GridComponent: React.FC<GridProps> = ({ rows }) => {
  // Used to get reference to screen width div to calculate screen width
  const ref = useRef<HTMLDivElement>(null);

  // Calculate current width and height with custom hook
  const { width, height } = useResize(ref);

  // Calculate number of columns based on screen width using custom hook
  const columns = useColumns(width);

  // Generate responsive
  const grid = new Grid(columns, rows);

  return (
    <div
      className="flex flex-col justify-center items-center w-screen my-4"
      ref={ref}
    >
      {grid.grid.map((row, index) => {
        return (
          <div
            key={index}
            className={classNames("flex flex-row justify-center items-center")}
          >
            {row.map((cell, index) => (
              <CellComponent
                key={index}
                className={classNames(
                  "w-8 h-8 bg-gray-200 border border-gray-400"
                )}
                cell={cell}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default GridComponent;
