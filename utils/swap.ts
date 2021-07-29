import { DELAY_MILLISECONDS } from "../constants";
import Bar from "./algorithms/sorting/bar";

/**
  * Swaps two values in an array.
  **/
const swap = (first: number, second: number, array: Bar[]) => {
    const firstValue = array[first];
    array[first] = array[second];
    array[second] = firstValue;
};

export default swap;