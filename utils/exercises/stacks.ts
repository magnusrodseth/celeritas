import Stack from "../../markdown/data-structures/stacks/Stack";
import BalancedExpression from "../../markdown/data-structures/stacks/BalancedExpression";
import ReverseString from "../../markdown/data-structures/stacks/ReverseString";

const exercises = [
    {
        name: "Stack from scratch",
        description:
            "An implementation of a stack with the main functionality, including push, pop, peek and is_empty.",
        markdown: Stack,
    },
    {
        name: "Balanced expression",
        description: `
    A method which checks if a string is balanced using a simple stack.
    A string is balanced if the types of brackets line up.`,
        markdown: BalancedExpression,
    },
    {
        name: "Reverse string",
        description: `A method which simply reverses a string using a stack.`,
        markdown: ReverseString,
    },
];

export default exercises