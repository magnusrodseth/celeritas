import {
  HomeIcon as StartIcon,
  LocationMarkerIcon as EndIcon,
  FireIcon as ObstacleIcon,
} from "@heroicons/react/outline";
import React from "react";
import classNames from "../../utils/classNames";
import CellComponent from "./CellComponent";

interface PathfindingInformationProps {}

const PathfindingInformation: React.FC<PathfindingInformationProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center">
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
          <CellComponent
            className={classNames(
              "w-8 h-8 bg-gray-600 border border-gray-800",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Wall Node</span>
        </div>

        {/* Unvisited Node */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <CellComponent
            className={classNames(
              "w-8 h-8 bg-gray-200 border border-gray-400",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Unvisited Node</span>
        </div>

        {/* Path Node */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <CellComponent
            className={classNames(
              "w-8 h-8 bg-yellow-400 border border-gray-900",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Path Node</span>
        </div>

        {/* Visited Node */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <CellComponent
            className={classNames(
              "w-8 h-8 bg-indigo-300 border border-indigo-900",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Visited Node</span>
        </div>
      </div>

      <div>
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
        >
          Generate random maze
        </button>
      </div>
    </div>
  );
};

export default PathfindingInformation;
