import { START_POSITION_Y, AXIS_X, AXIS_Y, INDIGO_300, GRAY_900 } from "../../../constants";
import { IPosition } from "../../../types/types";
import Node from "./node"

export default class Tree {
    /**
     * The root node of the tree.
     **/
    root: Node | null;

    /**
     * Determines the position on the X and Y axis of the root node.
     **/
    startPosition: IPosition;

    /**
     * Allows the nodes to be moved graphically.
     **/
    axisX: number;

    /**
     * Allows the nodes to be moved graphically.
     **/
    axisY: number;

    /**
     * The canvas is used to visualize the tree of nodes.
     **/
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.root = null;
        this.startPosition = { x: canvas.width / 2, y: START_POSITION_Y };
        this.axisX = AXIS_X;
        this.axisY = AXIS_Y;

        this.canvas = canvas;
    }

    /**
     * Calculates the new position of a node.
     * The constant axisX is added or subtracted from the X axis together with the position in Y, 
     * since in this axis less and less distance will move between nodes, while the depth of the tree is greater.
     * On the other hand, the Y axis only adds the constant axisY, 
     * because the distance between the nodes on this axis will always be the same.
     **/
    getPosition(
        { x, y }: IPosition,
        isLeft = false
    ): IPosition {
        return {
            x: isLeft
                ? x - this.axisX + y
                : x + this.axisX - y,
            y: y + this.axisY
        }
    }

    /**
     * Inserts a new node in the tree.
     * The position of the node is changed depending on whether it is a left or right node.
     **/
    insert(value: number): void {
        const node = new Node(value)

        // Tree is empty
        if (this.root == null) {
            // Parent node gets the defined start position
            node.position = this.startPosition

            this.root = node;
            return
        }

        // Tree has a root and potentially children
        let current = this.root

        // Traverse tree and insert node
        while (current != null) {
            if (value == current.value) {
                return
            }
            if (value < current.value) {
                if (current.left == null) {
                    // New node gets the position of the current node
                    node.position = this.getPosition(current.position, true)

                    current.left = node;
                    return
                } else {
                    current = current.left
                }
            }
            else if (value > current.value) {
                if (current.right == null) {
                    // New node gets the position of the current node
                    node.position = this.getPosition(current.position)

                    current.right = node;
                    return
                } else {
                    current = current.right
                }
            }
        }
    }

    breadthFirstSearch() {
        const queue: (Node | null)[] = []

        // Start queue with root Node
        queue.push(this.root)

        while (queue.length !== 0) {
            // Get first Node in queue
            const node = queue.shift()

            if (node) {
                // Get position of deleted Node
                const { x, y } = node.position

                // Calculate random color
                const color = "#" + ((1 << 24) * Math.random() | 0).toString(16)

                if (this.canvas) {
                    const context = this.canvas.getContext("2d")

                    if (context) {
                        // Visualize nodes
                        context.beginPath()
                        context.strokeStyle = INDIGO_300

                        // Draw circle around nodes
                        context.arc(x + 2, y, node.radius, 0, 2 * Math.PI)
                        context.stroke()

                        // Draw node value
                        context.strokeStyle = GRAY_900
                        context.strokeText(node.value.toString(), x - 3, y + 3)

                        node.children.forEach((child: Node) => {
                            const { x: x1, y: y1 } = child.position

                            // Draw a line from parent node to child node and join edges
                            context.beginPath();
                            context.moveTo(x, y + child.radius)
                            context.lineTo(x1, y1 - child.radius)
                            context.strokeStyle = GRAY_900
                            context.stroke()

                            // Add child node to the queue
                            queue.push(child)
                        })
                    }
                }
            }
        }
    }
}