import React, { useEffect, useRef } from "react";
import useResize from "../../hooks/useResize";
import classNames from "../../utils/classNames";
import getBarHeight from "../../utils/sorting/getBarHeight";

interface BarChartProps {
  array: number[];
}

const BarChart: React.FC<BarChartProps> = ({ array }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate current width and height with custom hook
  const { width, height } = useResize(ref);

  return (
    <div
      className="flex flex-row justify-center items-center w-screen"
      ref={ref}
    >
      {array.map((value, index) => {
        const styles = {
          height: getBarHeight(value),
          marginLeft: "2px",
          marginRight: "2px",
        };

        return (
          <div
            key={index}
            style={styles}
            className={classNames("w-4 bg-yellow-300")}
          />
        );
      })}
    </div>
  );
};

export default BarChart;
