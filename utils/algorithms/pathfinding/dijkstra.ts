import Node from "./node";

const dijkstra = (grid: Node[][], source: Node, target: Node) => {
    // This array keeps track of unvisited nodes
    const unvisitedNodes: Node[] = getAllNodes(grid);

    // This array keeps track of the visited nodes
    const visitedNodes: Node[] = []

    // Initialize all node values to Infinity
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            grid[row][col].distance = Infinity
        }
    }

    // Initialize startNode distance to 0, so that it will be picked first
    source.distance = 0

    // While we haven't inspected all the nodes
    while (unvisitedNodes.length > 0) {
        // Sort nodes by ascending distance
        sortNodesByDistance(unvisitedNodes)

        // The closest node will always be the first item in this sorted list
        const current = unvisitedNodes.shift()

        if (current) {
            // Skip the current node if it is a wall
            if (current.isWall) {
                continue;
            }

            // If the current node has distance of Infinity, then
            // there is no path to be found anymore
            if (current.distance == Infinity) {
                return visitedNodes;
            }

            // current.isVisited = true;

            // Add the node with the shortest path
            visitedNodes.push(current)
            updateNeighbors(current)
        }

        // We have found the shortest path
        if (current == target) {
            break;
        }
    }


    return visitedNodes;
}

/**
 * Sort nodes by ascending distance.
 **/
const sortNodesByDistance = (nodes: Node[]) => {
    nodes.sort((first: Node, second: Node) => first.distance - second.distance)
}

/**
 * Updates a given node's neighbors distance value.
 **/
const updateNeighbors = (node: Node) => {
    for (const neighbor of node.neighbors) {
        // Because this is in a grid where each node is 1 x 1,
        // the distance from one node to another is always 1.
        // Note that if the length between each node was variable, 
        // then we would have to implement a more advanced distance calculation.
        neighbor.distance = node.distance + 1
    }
}

/**
 * Flattens a two-dimensional array of nodes to a one-dimensional array of nodes.
 **/
const getAllNodes = (grid: Node[][]) => {
    const nodes = []

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            nodes.push(grid[row][col])
        }
    }

    return nodes;
}

export default dijkstra