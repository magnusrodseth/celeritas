import Heap from "../../markdown/data-structures/heaps/Heap"
import HeapifyIterative from "../../markdown/data-structures/heaps/HeapifyIterative"
import HeapifyRecursive from "../../markdown/data-structures/heaps/HeapifyRecursive"
import PriorityQueueWithHeap from "../../markdown/data-structures/heaps/PriorityQueueWithHeap"

const exercises = [
    {
        name: "Heap from scratch",
        description: `
        An implementation of a heap from scratch.
        In a max heap, the value of every node is greater than or equal to the value of its children.
        `,
        markdown: Heap,
    },
    {
        name: "Heapify array iteratively",
        description: `
        Converts an array of numbers into a max heap in-place iteratively.
        `,
        markdown: HeapifyIterative,
    },
    {
        name: "Heapify array recursively",
        description: `
        Converts an array of numbers into a max heap in-place recursively.
        `,
        markdown: HeapifyRecursive,
    },
    {
        name: "Priority queue with heap",
        description: `
        An implementation of a priority queue using a heap.
        This implementation uses the heap found in the exercise dropdown above.
        `,
        markdown: PriorityQueueWithHeap,
    }
];

export default exercises