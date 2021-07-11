import { useRef } from "react";
import { IPosition } from "../../../types/types";
import getRandomNumberInInterval from "../../getRandomNumberInInterval";

export default class Node {
    private _isWall: boolean = false;
    private _isVisited: boolean = false;
    private _isStart: boolean = false;
    private _isEnd: boolean = false;
    private _isObstacle: boolean = false;
    private _isPath: boolean = false;
    private _neighbors: Node[] = [];
    private _x: number;
    private _y: number;
    private _distance: number = 0;
    private _weight: number = 0;
    private _previous: Node | undefined = undefined;

    constructor({ x, y }: IPosition) {
        this._x = x;
        this._y = y;
    }

    visit() {
        this.isVisited = true;
    }

    /**
     * Determines when we should backtrack when generating a maze.
     * We backtrack when every neighbor's neighbor of `this` cell have been visited.
     * This guarantees a path from start node to end node.
     **/
    shouldBacktrack() {
        return this.neighbors.every(neighbor => neighbor.isVisited)
    }

    /**
     * A cell is available if every neighbor is has 0 other neighbors, except the `previous` cell.
     **/
    isAvailable(previous: Node): boolean {
        for (const neighbor of this.neighbors) {
            if (neighbor != previous && neighbor.isVisited) {
                return false;
            }
        }

        return true;
    }

    // Getters and setters
    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get neighbors(): Node[] {
        return this._neighbors;
    }

    public set neighbors(value: Node[]) {
        this._neighbors = value;
    }

    public get isPath(): boolean {
        return this._isPath;
    }

    public set isPath(value: boolean) {
        this._isPath = value;
    }

    public get isObstacle(): boolean {
        return this._isObstacle;
    }

    public set isObstacle(value: boolean) {
        this._isObstacle = value;
    }

    public get isEnd(): boolean {
        return this._isEnd;
    }

    public set isEnd(value: boolean) {
        this._isEnd = value;
    }

    public get isWall(): boolean {
        return this._isWall;
    }

    public set isWall(value: boolean) {
        this._isWall = value;
    }

    public get isVisited(): boolean {
        return this._isVisited;
    }

    public set isVisited(value: boolean) {
        this._isVisited = value;
    }

    public get isStart(): boolean {
        return this._isStart;
    }

    public set isStart(value: boolean) {
        this._isStart = value;
    }

    public get distance(): number {
        return this._distance;
    }
    public set distance(value: number) {
        this._distance = value;
    }

    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }

    public get previous(): Node | undefined {
        return this._previous;
    }
    public set previous(value: Node | undefined) {
        this._previous = value;
    }
}