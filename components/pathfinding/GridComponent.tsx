import React, { RefObject } from "react";
import Grid from "../../utils/algorithms/pathfinding/grid";
import classNames from "../../utils/classNames";
import Button from "../Button";
import NodeComponent from "./NodeComponent";

interface GridProps {
  ref: RefObject<HTMLDivElement>;
  handleNewGrid: () => void;
  handleGenerateRandomMaze: () => void;
  handleVisualizeShortestPath: () => void;
  grid: Grid;
}

// eslint-disable-next-line react/display-name
const GridComponent = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      handleNewGrid,
      handleGenerateRandomMaze,
      handleVisualizeShortestPath,
      grid,
    },
    ref
  ) => {
    return (
      <div className="flex flex-col justify-center items-center mb-6" ref={ref}>
        <div className="flex flex-col my-4 justify-center items-center space-y-4 md:flex-row md:space-x-2 md:space-y-0">
          {/* New grid button */}
          <Button label="New grid" onClick={handleNewGrid} />

          {/* Generate random maze button */}
          <Button
            label="Generate random maze"
            onClick={handleGenerateRandomMaze}
          />

          {/* Visualize button */}
          <Button
            label="Visualize shortest path"
            onClick={handleVisualizeShortestPath}
          />
        </div>

        {grid.grid.map((row, index) => {
          return (
            <div
              key={index}
              className={classNames(
                "flex flex-row justify-center items-center"
              )}
            >
              {row.map((cell, index) => (
                <NodeComponent
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
  }
);

export default GridComponent;
