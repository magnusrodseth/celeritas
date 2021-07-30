import MergeSort from "../../../markdown/sorting/merge-sort/MergeSort";

const exercises = [
    {
        name: "Merge Sort",
        description: `
        A merge sort works by recursively dividing an array into n amount of subarrays. 
        Each subarray is considered sorted when it only contains one element.
        Then we repeatedly merge the subarrays to create new 
        and sorted subarrays until there is only one complete and sorted array remaining.
        `,
        markdown: MergeSort,
    }

];

export default exercises