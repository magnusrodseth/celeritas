import React, { useEffect, useState } from "react";
import ExerciseCollection from "../../components/ExerciseCollection";
import Jumbotron from "../../components/Jumbotron";
import BarChart from "../../components/sorting/BarChart";
import SortingForm from "../../components/sorting/SortingForm";
import {
  DEFAULT_MIN_VALUE,
  DEFAULT_MAX_VALUE,
  DEFAULT_NUMBER_OF_ELEMENTS,
} from "../../constants";
import Bar from "../../utils/algorithms/sorting/bar";
import numbersToBars from "../../utils/algorithms/sorting/numbersToBars";
import getRandomArrayInInterval from "../../utils/getRandomArrayInInterval";
import exercises from "../../utils/exercises/sorting/mergeSort";

const MergeSort = () => {
  // States
  const [minValue, setMinValue] = useState(DEFAULT_MIN_VALUE);
  const [maxValue, setMaxValue] = useState(DEFAULT_MAX_VALUE);
  const [numberOfElements, setNumberOfElements] = useState(
    DEFAULT_NUMBER_OF_ELEMENTS
  );
  const [array, setArray] = useState(
    numbersToBars(
      getRandomArrayInInterval(minValue, maxValue, numberOfElements)
    )
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
  const handleNumberOfElements = (event: any) => {
    const value = event.currentTarget.valueAsNumber;
    setNumberOfElements(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  // This is used to update the number of elements displayed
  useEffect(() => {
    setNumberOfElements(numberOfElements);
    setArray(
      numbersToBars(
        getRandomArrayInInterval(minValue, maxValue, numberOfElements)
      )
    );
  }, [minValue, maxValue, numberOfElements]);

  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Merge Sort"
        description={`
        Recursively splits array into subarrays until the subarrays cannot be split any more.
        The subarrays are then merged in order to create the sorted array.
        Requires more memory allocation. A divide-and-conquer algorithm.
        `}
      />

      {/* <div className="flex flex-col justify-center items-center w-screen">
        <div className="my-4 w-7/12 flex flex-col space-y-4">
          <h1 className="text-center text-2xl font-mono">
            Merge Sort Visualization
          </h1>

          <p>
            Use the options below to configure the merge sort. The algorithm is
            fit for larger sized arrays.
          </p>
        </div>
      </div> */}

      {/* <SortingForm
        minValue={minValue}
        maxValue={maxValue}
        numberOfElements={numberOfElements}
        handleMinValue={handleMinValue}
        handleMaxValue={handleMaxValue}
        handleNumberOfElements={handleNumberOfElements}
        handleSubmit={handleSubmit}
      /> */}

      {/* <BarChart array={array} /> */}

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default MergeSort;
