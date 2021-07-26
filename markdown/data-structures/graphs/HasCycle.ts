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
~~~
`

export default markdown