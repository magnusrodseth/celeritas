const markdown = `
~~~python

import heapq
from typing import Dict, List, Set
import random

class _Node:
    __label: str

    def __init__(self, label: str):
        self.__label = label

    def __str__(self):
        return self.__label

    @property
    def label(self):
        return self.__label


class _Edge:
    __source: _Node
    __target: _Node
    _weight: int

    def __init__(self, source: _Node, target: _Node, weight: int):
        self.__source = source
        self.__target = target
        self._weight = weight

    def __str__(self):
        return f'{self.__source} -> {self.__target}'

    @property
    def source(self):
        return self.__source

    @property
    def target(self):
        return self.__target

    @property
    def weight(self):
        return self._weight


# Note that this graph is an undirected, weighted graph.
class WeightedGraph:
    # Holds key: label, value: _Node object
    __nodes: Dict[str, _Node] = {}

    __adjacency_list: Dict[_Node, List[_Edge]] = {}

    def add_node(self, label: str):
        """
        Adds a node to the graph.
        :param label: is the label of the node.
        """
        node = None

        if label not in self.__nodes:
            node = _Node(label)
            self.__nodes[label] = node

        # This means that the label is already in self.__nodes
        if node is None:
            return

        if node not in self.__adjacency_list:
            self.__adjacency_list[node] = []

    def add_edge(self, first: str, second: str, weight: int = 0):
        """
        Adds a undirected, potentially weighted, edge between two nodes in the graph.
        :param first: is the label of the first node.
        :param second: is the label of the second node.
        :param weight: is the weight of the edge. Defaults to weight = 0.
        """
        first_node = self.__nodes.get(first)
        if first_node is None:
            raise AttributeError("First node is None.")

        second_node = self.__nodes.get(second)
        if second_node is None:
            raise AttributeError("Second node is None.")

        # Because this graph is undirected, the edge relationship must go both ways.
        self.__adjacency_list.get(first_node).append(_Edge(first_node, second_node, weight))
        self.__adjacency_list.get(second_node).append(_Edge(second_node, first_node, weight))


    def has_cycle(self) -> bool:
        visited: Set[_Node] = set()
        for node in self.__nodes.values():
            if (node not in visited) and (self.__has_cycle(visited, None, node)):
                return True
        return False

    def __has_cycle(self, visited: Set[_Node], previous: _Node or None, node: _Node) -> bool:
        visited.add(node)

        connections = self.__adjacency_list.get(node)
        for edge in connections:
            # In this case, this target node is the one we came from
            if edge.target == previous:
                continue

            if edge.target in visited:
                return True

            # Pass current node as previous to detect potential cycle
            if self.__has_cycle(visited, node, edge.target):
                return True

        # In this case, we did not find a cycle
        return False


    def print(self):
        """
        Prints the nodes in the graph and their relationships.
        Note that a Graph class should not usually concern itself with printing the content.
        However, for this example, this method is added to the class, for simplicity.
        """

        # Should look like this:
        # A is connected with [B, C]
        # B is connected with [A]
        for node in self.__adjacency_list.keys():
            connections = self.__adjacency_list[node]
            print(f'{node} is connected with: ', end="")
            for connection in connections:
                print(f'{connection}', end=" | ")
            print()
~~~
`

export default markdown