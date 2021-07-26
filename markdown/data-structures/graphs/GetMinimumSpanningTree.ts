const markdown = `
~~~python

import heapq
from typing import Dict, List, Set
import random

# Definition of _Node and _Edge classes
...


# Note that this graph is an undirected, weighted graph.
class WeightedGraph:
    # Holds key: label, value: _Node object
    __nodes: Dict[str, _Node] = {}

    __adjacency_list: Dict[_Node, List[_Edge]] = {}

    # All existing method are still implemented, but left out for increased readability
    ...

    def get_minimum_spanning_tree(self):
        tree: WeightedGraph = WeightedGraph()

        edges = []
        heapq.heapify(edges)

        if len(self.__nodes) == 0:
            return tree

        start_node: _Node = random.choice(list(self.__nodes.values()))
        current_connections = self.__adjacency_list.get(start_node)
        for edge in current_connections:
            edges.append((edge.weight, edge))
            heapq.heapify(edges)

        tree.add_node(start_node.label)

        if len(edges) == 0:
            return tree

        # As long as our tree doesn't contains all nodes in the graph
        while len(tree.__nodes) < len(self.__nodes):
            # Pick edge with minimum weight from the queue
            minimum_edge = edges.pop()
            next_node = minimum_edge.target

            # Continue if the edge is currently connected to a node that exists in the tree
            # in order to prevent a cyclic graph
            if next_node in tree:
                continue

            # Add target node and edge to the tree
            tree.add_node(next_node.label)
            tree.add_edge(minimum_edge.source.label, next_node.label, minimum_edge.weight)

            # Add all edges connected to the target node to the priority queue.
            # We are only interested in the edges that connect to an unvisited node.
            next_connections = self.__adjacency_list[next_node]
            for edge in next_connections:
                if edge.target not in tree:
                    edges.append((edge.weight, edge))
                    heapq.heapify(edges)

        return tree
~~~
`

export default markdown