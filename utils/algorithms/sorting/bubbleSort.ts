import Bar from "./bar";

/**
 * Implementation of the bubble sort algorithm.
 * Note that the standard implementation of this sorting algorithm can be sorted in-place.
 * However, due to animating the bubble sort, this method returns a sorted copy in order to
 * later animate the bubble sort.
 * 
 * @param array is the array to sort
 * @returns a copy of the sorted array.
 **/
const bubbleSort = (array: Bar[]): Bar[] => {
    // Copy the original, unsorted array
    const copy = array.map(bar => bar);

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j].value > array[j + 1].value) {
                swap(j + 1, j, array);
                swap(j + 1, j, copy);
            }
            // No need to sort this items further
            array[i].isSorted = true;
        }
    }

    return copy;
}

/**
 * Swaps two values in an array.
 **/
const swap = (first: number, second: number, array: Bar[]) => {
    const firstValue = array[first];
    array[first] = array[second];
    array[second] = firstValue;
}

export default bubbleSort;