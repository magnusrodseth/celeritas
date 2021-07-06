// Note that you can use ~~~ instad of ``` to start and stop code blocks in markdown.

const markdownContent = `
~~~python

from queue import Queue


def reverse_queue(queue: Queue) -> Queue:
    """
    Reverses a queue using a stack.

    :param queue: is the queue to be reversed.
    :return: the reversed queue.
    """
    stack = []

    while not queue.empty():
        # Append the first item from queue to top of stack
        stack.append(queue.get())

    while len(stack) > 0:
        queue.put(stack.pop())

    return queue
~~~`

export default markdownContent