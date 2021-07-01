const markdownContent = `
~~~python

from typing import List


def is_balanced(expression: str) -> bool:
    """
    Checks if a string is balanced.
    A string is balanced if the types of brackets line up.

    :param expression: is the expression to evaluate.
    :raise AttributeError: if the expression is None.
    :return: a boolean value determining if the string is balanced.
    """
    if expression is None:
        raise AttributeError("Expression cannot be None.")

    bracket_map = {
        "(": ")",
        "[": "]",
        "{": "}",
        "<": ">"
    }

    stack: List[str] = []
    balanced: bool = False

    for letter in expression:
        # We have a matching opening bracket
        if letter in bracket_map:
            stack.append(letter)

        if len(stack) >= 1:
            previous = peek(stack)

            # We have a matching ending bracket
            if bracket_map[previous] == letter:
                popped = stack.pop(len(stack) - 1)
                balanced = True
            else:
                balanced = False

    return balanced


def peek(stack: List[str]) -> str:
    """
    Peeks the top item in the stack,

    :param stack: is the stack to peek.
    :return: is the item at the top of the stack, without removing it.
    """
    return stack[len(stack) - 1]
~~~~
`

export default markdownContent