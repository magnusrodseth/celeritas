import React, { useEffect, useRef, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import GridComponent from "../../components/pathfinding/GridComponent";
import PathfindingInformation from "../../components/pathfinding/PathfindingInformation";
import { DEFAULT_ROWS, DELAY_MILLISECONDS } from "../../constants";
import useColumns from "../../hooks/useColumns";
import useResize from "../../hooks/useResize";
import dijkstra from "../../utils/algorithms/pathfinding/dijkstra";
import Grid from "../../utils/algorithms/pathfinding/grid";
import Node from "../../utils/algorithms/pathfinding/node";

const Dijkstra = () => {
  // Used to get reference to screen width div to calculate screen width
  const ref = useRef<HTMLDivElement>(null);

  // Calculate current width and height with custom hook
  const { width, height } = useResize(ref);

  // Calculate number of columns based on screen width using custom hook
  const columns = useColumns(width);

  // Generate responsive grid
  const [grid, setGrid] = useState<Grid>(new Grid(columns, DEFAULT_ROWS));

  // Redraw grid when dimensions change
  useEffect(() => {
    setGrid(new Grid(columns, DEFAULT_ROWS));
  }, [columns]);

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

  const handleVisualizeShortestPath = () => {
    const visitedNodes = dijkstra(grid.grid, grid.startNode, grid.endNode);
    animateVisualizeShortestPath(visitedNodes);
  };

  const handleNewGrid = () => {
    setGrid(new Grid(columns, DEFAULT_ROWS));
  };

  /**
   * Animates the sequence of visited nodes.
   **/
  const animateVisualizeShortestPath = (visitedNodes: Node[]) => {
    for (let i = 0; i < visitedNodes.length; i++) {
      setTimeout(() => {
        const copy = new Grid(grid.columns, grid.rows, grid);
        const node = visitedNodes[i];

        // Visually represent that this node has been visited
        node.isVisited = true;

        copy.grid[node.y][node.x] = node;

        setGrid(copy);
      }, DELAY_MILLISECONDS * i);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Dijkstra's Algorithm"
        description={`
        Finds the shortest path between nodes in a graph.
        Iteratively calculates the distance between current node and neighboring nodes to find the optimal path.`}
      />

      <PathfindingInformation />

      <GridComponent
        ref={ref}
        handleNewGrid={handleNewGrid}
        handleGenerateRandomMaze={handleGenerateRandomMaze}
        handleVisualizeShortestPath={handleVisualizeShortestPath}
        grid={grid}
      />
    </div>
  );
};

export default Dijkstra;
