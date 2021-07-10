import Cell from "./cell";

interface Row {
    columns: Cell[]
}

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
        for (let col = 0; col < this.columns; col++) {
            this.grid[col] = []
            for (let row = 0; row < this.rows; row++) {
                this.grid[col][row] = new Cell({ x: col, y: row })
            }
        }
    }
}