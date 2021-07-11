import React, { useEffect, useMemo, useRef, useState } from "react";
import useColumns from "../../hooks/useColumns";
import useResize from "../../hooks/useResize";
import dijkstra from "../../utils/algorithms/pathfinding/dijkstra";
import Grid from "../../utils/algorithms/pathfinding/grid";
import Node from "../../utils/algorithms/pathfinding/node";
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
    const gridWithMaze = new Grid(grid.columns, grid.rows, grid);
    gridWithMaze.reset();

    const randomNode = gridWithMaze.randomNode;

    if (randomNode) {
      // Start maze generation at random node
      gridWithMaze.generateMaze(randomNode);

      // Clear visited nodes for visual effect
      gridWithMaze.clearVisited();
    }

    setGrid(gridWithMaze);
  };

  /**
   * Animates the sequence of visited nodes before finding the shortest path from start to end node.
   **/
  const animateVisualizeShortestPath = (nodesInOrder: Node[]) => {
    for (let i = 0; i < nodesInOrder.length; i++) {
      setTimeout(() => {
        console.log("this runs");

        const copy = new Grid(grid.columns, grid.rows, grid);
        const node = nodesInOrder[i];

        node.isVisited = true;

        copy.grid[node.y][node.x] = node;

        setGrid(copy);
      }, 20 * i);
    }
  };

  const handleVisualizeShortestPath = () => {
    const visitedNodes = dijkstra(grid.grid, grid.startNode, grid.endNode);
    animateVisualizeShortestPath(visitedNodes);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-6" ref={ref}>
      <div className="flex flex-col my-4 justify-center items-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        {/* Visualize button */}
        <Button
          label="Visualize shortest path"
          onClick={handleVisualizeShortestPath}
        />

        {/* Generate random maze button */}
        <Button
          label="Generate random maze"
          onClick={handleGenerateRandomMaze}
        />
      </div>

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
