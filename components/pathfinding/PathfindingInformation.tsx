import {
  HomeIcon as StartIcon,
  LocationMarkerIcon as EndIcon,
  FireIcon as ObstacleIcon,
} from "@heroicons/react/outline";
import React, { SyntheticEvent, useEffect, useRef } from "react";
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
        {/* Start Cell */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <StartIcon
            className={classNames(
              "w-8 h-8",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Start Cell</span>
        </div>

        {/* End Cell */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <EndIcon
            className={classNames(
              "w-8 h-8",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>End Cell</span>
        </div>

        {/* Obstacle Cell */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <ObstacleIcon
            className={classNames(
              "w-8 h-8",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Obstacle Cell</span>
        </div>

        {/* Wall Cell */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <CellComponent
            className={classNames(
              "w-8 h-8 bg-gray-600 border border-gray-800",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Wall Cell</span>
        </div>

        {/* Unvisited Cell */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <CellComponent
            className={classNames(
              "w-8 h-8 bg-gray-200 border border-gray-400",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Unvisited Cell</span>
        </div>

        {/* Path Cell */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <CellComponent
            className={classNames(
              "w-8 h-8 bg-yellow-400 border border-gray-900",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Path Cell</span>
        </div>

        {/* Visited Cell */}
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <CellComponent
            className={classNames(
              "w-8 h-8 bg-indigo-300 border border-indigo-900",
              "transition transform duration-500 ease-in-out hover:-translate-y-1"
            )}
          />
          <span>Visited Cell</span>
        </div>
      </div>
    </div>
  );
};

export default PathfindingInformation;
