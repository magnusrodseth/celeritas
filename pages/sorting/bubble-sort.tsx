import React, { useEffect, useState } from "react";
import ExerciseCollection from "../../components/ExerciseCollection";
import Jumbotron from "../../components/Jumbotron";
import BarChart from "../../components/sorting/BarChart";
import SortingForm from "../../components/sorting/SortingForm";
import {
  DEFAULT_MIN_VALUE,
  DEFAULT_MAX_VALUE,
  DEFAULT_NUMBER_OF_ELEMENTS,
  DELAY_MILLISECONDS,
} from "../../constants";
import Bar from "../../utils/algorithms/sorting/bar";
import numbersToBars from "../../utils/algorithms/sorting/numbersToBars";
import getRandomArrayInInterval from "../../utils/getRandomArrayInInterval";
import swap from "../../utils/swap";
import exercises from "../../utils/exercises/sorting/bubbleSort";

const BubbleSort = () => {
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
    animateBubbleSort(array);
    event.preventDefault();
  };

  // Animation
  const animateBubbleSort = (array: Bar[]) => {
    for (let i = 0; i <= array.length; i++) {
      const copy = array.map((bar) => bar);

      // Execute the bubble sort
      for (let i = 0; i < copy.length - 1; i++) {
        for (let j = 0; j < copy.length - i - 1; j++) {
          setTimeout(() => {
            if (copy[j].value > copy[j + 1].value) {
              swap(j + 1, j, copy);
            }
            array[i].sorting = true;

            setArray(copy);
          }, DELAY_MILLISECONDS * i);
        }
      }
    }
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
        title="Bubble Sort"
        description={`
        Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. 
        The pass through the list is repeated until the list is sorted.
        Performs poorly in real world use.
        `}
      />

      <div className="flex flex-col justify-center items-center w-screen">
        <div className="my-4 w-7/12 flex flex-col space-y-4">
          <h1 className="text-center text-2xl font-mono">
            Bubble Sort Visualization
          </h1>

          <p>
            Use the options below to configure the bubble sort. Please note that
            - as mentioned above - bubble sort performs poorly in real world
            use, and{" "}
            <strong>
              will take a very long time to sort any array with number of
              elements greater than approximately 50
            </strong>
            .
          </p>
        </div>
      </div>

      <SortingForm
        minValue={minValue}
        maxValue={maxValue}
        numberOfElements={numberOfElements}
        handleMinValue={handleMinValue}
        handleMaxValue={handleMaxValue}
        handleNumberOfElements={handleNumberOfElements}
        handleSubmit={handleSubmit}
      />

      <BarChart array={array} />

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default BubbleSort;
