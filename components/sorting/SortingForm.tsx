import React, { useEffect, useState } from "react";
import {
  DEFAULT_MIN_VALUE,
  DEFAULT_MAX_VALUE,
  DEFAULT_NUMBER_OF_ELEMENTS,
} from "../../constants";
import classNames from "../../utils/classNames";
import Button from "../Button";

interface SortingFormProps {
  minValue: number;
  maxValue: number;
  numberOfElements: number;
  handleMinValue: (event: any) => void;
  handleMaxValue: (event: any) => void;
  handleNumberOfElements: (event: any) => void;
  handleSubmit: (event: any) => void;
}

const SortingForm: React.FC<SortingFormProps> = ({
  minValue,
  maxValue,
  numberOfElements,
  handleMinValue,
  handleMaxValue,
  handleNumberOfElements,
  handleSubmit,
}) => {
  return (
    <div className="my-8 mx-4 flex flex-col justify-center items-center">
      <form className="flex flex-col justify-center items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="tracking-wider">
          <label
            className="block text-gray-900 text-sm font-bold mb-2"
            htmlFor="min-value"
          >
            Minimum value
          </label>
          <input
            className={classNames(
              "shadow-sm hover:shadow-md transition transform duration-500 ease-in-out",
              "appearance-none border rounded py-2 px-3 text-gray-800",
              "leading-tight focus:outline-none focus:shadow-outline"
            )}
            id="min-value"
            min={0}
            type="number"
            placeholder="Minimum value"
            required
            value={minValue}
            onChange={handleMinValue}
          />
        </div>

        <div className="tracking-wider">
          <label
            className="block text-gray-900 text-sm font-bold mb-2"
            htmlFor="max-value"
          >
            Maximum value
          </label>
          <input
            className={classNames(
              "shadow-sm hover:shadow-md transition transform duration-500 ease-in-out",
              "appearance-none border rounded py-2 px-3 text-gray-800",
              "leading-tight focus:outline-none focus:shadow-outline"
            )}
            id="max-value"
            type="number"
            placeholder="Maximum value"
            required
            value={maxValue}
            onChange={handleMaxValue}
          />
        </div>

        <div className="tracking-wider bg-white flex flex-col items-center justify-center">
          <label
            className="block text-gray-00 text-sm font-bold mb-2"
            htmlFor="number-of-elements"
          >
            Number of elements
          </label>
          <div className="flex flex-row items-center h-9">
            <input
              className={classNames(
                "transition transform duration-500 ease-in-out",
                "rounded-lg overflow-hidden appearance-none bg-gray-300"
              )}
              id="number-of-elements"
              type="range"
              placeholder="Number of elements"
              min={1}
              max={2 * DEFAULT_NUMBER_OF_ELEMENTS}
              required
              defaultValue={DEFAULT_NUMBER_OF_ELEMENTS}
              onChange={handleNumberOfElements}
            />
            <span className="ml-4 w-5">{numberOfElements}</span>
          </div>
        </div>
        <div>
          <Button type="submit" onClick={handleSubmit} label="Sort" />
        </div>
      </form>
    </div>
  );
};

export default SortingForm;
