import DirectedGraph from "../../../markdown/data-structures/graphs/DirectedGraph"
import WeightedGraph from "../../../markdown/data-structures/graphs/WeightedGraph"
import GetMinimumPath from "../../../markdown/data-structures/graphs/GetMinimumPath"
import GetMinimumSpanningTree from "../../../markdown/data-structures/graphs/GetMinimumSpanningTree"
import HasCycle from "../../../markdown/data-structures/graphs/HasCycle"

const exercises = [
    {
        name: "Directed graph from scratch",
        description: `
        An implementation of a directed graph from scratch.
        Supports topological sorting of nodes, and checks if a graph is cyclic using depth-first traversal.
        `,
        markdown: DirectedGraph,
    }, {
        name: "Undirected, weighted graph from scratch",
        description: `
        An implementation of an undirected, weighted graph from scratch.
        Each node is connected with unidirectional edges which can be weighted or unweighted.
        `,
        markdown: WeightedGraph,
    }, {
        name: "Get minimum path using Dijkstra's algorithm",
        description: `
        A snippet of the WeightedGraph class with the implementation of Dijkstra's algorithm.
        `,
        markdown: GetMinimumPath,
    }, {
        name: "Undirected graph has cycle",
        description: `
        This method checks if the undirected graph has a cycle. 
        This requires a different algorithm than in a directed graph.
        `,
        markdown: HasCycle,
    }, {
        name: "Get minimum spanning tree using Prim's algorithm",
        description: `
        Finds the minimum spanning tree in a weighted graph using Prim's algorithm.
        `,
        markdown: GetMinimumSpanningTree,
    }
];

export default exercises