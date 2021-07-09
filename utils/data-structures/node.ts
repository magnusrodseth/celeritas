import { IPosition } from "./tree";

const LEFT = 0
const RIGHT = 1

export default class Node {
    value: number;
    children: Node[];
    parent: Node | null;
    pos: IPosition;
    r: number;

    constructor(value: number) {
        this.value = value;
        this.children = [];
        // Each node keeps track of parent node
        this.parent = null
        // Because this will be a visualized binary tree, we must keep track of position and radius
        this.pos = { x: 0, y: 0 }
        this.r = 20;
    }

    get left() { return this.children[LEFT] }

    set left(node) {
        node.parent = this;
        this.children[LEFT] = node
    }

    get right() { return this.children[RIGHT] }

    set right(node) {
        node.parent = this;
        this.children[RIGHT] = node
    }

    set position(position: { x: number, y: number }) { this.pos = position }

    get position() { return this.pos }

    get radius() { return this.r }
}