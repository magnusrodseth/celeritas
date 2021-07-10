import getRandomNumberInInterval from "../../getRandomNumberInInterval";
import Cell from "./cell";

export default class Grid {
    columns: number;
    rows: number;
    grid: Cell[][];
    visitedStack: Cell[] = []

    constructor(columns: number, rows: number) {
        this.columns = columns;
        this.rows = rows;
        this.grid = []

        this.generateGrid();
        this.setNeighbors();
    }

    generateGrid(): void {
        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = []
            for (let col = 0; col < this.columns; col++) {
                const cell = new Cell({ x: col, y: row })
                this.grid[row][col] = cell;
            }
        }
    }

    generateMaze(cell: Cell) {
        // Fill grid will only walls if it is completely void of any walls
        if (this.grid.every(row => row.every(cell => !cell.isWall))) {
            this.fillGridWithWalls();
        }

        // The current cell has no unvisited neighbors
        if (cell.shouldBacktrack()) {

            // Pop cells of the stack and check if they have unvisited neighbors
            while (this.visitedStack.length > 0) {
                const cell = this.visitedStack.pop();

                if (cell == undefined) {
                    return
                }

                for (const neighbor of cell.neighbors) {
                    if (!neighbor.isVisited && neighbor.isWall) {
                        this.generateMaze(neighbor)
                    }
                }
            }
        }

        this.visit(cell)
        cell.isWall = false;

        for (const neighbor of cell.neighbors) {
            if (!neighbor.isVisited && neighbor.isAvailable(cell)) {
                this.visit(neighbor)

                this.generateMaze(neighbor)
            }
        }
    }

    private fillGridWithWalls() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                this.grid[row][col].isWall = true;
            }
        }
    }

    visit(cell: Cell) {
        cell.visit()

        // Add cell to stack to facilitate for backtracking later
        this.visitedStack.push(cell)
    }

    private setNeighbors() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                const cell = this.grid[row][col];

                // Find and set neighbors per cell
                const neighbors = this.getCellNeighbors(cell)
                cell.neighbors = neighbors
            }
        }
    }

    getCellNeighbors(cell: Cell): Cell[] {
        const neighbors: Cell[] = []

        for (let col = cell.x - 1; col <= cell.x + 1; col++) {
            for (let row = cell.y - 1; row <= cell.y + 1; row++) {
                // Skip diagonal neighbor cells above current cell
                if ((row == cell.y - 1 && (col == cell.x - 1 || col == cell.x + 1))) {
                    continue;
                }
                // Skip diagonal neighbor cells below current cell
                if ((row == cell.y + 1 && (col == cell.x - 1 || col == cell.x + 1))) {
                    continue;
                }
                // Currently visiting the cell. Do nothing.
                if (row == cell.y && col == cell.x) {
                    continue;
                }
                // Row is out of bounds
                if (row < 0 || row > this.grid.length - 1) {
                    continue;
                }
                // Col is out of bounds
                if (col < 0 || col > this.grid[0].length - 1) {
                    continue;
                }

                // Add neighboring cells inside bounds
                neighbors.push(this.grid[row][col])
            }
        }


        return neighbors;
    }

    get randomCell() {
        // Start at random cell
        const randomRow = getRandomNumberInInterval(0, this.grid.length - 1)
        const randomColumn = getRandomNumberInInterval(0, this.grid[0].length - 1)

        return this.grid[randomRow][randomColumn];
    }

    updateCell(cell: Cell) {
        this.grid[cell.y][cell.x] = cell;
    }
}