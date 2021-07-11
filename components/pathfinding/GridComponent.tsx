import React, { useEffect, useMemo, useRef, useState } from "react";
import useColumns from "../../hooks/useColumns";
import useResize from "../../hooks/useResize";
import Grid from "../../utils/algorithms/pathfinding/grid";
import classNames from "../../utils/classNames";
import Button from "../Button";
import CellComponent from "./NodeComponent";

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

  // Generate responsive grid
  const [grid, setGrid] = useState<Grid>(new Grid(columns, rows));

  // Redraw grid when dimensions change
  useEffect(() => {
    setGrid(new Grid(columns, rows));
  }, [columns, rows]);

  // Event handlers
  const handleGenerateRandomMaze = () => {
    const newGrid = new Grid(columns, rows);

    const randomCell = newGrid.randomNode;

    if (randomCell) {
      newGrid.reset();
      console.log(
        newGrid.grid.filter((row) => row.filter((cell) => cell.isWall))
      );
      newGrid.generateMaze(randomCell);
    }

    setGrid(newGrid);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-6" ref={ref}>
      <div className="flex flex-col my-4 justify-center items-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        {/* Find shortest path button */}
        <Button label="Find shortest path" />

        {/* Generate random maze button */}
        <Button
          label="Generate random maze"
          onClick={handleGenerateRandomMaze}
        />
      </div>

      {/* Only render when grid is defined */}
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
                node={cell}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default GridComponent;
