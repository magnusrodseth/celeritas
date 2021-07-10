import getRandomNumberInInterval from "../../getRandomNumberInInterval";
import Cell from "./cell";

export default class Grid {
    columns: number;
    rows: number;
    grid: Cell[][];

    constructor(columns: number, rows: number) {
        this.columns = columns;
        this.rows = rows;
        this.grid = []

        this.generateGrid();
    }

    generateGrid(): void {
        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = []
            for (let col = 0; col < this.columns; col++) {
                this.grid[row][col] = new Cell({ x: col, y: row })
            }
        }
    }

    generateMaze() {
        // Start at random cell
        const randomRow = getRandomNumberInInterval(0, this.grid.length - 1)
        const randomColumn = getRandomNumberInInterval(0, this.grid[0].length - 1)

        const cell = this.grid[randomRow][randomColumn];

        console.log(cell)

        // Visit cell
        if (cell) {
            cell.isVisited = true;
            cell.isWall = true;
        }

    }
}