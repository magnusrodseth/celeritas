import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import BarChart from "../../components/sorting/BarChart";
import SortingForm from "../../components/sorting/SortingForm";
import {
  DEFAULT_MIN_VALUE,
  DEFAULT_MAX_VALUE,
  DEFAULT_NUMBER_OF_ELEMENTS,
} from "../../constants";
import getRandomArrayInInterval from "../../utils/sorting/getRandomArrayInInterval";

const BubbleSort = () => {
  // States
  const [minValue, setMinValue] = useState(DEFAULT_MIN_VALUE);
  const [maxValue, setMaxValue] = useState(DEFAULT_MAX_VALUE);
  const [numberOfElements, setNumberOfElements] = useState(
    DEFAULT_NUMBER_OF_ELEMENTS
  );
  const [array, setArray] = useState(
    getRandomArrayInInterval(minValue, maxValue, numberOfElements)
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
    // Don't reload page
    event.preventDefault();
  };

  // This is used to update the number of elements displayed
  useEffect(() => {
    setNumberOfElements(numberOfElements);
    setArray(getRandomArrayInInterval(minValue, maxValue, numberOfElements));
  }, [minValue, maxValue, numberOfElements]);

  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Bubble Sort"
        description={`
        Exercitationem illo id aspernatur quia porro nam expedita natus.
        Et nihil autem rerum voluptatem sequi est.`}
      />

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
    </div>
  );
};

export default BubbleSort;
