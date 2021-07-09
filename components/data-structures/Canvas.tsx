import React, { useEffect, useRef } from "react";
import classNames from "../../utils/classNames";
import Tree from "../../utils/data-structures/tree";

interface CanvasProps {
  width?: number;
  height?: number;
  className?: string;
  array: number[];
}

const Canvas = ({ height, width, className, array, ...props }: CanvasProps) => {
  const styles = className || "";

  const ref = useRef<HTMLCanvasElement>(null);

  // Render canvas content if ref is defined
  useEffect(() => {
    if (ref.current) {
      const canvas = ref.current;

      // Clear canvas for re-drawing
      const context = canvas.getContext("2d");
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }

      // Create tree and add items
      const tree = new Tree(canvas);
      array.forEach((item) => {
        tree.insert(item);
      });

      tree.breadthFirstSearch();
    }
  });

  return (
    <canvas
      ref={ref}
      height={height}
      width={width}
      className={classNames(styles)}
      {...props}
    />
  );
};

export default Canvas;
