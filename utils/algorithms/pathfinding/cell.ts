import { IPosition } from "../../../types/types";
import getRandomNumberInInterval from "../../sorting/getRandomNumberInInterval";

export default class Cell {
    isWall: boolean = false;
    isVisited: boolean = false;
    isStart: boolean = false;
    isEnd: boolean = false;
    isObstacle: boolean = false;
    isPath: boolean = false
    neighbors: Cell[] = [];
    x: number;
    y: number;

    constructor({ x, y }: IPosition) {
        this.x = x;
        this.y = y;

        for (let col = -1; col < 2; col++) {
            for (let row = -1; row < 2; row++) {
                this.neighbors.push()
            }
        }
    }

    visit() {
        this.isVisited = true;

        const randomX = getRandomNumberInInterval(-1, 1);
        const randomY = getRandomNumberInInterval(-1, 1);
    }
}