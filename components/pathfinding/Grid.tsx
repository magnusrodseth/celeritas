import React, { useEffect, useRef, useState } from "react";
import {
  PIXEL_WIDTH_LARGE,
  PIXEL_WIDTH_MEDIUM,
  PIXEL_WIDTH_SMALL,
} from "../../constants";
import useResize from "../../hooks/useResize";
import classNames from "../../utils/classNames";
import Cell from "./Cell";

interface GridProps {
  cols: number;
  rows: number;
}

const Grid: React.FC<GridProps> = ({ cols, rows }) => {
  const rowArray = Array.from({ length: rows });

  const ref = useRef<HTMLDivElement>(null);

  // Calculate current width and height with custom hook
  const { width, height } = useResize(ref);

  const [columns, setColumns] = useState(cols);

  useEffect(() => {
    // Determine size of responsive grid
    if (width < PIXEL_WIDTH_SMALL) {
      setColumns(10);
    } else if (width >= PIXEL_WIDTH_SMALL && width < PIXEL_WIDTH_MEDIUM) {
      setColumns(13);
    } else if (width >= PIXEL_WIDTH_MEDIUM && width < PIXEL_WIDTH_LARGE) {
      setColumns(18);
    } else if (width >= PIXEL_WIDTH_LARGE) {
      setColumns(28);
    }
  }, [width]);

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
