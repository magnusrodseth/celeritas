import ArrayQueue from "../../markdown/data-structures/queues/ArrayQueue";
import PriorityQueue from "../../markdown/data-structures/queues/PriorityQueue";
import ReverseQueue from "../../markdown/data-structures/queues/ReverseQueue";
import StackQueue from "../../markdown/data-structures/queues/StackQueue";

const exercises = [
    {
        name: "Array Queue",
        description: `An implementation of a queue using an array.`,
        markdown: ArrayQueue,
    },
    {
        name: "Priority Queue",
        description: `
        A simple implementation of a priority queue of integers in ascending order.
        The sorting happens in the __shift method.
        `,
        markdown: PriorityQueue,
    },
    {
        name: "Reverse Queue",
        description: `Reverses a queue using a stack.`,
        markdown: ReverseQueue,
    },
    {
        name: "Stack Queue",
        description: `An implementation of a queue using two stacks.`,
        markdown: StackQueue,
    },
];

export default exercises