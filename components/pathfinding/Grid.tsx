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
  columns: number;
  rows: number;
}

const Grid: React.FC<GridProps> = ({ columns, rows }) => {
  const rowArray = Array.from({ length: rows });
  const columnArray = Array.from({ length: columns });

  const ref = useRef<HTMLDivElement>(null);

  // Calculate current width and height with custom hook
  const { width, height } = useResize(ref);

  const [numberOfColumns, setNumberOfColumns] = useState(columns);

  useEffect(() => {
    if (width >= PIXEL_WIDTH_SMALL && width < PIXEL_WIDTH_MEDIUM) {
      setNumberOfColumns(13);
    } else if (width >= PIXEL_WIDTH_MEDIUM && width < PIXEL_WIDTH_LARGE) {
      setNumberOfColumns(18);
    } else if (width >= PIXEL_WIDTH_LARGE) {
      setNumberOfColumns(28);
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
            className={classNames(
              "flex flex-row justify-center items-center m-0.5"
            )}
          >
            {Array.from({ length: numberOfColumns }).map((column, index) => (
              <Cell
                key={index}
                className={classNames(
                  "w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 m-0.5 bg-gray-200"
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
