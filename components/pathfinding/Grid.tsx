import React, { useEffect, useRef, useState } from "react";
import {
  PIXEL_WIDTH_LARGE,
  PIXEL_WIDTH_MEDIUM,
  PIXEL_WIDTH_SMALL,
} from "../../constants";
import useColumns from "../../hooks/useColumns";
import useResize from "../../hooks/useResize";
import classNames from "../../utils/classNames";
import Cell from "./Cell";

interface GridProps {
  rows: number;
}

const Grid: React.FC<GridProps> = ({ rows }) => {
  const rowArray = Array.from({ length: rows });

  const ref = useRef<HTMLDivElement>(null);

  // Calculate current width and height with custom hook
  const { width, height } = useResize(ref);

  // Calculate number of columns based on screen width using custom hook
  const columns = useColumns(width);

  return (
    <div
      className="flex flex-col justify-center items-center w-screen my-4"
      ref={ref}
    >
      {rowArray.map((row, index) => {
        return (
          <div
            key={index}
            className={classNames("flex flex-row justify-center items-center")}
          >
            {Array.from({ length: columns }).map((column, index) => (
              <Cell
                key={index}
                className={classNames(
                  "w-8 h-8 bg-gray-200 border border-gray-400"
                )}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
