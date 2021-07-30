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
import exercises from "../../utils/exercises/sorting/selectionSort";

const SelectionSort = () => {
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
    animateSelectionSort(array);
    event.preventDefault();
  };

  // Animation
  const animateSelectionSort = (array: Bar[]) => {
    // TODO: This does not work yet.
    for (let i = 0; i < array.length; i++) {
      const copy = array.map((bar) => bar);
      selectionSort(copy);
    }
  };

  const selectionSort = (array: Bar[]) => {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;

      setTimeout(() => {
        for (let j = i; j < array.length; j++) {
          if (array[j].value < array[minIndex].value) {
            minIndex = j;
          }
          if (array[minIndex].value != array[i].value) {
            swap(i, minIndex, array);
          }
          array[i].sorting = true;
          setArray(array);
        }
      }, DELAY_MILLISECONDS * i);
    }
  };

  /**
   * Swaps two values in an array.
   * Note the difference between the swap method and bubble sort's swap method.
   * Becuase of some wonky UI states, the selection sort only visually sorts correctly when we swap the 
   * values of each Bar object.
   * 
   * @param first the index of the first value
   * @param second the index of the second value
   * @array the array with values to swap
   **/
  const swap = (first: number, second: number, array: Bar[]) => {
    const firstValue = array[first].value;
    array[first].value = array[second].value;
    array[second].value = firstValue;
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
        title="Selection Sort"
        description={`
        A simple sorting algorithm, sometimes useful when memory usage is critical.
        Generally a very slow algorithm for larger arrays.
        Sorts the array in-place, keeping track of a sorted and unsorted sublist within the array.
        `}
      />

      <div className="flex flex-col justify-center items-center w-screen">
        <div className="my-4 w-7/12 flex flex-col space-y-4">
          <h1 className="text-center text-2xl font-mono">
            Selection Sort Visualization
          </h1>

          <p>
            Use the options below to configure the selection sort. Please note
            that - as mentioned above - selection sort performs poorly in real
            world use, and{" "}
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

export default SelectionSort;
