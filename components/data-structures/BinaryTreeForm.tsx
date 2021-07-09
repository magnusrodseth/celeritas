import React from "react";
import classNames from "../../utils/classNames";

interface BinaryTreeFormProps {
  minValue: number;
  maxValue: number;
  handleSubmit: (event: any) => void;
  handleMinValue: (event: any) => void;
  handleMaxValue: (event: any) => void;
}

const BinaryTreeForm: React.FC<BinaryTreeFormProps> = ({
  handleSubmit,
  handleMinValue,
  handleMaxValue,
  minValue,
  maxValue,
}) => {
  return (
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

      <div className="tracking-wider">
        <label
          className="block text-gray-900 text-sm font-bold mb-2"
          htmlFor="submit"
        >
          Generate random array
        </label>
        <button
          className={classNames(
            "w-full shadow-sm hover:shadow-md transition transform duration-500 ease-in-out",
            "appearance-none border rounded py-2 px-3 text-gray-800",
            "leading-tight focus:outline-none focus:shadow-outline bg-yellow-300",
            "hover:bg-indigo-300 uppercase border border-transparent text-base font-medium"
          )}
          id="submit"
          type="submit"
          onClick={handleSubmit}
        >
          Generate
        </button>
      </div>
    </form>
  );
};

export default BinaryTreeForm;
