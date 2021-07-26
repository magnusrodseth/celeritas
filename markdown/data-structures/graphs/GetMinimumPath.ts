const markdown = `
~~~python

import heapq
from typing import Dict, List, Set
import random


class Path:
    __nodes: List[str] = []

    def add(self, node: str):
        self.__nodes.append(node)

    def __str__(self):
        for label in self.__nodes:
            print(label)


# Definition of _Node and _Edge classes
...


# Note that this graph is an undirected, weighted graph.
class WeightedGraph:
    # Holds key: label, value: _Node object
    __nodes: Dict[str, _Node] = {}

    __adjacency_list: Dict[_Node, List[_Edge]] = {}

    # All existing method are still implemented, but left out for increased readability
    ...

    def get_shortest_path(self, source: str, target: str) -> Path:
        """
        Calculates the shortest distance between two nodes using Dijkstra's algorithm.
        :param source: is the label of the source node.
        :param target: is the label of the target node.
        :return: the shortest distance between source and target node.
        """
        source_node = self.__nodes.get(source)
        if source_node is None:
            raise AttributeError("Source node does not exist.")

        target_node = self.__nodes.get(target)
        if target_node is None:
            raise AttributeError("Target node does not exist.")

        # Holds the shortest distance from start node to the current node
        # Initially populate with each node and a distance of Infinity
        distances: Dict[_Node, float] = dict(
            (node, float('inf')) for node in self.__nodes.values()
        )
        # Set distance equals 0 to find the source node
        distances[source_node] = 0

        # Holds all visited nodes
        visited: Set[_Node] = set()

        # Holds the relationship between the current node and its previous node with shortest distance
        # Initially populate with each node and previous node = None
        previous_nodes: Dict[_Node, _Node or None] = {}

        priority_queue = []
        heapq.heapify(priority_queue)

        priority_queue.append((distances[source_node], source_node))
        heapq.heapify(priority_queue)

        while len(priority_queue) > 0:
            current: _Node = priority_queue.pop()[1]
            visited.add(current)

            # Visit unvisited neighbors
            for edge in self.__adjacency_list[current]:
                if edge.target in visited:
                    continue

                # Calculate distance to unvisited neighbor based on source node and current node
                distance = distances[current] + edge.weight

                # New distance is smaller than previous distance
                if distance < distances[edge.target]:
                    distances[edge.target] = distance

                    # Set next node's previous node to be the current node
                    previous_nodes[edge.target] = current

                    priority_queue.append((distance, edge.target))
                    heapq.heapify(priority_queue)

        return self.__build_path(target_node, previous_nodes)

    def __build_path(self, target_node: _Node, previous_nodes: Dict[_Node, _Node]) -> Path:
        # Initially populate the stack with the target node
        stack: List[_Node] = [target_node]
        previous = previous_nodes.get(target_node)

        while previous:
            stack.append(previous)
            previous = previous_nodes.get(previous)

        path = Path()
        while len(stack) > 0:
            path.add(stack.pop().label)

        return path
~~~
`

export default markdown