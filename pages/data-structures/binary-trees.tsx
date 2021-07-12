import React, { useRef, useState } from "react";
import BinaryTreeForm from "../../components/data-structures/BinaryTreeForm";
import BinaryTreeInformation from "../../components/data-structures/BinaryTreeInformation";
import Canvas from "../../components/data-structures/Canvas";
import ExerciseCollection from "../../components/ExerciseCollection";
import exercises from "../../utils/exercises/binaryTrees";
import Jumbotron from "../../components/Jumbotron";
import {
  DEFAULT_MIN_VALUE,
  DEFAULT_MAX_VALUE,
  PIXEL_WIDTH_EXTRA_LARGE,
} from "../../constants";
import useResize from "../../hooks/useResize";
import classNames from "../../utils/classNames";
import getRandomArrayInInterval from "../../utils/getRandomArrayInInterval";

// This constant should not be changed anywhere by the UI.
// Because canvas is quite difficult to achieve responsiveness with,
// I have decided to limit the number of elements.
const NUMBER_OF_ELEMENTS = 10;

const BinaryTrees = () => {
  // States
  const [minValue, setMinValue] = useState(DEFAULT_MIN_VALUE);
  const [maxValue, setMaxValue] = useState(DEFAULT_MAX_VALUE);
  const [array, setArray] = useState<number[]>(
    getRandomArrayInInterval(minValue, maxValue, NUMBER_OF_ELEMENTS)
  );

  // Event handlers
  const handleMinValue = (event: any) => {
    const value = event.currentTarget.valueAsNumber;
    setMinValue(value);
  };
  const handleMaxValue = (event: any) => {
    const value = event.currentTarget.valueAsNumber;
    setMaxValue(value);
  };
  const handleSubmit = (event: any) => {
    // Don't reload page
    event.preventDefault();

    // Set the array to visualize
    setArray(getRandomArrayInInterval(minValue, maxValue, 10));
  };

  // Use ref to determine width and height of client screen
  const ref = useRef<HTMLDivElement>(null);

  // Calculate current width and height with custom hook
  const { width, height } = useResize(ref);

  return (
    <div ref={ref} className="flex flex-col justify-center">
      <Jumbotron
        title="Binary Trees"
        description={`
        Hierarchical data structure, composed of nodes and edges.
        Allows for quick lookup, insertion and deletion of nodes.
        `}
      />

      <div
        className={classNames(
          "flex w-screen flex-col space-y-4 justify-center items-center my-4"
        )}
      >
        {width <= PIXEL_WIDTH_EXTRA_LARGE ? (
          <div className="flex flex-col space-y-3 font-mono text-center">
            <h1 className="text-4xl">Sorry!</h1>
            <p>
              The binary search tree visualization is not supported on this
              screen. The minimum pixel width required is{" "}
              <strong>{PIXEL_WIDTH_EXTRA_LARGE} pixels.</strong>
            </p>
          </div>
        ) : (
          <div
            className={classNames(
              "flex flex-col justify-center items-center",
              "space-y-4"
            )}
          >
            <BinaryTreeInformation />

            {/* Input and generate array */}
            <BinaryTreeForm
              handleSubmit={handleSubmit}
              handleMinValue={handleMinValue}
              handleMaxValue={handleMaxValue}
              minValue={minValue}
              maxValue={maxValue}
            />

            <span className="text-xl font-mono text-center mx-4">
              Your array: [<span>{array.join(", ")}</span>]
            </span>

            {/* 
          Note: These dimensions must stay exactly like this. 
          Canvas cannot be supported on mobile due to problems with dimensions.
        */}
            <Canvas
              width={1600}
              height={600}
              className="border-2 border-indigo-300"
              array={array}
            />
          </div>
        )}
      </div>

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default BinaryTrees;
