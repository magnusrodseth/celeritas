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

  // Generate responsive grid, and only update when columns or rows change
  const grid = new Grid(columns, rows);

  const randomCell = grid.randomCell;

  if (randomCell) {
    grid.generateMaze(randomCell);
  }

  const handleGenerateRandomMaze = () => {
    grid.reset();

    const randomCell = grid.randomCell;

    console.log(randomCell);

    if (randomCell) {
      grid.generateMaze(randomCell);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center" ref={ref}>
      <div className="flex flex-col my-4 justify-center items-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        {/* Find shortest path button */}
        <button
          className={classNames(
            "mx-4 inline-flex items-center justify-center px-6 py-2 border border-transparent",
            "text-base font-medium rounded-md text-gray-900 bg-yellow-300 hover:bg-indigo-200",
            "transition transform duration-500 ease-in-out uppercase tracking-wider hover:-translate-y-1"
          )}
        >
          Find shortest path
        </button>

        {/* Generate random maze button */}
        <button
          className={classNames(
            "mx-4 inline-flex items-center justify-center px-6 py-2 border border-transparent",
            "text-base font-medium rounded-md text-gray-900 bg-yellow-300 hover:bg-indigo-200",
            "transition transform duration-500 ease-in-out uppercase tracking-wider hover:-translate-y-1"
          )}
          onClick={handleGenerateRandomMaze}
        >
          Generate random maze
        </button>
      </div>

      {/* Only render when grid is defined */}
      {grid &&
        grid.grid.map((row, index) => {
          return (
            <div
              key={index}
              className={classNames(
                "flex flex-row justify-center items-center"
              )}
            >
              {row &&
                row.map((cell, index) => (
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
