import {
  HomeIcon as StartIcon,
  LocationMarkerIcon as EndIcon,
  FireIcon as ObstacleIcon,
} from "@heroicons/react/outline";
import React, { SyntheticEvent, useEffect, useRef } from "react";
import classNames from "../../utils/classNames";
import NodeComponent from "./NodeComponent";

interface PathfindingInformationProps {}

const PathfindingInformation: React.FC<PathfindingInformationProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-4 w-7/12 flex flex-col space-y-4">
        <h1 className="text-center text-2xl font-mono">
          Pathfinding Visualization
        </h1>

        <p>
          Click the <strong>New grid</strong> button to clear the current grid
          and create a new grid.
        </p>

        <p>
          Click the <strong>Generate random maze</strong> button to generate a
          maze using{" "}
          <strong>
            randomized depth-first search with recursive backtracking
          </strong>
          . This guarantees a path from start to end node.
        </p>

        <p>
          Click the <strong>Visualize shortest path</strong> to see a{" "}
          <strong>real-time visualization</strong> of the current pathfinding
          algorithm in action.
        </p>
      </div>
      <div
        className={classNames(
          "flex flex-row flex-wrap justify-center items-center space-x-4 my-4"
        )}
      >
        {/* Start Node */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <StartIcon
            className={classNames(
              "w-8 h-8",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Start Node</span>
        </div>

        {/* End Node */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <EndIcon
            className={classNames(
              "w-8 h-8",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>End Node</span>
        </div>

        {/* Obstacle Node */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <ObstacleIcon
            className={classNames(
              "w-8 h-8",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Obstacle Node</span>
        </div>

        {/* Wall Node */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <NodeComponent
            className={classNames(
              "w-8 h-8 bg-gray-600 border border-gray-800",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Wall Node</span>
        </div>

        {/* Unvisited Node */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <NodeComponent
            className={classNames(
              "w-8 h-8 bg-gray-200 border border-gray-400",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Unvisited Node</span>
        </div>

        {/* Path Node */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <NodeComponent
            className={classNames(
              "w-8 h-8 bg-yellow-400 border border-gray-900",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Path Node</span>
        </div>

        {/* Visited Node */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <NodeComponent
            className={classNames(
              "w-8 h-8 bg-indigo-300 border border-indigo-900",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Visited Node</span>
        </div>
      </div>
    </div>
  );
};

export default PathfindingInformation;
