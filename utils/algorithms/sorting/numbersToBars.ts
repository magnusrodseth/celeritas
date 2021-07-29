import Bar from "./bar";

/**
 * Converts an array of numbers to an array of Bar objects.
 **/
const numbersToBars = (array: number[]): Bar[] => array.map((value: number) => new Bar(value));

export default numbersToBars;